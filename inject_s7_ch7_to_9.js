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

data["s7_7.1"] = scenesFrom("7.1 Nutrients", "Section 7.1: Nutrients", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "The nutrient groups",
        narration: "Food gives you carbohydrates, fats, proteins, vitamins, minerals, water and fibre.",
        rule: "Seven groups to remember.",
        draw: [
          T(200, 180, "carbs", ORANGE, 16),
          T(400, 180, "fats", ORANGE, 16),
          T(600, 180, "proteins", GREEN, 16),
          T(200, 240, "vitamins", PURPLE, 16),
          T(400, 240, "minerals", BLUE, 16),
          T(600, 240, "water", BLUE, 16),
          T(400, 300, "fibre", SUB, 16),
        ],
      },
      {
        narration: "Carbs and fats are mainly for energy. Protein is for growth and repair of cells.",
        rule: "Energy from carbs and fats. Building from protein.",
        quizQ: "Name the main nutrient groups.",
        quizA: "Carbohydrates, fats, proteins, vitamins, minerals, water and fibre.",
        draw: [
          R(150, 340, 220, 50, PALE_O, ORANGE),
          T(260, 365, "energy", ORANGE, 16),
          R(430, 340, 220, 50, PALE_G, GREEN),
          T(540, 365, "grow and repair", DARK_G, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Who does what",
        narration: "Carbohydrates and fats supply energy. Proteins build new tissue.",
        rule: "Match the job to the nutrient.",
        draw: [
          R(140, 180, 200, 90, PALE_O, ORANGE),
          T(240, 225, "carbs & fats", ORANGE, 16),
          R(500, 180, 200, 90, PALE_G, GREEN),
          T(600, 225, "proteins", DARK_G, 16),
        ],
      },
      {
        narration: "You still need the others: water for cells, fibre for the gut, vitamins and minerals for special jobs.",
        rule: "Tiny amounts still matter.",
        quizQ: "What is each of carbohydrate, fat and protein mainly for?",
        quizA: "Carbohydrates and fats supply energy. Proteins are used for growth and repair.",
        draw: [
          T(400, 330, "energy  vs  building", INK, 18),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Vitamins and minerals",
        narration: "You only need tiny amounts, but they run important jobs — vitamin C for tissue, calcium for bones.",
        rule: "Small dose, big job.",
        draw: [
          R(150, 190, 220, 90, PALE_P, PURPLE),
          T(260, 220, "vitamin C", PURPLE, 16),
          T(260, 250, "healthy tissue", SUB, 14),
          R(430, 190, 220, 90, PALE_B, BLUE),
          T(540, 220, "calcium", BLUE, 16),
          T(540, 250, "strong bones", SUB, 14),
        ],
      },
      {
        narration: "Missing them for a long time harms health, even if you eat plenty of energy.",
        rule: "Energy food is not enough on its own.",
        quizQ: "Why do you still need tiny amounts of vitamins and minerals?",
        quizA: "They are needed for particular jobs, such as vitamin C for healthy tissue and calcium for bones.",
        draw: [
          T(400, 340, "tiny but essential", DARK_G, 16),
        ],
      },
    ],
  },
]);

