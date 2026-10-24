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
const PINK = "#db2777";
const PALE_G = "#d1fae5";
const PALE_B = "#e0f2fe";
const PALE_O = "#ffedd5";
const PALE_R = "#fee2e2";
const PALE_P = "#ede9fe";
const PALE_K = "#fce7f3";

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
  const size = title.length > 38 ? 16 : 18;
  return [
    { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
    R(50, 40, 700, 403, "#f8fafc", "#cbd5e1"),
    T(400, 72, title, INK, size),
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

data["s7_1.1"] = scenesFrom("1.1 Respiratory system", "Section 1.1: Airways", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "The path air takes",
        narration: "Air comes in through your nose or mouth, then down a tube called the trachea — the windpipe.",
        rule: "The trachea is the windpipe to the lungs.",
        draw: [
          P("M 400 130 L 400 250", GREEN, 12),
          P("M 372 150 L 428 150", DARK_G, 4),
          P("M 372 175 L 428 175", DARK_G, 4),
          P("M 372 200 L 428 200", DARK_G, 4),
          P("M 372 225 L 428 225", DARK_G, 4),
          T(250, 180, "trachea", DARK_G, 18),
          P("M 300 180 L 365 180", DARK_G, 3),
        ],
      },
      {
        narration: "The trachea splits into two bronchi, one for each lung. Cartilage rings keep these tubes open.",
        rule: "Cartilage rings stop the airways collapsing.",
        draw: [
          P("M 400 250 L 310 340", GREEN, 10),
          P("M 400 250 L 490 340", GREEN, 10),
          T(200, 320, "bronchus", DARK_G, 16),
          P("M 255 320 L 300 330", DARK_G, 3),
          T(600, 320, "bronchus", DARK_G, 16),
          P("M 545 320 L 500 330", DARK_G, 3),
        ],
      },
      {
        narration: "Each bronchus branches into smaller tubes inside a spongy lung. Mucus and tiny hairs trap dust.",
        rule: "Mucus traps dust. Cilia sweep it out.",
        quizQ: "Which organs make up the respiratory system?",
        quizA: "Nose/mouth, larynx, trachea, bronchi, bronchioles, alveoli, plus diaphragm and rib muscles.",
        draw: [
          P("M 310 250 C 210 250 200 390 300 410 C 340 410 350 330 310 300", PINK, 3, PALE_K),
          P("M 490 250 C 590 250 600 390 500 410 C 460 410 450 330 490 300", PINK, 3, PALE_K),
          T(150, 380, "lung", PINK, 18),
          T(650, 380, "lung", PINK, 18),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Why the tubes stay open",
        narration: "C-shaped rings of cartilage sit in the trachea wall, like a springy hose that cannot squash shut.",
        rule: "Cartilage keeps the trachea and bronchi open.",
        draw: [
          P("M 400 160 L 400 360", GREEN, 14),
          P("M 368 190 L 432 190", DARK_G, 5),
          P("M 368 230 L 432 230", DARK_G, 5),
          P("M 368 270 L 432 270", DARK_G, 5),
          P("M 368 310 L 432 310", DARK_G, 5),
          T(230, 250, "cartilage rings", DARK_G, 16),
          P("M 310 250 L 360 250", DARK_G, 3),
        ],
      },
      {
        narration: "If the tube closed, you could not get air to the alveoli. The rings keep a clear path every breath.",
        rule: "Open airways mean air can always reach the lungs.",
        quizQ: "What do the rings of cartilage do?",
        quizA: "They keep the trachea and bronchi open so air can always pass.",
        draw: [
          T(580, 250, "stays open", GREEN, 18),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Sticky lining of the airways",
        narration: "The lining is moist and makes mucus. Dust and microbes stick to it instead of reaching the alveoli.",
        rule: "Mucus traps dirt and germs.",
        draw: [
          R(160, 180, 480, 70, PALE_B, BLUE),
          T(400, 215, "sticky mucus lining", BLUE, 18),
          C(220, 320, 16, PALE_O, ORANGE),
          C(300, 330, 12, PALE_O, ORANGE),
          C(380, 318, 14, PALE_O, ORANGE),
          T(400, 360, "dust and microbes stick here", ORANGE, 16),
        ],
      },
      {
        narration: "Tiny hairs called cilia sweep the dirty mucus up and out, so you can swallow or cough it away.",
        rule: "Cilia sweep mucus up and out of the lungs.",
        quizQ: "Why is the lining of the airways moist and covered in mucus?",
        quizA: "Dust and microbes stick to the mucus. Cilia sweep it up and out of the lungs.",
        draw: [
          P("M 200 280 L 200 200", GREEN, 3),
          P("M 280 280 L 280 200", GREEN, 3),
          P("M 360 280 L 360 200", GREEN, 3),
          P("M 440 280 L 440 200", GREEN, 3),
          T(620, 215, "cilia sweep up", GREEN, 16),
        ],
      },
    ],
  },
]);

