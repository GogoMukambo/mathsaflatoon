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
// m7_15.1: Frequency polygons
// ------------------------------------------------------------------
data["m7_15.1"] = {
  title: "15.1 Frequency polygons",
  watermark: "Section 15.1: Frequency Polygons",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do you draw a frequency polygon?",
        rule: "How do you draw a frequency polygon?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Frequency Polygons", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you draw a frequency polygon?", color: TEXT_MAIN, size: 24 },
          
          // Axes
          { type: "path", d: "M 250 350 L 550 350", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "path", d: "M 250 180 L 250 350", stroke: TEXT_SUB, width: 2, fill: "none" },
          
          // Faded bars
          { type: "rect", x: 280, y: 250, width: 40, height: 100, fill: "#e2e8f0", stroke: "#cbd5e1", strokeWidth: 2 },
          { type: "rect", x: 340, y: 200, width: 40, height: 150, fill: "#e2e8f0", stroke: "#cbd5e1", strokeWidth: 2 },
          { type: "rect", x: 400, y: 280, width: 40, height: 70, fill: "#e2e8f0", stroke: "#cbd5e1", strokeWidth: 2 },
          { type: "rect", x: 460, y: 310, width: 40, height: 40, fill: "#e2e8f0", stroke: "#cbd5e1", strokeWidth: 2 }
        ]
      },
      {
        clear: false,
        narration: "Find the middle of each group (the midpoint) and plot a dot at the top. Then connect them!",
        rule: "Find the middle of each group (the midpoint) and plot a dot at the frequency. Then connect the dots with straight lines!",
        quizQ: "",
        quizA: "",
        elements: [
          // Dots and lines
          { type: "circle", cx: 300, cy: 250, r: 6, fill: BLUE },
          { type: "circle", cx: 360, cy: 200, r: 6, fill: BLUE },
          { type: "circle", cx: 420, cy: 280, r: 6, fill: BLUE },
          { type: "circle", cx: 480, cy: 310, r: 6, fill: BLUE },
          
          { type: "path", d: "M 300 250 L 360 200 L 420 280 L 480 310", stroke: BLUE, width: 3, fill: "none" },
          
          { type: "text", x: 400, y: 450, text: "Plot a dot at the MIDPOINT of each group.", color: GREEN, size: 24, bold: true },
          { type: "text", x: 400, y: 490, text: "Then connect them with straight lines!", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's plot a point.",
        rule: "Group 10–20, frequency 8. Where do you put the dot?",
        quizQ: "Group 10–20, frequency 8. Where do you put the dot?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Plotting the Midpoint", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Group 10–20, frequency 8. Where do you put the dot?", color: TEXT_MAIN, size: 22 },
          
          // Axis
          { type: "path", d: "M 250 350 L 550 350", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "path", d: "M 250 180 L 250 350", stroke: TEXT_SUB, width: 2, fill: "none" },
          
          { type: "path", d: "M 300 345 L 300 355", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 300, y: 375, text: "10", color: TEXT_MAIN, size: 16 },
          
          { type: "path", d: "M 400 345 L 400 355", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 400, y: 375, text: "20", color: TEXT_MAIN, size: 16 },
          
          { type: "path", d: "M 245 250 L 255 250", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 220, y: 255, text: "8", color: TEXT_MAIN, size: 16 }
        ]
      },
      {
        clear: false,
        narration: "The middle of 10 and 20 is 15. So plot the dot at x=15, y=8.",
        rule: "The middle of 10 and 20 is 15. So plot a dot at x=15, y=8.",
        quizQ: "",
        quizA: "The middle of 10 and 20 is 15. So plot a dot at x=15, y=8.",
        elements: [
          { type: "path", d: "M 350 345 L 350 355", stroke: ORANGE, width: 2, fill: "none" },
          { type: "text", x: 350, y: 375, text: "15", color: ORANGE, size: 16, bold: true },
          
          { type: "path", d: "M 350 350 L 350 250 L 250 250", stroke: ORANGE, width: 2, fill: "none", dash: "4,4" },
          { type: "circle", cx: 350, cy: 250, r: 8, fill: ORANGE },
          
          { type: "text", x: 400, y: 460, text: "Midpoint is 15.", color: GREEN, size: 28, bold: true },
          { type: "text", x: 400, y: 500, text: "Plot dot at x = 15, y = 8", color: TEXT_SUB, size: 24 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Why are frequency polygons useful?",
        rule: "Why are frequency polygons useful?",
        quizQ: "Why are frequency polygons useful?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Why use them?", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Why are frequency polygons useful?", color: TEXT_MAIN, size: 24 },
          
          // Axes
          { type: "path", d: "M 250 350 L 550 350", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "path", d: "M 250 180 L 250 350", stroke: TEXT_SUB, width: 2, fill: "none" },
          
          // Polygon 1
          { type: "path", d: "M 300 300 L 350 220 L 400 280 L 450 320", stroke: BLUE, width: 3, fill: "none" },
          { type: "text", x: 350, y: 200, text: "Class A", color: BLUE, size: 16 },
          
          // Polygon 2
          { type: "path", d: "M 300 320 L 350 280 L 400 200 L 450 250", stroke: RED, width: 3, fill: "none" },
          { type: "text", x: 400, y: 180, text: "Class B", color: RED, size: 16 }
        ]
      },
      {
        clear: false,
        narration: "They are great for comparing two sets of data on the same graph!",
        rule: "They are great for comparing two sets of data on the same graph (like test scores for two different classes).",
        quizQ: "",
        quizA: "They are great for comparing two sets of data on the same graph (like test scores for two different classes).",
        elements: [
          { type: "text", x: 400, y: 450, text: "They are great for COMPARING two groups!", color: GREEN, size: 28, bold: true },
          { type: "text", x: 400, y: 490, text: "(Bar charts would overlap and look messy)", color: TEXT_SUB, size: 20 }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_15.2: Scatter graphs
// ------------------------------------------------------------------
data["m7_15.2"] = {
  title: "15.2 Scatter graphs",
  watermark: "Section 15.2: Scatter Graphs",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What does a scatter graph show?",
        rule: "What does a scatter graph show?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Scatter Graphs", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What does a scatter graph show?", color: TEXT_MAIN, size: 24 },
          
          // Graph 1 (Positive)
          { type: "path", d: "M 150 350 L 250 350 M 150 250 L 150 350", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "circle", cx: 170, cy: 330, r: 3, fill: BLUE }, { type: "circle", cx: 190, cy: 310, r: 3, fill: BLUE },
          { type: "circle", cx: 210, cy: 290, r: 3, fill: BLUE }, { type: "circle", cx: 230, cy: 270, r: 3, fill: BLUE },
          { type: "text", x: 200, y: 380, text: "Positive", color: BLUE, size: 16 },
          
          // Graph 2 (Negative)
          { type: "path", d: "M 350 350 L 450 350 M 350 250 L 350 350", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "circle", cx: 370, cy: 270, r: 3, fill: RED }, { type: "circle", cx: 390, cy: 290, r: 3, fill: RED },
          { type: "circle", cx: 410, cy: 310, r: 3, fill: RED }, { type: "circle", cx: 430, cy: 330, r: 3, fill: RED },
          { type: "text", x: 400, y: 380, text: "Negative", color: RED, size: 16 },
          
          // Graph 3 (None)
          { type: "path", d: "M 550 350 L 650 350 M 550 250 L 550 350", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "circle", cx: 570, cy: 280, r: 3, fill: ORANGE }, { type: "circle", cx: 590, cy: 330, r: 3, fill: ORANGE },
          { type: "circle", cx: 610, cy: 270, r: 3, fill: ORANGE }, { type: "circle", cx: 630, cy: 310, r: 3, fill: ORANGE },
          { type: "text", x: 600, y: 380, text: "No Correlation", color: ORANGE, size: 16 }
        ]
      },
      {
        clear: false,
        narration: "It shows if two things are linked! This is called correlation.",
        rule: "It shows if two things are linked (correlation). Positive (both go up), Negative (one goes up, one goes down), or None (random dots!).",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 450, text: "It shows if two things are linked (Correlation).", color: GREEN, size: 24, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "What is an outlier?",
        rule: "What is an 'outlier'?",
        quizQ: "What is an 'outlier'?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Outliers", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is an 'outlier'?", color: TEXT_MAIN, size: 24 },
          
          // Graph
          { type: "path", d: "M 250 350 L 550 350", stroke: TEXT_SUB, width: 2, fill: "none" },
          { type: "path", d: "M 250 180 L 250 350", stroke: TEXT_SUB, width: 2, fill: "none" },
          
          // Normal dots
          { type: "circle", cx: 300, cy: 300, r: 5, fill: BLUE },
          { type: "circle", cx: 350, cy: 270, r: 5, fill: BLUE },
          { type: "circle", cx: 400, cy: 240, r: 5, fill: BLUE },
          { type: "circle", cx: 450, cy: 210, r: 5, fill: BLUE }
        ]
      },
      {
        clear: false,
        narration: "It's a weird result! A dot that doesn't fit the pattern of the rest of the graph.",
        rule: "A weird result! It's a dot that doesn't fit the pattern of the rest of the graph.",
        quizQ: "",
        quizA: "A weird result! It's a dot that doesn't fit the pattern of the rest of the graph.",
        elements: [
          // Outlier
          { type: "circle", cx: 500, cy: 320, r: 6, fill: RED },
          { type: "text", x: 500, y: 350, text: "Outlier!", color: RED, size: 16, bold: true },
          
          { type: "text", x: 400, y: 450, text: "A weird result!", color: RED, size: 28, bold: true },
          { type: "text", x: 400, y: 490, text: "It doesn't fit the pattern of the other dots.", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Does correlation mean causation?",
        rule: "If two things are correlated, does one CAUSE the other?",
        quizQ: "If two things are correlated, does one CAUSE the other?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Correlation vs Causation", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "If two things are correlated, does one CAUSE the other?", color: TEXT_MAIN, size: 22 },
          
          { type: "rect", x: 200, y: 220, width: 150, height: 100, fill: "#fef08a", stroke: ORANGE, strokeWidth: 2, rx: 10 },
          { type: "text", x: 275, y: 260, text: "Ice Cream", color: ORANGE, size: 20 },
          { type: "text", x: 275, y: 290, text: "Sales", color: ORANGE, size: 20 },
          
          { type: "path", d: "M 360 270 L 440 270", stroke: TEXT_MAIN, width: 4, fill: "none" },
          { type: "path", d: "M 420 250 L 440 270 L 420 290", stroke: TEXT_MAIN, width: 4, fill: "none" },
          
          { type: "rect", x: 450, y: 220, width: 150, height: 100, fill: "#fef2f2", stroke: RED, strokeWidth: 2, rx: 10 },
          { type: "text", x: 525, y: 275, text: "Sunburns", color: RED, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "No! Just because ice cream sales and sunburns both go up in summer, doesn't mean ice cream causes sunburns!",
        rule: "No! Just because ice cream sales and sunburns both go up in summer, doesn't mean ice cream causes sunburns!",
        quizQ: "",
        quizA: "No! Just because ice cream sales and sunburns both go up in summer, doesn't mean ice cream causes sunburns!",
        elements: [
          { type: "path", d: "M 380 230 L 420 310", stroke: RED, width: 6, fill: "none" }, // Cross out arrow
          { type: "path", d: "M 420 230 L 380 310", stroke: RED, width: 6, fill: "none" },
          
          { type: "text", x: 400, y: 380, text: "They just both happen when it's HOT outside!", color: BLUE, size: 20 },
          
          { type: "text", x: 400, y: 460, text: "NO! Correlation is not causation.", color: RED, size: 28, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_15.3: Back-to-back stem-and-leaf
// ------------------------------------------------------------------
data["m7_15.3"] = {
  title: "15.3 Back-to-back stem-and-leaf",
  watermark: "Section 15.3: Stem & Leaf",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What is a back-to-back stem-and-leaf diagram?",
        rule: "What is a back-to-back stem-and-leaf diagram?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Back-to-Back", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is a back-to-back stem-and-leaf diagram?", color: TEXT_MAIN, size: 24 },
          
          // Diagram
          { type: "text", x: 300, y: 220, text: "Class A", color: BLUE, size: 20 },
          { type: "text", x: 500, y: 220, text: "Class B", color: RED, size: 20 },
          
          { type: "path", d: "M 370 240 L 370 360", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "path", d: "M 430 240 L 430 360", stroke: TEXT_MAIN, width: 2, fill: "none" },
          
          { type: "text", x: 400, y: 260, text: "1", color: TEXT_MAIN, size: 20 },
          { type: "text", x: 400, y: 300, text: "2", color: TEXT_MAIN, size: 20 },
          { type: "text", x: 400, y: 340, text: "3", color: TEXT_MAIN, size: 20 },
          
          { type: "text", x: 340, y: 260, text: "8", color: BLUE, size: 20 },
          { type: "text", x: 460, y: 260, text: "5 7", color: RED, size: 20 },
          
          { type: "text", x: 320, y: 300, text: "5 2 1", color: BLUE, size: 20 },
          { type: "text", x: 460, y: 300, text: "0 4", color: RED, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "It's a way to compare two groups. The stem is in the middle, and the leaves grow outwards.",
        rule: "It's a way to compare two groups. The 'stem' is in the middle, and the 'leaves' grow outwards to the left and right.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 440, text: "It compares two groups!", color: GREEN, size: 24, bold: true },
          { type: "text", x: 400, y: 480, text: "Stem in the middle, leaves grow outwards.", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_1": [
      {
        narration: "What is the most important thing to include?",
        rule: "What is the most important thing to include?",
        quizQ: "What is the most important thing to include?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Diagram Rules", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is the most important thing to include?", color: TEXT_MAIN, size: 24 },
          
          { type: "path", d: "M 380 240 L 380 320", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 360, y: 280, text: "3", color: BLUE, size: 30 },
          { type: "text", x: 410, y: 280, text: "2", color: TEXT_MAIN, size: 30 }
        ]
      },
      {
        clear: false,
        narration: "A key! You need to explain what the numbers mean.",
        rule: "A key! You need to explain what the numbers mean (e.g., does 3 | 2 mean 32, or 3.2?).",
        quizQ: "",
        quizA: "A key! You need to explain what the numbers mean (e.g., does 3 | 2 mean 32, or 3.2?).",
        elements: [
          { type: "text", x: 400, y: 400, text: "A KEY!", color: RED, size: 36, bold: true },
          { type: "text", x: 400, y: 450, text: "Does 3 | 2 mean 32, or 3.2?", color: TEXT_SUB, size: 20 },
          { type: "text", x: 400, y: 480, text: "The key tells you!", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "How do you find the median?",
        rule: "How do you find the median?",
        quizQ: "How do you find the median?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Finding the Median", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you find the median?", color: TEXT_MAIN, size: 24 },
          
          { type: "path", d: "M 380 220 L 380 340", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 360, y: 250, text: "1", color: TEXT_MAIN, size: 20 },
          { type: "text", x: 360, y: 290, text: "2", color: TEXT_MAIN, size: 20 },
          { type: "text", x: 360, y: 330, text: "3", color: TEXT_MAIN, size: 20 },
          
          { type: "text", x: 420, y: 250, text: "5 8", color: BLUE, size: 20 },
          { type: "text", x: 430, y: 290, text: "1 4 7", color: BLUE, size: 20 },
          { type: "text", x: 410, y: 330, text: "2", color: BLUE, size: 20 }
        ]
      },
      {
        clear: false,
        narration: "Count the leaves from smallest to largest until you reach the exact middle value.",
        rule: "Count the leaves from smallest to largest until you reach the exact middle value.",
        quizQ: "",
        quizA: "Count the leaves from smallest to largest until you reach the exact middle value.",
        elements: [
          { type: "circle", cx: 428, cy: 285, r: 12, fill: "none", stroke: RED, width: 2 },
          { type: "text", x: 500, y: 290, text: "Middle value!", color: RED, size: 16 },
          
          { type: "text", x: 400, y: 440, text: "Count the leaves from smallest to largest.", color: GREEN, size: 24, bold: true },
          { type: "text", x: 400, y: 480, text: "Find the exact middle value.", color: TEXT_SUB, size: 20 }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 7 Chapter 15!");
