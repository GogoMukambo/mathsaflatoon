// Year 7 Science — Chapter 1 — 1.1 The human respiratory system
// Key: s7_1.1
window.INTERACTIVE_WHITEBOARD_DATA = window.INTERACTIVE_WHITEBOARD_DATA || {};
window.INTERACTIVE_WHITEBOARD_DATA["s7_1.1"] = {
  "title": "1.1 Respiratory system",
  "watermark": "Section 1.1: Detailed Anatomy",
  "subtopics": [
    { "id": "card_0", "label": "Key idea" },
    { "id": "card_1", "label": "Recall" },
    { "id": "card_2", "label": "Check" }
  ],
  "scenes": {
    "card_0": [
      {
        "clear": true,
        "narration": "Air enters through the nasal cavity and mouth, travelling down the larynx into the trachea.",
        "rule": "The trachea is the main windpipe leading to the lungs.",
        "quizQ": "", "quizA": "",
        "elements": [
          { "type": "image", "src": "assets/illustrations/respiratory_tract_cross_section.png", "x": 200, "y": 60, "width": 400, "height": 380 },
          // Animated Inhaled Air Vector Stream
          { "type": "path", "d": "M 370 95 C 385 115 395 135 395 180 L 395 250", "stroke": "#38bdf8", "width": 5, "strokeDasharray": [6, 4], "fill": "none" },
          // Callout pin: Trachea
          { "type": "circle", "cx": 395, "cy": 220, "r": 6, "fill": "#0284c7", "stroke": "#ffffff", "width": 2 },
          { "type": "path", "d": "M 401 220 L 520 200", "stroke": "#0284c7", "width": 2, "fill": "none" },
          { "type": "rect", "x": 520, "y": 185, "width": 140, "height": 30, "fill": "#f0f9ff", "stroke": "#0284c7", "strokeWidth": 1.5, "rx": 6 },
          { "type": "text", "x": 590, "y": 205, "text": "Trachea (Windpipe)", "color": "#0369a1", "size": 13, "weight": "bold" }
        ]
      },
      {
        "narration": "The trachea bifurcates into the primary bronchi, branching deep into the left and right lung lobes.",
        "rule": "Bronchi branch into increasingly narrow bronchioles.",
        "quizQ": "Which organs make up the respiratory system?",
        "quizA": "Nose, mouth, larynx, trachea, bronchi, bronchioles, alveoli, diaphragm, and rib muscles.",
        "elements": [
          // Bifurcation Airflow Split
          { "type": "path", "d": "M 395 250 Q 370 280 320 320", "stroke": "#38bdf8", "width": 4, "fill": "none" },
          { "type": "path", "d": "M 395 250 Q 420 280 470 320", "stroke": "#38bdf8", "width": 4, "fill": "none" },
          // Focus Box: Bronchi
          { "type": "rect", "x": 260, "y": 260, "width": 270, "height": 110, "fill": "none", "stroke": "#10b981", "strokeWidth": 2, "strokeDasharray": [4, 4], "rx": 8 },
          { "type": "text", "x": 395, "y": 360, "text": "Bronchial Arborization", "color": "#047857", "size": 13 }
        ]
      }
    ],
    "card_1": [
      {
        "clear": true,
        "narration": "C-shaped hyaline cartilage rings encircle the anterior trachea to resist negative pressure collapse.",
        "rule": "Rigid cartilage stops the airway from collapsing when inhaling.",
        "quizQ": "What do the rings of cartilage do?",
        "quizA": "They keep the trachea and bronchi open so air can always pass.",
        "elements": [
          { "type": "image", "src": "assets/illustrations/trachea_cartilage_c_ring_detail.png", "x": 180, "y": 70, "width": 440, "height": 340 },
          { "type": "rect", "x": 80, "y": 370, "width": 640, "height": 45, "fill": "#ecfdf5", "stroke": "#059669", "strokeWidth": 1.5, "rx": 8 },
          { "type": "text", "x": 400, "y": 398, "text": "C-Shaped Cartilage Rings: Semi-rigid structure prevents tube collapse under suction", "color": "#065f46", "size": 14 }
        ]
      }
    ],
    "card_2": [
      {
        "clear": true,
        "narration": "Pseudostratified ciliated columnar cells and goblet cells produce a protective mucosal elevator.",
        "rule": "Goblet cells secrete mucus; cilia beat synchronously to clear trapped particles.",
        "quizQ": "Why is the lining of the airways moist and covered in mucus?",
        "quizA": "Dust and microbes stick to mucus. Cilia sweep it up and out of the lungs.",
        "elements": [
          { "type": "image", "src": "assets/illustrations/ciliated_epithelial_mucus_layer.png", "x": 150, "y": 80, "width": 500, "height": 260 },
          // Upward Ciliary Beating Directional Vectors
          { "type": "path", "d": "M 220 220 L 220 170 M 215 180 L 220 170 L 225 180", "stroke": "#16a34a", "width": 3, "fill": "none" },
          { "type": "path", "d": "M 340 220 L 340 170 M 335 180 L 340 170 L 345 180", "stroke": "#16a34a", "width": 3, "fill": "none" },
          { "type": "path", "d": "M 460 220 L 460 170 M 455 180 L 460 170 L 465 180", "stroke": "#16a34a", "width": 3, "fill": "none" },
          { "type": "path", "d": "M 580 220 L 580 170 M 575 180 L 580 170 L 585 180", "stroke": "#16a34a", "width": 3, "fill": "none" },
          { "type": "text", "x": 400, "y": 370, "text": "Coordinated Ciliary Wave (Mucociliary Escalator)", "color": "#15803d", "size": 15, "weight": "bold" }
        ]
      }
    ]
  }
};