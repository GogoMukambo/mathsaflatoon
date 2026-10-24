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
// m7_12.1: Mutually exclusive events
// ------------------------------------------------------------------
data["m7_12.1"] = {
  title: "12.1 Mutually exclusive events",
  watermark: "Section 12.1: Mutually Exclusive",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What does 'mutually exclusive' mean?",
        rule: "What does 'mutually exclusive' mean?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Mutually Exclusive", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What does 'mutually exclusive' mean?", color: TEXT_MAIN, size: 24 },
          
          { type: "circle", cx: 300, cy: 280, r: 50, fill: "#e0f2fe", stroke: BLUE, width: 3 },
          { type: "text", x: 300, y: 285, text: "Heads", color: BLUE, size: 20 },
          
          { type: "text", x: 400, y: 285, text: "OR", color: TEXT_MAIN, size: 24 },
          
          { type: "circle", cx: 500, cy: 280, r: 50, fill: "#fce7f3", stroke: RED, width: 3 },
          { type: "text", x: 500, y: 285, text: "Tails", color: RED, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "It means they CANNOT happen at the same time! For these, you ADD their probabilities.",
        rule: "It means two things that CANNOT happen at the same time! (Like a coin landing on both heads and tails). For these, you just ADD their probabilities.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 420, text: "They CANNOT happen at the same time!", color: RED, size: 24, bold: true },
          { type: "text", x: 400, y: 480, text: "Rule: ADD their probabilities.", color: GREEN, size: 28, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's roll a die.",
        rule: "Rolling a die. What is the chance of getting an even number OR a 5?",
        quizQ: "Rolling a die. What is the chance of getting an even number OR a 5?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Adding Probabilities", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Rolling a die. Chance of an even number OR a 5?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 250, y: 250, text: "Even (2, 4, 6)", color: BLUE, size: 20 },
          { type: "text", x: 250, y: 290, text: "3/6", color: BLUE, size: 30 },
          
          { type: "text", x: 400, y: 290, text: "OR (+)", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 550, y: 250, text: "A 5", color: ORANGE, size: 20 },
          { type: "text", x: 550, y: 290, text: "1/6", color: ORANGE, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "They don't overlap, so just add them! 3/6 plus 1/6 is 4/6, which simplifies to 2/3.",
        rule: "3/6 + 1/6 = 4/6 (which simplifies to 2/3). They don't overlap!",
        quizQ: "",
        quizA: "3/6 + 1/6 = 4/6 (which simplifies to 2/3). They don't overlap!",
        elements: [
          { type: "text", x: 400, y: 400, text: "3/6 + 1/6 = 4/6", color: GREEN, size: 36, bold: true },
          { type: "text", x: 400, y: 460, text: "Simplifies to 2/3", color: GREEN, size: 24 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Why can't you just add 'even' and 'prime'?",
        rule: "Why can't you just add the chance of getting an 'even' number and a 'prime' number?",
        quizQ: "Why can't you just add the chance of getting an 'even' number and a 'prime' number?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Overlapping Events", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Why can't you just add 'even' and 'prime'?", color: TEXT_MAIN, size: 24 },
          
          // Venn Diagram
          { type: "circle", cx: 330, cy: 300, r: 80, fill: "none", stroke: BLUE, width: 3 },
          { type: "text", x: 280, y: 210, text: "Even", color: BLUE, size: 20 },
          { type: "text", x: 280, y: 300, text: "4, 6", color: BLUE, size: 20 },
          
          { type: "circle", cx: 470, cy: 300, r: 80, fill: "none", stroke: RED, width: 3 },
          { type: "text", x: 520, y: 210, text: "Prime", color: RED, size: 20 },
          { type: "text", x: 520, y: 300, text: "3, 5", color: RED, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "Because the number 2 is BOTH even and prime! They overlap, so they aren't mutually exclusive.",
        rule: "Because the number 2 is BOTH even and prime! They overlap, so they aren't mutually exclusive.",
        quizQ: "",
        quizA: "Because the number 2 is BOTH even and prime! They overlap, so they aren't mutually exclusive.",
        elements: [
          { type: "text", x: 400, y: 300, text: "2", color: PURPLE, size: 30, bold: true },
          { type: "path", d: "M 400 320 L 400 370", stroke: PURPLE, width: 2, fill: "none" },
          { type: "text", x: 400, y: 400, text: "2 is in BOTH circles!", color: PURPLE, size: 24 },
          
          { type: "text", x: 400, y: 480, text: "They overlap, so they are NOT mutually exclusive.", color: RED, size: 24, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_12.2: Independent events
// ------------------------------------------------------------------
data["m7_12.2"] = {
  title: "12.2 Independent events",
  watermark: "Section 12.2: Independent",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What are 'independent' events?",
        rule: "What are 'independent' events?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Independent Events", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What are 'independent' events?", color: TEXT_MAIN, size: 24 },
          
          { type: "circle", cx: 300, cy: 280, r: 40, fill: "#fef08a", stroke: ORANGE, width: 3 },
          { type: "text", x: 300, y: 285, text: "Coin 1", color: ORANGE, size: 16 },
          
          { type: "text", x: 400, y: 285, text: "AND", color: TEXT_MAIN, size: 24 },
          
          { type: "circle", cx: 500, cy: 280, r: 40, fill: "#e0f2fe", stroke: BLUE, width: 3 },
          { type: "text", x: 500, y: 285, text: "Coin 2", color: BLUE, size: 16 }
        ]
      },
      {
        clear: false,
        narration: "Events that don't care about each other! To find the chance of BOTH happening, you MULTIPLY.",
        rule: "Events that don't care about each other! (Like flipping two different coins). To find the chance of BOTH happening, you MULTIPLY their probabilities.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 420, text: "They don't affect each other at all!", color: TEXT_SUB, size: 24 },
          { type: "text", x: 400, y: 480, text: "Rule: MULTIPLY their probabilities.", color: GREEN, size: 28, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's flip two coins.",
        rule: "Flip two fair coins. What is the chance of getting two heads?",
        quizQ: "Flip two fair coins. What is the chance of getting two heads?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Multiplying Probabilities", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Flip two fair coins. Chance of getting two heads?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 250, y: 250, text: "Coin 1 (Heads)", color: BLUE, size: 20 },
          { type: "text", x: 250, y: 290, text: "1/2", color: BLUE, size: 30 },
          
          { type: "text", x: 400, y: 290, text: "AND (×)", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 550, y: 250, text: "Coin 2 (Heads)", color: ORANGE, size: 20 },
          { type: "text", x: 550, y: 290, text: "1/2", color: ORANGE, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "Multiply them together! 1/2 times 1/2 is 1/4.",
        rule: "1/2 × 1/2 = 1/4.",
        quizQ: "",
        quizA: "1/2 × 1/2 = 1/4.",
        elements: [
          { type: "text", x: 400, y: 420, text: "1/2 × 1/2 = 1/4", color: GREEN, size: 40, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "When are two card draws NOT independent?",
        rule: "When are two card draws NOT independent?",
        quizQ: "When are two card draws NOT independent?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Dependent Events", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "When are two card draws NOT independent?", color: TEXT_MAIN, size: 24 },
          
          { type: "rect", x: 350, y: 220, width: 100, height: 140, fill: "#f1f5f9", stroke: TEXT_MAIN, strokeWidth: 2, rx: 5 },
          { type: "text", x: 400, y: 290, text: "52 Cards", color: TEXT_MAIN, size: 18 }
        ]
      },
      {
        clear: false,
        narration: "If you take a card out and DON'T put it back! The deck shrinks, so the second draw is affected.",
        rule: "If you take a card out and DON'T put it back! The deck changes, so the second draw is affected.",
        quizQ: "",
        quizA: "If you take a card out and DON'T put it back! The deck changes, so the second draw is affected.",
        elements: [
          { type: "path", d: "M 460 290 Q 520 250 580 290", stroke: RED, width: 3, fill: "none" },
          { type: "path", d: "M 570 280 L 580 290 L 570 300", stroke: RED, width: 3, fill: "none" },
          { type: "rect", x: 590, y: 250, width: 60, height: 80, fill: "#fef2f2", stroke: RED, strokeWidth: 2, rx: 5 },
          { type: "text", x: 620, y: 295, text: "Kept!", color: RED, size: 14 },
          
          { type: "path", d: "M 340 310 L 460 270", stroke: RED, width: 4, fill: "none" },
          { type: "text", x: 400, y: 380, text: "Now only 51 cards left!", color: RED, size: 20 },
          
          { type: "text", x: 400, y: 460, text: "If you DON'T put the card back.", color: GREEN, size: 24, bold: true },
          { type: "text", x: 400, y: 500, text: "The deck changes, so the next draw is affected.", color: TEXT_SUB, size: 20 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_12.3: Combined events
// ------------------------------------------------------------------
data["m7_12.3"] = {
  title: "12.3 Combined events",
  watermark: "Section 12.3: Tree Diagrams",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do you map out combined events?",
        rule: "How do you map out combined events?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Tree Diagrams", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you map out combined events?", color: TEXT_MAIN, size: 24 },
          
          // Tree diagram
          { type: "path", d: "M 200 300 L 300 200", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "path", d: "M 200 300 L 300 400", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 320, y: 200, text: "Heads", color: BLUE, size: 20 },
          { type: "text", x: 320, y: 400, text: "Tails", color: RED, size: 20 },
          
          { type: "path", d: "M 360 200 L 460 150", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "path", d: "M 360 200 L 460 250", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 480, y: 150, text: "Heads", color: BLUE, size: 20 },
          { type: "text", x: 480, y: 250, text: "Tails", color: RED, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "Draw a tree diagram! Each branch is a choice. You MULTIPLY along the branches.",
        rule: "Draw a tree diagram! Each branch is a choice. You MULTIPLY along the branches to find the final chance.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 480, text: "Draw a tree diagram!", color: GREEN, size: 28, bold: true },
          { type: "text", x: 400, y: 520, text: "MULTIPLY along the branches.", color: ORANGE, size: 24 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "How many total outcomes are there?",
        rule: "How many total outcomes if you spin a 1–4 spinner and toss a coin?",
        quizQ: "How many total outcomes if you spin a 1–4 spinner and toss a coin?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Total Outcomes", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Spin a 1-4 spinner, then toss a coin.", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 250, text: "Spinner", color: BLUE, size: 24 },
          { type: "text", x: 300, y: 300, text: "4 options", color: BLUE, size: 20 },
          
          { type: "text", x: 500, y: 250, text: "Coin", color: ORANGE, size: 24 },
          { type: "text", x: 500, y: 300, text: "2 options", color: ORANGE, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "Just multiply the options! 4 times 2 is 8 total outcomes.",
        rule: "4 options on the spinner × 2 options on the coin = 8 total outcomes.",
        quizQ: "",
        quizA: "4 options on the spinner × 2 options on the coin = 8 total outcomes.",
        elements: [
          { type: "text", x: 400, y: 420, text: "4 × 2 = 8", color: GREEN, size: 40, bold: true },
          { type: "text", x: 400, y: 480, text: "8 total outcomes", color: TEXT_SUB, size: 24 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "What if there are multiple winning paths?",
        rule: "What do you do if there are multiple winning paths on your tree?",
        quizQ: "What do you do if there are multiple winning paths on your tree?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Multiple Paths", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What if there are multiple winning paths on your tree?", color: TEXT_MAIN, size: 22 },
          
          // Tree diagram
          { type: "path", d: "M 200 300 L 300 200", stroke: GREEN, width: 4, fill: "none" },
          { type: "path", d: "M 300 200 L 400 150", stroke: GREEN, width: 4, fill: "none" },
          { type: "text", x: 450, y: 150, text: "Win 1", color: GREEN, size: 20 },
          
          { type: "path", d: "M 200 300 L 300 400", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "path", d: "M 300 400 L 400 350", stroke: GREEN, width: 4, fill: "none" },
          { type: "text", x: 450, y: 350, text: "Win 2", color: GREEN, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "You ADD the winning paths together at the end!",
        rule: "You ADD the winning paths together at the end!",
        quizQ: "",
        quizA: "You ADD the winning paths together at the end!",
        elements: [
          { type: "text", x: 400, y: 480, text: "ADD them together!", color: GREEN, size: 32, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_12.4: Chance experiments
// ------------------------------------------------------------------
data["m7_12.4"] = {
  title: "12.4 Chance experiments",
  watermark: "Section 12.4: Experiments",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What is the difference between experimental and theoretical probability?",
        rule: "Experimental vs theoretical probability?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Types of Probability", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "Experimental vs theoretical probability?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 250, y: 250, text: "Theoretical", color: BLUE, size: 24, bold: true },
          { type: "text", x: 250, y: 290, text: "(Math rules)", color: TEXT_SUB, size: 18 },
          
          { type: "text", x: 550, y: 250, text: "Experimental", color: GREEN, size: 24, bold: true },
          { type: "text", x: 550, y: 290, text: "(Real life tests)", color: TEXT_SUB, size: 18 }
        ]
      },
      {
        clear: false,
        narration: "Experimental is based on real trials. It gets closer to theoretical as you do MORE trials.",
        rule: "Relative frequency is successes ÷ trials. It should get closer to the theoretical probability as you do more trials (in the long run).",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 550 320 Q 400 400 250 320", stroke: ORANGE, width: 3, fill: "none", dash: "5,5" },
          { type: "path", d: "M 260 310 L 250 320 L 270 330", stroke: ORANGE, width: 3, fill: "none" },
          
          { type: "text", x: 400, y: 420, text: "With MORE trials, experimental gets", color: GREEN, size: 24 },
          { type: "text", x: 400, y: 460, text: "closer to theoretical.", color: GREEN, size: 24 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's estimate probability from an experiment.",
        rule: "A spinner lands on red 18 times in 50 spins. Estimate P(red).",
        quizQ: "A spinner lands on red 18 times in 50 spins. Estimate P(red).",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Experimental Probability", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Spinner lands on red 18 times in 50 spins. Estimate P(red).", color: TEXT_MAIN, size: 22 },
          
          { type: "text", x: 400, y: 250, text: "Successes (Red)", color: RED, size: 20 },
          { type: "path", d: "M 300 280 L 500 280", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 400, y: 310, text: "Total Trials", color: BLUE, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "Just divide successes by total trials! 18 divided by 50 is 0.36.",
        rule: "18/50 = 0.36.",
        quizQ: "",
        quizA: "18/50 = 0.36.",
        elements: [
          { type: "text", x: 400, y: 420, text: "18 / 50 = 0.36", color: GREEN, size: 40, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Why might 10 trials be a poor estimate?",
        rule: "Why might 10 trials be a poor estimate?",
        quizQ: "Why might 10 trials be a poor estimate?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Sample Size", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Why might 10 trials be a poor estimate?", color: TEXT_MAIN, size: 24 },
          
          // Bouncing graph
          { type: "path", d: "M 200 350 L 600 350", stroke: TEXT_SUB, width: 2, fill: "none" }, // ideal line
          { type: "path", d: "M 200 300 L 250 400 L 300 250 L 350 380 L 400 320", stroke: RED, width: 3, fill: "none" },
          { type: "text", x: 300, y: 220, text: "Small sample bounces around!", color: RED, size: 16 }
        ]
      },
      {
        clear: false,
        narration: "Small samples bounce around wildly. Random variation is large when you don't do many trials.",
        rule: "Small samples bounce around. Random variation is large when n is small.",
        quizQ: "",
        quizA: "Small samples bounce around. Random variation is large when n is small.",
        elements: [
          { type: "text", x: 400, y: 450, text: "Small samples bounce around.", color: RED, size: 24, bold: true },
          { type: "text", x: 400, y: 490, text: "Random variation is too large.", color: TEXT_SUB, size: 20 }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 7 Chapter 12!");