data["s7_7.2"] = scenesFrom("7.2 A balanced diet", "Section 7.2: Balanced diet", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Not just 'eat less'",
        narration: "A balanced diet has the right amounts of every nutrient and enough energy for your age, size and activity.",
        rule: "Right mix, right amount.",
        draw: [
          R(180, 180, 440, 90, PALE_G, GREEN),
          T(400, 210, "all nutrient groups", DARK_G, 16),
          T(400, 245, "energy to match your day", SUB, 14),
        ],
      },
      {
        narration: "Too little of one thing, or too much energy stored as fat, both count as a diet problem.",
        rule: "Balance is quality and quantity.",
        quizQ: "What is a balanced diet?",
        quizA: "The right amounts of every nutrient and energy for your age, size and activity, not simply 'eating less'.",
        draw: [
          T(400, 330, "not only cutting food", ORANGE, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Malnutrition",
        narration: "Malnutrition is a diet that is short of a nutrient, or that supplies too much energy, so health is harmed.",
        rule: "Too little or too much can both harm.",
        draw: [
          R(140, 190, 220, 90, PALE_B, BLUE),
          T(250, 235, "too little", BLUE, 18),
          R(440, 190, 220, 90, PALE_R, RED),
          T(550, 235, "too much", RED, 18),
        ],
      },
      {
        narration: "It is not only starvation. A diet full of energy but missing iron or vitamin C is still malnutrition.",
        rule: "Junk energy can still be malnutrition.",
        quizQ: "What is malnutrition?",
        quizA: "A diet that is short of a nutrient, or that supplies too much energy, so health is harmed.",
        draw: [
          T(400, 340, "missing nutrient  or  excess energy", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Athletes need more energy",
        narration: "Muscles that work hard respire more, so they use more glucose. An athlete needs more energy than someone sitting all day.",
        rule: "More work → more energy in food.",
        draw: [
          R(140, 190, 220, 100, PALE_O, ORANGE),
          T(250, 225, "athlete", ORANGE, 18),
          T(250, 258, "high energy use", SUB, 14),
          R(440, 190, 220, 100, PALE_B, BLUE),
          T(550, 225, "sitting", BLUE, 18),
          T(550, 258, "lower energy use", SUB, 14),
        ],
      },
      {
        narration: "The extra food should still be balanced — not only sugar.",
        rule: "More energy, still all the groups.",
        quizQ: "Why does an athlete need more energy than someone who sits all day?",
        quizA: "Their muscles do more work, so respiration uses more glucose.",
        draw: [
          T(400, 350, "work  →  respiration  →  glucose used", DARK_G, 16),
        ],
      },
    ],
  },
]);

data["s7_7.3"] = scenesFrom("7.3 Growth and health", "Section 7.3: Growth", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "What growth needs",
        narration: "To grow you need energy, protein to build new cells, minerals such as calcium, plus sleep and activity.",
        rule: "Fuel + building blocks + rest.",
        draw: [
          R(120, 190, 160, 80, PALE_O, ORANGE),
          T(200, 230, "energy", ORANGE, 16),
          R(300, 190, 160, 80, PALE_G, GREEN),
          T(380, 230, "protein", DARK_G, 16),
          R(480, 190, 160, 80, PALE_B, BLUE),
          T(560, 230, "calcium", BLUE, 16),
        ],
      },
      {
        narration: "Sleep and exercise help hormones and bones do their jobs. Food alone is not the whole story.",
        rule: "Lifestyle supports growth too.",
        quizQ: "What does the body need in order to grow?",
        quizA: "Energy, proteins to build new cells, and minerals such as calcium, plus enough sleep and activity.",
        draw: [
          T(400, 330, "sleep and activity as well", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Missing vitamin C",
        narration: "Too little vitamin C for a long time can cause scurvy: gums, skin and healing all suffer.",
        rule: "Vitamin C shortage → scurvy.",
        draw: [
          R(220, 190, 360, 90, PALE_R, RED),
          T(400, 235, "too little vitamin C → scurvy", RED, 16),
        ],
      },
      {
        narration: "Fruit and vegetables supply vitamin C. A long gap without them is the classic risk.",
        rule: "A varied diet prevents deficiency.",
        quizQ: "What can happen if a diet is missing vitamin C for a long time?",
        quizA: "Health suffers. Too little vitamin C can cause scurvy.",
        draw: [
          T(400, 340, "oranges and greens help", GREEN, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Growth is not just weight",
        narration: "Growth means making new tissue — taller, stronger bones and muscle. Weight can rise just from stored fat.",
        rule: "New tissue ≠ extra fat.",
        draw: [
          R(140, 190, 230, 100, PALE_G, GREEN),
          T(255, 225, "growth", DARK_G, 18),
          T(255, 258, "new cells", SUB, 14),
          R(430, 190, 230, 100, PALE_O, ORANGE),
          T(545, 225, "weight gain", ORANGE, 18),
          T(545, 258, "could be fat stores", SUB, 14),
        ],
      },
      {
        narration: "A healthy growing body adds tissue. The scales alone cannot tell you which it is.",
        rule: "Scales do not equal growth.",
        quizQ: "Why is 'growth' not the same as 'putting on weight'?",
        quizA: "Growth is making new tissue. Weight can rise just from stored fat.",
        draw: [
          T(400, 350, "ask: is it new tissue?", INK, 16),
        ],
      },
    ],
  },
]);

