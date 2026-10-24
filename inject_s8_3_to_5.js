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

data["s8_3.2"] = lesson("3.2 Heat and temperature", "Section 3.2: Heat vs Temp", [
  {
    label: "Key idea",
    steps: [{
      heading: "Temperature vs Thermal Energy",
      narration: "Temperature is how hot something is—the average kinetic energy of particles. Thermal energy is the total energy of all particles.",
      rule: "Temp = average energy. Thermal = total energy.",
      draw: [
        R(200, 150, 100, 150, PALE_B, BLUE),
        T(250, 200, "100°C", RED, 20),
        T(250, 250, "spark", INK, 16),
        T(250, 280, "few particles", SUB, 14),
        R(400, 150, 250, 150, PALE_B, BLUE),
        T(525, 200, "20°C", BLUE, 20),
        T(525, 250, "lake", INK, 16),
        T(525, 280, "trillions of particles", SUB, 14),
        T(400, 360, "Lake has more thermal energy despite lower temp", INK, 18),
      ],
    }],
  },
  {
    label: "Check",
    steps: [{
      heading: "Heating up",
      narration: "Heating a large mass takes more energy than a small mass for the same temperature rise.",
      rule: "More mass = more energy needed to heat.",
      quizQ: "Which needs more energy to rise 10°C: a cup of water or a swimming pool?",
      quizA: "The pool, because it has far more mass.",
      draw: [
        C(300, 200, 40, PALE_B, BLUE),
        T(300, 200, "cup", INK, 16),
        P("M 300 250 L 300 300", RED, 3),
        T(300, 320, "small energy", RED, 14),
        R(450, 150, 150, 100, PALE_B, BLUE),
        T(525, 200, "pool", INK, 16),
        P("M 480 260 L 480 340", RED, 6),
        P("M 520 260 L 520 340", RED, 6),
        P("M 560 260 L 560 340", RED, 6),
        T(525, 360, "huge energy", RED, 14),
      ],
    }],
  }
]);

data["s8_3.3"] = lesson("3.3 Conservation of energy", "Section 3.3: Energy", [
  {
    label: "Key idea",
    steps: [{
      heading: "Energy cannot be created",
      narration: "Energy is never created or destroyed, only transferred between stores like kinetic, gravitational, and thermal.",
      rule: "Total energy stays the same.",
      draw: [
        C(200, 150, 30, PALE_O, ORANGE),
        T(200, 150, "ball", INK, 14),
        T(200, 100, "Gravitational store", BLUE, 16),
        P("M 200 190 L 200 300", INK, 3, "5,5"),
        C(200, 340, 30, PALE_O, ORANGE),
        T(300, 250, "transfers to", INK, 16),
        T(200, 390, "Kinetic store", RED, 16),
        P("M 450 250 L 600 250", ORANGE, 4),
        T(525, 230, "total energy = constant", INK, 18),
      ],
    }],
  },
  {
    label: "Recall",
    steps: [{
      heading: "Wasted energy",
      narration: "Machines always waste some energy, usually as thermal energy to the surroundings, so they are never 100% efficient.",
      rule: "Some energy is always wasted as heat.",
      draw: [
        R(300, 200, 200, 80, PALE_G, GREEN),
        T(400, 240, "Machine", INK, 20),
        P("M 150 240 L 280 240", BLUE, 6),
        T(215, 220, "100 J in", BLUE, 16),
        P("M 520 240 L 650 240", GREEN, 4),
        T(585, 220, "80 J useful out", GREEN, 16),
        P("M 400 290 L 400 360", RED, 3),
        T(400, 380, "20 J wasted (thermal)", RED, 16),
      ],
    }],
  }
]);

