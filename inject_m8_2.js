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
// m8_2.1: Substituting into expressions
// ------------------------------------------------------------------
data["m8_2.1"] = {
  title: "2.1 Substituting into expressions",
  watermark: "Section 2.1: Substitution",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What does 'substitute' mean in algebra?",
        rule: "What does 'substitute' mean in algebra?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Substitute", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What does 'substitute' mean in algebra?", color: TEXT_MAIN, size: 24 },
          
          { type: "rect", x: 300, y: 250, width: 80, height: 80, fill: "#e0f2fe", stroke: BLUE, strokeWidth: 3, rx: 10 },
          { type: "text", x: 340, y: 295, text: "x", color: BLUE, size: 40 },
          
          { type: "path", d: "M 420 290 L 480 290", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "path", d: "M 460 270 L 480 290 L 460 310", stroke: TEXT_MAIN, width: 4, fill: "none" },
          
          { type: "rect", x: 520, y: 250, width: 80, height: 80, fill: "#d1fae5", stroke: GREEN, strokeWidth: 3, rx: 10 },
          { type: "text", x: 560, y: 295, text: "5", color: GREEN, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "It's like swapping players in a game! You replace each letter with its secret number.",
        rule: "It's like swapping players in a game! You replace each letter with its secret number, then do the math (remembering BIDMAS/BODMAS!).",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 420, text: "It's like swapping players in a game!", color: GREEN, size: 24, bold: true },
          { type: "text", x: 400, y: 460, text: "Replace the letter with its secret number.", color: TEXT_SUB, size: 20 },
          { type: "text", x: 400, y: 500, text: "(And remember BIDMAS!)", color: RED, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's substitute into an expression.",
        rule: "If a = 3 and b = −2, find 2a − b.",
        quizQ: "If a = 3 and b = −2, find 2a − b.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Substituting", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "If a = 3 and b = −2, find 2a − b.", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "2a - b", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Swap a for 3, and b for -2. 2 times 3 is 6. Minus negative 2 is like adding 2. The answer is 8.",
        rule: "2×3 − (−2) = 6 + 2 = 8. (Subtracting a negative is like adding!).",
        quizQ: "",
        quizA: "2×3 − (−2) = 6 + 2 = 8. (Subtracting a negative is like adding!).",
        elements: [
          { type: "path", d: "M 400 280 L 400 320", stroke: ORANGE, width: 3, fill: "none" },
          
          { type: "text", x: 400, y: 360, text: "2(3) - (-2)", color: ORANGE, size: 40 },
          
          { type: "text", x: 400, y: 440, text: "6 + 2", color: TEXT_MAIN, size: 30 },
          { type: "text", x: 400, y: 500, text: "8", color: GREEN, size: 40, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Watch out for BIDMAS when substituting!",
        rule: "If x = 4, find 3x².",
        quizQ: "If x = 4, find 3x².",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: BIDMAS Warning", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "If x = 4, find 3x².", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "3x²", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Do the squared part BEFORE multiplying by 3! 4 squared is 16. Then 3 times 16 is 48.",
        rule: "3 × 16 = 48. (Always do the squared part BEFORE multiplying by 3).",
        quizQ: "",
        quizA: "3 × 16 = 48. (Always do the squared part BEFORE multiplying by 3).",
        elements: [
          { type: "path", d: "M 400 280 L 400 320", stroke: ORANGE, width: 3, fill: "none" },
          
          { type: "text", x: 400, y: 360, text: "3(4)²", color: ORANGE, size: 40 },
          
          { type: "text", x: 400, y: 440, text: "3 × 16", color: TEXT_MAIN, size: 30 },
          { type: "text", x: 400, y: 500, text: "48", color: GREEN, size: 40, bold: true },
          
          { type: "text", x: 600, y: 360, text: "Square it FIRST!", color: RED, size: 16 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_2.2: Constructing expressions
// ------------------------------------------------------------------
data["m8_2.2"] = {
  title: "2.2 Constructing expressions",
  watermark: "Section 2.2: Translating",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do we translate words into algebra?",
        rule: "How do we translate words into algebra?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Translating to Algebra", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do we translate words into algebra?", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "Pick a letter for the mystery number. 'More than' means plus, 'product' means multiply, and 'squared' means power of 2.",
        rule: "Pick a letter for the mystery number. 'More than' means +, 'product' means ×, and 'squared' means to the power of 2.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 300, y: 250, text: "Mystery Number", color: BLUE, size: 20 },
          { type: "path", d: "M 420 240 L 460 240", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 450 230 L 460 240 L 450 250", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 500, y: 250, text: "x", color: BLUE, size: 24, bold: true },
          
          { type: "text", x: 300, y: 320, text: "'More than'", color: GREEN, size: 20 },
          { type: "path", d: "M 420 310 L 460 310", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 450 300 L 460 310 L 450 320", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 500, y: 320, text: "+", color: GREEN, size: 24, bold: true },
          
          { type: "text", x: 300, y: 390, text: "'Product'", color: RED, size: 20 },
          { type: "path", d: "M 420 380 L 460 380", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 450 370 L 460 380 L 450 390", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 500, y: 390, text: "×", color: RED, size: 24, bold: true },
          
          { type: "text", x: 300, y: 460, text: "'Squared'", color: PURPLE, size: 20 },
          { type: "path", d: "M 420 450 L 460 450", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 450 440 L 460 450 L 450 460", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 500, y: 460, text: "^2", color: PURPLE, size: 24, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's translate a sentence.",
        rule: "Translate: 'n plus 7, then multiplied by 3'.",
        quizQ: "Translate: 'n plus 7, then multiplied by 3'.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Translating", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Translate: 'n plus 7, then multiplied by 3'.", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "n plus 7 is n+7. But to multiply the WHOLE thing by 3, we need brackets! 3(n+7).",
        rule: "3(n + 7). The brackets are super important here!",
        quizQ: "",
        quizA: "3(n + 7). The brackets are super important here!",
        elements: [
          { type: "text", x: 400, y: 250, text: "n + 7", color: BLUE, size: 30 },
          
          { type: "path", d: "M 400 280 L 400 320", stroke: ORANGE, width: 3, fill: "none" },
          
          { type: "text", x: 400, y: 360, text: "3(n + 7)", color: GREEN, size: 40, bold: true },
          
          { type: "text", x: 400, y: 450, text: "The brackets are super important!", color: RED, size: 24 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Let's build an expression for perimeter.",
        rule: "A rectangle is 2 cm longer than it is wide. Width is w. What is the perimeter?",
        quizQ: "A rectangle is 2 cm longer than it is wide. Width is w. What is the perimeter?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Perimeter Expression", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Rectangle is 2 cm longer than wide. Width is w.", color: TEXT_MAIN, size: 22 },
          { type: "text", x: 400, y: 180, text: "What is the perimeter?", color: TEXT_MAIN, size: 22 },
          
          // Rectangle
          { type: "rect", x: 250, y: 250, width: 300, height: 150, fill: "#e0f2fe", stroke: BLUE, strokeWidth: 3 },
          { type: "text", x: 220, y: 325, text: "w", color: BLUE, size: 20 },
          { type: "text", x: 580, y: 325, text: "w", color: BLUE, size: 20 },
          { type: "text", x: 400, y: 230, text: "w + 2", color: BLUE, size: 20 },
          { type: "text", x: 400, y: 430, text: "w + 2", color: BLUE, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "Add all four sides together! w + w + w+2 + w+2. That simplifies to 4w + 4.",
        rule: "2(w + w + 2) = 4w + 4.",
        quizQ: "",
        quizA: "2(w + w + 2) = 4w + 4.",
        elements: [
          { type: "text", x: 400, y: 480, text: "w + w + (w+2) + (w+2)", color: TEXT_SUB, size: 24 },
          { type: "text", x: 400, y: 530, text: "= 4w + 4", color: GREEN, size: 32, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_2.3: Expressions and indices
// ------------------------------------------------------------------
data["m8_2.3"] = {
  title: "2.3 Expressions and indices",
  watermark: "Section 2.3: Algebra Indices",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do index laws work with letters?",
        rule: "How do index laws work with letters?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Letters and Powers", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do index laws work with letters?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 280, text: "x² × x³ = ?", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Exactly the same as numbers! If the letters match, add the powers. If they don't, leave them separate.",
        rule: "Exactly the same as numbers! If the letters match, add/subtract the little powers. If they are different letters (like x and y), leave them separate.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 400 320 L 400 360", stroke: ORANGE, width: 3, fill: "none" },
          { type: "text", x: 400, y: 400, text: "x⁵", color: GREEN, size: 48, bold: true },
          
          { type: "text", x: 400, y: 480, text: "Exactly the same as numbers!", color: GREEN, size: 24, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's simplify an expression with numbers and letters.",
        rule: "Simplify 3x² × 4x⁵.",
        quizQ: "Simplify 3x² × 4x⁵.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Multiplying Terms", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Simplify 3x² × 4x⁵.", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 280, text: "3x² × 4x⁵", color: BLUE, size: 48 }
        ]
      },
      {
        clear: false,
        narration: "Multiply the big numbers: 3 times 4 is 12. Add the little powers: 2 plus 5 is 7. The answer is 12x⁷.",
        rule: "12x⁷. (Multiply the big numbers: 3×4=12. Add the little powers: 2+5=7).",
        quizQ: "",
        quizA: "12x⁷. (Multiply the big numbers: 3×4=12. Add the little powers: 2+5=7).",
        elements: [
          { type: "path", d: "M 360 320 L 400 360", stroke: ORANGE, width: 2, fill: "none" },
          { type: "path", d: "M 440 320 L 400 360", stroke: ORANGE, width: 2, fill: "none" },
          
          { type: "text", x: 400, y: 400, text: "12x⁷", color: GREEN, size: 48, bold: true },
          
          { type: "text", x: 400, y: 480, text: "Multiply big numbers (3×4=12)", color: TEXT_SUB, size: 20 },
          { type: "text", x: 400, y: 510, text: "Add little powers (2+5=7)", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "What about a power to a power?",
        rule: "Simplify (2a³)². ",
        quizQ: "Simplify (2a³)².",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Power to a Power", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Simplify (2a³)².", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 280, text: "(2a³)²", color: BLUE, size: 48 }
        ]
      },
      {
        clear: false,
        narration: "Square the 2 to get 4, and multiply the powers 3 times 2 to get 6. The answer is 4a⁶.",
        rule: "4a⁶. (Square the 2 to get 4, and multiply the powers 3×2=6).",
        quizQ: "",
        quizA: "4a⁶. (Square the 2 to get 4, and multiply the powers 3×2=6).",
        elements: [
          { type: "path", d: "M 400 320 L 400 360", stroke: ORANGE, width: 3, fill: "none" },
          
          { type: "text", x: 400, y: 400, text: "4a⁶", color: GREEN, size: 48, bold: true },
          
          { type: "text", x: 400, y: 480, text: "Square the 2 (2²=4)", color: TEXT_SUB, size: 20 },
          { type: "text", x: 400, y: 510, text: "Multiply the powers (3×2=6)", color: TEXT_SUB, size: 20 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_2.4: Expanding two linear expressions
// ------------------------------------------------------------------
data["m8_2.4"] = {
  title: "2.4 Expanding two linear expressions",
  watermark: "Section 2.4: Double Brackets",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" },
    { id: "card_3", label: "Recall" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do you expand two brackets multiplied together?",
        rule: "How do you expand (x + a)(x + b)?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Double Brackets", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you expand (x + a)(x + b)?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 280, text: "(x + a)(x + b)", color: BLUE, size: 48 }
        ]
      },
      {
        clear: false,
        narration: "You need four products! Multiply everything in the first bracket by everything in the second.",
        rule: "Four products (FOIL / grid): x² + (a+b)x + ab.",
        quizQ: "",
        quizA: "",
        elements: [
          // FOIL arrows
          { type: "path", d: "M 340 240 Q 400 180 460 240", stroke: RED, width: 2, fill: "none" }, // F
          { type: "path", d: "M 340 240 Q 420 150 500 240", stroke: ORANGE, width: 2, fill: "none" }, // O
          { type: "path", d: "M 380 320 Q 420 380 460 320", stroke: GREEN, width: 2, fill: "none" }, // I
          { type: "path", d: "M 380 320 Q 440 410 500 320", stroke: PURPLE, width: 2, fill: "none" }, // L
          
          { type: "text", x: 400, y: 460, text: "Four products! (FOIL method)", color: GREEN, size: 24, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's expand (x + 3)(x + 5).",
        rule: "Expand (x + 3)(x + 5).",
        quizQ: "Expand (x + 3)(x + 5).",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Expanding", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Expand (x + 3)(x + 5).", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "(x + 3)(x + 5)", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "x squared, plus 5x, plus 3x, plus 15. That simplifies to x² + 8x + 15.",
        rule: "x² + 8x + 15.",
        quizQ: "",
        quizA: "x² + 8x + 15.",
        elements: [
          { type: "text", x: 400, y: 350, text: "x² + 5x + 3x + 15", color: ORANGE, size: 30 },
          { type: "path", d: "M 400 380 L 400 420", stroke: GREEN, width: 3, fill: "none" },
          { type: "text", x: 400, y: 460, text: "x² + 8x + 15", color: GREEN, size: 40, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Watch out for negative signs!",
        rule: "Expand (2x − 1)(x + 4).",
        quizQ: "Expand (2x − 1)(x + 4).",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Negatives", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Expand (2x − 1)(x + 4).", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "(2x - 1)(x + 4)", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "2x squared, plus 8x, minus 1x, minus 4. That simplifies to 2x² + 7x - 4.",
        rule: "2x² + 8x − x − 4 = 2x² + 7x − 4.",
        quizQ: "",
        quizA: "2x² + 8x − x − 4 = 2x² + 7x − 4.",
        elements: [
          { type: "text", x: 400, y: 350, text: "2x² + 8x - x - 4", color: ORANGE, size: 30 },
          { type: "path", d: "M 400 380 L 400 420", stroke: GREEN, width: 3, fill: "none" },
          { type: "text", x: 400, y: 460, text: "2x² + 7x - 4", color: GREEN, size: 40, bold: true }
        ]
      }
    ],
    "card_3": [
      {
        narration: "What is a difference of two squares?",
        rule: "What is a difference of two squares?",
        quizQ: "What is a difference of two squares?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Difference of Squares", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is a difference of two squares?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "(x + 5)(x - 5)", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "When the brackets are identical except for the sign, the middle terms cancel out! You just get x² - 25.",
        rule: "(a + b)(a − b) = a² − b². Example: (x + 5)(x − 5) = x² − 25.",
        quizQ: "",
        quizA: "(a + b)(a − b) = a² − b². Example: (x + 5)(x − 5) = x² − 25.",
        elements: [
          { type: "text", x: 400, y: 350, text: "x² - 5x + 5x - 25", color: TEXT_SUB, size: 30 },
          
          // Cross out middle terms
          { type: "path", d: "M 320 370 L 480 330", stroke: RED, width: 3, fill: "none" },
          
          { type: "text", x: 400, y: 450, text: "x² - 25", color: GREEN, size: 40, bold: true },
          { type: "text", x: 400, y: 500, text: "The middle terms cancel out!", color: ORANGE, size: 20 }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 8 Chapter 2!");
