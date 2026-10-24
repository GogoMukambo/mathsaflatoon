// Year 7 Science — Chapter 1 — 1.2 Gas exchange
// Key: s7_1.2
window.INTERACTIVE_WHITEBOARD_DATA = window.INTERACTIVE_WHITEBOARD_DATA || {};
window.INTERACTIVE_WHITEBOARD_DATA["s7_1.2"] = {
  "title": "1.2 Gas exchange",
  "watermark": "Section 1.2: Alveolar Diffusion",
  "subtopics": [
    { "id": "card_0", "label": "Key idea" },
    { "id": "card_1", "label": "Recall" },
    { "id": "card_2", "label": "Check" }
  ],
  "scenes": {
    "card_0": [
      {
        "clear": true,
        "narration": "Terminal bronchioles terminate in alveolar sacs surrounded by an extensive pulmonary capillary bed.",
        "rule": "External respiration occurs across the thin respiratory membrane.",
        "quizQ": "", "quizA": "",
        "elements": [
          { "type": "image", "src": "assets/illustrations/alveoli_capillary_network_detailed.png", "x": 120, "y": 50, "width": 560, "height": 340 },
          { "type": "text", "x": 400, "y": 415, "text": "Microscopic view of Alveolar Cluster and Capillary Basket", "color": "#334155", "size": 14 }
        ]
      },
      {
        "narration": "Oxygen diffuses down its partial pressure gradient into blood; carbon dioxide diffuses into the alveolar air.",
        "rule": "O₂ diffuses into deoxygenated blood; CO₂ diffuses out.",
        "quizQ": "Where does gas exchange happen?",
        "quizA": "In the alveoli. Oxygen diffuses into the blood and carbon dioxide diffuses out.",
        "elements": [
          // Dynamic Diffusion Trajectories
          { "type": "path", "d": "M 320 180 Q 360 210 390 240", "stroke": "#2563eb", "width": 4, "fill": "none" },
          { "type": "path", "d": "M 378 240 L 390 240 L 390 228", "stroke": "#2563eb", "width": 4, "fill": "none" },
          { "type": "text", "x": 300, "y": 170, "text": "O₂ (High → Low)", "color": "#1d4ed8", "size": 14, "weight": "bold" },
          
          { "type": "path", "d": "M 480 240 Q 450 200 420 170", "stroke": "#ea580c", "width": 4, "fill": "none" },
          { "type": "path", "d": "M 432 170 L 420 170 L 420 182", "stroke": "#ea580c", "width": 4, "fill": "none" },
          { "type": "text", "x": 510, "y": 250, "text": "CO₂ (High → Low)", "color": "#c2410c", "size": 14, "weight": "bold" }
        ]
      }
    ],
    "card_1": [
      {
        "clear": true,
        "narration": "The diffusion pathway is minimized to less than 1 micrometer: one alveolar epithelial cell and one endothelial cell.",
        "rule": "Features: massive surface area, membrane one-cell thick, rich capillary network.",
        "quizQ": "Name three features that make alveoli efficient.",
        "quizA": "A huge surface area, walls one cell thick, and a rich blood supply.",
        "elements": [
          { "type": "image", "src": "assets/illustrations/respiratory_membrane_cross_section.png", "x": 100, "y": 60, "width": 600, "height": 280 },
          { "type": "rect", "x": 100, "y": 360, "width": 600, "height": 55, "fill": "#eff6ff", "stroke": "#3b82f6", "strokeWidth": 1.5, "rx": 8 },
          { "type": "text", "x": 400, "y": 385, "text": "1. Huge Surface Area (~100 m²)  •  2. Ultra-Thin Barrier (0.5 µm)", "color": "#1e40af", "size": 14, "weight": "bold" },
          { "type": "text", "x": 400, "y": 405, "text": "3. Dense Capillary Network maintaining steep concentration gradients", "color": "#1e40af", "size": 13 }
        ]
      }
    ],
    "card_2": [
      {
        "clear": true,
        "narration": "Even at rest, returning venous blood is oxygen-depleted relative to atmospheric alveolar air.",
        "rule": "Concentration gradient drives continuous passive diffusion.",
        "quizQ": "Why is oxygen still able to enter the blood when you are resting?",
        "quizA": "Blood arriving at the lungs has a lower oxygen concentration than alveolar air, so it diffuses down the gradient.",
        "elements": [
          { "type": "image", "src": "assets/illustrations/alveolus_erythrocyte_capillary_micrograph.png", "x": 160, "y": 70, "width": 480, "height": 270 },
          // Concentration Comparison Badges
          { "type": "rect", "x": 160, "y": 360, "width": 220, "height": 50, "fill": "#ecfdf5", "stroke": "#10b981", "strokeWidth": 2, "rx": 6 },
          { "type": "text", "x": 270, "y": 382, "text": "Alveolar Gas Space", "color": "#047857", "size": 13 },
          { "type": "text", "x": 270, "y": 400, "text": "High pO₂ (~104 mmHg)", "color": "#059669", "size": 14, "weight": "bold" },
          { "type": "rect", "x": 420, "y": 360, "width": 220, "height": 50, "fill": "#fef2f2", "stroke": "#ef4444", "strokeWidth": 2, "rx": 6 },
          { "type": "text", "x": 530, "y": 382, "text": "Deoxygenated Venous Blood", "color": "#b91c1c", "size": 13 },
          { "type": "text", "x": 530, "y": 400, "text": "Low pO₂ (~40 mmHg)", "color": "#dc2626", "size": 14, "weight": "bold" }
        ]
      }
    ]
  }
};