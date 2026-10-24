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
// m8_2.5: Simplifying algebraic fractions
// ------------------------------------------------------------------
data["m8_2.5"] = {
  title: "2.5 Simplifying algebraic fractions",
  watermark: "Section 2.5: Fractions",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do you simplify an algebraic fraction?",
        rule: "How do you simplify an algebraic fraction?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Algebraic Fractions", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you simplify an algebraic fraction?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "4x", color: BLUE, size: 40 },
          { type: "path", d: "M 370 280 L 430 280", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 400, y: 330, text: "2", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Factor the top and bottom, then cancel the common factors!",
        rule: "Factor numerator and denominator, then cancel common factors (not terms that are only added).",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 460 290 L 500 290", stroke: ORANGE, width: 3, fill: "none" },
          { type: "path", d: "M 490 280 L 500 290 L 490 300", stroke: ORANGE, width: 3, fill: "none" },
          
          { type: "text", x: 550, y: 290, text: "2x", color: GREEN, size: 40, bold: true },
          
          { type: "text", x: 400, y: 450, text: "Cancel common factors!", color: GREEN, size: 28, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's simplify one.",
        rule: "Simplify 6x / 3.",
        quizQ: "Simplify 6x / 3.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Simplifying", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Simplify 6x / 3.", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "6x", color: BLUE, size: 40 },
          { type: "path", d: "M 370 280 L 430 280", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 400, y: 330, text: "3", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "6 divided by 3 is 2. So the answer is 2x.",
        rule: "2x.",
        quizQ: "",
        quizA: "2x.",
        elements: [
          { type: "path", d: "M 370 260 L 410 240", stroke: RED, width: 2, fill: "none" },
          { type: "text", x: 370, y: 230, text: "2", color: RED, size: 20 },
          
          { type: "path", d: "M 390 340 L 420 320", stroke: RED, width: 2, fill: "none" },
          { type: "text", x: 420, y: 340, text: "1", color: RED, size: 20 },
          
          { type: "text", x: 400, y: 450, text: "= 2x", color: GREEN, size: 48, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Why can't you cancel the x here?",
        rule: "Why can’t you cancel the x in (x + 2)/x?",
        quizQ: "Why can’t you cancel the x in (x + 2)/x?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: The Danger Zone", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Why can't you cancel the x in this fraction?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "x + 2", color: BLUE, size: 40 },
          { type: "path", d: "M 350 280 L 450 280", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 400, y: 330, text: "x", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Because x is ADDED on the top, not multiplied! You can only cancel common factors.",
        rule: "x is added in the numerator, not a common factor of the whole top.",
        quizQ: "",
        quizA: "x is added in the numerator, not a common factor of the whole top.",
        elements: [
          // Big red cross
          { type: "path", d: "M 360 230 L 400 270", stroke: RED, width: 4, fill: "none" },
          { type: "path", d: "M 400 230 L 360 270", stroke: RED, width: 4, fill: "none" },
          
          { type: "path", d: "M 380 310 L 420 350", stroke: RED, width: 4, fill: "none" },
          { type: "path", d: "M 420 310 L 380 350", stroke: RED, width: 4, fill: "none" },
          
          { type: "text", x: 400, y: 420, text: "NO!", color: RED, size: 40, bold: true },
          { type: "text", x: 400, y: 480, text: "You can only cancel MULTIPLIERS (factors).", color: TEXT_SUB, size: 20 },
          { type: "text", x: 400, y: 510, text: "x is being ADDED here.", color: TEXT_SUB, size: 20 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_2.6: Deriving and using formulae
// ------------------------------------------------------------------
data["m8_2.6"] = {
  title: "2.6 Deriving and using formulae",
  watermark: "Section 2.6: Formulae",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What is a formula?",
        rule: "What is a formula?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Formulae", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is a formula?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 280, text: "A = πr²", color: BLUE, size: 48 }
        ]
      },
      {
        clear: false,
        narration: "It's an equation that links quantities together! You can substitute numbers, or rearrange it.",
        rule: "An equation that links quantities, such as A = πr². You can substitute, or rearrange to change the subject.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 420, text: "An equation that links quantities!", color: GREEN, size: 28, bold: true },
          { type: "text", x: 400, y: 480, text: "You can substitute numbers in,", color: TEXT_SUB, size: 20 },
          { type: "text", x: 400, y: 510, text: "or rearrange it to change the subject.", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's change the subject of a formula.",
        rule: "Make u the subject of v = u + at.",
        quizQ: "Make u the subject of v = u + at.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Rearranging", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Make u the subject of v = u + at.", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 280, text: "v = u + at", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "We want 'u' all by itself. Subtract 'at' from both sides! u = v - at.",
        rule: "u = v − at.",
        quizQ: "",
        quizA: "u = v − at.",
        elements: [
          { type: "path", d: "M 400 320 L 400 360", stroke: ORANGE, width: 3, fill: "none" },
          { type: "text", x: 400, y: 340, text: "- at", color: ORANGE, size: 16 },
          
          { type: "text", x: 400, y: 420, text: "v - at = u", color: TEXT_MAIN, size: 30 },
          
          { type: "text", x: 400, y: 480, text: "u = v - at", color: GREEN, size: 40, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Let's try a harder one.",
        rule: "Make r the subject of A = πr² (r > 0).",
        quizQ: "Make r the subject of A = πr² (r > 0).",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Harder Rearranging", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Make r the subject of A = πr²", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "A = πr²", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "First divide by pi. Then square root both sides! r = square root of A over pi.",
        rule: "r = √(A/π).",
        quizQ: "",
        quizA: "r = √(A/π).",
        elements: [
          { type: "path", d: "M 400 280 L 400 310", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 430, y: 295, text: "÷ π", color: ORANGE, size: 16 },
          
          { type: "text", x: 400, y: 340, text: "A / π = r²", color: TEXT_MAIN, size: 30 },
          
          { type: "path", d: "M 400 370 L 400 400", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 430, y: 385, text: "Square root", color: ORANGE, size: 16 },
          
          { type: "text", x: 400, y: 460, text: "r = √(A / π)", color: GREEN, size: 40, bold: true }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 8 Chapter 2 (2.5 & 2.6)!");
