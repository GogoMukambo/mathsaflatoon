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
// m8_8.1: Fractions and recurring decimals
// ------------------------------------------------------------------
data["m8_8.1"] = {
  title: "8.1 Fractions and recurring decimals",
  watermark: "Section 8.1: Recurring Decimals",
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
          
          { type: "text", x: 250, y: 250, text: "1", color: BLUE, size: 40 },
          { type: "path", d: "M 220 280 L 280 280", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 250, y: 330, text: "3", color: BLUE, size: 40 },
          
          { type: "text", x: 400, y: 290, text: "=", color: TEXT_MAIN, size: 40 },
          
          { type: "text", x: 550, y: 290, text: "0.333...", color: RED, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "If the bottom number is made of prime numbers other than 2 or 5, the decimal will repeat forever!",
        rule: "If the bottom number is made of prime numbers other than 2 or 5 (like 3, 7, or 11), the decimal will repeat forever! (Like 1/3 = 0.333...).",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 250 350 L 250 400", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 400, y: 430, text: "Look at the bottom number!", color: ORANGE, size: 28, bold: true },
          { type: "text", x: 400, y: 480, text: "If it has prime factors OTHER than 2 or 5", color: TEXT_MAIN, size: 20 },
          { type: "text", x: 400, y: 510, text: "(like 3, 7, or 11), it repeats forever!", color: TEXT_MAIN, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Write 3/8 as a decimal.",
        rule: "Write 3/8 as a decimal.",
        quizQ: "Write 3/8 as a decimal.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Terminating Decimals", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Write 3/8 as a decimal.", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "3", color: BLUE, size: 40 },
          { type: "path", d: "M 370 280 L 430 280", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 400, y: 330, text: "8", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "It stops! Because 8 is just 2 times 2 times 2. The answer is 0.375.",
        rule: "0.375 (It stops, because 8 is just 2×2×2).",
        quizQ: "",
        quizA: "0.375 (It stops, because 8 is just 2×2×2).",
        elements: [
          { type: "path", d: "M 430 320 L 480 320", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 550, y: 325, text: "8 = 2 × 2 × 2", color: ORANGE, size: 20 },
          { type: "text", x: 550, y: 355, text: "Only 2s, so it stops!", color: TEXT_SUB, size: 16 },
          
          { type: "text", x: 400, y: 450, text: "= 0.375", color: GREEN, size: 48, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Write 0.2 recurring as a fraction.",
        rule: "Write 0.2̇ (0.222…) as a fraction.",
        quizQ: "Write 0.2̇ (0.222…) as a fraction.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: The 9 Trick", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Write 0.2̇ (0.222…) as a fraction.", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "0.2̇", color: BLUE, size: 48 }
        ]
      },
      {
        clear: false,
        narration: "The 9 trick works for single repeating digits! It's 2 over 9.",
        rule: "2/9 (The 9 trick works for single repeating digits!).",
        quizQ: "",
        quizA: "2/9 (The 9 trick works for single repeating digits!).",
        elements: [
          { type: "text", x: 400, y: 350, text: "The 9 trick!", color: ORANGE, size: 28, bold: true },
          { type: "text", x: 400, y: 390, text: "Put the repeating digit over 9.", color: TEXT_MAIN, size: 20 },
          
          { type: "text", x: 400, y: 460, text: "2", color: GREEN, size: 40, bold: true },
          { type: "path", d: "M 370 490 L 430 490", stroke: GREEN, width: 4, fill: "none" },
          { type: "text", x: 400, y: 540, text: "9", color: GREEN, size: 40, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_8.2: Fractions and the correct order of operations
// ------------------------------------------------------------------
data["m8_8.2"] = {
  title: "8.2 Fractions and the correct order of operations",
  watermark: "Section 8.2: Order of Operations",
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
          
          { type: "text", x: 400, y: 250, text: "3 + 5", color: BLUE, size: 40 },
          { type: "path", d: "M 320 280 L 480 280", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 400, y: 330, text: "2 × 4", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "A fraction bar acts like an invisible bracket! Figure out the whole top part, then the whole bottom part, and divide at the very end.",
        rule: "A fraction bar acts like an invisible bracket! Figure out the whole top part, then the whole bottom part, and divide at the very end.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 320 220 L 300 220 L 300 260 L 320 260", stroke: RED, width: 2, fill: "none" },
          { type: "path", d: "M 480 220 L 500 220 L 500 260 L 480 260", stroke: RED, width: 2, fill: "none" },
          
          { type: "path", d: "M 320 300 L 300 300 L 300 340 L 320 340", stroke: RED, width: 2, fill: "none" },
          { type: "path", d: "M 480 300 L 500 300 L 500 340 L 480 340", stroke: RED, width: 2, fill: "none" },
          
          { type: "text", x: 400, y: 420, text: "Invisible Brackets!", color: RED, size: 28, bold: true },
          { type: "text", x: 400, y: 470, text: "Figure out the top. Figure out the bottom.", color: TEXT_MAIN, size: 20 },
          { type: "text", x: 400, y: 500, text: "Divide at the VERY END.", color: GREEN, size: 24, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Work out: 1/2 + 1/3 × 6.",
        rule: "Work out: 1/2 + 1/3 × 6.",
        quizQ: "Work out: 1/2 + 1/3 × 6.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Order of Operations", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Work out: 1/2 + 1/3 × 6", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 250, text: "1", color: BLUE, size: 32 },
          { type: "path", d: "M 280 270 L 320 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 300, y: 310, text: "2", color: BLUE, size: 32 },
          
          { type: "text", x: 350, y: 280, text: "+", color: TEXT_MAIN, size: 32 },
          
          { type: "text", x: 400, y: 250, text: "1", color: BLUE, size: 32 },
          { type: "path", d: "M 380 270 L 420 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 400, y: 310, text: "3", color: BLUE, size: 32 },
          
          { type: "text", x: 450, y: 280, text: "× 6", color: TEXT_MAIN, size: 32 }
        ]
      },
      {
        clear: false,
        narration: "Always do the multiplying before the adding! 1/3 of 6 is 2. So 1/2 + 2 is 2 and a half.",
        rule: "1/2 + 2 = 2½. (Always do the multiplying before the adding!).",
        quizQ: "",
        quizA: "1/2 + 2 = 2½. (Always do the multiplying before the adding!).",
        elements: [
          { type: "path", d: "M 370 230 L 500 230 L 500 330 L 370 330 Z", stroke: ORANGE, width: 2, fill: "none", strokeDasharray: "5,5" },
          { type: "text", x: 435, y: 360, text: "Do this first!", color: ORANGE, size: 16 },
          
          { type: "text", x: 400, y: 440, text: "1/2 + 2", color: TEXT_MAIN, size: 32 },
          
          { type: "text", x: 400, y: 510, text: "= 2½", color: GREEN, size: 48, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Why is (1 + 3)/8 different from 1 + 3/8?",
        rule: "Why is (1 + 3)/8 different from 1 + 3/8?",
        quizQ: "Why is (1 + 3)/8 different from 1 + 3/8?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: The Fraction Bar", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Why is (1 + 3)/8 different from 1 + 3/8?", color: TEXT_MAIN, size: 24 },
          
          // First one
          { type: "text", x: 250, y: 250, text: "1 + 3", color: BLUE, size: 32 },
          { type: "path", d: "M 200 270 L 300 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 250, y: 310, text: "8", color: BLUE, size: 32 },
          
          // Second one
          { type: "text", x: 500, y: 280, text: "1 +", color: BLUE, size: 32 },
          { type: "text", x: 560, y: 250, text: "3", color: BLUE, size: 32 },
          { type: "path", d: "M 540 270 L 580 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 560, y: 310, text: "8", color: BLUE, size: 32 }
        ]
      },
      {
        clear: false,
        narration: "The first one is 4/8, which is 1/2. The second one is 1 plus 0.375, which is 1.375.",
        rule: "The first one is 4/8 = 1/2. The second one is 1 + 0.375 = 1.375.",
        quizQ: "",
        quizA: "The first one is 4/8 = 1/2. The second one is 1 + 0.375 = 1.375.",
        elements: [
          { type: "text", x: 250, y: 400, text: "4/8", color: ORANGE, size: 28 },
          { type: "text", x: 250, y: 450, text: "= 1/2", color: GREEN, size: 32, bold: true },
          
          { type: "text", x: 530, y: 400, text: "1 + 0.375", color: ORANGE, size: 28 },
          { type: "text", x: 530, y: 450, text: "= 1.375", color: GREEN, size: 32, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_8.3: Multiplying fractions
// ------------------------------------------------------------------
data["m8_8.3"] = {
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
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Multiplying", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you multiply fractions?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 250, text: "a", color: BLUE, size: 40 },
          { type: "path", d: "M 270 280 L 330 280", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 300, y: 330, text: "b", color: BLUE, size: 40 },
          
          { type: "text", x: 400, y: 290, text: "×", color: TEXT_MAIN, size: 40 },
          
          { type: "text", x: 500, y: 250, text: "c", color: BLUE, size: 40 },
          { type: "path", d: "M 470 280 L 530 280", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 500, y: 330, text: "d", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "It's easy! Just multiply the top numbers together, and multiply the bottom numbers together.",
        rule: "It's easy! Just multiply the top numbers together, and multiply the bottom numbers together. (But remember to turn mixed numbers into top-heavy fractions first!).",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 340 240 L 460 240", stroke: GREEN, width: 3, fill: "none" },
          { type: "path", d: "M 450 230 L 460 240 L 450 250", stroke: GREEN, width: 3, fill: "none" },
          
          { type: "path", d: "M 340 320 L 460 320", stroke: ORANGE, width: 3, fill: "none" },
          { type: "path", d: "M 450 310 L 460 320 L 450 330", stroke: ORANGE, width: 3, fill: "none" },
          
          { type: "text", x: 400, y: 440, text: "Multiply the tops. Multiply the bottoms.", color: GREEN, size: 28, bold: true },
          { type: "text", x: 400, y: 490, text: "(Turn mixed numbers into top-heavy fractions first!)", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Multiply 2/3 by 5/7.",
        rule: "2/3 × 5/7.",
        quizQ: "2/3 × 5/7.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Multiplying", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "2/3 × 5/7", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 250, text: "2", color: BLUE, size: 40 },
          { type: "path", d: "M 270 280 L 330 280", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 300, y: 330, text: "3", color: BLUE, size: 40 },
          
          { type: "text", x: 400, y: 290, text: "×", color: TEXT_MAIN, size: 40 },
          
          { type: "text", x: 500, y: 250, text: "5", color: BLUE, size: 40 },
          { type: "path", d: "M 470 280 L 530 280", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 500, y: 330, text: "7", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "2 times 5 is 10. 3 times 7 is 21. The answer is 10/21.",
        rule: "10/21. (2×5=10, 3×7=21).",
        quizQ: "",
        quizA: "10/21. (2×5=10, 3×7=21).",
        elements: [
          { type: "text", x: 400, y: 420, text: "2 × 5 = 10", color: GREEN, size: 24 },
          { type: "text", x: 400, y: 460, text: "3 × 7 = 21", color: ORANGE, size: 24 },
          
          { type: "text", x: 400, y: 510, text: "10", color: GREEN, size: 32, bold: true },
          { type: "path", d: "M 370 530 L 430 530", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 400, y: 560, text: "21", color: GREEN, size: 32, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Multiply 1 and 1/2 by 2/5.",
        rule: "1 1/2 × 2/5.",
        quizQ: "1 1/2 × 2/5.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Mixed Numbers", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "1 ½ × 2/5", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 260, y: 290, text: "1", color: BLUE, size: 40 },
          { type: "text", x: 300, y: 250, text: "1", color: BLUE, size: 32 },
          { type: "path", d: "M 280 270 L 320 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 300, y: 310, text: "2", color: BLUE, size: 32 },
          
          { type: "text", x: 400, y: 290, text: "×", color: TEXT_MAIN, size: 40 },
          
          { type: "text", x: 500, y: 250, text: "2", color: BLUE, size: 40 },
          { type: "path", d: "M 470 280 L 530 280", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 500, y: 330, text: "5", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Turn it top-heavy first! 1 and 1/2 is 3/2. 3/2 times 2/5 is 6/10, which simplifies to 3/5.",
        rule: "Turn it top-heavy first: 3/2 × 2/5 = 6/10, which simplifies to 3/5.",
        quizQ: "",
        quizA: "Turn it top-heavy first: 3/2 × 2/5 = 6/10, which simplifies to 3/5.",
        elements: [
          { type: "path", d: "M 290 330 L 290 380", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 290, y: 410, text: "3", color: ORANGE, size: 32 },
          { type: "path", d: "M 270 430 L 310 430", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 290, y: 470, text: "2", color: ORANGE, size: 32 },
          
          { type: "text", x: 350, y: 440, text: "×", color: TEXT_MAIN, size: 32 },
          
          { type: "text", x: 410, y: 410, text: "2", color: BLUE, size: 32 },
          { type: "path", d: "M 390 430 L 430 430", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 410, y: 470, text: "5", color: BLUE, size: 32 },
          
          { type: "text", x: 470, y: 440, text: "=", color: TEXT_MAIN, size: 32 },
          
          { type: "text", x: 520, y: 410, text: "6", color: TEXT_MAIN, size: 32 },
          { type: "path", d: "M 500 430 L 540 430", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 520, y: 470, text: "10", color: TEXT_MAIN, size: 32 },
          
          { type: "text", x: 580, y: 440, text: "=", color: TEXT_MAIN, size: 32 },
          
          { type: "text", x: 630, y: 410, text: "3", color: GREEN, size: 40, bold: true },
          { type: "path", d: "M 610 430 L 650 430", stroke: GREEN, width: 4, fill: "none" },
          { type: "text", x: 630, y: 470, text: "5", color: GREEN, size: 40, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_8.4: Dividing fractions
// ------------------------------------------------------------------
data["m8_8.4"] = {
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
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Dividing", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you divide by a fraction?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 250, text: "a", color: BLUE, size: 40 },
          { type: "path", d: "M 270 280 L 330 280", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 300, y: 330, text: "b", color: BLUE, size: 40 },
          
          { type: "text", x: 400, y: 290, text: "÷", color: TEXT_MAIN, size: 40 },
          
          { type: "text", x: 500, y: 250, text: "c", color: BLUE, size: 40 },
          { type: "path", d: "M 470 280 L 530 280", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 500, y: 330, text: "d", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Multiply by its reciprocal! Keep the first fraction, change divide to multiply, and flip the second fraction upside down.",
        rule: "Multiply by its reciprocal: a/b ÷ c/d = a/b × d/c.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 400 320 L 400 370", stroke: ORANGE, width: 3, fill: "none" },
          { type: "path", d: "M 390 360 L 400 370 L 410 360", stroke: ORANGE, width: 3, fill: "none" },
          
          { type: "text", x: 300, y: 410, text: "a", color: BLUE, size: 40 },
          { type: "path", d: "M 270 440 L 330 440", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 300, y: 490, text: "b", color: BLUE, size: 40 },
          
          { type: "text", x: 400, y: 450, text: "×", color: GREEN, size: 40, bold: true },
          
          { type: "text", x: 500, y: 410, text: "d", color: GREEN, size: 40, bold: true },
          { type: "path", d: "M 470 440 L 530 440", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 500, y: 490, text: "c", color: GREEN, size: 40, bold: true },
          
          { type: "text", x: 400, y: 550, text: "Keep, Change, Flip!", color: ORANGE, size: 24, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Divide 3/4 by 1/2.",
        rule: "3/4 ÷ 1/2.",
        quizQ: "3/4 ÷ 1/2.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Dividing", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "3/4 ÷ 1/2", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 250, text: "3", color: BLUE, size: 40 },
          { type: "path", d: "M 270 280 L 330 280", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 300, y: 330, text: "4", color: BLUE, size: 40 },
          
          { type: "text", x: 400, y: 290, text: "÷", color: TEXT_MAIN, size: 40 },
          
          { type: "text", x: 500, y: 250, text: "1", color: BLUE, size: 40 },
          { type: "path", d: "M 470 280 L 530 280", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 500, y: 330, text: "2", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Keep, change, flip! 3/4 times 2/1. That's 6/4, which simplifies to 3/2.",
        rule: "3/4 × 2/1 = 3/2.",
        quizQ: "",
        quizA: "3/4 × 2/1 = 3/2.",
        elements: [
          { type: "text", x: 300, y: 410, text: "3", color: BLUE, size: 32 },
          { type: "path", d: "M 280 430 L 320 430", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 300, y: 470, text: "4", color: BLUE, size: 32 },
          
          { type: "text", x: 360, y: 440, text: "×", color: ORANGE, size: 32, bold: true },
          
          { type: "text", x: 420, y: 410, text: "2", color: ORANGE, size: 32, bold: true },
          { type: "path", d: "M 400 430 L 440 430", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 420, y: 470, text: "1", color: ORANGE, size: 32, bold: true },
          
          { type: "text", x: 480, y: 440, text: "=", color: TEXT_MAIN, size: 32 },
          
          { type: "text", x: 540, y: 410, text: "3", color: GREEN, size: 40, bold: true },
          { type: "path", d: "M 520 430 L 560 430", stroke: GREEN, width: 4, fill: "none" },
          { type: "text", x: 540, y: 470, text: "2", color: GREEN, size: 40, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Divide 6 by 2/3.",
        rule: "6 ÷ 2/3.",
        quizQ: "6 ÷ 2/3.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Whole Numbers", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "6 ÷ 2/3", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 290, text: "6", color: BLUE, size: 40 },
          
          { type: "text", x: 400, y: 290, text: "÷", color: TEXT_MAIN, size: 40 },
          
          { type: "text", x: 500, y: 250, text: "2", color: BLUE, size: 40 },
          { type: "path", d: "M 470 280 L 530 280", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 500, y: 330, text: "3", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Keep, change, flip! 6 times 3/2. 6 times 3 is 18. 18 divided by 2 is 9.",
        rule: "6 × 3/2 = 9.",
        quizQ: "",
        quizA: "6 × 3/2 = 9.",
        elements: [
          { type: "text", x: 300, y: 440, text: "6", color: BLUE, size: 32 },
          
          { type: "text", x: 360, y: 440, text: "×", color: ORANGE, size: 32, bold: true },
          
          { type: "text", x: 420, y: 410, text: "3", color: ORANGE, size: 32, bold: true },
          { type: "path", d: "M 400 430 L 440 430", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 420, y: 470, text: "2", color: ORANGE, size: 32, bold: true },
          
          { type: "text", x: 480, y: 440, text: "=", color: TEXT_MAIN, size: 32 },
          
          { type: "text", x: 540, y: 440, text: "9", color: GREEN, size: 48, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_8.5: Making calculations easier
// ------------------------------------------------------------------
data["m8_8.5"] = {
  title: "8.5 Making calculations easier",
  watermark: "Section 8.5: Mental Strategies",
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
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Mental Strategies", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What mental strategies help with fractions?", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "Cancel before multiplying! Use equivalent fractions, split mixed numbers, and use factors of 100 for percentages.",
        rule: "Cancel before multiplying; use equivalent fractions; split mixed numbers; use factors of 100 for percentages.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 250, text: "1. Cancel BEFORE multiplying", color: BLUE, size: 24 },
          { type: "text", x: 400, y: 320, text: "2. Use equivalent fractions", color: BLUE, size: 24 },
          { type: "text", x: 400, y: 390, text: "3. Split mixed numbers", color: BLUE, size: 24 },
          { type: "text", x: 400, y: 460, text: "4. Use factors of 100 for percentages", color: BLUE, size: 24 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Cancel first: 4/9 times 3/8.",
        rule: "Cancel first: 4/9 × 3/8.",
        quizQ: "Cancel first: 4/9 × 3/8.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Cancelling", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Cancel first: 4/9 × 3/8", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 250, text: "4", color: BLUE, size: 40 },
          { type: "path", d: "M 270,280 L 330,280", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 300, y: 330, text: "9", color: BLUE, size: 40 },
          
          { type: "text", x: 400, y: 290, text: "×", color: TEXT_MAIN, size: 40 },
          
          { type: "text", x: 500, y: 250, text: "3", color: BLUE, size: 40 },
          { type: "path", d: "M 470,280 L 530,280", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 500, y: 330, text: "8", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Cancel the 4 and 8 to get 1 and 2. Cancel the 3 and 9 to get 1 and 3. Now it's just 1/3 times 1/2, which is 1/6!",
        rule: "(4×3)/(9×8) → cancel 4 and 8, 3 and 9 → 1/6.",
        quizQ: "",
        quizA: "(4×3)/(9×8) → cancel 4 and 8, 3 and 9 → 1/6.",
        elements: [
          // Cross out 4 and 8
          { type: "path", d: "M 280,260 L 320,240", stroke: RED, width: 3, fill: "none" },
          { type: "text", x: 280, y: 230, text: "1", color: RED, size: 20 },
          
          { type: "path", d: "M 480,340 L 520,320", stroke: RED, width: 3, fill: "none" },
          { type: "text", x: 530, y: 350, text: "2", color: RED, size: 20 },
          
          // Cross out 3 and 9
          { type: "path", d: "M 480,260 L 520,240", stroke: ORANGE, width: 3, fill: "none" },
          { type: "text", x: 530, y: 230, text: "1", color: ORANGE, size: 20 },
          
          { type: "path", d: "M 280,340 L 320,320", stroke: ORANGE, width: 3, fill: "none" },
          { type: "text", x: 280, y: 350, text: "3", color: ORANGE, size: 20 },
          
          { type: "text", x: 400, y: 440, text: "1 × 1 = 1", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 400, y: 480, text: "3 × 2 = 6", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 540, text: "= 1/6", color: GREEN, size: 48, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Why convert 0.25 to 1/4 in a product?",
        rule: "Why convert 0.25 to 1/4 in a product?",
        quizQ: "Why convert 0.25 to 1/4 in a product?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Decimals to Fractions", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Why convert 0.25 to 1/4 in a product?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "0.25 × 36", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Because multiplying by 1/4 is the same as dividing by 4! It's often much quicker and perfectly exact.",
        rule: "Multiplying by 1/4 is often quicker and exact.",
        quizQ: "",
        quizA: "Multiplying by 1/4 is often quicker and exact.",
        elements: [
          { type: "text", x: 400, y: 350, text: "1/4 × 36", color: ORANGE, size: 40 },
          
          { type: "text", x: 400, y: 450, text: "= 9", color: GREEN, size: 48, bold: true },
          { type: "text", x: 400, y: 510, text: "(Just divide by 4! Much quicker.)", color: TEXT_SUB, size: 20 }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 8 Chapter 8!");
