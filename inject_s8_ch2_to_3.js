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

data["s8_2.1"] = scenesFrom("2.1 Atoms & Periodic Table", "Section 2.1: Atoms", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "A tiny solar system",
        narration: "Think of an atom like a marble in the middle with tiny beads flying around it. The marble is the nucleus.",
        rule: "Nucleus in the middle. Electrons in shells.",
        draw: [
          C(400, 250, 28, PALE_R, RED, 3),
          T(400, 250, "+ n", RED, 12),
          C(400, 250, 90, "none", BLUE, 2),
          C(400, 250, 140, "none", PURPLE, 2),
        ],
      },
      {
        narration: "Protons (plus) and neutrons (no charge) sit in the nucleus. Electrons (minus) zoom in the shells.",
        rule: "Proton +1 · neutron 0 · electron −1",
        quizQ: "Name the three particles and their charges.",
        quizA: "Proton +1, neutron 0, electron −1.",
        draw: [
          C(490, 250, 8, PALE_B, BLUE),
          C(310, 250, 8, PALE_B, BLUE),
          C(400, 110, 8, PALE_P, PURPLE),
          T(180, 180, "electrons", BLUE, 16),
          T(620, 180, "shells", PURPLE, 16),
          T(400, 400, "nucleus = protons + neutrons", RED, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Two numbers on every element",
        narration: "Atomic number is how many protons. That number names the element. Mass number is protons plus neutrons.",
        rule: "atomic number = protons    mass number = p + n",
        draw: [
          R(250, 170, 80, 50, PALE_B, BLUE),
          T(290, 195, "11", BLUE, 20),
          T(290, 250, "atomic no.", SUB, 14),
          R(470, 170, 80, 50, PALE_O, ORANGE),
          T(510, 195, "23", ORANGE, 20),
          T(510, 250, "mass no.", SUB, 14),
          T(400, 310, "sodium", INK, 18),
        ],
      },
      {
        narration: "23 − 11 = 12 neutrons. Electrons in a neutral atom match the protons: 11 electrons, arranged 2,8,1.",
        rule: "neutrons = mass number − atomic number",
        quizQ: "What do proton number and mass number tell you?",
        quizA: "Proton number is protons. Mass number is protons + neutrons.",
        draw: [
          T(400, 370, "11 protons  ·  12 neutrons  ·  2,8,1", DARK_G, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "The table is a map",
        narration: "Rows are periods (new shell). Columns are groups (same outer electrons). Same group → similar chemistry.",
        rule: "Group = same outer-shell count.",
        draw: [
          R(160, 160, 70, 50, PALE_O, ORANGE),
          T(195, 185, "Li", ORANGE, 16),
          R(160, 220, 70, 50, PALE_O, ORANGE),
          T(195, 245, "Na", ORANGE, 16),
          R(160, 280, 70, 50, PALE_O, ORANGE),
          T(195, 305, "K", ORANGE, 16),
          T(195, 350, "Group 1", SUB, 14),
          P("M 260 185 L 500 185", BLUE, 3),
          T(600, 185, "period →", BLUE, 16),
          P("M 195 360 L 195 400", GREEN, 3),
          T(280, 400, "group ↓", GREEN, 16),
        ],
      },
      {
        narration: "Sodium and potassium both have 1 outer electron, so they both fizz in water. That is why groups behave alike.",
        rule: "Same outer electrons → same kind of reaction.",
        quizQ: "Why do elements in the same group behave alike?",
        quizA: "They have the same number of outer-shell electrons.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_2.2"] = scenesFrom("2.2 Group trends", "Section 2.2: Groups", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Alkali metals vs halogens",
        narration: "Group 1 metals get fiercer down the column. A potassium blob in water is wilder than lithium.",
        rule: "Group 1: more reactive going down.",
        draw: [
          R(140, 170, 200, 70, PALE_G, GREEN),
          T(240, 205, "Li  mild fizz", GREEN, 16),
          R(140, 255, 200, 70, PALE_O, ORANGE),
          T(240, 290, "Na  stronger", ORANGE, 16),
          R(140, 340, 200, 70, PALE_R, RED),
          T(240, 375, "K  fierce", RED, 16),
        ],
      },
      {
        narration: "Group 7 is the opposite: fluorine and chlorine grab electrons more greedily than iodine.",
        rule: "Group 7: less reactive going down.",
        quizQ: "How does reactivity change down Group 1?",
        quizA: "Alkali metals get more reactive down the group.",
        draw: [
          R(460, 170, 200, 70, PALE_R, RED),
          T(560, 205, "Cl  very grabby", RED, 16),
          R(460, 255, 200, 70, PALE_O, ORANGE),
          T(560, 290, "Br  medium", ORANGE, 16),
          R(460, 340, 200, 70, PALE_G, GREEN),
          T(560, 375, "I  less grabby", GREEN, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Noble gases sit still",
        narration: "Group 0 have full outer shells. They almost never form compounds — like a finished jigsaw.",
        rule: "Full outer shell → very unreactive.",
        draw: [
          C(250, 240, 50, PALE_B, BLUE),
          T(250, 240, "He", BLUE, 18),
          C(400, 240, 50, PALE_B, BLUE),
          T(400, 240, "Ne", BLUE, 18),
          C(550, 240, 50, PALE_B, BLUE),
          T(550, 240, "Ar", BLUE, 18),
        ],
      },
      {
        narration: "Helium balloons stay helium. Neon signs glow without the gas changing into a new substance.",
        rule: "Group 0: He, Ne, Ar…",
        quizQ: "What are Group 0 (noble gases) like?",
        quizA: "Very unreactive because they have full outer shells.",
        draw: [
          T(400, 340, "full shell  =  no need to react", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "A swap in solution",
        narration: "Chlorine can kick iodine out of potassium iodide, like a stronger player taking someone’s seat.",
        rule: "More reactive halogen displaces a less reactive one.",
        draw: [
          R(140, 190, 180, 80, PALE_G, GREEN),
          T(230, 230, "KI (colourless)", DARK_G, 14),
          P("M 330 230 L 400 230", INK, 4),
          T(365, 200, "Cl₂", RED, 16),
          R(420, 190, 240, 80, PALE_P, PURPLE),
          T(540, 230, "KCl + iodine", PURPLE, 16),
        ],
      },
      {
        narration: "The mixture goes brown as iodine is set free. Chlorine is higher up Group 7, so it wins.",
        rule: "Chlorine is more reactive than iodine.",
        quizQ: "Why can chlorine displace iodine from potassium iodide?",
        quizA: "Chlorine is more reactive, so it takes iodine’s place in the compound.",
        draw: [
          T(400, 330, "brown iodine appears", ORANGE, 16),
        ],
      },
    ],
  },
]);

data["s8_2.3"] = scenesFrom("2.3 Why compounds form", "Section 2.3: Bonding", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Atoms want a full outer shell",
        narration: "A sodium atom has one spare electron. A chlorine atom has a gap for one. They can both finish their shells by dealing.",
        rule: "React to get a stable outer shell.",
        draw: [
          C(220, 240, 50, PALE_O, ORANGE),
          T(220, 230, "Na", ORANGE, 18),
          T(220, 258, "2,8,1", SUB, 12),
          C(580, 240, 50, PALE_G, GREEN),
          T(580, 230, "Cl", GREEN, 18),
          T(580, 258, "2,8,7", SUB, 12),
        ],
      },
      {
        narration: "Sodium hands the electron over. Now Na is + and Cl is −. Opposite charges stick — ionic bond.",
        rule: "Metal loses, non-metal gains → ions attract.",
        quizQ: "Why do atoms form compounds?",
        quizA: "To gain a more stable electron arrangement, often a full outer shell.",
        draw: [
          P("M 280 240 L 520 240", BLUE, 4),
          T(400, 210, "e−", BLUE, 16),
          T(220, 330, "Na+", ORANGE, 16),
          T(580, 330, "Cl−", GREEN, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Sharing instead of stealing",
        narration: "Two non-metals cannot both give electrons away. They share a pair instead — a covalent bond, like two people holding one rope.",
        rule: "Non-metals share pairs of electrons.",
        draw: [
          C(280, 240, 40, PALE_B, BLUE),
          T(280, 240, "H", BLUE, 18),
          C(400, 240, 16, PALE_P, PURPLE),
          T(400, 210, "pair", PURPLE, 12),
          C(520, 240, 50, PALE_G, GREEN),
          T(520, 240, "O", GREEN, 18),
        ],
      },
      {
        narration: "Water is H₂O: two hydrogens each share with oxygen. That little group is a molecule.",
        rule: "Molecule = atoms joined by covalent bonds.",
        quizQ: "Covalent bonding in one sentence?",
        quizA: "Non-metal atoms share pairs of electrons.",
        draw: [
          T(400, 340, "H₂O is a molecule", DARK_G, 18),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Compound, not a mixture",
        narration: "Salt is not a handful of sodium metal mixed with green chlorine gas. It is a new stuff: white crystals, NaCl.",
        rule: "Compound = chemically combined, new properties.",
        draw: [
          R(140, 180, 160, 90, PALE_O, ORANGE),
          T(220, 225, "Na metal", ORANGE, 16),
          R(340, 180, 160, 90, PALE_G, GREEN),
          T(420, 225, "Cl₂ gas", GREEN, 16),
          P("M 400 280 L 400 320", INK, 4),
          R(300, 330, 200, 60, PALE_B, BLUE),
          T(400, 360, "NaCl crystals", BLUE, 16),
        ],
      },
      {
        narration: "Ionic formula NaCl (one of each ion). Water’s formula is H₂O (two H, one O).",
        rule: "NaCl ionic · H₂O covalent",
        quizQ: "Write the formula of sodium chloride and of water.",
        quizA: "NaCl and H₂O.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_2.4"] = scenesFrom("2.4 Simple vs giant", "Section 2.4: Structures", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Small packets vs huge networks",
        narration: "Oxygen is little pairs of atoms that can fly apart easily. Salt is a never-ending 3D stack of ions.",
        rule: "Simple molecules vs giant lattices.",
        draw: [
          C(200, 220, 22, PALE_B, BLUE),
          C(250, 220, 22, PALE_B, BLUE),
          T(225, 270, "O₂", BLUE, 16),
          R(420, 170, 40, 40, PALE_O, ORANGE),
          R(470, 170, 40, 40, PALE_G, GREEN),
          R(420, 220, 40, 40, PALE_G, GREEN),
          R(470, 220, 40, 40, PALE_O, ORANGE),
          R(520, 170, 40, 40, PALE_O, ORANGE),
          R(520, 220, 40, 40, PALE_G, GREEN),
          T(480, 290, "salt lattice", ORANGE, 16),
        ],
      },
      {
        narration: "Inside a water molecule the bonds are strong. Between molecules the attractions are weak — so ice melts easily.",
        rule: "Strong inside · weak between → low melting point.",
        quizQ: "Simple molecular vs giant structure?",
        quizA: "Simple molecules are small groups of atoms. Giant structures are huge networks of ions or atoms.",
        draw: [
          T(400, 360, "easy to separate packets", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Why salt needs a furnace",
        narration: "Every Na+ is glued to Cl− all through the crystal. You need a lot of energy to break that electrostatic grid.",
        rule: "Ionic giants have high melting points.",
        draw: [
          R(220, 180, 360, 120, PALE_O, ORANGE),
          T(400, 220, "+ − + − +", RED, 20),
          T(400, 260, "− + − + −", BLUE, 20),
        ],
      },
      {
        narration: "A macromolecule is one giant covalent lump — diamond or sand (silica) — not separate little molecules.",
        rule: "Lattice = regular 3D network.",
        quizQ: "Why do ionic giants have high melting points?",
        quizA: "Strong electrostatic forces between ions throughout the lattice need a lot of energy to break.",
        draw: [
          T(400, 360, "needs lots of heat to melt", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Pencil vs diamond",
        narration: "Graphite’s carbon sheets have spare electrons that can wander, so it conducts. Diamond locks every electron in a bond.",
        rule: "Graphite: free electrons. Diamond: all locked.",
        draw: [
          P("M 160 180 L 340 180", INK, 4),
          P("M 160 220 L 340 220", INK, 4),
          P("M 160 260 L 340 260", INK, 4),
          T(250, 310, "graphite layers", SUB, 14),
          C(520, 180, 12, PALE_B, BLUE),
          C(560, 220, 12, PALE_B, BLUE),
          C(480, 220, 12, PALE_B, BLUE),
          C(520, 260, 12, PALE_B, BLUE),
          P("M 520 180 L 560 220 L 520 260 L 480 220 Z", BLUE, 2),
          T(520, 310, "diamond", BLUE, 14),
        ],
      },
      {
        narration: "That is why a pencil line conducts a little, but a diamond does not. Same element, different sketch of the atoms.",
        rule: "Structure decides properties.",
        quizQ: "Why does graphite conduct electricity but diamond does not?",
        quizA: "Graphite has delocalised electrons between layers. Diamond’s electrons are all locked in covalent bonds.",
        draw: [
          T(250, 360, "e− can slide", GREEN, 14),
          T(520, 360, "no free e−", RED, 14),
        ],
      },
    ],
  },
]);

data["s8_3.1"] = scenesFrom("3.1 Density", "Section 3.1: Density", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "How packed is the stuff?",
        narration: "Density is how much mass is squeezed into a space. Same size box: rocks feel heavier than foam.",
        rule: "density = mass ÷ volume",
        draw: [
          R(160, 180, 140, 140, PALE_O, ORANGE),
          T(230, 250, "heavy", ORANGE, 16),
          R(500, 180, 140, 140, PALE_B, BLUE),
          T(570, 250, "light", BLUE, 16),
        ],
      },
      {
        narration: "Units are often g/cm³. A 40 g block of 8 cm³ has density 5 g/cm³.",
        rule: "40 ÷ 8 = 5 g/cm³",
        quizQ: "What is density?",
        quizA: "Mass per unit volume. density = mass / volume.",
        draw: [
          T(400, 370, "same volume, different mass", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Odd shapes: dunk it",
        narration: "Drop an irregular stone in a measuring cylinder. The water jump is the stone’s volume.",
        rule: "Displacement = volume of the object.",
        draw: [
          R(220, 160, 80, 180, PALE_B, BLUE),
          T(260, 140, "before", SUB, 14),
          R(500, 140, 80, 200, PALE_B, BLUE),
          T(540, 120, "after", SUB, 14),
          C(540, 280, 18, PALE_O, ORANGE),
        ],
      },
      {
        narration: "Things float when they are less dense than the liquid — or when they push aside a weight of liquid equal to their own.",
        rule: "Less dense than the fluid → can float.",
        quizQ: "How can you find the volume of an irregular solid?",
        quizA: "Displacement: the rise in water level equals the object’s volume.",
        draw: [
          T(400, 390, "ice floats on water", GREEN, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Turn the formula round",
        narration: "Mercury’s density is 13.5 g/cm³. For 4 cm³, mass = 13.5 × 4.",
        rule: "mass = density × volume",
        draw: [
          T(250, 220, "13.5", ORANGE, 22),
          T(400, 220, "×", INK, 22),
          T(540, 220, "4", BLUE, 22),
        ],
      },
      {
        narration: "13.5 × 4 = 54 g. Gases are far less dense because particles have huge gaps.",
        rule: "Gases: particles far apart.",
        quizQ: "A 40 g block has volume 8 cm³. Density?",
        quizA: "5 g/cm³.",
        draw: [
          R(250, 290, 300, 60, PALE_G, GREEN),
          T(400, 320, "54 g", DARK_G, 22),
        ],
      },
    ],
  },
]);

data["s8_3.2"] = scenesFrom("3.2 Heat and temperature", "Section 3.2: Heat vs temperature", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Hot is not the same as lots of energy",
        narration: "Temperature is how wildly particles jiggle. Thermal energy is the total energy of all of them together.",
        rule: "Temperature = how hot. Heat = energy transferred.",
        draw: [
          C(220, 230, 8, ORANGE, ORANGE),
          C(250, 210, 8, ORANGE, ORANGE),
          C(240, 250, 8, ORANGE, ORANGE),
          T(230, 300, "spark: few, very fast", ORANGE, 14),
          C(500, 200, 6, BLUE, BLUE),
          C(540, 230, 6, BLUE, BLUE),
          C(480, 240, 6, BLUE, BLUE),
          C(560, 210, 6, BLUE, BLUE),
          C(520, 260, 6, BLUE, BLUE),
          T(530, 310, "cup of water: many", BLUE, 14),
        ],
      },
      {
        narration: "A spark can be thousands of degrees but barely warm your finger. A lake at 15 °C stores huge thermal energy.",
        rule: "Few fast particles ≠ lots of energy.",
        quizQ: "Is heat the same as temperature?",
        quizA: "No. Temperature is how hot. Thermal energy is energy transferred because of a temperature difference.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "What a thermometer reads",
        narration: "The number on a thermometer is temperature in °C. It does not tell you the total energy in the object.",
        rule: "Thermometer measures temperature only.",
        draw: [
          R(360, 150, 28, 180, PALE_R, RED),
          C(374, 340, 22, PALE_R, RED),
          T(480, 240, "22 °C", RED, 20),
        ],
      },
      {
        narration: "A mug of tea is hotter than a swimming pool, but the pool has more thermal energy because it has far more mass.",
        rule: "Hotter ≠ more energy overall.",
        quizQ: "What does a thermometer measure?",
        quizA: "Temperature, usually in °C — not the total energy stored.",
        draw: [
          T(400, 400, "tea hot · lake more energy", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Who stores more?",
        narration: "Heating 0.25 kg of water by 10 °C is easy. Heating a 375 000 kg pool by 10 °C takes a huge amount of energy.",
        rule: "More mass → more energy for the same rise.",
        draw: [
          R(160, 200, 140, 80, PALE_O, ORANGE),
          T(230, 240, "mug", ORANGE, 18),
          R(460, 180, 200, 120, PALE_B, BLUE),
          T(560, 240, "pool", BLUE, 18),
        ],
      },
      {
        narration: "Same temperature rise, wildly different energy. That is why lakes stay chilly even after a sunny day.",
        rule: "Energy needed depends on how much stuff you heat.",
        quizQ: "A lake and a cup of tea: which has more thermal energy?",
        quizA: "The lake, even if cooler: it contains far more particles.",
        draw: [
          T(400, 360, "same °C rise, pool needs more energy", SUB, 16),
        ],
      },
    ],
  },
]);

data["s8_3.3"] = scenesFrom("3.3 Conservation of energy", "Section 3.3: Conservation", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Energy never vanishes",
        narration: "You cannot make energy from nothing or wipe it out. It just changes store or place, like water poured between tanks.",
        rule: "Energy is transferred, not created.",
        draw: [
          R(160, 180, 160, 100, PALE_B, BLUE),
          T(240, 230, "store A", BLUE, 16),
          P("M 330 230 L 430 230", INK, 4),
          R(440, 180, 160, 100, PALE_O, ORANGE),
          T(520, 230, "store B", ORANGE, 16),
        ],
      },
      {
        narration: "A falling ball speeds up because height energy becomes movement energy — not because new energy appeared.",
        rule: "Total energy stays the same.",
        quizQ: "What does conservation of energy mean?",
        quizA: "Energy cannot be created or destroyed, only transferred or stored in different ways.",
        draw: [
          T(400, 340, "gravitational → kinetic", DARK_G, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Name the stores",
        narration: "Useful labels: kinetic, gravitational, chemical, elastic, thermal, nuclear.",
        rule: "Learn the store names.",
        draw: [
          T(200, 190, "kinetic", BLUE, 16),
          T(400, 190, "gravitational", GREEN, 16),
          T(600, 190, "chemical", ORANGE, 16),
          T(200, 250, "elastic", PURPLE, 16),
          T(400, 250, "thermal", RED, 16),
          T(600, 250, "nuclear", INK, 16),
        ],
      },
      {
        narration: "Machines never give more useful energy out than you put in. Some always leaks as wasted thermal energy.",
        rule: "Some energy always spreads out as heat.",
        quizQ: "Name some energy stores.",
        quizA: "Kinetic, gravitational potential, chemical, elastic, thermal, nuclear.",
        draw: [
          T(400, 340, "useful out  <  energy in", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "The speeding ball",
        narration: "High up, the ball has gravitational store. As it drops, that store shrinks and kinetic store grows.",
        rule: "Height energy becomes motion energy.",
        draw: [
          C(400, 150, 18, PALE_O, ORANGE),
          T(500, 150, "high, slow", ORANGE, 14),
          P("M 400 175 L 400 300", INK, 3, null, "6,4"),
          C(400, 330, 18, PALE_B, BLUE),
          T(510, 330, "low, fast", BLUE, 14),
        ],
      },
      {
        narration: "Nothing magic is added. The extra speed was paid for by losing height.",
        rule: "Not from nowhere.",
        quizQ: "A falling ball speeds up. Where does the extra kinetic energy come from?",
        quizA: "From its gravitational store as it loses height.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_3.4"] = scenesFrom("3.4 Hot to cold", "Section 3.4: Thermal flow", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Energy runs downhill",
        narration: "Thermal energy always flows from hotter to colder, until both are the same temperature — like water finding a level.",
        rule: "Hot → cold until equilibrium.",
        draw: [
          R(150, 180, 180, 120, PALE_R, RED),
          T(240, 240, "hot", RED, 20),
          P("M 340 240 L 440 240", INK, 5),
          R(450, 180, 180, 120, PALE_B, BLUE),
          T(540, 240, "cold", BLUE, 20),
        ],
      },
      {
        narration: "A coat does not pump heat in. It slows the leak from your warm body into cold air.",
        rule: "Insulators slow the flow.",
        quizQ: "Which way does thermal energy flow?",
        quizA: "From a hotter region to a colder region, until temperatures are equal.",
        draw: [
          T(400, 360, "arrow only this way", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Conductor vs insulator",
        narration: "Metals let thermal energy race through. Air, plastic and wool do it poorly — that is why jumpers work.",
        rule: "Metals conduct. Air and wool insulate.",
        draw: [
          R(150, 190, 220, 90, PALE_O, ORANGE),
          T(260, 235, "metal spoon", ORANGE, 16),
          R(430, 190, 220, 90, PALE_G, GREEN),
          T(540, 235, "wooden spoon", DARK_G, 16),
        ],
      },
      {
        narration: "Both spoons in soup can be the same temperature. Metal just delivers the energy to your fingers faster.",
        rule: "Same temperature, different feel.",
        quizQ: "What is a thermal conductor?",
        quizA: "A material that transfers thermal energy easily, such as metals.",
        draw: [
          T(400, 340, "metal feels hotter in your hand", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "The soup spoons",
        narration: "Metal conducts thermal energy to your skin quickly. Wood does not, so it still feels cooler.",
        rule: "Feel depends on how fast energy arrives.",
        draw: [
          P("M 200 200 L 200 320", ORANGE, 8),
          T(200, 170, "metal", ORANGE, 16),
          P("M 500 200 L 500 320", GREEN, 8),
          T(500, 170, "wood", GREEN, 16),
          R(140, 320, 480, 40, PALE_O, ORANGE),
          T(400, 340, "soup", ORANGE, 14),
        ],
      },
      {
        narration: "Winter coats trap air. Air is a poor conductor, so you leak energy more slowly.",
        rule: "Coats insulate; they do not add heat by themselves.",
        quizQ: "Why does a metal spoon in soup feel hotter than a wooden one?",
        quizA: "Metal conducts thermal energy to your hand faster, even if both spoons are at the same temperature.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_3.5"] = scenesFrom("3.5 Three ways heat moves", "Section 3.5: Transfer", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Conduction, convection, radiation",
        narration: "Through a solid: neighbours jiggle neighbours (conduction). Through a fluid: warm bits rise (convection). Through empty space: infrared rays (radiation).",
        rule: "Solid · fluid · vacuum — three different routes.",
        draw: [
          R(120, 190, 170, 90, PALE_O, ORANGE),
          T(205, 235, "conduction", ORANGE, 16),
          R(315, 190, 170, 90, PALE_B, BLUE),
          T(400, 235, "convection", BLUE, 16),
          R(510, 190, 170, 90, PALE_P, PURPLE),
          T(595, 235, "radiation", PURPLE, 16),
        ],
      },
      {
        narration: "Sunlight reaches Earth by radiation. There is no air in space for conduction or convection.",
        rule: "Space: radiation only.",
        quizQ: "Name the three main transfer methods.",
        quizA: "Conduction, convection, and radiation.",
        draw: [
          C(180, 340, 22, PALE_O, ORANGE),
          T(180, 380, "Sun", ORANGE, 14),
          P("M 210 340 L 500 340", PURPLE, 3, null, "6,4"),
          C(560, 340, 28, PALE_G, GREEN),
          T(560, 380, "Earth", DARK_G, 14),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "A metal pan handle",
        narration: "Particles vibrate and pass energy along. In metals, loose electrons carry energy extra fast.",
        rule: "Metals: vibrations + free electrons.",
        draw: [
          R(200, 200, 400, 40, PALE_O, ORANGE),
          T(400, 220, "pan  →  handle", ORANGE, 16),
          T(400, 280, "energy shuffled along", SUB, 16),
        ],
      },
      {
        narration: "Warm air expands, gets lighter, and rises. Cooler air sinks. That loop is a convection current.",
        rule: "Warm fluid rises, cool fluid sinks.",
        quizQ: "What is a convection current?",
        quizA: "Warmer fluid becomes less dense and rises; cooler, denser fluid sinks.",
        draw: [
          P("M 250 360 Q 400 300 550 360", BLUE, 4),
          T(400, 390, "convection loop", BLUE, 14),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "A stone pizza oven",
        narration: "Floor conducts into the dough. Hot air swirls (convection). Flames shine infrared onto the crust (radiation).",
        rule: "One kitchen, all three methods.",
        draw: [
          R(200, 180, 400, 160, PALE_O, ORANGE),
          T(400, 220, "radiation from flames", PURPLE, 14),
          T(400, 260, "convection of hot air", BLUE, 14),
          T(400, 310, "conduction from floor", ORANGE, 14),
        ],
      },
      {
        narration: "Emit means give out radiation. Anything hot glows infrared even if you cannot see it.",
        rule: "Hot objects emit radiation.",
        quizQ: "How does energy from the Sun reach Earth?",
        quizA: "By radiation — there is no air in space for conduction or convection.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_3.6"] = scenesFrom("3.6 Cooling by evaporation", "Section 3.6: Evaporation", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "The fastest ones leave",
        narration: "Only the speediest particles at the surface can escape as gas. The ones left behind are slower, so the liquid cools.",
        rule: "Escapees steal energy. Liquid cools.",
        draw: [
          R(200, 250, 400, 80, PALE_B, BLUE),
          T(400, 290, "liquid", BLUE, 16),
          C(260, 180, 8, ORANGE, ORANGE),
          C(340, 160, 8, ORANGE, ORANGE),
          C(480, 170, 8, ORANGE, ORANGE),
          T(400, 130, "fast particles leave", ORANGE, 16),
        ],
      },
      {
        narration: "Sweat on your skin does this. When it evaporates, it takes thermal energy with it, so you cool down.",
        rule: "Sweating works by evaporation.",
        quizQ: "Why does evaporation cool a liquid?",
        quizA: "The fastest particles escape. Those left have lower average kinetic energy, so temperature falls.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Make it evaporate faster",
        narration: "Warmth, a big surface (puddle vs bottle), wind, and dry air all help particles escape.",
        rule: "Hot · spread out · windy · dry → faster.",
        draw: [
          R(120, 190, 150, 80, PALE_O, ORANGE),
          T(195, 230, "warmer", ORANGE, 16),
          R(290, 190, 150, 80, PALE_B, BLUE),
          T(365, 230, "more area", BLUE, 16),
          R(460, 190, 150, 80, PALE_G, GREEN),
          T(535, 230, "wind", DARK_G, 16),
        ],
      },
      {
        narration: "Boiling is different: bubbles throughout at a fixed temperature. Evaporation is a quiet surface trick at any temperature.",
        rule: "Evaporation: surface, any °C. Boiling: throughout, at b.p.",
        quizQ: "What speeds up evaporation?",
        quizA: "Higher temperature, larger surface area, moving air, and lower humidity.",
        draw: [
          T(400, 340, "not the same as boiling", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Blowing on soup",
        narration: "Your breath sweeps vapour away. More liquid can then evaporate, stealing more energy from the soup.",
        rule: "Moving air removes vapour, so more can leave.",
        draw: [
          R(250, 220, 300, 70, PALE_O, ORANGE),
          T(400, 255, "hot soup", ORANGE, 16),
          P("M 180 180 L 280 220", BLUE, 3),
          P("M 190 200 L 290 230", BLUE, 3),
          T(180, 160, "blow", BLUE, 16),
        ],
      },
      {
        narration: "That is why a breeze dries washing and why you shiver when you step out of a pool on a windy day.",
        rule: "Wind speeds cooling by evaporation.",
        quizQ: "Why does blowing on hot soup cool it faster?",
        quizA: "Moving air removes vapour, so more liquid can evaporate, taking energy from the soup.",
        draw: [
          T(400, 360, "vapour carried away", SUB, 16),
        ],
      },
    ],
  },
]);

const keys = ["s8_2.1","s8_2.2","s8_2.3","s8_2.4","s8_3.1","s8_3.2","s8_3.3","s8_3.4","s8_3.5","s8_3.6"];
const problems = audit(keys);
if (problems.length) {
  console.log(problems.join("\n"));
  console.log("PROBLEMS", problems.length);
  process.exit(1);
}
fs.writeFileSync(file, "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(data, null, 2) + ";\n");
console.log("Wrote Year 8 Science chapters 2–3");