data["s8_3.4"] = lesson("3.4 Moving from hot to cold", "Section 3.4: Heat flow", [
  {
    label: "Key idea",
    steps: [{
      heading: "Direction of flow",
      narration: "Thermal energy always flows from a hotter region to a colder region until they reach the same temperature.",
      rule: "Hot to cold until equal.",
      draw: [
        R(250, 200, 100, 100, PALE_R, RED),
        T(300, 250, "80°C", RED, 20),
        R(450, 200, 100, 100, PALE_B, BLUE),
        T(500, 250, "20°C", BLUE, 20),
        P("M 360 250 L 440 250", ORANGE, 5),
        T(400, 220, "heat flow", ORANGE, 16),
        T(400, 350, "Stops when both are at the same temperature", INK, 18),
      ],
    }],
  },
  {
    label: "Check",
    steps: [{
      heading: "Conductors and insulators",
      narration: "Metals are good conductors. Air, wood, and plastic are insulators—they reduce the rate of heat loss.",
      rule: "Conductors pass heat; insulators block it.",
      quizQ: "Why do we wear coats in winter?",
      quizA: "They insulate the body, reducing the rate of thermal energy loss to the cold air.",
      draw: [
        R(200, 180, 150, 20, "#cbd5e1", INK),
        T(275, 160, "metal spoon", INK, 14),
        P("M 200 210 L 350 210", RED, 3),
        T(275, 230, "fast heat flow", RED, 14),
        R(450, 180, 150, 20, PALE_O, ORANGE),
        T(525, 160, "wooden spoon", ORANGE, 14),
        P("M 450 210 L 500 210", BLUE, 2),
        T(525, 230, "slow heat flow", BLUE, 14),
      ],
    }],
  }
]);

data["s8_3.5"] = lesson("3.5 Ways of transferring thermal energy", "Section 3.5: Transfer", [
  {
    label: "Key idea",
    steps: [{
      heading: "Conduction, Convection, Radiation",
      narration: "Conduction is through solids. Convection is fluids rising and sinking. Radiation is infrared waves that can travel through a vacuum.",
      rule: "Solid = conduction, Fluid = convection, Vacuum = radiation.",
      draw: [
        R(150, 250, 150, 20, "#cbd5e1", INK),
        T(225, 230, "Conduction", INK, 16),
        T(225, 290, "vibrating particles", SUB, 14),
        R(350, 150, 100, 120, PALE_B, BLUE),
        P("M 380 250 L 380 170", RED, 3),
        P("M 420 170 L 420 250", BLUE, 3),
        T(400, 130, "Convection", INK, 16),
        T(400, 290, "hot fluid rises", SUB, 14),
        C(600, 200, 30, PALE_O, ORANGE),
        P("M 550 200 L 500 200", ORANGE, 3, "5,5"),
        P("M 600 250 L 600 300", ORANGE, 3, "5,5"),
        T(600, 150, "Radiation", INK, 16),
        T(600, 320, "infrared waves", SUB, 14),
      ],
    }],
  }
]);

data["s8_3.6"] = lesson("3.6 Cooling by evaporation", "Section 3.6: Evaporation", [
  {
    label: "Key idea",
    steps: [{
      heading: "Fastest particles escape",
      narration: "In evaporation, the fastest particles escape the surface. The ones left behind have lower average energy, so the liquid cools down.",
      rule: "Evaporation cools the liquid.",
      draw: [
        R(300, 250, 200, 100, PALE_B, BLUE),
        C(350, 280, 10, BLUE, BLUE),
        C(450, 320, 10, BLUE, BLUE),
        C(400, 230, 10, RED, RED),
        P("M 400 220 L 400 150", RED, 3),
        T(400, 130, "fastest particle escapes", RED, 16),
        T(400, 380, "remaining liquid is cooler", BLUE, 18),
      ],
    }],
  },
  {
    label: "Check",
    steps: [{
      heading: "Speeding it up",
      narration: "Evaporation is faster if it is warm, has a large surface area, or if air is moving over it.",
      rule: "Warm, spread out, and windy.",
      quizQ: "Why does blowing on hot soup cool it faster?",
      quizA: "Moving air removes vapour, speeding up evaporation, which takes thermal energy from the soup.",
      draw: [
        R(250, 250, 300, 50, PALE_O, ORANGE),
        P("M 150 220 L 250 220", INK, 3, "5,5"),
        P("M 150 240 L 250 240", INK, 3, "5,5"),
        T(180, 200, "wind", INK, 16),
        P("M 350 250 L 350 180", RED, 2),
        P("M 400 250 L 400 180", RED, 2),
        P("M 450 250 L 450 180", RED, 2),
        T(400, 150, "vapour blown away", RED, 16),
      ],
    }],
  }
]);

