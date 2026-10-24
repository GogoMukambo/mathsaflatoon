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

data["s8_4.1"] = scenesFrom("4.1 Plants and water", "Section 4.1: Roots", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Drinking through hairs",
        narration: "Root hairs are like tiny drinking straws on the root. They soak up soil water by osmosis — water sneaking into a more crowded sap.",
        rule: "Water enters through root hair cells.",
        draw: [
          P("M 400 140 L 400 260", GREEN, 10),
          P("M 400 260 Q 360 300 320 340", GREEN, 4),
          P("M 400 260 Q 440 300 480 340", GREEN, 4),
          P("M 320 340 L 280 360", GREEN, 2),
          P("M 320 340 L 300 380", GREEN, 2),
          P("M 480 340 L 520 360", GREEN, 2),
          P("M 480 340 L 500 380", GREEN, 2),
          T(400, 120, "stem", DARK_G, 14),
        ],
      },
      {
        narration: "Lots of hairs mean a huge surface, so more water and minerals can sneak in each second.",
        rule: "Hairs increase surface area.",
        quizQ: "How does water enter a plant?",
        quizA: "Mostly through root hair cells, by osmosis.",
        draw: [
          T(200, 360, "root hairs", GREEN, 16),
          T(600, 360, "soil water", BLUE, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Up the hollow pipes",
        narration: "Xylem vessels are dead hollow tubes, stacked like drinking straws, carrying water and minerals to the leaves.",
        rule: "Xylem carries water up.",
        draw: [
          R(300, 150, 40, 220, PALE_B, BLUE),
          R(360, 150, 40, 220, PALE_B, BLUE),
          R(420, 150, 40, 220, PALE_B, BLUE),
          T(380, 400, "xylem tubes", BLUE, 16),
        ],
      },
      {
        narration: "Living cells also need water as a solvent so chemistry like respiration can happen inside them.",
        rule: "Water is transport and solvent.",
        quizQ: "How does water travel up the stem?",
        quizA: "Through xylem vessels — hollow tubes to the leaves.",
        draw: [
          P("M 380 150 L 380 120", BLUE, 4),
          T(500, 130, "to leaves", BLUE, 14),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "When the drink stops",
        narration: "If roots cannot take enough water, cells go floppy (lose turgor). The plant wilts like a deflated balloon.",
        rule: "No water → wilt.",
        draw: [
          P("M 280 160 Q 260 280 280 360", GREEN, 6),
          P("M 260 200 Q 200 240 240 280", GREEN, 4),
          T(280, 400, "wilted", ORANGE, 16),
          P("M 520 160 L 520 340", GREEN, 8),
          P("M 480 220 Q 440 200 420 240", GREEN, 4),
          T(520, 400, "turgid", DARK_G, 16),
        ],
      },
      {
        narration: "Photosynthesis and support both suffer. Water is not optional furniture — it is how the plant stands and cooks food.",
        rule: "Turgor keeps plants upright.",
        quizQ: "What happens if a plant cannot take up enough water?",
        quizA: "Cells lose turgor, the plant wilts, and photosynthesis and support suffer.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_4.2"] = scenesFrom("4.2 Transpiration", "Section 4.2: Transpiration", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Leaves leak vapour",
        narration: "Water evaporates from leaf cells and puffs out through stomata. That loss is transpiration — and it tugs the xylem stream upward.",
        rule: "Transpiration = water vapour leaving leaves.",
        draw: [
          P("M 250 230 Q 400 140 550 230 Q 400 300 250 230 Z", GREEN, 3, PALE_G),
          P("M 400 300 L 400 360", GREEN, 8),
          T(180, 200, "H₂O out", BLUE, 16),
          T(620, 200, "H₂O out", BLUE, 16),
        ],
      },
      {
        narration: "Guard cells are lips around each stoma. Fat with water they open; floppy they close.",
        rule: "Guard cells open and close stomata.",
        quizQ: "What is transpiration?",
        quizA: "The loss of water vapour from leaves, mainly through stomata.",
        draw: [
          C(340, 400, 16, PALE_G, GREEN),
          C(380, 400, 16, PALE_G, GREEN),
          T(500, 400, "stoma", SUB, 14),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "What speeds the leak",
        narration: "Warmth, wind, dry air, and light (stomata open) all speed transpiration. A potometer watches water uptake, which tracks the leak.",
        rule: "Warm, windy, dry, light → faster.",
        draw: [
          R(130, 180, 140, 80, PALE_O, ORANGE),
          T(200, 220, "warm", ORANGE, 16),
          R(290, 180, 140, 80, PALE_B, BLUE),
          T(360, 220, "wind", BLUE, 16),
          R(450, 180, 140, 80, PALE_G, GREEN),
          T(520, 220, "dry air", DARK_G, 16),
        ],
      },
      {
        narration: "A potometer is a snorkel for a cut shoot: as the shoot drinks, a bubble moves along a tube.",
        rule: "Potometer measures uptake.",
        quizQ: "What increases transpiration rate?",
        quizA: "Warmth, wind, low humidity, and light.",
        draw: [
          R(250, 300, 300, 50, PALE_B, BLUE),
          C(300, 325, 8, INK, INK),
          T(400, 380, "bubble moves as water is taken", SUB, 14),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Close the windows",
        narration: "On a hot dry day some plants shut stomata. They save water, but CO₂ for photosynthesis also struggles to get in.",
        rule: "Closed stomata: less water loss, less CO₂ in.",
        draw: [
          C(300, 240, 24, PALE_G, GREEN),
          C(360, 240, 24, PALE_G, GREEN),
          T(330, 200, "open", GREEN, 14),
          C(500, 240, 24, PALE_O, ORANGE),
          C(530, 240, 24, PALE_O, ORANGE),
          T(515, 200, "shut", ORANGE, 14),
        ],
      },
      {
        narration: "It is a trade: stay hydrated or keep cooking food. Desert plants are stingy with open stomata.",
        rule: "A compromise, not a free lunch.",
        quizQ: "Why do some plants close stomata on a hot dry day?",
        quizA: "To reduce water loss, even though that also slows CO₂ entry for photosynthesis.",
        draw: [
          T(400, 340, "save water  ↔  slower photosynthesis", SUB, 16),
        ],
      },
    ],
  },
]);

data["s8_4.3"] = scenesFrom("4.3 Excretion in humans", "Section 4.3: Excretion", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Bin the chemical leftovers",
        narration: "Excretion is throwing out wastes made by your chemistry — CO₂ and urea — not the same as pooing undigested food (egestion).",
        rule: "Excretion ≠ egestion.",
        draw: [
          R(150, 180, 220, 100, PALE_B, BLUE),
          T(260, 215, "excretion", BLUE, 18),
          T(260, 250, "CO₂, urea", SUB, 14),
          R(430, 180, 220, 100, PALE_O, ORANGE),
          T(540, 215, "egestion", ORANGE, 18),
          T(540, 250, "faeces", SUB, 14),
        ],
      },
      {
        narration: "CO₂ from respiration rides the blood to the lungs and leaves when you breathe out.",
        rule: "Lungs excrete carbon dioxide.",
        quizQ: "What is excretion?",
        quizA: "Removing waste products of metabolism, such as carbon dioxide and urea.",
        draw: [
          T(400, 340, "cells → blood → lungs → air", DARK_G, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "The kidney plumbing",
        narration: "Kidneys filter blood. Ureters are pipes to the bladder. The urethra is the exit. Renal means ‘about the kidney’.",
        rule: "kidney → ureter → bladder → urethra",
        draw: [
          C(280, 200, 36, PALE_R, RED),
          C(280, 270, 36, PALE_R, RED),
          T(280, 200, "K", RED, 16),
          T(280, 270, "K", RED, 16),
          P("M 316 200 L 480 230", BLUE, 4),
          P("M 316 270 L 480 250", BLUE, 4),
          R(480, 210, 80, 60, PALE_B, BLUE),
          T(520, 240, "bladder", BLUE, 12),
          P("M 520 270 L 520 340", BLUE, 4),
          T(520, 370, "urethra", SUB, 14),
        ],
      },
      {
        narration: "Urine is urea plus spare water and salts. Sweat also dumps some water and salt. Faeces still are not excretion.",
        rule: "Urine = urea + extra water and salts.",
        quizQ: "What do the kidneys do?",
        quizA: "They filter blood, remove urea and excess water and salts, and produce urine.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Where urea comes from",
        narration: "Extra amino acids are broken down in the liver. Urea is the leftover that would poison you if it piled up.",
        rule: "Liver makes urea. Kidneys bin it.",
        draw: [
          R(180, 190, 180, 90, PALE_O, ORANGE),
          T(270, 235, "liver", ORANGE, 18),
          P("M 370 235 L 430 235", INK, 4),
          R(440, 190, 180, 90, PALE_R, RED),
          T(530, 235, "kidney", RED, 18),
        ],
      },
      {
        narration: "So protein-heavy meals mean more urea to flush. Drink water — the kidneys need a river to carry it.",
        rule: "Urea is from amino-acid breakdown.",
        quizQ: "Why is urea produced?",
        quizA: "From breaking down excess amino acids in the liver. It is toxic if it builds up.",
        draw: [
          T(400, 340, "amino acids → urea → urine", SUB, 16),
        ],
      },
    ],
  },
]);

