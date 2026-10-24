const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "interactive-whiteboard-data.js");
const raw = fs.readFileSync(file, "utf8");
const jsonStr = raw.replace("window.INTERACTIVE_WHITEBOARD_DATA = ", "").replace(/;\s*$/, "");
const data = eval("(" + jsonStr + ")");

const INK = "#0f172a";
const SUB = "#475569";
const GREEN = "#059669";
const DARK_G = "#047857";
const BLUE = "#2563eb";
const RED = "#dc2626";
const ORANGE = "#d97706";
const PURPLE = "#7c3aed";
const PALE_G = "#d1fae5";
const PALE_B = "#e0f2fe";
const PALE_O = "#ffedd5";
const PALE_R = "#fee2e2";
const PALE_P = "#ede9fe";

function T(x, y, text, color, size) {
  return { type: "text", x, y, text, color: color || INK, size: size || 16 };
}
function R(x, y, w, h, fill, stroke) {
  return { type: "rect", x, y, width: w, height: h, fill, stroke: stroke || "#cbd5e1", strokeWidth: 2, rx: 8 };
}
function P(d, stroke, width, fill, dash) {
  const el = { type: "path", d, stroke, width: width || 3, fill: fill || "none" };
  if (dash) el.dash = dash;
  return el;
}
function C(cx, cy, r, fill, stroke, width) {
  return { type: "circle", cx, cy, r, fill: fill || "#ffffff", stroke: stroke || INK, width: width || 3 };
}
function frame(title) {
  return [
    { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
    R(50, 40, 700, 403, "#f8fafc", "#cbd5e1"),
    T(400, 72, title, INK, 18),
  ];
}

function scenesFrom(title, watermark, sections) {
  const subtopics = [];
  const scenes = {};
  sections.forEach((sec, i) => {
    const id = "card_" + i;
    subtopics.push({ id, label: sec.label });
    scenes[id] = sec.steps.map((st, n) => ({
      clear: n === 0 ? true : st.clear,
      narration: st.narration,
      rule: st.rule,
      quizQ: st.quizQ || "",
      quizA: st.quizA || "",
      elements: (n === 0 || st.clear ? frame(st.heading || title) : []).concat(st.draw),
    }));
  });
  return { title, watermark, subtopics, scenes };
}

data["s8_1.1"] = scenesFrom("1.1 Photosynthesis", "Section 1.1: Photosynthesis", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "How a plant makes food",
        narration: "A green leaf is a tiny food factory. The green colour is chlorophyll, which is ready to catch sunlight.",
        rule: "Chlorophyll in leaves traps light energy.",
        draw: [
          P("M 400 360 L 400 250", GREEN, 10),
          P("M 250 230 Q 400 150 550 230 Q 400 300 250 230 Z", GREEN, 3, PALE_G),
          P("M 180 370 L 560 370", "#94a3b8", 4),
          T(640, 370, "soil", SUB, 14),
        ],
      },
      {
        narration: "Sunlight hits the leaf. Chlorophyll traps that light energy so the plant can use it.",
        rule: "Light energy is trapped by chlorophyll.",
        draw: [
          C(140, 130, 32, PALE_O, ORANGE),
          T(140, 130, "Sun", ORANGE, 16),
          P("M 168 150 L 250 200", ORANGE, 3, null, "6,5"),
          P("M 172 128 L 260 175", ORANGE, 3, null, "6,5"),
          T(230, 155, "light", ORANGE, 16),
        ],
      },
      {
        narration: "Carbon dioxide gas from the air enters the leaf. Water travels up from the soil through the roots and stem.",
        rule: "Ingredients: CO₂ from air, water from roots.",
        draw: [
          T(140, 250, "CO₂ in", BLUE, 18),
          P("M 180 250 L 250 230", BLUE, 4),
          T(310, 345, "H₂O", BLUE, 16),
          P("M 330 345 L 385 310", BLUE, 4),
        ],
      },
      {
        narration: "The leaf turns those ingredients into glucose — plant food — and releases oxygen into the air.",
        rule: "CO₂ + water → glucose + oxygen",
        quizQ: "What two things does photosynthesis make?",
        quizA: "Glucose (food) and oxygen.",
        draw: [
          T(620, 210, "O₂ out", BLUE, 18),
          P("M 545 220 L 580 210", BLUE, 4),
          T(330, 305, "glucose", DARK_G, 16),
          R(160, 400, 480, 30, PALE_G, GREEN),
          T(400, 415, "carbon dioxide + water → glucose + oxygen", DARK_G, 15),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "The photosynthesis equation",
        narration: "Six carbon dioxide molecules and six water molecules go in.",
        rule: "Reactants: 6CO₂ and 6H₂O.",
        draw: [
          T(220, 220, "6 CO₂", BLUE, 24),
          T(320, 220, "+", INK, 24),
          T(420, 220, "6 H₂O", BLUE, 20),
        ],
      },
      {
        narration: "Light and chlorophyll make the reaction happen. They are written above and below the arrow.",
        rule: "Light and chlorophyll are needed.",
        draw: [
          P("M 490 220 L 560 220", INK, 4),
          T(525, 195, "light", ORANGE, 16),
          T(525, 248, "chlorophyll", GREEN, 14),
        ],
      },
      {
        narration: "One glucose molecule and six oxygen molecules come out. Glucose is C₆H₁₂O₆.",
        rule: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
        quizQ: "What is the formula of glucose?",
        quizA: "C₆H₁₂O₆",
        draw: [
          T(620, 200, "C₆H₁₂O₆", GREEN, 20),
          T(620, 250, "+  6 O₂", BLUE, 20),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Why leaves are broad and thin",
        narration: "A broad leaf is like a wide solar panel. It catches more sunlight for chlorophyll.",
        rule: "Broad = larger surface for light.",
        draw: [
          R(180, 210, 440, 48, PALE_G, GREEN),
          T(400, 234, "broad leaf", DARK_G, 18),
          P("M 250 130 L 250 200", ORANGE, 3, null, "5,5"),
          P("M 400 130 L 400 200", ORANGE, 3, null, "5,5"),
          P("M 550 130 L 550 200", ORANGE, 3, null, "5,5"),
          T(400, 118, "lots of sunlight", ORANGE, 16),
        ],
      },
      {
        narration: "A thin leaf means gases only have a short distance to diffuse in and out of the cells.",
        rule: "Thin = short diffusion path for gases.",
        quizQ: "Why are most leaves broad and thin?",
        quizA: "Broad to catch more light; thin so gases travel a short distance.",
        draw: [
          T(130, 234, "CO₂", BLUE, 16),
          P("M 155 234 L 175 234", BLUE, 3),
          T(400, 290, "short distance through the leaf", SUB, 16),
          T(670, 234, "O₂", BLUE, 16),
          P("M 625 234 L 650 234", BLUE, 3),
        ],
      },
    ],
  },
]);

