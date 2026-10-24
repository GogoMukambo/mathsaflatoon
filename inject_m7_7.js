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
const PINK = "#db2777";

const getBg = () => [
  { type: "rect", x: 0, y: 0, width: 800, height: 600, fill: BG_COLOR }
];

// ------------------------------------------------------------------
// m7_7.1: Circumference and area of a circle
// ------------------------------------------------------------------
data["m7_7.1"] = {
  title: "7.1 Circumference and area of a circle",
  watermark: "Section 7.1: Circles",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "Let's learn the magic formulas for circles!",
        rule: "What are the magic circle formulas?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Circle Formulas", color: ORANGE, size: 28 },
          
          // Circle
          { type: "circle", cx: 400, cy: 300, r: 120, fill: "#e0f2fe", stroke: BLUE, width: 4 },
          
          // Radius
          { type: "path", d: "M 400 300 L 520 300", stroke: RED, width: 3, fill: "none" },
          { type: "circle", cx: 400, cy: 300, r: 5, fill: TEXT_MAIN },
          { type: "text", x: 460, y: 290, text: "r (radius)", color: RED, size: 20 },
          
          // Diameter
          { type: "path", d: "M 280 340 L 520 340", stroke: PURPLE, width: 3, fill: "none", dash: "5,5" },
          { type: "text", x: 400, y: 365, text: "d (diameter)", color: PURPLE, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "The distance around the outside is the Circumference. The space inside is the Area.",
        rule: "Circumference = π × d. Area = π × r².",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 200, y: 180, text: "Circumference (Outside)", color: BLUE, size: 22 },
          { type: "text", x: 200, y: 220, text: "C = π × d", color: BLUE, size: 28 },
          
          { type: "text", x: 600, y: 180, text: "Area (Inside)", color: GREEN, size: 22 },
          { type: "text", x: 600, y: 220, text: "A = π × r²", color: GREEN, size: 28 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's practice finding the area!",
        rule: "Radius is 7 cm. What is the Area in terms of π?",
        quizQ: "Radius is 7 cm. What is the Area in terms of π?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Area of a Circle", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Radius is 7 cm. What is the Area in terms of π?", color: TEXT_MAIN, size: 24 },
          
          // Circle
          { type: "circle", cx: 400, cy: 320, r: 100, fill: "#d1fae5", stroke: GREEN, width: 3 },
          { type: "path", d: "M 400 320 L 500 320", stroke: RED, width: 3, fill: "none" },
          { type: "circle", cx: 400, cy: 320, r: 5, fill: TEXT_MAIN },
          { type: "text", x: 450, y: 310, text: "7 cm", color: RED, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "Use the formula A = π × r². Since r is 7, we square it to get 49.",
        rule: "7 squared is 49. So the area is 49π cm².",
        quizQ: "",
        quizA: "7 squared is 49. So the area is 49π cm².",
        elements: [
          { type: "text", x: 400, y: 460, text: "A = π × r²", color: TEXT_SUB, size: 24 },
          { type: "text", x: 400, y: 500, text: "A = π × 7² = 49π cm²", color: GREEN, size: 28 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Now let's find the circumference!",
        rule: "Diameter is 10 cm. What is the Circumference in terms of π?",
        quizQ: "Diameter is 10 cm. What is the Circumference in terms of π?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Circumference", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Diameter is 10 cm. What is the Circumference in terms of π?", color: TEXT_MAIN, size: 24 },
          
          // Circle
          { type: "circle", cx: 400, cy: 320, r: 100, fill: "none", stroke: BLUE, width: 5 },
          { type: "path", d: "M 300 320 L 500 320", stroke: PURPLE, width: 3, fill: "none" },
          { type: "circle", cx: 400, cy: 320, r: 5, fill: TEXT_MAIN },
          { type: "text", x: 400, y: 310, text: "10 cm", color: PURPLE, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "Use the formula C = π × d. Since d is 10, the answer is 10π.",
        rule: "10 × π = 10π cm.",
        quizQ: "",
        quizA: "10 × π = 10π cm.",
        elements: [
          { type: "text", x: 400, y: 460, text: "C = π × d", color: TEXT_SUB, size: 24 },
          { type: "text", x: 400, y: 500, text: "C = π × 10 = 10π cm", color: BLUE, size: 28 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_7.2: Areas of compound shapes
// ------------------------------------------------------------------
data["m7_7.2"] = {
  title: "7.2 Areas of compound shapes",
  watermark: "Section 7.2: Compound Shapes",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do we find the area of a weird, chunky shape?",
        rule: "How do you find the area of a weird, chunky shape?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Compound Shapes", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you find the area of a weird, chunky shape?", color: TEXT_MAIN, size: 24 },
          
          // L-Shape
          { type: "path", d: "M 300 220 L 450 220 L 450 300 L 380 300 L 380 400 L 300 400 Z", fill: "#fef08a", stroke: ORANGE, width: 3 }
        ]
      },
      {
        clear: false,
        narration: "Chop it up! Split it into easy rectangles and add them together.",
        rule: "Chop it up! Split it into easy rectangles and triangles. Find their areas and add them together (or subtract if there's a hole!).",
        quizQ: "",
        quizA: "",
        elements: [
          // Split line
          { type: "path", d: "M 300 300 L 380 300", stroke: RED, width: 4, fill: "none", dash: "6,6" },
          { type: "text", x: 340, y: 350, text: "A", color: RED, size: 24 },
          { type: "text", x: 380, y: 265, text: "B", color: RED, size: 24 },
          
          { type: "text", x: 400, y: 460, text: "Chop it up! Split it into easy rectangles.", color: GREEN, size: 24 },
          { type: "text", x: 400, y: 500, text: "Total Area = Area A + Area B", color: GREEN, size: 24, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "What is the area of a triangle?",
        rule: "What is the area of a triangle?",
        quizQ: "What is the area of a triangle?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Recall: Triangle Area", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is the area of a triangle?", color: TEXT_MAIN, size: 24 },
          
          // Triangle
          { type: "path", d: "M 300 380 L 500 380 L 400 220 Z", fill: "#e0f2fe", stroke: BLUE, width: 3 },
          
          // Base and Height
          { type: "path", d: "M 300 400 L 500 400", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 400, y: 420, text: "base (b)", color: TEXT_MAIN, size: 18 },
          
          { type: "path", d: "M 400 380 L 400 220", stroke: RED, width: 2, fill: "none", dash: "4,4" },
          { type: "rect", x: 400, y: 370, width: 10, height: 10, fill: "none", stroke: RED, width_stroke: 2 },
          { type: "text", x: 430, y: 300, text: "height (h)", color: RED, size: 18 }
        ]
      },
      {
        clear: false,
        narration: "It's half times base times height. Remember, the height must be straight up!",
        rule: "Half × base × height. (Just remember the height must be straight up, not slanted!).",
        quizQ: "",
        quizA: "Half × base × height. (Just remember the height must be straight up, not slanted!).",
        elements: [
          { type: "text", x: 400, y: 480, text: "Area = ½ × base × height", color: BLUE, size: 28, bold: true },
          { type: "text", x: 400, y: 520, text: "(The height must be straight up, not slanted!)", color: TEXT_SUB, size: 18 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Sometimes we have to subtract a hole!",
        rule: "A rectangle is 8 by 6, but has a 2 by 2 square cut out of it. What is the area?",
        quizQ: "A rectangle is 8 by 6, but has a 2 by 2 square cut out of it. What is the area?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Area with a Hole", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "A rectangle is 8 by 6, but has a 2 by 2 square cut out of it.", color: TEXT_MAIN, size: 22 },
          { type: "text", x: 400, y: 180, text: "What is the area?", color: TEXT_MAIN, size: 22 },
          
          // Big Rectangle
          { type: "rect", x: 250, y: 220, width: 300, height: 200, fill: "#d1fae5", stroke: GREEN, strokeWidth: 3 },
          { type: "text", x: 400, y: 210, text: "8", color: TEXT_MAIN, size: 20 },
          { type: "text", x: 230, y: 320, text: "6", color: TEXT_MAIN, size: 20 },
          
          // Hole
          { type: "rect", x: 380, y: 280, width: 60, height: 60, fill: BOX_BG, stroke: RED, strokeWidth: 2, dash: "4,4" },
          { type: "text", x: 410, y: 315, text: "2x2", color: RED, size: 16 }
        ]
      },
      {
        clear: false,
        narration: "Find the area of the big rectangle, then subtract the area of the hole.",
        rule: "The whole rectangle is 48. The hole is 4. So 48 − 4 = 44.",
        quizQ: "",
        quizA: "The whole rectangle is 48. The hole is 4. So 48 − 4 = 44.",
        elements: [
          { type: "text", x: 400, y: 460, text: "Big Rectangle: 8 × 6 = 48", color: GREEN, size: 20 },
          { type: "text", x: 400, y: 490, text: "Hole: 2 × 2 = 4", color: RED, size: 20 },
          { type: "text", x: 400, y: 530, text: "Area = 48 - 4 = 44", color: BLUE, size: 28, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_7.3: Large and small units
// ------------------------------------------------------------------
data["m7_7.3"] = {
  title: "7.3 Large and small units",
  watermark: "Section 7.3: Units",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" },
    { id: "card_3", label: "Recall" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do metric units grow?",
        rule: "How do metric units grow?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Metric Units", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do metric units grow?", color: TEXT_MAIN, size: 24 },
          
          // Length line
          { type: "text", x: 400, y: 220, text: "Length (1D)", color: BLUE, size: 22 },
          { type: "path", d: "M 250 260 L 550 260", stroke: BLUE, width: 4, fill: "none" },
          { type: "text", x: 400, y: 290, text: "1 m = 100 cm", color: TEXT_MAIN, size: 18 },
          
          // Area square
          { type: "text", x: 400, y: 350, text: "Area (2D)", color: GREEN, size: 22 },
          { type: "rect", x: 350, y: 370, width: 100, height: 100, fill: "#d1fae5", stroke: GREEN, strokeWidth: 3 },
          { type: "text", x: 310, y: 425, text: "1 m", color: TEXT_MAIN, size: 16 },
          { type: "text", x: 400, y: 360, text: "1 m", color: TEXT_MAIN, size: 16 }
        ]
      },
      {
        clear: false,
        narration: "Length jumps by 10s, 100s, or 1000s. But AREA uses squares!",
        rule: "Length jumps by 10s, 100s, or 1000s. But AREA uses squares! So 1 m² is actually 100 × 100 cm².",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 490, text: "1 m² = 100 cm × 100 cm = 10,000 cm²", color: GREEN, size: 24, bold: true },
          { type: "text", x: 400, y: 530, text: "Area uses squares!", color: ORANGE, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's think about square meters and square centimeters.",
        rule: "How many little cm² fit inside 1 big m²?",
        quizQ: "How many little cm² fit inside 1 big m²?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Recall: Area Units", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "How many little cm² fit inside 1 big m²?", color: TEXT_MAIN, size: 24 },
          
          // Big square
          { type: "rect", x: 300, y: 200, width: 200, height: 200, fill: "none", stroke: BLUE, strokeWidth: 4 },
          { type: "text", x: 400, y: 190, text: "1 m (100 cm)", color: BLUE, size: 18 },
          { type: "text", x: 230, y: 300, text: "1 m (100 cm)", color: BLUE, size: 18 },
          
          // Tiny square inside
          { type: "rect", x: 305, y: 390, width: 10, height: 10, fill: RED },
          { type: "path", d: "M 315 395 L 360 395", stroke: RED, width: 2, fill: "none" },
          { type: "text", x: 390, y: 395, text: "1 cm²", color: RED, size: 16 }
        ]
      },
      {
        clear: false,
        narration: "Since each side is 100 cm, we multiply 100 by 100.",
        rule: "10,000! (Because 100 cm × 100 cm = 10,000).",
        quizQ: "",
        quizA: "10,000! (Because 100 cm × 100 cm = 10,000).",
        elements: [
          { type: "text", x: 400, y: 460, text: "100 cm × 100 cm = 10,000 cm²", color: GREEN, size: 28, bold: true },
          { type: "text", x: 400, y: 500, text: "10,000 little squares fit inside!", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "How do we convert kilometers to meters?",
        rule: "How many meters is 2.5 km?",
        quizQ: "How many meters is 2.5 km?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Converting Length", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "How many meters is 2.5 km?", color: TEXT_MAIN, size: 24 },
          
          { type: "rect", x: 250, y: 250, width: 120, height: 60, fill: "#e0f2fe", stroke: BLUE, strokeWidth: 3, rx: 10 },
          { type: "text", x: 310, y: 285, text: "2.5 km", color: BLUE, size: 24 },
          
          { type: "path", d: "M 390 280 L 460 280", stroke: ORANGE, width: 4, fill: "none" },
          { type: "path", d: "M 450 270 L 460 280 L 450 290", stroke: ORANGE, width: 4, fill: "none" },
          
          { type: "rect", x: 480, y: 250, width: 120, height: 60, fill: "#fef2f2", stroke: RED, strokeWidth: 3, rx: 10 },
          { type: "text", x: 540, y: 285, text: "? m", color: RED, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "The prefix 'kilo' means thousand, so we multiply by 1000.",
        rule: "2,500 m. ('kilo' means thousand, so multiply by 1000).",
        quizQ: "",
        quizA: "2,500 m. ('kilo' means thousand, so multiply by 1000).",
        elements: [
          { type: "text", x: 425, y: 260, text: "× 1000", color: ORANGE, size: 18 },
          { type: "text", x: 400, y: 420, text: "2.5 × 1000 = 2,500", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 400, y: 470, text: "2,500 m", color: GREEN, size: 32, bold: true }
        ]
      }
    ],
    "card_3": [
      {
        narration: "Let's review the secret prefixes!",
        rule: "What do the secret prefixes mean?",
        quizQ: "What do the secret prefixes mean?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Recall: Prefixes", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What do the secret prefixes mean?", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "Kilo means a thousand. Centi means a hundredth. Milli means a thousandth. And a tonne is 1000 kilograms!",
        rule: "'kilo' means ×1000. 'centi' means ÷100. 'milli' means ÷1000. And a 'tonne' is a super heavy 1000 kg!",
        quizQ: "",
        quizA: "'kilo' means ×1000. 'centi' means ÷100. 'milli' means ÷1000. And a 'tonne' is a super heavy 1000 kg!",
        elements: [
          { type: "rect", x: 200, y: 220, width: 400, height: 40, fill: "#e0f2fe", rx: 5 },
          { type: "text", x: 400, y: 245, text: "kilo = × 1000", color: BLUE, size: 20 },
          
          { type: "rect", x: 200, y: 280, width: 400, height: 40, fill: "#fef08a", rx: 5 },
          { type: "text", x: 400, y: 305, text: "centi = ÷ 100", color: ORANGE, size: 20 },
          
          { type: "rect", x: 200, y: 340, width: 400, height: 40, fill: "#fce7f3", rx: 5 },
          { type: "text", x: 400, y: 365, text: "milli = ÷ 1000", color: PINK, size: 20 },
          
          { type: "rect", x: 200, y: 400, width: 400, height: 40, fill: "#d1fae5", rx: 5 },
          { type: "text", x: 400, y: 425, text: "tonne = 1000 kg", color: GREEN, size: 20 }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 7 Chapter 7!");