data["s7_7.4"] = scenesFrom("7.4 Moving the body", "Section 7.4: Muscles", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Muscles pull, they cannot push",
        narration: "A muscle shortens and pulls a bone across a joint. It cannot shove the bone the other way.",
        rule: "Muscles only pull.",
        draw: [
          P("M 220 280 L 400 200 L 580 280", INK, 8),
          C(400, 200, 12, PALE_O, ORANGE),
          T(400, 170, "joint", ORANGE, 14),
          T(220, 320, "bone", INK, 16),
          T(580, 320, "bone", INK, 16),
        ],
      },
      {
        narration: "So they work in pairs. One pulls to bend, the other pulls to straighten.",
        rule: "Pairs with opposite jobs.",
        quizQ: "How do muscles move a bone?",
        quizA: "Muscles pull on bones across a joint. They work in pairs, because a muscle can pull but not push.",
        draw: [
          T(400, 370, "antagonistic pair", GREEN, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Biceps and triceps",
        narration: "Biceps contract to bend the arm. Triceps contract to straighten it. When one pulls, the other relaxes.",
        rule: "Biceps bend, triceps straighten.",
        draw: [
          R(160, 190, 200, 90, PALE_G, GREEN),
          T(260, 220, "biceps", DARK_G, 18),
          T(260, 252, "bends the arm", SUB, 14),
          R(440, 190, 200, 90, PALE_B, BLUE),
          T(540, 220, "triceps", BLUE, 18),
          T(540, 252, "straightens", SUB, 14),
        ],
      },
      {
        narration: "That pair is called antagonistic: opposite effects at the same joint.",
        rule: "Antagonistic = opposite pull.",
        quizQ: "What is an antagonistic pair?",
        quizA: "Two muscles with opposite effects, such as the biceps bending the arm and the triceps straightening it.",
        draw: [
          T(400, 340, "one contracts, the other relaxes", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Ligaments and tendons",
        narration: "Ligaments hold bones together at a joint. Tendons join muscle to bone, so the pull is transmitted.",
        rule: "Ligament: bone to bone. Tendon: muscle to bone.",
        draw: [
          R(140, 190, 230, 100, PALE_O, ORANGE),
          T(255, 225, "ligament", ORANGE, 18),
          T(255, 258, "bone  →  bone", SUB, 14),
          R(430, 190, 230, 100, PALE_P, PURPLE),
          T(545, 225, "tendon", PURPLE, 18),
          T(545, 258, "muscle  →  bone", SUB, 14),
        ],
      },
      {
        narration: "Mix them up in an exam and you lose the mark. Remember: ligaments link bones.",
        rule: "L for ligament, L for link bones.",
        quizQ: "What do ligaments and tendons do?",
        quizA: "Ligaments hold bones together at a joint. Tendons join muscle to bone.",
        draw: [
          T(400, 350, "link bones  vs  pull bones", INK, 16),
        ],
      },
    ],
  },
]);

data["s7_8.1"] = scenesFrom("8.1 Exothermic reactions", "Section 8.1: Exothermic", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Heat given out",
        narration: "An exothermic reaction transfers energy to the surroundings, usually as heat, so the temperature rises.",
        rule: "Exothermic → temperature up.",
        draw: [
          R(250, 190, 300, 90, PALE_O, ORANGE),
          T(400, 235, "reaction mixture warms", ORANGE, 18),
        ],
      },
      {
        narration: "Burning a fuel is the everyday example: you feel the heat coming out.",
        rule: "Energy leaves the chemicals, enters the room.",
        quizQ: "What is an exothermic reaction?",
        quizA: "One that transfers energy to the surroundings, usually as heat, so the temperature rises.",
        draw: [
          T(400, 340, "burning  ·  some plasters setting", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Everyday examples",
        narration: "A campfire, a gas hob, and some building plasters that warm as they set are all exothermic.",
        rule: "If it heats the surroundings, it is exothermic.",
        draw: [
          R(160, 190, 200, 90, PALE_O, ORANGE),
          T(260, 235, "burning fuel", ORANGE, 16),
          R(440, 190, 200, 90, PALE_R, RED),
          T(540, 235, "setting plaster", RED, 16),
        ],
      },
      {
        narration: "You do not need flames. A temperature rise in a beaker is enough evidence.",
        rule: "Measure temperature, not just look for fire.",
        quizQ: "Give one everyday example.",
        quizA: "Burning a fuel, or the setting of some plasters.",
        draw: [
          T(400, 340, "thermometer goes up", INK, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "How to show it",
        narration: "Measure the temperature of the mixture before and after. A rise means energy has been given out.",
        rule: "Before-and-after thermometer.",
        draw: [
          R(150, 190, 200, 90, PALE_B, BLUE),
          T(250, 235, "start °C", BLUE, 18),
          P("M 370 235 L 430 235", INK, 4),
          R(450, 190, 200, 90, PALE_O, ORANGE),
          T(550, 235, "higher °C", ORANGE, 18),
        ],
      },
      {
        narration: "Keep the thermometer in the mixture, not in the air above it.",
        rule: "Measure the chemicals, not the room.",
        quizQ: "How would you show a reaction is exothermic?",
        quizA: "Measure the temperature of the mixture before and after. A rise means energy has been given out.",
        draw: [
          T(400, 340, "rise  =  exothermic", DARK_G, 18),
        ],
      },
    ],
  },
]);

