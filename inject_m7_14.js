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
// m7_14.1: Volume of prisms
// ------------------------------------------------------------------
data["m7_14.1"] = {
  title: "14.1 Volume of prisms",
  watermark: "Section 14.1: Volume",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do you find the volume of a prism?",
        rule: "How do you find the volume of a prism?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Volume of a Prism", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you find the volume of a prism?", color: TEXT_MAIN, size: 24 },
          
          // 3D Prism
          { type: "path", d: "M 300 250 L 350 200 L 500 200 L 450 250 Z", fill: "#e0f2fe", stroke: BLUE, width: 2 }, // Top
          { type: "path", d: "M 500 200 L 500 350 L 450 400 L 450 250 Z", fill: "#bae6fd", stroke: BLUE, width: 2 }, // Right
          { type: "path", d: "M 300 250 L 450 250 L 450 400 L 300 400 Z", fill: "#7dd3fc", stroke: BLUE, width: 3 }  // Front
        ]
      },
      {
        clear: false,
        narration: "Find the area of the front face, then multiply it by how long the shape is!",
        rule: "Find the area of the front face (the cross-section), then multiply it by how long the shape is!",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 375, y: 325, text: "Area of", color: TEXT_MAIN, size: 16 },
          { type: "text", x: 375, y: 345, text: "Front Face", color: TEXT_MAIN, size: 16 },
          
          { type: "path", d: "M 300 420 L 450 420", stroke: RED, width: 3, fill: "none" },
          { type: "text", x: 375, y: 440, text: "Length", color: RED, size: 20 },
          
          { type: "text", x: 400, y: 500, text: "Volume = Area of Front Face × Length", color: GREEN, size: 28, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "Let's find the volume of a triangular prism.",
        rule: "A triangular prism has a front triangle of 6 cm², and a length of 10 cm. What is the volume?",
        quizQ: "A triangular prism has a front triangle of 6 cm², and a length of 10 cm. What is the volume?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Triangular Prism", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Front triangle is 6 cm². Length is 10 cm.", color: TEXT_MAIN, size: 24 },
          
          // Triangular Prism
          { type: "path", d: "M 350 200 L 450 180 L 500 350 L 400 350 Z", fill: "#e0f2fe", stroke: BLUE, width: 2 }, // Side
          { type: "path", d: "M 350 200 L 300 350 L 400 350 Z", fill: "#7dd3fc", stroke: BLUE, width: 3 }, // Front
          
          { type: "text", x: 350, y: 300, text: "6 cm²", color: TEXT_MAIN, size: 16 },
          
          { type: "path", d: "M 400 370 L 500 370", stroke: RED, width: 3, fill: "none" },
          { type: "text", x: 450, y: 390, text: "10 cm", color: RED, size: 16 }
        ]
      },
      {
        clear: false,
        narration: "Just multiply the front area by the length! 6 times 10 is 60.",
        rule: "6 × 10 = 60 cm³.",
        quizQ: "",
        quizA: "6 × 10 = 60 cm³.",
        elements: [
          { type: "text", x: 400, y: 460, text: "Volume = 6 × 10 = 60 cm³", color: GREEN, size: 36, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "How do you find the volume of a cylinder?",
        rule: "How do you find the volume of a cylinder?",
        quizQ: "How do you find the volume of a cylinder?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Cylinder Volume", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you find the volume of a cylinder?", color: TEXT_MAIN, size: 24 },
          
          // Cylinder
          { type: "path", d: "M 350 200 A 50 20 0 1 0 450 200 L 450 350 A 50 20 0 1 1 350 350 Z", fill: "#e0f2fe", stroke: BLUE, width: 3 },
          { type: "path", d: "M 350 200 A 50 20 0 1 1 450 200", fill: "#7dd3fc", stroke: BLUE, width: 3 } // Top face
        ]
      },
      {
        clear: false,
        narration: "It's just a circular prism! Area of the circle (πr²) times the height (h).",
        rule: "It's just a circular prism! Area of the circle (πr²) × height (h). So, πr²h.",
        quizQ: "",
        quizA: "It's just a circular prism! Area of the circle (πr²) × height (h). So, πr²h.",
        elements: [
          { type: "path", d: "M 400 200 L 450 200", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 425, y: 190, text: "r", color: TEXT_MAIN, size: 16 },
          { type: "text", x: 400, y: 220, text: "Area = πr²", color: TEXT_MAIN, size: 16 },
          
          { type: "path", d: "M 470 200 L 470 350", stroke: RED, width: 2, fill: "none" },
          { type: "text", x: 490, y: 275, text: "h", color: RED, size: 20 },
          
          { type: "text", x: 400, y: 460, text: "Volume = πr²h", color: GREEN, size: 36, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_14.2: Surface area
// ------------------------------------------------------------------
data["m7_14.2"] = {
  title: "14.2 Surface area",
  watermark: "Section 14.2: Surface Area",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "How do you find the surface area of a 3D shape?",
        rule: "How do you find the surface area of a 3D shape?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Surface Area", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you find the surface area of a 3D shape?", color: TEXT_MAIN, size: 24 },
          
          // 3D Box
          { type: "path", d: "M 250 250 L 280 220 L 360 220 L 330 250 Z", fill: "#e0f2fe", stroke: BLUE, width: 2 },
          { type: "path", d: "M 360 220 L 360 300 L 330 330 L 330 250 Z", fill: "#bae6fd", stroke: BLUE, width: 2 },
          { type: "rect", x: 250, y: 250, width: 80, height: 80, fill: "#7dd3fc", stroke: BLUE, strokeWidth: 2 },
          
          { type: "path", d: "M 400 270 L 450 270", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 440 260 L 450 270 L 440 280", stroke: TEXT_MAIN, width: 3, fill: "none" },
          
          // Unfolded Net
          { type: "rect", x: 530, y: 200, width: 40, height: 40, fill: "#e0f2fe", stroke: BLUE, strokeWidth: 2 },
          { type: "rect", x: 530, y: 240, width: 40, height: 40, fill: "#7dd3fc", stroke: BLUE, strokeWidth: 2 },
          { type: "rect", x: 530, y: 280, width: 40, height: 40, fill: "#e0f2fe", stroke: BLUE, strokeWidth: 2 },
          { type: "rect", x: 530, y: 320, width: 40, height: 40, fill: "#7dd3fc", stroke: BLUE, strokeWidth: 2 },
          { type: "rect", x: 490, y: 240, width: 40, height: 40, fill: "#bae6fd", stroke: BLUE, strokeWidth: 2 },
          { type: "rect", x: 570, y: 240, width: 40, height: 40, fill: "#bae6fd", stroke: BLUE, strokeWidth: 2 }
        ]
      },
      {
        clear: false,
        narration: "Imagine unfolding it like a cardboard box. Find the area of EVERY flat face, and add them all together.",
        rule: "Imagine unfolding it like a cardboard box. Find the area of EVERY flat face, and add them all together.",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 450, text: "Unfold it into a flat 'net'.", color: GREEN, size: 24 },
          { type: "text", x: 400, y: 490, text: "Find the area of EVERY face and add them up!", color: GREEN, size: 24, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "What is the surface area of a cube?",
        rule: "What is the surface area of a cube with 4 cm sides?",
        quizQ: "What is the surface area of a cube with 4 cm sides?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Cube Surface Area", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is the surface area of a cube with 4 cm sides?", color: TEXT_MAIN, size: 24 },
          
          { type: "rect", x: 350, y: 220, width: 100, height: 100, fill: "#d1fae5", stroke: GREEN, strokeWidth: 3 },
          { type: "text", x: 400, y: 270, text: "1 face", color: GREEN, size: 20 },
          
          { type: "path", d: "M 350 330 L 450 330", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 400, y: 350, text: "4 cm", color: TEXT_MAIN, size: 16 },
          
          { type: "path", d: "M 330 220 L 330 320", stroke: TEXT_MAIN, width: 2, fill: "none" },
          { type: "text", x: 310, y: 270, text: "4 cm", color: TEXT_MAIN, size: 16 }
        ]
      },
      {
        clear: false,
        narration: "One face is 16. A cube has 6 faces, so 6 times 16 is 96.",
        rule: "One square face is 4×4 = 16 cm². A cube has 6 faces, so 6 × 16 = 96 cm².",
        quizQ: "",
        quizA: "One square face is 4×4 = 16 cm². A cube has 6 faces, so 6 × 16 = 96 cm².",
        elements: [
          { type: "text", x: 400, y: 420, text: "One face = 4 × 4 = 16 cm²", color: TEXT_SUB, size: 24 },
          { type: "text", x: 400, y: 480, text: "6 faces × 16 = 96 cm²", color: GREEN, size: 36, bold: true }
        ]
      }
    ],
    "card_2": [
      {
        narration: "How do you find the surface area of a cylinder?",
        rule: "How do you find the surface area of a cylinder?",
        quizQ: "How do you find the surface area of a cylinder?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Cylinder Surface Area", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "How do you find the surface area of a cylinder?", color: TEXT_MAIN, size: 24 },
          
          // Cylinder
          { type: "path", d: "M 200 250 A 40 15 0 1 0 280 250 L 280 350 A 40 15 0 1 1 200 350 Z", fill: "#e0f2fe", stroke: BLUE, width: 2 },
          { type: "path", d: "M 200 250 A 40 15 0 1 1 280 250", fill: "#7dd3fc", stroke: BLUE, width: 2 },
          
          { type: "path", d: "M 320 300 L 370 300", stroke: TEXT_MAIN, width: 3, fill: "none" },
          { type: "path", d: "M 360 290 L 370 300 L 360 310", stroke: TEXT_MAIN, width: 3, fill: "none" },
          
          // Unfolded Cylinder
          { type: "circle", cx: 500, cy: 200, r: 30, fill: "#7dd3fc", stroke: BLUE, width: 2 },
          { type: "rect", x: 420, y: 240, width: 160, height: 80, fill: "#e0f2fe", stroke: BLUE, strokeWidth: 2 },
          { type: "circle", cx: 500, cy: 360, r: 30, fill: "#7dd3fc", stroke: BLUE, width: 2 }
        ]
      },
      {
        clear: false,
        narration: "Two circles, plus the curved part which unrolls into a rectangle!",
        rule: "Two circles (2 × πr²) plus the curved part which unrolls into a rectangle (2πr × h).",
        quizQ: "",
        quizA: "Two circles (2 × πr²) plus the curved part which unrolls into a rectangle (2πr × h).",
        elements: [
          { type: "text", x: 500, y: 200, text: "πr²", color: TEXT_MAIN, size: 16 },
          { type: "text", x: 500, y: 360, text: "πr²", color: TEXT_MAIN, size: 16 },
          { type: "text", x: 500, y: 280, text: "2πr × h", color: TEXT_MAIN, size: 16 },
          
          { type: "text", x: 400, y: 460, text: "Two circles + One rectangle", color: GREEN, size: 28, bold: true }
        ]
      }
    ]
  }
};

