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
// m7_8.1: Fractions and recurring decimals
// ------------------------------------------------------------------
data["m7_8.1"] = {
  title: "8.1 Fractions and recurring decimals",
  watermark: "Section 8.1: Decimals",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "When does a fraction turn into a never-ending decimal?",
        rule: "When does a fraction turn into a never-ending decimal?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Recurring Decimals", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "When does a fraction turn into a never-ending decimal?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 250, y: 280, text: "1", color: BLUE, size: 40 },
          { type: "path", d: "M 220 310 L 280 310", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 250, y: 360, text: "3", color: BLUE, size: 40 },
          
          { type: "path", d: "M 320 310 L 400 310", stroke: ORANGE, width: 4, fill: "none" },
          { type: "path", d: "M 380 290 L 400 310 L 380 330", stroke: ORANGE, width: 4, fill: "none" },
          
          { type: "text", x: 520, y: 320, text: "0.3333...", color: RED, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "If the bottom number is made of prime numbers other than 2 or 5, it will repeat forever!",
        rule: "If the bottom number is made of prime numbers other than 2 or 5 (like 3, 7, or 11), the decimal will repeat forever! (Like 1/3 = 0.333...).",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 460, text: "If the bottom has primes other than 2 or 5", color: GREEN, size: 24 },
          { type: "text", x: 400, y: 500, text: "it repeats forever!", color: GREEN, size: 24, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's turn 3/8 into a decimal.",
        rule: "Write 3/8 as a decimal.",
        quizQ: "Write 3/8 as a decimal.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Fraction to Decimal", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Write 3/8 as a decimal.", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "3", color: BLUE, size: 40 },
          { type: "path", d: "M 370 280 L 430 280", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 400, y: 330, text: "8", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Since 8 is just 2x2x2, it stops! It's 0.375.",
        rule: "0.375 (It stops, because 8 is just 2×2×2).",
        quizQ: "",
        quizA: "0.375 (It stops, because 8 is just 2×2×2).",
        elements: [
          { type: "text", x: 400, y: 400, text: "8 is just 2 × 2 × 2, so it STOPS.", color: ORANGE, size: 20 },
          { type: "text", x: 400, y: 480, text: "0.375", color: GREEN, size: 40, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "How do we write a repeating decimal as a fraction?",
        rule: "Write 0.2̇ (0.222…) as a fraction.",
        quizQ: "Write 0.2̇ (0.222…) as a fraction.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Decimal to Fraction", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Write 0.222... as a fraction.", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 300, text: "0.222...", color: RED, size: 48 }
        ]
      },
      {
        clear: false,
        narration: "Use the 9 trick! A single repeating digit goes over 9.",
        rule: "2/9 (The 9 trick works for single repeating digits!).",
        quizQ: "",
        quizA: "2/9 (The 9 trick works for single repeating digits!).",
        elements: [
          { type: "text", x: 400, y: 420, text: "Use the '9' trick for a single repeating digit!", color: TEXT_SUB, size: 20 },
          { type: "text", x: 400, y: 480, text: "2", color: BLUE, size: 30, bold: true },
          { type: "path", d: "M 380 500 L 420 500", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 400, y: 530, text: "9", color: BLUE, size: 30, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_8.2: Fractions and the correct order of operations
// ------------------------------------------------------------------
data["m7_8.2"] = {
  title: "8.2 Fractions and the correct order of operations",
  watermark: "Section 8.2: Order of Ops",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do fractions work with BIDMAS?",
        rule: "How do fractions work with BIDMAS/BODMAS?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Fractions & BIDMAS", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do fractions work with BIDMAS/BODMAS?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 260, text: "10 + 2", color: BLUE, size: 30 },
          { type: "path", d: "M 320 290 L 480 290", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 400, y: 330, text: "5 - 1", color: BLUE, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "A fraction bar acts like invisible brackets! Do the whole top, then the whole bottom.",
        rule: "A fraction bar acts like an invisible bracket! Figure out the whole top part, then the whole bottom part, and divide at the very end.",
        quizQ: "",
        quizA: "",
        elements: [
          // Draw brackets
          { type: "text", x: 320, y: 260, text: "(", color: RED, size: 40 },
          { type: "text", x: 480, y: 260, text: ")", color: RED, size: 40 },
          { type: "text", x: 330, y: 330, text: "(", color: RED, size: 40 },
          { type: "text", x: 470, y: 330, text: ")", color: RED, size: 40 },
          
          { type: "text", x: 400, y: 460, text: "The bar acts like invisible brackets!", color: GREEN, size: 24 },
          { type: "text", x: 400, y: 500, text: "Do the top, do the bottom, THEN divide.", color: GREEN, size: 24, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's try this calculation.",
        rule: "Work out: 1/2 + 1/3 × 6.",
        quizQ: "Work out: 1/2 + 1/3 × 6.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Order of Operations", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Work out: 1/2 + 1/3 × 6", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 250, y: 250, text: "1", color: BLUE, size: 30 },
          { type: "path", d: "M 230 270 L 270 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 250, y: 300, text: "2", color: BLUE, size: 30 },
          
          { type: "text", x: 320, y: 280, text: "+", color: TEXT_MAIN, size: 30 },
          
          { type: "text", x: 390, y: 250, text: "1", color: BLUE, size: 30 },
          { type: "path", d: "M 370 270 L 410 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 390, y: 300, text: "3", color: BLUE, size: 30 },
          
          { type: "text", x: 460, y: 280, text: "× 6", color: TEXT_MAIN, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "Always multiply before adding! 1/3 of 6 is 2. Then add 1/2.",
        rule: "1/2 + 2 = 2½. (Always do the multiplying before the adding!).",
        quizQ: "",
        quizA: "1/2 + 2 = 2½. (Always do the multiplying before the adding!).",
        elements: [
          { type: "rect", x: 350, y: 220, width: 160, height: 100, fill: "none", stroke: RED, strokeWidth: 2, rx: 10, dash: "4,4" },
          { type: "text", x: 430, y: 350, text: "This is 2", color: RED, size: 20 },
          
          { type: "text", x: 400, y: 460, text: "1/2 + 2 = 2 ½", color: GREEN, size: 32, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Why are these two expressions different?",
        rule: "Why is (1 + 3)/8 different from 1 + 3/8?",
        quizQ: "Why is (1 + 3)/8 different from 1 + 3/8?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Spot the Difference", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Why is (1 + 3)/8 different from 1 + 3/8?", color: TEXT_MAIN, size: 24 },
          
          // Left side
          { type: "text", x: 250, y: 250, text: "1 + 3", color: BLUE, size: 24 },
          { type: "path", d: "M 200 270 L 300 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 250, y: 300, text: "8", color: BLUE, size: 24 },
          
          // Right side
          { type: "text", x: 500, y: 280, text: "1 +", color: BLUE, size: 24 },
          { type: "text", x: 560, y: 250, text: "3", color: BLUE, size: 24 },
          { type: "path", d: "M 540 270 L 580 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 560, y: 300, text: "8", color: BLUE, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "The first one adds first, making 4/8 or a half. The second one is 1 whole plus 3/8.",
        rule: "The first one is 4/8 = 1/2. The second one is 1 + 0.375 = 1.375.",
        quizQ: "",
        quizA: "The first one is 4/8 = 1/2. The second one is 1 + 0.375 = 1.375.",
        elements: [
          { type: "text", x: 250, y: 400, text: "= 4/8 = 1/2", color: GREEN, size: 24, bold: true },
          { type: "text", x: 530, y: 400, text: "= 1 3/8", color: GREEN, size: 24, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_8.3: Multiplying fractions
// ------------------------------------------------------------------
data["m7_8.3"] = {
  title: "8.3 Multiplying fractions",
  watermark: "Section 8.3: Multiplying",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do you multiply fractions?",
        rule: "How do you multiply fractions?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Multiplying Fractions", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you multiply fractions?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 250, y: 250, text: "a", color: BLUE, size: 30 },
          { type: "path", d: "M 230 270 L 270 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 250, y: 300, text: "b", color: BLUE, size: 30 },
          
          { type: "text", x: 320, y: 280, text: "×", color: TEXT_MAIN, size: 30 },
          
          { type: "text", x: 390, y: 250, text: "c", color: BLUE, size: 30 },
          { type: "path", d: "M 370 270 L 410 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 390, y: 300, text: "d", color: BLUE, size: 30 },
          
          { type: "text", x: 460, y: 280, text: "=", color: TEXT_MAIN, size: 30 },
          
          { type: "text", x: 530, y: 250, text: "?", color: RED, size: 30 },
          { type: "path", d: "M 510 270 L 550 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 530, y: 300, text: "?", color: RED, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "It's easy! Multiply the tops together, and multiply the bottoms together.",
        rule: "It's easy! Just multiply the top numbers together, and multiply the bottom numbers together. (But remember to turn mixed numbers into top-heavy fractions first!).",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "rect", x: 500, y: 210, width: 80, height: 120, fill: BOX_BG }, // cover the ? marks
          { type: "text", x: 540, y: 250, text: "a × c", color: GREEN, size: 24, bold: true },
          { type: "path", d: "M 500 270 L 580 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 540, y: 300, text: "b × d", color: GREEN, size: 24, bold: true },
          
          { type: "text", x: 400, y: 460, text: "Multiply the tops, multiply the bottoms!", color: GREEN, size: 24 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's multiply 2/3 by 5/7.",
        rule: "2/3 × 5/7.",
        quizQ: "2/3 × 5/7.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Multiplying", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Calculate:", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 250, text: "2", color: BLUE, size: 30 },
          { type: "path", d: "M 280 270 L 320 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 300, y: 300, text: "3", color: BLUE, size: 30 },
          
          { type: "text", x: 370, y: 280, text: "×", color: TEXT_MAIN, size: 30 },
          
          { type: "text", x: 440, y: 250, text: "5", color: BLUE, size: 30 },
          { type: "path", d: "M 420 270 L 460 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 440, y: 300, text: "7", color: BLUE, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "2 times 5 is 10. 3 times 7 is 21. The answer is 10/21.",
        rule: "10/21. (2×5=10, 3×7=21).",
        quizQ: "",
        quizA: "10/21. (2×5=10, 3×7=21).",
        elements: [
          { type: "text", x: 510, y: 280, text: "=", color: TEXT_MAIN, size: 30 },
          
          { type: "text", x: 580, y: 250, text: "10", color: GREEN, size: 30, bold: true },
          { type: "path", d: "M 550 270 L 610 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 580, y: 300, text: "21", color: GREEN, size: 30, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "What if we have a mixed number?",
        rule: "1 1/2 × 2/5.",
        quizQ: "1 1/2 × 2/5.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Mixed Numbers", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Calculate:", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 260, y: 280, text: "1", color: BLUE, size: 30 },
          { type: "text", x: 300, y: 250, text: "1", color: BLUE, size: 30 },
          { type: "path", d: "M 280 270 L 320 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 300, y: 300, text: "2", color: BLUE, size: 30 },
          
          { type: "text", x: 370, y: 280, text: "×", color: TEXT_MAIN, size: 30 },
          
          { type: "text", x: 440, y: 250, text: "2", color: BLUE, size: 30 },
          { type: "path", d: "M 420 270 L 460 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 440, y: 300, text: "5", color: BLUE, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "Turn it top-heavy first! 1 1/2 becomes 3/2. Then multiply to get 6/10, which simplifies to 3/5.",
        rule: "Turn it top-heavy first: 3/2 × 2/5 = 6/10, which simplifies to 3/5.",
        quizQ: "",
        quizA: "Turn it top-heavy first: 3/2 × 2/5 = 6/10, which simplifies to 3/5.",
        elements: [
          { type: "path", d: "M 290 330 L 290 360 L 350 360 L 350 390", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 350, y: 420, text: "3", color: ORANGE, size: 30 },
          { type: "path", d: "M 330 440 L 370 440", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 350, y: 470, text: "2", color: ORANGE, size: 30 },
          
          { type: "text", x: 410, y: 450, text: "×", color: TEXT_MAIN, size: 30 },
          
          { type: "text", x: 470, y: 420, text: "2", color: TEXT_MAIN, size: 30 },
          { type: "path", d: "M 450 440 L 490 440", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 470, y: 470, text: "5", color: TEXT_MAIN, size: 30 },
          
          { type: "text", x: 530, y: 450, text: "=", color: TEXT_MAIN, size: 30 },
          
          { type: "text", x: 590, y: 420, text: "6", color: GREEN, size: 30 },
          { type: "path", d: "M 570 440 L 610 440", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 590, y: 470, text: "10", color: GREEN, size: 30 },
          
          { type: "text", x: 670, y: 450, text: "→ 3/5", color: GREEN, size: 24, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_8.4: Dividing fractions
// ------------------------------------------------------------------
data["m7_8.4"] = {
  title: "8.4 Dividing fractions",
  watermark: "Section 8.4: Dividing",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do you divide by a fraction?",
        rule: "How do you divide by a fraction?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Dividing Fractions", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you divide by a fraction?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 250, y: 250, text: "a", color: BLUE, size: 30 },
          { type: "path", d: "M 230 270 L 270 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 250, y: 300, text: "b", color: BLUE, size: 30 },
          
          { type: "text", x: 320, y: 280, text: "÷", color: RED, size: 30 },
          
          { type: "text", x: 390, y: 250, text: "c", color: BLUE, size: 30 },
          { type: "path", d: "M 370 270 L 410 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 390, y: 300, text: "d", color: BLUE, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "Flip the second fraction upside down, and change divide to multiply!",
        rule: "Multiply by its reciprocal: a/b ÷ c/d = a/b × d/c.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 410 320 Q 450 380 490 320", stroke: ORANGE, width: 3, fill: "none" },
          { type: "path", d: "M 480 330 L 490 320 L 480 310", stroke: ORANGE, width: 3, fill: "none" },
          
          { type: "text", x: 530, y: 250, text: "a", color: GREEN, size: 30 },
          { type: "path", d: "M 510 270 L 550 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 530, y: 300, text: "b", color: GREEN, size: 30 },
          
          { type: "text", x: 600, y: 280, text: "×", color: GREEN, size: 30 },
          
          { type: "text", x: 670, y: 250, text: "d", color: GREEN, size: 30, bold: true },
          { type: "path", d: "M 650 270 L 690 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 670, y: 300, text: "c", color: GREEN, size: 30, bold: true },
          
          { type: "text", x: 400, y: 460, text: "Multiply by its reciprocal (flip it!)", color: GREEN, size: 24 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's divide 3/4 by 1/2.",
        rule: "3/4 ÷ 1/2.",
        quizQ: "3/4 ÷ 1/2.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Dividing", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Calculate:", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 250, text: "3", color: BLUE, size: 30 },
          { type: "path", d: "M 280 270 L 320 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 300, y: 300, text: "4", color: BLUE, size: 30 },
          
          { type: "text", x: 370, y: 280, text: "÷", color: RED, size: 30 },
          
          { type: "text", x: 440, y: 250, text: "1", color: BLUE, size: 30 },
          { type: "path", d: "M 420 270 L 460 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 440, y: 300, text: "2", color: BLUE, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "Flip the 1/2 to 2/1, and multiply! The answer is 6/4, or 3/2.",
        rule: "3/4 × 2/1 = 3/2.",
        quizQ: "",
        quizA: "3/4 × 2/1 = 3/2.",
        elements: [
          { type: "text", x: 300, y: 420, text: "3", color: GREEN, size: 30 },
          { type: "path", d: "M 280 440 L 320 440", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 300, y: 470, text: "4", color: GREEN, size: 30 },
          
          { type: "text", x: 370, y: 450, text: "×", color: GREEN, size: 30 },
          
          { type: "text", x: 440, y: 420, text: "2", color: GREEN, size: 30, bold: true },
          { type: "path", d: "M 420 440 L 460 440", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 440, y: 470, text: "1", color: GREEN, size: 30, bold: true },
          
          { type: "text", x: 510, y: 450, text: "=", color: TEXT_MAIN, size: 30 },
          
          { type: "text", x: 580, y: 420, text: "6", color: GREEN, size: 30 },
          { type: "path", d: "M 560 440 L 600 440", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 580, y: 470, text: "4", color: GREEN, size: 30 },
          
          { type: "text", x: 660, y: 450, text: "→ 3/2", color: GREEN, size: 24, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "What if we divide a whole number by a fraction?",
        rule: "6 ÷ 2/3.",
        quizQ: "6 ÷ 2/3.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Whole Numbers", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Calculate:", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 280, text: "6", color: BLUE, size: 30 },
          
          { type: "text", x: 370, y: 280, text: "÷", color: RED, size: 30 },
          
          { type: "text", x: 440, y: 250, text: "2", color: BLUE, size: 30 },
          { type: "path", d: "M 420 270 L 460 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 440, y: 300, text: "3", color: BLUE, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "Write 6 as 6/1. Flip the 2/3 to 3/2. Multiply to get 18/2, which is 9.",
        rule: "6 × 3/2 = 9.",
        quizQ: "",
        quizA: "6 × 3/2 = 9.",
        elements: [
          { type: "text", x: 300, y: 420, text: "6", color: GREEN, size: 30 },
          { type: "path", d: "M 280 440 L 320 440", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 300, y: 470, text: "1", color: GREEN, size: 30 },
          
          { type: "text", x: 370, y: 450, text: "×", color: GREEN, size: 30 },
          
          { type: "text", x: 440, y: 420, text: "3", color: GREEN, size: 30, bold: true },
          { type: "path", d: "M 420 440 L 460 440", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 440, y: 470, text: "2", color: GREEN, size: 30, bold: true },
          
          { type: "text", x: 510, y: 450, text: "=", color: TEXT_MAIN, size: 30 },
          
          { type: "text", x: 580, y: 420, text: "18", color: GREEN, size: 30 },
          { type: "path", d: "M 560 440 L 600 440", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 580, y: 470, text: "2", color: GREEN, size: 30 },
          
          { type: "text", x: 650, y: 450, text: "= 9", color: GREEN, size: 30, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_8.5: Making calculations easier
// ------------------------------------------------------------------
data["m7_8.5"] = {
  title: "8.5 Making calculations easier",
  watermark: "Section 8.5: Shortcuts",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What mental strategies help with fractions?",
        rule: "What mental strategies help with fractions?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Fraction Shortcuts", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What mental strategies help with fractions?", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "Cancel before multiplying! It keeps the numbers small and easy.",
        rule: "Cancel before multiplying; use equivalent fractions; split mixed numbers; use factors of 100 for percentages.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 250, text: "1. Cancel BEFORE multiplying", color: GREEN, size: 22 },
          { type: "text", x: 400, y: 300, text: "2. Use equivalent fractions", color: GREEN, size: 22 },
          { type: "text", x: 400, y: 350, text: "3. Split mixed numbers", color: GREEN, size: 22 },
          { type: "text", x: 400, y: 400, text: "4. Use factors of 100", color: GREEN, size: 22 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's try cancelling first.",
        rule: "Cancel first: 4/9 × 3/8.",
        quizQ: "Cancel first: 4/9 × 3/8.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Cancelling", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Calculate by cancelling first:", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 250, text: "4", color: BLUE, size: 30 },
          { type: "path", d: "M 280 270 L 320 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 300, y: 300, text: "9", color: BLUE, size: 30 },
          
          { type: "text", x: 370, y: 280, text: "×", color: TEXT_MAIN, size: 30 },
          
          { type: "text", x: 440, y: 250, text: "3", color: BLUE, size: 30 },
          { type: "path", d: "M 420 270 L 460 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 440, y: 300, text: "8", color: BLUE, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "4 and 8 can both divide by 4. 3 and 9 can both divide by 3. The answer is 1/6!",
        rule: "(4×3)/(9×8) → cancel 4 and 8, 3 and 9 → 1/6.",
        quizQ: "",
        quizA: "(4×3)/(9×8) → cancel 4 and 8, 3 and 9 → 1/6.",
        elements: [
          // Cross out 4 and 8
          { type: "path", d: "M 285 260 L 315 240", stroke: RED, width: 2, fill: "none" },
          { type: "text", x: 280, y: 230, text: "1", color: RED, size: 16 },
          { type: "path", d: "M 425 310 L 455 290", stroke: RED, width: 2, fill: "none" },
          { type: "text", x: 460, y: 320, text: "2", color: RED, size: 16 },
          
          // Cross out 3 and 9
          { type: "path", d: "M 425 260 L 455 240", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 460, y: 230, text: "1", color: ORANGE, size: 16 },
          { type: "path", d: "M 285 310 L 315 290", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 280, y: 320, text: "3", color: ORANGE, size: 16 },
          
          { type: "text", x: 510, y: 280, text: "=", color: TEXT_MAIN, size: 30 },
          
          { type: "text", x: 580, y: 250, text: "1", color: GREEN, size: 30, bold: true },
          { type: "path", d: "M 560 270 L 600 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 580, y: 300, text: "6", color: GREEN, size: 30, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Why convert 0.25 to 1/4 when multiplying?",
        rule: "Why convert 0.25 to 1/4 in a product?",
        quizQ: "Why convert 0.25 to 1/4 in a product?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Decimals to Fractions", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Why convert 0.25 to 1/4 in a product?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 250, y: 280, text: "0.25 × 12", color: RED, size: 30 },
          { type: "text", x: 400, y: 280, text: "vs", color: TEXT_SUB, size: 20 },
          { type: "text", x: 550, y: 280, text: "1/4 × 12", color: BLUE, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "Because finding a quarter of 12 is much quicker than multiplying by 0.25!",
        rule: "Multiplying by 1/4 is often quicker and exact.",
        quizQ: "",
        quizA: "Multiplying by 1/4 is often quicker and exact.",
        elements: [
          { type: "text", x: 400, y: 400, text: "Multiplying by 1/4 is just dividing by 4!", color: GREEN, size: 24 },
          { type: "text", x: 400, y: 460, text: "12 ÷ 4 = 3", color: GREEN, size: 32, bold: true }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 7 Chapter 8!");
