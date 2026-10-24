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
// m7_2.1: Constructing expressions
// ------------------------------------------------------------------
data["m7_2.1"] = {
  title: "2.1 Constructing expressions",
  watermark: "Section 2.1: Algebra Parts",
  subtopics: [
    { id: "parts", label: "Parts of an Expression" }
  ],
  scenes: {
    "parts": [
      {
        narration: "Algebra is like a secret code! Let's look at the different parts of an expression.",
        rule: "An expression is made of variables, coefficients, and constants.",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "Parts of an Expression", color: PURPLE, size: 24 },
          { type: "text", x: 400, y: 250, text: "3x + 8", color: TEXT_MAIN, size: 48 }
        ]
      },
      {
        clear: false,
        narration: "The letter 'x' is called a VARIABLE. It's a mystery number that can change (vary)!",
        rule: "Variable = A letter representing an unknown number.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 415 290 L 415 350", stroke: BLUE, width: 3, fill: "none" },
          { type: "text", x: 415, y: 380, text: "VARIABLE", color: BLUE, size: 20 },
          { type: "text", x: 415, y: 410, text: "(The mystery letter)", color: TEXT_SUB, size: 14 }
        ]
      },
      {
        clear: false,
        narration: "The number stuck to the front of the letter is the COEFFICIENT. It tells us how many x's we have.",
        rule: "Coefficient = The number multiplying the variable.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 370 200 L 370 150 L 250 150", stroke: GREEN, width: 3, fill: "none" },
          { type: "text", x: 250, y: 120, text: "COEFFICIENT", color: GREEN, size: 20 },
          { type: "text", x: 250, y: 180, text: "(Multiplier)", color: TEXT_SUB, size: 14 }
        ]
      },
      {
        clear: false,
        narration: "The normal number on its own is the CONSTANT. Its value never changes!",
        rule: "Constant = A fixed number on its own.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 480 200 L 480 150 L 600 150", stroke: ORANGE, width: 3, fill: "none" },
          { type: "text", x: 600, y: 120, text: "CONSTANT", color: ORANGE, size: 20 },
          { type: "text", x: 600, y: 180, text: "(Normal number)", color: TEXT_SUB, size: 14 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_2.2: Using expressions and formulae
// ------------------------------------------------------------------
data["m7_2.2"] = {
  title: "2.2 Using expressions and formulae",
  watermark: "Section 2.2: Substituting",
  subtopics: [
    { id: "substitute", label: "Substituting Numbers" }
  ],
  scenes: {
    "substitute": [
      {
        narration: "Substituting just means swapping the letters for real numbers!",
        rule: "Swap the letters for numbers, then do the math.",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "Substituting", color: BLUE, size: 24 },
          { type: "text", x: 400, y: 180, text: "Find v when u = 8 and t = 15", color: TEXT_SUB, size: 18 },
          { type: "text", x: 400, y: 260, text: "v = u + 10t", color: TEXT_MAIN, size: 36 }
        ]
      },
      {
        clear: false,
        narration: "First, let's swap 'u' for 8 and 't' for 15. Remember, 10t means 10 × t!",
        rule: "10t means 10 multiplied by t.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 350 290 L 350 330", stroke: ORANGE, width: 2, fill: "none", dash: "4,4" },
          { type: "path", d: "M 460 290 L 460 330", stroke: ORANGE, width: 2, fill: "none", dash: "4,4" },
          { type: "text", x: 400, y: 360, text: "v = 8 + 10 × 15", color: ORANGE, size: 36 }
        ]
      },
      {
        clear: false,
        narration: "Follow BIDMAS! We must do the multiplying BEFORE the adding.",
        rule: "Always multiply before adding.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 410 390 L 410 410 L 510 410 L 510 390", stroke: RED, width: 2, fill: "none" },
          { type: "text", x: 460, y: 440, text: "150", color: RED, size: 24 },
          { type: "text", x: 400, y: 500, text: "v = 8 + 150 = 158", color: GREEN, size: 36 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_2.3: Expanding brackets
// ------------------------------------------------------------------
data["m7_2.3"] = {
  title: "2.3 Expanding brackets",
  watermark: "Section 2.3: Expanding",
  subtopics: [
    { id: "expand", label: "Expanding Brackets" }
  ],
  scenes: {
    "expand": [
      {
        narration: "To expand a bracket, multiply the outside number by EVERY inside number!",
        rule: "Multiply the outside factor by every term inside.",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "Expanding Brackets", color: ORANGE, size: 24 },
          { type: "text", x: 400, y: 250, text: "4 ( 2a - 5 )", color: TEXT_MAIN, size: 48 }
        ]
      },
      {
        clear: false,
        narration: "First, multiply the 4 by the 2a.",
        rule: "4 × 2a = 8a",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 350 210 Q 380 150 420 210", stroke: BLUE, width: 3, fill: "none" },
          { type: "path", d: "M 410 200 L 420 210 L 425 195", stroke: BLUE, width: 3, fill: "none" },
          { type: "text", x: 385, y: 150, text: "×", color: BLUE, size: 20 },
          { type: "text", x: 300, y: 380, text: "8a", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Next, multiply the 4 by the -5.",
        rule: "4 × -5 = -20",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 340 280 Q 400 350 480 280", stroke: RED, width: 3, fill: "none" },
          { type: "path", d: "M 465 290 L 480 280 L 470 270", stroke: RED, width: 3, fill: "none" },
          { type: "text", x: 410, y: 340, text: "×", color: RED, size: 20 },
          { type: "text", x: 400, y: 380, text: "-", color: TEXT_MAIN, size: 40 },
          { type: "text", x: 480, y: 380, text: "20", color: RED, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "And that's it! The expanded expression is 8a - 20.",
        rule: "The brackets are gone!",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "rect", x: 250, y: 330, width: 300, height: 70, fill: "none", stroke: GREEN, strokeWidth: 4, rx: 10 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_2.4: Factorising
// ------------------------------------------------------------------
data["m7_2.4"] = {
  title: "2.4 Factorising",
  watermark: "Section 2.4: Factorising",
  subtopics: [
    { id: "factorise", label: "Factorising" }
  ],
  scenes: {
    "factorise": [
      {
        narration: "Factorising is the exact opposite of expanding! We want to put the brackets BACK IN.",
        rule: "Find the biggest thing both terms share (the HCF).",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "Factorising", color: GREEN, size: 24 },
          { type: "text", x: 400, y: 200, text: "6x² + 15x", color: TEXT_MAIN, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "What is the biggest number that divides into both 6 and 15? It's 3!",
        rule: "The HCF of 6 and 15 is 3.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 280, text: "Numbers share: 3", color: BLUE, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "Do they share any letters? Yes, they both have an 'x'!",
        rule: "They both contain an 'x'.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 320, text: "Letters share: x", color: ORANGE, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "So we pull '3x' OUTSIDE the brackets. What's left inside? 6x² ÷ 3x = 2x. And 15x ÷ 3x = 5.",
        rule: "Pull the HCF outside the brackets.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 420, text: "3x ( 2x + 5 )", color: GREEN, size: 48 },
          { type: "path", d: "M 320 460 L 320 480 L 480 480 L 480 460", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "text", x: 400, y: 510, text: "Expand to check your answer!", color: TEXT_SUB, size: 14 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_2.5: Constructing and solving equations
// ------------------------------------------------------------------
data["m7_2.5"] = {
  title: "2.5 Constructing and solving equations",
  watermark: "Section 2.5: Equations",
  subtopics: [
    { id: "balance", label: "Balancing Scales" }
  ],
  scenes: {
    "balance": [
      {
        narration: "An equation is like a perfectly balanced scale. Whatever you do to one side, you MUST do to the other!",
        rule: "Keep the scale balanced!",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "Solving Equations", color: RED, size: 24 },
          
          // The Scale
          { type: "path", d: "M 400 400 L 360 480 L 440 480 Z", fill: "#94a3b8" },
          { type: "path", d: "M 200 400 L 600 400", stroke: "#475569", width: 8, fill: "none" },
          
          // Left Box
          { type: "rect", x: 200, y: 320, width: 120, height: 80, fill: "#e0f2fe", stroke: BLUE, strokeWidth: 3, rx: 8 },
          { type: "text", x: 260, y: 360, text: "3x + 9", color: BLUE, size: 20 },
          
          // Right Box
          { type: "rect", x: 480, y: 320, width: 120, height: 80, fill: "#fef2f2", stroke: RED, strokeWidth: 3, rx: 8 },
          { type: "text", x: 540, y: 360, text: "24", color: RED, size: 20 },
          
          { type: "text", x: 400, y: 200, text: "3x + 9 = 24", color: TEXT_MAIN, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "We want 'x' all by itself. First, let's get rid of the +9 by subtracting 9 from BOTH sides.",
        rule: "Do the inverse operation (-9).",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 250, text: "- 9", color: ORANGE, size: 20 },
          
          // Cross out +9
          { type: "path", d: "M 285 350 L 315 370", stroke: ORANGE, width: 3, fill: "none" },
          { type: "path", d: "M 315 350 L 285 370", stroke: ORANGE, width: 3, fill: "none" },
          
          // Change 24 to 15
          { type: "path", d: "M 525 350 L 555 370", stroke: ORANGE, width: 3, fill: "none" },
          { type: "path", d: "M 555 350 L 525 370", stroke: ORANGE, width: 3, fill: "none" },
          { type: "text", x: 580, y: 360, text: "15", color: RED, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "Now we have 3x = 15. To find one 'x', we divide both sides by 3!",
        rule: "Divide by the coefficient (3).",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 280, text: "÷ 3", color: GREEN, size: 20 },
          
          // Change 3x to x
          { type: "path", d: "M 235 350 L 255 370", stroke: GREEN, width: 3, fill: "none" },
          { type: "path", d: "M 255 350 L 235 370", stroke: GREEN, width: 3, fill: "none" },
          
          // Change 15 to 5
          { type: "path", d: "M 570 350 L 590 370", stroke: GREEN, width: 3, fill: "none" },
          { type: "path", d: "M 590 350 L 570 370", stroke: GREEN, width: 3, fill: "none" },
          { type: "text", x: 610, y: 360, text: "5", color: RED, size: 20 },
          
          { type: "text", x: 400, y: 520, text: "x = 5", color: GREEN, size: 40 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_2.6: Inequalities
// ------------------------------------------------------------------
data["m7_2.6"] = {
  title: "2.6 Inequalities",
  watermark: "Section 2.6: Number Lines",
  subtopics: [
    { id: "number_line", label: "Drawing Inequalities" }
  ],
  scenes: {
    "number_line": [
      {
        narration: "Inequalities show a RANGE of answers. Let's draw -2 ≤ x < 3 on a number line.",
        rule: "≤ means 'less than or equal to'. < means 'strictly less than'.",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "Inequalities on a Number Line", color: PURPLE, size: 24 },
          { type: "text", x: 400, y: 200, text: "-2 ≤ x < 3", color: TEXT_MAIN, size: 40 },
          
          // Number Line Base
          { type: "path", d: "M 100 400 L 700 400", stroke: TEXT_MAIN, width: 4, fill: "none" },
          // Ticks
          { type: "path", d: "M 140 390 L 140 410", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 140, y: 430, text: "-3", color: TEXT_MAIN, size: 14 },
          { type: "path", d: "M 220 390 L 220 410", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 220, y: 430, text: "-2", color: TEXT_MAIN, size: 14 },
          { type: "path", d: "M 300 390 L 300 410", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 300, y: 430, text: "-1", color: TEXT_MAIN, size: 14 },
          { type: "path", d: "M 380 390 L 380 410", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 380, y: 430, text: "0", color: TEXT_MAIN, size: 14 },
          { type: "path", d: "M 460 390 L 460 410", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 460, y: 430, text: "1", color: TEXT_MAIN, size: 14 },
          { type: "path", d: "M 540 390 L 540 410", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 540, y: 430, text: "2", color: TEXT_MAIN, size: 14 },
          { type: "path", d: "M 620 390 L 620 410", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 620, y: 430, text: "3", color: TEXT_MAIN, size: 14 }
        ]
      },
      {
        clear: false,
        narration: "The ≤ symbol means -2 is INCLUDED. So we draw a SOLID dot at -2.",
        rule: "≤ or ≥ gets a solid colored dot.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "circle", cx: 220, cy: 400, r: 12, fill: BLUE, stroke: BLUE, width: 2 },
          { type: "path", d: "M 320 220 L 250 220 L 250 370", stroke: BLUE, width: 2, fill: "none", dash: "5,5" },
          { type: "path", d: "M 240 360 L 250 370 L 260 360", stroke: BLUE, width: 2, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "The < symbol means 3 is NOT included. So we draw an OPEN dot at 3.",
        rule: "< or > gets an open empty dot.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "circle", cx: 620, cy: 400, r: 12, fill: BOX_BG, stroke: RED, width: 4 },
          { type: "path", d: "M 480 220 L 620 220 L 620 370", stroke: RED, width: 2, fill: "none", dash: "5,5" },
          { type: "path", d: "M 610 360 L 620 370 L 630 360", stroke: RED, width: 2, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "Finally, draw a line connecting them. Any number on this line makes the inequality true!",
        rule: "The line shows all the possible answers.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 220 400 L 608 400", stroke: GREEN, width: 6, fill: "none" },
          { type: "text", x: 420, y: 480, text: "Integers inside: -2, -1, 0, 1, 2", color: GREEN, size: 20 }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 7 Chapter 2!");