// ------------------------------------------------------------------
// m7_14.3: Symmetry in 3D shapes
// ------------------------------------------------------------------
data["m7_14.3"] = {
  title: "14.3 Symmetry in 3D shapes",
  watermark: "Section 14.3: 3D Symmetry",
  subtopics: [
    { id: "card_0", label: "Key idea" },
    { id: "card_1", label: "Recall" },
    { id: "card_2", label: "Check" }
  ],
  scenes: {
    "card_0": [
      {
        narration: "What is a 'plane of symmetry'?",
        rule: "What is a 'plane of symmetry'?",
        quizQ: "",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "💡 Key Concept: Plane of Symmetry", color: ORANGE, size: 28 },
          { type: "text", x: 400, y: 150, text: "What is a 'plane of symmetry'?", color: TEXT_MAIN, size: 24 },
          
          // 3D Shape
          { type: "rect", x: 350, y: 250, width: 100, height: 100, fill: "#e0f2fe", stroke: BLUE, strokeWidth: 2 },
          { type: "path", d: "M 350 250 L 380 220 L 480 220 L 450 250 Z", fill: "#bae6fd", stroke: BLUE, width: 2 },
          { type: "path", d: "M 450 250 L 480 220 L 480 320 L 450 350 Z", fill: "#7dd3fc", stroke: BLUE, width: 2 },
          
          // Plane slicing it
          { type: "path", d: "M 380 180 L 420 180 L 420 400 L 380 400 Z", fill: "rgba(220, 38, 38, 0.5)", stroke: RED, width: 2 }
        ]
      },
      {
        clear: false,
        narration: "Imagine slicing a 3D shape with a giant sword. If both halves are perfect mirror images, that slice is a plane of symmetry!",
        rule: "Imagine slicing a 3D shape with a giant sword. If both halves are perfect mirror images, that slice is a plane of symmetry!",
        quizQ: "",
        quizA: "",
        elements: [
          { type: "text", x: 400, y: 460, text: "Imagine slicing it with a giant sword.", color: TEXT_SUB, size: 24 },
          { type: "text", x: 400, y: 500, text: "If both halves are perfect mirrors, it's a plane of symmetry!", color: GREEN, size: 24, bold: true }
        ]
      }
    ],
    "card_1": [
      {
        narration: "How many planes of symmetry does a cube have?",
        rule: "How many planes of symmetry does a cube have?",
        quizQ: "How many planes of symmetry does a cube have?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Cube Symmetry", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "How many planes of symmetry does a cube have?", color: TEXT_MAIN, size: 24 },
          
          { type: "rect", x: 350, y: 220, width: 100, height: 100, fill: "none", stroke: BLUE, strokeWidth: 3 },
          { type: "path", d: "M 350 220 L 380 190 L 480 190 L 450 220 Z", fill: "none", stroke: BLUE, width: 3 },
          { type: "path", d: "M 450 220 L 480 190 L 480 290 L 450 320 Z", fill: "none", stroke: BLUE, width: 3 }
        ]
      },
      {
        clear: false,
        narration: "It has 9! 3 straight down the middle, and 6 cutting across the diagonals.",
        rule: "9! (3 straight down the middle, and 6 cutting across the diagonals).",
        quizQ: "",
        quizA: "9! (3 straight down the middle, and 6 cutting across the diagonals).",
        elements: [
          { type: "text", x: 400, y: 420, text: "9 Planes!", color: GREEN, size: 40, bold: true },
          { type: "text", x: 400, y: 480, text: "(3 straight down the middle, 6 diagonal)", color: TEXT_SUB, size: 20 }
        ]
      }
    ],
    "card_2": [
      {
        narration: "Does a square-based pyramid have planes of symmetry?",
        rule: "Does a square-based pyramid have planes of symmetry?",
        quizQ: "Does a square-based pyramid have planes of symmetry?",
        quizA: "",
        elements: [
          ...getBg(),
          { type: "rect", x: 50, y: 50, width: 700, height: 500, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 15 },
          { type: "text", x: 400, y: 100, text: "❓ Practice: Pyramid Symmetry", color: GREEN, size: 28 },
          { type: "text", x: 400, y: 150, text: "Does a square-based pyramid have planes of symmetry?", color: TEXT_MAIN, size: 24 },
          
          // Pyramid
          { type: "path", d: "M 300 320 L 450 320 L 500 280 L 350 280 Z", fill: "none", stroke: BLUE, width: 2, dash: "4,4" }, // Base
          { type: "path", d: "M 300 320 L 400 180 L 450 320", fill: "none", stroke: BLUE, width: 3 }, // Front faces
          { type: "path", d: "M 400 180 L 500 280", fill: "none", stroke: BLUE, width: 3 } // Right edge
        ]
      },
      {
        clear: false,
        narration: "Yes, 4 of them! You can slice it straight down the middle of the sides, or down the diagonals of the base.",
        rule: "Yes, 4 of them! You can slice it straight down the middle of the sides, or straight down the diagonals of the base.",
        quizQ: "",
        quizA: "Yes, 4 of them! You can slice it straight down the middle of the sides, or straight down the diagonals of the base.",
        elements: [
          { type: "text", x: 400, y: 420, text: "Yes, 4 of them!", color: GREEN, size: 36, bold: true },
          { type: "text", x: 400, y: 480, text: "(2 down the middle, 2 down the diagonals)", color: TEXT_SUB, size: 20 }
        ]
      }
    ]
  }
};

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully injected handcrafted visual scenes for Year 7 Chapter 14!");