data["s7_1.2"] = scenesFrom("1.2 Gas exchange", "Section 1.2: Alveoli", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Tiny air sacs",
        narration: "The bronchioles end in millions of tiny air sacs called alveoli. That is where gases swap.",
        rule: "Gas exchange happens in the alveoli.",
        draw: [
          C(280, 250, 55, PALE_G, GREEN, 4),
          C(400, 250, 55, PALE_G, GREEN, 4),
          C(520, 250, 55, PALE_G, GREEN, 4),
          T(400, 340, "alveoli", DARK_G, 20),
        ],
      },
      {
        narration: "Each sac is wrapped in blood capillaries. Oxygen in the air is close to blood that needs it.",
        rule: "Alveoli sit next to a rich blood supply.",
        draw: [
          P("M 220 200 Q 280 170 340 200", RED, 4),
          P("M 340 200 Q 400 170 460 200", RED, 4),
          P("M 460 200 Q 520 170 580 200", RED, 4),
          T(400, 150, "capillaries", RED, 16),
        ],
      },
      {
        narration: "Oxygen diffuses into the blood. Carbon dioxide diffuses out, ready to be breathed away.",
        rule: "O₂ in, CO₂ out — by diffusion.",
        quizQ: "Where does gas exchange happen?",
        quizA: "In the alveoli. Oxygen diffuses into the blood and carbon dioxide diffuses out.",
        draw: [
          T(160, 250, "O₂ in", BLUE, 18),
          P("M 200 250 L 230 250", BLUE, 4),
          T(640, 250, "CO₂ out", ORANGE, 18),
          P("M 570 250 L 600 250", ORANGE, 4),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Built for a fast swap",
        narration: "Millions of alveoli give a huge surface. More surface means more gas can cross at once.",
        rule: "Huge surface area speeds exchange.",
        draw: [
          C(220, 240, 36, PALE_G, GREEN),
          C(300, 220, 28, PALE_G, GREEN),
          C(370, 250, 32, PALE_G, GREEN),
          C(450, 225, 30, PALE_G, GREEN),
          C(530, 245, 34, PALE_G, GREEN),
          T(400, 330, "millions of tiny sacs", DARK_G, 18),
        ],
      },
      {
        narration: "The wall is only one cell thick, and blood is right next to the air. Gases have a short trip.",
        rule: "Thin walls + nearby blood = fast diffusion.",
        quizQ: "Name three features that make alveoli efficient.",
        quizA: "A huge surface area, walls one cell thick, and a rich blood supply.",
        draw: [
          R(180, 360, 440, 50, PALE_B, BLUE),
          T(400, 385, "thin wall  ·  lots of blood  ·  huge area", BLUE, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Why oxygen still goes in",
        narration: "Even at rest, blood arriving at the lungs has used up some oxygen. The air in the alveoli has more.",
        rule: "Gases diffuse from high to low concentration.",
        draw: [
          R(120, 180, 240, 120, PALE_G, GREEN),
          T(240, 220, "alveolus", DARK_G, 16),
          T(240, 255, "high O₂", GREEN, 20),
          R(440, 180, 240, 120, PALE_R, RED),
          T(560, 220, "blood arriving", RED, 16),
          T(560, 255, "low O₂", RED, 20),
        ],
      },
      {
        narration: "So oxygen keeps moving into the blood. You do not need to be exercising for this to work.",
        rule: "A concentration difference keeps oxygen moving in.",
        quizQ: "Why is oxygen still able to enter the blood when you are resting?",
        quizA: "Blood arriving at the lungs has a lower oxygen concentration than the air in the alveoli, so oxygen diffuses in.",
        draw: [
          P("M 365 240 L 435 240", BLUE, 5),
          T(400, 350, "O₂ diffuses this way", BLUE, 18),
        ],
      },
    ],
  },
]);

data["s7_1.3"] = scenesFrom("1.3 Breathing", "Section 1.3: Breathing", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Breathing in",
        narration: "The diaphragm is a sheet of muscle under the lungs. When it contracts, it flattens and the chest gets bigger.",
        rule: "Bigger chest volume → air is drawn in.",
        draw: [
          P("M 250 140 L 250 280 Q 400 240 550 280 L 550 140", BLUE, 4, PALE_B),
          P("M 250 300 Q 400 360 550 300", GREEN, 6),
          T(400, 380, "diaphragm flattens", DARK_G, 16),
          T(400, 200, "lungs fill", BLUE, 18),
        ],
      },
      {
        narration: "Rib muscles lift the ribcage at the same time. Extra space means air pressure inside falls, so air rushes in.",
        rule: "Ribcage up + diaphragm down = inhale.",
        quizQ: "How does air get into the lungs?",
        quizA: "The diaphragm contracts and flattens, the ribcage lifts, lung volume rises and air is drawn in.",
        draw: [
          P("M 250 140 L 230 110", ORANGE, 3),
          P("M 550 140 L 570 110", ORANGE, 3),
          T(400, 118, "ribs lift", ORANGE, 16),
          T(160, 220, "air in", BLUE, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Breathing out",
        narration: "To breathe out, the diaphragm and rib muscles relax. The chest gets smaller.",
        rule: "Smaller chest → air is pushed out.",
        draw: [
          P("M 280 160 L 280 260 Q 400 230 520 260 L 520 160", BLUE, 4, PALE_B),
          P("M 280 280 Q 400 240 520 280", GREEN, 6),
          T(400, 360, "diaphragm relaxes (domes up)", DARK_G, 16),
        ],
      },
      {
        narration: "The lungs are squeezed a little, so air is pushed out of the mouth and nose.",
        rule: "Relaxing muscles empties the lungs.",
        quizQ: "What happens when you breathe out?",
        quizA: "The diaphragm and rib muscles relax, the chest gets smaller, and air is pushed out.",
        draw: [
          T(400, 200, "air out", ORANGE, 18),
          P("M 400 175 L 400 145", ORANGE, 4),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Exercise and breathing",
        narration: "Working muscles need more oxygen and make more carbon dioxide. Gas exchange has to speed up.",
        rule: "More work → more O₂ needed, more CO₂ to remove.",
        draw: [
          R(140, 180, 220, 90, PALE_O, ORANGE),
          T(250, 210, "muscles work", ORANGE, 16),
          T(250, 240, "need more O₂", ORANGE, 16),
          P("M 370 225 L 430 225", INK, 4),
          R(440, 180, 220, 90, PALE_B, BLUE),
          T(550, 210, "breathe faster", BLUE, 16),
          T(550, 240, "and deeper", BLUE, 16),
        ],
      },
      {
        narration: "That is why you pant after a sprint: your body is catching up on oxygen and dumping extra CO₂.",
        rule: "Faster, deeper breaths speed gas exchange.",
        quizQ: "Why does exercise make you breathe faster and deeper?",
        quizA: "Muscles need more oxygen and produce more carbon dioxide, so gas exchange has to speed up.",
        draw: [
          T(400, 330, "sprint  →  extra CO₂  →  faster breathing", SUB, 16),
        ],
      },
    ],
  },
]);