data["s8_1.2"] = scenesFrom("1.2 More about photosynthesis", "Section 1.2: Inside the leaf", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Inside a leaf",
        narration: "The top skin is a clear epidermis. Light passes through it to the cells below.",
        rule: "Clear epidermis lets light in.",
        draw: [
          R(160, 140, 300, 36, PALE_B, BLUE),
          T(310, 158, "epidermis", BLUE, 16),
        ],
      },
      {
        narration: "Palisade cells sit packed under the top. They are full of chloroplasts, so they catch most of the light.",
        rule: "Palisade cells trap light.",
        draw: [
          R(160, 180, 56, 90, PALE_G, GREEN),
          R(222, 180, 56, 90, PALE_G, GREEN),
          R(284, 180, 56, 90, PALE_G, GREEN),
          R(346, 180, 56, 90, PALE_G, GREEN),
          R(408, 180, 52, 90, PALE_G, GREEN),
          T(620, 225, "palisade", DARK_G, 18),
          T(620, 250, "chloroplasts", GREEN, 14),
        ],
      },
      {
        narration: "Spongy cells below have air spaces. Carbon dioxide and oxygen move through those gaps.",
        rule: "Spongy layer: air spaces for gases.",
        quizQ: "Which leaf layer is packed with chloroplasts?",
        quizA: "The palisade layer, near the top of the leaf.",
        draw: [
          C(210, 310, 22, PALE_G, GREEN),
          C(280, 325, 22, PALE_G, GREEN),
          C(350, 310, 22, PALE_G, GREEN),
          C(420, 322, 22, PALE_G, GREEN),
          T(620, 318, "spongy + air", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Limiting factors",
        narration: "If you add more light, photosynthesis speeds up — until something else runs short.",
        rule: "The factor in shortest supply limits the rate.",
        draw: [
          P("M 160 340 L 160 150", INK, 3),
          P("M 160 340 L 430 340", INK, 3),
          T(130, 240, "rate", INK, 14),
          T(300, 365, "light", INK, 16),
          P("M 160 330 Q 240 200 400 200", BLUE, 4),
        ],
      },
      {
        narration: "The graph flattens because light is no longer the problem. Now carbon dioxide or temperature is limiting.",
        rule: "The graph levels off when another factor limits.",
        quizQ: "Name three possible limiting factors.",
        quizA: "Light intensity, carbon dioxide concentration, and temperature.",
        draw: [
          T(500, 200, "levels off", BLUE, 16),
          P("M 410 200 L 470 200", BLUE, 3),
          T(500, 250, "needs more CO₂", SUB, 16),
          T(500, 275, "or more warmth", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Testing a leaf for starch",
        narration: "Boil the leaf, then use hot ethanol to wash out the green chlorophyll so you can see a colour change.",
        rule: "Remove chlorophyll first, then add iodine.",
        draw: [
          R(140, 180, 120, 90, PALE_B, BLUE),
          T(200, 225, "ethanol", BLUE, 16),
          T(200, 250, "washes green", SUB, 14),
          P("M 270 225 L 330 225", INK, 3),
        ],
      },
      {
        narration: "Add iodine. If starch is there, the leaf turns blue-black. Starch means photosynthesis happened.",
        rule: "Iodine + starch → blue-black.",
        quizQ: "How do you test a leaf for starch?",
        quizA: "Boil, decolourise in hot ethanol, rinse, add iodine. Blue-black means starch.",
        draw: [
          R(340, 180, 120, 90, PALE_P, PURPLE),
          T(400, 225, "iodine", PURPLE, 16),
          P("M 470 225 L 530 225", INK, 3),
          R(540, 180, 120, 90, "#1e293b", "#0f172a"),
          T(600, 225, "blue-black", "#ffffff", 14),
        ],
      },
    ],
  },
]);

