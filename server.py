import os
import sys
import json
import time
import base64
import io
from http.server import HTTPServer, SimpleHTTPRequestHandler
import urllib.parse
from PIL import Image
import numpy as np

# Configure UTF-8 stdout
sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PORT = 8080

CLASS_NAMES = [
    "Cashew anthracnose", "Cashew gumosis", "Cashew healthy", "Cashew leaf miner", "Cashew red rust",
    "Cassava bacterial blight", "Cassava brown spot", "Cassava green mite", "Cassava healthy", "Cassava mosaic",
    "Maize fall armyworm", "Maize grasshoper", "Maize healthy", "Maize leaf beetle", "Maize leaf blight",
    "Maize leaf spot", "Maize streak virus", "Tomato healthy", "Tomato leaf blight", "Tomato leaf curl",
    "Tomato septoria leaf spot", "Tomato verticulium wilt"
]

MODEL_FILES = {
    "resnet50": "best_resnet50.keras",
    "mobilenet": "best_mobilenetv2.keras",
    "efficientnet": "best_efficientnetb0.keras",
    "vgg16": "best_vgg16.keras",
    "custom_cnn": "best_custom_cnn.keras"
}

LOADED_MODELS = {}
TF_AVAILABLE = False
tf = None

try:
    import tensorflow as tf
    TF_AVAILABLE = True
    print(f"[*] TensorFlow {tf.__version__} initialized.")
except Exception as e:
    print(f"[!] Warning: TensorFlow not loaded directly: {e}")

def get_model(model_key):
    if not TF_AVAILABLE:
        return None
    if model_key in LOADED_MODELS:
        return LOADED_MODELS[model_key]
    
    filename = MODEL_FILES.get(model_key)
    if not filename:
        return None
    
    filepath = os.path.join(BASE_DIR, filename)
    if not os.path.exists(filepath):
        # check alt name
        alt_name = filename.replace("best_", "").replace(".keras", "_Crop_Disease_Final.keras")
        alt_path = os.path.join(BASE_DIR, alt_name)
        if os.path.exists(alt_path):
            filepath = alt_path
        else:
            return None
            
    print(f"[*] Loading model {model_key} from {filepath}...")
    try:
        model = tf.keras.models.load_model(filepath)
        LOADED_MODELS[model_key] = model
        print(f"[+] Loaded {model_key} successfully.")
        return model
    except Exception as e:
        print(f"[!] Error loading {model_key}: {e}")
        return None

def preprocess_image_for_model(img_pil, model_key):
    if model_key == "custom_cnn":
        # Custom CNN was trained on 128x128 with / 255.0 or 224x224
        # Check input shape of model
        target_size = (128, 128)
        img_resized = img_pil.resize(target_size)
        arr = np.array(img_resized, dtype=np.float32) / 255.0
        return np.expand_dims(arr, axis=0)
    elif model_key == "mobilenet":
        img_resized = img_pil.resize((224, 224))
        arr = np.array(img_resized, dtype=np.float32)
        arr = (arr / 127.5) - 1.0
        return np.expand_dims(arr, axis=0)
    elif model_key == "resnet50":
        img_resized = img_pil.resize((224, 224))
        arr = np.array(img_resized, dtype=np.float32)
        # RGB to BGR
        arr = arr[..., ::-1]
        # Mean subtraction
        arr[..., 0] -= 103.939
        arr[..., 1] -= 116.779
        arr[..., 2] -= 123.68
        return np.expand_dims(arr, axis=0)
    elif model_key == "vgg16":
        img_resized = img_pil.resize((224, 224))
        arr = np.array(img_resized, dtype=np.float32)
        arr = arr[..., ::-1]
        arr[..., 0] -= 103.939
        arr[..., 1] -= 116.779
        arr[..., 2] -= 123.68
        return np.expand_dims(arr, axis=0)
    elif model_key == "efficientnet":
        img_resized = img_pil.resize((224, 224))
        arr = np.array(img_resized, dtype=np.float32)
        # EfficientNet takes raw [0, 255]
        return np.expand_dims(arr, axis=0)
    else:
        img_resized = img_pil.resize((224, 224))
        arr = np.array(img_resized, dtype=np.float32) / 255.0
        return np.expand_dims(arr, axis=0)

class AgriVisionHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS for local testing
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == '/api/status':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            status = {
                "server": "AgriVision DIP Intelligence Server",
                "status": "online",
                "tf_available": TF_AVAILABLE,
                "loaded_models": list(LOADED_MODELS.keys()),
                "available_models": list(MODEL_FILES.keys()),
                "total_classes": len(CLASS_NAMES)
            }
            self.wfile.write(json.dumps(status).encode('utf-8'))
            return
        elif parsed.path == '/api/models':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            models_info = {
                "models": MODEL_FILES,
                "classes": CLASS_NAMES
            }
            self.wfile.write(json.dumps(models_info).encode('utf-8'))
            return
        
        # Serve static files from workspace root
        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == '/api/predict':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            
            try:
                payload = json.loads(post_data.decode('utf-8'))
                image_data = payload.get('image', '')
                requested_model = payload.get('model', 'resnet50')
                
                # Strip data URL prefix if present
                if ',' in image_data:
                    image_data = image_data.split(',', 1)[1]
                
                img_bytes = base64.b64decode(image_data)
                img = Image.open(io.BytesIO(img_bytes)).convert('RGB')
                
                results = {}
                models_to_run = [requested_model] if requested_model != 'all' else list(MODEL_FILES.keys())
                
                for mkey in models_to_run:
                    model = get_model(mkey)
                    if model is None:
                        results[mkey] = {
                            "error": f"Model {mkey} not currently loaded or failed to initialize."
                        }
                        continue
                    
                    t0 = time.time()
                    tensor = preprocess_image_for_model(img, mkey)
                    preds = model.predict(tensor, verbose=0)[0]
                    latency = round((time.time() - t0) * 1000, 2)
                    
                    # Top 5 classes
                    top_indices = np.argsort(preds)[::-1][:5]
                    top_preds = []
                    for idx in top_indices:
                        top_preds.append({
                            "class": CLASS_NAMES[idx],
                            "probability": round(float(preds[idx]), 4),
                            "percentage": round(float(preds[idx]) * 100, 2)
                        })
                        
                    results[mkey] = {
                        "model": mkey,
                        "inference_ms": latency,
                        "top_prediction": top_preds[0],
                        "predictions": top_preds
                    }
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                response = {
                    "success": True,
                    "results": results
                }
                self.wfile.write(json.dumps(response).encode('utf-8'))
                return
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": str(e)}).encode('utf-8'))
                return
        else:
            self.send_response(404)
            self.end_headers()

def run_server():
    server_address = ('', PORT)
    httpd = HTTPServer(server_address, AgriVisionHandler)
    print(f"=====================================================")
    print(f" AgriVision DIP Web Server running at http://localhost:{PORT}")
    print(f" Serving UI & API from {BASE_DIR}")
    print(f"=====================================================")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server.")
        httpd.server_close()

if __name__ == '__main__':
    run_server()