data["s7_8.2"] = scenesFrom("8.2 Endothermic reactions", "Section 8.2: Endothermic", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Heat taken in",
        narration: "An endothermic reaction takes energy from the surroundings, so the temperature of the mixture falls.",
        rule: "Endothermic → temperature down.",
        draw: [
          R(250, 190, 300, 90, PALE_B, BLUE),
          T(400, 235, "reaction mixture cools", BLUE, 18),
        ],
      },
      {
        narration: "Dissolving some salts, such as ammonium chloride, in water is a classic school example.",
        rule: "Energy is absorbed from the water.",
        quizQ: "What is an endothermic reaction?",
        quizA: "One that takes in energy from the surroundings, so the temperature falls.",
        draw: [
          T(400, 340, "beaker feels colder", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "A school example",
        narration: "Ammonium chloride dissolving in water often makes the flask colder. That is endothermic.",
        rule: "Cold flask can mean endothermic.",
        draw: [
          R(250, 180, 300, 110, PALE_B, BLUE),
          T(400, 215, "ammonium chloride", BLUE, 16),
          T(400, 250, "+ water  →  cooler", SUB, 16),
        ],
      },
      {
        narration: "Sports ice packs use a similar dissolving trick to steal heat from a sprain.",
        rule: "Same idea in a first-aid pack.",
        quizQ: "Give one example.",
        quizA: "Dissolving some salts, such as ammonium chloride, in water.",
        draw: [
          T(400, 350, "instant ice pack", INK, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Not every cool-down is a reaction",
        narration: "Melting ice also takes in energy, but that is a physical change, not a chemical reaction.",
        rule: "Temperature drop ≠ always chemistry.",
        draw: [
          R(140, 190, 230, 100, PALE_B, BLUE),
          T(255, 225, "endothermic", BLUE, 16),
          T(255, 258, "chemical change", SUB, 14),
          R(430, 190, 230, 100, PALE_P, PURPLE),
          T(545, 225, "melting ice", PURPLE, 16),
          T(545, 258, "physical change", SUB, 14),
        ],
      },
      {
        narration: "New substances form in a chemical reaction. Ice to water is the same substance, just a different state.",
        rule: "Ask: is a new substance made?",
        quizQ: "Is every temperature drop a chemical reaction?",
        quizA: "No. Melting ice also takes in energy, but it is a physical change.",
        draw: [
          T(400, 350, "cold can be physics, not chemistry", SUB, 16),
        ],
      },
    ],
  },
]);

data["s7_8.3"] = scenesFrom("8.3 Metals and oxygen", "Section 8.3: Metals + oxygen", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Making a metal oxide",
        narration: "When a metal burns or corrodes in air, it joins with oxygen to make a metal oxide. The metal has been oxidised.",
        rule: "metal + oxygen → metal oxide",
        draw: [
          T(200, 230, "metal", ORANGE, 20),
          T(340, 230, "+", INK, 20),
          T(460, 230, "oxygen", BLUE, 20),
        ],
      },
      {
        narration: "Magnesium burns with a bright flame to make white magnesium oxide.",
        rule: "Oxidation of the metal.",
        quizQ: "What forms when a metal burns or corrodes in air?",
        quizA: "A metal oxide. The metal has been oxidised.",
        draw: [
          P("M 540 230 L 600 230", INK, 4),
          T(400, 320, "metal oxide", DARK_G, 20),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Who reacts most?",
        narration: "Reactive metals such as magnesium and sodium react readily with oxygen. Gold hardly reacts at all.",
        rule: "High in the reactivity series → burns or tarnishes easily.",
        draw: [
          R(140, 190, 200, 90, PALE_O, ORANGE),
          T(240, 235, "Mg, Na", ORANGE, 18),
          R(460, 190, 200, 90, PALE_G, GREEN),
          T(560, 235, "gold", DARK_G, 18),
        ],
      },
      {
        narration: "That is why gold stays shiny in air, and why magnesium ribbon is stored carefully.",
        rule: "Unreactive metals keep their shine.",
        quizQ: "Which metals react most readily with oxygen?",
        quizA: "The reactive ones, such as magnesium and sodium. Gold hardly reacts at all.",
        draw: [
          T(240, 330, "reacts fast", SUB, 14),
          T(560, 330, "almost no reaction", SUB, 14),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Word equation",
        narration: "magnesium + oxygen → magnesium oxide. Two reactants, one product.",
        rule: "Name the oxide after the metal.",
        draw: [
          T(400, 210, "magnesium + oxygen", INK, 18),
          P("M 320 250 L 480 250", INK, 4),
          T(400, 290, "magnesium oxide", GREEN, 18),
        ],
      },
      {
        narration: "Learn this pattern: most metals form 'metal oxide' when they burn.",
        rule: "Same pattern for many metals.",
        quizQ: "Write a word equation for magnesium burning.",
        quizA: "magnesium + oxygen → magnesium oxide.",
        draw: [
          T(400, 360, "metal + oxygen → metal oxide", SUB, 16),
        ],
      },
    ],
  },
]);