data["s8_4.4"] = scenesFrom("4.4 Keeping a fetus healthy", "Section 4.4: Fetus", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "A swap shop, not a mix",
        narration: "The placenta is a mixing desk where mum’s blood and baby’s blood get close — but they do not blend. Oxygen and food go across; wastes come back.",
        rule: "Placenta exchanges. Bloods do not mix.",
        draw: [
          R(160, 180, 200, 100, PALE_R, RED),
          T(260, 230, "mother", RED, 16),
          R(440, 180, 200, 100, PALE_P, PURPLE),
          T(540, 230, "fetus", PURPLE, 16),
          P("M 360 230 L 440 230", GREEN, 4),
          T(400, 200, "placenta", GREEN, 14),
        ],
      },
      {
        narration: "The umbilical cord is the cable to that swap shop. Amniotic fluid is a waterbed that cushions bumps and steadies temperature.",
        rule: "Cord links. Fluid cushions.",
        quizQ: "How does a fetus get what it needs?",
        quizA: "The placenta exchanges oxygen and nutrients. Bloods do not normally mix.",
        draw: [
          T(400, 340, "O₂ and food in  ·  CO₂ and waste out", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "The waterbed",
        narration: "Amniotic fluid lets the fetus float, so knocks are softened and the temperature stays even.",
        rule: "Cushion + stable temperature.",
        draw: [
          C(400, 250, 90, PALE_B, BLUE, 3),
          C(400, 250, 40, PALE_P, PURPLE),
          T(400, 250, "baby", PURPLE, 14),
          T(400, 370, "amniotic fluid", BLUE, 16),
        ],
      },
      {
        narration: "Smoking, alcohol, some drugs and some infections can cross the placenta. Folic acid and a balanced diet help a healthy pregnancy.",
        rule: "What mum takes, baby may get.",
        quizQ: "What does the amniotic fluid do?",
        quizA: "It cushions the fetus and helps keep a stable temperature.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Small and still building",
        narration: "A fetus is tiny and its organs are still assembling. The same chemical that barely touches an adult can wreck that building site.",
        rule: "Many chemicals cross the placenta.",
        draw: [
          R(180, 190, 180, 100, PALE_O, ORANGE),
          T(270, 240, "adult", ORANGE, 16),
          R(440, 210, 140, 60, PALE_P, PURPLE),
          T(510, 240, "fetus", PURPLE, 16),
        ],
      },
      {
        narration: "That is why pregnancy advice is strict: the placenta is a doorway, not a brick wall.",
        rule: "Doorway, not a wall.",
        quizQ: "Why can substances the mother takes affect the baby?",
        quizA: "Many chemicals cross the placenta. The fetus is small and still developing.",
        draw: [
          T(400, 340, "placenta is a doorway", SUB, 16),
        ],
      },
    ],
  },
]);