data["s8_4.1"] = lesson("4.1 Plants and water", "Section 4.1: Plant water", [
  {
    label: "Key idea",
    steps: [{
      heading: "Root hair cells",
      narration: "Water enters roots by osmosis. Root hair cells have a large surface area to absorb water and minerals efficiently.",
      rule: "Root hairs increase surface area.",
      draw: [
        R(300, 200, 100, 100, PALE_G, GREEN),
        P("M 400 220 L 550 220 L 550 280 L 400 280", PALE_G, GREEN),
        T(350, 250, "cell", GREEN, 16),
        T(500, 250, "root hair", GREEN, 16),
        P("M 600 250 L 560 250", BLUE, 3),
        T(650, 250, "water in", BLUE, 16),
        T(400, 350, "Large surface area for absorption", INK, 18),
      ],
    }],
  },
  {
    label: "Recall",
    steps: [{
      heading: "Xylem vessels",
      narration: "Water travels up the stem in hollow tubes called xylem. Without water, cells lose turgor and the plant wilts.",
      rule: "Xylem carries water up.",
      draw: [
        R(380, 150, 40, 200, PALE_B, BLUE),
        P("M 400 320 L 400 180", BLUE, 4),
        T(400, 160, "up to leaves", BLUE, 16),
        T(300, 250, "xylem tube", INK, 16),
        T(400, 380, "keeps cells turgid (firm)", GREEN, 16),
      ],
    }],
  }
]);

data["s8_4.2"] = lesson("4.2 Transpiration", "Section 4.2: Transpiration", [
  {
    label: "Key idea",
    steps: [{
      heading: "Water loss from leaves",
      narration: "Transpiration is the loss of water vapour from leaves, mainly through stomata. It pulls water up the xylem.",
      rule: "Transpiration pulls water up.",
      draw: [
        P("M 300 250 Q 400 150 500 250 Z", PALE_G, GREEN),
        P("M 400 250 L 400 350", GREEN, 4),
        P("M 400 320 L 400 250", BLUE, 3),
        P("M 450 220 L 500 180", BLUE, 3, "5,5"),
        T(550, 170, "water vapour out", BLUE, 16),
        T(400, 380, "Evaporation creates a pull", INK, 18),
      ],
    }],
  },
  {
    label: "Check",
    steps: [{
      heading: "Stomata and guard cells",
      narration: "Guard cells swell to open stomata in the light, and go floppy to close them to save water on hot, dry days.",
      rule: "Guard cells control stomata.",
      quizQ: "Why do plants close stomata on a hot dry day?",
      quizA: "To reduce water loss, even though it slows down photosynthesis.",
      draw: [
        C(350, 250, 40, PALE_G, GREEN),
        C(450, 250, 40, PALE_G, GREEN),
        T(400, 250, "pore", INK, 14),
        T(400, 180, "open (turgid guard cells)", GREEN, 16),
        T(400, 350, "close to save water", SUB, 16),
      ],
    }],
  }
]);