data["s7_8.4"] = scenesFrom("8.4 Metals and water", "Section 8.4: Metals + water", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "The most reactive metals",
        narration: "Potassium, sodium and calcium react with water to make a metal hydroxide and hydrogen gas.",
        rule: "metal + water → metal hydroxide + hydrogen",
        draw: [
          T(220, 220, "metal", ORANGE, 18),
          T(340, 220, "+", INK, 18),
          T(470, 220, "water", BLUE, 18),
        ],
      },
      {
        narration: "You see fizzing. The gas is hydrogen.",
        rule: "Fizz = hydrogen coming off.",
        quizQ: "What do the most reactive metals do in water?",
        quizA: "They react to make a metal hydroxide and hydrogen gas.",
        draw: [
          P("M 560 220 L 620 220", INK, 4),
          T(400, 300, "hydroxide + hydrogen", DARK_G, 18),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Potassium vs copper",
        narration: "Potassium reacts vigorously with water. Copper does not react with water in ordinary conditions.",
        rule: "K reacts, Cu does not.",
        draw: [
          R(140, 190, 230, 100, PALE_R, RED),
          T(255, 225, "potassium", RED, 18),
          T(255, 258, "vigorous fizz", SUB, 14),
          R(430, 190, 230, 100, PALE_B, BLUE),
          T(545, 225, "copper", BLUE, 18),
          T(545, 258, "no reaction", SUB, 14),
        ],
      },
      {
        narration: "The reactivity series puts potassium high and copper low. Water is a useful test of that.",
        rule: "Position in the series predicts the fizz.",
        quizQ: "Which is more reactive with water, potassium or copper?",
        quizA: "Potassium. It reacts vigorously. Copper does not react with water.",
        draw: [
          T(400, 350, "high series  →  reacts with water", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "The squeaky pop",
        narration: "Collect the gas and test with a lit splint. Hydrogen gives a squeaky pop.",
        rule: "Lit splint + pop = hydrogen.",
        draw: [
          C(280, 230, 40, PALE_B, BLUE),
          T(280, 230, "H₂", BLUE, 20),
          P("M 340 230 L 430 230", INK, 3),
          R(450, 190, 180, 80, PALE_O, ORANGE),
          T(540, 230, "pop!", ORANGE, 20),
        ],
      },
      {
        narration: "That test tells you the gas from metal + water (or acid) is hydrogen, not oxygen or carbon dioxide.",
        rule: "Pop test is for hydrogen only.",
        quizQ: "How can you test the gas given off?",
        quizA: "A lit splint gives a squeaky pop if the gas is hydrogen.",
        draw: [
          T(400, 350, "squeaky pop = hydrogen", DARK_G, 16),
        ],
      },
    ],
  },
]);