data["s7_1.4"] = scenesFrom("1.4 Respiration", "Section 1.4: Respiration", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Energy from food",
        narration: "Respiration is a chemical reaction in cells. It releases energy from glucose so you can move, grow and keep warm.",
        rule: "Respiration happens in cells, not in the lungs.",
        draw: [
          R(250, 180, 300, 90, PALE_G, GREEN),
          T(400, 210, "cell", DARK_G, 16),
          T(400, 242, "glucose  →  energy", DARK_G, 18),
        ],
      },
      {
        narration: "Breathing only moves air. Respiration is the reaction that uses oxygen and glucose inside mitochondria.",
        rule: "Breathing ≠ respiration.",
        quizQ: "What is respiration?",
        quizA: "A chemical reaction in cells that releases energy from glucose. It is not the same thing as breathing.",
        draw: [
          T(180, 340, "breathing", BLUE, 16),
          T(180, 368, "moves air", SUB, 14),
          T(620, 340, "respiration", GREEN, 16),
          T(620, 368, "releases energy", SUB, 14),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "The aerobic equation",
        narration: "Aerobic means with oxygen. Glucose and oxygen go in.",
        rule: "Reactants: glucose + oxygen.",
        draw: [
          T(220, 230, "glucose", GREEN, 22),
          T(340, 230, "+", INK, 22),
          T(460, 230, "oxygen", BLUE, 22),
        ],
      },
      {
        narration: "Carbon dioxide and water come out, and energy is released for the cell to use.",
        rule: "glucose + oxygen → CO₂ + water + energy",
        quizQ: "Write the word equation for aerobic respiration.",
        quizA: "glucose + oxygen → carbon dioxide + water (+ energy).",
        draw: [
          P("M 540 230 L 600 230", INK, 4),
          T(400, 310, "carbon dioxide + water + energy", ORANGE, 18),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Where it happens",
        narration: "Every living cell respires. Muscle cells do a lot of it when you run.",
        rule: "The reaction is inside cells.",
        draw: [
          R(200, 180, 160, 100, PALE_P, PURPLE),
          T(280, 230, "cell", PURPLE, 20),
          C(280, 210, 18, PALE_O, ORANGE),
          T(280, 255, "mitochondria", SUB, 12),
        ],
      },
      {
        narration: "Lungs only deliver oxygen and take away carbon dioxide. They do not release the energy.",
        rule: "Lungs move gases. Cells release energy.",
        quizQ: "Where does respiration happen?",
        quizA: "Inside cells. Breathing only moves air; respiration is the reaction that releases energy.",
        draw: [
          R(440, 180, 200, 100, PALE_B, BLUE),
          T(540, 215, "lungs", BLUE, 18),
          T(540, 250, "move O₂ and CO₂", SUB, 14),
        ],
      },
    ],
  },
]);

data["s7_2.1"] = scenesFrom("2.1 Dissolving", "Section 2.1: Dissolving", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Solute, solvent, solution",
        narration: "The solute is the solid that disappears. The solvent is the liquid that does the dissolving.",
        rule: "Solute + solvent → solution.",
        draw: [
          R(140, 180, 160, 90, PALE_O, ORANGE),
          T(220, 225, "solute", ORANGE, 20),
          T(370, 225, "+", INK, 24),
          R(420, 180, 160, 90, PALE_B, BLUE),
          T(500, 225, "solvent", BLUE, 20),
        ],
      },
      {
        narration: "Together they make a solution. The solid seems gone, but its particles are still there, spread out.",
        rule: "A solution is a mixture, not a new compound.",
        quizQ: "What happens when a solid dissolves?",
        quizA: "Its particles separate and spread evenly through the solvent. The solute is still there.",
        draw: [
          P("M 400 290 L 400 330", INK, 4),
          R(250, 340, 300, 60, PALE_G, GREEN),
          T(400, 370, "solution", DARK_G, 20),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Name the three words",
        narration: "Salt is the solute. Water is the solvent. Salt water is the solution.",
        rule: "Solute dissolves. Solvent does the dissolving.",
        draw: [
          T(200, 220, "salt", ORANGE, 20),
          T(400, 220, "water", BLUE, 20),
          T(600, 220, "salt water", GREEN, 20),
          T(200, 260, "solute", SUB, 14),
          T(400, 260, "solvent", SUB, 14),
          T(600, 260, "solution", SUB, 14),
        ],
      },
      {
        narration: "If you evaporate the water, the salt is left behind. It never vanished.",
        rule: "You can get the solute back by evaporating.",
        quizQ: "Solute, solvent, solution — which is which?",
        quizA: "The solute dissolves. The solvent does the dissolving. Together they make a solution.",
        draw: [
          T(400, 340, "evaporate  →  salt crystals return", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Faster dissolving",
        narration: "Stirring moves fresh solvent onto the solid. Warming makes particles move faster, so they bump more often.",
        rule: "Stir or warm to dissolve faster.",
        draw: [
          R(140, 190, 220, 100, PALE_B, BLUE),
          T(250, 225, "stirring", BLUE, 18),
          T(250, 258, "more collisions", SUB, 14),
          R(440, 190, 220, 100, PALE_O, ORANGE),
          T(550, 225, "warming", ORANGE, 18),
          T(550, 258, "faster particles", SUB, 14),
        ],
      },
      {
        narration: "Crushing the solid into powder also helps: more surface is touching the solvent.",
        rule: "More surface + more collisions = faster dissolve.",
        quizQ: "Why does stirring or warming often speed up dissolving?",
        quizA: "Particles collide more often, so the solid breaks up into the solvent faster.",
        draw: [
          T(400, 350, "powder  →  bigger surface", DARK_G, 16),
        ],
      },
    ],
  },
]);