data["s8_4.3"] = lesson("4.3 Excretion in humans", "Section 4.3: Excretion", [
  {
    label: "Key idea",
    steps: [{
      heading: "Kidneys filter blood",
      narration: "Excretion is removing metabolic waste. The kidneys filter blood, removing urea, excess water, and salts as urine.",
      rule: "Kidneys make urine.",
      draw: [
        R(350, 150, 100, 60, PALE_R, RED),
        T(400, 180, "kidney", RED, 16),
        P("M 400 210 L 400 300", PALE_O, ORANGE),
        T(450, 250, "ureter", ORANGE, 14),
        C(400, 330, 30, PALE_O, ORANGE),
        T(400, 330, "bladder", ORANGE, 14),
        T(400, 390, "Urea + excess water = urine", INK, 18),
      ],
    }],
  },
  {
    label: "Recall",
    steps: [{
      heading: "Other wastes",
      narration: "Carbon dioxide is excreted by the lungs. Faeces are egestion, not excretion, because they are undigested food, not metabolic waste.",
      rule: "CO₂ from lungs. Faeces = egestion.",
      draw: [
        R(250, 200, 100, 80, PALE_B, BLUE),
        T(300, 240, "lungs", BLUE, 16),
        P("M 300 190 L 300 140", INK, 3),
        T(300, 120, "CO₂ out", INK, 16),
        R(450, 200, 100, 80, PALE_O, ORANGE),
        T(500, 240, "gut", ORANGE, 16),
        P("M 500 290 L 500 340", INK, 3),
        T(500, 360, "faeces (egestion)", INK, 16),
      ],
    }],
  }
]);

data["s8_4.4"] = lesson("4.4 Keeping a fetus healthy", "Section 4.4: Fetus", [
  {
    label: "Key idea",
    steps: [{
      heading: "Placenta and umbilical cord",
      narration: "The placenta exchanges oxygen and nutrients for waste. The mother's blood and fetus's blood do not mix.",
      rule: "Placenta exchanges substances.",
      draw: [
        C(250, 250, 60, PALE_R, RED),
        T(250, 250, "fetus", RED, 16),
        R(450, 200, 40, 100, PALE_B, BLUE),
        T(470, 180, "placenta", BLUE, 16),
        P("M 310 250 L 450 250", PURPLE, 6),
        T(380, 230, "umbilical cord", PURPLE, 14),
        T(400, 350, "Bloods do not mix", INK, 18),
      ],
    }],
  },
  {
    label: "Check",
    steps: [{
      heading: "Risks to development",
      narration: "Smoking, alcohol, and drugs can cross the placenta and harm the developing fetus.",
      rule: "Toxins cross the placenta.",
      quizQ: "Why can substances the mother takes affect the baby?",
      quizA: "Chemicals cross the placenta, and the small, developing fetus is easily harmed.",
      draw: [
        P("M 300 200 L 500 200", RED, 3),
        T(400, 180, "toxins", RED, 16),
        R(480, 150, 40, 100, PALE_B, BLUE),
        P("M 520 200 L 600 200", RED, 3),
        T(650, 200, "fetus", INK, 16),
        T(400, 300, "A balanced diet and no toxins keeps it healthy", GREEN, 16),
      ],
    }],
  }
]);

data["s8_5.1"] = lesson("5.1 Reactivity and displacement", "Section 5.1: Reactivity", [
  {
    label: "Key idea",
    steps: [{
      heading: "The reactivity series",
      narration: "Metals are listed by how readily they react. A more reactive metal displaces a less reactive one from its compound.",
      rule: "More reactive displaces less reactive.",
      draw: [
        R(200, 150, 100, 40, PALE_B, BLUE),
        T(250, 170, "Potassium", BLUE, 14),
        R(200, 200, 100, 40, PALE_G, GREEN),
        T(250, 220, "Zinc", GREEN, 14),
        R(200, 250, 100, 40, PALE_O, ORANGE),
        T(250, 270, "Copper", ORANGE, 14),
        R(200, 300, 100, 40, PALE_R, RED),
        T(250, 320, "Gold", RED, 14),
        P("M 150 320 L 150 170", INK, 3),
        T(120, 240, "reactivity", INK, 14),
        T(500, 200, "Fe + CuSO₄ → FeSO₄ + Cu", INK, 20),
        T(500, 240, "Iron pushes copper out", SUB, 16),
      ],
    }],
  }
]);

