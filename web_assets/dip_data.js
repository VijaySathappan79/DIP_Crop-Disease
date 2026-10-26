// AgriVision DIP Project Data
window.AGRIVISION_DATA = {
  "dataset_summary": {
    "classes": [
      "Cashew anthracnose",
      "Cashew gumosis",
      "Cashew healthy",
      "Cashew leaf miner",
      "Cashew red rust",
      "Cassava bacterial blight",
      "Cassava brown spot",
      "Cassava green mite",
      "Cassava healthy",
      "Cassava mosaic",
      "Maize fall armyworm",
      "Maize grasshoper",
      "Maize healthy",
      "Maize leaf beetle",
      "Maize leaf blight",
      "Maize leaf spot",
      "Maize streak virus",
      "Tomato healthy",
      "Tomato leaf blight",
      "Tomato leaf curl",
      "Tomato septoria leaf spot",
      "Tomato verticulium wilt"
    ],
    "total_classes": 22,
    "split_stats": {
      "train": {
        "Cashew anthracnose": 1210,
        "Cashew gumosis": 274,
        "Cashew healthy": 957,
        "Cashew leaf miner": 964,
        "Cashew red rust": 1177,
        "Cassava bacterial blight": 1829,
        "Cassava brown spot": 1036,
        "Cassava green mite": 710,
        "Cassava healthy": 835,
        "Cassava mosaic": 843,
        "Maize fall armyworm": 199,
        "Maize grasshoper": 471,
        "Maize healthy": 142,
        "Maize leaf beetle": 651,
        "Maize leaf blight": 690,
        "Maize leaf spot": 865,
        "Maize streak virus": 672,
        "Tomato healthy": 327,
        "Tomato leaf blight": 901,
        "Tomato leaf curl": 355,
        "Tomato septoria leaf spot": 1920,
        "Tomato verticulium wilt": 540
      },
      "val": {
        "Cashew anthracnose": 259,
        "Cashew gumosis": 58,
        "Cashew healthy": 205,
        "Cashew leaf miner": 206,
        "Cashew red rust": 252,
        "Cassava bacterial blight": 392,
        "Cassava brown spot": 222,
        "Cassava green mite": 152,
        "Cassava healthy": 178,
        "Cassava mosaic": 180,
        "Maize fall armyworm": 42,
        "Maize grasshoper": 100,
        "Maize healthy": 30,
        "Maize leaf beetle": 139,
        "Maize leaf blight": 149,
        "Maize leaf spot": 185,
        "Maize streak virus": 146,
        "Tomato healthy": 68,
        "Tomato leaf blight": 195,
        "Tomato leaf curl": 77,
        "Tomato septoria leaf spot": 411,
        "Tomato verticulium wilt": 115
      },
      "test": {
        "Cashew anthracnose": 260,
        "Cashew gumosis": 60,
        "Cashew healthy": 206,
        "Cashew leaf miner": 208,
        "Cashew red rust": 253,
        "Cassava bacterial blight": 393,
        "Cassava brown spot": 223,
        "Cassava green mite": 153,
        "Cassava healthy": 180,
        "Cassava mosaic": 182,
        "Maize fall armyworm": 44,
        "Maize grasshoper": 102,
        "Maize healthy": 32,
        "Maize leaf beetle": 142,
        "Maize leaf blight": 151,
        "Maize leaf spot": 189,
        "Maize streak virus": 147,
        "Tomato healthy": 71,
        "Tomato leaf blight": 192,
        "Tomato leaf curl": 78,
        "Tomato septoria leaf spot": 412,
        "Tomato verticulium wilt": 117
      }
    },
    "sample_map": {
      "Cashew anthracnose": "web_assets/samples/cashew_anthracnose.jpg",
      "Cashew gumosis": "web_assets/samples/cashew_gumosis.jpg",
      "Cashew healthy": "web_assets/samples/cashew_healthy.jpg",
      "Cashew leaf miner": "web_assets/samples/cashew_leaf_miner.jpg",
      "Cashew red rust": "web_assets/samples/cashew_red_rust.jpg",
      "Cassava bacterial blight": "web_assets/samples/cassava_bacterial_blight.jpg",
      "Cassava brown spot": "web_assets/samples/cassava_brown_spot.jpg",
      "Cassava green mite": "web_assets/samples/cassava_green_mite.jpg",
      "Cassava healthy": "web_assets/samples/cassava_healthy.jpg",
      "Cassava mosaic": "web_assets/samples/cassava_mosaic.jpg",
      "Maize fall armyworm": "web_assets/samples/maize_fall_armyworm.jpg",
      "Maize grasshoper": "web_assets/samples/maize_grasshoper.jpg",
      "Maize healthy": "web_assets/samples/maize_healthy.jpg",
      "Maize leaf beetle": "web_assets/samples/maize_leaf_beetle.jpg",
      "Maize leaf blight": "web_assets/samples/maize_leaf_blight.jpg",
      "Maize leaf spot": "web_assets/samples/maize_leaf_spot.jpg",
      "Maize streak virus": "web_assets/samples/maize_streak_virus.jpg",
      "Tomato healthy": "web_assets/samples/tomato_healthy.jpg",
      "Tomato leaf blight": "web_assets/samples/tomato_leaf_blight.jpg",
      "Tomato leaf curl": "web_assets/samples/tomato_leaf_curl.jpg",
      "Tomato septoria leaf spot": "web_assets/samples/tomato_septoria_leaf_spot.jpg",
      "Tomato verticulium wilt": "web_assets/samples/tomato_verticulium_wilt.jpg"
    }
  },
  "models_benchmark": [
    {
      "id": "resnet50",
      "name": "ResNet50",
      "accuracy": 87.35,
      "precision": 87.42,
      "recall": 87.35,
      "f1": 87.05,
      "inference_ms": 26.618,
      "params": "25.6M",
      "disk_size": "179 MB",
      "architecture_type": "Deep Residual Network (Transfer Learning)",
      "color": "#e11d48",
      "badge": "Top Overall Accuracy",
      "backbone": "ResNet50 (ImageNet Pretrained)",
      "input_shape": "224 × 224 × 3",
      "training_phases": "Phase 1: Frozen backbone (LR 1e-4) -> Phase 2: Unfreeze last 20 layers (LR 1e-5)",
      "dip_features": "Deep bottleneck residual blocks, identity mapping $F(x)+x$, multi-scale gradient flow"
    },
    {
      "id": "efficientnet",
      "name": "EfficientNetB0",
      "accuracy": 85.77,
      "precision": 85.88,
      "recall": 85.77,
      "f1": 85.28,
      "inference_ms": 9.819,
      "params": "5.3M",
      "disk_size": "21.1 MB",
      "architecture_type": "Compound Scaled MBConv + Attention",
      "color": "#059669",
      "badge": "Best Accuracy / Size Ratio",
      "backbone": "EfficientNetB0 (ImageNet Pretrained)",
      "input_shape": "224 × 224 × 3",
      "training_phases": "Phase 1: Frozen backbone (LR 1e-4) -> Phase 2: Unfreeze last 20 layers (LR 1e-5)",
      "dip_features": "Compound scaling ($\u0007lpha \\cdot \beta \\cdot \\gamma$), Squeeze-and-Excitation channel attention, inverted bottleneck MBConv"
    },
    {
      "id": "mobilenet",
      "name": "MobileNetV2",
      "accuracy": 83.72,
      "precision": 83.89,
      "recall": 83.72,
      "f1": 83.38,
      "inference_ms": 5.415,
      "params": "3.5M",
      "disk_size": "25.9 MB",
      "architecture_type": "Depthwise Separable Conv (Edge Optimized)",
      "color": "#2563eb",
      "badge": "Speed & Mobile Champion",
      "backbone": "MobileNetV2 (ImageNet Pretrained)",
      "input_shape": "224 × 224 × 3",
      "training_phases": "Phase 1: Frozen backbone (LR 1e-4) -> Phase 2: Unfreeze top 30 layers (LR 1e-5)",
      "dip_features": "Depthwise separable convolutions ($3\\times 3$ spatial + $1\\times 1$ pointwise), linear bottlenecks, inverted residuals"
    },
    {
      "id": "vgg16",
      "name": "VGG16",
      "accuracy": 77.13,
      "precision": 72.4,
      "recall": 77.13,
      "f1": 73.61,
      "benchmark_csv_acc": 54.18,
      "inference_ms": 63.807,
      "params": "138M",
      "disk_size": "214 MB",
      "architecture_type": "Classical Deep Convolutional Stack",
      "color": "#7c3aed",
      "badge": "Deep Homogeneous Baseline",
      "backbone": "VGG16 (ImageNet Pretrained)",
      "input_shape": "224 × 224 × 3",
      "training_phases": "Phase 1: Frozen backbone (LR 1e-4) -> Phase 2: Unfreeze Block 5 (LR 1e-5)",
      "dip_features": "Homogeneous stacks of $3\\times 3$ convolutional filters, $2\\times 2$ max pooling, high parameter density"
    },
    {
      "id": "custom_cnn",
      "name": "Custom CNN",
      "accuracy": 44.35,
      "precision": 47.18,
      "recall": 44.35,
      "f1": 41.56,
      "inference_ms": 1.89,
      "params": "1.8M",
      "disk_size": "20.6 MB",
      "architecture_type": "From-Scratch Convolutional Network",
      "color": "#ea580c",
      "badge": "Pure Scratch Baseline",
      "backbone": "None (Random Initialization)",
      "input_shape": "224 × 224 × 3",
      "training_phases": "Single phase: 20 Epochs, Adam optimizer (LR 1e-3 -> ReduceLROnPlateau)",
      "dip_features": "4 Conv2D blocks (32, 64, 128, 256 filters) with BatchNorm, ReLU, and MaxPooling, showing need for transfer learning"
    }
  ],
  "disease_encyclopedia": {
    "Cashew anthracnose": {
      "crop": "Cashew",
      "pathogen": "Colletotrichum gloeosporioides (Fungus)",
      "type": "Fungal Infection",
      "severity": "High",
      "symptoms": "Water-soaked lesions on young leaves turning dark reddish-brown with angular margins; premature leaf shedding and twig dieback.",
      "dip_characteristics": "Irregular necrotic spatial clusters with high local edge gradients and reduced green reflectance in G-channel.",
      "management": "Apply copper oxychloride (0.3%) or mancozeb sprays at flushing; prune infected canopy twigs."
    },
    "Cashew gumosis": {
      "crop": "Cashew",
      "pathogen": "Lasiodiplodia theobromae (Fungus)",
      "type": "Fungal Vascular Disease",
      "severity": "Critical",
      "symptoms": "Amber to dark brown resin exudation on stems/branches; foliage chlorosis followed by sudden leaf wilt and branch drying.",
      "dip_characteristics": "Broad chlorotic discoloration zones with high variance in saturation and localized high-density exudate spots.",
      "management": "Scrape gum lesions and apply Bordeaux paste (10%); drench soil with fosetyl-Al."
    },
    "Cashew healthy": {
      "crop": "Cashew",
      "pathogen": "None (Healthy Tissue)",
      "type": "Healthy",
      "severity": "None",
      "symptoms": "Uniform deep green foliage, robust cuticle layer, intact venation architecture, absence of chlorotic spots.",
      "dip_characteristics": "Homogeneous green spectrum ($G > R, B$), strong chlorophyll absorption peaks, low high-frequency edge variance.",
      "management": "Maintain balanced NPK fertilizer program and regular weed suppression."
    },
    "Cashew leaf miner": {
      "crop": "Cashew",
      "pathogen": "Acrocercops syngramma (Insect Pest)",
      "type": "Entomological Pest",
      "severity": "Moderate",
      "symptoms": "Silvery or grayish-white serpentine winding blisters/mines across the leaf lamina caused by epidermal feeding larvae.",
      "dip_characteristics": "High spatial frequency winding contours with elevated luminance in leaf interior and distinct edge boundaries.",
      "management": "Spray neem seed kernel extract (NSKE 5%) or lambda-cyhalothrin at vegetative flush."
    },
    "Cashew red rust": {
      "crop": "Cashew",
      "pathogen": "Cephaleuros virescens (Parasitic Alga)",
      "type": "Algal Disease",
      "severity": "Moderate",
      "symptoms": "Velvety circular reddish-orange to rusty brown pustules primarily on upper leaf surfaces, hindering photosynthetic capacity.",
      "dip_characteristics": "Prominent high R-channel intensity clusters, circular spatial morphology, distinct color contrast against green parenchyma.",
      "management": "Apply copper-based fungicides (0.2% copper hydroxide) to improve tree vigor and canopy aeration."
    },
    "Cassava bacterial blight": {
      "crop": "Cassava",
      "pathogen": "Xanthomonas axonopodis pv. manihotis (Bacterium)",
      "type": "Bacterial Infection",
      "severity": "Critical",
      "symptoms": "Angular water-soaked leaf spots bordered by leaf veinlets, yellow halo, gum droplets on leaf underside, severe defoliation.",
      "dip_characteristics": "Vein-delimited angular geometric geometries with sudden step-edges in intensity and surrounding yellow halos.",
      "management": "Plant certified disease-free stem cuttings; use resistant cultivars (e.g. TMS varieties); quarantine infected fields."
    },
    "Cassava brown spot": {
      "crop": "Cassava",
      "pathogen": "Passalora henningsii (Fungus)",
      "type": "Fungal Infection",
      "severity": "Moderate",
      "symptoms": "Circular to polygonal uniformly brown spots (3-12 mm) surrounded by indistinct yellow rings on older leaves.",
      "dip_characteristics": "Dark circular low-intensity concentric rings with marked edge borders and elevated local contrast.",
      "management": "Plant at recommended spacing to promote airflow; harvest mature tubers promptly; crop rotation."
    },
    "Cassava green mite": {
      "crop": "Cassava",
      "pathogen": "Mononychellus tanajoa (Acarid Pest)",
      "type": "Mite Pest",
      "severity": "High",
      "symptoms": "Fine chlorotic pinprick stippling along veins of terminal leaves; leaves become mottled, distorted, resembling mosaic; candelabrum effect.",
      "dip_characteristics": "High-frequency diffuse salt-and-pepper noise pattern across leaf lamina; loss of green channel uniformity.",
      "management": "Introduce predatory phytoseiid mites (Typhlodromalus aripo); utilize acaricides during heavy dry season infestations."
    },
    "Cassava healthy": {
      "crop": "Cassava",
      "pathogen": "None (Healthy Tissue)",
      "type": "Healthy",
      "severity": "None",
      "symptoms": "Well-expanded palmate green lobes, clean petiole attachments, smooth epidermal leaf surface.",
      "dip_characteristics": "Strong green dominant reflectance, smooth gradient textures, bilateral symmetric spatial leaf profile.",
      "management": "Standard agronomic practices, balanced potassium application to enhance tuber bulking."
    },
    "Cassava mosaic": {
      "crop": "Cassava",
      "pathogen": "Cassava mosaic virus (Geminivirus / Whitefly vector)",
      "type": "Viral Disease",
      "severity": "Critical",
      "symptoms": "Striking yellow-green mosaic pattern, asymmetrical leaf distortion, crinkling and leaf blade reduction.",
      "dip_characteristics": "Non-uniform spatial color variegation, high variance in RGB color ratio across contiguous leaf patches.",
      "management": "Rogue and incinerate infected plants; manage whitefly (Bemisia tabaci) populations; use CMD-resistant varieties."
    },
    "Maize fall armyworm": {
      "crop": "Maize",
      "pathogen": "Spodoptera frugiperda (Insect Pest)",
      "type": "Invasive Pest Damage",
      "severity": "High",
      "symptoms": "Windowpaning leaf lesions, ragged irregular holes with jagged boundaries, sawdust-like frass accumulated in the whorl.",
      "dip_characteristics": "Discontinuous spatial geometries, negative space holes in leaf mask with strong binary contour transitions.",
      "management": "Scout whorls weekly; apply pheromone traps; apply spinetoram, emamectin benzoate, or Bacillus thuringiensis."
    },
    "Maize grasshoper": {
      "crop": "Maize",
      "pathogen": "Zonocerus variegatus / Orthoptera (Insect Pest)",
      "type": "Pest Feeding Damage",
      "severity": "Moderate",
      "symptoms": "Extensive peripheral leaf chewing, margins stripped down to midrib; shredded foliage canopy.",
      "dip_characteristics": "Severe boundary deformation of leaf perimeter; altered contour circularity and aspect ratio.",
      "management": "Weed border vegetation; manual collection during cool mornings; spot spray with registered pyrethroids."
    },
    "Maize healthy": {
      "crop": "Maize",
      "pathogen": "None (Healthy Tissue)",
      "type": "Healthy",
      "severity": "None",
      "symptoms": "Longitudinal erect lanceolate leaves with prominent central midrib, vibrant deep green, no lesions.",
      "dip_characteristics": "Strong parallel venation spatial frequency, continuous uniform green channel distribution.",
      "management": "Maintain nitrogen top-dressing at V6 stage; ensure adequate irrigation during tasseling."
    },
    "Maize leaf beetle": {
      "crop": "Maize",
      "pathogen": "Oulema melanopus / Chrysomelidae (Insect Pest)",
      "type": "Pest Feeding Damage",
      "severity": "Moderate",
      "symptoms": "Narrow elongated translucent stripes eaten between parallel veins, giving leaves a bleached striped appearance.",
      "dip_characteristics": "Linear directional high-contrast strips running parallel to primary leaf axis; strong response to vertical/directional Sobel filters.",
      "management": "Seed treatments with neonicotinoids; foliar application of chlorantraniliprole if threshold exceeded."
    },
    "Maize leaf blight": {
      "crop": "Maize",
      "pathogen": "Exserohilum turcicum (Fungus)",
      "type": "Fungal Blight",
      "severity": "High",
      "symptoms": "Large elongated elliptical cigar-shaped grayish-green to tan lesions (2-15 cm) that coalesce to scorch entire leaves.",
      "dip_characteristics": "Longitudinal elliptical shapes with gray-tan centers, distinct darker margins, high aspect ratio spatial features.",
      "management": "Plant resistant hybrid maize varieties; apply azoxystrobin or propiconazole at first sign of lower leaf infection."
    },
    "Maize leaf spot": {
      "crop": "Maize",
      "pathogen": "Cercospora zeae-maydis (Fungus)",
      "type": "Fungal Infection",
      "severity": "High",
      "symptoms": "Rectangular, vein-delimited lesions with sharp parallel sides; tan to gray spots running strictly between veins.",
      "dip_characteristics": "Rectilinear block-like boundaries strongly constrained by parallel leaf venation; high rectangularity index.",
      "management": "Tillage to bury residue; rotate with non-host crops (soybean/sunflower); apply strobilurin fungicides."
    },
    "Maize streak virus": {
      "crop": "Maize",
      "pathogen": "Maize streak virus (Geminivirus / Leafhopper vector)",
      "type": "Viral Disease",
      "severity": "Critical",
      "symptoms": "Distinct chlorotic, discontinuous streaks running parallel along the veins; plant stunting and small ears.",
      "dip_characteristics": "Intermittent linear broken stripes of high luminance along green background; high Fourier spatial frequency along vein axis.",
      "management": "Control leafhopper vectors (Cicadulina spp.); plant streak-resistant hybrids; avoid staggered planting dates."
    },
    "Tomato healthy": {
      "crop": "Tomato",
      "pathogen": "None (Healthy Tissue)",
      "type": "Healthy",
      "severity": "None",
      "symptoms": "Dark green serrated leaves with intact trichomes (leaf hairs), consistent turgidity and no spotting.",
      "dip_characteristics": "High green/red ratio ($G/R > 1.4$), continuous texture, absence of high-frequency necrotic localized gradients.",
      "management": "Drip irrigation, staking, and balanced fertilization with micronutrients (Ca, Mg)."
    },
    "Tomato leaf blight": {
      "crop": "Tomato",
      "pathogen": "Phytophthora infestans (Oomycete) / Alternaria",
      "type": "Oomycete / Fungal Blight",
      "severity": "Critical",
      "symptoms": "Rapidly expanding water-soaked greasy brown lesions on foliage with white fungal sporulation on undersides in humid conditions.",
      "dip_characteristics": "Dark irregular water-soaked concentric patches with diffuse boundaries and high low-frequency intensity attenuation.",
      "management": "Preventive metalaxyl or chlorothalonil sprays; avoid overhead irrigation; destroy culled diseased plants immediately."
    },
    "Tomato leaf curl": {
      "crop": "Tomato",
      "pathogen": "Tomato yellow leaf curl virus (Begomovirus / Whitefly vector)",
      "type": "Viral Disease",
      "severity": "Critical",
      "symptoms": "Severe upward and inward curling of leaflet margins, pronounced interveinal chlorosis, leathery puckered leaves, stunted apical growth.",
      "dip_characteristics": "Distorted spatial leaf contour, high curvature on perimeter, prominent yellow hue shift along margin zones.",
      "management": "Install insect-proof netting in nurseries; spray systemic imidacloprid to suppress Bemisia tabaci; deploy resistant hybrid cultivars."
    },
    "Tomato septoria leaf spot": {
      "crop": "Tomato",
      "pathogen": "Septoria lycopersici (Fungus)",
      "type": "Fungal Infection",
      "severity": "High",
      "symptoms": "Numerous small circular spots (1-3 mm) with light gray or tan centers and dark brown margins; tiny black speck pycnidia visible inside centers.",
      "dip_characteristics": "Dense distribution of small high-frequency circular centroids with dark rings and light interiors; ideal for blob detection filters.",
      "management": "Mulch around base to prevent soil splash; remove lower affected leaves; apply copper fungicides or chlorothalonil."
    },
    "Tomato verticulium wilt": {
      "crop": "Tomato",
      "pathogen": "Verticillium dahliae (Soil-borne Fungus)",
      "type": "Vascular Wilt",
      "severity": "High",
      "symptoms": "Characteristic V-shaped yellow chlorotic wedges at leaf tips expanding inward, browning of leaf veins, daytime wilting and defoliation.",
      "dip_characteristics": "Wedge-shaped triangular chlorotic sectors pointing toward the petiole; distinct vascular discoloration.",
      "management": "Utilize Verticillium-resistant (V) varieties; solarize soil before planting; maintain long crop rotations with non-solanaceous crops."
    }
  },
  "per_class_metrics": {
    "CustomCNN": {
      "Cashew anthracnose": {
        "precision": 0.6549,
        "recall": 0.2846,
        "f1": 0.3968,
        "support": 260
      },
      "Cashew gumosis": {
        "precision": 0.7692,
        "recall": 0.6667,
        "f1": 0.7143,
        "support": 60
      },
      "Cashew healthy": {
        "precision": 0.5385,
        "recall": 0.4417,
        "f1": 0.4853,
        "support": 206
      },
      "Cashew leaf miner": {
        "precision": 0.5127,
        "recall": 0.3894,
        "f1": 0.4426,
        "support": 208
      },
      "Cashew red rust": {
        "precision": 0.7414,
        "recall": 0.7708,
        "f1": 0.7558,
        "support": 253
      },
      "Cassava bacterial blight": {
        "precision": 0.3794,
        "recall": 0.4402,
        "f1": 0.4075,
        "support": 393
      },
      "Cassava brown spot": {
        "precision": 0.3965,
        "recall": 0.4036,
        "f1": 0.4,
        "support": 223
      },
      "Cassava green mite": {
        "precision": 0.2994,
        "recall": 0.6732,
        "f1": 0.4145,
        "support": 153
      },
      "Cassava healthy": {
        "precision": 0.3804,
        "recall": 0.7778,
        "f1": 0.5109,
        "support": 180
      },
      "Cassava mosaic": {
        "precision": 0.5625,
        "recall": 0.0989,
        "f1": 0.1682,
        "support": 182
      },
      "Maize fall armyworm": {
        "precision": 0.0,
        "recall": 0.0,
        "f1": 0.0,
        "support": 44
      },
      "Maize grasshoper": {
        "precision": 0.232,
        "recall": 0.5686,
        "f1": 0.3295,
        "support": 102
      },
      "Maize healthy": {
        "precision": 0.0,
        "recall": 0.0,
        "f1": 0.0,
        "support": 32
      },
      "Maize leaf beetle": {
        "precision": 0.3324,
        "recall": 0.8239,
        "f1": 0.4737,
        "support": 142
      },
      "Maize leaf blight": {
        "precision": 0.4151,
        "recall": 0.4371,
        "f1": 0.4258,
        "support": 151
      },
      "Maize leaf spot": {
        "precision": 0.3611,
        "recall": 0.0688,
        "f1": 0.1156,
        "support": 189
      },
      "Maize streak virus": {
        "precision": 0.7059,
        "recall": 0.3265,
        "f1": 0.4465,
        "support": 147
      },
      "Tomato healthy": {
        "precision": 0.4444,
        "recall": 0.2817,
        "f1": 0.3448,
        "support": 71
      },
      "Tomato leaf blight": {
        "precision": 0.4024,
        "recall": 0.3438,
        "f1": 0.3708,
        "support": 192
      },
      "Tomato leaf curl": {
        "precision": 0.6667,
        "recall": 0.0513,
        "f1": 0.0952,
        "support": 78
      },
      "Tomato septoria leaf spot": {
        "precision": 0.5495,
        "recall": 0.6869,
        "f1": 0.6106,
        "support": 412
      },
      "Tomato verticulium wilt": {
        "precision": 0.1875,
        "recall": 0.0256,
        "f1": 0.0451,
        "support": 117
      }
    },
    "EfficientNet": {
      "Cashew anthracnose": {
        "precision": 0.93,
        "recall": 0.8692,
        "f1": 0.8986,
        "support": 260
      },
      "Cashew gumosis": {
        "precision": 0.9677,
        "recall": 1.0,
        "f1": 0.9836,
        "support": 60
      },
      "Cashew healthy": {
        "precision": 0.9444,
        "recall": 0.9903,
        "f1": 0.9668,
        "support": 206
      },
      "Cashew leaf miner": {
        "precision": 0.9167,
        "recall": 0.9519,
        "f1": 0.934,
        "support": 208
      },
      "Cashew red rust": {
        "precision": 0.9882,
        "recall": 0.9921,
        "f1": 0.9901,
        "support": 253
      },
      "Cassava bacterial blight": {
        "precision": 0.8821,
        "recall": 0.9135,
        "f1": 0.8975,
        "support": 393
      },
      "Cassava brown spot": {
        "precision": 0.8879,
        "recall": 0.852,
        "f1": 0.8696,
        "support": 223
      },
      "Cassava green mite": {
        "precision": 0.872,
        "recall": 0.9346,
        "f1": 0.9022,
        "support": 153
      },
      "Cassava healthy": {
        "precision": 0.9565,
        "recall": 0.9778,
        "f1": 0.967,
        "support": 180
      },
      "Cassava mosaic": {
        "precision": 0.9877,
        "recall": 0.8846,
        "f1": 0.9333,
        "support": 182
      },
      "Maize fall armyworm": {
        "precision": 0.95,
        "recall": 0.8636,
        "f1": 0.9048,
        "support": 44
      },
      "Maize grasshoper": {
        "precision": 0.96,
        "recall": 0.9412,
        "f1": 0.9505,
        "support": 102
      },
      "Maize healthy": {
        "precision": 0.6667,
        "recall": 0.9375,
        "f1": 0.7792,
        "support": 32
      },
      "Maize leaf beetle": {
        "precision": 0.9396,
        "recall": 0.9859,
        "f1": 0.9622,
        "support": 142
      },
      "Maize leaf blight": {
        "precision": 0.7297,
        "recall": 0.7152,
        "f1": 0.7224,
        "support": 151
      },
      "Maize leaf spot": {
        "precision": 0.7326,
        "recall": 0.6667,
        "f1": 0.6981,
        "support": 189
      },
      "Maize streak virus": {
        "precision": 0.8105,
        "recall": 0.8435,
        "f1": 0.8267,
        "support": 147
      },
      "Tomato healthy": {
        "precision": 0.9054,
        "recall": 0.9437,
        "f1": 0.9241,
        "support": 71
      },
      "Tomato leaf blight": {
        "precision": 0.7453,
        "recall": 0.4115,
        "f1": 0.5302,
        "support": 192
      },
      "Tomato leaf curl": {
        "precision": 0.7419,
        "recall": 0.5897,
        "f1": 0.6571,
        "support": 78
      },
      "Tomato septoria leaf spot": {
        "precision": 0.6981,
        "recall": 0.915,
        "f1": 0.792,
        "support": 412
      },
      "Tomato verticulium wilt": {
        "precision": 0.6747,
        "recall": 0.4786,
        "f1": 0.56,
        "support": 117
      }
    },
    "MobileNet": {
      "Cashew anthracnose": {
        "precision": 0.9264,
        "recall": 0.8231,
        "f1": 0.8717,
        "support": 260
      },
      "Cashew gumosis": {
        "precision": 0.9677,
        "recall": 1.0,
        "f1": 0.9836,
        "support": 60
      },
      "Cashew healthy": {
        "precision": 0.9276,
        "recall": 0.9951,
        "f1": 0.9602,
        "support": 206
      },
      "Cashew leaf miner": {
        "precision": 0.8846,
        "recall": 0.8846,
        "f1": 0.8846,
        "support": 208
      },
      "Cashew red rust": {
        "precision": 0.9729,
        "recall": 0.9921,
        "f1": 0.9824,
        "support": 253
      },
      "Cassava bacterial blight": {
        "precision": 0.8452,
        "recall": 0.9033,
        "f1": 0.8733,
        "support": 393
      },
      "Cassava brown spot": {
        "precision": 0.8974,
        "recall": 0.7848,
        "f1": 0.8373,
        "support": 223
      },
      "Cassava green mite": {
        "precision": 0.8634,
        "recall": 0.9085,
        "f1": 0.8854,
        "support": 153
      },
      "Cassava healthy": {
        "precision": 0.9271,
        "recall": 0.9889,
        "f1": 0.957,
        "support": 180
      },
      "Cassava mosaic": {
        "precision": 0.9882,
        "recall": 0.9231,
        "f1": 0.9545,
        "support": 182
      },
      "Maize fall armyworm": {
        "precision": 0.9394,
        "recall": 0.7045,
        "f1": 0.8052,
        "support": 44
      },
      "Maize grasshoper": {
        "precision": 0.9694,
        "recall": 0.9314,
        "f1": 0.95,
        "support": 102
      },
      "Maize healthy": {
        "precision": 0.6304,
        "recall": 0.9062,
        "f1": 0.7436,
        "support": 32
      },
      "Maize leaf beetle": {
        "precision": 0.9424,
        "recall": 0.9225,
        "f1": 0.9324,
        "support": 142
      },
      "Maize leaf blight": {
        "precision": 0.6558,
        "recall": 0.6689,
        "f1": 0.6623,
        "support": 151
      },
      "Maize leaf spot": {
        "precision": 0.6337,
        "recall": 0.6772,
        "f1": 0.6547,
        "support": 189
      },
      "Maize streak virus": {
        "precision": 0.837,
        "recall": 0.7687,
        "f1": 0.8014,
        "support": 147
      },
      "Tomato healthy": {
        "precision": 0.8734,
        "recall": 0.9718,
        "f1": 0.92,
        "support": 71
      },
      "Tomato leaf blight": {
        "precision": 0.6917,
        "recall": 0.4792,
        "f1": 0.5662,
        "support": 192
      },
      "Tomato leaf curl": {
        "precision": 0.7455,
        "recall": 0.5256,
        "f1": 0.6165,
        "support": 78
      },
      "Tomato septoria leaf spot": {
        "precision": 0.7046,
        "recall": 0.8859,
        "f1": 0.7849,
        "support": 412
      },
      "Tomato verticulium wilt": {
        "precision": 0.6235,
        "recall": 0.453,
        "f1": 0.5248,
        "support": 117
      }
    },
    "ResNet50": {
      "Cashew anthracnose": {
        "precision": 0.9383,
        "recall": 0.8769,
        "f1": 0.9066,
        "support": 260
      },
      "Cashew gumosis": {
        "precision": 1.0,
        "recall": 1.0,
        "f1": 1.0,
        "support": 60
      },
      "Cashew healthy": {
        "precision": 0.9309,
        "recall": 0.9806,
        "f1": 0.9551,
        "support": 206
      },
      "Cashew leaf miner": {
        "precision": 0.936,
        "recall": 0.9135,
        "f1": 0.9246,
        "support": 208
      },
      "Cashew red rust": {
        "precision": 0.9767,
        "recall": 0.9921,
        "f1": 0.9843,
        "support": 253
      },
      "Cassava bacterial blight": {
        "precision": 0.8641,
        "recall": 0.9542,
        "f1": 0.9069,
        "support": 393
      },
      "Cassava brown spot": {
        "precision": 0.9128,
        "recall": 0.8924,
        "f1": 0.9025,
        "support": 223
      },
      "Cassava green mite": {
        "precision": 0.9209,
        "recall": 0.8366,
        "f1": 0.8767,
        "support": 153
      },
      "Cassava healthy": {
        "precision": 0.9465,
        "recall": 0.9833,
        "f1": 0.9646,
        "support": 180
      },
      "Cassava mosaic": {
        "precision": 0.9939,
        "recall": 0.8956,
        "f1": 0.9422,
        "support": 182
      },
      "Maize fall armyworm": {
        "precision": 0.9744,
        "recall": 0.8636,
        "f1": 0.9157,
        "support": 44
      },
      "Maize grasshoper": {
        "precision": 0.9519,
        "recall": 0.9706,
        "f1": 0.9612,
        "support": 102
      },
      "Maize healthy": {
        "precision": 0.7111,
        "recall": 1.0,
        "f1": 0.8312,
        "support": 32
      },
      "Maize leaf beetle": {
        "precision": 0.972,
        "recall": 0.9789,
        "f1": 0.9754,
        "support": 142
      },
      "Maize leaf blight": {
        "precision": 0.6962,
        "recall": 0.7285,
        "f1": 0.712,
        "support": 151
      },
      "Maize leaf spot": {
        "precision": 0.7515,
        "recall": 0.6561,
        "f1": 0.7006,
        "support": 189
      },
      "Maize streak virus": {
        "precision": 0.8355,
        "recall": 0.8639,
        "f1": 0.8495,
        "support": 147
      },
      "Tomato healthy": {
        "precision": 0.9467,
        "recall": 1.0,
        "f1": 0.9726,
        "support": 71
      },
      "Tomato leaf blight": {
        "precision": 0.7662,
        "recall": 0.6146,
        "f1": 0.6821,
        "support": 192
      },
      "Tomato leaf curl": {
        "precision": 0.7719,
        "recall": 0.5641,
        "f1": 0.6519,
        "support": 78
      },
      "Tomato septoria leaf spot": {
        "precision": 0.761,
        "recall": 0.9272,
        "f1": 0.8359,
        "support": 412
      },
      "Tomato verticulium wilt": {
        "precision": 0.7342,
        "recall": 0.4957,
        "f1": 0.5918,
        "support": 117
      }
    },
    "VGG16": {
      "Cashew anthracnose": {
        "precision": 0.8852,
        "recall": 0.8308,
        "f1": 0.8571,
        "support": 260
      },
      "Cashew gumosis": {
        "precision": 0.9833,
        "recall": 0.9833,
        "f1": 0.9833,
        "support": 60
      },
      "Cashew healthy": {
        "precision": 0.9174,
        "recall": 0.9709,
        "f1": 0.9434,
        "support": 206
      },
      "Cashew leaf miner": {
        "precision": 0.9162,
        "recall": 0.8413,
        "f1": 0.8772,
        "support": 208
      },
      "Cashew red rust": {
        "precision": 0.9579,
        "recall": 0.9881,
        "f1": 0.9728,
        "support": 253
      },
      "Cassava bacterial blight": {
        "precision": 0.7943,
        "recall": 0.9237,
        "f1": 0.8541,
        "support": 393
      },
      "Cassava brown spot": {
        "precision": 0.86,
        "recall": 0.7713,
        "f1": 0.8132,
        "support": 223
      },
      "Cassava green mite": {
        "precision": 0.8438,
        "recall": 0.8824,
        "f1": 0.8626,
        "support": 153
      },
      "Cassava healthy": {
        "precision": 0.9144,
        "recall": 0.95,
        "f1": 0.9319,
        "support": 180
      },
      "Cassava mosaic": {
        "precision": 0.8506,
        "recall": 0.8132,
        "f1": 0.8315,
        "support": 182
      },
      "Maize fall armyworm": {
        "precision": 1.0,
        "recall": 0.6136,
        "f1": 0.7606,
        "support": 44
      },
      "Maize grasshoper": {
        "precision": 0.9394,
        "recall": 0.9118,
        "f1": 0.9254,
        "support": 102
      },
      "Maize healthy": {
        "precision": 0.7105,
        "recall": 0.8438,
        "f1": 0.7714,
        "support": 32
      },
      "Maize leaf beetle": {
        "precision": 0.9706,
        "recall": 0.9296,
        "f1": 0.9496,
        "support": 142
      },
      "Maize leaf blight": {
        "precision": 0.5804,
        "recall": 0.4305,
        "f1": 0.4943,
        "support": 151
      },
      "Maize leaf spot": {
        "precision": 0.5483,
        "recall": 0.7513,
        "f1": 0.6339,
        "support": 189
      },
      "Maize streak virus": {
        "precision": 0.8769,
        "recall": 0.7755,
        "f1": 0.8231,
        "support": 147
      },
      "Tomato healthy": {
        "precision": 0.7826,
        "recall": 0.507,
        "f1": 0.6154,
        "support": 71
      },
      "Tomato leaf blight": {
        "precision": 0.0,
        "recall": 0.0,
        "f1": 0.0,
        "support": 192
      },
      "Tomato leaf curl": {
        "precision": 0.0,
        "recall": 0.0,
        "f1": 0.0,
        "support": 78
      },
      "Tomato septoria leaf spot": {
        "precision": 0.505,
        "recall": 0.9757,
        "f1": 0.6656,
        "support": 412
      },
      "Tomato verticulium wilt": {
        "precision": 0.0,
        "recall": 0.0,
        "f1": 0.0,
        "support": 117
      }
    }
  },
  "plots_catalog": [
    {
      "filename": "Comparison_cell13_out0.png",
      "model": "Comparison",
      "cell_idx": 13,
      "section": "CELL 6 ── Bar Chart: Accuracy Comparison",
      "code_title": "ax.set_title(\"Model Accuracy Comparison — Test Set\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 32.0
    },
    {
      "filename": "Comparison_cell15_out0.png",
      "model": "Comparison",
      "cell_idx": 15,
      "section": "CELL 7 ── Grouped Bar Chart: Accuracy / Precision / Recall / F1",
      "code_title": "ax.set_title(\"Overall Performance Metrics Across All Models\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 38.1
    },
    {
      "filename": "Comparison_cell17_out0.png",
      "model": "Comparison",
      "cell_idx": 17,
      "section": "CELL 8 ── Inference Speed Comparison",
      "code_title": "ax.set_title(\"Inference Latency Comparison (CPU/GPU)\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 27.7
    },
    {
      "filename": "Comparison_cell19_out0.png",
      "model": "Comparison",
      "cell_idx": 19,
      "section": "CELL 9 ── Radar / Spider Chart: All 4 Metrics per Model",
      "code_title": "ax.set_title(\"Radar Chart: Balanced Performance Profile\", fontsize=14, fontweight=\"bold\", y=1.08)",
      "size_kb": 103.0
    },
    {
      "filename": "Comparison_cell21_out0.png",
      "model": "Comparison",
      "cell_idx": 21,
      "section": "CELL 10 ── Confusion Matrices for All Models (side by side)",
      "code_title": "ax.set_title(f\"{name}\\n(Acc: {m['accuracy']*100:.1f}%)\", fontsize=11, fontweight=\"bold\")",
      "size_kb": 30.9
    },
    {
      "filename": "Comparison_cell23_out0.png",
      "model": "Comparison",
      "cell_idx": 23,
      "section": "CELL 11 ── Per-Class F1 Score Heatmap  (Models × Classes)",
      "code_title": "plt.title(\"Per-Class F1 Score Comparison Across Models\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 137.6
    },
    {
      "filename": "Comparison_cell25_out0.png",
      "model": "Comparison",
      "cell_idx": 25,
      "section": "CELL 12 ── Accuracy vs Inference Speed Scatter Plot",
      "code_title": "ax.set_title(\"Accuracy vs. Inference Speed Trade-off\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 40.0
    },
    {
      "filename": "Comparison_cell32_out0.png",
      "model": "Comparison",
      "cell_idx": 32,
      "section": "Experiment: Effect of Image Degradations on Model Classification",
      "code_title": "fig.suptitle(f\"DIP Image Quality Conditions: Test Sample ({CLASS_NAMES[demo_batch_lbls[0]]})\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 466.9
    },
    {
      "filename": "CustomCNN_cell11_out0.png",
      "model": "CustomCNN",
      "cell_idx": 11,
      "section": "CELL 4 ── Hyper-parameters & Data Loaders",
      "code_title": "fig.suptitle(f\"DIP Spatial Resizing Analysis: {class_folder_name}\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 336.4
    },
    {
      "filename": "CustomCNN_cell13_out0.png",
      "model": "CustomCNN",
      "cell_idx": 13,
      "section": "CELL 5 ── Explore: Sample Images",
      "code_title": "plt.suptitle(\"Training Samples\", fontsize=16, fontweight=\"bold\")",
      "size_kb": 1389.9
    },
    {
      "filename": "CustomCNN_cell15_out0.png",
      "model": "CustomCNN",
      "cell_idx": 15,
      "section": "DIP Demonstration: Digital Image Representation and Intensity Analysis",
      "code_title": "fig.suptitle(\"DIP Analysis: Spatial Color Representation & Pixel Intensity Distributions\", fontsize=15, fontweight=\"bold\")",
      "size_kb": 733.8
    },
    {
      "filename": "CustomCNN_cell17_out0.png",
      "model": "CustomCNN",
      "cell_idx": 17,
      "section": "CELL 6 ── Class Distribution",
      "code_title": "ax.set_title(\"Class Distribution across Splits\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 60.1
    },
    {
      "filename": "CustomCNN_cell20_out0.png",
      "model": "CustomCNN",
      "cell_idx": 20,
      "section": "CELL 7 ── Data Augmentation",
      "code_title": "plt.suptitle(\"Augmented Versions of One Image\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 421.2
    },
    {
      "filename": "CustomCNN_cell21_out0.png",
      "model": "CustomCNN",
      "cell_idx": 21,
      "section": "CELL 7 ── Data Augmentation",
      "code_title": "fig.suptitle(\"DIP: Isolated Geometric and Intensity Transformations\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 861.4
    },
    {
      "filename": "CustomCNN_cell26_out0.png",
      "model": "CustomCNN",
      "cell_idx": 26,
      "section": "DIP Demonstration: Classical Spatial Filtering and Edge Detection",
      "code_title": "fig.suptitle(\"Classical DIP Spatial Filtering Demonstration (Educational Comparison)\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 516.0
    },
    {
      "filename": "CustomCNN_cell31_out0.png",
      "model": "CustomCNN",
      "cell_idx": 31,
      "section": "CELL 10 ── Training Curves",
      "code_title": "fig.suptitle(\"Custom CNN — Training Curves\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 63.7
    },
    {
      "filename": "CustomCNN_cell37_out1.png",
      "model": "CustomCNN",
      "cell_idx": 37,
      "section": "CELL 12 ── Confusion Matrix & Classification Report",
      "code_title": "plt.title(\"Confusion Matrix — Custom CNN (Test Set)\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 218.5
    },
    {
      "filename": "CustomCNN_cell39_out0.png",
      "model": "CustomCNN",
      "cell_idx": 39,
      "section": "CELL 13 ── Per-Class Accuracy Bar Chart",
      "code_title": "plt.ylabel(\"Accuracy (%)\"); plt.title(\"Per-Class Accuracy — Custom CNN\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 72.3
    },
    {
      "filename": "CustomCNN_cell41_out0.png",
      "model": "CustomCNN",
      "cell_idx": 41,
      "section": "CELL 14 ── Sample Predictions Grid (Green = Correct, Red = Wrong)",
      "code_title": "plt.suptitle(\"Sample Predictions — Custom CNN\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 493.9
    },
    {
      "filename": "EfficientNet_cell11_out0.png",
      "model": "EfficientNet",
      "cell_idx": 11,
      "section": "CELL 4 ── Hyper-parameters & Data Loaders",
      "code_title": "fig.suptitle(f\"DIP Spatial Resizing Analysis: {class_folder_name}\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 472.5
    },
    {
      "filename": "EfficientNet_cell13_out0.png",
      "model": "EfficientNet",
      "cell_idx": 13,
      "section": "CELL 5 ── Explore: Sample Images",
      "code_title": "plt.suptitle(\"Training Samples\", fontsize=16, fontweight=\"bold\")",
      "size_kb": 1577.1
    },
    {
      "filename": "EfficientNet_cell15_out0.png",
      "model": "EfficientNet",
      "cell_idx": 15,
      "section": "CELL 6 ── Class Distribution",
      "code_title": "ax.set_title(\"Class Distribution across Splits\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 60.1
    },
    {
      "filename": "EfficientNet_cell18_out0.png",
      "model": "EfficientNet",
      "cell_idx": 18,
      "section": "CELL 7 ── Data Augmentation",
      "code_title": "plt.suptitle(\"Augmented Versions of One Image\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 508.4
    },
    {
      "filename": "EfficientNet_cell19_out0.png",
      "model": "EfficientNet",
      "cell_idx": 19,
      "section": "CELL 7 ── Data Augmentation",
      "code_title": "fig.suptitle(\"DIP: Isolated Geometric and Intensity Transformations in EfficientNetB0\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 824.3
    },
    {
      "filename": "EfficientNet_cell29_out0.png",
      "model": "EfficientNet",
      "cell_idx": 29,
      "section": "CELL 11 ── Training Curves",
      "code_title": "fig.suptitle(\"EfficientNetB0 — Training Curves\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 68.5
    },
    {
      "filename": "EfficientNet_cell33_out1.png",
      "model": "EfficientNet",
      "cell_idx": 33,
      "section": "CELL 13 ── Confusion Matrix & Classification Report",
      "code_title": "plt.title(\"Confusion Matrix — EfficientNetB0 (Test Set)\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 216.7
    },
    {
      "filename": "EfficientNet_cell35_out0.png",
      "model": "EfficientNet",
      "cell_idx": 35,
      "section": "CELL 14 ── Per-Class Accuracy Bar Chart",
      "code_title": "plt.ylabel(\"Accuracy (%)\"); plt.title(\"Per-Class Accuracy — EfficientNetB0\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 72.2
    },
    {
      "filename": "EfficientNet_cell37_out0.png",
      "model": "EfficientNet",
      "cell_idx": 37,
      "section": "CELL 15 ── Sample Predictions Grid (Green = Correct, Red = Wrong)",
      "code_title": "plt.suptitle(\"Sample Predictions — EfficientNetB0\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 2105.6
    },
    {
      "filename": "MobileNet_cell11_out0.png",
      "model": "MobileNet",
      "cell_idx": 11,
      "section": "CELL 4 ── Hyper-parameters & Data Loaders",
      "code_title": "fig.suptitle(f\"DIP Spatial Resizing Analysis: {class_folder_name}\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 472.4
    },
    {
      "filename": "MobileNet_cell13_out0.png",
      "model": "MobileNet",
      "cell_idx": 13,
      "section": "CELL 5 ── Explore: Sample Images from Each Split",
      "code_title": "plt.suptitle(title, fontsize=16, fontweight=\"bold\", y=1.01)",
      "size_kb": 1577.9
    },
    {
      "filename": "MobileNet_cell15_out0.png",
      "model": "MobileNet",
      "cell_idx": 15,
      "section": "CELL 6 ── Class Distribution Bar Chart",
      "code_title": "ax.set_title(\"Class Distribution across Splits\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 60.1
    },
    {
      "filename": "MobileNet_cell18_out0.png",
      "model": "MobileNet",
      "cell_idx": 18,
      "section": "CELL 7 ── Data Augmentation Pipeline",
      "code_title": "plt.suptitle(\"Augmented Versions of One Image\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 500.9
    },
    {
      "filename": "MobileNet_cell19_out0.png",
      "model": "MobileNet",
      "cell_idx": 19,
      "section": "CELL 7 ── Data Augmentation Pipeline",
      "code_title": "fig.suptitle(\"DIP: Isolated Geometric and Intensity Transformations in MobileNetV2\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 824.2
    },
    {
      "filename": "MobileNet_cell29_out0.png",
      "model": "MobileNet",
      "cell_idx": 29,
      "section": "CELL 11 ── Training Curves",
      "code_title": "fig.suptitle(\"MobileNetV2 — Training Curves\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 74.2
    },
    {
      "filename": "MobileNet_cell33_out1.png",
      "model": "MobileNet",
      "cell_idx": 33,
      "section": "CELL 13 ── Confusion Matrix & Classification Report",
      "code_title": "plt.title(\"Confusion Matrix — MobileNetV2 (Test Set)\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 216.1
    },
    {
      "filename": "MobileNet_cell35_out0.png",
      "model": "MobileNet",
      "cell_idx": 35,
      "section": "CELL 14 ── Per-Class Accuracy Bar Chart",
      "code_title": "plt.title(\"Per-Class Accuracy — MobileNetV2\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 73.0
    },
    {
      "filename": "MobileNet_cell37_out0.png",
      "model": "MobileNet",
      "cell_idx": 37,
      "section": "CELL 15 ── Sample Predictions Grid (Green = Correct, Red = Wrong)",
      "code_title": "plt.suptitle(\"Sample Predictions — MobileNetV2\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 2110.2
    },
    {
      "filename": "ResNet50_cell11_out0.png",
      "model": "ResNet50",
      "cell_idx": 11,
      "section": "CELL 4 ── Hyper-parameters & Data Loaders",
      "code_title": "fig.suptitle(f\"DIP Spatial Resizing Analysis: {class_folder_name}\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 521.5
    },
    {
      "filename": "ResNet50_cell13_out0.png",
      "model": "ResNet50",
      "cell_idx": 13,
      "section": "CELL 5 ── Explore: Sample Images",
      "code_title": "plt.suptitle(\"Training Samples\", fontsize=16, fontweight=\"bold\")",
      "size_kb": 1570.1
    },
    {
      "filename": "ResNet50_cell15_out0.png",
      "model": "ResNet50",
      "cell_idx": 15,
      "section": "CELL 6 ── Class Distribution",
      "code_title": "ax.set_title(\"Class Distribution across Splits\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 84.1
    },
    {
      "filename": "ResNet50_cell18_out0.png",
      "model": "ResNet50",
      "cell_idx": 18,
      "section": "CELL 7 ── Data Augmentation",
      "code_title": "plt.suptitle(\"Augmented Versions of One Image\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 508.0
    },
    {
      "filename": "ResNet50_cell19_out0.png",
      "model": "ResNet50",
      "cell_idx": 19,
      "section": "CELL 7 ── Data Augmentation",
      "code_title": "fig.suptitle(\"DIP: Isolated Geometric and Intensity Transformations in ResNet50\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 757.6
    },
    {
      "filename": "ResNet50_cell24_out0.png",
      "model": "ResNet50",
      "cell_idx": 24,
      "section": "DIP: Visualizing Pretrained Convolutional Feature Maps",
      "code_title": "fig.suptitle(f\"DIP Activation Maps: ResNet50 First Conv Layer (conv1_conv) — {CLASS_NAMES[sample_lbl]}\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 760.3
    },
    {
      "filename": "ResNet50_cell31_out0.png",
      "model": "ResNet50",
      "cell_idx": 31,
      "section": "CELL 11 ── Training Curves",
      "code_title": "fig.suptitle(\"ResNet50 — Training Curves\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 64.1
    },
    {
      "filename": "ResNet50_cell35_out1.png",
      "model": "ResNet50",
      "cell_idx": 35,
      "section": "CELL 13 ── Confusion Matrix & Classification Report",
      "code_title": "plt.title(\"Confusion Matrix — ResNet50 (Test Set)\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 173.7
    },
    {
      "filename": "ResNet50_cell37_out0.png",
      "model": "ResNet50",
      "cell_idx": 37,
      "section": "CELL 14 ── Per-Class Accuracy Bar Chart",
      "code_title": "plt.ylabel(\"Accuracy (%)\"); plt.title(\"Per-Class Accuracy — ResNet50\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 95.9
    },
    {
      "filename": "ResNet50_cell39_out0.png",
      "model": "ResNet50",
      "cell_idx": 39,
      "section": "CELL 15 ── Sample Predictions Grid (Green = Correct, Red = Wrong)",
      "code_title": "plt.suptitle(\"Sample Predictions — ResNet50\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 2105.1
    },
    {
      "filename": "VGG16_cell13_out0.png",
      "model": "VGG16",
      "cell_idx": 13,
      "section": "CELL 5 ── Explore: Sample Images",
      "code_title": "plt.suptitle(\"Training Samples\", fontsize=16, fontweight=\"bold\")",
      "size_kb": 1526.7
    },
    {
      "filename": "VGG16_cell15_out0.png",
      "model": "VGG16",
      "cell_idx": 15,
      "section": "CELL 6 ── Class Distribution",
      "code_title": "ax.set_title(\"Class Distribution across Splits\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 60.1
    },
    {
      "filename": "VGG16_cell18_out0.png",
      "model": "VGG16",
      "cell_idx": 18,
      "section": "CELL 7 ── Data Augmentation",
      "code_title": "plt.suptitle(\"Augmented Versions of One Image\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 1257.5
    },
    {
      "filename": "VGG16_cell31_out0.png",
      "model": "VGG16",
      "cell_idx": 31,
      "section": "CELL 11 ── Training Curves",
      "code_title": "fig.suptitle(\"VGG16 — Training Curves\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 66.0
    },
    {
      "filename": "VGG16_cell35_out1.png",
      "model": "VGG16",
      "cell_idx": 35,
      "section": "CELL 13 ── Confusion Matrix & Classification Report",
      "code_title": "plt.title(\"Confusion Matrix — VGG16 (Test Set)\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 212.1
    },
    {
      "filename": "VGG16_cell37_out0.png",
      "model": "VGG16",
      "cell_idx": 37,
      "section": "CELL 14 ── Per-Class Accuracy Bar Chart",
      "code_title": "plt.ylabel(\"Accuracy (%)\"); plt.title(\"Per-Class Accuracy — VGG16\", fontsize=13, fontweight=\"bold\")",
      "size_kb": 71.5
    },
    {
      "filename": "VGG16_cell39_out0.png",
      "model": "VGG16",
      "cell_idx": 39,
      "section": "CELL 15 ── Sample Predictions Grid (Green = Correct, Red = Wrong)",
      "code_title": "plt.suptitle(\"Sample Predictions — VGG16\", fontsize=14, fontweight=\"bold\")",
      "size_kb": 2105.6
    }
  ],
  "model_explanations": {
    "Comparison": [
      {
        "cell_idx": 0,
        "raw_markdown": "# MODEL COMPARISON - All 5 Classifiers\nCrop Pest and Disease Detection\nIMPORTANT: Run this notebook AFTER training and saving all 5 models.\nRequired saved model files:\n- MobileNetV2_Crop_Disease_Final.keras\n- ResNet50_Crop_Disease_Final.keras\n- EfficientNetB0_Crop_Disease_Final.keras\n- VGG16_Crop_Disease_Final.keras\n- CustomCNN_Crop_Disease_Final.keras\n\n---\n"
      },
      {
        "cell_idx": 1,
        "raw_markdown": "### Digital Image Processing Pipeline Comparison\n\nIn digital image processing (DIP) applied to computer vision, classification performance is heavily governed by the initial image processing pipeline. Architectural differences across classifiers interact directly with:\n- **Spatial Resolution:** Custom CNN ($128 \\times 128$) vs. Transfer Learning models ($224 \\times 224$).\n- **Radiometric Normalization:** Rescaling $[0, 1]$ vs. zero-centering $[-1, 1]$ vs. channel-wise ImageNet mean subtraction in BGR format.\n- **Data Augmentation:** Geometric spatial coordinate remapping (affine rotations, reflections, scaling) and radiometric intensity transforms (contrast, brightness).\n- **Convolutional Filtering Operators:** Standard 2D spatial convolution vs. Depthwise Separable Convolutions vs. Bottleneck Residuals vs. Squeeze-and-Excitation channel attention vs. Homogeneous stacked $3 \\times 3$ filters.\n\nThis comparative study evaluates the trade-offs between image processing complexity, receptive field capacity, parameter efficiency, and inference speed for field deployment in precision agriculture."
      },
      {
        "cell_idx": 2,
        "raw_markdown": "### CELL 1 ── Imports\n"
      },
      {
        "cell_idx": 4,
        "raw_markdown": "### CELL 2 ── Config: Paths & Parameters\n"
      },
      {
        "cell_idx": 6,
        "raw_markdown": "### CELL 3 ── Load Test Dataset (standard 224x224 reference)\n"
      },
      {
        "cell_idx": 8,
        "raw_markdown": "### CELL 4 ── Evaluate All Models & Collect Metrics\n"
      },
      {
        "cell_idx": 10,
        "raw_markdown": "### CELL 5 ── Summary Table (printed)\n"
      },
      {
        "cell_idx": 12,
        "raw_markdown": "### CELL 6 ── Bar Chart: Accuracy Comparison\n"
      },
      {
        "cell_idx": 14,
        "raw_markdown": "### CELL 7 ── Grouped Bar Chart: Accuracy / Precision / Recall / F1\n"
      },
      {
        "cell_idx": 16,
        "raw_markdown": "### CELL 8 ── Inference Speed Comparison\n"
      },
      {
        "cell_idx": 18,
        "raw_markdown": "### CELL 9 ── Radar / Spider Chart: All 4 Metrics per Model\n"
      },
      {
        "cell_idx": 20,
        "raw_markdown": "### CELL 10 ── Confusion Matrices for All Models (side by side)\n"
      },
      {
        "cell_idx": 22,
        "raw_markdown": "### CELL 11 ── Per-Class F1 Score Heatmap  (Models × Classes)\n"
      },
      {
        "cell_idx": 24,
        "raw_markdown": "### CELL 12 ── Accuracy vs Inference Speed Scatter Plot\n"
      },
      {
        "cell_idx": 26,
        "raw_markdown": "### CELL 13 ── Print Best Model\n"
      },
      {
        "cell_idx": 28,
        "raw_markdown": "### CELL 14 ── Export Comparison Results to CSV\n"
      },
      {
        "cell_idx": 30,
        "raw_markdown": "### Comparative Analysis of Digital Image Processing Pipelines\n\nThe table below provides a comprehensive comparison of the image processing pipelines, spatial filtering architectures, and computational footprints implemented across all five models in this case study.\n\n| Pipeline Dimension | Custom CNN | MobileNetV2 | ResNet50 | EfficientNetB0 | VGG16 |\n|:---|:---|:---|:---|:---|:---|\n| **Input Spatial Resolution** | $128 \\times 128 \\times 3$ | $224 \\times 224 \\times 3$ | $224 \\times 224 \\times 3$ | $224 \\times 224 \\times 3$ | $224 \\times 224 \\times 3$ |\n| **Total Input Pixel Values** | $49,152$ | $150,528$ | $150,528$ | $150,528$ | $150,528$ |\n| **Pixel Intensity Preprocessing** | Linear rescaling to $[0.0, 1.0]$ via $X / 255.0$ | Symmetrical zero-centering to $[-1.0, 1.0]$ via $(X/127.5)-1$ | Channel permutation RGB $\\to$ BGR + ImageNet mean subtraction | Internal built-in rescaling & normalization (raw $[0, 255]$) | Channel permutation RGB $\\to$ BGR + ImageNet mean subtraction |\n| **Geometric Augmentations** | Flip (H+V), Rotation ($\\pm 90^\\circ$), Zoom ($\\pm 20\\%$), Translation ($\\pm 10\\%$) | Flip (H+V), Rotation ($\\pm 90^\\circ$), Zoom ($\\pm 20\\%$) | Flip (H+V), Rotation ($\\pm 90^\\circ$), Zoom ($\\pm 20\\%$) | Flip (H+V), Rotation ($\\pm 90^\\circ$), Zoom ($\\pm 20\\%$) | Flip (Horizontal only), Rotation ($\\pm 72^\\circ$), Zoom ($\\pm 15\\%$) |\n| **Intensity Augmentations** | Contrast ($\\pm 15\\%$), Brightness ($\\pm 10\\%$) | Contrast ($\\pm 15\\%$), Brightness ($\\pm 10\\%$) | Contrast ($\\pm 15\\%$), Brightness ($\\pm 10\\%$) | Contrast ($\\pm 15\\%$), Brightness ($\\pm 10\\%$) | Contrast ($\\pm 10\\%$) only *(No brightness)* |\n| **Convolution Architecture** | 5-block standard 2D convolution ($3 \\times 3$ kernels) | Inverted Residuals with Depthwise Separable Convolutions | 50-layer Bottleneck Residual Blocks with Identity Shortcuts | Mobile Inverted Bottleneck (MBConv) with SE Channel Attention | 5 blocks of homogeneous stacked $3 \\times 3$ convolutions |\n| **Feature Extraction Mechanism** | Progressive filter doubling ($32 \\to 512$) + Global Pooling | Factorized 2D spatial filtering per channel + $1 \\times 1$ pointwise mix | Residual identity gradient highways: $H(x) = F(x) + x$ | Compound-scaled depth, width & resolution + SE attention | Receptive field enlargement via cascaded small kernels |\n| **Spatial Aggregation Head** | Global Average Pooling | Global Average Pooling | Global Average Pooling | Global Average Pooling | `layers.Flatten()` (Dense spatial vector) |\n| **Backbone Parameters** | $\\approx 1.7\\text{M}$ (Trained from scratch) | $\\approx 2.26\\text{M}$ (Pretrained ImageNet) | $\\approx 23.5\\text{M}$ (Pretrained ImageNet) | $\\approx 4.05\\text{M}$ (Pretrained ImageNet) | $\\approx 14.7\\text{M}$ (Pretrained ImageNet) |\n| **Total Model Parameters** | $\\approx 1.84\\text{M}$ | $\\approx 2.60\\text{M}$ | $\\approx 24.1\\text{M}$ | $\\approx 4.38\\text{M}$ | $\\approx 138\\text{M}$ |\n| **Batch Size Configuration** | $32$ | $32$ | $32$ | $32$ | $16$ *(Reduced due to heavy VRAM footprint)* |\n\n#### Technical Interpretation of Pipeline Performance Differences\n1. **Resolution vs. Micro-Symptom Detection:**\n   - Custom CNN operates at $128 \\times 128$ resolution, accelerating training on modest hardware but discarding fine spatial details that distinguish subtle early fungal pustules or thin leaf miner serpentine trails.\n   - The transfer learning models process $224 \\times 224$ images, preserving nearly **$3\\times$ more spatial pixels**, enabling more precise feature extraction of irregular necrotic spot contours.\n2. **Impact of Pretrained Feature Hierarchies:**\n   - While Custom CNN must learn basic spatial primitives (edges, gradients, color boundaries) entirely from scratch on crop images alone, the transfer learning models begin with rich spatial feature representations optimized on ImageNet's 1.4 million diverse images.\n3. **Architectural Trade-Offs (Convolutional Mechanisms):**\n   - **MobileNetV2** achieves low inference latency by factorizing 2D spatial filtering from cross-channel combination, making it ideal for drone or mobile field scouting.\n   - **ResNet50** leverages deep skip connections that allow gradients to propagate through 50 layers without attenuation, extracting deep hierarchical disease features.\n   - **EfficientNetB0** combines depthwise convolutions with Squeeze-and-Excitation channel attention, dynamically amplifying channels containing disease-indicative chlorotic and necrotic patterns while attenuating background soil noise.\n   - **VGG16** provides clean, textbook receptive field expansion via stacked $3 \\times 3$ filters, but its enormous parameter volume ($138\\text{M}$) and unpooled Flatten layer result in high memory consumption and latency.\n\n> **Academic Note:** Observed accuracy differences cannot be attributed solely to image processing. They result from the combined effect of spatial input resolution, network depth, parameter capacity, and transfer learning initialization."
      },
      {
        "cell_idx": 31,
        "raw_markdown": "### Experiment: Effect of Image Degradations on Model Classification\n\nTo directly test the impact of digital image quality on classification performance, we evaluate model predictions on a deterministic subset of real test images under four controlled conditions: **Baseline Original**, **Gaussian Blurred**, **Reduced Contrast**, and **Grayscale**."
      },
      {
        "cell_idx": 33,
        "raw_markdown": "### Interpretation of Image Quality Degradation Experiment\n\nThis experiment evaluates the robustness of the trained classifiers when subjected to controlled digital image degradations common in real-world agricultural scouting:\n\n1. **Gaussian Blurring ($\\sigma = 2.0$):**\n   - **DIP Mechanism:** Low-pass filtering attenuates high spatial frequency image components, softening sharp edge gradients.\n   - **Pathological Impact:** Blurring obscures fine lesion margins, micro-pustules, and vein-delimited spot geometries. Models relying heavily on high-frequency edge filters experience reduced classification confidence.\n2. **Contrast Reduction ($40\\%$ Dynamic Range Compression):**\n   - **DIP Mechanism:** Point operation compressing the pixel intensity histogram towards median gray ($128$).\n   - **Pathological Impact:** Reduces intensity contrast between diseased lesions and surrounding healthy foliage. Models trained with robust contrast augmentation exhibit greater resilience to this degradation.\n3. **Grayscale Conversion ($R=G=B=Y$):**\n   - **DIP Mechanism:** Perceptual luminance reduction ($Y = 0.299R + 0.587G + 0.114B$) eliminating all chrominance ($Cr, Cb$) variance.\n   - **Pathological Impact:** Eliminates the chromatic distinction between healthy green chlorophyll, chlorotic yellowing, and necrotic brown cell death. This severely degrades accuracy for diseases whose primary diagnostic indicator is color rather than texture.\n\nThis empirical experiment demonstrates that **image processing operations directly govern the visual features accessible to neural classifiers**."
      }
    ],
    "CustomCNN": [
      {
        "cell_idx": 0,
        "raw_markdown": "# MODEL: Custom CNN (Built from Scratch)\nTASK : Crop Pest and Disease Detection - End-to-End Pipeline\nPaste each CELL block into a separate cell in your Jupyter Notebook.\nRun cells in order from top to bottom.\n\n---\n"
      },
      {
        "cell_idx": 1,
        "raw_markdown": "### Digital Image Processing Concepts Used in This Model\n\nIn digital image processing (DIP) for precision agriculture, crop pest and disease detection operates directly on discrete pixel arrays to identify localized and systemic plant pathologies. Crop disease symptoms—such as necrotic lesions, chlorotic rings, powdery fungal sporulation, and leaf miner serpentine tunnels—manifest as distinct spatial, chromatic, and textural variations against healthy foliage.\n\n#### Why Crop Images Require Preprocessing\n1. **Field Illumination Variations:** Uncontrolled outdoor lighting creates intense specular highlights, deep shadows, and variable color temperatures that alter raw pixel intensity values.\n2. **Scale and Perspective Differences:** Unconstrained capture distances and camera angles alter the apparent size and geometric orientation of leaf symptoms.\n3. **Complex Background Clutter:** Soil, weeds, dried organic matter, and neighboring foliage introduce high-frequency visual noise that must be handled robustly.\n4. **Sensor Noise and Downsampling Artifacts:** Sensor acquisition noise and spatial quantization require systematic normalization.\n\n#### Spatial and Intensity Transformations in Training\n- **Geometric Transformations:** Random spatial reflections (flipping), rotations, zoom scaling, and spatial translations teach the model rotational and scale invariance, simulating varied drone and handheld camera viewpoints.\n- **Intensity Transformations:** Contrast adjustment and brightness scaling simulate diurnal illumination shifts and camera exposure differences without altering underlying lesion morphology.\n\n#### Convolutional Feature Extraction in Custom CNN\nUnlike traditional DIP pipelines that rely on handcrafted spatial filters (e.g., fixed Sobel, Prewitt, or Laplacian operators) and manual feature descriptors (e.g., GLCM, LBP), a Convolutional Neural Network (CNN) learns **adaptive spatial convolution kernels** directly from training data.\n- **Early layers** apply small $3\\times 3$ kernels to extract low-level spatial primitives: edges, color gradients, and fine leaf margins.\n- **Intermediate layers** synthesize these primitives into texture patterns and lesion borders.\n- **Deep layers** aggregate localized patterns into high-level semantic representations of specific crop diseases.\n\n#### End-to-End DIP & Classification Pipeline\n$$\\text{Input Image } (H \\times W \\times 3) \\longrightarrow \\text{Image Decoding \\& Resizing } (128 \\times 128) \\longrightarrow \\text{Data Augmentation } \\longrightarrow \\text{Pixel Rescaling } [0, 1] \\longrightarrow \\text{Convolutional Feature Extraction } \\longrightarrow \\text{Global Pooling } \\longrightarrow \\text{Dense Classification}$$\n\n> **Important Case Study Note:** This model performs **whole-image classification** (predicting the overall disease category for the entire image) rather than explicit **semantic pixel segmentation** (which would delineate exact boundary contours for each diseased lesion)."
      },
      {
        "cell_idx": 2,
        "raw_markdown": "### CELL 1 ── Install Dependencies\n"
      },
      {
        "cell_idx": 4,
        "raw_markdown": "### CELL 2 ── Imports\n"
      },
      {
        "cell_idx": 6,
        "raw_markdown": "### CELL 3 ── Verify & Load Local Dataset  (70 / 15 / 15)\n"
      },
      {
        "cell_idx": 8,
        "raw_markdown": "### DIP: Digital Image Representation, Decoding, and Spatial Resizing\n\n#### Digital Color Image Representation\nA digital color photograph is represented as a 3D numerical matrix of shape $(H \\times W \\times C)$, where:\n- $H$ is the spatial height (number of pixel rows).\n- $W$ is the spatial width (number of pixel columns).\n- $C = 3$ represents the three additive primary color channels: **Red (R), Green (G), and Blue (B)**.\n- Each pixel intensity is an 8-bit unsigned integer ($uint8$) with discrete levels spanning $[0, 255]$ ($2^8 = 256$ intensity levels).\n\n#### Image Decoding\nStored JPEG images are compressed using Discrete Cosine Transform (DCT) quantization and Huffman entropy coding. During input pipeline execution, TensorFlow's decoding engine decompresses raw binary bitstreams into uncompressed 3D arrays of numerical pixel intensities.\n\n#### Image Resizing and Spatial Downsampling\nDeep neural networks process data in batches, requiring fixed, standardized tensor dimensions ($B \\times H \\times W \\times C$).\n- **Custom CNN Resolution:** This notebook standardizes all input images to **$128 \\times 128$ pixels**.\n- **Computational Trade-Off:** Resizing from high camera resolution (e.g., $400 \\times 400$ or higher) to $128 \\times 128$ drastically reduces computational complexity and GPU memory footprint ($128 \\times 128 \\times 3 = 49,152$ values vs. $400 \\times 400 \\times 3 = 480,000$ values—nearly a **$10\\times$ reduction**).\n- **Resolution Loss:** Aggressive spatial downsampling can attenuate high-frequency visual details, potentially blurring subtle early-stage disease symptoms such as micro-pustules or thin leaf miner tracks.\n- **Aspect Ratio Distortion:** Direct bilinear downsampling to a square ($128 \\times 128$) may cause geometric stretching if the original camera capture is non-square."
      },
      {
        "cell_idx": 9,
        "raw_markdown": "### CELL 4 ── Hyper-parameters & Data Loaders\n"
      },
      {
        "cell_idx": 12,
        "raw_markdown": "### CELL 5 ── Explore: Sample Images\n"
      },
      {
        "cell_idx": 14,
        "raw_markdown": "### DIP Demonstration: Digital Image Representation and Intensity Analysis\n\nIn digital image processing, color channels provide critical discriminative features for plant pathology. Diseased leaf tissue undergoes physiological breakdown causing **chlorosis** (loss of chlorophyll resulting in yellowing) and **necrosis** (cell death resulting in brown/black coloration).\n\nBelow, we perform an educational exploratory analysis on an actual crop image:\n1. Decomposing the image into separate Red, Green, and Blue intensity channels.\n2. Converting the RGB image to Grayscale using standard perceptual luminance weighting:\n   $$Y = 0.299R + 0.587G + 0.114B$$\n3. Computing pixel intensity histograms across RGB channels and the grayscale image to inspect pixel distribution across the $[0, 255]$ dynamic range.\n\n> **Note on Pipeline Integrity:** This demonstration is purely exploratory. The model's training pipeline retains full 3-channel RGB images to preserve vital chromatic diagnostic cues."
      },
      {
        "cell_idx": 16,
        "raw_markdown": "### CELL 6 ── Class Distribution\n"
      },
      {
        "cell_idx": 18,
        "raw_markdown": "### DIP: Geometric and Intensity Transformations\n\nData augmentation applies digital image processing transformations to synthetic training images, expanding effective dataset variance and enforcing invariance to camera orientation and field illumination.\n\n#### 1. Geometric Transformations (Spatial Coordinate Remapping)\nGeometric transformations alter the spatial coordinates $(x, y)$ of image pixels via 2D spatial mapping functions $I'(x', y') = I(T_x(x, y), T_y(x, y))$:\n- **Spatial Reflection (Flipping):** `RandomFlip(\"horizontal_and_vertical\")` reflects pixels across horizontal ($y' = H - y$) and vertical ($x' = W - x$) axes. Foliar diseases possess no natural gravitational orientation, making bilateral symmetry valid.\n- **Rotation:** `RandomRotation(0.25)` applies 2D affine rotation. In Keras, a factor of **$0.25$ represents a fraction of $2\\pi$**, meaning images are randomly rotated within $[-0.25 \\times 360^\\circ, +0.25 \\times 360^\\circ] = [-90^\\circ, +90^\\circ]$ (a full quarter turn), **not** 25 degrees.\n- **Scaling (Zoom):** `RandomZoom(0.20)` scales coordinates by $\\pm 20\\%$, simulating variable camera working distances.\n- **Translation:** `RandomTranslation(0.1, 0.1)` shifts the image spatially by $\\pm 10\\%$ along $x$ and $y$ axes, simulating off-center leaf framing.\n\n#### 2. Intensity Transformations (Radiometric Point Operations)\nIntensity transformations modify pixel intensity values directly without altering spatial pixel geometry:\n- **Contrast Adjustment:** `RandomContrast(0.15)` dynamically stretches or compresses the image dynamic range around its mean intensity: $I'(x,y) = \\bar{I} + c \\cdot (I(x,y) - \\bar{I})$, simulating variable ambient daylight and cloud cover.\n- **Brightness Adjustment:** `RandomBrightness(0.10)` shifts intensity levels additively: $I'(x,y) = I(x,y) + \\delta$, simulating overexposure or deep canopy shading."
      },
      {
        "cell_idx": 19,
        "raw_markdown": "### CELL 7 ── Data Augmentation\n"
      },
      {
        "cell_idx": 22,
        "raw_markdown": "### DIP: Convolutional Filtering and Hierarchical Feature Extraction\n\n#### Mathematical Formulation of 2D Spatial Convolution\nIn discrete 2D digital image processing, spatial filtering correlates an input feature map $X$ with a 2D filter kernel $K$ of spatial dimensions $M \\times N$:\n\n$$Y(i, j) = (X * K)(i, j) = \\sum_{m=-M/2}^{M/2} \\sum_{n=-N/2}^{N/2} K(m, n) \\cdot X(i + m, j + n)$$\n\nWhere:\n- $X(i+m, j+n)$ is the pixel intensity or receptive field feature value at spatial offset $(m, n)$.\n- $K(m, n)$ is the kernel weight matrix.\n- $Y(i, j)$ is the filtered output response (activation feature map).\n- In traditional DIP, $K$ is mathematically fixed (e.g., Sobel kernels for edge detection, Gaussian kernels for low-pass smoothing).\n- In Convolutional Neural Networks, **all kernel weights $K(m, n)$ are learnable parameters** optimized via backpropagation to isolate crop disease indicators.\n\n#### Hierarchical Feature Representation in Custom CNN\n1. **Low-Level Layers (Block 1 - 32 filters):** Extract high-frequency spatial gradients, crisp leaf edges, color boundaries, and vein structures.\n2. **Intermediate Layers (Blocks 2 & 3 - 64 & 128 filters):** Synthesize low-level gradients into textural primitives: circular fungal spots, chlorotic halos, and boundary contours.\n3. **High-Level Layers (Blocks 4 & 5 - 256 & 512 filters):** Capture broad semantic representations: severe leaf blight spread, mosaic disfigurations, and distinctive pest damage.\n4. **Global Average Pooling:** Converts spatial feature tensors $(B, H', W', C')$ into compact 1D vector representations $(B, C')$ by computing the spatial mean of each feature map:\n   $$GAP_c = \\frac{1}{H' \\times W'} \\sum_{i=1}^{H'} \\sum_{j=1}^{W'} Y_c(i, j)$$\n   This dramatically reduces parameter count compared to fully connected flattening and enforces translation invariance.\n\n---\n\n### DIP: Pixel Intensity Preprocessing\n\n| Model | Preprocessing Operation | Input Scale Expected |\n|---|---|---|\n| **Custom CNN** | Linear Rescaling: $X' = \\frac{X}{255.0}$ | Maps raw $[0, 255]$ uint8 to $[0.0, 1.0]$ float32 |\n\n#### Critical Implementation Note: Augmentation and Normalization Ordering\nIn this updated pipeline:\n- `data_augmentation` is applied **first** on raw $[0, 255]$ pixel values.\n- This ensures `RandomBrightness(0.10, value_range=(0, 255))` and `RandomContrast` operate on their native $[0, 255]$ dynamic range without scale mismatch.\n- `layers.Rescaling(1.0 / 255)` is applied immediately **after** augmentation, mapping the augmented tensors into $[0.0, 1.0]$ float32 before they enter the convolutional layers.\n- Inputs are never rescaled twice."
      },
      {
        "cell_idx": 23,
        "raw_markdown": "### CELL 8 ── Build Custom CNN Architecture (from scratch)\n"
      },
      {
        "cell_idx": 25,
        "raw_markdown": "### DIP Demonstration: Classical Spatial Filtering and Edge Detection\n\nTo contextualize how CNN convolution differs from classical digital image processing, we examine two fundamental handcrafted spatial filtering operations applied to a real crop disease image:\n\n1. **Gaussian Smoothing (Low-Pass Filter):**\n   $$G(x, y) = \\frac{1}{2\\pi \\sigma^2} e^{-\\frac{x^2 + y^2}{2\\sigma^2}}$$\n   Attenuates high-frequency sensor noise and camera grain. However, excessive smoothing blurs delicate disease lesion margins.\n2. **Sobel Gradient Operator (High-Pass Spatial Filtering):**\n   Approximates discrete spatial derivatives across horizontal ($G_x$) and vertical ($G_y$) directions:\n   $$G_x = \\begin{bmatrix} -1 & 0 & +1 \\\\ -2 & 0 & +2 \\\\ -1 & 0 & +1 \\end{bmatrix} * I, \\quad G_y = \\begin{bmatrix} +1 & +2 & +1 \\\\ 0 & 0 & 0 \\\\ -1 & -2 & -1 \\end{bmatrix} * I$$\n   The total gradient magnitude $|\\nabla I| = \\sqrt{G_x^2 + G_y^2}$ highlights high-contrast boundaries: leaf margins, structural veins, and disease lesion perimeters.\n\n> **Key DIP Insight:** While classical Sobel and Gaussian filters rely on **fixed, hand-engineered mathematical coefficients**, a CNN optimizes its kernel matrices **adaptively from training data**, discovering complex oriented filters specialized for crop pathology."
      },
      {
        "cell_idx": 27,
        "raw_markdown": "### Digital Image Processing vs. Machine Learning in Model Training\n\nIt is essential in academic image processing to clearly distinguish the role of **Digital Image Processing (DIP)** from **Machine Learning (ML)**:\n\n- **Image Processing Operations:** Resizing, geometric spatial remapping (flips, rotations, zooms), pixel intensity normalization ($[0, 255] \\to [0, 1]$), 2D spatial convolution filtering, and pooling downsampling.\n- **Machine Learning Operations:** Sparse categorical cross-entropy loss computation, error backpropagation via chain rule, Adam optimizer parameter updates, learning rate decay schedules (`ReduceLROnPlateau`), and regularization (dropout, early stopping).\n\nDIP transforms raw sensor pixel arrays into structured spatial feature representations; Machine Learning optimizes network weights so those spatial representations yield high-accuracy disease classification."
      },
      {
        "cell_idx": 28,
        "raw_markdown": "### CELL 9 ── Compile & Train\n"
      },
      {
        "cell_idx": 30,
        "raw_markdown": "### CELL 10 ── Training Curves\n"
      },
      {
        "cell_idx": 32,
        "raw_markdown": "### CELL 11 ── Evaluate on Test Set\n"
      },
      {
        "cell_idx": 34,
        "raw_markdown": "### DIP: Visualizing Learned Convolutional Feature Maps\n\nTo verify that the convolutional layers are functioning as spatial feature extractors, we pass a test image through the trained network and extract activation feature maps from the **first convolutional layer (`block1_conv`)**.\n\nEach feature map represents the spatial response of a single learned $3 \\times 3$ convolution filter across the image:\n- Certain filters respond strongly to leaf boundary edges (high spatial frequencies).\n- Others respond to smooth green foliage regions (low spatial frequencies).\n- Others trigger on dark necrotic disease lesions or discolored chlorotic patches."
      },
      {
        "cell_idx": 36,
        "raw_markdown": "### CELL 12 ── Confusion Matrix & Classification Report\n"
      },
      {
        "cell_idx": 38,
        "raw_markdown": "### CELL 13 ── Per-Class Accuracy Bar Chart\n"
      },
      {
        "cell_idx": 40,
        "raw_markdown": "### CELL 14 ── Sample Predictions Grid (Green = Correct, Red = Wrong)\n"
      },
      {
        "cell_idx": 42,
        "raw_markdown": "### Interpretation of Image-Based Classification Results\n\nIn evaluating the sample prediction grid and confusion matrix from a digital image processing perspective:\n\n1. **Visual Cues Leveraged by the Classifier:**\n   - **Chromatic Discoloration:** Yellowing chlorotic borders and dark brown/black necrotic patches serve as primary chromatic signals.\n   - **Spatial Texture:** Powdery mildew patterns, leaf miner serpentine tracks, and circular fungal spots provide distinct spatial frequency signatures.\n2. **Sources of Inter-Class Confusion:**\n   - **Morphological Similarity:** Different pathogens can induce visually indistinguishable symptoms (e.g., *Maize leaf blight* vs. *Maize leaf spot* in early developmental stages).\n   - **Environmental Artifacts:** Strong sunlight reflections can be misclassified as light-colored fungal sporulation; deep shadows can mimic necrosis.\n   - **Background Interference:** Images containing visible soil, human hands, or non-target weeds introduce spurious spatial textures.\n3. **Academic Clarification on Evaluation vs. DIP:**\n   - A **confusion matrix** is a statistical classification metric, not a digital image processing technique.\n   - A **whole-image classification label** indicates the overall diagnosis of the leaf; it does **not** generate pixel-level lesion boundary masks.\n   - **Feature activation maps** show which spatial receptive fields triggered filter responses; they do **not** constitute semantic segmentation masks."
      },
      {
        "cell_idx": 43,
        "raw_markdown": "### CELL 15 ── Save Final Model\n"
      },
      {
        "cell_idx": 45,
        "raw_markdown": "### Digital Image Processing Summary and Case Study Findings\n\n#### 1. Input Image Representation and Dimensions\nThe Custom CNN operates on standardized $128 \\times 128 \\times 3$ RGB digital images ($49,152$ total pixel intensity values). Images are loaded from compressed JPEG files and decoded into 8-bit unsigned integer arrays ($[0, 255]$).\n\n#### 2. Image Transformations Applied\n- **Geometric Transformations:** Horizontal and vertical spatial reflections, affine rotation ($\\pm 90^\\circ$), spatial scaling zoom ($\\pm 20\\%$), and spatial translation ($\\pm 10\\%$). These enforce rotational and scale invariance against variable camera perspectives.\n- **Intensity Transformations:** Contrast stretching ($\\pm 15\\%$) and additive brightness adjustments ($\\pm 10\\%$) simulate fluctuating field illumination without altering lesion structures.\n\n#### 3. Pixel Intensity Preprocessing\nRaw $[0, 255]$ pixel values undergo data augmentation first, followed by linear normalization to $[0.0, 1.0]$ via `layers.Rescaling(1.0 / 255)`. This ensures gradient stability during backpropagation while keeping intensity transforms on their native scale.\n\n#### 4. Convolutional Feature Extraction\nThe architecture employs a 5-block hierarchical feature extraction hierarchy utilizing $3 \\times 3$ spatial kernels, Batch Normalization, and $2 \\times 2$ Max Pooling. Filter capacities scale from $32 \\to 64 \\to 128 \\to 256 \\to 512$, followed by Global Average Pooling ($GAP$) to distill 2D spatial feature maps into a 1D feature descriptor.\n\n#### 5. Relevance to Crop Disease Identification\nBy learning data-driven spatial kernels rather than relying on fixed hand-engineered filters (such as Sobel or Gabor), the network learns to detect subtle necrotic borders, chlorotic margins, and localized pest damage patterns across variable field conditions.\n\n#### 6. Limitations of the Image Processing Approach\n- **Lack of Explicit Lesion Segmentation:** Whole-image classification predicts a category for the entire tile but cannot quantify the exact percentage of infected foliar surface area.\n- **Spatial Resolution Downsampling:** Resizing to $128 \\times 128$ significantly accelerates training but sacrifices high-frequency spatial details required to detect very early micro-symptoms.\n- **Sensitivity to Background Interference:** Complex agricultural backgrounds (soil, weeds, shadows) can contaminate feature maps unless suppressed by attentional mechanisms or background subtraction."
      }
    ],
    "EfficientNet": [
      {
        "cell_idx": 0,
        "raw_markdown": "# MODEL: EfficientNetB0\nTASK : Crop Pest and Disease Detection - End-to-End Pipeline\nPaste each CELL block into a separate cell in your Jupyter Notebook.\nRun cells in order from top to bottom.\n\n---\n"
      },
      {
        "cell_idx": 1,
        "raw_markdown": "### Digital Image Processing Concepts Used in This Model\n\nIn digital image processing (DIP) for agricultural automation, identifying crop pests and diseases requires analyzing spatial gradients, color channel distributions, and textural structures from digital pixel matrices. Biological pathogens induce localized foliar cellular degeneration, manifesting as chlorotic rings, necrotic lesions, powdery fungal sporulation, and irregular blights.\n\n#### Why Crop Images Require Preprocessing\n1. **Uncontrolled Outdoor Lighting:** Natural field illumination introduces solar glare, deep shadows, and color temperature shifts that distort raw pixel intensity distributions.\n2. **Variable Capture Perspective:** Handheld and drone cameras capture leaves at diverse angles and distances, altering apparent symptom dimensions and orientation.\n3. **Complex Agricultural Backgrounds:** Soil, dead organic mulch, and background foliage introduce non-target high-frequency spatial noise.\n4. **Sensor Downsampling & Quantization:** Converting optical signals into digital matrices requires standardized spatial and radiometric normalization.\n\n#### Spatial and Intensity Transformations in Training\n- **Geometric Transformations:** Horizontal and vertical reflections, affine rotations ($\\pm 90^\\circ$), and zoom scaling enforce rotational and scale invariance.\n- **Intensity Transformations:** Contrast stretching and brightness adjustments simulate varying daylight intensity without altering structural lesion morphology.\n\n#### EfficientNetB0: Compound Scaling and Squeeze-and-Excitation Attention\nTraditional architectures scale a single dimension (such as network depth in ResNet, or channel width in WideResNet). EfficientNet introduces **Compound Scaling**, uniformly scaling:\n- **Network Depth ($d$):** Number of layers.\n- **Network Width ($w$):** Channel capacity per layer.\n- **Input Resolution ($r$):** Spatial dimensions of the processed image tensor.\n\nEfficientNetB0 integrates **Mobile Inverted Bottleneck Convolutions (MBConv)** with **Squeeze-and-Excitation (SE) channel attention**. SE blocks explicitly model interdependencies between feature channels, dynamically recalibrating feature maps to amplify disease-indicative chromatic and textural patterns while dampening uninformative background noise.\n\n#### End-to-End DIP & Classification Pipeline\n$$\\text{Input Image } (H \\times W \\times 3) \\longrightarrow \\text{Image Decoding \\& Resizing } (224 \\times 224) \\longrightarrow \\text{Data Augmentation } \\longrightarrow \\text{Internal Rescaling [0, 255] } \\longrightarrow \\text{MBConv + SE Feature Extraction } \\longrightarrow \\text{Global Pooling } \\longrightarrow \\text{Dense Classification}$$\n\n> **Important Case Study Note:** This model performs **whole-image classification** (predicting the disease category for the entire tile) rather than explicit **semantic pixel segmentation** (which would delineate exact boundary contours for each diseased lesion)."
      },
      {
        "cell_idx": 2,
        "raw_markdown": "### CELL 1 ── Install Dependencies\n"
      },
      {
        "cell_idx": 4,
        "raw_markdown": "### CELL 2 ── Imports\n"
      },
      {
        "cell_idx": 6,
        "raw_markdown": "### CELL 3 ── Verify & Load Local Dataset  (70 / 15 / 15)\n"
      },
      {
        "cell_idx": 8,
        "raw_markdown": "### DIP: Digital Image Representation, Decoding, and Spatial Resizing\n\n#### Digital Color Image Representation\nA digital color photograph is represented as a 3D numerical matrix of shape $(H \\times W \\times 3)$, where $H$ is the spatial height, $W$ is the spatial width, and 3 represents the primary color channels: **Red (R), Green (G), and Blue (B)**. Each pixel intensity is an 8-bit unsigned integer ($uint8$) with values spanning $[0, 255]$.\n\n#### Image Decoding\nStored JPEG images are compressed using Discrete Cosine Transform (DCT) quantization. During input pipeline execution, TensorFlow decompresses raw binary bitstreams into uncompressed 3D arrays of numerical pixel intensities.\n\n#### Image Resizing and Spatial Downsampling\nDeep neural networks process data in batches, requiring fixed, standardized tensor dimensions ($B \\times H \\times W \\times C$):\n- **EfficientNetB0 Resolution:** Input images are standardized to **$224 \\times 224$ pixels**.\n- **Computational Trade-Off:** Resizing standardizes camera captures of varying resolutions into $224 \\times 224 \\times 3 = 150,528$ values, balancing computational throughput with structural fidelity.\n- **Resolution Loss:** Downsampling high-resolution images can blur subtle early-stage fungal pustules or faint leaf miner tracks.\n- **Aspect Ratio Distortion:** Direct bilinear downsampling to a square without padding may stretch non-square camera frames."
      },
      {
        "cell_idx": 9,
        "raw_markdown": "### CELL 4 ── Hyper-parameters & Data Loaders\n"
      },
      {
        "cell_idx": 12,
        "raw_markdown": "### CELL 5 ── Explore: Sample Images\n"
      },
      {
        "cell_idx": 14,
        "raw_markdown": "### CELL 6 ── Class Distribution\n"
      },
      {
        "cell_idx": 16,
        "raw_markdown": "### DIP: Geometric and Intensity Transformations\n\nData augmentation applies digital image processing transformations to synthetic training images, expanding effective dataset variance and enforcing invariance to camera orientation and field illumination.\n\n#### 1. Geometric Transformations (Spatial Coordinate Remapping)\nGeometric transformations alter the spatial coordinates $(x, y)$ of image pixels via 2D spatial mapping functions $I'(x', y') = I(T_x(x, y), T_y(x, y))$:\n- **Spatial Reflection (Flipping):** `RandomFlip(\"horizontal_and_vertical\")` reflects pixels across horizontal ($y' = H - y$) and vertical ($x' = W - x$) axes. Foliar diseases possess no fixed gravitational orientation.\n- **Rotation:** `RandomRotation(0.25)` applies 2D affine rotation. In Keras, a factor of **$0.25$ represents a fraction of $2\\pi$**, meaning images are randomly rotated within $[-0.25 \\times 360^\\circ, +0.25 \\times 360^\\circ] = [-90^\\circ, +90^\\circ]$ (a full quarter turn), **not** 25 degrees.\n- **Scaling (Zoom):** `RandomZoom(0.20)` scales coordinates by $\\pm 20\\%$, simulating variable camera working distances.\n\n#### 2. Intensity Transformations (Radiometric Point Operations)\nIntensity transformations modify pixel intensity values directly without altering spatial pixel geometry:\n- **Contrast Adjustment:** `RandomContrast(0.15)` dynamically stretches or compresses the image dynamic range around its mean intensity: $I'(x,y) = \\bar{I} + c \\cdot (I(x,y) - \\bar{I})$, simulating variable ambient daylight and cloud cover.\n- **Brightness Adjustment:** `RandomBrightness(0.10)` shifts intensity levels additively: $I'(x,y) = I(x,y) + \\delta$, simulating overexposure or deep canopy shading."
      },
      {
        "cell_idx": 17,
        "raw_markdown": "### CELL 7 ── Data Augmentation\n"
      },
      {
        "cell_idx": 20,
        "raw_markdown": "### DIP: Convolutional Filtering and Hierarchical Feature Extraction\n\n#### Mathematical Formulation of 2D Spatial Convolution\nIn discrete 2D digital image processing, spatial filtering correlates an input feature map $X$ with a 2D filter kernel $K$ of spatial dimensions $M \\times N$:\n\n$$Y(i, j) = (X * K)(i, j) = \\sum_{m=-M/2}^{M/2} \\sum_{n=-N/2}^{N/2} K(m, n) \\cdot X(i + m, j + n)$$\n\n#### EfficientNetB0: MBConv Blocks & Squeeze-and-Excitation Channel Attention\nEfficientNetB0 builds upon inverted bottleneck residual blocks augmented with **Squeeze-and-Excitation (SE)** attention:\n1. **Depthwise Spatial Convolution:** Computes spatial feature responses per channel using $3 \\times 3$ or $5 \\times 5$ depthwise kernels.\n2. **Squeeze Step (Global Context Aggregation):** Global spatial average pooling aggregates feature map $U_c$ into a channel-wise statistic $z_c$:\n   $$z_c = \\mathbf{F}_{sq}(U_c) = \\frac{1}{H \\times W} \\sum_{i=1}^H \\sum_{j=1}^W U_c(i, j)$$\n3. **Excitation Step (Adaptive Feature Recalibration):** A two-layer bottleneck fully-connected network with gating produces channel-specific scale weights:\n   $$\\mathbf{s} = \\mathbf{F}_{ex}(\\mathbf{z}, \\mathbf{W}) = \\sigma(\\mathbf{W}_2 \\cdot \\text{ReLU}(\\mathbf{W}_1 \\cdot \\mathbf{z}))$$\n4. **Channel Scaling:** The original spatial feature map is scaled by the channel weight:\n   $$\\widetilde{X}_c = s_c \\cdot U_c$$\n   In crop disease detection, this dynamic channel weighting automatically boosts channels highlighting chlorotic yellowing or necrotic lesion edges while dampening irrelevant soil background channels.\n\n---\n\n### DIP: Pixel Intensity Preprocessing\n\n| Model | Preprocessing Function | Expected Pixel Scale | Transformations Applied |\n|---|---|---|---|\n| **EfficientNetB0** | Built-in internal normalization | Raw $[0, 255]$ uint8/float32 | Internal rescaling and ImageNet standardization embedded inside Keras model |\n\n#### Critical Preprocessing Note:\nUnlike ResNet50 or MobileNetV2, **EfficientNet includes its own Rescaling and Normalization layers inside the base model architecture**.\nRaw pixel tensors in the range $[0, 255]$ must be fed directly into the model without applying external `preprocess_input` or manual `/ 255.0` rescaling, avoiding double normalization."
      },
      {
        "cell_idx": 21,
        "raw_markdown": "### CELL 8 ── Build EfficientNetB0 Transfer Learning Model\n"
      },
      {
        "cell_idx": 23,
        "raw_markdown": "### Digital Image Processing vs. Machine Learning in Model Training\n\n- **Image Processing Operations:** Resizing to $224 \\times 224$, geometric coordinate transforms (flips, rotations, zooms), internal pixel normalization, depthwise spatial convolutions, Squeeze-and-Excitation channel recalibration, and global average pooling.\n- **Machine Learning Operations:** Categorical cross-entropy loss computation, error backpropagation, Adam optimizer weight updates, learning rate reduction on plateaus, transfer learning backbone freezing (Phase 1), and selective layer unfreezing (Phase 2 fine-tuning).\n\nDIP structures the optical signals into informative spatial feature representations; ML discovers the optimal weighting parameters across those representations."
      },
      {
        "cell_idx": 24,
        "raw_markdown": "### CELL 9 ── Compile & Train Phase 1 (frozen backbone)\n"
      },
      {
        "cell_idx": 26,
        "raw_markdown": "### CELL 10 ── Fine-Tuning Phase 2 (unfreeze last 20 layers)\n"
      },
      {
        "cell_idx": 28,
        "raw_markdown": "### CELL 11 ── Training Curves"
      },
      {
        "cell_idx": 30,
        "raw_markdown": "### CELL 12 ── Evaluate on Test Set\n"
      },
      {
        "cell_idx": 32,
        "raw_markdown": "### CELL 13 ── Confusion Matrix & Classification Report\n"
      },
      {
        "cell_idx": 34,
        "raw_markdown": "### CELL 14 ── Per-Class Accuracy Bar Chart\n"
      },
      {
        "cell_idx": 36,
        "raw_markdown": "### CELL 15 ── Sample Predictions Grid (Green = Correct, Red = Wrong)\n"
      },
      {
        "cell_idx": 38,
        "raw_markdown": "### Interpretation of Image-Based Classification Results\n\nIn evaluating the sample prediction grid and confusion matrix from a digital image processing perspective:\n\n1. **Visual Cues Leveraged by the Classifier:**\n   - **Chromatic Discoloration:** Chlorotic margins and dark necrotic lesions serve as primary chromatic markers.\n   - **Spatial Texture:** Powdery mildew, serpentine leaf miner tracks, and fungal spots provide distinct spatial frequency signatures.\n2. **Sources of Inter-Class Confusion:**\n   - **Morphological Similarity:** Early blight and leaf spots produce similar circular necrotic lesions.\n   - **Environmental Artifacts:** Harsh daylight glares and deep foliage shadows can distort color and contrast.\n   - **Complex Backgrounds:** Soil backgrounds and overlapping non-target vegetation introduce spurious edge responses.\n3. **Academic Clarification on Evaluation vs. DIP:**\n   - A **confusion matrix** evaluates categorical classification performance, not digital image processing.\n   - A **whole-image classification label** indicates the diagnosis of the overall image tile; it does **not** generate pixel-level lesion boundary masks.\n   - **Activation maps** show filter responses across spatial receptive fields; they do **not** constitute semantic segmentation masks."
      },
      {
        "cell_idx": 39,
        "raw_markdown": "### CELL 16 ── Save Final Model\n"
      },
      {
        "cell_idx": 41,
        "raw_markdown": "### Digital Image Processing Summary and Case Study Findings\n\n#### 1. Input Image Representation and Dimensions\nEfficientNetB0 processes standardized $224 \\times 224 \\times 3$ RGB digital images ($150,528$ pixel intensity values), decoded from JPEG files into numerical arrays.\n\n#### 2. Image Transformations Applied\n- **Geometric Transformations:** Horizontal and vertical reflections, affine rotation ($\\pm 90^\\circ$), and zoom scaling ($\\pm 20\\%$) enforce rotational and scale invariance against camera positioning.\n- **Intensity Transformations:** Contrast adjustment ($\\pm 15\\%$) and brightness shifts ($\\pm 10\\%$) simulate changing sunlight and exposure levels.\n\n#### 3. Pixel Intensity Preprocessing\nEfficientNetB0 incorporates internal rescaling layers directly within its computation graph. Raw $[0, 255]$ pixel values are supplied without external normalization, preventing double rescaling.\n\n#### 4. Convolutional Feature Extraction\nEfficientNetB0 utilizes compound-scaled Mobile Inverted Bottleneck (MBConv) blocks coupled with Squeeze-and-Excitation (SE) channel attention. The SE mechanism dynamically recalibrates feature maps, directing attention to disease-relevant chromatic and textural patterns.\n\n#### 5. Relevance to Crop Disease Identification\nThe compound scaling and channel attention mechanisms provide an optimal balance between parameter efficiency and discriminative representation, allowing the model to distinguish closely related foliar diseases.\n\n#### 6. Limitations of the Image Processing Approach\n- **No Explicit Lesion Segmentation:** Categorizes whole image tiles rather than segmenting individual lesion perimeters.\n- **Downsampling:** Bilinear downsampling to $224 \\times 224$ can suppress very fine micro-lesions.\n- **Background Interference:** In the absence of explicit background masking, complex soil and weed textures can influence predictions."
      }
    ],
    "MobileNet": [
      {
        "cell_idx": 0,
        "raw_markdown": "# MODEL: MobileNetV2\nTASK : Crop Pest and Disease Detection - End-to-End Pipeline\nPaste each CELL block into a separate cell in your Jupyter Notebook.\nRun cells in order from top to bottom.\n\n---\n"
      },
      {
        "cell_idx": 1,
        "raw_markdown": "### Digital Image Processing Concepts Used in This Model\n\nIn digital image processing (DIP) for agricultural automation, crop pest and disease detection requires extracting discriminative spatial, chromatic, and textural signatures from raw pixel arrays. Foliar infections (such as bacterial leaf blight, viral mosaic mottle, and fungal leaf spot) induce localized tissue breakdown, producing characteristic chlorotic halos and necrotic centers.\n\n#### Why Crop Images Require Preprocessing\n1. **Uncontrolled Illumination:** Field imagery captured under natural sunlight suffers from harsh specular reflections, deep shadow occlusions, and variable diurnal color temperatures.\n2. **Camera Distance and Angle:** Handheld smartphones and agricultural drones capture crops from non-uniform working distances and perspectives.\n3. **Complex Agricultural Backgrounds:** Soil backgrounds, dried twigs, and overlapping healthy leaves introduce high-frequency background clutter.\n4. **Sensor Variations:** Different mobile camera sensors introduce varying noise profiles and dynamic ranges.\n\n#### Spatial and Intensity Transformations in Training\n- **Geometric Transformations:** Random horizontal/vertical reflections, affine rotations, and zoom scaling enforce rotational and scale invariance.\n- **Intensity Transformations:** Contrast adjustment and brightness scaling simulate shifting daylight intensity without modifying lesion geometry.\n\n#### MobileNetV2: Efficient Spatial Filtering via Depthwise Separable Convolutions\nTraditional DIP filters and standard CNN convolutions apply 3D spatial-channel kernels that compute spatial and channel correlations simultaneously. MobileNetV2 factorizes standard convolution into two distinct steps:\n1. **Depthwise Convolution:** Performs 2D spatial filtering per input channel independently (retaining spatial gradient patterns).\n2. **Pointwise Convolution:** Applies $1 \\times 1$ linear projections to compute cross-channel linear combinations.\n\nThis factorization drastically reduces floating-point operations (FLOPs) and memory access, making MobileNetV2 optimal for real-time edge processing on smartphones and field scouting hardware.\n\n#### End-to-End DIP & Classification Pipeline\n$$\\text{Input Image } (H \\times W \\times 3) \\longrightarrow \\text{Image Decoding \\& Resizing } (224 \\times 224) \\longrightarrow \\text{Data Augmentation } \\longrightarrow \\text{MobileNet Preprocessing } [-1, 1] \\longrightarrow \\text{Depthwise Separable Feature Extraction } \\longrightarrow \\text{Global Pooling } \\longrightarrow \\text{Dense Classification}$$\n\n> **Important Case Study Note:** This model performs **whole-image classification** (categorizing the overall image into one of 22 pest/disease classes) rather than explicit **semantic pixel segmentation** (which would delineate exact boundary contours for each diseased lesion)."
      },
      {
        "cell_idx": 2,
        "raw_markdown": "### CELL 1 ── Install Dependencies\n"
      },
      {
        "cell_idx": 4,
        "raw_markdown": "### CELL 2 ── Imports\n"
      },
      {
        "cell_idx": 6,
        "raw_markdown": "### CELL 3 ── Verify & Load Local Dataset  (70 / 15 / 15)\n"
      },
      {
        "cell_idx": 8,
        "raw_markdown": "### DIP: Digital Image Representation, Decoding, and Spatial Resizing\n\n#### Digital Color Image Representation\nA digital color photograph is represented as a 3D numerical matrix of shape $(H \\times W \\times 3)$, where $H$ is the image height, $W$ is the image width, and 3 denotes the primary color channels: **Red (R), Green (G), and Blue (B)**. Each pixel intensity is stored as an 8-bit unsigned integer ($uint8$) with discrete intensity levels $\\in [0, 255]$.\n\n#### Image Decoding\nStored JPEG files are compressed using Discrete Cosine Transform (DCT) quantization. During dataset loading, TensorFlow decodes the binary compressed bitstream into uncompressed 3D numerical arrays of pixel values.\n\n#### Image Resizing and Spatial Downsampling\nBatched tensor processing requires fixed, uniform spatial dimensions across all samples:\n- **MobileNetV2 Standard Resolution:** Input images are resized to **$224 \\times 224$ pixels**.\n- **Computational Trade-Off:** Resizing standardizes camera captures of varying resolutions into $224 \\times 224 \\times 3 = 150,528$ values, balancing computational efficiency with structural fidelity.\n- **Resolution Loss:** Downsampling high-resolution images can blur subtle early-stage fungal pustules or faint leaf miner tracks.\n- **Aspect Ratio Distortion:** Direct bilinear downsampling to a square without padding may stretch non-square camera frames."
      },
      {
        "cell_idx": 9,
        "raw_markdown": "### CELL 4 ── Hyper-parameters & Data Loaders\n"
      },
      {
        "cell_idx": 12,
        "raw_markdown": "### CELL 5 ── Explore: Sample Images from Each Split\n"
      },
      {
        "cell_idx": 14,
        "raw_markdown": "### CELL 6 ── Class Distribution Bar Chart\n"
      },
      {
        "cell_idx": 16,
        "raw_markdown": "### DIP: Geometric and Intensity Transformations\n\nData augmentation applies digital image processing transformations to synthetic training images, expanding effective dataset variance and enforcing invariance to camera orientation and field illumination.\n\n#### 1. Geometric Transformations (Spatial Coordinate Remapping)\nGeometric transformations alter the spatial coordinates $(x, y)$ of image pixels via 2D spatial mapping functions $I'(x', y') = I(T_x(x, y), T_y(x, y))$:\n- **Spatial Reflection (Flipping):** `RandomFlip(\"horizontal_and_vertical\")` reflects pixels across horizontal ($y' = H - y$) and vertical ($x' = W - x$) axes. Foliar diseases possess no fixed gravitational orientation.\n- **Rotation:** `RandomRotation(0.25)` applies 2D affine rotation. In Keras, a factor of **$0.25$ represents a fraction of $2\\pi$**, meaning images are randomly rotated within $[-0.25 \\times 360^\\circ, +0.25 \\times 360^\\circ] = [-90^\\circ, +90^\\circ]$ (a full quarter turn), **not** 25 degrees.\n- **Scaling (Zoom):** `RandomZoom(0.20)` scales coordinates by $\\pm 20\\%$, simulating variable camera distances.\n\n#### 2. Intensity Transformations (Radiometric Point Operations)\nIntensity transformations modify pixel intensity values directly without altering spatial pixel geometry:\n- **Contrast Adjustment:** `RandomContrast(0.15)` dynamically stretches or compresses the image dynamic range around its mean intensity: $I'(x,y) = \\bar{I} + c \\cdot (I(x,y) - \\bar{I})$, simulating variable ambient daylight and cloud cover.\n- **Brightness Adjustment:** `RandomBrightness(0.10)` shifts intensity levels additively: $I'(x,y) = I(x,y) + \\delta$, simulating overexposure or deep canopy shading."
      },
      {
        "cell_idx": 17,
        "raw_markdown": "### CELL 7 ── Data Augmentation Pipeline\n"
      },
      {
        "cell_idx": 20,
        "raw_markdown": "### DIP: Convolutional Filtering and Hierarchical Feature Extraction\n\n#### Mathematical Formulation of 2D Spatial Convolution\nIn discrete 2D digital image processing, spatial filtering correlates an input feature map $X$ with a 2D filter kernel $K$ of spatial dimensions $M \\times N$:\n\n$$Y(i, j) = (X * K)(i, j) = \\sum_{m=-M/2}^{M/2} \\sum_{n=-N/2}^{N/2} K(m, n) \\cdot X(i + m, j + n)$$\n\n#### MobileNetV2: Depthwise Separable Convolutions & Inverted Residuals\nStandard convolution convolves all $C_{in}$ channels simultaneously with $C_{out}$ kernels of size $D_K \\times D_K \\times C_{in}$, requiring $D_K^2 \\cdot C_{in} \\cdot C_{out} \\cdot H \\cdot W$ multiplications.\n\nMobileNetV2 splits this into:\n1. **Depthwise Convolution ($3 \\times 3$):** Applies a single $3 \\times 3$ spatial filter to each input channel independently:\n   $$Y_{depthwise}(i, j, c) = \\sum_{m, n} K_c(m, n) \\cdot X(i+m, j+n, c)$$\n   Computes pure spatial filtering without cross-channel mixing.\n2. **Pointwise Convolution ($1 \\times 1$):** Applies $1 \\times 1$ convolutions across all channels:\n   $$Y_{pointwise}(i, j, k) = \\sum_c W(c, k) \\cdot Y_{depthwise}(i, j, c)$$\n   Computes linear cross-channel combinations.\n\n**Computational Efficiency Gain:**\n$$\\frac{\\text{Depthwise Separable Cost}}{\\text{Standard Conv Cost}} = \\frac{D_K^2 \\cdot C_{in} + C_{in} \\cdot C_{out}}{D_K^2 \\cdot C_{in} \\cdot C_{out}} = \\frac{1}{C_{out}} + \\frac{1}{D_K^2} \\approx \\frac{1}{9}$$\nThis represents an **$8$ to $9\\times$ reduction in spatial computational cost** with minimal accuracy degradation.\n\n3. **Inverted Residuals with Linear Bottlenecks:** Thin bottleneck layers are expanded to high-dimensional representations for non-linear depthwise filtering, then projected back to low-dimensional space with linear activations, preventing non-linearities from destroying manifold details.\n\n---\n\n### DIP: Pixel Intensity Preprocessing\n\n| Model | Preprocessing Function | Expected Pixel Range | Output Range |\n|---|---|---|---|\n| **MobileNetV2** | `tf.keras.applications.mobilenet_v2.preprocess_input` | $[0, 255]$ raw uint8/float32 | $[-1.0, +1.0]$ float32 |\n\n#### Transformation Formula:\n$$X_{norm} = \\frac{X}{127.5} - 1.0$$\nThis centers pixel intensities symmetrically around zero ($[0, 255] \\to [-1.0, 1.0]$), which accelerates gradient convergence in batch-normalized depthwise layers."
      },
      {
        "cell_idx": 21,
        "raw_markdown": "### CELL 8 ── Build MobileNetV2 Transfer Learning Model\n"
      },
      {
        "cell_idx": 23,
        "raw_markdown": "### Digital Image Processing vs. Machine Learning in Model Training\n\n- **Image Processing Operations:** Resizing to $224 \\times 224$, geometric coordinate transforms (flips, rotations, zooms), pixel intensity normalization to $[-1, 1]$, depthwise 2D spatial filtering, and global spatial average pooling.\n- **Machine Learning Operations:** Categorical cross-entropy loss computation, error backpropagation, Adam optimizer weight updates, learning rate reduction on plateaus, transfer learning backbone freezing (Phase 1), and selective layer unfreezing (Phase 2 fine-tuning).\n\nDIP structures the optical signals into informative spatial feature representations; ML discovers the optimal weighting parameters across those representations."
      },
      {
        "cell_idx": 24,
        "raw_markdown": "### CELL 9 ── Compile & Train (Phase 1 — frozen backbone)\n"
      },
      {
        "cell_idx": 26,
        "raw_markdown": "### CELL 10 ── Fine-Tuning (Phase 2 — unfreeze top 30 layers)\n"
      },
      {
        "cell_idx": 28,
        "raw_markdown": "### CELL 11 ── Training Curves\n"
      },
      {
        "cell_idx": 30,
        "raw_markdown": "### CELL 12 ── Evaluate on Test Set\n"
      },
      {
        "cell_idx": 32,
        "raw_markdown": "### CELL 13 ── Confusion Matrix & Classification Report\n"
      },
      {
        "cell_idx": 34,
        "raw_markdown": "### CELL 14 ── Per-Class Accuracy Bar Chart\n"
      },
      {
        "cell_idx": 36,
        "raw_markdown": "### CELL 15 ── Sample Predictions Grid (Green = Correct, Red = Wrong)\n"
      },
      {
        "cell_idx": 38,
        "raw_markdown": "### Interpretation of Image-Based Classification Results\n\nIn evaluating the sample prediction grid and confusion matrix from a digital image processing perspective:\n\n1. **Visual Cues Leveraged by the Classifier:**\n   - **Chromatic Discoloration:** Chlorotic margins and dark necrotic lesions serve as primary chromatic markers.\n   - **Spatial Texture:** Powdery mildew, serpentine leaf miner tracks, and fungal spots provide distinct spatial frequency signatures.\n2. **Sources of Inter-Class Confusion:**\n   - **Morphological Similarity:** Early blight and leaf spots produce similar circular necrotic lesions.\n   - **Environmental Artifacts:** Harsh daylight glares and deep foliage shadows can distort color and contrast.\n   - **Complex Backgrounds:** Soil backgrounds and overlapping non-target vegetation introduce spurious edge responses.\n3. **Academic Clarification on Evaluation vs. DIP:**\n   - A **confusion matrix** evaluates categorical classification performance, not digital image processing.\n   - A **whole-image classification label** indicates the diagnosis of the overall image tile; it does **not** generate pixel-level lesion boundary masks.\n   - **Activation maps** show filter responses across spatial receptive fields; they do **not** constitute semantic segmentation masks."
      },
      {
        "cell_idx": 39,
        "raw_markdown": "### CELL 16 ── Save Final Model\n"
      },
      {
        "cell_idx": 41,
        "raw_markdown": "### Digital Image Processing Summary and Case Study Findings\n\n#### 1. Input Image Representation and Dimensions\nMobileNetV2 processes standardized $224 \\times 224 \\times 3$ RGB digital images ($150,528$ pixel intensity values), decoded from JPEG files into numerical arrays.\n\n#### 2. Image Transformations Applied\n- **Geometric Transformations:** Horizontal and vertical reflections, affine rotation ($\\pm 90^\\circ$), and zoom scaling ($\\pm 20\\%$) enforce rotational and scale invariance against camera positioning.\n- **Intensity Transformations:** Contrast adjustment ($\\pm 15\\%$) and brightness shifts ($\\pm 10\\%$) simulate changing sunlight and exposure levels.\n\n#### 3. Pixel Intensity Preprocessing\nInput tensors are scaled to $[-1.0, +1.0]$ float32 via `mobilenet_v2.preprocess_input` ($X' = X/127.5 - 1.0$), ensuring zero-centered pixel distributions aligned with pretrained ImageNet weights.\n\n#### 4. Convolutional Feature Extraction\nMobileNetV2 uses Depthwise Separable Convolutions to decouple 2D spatial filtering ($3 \\times 3$ depthwise) from channel combination ($1 \\times 1$ pointwise), reducing computation by $\\approx 89\\%$. Inverted residuals with linear bottlenecks preserve delicate symptom features.\n\n#### 5. Relevance to Crop Disease Identification\nThe lightweight depthwise separable architecture delivers high classification capability while remaining efficient enough for real-time mobile and drone deployment in precision agriculture.\n\n#### 6. Limitations of the Image Processing Approach\n- **No Explicit Lesion Segmentation:** Categorizes whole image tiles rather than segmenting individual lesion perimeters.\n- **Downsampling:** Bilinear downsampling to $224 \\times 224$ can suppress very fine micro-lesions.\n- **Background Interference:** In the absence of explicit background masking, complex soil and weed textures can influence predictions."
      }
    ],
    "ResNet50": [
      {
        "cell_idx": 0,
        "raw_markdown": "# MODEL: ResNet50\nTASK : Crop Pest and Disease Detection - End-to-End Pipeline\nPaste each CELL block into a separate cell in your Jupyter Notebook.\nRun cells in order from top to bottom.\n\n---\n"
      },
      {
        "cell_idx": 1,
        "raw_markdown": "### Digital Image Processing Concepts Used in This Model\n\nIn digital image processing (DIP) applied to plant pathology, diagnosing crop pests and diseases requires analyzing multi-scale spatial textures, color channel variations, and morphological boundaries in leaf imagery. Pathological indicators—such as necrotic leaf spot margins, bacterial blights, and viral streak patterns—create localized high-frequency spatial gradients against healthy foliage.\n\n#### Why Crop Images Require Preprocessing\n1. **Uncontrolled Outdoor Lighting:** Natural field illumination introduces solar glare, deep shadows, and color temperature shifts that distort raw pixel intensity distributions.\n2. **Variable Capture Perspective:** Handheld and drone cameras capture leaves at diverse angles and distances, altering apparent symptom dimensions and orientation.\n3. **Complex Agricultural Backgrounds:** Soil, dead organic mulch, and background foliage introduce non-target high-frequency spatial noise.\n4. **Sensor Downsampling & Quantization:** Converting optical signals into digital matrices requires standardized spatial and radiometric normalization.\n\n#### Spatial and Intensity Transformations in Training\n- **Geometric Transformations:** Horizontal and vertical reflections, affine rotations ($\\pm 90^\\circ$), and zoom scaling enforce rotational and scale invariance.\n- **Intensity Transformations:** Contrast stretching and brightness adjustments simulate varying daylight intensity without altering structural lesion morphology.\n\n#### ResNet50: Deep Feature Extraction via Residual Connections\nStandard deep convolutional networks suffer from the **vanishing gradient problem**, where spatial gradient signals attenuate as they backpropagate through dozens of layers. ResNet50 resolves this using **identity skip connections**:\n$$H(x) = F(x) + x$$\nWhere $F(x)$ represents the residual mapping learned by stacked convolutional layers, and $x$ is the unperturbed identity input. This architecture allows gradients to flow directly through 50 layers, enabling the extraction of deeply abstract, hierarchical disease representations that capture both fine local lesion margins and broad contextual leaf structures.\n\n#### End-to-End DIP & Classification Pipeline\n$$\\text{Input Image } (H \\times W \\times 3) \\longrightarrow \\text{Image Decoding \\& Resizing } (224 \\times 224) \\longrightarrow \\text{Data Augmentation } \\longrightarrow \\text{ResNet Preprocessing (BGR + Mean Subtraction)} \\longrightarrow \\text{Deep Residual Feature Extraction } \\longrightarrow \\text{Global Pooling } \\longrightarrow \\text{Dense Classification}$$\n\n> **Important Case Study Note:** This model performs **whole-image classification** (predicting the disease category for the entire tile) rather than explicit **semantic pixel segmentation** (which would delineate exact boundary contours for each diseased lesion)."
      },
      {
        "cell_idx": 2,
        "raw_markdown": "### CELL 1 ── Install Dependencies\n"
      },
      {
        "cell_idx": 4,
        "raw_markdown": "### CELL 2 ── Imports\n"
      },
      {
        "cell_idx": 6,
        "raw_markdown": "### CELL 3 ── Verify & Load Local Dataset  (70 / 15 / 15)\n"
      },
      {
        "cell_idx": 8,
        "raw_markdown": "### DIP: Digital Image Representation, Decoding, and Spatial Resizing\n\n#### Digital Color Image Representation\nA digital color photograph is represented as a 3D numerical matrix of shape $(H \\times W \\times 3)$, where $H$ is the spatial height, $W$ is the spatial width, and 3 represents the primary color channels: **Red (R), Green (G), and Blue (B)**. Each pixel intensity is an 8-bit unsigned integer ($uint8$) with values spanning $[0, 255]$.\n\n#### Image Decoding\nStored JPEG images are compressed using Discrete Cosine Transform (DCT) quantization. During input pipeline execution, TensorFlow decompresses raw binary bitstreams into uncompressed 3D arrays of numerical pixel intensities.\n\n#### Image Resizing and Spatial Downsampling\nDeep neural networks process data in batches, requiring fixed, standardized tensor dimensions ($B \\times H \\times W \\times C$):\n- **ResNet50 Input Resolution:** All input images are standardized to **$224 \\times 224$ pixels**.\n- **Computational Trade-Off:** Resizing standardizes camera captures of varying resolutions into $224 \\times 224 \\times 3 = 150,528$ values, balancing computational throughput with structural fidelity.\n- **Resolution Loss:** Downsampling high-resolution images can blur subtle early-stage fungal pustules or faint leaf miner tracks.\n- **Aspect Ratio Distortion:** Direct bilinear downsampling to a square without padding may stretch non-square camera frames."
      },
      {
        "cell_idx": 9,
        "raw_markdown": "### CELL 4 ── Hyper-parameters & Data Loaders\n"
      },
      {
        "cell_idx": 12,
        "raw_markdown": "### CELL 5 ── Explore: Sample Images\n"
      },
      {
        "cell_idx": 14,
        "raw_markdown": "### CELL 6 ── Class Distribution\n"
      },
      {
        "cell_idx": 16,
        "raw_markdown": "### DIP: Geometric and Intensity Transformations\n\nData augmentation applies digital image processing transformations to synthetic training images, expanding effective dataset variance and enforcing invariance to camera orientation and field illumination.\n\n#### 1. Geometric Transformations (Spatial Coordinate Remapping)\nGeometric transformations alter the spatial coordinates $(x, y)$ of image pixels via 2D spatial mapping functions $I'(x', y') = I(T_x(x, y), T_y(x, y))$:\n- **Spatial Reflection (Flipping):** `RandomFlip(\"horizontal_and_vertical\")` reflects pixels across horizontal ($y' = H - y$) and vertical ($x' = W - x$) axes. Foliar diseases possess no fixed gravitational orientation.\n- **Rotation:** `RandomRotation(0.25)` applies 2D affine rotation. In Keras, a factor of **$0.25$ represents a fraction of $2\\pi$**, meaning images are randomly rotated within $[-0.25 \\times 360^\\circ, +0.25 \\times 360^\\circ] = [-90^\\circ, +90^\\circ]$ (a full quarter turn), **not** 25 degrees.\n- **Scaling (Zoom):** `RandomZoom(0.20)` scales coordinates by $\\pm 20\\%$, simulating variable camera working distances.\n\n#### 2. Intensity Transformations (Radiometric Point Operations)\nIntensity transformations modify pixel intensity values directly without altering spatial pixel geometry:\n- **Contrast Adjustment:** `RandomContrast(0.15)` dynamically stretches or compresses the image dynamic range around its mean intensity: $I'(x,y) = \\bar{I} + c \\cdot (I(x,y) - \\bar{I})$, simulating variable ambient daylight and cloud cover.\n- **Brightness Adjustment:** `RandomBrightness(0.10)` shifts intensity levels additively: $I'(x,y) = I(x,y) + \\delta$, simulating overexposure or deep canopy shading."
      },
      {
        "cell_idx": 17,
        "raw_markdown": "### CELL 7 ── Data Augmentation\n"
      },
      {
        "cell_idx": 20,
        "raw_markdown": "### DIP: Convolutional Filtering and Hierarchical Feature Extraction\n\n#### Mathematical Formulation of 2D Spatial Convolution\nIn discrete 2D digital image processing, spatial filtering correlates an input feature map $X$ with a 2D filter kernel $K$ of spatial dimensions $M \\times N$:\n\n$$Y(i, j) = (X * K)(i, j) = \\sum_{m=-M/2}^{M/2} \\sum_{n=-N/2}^{N/2} K(m, n) \\cdot X(i + m, j + n)$$\n\n#### ResNet50: Deep Bottleneck Residual Architecture\nResNet50 implements a 50-layer hierarchical feature extractor organized into 5 stages using **Bottleneck Residual Blocks**:\n1. **$1 \\times 1$ Convolution (Projection):** Compresses channel dimensionality to reduce computational load.\n2. **$3 \\times 3$ Spatial Convolution:** Performs spatial filtering to capture oriented edges, color transitions, and lesion textures.\n3. **$1 \\times 1$ Convolution (Expansion):** Restores channel dimensionality back to high-capacity representation.\n4. **Identity Shortcut Connection:**\n   $$H(x) = \\sigma(F(x, \\{W_i\\}) + x)$$\n   Where $F(x)$ is the residual mapping and $x$ is the identity shortcut. This residual architecture preserves low-level spatial gradient information across deep feature hierarchies, preventing vanishing gradients.\n\n#### Feature Hierarchy in Crop Pathology\n- **Stages 1 & 2:** Capture low-level spatial primitives: sharp leaf edges, specular highlights, and primary vein contours.\n- **Stage 3:** Isolates textural primitives: fungal spore clusters, chlorotic halos, and lesion boundaries.\n- **Stages 4 & 5:** Synthesize complex pathological phenotypes: systemic viral mosaic patterns, severe bacterial blight spread, and leaf curl distortions.\n\n---\n\n### DIP: Pixel Intensity Preprocessing\n\n| Model | Preprocessing Function | Expected Pixel Scale | Transformations Applied |\n|---|---|---|---|\n| **ResNet50** | `tf.keras.applications.resnet50.preprocess_input` | $[0, 255]$ raw uint8/float32 | 1. RGB $\\to$ BGR channel permutation<br>2. ImageNet mean subtraction: $[-103.939, -116.779, -123.68]$ |\n\n#### Preprocessing Mechanism:\nUnlike models that rescale to $[0, 1]$ or $[-1, 1]$, ResNet50 retains raw dynamic magnitude while:\n1. Reordering channels from RGB to **BGR** to match the legacy Caffe framework format.\n2. Centering pixel intensities by subtracting the mean ImageNet channel vector:\n   $$B' = B - 103.939, \\quad G' = G - 116.779, \\quad R' = R - 123.68$$\nThis centers data around the origin, improving gradient flow during convolutional optimization."
      },
      {
        "cell_idx": 21,
        "raw_markdown": "### CELL 8 ── Build ResNet50 Transfer Learning Model\n"
      },
      {
        "cell_idx": 23,
        "raw_markdown": "### DIP: Visualizing Pretrained Convolutional Feature Maps\n\nBelow, we pass a sample test image through the pretrained ResNet50 backbone to inspect the activation feature maps produced by its very first convolutional layer (`conv1_conv`)."
      },
      {
        "cell_idx": 25,
        "raw_markdown": "### Digital Image Processing vs. Machine Learning in Model Training\n\n- **Image Processing Operations:** Resizing to $224 \\times 224$, geometric coordinate transforms (flips, rotations, zooms), RGB to BGR channel reordering, ImageNet mean centering, 2D bottleneck spatial convolutions, and global average pooling.\n- **Machine Learning Operations:** Categorical cross-entropy loss computation, error backpropagation, Adam optimizer weight updates, learning rate reduction on plateaus, transfer learning backbone freezing (Phase 1), and selective layer unfreezing (Phase 2 fine-tuning).\n\nDIP structures the optical signals into informative spatial feature representations; ML discovers the optimal weighting parameters across those representations."
      },
      {
        "cell_idx": 26,
        "raw_markdown": "### CELL 9 ── Compile & Train Phase 1 (frozen backbone)\n"
      },
      {
        "cell_idx": 28,
        "raw_markdown": "### CELL 10 ── Fine-Tuning Phase 2 (unfreeze last 20 layers)\n"
      },
      {
        "cell_idx": 30,
        "raw_markdown": "### CELL 11 ── Training Curves\n"
      },
      {
        "cell_idx": 32,
        "raw_markdown": "### CELL 12 ── Evaluate on Test Set\n"
      },
      {
        "cell_idx": 34,
        "raw_markdown": "### CELL 13 ── Confusion Matrix & Classification Report\n"
      },
      {
        "cell_idx": 36,
        "raw_markdown": "### CELL 14 ── Per-Class Accuracy Bar Chart\n"
      },
      {
        "cell_idx": 38,
        "raw_markdown": "### CELL 15 ── Sample Predictions Grid (Green = Correct, Red = Wrong)\n"
      },
      {
        "cell_idx": 40,
        "raw_markdown": "### Interpretation of Image-Based Classification Results\n\nIn evaluating the sample prediction grid and confusion matrix from a digital image processing perspective:\n\n1. **Visual Cues Leveraged by the Classifier:**\n   - **Chromatic Discoloration:** Chlorotic margins and dark necrotic lesions serve as primary chromatic markers.\n   - **Spatial Texture:** Powdery mildew, serpentine leaf miner tracks, and fungal spots provide distinct spatial frequency signatures.\n2. **Sources of Inter-Class Confusion:**\n   - **Morphological Similarity:** Early blight and leaf spots produce similar circular necrotic lesions.\n   - **Environmental Artifacts:** Harsh daylight glares and deep foliage shadows can distort color and contrast.\n   - **Complex Backgrounds:** Soil backgrounds and overlapping non-target vegetation introduce spurious edge responses.\n3. **Academic Clarification on Evaluation vs. DIP:**\n   - A **confusion matrix** evaluates categorical classification performance, not digital image processing.\n   - A **whole-image classification label** indicates the diagnosis of the overall image tile; it does **not** generate pixel-level lesion boundary masks.\n   - **Activation maps** show filter responses across spatial receptive fields; they do **not** constitute semantic segmentation masks."
      },
      {
        "cell_idx": 41,
        "raw_markdown": "### CELL 16 ── Save Final Model\n"
      },
      {
        "cell_idx": 43,
        "raw_markdown": "### Digital Image Processing Summary and Case Study Findings\n\n#### 1. Input Image Representation and Dimensions\nResNet50 processes standardized $224 \\times 224 \\times 3$ RGB digital images ($150,528$ pixel intensity values), decoded from JPEG files into numerical arrays.\n\n#### 2. Image Transformations Applied\n- **Geometric Transformations:** Horizontal and vertical reflections, affine rotation ($\\pm 90^\\circ$), and zoom scaling ($\\pm 20\\%$) enforce rotational and scale invariance against camera positioning.\n- **Intensity Transformations:** Contrast adjustment ($\\pm 15\\%$) and brightness shifts ($\\pm 10\\%$) simulate changing sunlight and exposure levels.\n\n#### 3. Pixel Intensity Preprocessing\nInput tensors undergo channel permutation from RGB to BGR, followed by ImageNet channel mean subtraction ($[-103.939, -116.779, -123.68]$) via `resnet50.preprocess_input`.\n\n#### 4. Convolutional Feature Extraction\nResNet50 employs a 50-layer deep bottleneck residual architecture. Identity shortcut connections preserve spatial gradient signals across deep hierarchies, enabling the network to learn rich, abstract pathological features without degradation.\n\n#### 5. Relevance to Crop Disease Identification\nThe deep bottleneck architecture successfully extracts intricate visual features of foliar diseases, including irregular lesion contours, halo chlorosis, and textural disfigurations.\n\n#### 6. Limitations of the Image Processing Approach\n- **No Explicit Lesion Segmentation:** Categorizes whole image tiles rather than segmenting individual lesion perimeters.\n- **Downsampling:** Bilinear downsampling to $224 \\times 224$ can suppress very fine micro-lesions.\n- **Background Interference:** In the absence of explicit background masking, complex soil and weed textures can influence predictions."
      }
    ],
    "VGG16": [
      {
        "cell_idx": 0,
        "raw_markdown": "# MODEL: VGG16\nTASK : Crop Pest and Disease Detection - End-to-End Pipeline\nPaste each CELL block into a separate cell in your Jupyter Notebook.\nRun cells in order from top to bottom.\n\n---\n"
      },
      {
        "cell_idx": 1,
        "raw_markdown": "### Digital Image Processing Concepts Used in This Model\n\nIn digital image processing (DIP) for plant pathology, diagnosing foliar crop diseases relies on detecting localized color changes, edge transitions, and spatial surface textures in digital leaf photographs. Pathogens cause tissue degradation that alters light absorption and reflection, resulting in distinctive chlorotic halos and necrotic lesions.\n\n#### Why Crop Images Require Preprocessing\n1. **Field Illumination Shifts:** Uncontrolled natural daylight introduces specular highlights, shadows, and varying color temperatures.\n2. **Variable Capture Perspective:** Handheld and drone cameras capture leaves at diverse angles and distances, altering apparent symptom dimensions and orientation.\n3. **Complex Agricultural Backgrounds:** Soil, dead organic mulch, and background foliage introduce non-target high-frequency spatial noise.\n4. **Sensor Downsampling & Quantization:** Converting optical signals into digital matrices requires standardized spatial and radiometric normalization.\n\n#### Spatial and Intensity Transformations in Training\n- **Geometric Transformations:** Horizontal spatial reflection, affine rotation ($\\pm 72^\\circ$), and zoom scaling enforce rotational and viewpoint invariance.\n- **Intensity Transformations:** Contrast adjustment simulates variable ambient illumination without changing lesion morphology.\n\n#### VGG16: Hierarchical Feature Extraction via Stacked Small Kernels\nVGG16 is a foundational, classical architecture composed of **homogeneous stacked $3 \\times 3$ convolution filters** and **$2 \\times 2$ max-pooling**. In digital image processing, it serves as a textbook demonstration of **receptive field enlargement**:\n- Cascading two $3 \\times 3$ convolution layers produces an effective spatial receptive field equivalent to a single $5 \\times 5$ filter.\n- Cascading three $3 \\times 3$ convolutions achieves a $7 \\times 7$ receptive field.\n\nUsing stacked $3 \\times 3$ filters uses significantly fewer parameters ($3 \\times 3^2 = 27$ weights vs. $7^2 = 49$ weights—a **$45\\%$ parameter reduction**) while introducing intermediate non-linear activations after each filter.\n\n#### End-to-End DIP & Classification Pipeline\n$$\\text{Input Image } (H \\times W \\times 3) \\longrightarrow \\text{Image Decoding \\& Resizing } (224 \\times 224) \\longrightarrow \\text{Data Augmentation } \\longrightarrow \\text{VGG16 Preprocessing (BGR + Mean Subtraction)} \\longrightarrow \\text{Stacked 3x3 Conv Blocks } \\longrightarrow \\text{Flatten \\& Dense Head } \\longrightarrow \\text{Classification}$$\n\n> **Important Case Study Note:** This model performs **whole-image classification** (predicting the disease category for the entire tile) rather than explicit **semantic pixel segmentation** (which would delineate exact boundary contours for each diseased lesion)."
      },
      {
        "cell_idx": 2,
        "raw_markdown": "### CELL 1 ── Install Dependencies\n"
      },
      {
        "cell_idx": 4,
        "raw_markdown": "### CELL 2 ── Imports\n"
      },
      {
        "cell_idx": 6,
        "raw_markdown": "### CELL 3 ── Verify & Load Local Dataset  (70 / 15 / 15)\n"
      },
      {
        "cell_idx": 8,
        "raw_markdown": "### DIP: Digital Image Representation, Decoding, and Spatial Resizing\n\n#### Digital Color Image Representation\nA digital color photograph is represented as a 3D numerical matrix of shape $(H \\times W \\times 3)$, where $H$ is the spatial height, $W$ is the spatial width, and 3 represents the primary color channels: **Red (R), Green (G), and Blue (B)**. Each pixel intensity is an 8-bit unsigned integer ($uint8$) with values spanning $[0, 255]$.\n\n#### Image Decoding\nStored JPEG images are compressed using Discrete Cosine Transform (DCT) quantization. During input pipeline execution, TensorFlow decompresses raw binary bitstreams into uncompressed 3D arrays of numerical pixel intensities.\n\n#### Image Resizing and Spatial Downsampling\nDeep neural networks process data in batches, requiring fixed, standardized tensor dimensions ($B \\times H \\times W \\times C$):\n- **VGG16 Standard Resolution:** All input images are standardized to **$224 \\times 224$ pixels**.\n- **Batch Size Configuration:** VGG16 contains a very large parameter footprint ($138\\text{M}$ total / $14.7\\text{M}$ backbone, with a large Dense head following `layers.Flatten()`). To avoid GPU Out-of-Memory (OOM) errors, **`BATCH_SIZE = 16`** is used.\n- **Resolution Loss:** Downsampling high-resolution images to $224 \\times 224$ can suppress very fine early-stage micro-pustules.\n- **Aspect Ratio Distortion:** Direct bilinear downsampling to a square without padding may stretch non-square camera frames."
      },
      {
        "cell_idx": 9,
        "raw_markdown": "### CELL 4 ── Hyper-parameters & Data Loaders\n"
      },
      {
        "cell_idx": 12,
        "raw_markdown": "### CELL 5 ── Explore: Sample Images\n"
      },
      {
        "cell_idx": 14,
        "raw_markdown": "### CELL 6 ── Class Distribution\n"
      },
      {
        "cell_idx": 16,
        "raw_markdown": "### DIP: Geometric and Intensity Transformations\n\nData augmentation applies digital image processing transformations to synthetic training images, expanding effective dataset variance and enforcing invariance to camera orientation and field illumination.\n\n#### Important: VGG16 Augmentation Pipeline Configuration\nUnlike the other model notebooks in this project, **VGG16 uses a specialized, conservative augmentation pipeline**:\n1. **Geometric Transformations:**\n   - **Horizontal Flipping Only:** `RandomFlip(\"horizontal\")` reflects pixels across the vertical axis. Vertical flip is intentionally omitted to prevent unnatural leaf vein orientations.\n   - **Rotation:** `RandomRotation(0.20)` applies 2D affine rotation. In Keras, a factor of **$0.20$ represents a fraction of $2\\pi$**, meaning images are randomly rotated within $[-0.20 \\times 360^\\circ, +0.20 \\times 360^\\circ] = [-72^\\circ, +72^\\circ]$, **not** 20 degrees.\n   - **Scaling (Zoom):** `RandomZoom(0.15)` scales coordinates by $\\pm 15\\%$, simulating variable camera distances.\n2. **Intensity Transformations:**\n   - **Contrast Adjustment:** `RandomContrast(0.10)` adjusts dynamic range by $\\pm 10\\%$.\n   - **Note:** `RandomBrightness` is **not included** in VGG16's augmentation sequence, preserving natural luminance levels for VGG16's sensitive dense classification head."
      },
      {
        "cell_idx": 17,
        "raw_markdown": "### CELL 7 ── Data Augmentation\n"
      },
      {
        "cell_idx": 20,
        "raw_markdown": "### DIP: Convolutional Filtering and Hierarchical Feature Extraction\n\n#### Mathematical Formulation of 2D Spatial Convolution\nIn discrete 2D digital image processing, spatial filtering correlates an input feature map $X$ with a 2D filter kernel $K$ of spatial dimensions $M \\times N$:\n\n$$Y(i, j) = (X * K)(i, j) = \\sum_{m=-M/2}^{M/2} \\sum_{n=-N/2}^{N/2} K(m, n) \\cdot X(i + m, j + n)$$\n\n#### VGG16: Stacked Convolution Blocks and Spatial Feature Hierarchy\nVGG16 consists of 13 convolutional layers arranged into 5 blocks followed by max-pooling layers:\n- **Block 1 (2 layers, 64 filters of $3 \\times 3$):** Receptive field of $5 \\times 5$. Extracts low-level spatial primitives: high-contrast leaf edges, primary vein boundaries, and color transitions.\n- **Block 2 (2 layers, 128 filters of $3 \\times 3$):** Receptive field of $14 \\times 14$. Captures structural vein bifurcations, localized color gradients, and leaf contour curvatures.\n- **Block 3 (3 layers, 256 filters of $3 \\times 3$):** Receptive field of $40 \\times 40$. Detects textural primitives: circular fungal spots, necrotic halos, and powdery patches.\n- **Blocks 4 & 5 (3 layers each, 512 filters of $3 \\times 3$):** Large receptive fields ($>100 \\times 100$). Synthesize complex, high-level disease phenotypes: leaf blight progression, mosaic patterns, and severe pest damage.\n- **Dense Classification Head:** Unlike models using Global Average Pooling, VGG16 flattens spatial feature maps (`layers.Flatten()`) into a high-dimensional vector connected to Dense layers, retaining spatial configuration at the expense of parameter volume.\n\n---\n\n### DIP: Pixel Intensity Preprocessing\n\n| Model | Preprocessing Function | Expected Pixel Scale | Transformations Applied |\n|---|---|---|---|\n| **VGG16** | `tf.keras.applications.vgg16.preprocess_input` | $[0, 255]$ raw uint8/float32 | 1. RGB $\\to$ BGR channel permutation<br>2. ImageNet mean subtraction: $[-103.939, -116.779, -123.68]$ |\n\n#### Preprocessing Mechanism:\nVGG16 standardizes input tensors by:\n1. Reordering color channels from RGB to **BGR** to match the original VGG team's Caffe implementation.\n2. Centering pixel intensities by subtracting the ImageNet mean channel values without scaling to $[0, 1]$:\n   $$B' = B - 103.939, \\quad G' = G - 116.779, \\quad R' = R - 123.68$$\nThis centers data symmetrically around zero, accelerating backpropagation convergence."
      },
      {
        "cell_idx": 21,
        "raw_markdown": "### CELL 8 ── Build VGG16 Transfer Learning Model\n"
      },
      {
        "cell_idx": 23,
        "raw_markdown": "### DIP: Visualizing Pretrained Convolutional Feature Maps\n\nBelow, we pass a sample test image through the pretrained VGG16 backbone to inspect the activation feature maps produced by its very first convolutional layer (`block1_conv1`)."
      },
      {
        "cell_idx": 25,
        "raw_markdown": "### Digital Image Processing vs. Machine Learning in Model Training\n\n- **Image Processing Operations:** Resizing to $224 \\times 224$, geometric coordinate transforms (horizontal flip, rotation, zoom), RGB to BGR channel reordering, ImageNet mean centering, 2D stacked spatial convolutions, and max-pooling downsampling.\n- **Machine Learning Operations:** Categorical cross-entropy loss computation, error backpropagation, Adam optimizer weight updates, learning rate reduction on plateaus, transfer learning backbone freezing (Phase 1), and unfreezing the final convolutional block (`block5`) for fine-tuning (Phase 2).\n\nDIP structures the optical signals into informative spatial feature representations; ML discovers the optimal weighting parameters across those representations."
      },
      {
        "cell_idx": 26,
        "raw_markdown": "### CELL 9 ── Compile & Train Phase 1 (frozen backbone)\n"
      },
      {
        "cell_idx": 28,
        "raw_markdown": "### CELL 10 ── Fine-Tuning Phase 2 (unfreeze last conv block: block5)\n"
      },
      {
        "cell_idx": 30,
        "raw_markdown": "### CELL 11 ── Training Curves\n"
      },
      {
        "cell_idx": 32,
        "raw_markdown": "### CELL 12 ── Evaluate on Test Set\n"
      },
      {
        "cell_idx": 34,
        "raw_markdown": "### CELL 13 ── Confusion Matrix & Classification Report\n"
      },
      {
        "cell_idx": 36,
        "raw_markdown": "### CELL 14 ── Per-Class Accuracy Bar Chart\n"
      },
      {
        "cell_idx": 38,
        "raw_markdown": "### CELL 15 ── Sample Predictions Grid (Green = Correct, Red = Wrong)\n"
      },
      {
        "cell_idx": 40,
        "raw_markdown": "### Interpretation of Image-Based Classification Results\n\nIn evaluating the sample prediction grid and confusion matrix from a digital image processing perspective:\n\n1. **Visual Cues Leveraged by the Classifier:**\n   - **Chromatic Discoloration:** Chlorotic margins and dark necrotic lesions serve as primary chromatic markers.\n   - **Spatial Texture:** Powdery mildew, serpentine leaf miner tracks, and fungal spots provide distinct spatial frequency signatures.\n2. **Sources of Inter-Class Confusion:**\n   - **Morphological Similarity:** Early blight and leaf spots produce similar circular necrotic lesions.\n   - **Environmental Artifacts:** Harsh daylight glares and deep foliage shadows can distort color and contrast.\n   - **Complex Backgrounds:** Soil backgrounds and overlapping non-target vegetation introduce spurious edge responses.\n3. **Academic Clarification on Evaluation vs. DIP:**\n   - A **confusion matrix** evaluates categorical classification performance, not digital image processing.\n   - A **whole-image classification label** indicates the diagnosis of the overall image tile; it does **not** generate pixel-level lesion boundary masks.\n   - **Activation maps** show filter responses across spatial receptive fields; they do **not** constitute semantic segmentation masks."
      },
      {
        "cell_idx": 41,
        "raw_markdown": "### CELL 16 ── Save Final Model\n"
      },
      {
        "cell_idx": 43,
        "raw_markdown": "### Digital Image Processing Summary and Case Study Findings\n\n#### 1. Input Image Representation and Dimensions\nVGG16 processes standardized $224 \\times 224 \\times 3$ RGB digital images ($150,528$ pixel intensity values), decoded from JPEG files into numerical arrays.\n\n#### 2. Image Transformations Applied\n- **Geometric Transformations:** Horizontal spatial reflection, affine rotation ($\\pm 72^\\circ$), and zoom scaling ($\\pm 15\\%$) enforce rotational and scale invariance against camera positioning.\n- **Intensity Transformations:** Contrast adjustment ($\\pm 10\\%$); brightness transforms are excluded to maintain natural illumination balance.\n\n#### 3. Pixel Intensity Preprocessing\nInput tensors undergo channel permutation from RGB to BGR, followed by ImageNet channel mean subtraction ($[-103.939, -116.779, -123.68]$) via `vgg16.preprocess_input`.\n\n#### 4. Convolutional Feature Extraction\nVGG16 utilizes stacked $3 \\times 3$ spatial convolution filters across 5 hierarchical blocks, illustrating how small cascaded kernels enlarge spatial receptive fields while reducing parameter counts.\n\n#### 5. Relevance to Crop Disease Identification\nThe homogeneous architecture provides deep spatial abstraction capable of recognizing disease lesions across various stages of infection.\n\n#### 6. Limitations of the Image Processing Approach\n- **No Explicit Lesion Segmentation:** Categorizes whole image tiles rather than segmenting individual lesion perimeters.\n- **Downsampling:** Bilinear downsampling to $224 \\times 224$ can suppress very fine micro-lesions.\n- **Large Memory Footprint:** High parameter volume ($138\\text{M}$ parameters) requires smaller batch sizes (`BATCH_SIZE = 16`) and substantial memory compared to lightweight mobile architectures."
      }
    ]
  }
};