data["s7_2.2"] = scenesFrom("2.2 Solubility", "Section 2.2: Solubility", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "How much will dissolve?",
        narration: "Solubility is the mass of solute that dissolves in a set amount of solvent at a stated temperature.",
        rule: "Always say the temperature with a solubility.",
        draw: [
          R(200, 180, 400, 80, PALE_B, BLUE),
          T(400, 220, "mass of solute in 100 g of water", BLUE, 16),
        ],
      },
      {
        narration: "When no more will dissolve, the solution is saturated. Extra crystals sit at the bottom.",
        rule: "Saturated = full at that temperature.",
        quizQ: "What is solubility?",
        quizA: "The mass of solute that dissolves in a given amount of solvent at a stated temperature.",
        draw: [
          R(220, 300, 360, 70, PALE_O, ORANGE),
          T(400, 325, "saturated solution", ORANGE, 16),
          T(400, 352, "undissolved solid at the bottom", SUB, 14),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Saturated solutions",
        narration: "A saturated solution holds as much dissolved solute as it can. Stirring will not hide extra solid.",
        rule: "Extra solute stays undissolved.",
        draw: [
          R(250, 170, 300, 140, PALE_B, BLUE),
          T(400, 210, "solution", BLUE, 16),
          R(280, 260, 240, 30, PALE_O, ORANGE),
          T(400, 275, "solid left over", ORANGE, 14),
        ],
      },
      {
        narration: "If you heat it, more solid often dissolves. Cool it again and crystals may come back.",
        rule: "Most solids dissolve more in hotter water.",
        quizQ: "What is a saturated solution?",
        quizA: "One that holds as much dissolved solute as it can at that temperature. Extra solute stays undissolved.",
        draw: [
          T(400, 360, "hotter  →  more dissolves", ORANGE, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Solids and gases differ",
        narration: "Most solids are more soluble in warmer water. Gases are the opposite: they escape when the liquid is hot.",
        rule: "Hot water: more solid, less gas.",
        draw: [
          R(130, 180, 240, 110, PALE_O, ORANGE),
          T(250, 215, "solids", ORANGE, 18),
          T(250, 250, "warmer → more dissolves", SUB, 14),
          R(430, 180, 240, 110, PALE_B, BLUE),
          T(550, 215, "gases", BLUE, 18),
          T(550, 250, "warmer → less dissolves", SUB, 14),
        ],
      },
      {
        narration: "That is why a fizzy drink goes flat faster when it is warm: the carbon dioxide leaves the liquid.",
        rule: "Warm fizzy drinks lose their gas.",
        quizQ: "How does temperature usually affect the solubility of a solid?",
        quizA: "Most solids are more soluble in warmer water. Gases are usually less soluble when the liquid is warmer.",
        draw: [
          T(400, 350, "warm cola  →  bubbles escape", SUB, 16),
        ],
      },
    ],
  },
]);

data["s7_2.3"] = scenesFrom("2.3 Solubility investigation", "Section 2.3: Fair test", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "A fair solubility test",
        narration: "Change only one thing. If you are testing temperature, keep the volume of water the same every time.",
        rule: "Only one independent variable.",
        draw: [
          R(140, 180, 200, 90, PALE_G, GREEN),
          T(240, 210, "change", DARK_G, 16),
          T(240, 242, "temperature", GREEN, 16),
          R(460, 180, 200, 90, PALE_B, BLUE),
          T(560, 210, "keep the same", BLUE, 16),
          T(560, 242, "volume of water", SUB, 14),
        ],
      },
      {
        narration: "Use the same stirring, and decide the same way that the solution is saturated — for example, a little solid left.",
        rule: "Same method every run.",
        quizQ: "What must stay the same in a fair solubility test?",
        quizA: "The volume of solvent, how you decide it is saturated, and the stirring. Only temperature (or the solute) should change.",
        draw: [
          T(400, 330, "same stir  ·  same volume  ·  same end point", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "What you measure",
        narration: "Weigh the solute that dissolves. Record the temperature of the solvent.",
        rule: "Measure mass of solute and temperature.",
        draw: [
          R(160, 190, 200, 90, PALE_O, ORANGE),
          T(260, 235, "mass of solute", ORANGE, 16),
          R(440, 190, 200, 90, PALE_R, RED),
          T(540, 235, "temperature", RED, 16),
        ],
      },
      {
        narration: "Plot mass against temperature. The graph shows how solubility changes.",
        rule: "A graph makes the pattern clear.",
        quizQ: "What would you measure?",
        quizA: "The mass of solute that dissolves, and the temperature of the solvent.",
        draw: [
          P("M 200 380 L 200 320 L 600 320", INK, 3),
          T(400, 400, "mass  vs  temperature", SUB, 14),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Why repeat?",
        narration: "Do the test more than once at each temperature. Repeats show if a result is a fluke.",
        rule: "Repeats check reliability.",
        draw: [
          R(150, 190, 140, 80, PALE_G, GREEN),
          T(220, 230, "run 1", DARK_G, 16),
          R(330, 190, 140, 80, PALE_G, GREEN),
          T(400, 230, "run 2", DARK_G, 16),
          R(510, 190, 140, 80, PALE_G, GREEN),
          T(580, 230, "run 3", DARK_G, 16),
        ],
      },
      {
        narration: "If one reading is miles from the others, you can spot it and repeat that temperature.",
        rule: "Odd results are easier to spot with repeats.",
        quizQ: "Why repeat the test?",
        quizA: "Repeats show whether a result is reliable. A single odd reading is easier to spot.",
        draw: [
          T(400, 330, "odd value  →  check again", ORANGE, 16),
        ],
      },
    ],
  },
]);