data["s7_8.5"] = scenesFrom("8.5 Metals and dilute acids", "Section 8.5: Metals + acids", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Salt and hydrogen",
        narration: "A metal that is reactive enough makes a salt and hydrogen with a dilute acid. Hydrochloric acid makes chlorides.",
        rule: "metal + acid → salt + hydrogen",
        draw: [
          T(200, 220, "metal", ORANGE, 18),
          T(320, 220, "+", INK, 18),
          T(450, 220, "acid", RED, 18),
        ],
      },
      {
        narration: "Sulfuric acid makes sulfates. Nitric acid is more complicated, but chlorides and sulfates are the Year 7 pattern.",
        rule: "The salt name follows the acid.",
        quizQ: "What is made when a metal reacts with a dilute acid?",
        quizA: "A salt and hydrogen. The salt depends on the acid: hydrochloric acid makes chlorides.",
        draw: [
          P("M 540 220 L 600 220", INK, 4),
          T(400, 300, "salt + hydrogen", DARK_G, 18),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Zinc and hydrochloric acid",
        narration: "zinc + hydrochloric acid → zinc chloride + hydrogen. Fizzing is the hydrogen leaving.",
        rule: "Chloride salt from hydrochloric acid.",
        draw: [
          T(400, 200, "zinc + hydrochloric acid", INK, 18),
          P("M 300 240 L 500 240", INK, 4),
          T(400, 280, "zinc chloride + hydrogen", GREEN, 18),
        ],
      },
      {
        narration: "Learn one full word equation so you can copy the pattern for magnesium or iron.",
        rule: "Same pattern, different metal name.",
        quizQ: "Write the word equation for zinc and hydrochloric acid.",
        quizA: "zinc + hydrochloric acid → zinc chloride + hydrogen.",
        draw: [
          T(400, 360, "metal chloride + hydrogen", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Why copper pipes?",
        narration: "Copper is low in the reactivity series, so it does not react with water or dilute acids in ordinary use.",
        rule: "Unreactive metal → safe for pipes.",
        draw: [
          R(150, 190, 220, 100, PALE_B, BLUE),
          T(260, 225, "copper", BLUE, 18),
          T(260, 258, "no fizz in water", SUB, 14),
          R(430, 190, 220, 100, PALE_O, ORANGE),
          T(540, 225, "magnesium", ORANGE, 18),
          T(540, 258, "would react", SUB, 14),
        ],
      },
      {
        narration: "Magnesium pipes would fizz and fail. Copper lasts.",
        rule: "Choose metal using the reactivity series.",
        quizQ: "Why is copper used for water pipes when magnesium would not be?",
        quizA: "Copper is low in the reactivity series, so it does not react with water or dilute acids in ordinary use.",
        draw: [
          T(400, 350, "low reactivity  →  pipes last", DARK_G, 16),
        ],
      },
    ],
  },
]);

data["s7_9.1"] = scenesFrom("9.1 Magnetic fields", "Section 9.1: Fields", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "The region around a magnet",
        narration: "A magnetic field is the space where a magnet can attract magnetic materials or push and pull other magnets.",
        rule: "Field = where magnetic forces act.",
        draw: [
          R(300, 220, 200, 70, PALE_R, RED),
          T(350, 255, "N", RED, 20),
          T(450, 255, "S", BLUE, 20),
        ],
      },
      {
        narration: "Iron, steel, nickel and cobalt are magnetic. Aluminium and copper are not.",
        rule: "Only some metals are magnetic.",
        quizQ: "What is a magnetic field?",
        quizA: "The region around a magnet where it can attract magnetic materials or push and pull other magnets.",
        draw: [
          T(220, 350, "iron, steel, Ni, Co", DARK_G, 16),
          T(580, 350, "not Al or Cu", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Magnetic materials",
        narration: "Iron, steel, nickel and cobalt. Most other metals, including aluminium and copper, are not magnetic.",
        rule: "Four magnetic metals to name.",
        draw: [
          R(120, 190, 130, 80, PALE_G, GREEN),
          T(185, 230, "iron", DARK_G, 16),
          R(270, 190, 130, 80, PALE_G, GREEN),
          T(335, 230, "steel", DARK_G, 16),
          R(420, 190, 130, 80, PALE_G, GREEN),
          T(485, 230, "nickel", DARK_G, 16),
          R(570, 190, 110, 80, PALE_G, GREEN),
          T(625, 230, "cobalt", DARK_G, 16),
        ],
      },
      {
        narration: "Steel is mostly iron, so it is magnetic too.",
        rule: "Steel counts because of iron.",
        quizQ: "Which materials are magnetic?",
        quizA: "Iron, steel, nickel and cobalt. Most other metals, such as aluminium and copper, are not.",
        draw: [
          T(400, 330, "aluminium and copper: no", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "What field lines show",
        narration: "Field lines show the direction a north pole would move: out from north, round, in to south.",
        rule: "Arrows: north → south outside the magnet.",
        draw: [
          R(320, 230, 160, 50, PALE_R, RED),
          T(360, 255, "N", RED, 16),
          T(440, 255, "S", BLUE, 16),
          P("M 330 230 Q 400 150 470 230", INK, 3),
          P("M 330 280 Q 400 360 470 280", INK, 3),
        ],
      },
      {
        narration: "Never draw lines crossing. Closer lines mean a stronger field.",
        rule: "No crossing. Tight packing = stronger.",
        quizQ: "What do field lines show?",
        quizA: "The direction a north pole would move, from the north pole of a magnet towards the south pole.",
        draw: [
          T(400, 400, "N to S outside", INK, 16),
        ],
      },
    ],
  },
]);

