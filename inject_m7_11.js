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
// m7_11.1: Using ratios
// ------------------------------------------------------------------
data["m7_11.1"] = {
  title: "11.1 Using ratios",
  watermark: "Section 11.1: Ratios",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do you share money in a ratio?",
        rule: "How do you share money in a ratio?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Sharing in a Ratio", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you share money in a ratio?", color: TEXT_MAIN, size: 24 },
          
          { type: "rect", x: 250, y: 250, width: 40, height: 40, fill: BLUE },
          { type: "rect", x: 300, y: 250, width: 40, height: 40, fill: BLUE },
          
          { type: "text", x: 370, y: 275, text: ":", color: TEXT_MAIN, size: 30 },
          
          { type: "rect", x: 410, y: 250, width: 40, height: 40, fill: ORANGE },
          { type: "rect", x: 460, y: 250, width: 40, height: 40, fill: ORANGE },
          { type: "rect", x: 510, y: 250, width: 40, height: 40, fill: ORANGE }
        ]
      },
      {
        clear: false,
        narration: "Add up all the parts to find the total shares. Divide the money to find ONE share. Then multiply!",
        rule: "Add up all the parts to find the total number of 'shares'. Divide the money by the total shares to find what ONE share is worth. Then multiply!",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 250 310 L 550 310", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "path", d: "M 400 310 L 400 330", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 400, y: 350, text: "Total = 5 shares", color: GREEN, size: 20 },
          
          { type: "text", x: 400, y: 440, text: "1. Add to find total shares", color: TEXT_SUB, size: 20 },
          { type: "text", x: 400, y: 470, text: "2. Divide to find ONE share", color: TEXT_SUB, size: 20 },
          { type: "text", x: 400, y: 500, text: "3. Multiply!", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's share £60 in the ratio 2 to 3.",
        rule: "Share £60 in the ratio 2 : 3.",
        quizQ: "Share £60 in the ratio 2 : 3.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Sharing Money", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Share £60 in the ratio 2 : 3.", color: TEXT_MAIN, size: 24 },
          
          { type: "rect", x: 250, y: 200, width: 50, height: 50, fill: "none", stroke: BLUE, strokeWidth: 2 },
          { type: "rect", x: 310, y: 200, width: 50, height: 50, fill: "none", stroke: BLUE, strokeWidth: 2 },
          
          { type: "text", x: 390, y: 230, text: ":", color: TEXT_MAIN, size: 30 },
          
          { type: "rect", x: 420, y: 200, width: 50, height: 50, fill: "none", stroke: ORANGE, strokeWidth: 2 },
          { type: "rect", x: 480, y: 200, width: 50, height: 50, fill: "none", stroke: ORANGE, strokeWidth: 2 },
          { type: "rect", x: 540, y: 200, width: 50, height: 50, fill: "none", stroke: ORANGE, strokeWidth: 2 },
          
          { type: "path", d: "M 250 270 L 590 270", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "path", d: "M 420 270 L 420 290", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 420, y: 310, text: "5 parts = £60", color: TEXT_MAIN, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "5 parts is £60, so 1 part is £12. The shares are £24 and £36.",
        rule: "Total parts = 5. One part = £12. The shares are 2×12 (£24) and 3×12 (£36).",
        quizQ: "",
        quizA: "Total parts = 5. One part = £12. The shares are 2×12 (£24) and 3×12 (£36).",
        elements: [
          { type: "text", x: 420, y: 350, text: "1 part = 60 ÷ 5 = £12", color: GREEN, size: 20 },
          
          // Fill boxes
          { type: "text", x: 275, y: 230, text: "12", color: BLUE, size: 16 },
          { type: "text", x: 335, y: 230, text: "12", color: BLUE, size: 16 },
          
          { type: "text", x: 445, y: 230, text: "12", color: ORANGE, size: 16 },
          { type: "text", x: 505, y: 230, text: "12", color: ORANGE, size: 16 },
          { type: "text", x: 565, y: 230, text: "12", color: ORANGE, size: 16 },
          
          { type: "text", x: 400, y: 450, text: "2 × 12 = £24", color: BLUE, size: 24, bold: true },
          { type: "text", x: 400, y: 490, text: "3 × 12 = £36", color: ORANGE, size: 24, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "How do we simplify a ratio?",
        rule: "Simplify 12 : 18.",
        quizQ: "Simplify 12 : 18.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Simplifying", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Simplify 12 : 18.", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 320, y: 280, text: "12", color: BLUE, size: 40 },
          { type: "text", x: 400, y: 275, text: ":", color: TEXT_MAIN, size: 40 },
          { type: "text", x: 480, y: 280, text: "18", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Divide both sides by the same number. They both divide by 6! The answer is 2 : 3.",
        rule: "Divide both by 6 to get 2 : 3.",
        quizQ: "",
        quizA: "Divide both by 6 to get 2 : 3.",
        elements: [
          { type: "path", d: "M 320 310 L 320 350", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 320, y: 370, text: "÷ 6", color: ORANGE, size: 20 },
          
          { type: "path", d: "M 480 310 L 480 350", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 480, y: 370, text: "÷ 6", color: ORANGE, size: 20 },
          
          { type: "text", x: 400, y: 460, text: "2 : 3", color: GREEN, size: 48, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_11.2: Direct and inverse proportion
// ------------------------------------------------------------------
data["m7_11.2"] = {
  title: "11.2 Direct and inverse proportion",
  watermark: "Section 11.2: Proportion",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What is the difference between direct and inverse proportion?",
        rule: "What is the difference between direct and inverse proportion?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Two Types of Proportion", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is the difference between direct and inverse proportion?", color: TEXT_MAIN, size: 22 },
          
          // Direct
          { type: "text", x: 250, y: 220, text: "Direct", color: BLUE, size: 24, bold: true },
          { type: "path", d: "M 220 260 L 220 230 L 210 240 M 220 230 L 230 240", stroke: BLUE, width: 3, fill: "none" },
          { type: "text", x: 220, y: 290, text: "Pens", color: TEXT_MAIN, size: 18 },
          { type: "path", d: "M 280 260 L 280 230 L 270 240 M 280 230 L 290 240", stroke: BLUE, width: 3, fill: "none" },
          { type: "text", x: 280, y: 290, text: "Cost", color: TEXT_MAIN, size: 18 },
          
          // Inverse
          { type: "text", x: 550, y: 220, text: "Inverse", color: RED, size: 24, bold: true },
          { type: "path", d: "M 520 260 L 520 230 L 510 240 M 520 230 L 530 240", stroke: RED, width: 3, fill: "none" },
          { type: "text", x: 520, y: 290, text: "Workers", color: TEXT_MAIN, size: 18 },
          { type: "path", d: "M 580 230 L 580 260 L 570 250 M 580 260 L 590 250", stroke: RED, width: 3, fill: "none" },
          { type: "text", x: 580, y: 290, text: "Time", color: TEXT_MAIN, size: 18 }
        ]
      },
      {
        clear: false,
        narration: "Direct means they grow together. Inverse means they do the opposite!",
        rule: "Direct: they grow together! (Double the pens, double the cost). Inverse: they do the opposite! (Double the workers, HALF the time).",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 250, y: 350, text: "They grow together!", color: BLUE, size: 18 },
          { type: "text", x: 250, y: 380, text: "Double the pens,", color: TEXT_SUB, size: 16 },
          { type: "text", x: 250, y: 400, text: "double the cost.", color: TEXT_SUB, size: 16 },
          
          { type: "text", x: 550, y: 350, text: "They do the opposite!", color: RED, size: 18 },
          { type: "text", x: 550, y: 380, text: "Double the workers,", color: TEXT_SUB, size: 16 },
          { type: "text", x: 550, y: 400, text: "HALF the time.", color: TEXT_SUB, size: 16 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's solve a direct proportion problem.",
        rule: "Direct: 4 pens cost £10. How much do 6 pens cost?",
        quizQ: "Direct: 4 pens cost £10. How much do 6 pens cost?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Direct Proportion", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "4 pens cost £10. How much do 6 pens cost?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 250, text: "4 pens", color: BLUE, size: 24 },
          { type: "path", d: "M 360 240 L 440 240", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "path", d: "M 430 230 L 440 240 L 430 250", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 500, y: 250, text: "£10", color: BLUE, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "Find the cost of ONE pen first! 10 divided by 4 is £2.50. Then multiply by 6.",
        rule: "1 pen costs £2.50. So 6 pens cost £15.",
        quizQ: "",
        quizA: "1 pen costs £2.50. So 6 pens cost £15.",
        elements: [
          { type: "text", x: 300, y: 330, text: "1 pen", color: ORANGE, size: 24 },
          { type: "path", d: "M 360 320 L 440 320", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "path", d: "M 430 310 L 440 320 L 430 330", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 500, y: 330, text: "£2.50", color: ORANGE, size: 24 },
          { type: "text", x: 600, y: 330, text: "(10 ÷ 4)", color: TEXT_SUB, size: 16 },
          
          { type: "text", x: 300, y: 410, text: "6 pens", color: GREEN, size: 24, bold: true },
          { type: "path", d: "M 360 400 L 440 400", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "path", d: "M 430 390 L 440 400 L 430 410", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 500, y: 410, text: "£15", color: GREEN, size: 24, bold: true },
          { type: "text", x: 600, y: 410, text: "(2.50 × 6)", color: TEXT_SUB, size: 16 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Let's solve an inverse proportion problem.",
        rule: "Inverse: 8 workers take 6 days to build a wall. How long for 12 workers?",
        quizQ: "Inverse: 8 workers take 6 days to build a wall. How long for 12 workers?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Inverse Proportion", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "8 workers take 6 days. How long for 12 workers?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 250, text: "8 workers", color: RED, size: 24 },
          { type: "path", d: "M 370 240 L 430 240", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "path", d: "M 420 230 L 430 240 L 420 250", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 500, y: 250, text: "6 days", color: RED, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "Find the total worker-days first! 8 times 6 is 48. Then divide that by 12 workers.",
        rule: "Total worker-days = 8 × 6 = 48. For 12 workers: 48 ÷ 12 = 4 days.",
        quizQ: "",
        quizA: "Total worker-days = 8 × 6 = 48. For 12 workers: 48 ÷ 12 = 4 days.",
        elements: [
          { type: "text", x: 400, y: 330, text: "Total job = 8 × 6 = 48 worker-days", color: ORANGE, size: 24 },
          
          { type: "text", x: 300, y: 430, text: "12 workers", color: GREEN, size: 24, bold: true },
          { type: "path", d: "M 370 420 L 430 420", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "path", d: "M 420 410 L 430 420 L 420 430", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 500, y: 430, text: "4 days", color: GREEN, size: 24, bold: true },
          { type: "text", x: 600, y: 430, text: "(48 ÷ 12)", color: TEXT_SUB, size: 16 }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 7 Chapter 11!");
