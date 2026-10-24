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
// m8_6.1: Data collection and sampling
// ------------------------------------------------------------------
data["m8_6.1"] = {
  title: "6.1 Data collection and sampling",
  watermark: "Section 6.1: Sampling",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "Why do we sample instead of asking everyone?",
        rule: "Why do we 'sample' instead of asking everyone?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Sampling", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "Why do we 'sample' instead of asking everyone?", color: TEXT_MAIN, size: 24 },
          
          // Big crowd
          { type: "circle", cx: 200, cy: 250, r: 10, fill: BLUE },
          { type: "circle", cx: 230, cy: 250, r: 10, fill: BLUE },
          { type: "circle", cx: 260, cy: 250, r: 10, fill: BLUE },
          { type: "circle", cx: 215, cy: 280, r: 10, fill: BLUE },
          { type: "circle", cx: 245, cy: 280, r: 10, fill: BLUE },
          { type: "circle", cx: 230, cy: 310, r: 10, fill: BLUE },
          { type: "text", x: 230, y: 350, text: "Everyone (Census)", color: TEXT_SUB, size: 16 },
          
          { type: "path", d: "M 320 280 L 480 280", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 460 270 L 480 280 L 460 290", stroke: TEXT_MAIN, width: 3, fill: "none" },
          
          // Sample
          { type: "circle", cx: 550, cy: 280, r: 10, fill: ORANGE },
          { type: "text", x: 550, y: 320, text: "Sample", color: ORANGE, size: 20, bold: true }
        ]
      },
      {
        clear: false,
        narration: "Asking everyone takes way too long! A good sample is like tasting one spoonful of soup to know if the whole pot is good.",
        rule: "Asking everyone (a census) takes way too long! A good sample is like tasting one spoonful of soup to know if the whole pot is good.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 420, text: "Asking everyone takes way too long!", color: RED, size: 24, bold: true },
          { type: "text", x: 400, y: 480, text: "A good sample is like tasting one spoonful", color: GREEN, size: 20 },
          { type: "text", x: 400, y: 510, text: "of soup to know if the whole pot is good.", color: GREEN, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "What makes a sample random?",
        rule: "What makes a sample 'random'?",
        quizQ: "What makes a sample 'random'?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Randomness", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What makes a sample 'random'?", color: TEXT_MAIN, size: 24 },
          
          // Hat with names
          { type: "path", d: "M 350 250 L 450 250 L 430 350 L 370 350 Z", fill: "#475569" },
          { type: "path", d: "M 320 350 L 480 350 L 480 370 L 320 370 Z", fill: "#334155" },
          { type: "rect", x: 380, y: 220, width: 40, height: 30, fill: "white", stroke: TEXT_MAIN, strokeWidth: 1 },
          { type: "text", x: 400, y: 240, text: "Name", color: TEXT_MAIN, size: 10 }
        ]
      },
      {
        clear: false,
        narration: "It means every single person has the exact same chance of being picked, like drawing names from a hat!",
        rule: "It means every single person has the exact same chance of being picked—like drawing names from a hat.",
        quizQ: "",
        quizA: "It means every single person has the exact same chance of being picked—like drawing names from a hat.",
        elements: [
          { type: "text", x: 400, y: 430, text: "EVERY person has the EXACT same chance", color: GREEN, size: 28, bold: true },
          { type: "text", x: 400, y: 470, text: "of being picked!", color: GREEN, size: 28, bold: true },
          { type: "text", x: 400, y: 520, text: "(Like drawing names from a hat)", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "What is stratified sampling?",
        rule: "What is 'stratified' sampling?",
        quizQ: "What is 'stratified' sampling?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Stratified Sampling", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is 'stratified' sampling?", color: TEXT_MAIN, size: 24 },
          
          { type: "rect", x: 150, y: 220, width: 200, height: 150, fill: "#e0e7ff", rx: 10 },
          { type: "text", x: 250, y: 260, text: "Whole School", color: BLUE, size: 20, bold: true },
          { type: "text", x: 250, y: 310, text: "40% Year 8s", color: TEXT_MAIN, size: 18 },
          { type: "text", x: 250, y: 340, text: "60% Others", color: TEXT_MAIN, size: 18 },
          
          { type: "path", d: "M 370 295 L 430 295", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 420 285 L 430 295 L 420 305", stroke: TEXT_MAIN, width: 3, fill: "none" },
          
          { type: "rect", x: 450, y: 220, width: 200, height: 150, fill: "#fef3c7", rx: 10 },
          { type: "text", x: 550, y: 260, text: "Our Sample", color: ORANGE, size: 20, bold: true }
        ]
      },
      {
        clear: false,
        narration: "It's keeping things fair! If the school is 40% Year 8s, then 40% of the people you ask should be Year 8s too.",
        rule: "It's keeping things fair! If the school is 40% Year 8s, then 40% of the people you ask should be Year 8s too.",
        quizQ: "",
        quizA: "It's keeping things fair! If the school is 40% Year 8s, then 40% of the people you ask should be Year 8s too.",
        elements: [
          { type: "text", x: 550, y: 310, text: "40% Year 8s", color: GREEN, size: 18, bold: true },
          { type: "text", x: 550, y: 340, text: "60% Others", color: GREEN, size: 18, bold: true },
          
          { type: "text", x: 400, y: 440, text: "It's keeping things fair!", color: ORANGE, size: 28, bold: true },
          { type: "text", x: 400, y: 490, text: "The sample matches the proportions of the whole group.", color: TEXT_SUB, size: 20 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m8_6.2: Bias
// ------------------------------------------------------------------
data["m8_6.2"] = {
  title: "6.2 Bias",
  watermark: "Section 6.2: Bias",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What is bias?",
        rule: "What is 'bias'?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Bias", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is 'bias'?", color: TEXT_MAIN, size: 24 },
          
          // Slanted scales
          { type: "path", d: "M 400 350 L 400 250", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "path", d: "M 320 280 L 480 220", stroke: TEXT_MAIN, width: 4, fill: "none" }, // Slanted
          { type: "rect", x: 300, y: 280, width: 40, height: 40, fill: RED },
          { type: "rect", x: 460, y: 220, width: 40, height: 10, fill: BLUE }
        ]
      },
      {
        clear: false,
        narration: "It's when a survey is unfair and slanted! It happens if you ask the wrong people, or if you ask trick questions.",
        rule: "It's when a survey is unfair and slanted! It happens if you ask the wrong people, or if you ask trick questions.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 420, text: "It's when a survey is UNFAIR and SLANTED!", color: RED, size: 28, bold: true },
          { type: "text", x: 400, y: 480, text: "It happens if you ask the wrong people,", color: TEXT_SUB, size: 20 },
          { type: "text", x: 400, y: 510, text: "or if you ask trick questions.", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Give an example of a biased sample.",
        rule: "Give an example of a biased sample.",
        quizQ: "Give an example of a biased sample.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Spotting Bias", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Give an example of a biased sample.", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "Asking only people at a gym if they like exercising! They obviously do, but it doesn't represent everyone else.",
        rule: "Asking only people at a gym if they like exercising! (They obviously do, but it doesn't represent everyone else).",
        quizQ: "",
        quizA: "Asking only people at a gym if they like exercising! (They obviously do, but it doesn't represent everyone else).",
        elements: [
          { type: "rect", x: 250, y: 220, width: 300, height: 120, fill: "#fee2e2", rx: 10 },
          { type: "text", x: 400, y: 260, text: "Asking only people at a GYM", color: RED, size: 20, bold: true },
          { type: "text", x: 400, y: 300, text: "if they like exercising!", color: RED, size: 20, bold: true },
          
          { type: "text", x: 400, y: 400, text: "They obviously do!", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 400, y: 450, text: "It doesn't represent everyone else.", color: ORANGE, size: 20 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "How can a question be biased?",
        rule: "How can a question be biased?",
        quizQ: "How can a question be biased?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Biased Questions", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "How can a question be biased?", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "If it tries to lead you to an answer. Like asking: 'Do you agree that our awesome new canteen is the best?'",
        rule: "If it tries to lead you to an answer. Like asking: 'Do you agree that our awesome new canteen is the best?'",
        quizQ: "",
        quizA: "If it tries to lead you to an answer. Like asking: 'Do you agree that our awesome new canteen is the best?'",
        elements: [
          { type: "text", x: 400, y: 250, text: "If it tries to LEAD you to an answer!", color: ORANGE, size: 28, bold: true },
          
          { type: "rect", x: 150, y: 320, width: 500, height: 100, fill: "#fef3c7", rx: 10 },
          { type: "text", x: 400, y: 360, text: "\"Do you agree that our AWESOME", color: RED, size: 20, italic: true },
          { type: "text", x: 400, y: 390, text: "new canteen is the BEST?\"", color: RED, size: 20, italic: true },
          
          { type: "text", x: 400, y: 480, text: "It's forcing you to agree!", color: TEXT_MAIN, size: 24 }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 8 Chapter 6!");
