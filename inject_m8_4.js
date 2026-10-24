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
// m8_4.1: Constructing and solving equations
// ------------------------------------------------------------------
data["m8_4.1"] = {
  title: "4.1 Constructing and solving equations",
  watermark: "Section 4.1: Equations",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do you solve an equation?",
        rule: "How do you solve an equation?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Solving Equations", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you solve an equation?", color: TEXT_MAIN, size: 24 },
          
          // Scales
          { type: "path", d: "M 400 350 L 400 250", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "path", d: "M 350 350 L 450 350", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "path", d: "M 250 250 L 550 250", stroke: TEXT_MAIN, width: 4, fill: "none" },
          
          { type: "path", d: "M 250 250 L 250 300", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "rect", x: 220, y: 300, width: 60, height: 10, fill: TEXT_MAIN },
          
          { type: "path", d: "M 550 250 L 550 300", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "rect", x: 520, y: 300, width: 60, height: 10, fill: TEXT_MAIN },
          
          { type: "text", x: 250, y: 280, text: "2x", color: BLUE, size: 24 },
          { type: "text", x: 550, y: 280, text: "10", color: BLUE, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "Keep the scales balanced! Whatever you do to one side, you MUST do to the other side until the mystery letter is all by itself.",
        rule: "Keep the scales balanced! Whatever you do to one side, you MUST do to the other side until the mystery letter is all by itself.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 420, text: "Keep the scales balanced!", color: GREEN, size: 32, bold: true },
          { type: "text", x: 400, y: 480, text: "Whatever you do to one side,", color: TEXT_SUB, size: 20 },
          { type: "text", x: 400, y: 510, text: "you MUST do to the other side.", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's solve 3x minus 7 equals 11.",
        rule: "Solve 3x − 7 = 11.",
        quizQ: "Solve 3x − 7 = 11.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Two-step Equation", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Solve 3x − 7 = 11", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "3x − 7 = 11", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "First, add 7 to both sides. So 3x equals 18. Then divide by 3. x equals 6.",
        rule: "Add 7 to both sides: 3x = 18. Divide by 3: x = 6.",
        quizQ: "",
        quizA: "Add 7 to both sides: 3x = 18. Divide by 3: x = 6.",
        elements: [
          { type: "path", d: "M 400 280 L 400 310", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 430, y: 295, text: "+ 7", color: ORANGE, size: 20 },
          
          { type: "text", x: 400, y: 350, text: "3x = 18", color: TEXT_MAIN, size: 32 },
          
          { type: "path", d: "M 400 380 L 400 410", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 430, y: 395, text: "÷ 3", color: ORANGE, size: 20 },
          
          { type: "text", x: 400, y: 460, text: "x = 6", color: GREEN, size: 48, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Solve 2 times (x + 4) equals 18.",
        rule: "Solve 2(x + 4) = 18.",
        quizQ: "Solve 2(x + 4) = 18.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Equations with Brackets", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Solve 2(x + 4) = 18", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "2(x + 4) = 18", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Divide both sides by 2 first! x + 4 equals 9. Then subtract 4. x equals 5.",
        rule: "Divide both sides by 2: x + 4 = 9. Subtract 4: x = 5.",
        quizQ: "",
        quizA: "Divide both sides by 2: x + 4 = 9. Subtract 4: x = 5.",
        elements: [
          { type: "path", d: "M 400 280 L 400 310", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 430, y: 295, text: "÷ 2", color: ORANGE, size: 20 },
          
          { type: "text", x: 400, y: 350, text: "x + 4 = 9", color: TEXT_MAIN, size: 32 },
          
          { type: "path", d: "M 400 380 L 400 410", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 430, y: 395, text: "- 4", color: ORANGE, size: 20 },
          
          { type: "text", x: 400, y: 460, text: "x = 5", color: GREEN, size: 48, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_4.2: Simultaneous equations
// ------------------------------------------------------------------
data["m8_4.2"] = {
  title: "4.2 Simultaneous equations",
  watermark: "Section 4.2: Simultaneous Equations",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What are simultaneous equations?",
        rule: "What are 'simultaneous' equations?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Simultaneous", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What are 'simultaneous' equations?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "x + y = 10", color: BLUE, size: 32 },
          { type: "text", x: 400, y: 300, text: "x - y = 2", color: BLUE, size: 32 },
          
          { type: "path", d: "M 250 220 C 220 220, 220 275, 200 275 C 220 275, 220 330, 250 330", stroke: TEXT_MAIN, width: 3, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "It's when you have TWO equations and TWO mystery letters at the same time! You have to find the x, y pair that makes BOTH of them true.",
        rule: "It's when you have TWO equations and TWO mystery letters at the same time! You have to find the (x, y) pair that makes BOTH of them true.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 400, text: "TWO equations, TWO letters!", color: GREEN, size: 32, bold: true },
          { type: "text", x: 400, y: 460, text: "Find the (x, y) pair that makes", color: TEXT_SUB, size: 20 },
          { type: "text", x: 400, y: 490, text: "BOTH of them true at the same time.", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "What are the two ways to solve them?",
        rule: "What are the two ways to solve them?",
        quizQ: "What are the two ways to solve them?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Solving Methods", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What are the two ways to solve them?", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "Elimination, where you add or subtract to destroy one letter. Or substitution, where you swap one equation into the other.",
        rule: "Elimination (adding or subtracting to destroy one letter) and substitution (swapping one equation into the other).",
        quizQ: "",
        quizA: "Elimination (adding or subtracting to destroy one letter) and substitution (swapping one equation into the other).",
        elements: [
          { type: "rect", x: 150, y: 220, width: 220, height: 200, fill: "#fef3c7", rx: 10 },
          { type: "text", x: 260, y: 260, text: "1. Elimination", color: ORANGE, size: 24, bold: true },
          { type: "text", x: 260, y: 320, text: "Add or subtract", color: TEXT_MAIN, size: 18 },
          { type: "text", x: 260, y: 350, text: "to DESTROY", color: TEXT_MAIN, size: 18 },
          { type: "text", x: 260, y: 380, text: "one letter!", color: TEXT_MAIN, size: 18 },
          
          { type: "rect", x: 430, y: 220, width: 220, height: 200, fill: "#e0e7ff", rx: 10 },
          { type: "text", x: 540, y: 260, text: "2. Substitution", color: BLUE, size: 24, bold: true },
          { type: "text", x: 540, y: 320, text: "Swap one", color: TEXT_MAIN, size: 18 },
          { type: "text", x: 540, y: 350, text: "equation into", color: TEXT_MAIN, size: 18 },
          { type: "text", x: 540, y: 380, text: "the other!", color: TEXT_MAIN, size: 18 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Let's solve x + y = 10 and x - y = 2.",
        rule: "Solve x + y = 10 and x − y = 2.",
        quizQ: "Solve x + y = 10 and x − y = 2.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Elimination", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Solve x + y = 10 and x - y = 2", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "x + y = 10", color: BLUE, size: 32 },
          { type: "text", x: 400, y: 290, text: "x - y = 2", color: BLUE, size: 32 },
          { type: "text", x: 300, y: 290, text: "+", color: ORANGE, size: 32 },
          { type: "path", d: "M 320 310 L 480 310", stroke: TEXT_MAIN, width: 2, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "Add them together! The y's destroy each other. 2x equals 12, so x is 6. Since 6 + y = 10, y must be 4.",
        rule: "Add them together! The y's destroy each other: 2x = 12, so x = 6. Since 6 + y = 10, y must be 4.",
        quizQ: "",
        quizA: "Add them together! The y's destroy each other: 2x = 12, so x = 6. Since 6 + y = 10, y must be 4.",
        elements: [
          { type: "text", x: 400, y: 350, text: "2x = 12", color: TEXT_MAIN, size: 32 },
          { type: "text", x: 400, y: 400, text: "x = 6", color: RED, size: 32, bold: true },
          
          { type: "text", x: 400, y: 470, text: "If x = 6, then 6 + y = 10", color: TEXT_SUB, size: 20 },
          { type: "text", x: 400, y: 510, text: "y = 4", color: GREEN, size: 32, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_4.3: Inequalities
// ------------------------------------------------------------------
data["m8_4.3"] = {
  title: "4.3 Inequalities",
  watermark: "Section 4.3: Inequalities",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" },
    { id: "card_3", label: "Recall" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How are inequalities different from equations?",
        rule: "How are inequalities different from equations?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Inequalities", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How are inequalities different from equations?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 250, y: 250, text: "x = 4", color: TEXT_MAIN, size: 32 },
          { type: "text", x: 550, y: 250, text: "x < 4", color: BLUE, size: 32 }
        ]
      },
      {
        clear: false,
        narration: "Instead of one exact answer, they give you a whole range! But watch out: if you multiply or divide by a negative, you MUST flip the sign!",
        rule: "Instead of one exact answer, they give you a whole range! (Like 'x is less than 4'). But watch out: if you multiply or divide by a negative, you MUST flip the sign!",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 250, y: 300, text: "One exact answer", color: TEXT_SUB, size: 16 },
          { type: "text", x: 550, y: 300, text: "A whole range of answers!", color: GREEN, size: 16 },
          
          { type: "rect", x: 150, y: 380, width: 500, height: 120, fill: "#fee2e2", rx: 10 },
          { type: "text", x: 400, y: 420, text: "⚠️ WARNING ⚠️", color: RED, size: 28, bold: true },
          { type: "text", x: 400, y: 460, text: "If you multiply or divide by a negative,", color: TEXT_MAIN, size: 20 },
          { type: "text", x: 400, y: 490, text: "you MUST flip the sign!", color: RED, size: 24, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Solve 2x + 3 is less than 11.",
        rule: "Solve 2x + 3 < 11.",
        quizQ: "Solve 2x + 3 < 11.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Solving Inequalities", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Solve 2x + 3 < 11", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "2x + 3 < 11", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Treat it like an equation! Subtract 3: 2x is less than 8. Divide by 2: x is less than 4.",
        rule: "Subtract 3: 2x < 8. Divide by 2: x < 4.",
        quizQ: "",
        quizA: "Subtract 3: 2x < 8. Divide by 2: x < 4.",
        elements: [
          { type: "path", d: "M 400 280 L 400 310", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 430, y: 295, text: "- 3", color: ORANGE, size: 20 },
          
          { type: "text", x: 400, y: 350, text: "2x < 8", color: TEXT_MAIN, size: 32 },
          
          { type: "path", d: "M 400 380 L 400 410", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 430, y: 395, text: "÷ 2", color: ORANGE, size: 20 },
          
          { type: "text", x: 400, y: 460, text: "x < 4", color: GREEN, size: 48, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Solve -x is greater than 4.",
        rule: "Solve −x > 4.",
        quizQ: "Solve −x > 4.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: The Danger Zone", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Solve -x > 4", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "-x > 4", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "We have to divide by negative 1. So the greater-than sign FLIPS to a less-than sign! x is less than negative 4.",
        rule: "x < −4 (We divided by −1, so the > flipped to < !).",
        quizQ: "",
        quizA: "x < −4 (We divided by −1, so the > flipped to < !).",
        elements: [
          { type: "path", d: "M 400 280 L 400 320", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 460, y: 300, text: "÷ -1", color: ORANGE, size: 20 },
          
          { type: "text", x: 400, y: 380, text: "x < -4", color: RED, size: 48, bold: true },
          
          { type: "path", d: "M 400 260 L 400 360", stroke: RED, width: 2, fill: "none", strokeDasharray: "5,5" },
          { type: "text", x: 400, y: 460, text: "The sign FLIPPED!", color: RED, size: 24, bold: true },
          { type: "text", x: 400, y: 500, text: "Because we divided by a negative.", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_3": [
      {
        narration: "What does x is less than 4 actually mean?",
        rule: "What does x < 4 mean?",
        quizQ: "What does x < 4 mean?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Meaning", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What does x < 4 mean?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "x < 4", color: BLUE, size: 48 }
        ]
      },
      {
        clear: false,
        narration: "It means the answer can be ANY number smaller than 4, like 3, 0, or negative 100. It's a whole set of answers!",
        rule: "It means the answer can be ANY number smaller than 4 (like 3, 0, or −100). It's a whole set of answers!",
        quizQ: "",
        quizA: "It means the answer can be ANY number smaller than 4 (like 3, 0, or −100). It's a whole set of answers!",
        elements: [
          // Number line
          { type: "path", d: "M 200 380 L 600 380", stroke: TEXT_MAIN, width: 2, fill: "none" },
          
          { type: "path", d: "M 300 370 L 300 390", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 300, y: 410, text: "2", color: TEXT_MAIN, size: 16 },
          
          { type: "path", d: "M 400 370 L 400 390", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 400, y: 410, text: "3", color: TEXT_MAIN, size: 16 },
          
          { type: "path", d: "M 500 370 L 500 390", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 500, y: 410, text: "4", color: TEXT_MAIN, size: 16 },
          
          // Inequality arrow
          { type: "circle", cx: 500, cy: 380, r: 6, fill: "none", stroke: RED, strokeWidth: 3 },
          { type: "path", d: "M 494 380 L 200 380", stroke: RED, width: 4, fill: "none" },
          { type: "path", d: "M 220 370 L 200 380 L 220 390", stroke: RED, width: 4, fill: "none" },
          
          { type: "text", x: 400, y: 480, text: "ANY number smaller than 4!", color: GREEN, size: 28, bold: true },
          { type: "text", x: 400, y: 520, text: "(Like 3, 0, or -100)", color: TEXT_SUB, size: 20 }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 8 Chapter 4!");
