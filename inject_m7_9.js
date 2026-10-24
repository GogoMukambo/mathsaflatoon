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
// m7_9.1: Generating sequences
// ------------------------------------------------------------------
data["m7_9.1"] = {
  title: "9.1 Generating sequences",
  watermark: "Section 9.1: Sequences",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" },
    { id: "card_3", label: "Recall" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What is a 'term-to-term' rule?",
        rule: "What is a 'term-to-term' rule?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Term-to-Term Rule", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is a 'term-to-term' rule?", color: TEXT_MAIN, size: 24 },
          
          { type: "rect", x: 200, y: 250, width: 60, height: 60, fill: "#e0f2fe", stroke: BLUE, strokeWidth: 2, rx: 10 },
          { type: "text", x: 230, y: 285, text: "2", color: BLUE, size: 24 },
          
          { type: "rect", x: 370, y: 250, width: 60, height: 60, fill: "#e0f2fe", stroke: BLUE, strokeWidth: 2, rx: 10 },
          { type: "text", x: 400, y: 285, text: "5", color: BLUE, size: 24 },
          
          { type: "rect", x: 540, y: 250, width: 60, height: 60, fill: "#e0f2fe", stroke: BLUE, strokeWidth: 2, rx: 10 },
          { type: "text", x: 570, y: 285, text: "8", color: BLUE, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "It's the secret instruction that tells you how to jump from one number to the next!",
        rule: "It's the secret instruction that tells you how to jump from one number to the next one in the line.",
        quizQ: "",
        quizA: "",
        elements: [
          // Jump arrows
          { type: "path", d: "M 240 240 Q 315 180 390 240", stroke: ORANGE, width: 3, fill: "none" },
          { type: "path", d: "M 380 230 L 390 240 L 395 225", stroke: ORANGE, width: 3, fill: "none" },
          { type: "text", x: 315, y: 190, text: "+ 3", color: ORANGE, size: 20 },
          
          { type: "path", d: "M 410 240 Q 485 180 560 240", stroke: ORANGE, width: 3, fill: "none" },
          { type: "path", d: "M 550 230 L 560 240 L 565 225", stroke: ORANGE, width: 3, fill: "none" },
          { type: "text", x: 485, y: 190, text: "+ 3", color: ORANGE, size: 20 },
          
          { type: "text", x: 400, y: 450, text: "It's the instruction to jump to the next number!", color: GREEN, size: 24 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's build a sequence.",
        rule: "The first number is 5. The rule is 'add 4'. What are the first four numbers?",
        quizQ: "The first number is 5. The rule is 'add 4'. What are the first four numbers?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Building a Sequence", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Start at 5. The rule is 'add 4'.", color: TEXT_MAIN, size: 24 },
          
          { type: "rect", x: 150, y: 280, width: 60, height: 60, fill: "#fef08a", stroke: ORANGE, strokeWidth: 2, rx: 10 },
          { type: "text", x: 180, y: 315, text: "5", color: ORANGE, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "Just keep adding 4! 5, 9, 13, 17.",
        rule: "5, 9, 13, 17.",
        quizQ: "",
        quizA: "5, 9, 13, 17.",
        elements: [
          { type: "path", d: "M 220 310 L 270 310", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 260 300 L 270 310 L 260 320", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 245, y: 290, text: "+4", color: TEXT_MAIN, size: 16 },
          
          { type: "rect", x: 280, y: 280, width: 60, height: 60, fill: "#fef08a", stroke: ORANGE, strokeWidth: 2, rx: 10 },
          { type: "text", x: 310, y: 315, text: "9", color: ORANGE, size: 24 },
          
          { type: "path", d: "M 350 310 L 400 310", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 390 300 L 400 310 L 390 320", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 375, y: 290, text: "+4", color: TEXT_MAIN, size: 16 },
          
          { type: "rect", x: 410, y: 280, width: 60, height: 60, fill: "#fef08a", stroke: ORANGE, strokeWidth: 2, rx: 10 },
          { type: "text", x: 440, y: 315, text: "13", color: ORANGE, size: 24 },
          
          { type: "path", d: "M 480 310 L 530 310", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 520 300 L 530 310 L 520 320", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 505, y: 290, text: "+4", color: TEXT_MAIN, size: 16 },
          
          { type: "rect", x: 540, y: 280, width: 60, height: 60, fill: "#fef08a", stroke: ORANGE, strokeWidth: 2, rx: 10 },
          { type: "text", x: 570, y: 315, text: "17", color: ORANGE, size: 24 },
          
          { type: "text", x: 400, y: 450, text: "5, 9, 13, 17", color: GREEN, size: 32, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "What is a geometric sequence?",
        rule: "What is a 'geometric' sequence?",
        quizQ: "What is a 'geometric' sequence?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Geometric Sequences", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is a 'geometric' sequence?", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "Instead of adding, you multiply! Like 3, 6, 12, 24.",
        rule: "Instead of adding, you multiply! Like 3, 6, 12, 24 (multiplying by 2 each time).",
        quizQ: "",
        quizA: "Instead of adding, you multiply! Like 3, 6, 12, 24 (multiplying by 2 each time).",
        elements: [
          { type: "rect", x: 150, y: 280, width: 60, height: 60, fill: "#fce7f3", stroke: PURPLE, strokeWidth: 2, rx: 10 },
          { type: "text", x: 180, y: 315, text: "3", color: PURPLE, size: 24 },
          
          { type: "path", d: "M 220 310 L 270 310", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 260 300 L 270 310 L 260 320", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 245, y: 290, text: "×2", color: PURPLE, size: 16 },
          
          { type: "rect", x: 280, y: 280, width: 60, height: 60, fill: "#fce7f3", stroke: PURPLE, strokeWidth: 2, rx: 10 },
          { type: "text", x: 310, y: 315, text: "6", color: PURPLE, size: 24 },
          
          { type: "path", d: "M 350 310 L 400 310", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 390 300 L 400 310 L 390 320", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 375, y: 290, text: "×2", color: PURPLE, size: 16 },
          
          { type: "rect", x: 410, y: 280, width: 60, height: 60, fill: "#fce7f3", stroke: PURPLE, strokeWidth: 2, rx: 10 },
          { type: "text", x: 440, y: 315, text: "12", color: PURPLE, size: 24 },
          
          { type: "path", d: "M 480 310 L 530 310", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 520 300 L 530 310 L 520 320", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 505, y: 290, text: "×2", color: PURPLE, size: 16 },
          
          { type: "rect", x: 540, y: 280, width: 60, height: 60, fill: "#fce7f3", stroke: PURPLE, strokeWidth: 2, rx: 10 },
          { type: "text", x: 570, y: 315, text: "24", color: PURPLE, size: 24 },
          
          { type: "text", x: 400, y: 450, text: "You MULTIPLY instead of adding!", color: GREEN, size: 24, bold: true }
        ]
      }
    ],
    "card_3": [
      {
        narration: "What is a linear sequence?",
        rule: "What is a 'linear' sequence?",
        quizQ: "What is a 'linear' sequence?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Recall: Linear Sequences", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is a 'linear' sequence?", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "It goes up by the exact same amount every time, like stairs.",
        rule: "A sequence that goes up by the exact same amount every time (like stairs). A non-linear sequence jumps by different amounts.",
        quizQ: "",
        quizA: "A sequence that goes up by the exact same amount every time (like stairs). A non-linear sequence jumps by different amounts.",
        elements: [
          // Stairs
          { type: "path", d: "M 200 400 L 250 400 L 250 350 L 300 350 L 300 300 L 350 300 L 350 250 L 400 250", stroke: BLUE, width: 4, fill: "none" },
          { type: "text", x: 225, y: 380, text: "+2", color: BLUE, size: 16 },
          { type: "text", x: 275, y: 330, text: "+2", color: BLUE, size: 16 },
          { type: "text", x: 325, y: 280, text: "+2", color: BLUE, size: 16 },
          
          { type: "text", x: 400, y: 480, text: "It goes up by the SAME amount every time!", color: GREEN, size: 24, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_9.2: Using the nth term
// ------------------------------------------------------------------
data["m7_9.2"] = {
  title: "9.2 Using the nth term",
  watermark: "Section 9.2: nth Term",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do we write the nth term rule?",
        rule: "How do we write the 'nth term' rule?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: The nth Term", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do we write the 'nth term' rule?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 250, text: "5", color: BLUE, size: 30 },
          { type: "text", x: 400, y: 250, text: "8", color: BLUE, size: 30 },
          { type: "text", x: 500, y: 250, text: "11", color: BLUE, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "First, find the jump. If it's +3, write 3n. Then find the 'zero' term before the sequence started.",
        rule: "If the jumps are +3, write 3n. Then ask: what would the 'zero' term be before the sequence started? Add that on!",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 320 240 Q 350 200 380 240", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 350, y: 210, text: "+3", color: ORANGE, size: 16 },
          { type: "text", x: 400, y: 320, text: "Jump is +3  →  3n", color: ORANGE, size: 24 },
          
          { type: "path", d: "M 280 240 Q 250 200 220 240", stroke: PURPLE, width: 2, fill: "none", dash: "4,4" },
          { type: "text", x: 250, y: 210, text: "-3", color: PURPLE, size: 16 },
          { type: "text", x: 200, y: 250, text: "2", color: PURPLE, size: 30 },
          
          { type: "text", x: 400, y: 370, text: "Zero term is 2  →  + 2", color: PURPLE, size: 24 },
          
          { type: "text", x: 400, y: 450, text: "Rule: 3n + 2", color: GREEN, size: 32, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's use an nth term rule.",
        rule: "The nth term rule is 3n + 1. What is the 10th term?",
        quizQ: "The nth term rule is 3n + 1. What is the 10th term?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Using the Rule", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "The rule is 3n + 1. What is the 10th term?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "3n + 1", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Just substitute 10 for n! 3 times 10 is 30, plus 1 is 31.",
        rule: "3 × 10 + 1 = 31.",
        quizQ: "",
        quizA: "3 × 10 + 1 = 31.",
        elements: [
          { type: "path", d: "M 390 280 L 390 320", stroke: ORANGE, width: 3, fill: "none" },
          { type: "text", x: 400, y: 360, text: "3(10) + 1", color: ORANGE, size: 40 },
          { type: "text", x: 400, y: 420, text: "30 + 1", color: TEXT_MAIN, size: 30 },
          { type: "text", x: 400, y: 480, text: "31", color: GREEN, size: 40, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Let's find the rule for this sequence.",
        rule: "Find the nth term of 5, 8, 11, 14.",
        quizQ: "Find the nth term of 5, 8, 11, 14.",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Finding the Rule", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Find the nth term of 5, 8, 11, 14.", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 250, y: 250, text: "5", color: BLUE, size: 30 },
          { type: "text", x: 350, y: 250, text: "8", color: BLUE, size: 30 },
          { type: "text", x: 450, y: 250, text: "11", color: BLUE, size: 30 },
          { type: "text", x: 550, y: 250, text: "14", color: BLUE, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "The jump is +3, so it's 3n. The number before 5 would be 2. So the rule is 3n + 2.",
        rule: "The jump is +3, so it's 3n. The number before 5 would be 2. So the rule is 3n + 2.",
        quizQ: "",
        quizA: "The jump is +3, so it's 3n. The number before 5 would be 2. So the rule is 3n + 2.",
        elements: [
          { type: "path", d: "M 270 240 Q 300 200 330 240", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 300, y: 210, text: "+3", color: ORANGE, size: 16 },
          { type: "text", x: 400, y: 320, text: "Jump is +3  →  3n", color: ORANGE, size: 24 },
          
          { type: "path", d: "M 230 240 Q 200 200 170 240", stroke: PURPLE, width: 2, fill: "none", dash: "4,4" },
          { type: "text", x: 200, y: 210, text: "-3", color: PURPLE, size: 16 },
          { type: "text", x: 150, y: 250, text: "2", color: PURPLE, size: 30 },
          
          { type: "text", x: 400, y: 370, text: "Zero term is 2  →  + 2", color: PURPLE, size: 24 },
          
          { type: "text", x: 400, y: 450, text: "Rule: 3n + 2", color: GREEN, size: 32, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_9.3: Representing functions
// ------------------------------------------------------------------
data["m7_9.3"] = {
  title: "9.3 Representing functions",
  watermark: "Section 9.3: Functions",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What is a function machine?",
        rule: "What is a function machine?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Function Machines", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is a function machine?", color: TEXT_MAIN, size: 24 },
          
          // Machine
          { type: "rect", x: 300, y: 250, width: 200, height: 120, fill: "#e0f2fe", stroke: BLUE, strokeWidth: 4, rx: 15 },
          { type: "text", x: 400, y: 290, text: "ROBOT", color: BLUE, size: 20 },
          { type: "text", x: 400, y: 330, text: "FACTORY", color: BLUE, size: 20 },
          
          // Input
          { type: "rect", x: 150, y: 280, width: 60, height: 60, fill: "#fef08a", stroke: ORANGE, strokeWidth: 2, rx: 10 },
          { type: "text", x: 180, y: 315, text: "x", color: ORANGE, size: 24 },
          { type: "path", d: "M 220 310 L 290 310", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "path", d: "M 270 290 L 290 310 L 270 330", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 255, y: 280, text: "IN", color: TEXT_MAIN, size: 16 },
          
          // Output
          { type: "path", d: "M 510 310 L 580 310", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "path", d: "M 560 290 L 580 310 L 560 330", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 545, y: 280, text: "OUT", color: TEXT_MAIN, size: 16 },
          { type: "rect", x: 590, y: 280, width: 60, height: 60, fill: "#d1fae5", stroke: GREEN, strokeWidth: 2, rx: 10 },
          { type: "text", x: 620, y: 315, text: "y", color: GREEN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "It's like a robot factory! You put a number in, it does some math, and spits a new number out.",
        rule: "It's like a robot factory! You put a number in (x), the robot does some math to it, and spits a new number out (y).",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 450, text: "Input (x)  →  Math  →  Output (y)", color: GREEN, size: 28, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's run a number through the machine.",
        rule: "Input is x. The machine says '×3' then '−2'. What is the output?",
        quizQ: "Input is x. The machine says '×3' then '−2'. What is the output?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Function Machine", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Input is x. Machine says '×3' then '−2'.", color: TEXT_MAIN, size: 24 },
          
          // Machine
          { type: "rect", x: 250, y: 250, width: 120, height: 80, fill: "#e0f2fe", stroke: BLUE, strokeWidth: 3, rx: 10 },
          { type: "text", x: 310, y: 295, text: "× 3", color: BLUE, size: 24 },
          
          { type: "path", d: "M 380 290 L 420 290", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 410 280 L 420 290 L 410 300", stroke: TEXT_MAIN, width: 3, fill: "none" },
          
          { type: "rect", x: 430, y: 250, width: 120, height: 80, fill: "#fef2f2", stroke: RED, strokeWidth: 3, rx: 10 },
          { type: "text", x: 490, y: 295, text: "- 2", color: RED, size: 24 },
          
          // Input
          { type: "text", x: 180, y: 295, text: "x", color: ORANGE, size: 30 },
          { type: "path", d: "M 200 290 L 240 290", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 230 280 L 240 290 L 230 300", stroke: TEXT_MAIN, width: 3, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "x times 3 is 3x. Then subtract 2. The output is 3x - 2.",
        rule: "3x − 2.",
        quizQ: "",
        quizA: "3x − 2.",
        elements: [
          { type: "text", x: 400, y: 230, text: "3x", color: PURPLE, size: 20 },
          
          { type: "path", d: "M 560 290 L 600 290", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 590 280 L 600 290 L 590 300", stroke: TEXT_MAIN, width: 3, fill: "none" },
          
          { type: "text", x: 650, y: 295, text: "3x - 2", color: GREEN, size: 30, bold: true },
          
          { type: "text", x: 400, y: 450, text: "Output = 3x - 2", color: GREEN, size: 32, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "What does f(4) mean?",
        rule: "If f(x) = 2x + 5, what is f(4)?",
        quizQ: "If f(x) = 2x + 5, what is f(4)?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Function Notation", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "If f(x) = 2x + 5, what is f(4)?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 280, text: "f(4)", color: BLUE, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "It just means put 4 into the machine! 2 times 4 is 8, plus 5 is 13.",
        rule: "This just means 'put 4 into the machine'. 2 × 4 + 5 = 13.",
        quizQ: "",
        quizA: "This just means 'put 4 into the machine'. 2 × 4 + 5 = 13.",
        elements: [
          { type: "text", x: 400, y: 360, text: "Put 4 in for x!", color: ORANGE, size: 24 },
          { type: "text", x: 400, y: 420, text: "2(4) + 5", color: TEXT_MAIN, size: 30 },
          { type: "text", x: 400, y: 480, text: "8 + 5 = 13", color: GREEN, size: 32, bold: true }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 7 Chapter 9!");