data["s8_5.1"] = scenesFrom("5.1 Reactivity & displacement", "Section 5.1: Displacement", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "A league table of metals",
        narration: "The reactivity series is a ranking: who fizzes most with water or acid. Potassium is near the top; gold is on the bench.",
        rule: "More reactive metals sit higher.",
        draw: [
          T(400, 160, "K  Na  Ca  Mg  Al  C  Zn  Fe  Cu  Ag  Au", INK, 15),
          T(200, 220, "fierce", RED, 16),
          T(600, 220, "lazy", BLUE, 16),
        ],
      },
      {
        narration: "Displacement: a higher metal can kick a lower one out of its compound — like swapping seats if you are stronger.",
        rule: "Higher metal displaces a lower one.",
        quizQ: "What is the reactivity series?",
        quizA: "A list of metals in order of how readily they react.",
        draw: [
          T(400, 300, "iron + copper sulfate", SUB, 16),
          P("M 400 320 L 400 350", INK, 3),
          T(400, 380, "iron sulfate + copper", GREEN, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Iron steals copper’s place",
        narration: "Dip iron in blue copper sulfate. Iron is higher, so brown copper coats the iron and the blue fades.",
        rule: "Fe more reactive than Cu.",
        draw: [
          R(180, 180, 160, 120, PALE_B, BLUE),
          T(260, 240, "blue CuSO₄", BLUE, 14),
          P("M 360 240 L 440 240", INK, 4),
          R(460, 180, 160, 120, PALE_O, ORANGE),
          T(540, 230, "brown Cu", ORANGE, 16),
          T(540, 258, "on the iron", SUB, 12),
        ],
      },
      {
        narration: "Clues a reaction happened: colour change, fizz, heat, a new solid, sparks.",
        rule: "Look for a change you can see or feel.",
        quizQ: "What is a displacement reaction?",
        quizA: "A more reactive metal takes the place of a less reactive metal in a compound.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Gold vs zinc",
        narration: "Gold is far below zinc. Drop gold in zinc sulfate and nothing happens — gold cannot shove zinc out.",
        rule: "Lower metal cannot displace a higher one.",
        draw: [
          R(200, 190, 180, 90, PALE_O, ORANGE),
          T(290, 235, "gold", ORANGE, 18),
          T(400, 235, "+", INK, 18),
          R(440, 190, 180, 90, PALE_B, BLUE),
          T(530, 235, "ZnSO₄", BLUE, 18),
        ],
      },
      {
        narration: "No colour change, no new metal. The league table predicted that.",
        rule: "Gold is too unreactive here.",
        quizQ: "Would gold displace zinc from zinc sulfate?",
        quizA: "No. Gold is less reactive than zinc, so there is no reaction.",
        draw: [
          T(400, 340, "no reaction", RED, 18),
        ],
      },
    ],
  },
]);

