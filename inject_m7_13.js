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
// m7_13.1: Bearings and scale drawings
// ------------------------------------------------------------------
data["m7_13.1"] = {
  title: "13.1 Bearings and scale drawings",
  watermark: "Section 13.1: Bearings",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What is a 'bearing'?",
        rule: "What is a 'bearing'?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Bearings", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is a 'bearing'?", color: TEXT_MAIN, size: 24 },
          
          // Compass
          { type: "path", d: "M 400 200 L 400 400", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "path", d: "M 300 300 L 500 300", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "text", x: 400, y: 180, text: "N", color: RED, size: 20 },
          
          // Angle
          { type: "path", d: "M 400 300 L 480 220", stroke: BLUE, width: 3, fill: "none" },
          { type: "path", d: "M 400 250 A 50 50 0 0 1 435 265", stroke: ORANGE, width: 3, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "It's an angle measured from North, going clockwise. And it MUST have three numbers!",
        rule: "It's an angle measured from North, going clockwise. It MUST have three numbers (like 045° or 180°).",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 450, text: "1. Start from North", color: RED, size: 20 },
          { type: "text", x: 400, y: 480, text: "2. Go Clockwise", color: ORANGE, size: 20 },
          { type: "text", x: 400, y: 510, text: "3. Use THREE digits (e.g. 045°)", color: BLUE, size: 20, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "What is the bearing for South-East?",
        rule: "What is the bearing for South-East?",
        quizQ: "What is the bearing for South-East?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Compass Points", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is the bearing for South-East?", color: TEXT_MAIN, size: 24 },
          
          // Compass
          { type: "path", d: "M 400 200 L 400 400", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "path", d: "M 300 300 L 500 300", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "text", x: 400, y: 180, text: "N (000°)", color: RED, size: 16 },
          { type: "text", x: 540, y: 305, text: "E (090°)", color: TEXT_SUB, size: 16 },
          { type: "text", x: 400, y: 430, text: "S (180°)", color: TEXT_SUB, size: 16 },
          
          // SE Line
          { type: "path", d: "M 400 300 L 480 380", stroke: BLUE, width: 4, fill: "none" },
          { type: "text", x: 500, y: 400, text: "SE", color: BLUE, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "South-East is exactly halfway between East (90) and South (180). It's 135°.",
        rule: "135°.",
        quizQ: "",
        quizA: "135°.",
        elements: [
          { type: "path", d: "M 400 250 A 50 50 0 0 1 435 335", stroke: ORANGE, width: 3, fill: "none" },
          { type: "text", x: 400, y: 480, text: "135°", color: GREEN, size: 40, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "How do you find a back bearing?",
        rule: "If B is on a bearing of 070° from A, what is the bearing of A from B?",
        quizQ: "If B is on a bearing of 070° from A, what is the bearing of A from B?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Back Bearings", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "B is 070° from A. What is A from B?", color: TEXT_MAIN, size: 24 },
          
          // Point A
          { type: "circle", cx: 300, cy: 350, r: 5, fill: BLUE },
          { type: "text", x: 280, y: 360, text: "A", color: BLUE, size: 20 },
          { type: "path", d: "M 300 350 L 300 250", stroke: RED, width: 2, fill: "none" }, // North line A
          
          // Point B
          { type: "circle", cx: 500, cy: 250, r: 5, fill: ORANGE },
          { type: "text", x: 520, y: 240, text: "B", color: ORANGE, size: 20 },
          { type: "path", d: "M 500 250 L 500 150", stroke: RED, width: 2, fill: "none" }, // North line B
          
          // Line A to B
          { type: "path", d: "M 300 350 L 500 250", stroke: TEXT_MAIN, width: 2, fill: "none" },
          
          // 070 angle
          { type: "path", d: "M 300 300 A 50 50 0 0 1 345 325", stroke: BLUE, width: 2, fill: "none" },
          { type: "text", x: 340, y: 290, text: "070°", color: BLUE, size: 16 }
        ]
      },
      {
        clear: false,
        narration: "To go backwards, just add 180°! 070 + 180 is 250°.",
        rule: "Just add 180°! So, 070° + 180° = 250°.",
        quizQ: "",
        quizA: "Just add 180°! So, 070° + 180° = 250°.",
        elements: [
          // Back angle
          { type: "path", d: "M 500 200 A 50 50 0 1 1 455 275", stroke: ORANGE, width: 3, fill: "none" },
          
          { type: "text", x: 400, y: 450, text: "Just add 180° to turn around!", color: GREEN, size: 24 },
          { type: "text", x: 400, y: 490, text: "070° + 180° = 250°", color: ORANGE, size: 32, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_13.2: Points on a line segment
// ------------------------------------------------------------------
data["m7_13.2"] = {
  title: "13.2 Points on a line segment",
  watermark: "Section 13.2: Midpoints",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do you find the midpoint of a line?",
        rule: "How do you find the midpoint of a line?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Midpoints", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you find the midpoint of a line?", color: TEXT_MAIN, size: 24 },
          
          { type: "circle", cx: 250, cy: 350, r: 6, fill: BLUE },
          { type: "text", x: 250, y: 380, text: "(x1, y1)", color: BLUE, size: 18 },
          
          { type: "circle", cx: 550, cy: 200, r: 6, fill: RED },
          { type: "text", x: 550, y: 180, text: "(x2, y2)", color: RED, size: 18 },
          
          { type: "path", d: "M 250 350 L 550 200", stroke: TEXT_MAIN, width: 3, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "Add the x's and halve them. Add the y's and halve them. It's just the average!",
        rule: "Add the x-coordinates and halve them. Add the y-coordinates and halve them. It's just the average!",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "circle", cx: 400, cy: 275, r: 8, fill: GREEN },
          { type: "text", x: 400, y: 250, text: "Midpoint", color: GREEN, size: 20, bold: true },
          
          { type: "text", x: 400, y: 460, text: "It's just the average of the coordinates!", color: GREEN, size: 24, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's find a midpoint.",
        rule: "Find the midpoint between (2, 5) and (8, 1).",
        quizQ: "Find the midpoint between (2, 5) and (8, 1).",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Calculating Midpoint", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Find the midpoint between (2, 5) and (8, 1).", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "Average the x's: 2+8=10, half is 5. Average the y's: 5+1=6, half is 3. The midpoint is (5, 3).",
        rule: "x: (2+8)/2 = 5. y: (5+1)/2 = 3. The midpoint is (5, 3).",
        quizQ: "",
        quizA: "x: (2+8)/2 = 5. y: (5+1)/2 = 3. The midpoint is (5, 3).",
        elements: [
          { type: "text", x: 300, y: 250, text: "x-average:", color: BLUE, size: 20 },
          { type: "text", x: 300, y: 290, text: "(2 + 8) ÷ 2 = 5", color: BLUE, size: 24 },
          
          { type: "text", x: 500, y: 250, text: "y-average:", color: RED, size: 20 },
          { type: "text", x: 500, y: 290, text: "(5 + 1) ÷ 2 = 3", color: RED, size: 24 },
          
          { type: "text", x: 400, y: 400, text: "Midpoint = (5, 3)", color: GREEN, size: 36, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "What if we know the midpoint, but need the end?",
        rule: "A is (0, 0), the midpoint is (3, 4). Where is B?",
        quizQ: "A is (0, 0), the midpoint is (3, 4). Where is B?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Finding the End", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "A is (0, 0), the midpoint is (3, 4). Where is B?", color: TEXT_MAIN, size: 24 },
          
          { type: "circle", cx: 250, cy: 350, r: 6, fill: BLUE },
          { type: "text", x: 250, y: 380, text: "A (0, 0)", color: BLUE, size: 18 },
          
          { type: "circle", cx: 400, cy: 250, r: 8, fill: GREEN },
          { type: "text", x: 400, y: 220, text: "Midpoint (3, 4)", color: GREEN, size: 18 },
          
          { type: "path", d: "M 250 350 L 400 250", stroke: TEXT_MAIN, width: 3, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "From A to the middle is +3, +4. Do that again to reach B! B is (6, 8).",
        rule: "Double the midpoint! B is at (6, 8).",
        quizQ: "",
        quizA: "Double the midpoint! B is at (6, 8).",
        elements: [
          { type: "path", d: "M 400 250 L 550 150", stroke: TEXT_MAIN, width: 3, fill: "none", dash: "5,5" },
          
          { type: "path", d: "M 250 360 L 400 360 L 400 260", stroke: ORANGE, width: 2, fill: "none", dash: "4,4" },
          { type: "text", x: 325, y: 380, text: "+3", color: ORANGE, size: 16 },
          { type: "text", x: 420, y: 310, text: "+4", color: ORANGE, size: 16 },
          
          { type: "path", d: "M 400 260 L 550 260 L 550 160", stroke: ORANGE, width: 2, fill: "none", dash: "4,4" },
          { type: "text", x: 475, y: 280, text: "+3", color: ORANGE, size: 16 },
          { type: "text", x: 570, y: 210, text: "+4", color: ORANGE, size: 16 },
          
          { type: "circle", cx: 550, cy: 150, r: 6, fill: RED },
          { type: "text", x: 550, y: 120, text: "B (6, 8)", color: RED, size: 24, bold: true },
          
          { type: "text", x: 400, y: 480, text: "Just repeat the jump!", color: GREEN, size: 24 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_13.3: Transformations
// ------------------------------------------------------------------
data["m7_13.3"] = {
  title: "13.3 Transformations",
  watermark: "Section 13.3: Transformations",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What are the four ways to transform a shape?",
        rule: "What are the four ways to transform a shape?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: 4 Transformations", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What are the four ways to transform a shape?", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "Translation (slide), Rotation (spin), Reflection (flip), and Enlargement (stretch).",
        rule: "Translation (slide), Rotation (spin), Reflection (flip), and Enlargement (stretch or shrink).",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 250, y: 250, text: "1. Translation", color: BLUE, size: 24, bold: true },
          { type: "text", x: 250, y: 280, text: "(Slide)", color: TEXT_SUB, size: 18 },
          
          { type: "text", x: 550, y: 250, text: "2. Rotation", color: GREEN, size: 24, bold: true },
          { type: "text", x: 550, y: 280, text: "(Spin)", color: TEXT_SUB, size: 18 },
          
          { type: "text", x: 250, y: 380, text: "3. Reflection", color: RED, size: 24, bold: true },
          { type: "text", x: 250, y: 410, text: "(Flip)", color: TEXT_SUB, size: 18 },
          
          { type: "text", x: 550, y: 380, text: "4. Enlargement", color: PURPLE, size: 24, bold: true },
          { type: "text", x: 550, y: 410, text: "(Stretch or shrink)", color: TEXT_SUB, size: 18 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "What does a translation vector mean?",
        rule: "What does the translation vector (3, -2) mean?",
        quizQ: "What does the translation vector (3, -2) mean?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Vectors", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What does the translation vector (3, -2) mean?", color: TEXT_MAIN, size: 24 },
          
          { type: "path", d: "M 380 220 L 370 220 L 370 320 L 380 320", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 420 220 L 430 220 L 430 320 L 420 320", stroke: TEXT_MAIN, width: 3, fill: "none" },
          
          { type: "text", x: 400, y: 250, text: "3", color: BLUE, size: 24 },
          { type: "text", x: 400, y: 300, text: "-2", color: RED, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "The top number is left/right. The bottom number is up/down. Move 3 right, 2 down.",
        rule: "Move the shape 3 squares RIGHT and 2 squares DOWN.",
        quizQ: "",
        quizA: "Move the shape 3 squares RIGHT and 2 squares DOWN.",
        elements: [
          { type: "text", x: 480, y: 250, text: "← Right 3", color: BLUE, size: 20 },
          { type: "text", x: 480, y: 300, text: "← Down 2", color: RED, size: 20 },
          
          { type: "text", x: 400, y: 450, text: "Top = Left/Right", color: TEXT_SUB, size: 20 },
          { type: "text", x: 400, y: 480, text: "Bottom = Up/Down", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Which transformation changes the size?",
        rule: "Which transformation changes the size of the shape?",
        quizQ: "Which transformation changes the size of the shape?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Changing Size", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Which transformation changes the size of the shape?", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "Enlargement! The other three keep the shape exactly the same size.",
        rule: "Enlargement! The other three keep the shape exactly the same size.",
        quizQ: "",
        quizA: "Enlargement! The other three keep the shape exactly the same size.",
        elements: [
          { type: "rect", x: 250, y: 250, width: 40, height: 40, fill: "#e0f2fe", stroke: BLUE, strokeWidth: 2 },
          { type: "path", d: "M 320 270 L 380 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 370 260 L 380 270 L 370 280", stroke: TEXT_MAIN, width: 3, fill: "none" },
          
          { type: "rect", x: 420, y: 210, width: 120, height: 120, fill: "#d1fae5", stroke: GREEN, strokeWidth: 3 },
          
          { type: "text", x: 400, y: 420, text: "Enlargement!", color: GREEN, size: 36, bold: true },
          { type: "text", x: 400, y: 480, text: "The others just move it around without changing size.", color: TEXT_SUB, size: 20 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_13.4: Enlarging shapes
// ------------------------------------------------------------------
data["m7_13.4"] = {
  title: "13.4 Enlarging shapes",
  watermark: "Section 13.4: Enlargement",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do you enlarge from a centre?",
        rule: "How do you enlarge from a centre?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Centre of Enlargement", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you enlarge from a centre?", color: TEXT_MAIN, size: 24 },
          
          { type: "circle", cx: 200, cy: 350, r: 5, fill: RED },
          { type: "text", x: 200, y: 370, text: "Centre", color: RED, size: 16 },
          
          { type: "path", d: "M 300 300 L 300 250 L 350 300 Z", fill: "#e0f2fe", stroke: BLUE, width: 2 }
        ]
      },
      {
        clear: false,
        narration: "Draw rays from the centre through each corner. Multiply the distance by the scale factor!",
        rule: "Draw rays from the centre through each vertex. New distance = scale factor × old distance. Scale factor 2 doubles lengths.",
        quizQ: "",
        quizA: "",
        elements: [
          // Rays
          { type: "path", d: "M 200 350 L 400 250", stroke: ORANGE, width: 2, fill: "none", dash: "4,4" },
          { type: "path", d: "M 200 350 L 400 150", stroke: ORANGE, width: 2, fill: "none", dash: "4,4" },
          { type: "path", d: "M 200 350 L 500 250", stroke: ORANGE, width: 2, fill: "none", dash: "4,4" },
          
          // Big shape (SF 2)
          { type: "path", d: "M 400 250 L 400 150 L 500 250 Z", fill: "none", stroke: GREEN, width: 3 },
          
          { type: "text", x: 400, y: 450, text: "Draw rays from the centre.", color: GREEN, size: 24, bold: true },
          { type: "text", x: 400, y: 490, text: "Scale factor 2 = twice as far from the centre!", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "What does scale factor 1/2 do?",
        rule: "What does scale factor 1/2 do?",
        quizQ: "What does scale factor 1/2 do?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Fractional Scale Factors", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What does scale factor 1/2 do?", color: TEXT_MAIN, size: 24 },
          
          { type: "circle", cx: 200, cy: 350, r: 5, fill: RED },
          { type: "text", x: 200, y: 370, text: "Centre", color: RED, size: 16 },
          
          { type: "path", d: "M 400 250 L 400 150 L 500 250 Z", fill: "#e0f2fe", stroke: BLUE, width: 3 }
        ]
      },
      {
        clear: false,
        narration: "It's a reduction! The lengths are half as long, and it moves closer to the centre.",
        rule: "A reduction: lengths half as long, closer to the centre.",
        quizQ: "",
        quizA: "A reduction: lengths half as long, closer to the centre.",
        elements: [
          { type: "path", d: "M 200 350 L 400 250", stroke: ORANGE, width: 2, fill: "none", dash: "4,4" },
          { type: "path", d: "M 200 350 L 400 150", stroke: ORANGE, width: 2, fill: "none", dash: "4,4" },
          { type: "path", d: "M 200 350 L 500 250", stroke: ORANGE, width: 2, fill: "none", dash: "4,4" },
          
          // Small shape
          { type: "path", d: "M 300 300 L 300 250 L 350 300 Z", fill: "none", stroke: GREEN, width: 3 },
          
          { type: "text", x: 400, y: 450, text: "It shrinks!", color: GREEN, size: 28, bold: true },
          { type: "text", x: 400, y: 490, text: "Half the size, and half the distance to the centre.", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "How do areas scale?",
        rule: "How do areas scale?",
        quizQ: "How do areas scale?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Area Scale Factor", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do areas scale?", color: TEXT_MAIN, size: 24 },
          
          { type: "rect", x: 250, y: 250, width: 40, height: 40, fill: "#e0f2fe", stroke: BLUE, strokeWidth: 2 },
          { type: "text", x: 270, y: 240, text: "1", color: BLUE, size: 16 },
          { type: "text", x: 240, y: 270, text: "1", color: BLUE, size: 16 },
          { type: "text", x: 270, y: 275, text: "Area 1", color: BLUE, size: 12 }
        ]
      },
      {
        clear: false,
        narration: "If you enlarge by scale factor 3, the area gets 9 times bigger! Area scale factor is squared.",
        rule: "Area scale factor is (length scale factor)². SF 3 → area ×9.",
        quizQ: "",
        quizA: "Area scale factor is (length scale factor)². SF 3 → area ×9.",
        elements: [
          { type: "path", d: "M 320 270 L 380 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 370 260 L 380 270 L 370 280", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 350, y: 250, text: "SF 3", color: ORANGE, size: 16 },
          
          { type: "rect", x: 420, y: 190, width: 120, height: 120, fill: "#d1fae5", stroke: GREEN, strokeWidth: 2 },
          // Grid lines inside
          { type: "path", d: "M 460 190 L 460 310", stroke: GREEN, width: 1, fill: "none" },
          { type: "path", d: "M 500 190 L 500 310", stroke: GREEN, width: 1, fill: "none" },
          { type: "path", d: "M 420 230 L 540 230", stroke: GREEN, width: 1, fill: "none" },
          { type: "path", d: "M 420 270 L 540 270", stroke: GREEN, width: 1, fill: "none" },
          
          { type: "text", x: 480, y: 180, text: "3", color: GREEN, size: 20 },
          { type: "text", x: 400, y: 250, text: "3", color: GREEN, size: 20 },
          { type: "text", x: 480, y: 255, text: "Area 9", color: GREEN, size: 20, bold: true },
          
          { type: "text", x: 400, y: 460, text: "Area Scale Factor = (Length Scale Factor)²", color: GREEN, size: 24, bold: true }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 7 Chapter 13!");