data["s8_1.3"] = scenesFrom("1.3 The carbon cycle", "Section 1.3: Carbon cycle", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Carbon moves in a cycle",
        narration: "Carbon dioxide in the air is the starting store. Photosynthesis pulls that carbon into plants as glucose.",
        rule: "Photosynthesis takes CO₂ out of the air.",
        draw: [
          R(300, 130, 200, 50, PALE_B, BLUE),
          T(400, 155, "CO₂ in the air", BLUE, 18),
          R(140, 260, 160, 50, PALE_G, GREEN),
          T(220, 285, "plants", DARK_G, 18),
          P("M 340 180 L 250 255", GREEN, 4),
          T(250, 210, "photosynthesis", GREEN, 14),
        ],
      },
      {
        narration: "Animals get carbon by eating plants. Respiration in plants and animals puts CO₂ back into the air.",
        rule: "Feeding moves carbon; respiration returns it.",
        quizQ: "How does carbon get from air into a plant?",
        quizA: "Photosynthesis turns CO₂ into glucose.",
        draw: [
          R(500, 260, 160, 50, PALE_O, ORANGE),
          T(580, 285, "animals", ORANGE, 18),
          P("M 305 285 L 495 285", ORANGE, 3),
          T(400, 310, "feeding", ORANGE, 14),
          P("M 560 260 L 470 180", BLUE, 4),
          T(560, 210, "respiration", BLUE, 14),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Decomposers",
        narration: "When plants and animals die, bacteria and fungi break them down. Those decomposers also respire.",
        rule: "Decomposers return carbon as CO₂.",
        draw: [
          R(280, 150, 240, 50, PALE_O, ORANGE),
          T(400, 175, "dead plants & animals", ORANGE, 16),
          R(280, 280, 240, 50, PALE_P, PURPLE),
          T(400, 305, "decomposers", PURPLE, 18),
          P("M 400 205 L 400 275", PURPLE, 4),
        ],
      },
      {
        narration: "Decomposer respiration sends carbon dioxide back to the air, so the cycle can start again.",
        rule: "Without decomposers, carbon stays locked in dead matter.",
        quizQ: "What do decomposers add to the air?",
        quizA: "Carbon dioxide, from their respiration.",
        draw: [
          P("M 525 305 L 620 305 L 620 155 L 505 155", BLUE, 3),
          T(660, 230, "CO₂", BLUE, 20),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Fossil fuels",
        narration: "Over millions of years, buried remains can become coal, oil and gas. That carbon was locked away.",
        rule: "Fossil fuels store ancient carbon.",
        draw: [
          R(180, 300, 440, 50, "#e2e8f0", "#64748b"),
          T(400, 325, "coal, oil, gas underground", INK, 18),
        ],
      },
      {
        narration: "Burning them (combustion) dumps that old carbon into today's air, faster than plants can take it out.",
        rule: "Combustion adds extra CO₂ to the cycle.",
        quizQ: "Why does burning fossil fuels add extra CO₂?",
        quizA: "It releases carbon locked away for millions of years, faster than plants can remove it.",
        draw: [
          P("M 400 295 L 400 170", RED, 5),
          T(500, 230, "combustion", RED, 18),
          R(300, 120, 200, 40, PALE_R, RED),
          T(400, 140, "extra CO₂ in air", RED, 16),
        ],
      },
    ],
  },
]);