data["s8_5.2"] = scenesFrom("5.2 Using the series", "Section 5.2: Extraction", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Who carbon can rescue",
        narration: "Metals below carbon can have oxygen stolen by hot carbon — reduction. Metals above carbon need electrolysis, a big electric pull.",
        rule: "Below carbon: heat with carbon. Above: electrolysis.",
        draw: [
          R(150, 180, 220, 100, PALE_R, RED),
          T(260, 215, "K, Na, Al", RED, 16),
          T(260, 250, "electrolysis", SUB, 14),
          R(430, 180, 220, 100, PALE_G, GREEN),
          T(540, 215, "Zn, Fe, Cu", DARK_G, 16),
          T(540, 250, "carbon reduction", SUB, 14),
        ],
      },
      {
        narration: "Thermite (aluminium + iron oxide) is displacement used to weld rails: aluminium is high enough to grab oxygen from iron oxide.",
        rule: "Displacement has real jobs.",
        quizQ: "How do we extract metals using this idea?",
        quizA: "Metals below carbon: heat oxide with carbon. More reactive metals need electrolysis.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Potassium and carbon",
        narration: "Potassium is more reactive than carbon, so carbon cannot snatch oxygen from potassium oxide. You need electricity.",
        rule: "K is above C — carbon cannot reduce it.",
        draw: [
          T(400, 220, "K  higher than  C", INK, 20),
          T(400, 280, "carbon loses that tug-of-war", SUB, 16),
        ],
      },
      {
        narration: "Recycling aluminium skips the hungry electrolysis step. That is why recycling cans is worth the hassle.",
        rule: "Recycling aluminium saves huge energy.",
        quizQ: "Why is potassium never extracted by heating with carbon?",
        quizA: "Potassium is more reactive than carbon, so carbon cannot take oxygen from potassium oxide.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Why recycle the can",
        narration: "Making new aluminium from ore drinks electricity. Melting old cans uses a fraction of that energy.",
        rule: "Recycling avoids most of the extraction cost.",
        draw: [
          R(160, 190, 200, 100, PALE_R, RED),
          T(260, 240, "ore → metal", RED, 16),
          R(440, 190, 200, 100, PALE_G, GREEN),
          T(540, 240, "scrap → metal", DARK_G, 16),
        ],
      },
      {
        narration: "Same metal, far less energy. The reactivity series explains why aluminium was expensive to win in the first place.",
        rule: "High metals are costly to extract.",
        quizQ: "Why is recycling aluminium worthwhile?",
        quizA: "Extracting it from ore uses a lot of electrical energy. Recycling avoids most of that cost.",
        draw: [
          T(400, 350, "less electricity", GREEN, 16),
        ],
      },
    ],
  },
]);

