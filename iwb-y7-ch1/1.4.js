// Year 7 Science — Chapter 1 — 1.4 Respiration
// Key: s7_1.4
window.INTERACTIVE_WHITEBOARD_DATA = window.INTERACTIVE_WHITEBOARD_DATA || {};
window.INTERACTIVE_WHITEBOARD_DATA["s7_1.4"] = {
  "title": "1.4 Respiration",
  "watermark": "Section 1.4: Cellular Metabolism",
  "subtopics": [
    { "id": "card_0", "label": "Key idea" },
    { "id": "card_1", "label": "Recall" },
    { "id": "card_2", "label": "Check" }
  ],
  "scenes": {
    "card_0": [
      {
        "clear": true,
        "narration": "Respiration is the intracellular biochemical oxidation of glucose to synthesize ATP, distinct from mechanical breathing.",
        "rule": "Breathing is pulmonary ventilation; respiration is metabolic energy release.",
        "quizQ": "What is respiration?",
        "quizA": "A chemical reaction in cells that releases energy from glucose. It is not the same as breathing.",
        "elements": [
          { "type": "image", "src": "assets/illustrations/cell_mitochondrion_energy_flow.png", "x": 140, "y": 60, "width": 520, "height": 280 },
          // Comparative Distinction Panels
          { "type": "rect", "x": 120, "y": 350, "width": 260, "height": 80, "fill": "#eff6ff", "stroke": "#3b82f6", "strokeWidth": 2, "rx": 8 },
          { "type": "text", "x": 250, "y": 375, "text": "Breathing (Ventilation)", "color": "#1d4ed8", "size": 15, "weight": "bold" },
          { "type": "text", "x": 250, "y": 400, "text": "Physical organ-level gas transit", "color": "#475569", "size": 13 },
          
          { "type": "rect", "x": 420, "y": 350, "width": 260, "height": 80, "fill": "#f0fdf4", "stroke": "#16a34a", "strokeWidth": 2, "rx": 8 },
          { "type": "text", "x": 550, "y": 375, "text": "Respiration (Metabolism)", "color": "#15803d", "size": 15, "weight": "bold" },
          { "type": "text", "x": 550, "y": 400, "text": "Intracellular chemical breakdown", "color": "#475569", "size": 13 }
        ]
      }
    ],
    "card_1": [
      {
        "clear": true,
        "narration": "In aerobic conditions, glucose combines with oxygen to form carbon dioxide, water, and usable ATP energy.",
        "rule": "Word equation: glucose + oxygen → carbon dioxide + water (+ ATP energy)",
        "quizQ": "Write the word equation for aerobic respiration.",
        "quizA": "glucose + oxygen → carbon dioxide + water (+ energy)",
        "elements": [
          { "type": "image", "src": "assets/illustrations/aerobic_respiration_biochemical_cycle.png", "x": 100, "y": 60, "width": 600, "height": 260 },
          // Equation Block with Biochemical Color-Coding
          { "type": "rect", "x": 80, "y": 340, "width": 640, "height": 80, "fill": "#fafafa", "stroke": "#cbd5e1", "strokeWidth": 1.5, "rx": 10 },
          { "type": "text", "x": 180, "y": 370, "text": "Glucose", "color": "#15803d", "size": 18, "weight": "bold" },
          { "type": "text", "x": 180, "y": 395, "text": "(from food)", "color": "#64748b", "size": 12 },
          { "type": "text", "x": 260, "y": 370, "text": "+", "color": "#0f172a", "size": 22 },
          { "type": "text", "x": 330, "y": 370, "text": "Oxygen", "color": "#2563eb", "size": 18, "weight": "bold" },
          { "type": "text", "x": 330, "y": 395, "text": "(from lungs)", "color": "#64748b", "size": 12 },
          { "type": "text", "x": 410, "y": 370, "text": "→", "color": "#0f172a", "size": 24 },
          { "type": "text", "x": 485, "y": 370, "text": "CO₂  +  H₂O", "color": "#d97706", "size": 18, "weight": "bold" },
          { "type": "text", "x": 485, "y": 395, "text": "(waste products)", "color": "#64748b", "size": 12 },
          { "type": "text", "x": 580, "y": 370, "text": "+", "color": "#0f172a", "size": 22 },
          { "type": "text", "x": 645, "y": 370, "text": "ATP", "color": "#dc2626", "size": 20, "weight": "bold" },
          { "type": "text", "x": 645, "y": 395, "text": "(cellular work)", "color": "#dc2626", "size": 12 }
        ]
      }
    ],
    "card_2": [
      {
        "clear": true,
        "narration": "Mitochondria with folded cristae host the electron transport chain, releasing energy inside all metabolically active cells.",
        "rule": "Lungs exchange gases; mitochondria harvest ATP.",
        "quizQ": "Where does respiration happen?",
        "quizA": "Inside cells, primarily within the mitochondria.",
        "elements": [
          { "type": "image", "src": "assets/illustrations/mitochondria_cristae_matrix_detail.png", "x": 160, "y": 70, "width": 480, "height": 290 },
          { "type": "rect", "x": 160, "y": 380, "width": 480, "height": 45, "fill": "#fdf4ff", "stroke": "#c084fc", "strokeWidth": 1.5, "rx": 8 },
          { "type": "text", "x": 400, "y": 408, "text": "Mitochondrial Matrix & Inner Membrane: Site of Aerobic ATP Synthesis", "color": "#7e22ce", "size": 13, "weight": "bold" }
        ]
      }
    ]
  }
};