data["s8_5.2"] = lesson("5.2 Using the reactivity series", "Section 5.2: Extraction", [
  {
    label: "Key idea",
    steps: [{
      heading: "Extracting metals",
      narration: "Metals below carbon can be extracted by heating their oxide with carbon. Carbon displaces the metal.",
      rule: "Carbon reduces less reactive metals.",
      draw: [
        T(400, 150, "Iron oxide + Carbon → Iron + Carbon dioxide", RED, 18),
        P("M 300 170 L 450 170", INK, 3),
        T(400, 200, "Carbon takes the oxygen", INK, 16),
        T(400, 300, "Aluminium is above carbon, so it needs electrolysis", BLUE, 16),
      ],
    }],
  }
]);

data["s8_5.3"] = lesson("5.3 Salts", "Section 5.3: Salts", [
  {
    label: "Key idea",
    steps: [{
      heading: "Making salts",
      narration: "A salt forms when the hydrogen of an acid is replaced by a metal. Metal + acid makes salt + hydrogen.",
      rule: "Metal + Acid → Salt + Hydrogen.",
      draw: [
        T(400, 150, "Hydrochloric acid → Chlorides", BLUE, 18),
        T(400, 200, "Sulfuric acid → Sulfates", GREEN, 18),
        T(400, 250, "Nitric acid → Nitrates", RED, 18),
        T(400, 350, "Zinc + Sulfuric acid → Zinc sulfate + Hydrogen", INK, 18),
      ],
    }],
  }
]);

data["s8_5.4"] = lesson("5.4 Other ways of making salts", "Section 5.4: Making salts", [
  {
    label: "Key idea",
    steps: [{
      heading: "From insoluble bases",
      narration: "Add excess solid base to warm acid, filter out the leftover solid, then evaporate the liquid to grow crystals.",
      rule: "React, filter, evaporate.",
      draw: [
        R(200, 200, 60, 80, PALE_B, BLUE),
        T(230, 260, "acid", BLUE, 14),
        C(230, 180, 10, INK, INK),
        T(230, 150, "excess base", INK, 14),
        P("M 300 240 L 350 240", INK, 3),
        P("M 400 180 L 450 220 L 350 220 Z", "none", INK),
        T(400, 250, "filter", INK, 14),
        P("M 480 240 L 530 240", INK, 3),
        R(580, 240, 60, 20, PALE_B, BLUE),
        T(610, 280, "evaporate gently", RED, 14),
        T(400, 350, "Gentle evaporation makes good crystals", SUB, 16),
      ],
    }],
  }
]);

data["s8_5.5"] = lesson("5.5 Rearranging atoms", "Section 5.5: Conservation", [
  {
    label: "Key idea",
    steps: [{
      heading: "Mass is conserved",
      narration: "Atoms are never created or destroyed in a chemical reaction, only rearranged. The mass of products equals the mass of reactants.",
      rule: "Mass is conserved.",
      draw: [
        C(300, 200, 20, PALE_B, BLUE),
        C(340, 200, 20, PALE_B, BLUE),
        T(320, 240, "4 g", INK, 16),
        T(400, 200, "+", INK, 20),
        C(460, 200, 30, PALE_R, RED),
        C(520, 200, 30, PALE_R, RED),
        T(490, 250, "32 g", INK, 16),
        P("M 400 280 L 400 320", INK, 3),
        C(400, 360, 30, PALE_R, RED),
        C(360, 360, 20, PALE_B, BLUE),
        C(440, 360, 20, PALE_B, BLUE),
        T(400, 410, "36 g", GREEN, 20),
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
console.log("Wrote Year 8 Science boards 3 to 5");

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