data["s8_5.3"] = scenesFrom("5.3 Salts", "Section 5.3: Salts", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Swap the hydrogen",
        narration: "A salt is what you get when a metal (or ammonium) takes the hydrogen’s place in an acid.",
        rule: "Acid’s H replaced by a metal ion.",
        draw: [
          T(250, 220, "HCl", RED, 22),
          T(400, 220, "→", INK, 22),
          T(550, 220, "NaCl", BLUE, 22),
          T(250, 270, "acid", SUB, 14),
          T(550, 270, "salt", SUB, 14),
        ],
      },
      {
        narration: "Hydrochloric → chlorides. Sulfuric → sulfates. Nitric → nitrates. Learn the family names.",
        rule: "HCl chlorides · H₂SO₄ sulfates · HNO₃ nitrates",
        quizQ: "What is a salt in chemistry?",
        quizA: "A compound formed when the hydrogen of an acid is replaced by a metal ion (or ammonium).",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Three recipe lines",
        narration: "metal + acid → salt + hydrogen. oxide/hydroxide + acid → salt + water. carbonate + acid → salt + water + CO₂.",
        rule: "Three patterns, same idea.",
        draw: [
          T(400, 180, "metal + acid → salt + H₂", INK, 16),
          T(400, 240, "base + acid → salt + H₂O", INK, 16),
          T(400, 300, "carbonate + acid → salt + H₂O + CO₂", INK, 16),
        ],
      },
      {
        narration: "Fizz with a metal is hydrogen. Fizz with a carbonate is carbon dioxide (limewater test).",
        rule: "Know which gas you made.",
        quizQ: "Name the salts from hydrochloric, sulfuric and nitric acids.",
        quizA: "Chlorides, sulfates and nitrates.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Zinc meets sulfuric acid",
        narration: "zinc + sulfuric acid → zinc sulfate + hydrogen. The salt name is metal + sulfate.",
        rule: "Zinc sulfate and hydrogen.",
        draw: [
          T(400, 210, "Zn + H₂SO₄", INK, 20),
          P("M 300 250 L 500 250", INK, 4),
          T(400, 300, "ZnSO₄ + H₂", GREEN, 20),
        ],
      },
      {
        narration: "Collect the gas: squeaky pop. Evaporate the leftover solution to grow crystals of the salt.",
        rule: "Pop test for hydrogen.",
        quizQ: "What salt from zinc and sulfuric acid?",
        quizA: "Zinc sulfate (and hydrogen).",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_5.4"] = scenesFrom("5.4 Making salts", "Section 5.4: Making salts", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Excess solid, then filter",
        narration: "To make a soluble salt from an insoluble base: warm acid, add extra oxide, filter off leftovers, evaporate to crystals.",
        rule: "Excess base → filter → evaporate.",
        draw: [
          R(140, 190, 140, 80, PALE_R, RED),
          T(210, 230, "acid", RED, 16),
          P("M 290 230 L 340 230", INK, 3),
          R(350, 190, 140, 80, PALE_O, ORANGE),
          T(420, 230, "excess oxide", ORANGE, 14),
          P("M 500 230 L 550 230", INK, 3),
          R(560, 190, 140, 80, PALE_B, BLUE),
          T(630, 230, "filter", BLUE, 16),
        ],
      },
      {
        narration: "The extra solid guarantees all the acid is used. Filtering removes that unused powder so you do not eat grit with your crystals.",
        rule: "Filter removes unused base.",
        quizQ: "How do you make a soluble salt from an insoluble base?",
        quizA: "Add excess base to warm acid, filter, then evaporate to crystallise.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Insoluble salts: crash out",
        narration: "Mix two solutions whose ions make an insoluble salt. It precipitates — a cloud of solid. Filter, wash, dry.",
        rule: "Precipitation for insoluble salts.",
        draw: [
          R(180, 190, 160, 80, PALE_B, BLUE),
          T(260, 230, "solution A", BLUE, 16),
          T(400, 230, "+", INK, 18),
          R(460, 190, 160, 80, PALE_G, GREEN),
          T(540, 230, "solution B", DARK_G, 16),
        ],
      },
      {
        narration: "The solid that appears is your salt. Wash it to rinse other ions away.",
        rule: "Filter, wash, dry.",
        quizQ: "How can you make an insoluble salt?",
        quizA: "Mix two solutions so the salt precipitates, then filter, wash and dry.",
        draw: [
          T(400, 330, "precipitate falls out", ORANGE, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Do not boil to dust",
        narration: "Gentle evaporation and slow cooling grow chunky crystals. Boiling dry often gives a powder or burns the salt.",
        rule: "Slow evaporation → nicer crystals.",
        draw: [
          R(180, 190, 180, 100, PALE_G, GREEN),
          T(270, 240, "slow cool", DARK_G, 16),
          R(440, 190, 180, 100, PALE_R, RED),
          T(530, 240, "boil dry", RED, 16),
        ],
      },
      {
        narration: "Leave a dish on a windowsill rather than a roaring Bunsen if you want crystals you can actually see.",
        rule: "Patience grows crystals.",
        quizQ: "Why not evaporate to dryness if you want good crystals?",
        quizA: "Gentle evaporation and cooling lets crystals grow; boiling dry can give a powder.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_5.5"] = scenesFrom("5.5 Rearranging atoms", "Section 5.5: Conservation", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Lego, not magic",
        narration: "Atoms are bricks. A reaction snaps them off one model and rebuilds another. You do not create or destroy bricks.",
        rule: "Atoms rearrange. Mass is conserved.",
        draw: [
          C(200, 220, 18, PALE_O, ORANGE),
          C(240, 220, 18, PALE_B, BLUE),
          T(220, 270, "reactants", SUB, 14),
          P("M 300 220 L 420 220", INK, 4),
          C(480, 200, 18, PALE_O, ORANGE),
          C(530, 240, 18, PALE_B, BLUE),
          T(505, 290, "products", SUB, 14),
        ],
      },
      {
        narration: "In a sealed flask the mass at the end matches the start. If a gas escapes, the dish gets lighter — the atoms flew off.",
        rule: "Closed system: mass in = mass out.",
        quizQ: "What happens to atoms in a chemical reaction?",
        quizA: "They are rearranged. Atoms are not created or destroyed.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Why we balance",
        narration: "A symbol equation must show the same number of each atom on both sides — otherwise you invented or lost bricks.",
        rule: "Balance so atom counts match.",
        draw: [
          T(400, 210, "2H₂ + O₂  →  2H₂O", INK, 22),
          T(400, 280, "4 H and 2 O on both sides", GREEN, 16),
        ],
      },
      {
        narration: "Reactants are the starting kit. Products are what you built.",
        rule: "Reactants in, products out.",
        quizQ: "Why must a symbol equation be balanced?",
        quizA: "So it shows the same number of each type of atom on both sides.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Add the masses",
        narration: "4 g of hydrogen burns in 32 g of oxygen. If nothing escapes, water made is 4 + 32 = 36 g.",
        rule: "mass of products = mass of reactants",
        draw: [
          T(220, 220, "4 g H₂", BLUE, 18),
          T(400, 220, "+", INK, 18),
          T(560, 220, "32 g O₂", ORANGE, 18),
        ],
      },
      {
        narration: "36 g of water. The numbers only work if every atom is still in the room.",
        rule: "Nothing escaped → 36 g.",
        quizQ: "If 4 g of hydrogen burns in 32 g of oxygen, what mass of water forms?",
        quizA: "36 g, if nothing escapes.",
        draw: [
          R(250, 290, 300, 60, PALE_G, GREEN),
          T(400, 320, "36 g water", DARK_G, 20),
        ],
      },
    ],
  },
]);

