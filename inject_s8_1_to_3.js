const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "interactive-whiteboard-data.js");
const raw = fs.readFileSync(file, "utf8");
const jsonStr = raw.replace("window.INTERACTIVE_WHITEBOARD_DATA = ", "").replace(/;\s*$/, "");
const data = eval("(" + jsonStr + ")");

const INK = "#0f172a";
const SUB = "#475569";
const GREEN = "#059669";
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
function P(d, stroke, width, dash) {
  const el = { type: "path", d, stroke, width: width || 3, fill: "none" };
  if (dash) el.dash = dash;
  return el;
}
function C(cx, cy, r, fill, stroke) {
  return { type: "circle", cx, cy, r, fill: fill || "#ffffff", stroke: stroke || INK, width: 3 };
}
function frame(title) {
  const size = title.length > 36 ? 16 : 18;
  return [
    { type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" },
    R(50, 40, 700, 403, "#f8fafc", "#cbd5e1"),
    T(400, 74, title, INK, size),
  ];
}
function lesson(title, watermark, sections) {
  const subtopics = [];
  const scenes = {};
  sections.forEach((sec, i) => {
    const id = "card_" + i;
    subtopics.push({ id, label: sec.label });
    scenes[id] = sec.steps.map((st, n) => ({
      clear: n > 0 ? true : undefined,
      narration: st.narration,
      rule: st.rule,
      quizQ: st.quizQ || "",
      quizA: st.quizA || "",
      elements: frame(st.heading || title).concat(st.draw),
    }));
  });
  return { title, watermark, subtopics, scenes };
}

data["s8_1.1"] = lesson("1.1 Photosynthesis", "Section 1.1: Photosynthesis", [
  {
    label: "Key idea",
    steps: [{
      heading: "Making glucose with light",
      narration: "Plants use light energy, trapped by green chlorophyll, to turn carbon dioxide and water into glucose and oxygen.",
      rule: "Carbon dioxide + water → glucose + oxygen.",
      draw: [
        P("M 200 350 Q 200 200 400 150 Q 600 200 600 350 Z", PALE_G, GREEN),
        P("M 400 350 L 400 150", GREEN, 3),
        C(200, 150, 40, PALE_O, ORANGE),
        T(200, 150, "Sun", ORANGE, 20),
        P("M 230 170 L 300 220", ORANGE, 3, "5,5"),
        T(330, 200, "light", ORANGE, 16),
        P("M 150 250 L 250 250", BLUE, 3),
        T(180, 230, "CO₂", BLUE, 18),
        P("M 650 250 L 550 250", BLUE, 3),
        T(620, 230, "O₂ out", BLUE, 18),
        P("M 400 400 L 400 330", BLUE, 3),
        T(400, 420, "water from roots", BLUE, 16),
        T(400, 280, "glucose made", GREEN, 20),
      ],
    }],
  },
  {
    label: "Recall",
    steps: [{
      heading: "The chemical equation",
      narration: "Six molecules of carbon dioxide and six of water make one molecule of glucose and six of oxygen.",
      rule: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.",
      draw: [
        T(200, 200, "6 CO₂", BLUE, 24),
        T(280, 200, "+", INK, 24),
        T(360, 200, "6 H₂O", BLUE, 24),
        P("M 420 200 L 480 200", INK, 3),
        T(450, 180, "light", ORANGE, 14),
        T(450, 220, "chlorophyll", GREEN, 14),
        T(560, 200, "C₆H₁₂O₆", GREEN, 24),
        T(640, 200, "+", INK, 24),
        T(700, 200, "6 O₂", BLUE, 24),
      ],
    }],
  },
  {
    label: "Check",
    steps: [{
      heading: "Why leaves are broad and thin",
      narration: "A broad leaf catches more sunlight. A thin leaf means gases do not have to travel far to get in and out of the cells.",
      rule: "Broad for light, thin for fast gas diffusion.",
      quizQ: "Why are most leaves broad and thin?",
      quizA: "Broad to catch more light; thin for a short diffusion distance for gases.",
      draw: [
        R(250, 180, 300, 40, PALE_G, GREEN),
        P("M 400 120 L 400 180", ORANGE, 3, "5,5"),
        T(400, 100, "sunlight", ORANGE, 16),
        T(200, 200, "CO₂", BLUE, 16),
        P("M 230 200 L 250 200", BLUE, 2),
        T(400, 260, "short distance", SUB, 16),
      ],
    }],
  }
]);

data["s8_1.2"] = lesson("1.2 More about photosynthesis", "Section 1.2: Inside the leaf", [
  {
    label: "Key idea",
    steps: [{
      heading: "The leaf structure",
      narration: "The top layer is clear to let light through. The palisade cells are packed with chloroplasts to catch the light. The spongy cells have air spaces so gases can move.",
      rule: "Palisade for light, spongy for gases.",
      draw: [
        R(200, 150, 400, 30, PALE_B, BLUE),
        T(400, 165, "clear epidermis", BLUE, 14),
        R(200, 180, 80, 100, PALE_G, GREEN),
        R(280, 180, 80, 100, PALE_G, GREEN),
        R(360, 180, 80, 100, PALE_G, GREEN),
        R(440, 180, 80, 100, PALE_G, GREEN),
        R(520, 180, 80, 100, PALE_G, GREEN),
        T(400, 230, "palisade cells with chloroplasts", GREEN, 16),
        C(250, 320, 30, PALE_G, GREEN),
        C(400, 340, 30, PALE_G, GREEN),
        C(550, 320, 30, PALE_G, GREEN),
        T(400, 380, "spongy cells with air spaces", SUB, 16),
      ],
    }],
  },
  {
    label: "Recall",
    steps: [{
      heading: "Limiting factors",
      narration: "If there is not enough light, CO₂, or warmth, photosynthesis slows down. The one in shortest supply is the limiting factor.",
      rule: "Light, CO₂, and temperature can limit the rate.",
      draw: [
        P("M 200 300 L 200 150", INK, 3),
        P("M 200 300 L 400 300", INK, 3),
        P("M 200 280 Q 250 200 380 200", BLUE, 3),
        T(150, 220, "rate", INK, 16),
        T(300, 330, "light intensity", INK, 16),
        T(450, 200, "levels off", BLUE, 16),
        T(400, 380, "needs more CO₂ or warmth to go faster", SUB, 16),
      ],
    }],
  },
  {
    label: "Check",
    steps: [{
      heading: "Testing for starch",
      narration: "Boil the leaf to soften it, use hot ethanol to remove the green chlorophyll, then add iodine. If starch is there, it turns blue-black.",
      rule: "Iodine turns blue-black with starch.",
      quizQ: "How can you test a leaf for starch?",
      quizA: "Boil it, decolourise in hot ethanol, rinse, and add iodine. Blue-black shows starch.",
      draw: [
        R(200, 200, 80, 100, PALE_B, BLUE),
        R(400, 200, 80, 100, PALE_P, PURPLE),
        T(240, 250, "ethanol", BLUE, 14),
        T(440, 250, "iodine", PURPLE, 14),
        P("M 280 250 L 400 250", INK, 3),
        T(340, 230, "leaf", GREEN, 14),
        R(550, 200, 80, 100, INK, INK),
        T(590, 250, "blue-black", "#fff", 14),
      ],
    }],
  }
]);

data["s8_1.3"] = lesson("1.3 The carbon cycle", "Section 1.3: Carbon cycle", [
  {
    label: "Key idea",
    steps: [{
      heading: "Moving carbon around",
      narration: "Photosynthesis takes carbon out of the air. Respiration by animals, plants and decomposers puts it back. Burning fossil fuels also adds it back.",
      rule: "Photosynthesis removes CO₂; respiration and combustion add it.",
      draw: [
        R(300, 120, 200, 50, PALE_B, BLUE),
        T(400, 145, "CO₂ in air", BLUE, 18),
        R(150, 250, 150, 50, PALE_G, GREEN),
        T(225, 275, "plants", GREEN, 18),
        R(500, 250, 150, 50, PALE_O, ORANGE),
        T(575, 275, "animals", ORANGE, 18),
        P("M 350 170 L 250 250", GREEN, 3),
        T(280, 200, "photosynthesis", GREEN, 14),
        P("M 250 250 L 500 275", ORANGE, 3),
        T(375, 250, "feeding", ORANGE, 14),
        P("M 550 250 L 450 170", BLUE, 3),
        T(520, 200, "respiration", BLUE, 14),
      ],
    }],
  },
  {
    label: "Recall",
    steps: [{
      heading: "Decomposers",
      narration: "Bacteria and fungi break down dead bodies and waste. They respire, which releases carbon dioxide back into the air.",
      rule: "Decomposers return carbon to the air by respiration.",
      draw: [
        R(300, 150, 200, 50, PALE_O, ORANGE),
        T(400, 175, "dead matter", ORANGE, 18),
        R(300, 280, 200, 50, PALE_P, PURPLE),
        T(400, 305, "decomposers", PURPLE, 18),
        P("M 400 200 L 400 280", PURPLE, 3),
        P("M 500 305 L 600 305 L 600 150 L 500 150", BLUE, 3),
        T(650, 220, "CO₂ out", BLUE, 16),
      ],
    }],
  },
  {
    label: "Check",
    steps: [{
      heading: "Fossil fuels",
      narration: "Dead matter buried under heat and pressure for millions of years became coal, oil and gas. Burning them releases ancient carbon very quickly.",
      rule: "Combustion adds extra CO₂ to the cycle.",
      quizQ: "Why does burning fossil fuels add extra CO₂?",
      quizA: "It releases carbon that was locked away for millions of years, faster than plants can remove it.",
      draw: [
        R(200, 300, 400, 50, "#e2e8f0", "#94a3b8"),
        T(400, 325, "fossil fuels underground", INK, 18),
        P("M 400 300 L 400 150", RED, 4),
        T(460, 220, "combustion", RED, 18),
        T(400, 120, "extra CO₂ in air", BLUE, 20),
      ],
    }],
  }
]);

data["s8_1.4"] = lesson("1.4 Climate change", "Section 1.4: Climate change", [
  {
    label: "Key idea",
    steps: [{
      heading: "The greenhouse effect",
      narration: "The Sun warms the Earth. The Earth radiates heat back. Greenhouse gases like CO₂ and methane trap some of this heat, keeping the planet warm.",
      rule: "Greenhouse gases trap thermal energy.",
      draw: [
        P("M 100 350 L 700 350", GREEN, 4),
        T(400, 380, "Earth's surface", GREEN, 18),
        P("M 100 200 L 700 200", BLUE, 2, "10,5"),
        T(400, 180, "greenhouse gas layer", BLUE, 16),
        P("M 200 100 L 300 350", ORANGE, 3),
        T(230, 150, "sunlight in", ORANGE, 14),
        P("M 500 350 L 550 200 L 600 350", RED, 3),
        T(550, 250, "heat trapped", RED, 14),
      ],
    }],
  },
  {
    label: "Recall",
    steps: [{
      heading: "Human impact",
      narration: "Burning fossil fuels, cutting down forests, and farming livestock increase greenhouse gases. This enhances the effect, causing global warming.",
      rule: "More greenhouse gas means a warmer Earth.",
      draw: [
        R(150, 200, 150, 80, PALE_R, RED),
        T(225, 230, "fossil fuels", RED, 16),
        T(225, 260, "+ CO₂", RED, 18),
        R(350, 200, 150, 80, PALE_G, GREEN),
        T(425, 230, "deforestation", GREEN, 16),
        T(425, 260, "less CO₂ taken", GREEN, 14),
        R(550, 200, 150, 80, PALE_O, ORANGE),
        T(625, 230, "livestock", ORANGE, 16),
        T(625, 260, "+ methane", ORANGE, 18),
        T(400, 340, "average global temperature rises", INK, 20),
      ],
    }],
  },
  {
    label: "Check",
    steps: [{
      heading: "Consequences",
      narration: "A warmer Earth melts ice caps, causing sea levels to rise. It also causes more extreme weather and destroys habitats.",
      rule: "Rising sea levels and extreme weather.",
      quizQ: "Give two likely effects of climate change.",
      quizA: "Rising sea levels (from melting ice and expanding water) and more extreme weather.",
      draw: [
        P("M 200 250 Q 300 150 400 250 T 600 250", PALE_B, BLUE),
        T(400, 280, "sea level rise", BLUE, 20),
        T(400, 330, "ice melts and warm water expands", SUB, 16),
      ],
    }],
  }
]);

data["s8_2.1"] = lesson("2.1 Atomic structure and the Periodic Table", "Section 2.1: Atoms", [
  {
    label: "Key idea",
    steps: [{
      heading: "Inside the atom",
      narration: "Protons and neutrons are in the heavy nucleus. Electrons orbit in shells. Protons are positive, electrons are negative, neutrons are neutral.",
      rule: "Proton +1, Neutron 0, Electron −1.",
      draw: [
        C(400, 250, 80, "none", BLUE),
        C(400, 250, 140, "none", BLUE),
        C(400, 250, 20, RED, RED),
        T(400, 250, "+", "#fff", 20),
        C(400, 170, 10, INK, INK),
        T(400, 140, "e⁻", INK, 16),
        C(400, 110, 10, INK, INK),
        T(400, 80, "e⁻", INK, 16),
        T(400, 300, "nucleus (protons & neutrons)", RED, 14),
        T(560, 250, "electron shells", BLUE, 14),
      ],
    }],
  },
  {
    label: "Recall",
    steps: [{
      heading: "Atomic and mass numbers",
      narration: "The atomic number is the number of protons. The mass number is protons plus neutrons. To find neutrons, subtract atomic from mass.",
      rule: "Mass number = protons + neutrons.",
      draw: [
        T(350, 200, "23", INK, 24),
        T(400, 220, "Na", ORANGE, 48),
        T(350, 250, "11", INK, 24),
        T(500, 180, "mass number (p + n)", SUB, 14),
        T(500, 270, "atomic number (p)", SUB, 14),
        T(400, 340, "neutrons = 23 − 11 = 12", GREEN, 20),
      ],
    }],
  },
  {
    label: "Check",
    steps: [{
      heading: "Electron shells",
      narration: "Electrons fill the lowest shells first: 2 in the first, up to 8 in the second. Sodium has 11 electrons: 2, 8, 1.",
      rule: "Shells hold 2, then 8, then 8.",
      quizQ: "What is the electronic structure of sodium (11 electrons)?",
      quizA: "2, 8, 1. The outer shell has 1 electron.",
      draw: [
        C(400, 250, 40, "none", BLUE),
        C(400, 250, 80, "none", BLUE),
        C(400, 250, 120, "none", BLUE),
        T(400, 250, "Na", INK, 20),
        C(400, 210, 6, INK, INK),
        C(400, 290, 6, INK, INK),
        T(400, 390, "2, 8, 1", GREEN, 24),
      ],
    }],
  }
]);

data["s8_2.2"] = lesson("2.2 Trends in groups", "Section 2.2: Periodic trends", [
  {
    label: "Key idea",
    steps: [{
      heading: "Group 1: Alkali metals",
      narration: "They have 1 outer electron. As you go down the group, the atom gets bigger, the outer electron is further from the nucleus, so it is lost more easily. Reactivity increases.",
      rule: "Group 1 gets MORE reactive going down.",
      draw: [
        R(350, 120, 100, 50, PALE_B, BLUE),
        T(400, 145, "Li", BLUE, 20),
        R(350, 190, 100, 50, PALE_B, BLUE),
        T(400, 215, "Na", BLUE, 20),
        R(350, 260, 100, 50, PALE_B, BLUE),
        T(400, 285, "K", BLUE, 20),
        P("M 480 140 L 480 290", RED, 4),
        T(560, 215, "reactivity increases", RED, 16),
        T(400, 350, "outer electron is easier to lose", SUB, 16),
      ],
    }],
  },
  {
    label: "Recall",
    steps: [{
      heading: "Group 7: Halogens",
      narration: "They have 7 outer electrons and want to gain 1. Going down the group, the atom gets bigger, so the nucleus has a weaker pull on a new electron. Reactivity decreases.",
      rule: "Group 7 gets LESS reactive going down.",
      draw: [
        R(350, 120, 100, 50, PALE_G, GREEN),
        T(400, 145, "F", GREEN, 20),
        R(350, 190, 100, 50, PALE_G, GREEN),
        T(400, 215, "Cl", GREEN, 20),
        R(350, 260, 100, 50, PALE_G, GREEN),
        T(400, 285, "Br", GREEN, 20),
        P("M 480 290 L 480 140", ORANGE, 4),
        T(560, 215, "reactivity decreases", ORANGE, 16),
        T(400, 350, "harder to pull in a new electron", SUB, 16),
      ],
    }],
  },
  {
    label: "Check",
    steps: [{
      heading: "Displacement",
      narration: "A more reactive halogen will push a less reactive one out of its compound. Chlorine is above iodine, so it displaces iodine from potassium iodide.",
      rule: "More reactive displaces less reactive.",
      quizQ: "Why can chlorine displace iodine from potassium iodide?",
      quizA: "Chlorine is higher in Group 7, so it is more reactive than iodine.",
      draw: [
        T(200, 200, "Cl₂", GREEN, 24),
        T(280, 200, "+", INK, 24),
        T(360, 200, "2 KI", BLUE, 24),
        P("M 420 200 L 480 200", INK, 3),
        T(540, 200, "2 KCl", GREEN, 24),
        T(640, 200, "+", INK, 24),
        T(700, 200, "I₂", PURPLE, 24),
        T(400, 280, "chlorine takes the potassium", SUB, 16),
      ],
    }],
  }
]);

data["s8_2.3"] = lesson("2.3 Why elements react", "Section 2.3: Bonding", [
  {
    label: "Key idea",
    steps: [{
      heading: "Full outer shells",
      narration: "Atoms react to get a stable, full outer shell like a noble gas. They can do this by giving and taking electrons (ionic) or by sharing them (covalent).",
      rule: "Reacting achieves a full outer shell.",
      draw: [
        C(250, 200, 40, "none", BLUE),
        T(250, 200, "Na", BLUE, 18),
        C(290, 200, 6, INK, INK),
        P("M 320 200 L 480 200", RED, 3, "5,5"),
        T(400, 180, "transfer", RED, 14),
        C(550, 200, 40, "none", GREEN),
        T(550, 200, "Cl", GREEN, 18),
        T(400, 300, "Ionic: metal loses, non-metal gains", INK, 18),
      ],
    }],
  },
  {
    label: "Recall",
    steps: [{
      heading: "Ionic bonding",
      narration: "Sodium loses 1 electron to become Na⁺. Chlorine gains it to become Cl⁻. The opposite charges attract strongly.",
      rule: "Ionic = electrostatic attraction between ions.",
      draw: [
        R(200, 160, 80, 80, PALE_B, BLUE),
        T(240, 200, "Na⁺", BLUE, 24),
        R(400, 160, 80, 80, PALE_G, GREEN),
        T(440, 200, "Cl⁻", GREEN, 24),
        P("M 280 200 L 400 200", RED, 4),
        T(340, 180, "attract", RED, 14),
        T(340, 280, "opposite charges lock together", SUB, 16),
      ],
    }],
  },
  {
    label: "Check",
    steps: [{
      heading: "Covalent bonding",
      narration: "Non-metals share pairs of electrons so they both count the shared electrons in their outer shell. A water molecule has two shared pairs.",
      rule: "Covalent = shared pairs of electrons.",
      quizQ: "What is a covalent bond?",
      quizA: "A shared pair of electrons between non-metal atoms.",
      draw: [
        C(350, 200, 40, "none", RED),
        T(330, 200, "O", RED, 18),
        C(430, 200, 40, "none", BLUE),
        T(450, 200, "H", BLUE, 18),
        T(390, 200, "xx", INK, 16),
        T(390, 280, "shared pair = one bond", SUB, 16),
      ],
    }],
  }
]);

data["s8_2.4"] = lesson("2.4 Simple and giant structures", "Section 2.4: Structures", [
  {
    label: "Key idea",
    steps: [{
      heading: "Simple molecules",
      narration: "Water and methane are simple molecules. The bonds inside the molecule are strong, but the forces between different molecules are weak. So they melt easily.",
      rule: "Weak intermolecular forces = low melting point.",
      draw: [
        C(250, 200, 20, PALE_B, BLUE),
        C(400, 200, 20, PALE_B, BLUE),
        C(550, 200, 20, PALE_B, BLUE),
        P("M 270 200 L 380 200", RED, 2, "5,5"),
        P("M 420 200 L 530 200", RED, 2, "5,5"),
        T(400, 170, "weak forces", RED, 14),
        T(400, 280, "easy to separate = low melting point", INK, 18),
      ],
    }],
  },
  {
    label: "Recall",
    steps: [{
      heading: "Giant ionic lattices",
      narration: "Salt (NaCl) is a giant 3D grid of positive and negative ions. Breaking all those strong ionic bonds takes a lot of heat.",
      rule: "Giant ionic = high melting point.",
      draw: [
        R(300, 150, 40, 40, PALE_B, BLUE),
        R(340, 150, 40, 40, PALE_G, GREEN),
        R(380, 150, 40, 40, PALE_B, BLUE),
        R(300, 190, 40, 40, PALE_G, GREEN),
        R(340, 190, 40, 40, PALE_B, BLUE),
        R(380, 190, 40, 40, PALE_G, GREEN),
        T(400, 280, "strong bonds everywhere", RED, 16),
        T(400, 320, "hard to melt", INK, 18),
      ],
    }],
  },
  {
    label: "Check",
    steps: [{
      heading: "Giant covalent structures",
      narration: "Diamond and graphite are macromolecules made of carbon. Diamond is a rigid 3D web. Graphite is made of flat layers that can slide, and has free electrons to conduct electricity.",
      rule: "Diamond is hard. Graphite conducts and slides.",
      quizQ: "Why does graphite conduct electricity but diamond does not?",
      quizA: "Graphite has delocalised electrons between its layers. Diamond's electrons are all locked in bonds.",
      draw: [
        P("M 200 150 L 300 150", INK, 3),
        P("M 200 200 L 300 200", INK, 3),
        P("M 250 150 L 250 200", RED, 2, "5,5"),
        T(250, 250, "graphite layers", INK, 16),
        P("M 500 150 L 550 200 L 600 150", INK, 3),
        P("M 550 200 L 550 250", INK, 3),
        T(550, 280, "diamond 3D web", INK, 16),
      ],
    }],
  }
]);

data["s8_3.1"] = lesson("3.1 Density", "Section 3.1: Density", [
  {
    label: "Key idea",
    steps: [{
      heading: "Mass per volume",
      narration: "Density tells you how heavy a certain volume of a material is. Divide the mass by the volume.",
      rule: "Density = Mass ÷ Volume.",
      draw: [
        P("M 400 120 L 300 220 L 500 220 Z", PALE_B, BLUE),
        P("M 300 220 L 500 220", BLUE, 3),
        P("M 400 120 L 400 220", BLUE, 3),
        T(400, 160, "m", INK, 24),
        T(350, 200, "ρ", INK, 24),
        T(450, 200, "V", INK, 24),
        T(400, 280, "mass = density × volume", SUB, 16),
      ],
    }],
  },
  {
    label: "Recall",
    steps: [{
      heading: "Finding volume by displacement",
      narration: "Drop an irregular rock into a measuring cylinder. The water level rises by the exact volume of the rock.",
      rule: "Volume = final level − start level.",
      draw: [
        R(250, 150, 60, 120, "none", INK),
        R(250, 210, 60, 60, PALE_B, BLUE),
        T(200, 210, "50 ml", BLUE, 14),
        R(450, 150, 60, 120, "none", INK),
        R(450, 180, 60, 90, PALE_B, BLUE),
        C(480, 240, 15, "#94a3b8", INK),
        T(400, 180, "76 ml", BLUE, 14),
        T(400, 320, "volume = 76 − 50 = 26 cm³", GREEN, 20),
      ],
    }],
  },
  {
    label: "Check",
    steps: [{
      heading: "Floating and sinking",
      narration: "An object floats if its density is less than the fluid's density. Water is 1 g/cm³. A steel ship floats because its hollow shape makes its average density less than 1.",
      rule: "Less dense floats. More dense sinks.",
      quizQ: "Why does a hollow steel ship float?",
      quizA: "The air inside makes its average density less than the density of water.",
      draw: [
        R(200, 200, 400, 100, PALE_B, BLUE),
        R(250, 150, 100, 50, PALE_O, ORANGE),
        T(300, 175, "wood", ORANGE, 16),
        T(300, 130, "0.6 g/cm³", ORANGE, 14),
        R(450, 250, 50, 50, "#cbd5e1", INK),
        T(475, 275, "iron", INK, 16),
        T(475, 320, "7.9 g/cm³", INK, 14),
        T(400, 360, "water is 1.0 g/cm³", BLUE, 18),
      ],
    }],
  }
]);

const problems = audit(Object.keys(data).filter(k => k.startsWith('s8_')));
if (problems.length) {
  console.log(problems.slice(0, 80).join("\n"));
  console.log("PROBLEMS", problems.length);
  process.exit(1);
}

fs.writeFileSync(file, "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(data, null, 2) + ";\n");
console.log("Wrote Year 8 Science boards");

function audit(keys) {
  const issues = [];
  keys.forEach((key) => {
    const topic = data[key];
    if (!topic) return;
    topic.subtopics.forEach((sub) => {
      let stack = [];
      (topic.scenes[sub.id] || []).forEach((step, index) => {
        if (step.clear || index === 0) stack = [];
        stack = stack.concat(step.elements || []);
        const texts = stack.filter((e) => e.type === "text");
        const boxes = texts.map((e) => {
          const w = e.size * 0.62 * String(e.text).length;
          const h = e.size;
          return { t: e.text, l: e.x - w / 2, r: e.x + w / 2, top: e.y - h / 2, bot: e.y + h / 2 };
        });
        boxes.forEach((b) => {
          if (b.l < 58 || b.r > 745 || b.top < 46 || b.bot > 438) {
            issues.push(key + " " + sub.id + " step " + index + " outside: " + b.t);
          }
        });
      });
    });
  });
  return issues;
}