data["s7_2.4"] = scenesFrom("2.4 Paper chromatography", "Section 2.4: Chromatography", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Separating dyes",
        narration: "Paper chromatography splits a mixture of soluble colours, such as the dyes in an ink.",
        rule: "Different dyes travel at different speeds.",
        draw: [
          R(300, 130, 200, 250, "#fff7ed", "#d97706"),
          P("M 300 340 L 500 340", BLUE, 4),
          T(400, 400, "solvent", BLUE, 16),
        ],
      },
      {
        narration: "Spot the mixture near the bottom. The solvent soaks up the paper and carries the dyes with it.",
        rule: "Solvent climbs; dyes ride along.",
        quizQ: "What is paper chromatography used for?",
        quizA: "Separating a mixture of soluble substances, such as the dyes in an ink.",
        draw: [
          C(400, 310, 8, PURPLE, PURPLE),
          T(560, 310, "start spot", PURPLE, 14),
          C(370, 220, 10, RED, RED),
          C(430, 180, 10, BLUE, BLUE),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Pencil, not pen",
        narration: "Draw the start line in pencil. Pencil graphite does not dissolve. Pen ink would run and mess up the result.",
        rule: "Start line in pencil only.",
        draw: [
          P("M 220 250 L 580 250", SUB, 3),
          T(400, 220, "pencil start line", INK, 18),
          T(400, 320, "pen ink would dissolve and run", RED, 16),
        ],
      },
      {
        narration: "Keep the dye spots above the solvent at the start, or they will wash off into the beaker.",
        rule: "Spots must start above the solvent.",
        quizQ: "Why must the start line be drawn in pencil?",
        quizA: "Pencil does not dissolve in the solvent. Ink from a pen would run and spoil the result.",
        draw: [
          T(400, 370, "spots above the liquid", BLUE, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "A spot that stays put",
        narration: "If a colour never leaves the start line, it did not dissolve in the solvent you chose.",
        rule: "No movement → not soluble in that solvent.",
        draw: [
          R(300, 140, 200, 230, "#fff7ed", ORANGE),
          C(400, 330, 10, PURPLE, PURPLE),
          T(400, 300, "stuck here", PURPLE, 16),
          P("M 300 360 L 500 360", BLUE, 3),
        ],
      },
      {
        narration: "Try a different solvent, or that substance is simply not soluble. Chromatography only moves what dissolves.",
        rule: "Only soluble substances travel.",
        quizQ: "A spot does not move. What does that tell you?",
        quizA: "That substance does not dissolve in the solvent you chose.",
        draw: [
          T(400, 400, "try another solvent", SUB, 16),
        ],
      },
    ],
  },
]);

data["s7_3.1"] = scenesFrom("3.1 Forces and motion", "Section 3.1: Forces", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "What a force can do",
        narration: "A force is a push or a pull. It can start, stop, speed up, slow down, or change the direction of a moving object.",
        rule: "Forces change motion or shape.",
        draw: [
          C(250, 240, 40, PALE_B, BLUE),
          T(250, 240, "ball", BLUE, 16),
          P("M 310 240 L 420 240", ORANGE, 5),
          T(500, 240, "force", ORANGE, 18),
        ],
      },
      {
        narration: "A force can also squash or stretch something — change its shape — like squeezing a sponge.",
        rule: "Forces can also change shape.",
        quizQ: "What can a force do?",
        quizA: "Start, stop, speed up, slow down or change direction, or change an object's shape.",
        draw: [
          R(200, 320, 400, 50, PALE_O, ORANGE),
          T(400, 345, "start · stop · faster · slower · turn · squash", INK, 14),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Resultant force",
        narration: "If more than one force acts, you can replace them with one resultant force that has the same effect.",
        rule: "Resultant = the overall force.",
        draw: [
          P("M 200 240 L 360 240", BLUE, 5),
          T(280, 210, "8 N", BLUE, 16),
          P("M 600 240 L 440 240", RED, 5),
          T(520, 210, "3 N", RED, 16),
        ],
      },
      {
        narration: "Here 8 N right and 3 N left give a 5 N resultant to the right. The object speeds up that way.",
        rule: "Same direction adds. Opposite subtracts.",
        quizQ: "What is a resultant force?",
        quizA: "The single force that has the same effect as all the forces acting together.",
        draw: [
          T(400, 320, "resultant 5 N to the right", DARK_G, 18),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Still on a table",
        narration: "A book sitting still has weight down and a support force up from the table.",
        rule: "Balanced forces → no change in motion.",
        draw: [
          R(300, 250, 200, 40, PALE_O, ORANGE),
          T(400, 270, "book", ORANGE, 16),
          P("M 250 200 L 550 200", SUB, 4),
          T(400, 180, "support up", BLUE, 16),
          T(400, 330, "weight down", GREEN, 16),
        ],
      },
      {
        narration: "Those two forces are equal and opposite, so the resultant is zero. The book stays still.",
        rule: "Resultant zero = stay still (or keep steady speed).",
        quizQ: "A book is still on a table. What is the resultant force?",
        quizA: "Zero. The support force from the table balances the weight.",
        draw: [
          T(400, 380, "resultant = 0 N", INK, 18),
        ],
      },
    ],
  },
]);

