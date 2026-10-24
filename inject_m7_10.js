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
// m7_10.1: Functions
// ------------------------------------------------------------------
data["m7_10.1"] = {
  title: "10.1 Functions",
  watermark: "Section 10.1: Graph Rules",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What does y = mx + c mean on a graph?",
        rule: "What does y = mx + c mean on a graph?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: The Graph Rule", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What does y = mx + c mean on a graph?", color: TEXT_MAIN, size: 24 },
          
          // Grid
          { type: "path", d: "M 200 300 L 600 300", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "path", d: "M 400 180 L 400 420", stroke: TEXT_SUB, width: 2, fill: "none" },
          
          // Line
          { type: "path", d: "M 250 400 L 550 200", stroke: BLUE, width: 4, fill: "none" },
          { type: "text", x: 500, y: 180, text: "y = mx + c", color: BLUE, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "It's a set of instructions! For every 'x' you put in, it gives you exactly one 'y' to plot on the grid.",
        rule: "It's a set of instructions! For every 'x' you put in, it gives you exactly one 'y' to plot on the grid.",
        quizQ: "",
        quizA: "",
        elements: [
          // Dot
          { type: "circle", cx: 475, cy: 250, r: 6, fill: RED },
          { type: "path", d: "M 475 300 L 475 250", stroke: RED, width: 2, fill: "none", dash: "4,4" },
          { type: "text", x: 475, y: 320, text: "x", color: RED, size: 18 },
          
          { type: "path", d: "M 400 250 L 475 250", stroke: RED, width: 2, fill: "none", dash: "4,4" },
          { type: "text", x: 380, y: 255, text: "y", color: RED, size: 18 },
          
          { type: "text", x: 400, y: 480, text: "It's a set of instructions to find dots!", color: GREEN, size: 24, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's use the rule to find a y-value.",
        rule: "On the line y = 2x − 1, what is y when x = 3?",
        quizQ: "On the line y = 2x − 1, what is y when x = 3?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Using the Rule", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "On the line y = 2x − 1, what is y when x = 3?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 250, text: "y = 2x - 1", color: BLUE, size: 36 }
        ]
      },
      {
        clear: false,
        narration: "Swap x for 3. 2 times 3 is 6, minus 1 is 5.",
        rule: "5. (Because 2 × 3 - 1 = 5).",
        quizQ: "",
        quizA: "5. (Because 2 × 3 - 1 = 5).",
        elements: [
          { type: "path", d: "M 400 280 L 400 320", stroke: ORANGE, width: 3, fill: "none" },
          { type: "text", x: 400, y: 360, text: "y = 2(3) - 1", color: ORANGE, size: 36 },
          { type: "text", x: 400, y: 420, text: "y = 6 - 1", color: TEXT_MAIN, size: 30 },
          { type: "text", x: 400, y: 480, text: "y = 5", color: GREEN, size: 40, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Is x = 4 a normal function line?",
        rule: "Is x = 4 a normal function line?",
        quizQ: "Is x = 4 a normal function line?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Vertical Lines", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Is x = 4 a normal function line?", color: TEXT_MAIN, size: 24 },
          
          // Grid
          { type: "path", d: "M 200 300 L 600 300", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "path", d: "M 300 180 L 300 420", stroke: TEXT_SUB, width: 2, fill: "none" },
          
          // Line x=4
          { type: "path", d: "M 500 180 L 500 420", stroke: RED, width: 4, fill: "none" },
          { type: "text", x: 500, y: 320, text: "4", color: TEXT_MAIN, size: 18 },
          { type: "text", x: 540, y: 200, text: "x = 4", color: RED, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "No! It's a straight up-and-down vertical wall. A normal function always moves across the page.",
        rule: "No! It's a straight up-and-down vertical wall. A normal function always moves across the page.",
        quizQ: "",
        quizA: "No! It's a straight up-and-down vertical wall. A normal function always moves across the page.",
        elements: [
          { type: "text", x: 400, y: 480, text: "No! It's a vertical wall.", color: RED, size: 28, bold: true },
          { type: "text", x: 400, y: 520, text: "A normal function moves across the page.", color: TEXT_SUB, size: 20 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_10.2: Plotting graphs
// ------------------------------------------------------------------
data["m7_10.2"] = {
  title: "10.2 Plotting graphs",
  watermark: "Section 10.2: Plotting",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do you draw a straight line from an equation?",
        rule: "How do you draw a straight line from an equation?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Plotting", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you draw a straight line from an equation?", color: TEXT_MAIN, size: 24 },
          
          // Table
          { type: "rect", x: 150, y: 220, width: 120, height: 90, fill: "none", stroke: TEXT_MAIN, strokeWidth: 2 },
          { type: "path", d: "M 150 265 L 270 265", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "path", d: "M 190 220 L 190 310", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "path", d: "M 230 220 L 230 310", stroke: TEXT_MAIN, width: 2, fill: "none" },
          
          { type: "text", x: 170, y: 250, text: "x", color: TEXT_MAIN, size: 20 },
          { type: "text", x: 170, y: 295, text: "y", color: TEXT_MAIN, size: 20 },
          
          { type: "text", x: 210, y: 250, text: "1", color: BLUE, size: 20 },
          { type: "text", x: 210, y: 295, text: "3", color: RED, size: 20 },
          
          { type: "text", x: 250, y: 250, text: "2", color: BLUE, size: 20 },
          { type: "text", x: 250, y: 295, text: "5", color: RED, size: 20 },
          
          // Grid
          { type: "path", d: "M 350 350 L 650 350", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "path", d: "M 400 150 L 400 400", stroke: TEXT_SUB, width: 2, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "Make a table, plot the dots, and join them with a ruler!",
        rule: "Make a quick table of x and y numbers, plot the dots on the grid, and join them up with a ruler!",
        quizQ: "",
        quizA: "",
        elements: [
          // Dots
          { type: "circle", cx: 450, cy: 300, r: 5, fill: GREEN },
          { type: "circle", cx: 500, cy: 250, r: 5, fill: GREEN },
          
          // Line
          { type: "path", d: "M 400 350 L 600 150", stroke: GREEN, width: 4, fill: "none" },
          
          { type: "text", x: 400, y: 460, text: "1. Make a table", color: GREEN, size: 22 },
          { type: "text", x: 400, y: 490, text: "2. Plot the dots", color: GREEN, size: 22 },
          { type: "text", x: 400, y: 520, text: "3. Join with a ruler!", color: GREEN, size: 22, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Why should you plot at least THREE dots?",
        rule: "Why should you plot at least THREE dots?",
        quizQ: "Why should you plot at least THREE dots?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Three Dots", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Why should you plot at least THREE dots?", color: TEXT_MAIN, size: 24 },
          
          // Two dots
          { type: "circle", cx: 300, cy: 250, r: 6, fill: BLUE },
          { type: "circle", cx: 500, cy: 300, r: 6, fill: BLUE },
          { type: "path", d: "M 200 225 L 600 325", stroke: BLUE, width: 2, fill: "none", dash: "4,4" }
        ]
      },
      {
        clear: false,
        narration: "Two dots will always make a straight line. The third dot proves you didn't make a mistake!",
        rule: "Two dots will always make a straight line. The third dot proves you didn't make a mistake!",
        quizQ: "",
        quizA: "Two dots will always make a straight line. The third dot proves you didn't make a mistake!",
        elements: [
          // Third dot (mistake)
          { type: "circle", cx: 400, cy: 200, r: 6, fill: RED },
          { type: "path", d: "M 300 250 L 400 200 L 500 300", stroke: RED, width: 3, fill: "none" },
          
          { type: "text", x: 400, y: 420, text: "Two dots ALWAYS make a line.", color: TEXT_SUB, size: 20 },
          { type: "text", x: 400, y: 480, text: "The third dot proves you didn't make a mistake!", color: GREEN, size: 24, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "What shape does y = x² make?",
        rule: "What shape does y = x² make?",
        quizQ: "What shape does y = x² make?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Curved Graphs", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What shape does y = x² make?", color: TEXT_MAIN, size: 24 },
          
          // Grid
          { type: "path", d: "M 200 350 L 600 350", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "path", d: "M 400 180 L 400 400", stroke: TEXT_SUB, width: 2, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "It makes a smiley face 'U' shape called a parabola!",
        rule: "A smiley face 'U' shape called a parabola! It's not a straight line.",
        quizQ: "",
        quizA: "A smiley face 'U' shape called a parabola! It's not a straight line.",
        elements: [
          // Parabola
          { type: "path", d: "M 300 200 Q 400 500 500 200", stroke: PURPLE, width: 4, fill: "none" },
          
          { type: "text", x: 400, y: 460, text: "A smiley face 'U' shape!", color: PURPLE, size: 28, bold: true },
          { type: "text", x: 400, y: 500, text: "It's called a parabola.", color: TEXT_SUB, size: 20 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_10.3: Gradient and intercept
// ------------------------------------------------------------------
data["m7_10.3"] = {
  title: "10.3 Gradient and intercept",
  watermark: "Section 10.3: Gradient",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "In the famous rule y = mx + c, what do m and c mean?",
        rule: "In the famous rule y = mx + c, what do m and c mean?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: m and c", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "In the famous rule y = mx + c, what do m and c mean?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 280, text: "y = mx + c", color: BLUE, size: 48 }
        ]
      },
      {
        clear: false,
        narration: "'m' is the gradient, or how steep the hill is. 'c' is the y-intercept, where it crashes into the y-axis.",
        rule: "'m' is the gradient (how steep the hill is). 'c' is the y-intercept (where the line crashes into the y-axis).",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "path", d: "M 365 310 L 365 360", stroke: GREEN, width: 3, fill: "none" },
          { type: "text", x: 365, y: 390, text: "Gradient", color: GREEN, size: 24, bold: true },
          { type: "text", x: 365, y: 420, text: "(How steep)", color: GREEN, size: 18 },
          
          { type: "path", d: "M 480 310 L 480 360", stroke: RED, width: 3, fill: "none" },
          { type: "text", x: 480, y: 390, text: "y-intercept", color: RED, size: 24, bold: true },
          { type: "text", x: 480, y: 420, text: "(Where it crosses y)", color: RED, size: 18 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "How do you find the gradient between two points?",
        rule: "How do you find the gradient between (0, 1) and (4, 9)?",
        quizQ: "How do you find the gradient between (0, 1) and (4, 9)?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Finding Gradient", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you find the gradient between (0, 1) and (4, 9)?", color: TEXT_MAIN, size: 22 },
          
          // Triangle
          { type: "circle", cx: 250, cy: 350, r: 6, fill: BLUE },
          { type: "text", x: 220, y: 370, text: "(0, 1)", color: BLUE, size: 16 },
          
          { type: "circle", cx: 450, cy: 150, r: 6, fill: BLUE },
          { type: "text", x: 480, y: 140, text: "(4, 9)", color: BLUE, size: 16 },
          
          { type: "path", d: "M 250 350 L 450 150", stroke: BLUE, width: 4, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "Rise divided by Run! It went up 8 steps, and across 4 steps. 8 divided by 4 is 2.",
        rule: "Rise divided by Run! It went up 8 steps, and across 4 steps. 8 ÷ 4 = 2.",
        quizQ: "",
        quizA: "Rise divided by Run! It went up 8 steps, and across 4 steps. 8 ÷ 4 = 2.",
        elements: [
          { type: "path", d: "M 250 350 L 450 350", stroke: ORANGE, width: 3, fill: "none", dash: "5,5" },
          { type: "text", x: 350, y: 380, text: "Run = 4", color: ORANGE, size: 20 },
          
          { type: "path", d: "M 450 350 L 450 150", stroke: RED, width: 3, fill: "none", dash: "5,5" },
          { type: "text", x: 500, y: 250, text: "Rise = 8", color: RED, size: 20 },
          
          { type: "text", x: 400, y: 460, text: "Gradient = Rise ÷ Run", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 400, y: 500, text: "8 ÷ 4 = 2", color: GREEN, size: 32, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Let's build an equation from clues.",
        rule: "A line has a gradient of −3 and crashes into the y-axis at 5. What is its equation?",
        quizQ: "A line has a gradient of −3 and crashes into the y-axis at 5. What is its equation?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Building the Equation", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Gradient is -3. Crashes into y-axis at 5.", color: TEXT_MAIN, size: 24 },
          { type: "text", x: 400, y: 180, text: "What is its equation?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 400, y: 300, text: "y = mx + c", color: TEXT_SUB, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Swap m for -3, and c for 5. The equation is y = -3x + 5.",
        rule: "y = −3x + 5. (The minus means it's going downhill!).",
        quizQ: "",
        quizA: "y = −3x + 5. (The minus means it's going downhill!).",
        elements: [
          { type: "text", x: 400, y: 420, text: "y = -3x + 5", color: BLUE, size: 48, bold: true },
          { type: "text", x: 400, y: 480, text: "(The minus means it's going downhill!)", color: ORANGE, size: 20 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_10.4: Interpreting graphs
// ------------------------------------------------------------------
data["m7_10.4"] = {
  title: "10.4 Interpreting graphs",
  watermark: "Section 10.4: Reading Graphs",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do you read a real-life graph?",
        rule: "How do you read a real-life graph?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Real-Life Graphs", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you read a real-life graph?", color: TEXT_MAIN, size: 24 },
          
          // Grid
          { type: "path", d: "M 200 350 L 600 350", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "path", d: "M 200 150 L 200 350", stroke: TEXT_SUB, width: 2, fill: "none" },
          
          // Line graph
          { type: "path", d: "M 200 350 L 300 200 L 450 200 L 550 300", stroke: BLUE, width: 4, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "A steep line means things are changing fast. A flat line means nothing is changing at all!",
        rule: "Look at the labels! A steep line means things are changing super fast. A flat line means nothing is changing at all.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 230, y: 250, text: "Fast change", color: GREEN, size: 16 },
          { type: "text", x: 375, y: 180, text: "No change", color: ORANGE, size: 16 },
          { type: "text", x: 530, y: 250, text: "Going down", color: RED, size: 16 },
          
          { type: "text", x: 400, y: 450, text: "Steep = Fast change", color: GREEN, size: 24, bold: true },
          { type: "text", x: 400, y: 490, text: "Flat = No change", color: ORANGE, size: 24, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "What does the steepness mean on a distance-time graph?",
        rule: "On a distance–time graph, what does the gradient (steepness) tell you?",
        quizQ: "On a distance–time graph, what does the gradient (steepness) tell you?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Distance-Time", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "On a distance–time graph, what does the steepness tell you?", color: TEXT_MAIN, size: 22 },
          
          // Grid
          { type: "path", d: "M 250 350 L 550 350", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "text", x: 400, y: 380, text: "Time", color: TEXT_MAIN, size: 18 },
          
          { type: "path", d: "M 250 150 L 250 350", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "text", x: 180, y: 250, text: "Distance", color: TEXT_MAIN, size: 18 },
          
          // Lines
          { type: "path", d: "M 250 350 L 400 150", stroke: RED, width: 3, fill: "none" },
          { type: "path", d: "M 250 350 L 500 250", stroke: BLUE, width: 3, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "It tells you the speed! A steeper line means you are moving faster.",
        rule: "Speed! A steeper line means you are moving faster.",
        quizQ: "",
        quizA: "Speed! A steeper line means you are moving faster.",
        elements: [
          { type: "text", x: 300, y: 200, text: "Faster", color: RED, size: 18 },
          { type: "text", x: 450, y: 280, text: "Slower", color: BLUE, size: 18 },
          
          { type: "text", x: 400, y: 460, text: "Speed!", color: GREEN, size: 32, bold: true },
          { type: "text", x: 400, y: 500, text: "Steeper line = moving faster.", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "What does it mean when two lines cross on a graph?",
        rule: "What does it mean when two lines cross on a graph?",
        quizQ: "What does it mean when two lines cross on a graph?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Crossing Lines", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What does it mean when two lines cross on a graph?", color: TEXT_MAIN, size: 24 },
          
          // Grid
          { type: "path", d: "M 250 350 L 550 350", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "path", d: "M 250 150 L 250 350", stroke: TEXT_SUB, width: 2, fill: "none" },
          
          // Lines crossing
          { type: "path", d: "M 250 300 L 550 150", stroke: BLUE, width: 3, fill: "none" },
          { type: "path", d: "M 250 180 L 550 320", stroke: RED, width: 3, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "It means they are exactly equal at that moment! Like two cars passing each other.",
        rule: "It means they are exactly equal at that moment! (Like two cars passing each other).",
        quizQ: "",
        quizA: "It means they are exactly equal at that moment! (Like two cars passing each other).",
        elements: [
          // Star at intersection
          { type: "circle", cx: 400, cy: 250, r: 8, fill: ORANGE },
          { type: "path", d: "M 400 250 L 450 200", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 500, y: 190, text: "Meeting point!", color: ORANGE, size: 18 },
          
          { type: "text", x: 400, y: 460, text: "They are EXACTLY EQUAL at that moment!", color: GREEN, size: 24, bold: true },
          { type: "text", x: 400, y: 500, text: "(Like two cars passing each other)", color: TEXT_SUB, size: 20 }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 7 Chapter 10!");
