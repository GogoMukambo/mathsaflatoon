const fs = require('fs');

let content = fs.readFileSync('interactive-whiteboard-data.js', 'utf8');
let jsonStr = content.replace('window.INTERACTIVE_WHITEBOARD_DATA = ', '').replace(/;\s*$/, '');
let data = eval('(' + jsonStr + ')');

const BG_COLOR = "#ffffff";
const BOX_BG = "#f8fafc";
const BOX_BORDER = "#cbd5e1";
const TEXT_MAIN = "#0f172a";
const TEXT_SUB = "#475569";
const GREEN = "#059669";
const BLUE = "#2563eb";
const RED = "#dc2626";
const ORANGE = "#d97706";
const PURPLE = "#7c3aed";

const getBg = () => [
  { type: "rect", x: 0, y: 0, width: 800, height: 600, fill: BG_COLOR }
];

// ------------------------------------------------------------------
// m8_5.1: Calculating angles
// ------------------------------------------------------------------
data["m8_5.1"] = {
  title: "5.1 Calculating angles",
  watermark: "Section 5.1: Angles",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What are the golden rules of angles?",
        rule: "What are the golden rules of angles?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Angle Rules", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What are the golden rules of angles?", color: TEXT_MAIN, size: 24 },
          
          // Straight line
          { type: "path", d: "M 150 250 L 350 250", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 250 250 L 300 200", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 220 250 A 30 30 0 0 1 280 250", stroke: BLUE, width: 2, fill: "none" },
          { type: "text", x: 250, y: 280, text: "Line = 180°", color: BLUE, size: 16 },
          
          // Triangle
          { type: "path", d: "M 450 250 L 650 250 L 550 150 Z", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 550, y: 280, text: "Triangle = 180°", color: RED, size: 16 },
          
          // Full circle
          { type: "circle", cx: 250, cy: 400, r: 40, stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 250, y: 470, text: "Circle = 360°", color: GREEN, size: 16 },
          
          // X shape
          { type: "path", d: "M 450 350 L 650 450", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 450 450 L 650 350", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 550, y: 470, text: "Opposite = Equal", color: ORANGE, size: 16 }
        ]
      },
      {
        clear: false,
        narration: "Straight line is 180. Full circle is 360. Inside a triangle is 180. Opposite angles are equal. And parallel lines have equal Z and F shapes!",
        rule: "Straight line = 180°. Full circle = 360°. Inside a triangle = 180°. Opposite angles (X-shape) are equal. Parallel lines have equal Z and F shapes!",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "rect", x: 100, y: 500, width: 600, height: 40, fill: "#fef3c7", rx: 10 },
          { type: "text", x: 400, y: 525, text: "Parallel lines have equal Z and F shapes!", color: ORANGE, size: 20, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "What are alternate angles?",
        rule: "What are 'alternate' angles?",
        quizQ: "What are 'alternate' angles?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Parallel Lines", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What are 'alternate' angles?", color: TEXT_MAIN, size: 24 },
          
          // Parallel lines
          { type: "path", d: "M 200 250 L 600 250", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 400 240 L 410 250 L 400 260", stroke: TEXT_MAIN, width: 2, fill: "none" }, // arrow
          
          { type: "path", d: "M 200 350 L 600 350", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 400 340 L 410 350 L 400 360", stroke: TEXT_MAIN, width: 2, fill: "none" }, // arrow
          
          // Transversal
          { type: "path", d: "M 300 150 L 500 450", stroke: TEXT_MAIN, width: 3, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "They make a Z shape on parallel lines. They are always exactly equal!",
        rule: "They make a 'Z' shape on parallel lines. They are always exactly equal!",
        quizQ: "",
        quizA: "They make a 'Z' shape on parallel lines. They are always exactly equal!",
        elements: [
          // Z shape highlight
          { type: "path", d: "M 250 250 L 366 250 L 433 350 L 550 350", stroke: ORANGE, width: 6, fill: "none", opacity: 0.5 },
          
          // Angles
          { type: "path", d: "M 330 250 A 30 30 0 0 0 350 280", stroke: BLUE, width: 3, fill: "none" },
          { type: "text", x: 320, y: 280, text: "a", color: BLUE, size: 24 },
          
          { type: "path", d: "M 470 350 A 30 30 0 0 0 450 320", stroke: BLUE, width: 3, fill: "none" },
          { type: "text", x: 480, y: 320, text: "b", color: BLUE, size: 24 },
          
          { type: "text", x: 400, y: 480, text: "They make a 'Z' shape!", color: ORANGE, size: 28, bold: true },
          { type: "text", x: 400, y: 520, text: "They are always exactly equal. (a = b)", color: GREEN, size: 20 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "A triangle has angles 50 degrees and 60 degrees. What is the third angle?",
        rule: "A triangle has angles 50° and 60°. What is the third angle?",
        quizQ: "A triangle has angles 50° and 60°. What is the third angle?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Triangles", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "A triangle has angles 50° and 60°. What is the third angle?", color: TEXT_MAIN, size: 24 },
          
          { type: "path", d: "M 250 350 L 550 350 L 450 150 Z", stroke: TEXT_MAIN, width: 4, fill: "none" },
          
          { type: "text", x: 300, y: 330, text: "50°", color: BLUE, size: 20 },
          { type: "text", x: 500, y: 330, text: "60°", color: BLUE, size: 20 },
          { type: "text", x: 450, y: 200, text: "?", color: RED, size: 32 }
        ]
      },
      {
        clear: false,
        narration: "Angles in a triangle add up to 180. 180 minus 50 minus 60 is 70 degrees.",
        rule: "70°. (Because 180 - 50 - 60 = 70).",
        quizQ: "",
        quizA: "70°. (Because 180 - 50 - 60 = 70).",
        elements: [
          { type: "text", x: 400, y: 420, text: "Total = 180°", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 400, y: 470, text: "180 - 50 - 60 = 70", color: ORANGE, size: 32 },
          
          { type: "text", x: 400, y: 530, text: "The third angle is 70°", color: GREEN, size: 32, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_5.2: Interior angles of polygons
// ------------------------------------------------------------------
data["m8_5.2"] = {
  title: "5.2 Interior angles of polygons",
  watermark: "Section 5.2: Polygons",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do you find the total inside angles of ANY polygon?",
        rule: "How do you find the total inside angles of ANY polygon?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Interior Angles", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you find the total inside angles of ANY polygon?", color: TEXT_MAIN, size: 24 },
          
          // Pentagon
          { type: "path", d: "M 400 200 L 500 270 L 460 380 L 340 380 L 300 270 Z", stroke: BLUE, width: 4, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "Count the sides, subtract 2, and multiply by 180! This splits the shape into triangles.",
        rule: "Count the sides (n), subtract 2, and multiply by 180°. The formula is (n − 2) × 180°.",
        quizQ: "",
        quizA: "",
        elements: [
          // Triangles inside
          { type: "path", d: "M 400 200 L 460 380", stroke: ORANGE, width: 2, fill: "none", strokeDasharray: "5,5" },
          { type: "path", d: "M 400 200 L 340 380", stroke: ORANGE, width: 2, fill: "none", strokeDasharray: "5,5" },
          
          { type: "text", x: 400, y: 440, text: "Formula: (n - 2) × 180°", color: GREEN, size: 36, bold: true },
          { type: "text", x: 400, y: 490, text: "n is the number of sides.", color: TEXT_SUB, size: 20 },
          { type: "text", x: 400, y: 520, text: "(n - 2) is how many triangles fit inside!", color: ORANGE, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "What do the inside angles of a hexagon add up to?",
        rule: "What do the inside angles of a hexagon add up to?",
        quizQ: "What do the inside angles of a hexagon add up to?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Hexagon", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What do the inside angles of a hexagon add up to?", color: TEXT_MAIN, size: 24 },
          
          // Hexagon
          { type: "path", d: "M 350 220 L 450 220 L 500 300 L 450 380 L 350 380 L 300 300 Z", stroke: BLUE, width: 4, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "A hexagon has 6 sides. 6 minus 2 is 4 triangles. 4 times 180 is 720 degrees.",
        rule: "(6 − 2) × 180° = 4 × 180° = 720°.",
        quizQ: "",
        quizA: "(6 − 2) × 180° = 4 × 180° = 720°.",
        elements: [
          { type: "text", x: 400, y: 430, text: "n = 6 sides", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 400, y: 480, text: "(6 - 2) × 180° = 4 × 180°", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 530, text: "= 720°", color: GREEN, size: 40, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "What is ONE inside angle of a regular pentagon?",
        rule: "What is ONE inside angle of a regular pentagon?",
        quizQ: "What is ONE inside angle of a regular pentagon?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Regular Polygons", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is ONE inside angle of a regular pentagon?", color: TEXT_MAIN, size: 24 },
          
          // Pentagon
          { type: "path", d: "M 400 220 L 480 280 L 450 370 L 350 370 L 320 280 Z", stroke: BLUE, width: 4, fill: "none" },
          { type: "circle", cx: 320, cy: 280, r: 20, stroke: RED, width: 3, fill: "none" },
          { type: "text", x: 300, y: 270, text: "?", color: RED, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "First find the total: 540 degrees. Then divide by 5 corners! 540 divided by 5 is 108 degrees.",
        rule: "First find the total: (5 - 2) × 180 = 540°. Then divide by 5 corners: 540° ÷ 5 = 108°.",
        quizQ: "",
        quizA: "First find the total: (5 - 2) × 180 = 540°. Then divide by 5 corners: 540° ÷ 5 = 108°.",
        elements: [
          { type: "text", x: 400, y: 420, text: "Total = (5 - 2) × 180° = 540°", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 400, y: 470, text: "Divide by 5 corners:", color: ORANGE, size: 24 },
          { type: "text", x: 400, y: 520, text: "540° ÷ 5 = 108°", color: GREEN, size: 40, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_5.3: Exterior angles of polygons
// ------------------------------------------------------------------
data["m8_5.3"] = {
  title: "5.3 Exterior angles of polygons",
  watermark: "Section 5.3: Exterior Angles",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What is the magic rule for exterior angles?",
        rule: "What is the magic rule for 'exterior' (outside) angles?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Exterior Angles", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is the magic rule for 'exterior' (outside) angles?", color: TEXT_MAIN, size: 24 },
          
          // Triangle with extended lines
          { type: "path", d: "M 300 350 L 500 350 L 400 200 Z", stroke: BLUE, width: 4, fill: "none" },
          
          { type: "path", d: "M 500 350 L 600 350", stroke: RED, width: 3, fill: "none" }, // extend base right
          { type: "path", d: "M 400 200 L 350 125", stroke: RED, width: 3, fill: "none" }, // extend left side up
          { type: "path", d: "M 300 350 L 250 425", stroke: RED, width: 3, fill: "none" }  // extend right side down
        ]
      },
      {
        clear: false,
        narration: "If you walk all the way around the outside, you turn a full circle! So the outside angles ALWAYS add up to 360 degrees.",
        rule: "If you walk all the way around the outside of ANY shape, you turn a full circle! So the outside angles ALWAYS add up to 360°.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 530 350 A 30 30 0 0 0 490 335", stroke: ORANGE, width: 3, fill: "none" },
          { type: "path", d: "M 380 170 A 30 30 0 0 0 415 175", stroke: ORANGE, width: 3, fill: "none" },
          { type: "path", d: "M 285 375 A 30 30 0 0 0 270 350", stroke: ORANGE, width: 3, fill: "none" },
          
          { type: "text", x: 400, y: 460, text: "They ALWAYS add up to 360°", color: GREEN, size: 36, bold: true },
          { type: "text", x: 400, y: 510, text: "(Because walking around the shape is one full turn!)", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "What is the outside angle of a regular octagon?",
        rule: "What is the outside angle of a regular octagon (8 sides)?",
        quizQ: "What is the outside angle of a regular octagon (8 sides)?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Octagon", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is the outside angle of a regular octagon (8 sides)?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "Total Exterior = 360°", color: BLUE, size: 32 }
        ]
      },
      {
        clear: false,
        narration: "Since it's regular, all 8 outside angles are the same. 360 divided by 8 is 45 degrees.",
        rule: "360° ÷ 8 = 45°.",
        quizQ: "",
        quizA: "360° ÷ 8 = 45°.",
        elements: [
          { type: "text", x: 400, y: 350, text: "360° ÷ 8", color: ORANGE, size: 40 },
          
          { type: "text", x: 400, y: 450, text: "= 45°", color: GREEN, size: 48, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "How do the inside and outside angles connect?",
        rule: "How do the inside and outside angles connect?",
        quizQ: "How do the inside and outside angles connect?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: The Connection", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do the inside and outside angles connect?", color: TEXT_MAIN, size: 24 },
          
          { type: "path", d: "M 200 350 L 500 350", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "path", d: "M 400 350 L 300 200", stroke: BLUE, width: 4, fill: "none" },
          
          { type: "text", x: 350, y: 330, text: "Inside", color: BLUE, size: 20 },
          { type: "text", x: 450, y: 330, text: "Outside", color: RED, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "They sit next to each other on a straight flat line, so they always add up to 180 degrees!",
        rule: "They sit next to each other on a straight flat line, so they always add up to 180°!",
        quizQ: "",
        quizA: "They sit next to each other on a straight flat line, so they always add up to 180°!",
        elements: [
          { type: "path", d: "M 370 350 A 30 30 0 0 1 430 350", stroke: ORANGE, width: 3, fill: "none" },
          
          { type: "text", x: 400, y: 450, text: "They make a straight line!", color: ORANGE, size: 28, bold: true },
          { type: "text", x: 400, y: 510, text: "Inside + Outside = 180°", color: GREEN, size: 36, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_5.4: Constructions
// ------------------------------------------------------------------
data["m8_5.4"] = {
  title: "5.4 Constructions",
  watermark: "Section 5.4: Constructions",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What are standard compass and ruler constructions?",
        rule: "What are standard compass-and-ruler constructions?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Constructions", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What are standard compass-and-ruler constructions?", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "Perpendicular bisectors, angle bisectors, dropping a perpendicular line, and drawing exact triangles!",
        rule: "Perpendicular bisector of a segment; angle bisector; a perpendicular from a point to a line; triangles from given sides/angles.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 250, text: "1. Perpendicular bisector (cutting a line in half)", color: BLUE, size: 20 },
          { type: "text", x: 400, y: 300, text: "2. Angle bisector (cutting an angle in half)", color: BLUE, size: 20 },
          { type: "text", x: 400, y: 350, text: "3. Perpendicular from a point to a line", color: BLUE, size: 20 },
          { type: "text", x: 400, y: 400, text: "4. Exact triangles (using SSS, SAS, ASA)", color: BLUE, size: 20 },
          
          { type: "path", d: "M 250 480 L 550 480", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "path", d: "M 400 430 L 400 530", stroke: RED, width: 2, fill: "none" },
          { type: "path", d: "M 380 440 A 60 60 0 0 1 420 440", stroke: ORANGE, width: 1, fill: "none" },
          { type: "path", d: "M 380 520 A 60 60 0 0 0 420 520", stroke: ORANGE, width: 1, fill: "none" }
        ]
      }
    ],
    "card_1": [
      {
        narration: "What does a perpendicular bisector give you?",
        rule: "What does a perpendicular bisector give you?",
        quizQ: "What does a perpendicular bisector give you?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Bisectors", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What does a perpendicular bisector give you?", color: TEXT_MAIN, size: 24 },
          
          { type: "path", d: "M 250 300 L 550 300", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "circle", cx: 250, cy: 300, r: 5, fill: BLUE },
          { type: "circle", cx: 550, cy: 300, r: 5, fill: BLUE },
          { type: "text", x: 230, y: 300, text: "A", color: BLUE, size: 20 },
          { type: "text", x: 570, y: 300, text: "B", color: BLUE, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "It gives you the set of all points that are exactly the same distance from both ends!",
        rule: "The set of points equidistant from the two endpoints.",
        quizQ: "",
        quizA: "The set of points equidistant from the two endpoints.",
        elements: [
          { type: "path", d: "M 400 150 L 400 450", stroke: RED, width: 3, fill: "none" },
          { type: "rect", x: 400, y: 290, width: 10, height: 10, fill: "none", stroke: RED, strokeWidth: 2 },
          
          { type: "path", d: "M 250 300 L 400 200", stroke: ORANGE, width: 2, fill: "none", strokeDasharray: "5,5" },
          { type: "path", d: "M 550 300 L 400 200", stroke: ORANGE, width: 2, fill: "none", strokeDasharray: "5,5" },
          
          { type: "text", x: 400, y: 500, text: "Every point on the red line is", color: GREEN, size: 24, bold: true },
          { type: "text", x: 400, y: 530, text: "equidistant from A and B!", color: GREEN, size: 24, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "What does 'inscribe' mean?",
        rule: "What does inscribe mean?",
        quizQ: "What does inscribe mean?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Vocabulary", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What does 'inscribe' mean?", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "It means drawing a shape inside another shape so its corners perfectly touch the outside edge!",
        rule: "Draw a shape inside another so its vertices touch the outer shape. A square inscribed in a circle has all four corners on the circle.",
        quizQ: "",
        quizA: "Draw a shape inside another so its vertices touch the outer shape. A square inscribed in a circle has all four corners on the circle.",
        elements: [
          { type: "circle", cx: 400, cy: 320, r: 80, stroke: BLUE, width: 3, fill: "none" },
          { type: "path", d: "M 343 263 L 457 263 L 457 377 L 343 377 Z", stroke: RED, width: 3, fill: "none" },
          
          { type: "circle", cx: 343, cy: 263, r: 5, fill: ORANGE },
          { type: "circle", cx: 457, cy: 263, r: 5, fill: ORANGE },
          { type: "circle", cx: 457, cy: 377, r: 5, fill: ORANGE },
          { type: "circle", cx: 343, cy: 377, r: 5, fill: ORANGE },
          
          { type: "text", x: 400, y: 460, text: "Draw a shape INSIDE another.", color: GREEN, size: 28, bold: true },
          { type: "text", x: 400, y: 500, text: "The corners (vertices) must touch the outer shape!", color: TEXT_SUB, size: 20 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_5.5: Pythagoras’ theorem
// ------------------------------------------------------------------
data["m8_5.5"] = {
  title: "5.5 Pythagoras’ theorem",
  watermark: "Section 5.5: Pythagoras",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What is Pythagoras' theorem?",
        rule: "State Pythagoras’ theorem.",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Pythagoras", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "State Pythagoras’ theorem.", color: TEXT_MAIN, size: 24 },
          
          { type: "path", d: "M 300 350 L 500 350 L 500 200 Z", stroke: BLUE, width: 4, fill: "none" },
          { type: "rect", x: 480, y: 330, width: 20, height: 20, fill: "none", stroke: BLUE, strokeWidth: 2 },
          
          { type: "text", x: 400, y: 380, text: "a", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 530, y: 280, text: "b", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 380, y: 260, text: "c", color: RED, size: 28, bold: true }
        ]
      },
      {
        clear: false,
        narration: "In a right-angled triangle, a squared plus b squared equals c squared! c is the hypotenuse, the longest side.",
        rule: "In a right-angled triangle, a² + b² = c², where c is the hypotenuse (longest side, opposite the right angle).",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 450, text: "a² + b² = c²", color: GREEN, size: 48, bold: true },
          { type: "text", x: 400, y: 510, text: "c is the hypotenuse (the longest side).", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "The short sides are 3 and 4. What is the hypotenuse?",
        rule: "Legs 3 and 4. Hypotenuse?",
        quizQ: "Legs 3 and 4. Hypotenuse?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Finding the Hypotenuse", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Legs are 3 and 4. Hypotenuse?", color: TEXT_MAIN, size: 24 },
          
          { type: "path", d: "M 300 350 L 450 350 L 450 200 Z", stroke: BLUE, width: 4, fill: "none" },
          { type: "rect", x: 430, y: 330, width: 20, height: 20, fill: "none", stroke: BLUE, strokeWidth: 2 },
          
          { type: "text", x: 375, y: 380, text: "4", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 480, y: 280, text: "3", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 350, y: 260, text: "c", color: RED, size: 28 }
        ]
      },
      {
        clear: false,
        narration: "3 squared is 9. 4 squared is 16. 9 plus 16 is 25. The square root of 25 is 5!",
        rule: "5, because 9 + 16 = 25.",
        quizQ: "",
        quizA: "5, because 9 + 16 = 25.",
        elements: [
          { type: "text", x: 400, y: 430, text: "3² + 4² = c²", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 400, y: 470, text: "9 + 16 = 25", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 520, text: "c = √25 = 5", color: GREEN, size: 36, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "The hypotenuse is 13, one short side is 5. What is the other side?",
        rule: "Hypotenuse 13, one leg 5. Other leg?",
        quizQ: "Hypotenuse 13, one leg 5. Other leg?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Finding a Short Side", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Hypotenuse 13, one leg 5. Other leg?", color: TEXT_MAIN, size: 24 },
          
          { type: "path", d: "M 250 350 L 500 350 L 500 250 Z", stroke: BLUE, width: 4, fill: "none" },
          { type: "rect", x: 480, y: 330, width: 20, height: 20, fill: "none", stroke: BLUE, strokeWidth: 2 },
          
          { type: "text", x: 375, y: 380, text: "a", color: RED, size: 28 },
          { type: "text", x: 530, y: 300, text: "5", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 360, y: 280, text: "13", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "We need to subtract! 13 squared minus 5 squared. 169 minus 25 is 144. The square root of 144 is 12.",
        rule: "√(169 − 25) = √144 = 12.",
        quizQ: "",
        quizA: "√(169 − 25) = √144 = 12.",
        elements: [
          { type: "text", x: 400, y: 430, text: "a² = 13² - 5²", color: ORANGE, size: 24 },
          { type: "text", x: 400, y: 470, text: "a² = 169 - 25 = 144", color: TEXT_MAIN, size: 28 },
          { type: "text", x: 400, y: 520, text: "a = √144 = 12", color: GREEN, size: 36, bold: true }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 8 Chapter 5!");