data["s7_3.2"] = scenesFrom("3.2 Speed", "Section 3.2: Speed", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Average speed",
        narration: "Average speed is how far you go divided by how long it took. Units are often metres per second.",
        rule: "speed = distance ÷ time",
        draw: [
          R(150, 200, 500, 70, PALE_B, BLUE),
          T(400, 235, "average speed = distance ÷ time", BLUE, 20),
        ],
      },
      {
        narration: "If you cycle 120 m in 20 s, speed is 120 ÷ 20 = 6 m/s.",
        rule: "Always divide distance by time.",
        quizQ: "How do you calculate average speed?",
        quizA: "Average speed = distance travelled ÷ time taken. A common unit is m/s.",
        draw: [
          T(400, 330, "120 m  ÷  20 s  =  6 m/s", DARK_G, 20),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "A worked example",
        narration: "Write the numbers under the words. Distance 120 m, time 20 s.",
        rule: "Put units in the working.",
        draw: [
          T(250, 210, "distance 120 m", BLUE, 18),
          T(550, 210, "time 20 s", ORANGE, 18),
        ],
      },
      {
        narration: "Divide: 120 ÷ 20 = 6. The unit is m/s because metres were divided by seconds.",
        rule: "m ÷ s gives m/s.",
        quizQ: "A cyclist travels 120 m in 20 s. What is the average speed?",
        quizA: "6 m/s.",
        draw: [
          R(250, 280, 300, 60, PALE_G, GREEN),
          T(400, 310, "6 m/s", DARK_G, 24),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Speedometer vs average",
        narration: "A speedometer shows speed at one moment — instantaneous speed.",
        rule: "Speedometer = speed right now.",
        draw: [
          C(250, 240, 70, PALE_O, ORANGE),
          T(250, 240, "42", ORANGE, 28),
          T(250, 340, "right now", SUB, 16),
        ],
      },
      {
        narration: "Average speed uses the whole journey: total distance over total time, including stops.",
        rule: "Average uses the whole trip.",
        quizQ: "Why is a speedometer not the same as average speed?",
        quizA: "It shows the speed at one moment. Average speed uses the whole journey.",
        draw: [
          R(400, 190, 280, 100, PALE_B, BLUE),
          T(540, 225, "whole journey", BLUE, 16),
          T(540, 258, "distance ÷ time", SUB, 14),
        ],
      },
    ],
  },
]);

data["s7_3.3"] = scenesFrom("3.3 Describing movement", "Section 3.3: Graphs", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Distance–time graphs",
        narration: "Plot distance up the side and time along the bottom. A straight slope means steady speed.",
        rule: "Steeper line = faster.",
        draw: [
          P("M 180 360 L 180 140", INK, 3),
          P("M 180 360 L 620 360", INK, 3),
          T(120, 240, "distance", INK, 14),
          T(400, 400, "time", INK, 16),
          P("M 180 360 L 500 200", BLUE, 4),
        ],
      },
      {
        narration: "A flat line means you have stopped: distance is not changing. A curve means speed is changing.",
        rule: "Flat = still. Curve = speeding up or slowing.",
        quizQ: "What does the steepness of a distance–time graph show?",
        quizA: "Speed. A steeper straight line means a higher constant speed. A flat line means the object is still.",
        draw: [
          P("M 500 200 L 620 200", GREEN, 4),
          T(560, 175, "stopped", GREEN, 14),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Reading a curve",
        narration: "If the line bends, speed is not constant. Getting steeper means speeding up.",
        rule: "A curve means changing speed.",
        draw: [
          P("M 180 360 L 180 140", INK, 3),
          P("M 180 360 L 620 360", INK, 3),
          P("M 180 360 Q 320 340 500 180", ORANGE, 4),
          T(400, 400, "time", INK, 16),
        ],
      },
      {
        narration: "Getting flatter means slowing down. You cannot read one speed from a curve — it keeps changing.",
        rule: "Curved graph → no single speed.",
        quizQ: "What does a curved distance–time graph mean?",
        quizA: "The speed is changing.",
        draw: [
          T(560, 200, "speeding up", ORANGE, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Speed from a straight bit",
        narration: "Pick two points on a straight section. Speed = change in distance ÷ change in time.",
        rule: "Use the triangle on the straight part.",
        draw: [
          P("M 180 360 L 180 140", INK, 3),
          P("M 180 360 L 640 360", INK, 3),
          P("M 220 320 L 520 180", BLUE, 4),
          P("M 220 320 L 520 320", SUB, 2, null, "5,4"),
          P("M 520 320 L 520 180", SUB, 2, null, "5,4"),
        ],
      },
      {
        narration: "Rise over run on that section is the speed. Do not mix points from a different slope.",
        rule: "Only use one straight section.",
        quizQ: "How do you find the speed from a straight section?",
        quizA: "Speed = change in distance ÷ change in time for that section.",
        draw: [
          T(400, 400, "Δ distance  ÷  Δ time", BLUE, 16),
        ],
      },
    ],
  },
]);

