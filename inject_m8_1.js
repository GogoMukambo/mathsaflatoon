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
// m8_1.1: Irrational numbers
// ------------------------------------------------------------------
data["m8_1.1"] = {
  title: "1.1 Irrational numbers",
  watermark: "Section 1.1: Irrational",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" },
    { id: "card_3", label: "Recall" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What makes a number 'irrational'?",
        rule: "What makes a number 'irrational'?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Irrational Numbers", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What makes a number 'irrational'?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 280, text: "π", color: BLUE, size: 60 },
          { type: "text", x: 500, y: 280, text: "√2", color: RED, size: 60 }
        ]
      },
      {
        clear: false,
        narration: "It's a crazy number that can't be written as a simple fraction! Its decimal goes on forever without repeating.",
        rule: "It's a crazy number that can't be written as a simple fraction! Its decimal goes on forever without ever repeating a pattern. Famous examples are π (pi) and square roots like √2.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 420, text: "It CANNOT be written as a simple fraction.", color: GREEN, size: 24, bold: true },
          { type: "text", x: 400, y: 460, text: "The decimal goes on forever without repeating!", color: TEXT_SUB, size: 20 },
          { type: "text", x: 400, y: 500, text: "(Like 3.14159265...)", color: BLUE, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Is the square root of 9 irrational?",
        rule: "Is √9 irrational?",
        quizQ: "Is √9 irrational?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Square Roots", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Is √9 irrational?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 280, text: "√9", color: BLUE, size: 60 }
        ]
      },
      {
        clear: false,
        narration: "No! The square root of 9 is exactly 3. Since 3 is a normal integer, it is rational.",
        rule: "No. √9 = 3, which is an integer, so it is rational.",
        quizQ: "",
        quizA: "No. √9 = 3, which is an integer, so it is rational.",
        elements: [
          { type: "path", d: "M 400 320 L 400 360", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 400, y: 400, text: "= 3", color: GREEN, size: 40, bold: true },
          
          { type: "text", x: 400, y: 480, text: "No! It's a normal integer, so it's RATIONAL.", color: GREEN, size: 24 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Why is √8 irrational but √16 not?",
        rule: "Why is √8 irrational but √16 not?",
        quizQ: "Why is √8 irrational but √16 not?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Simplifying Roots", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Why is √8 irrational but √16 not?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 250, text: "√16", color: BLUE, size: 40 },
          { type: "text", x: 500, y: 250, text: "√8", color: RED, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "√16 is exactly 4. But √8 simplifies to 2√2, and √2 is irrational! A root that stays in this form is called a surd.",
        rule: "√16 = 4 (perfect square). √8 = 2√2, and √2 is irrational, so √8 is irrational. A root that stays in this form is called a surd.",
        quizQ: "",
        quizA: "√16 = 4 (perfect square). √8 = 2√2, and √2 is irrational, so √8 is irrational. A root that stays in this form is called a surd.",
        elements: [
          { type: "path", d: "M 300 280 L 300 320", stroke: BLUE, width: 2, fill: "none" },
          { type: "text", x: 300, y: 350, text: "= 4", color: BLUE, size: 30 },
          { type: "text", x: 300, y: 390, text: "(Rational)", color: BLUE, size: 16 },
          
          { type: "path", d: "M 500 280 L 500 320", stroke: RED, width: 2, fill: "none" },
          { type: "text", x: 500, y: 350, text: "= 2√2", color: RED, size: 30 },
          { type: "text", x: 500, y: 390, text: "(Irrational Surd)", color: RED, size: 16 },
          
          { type: "text", x: 400, y: 480, text: "A root that can't be simplified away is called a SURD.", color: GREEN, size: 20, bold: true }
        ]
      }
    ],
    "card_3": [
      {
        narration: "What is a counter-example?",
        rule: "What is a counter-example?",
        quizQ: "What is a counter-example?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Counter-examples", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is a counter-example?", color: TEXT_MAIN, size: 24 },
          
          { type: "rect", x: 200, y: 220, width: 400, height: 60, fill: "#fef2f2", stroke: RED, strokeWidth: 2, rx: 10 },
          { type: "text", x: 400, y: 255, text: "Claim: 'Every square root is irrational'", color: RED, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "It's one case that proves a statement is wrong! For example, √4 = 2 proves that claim is false.",
        rule: "One case that shows a statement is not always true. √4 = 2 is a counter-example to “every square root is irrational”.",
        quizQ: "",
        quizA: "One case that shows a statement is not always true. √4 = 2 is a counter-example to “every square root is irrational”.",
        elements: [
          { type: "text", x: 400, y: 350, text: "Counter-example: √4 = 2", color: BLUE, size: 30, bold: true },
          
          { type: "text", x: 400, y: 450, text: "It's ONE case that proves a statement is FALSE!", color: GREEN, size: 24, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_1.2: Standard form
// ------------------------------------------------------------------
data["m8_1.2"] = {
  title: "1.2 Standard form",
  watermark: "Section 1.2: Standard Form",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What is 'standard form'?",
        rule: "What is 'standard form'?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Standard Form", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is 'standard form'?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 280, text: "4.5 × 10⁴", color: BLUE, size: 60 }
        ]
      },
      {
        clear: false,
        narration: "It's a scientific shortcut for writing giant or tiny numbers! You write a number between 1 and 10, and multiply it by a power of 10.",
        rule: "It's a scientific shortcut for writing giant or tiny numbers! You write a number between 1 and 10, and multiply it by a power of 10 (like 4.5 × 10⁴).",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 320 320 L 320 360", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 320, y: 390, text: "Number between", color: TEXT_MAIN, size: 16 },
          { type: "text", x: 320, y: 410, text: "1 and 10", color: TEXT_MAIN, size: 16 },
          
          { type: "path", d: "M 480 320 L 480 360", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 480, y: 390, text: "Power of 10", color: TEXT_MAIN, size: 16 },
          
          { type: "text", x: 400, y: 480, text: "A shortcut for giant or tiny numbers!", color: GREEN, size: 24, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's write a big number in standard form.",
        rule: "Write 45 000 in standard form.",
        quizQ: "Write 45 000 in standard form.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Big Numbers", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Write 45 000 in standard form.", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 280, text: "45000", color: BLUE, size: 60 }
        ]
      },
      {
        clear: false,
        narration: "Put the decimal after the 4 to make 4.5. The decimal jumped 4 places, so it's times 10 to the power of 4.",
        rule: "4.5 × 10⁴.",
        quizQ: "",
        quizA: "4.5 × 10⁴.",
        elements: [
          // Jump arrows
          { type: "path", d: "M 480 300 Q 460 330 440 300", stroke: ORANGE, width: 2, fill: "none" },
          { type: "path", d: "M 440 300 Q 420 330 400 300", stroke: ORANGE, width: 2, fill: "none" },
          { type: "path", d: "M 400 300 Q 380 330 360 300", stroke: ORANGE, width: 2, fill: "none" },
          { type: "path", d: "M 360 300 Q 340 330 320 300", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 400, y: 350, text: "Jumps 4 places left", color: ORANGE, size: 16 },
          
          { type: "text", x: 400, y: 450, text: "4.5 × 10⁴", color: GREEN, size: 48, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "What about a tiny number?",
        rule: "Write 0.0036 in standard form.",
        quizQ: "Write 0.0036 in standard form.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Tiny Numbers", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Write 0.0036 in standard form.", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 280, text: "0.0036", color: BLUE, size: 60 }
        ]
      },
      {
        clear: false,
        narration: "Put the decimal after the 3 to make 3.6. It jumped 3 places right, so it's a NEGATIVE power: times 10 to the power of -3.",
        rule: "3.6 × 10⁻³.",
        quizQ: "",
        quizA: "3.6 × 10⁻³.",
        elements: [
          // Jump arrows
          { type: "path", d: "M 320 300 Q 340 330 360 300", stroke: ORANGE, width: 2, fill: "none" },
          { type: "path", d: "M 360 300 Q 380 330 400 300", stroke: ORANGE, width: 2, fill: "none" },
          { type: "path", d: "M 400 300 Q 420 330 440 300", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 400, y: 350, text: "Jumps 3 places right", color: ORANGE, size: 16 },
          
          { type: "text", x: 400, y: 450, text: "3.6 × 10⁻³", color: GREEN, size: 48, bold: true },
          { type: "text", x: 400, y: 500, text: "Tiny numbers have NEGATIVE powers!", color: TEXT_SUB, size: 20 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_1.3: Indices
// ------------------------------------------------------------------
data["m8_1.3"] = {
  title: "1.3 Indices",
  watermark: "Section 1.3: Indices",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What are the magic rules for indices (powers)?",
        rule: "What are the magic rules for indices (powers)?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Index Laws", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What are the magic rules for indices (powers)?", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "When multiplying, add the powers! When dividing, subtract them! A power to a power means multiply. Anything to the power of 0 is 1.",
        rule: "When multiplying, add the powers! When dividing, subtract them! A power to a power means you multiply them. And anything to the power of 0 is just 1!",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 250, y: 250, text: "Multiply → ADD", color: BLUE, size: 20, bold: true },
          { type: "text", x: 250, y: 280, text: "x² × x³ = x⁵", color: TEXT_SUB, size: 18 },
          
          { type: "text", x: 550, y: 250, text: "Divide → SUBTRACT", color: RED, size: 20, bold: true },
          { type: "text", x: 550, y: 280, text: "x⁵ ÷ x² = x³", color: TEXT_SUB, size: 18 },
          
          { type: "text", x: 250, y: 380, text: "Power to Power → MULTIPLY", color: GREEN, size: 20, bold: true },
          { type: "text", x: 250, y: 410, text: "(x²)³ = x⁶", color: TEXT_SUB, size: 18 },
          
          { type: "text", x: 550, y: 380, text: "Power of 0 → ONE", color: ORANGE, size: 20, bold: true },
          { type: "text", x: 550, y: 410, text: "x⁰ = 1", color: TEXT_SUB, size: 18 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's multiply powers.",
        rule: "Simplify 2³ × 2⁵.",
        quizQ: "Simplify 2³ × 2⁵.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Multiplying Indices", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Simplify 2³ × 2⁵.", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 280, text: "2³ × 2⁵", color: BLUE, size: 48 }
        ]
      },
      {
        clear: false,
        narration: "When multiplying, we ADD the little powers. 3 plus 5 is 8. So it's 2 to the power of 8, which is 256.",
        rule: "2⁸ = 256.",
        quizQ: "",
        quizA: "2⁸ = 256.",
        elements: [
          { type: "path", d: "M 400 310 L 400 350", stroke: ORANGE, width: 3, fill: "none" },
          { type: "text", x: 400, y: 380, text: "Add the powers: 3 + 5 = 8", color: ORANGE, size: 20 },
          
          { type: "text", x: 400, y: 460, text: "2⁸ = 256", color: GREEN, size: 40, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "What does a negative power mean?",
        rule: "Evaluate 5⁻².",
        quizQ: "Evaluate 5⁻².",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Negative Indices", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Evaluate 5⁻².", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 280, text: "5⁻²", color: BLUE, size: 48 }
        ]
      },
      {
        clear: false,
        narration: "A negative power means '1 over' the positive power. So it's 1 over 5 squared, which is 1/25.",
        rule: "1/25.",
        quizQ: "",
        quizA: "1/25.",
        elements: [
          { type: "path", d: "M 400 310 L 400 350", stroke: ORANGE, width: 3, fill: "none" },
          { type: "text", x: 400, y: 380, text: "Negative means '1 over'", color: ORANGE, size: 20 },
          
          { type: "text", x: 400, y: 440, text: "1", color: GREEN, size: 30, bold: true },
          { type: "path", d: "M 380 460 L 420 460", stroke: GREEN, width: 3, fill: "none" },
          { type: "text", x: 400, y: 490, text: "5²", color: GREEN, size: 30, bold: true },
          
          { type: "text", x: 480, y: 465, text: "= 1/25", color: GREEN, size: 30, bold: true }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 8 Chapter 1!");