data["s8_1.4"] = scenesFrom("1.4 Climate change", "Section 1.4: Climate change", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "The greenhouse effect",
        narration: "Sunlight warms Earth's surface. The ground then gives out heat (infrared) back toward space.",
        rule: "Sunlight in, heat trying to leave.",
        draw: [
          C(140, 130, 28, PALE_O, ORANGE),
          T(140, 130, "Sun", ORANGE, 14),
          P("M 170 150 L 280 300", ORANGE, 3),
          T(200, 200, "sunlight", ORANGE, 14),
          P("M 120 340 L 680 340", GREEN, 6),
          T(400, 365, "Earth's surface", DARK_G, 16),
        ],
      },
      {
        narration: "Gases such as CO₂ and methane trap some of that outgoing heat. That keeps the planet warm enough for life.",
        rule: "Greenhouse gases trap thermal energy.",
        quizQ: "What do greenhouse gases do to outgoing heat?",
        quizA: "They absorb some of it, so Earth stays warmer.",
        draw: [
          P("M 130 190 L 670 190", BLUE, 3, null, "10,6"),
          T(400, 172, "greenhouse gas layer", BLUE, 16),
          P("M 480 330 L 520 200", RED, 3),
          P("M 520 200 L 560 330", RED, 3),
          T(600, 250, "heat trapped", RED, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Humans add extra gases",
        narration: "Burning fossil fuels adds CO₂. Cutting forests means less CO₂ is taken out. Livestock add methane.",
        rule: "More greenhouse gas → a warmer Earth.",
        draw: [
          R(130, 170, 160, 90, PALE_R, RED),
          T(210, 205, "fossil fuels", RED, 16),
          T(210, 232, "+ CO₂", RED, 18),
          R(320, 170, 160, 90, PALE_G, GREEN),
          T(400, 205, "fewer trees", DARK_G, 16),
          T(400, 232, "less CO₂ taken", DARK_G, 14),
          R(510, 170, 160, 90, PALE_O, ORANGE),
          T(590, 205, "livestock", ORANGE, 16),
          T(590, 232, "+ methane", ORANGE, 16),
        ],
      },
      {
        narration: "This extra trapping is the enhanced greenhouse effect. Global average temperature rises.",
        rule: "Extra gases enhance the natural greenhouse effect.",
        quizQ: "Name two human activities that increase greenhouse gases.",
        quizA: "Burning fossil fuels, deforestation, or livestock farming (methane).",
        draw: [
          T(400, 320, "average global temperature rises", INK, 18),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "What climate change does",
        narration: "Warmer water expands. Ice on land melts. Both make sea level rise.",
        rule: "Melting ice + expanding water → higher seas.",
        draw: [
          P("M 160 250 Q 280 180 400 250 T 640 250", BLUE, 4),
          T(400, 290, "sea level rise", BLUE, 20),
        ],
      },
      {
        narration: "Weather becomes more extreme, and habitats can be lost. Planting trees helps, but we also have to cut emissions.",
        rule: "Trees help, but cutting emissions is essential.",
        quizQ: "Give two likely effects of climate change.",
        quizA: "Rising sea levels and more extreme weather (or habitat loss).",
        draw: [
          T(400, 340, "ice melts  ·  storms  ·  habitats lost", SUB, 16),
        ],
      },
    ],
  },
]);

const problems = audit(["s8_1.1", "s8_1.2", "s8_1.3", "s8_1.4"]);
if (problems.length) {
  console.log(problems.join("\n"));
  console.log("PROBLEMS", problems.length);
  process.exit(1);
}

fs.writeFileSync(file, "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(data, null, 2) + ";\n");
console.log("Wrote Year 8 Science chapter 1 whiteboards");

function boxOf(e) {
  const w = e.size * 0.62 * String(e.text).length;
  const h = e.size;
  return { t: e.text, l: e.x - w / 2, r: e.x + w / 2, top: e.y - h / 2, bot: e.y + h / 2 };
}

function overlap(a, b) {
  return a.l < b.r - 2 && a.r > b.l + 2 && a.top < b.bot - 2 && a.bot > b.top + 2;
}

function audit(keys) {
  const issues = [];
  keys.forEach((key) => {
    const topic = data[key];
    topic.subtopics.forEach((sub) => {
      let stack = [];
      (topic.scenes[sub.id] || []).forEach((step, index) => {
        if (step.clear || index === 0) stack = [];
        stack = stack.concat(step.elements || []);
        const texts = stack.filter((e) => e.type === "text");
        const boxes = texts.map(boxOf);
        boxes.forEach((b) => {
          if (b.l < 58 || b.r > 745 || b.top < 46 || b.bot > 438) {
            issues.push(key + " " + sub.id + " step " + index + " outside: " + b.t);
          }
        });
        for (let i = 0; i < boxes.length; i++) {
          for (let j = i + 1; j < boxes.length; j++) {
            if (overlap(boxes[i], boxes[j])) {
              issues.push(key + " " + sub.id + " step " + index + " overlap: " + boxes[i].t + " / " + boxes[j].t);
            }
          }
        }
      });
    });
  });
  return issues;
}
