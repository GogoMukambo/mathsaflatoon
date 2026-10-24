// Year 7 Science — Chapter 1 — 1.3 Breathing
// Key: s7_1.3
window.INTERACTIVE_WHITEBOARD_DATA = window.INTERACTIVE_WHITEBOARD_DATA || {};
window.INTERACTIVE_WHITEBOARD_DATA["s7_1.3"] = {
  "title": "1.3 Breathing",
  "watermark": "Section 1.3: Thoracic Biomechanics",
  "subtopics": [
    { "id": "card_0", "label": "Key idea" },
    { "id": "card_1", "label": "Recall" },
    { "id": "card_2", "label": "Check" }
  ],
  "scenes": {
    "card_0": [
      {
        "clear": true,
        "narration": "During inhalation, the diaphragm contracts and flattens caudally while external intercostal muscles elevate the ribcage.",
        "rule": "Increased thoracic volume → Decreased intrathoracic pressure → Air enters via pressure gradient.",
        "quizQ": "How does air get into the lungs?",
        "quizA": "Diaphragm contracts and flattens, ribcage moves up and out, thoracic volume increases, drawing air inside.",
        "elements": [
          { "type": "image", "src": "assets/illustrations/thoracic_cage_inhalation_expanded.png", "x": 200, "y": 60, "width": 400, "height": 330 },
          // Force Vector Overlays
          // Ribcage elevation vectors
          { "type": "path", "d": "M 270 210 L 230 170 M 230 185 L 230 170 L 245 170", "stroke": "#ea580c", "width": 3, "fill": "none" },
          { "type": "path", "d": "M 530 210 L 570 170 M 555 170 L 570 170 L 570 185", "stroke": "#ea580c", "width": 3, "fill": "none" },
          // Diaphragmatic flattening vector
          { "type": "path", "d": "M 400 320 L 400 365 M 390 355 L 400 365 L 410 355", "stroke": "#16a34a", "width": 4, "fill": "none" },
          { "type": "text", "x": 400, "y": 385, "text": "Diaphragm contracts downwards", "color": "#15803d", "size": 13, "weight": "bold" },
          { "type": "text", "x": 400, "y": 420, "text": "Thoracic Volume ↑  |  Intrapulmonary Pressure ↓ (Suction)", "color": "#0f172a", "size": 14 }
        ]
      }
    ],
    "card_1": [
      {
        "clear": true,
        "narration": "During passive expiration, the diaphragm and intercostals relax. Elastic recoil compresses thoracic volume.",
        "rule": "Decreased thoracic volume → Increased internal pressure → Air expelled.",
        "quizQ": "What happens when you breathe out?",
        "quizA": "The diaphragm and rib muscles relax, the chest cavity contracts, and air is pushed out.",
        "elements": [
          { "type": "image", "src": "assets/illustrations/thoracic_cage_exhalation_contracted.png", "x": 200, "y": 60, "width": 400, "height": 330 },
          // Diaphragm dome-up vector
          { "type": "path", "d": "M 400 350 L 400 310 M 390 320 L 400 310 L 410 320", "stroke": "#16a34a", "width": 4, "fill": "none" },
          // Ribcage inward recoil vectors
          { "type": "path", "d": "M 230 170 L 270 205 M 260 205 L 270 205 L 270 195", "stroke": "#ea580c", "width": 3, "fill": "none" },
          { "type": "path", "d": "M 570 170 L 530 205 M 540 205 L 530 205 L 530 195", "stroke": "#ea580c", "width": 3, "fill": "none" },
          { "type": "text", "x": 400, "y": 420, "text": "Thoracic Volume ↓  |  Intrapulmonary Pressure ↑ (Expulsion)", "color": "#0f172a", "size": 14 }
        ]
      }
    ],
    "card_2": [
      {
        "clear": true,
        "narration": "Vigorous exercise increases cellular ATP hydrolysis, driving demand for O₂ and producing metabolic CO₂.",
        "rule": "Chemoreceptors detect rising pCO₂/acidity, stimulating hyperventilation.",
        "quizQ": "Why does exercise make you breathe faster and deeper?",
        "quizA": "Contracting muscles require more ATP, consuming more oxygen and generating more carbon dioxide.",
        "elements": [
          { "type": "image", "src": "assets/illustrations/exercise_physiology_feedback_loop.png", "x": 100, "y": 60, "width": 600, "height": 330 },
          { "type": "rect", "x": 150, "y": 400, "width": 500, "height": 40, "fill": "#fff7ed", "stroke": "#f97316", "strokeWidth": 1.5, "rx": 8 },
          { "type": "text", "x": 400, "y": 425, "text": "Metabolic demand activates accessory muscles for forced ventilation", "color": "#c2410c", "size": 13, "weight": "bold" }
        ]
      }
    ]
  }
};