data["s8_6.1"] = scenesFrom("6.1 Loudness and pitch", "Section 6.1: Sound", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Height vs how many wiggles",
        narration: "On a wave sketch, taller peaks mean louder (bigger amplitude). More wiggles in the same time mean higher pitch (higher frequency).",
        rule: "Amplitude → loudness. Frequency → pitch.",
        draw: [
          P("M 120 220 Q 170 180 220 220 T 320 220", BLUE, 3),
          T(220, 260, "quiet", BLUE, 14),
          P("M 420 220 Q 470 140 520 220 T 620 220", RED, 3),
          T(520, 260, "loud", RED, 14),
        ],
      },
      {
        narration: "Sound is a longitudinal wave: particles shove their neighbours along the same line the wave travels. No particles, no sound.",
        rule: "Sound needs a medium.",
        quizQ: "What do amplitude and frequency control?",
        quizA: "Amplitude links to loudness. Frequency links to pitch.",
        draw: [
          T(400, 340, "Hz = waves per second", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Packed wiggles",
        narration: "High pitch is like a tight zigzag. Low pitch is a lazy swell. Frequency unit is hertz (Hz).",
        rule: "More Hz → higher pitch.",
        draw: [
          P("M 140 230 Q 155 190 170 230 T 200 230 T 230 230 T 260 230 T 290 230", PURPLE, 3),
          T(220, 280, "high pitch", PURPLE, 14),
          P("M 420 230 Q 500 170 580 230 T 680 230", GREEN, 3),
          T(560, 280, "low pitch", GREEN, 14),
        ],
      },
      {
        narration: "Space is silent not because it is far, but because there is almost nothing to shove.",
        rule: "No particles → no sound.",
        quizQ: "Unit of frequency?",
        quizA: "Hertz (Hz) — waves per second.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Why space is silent",
        narration: "Astronauts talk by radio because radio does not need air. A scream in a vacuum has nothing to push.",
        rule: "Too few particles to pass vibrations.",
        draw: [
          C(250, 230, 40, PALE_B, BLUE),
          T(250, 230, "Earth", BLUE, 14),
          T(250, 290, "has air", SUB, 14),
          C(550, 230, 40, "#e2e8f0", SUB),
          T(550, 230, "space", SUB, 14),
          T(550, 290, "empty", SUB, 14),
        ],
      },
      {
        narration: "Oscilloscope: tall = loud. Packed waves = high pitch. Read the picture, not just the words.",
        rule: "Taller = louder. Packed = higher pitch.",
        quizQ: "Why is there no sound in space?",
        quizA: "There are too few particles to pass the vibrations along.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_6.2"] = scenesFrom("6.2 Interference of sound", "Section 6.2: Interference", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Waves can help or cancel",
        narration: "When two sound waves overlap, peaks on peaks make a bigger boom (constructive). Peak on trough can hush (destructive).",
        rule: "In step: louder. Out of step: quieter.",
        draw: [
          P("M 140 200 Q 180 160 220 200 T 300 200", BLUE, 3),
          P("M 140 250 Q 180 210 220 250 T 300 250", BLUE, 3),
          T(220, 300, "add up", GREEN, 14),
          P("M 460 200 Q 500 160 540 200 T 620 200", RED, 3),
          P("M 460 250 Q 500 290 540 250 T 620 250", RED, 3),
          T(540, 310, "cancel", RED, 14),
        ],
      },
      {
        narration: "Noise-cancelling headphones cheat: they play an upside-down copy of the noise so the sum is nearly silence.",
        rule: "Cancel by matching the opposite wave.",
        quizQ: "What is interference?",
        quizA: "When two waves overlap they add. Crest+crest bigger; crest+trough can cancel.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Beats",
        narration: "Two close notes throb loud-quiet-loud. That throbbing is beats — interference you can hear as a pulse.",
        rule: "Close frequencies → beats.",
        draw: [
          P("M 150 240 Q 200 180 250 240 T 350 240 T 450 240 T 550 240 T 650 240", PURPLE, 3),
          T(400, 310, "loud  ·  quiet  ·  loud", PURPLE, 16),
        ],
      },
      {
        narration: "A quiet spot in a room can be where two speakers’ waves arrive out of phase.",
        rule: "Out of phase → destructive.",
        quizQ: "How can two sounds make a quieter region?",
        quizA: "If they arrive out of step, destructive interference reduces the amplitude.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Headphones that hum on purpose",
        narration: "They listen to the noise, then add a wave shaped to cancel it. You hear less engine rumble.",
        rule: "Play the anti-noise.",
        draw: [
          R(200, 190, 400, 80, PALE_P, PURPLE),
          T(400, 230, "noise + anti-noise ≈ quiet", PURPLE, 16),
        ],
      },
      {
        narration: "It is still physics, not magic: two waves adding to almost zero.",
        rule: "Destructive interference on purpose.",
        quizQ: "Why might noise-cancelling headphones play a sound?",
        quizA: "They produce a wave shaped to cancel incoming noise by destructive interference.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_6.3"] = scenesFrom("6.3 Formation of the Moon", "Section 6.3: Moon", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "A cosmic crash",
        narration: "The best story: a Mars-sized world smashed young Earth. Splash debris went into orbit and clumped into the Moon.",
        rule: "Giant impact → debris → Moon.",
        draw: [
          C(250, 240, 50, PALE_B, BLUE),
          T(250, 240, "Earth", BLUE, 14),
          C(420, 200, 28, PALE_O, ORANGE),
          T(420, 160, "impactor", ORANGE, 14),
          P("M 450 210 L 520 230", INK, 3),
          C(600, 250, 22, "#e2e8f0", SUB),
          T(600, 300, "Moon", SUB, 14),
        ],
      },
      {
        narration: "Moon rocks resemble Earth’s mantle more than a random captured asteroid would. Orbit also fits a splash, not a steal.",
        rule: "Composition and orbit fit a splash.",
        quizQ: "What is the leading idea for how the Moon formed?",
        quizA: "A giant impact: debris in orbit clumped to form the Moon.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Two faces",
        narration: "The near side has dark lava seas that buried old craters. The far side kept a more cratered, ancient crust.",
        rule: "Near side flooded; far side more craters.",
        draw: [
          C(250, 240, 70, PALE_B, BLUE),
          C(230, 230, 12, "#64748b", SUB),
          C(270, 250, 10, "#64748b", SUB),
          T(250, 340, "near: maria", BLUE, 14),
          C(550, 240, 70, "#cbd5e1", SUB),
          C(530, 220, 6, INK, INK),
          C(560, 250, 6, INK, INK),
          C(575, 225, 5, INK, INK),
          T(550, 340, "far: craters", SUB, 14),
        ],
      },
      {
        narration: "Capture of a finished Moon does not fit the chemistry as well. Exam answer: impact debris, not a stolen asteroid.",
        rule: "Not a captured asteroid.",
        quizQ: "Is the Moon a captured asteroid?",
        quizA: "That is not the best fit. Composition and orbit favour debris from Earth plus an impactor.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Why not just grab a rock?",
        narration: "A captured asteroid would likely have a weirder orbit and different rock recipe. Ours looks like Earth-family leftovers.",
        rule: "Shared origin, not a kidnap.",
        draw: [
          T(400, 220, "same family of rock", GREEN, 18),
          T(400, 280, "orbit fits a splash", BLUE, 16),
        ],
      },
      {
        narration: "Scientists still argue details, but giant impact is the leading classroom model.",
        rule: "Best current sketch, not a cartoon capture.",
        quizQ: "What evidence supports a shared origin?",
        quizA: "Moon rocks are similar in some ways to Earth’s mantle; orbit fits a high-energy collision.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_6.4"] = scenesFrom("6.4 Nebulae", "Section 6.4: Nebulae", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Clouds where stars are born",
        narration: "A nebula is a giant puff of gas and dust. Some are nurseries: gravity pulls clumps tighter until fusion lights a star.",
        rule: "Nebula = huge gas and dust cloud.",
        draw: [
          C(320, 230, 50, PALE_P, PURPLE, 2),
          C(380, 210, 40, PALE_B, BLUE, 2),
          C(360, 270, 45, PALE_P, PURPLE, 2),
          C(420, 250, 30, PALE_O, ORANGE, 2),
          T(380, 340, "gas + dust", PURPLE, 16),
        ],
      },
      {
        narration: "Others are leftovers from dying stars. They glow because nearby hot stars excite the gas, or dust reflects starlight.",
        rule: "Some glow, some reflect.",
        quizQ: "What is a nebula?",
        quizA: "A huge cloud of gas and dust in space. Some form stars; others are leftovers from dying stars.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Collapse, heat, fusion",
        narration: "Dense clumps fall inward. They heat up. If hot and packed enough, hydrogen fusion starts — a star is born.",
        rule: "Gravity → heat → fusion.",
        draw: [
          C(220, 240, 40, PALE_P, PURPLE),
          T(220, 300, "cloud", PURPLE, 14),
          P("M 280 240 L 360 240", INK, 4),
          C(430, 240, 24, PALE_O, ORANGE),
          T(430, 300, "hot clump", ORANGE, 14),
          P("M 470 240 L 540 240", INK, 4),
          C(600, 240, 20, PALE_O, ORANGE),
          T(600, 300, "star", ORANGE, 14),
        ],
      },
      {
        narration: "These clouds are light-years across, far outside our Solar System — not a fog around the Sun.",
        rule: "Interstellar, not local weather.",
        quizQ: "How can a nebula form stars?",
        quizA: "Gravity pulls clumps together. If hot and dense enough, fusion starts.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Not in the Solar System",
        narration: "Nebulae live between the stars. The Solar System is one tiny backyard. Do not mix the scales.",
        rule: "Nebulae are outside the Solar System.",
        draw: [
          C(250, 230, 16, PALE_O, ORANGE),
          T(250, 270, "Sun + planets", ORANGE, 14),
          C(550, 230, 70, PALE_P, PURPLE, 2),
          T(550, 320, "nebula (huge)", PURPLE, 14),
        ],
      },
      {
        narration: "A nebula is not a planet’s cloud. It is a star-city construction site.",
        rule: "Wrong scale is a common exam trap.",
        quizQ: "Are nebulae inside our Solar System?",
        quizA: "No. They are interstellar clouds, typically many light-years across.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_6.5"] = scenesFrom("6.5 Tectonics", "Section 6.5: Plates", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Cracked shell on a hot inside",
        narration: "Earth’s outer shell is broken into plates that creep on the mantle. Internal heat and convection shove them.",
        rule: "Plates move slowly on the mantle.",
        draw: [
          C(400, 250, 90, PALE_O, ORANGE, 3),
          P("M 340 200 L 430 180 L 470 250 L 400 300 L 330 260 Z", INK, 2),
          T(400, 370, "plates like puzzle pieces", SUB, 16),
        ],
      },
      {
        narration: "Millimetres per year — too slow to watch, fast enough to open oceans over millions of years.",
        rule: "Slow now, huge over time.",
        quizQ: "What is plate tectonics?",
        quizA: "Earth’s outer shell is broken into plates that move slowly on the mantle.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Edges do the drama",
        narration: "Apart: new crust, ridges. Together: mountains, some volcanoes. Slide past: earthquakes.",
        rule: "Diverge · collide · slide.",
        draw: [
          R(130, 190, 160, 80, PALE_B, BLUE),
          T(210, 230, "apart", BLUE, 16),
          R(320, 190, 160, 80, PALE_O, ORANGE),
          T(400, 230, "collide", ORANGE, 16),
          R(510, 190, 160, 80, PALE_R, RED),
          T(590, 230, "slide", RED, 16),
        ],
      },
      {
        narration: "Quakes and volcanoes cluster on those edges because that is where stress builds or magma can rise.",
        rule: "Most quakes sit on plate edges.",
        quizQ: "What happens at plate boundaries?",
        quizA: "Plates move apart, collide, or slide past.",
        draw: [
          T(400, 330, "edges = earthquakes & volcanoes", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Continents hitch a ride",
        narration: "Africa and South America look like split puzzle pieces because they rode apart on plates. Oceans open and close over deep time.",
        rule: "Continents ride on plates.",
        draw: [
          R(200, 200, 80, 120, PALE_G, GREEN),
          R(520, 200, 80, 120, PALE_G, GREEN),
          P("M 290 260 L 510 260", BLUE, 4),
          T(400, 230, "ocean grows", BLUE, 14),
        ],
      },
      {
        narration: "Mountain ranges are crumple zones where plates collided. The map is not forever.",
        rule: "Maps change over millions of years.",
        quizQ: "Why do continents slowly change position?",
        quizA: "They ride on plates. Over millions of years oceans open and mountains form.",
        draw: [
        ],
      },
    ],
  },
]);

const keys = ["s8_4.1","s8_4.2","s8_4.3","s8_4.4","s8_5.1","s8_5.2","s8_5.3","s8_5.4","s8_5.5","s8_6.1","s8_6.2","s8_6.3","s8_6.4","s8_6.5"];
const problems = audit(keys);
if (problems.length) {
  console.log(problems.join("\n"));
  console.log("PROBLEMS", problems.length);
  process.exit(1);
}
fs.writeFileSync(file, "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(data, null, 2) + ";\n");
console.log("Wrote Year 8 Science chapters 4–6");