data["s7_3.4"] = scenesFrom("3.4 Turning forces", "Section 3.4: Moments", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "A moment is a turn",
        narration: "A force can turn an object around a pivot, like a door around its hinge.",
        rule: "Moment = force × perpendicular distance from pivot.",
        draw: [
          C(250, 250, 10, INK, INK),
          T(250, 220, "pivot", INK, 14),
          P("M 250 250 L 560 250", SUB, 6),
          P("M 520 250 L 520 330", ORANGE, 5),
          T(580, 330, "force", ORANGE, 16),
        ],
      },
      {
        narration: "A bigger force, or a longer distance from the pivot, gives a bigger turning effect.",
        rule: "Further from the pivot → easier to turn.",
        quizQ: "What is a moment?",
        quizA: "The turning effect of a force. Moment = force × perpendicular distance from the pivot.",
        draw: [
          T(400, 380, "moment = force × distance", DARK_G, 18),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Balanced seesaw",
        narration: "An object is balanced when clockwise moment equals anticlockwise moment.",
        rule: "Clockwise = anticlockwise for balance.",
        draw: [
          P("M 160 250 L 640 250", INK, 5),
          C(400, 250, 10, INK, INK),
          R(180, 200, 50, 40, PALE_B, BLUE),
          R(560, 200, 50, 40, PALE_O, ORANGE),
          T(205, 220, "L", BLUE, 16),
          T(585, 220, "R", ORANGE, 16),
        ],
      },
      {
        narration: "If the left moment is bigger, that side goes down. Equal moments keep it level.",
        rule: "Equal moments → balanced.",
        quizQ: "When is an object balanced?",
        quizA: "When the clockwise moment equals the anticlockwise moment.",
        draw: [
          T(400, 330, "left moment = right moment", GREEN, 18),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "A number example",
        narration: "A 4 N weight sits 0.3 m from a pivot. Moment = 4 × 0.3.",
        rule: "Multiply force by distance.",
        draw: [
          T(250, 220, "4 N", ORANGE, 22),
          T(400, 220, "×", INK, 22),
          T(550, 220, "0.3 m", BLUE, 22),
        ],
      },
      {
        narration: "4 × 0.3 = 1.2. The unit is newton metres, N m.",
        rule: "Moment unit is N m.",
        quizQ: "A 4 N weight sits 0.3 m from a pivot. What moment does it produce?",
        quizA: "1.2 N m.",
        draw: [
          R(250, 290, 300, 60, PALE_G, GREEN),
          T(400, 320, "1.2 N m", DARK_G, 22),
        ],
      },
    ],
  },
]);

data["s7_3.5"] = scenesFrom("3.5 Pressure between solids", "Section 3.5: Pressure", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Force spread over an area",
        narration: "Pressure is force divided by the area it acts on. Same force on a smaller area means bigger pressure.",
        rule: "pressure = force ÷ area",
        draw: [
          R(150, 200, 500, 70, PALE_B, BLUE),
          T(400, 235, "pressure = force ÷ area", BLUE, 20),
        ],
      },
      {
        narration: "A drawing pin is sharp so the force is on a tiny area. It makes a large pressure and goes into the board.",
        rule: "Small area → high pressure.",
        quizQ: "How do you calculate pressure?",
        quizA: "Pressure = force ÷ area. A bigger area gives a smaller pressure for the same force.",
        draw: [
          T(250, 340, "sharp point", ORANGE, 16),
          T(550, 340, "high pressure", RED, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Why snowshoes are wide",
        narration: "Snowshoes spread your weight over a large area, so the pressure on the snow is smaller and you do not sink.",
        rule: "Bigger area → smaller pressure.",
        draw: [
          R(160, 220, 80, 40, PALE_O, ORANGE),
          T(200, 180, "boot", ORANGE, 14),
          R(400, 210, 240, 60, PALE_G, GREEN),
          T(520, 240, "snowshoe", DARK_G, 16),
        ],
      },
      {
        narration: "Same weight, larger area, smaller pressure. Camels' wide feet work the same way in sand.",
        rule: "Spread the weight to stay on top.",
        quizQ: "Why are snowshoes wide?",
        quizA: "They spread the weight over a larger area, so the pressure on the snow is smaller.",
        draw: [
          T(400, 340, "wide feet  →  less sinking", GREEN, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "A calculation",
        narration: "A 50 N force acts on 0.02 m². Pressure = 50 ÷ 0.02.",
        rule: "Divide force by area.",
        draw: [
          T(250, 220, "50 N", ORANGE, 22),
          T(400, 220, "÷", INK, 22),
          T(560, 220, "0.02 m²", BLUE, 20),
        ],
      },
      {
        narration: "50 ÷ 0.02 = 2500. The unit is N/m², also called the pascal, Pa.",
        rule: "1 Pa = 1 N/m².",
        quizQ: "A 50 N force acts on 0.02 m². What is the pressure?",
        quizA: "2500 N/m² (also called 2500 Pa).",
        draw: [
          R(230, 290, 340, 60, PALE_G, GREEN),
          T(400, 320, "2500 N/m²  =  2500 Pa", DARK_G, 18),
        ],
      },
    ],
  },
]);

