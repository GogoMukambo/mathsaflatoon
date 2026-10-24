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
// m8_7.1: Circumference and area of a circle
// ------------------------------------------------------------------
data["m8_7.1"] = {
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
        narration: "What are the magic circle formulas?",
        rule: "What are the magic circle formulas?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Circle Formulas", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What are the magic circle formulas?", color: TEXT_MAIN, size: 24 },
          
          { type: "circle", cx: 250, cy: 350, r: 80, stroke: BLUE, width: 4, fill: "none" },
          { type: "path", d: "M 170 350 L 330 350", stroke: RED, width: 2, fill: "none" },
          { type: "text", x: 250, y: 340, text: "d", color: RED, size: 20 },
          
          { type: "circle", cx: 550, cy: 350, r: 80, stroke: TEXT_MAIN, width: 2, fill: ORANGE, opacity: 0.3 },
          { type: "path", d: "M 550 350 L 630 350", stroke: GREEN, width: 3, fill: "none" },
          { type: "text", x: 590, y: 340, text: "r", color: GREEN, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "Distance around the outside is Circumference: pi times d. Space inside is Area: pi times r squared.",
        rule: "Distance around the outside (Circumference) = π × d. Space inside (Area) = π × r².",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 250, y: 220, text: "Circumference", color: BLUE, size: 24, bold: true },
          { type: "text", x: 250, y: 250, text: "C = π × d", color: BLUE, size: 28 },
          
          { type: "text", x: 550, y: 220, text: "Area", color: ORANGE, size: 24, bold: true },
          { type: "text", x: 550, y: 250, text: "A = π × r²", color: ORANGE, size: 28 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Radius is 7 cm. What is the Area in terms of pi?",
        rule: "Radius is 7 cm. What is the Area in terms of π?",
        quizQ: "Radius is 7 cm. What is the Area in terms of π?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Area", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Radius is 7 cm. What is the Area in terms of π?", color: TEXT_MAIN, size: 24 },
          
          { type: "circle", cx: 400, cy: 300, r: 60, stroke: TEXT_MAIN, width: 2, fill: ORANGE, opacity: 0.3 },
          { type: "path", d: "M 400 300 L 460 300", stroke: GREEN, width: 3, fill: "none" },
          { type: "text", x: 430, y: 290, text: "7", color: GREEN, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "Area is pi times r squared. 7 squared is 49. So the area is 49 pi.",
        rule: "7 squared is 49. So the area is 49π cm².",
        quizQ: "",
        quizA: "7 squared is 49. So the area is 49π cm².",
        elements: [
          { type: "text", x: 400, y: 420, text: "A = π × 7²", color: TEXT_MAIN, size: 28 },
          { type: "text", x: 400, y: 470, text: "7² = 49", color: ORANGE, size: 24 },
          
          { type: "text", x: 400, y: 530, text: "Area = 49π cm²", color: GREEN, size: 36, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Diameter is 10 cm. What is the Circumference in terms of pi?",
        rule: "Diameter is 10 cm. What is the Circumference in terms of π?",
        quizQ: "Diameter is 10 cm. What is the Circumference in terms of π?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Circumference", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Diameter is 10 cm. What is the Circumference in terms of π?", color: TEXT_MAIN, size: 24 },
          
          { type: "circle", cx: 400, cy: 300, r: 60, stroke: BLUE, width: 4, fill: "none" },
          { type: "path", d: "M 340 300 L 460 300", stroke: RED, width: 2, fill: "none" },
          { type: "text", x: 400, y: 290, text: "10", color: RED, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "Circumference is pi times diameter. So 10 times pi is 10 pi cm.",
        rule: "10 × π = 10π cm.",
        quizQ: "",
        quizA: "10 × π = 10π cm.",
        elements: [
          { type: "text", x: 400, y: 420, text: "C = π × d", color: TEXT_MAIN, size: 28 },
          { type: "text", x: 400, y: 470, text: "C = π × 10", color: ORANGE, size: 28 },
          
          { type: "text", x: 400, y: 530, text: "C = 10π cm", color: GREEN, size: 36, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_7.2: Areas of compound shapes
// ------------------------------------------------------------------
data["m8_7.2"] = {
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
        narration: "How do you find the area of a weird, chunky shape?",
        rule: "How do you find the area of a weird, chunky shape?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Compound Shapes", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you find the area of a weird, chunky shape?", color: TEXT_MAIN, size: 24 },
          
          // L-shape
          { type: "path", d: "M 300 220 L 450 220 L 450 300 L 380 300 L 380 400 L 300 400 Z", stroke: BLUE, width: 4, fill: "#e0e7ff" }
        ]
      },
      {
        clear: false,
        narration: "Chop it up! Split it into easy rectangles and triangles. Find their areas and add them together.",
        rule: "Chop it up! Split it into easy rectangles and triangles. Find their areas and add them together (or subtract if there's a hole!).",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 300 300 L 380 300", stroke: RED, width: 3, fill: "none", strokeDasharray: "5,5" },
          
          { type: "text", x: 340, y: 260, text: "A", color: RED, size: 24 },
          { type: "text", x: 415, y: 260, text: "B", color: RED, size: 24 },
          
          { type: "text", x: 400, y: 460, text: "Chop it up!", color: GREEN, size: 32, bold: true },
          { type: "text", x: 400, y: 510, text: "Find the areas and ADD them together.", color: TEXT_SUB, size: 20 }
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
          { type: "text", x: 400, y: 100, text: "❓ Practice: Triangle Area", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is the area of a triangle?", color: TEXT_MAIN, size: 24 },
          
          { type: "path", d: "M 300 350 L 500 350 L 450 200 Z", stroke: BLUE, width: 4, fill: "#e0e7ff" },
          { type: "path", d: "M 450 350 L 450 200", stroke: RED, width: 2, fill: "none", strokeDasharray: "5,5" },
          { type: "rect", x: 430, y: 330, width: 20, height: 20, fill: "none", stroke: RED, strokeWidth: 2 },
          
          { type: "text", x: 400, y: 380, text: "base", color: BLUE, size: 20 },
          { type: "text", x: 470, y: 280, text: "height", color: RED, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "Half times base times height. Remember, the height must be straight up, not slanted!",
        rule: "Half × base × height. (Just remember the height must be straight up, not slanted!).",
        quizQ: "",
        quizA: "Half × base × height. (Just remember the height must be straight up, not slanted!).",
        elements: [
          { type: "text", x: 400, y: 450, text: "Area = ½ × base × height", color: GREEN, size: 32, bold: true },
          { type: "text", x: 400, y: 500, text: "(The height MUST be straight up, not slanted!)", color: ORANGE, size: 20 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "A rectangle is 8 by 6, but has a 2 by 2 square cut out of it. What is the area?",
        rule: "A rectangle is 8 by 6, but has a 2 by 2 square cut out of it. What is the area?",
        quizQ: "A rectangle is 8 by 6, but has a 2 by 2 square cut out of it. What is the area?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Shapes with Holes", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "A rectangle is 8 by 6, but has a 2 by 2 square cut out. Area?", color: TEXT_MAIN, size: 24 },
          
          // Rectangle with hole
          { type: "rect", x: 250, y: 220, width: 300, height: 200, fill: "#e0e7ff", stroke: BLUE, strokeWidth: 4 },
          { type: "rect", x: 350, y: 280, width: 60, height: 60, fill: BG_COLOR, stroke: RED, strokeWidth: 2 },
          
          { type: "text", x: 400, y: 200, text: "8", color: BLUE, size: 24 },
          { type: "text", x: 570, y: 320, text: "6", color: BLUE, size: 24 },
          
          { type: "text", x: 380, y: 270, text: "2", color: RED, size: 16 },
          { type: "text", x: 330, y: 310, text: "2", color: RED, size: 16 }
        ]
      },
      {
        clear: false,
        narration: "The whole rectangle is 48. The hole is 4. So 48 minus 4 is 44.",
        rule: "The whole rectangle is 48. The hole is 4. So 48 − 4 = 44.",
        quizQ: "",
        quizA: "The whole rectangle is 48. The hole is 4. So 48 − 4 = 44.",
        elements: [
          { type: "text", x: 400, y: 460, text: "Whole = 8 × 6 = 48", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 400, y: 490, text: "Hole = 2 × 2 = 4", color: RED, size: 24 },
          
          { type: "text", x: 400, y: 540, text: "48 - 4 = 44", color: GREEN, size: 36, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_7.3: Large and small units
// ------------------------------------------------------------------
data["m8_7.3"] = {
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
          
          { type: "path", d: "M 200 250 L 300 250", stroke: BLUE, width: 4, fill: "none" },
          { type: "text", x: 250, y: 230, text: "1 m", color: BLUE, size: 20 },
          
          { type: "rect", x: 450, y: 200, width: 100, height: 100, fill: "#e0e7ff", stroke: BLUE, strokeWidth: 2 },
          { type: "text", x: 500, y: 255, text: "1 m²", color: BLUE, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "Length jumps by 10s, 100s, or 1000s. But AREA uses squares! So 1 square meter is actually 100 times 100 square centimeters.",
        rule: "Length jumps by 10s, 100s, or 1000s. But AREA uses squares! So 1 m² is actually 100 × 100 cm².",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 250, y: 280, text: "= 100 cm", color: ORANGE, size: 20 },
          
          { type: "text", x: 500, y: 330, text: "100 cm × 100 cm", color: ORANGE, size: 20 },
          { type: "text", x: 500, y: 360, text: "= 10,000 cm²", color: RED, size: 24, bold: true },
          
          { type: "text", x: 400, y: 450, text: "Length jumps by 10s, 100s, or 1000s.", color: GREEN, size: 24, bold: true },
          { type: "text", x: 400, y: 490, text: "But AREA uses SQUARES!", color: RED, size: 24, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "How many little square centimeters fit inside 1 big square meter?",
        rule: "How many little cm² fit inside 1 big m²?",
        quizQ: "How many little cm² fit inside 1 big m²?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Area Units", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "How many little cm² fit inside 1 big m²?", color: TEXT_MAIN, size: 24 },
          
          { type: "rect", x: 300, y: 220, width: 200, height: 200, fill: "#e0e7ff", stroke: BLUE, strokeWidth: 4 },
          { type: "text", x: 400, y: 200, text: "1 m (100 cm)", color: BLUE, size: 20 },
          { type: "text", x: 230, y: 320, text: "1 m (100 cm)", color: BLUE, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "10,000! Because 100 cm times 100 cm is 10,000.",
        rule: "10,000! (Because 100 cm × 100 cm = 10,000).",
        quizQ: "",
        quizA: "10,000! (Because 100 cm × 100 cm = 10,000).",
        elements: [
          // Grid pattern inside
          { type: "path", d: "M 300 260 L 500 260 M 300 300 L 500 300 M 300 340 L 500 340 M 300 380 L 500 380", stroke: "#94a3b8", width: 1, fill: "none" },
          { type: "path", d: "M 340 220 L 340 420 M 380 220 L 380 420 M 420 220 L 420 420 M 460 220 L 460 420", stroke: "#94a3b8", width: 1, fill: "none" },
          
          { type: "text", x: 400, y: 480, text: "100 × 100 = 10,000", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 530, text: "10,000 cm²", color: GREEN, size: 36, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "How many meters is 2.5 km?",
        rule: "How many meters is 2.5 km?",
        quizQ: "How many meters is 2.5 km?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Converting Length", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "How many meters is 2.5 km?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "2.5 km", color: BLUE, size: 48 }
        ]
      },
      {
        clear: false,
        narration: "Kilo means thousand, so multiply by 1000. 2,500 meters.",
        rule: "2,500 m. ('kilo' means thousand, so multiply by 1000).",
        quizQ: "",
        quizA: "2,500 m. ('kilo' means thousand, so multiply by 1000).",
        elements: [
          { type: "text", x: 400, y: 350, text: "'kilo' = 1000", color: ORANGE, size: 24 },
          { type: "text", x: 400, y: 400, text: "2.5 × 1000", color: TEXT_MAIN, size: 32 },
          
          { type: "text", x: 400, y: 480, text: "= 2,500 m", color: GREEN, size: 48, bold: true }
        ]
      }
    ],
    "card_3": [
      {
        narration: "What do the secret prefixes mean?",
        rule: "What do the secret prefixes mean?",
        quizQ: "What do the secret prefixes mean?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Prefixes", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What do the secret prefixes mean?", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "Kilo is times 1000. Centi is divide by 100. Milli is divide by 1000. And a tonne is a super heavy 1000 kilograms!",
        rule: "'kilo' means ×1000. 'centi' means ÷100. 'milli' means ÷1000. And a 'tonne' is a super heavy 1000 kg!",
        quizQ: "",
        quizA: "'kilo' means ×1000. 'centi' means ÷100. 'milli' means ÷1000. And a 'tonne' is a super heavy 1000 kg!",
        elements: [
          { type: "text", x: 300, y: 250, text: "kilo", color: BLUE, size: 28, bold: true },
          { type: "text", x: 450, y: 250, text: "× 1000", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 320, text: "centi", color: ORANGE, size: 28, bold: true },
          { type: "text", x: 450, y: 320, text: "÷ 100", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 390, text: "milli", color: PURPLE, size: 28, bold: true },
          { type: "text", x: 450, y: 390, text: "÷ 1000", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 480, text: "1 tonne = 1000 kg", color: RED, size: 32, bold: true }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 8 Chapter 7!");
