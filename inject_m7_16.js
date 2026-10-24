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
// m7_16.1: Interpreting and drawing frequency diagrams
// ------------------------------------------------------------------
data["m7_16.1"] = {
  title: "16.1 Interpreting and drawing frequency diagrams",
  watermark: "Section 16.1: Bar Charts",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "Why do some bar charts have gaps and some don't?",
        rule: "Why do some bar charts have gaps and some don't?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Gaps in Bar Charts", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "Why do some bar charts have gaps and some don't?", color: TEXT_MAIN, size: 24 },
          
          // Chart with gaps
          { type: "text", x: 250, y: 200, text: "Gaps", color: BLUE, size: 20 },
          { type: "path", d: "M 150 350 L 350 350", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "rect", x: 170, y: 250, width: 30, height: 100, fill: BLUE },
          { type: "rect", x: 220, y: 220, width: 30, height: 130, fill: BLUE },
          { type: "rect", x: 270, y: 280, width: 30, height: 70, fill: BLUE },
          
          // Chart without gaps
          { type: "text", x: 550, y: 200, text: "No Gaps", color: GREEN, size: 20 },
          { type: "path", d: "M 450 350 L 650 350", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "rect", x: 470, y: 250, width: 40, height: 100, fill: GREEN, stroke: TEXT_MAIN, strokeWidth: 1 },
          { type: "rect", x: 510, y: 220, width: 40, height: 130, fill: GREEN, stroke: TEXT_MAIN, strokeWidth: 1 },
          { type: "rect", x: 550, y: 280, width: 40, height: 70, fill: GREEN, stroke: TEXT_MAIN, strokeWidth: 1 }
        ]
      },
      {
        clear: false,
        narration: "If the data is counted, like shoe sizes, there are gaps. If it's measured, like height, the bars touch!",
        rule: "If the data is counted (like shoe sizes), the bars have gaps. If the data is measured continuously (like height), the bars touch because there are no gaps between heights!",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 250, y: 400, text: "Counted Data", color: BLUE, size: 20, bold: true },
          { type: "text", x: 250, y: 430, text: "(Discrete)", color: TEXT_SUB, size: 16 },
          { type: "text", x: 250, y: 460, text: "e.g., Shoe size", color: TEXT_SUB, size: 16 },
          
          { type: "text", x: 550, y: 400, text: "Measured Data", color: GREEN, size: 20, bold: true },
          { type: "text", x: 550, y: 430, text: "(Continuous)", color: TEXT_SUB, size: 16 },
          { type: "text", x: 550, y: 460, text: "e.g., Height", color: TEXT_SUB, size: 16 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "What does a taller bar mean?",
        rule: "A bar is twice as tall as another. What does that mean?",
        quizQ: "A bar is twice as tall as another. What does that mean?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Reading Heights", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "A bar is twice as tall as another. What does that mean?", color: TEXT_MAIN, size: 24 },
          
          // Chart
          { type: "path", d: "M 250 350 L 550 350", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "path", d: "M 250 150 L 250 350", stroke: TEXT_MAIN, width: 2, fill: "none" },
          
          { type: "rect", x: 300, y: 250, width: 60, height: 100, fill: BLUE },
          { type: "text", x: 330, y: 230, text: "10", color: BLUE, size: 20 },
          
          { type: "rect", x: 420, y: 150, width: 60, height: 200, fill: RED },
          { type: "text", x: 450, y: 130, text: "20", color: RED, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "It means exactly twice as many people chose that thing!",
        rule: "It means exactly twice as many people chose that thing (as long as the graph starts at zero!).",
        quizQ: "",
        quizA: "It means exactly twice as many people chose that thing (as long as the graph starts at zero!).",
        elements: [
          { type: "text", x: 400, y: 440, text: "Twice as tall = Twice as many people!", color: GREEN, size: 28, bold: true },
          { type: "text", x: 400, y: 480, text: "(As long as the graph starts at 0)", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Why are there gaps for shoe sizes but not heights?",
        rule: "Why are there gaps between bars for shoe sizes but not for heights?",
        quizQ: "Why are there gaps between bars for shoe sizes but not for heights?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Discrete vs Continuous", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Why are there gaps for shoe sizes but not for heights?", color: TEXT_MAIN, size: 22 }
        ]
      },
      {
        clear: false,
        narration: "Shoe size is discrete, you can't have a size 4.123! Height is continuous, so the groups touch.",
        rule: "Shoe size is discrete (you can't have a size 4.123). Height is continuous, so the groups touch.",
        quizQ: "",
        quizA: "Shoe size is discrete (you can't have a size 4.123). Height is continuous, so the groups touch.",
        elements: [
          { type: "text", x: 400, y: 250, text: "Shoe Size = Discrete", color: BLUE, size: 24, bold: true },
          { type: "text", x: 400, y: 290, text: "You can't have a size 4.123! So there are gaps.", color: TEXT_SUB, size: 20 },
          
          { type: "text", x: 400, y: 380, text: "Height = Continuous", color: GREEN, size: 24, bold: true },
          { type: "text", x: 400, y: 420, text: "Heights blend into each other. So the bars touch.", color: TEXT_SUB, size: 20 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_16.2: Time series graphs
// ------------------------------------------------------------------
data["m7_16.2"] = {
  title: "16.2 Time series graphs",
  watermark: "Section 16.2: Time Series",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What is a 'time series' graph?",
        rule: "What is a 'time series' graph?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Time Series", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is a 'time series' graph?", color: TEXT_MAIN, size: 24 },
          
          // Graph
          { type: "path", d: "M 200 350 L 600 350", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "path", d: "M 200 150 L 200 350", stroke: TEXT_MAIN, width: 2, fill: "none" },
          
          { type: "text", x: 400, y: 380, text: "Time (Months, Years, etc.)", color: BLUE, size: 20, bold: true },
          
          { type: "path", d: "M 200 300 L 300 250 L 400 280 L 500 200 L 600 220", stroke: RED, width: 3, fill: "none" },
          { type: "circle", cx: 200, cy: 300, r: 4, fill: RED },
          { type: "circle", cx: 300, cy: 250, r: 4, fill: RED },
          { type: "circle", cx: 400, cy: 280, r: 4, fill: RED },
          { type: "circle", cx: 500, cy: 200, r: 4, fill: RED },
          { type: "circle", cx: 600, cy: 220, r: 4, fill: RED }
        ]
      },
      {
        clear: false,
        narration: "It's a graph where time goes along the bottom. You join the dots to see the trend.",
        rule: "It's a graph where time goes along the bottom. You join the dots in order to see if things are going up or down over time (the 'trend').",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 450, text: "Time is ALWAYS on the bottom axis.", color: GREEN, size: 24, bold: true },
          { type: "text", x: 400, y: 490, text: "Join the dots to see the trend!", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "What is a 'trend'?",
        rule: "What is a 'trend'?",
        quizQ: "What is a 'trend'?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Spotting the Trend", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is a 'trend'?", color: TEXT_MAIN, size: 24 },
          
          // Graph
          { type: "path", d: "M 200 350 L 600 350", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "path", d: "M 200 150 L 200 350", stroke: TEXT_MAIN, width: 2, fill: "none" },
          
          // Zig zag line
          { type: "path", d: "M 200 320 L 250 340 L 300 280 L 350 300 L 400 220 L 450 250 L 500 180 L 550 200 L 600 150", stroke: BLUE, width: 2, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "It's the overall direction the line is going, ignoring the little zig-zags!",
        rule: "The overall direction the line is going (like a slow rise), ignoring the little bouncy zig-zags along the way.",
        quizQ: "",
        quizA: "The overall direction the line is going (like a slow rise), ignoring the little bouncy zig-zags along the way.",
        elements: [
          // Trend line
          { type: "path", d: "M 200 320 L 600 150", stroke: ORANGE, width: 4, fill: "none", dash: "10,10" },
          { type: "text", x: 400, y: 220, text: "Upward Trend", color: ORANGE, size: 24, bold: true },
          
          { type: "text", x: 400, y: 450, text: "The OVERALL direction.", color: GREEN, size: 28, bold: true },
          { type: "text", x: 400, y: 490, text: "Ignore the little bouncy zig-zags!", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Why join the points in a time series but not in a scatter graph?",
        rule: "Why join the points in a time series but not in a scatter graph?",
        quizQ: "Why join the points in a time series but not in a scatter graph?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Joining Dots", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Why join points in time series, but not scatter graphs?", color: TEXT_MAIN, size: 22 }
        ]
      },
      {
        clear: false,
        narration: "Because time happens in order! A scatter graph just compares two random things.",
        rule: "Time happens in order! A scatter graph just compares two random things that don't follow a path.",
        quizQ: "",
        quizA: "Time happens in order! A scatter graph just compares two random things that don't follow a path.",
        elements: [
          { type: "text", x: 250, y: 250, text: "Time Series", color: BLUE, size: 24, bold: true },
          { type: "path", d: "M 180 320 L 250 280 L 320 300", stroke: BLUE, width: 3, fill: "none" },
          { type: "circle", cx: 180, cy: 320, r: 4, fill: BLUE },
          { type: "circle", cx: 250, cy: 280, r: 4, fill: BLUE },
          { type: "circle", cx: 320, cy: 300, r: 4, fill: BLUE },
          { type: "text", x: 250, y: 360, text: "Time happens in order.", color: TEXT_SUB, size: 16 },
          
          { type: "text", x: 550, y: 250, text: "Scatter Graph", color: RED, size: 24, bold: true },
          { type: "circle", cx: 500, cy: 320, r: 4, fill: RED },
          { type: "circle", cx: 550, cy: 280, r: 4, fill: RED },
          { type: "circle", cx: 600, cy: 300, r: 4, fill: RED },
          { type: "circle", cx: 520, cy: 290, r: 4, fill: RED },
          { type: "text", x: 550, y: 360, text: "Random things, no path.", color: TEXT_SUB, size: 16 },
          
          { type: "text", x: 400, y: 460, text: "Time has a strict order!", color: GREEN, size: 28, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_16.3: Stem-and-leaf diagrams
// ------------------------------------------------------------------
data["m7_16.3"] = {
  title: "16.3 Stem-and-leaf diagrams",
  watermark: "Section 16.3: Stem & Leaf",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How does a stem-and-leaf diagram work?",
        rule: "How does a stem-and-leaf diagram work?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Stem-and-Leaf", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How does a stem-and-leaf diagram work?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 350, y: 250, text: "1", color: BLUE, size: 40 },
          { type: "path", d: "M 380 210 L 380 290", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 410, y: 250, text: "9", color: RED, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "The stem is the first digit, and the leaf is the last digit. 1 | 9 means 19!",
        rule: "It's a clever way to list numbers! The 'stem' is the first digit (like the tens), and the 'leaves' are the last digits (like the ones). 1 | 9 means 19.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 350, y: 310, text: "Stem", color: BLUE, size: 20 },
          { type: "text", x: 350, y: 340, text: "(Tens)", color: BLUE, size: 16 },
          
          { type: "text", x: 410, y: 310, text: "Leaf", color: RED, size: 20 },
          { type: "text", x: 410, y: 340, text: "(Ones)", color: RED, size: 16 },
          
          { type: "text", x: 400, y: 450, text: "1 | 9 means 19", color: GREEN, size: 36, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's read a row from a diagram.",
        rule: "Using that key, what temperatures are in the row 2 | 1 1 5 6 7 9?",
        quizQ: "Using that key, what temperatures are in the row 2 | 1 1 5 6 7 9?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Reading the Leaves", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What temperatures are in this row?", color: TEXT_MAIN, size: 24 },
          
          { type: "text", x: 300, y: 250, text: "2", color: BLUE, size: 40 },
          { type: "path", d: "M 330 210 L 330 290", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "text", x: 450, y: 250, text: "1  1  5  6  7  9", color: RED, size: 40 }
        ]
      },
      {
        clear: false,
        narration: "Just put the 2 in front of every leaf! 21, 21, 25, 26, 27, and 29.",
        rule: "21, 21, 25, 26, 27, and 29.",
        quizQ: "",
        quizA: "21, 21, 25, 26, 27, and 29.",
        elements: [
          { type: "text", x: 400, y: 400, text: "Put the '2' in front of every leaf!", color: TEXT_SUB, size: 24 },
          { type: "text", x: 400, y: 460, text: "21, 21, 25, 26, 27, 29", color: GREEN, size: 32, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Why is a stem-and-leaf diagram useful?",
        rule: "Why is a stem-and-leaf diagram useful?",
        quizQ: "Why is a stem-and-leaf diagram useful?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Why use it?", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Why is a stem-and-leaf diagram useful?", color: TEXT_MAIN, size: 24 },
          
          // Diagram
          { type: "path", d: "M 350 200 L 350 350", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 330, y: 230, text: "1", color: TEXT_MAIN, size: 20 },
          { type: "text", x: 330, y: 270, text: "2", color: TEXT_MAIN, size: 20 },
          { type: "text", x: 330, y: 310, text: "3", color: TEXT_MAIN, size: 20 },
          
          { type: "text", x: 400, y: 230, text: "2 5", color: BLUE, size: 20 },
          { type: "text", x: 430, y: 270, text: "1 1 5 6 7", color: BLUE, size: 20 },
          { type: "text", x: 380, y: 310, text: "0", color: BLUE, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "You can see the shape of the data, like a bar chart, but you can still read every exact number!",
        rule: "You can see the shape of the data (like a bar chart on its side) but you can still read every single exact number!",
        quizQ: "",
        quizA: "You can see the shape of the data (like a bar chart on its side) but you can still read every single exact number!",
        elements: [
          // Outline like a bar chart
          { type: "path", d: "M 360 215 L 430 215 L 430 245 L 360 245", stroke: ORANGE, width: 2, fill: "rgba(217, 119, 6, 0.2)" },
          { type: "path", d: "M 360 255 L 490 255 L 490 285 L 360 285", stroke: ORANGE, width: 2, fill: "rgba(217, 119, 6, 0.2)" },
          { type: "path", d: "M 360 295 L 400 295 L 400 325 L 360 325", stroke: ORANGE, width: 2, fill: "rgba(217, 119, 6, 0.2)" },
          
          { type: "text", x: 400, y: 440, text: "It looks like a bar chart on its side!", color: ORANGE, size: 24, bold: true },
          { type: "text", x: 400, y: 480, text: "But you can still read EVERY exact number.", color: GREEN, size: 20 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_16.4: Pie charts
// ------------------------------------------------------------------
data["m7_16.4"] = {
  title: "16.4 Pie charts",
  watermark: "Section 16.4: Pie Charts",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do you draw a slice of a pie chart?",
        rule: "How do you draw a slice of a pie chart?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Pie Chart Slices", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you draw a slice of a pie chart?", color: TEXT_MAIN, size: 24 },
          
          { type: "circle", cx: 400, cy: 300, r: 100, fill: "none", stroke: BLUE, width: 3 },
          { type: "path", d: "M 400 300 L 400 200 A 100 100 0 0 1 486 250 Z", fill: "#fef08a", stroke: BLUE, width: 2 }
        ]
      },
      {
        clear: false,
        narration: "Find the fraction of people who chose it, then multiply by 360 degrees.",
        rule: "Find the fraction of people who chose it, then multiply by 360° (a full circle).",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 460, text: "Find the fraction, then multiply by 360°", color: GREEN, size: 28, bold: true },
          { type: "text", x: 400, y: 500, text: "Angle = Fraction × 360°", color: TEXT_SUB, size: 24 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's find the angle for a slice.",
        rule: "20 people were asked, and 5 chose red. What angle is the red slice?",
        quizQ: "20 people were asked, and 5 chose red. What angle is the red slice?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Calculating Angles", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "20 people asked. 5 chose red. What angle is the red slice?", color: TEXT_MAIN, size: 22 },
          
          { type: "text", x: 250, y: 250, text: "5", color: RED, size: 30 },
          { type: "path", d: "M 230 270 L 270 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 250, y: 300, text: "20", color: TEXT_MAIN, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "5 out of 20 is a quarter. A quarter of 360 is 90 degrees!",
        rule: "5 out of 20 is a quarter (1/4). A quarter of 360° is 90° (a right angle!).",
        quizQ: "",
        quizA: "5 out of 20 is a quarter (1/4). A quarter of 360° is 90° (a right angle!).",
        elements: [
          { type: "text", x: 310, y: 275, text: "=", color: TEXT_MAIN, size: 30 },
          { type: "text", x: 360, y: 250, text: "1", color: BLUE, size: 30 },
          { type: "path", d: "M 340 270 L 380 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "text", x: 360, y: 300, text: "4", color: BLUE, size: 30 },
          
          { type: "text", x: 420, y: 275, text: "× 360° =", color: TEXT_MAIN, size: 30 },
          { type: "text", x: 530, y: 275, text: "90°", color: RED, size: 40, bold: true },
          
          { type: "circle", cx: 400, cy: 430, r: 60, fill: "none", stroke: TEXT_MAIN, width: 2 },
          { type: "path", d: "M 400 430 L 400 370 A 60 60 0 0 1 460 430 Z", fill: RED, stroke: TEXT_MAIN, width: 2 },
          { type: "path", d: "M 400 415 L 415 415 L 415 430", stroke: TEXT_MAIN, width: 2, fill: "none" } // Right angle square
        ]
      }
    ],
    "card_2": [
      {
        narration: "Let's work backwards from an angle.",
        rule: "A slice is 120° and 30 people were surveyed in total. How many people does the slice represent?",
        quizQ: "A slice is 120° and 30 people were surveyed in total. How many people does the slice represent?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Working Backwards", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Slice is 120°. Total 30 people. How many people in the slice?", color: TEXT_MAIN, size: 22 },
          
          { type: "circle", cx: 400, cy: 280, r: 80, fill: "none", stroke: TEXT_MAIN, width: 2 },
          { type: "path", d: "M 400 280 L 400 200 A 80 80 0 0 1 469 320 Z", fill: "#e0f2fe", stroke: TEXT_MAIN, width: 2 },
          { type: "text", x: 430, y: 260, text: "120°", color: BLUE, size: 16 }
        ]
      },
      {
        clear: false,
        narration: "120 degrees is one-third of 360. One-third of 30 people is 10 people.",
        rule: "120° is one-third of 360°. One-third of 30 people is 10 people.",
        quizQ: "",
        quizA: "120° is one-third of 360°. One-third of 30 people is 10 people.",
        elements: [
          { type: "text", x: 400, y: 420, text: "120° is 1/3 of the circle.", color: BLUE, size: 24 },
          { type: "text", x: 400, y: 480, text: "1/3 of 30 people = 10 people", color: GREEN, size: 32, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_16.5: Representing data
// ------------------------------------------------------------------
data["m7_16.5"] = {
  title: "16.5 Representing data",
  watermark: "Section 16.5: Choosing Graphs",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "Which graph should I use?",
        rule: "Which graph should I use?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Choosing Graphs", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "Which graph should I use?", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "Time series for change over time. Pie chart for shares. Stem-and-leaf for exact numbers. Scatter graph for linked things.",
        rule: "Change over time = time series. A share of a whole = pie chart. Exact numbers = stem-and-leaf. Two linked things = scatter graph.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 250, y: 250, text: "Time Series", color: BLUE, size: 20, bold: true },
          { type: "text", x: 250, y: 280, text: "(Change over time)", color: TEXT_SUB, size: 16 },
          
          { type: "text", x: 550, y: 250, text: "Pie Chart", color: RED, size: 20, bold: true },
          { type: "text", x: 550, y: 280, text: "(Share of a whole)", color: TEXT_SUB, size: 16 },
          
          { type: "text", x: 250, y: 380, text: "Stem-and-Leaf", color: GREEN, size: 20, bold: true },
          { type: "text", x: 250, y: 410, text: "(Exact numbers)", color: TEXT_SUB, size: 16 },
          
          { type: "text", x: 550, y: 380, text: "Scatter Graph", color: ORANGE, size: 20, bold: true },
          { type: "text", x: 550, y: 410, text: "(Two linked things)", color: TEXT_SUB, size: 16 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "What must every good graph have?",
        rule: "What must every good graph have?",
        quizQ: "What must every good graph have?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Graph Rules", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What must every good graph have?", color: TEXT_MAIN, size: 24 },
          
          // Blank graph
          { type: "path", d: "M 300 350 L 500 350", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "path", d: "M 300 200 L 300 350", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "rect", x: 320, y: 250, width: 40, height: 100, fill: BLUE },
          { type: "rect", x: 400, y: 220, width: 40, height: 130, fill: BLUE }
        ]
      },
      {
        clear: false,
        narration: "A title, labels on the sides, and units!",
        rule: "A title, labels on the sides, and units (like 'cm' or 'minutes').",
        quizQ: "",
        quizA: "A title, labels on the sides, and units (like 'cm' or 'minutes').",
        elements: [
          { type: "text", x: 400, y: 180, text: "1. TITLE", color: RED, size: 20, bold: true },
          
          { type: "text", x: 250, y: 275, text: "2. LABELS", color: ORANGE, size: 18, bold: true },
          { type: "text", x: 400, y: 390, text: "2. LABELS", color: ORANGE, size: 18, bold: true },
          
          { type: "text", x: 400, y: 480, text: "A Title, Labels, and Units!", color: GREEN, size: 32, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Why can a 3D pie chart trick you?",
        rule: "Why can a 3D pie chart trick you?",
        quizQ: "Why can a 3D pie chart trick you?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Tricky Graphs", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Why can a 3D pie chart trick you?", color: TEXT_MAIN, size: 24 },
          
          // Fake 3D pie chart
          { type: "path", d: "M 300 280 A 100 40 0 1 0 500 280 A 100 40 0 1 1 300 280 Z", fill: "#e0f2fe", stroke: BLUE, width: 2 },
          { type: "path", d: "M 300 280 L 300 320 A 100 40 0 0 0 500 320 L 500 280", fill: "#bae6fd", stroke: BLUE, width: 2 }
        ]
      },
      {
        clear: false,
        narration: "The slices at the front look way bigger than they actually are!",
        rule: "The slices at the front look way bigger than they actually are!",
        quizQ: "",
        quizA: "The slices at the front look way bigger than they actually are!",
        elements: [
          { type: "text", x: 400, y: 380, text: "The front slice looks HUGE!", color: RED, size: 24, bold: true },
          { type: "text", x: 400, y: 440, text: "3D makes the front look bigger than it is.", color: TEXT_SUB, size: 20 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_16.6: Using statistics
// ------------------------------------------------------------------
data["m7_16.6"] = {
  title: "16.6 Using statistics",
  watermark: "Section 16.6: Statistics",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What are the Mean, Median, Mode and Range?",
        rule: "What are the Mean, Median, Mode and Range?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: The 4 Averages", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What are the Mean, Median, Mode and Range?", color: TEXT_MAIN, size: 24 }
        ]
      },
      {
        clear: false,
        narration: "Mean: add & divide. Median: middle. Mode: most popular. Range: biggest minus smallest.",
        rule: "Mean: add them all and divide. Median: line them up and pick the middle one. Mode: the most popular one. Range: biggest minus smallest.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 250, y: 250, text: "Mean", color: BLUE, size: 24, bold: true },
          { type: "text", x: 250, y: 280, text: "Add & Divide", color: TEXT_SUB, size: 18 },
          
          { type: "text", x: 550, y: 250, text: "Median", color: GREEN, size: 24, bold: true },
          { type: "text", x: 550, y: 280, text: "The Middle One", color: TEXT_SUB, size: 18 },
          
          { type: "text", x: 250, y: 380, text: "Mode", color: RED, size: 24, bold: true },
          { type: "text", x: 250, y: 410, text: "Most Popular", color: TEXT_SUB, size: 18 },
          
          { type: "text", x: 550, y: 380, text: "Range", color: PURPLE, size: 24, bold: true },
          { type: "text", x: 550, y: 410, text: "Biggest - Smallest", color: TEXT_SUB, size: 18 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Which average is best if there is one crazy outlier?",
        rule: "Which average is best if there is one crazy outlier (like a giant number)?",
        quizQ: "Which average is best if there is one crazy outlier (like a giant number)?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Outliers", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Which average is best if there is one crazy outlier?", color: TEXT_MAIN, size: 22 },
          
          { type: "text", x: 400, y: 250, text: "1, 2, 2, 3, 100", color: BLUE, size: 36 }
        ]
      },
      {
        clear: false,
        narration: "The median! The crazy number will pull the mean way up, but the median stays safe in the middle.",
        rule: "The median! The crazy number will pull the mean way up, but the median just stays safe in the middle.",
        quizQ: "",
        quizA: "The median! The crazy number will pull the mean way up, but the median just stays safe in the middle.",
        elements: [
          { type: "path", d: "M 400 280 L 400 320", stroke: GREEN, width: 3, fill: "none" },
          { type: "text", x: 400, y: 350, text: "Median = 2", color: GREEN, size: 24, bold: true },
          
          { type: "text", x: 400, y: 450, text: "The Median!", color: GREEN, size: 36, bold: true },
          { type: "text", x: 400, y: 490, text: "It ignores the crazy 100 and stays safe in the middle.", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "What does the range tell us?",
        rule: "Two classes took a test. Class A had a range of 10. Class B had a range of 30. What does that mean?",
        quizQ: "Two classes took a test. Class A had a range of 10. Class B had a range of 30. What does that mean?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Range", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Class A range = 10. Class B range = 30. What does that mean?", color: TEXT_MAIN, size: 20 },
          
          { type: "text", x: 250, y: 220, text: "Class A (Range 10)", color: BLUE, size: 20 },
          { type: "path", d: "M 200 250 L 300 250", stroke: BLUE, width: 4, fill: "none" },
          
          { type: "text", x: 550, y: 220, text: "Class B (Range 30)", color: RED, size: 20 },
          { type: "path", d: "M 450 250 L 650 250", stroke: RED, width: 4, fill: "none" }
        ]
      },
      {
        clear: false,
        narration: "Class A's scores were much closer together. Class B's scores were spread out everywhere!",
        rule: "Class A's scores were much closer together (more consistent). Class B's scores were spread out everywhere!",
        quizQ: "",
        quizA: "Class A's scores were much closer together (more consistent). Class B's scores were spread out everywhere!",
        elements: [
          { type: "text", x: 400, y: 380, text: "Small Range = Consistent (Close together)", color: BLUE, size: 24, bold: true },
          { type: "text", x: 400, y: 440, text: "Big Range = Spread out everywhere!", color: RED, size: 24, bold: true }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 7 Chapter 16!");