data["s7_9.2"] = scenesFrom("9.2 Earth as a magnet", "Section 9.2: Earth magnet", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Why a compass works",
        narration: "Earth has a magnetic field. A compass needle is a tiny magnet that lines up with that field.",
        rule: "Needle lines up with Earth's field.",
        draw: [
          C(400, 250, 80, PALE_G, GREEN, 4),
          T(400, 250, "Earth", DARK_G, 16),
          P("M 400 140 L 400 170", RED, 4),
          T(400, 120, "N", RED, 16),
        ],
      },
      {
        narration: "That is why the needle points north — it is following Earth's magnetic field.",
        rule: "Compass follows Earth, not a guess.",
        quizQ: "Why does a compass point north?",
        quizA: "Earth has a magnetic field. The compass needle lines up with it.",
        draw: [
          T(580, 250, "needle lines up", ORANGE, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Magnetic north is not exact",
        narration: "Magnetic north is not exactly at the geographic North Pole, and it slowly moves.",
        rule: "Poles wander over time.",
        draw: [
          C(400, 240, 70, PALE_B, BLUE, 3),
          T(400, 240, "Earth", BLUE, 14),
          T(400, 150, "geographic N", INK, 14),
          T(520, 180, "magnetic N", RED, 14),
        ],
      },
      {
        narration: "Map readers allow for that difference. It is not a trick question — they are different spots.",
        rule: "Two different 'norths'.",
        quizQ: "Is the magnetic pole exactly at the geographic North Pole?",
        quizA: "No. Magnetic north is in a different place and it slowly moves.",
        draw: [
          T(400, 360, "not the same point", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Which end points north?",
        narration: "The north-seeking pole of the needle points towards Earth's magnetic north.",
        rule: "North-seeking end points north.",
        draw: [
          R(300, 200, 200, 50, PALE_R, RED),
          T(350, 225, "N", RED, 18),
          T(450, 225, "S", BLUE, 18),
          T(400, 280, "compass needle", SUB, 14),
        ],
      },
      {
        narration: "That end is called north-seeking because of where it points, not because it is a planet.",
        rule: "Name it by the way it points.",
        quizQ: "Which pole of a compass needle points towards Earth’s magnetic north?",
        quizA: "The north-seeking pole of the needle.",
        draw: [
          T(400, 350, "north-seeking pole", RED, 18),
        ],
      },
    ],
  },
]);