data["s7_3.6"] = scenesFrom("3.6 Pressure in fluids", "Section 3.6: Fluids", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Deeper means more pressure",
        narration: "In a liquid, pressure increases with depth because more liquid is sitting above you.",
        rule: "Deeper in a liquid → higher pressure.",
        draw: [
          R(250, 140, 300, 250, PALE_B, BLUE),
          T(400, 180, "liquid", BLUE, 16),
          C(400, 230, 10, ORANGE, ORANGE),
          T(520, 230, "shallow", ORANGE, 14),
          C(400, 340, 10, RED, RED),
          T(530, 340, "deep — more pressure", RED, 14),
        ],
      },
      {
        narration: "That is why your ears can hurt at the bottom of a swimming pool: extra water is pressing on them.",
        rule: "More liquid above you → more push.",
        quizQ: "How does pressure in a liquid change with depth?",
        quizA: "It increases with depth, because more liquid is pressing down.",
        draw: [
          T(400, 410, "pool floor feels a bigger push", SUB, 14),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Gas pressure",
        narration: "A gas exerts pressure because its particles collide with the walls of the container.",
        rule: "Collisions with walls = gas pressure.",
        draw: [
          R(250, 160, 300, 180, PALE_O, ORANGE),
          C(300, 220, 8, INK, INK),
          C(380, 250, 8, INK, INK),
          C(460, 210, 8, INK, INK),
          C(340, 300, 8, INK, INK),
          C(480, 290, 8, INK, INK),
          T(400, 370, "particles hitting the walls", ORANGE, 16),
        ],
      },
      {
        narration: "More collisions, or harder collisions, mean higher pressure.",
        rule: "More hits → higher pressure.",
        quizQ: "Why does a gas exert pressure?",
        quizA: "Its particles collide with the walls of the container.",
        draw: [
          T(400, 410, "bounce off the inside surface", SUB, 14),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Squeeze the same gas",
        narration: "If you push the same gas into a smaller volume, at the same temperature, particles hit the walls more often.",
        rule: "Smaller volume → higher pressure (same T).",
        draw: [
          R(140, 180, 200, 140, PALE_B, BLUE),
          T(240, 250, "big box", BLUE, 16),
          R(460, 200, 120, 100, PALE_R, RED),
          T(520, 250, "small", RED, 16),
        ],
      },
      {
        narration: "Pressure rises. Bicycle pumps work this way: you squeeze air into the tyre.",
        rule: "Same gas, less space, more pressure.",
        quizQ: "What happens to gas pressure if you squeeze the same gas into a smaller volume, at the same temperature?",
        quizA: "Pressure rises, because particles hit the walls more often.",
        draw: [
          T(400, 370, "more hits per second", INK, 16),
        ],
      },
    ],
  },
]);

data["s7_3.7"] = scenesFrom("3.7 Particles on the move", "Section 3.7: Diffusion", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Diffusion",
        narration: "Particles spread from where they are crowded to where they are less crowded. That spreading is diffusion.",
        rule: "High concentration → low concentration.",
        draw: [
          C(180, 200, 8, PURPLE, PURPLE),
          C(200, 240, 8, PURPLE, PURPLE),
          C(160, 260, 8, PURPLE, PURPLE),
          C(220, 210, 8, PURPLE, PURPLE),
          T(190, 320, "crowded", PURPLE, 16),
          P("M 280 230 L 480 230", INK, 4),
          C(560, 210, 8, PALE_P, PURPLE),
          C(600, 250, 8, PALE_P, PURPLE),
          C(640, 220, 8, PALE_P, PURPLE),
          T(600, 320, "spread out", PURPLE, 16),
        ],
      },
      {
        narration: "No fan is needed. Particles jiggle on their own and slowly mix.",
        rule: "Diffusion happens by itself.",
        quizQ: "What is diffusion?",
        quizA: "The spreading of particles from a region where they are crowded to one where they are less crowded.",
        draw: [
          T(400, 380, "particles move themselves", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Gases vs liquids",
        narration: "Gas particles move faster and have more space, so they diffuse more quickly than particles in a liquid.",
        rule: "Diffusion is faster in a gas.",
        draw: [
          R(140, 180, 220, 110, PALE_B, BLUE),
          T(250, 215, "gas", BLUE, 18),
          T(250, 250, "fast spread", SUB, 14),
          R(440, 180, 220, 110, PALE_G, GREEN),
          T(550, 215, "liquid", GREEN, 18),
          T(550, 250, "slower spread", SUB, 14),
        ],
      },
      {
        narration: "In a solid, particles are locked in place, so they do not diffuse in the same way.",
        rule: "Solids do not diffuse like fluids.",
        quizQ: "Why does diffusion happen faster in a gas than in a liquid?",
        quizA: "Gas particles move faster and are further apart, so they spread more quickly.",
        draw: [
          T(400, 350, "solids: particles stay put", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Perfume in a room",
        narration: "Spray perfume in a corner. Soon you can smell it across the room even with the windows shut.",
        rule: "Smell travels by diffusion.",
        draw: [
          C(180, 240, 20, PALE_P, PURPLE),
          T(180, 290, "spray", PURPLE, 14),
          C(340, 210, 10, PALE_P, PURPLE),
          C(420, 260, 10, PALE_P, PURPLE),
          C(520, 220, 10, PALE_P, PURPLE),
          C(620, 250, 10, PALE_P, PURPLE),
        ],
      },
      {
        narration: "Perfume particles bounce through the air on their own. No wind is required.",
        rule: "Particles mix without a breeze.",
        quizQ: "Why does the smell of perfume fill a room even with no wind?",
        quizA: "Perfume particles diffuse through the air by themselves.",
        draw: [
          T(400, 360, "no wind needed", INK, 18),
        ],
      },
    ],
  },
]);

const keys = ["s7_1.1","s7_1.2","s7_1.3","s7_1.4","s7_2.1","s7_2.2","s7_2.3","s7_2.4","s7_3.1","s7_3.2","s7_3.3","s7_3.4","s7_3.5","s7_3.6","s7_3.7"];
const problems = audit(keys);
if (problems.length) {
  console.log(problems.join("\n"));
  console.log("PROBLEMS", problems.length);
  process.exit(1);
}

fs.writeFileSync(file, "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(data, null, 2) + ";\n");
console.log("Wrote Year 7 Science chapters 1–3 whiteboards");