data["s7_9.3"] = scenesFrom("9.3 Electromagnets", "Section 9.3: Electromagnets", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "A magnet you can switch",
        narration: "Pass a current through a coil of wire, usually wound on an iron core, and you get an electromagnet.",
        rule: "Current + coil (+ iron core) = electromagnet.",
        draw: [
          R(280, 200, 240, 40, "#cbd5e1", INK),
          T(400, 220, "iron core", INK, 14),
          P("M 260 180 Q 400 140 540 180", BLUE, 4),
          P("M 260 260 Q 400 300 540 260", BLUE, 4),
          T(400, 330, "coil with current", BLUE, 16),
        ],
      },
      {
        narration: "Stop the current and the magnetism drops. That is the big difference from a permanent magnet.",
        rule: "Switch off the current → drop the load.",
        quizQ: "How do you make an electromagnet?",
        quizA: "Pass a current through a coil of wire, usually wound on an iron core.",
        draw: [
          T(400, 380, "on / off with a switch", GREEN, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Make it stronger",
        narration: "More turns of wire, or a larger current, make a stronger electromagnet. An iron core helps too.",
        rule: "More turns or more current → stronger.",
        draw: [
          R(140, 190, 200, 90, PALE_B, BLUE),
          T(240, 235, "more turns", BLUE, 16),
          R(460, 190, 200, 90, PALE_O, ORANGE),
          T(560, 235, "bigger current", ORANGE, 16),
        ],
      },
      {
        narration: "Do not change two things at once if you are testing which one matters.",
        rule: "One change at a time in a test.",
        quizQ: "Name two ways to make an electromagnet stronger.",
        quizA: "More turns of wire, or a larger current.",
        draw: [
          T(400, 340, "iron core also helps", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Why not a permanent magnet?",
        narration: "A scrapyard magnet must pick up a car, then drop it. An electromagnet can switch off. A bar magnet cannot.",
        rule: "On–off is the superpower.",
        draw: [
          R(150, 190, 220, 100, PALE_G, GREEN),
          T(260, 225, "electromagnet", DARK_G, 16),
          T(260, 258, "can drop the load", SUB, 14),
          R(430, 190, 220, 100, PALE_R, RED),
          T(540, 225, "bar magnet", RED, 16),
          T(540, 258, "always on", SUB, 14),
        ],
      },
      {
        narration: "Cranes, doorbells and relays use that switchable pull.",
        rule: "Useful wherever you need a temporary magnet.",
        quizQ: "Why is an electromagnet useful when a permanent magnet is not?",
        quizA: "It can be switched off by stopping the current, so it can pick up and then drop a load.",
        draw: [
          T(400, 350, "pick up  →  switch off  →  drop", INK, 16),
        ],
      },
    ],
  },
]);

data["s7_9.4"] = scenesFrom("9.4 Investigating electromagnets", "Section 9.4: Fair test", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Compare fairly",
        narration: "Count how many paper clips each electromagnet picks up. Change only one thing, such as the number of turns.",
        rule: "One independent variable.",
        draw: [
          R(160, 190, 200, 90, PALE_G, GREEN),
          T(260, 220, "change", DARK_G, 16),
          T(260, 252, "number of turns", GREEN, 14),
          R(440, 190, 200, 90, PALE_B, BLUE),
          T(540, 220, "measure", BLUE, 16),
          T(540, 252, "clips picked up", SUB, 14),
        ],
      },
      {
        narration: "That count is your dependent variable — the result you read.",
        rule: "Clips = the outcome.",
        quizQ: "How could you compare two electromagnets fairly?",
        quizA: "Count how many paper clips each picks up, changing only one thing at a time, such as the number of turns.",
        draw: [
          T(400, 340, "same core, same current, same clips", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "What to keep the same",
        narration: "If you are testing turns, keep the core, the current, and how you count the clips the same.",
        rule: "Control variables stay fixed.",
        draw: [
          T(250, 210, "same core", INK, 16),
          T(400, 210, "same current", INK, 16),
          T(560, 210, "same clips", INK, 16),
        ],
      },
      {
        narration: "If two things change, you cannot tell which one made the magnet stronger.",
        rule: "Two changes ruin the test.",
        quizQ: "What should you keep the same?",
        quizA: "The core, the current, and how you count the clips, if you are testing the number of turns.",
        draw: [
          T(400, 310, "only turns change", GREEN, 18),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "The pattern to expect",
        narration: "More turns, or a bigger current, should pick up more clips — until the core cannot be magnetised any further.",
        rule: "Up then a limit.",
        draw: [
          P("M 180 340 L 180 160", INK, 3),
          P("M 180 340 L 620 340", INK, 3),
          T(120, 240, "clips", INK, 14),
          T(400, 380, "turns or current", INK, 14),
          P("M 180 320 Q 360 180 560 180", BLUE, 4),
        ],
      },
      {
        narration: "The graph rises, then may flatten. That flattening is the limit, not a broken magnet.",
        rule: "Expect more, then a plateau.",
        quizQ: "What pattern should you expect?",
        quizA: "More turns, or a bigger current, lets the electromagnet pick up more clips, up to a limit.",
        draw: [
          T(560, 160, "levels off", BLUE, 14),
        ],
      },
    ],
  },
]);

const keys = ["s7_7.1","s7_7.2","s7_7.3","s7_7.4","s7_8.1","s7_8.2","s7_8.3","s7_8.4","s7_8.5","s7_9.1","s7_9.2","s7_9.3","s7_9.4"];
const problems = audit(keys);
if (problems.length) {
  console.log(problems.join("\n"));
  console.log("PROBLEMS", problems.length);
  process.exit(1);
}

fs.writeFileSync(file, "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(data, null, 2) + ";\n");
console.log("Wrote Year 7 Science chapters 7–9 whiteboards");
