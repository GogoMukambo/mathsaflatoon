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

data["s7_4.1"] = scenesFrom("4.1 The Sonoran desert", "Section 4.1: Ecosystem", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "What is an ecosystem?",
        narration: "An ecosystem is living things plus the non-living bits of their place: water, soil, heat and light.",
        rule: "Living community + habitat = ecosystem.",
        draw: [
          R(140, 180, 220, 90, PALE_G, GREEN),
          T(250, 225, "living things", DARK_G, 16),
          T(400, 225, "+", INK, 22),
          R(440, 180, 220, 90, PALE_O, ORANGE),
          T(550, 225, "soil, water, climate", ORANGE, 14),
        ],
      },
      {
        narration: "The Sonoran desert is hot and dry. Plants and animals there have tricks to survive with little water.",
        rule: "Desert life is adapted to heat and drought.",
        quizQ: "What is an ecosystem?",
        quizA: "A community of living things together with the non-living parts of their habitat, such as water, soil and climate.",
        draw: [
          R(200, 310, 400, 60, PALE_O, ORANGE),
          T(400, 340, "Sonoran desert: hot and dry", ORANGE, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "How desert plants cope",
        narration: "A waxy skin cuts water loss. Deep or wide roots find water. Fleshy stems store it.",
        rule: "Wax, roots, or stored water.",
        draw: [
          R(120, 190, 170, 90, PALE_G, GREEN),
          T(205, 235, "waxy skin", DARK_G, 16),
          R(315, 190, 170, 90, PALE_B, BLUE),
          T(400, 235, "deep roots", BLUE, 16),
          R(510, 190, 170, 90, PALE_O, ORANGE),
          T(595, 235, "store water", ORANGE, 16),
        ],
      },
      {
        narration: "A cactus is a classic example: spines instead of leaves, and a fat stem full of water.",
        rule: "Less leaf surface means less drying out.",
        quizQ: "Give one way a desert plant survives little water.",
        quizA: "A waxy surface, deep or wide roots, or fleshy tissue that stores water.",
        draw: [
          T(400, 340, "cactus: fat stem, tiny spines", DARK_G, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Night-time animals",
        narration: "Many desert animals hunt or feed at night, when it is cooler.",
        rule: "Night activity saves water.",
        draw: [
          C(200, 200, 28, PALE_O, ORANGE),
          T(200, 200, "Sun", ORANGE, 14),
          T(200, 250, "hot day", SUB, 14),
          C(560, 200, 28, PALE_P, PURPLE),
          T(560, 200, "Moon", PURPLE, 14),
          T(560, 250, "cool night", SUB, 14),
        ],
      },
      {
        narration: "Cooler air means they sweat or pant less, so they keep more water in their bodies.",
        rule: "Less heat → less water lost.",
        quizQ: "Why are desert animals often active at night?",
        quizA: "It is cooler, so they lose less water.",
        draw: [
          T(400, 340, "night work  →  less drying out", BLUE, 16),
        ],
      },
    ],
  },
]);

data["s7_4.2"] = scenesFrom("4.2 Different ecosystems", "Section 4.2: Habitats", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Why ecosystems differ",
        narration: "Climate, soil and water decide which species can live there. A rainforest is not like a desert.",
        rule: "Place shapes the community.",
        draw: [
          R(130, 180, 230, 110, PALE_G, GREEN),
          T(245, 215, "rainforest", DARK_G, 18),
          T(245, 250, "wet, many species", SUB, 14),
          R(440, 180, 230, 110, PALE_O, ORANGE),
          T(555, 215, "desert", ORANGE, 18),
          T(555, 250, "dry, fewer species", SUB, 14),
        ],
      },
      {
        narration: "Same idea everywhere: the living list matches what the place can supply.",
        rule: "Different places → different communities.",
        quizQ: "What makes two ecosystems different?",
        quizA: "Climate, soil, water and the species that can live there.",
        draw: [
          T(400, 350, "climate + soil + water + species", INK, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Habitat",
        narration: "A habitat is the address of an organism: the place that gives it food, water, shelter and space.",
        rule: "Habitat = where it lives and what it needs.",
        draw: [
          R(220, 190, 360, 100, PALE_B, BLUE),
          T(400, 225, "habitat", BLUE, 20),
          T(400, 260, "food · water · shelter", SUB, 16),
        ],
      },
      {
        narration: "One ecosystem can contain many habitats — a pond, a tree, and leaf litter in the same wood.",
        rule: "Ecosystem is bigger than one habitat.",
        quizQ: "What is a habitat?",
        quizA: "The place where an organism lives, and which provides what it needs.",
        draw: [
          T(400, 350, "wood = many habitats inside", DARK_G, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Food web, not one chain",
        narration: "A food chain is one path. A food web shows that most animals eat, or are eaten by, more than one species.",
        rule: "Webs are more realistic than single chains.",
        draw: [
          T(400, 180, "plant", GREEN, 16),
          P("M 400 200 L 280 260", INK, 3),
          P("M 400 200 L 520 260", INK, 3),
          T(250, 280, "insect", ORANGE, 16),
          T(550, 280, "snail", ORANGE, 16),
          P("M 280 300 L 400 350", INK, 3),
          P("M 520 300 L 400 350", INK, 3),
          T(400, 375, "bird", RED, 16),
        ],
      },
      {
        narration: "If one food disappears, another link may still feed that animal. A single chain hides that.",
        rule: "Many links make the system more stable.",
        quizQ: "Why does a food web describe an ecosystem better than one food chain?",
        quizA: "Most organisms eat, or are eaten by, more than one species.",
        draw: [
        ],
      },
    ],
  },
]);

data["s7_4.3"] = scenesFrom("4.3 Intruders in an ecosystem", "Section 4.3: Invasive species", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Invasive species",
        narration: "An invasive species is brought to a place where it does not naturally live, then spreads and causes harm.",
        rule: "New + spreading + harmful = invasive.",
        draw: [
          R(160, 180, 200, 90, PALE_G, GREEN),
          T(260, 225, "native species", DARK_G, 16),
          P("M 380 225 L 440 225", RED, 4),
          R(450, 180, 200, 90, PALE_R, RED),
          T(550, 225, "intruder", RED, 18),
        ],
      },
      {
        narration: "It may eat native animals, grab their food, or change the habitat so locals cannot cope.",
        rule: "Intruders can smash the old food web.",
        quizQ: "What is an invasive species?",
        quizA: "A species introduced to a place where it does not naturally live, and which spreads and harms the species already there.",
        draw: [
          T(400, 330, "eat · compete · change habitat", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Why they boom",
        narration: "In the new place there may be no predators or diseases that used to keep the numbers down.",
        rule: "No natural enemies → rapid increase.",
        draw: [
          R(200, 180, 400, 80, PALE_O, ORANGE),
          T(400, 220, "plenty of food, few enemies", ORANGE, 18),
        ],
      },
      {
        narration: "With food and no check, the population can explode. Native species cannot keep up.",
        rule: "Uncontrolled growth harms locals.",
        quizQ: "Why can an intruder increase very quickly?",
        quizA: "It may have no predators or diseases in the new place, and plenty of food.",
        draw: [
          T(400, 320, "numbers shoot up", RED, 18),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Damage they cause",
        narration: "They can eat native species, outcompete them for food, or change soil and water so locals die out.",
        rule: "Harm can be eating, competing, or changing the place.",
        draw: [
          R(120, 190, 170, 90, PALE_R, RED),
          T(205, 235, "eat natives", RED, 16),
          R(315, 190, 170, 90, PALE_O, ORANGE),
          T(400, 235, "steal food", ORANGE, 16),
          R(510, 190, 170, 90, PALE_P, PURPLE),
          T(595, 235, "change place", PURPLE, 14),
        ],
      },
      {
        narration: "That is why people try to stop invasive plants and animals arriving, or remove them early.",
        rule: "Prevention is easier than clean-up.",
        quizQ: "Name one damage an invasive species can cause.",
        quizA: "It can eat native species, compete for food, or change the habitat.",
        draw: [
          T(400, 340, "stop them arriving if you can", SUB, 16),
        ],
      },
    ],
  },
]);

data["s7_4.4"] = scenesFrom("4.4 Bioaccumulation", "Section 4.4: Poisons in food chains", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Poison that builds up",
        narration: "Some chemicals are not broken down. Each animal keeps them in its body. That build-up is bioaccumulation.",
        rule: "Poison stays and adds up.",
        draw: [
          R(140, 200, 140, 50, PALE_G, GREEN),
          T(210, 225, "tiny dose", DARK_G, 14),
          P("M 290 225 L 340 225", INK, 3),
          R(350, 190, 140, 70, PALE_O, ORANGE),
          T(420, 225, "more", ORANGE, 16),
          P("M 500 225 L 550 225", INK, 3),
          R(560, 180, 140, 90, PALE_R, RED),
          T(630, 225, "huge dose", RED, 16),
        ],
      },
      {
        narration: "Animals higher in the food chain eat many contaminated animals, so they get the biggest dose.",
        rule: "Top of the chain = most poison.",
        quizQ: "What is bioaccumulation?",
        quizA: "A poison that is not broken down builds up in a body. Animals higher in the food chain get a larger dose.",
        draw: [
          T(400, 340, "plant → insect → fish → bird", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Why top predators suffer",
        narration: "A bird of prey eats many fish. Each fish already holds poison from many insects.",
        rule: "Doses add at every meal.",
        draw: [
          T(200, 220, "many insects", GREEN, 16),
          T(400, 220, "several fish", BLUE, 16),
          T(600, 220, "one hawk", RED, 16),
          P("M 270 220 L 330 220", INK, 3),
          P("M 470 220 L 530 220", INK, 3),
        ],
      },
      {
        narration: "The hawk ends up with far more poison than was ever in the water or the plants.",
        rule: "Top predator collects the lot.",
        quizQ: "Why is the top predator often most affected?",
        quizA: "It eats many contaminated animals, so the poison adds up.",
        draw: [
          T(400, 320, "small in water  →  deadly in the hawk", RED, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Harmless in water?",
        narration: "A chemical can look weak in a river. After three steps of the food chain it can be strong enough to harm birds.",
        rule: "Concentration rises at each step.",
        draw: [
          R(150, 190, 160, 80, PALE_B, BLUE),
          T(230, 230, "water: low", BLUE, 16),
          R(500, 190, 160, 80, PALE_R, RED),
          T(580, 230, "bird: high", RED, 16),
        ],
      },
      {
        narration: "That is why we worry about pesticides and metals even when the water test looks 'almost clean'.",
        rule: "Food-chain concentrating is the danger.",
        quizQ: "Why can a chemical that seems harmless in water still harm birds?",
        quizA: "It becomes much more concentrated at each step of the food chain.",
        draw: [
          T(400, 340, "each step multiplies the dose", SUB, 16),
        ],
      },
    ],
  },
]);

data["s7_5.1"] = scenesFrom("5.1 Structure of the atom", "Section 5.1: Atoms", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Inside an atom",
        narration: "The nucleus in the middle holds protons and neutrons. Electrons move in shells around it.",
        rule: "Nucleus + electron shells.",
        draw: [
          C(400, 250, 28, PALE_O, ORANGE, 4),
          T(400, 250, "nucleus", ORANGE, 12),
          C(400, 250, 90, "none", BLUE, 2),
          C(400, 250, 140, "none", PURPLE, 2),
          C(490, 250, 8, PALE_B, BLUE),
          C(310, 250, 8, PALE_B, BLUE),
        ],
      },
      {
        narration: "Protons have a plus charge. Electrons have a minus charge. Neutrons are neutral.",
        rule: "Proton +, electron −, neutron 0.",
        quizQ: "What is inside an atom?",
        quizA: "A nucleus of protons and neutrons, with electrons in shells around it.",
        draw: [
          T(180, 180, "electrons", BLUE, 16),
          T(620, 180, "in shells", PURPLE, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Which particle names the element?",
        narration: "The number of protons decides what element it is. Carbon always has 6 protons.",
        rule: "Proton number = element.",
        draw: [
          C(400, 230, 50, PALE_O, ORANGE),
          T(400, 230, "protons", ORANGE, 16),
        ],
      },
      {
        narration: "If you change the proton number, you get a different element. Neutrons can vary without changing the element.",
        rule: "Same protons = same element.",
        quizQ: "Which particle decides the element?",
        quizA: "The proton. Every atom of an element has the same number of protons.",
        draw: [
          T(400, 340, "6 protons  →  carbon", DARK_G, 18),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Mass number",
        narration: "Mass number is protons plus neutrons. Electrons are too light to count.",
        rule: "mass number = protons + neutrons",
        draw: [
          T(250, 220, "8 protons", ORANGE, 18),
          T(400, 220, "+", INK, 20),
          T(560, 220, "8 neutrons", BLUE, 18),
        ],
      },
      {
        narration: "8 + 8 = 16. So this atom has mass number 16. (That is an oxygen atom.)",
        rule: "Add the two heavy particles.",
        quizQ: "An atom has 8 protons and 8 neutrons. What is its mass number?",
        quizA: "16. Mass number is protons plus neutrons.",
        draw: [
          R(250, 290, 300, 60, PALE_G, GREEN),
          T(400, 320, "mass number 16", DARK_G, 20),
        ],
      },
    ],
  },
]);

data["s7_5.2"] = scenesFrom("5.2 Purity", "Section 5.2: Purity", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Pure in chemistry",
        narration: "Pure means one substance only — not a mixture. Pure water is just H₂O, no extra salts.",
        rule: "Pure = a single substance.",
        draw: [
          R(140, 180, 220, 100, PALE_G, GREEN),
          T(250, 215, "pure", DARK_G, 18),
          T(250, 250, "one substance", SUB, 14),
          R(440, 180, 220, 100, PALE_O, ORANGE),
          T(550, 215, "mixture", ORANGE, 18),
          T(550, 250, "two or more mixed", SUB, 14),
        ],
      },
      {
        narration: "A pure substance melts and boils at a sharp, fixed temperature. Mixtures usually do not.",
        rule: "Sharp melting point → likely pure.",
        quizQ: "What does pure mean in chemistry?",
        quizA: "A single substance, not a mixture. Pure substances melt and boil at fixed temperatures.",
        draw: [
          T(400, 340, "fixed melting point", GREEN, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Impure melting",
        narration: "Impurities usually lower the melting point and make it melt over a range, not at one temperature.",
        rule: "Impure: lower and smeared melting point.",
        draw: [
          R(150, 190, 220, 90, PALE_G, GREEN),
          T(260, 220, "pure", DARK_G, 16),
          T(260, 250, "one temperature", SUB, 14),
          R(430, 190, 220, 90, PALE_R, RED),
          T(540, 220, "impure", RED, 16),
          T(540, 250, "melts over a range", SUB, 14),
        ],
      },
      {
        narration: "Chemists use melting point as a quick purity check.",
        rule: "Range = warning of impurities.",
        quizQ: "How can a melting point show that a sample is impure?",
        quizA: "Impurities usually lower the melting point and make it melt over a range of temperatures.",
        draw: [
          T(400, 340, "smeared melt  →  not pure", ORANGE, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Is air pure?",
        narration: "Clean air is still a mixture: mostly nitrogen and oxygen, plus argon, carbon dioxide and water vapour.",
        rule: "Air is a mixture, not a pure substance.",
        draw: [
          R(120, 190, 140, 80, PALE_B, BLUE),
          T(190, 230, "N₂ 78%", BLUE, 16),
          R(280, 190, 140, 80, PALE_G, GREEN),
          T(350, 230, "O₂ 21%", GREEN, 16),
          R(440, 190, 140, 80, PALE_O, ORANGE),
          T(510, 230, "Ar", ORANGE, 16),
          R(600, 190, 80, 80, PALE_P, PURPLE),
          T(640, 230, "CO₂", PURPLE, 14),
        ],
      },
      {
        narration: "Filtering dust does not make air a single substance. 'Clean' is not the same as 'pure' in chemistry.",
        rule: "Clean ≠ chemically pure.",
        quizQ: "Is clean air a pure substance?",
        quizA: "No. It is a mixture of nitrogen, oxygen, argon, carbon dioxide and other gases.",
        draw: [
          T(400, 330, "mixture of gases", INK, 18),
        ],
      },
    ],
  },
]);

data["s7_5.3"] = scenesFrom("5.3 Weather and climate", "Section 5.3: Weather vs climate", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Weather is today",
        narration: "Weather is what you get this afternoon: rain, wind, sun, temperature.",
        rule: "Weather = day-to-day conditions.",
        draw: [
          C(220, 220, 36, PALE_O, ORANGE),
          T(220, 220, "sun", ORANGE, 16),
          C(400, 220, 36, PALE_B, BLUE),
          T(400, 220, "rain", BLUE, 16),
          C(580, 220, 36, SUB, INK),
          T(580, 220, "wind", INK, 16),
        ],
      },
      {
        narration: "Climate is the average weather of a place over many years — decades, not days.",
        rule: "Climate = long-term average.",
        quizQ: "What is the difference between weather and climate?",
        quizA: "Weather is the day-to-day conditions. Climate is the average weather of a place over many years.",
        draw: [
          R(200, 310, 400, 60, PALE_G, GREEN),
          T(400, 340, "climate: years of weather added up", DARK_G, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "A weather report",
        narration: "Reports talk about temperature, rainfall, wind, cloud and sunshine.",
        rule: "Those five are the usual weather measures.",
        draw: [
          T(200, 210, "temperature", ORANGE, 16),
          T(400, 210, "rainfall", BLUE, 16),
          T(600, 210, "wind", INK, 16),
          T(280, 270, "cloud", SUB, 16),
          T(520, 270, "sunshine", ORANGE, 16),
        ],
      },
      {
        narration: "Climate uses the same ideas, but averaged over a long time for that place.",
        rule: "Same ingredients, longer timescale.",
        quizQ: "Name three things a weather report describes.",
        quizA: "Temperature, rainfall, wind, cloud and sunshine.",
        draw: [
          T(400, 350, "today vs 30-year average", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "A cold week",
        narration: "One cold week cannot disprove a warming climate. Climate is the long average, not a single spell.",
        rule: "One week is weather, not climate.",
        draw: [
          R(150, 190, 220, 100, PALE_B, BLUE),
          T(260, 225, "this week", BLUE, 16),
          T(260, 258, "cold snap", SUB, 14),
          R(430, 190, 220, 100, PALE_R, RED),
          T(540, 225, "30 years", RED, 16),
          T(540, 258, "average trend", SUB, 14),
        ],
      },
      {
        narration: "You need many years of data to talk about climate changing.",
        rule: "Look at the long run, not one headline.",
        quizQ: "Why can a cold week not, by itself, disprove a warming climate?",
        quizA: "Climate is a long-term average. One week is weather.",
        draw: [
          T(400, 350, "weather ≠ climate", INK, 18),
        ],
      },
    ],
  },
]);

data["s7_5.4"] = scenesFrom("5.4 Climate and ice ages", "Section 5.4: Ice ages", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "What is an ice age?",
        narration: "An ice age is a long period when huge ice sheets cover much more of Earth than they do today.",
        rule: "Ice age = long, extra ice cover.",
        draw: [
          C(400, 240, 80, PALE_B, BLUE, 4),
          T(400, 230, "Earth", BLUE, 16),
          T(400, 258, "more ice", BLUE, 14),
        ],
      },
      {
        narration: "It is not one winter. It lasts thousands of years.",
        rule: "Ice ages last far longer than a season.",
        quizQ: "What is an ice age?",
        quizA: "A long period when large ice sheets cover much more of the Earth than they do today.",
        draw: [
          T(400, 360, "thousands of years", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Evidence in the rocks",
        narration: "Glaciers scratch rock as they grind past. When ice melts it dumps piles of mixed rock.",
        rule: "Scratches and dumped rock record old ice.",
        draw: [
          R(180, 200, 200, 80, "#e2e8f0", SUB),
          T(280, 240, "scratched rock", INK, 16),
          R(420, 200, 200, 80, PALE_O, ORANGE),
          T(520, 240, "piles of debris", ORANGE, 16),
        ],
      },
      {
        narration: "Those clues show ice once sat where it is now green fields.",
        rule: "Landforms remember ice ages.",
        quizQ: "Give one piece of evidence for past ice ages.",
        quizA: "Rocks scratched by glaciers, or piles of rock left when ice melted.",
        draw: [
          T(400, 340, "ice was here — even if it has gone", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Not just once",
        narration: "Earth has had several cold glacial periods with warmer gaps between them.",
        rule: "Many ice ages, not a single event.",
        draw: [
          P("M 160 280 Q 250 160 340 280 T 520 280 T 700 220", BLUE, 4),
          T(250, 320, "cold", BLUE, 14),
          T(400, 200, "warmer gap", ORANGE, 14),
          T(580, 320, "cold again", BLUE, 14),
        ],
      },
      {
        narration: "We live in a warmer gap. Ice ages have come and gone more than once.",
        rule: "The pattern repeats.",
        quizQ: "Have ice ages happened only once?",
        quizA: "No. Earth has had several cold glacial periods and warmer gaps between them.",
        draw: [
          T(400, 380, "repeated glacials and interglacials", SUB, 14),
        ],
      },
    ],
  },
]);

data["s7_5.5"] = scenesFrom("5.5 Atmosphere and climate", "Section 5.5: Atmosphere", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "The greenhouse blanket",
        narration: "Greenhouse gases such as CO₂ and methane trap some of the heat Earth radiates, so the surface stays warmer.",
        rule: "These gases keep heat in.",
        draw: [
          C(160, 140, 24, PALE_O, ORANGE),
          T(160, 140, "Sun", ORANGE, 12),
          P("M 180 160 L 300 300", ORANGE, 3),
          P("M 140 340 L 660 340", GREEN, 6),
          T(400, 370, "Earth's surface", DARK_G, 16),
        ],
      },
      {
        narration: "Without that blanket, Earth would be much colder. Extra gas thickens the blanket.",
        rule: "More greenhouse gas → more trapped heat.",
        quizQ: "How does the atmosphere affect climate?",
        quizA: "Greenhouse gases such as carbon dioxide and methane trap some of the heat that Earth radiates, so the surface stays warmer.",
        draw: [
          P("M 150 200 L 650 200", BLUE, 3, null, "8,6"),
          T(400, 178, "greenhouse gas layer", BLUE, 16),
          T(580, 270, "heat trapped", RED, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "What dry air is made of",
        narration: "Nitrogen is about 78%. Oxygen is about 21%. The rest is argon, carbon dioxide and tiny traces.",
        rule: "N₂ and O₂ dominate dry air.",
        draw: [
          R(150, 190, 220, 100, PALE_B, BLUE),
          T(260, 225, "nitrogen", BLUE, 18),
          T(260, 258, "about 78%", SUB, 16),
          R(430, 190, 220, 100, PALE_G, GREEN),
          T(540, 225, "oxygen", GREEN, 18),
          T(540, 258, "about 21%", SUB, 16),
        ],
      },
      {
        narration: "Carbon dioxide is only a small fraction, but it is a strong greenhouse gas.",
        rule: "A small % of CO₂ still matters.",
        quizQ: "Name the two most abundant gases in dry air.",
        quizA: "Nitrogen (about 78%) and oxygen (about 21%).",
        draw: [
          T(400, 350, "CO₂ is small but powerful", ORANGE, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Adding extra CO₂",
        narration: "More carbon dioxide means more of the outgoing heat is trapped, so average temperature tends to rise.",
        rule: "Extra CO₂ → extra warming.",
        draw: [
          R(200, 190, 400, 80, PALE_R, RED),
          T(400, 230, "more CO₂  →  more trapped heat", RED, 16),
        ],
      },
      {
        narration: "That is the link between the atmosphere and a warming climate.",
        rule: "The blanket gets thicker.",
        quizQ: "Why does adding carbon dioxide tend to warm the climate?",
        quizA: "More of the outgoing heat is trapped in the atmosphere.",
        draw: [
          T(400, 330, "thicker blanket, warmer Earth", INK, 16),
        ],
      },
    ],
  },
]);

data["s7_6.1"] = scenesFrom("6.1 Reflection", "Section 6.1: Reflection", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "The law of reflection",
        narration: "When a light ray bounces off a mirror, the angle in equals the angle out. Both are measured from the normal.",
        rule: "angle of incidence = angle of reflection",
        draw: [
          P("M 200 360 L 600 360", INK, 5),
          P("M 400 360 L 400 140", SUB, 2, null, "6,5"),
          T(430, 160, "normal", SUB, 14),
          P("M 220 220 L 400 360", ORANGE, 4),
          P("M 400 360 L 580 220", BLUE, 4),
        ],
      },
      {
        narration: "The normal is a line at 90° to the surface, drawn where the ray hits.",
        rule: "Measure from the normal, not the mirror.",
        quizQ: "State the law of reflection.",
        quizA: "The angle of incidence equals the angle of reflection. Both angles are measured from the normal.",
        draw: [
          T(250, 180, "i", ORANGE, 18),
          T(550, 180, "r", BLUE, 18),
          T(400, 400, "i = r", DARK_G, 18),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "The normal",
        narration: "Always draw the normal first. Angles without it are the wrong ones.",
        rule: "Normal is 90° to the surface.",
        draw: [
          P("M 180 320 L 620 320", INK, 5),
          P("M 400 320 L 400 150", GREEN, 3, null, "6,5"),
          T(470, 200, "90° to the mirror", GREEN, 16),
        ],
      },
      {
        narration: "i and r sit on either side of that dashed line.",
        rule: "Normal splits the two equal angles.",
        quizQ: "What is the normal?",
        quizA: "A line at 90° to the surface, drawn where the ray hits.",
        draw: [
          T(400, 380, "draw this line first", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Mirror vs crumpled foil",
        narration: "A flat mirror reflects rays in an orderly way, so you see a clear image.",
        rule: "Smooth surface → regular reflection.",
        draw: [
          P("M 160 280 L 360 280", INK, 5),
          P("M 200 180 L 260 280", ORANGE, 3),
          P("M 260 280 L 320 180", ORANGE, 3),
          T(260, 330, "flat mirror", INK, 16),
        ],
      },
      {
        narration: "Crumpled foil is rough. Rays scatter in all directions, so the image smears.",
        rule: "Rough surface → scattered light, no clear image.",
        quizQ: "Why can you see a clear image in a flat mirror but not in a crumpled sheet of foil?",
        quizA: "A flat mirror reflects rays in a regular way. A rough surface scatters them.",
        draw: [
          P("M 480 260 Q 520 240 560 270 T 640 250", INK, 4),
          P("M 500 170 L 530 255", ORANGE, 3),
          P("M 540 255 L 620 160", BLUE, 3),
          T(560, 330, "scattered", ORANGE, 16),
        ],
      },
    ],
  },
]);

data["s7_6.2"] = scenesFrom("6.2 Refraction", "Section 6.2: Refraction", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Light changes direction",
        narration: "Refraction is the bend when light goes from one transparent material into another, because its speed changes.",
        rule: "Speed change → direction change.",
        draw: [
          R(400, 160, 250, 220, PALE_B, BLUE),
          T(525, 200, "glass", BLUE, 16),
          P("M 160 140 L 400 240", ORANGE, 4),
          P("M 400 240 L 600 340", ORANGE, 4),
        ],
      },
      {
        narration: "Air to glass: light slows down and bends towards the normal.",
        rule: "Into a slower material → towards the normal.",
        quizQ: "What is refraction?",
        quizA: "The change in direction of light when it passes from one transparent material into another, because its speed changes.",
        draw: [
          P("M 400 160 L 400 380", SUB, 2, null, "5,4"),
          T(220, 200, "air", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Air into glass",
        narration: "The ray in air hits the surface. Inside glass it is closer to the normal because it has slowed.",
        rule: "Air → glass: bend towards the normal.",
        draw: [
          P("M 180 160 L 400 260", ORANGE, 4),
          P("M 400 260 L 560 360", ORANGE, 4),
          P("M 400 140 L 400 400", SUB, 2, null, "5,4"),
          T(400, 120, "normal", SUB, 14),
          T(220, 300, "air", INK, 16),
          T(560, 240, "glass", BLUE, 16),
        ],
      },
      {
        narration: "Leaving glass into air, it speeds up and bends away from the normal.",
        rule: "Out into air → away from the normal.",
        quizQ: "Which way does a ray bend when it enters glass from air?",
        quizA: "Towards the normal, because it slows down.",
        draw: [
          T(400, 410, "slow down  →  towards", DARK_G, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "A straw that looks bent",
        narration: "Light from the underwater part of the straw refracts as it leaves the water.",
        rule: "Your brain assumes light travelled in a straight line.",
        draw: [
          R(250, 250, 300, 140, PALE_B, BLUE),
          T(400, 360, "water", BLUE, 14),
          P("M 400 140 L 400 250", ORANGE, 6),
          P("M 400 250 L 340 380", ORANGE, 6),
        ],
      },
      {
        narration: "The eye traces the ray back as if it were straight, so the straw looks broken at the surface.",
        rule: "Refraction tricks the eye.",
        quizQ: "Why does a straw look bent in a glass of water?",
        quizA: "Light from the straw refracts as it leaves the water, so the eye traces it back to the wrong place.",
        draw: [
          T(580, 200, "looks bent", ORANGE, 16),
        ],
      },
    ],
  },
]);

data["s7_6.3"] = scenesFrom("6.3 Making rainbows", "Section 6.3: Spectrum", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "White light is mixed",
        narration: "White light is a mixture of colours. A prism refracts each colour by a slightly different amount, so they spread out.",
        rule: "Different colours bend by different amounts.",
        draw: [
          P("M 140 240 L 280 240", INK, 6),
          T(180, 210, "white", INK, 16),
          P("M 280 180 L 360 180 L 340 320 L 260 320 Z", PALE_B, BLUE),
          T(310, 250, "prism", BLUE, 14),
        ],
      },
      {
        narration: "Violet bends most. Red bends least. You get a spectrum: red, orange, yellow, green, blue, indigo, violet.",
        rule: "Violet most, red least.",
        quizQ: "Why does a prism make a spectrum?",
        quizA: "White light is a mixture of colours. Each colour refracts by a slightly different amount, so they spread out.",
        draw: [
          P("M 360 200 L 620 160", RED, 3),
          P("M 360 230 L 620 230", GREEN, 3),
          P("M 360 260 L 620 300", PURPLE, 3),
          T(680, 160, "red", RED, 14),
          T(680, 230, "green", GREEN, 14),
          T(680, 300, "violet", PURPLE, 14),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Which colour bends most?",
        narration: "In glass, violet is refracted most. Red is refracted least.",
        rule: "Violet most, red least.",
        draw: [
          T(250, 220, "red  —  least bend", RED, 18),
          T(250, 270, "violet  —  most bend", PURPLE, 18),
        ],
      },
      {
        narration: "Remember the order with a phrase if it helps, but know the two ends: red and violet.",
        rule: "Spectrum runs red to violet.",
        quizQ: "Which colour is refracted most by a glass prism?",
        quizA: "Violet. Red is refracted least.",
        draw: [
          T(550, 245, "ROYGBIV", INK, 18),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Rainbows from raindrops",
        narration: "Sunlight hits a raindrop, refracts going in, reflects inside, then refracts coming out.",
        rule: "Drops act like tiny prisms plus a mirror.",
        draw: [
          C(400, 250, 70, PALE_B, BLUE, 4),
          T(400, 250, "drop", BLUE, 16),
          P("M 160 200 L 340 230", ORANGE, 3),
          T(180, 175, "sunlight", ORANGE, 14),
        ],
      },
      {
        narration: "Colours leave at slightly different angles, so you see a rainbow if the sun is behind you.",
        rule: "Sun behind you, rain in front.",
        quizQ: "Why do raindrops make a rainbow?",
        quizA: "Sunlight refracts and reflects inside the drops, and the colours leave at different angles.",
        draw: [
          P("M 460 220 L 640 160", RED, 3),
          P("M 460 280 L 640 340", PURPLE, 3),
          T(400, 370, "colours fan out", SUB, 16),
        ],
      },
    ],
  },
]);

data["s7_6.4"] = scenesFrom("6.4 Galaxies", "Section 6.4: Galaxies", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "A galaxy is huge",
        narration: "A galaxy is a vast collection of stars, gas and dust held together by gravity. The Sun lives in the Milky Way.",
        rule: "Galaxy = billions of stars bound by gravity.",
        draw: [
          C(400, 250, 12, PALE_O, ORANGE),
          C(340, 210, 6, PALE_O, ORANGE),
          C(460, 200, 6, PALE_O, ORANGE),
          C(330, 280, 6, PALE_O, ORANGE),
          C(470, 290, 6, PALE_O, ORANGE),
          C(380, 180, 5, PALE_O, ORANGE),
          C(430, 310, 5, PALE_O, ORANGE),
          T(400, 360, "Milky Way (side view idea)", SUB, 16),
        ],
      },
      {
        narration: "Our Solar System is just one star — the Sun — plus its planets, tucked inside that galaxy.",
        rule: "Solar System sits inside the Milky Way.",
        quizQ: "What is a galaxy?",
        quizA: "A huge collection of stars, gas and dust held together by gravity. The Sun is in the Milky Way.",
        draw: [
          T(400, 400, "Sun + planets = one tiny part", ORANGE, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Solar System vs galaxy",
        narration: "The Solar System is the Sun and the objects that orbit it. A galaxy contains billions of stars, each of which may have planets.",
        rule: "Solar System ≠ galaxy.",
        draw: [
          R(140, 180, 230, 110, PALE_O, ORANGE),
          T(255, 215, "Solar System", ORANGE, 16),
          T(255, 250, "one star + planets", SUB, 14),
          R(430, 180, 230, 110, PALE_P, PURPLE),
          T(545, 215, "galaxy", PURPLE, 16),
          T(545, 250, "billions of stars", SUB, 14),
        ],
      },
      {
        narration: "Do not mix them up in an exam — they are different scales.",
        rule: "Galaxy is vastly bigger.",
        quizQ: "Is the Solar System the same thing as a galaxy?",
        quizA: "No. The Solar System is one star and its planets, inside the Milky Way galaxy.",
        draw: [
          T(400, 350, "we live in both", INK, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Faint smudges",
        narration: "Distant galaxies look like faint smudges because they are enormously far away. Their light is dim and stars blur together.",
        rule: "Far away → faint and fuzzy.",
        draw: [
          C(250, 240, 8, PALE_O, ORANGE),
          T(250, 290, "nearby star: bright", ORANGE, 14),
          R(480, 210, 160, 60, "#e2e8f0", SUB),
          T(560, 240, "smudge", SUB, 16),
        ],
      },
      {
        narration: "Telescopes collect more light so those smudges turn into swirls of stars.",
        rule: "More light gathered → more detail.",
        quizQ: "Why do distant galaxies look like faint smudges?",
        quizA: "They are extremely far away, so their light is dim and the stars blur together.",
        draw: [
          T(400, 360, "distance hides the stars", SUB, 16),
        ],
      },
    ],
  },
]);

data["s7_6.5"] = scenesFrom("6.5 Rocks in space", "Section 6.5: Space rocks", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Asteroids and smaller pieces",
        narration: "Asteroids are rocky bodies that orbit the Sun, mostly between Mars and Jupiter. Smaller chips can head towards Earth.",
        rule: "Asteroids orbit; fragments can enter our air.",
        draw: [
          C(200, 230, 28, PALE_O, ORANGE),
          T(200, 230, "Sun", ORANGE, 14),
          C(400, 180, 10, SUB, INK),
          T(400, 150, "Mars", SUB, 12),
          C(520, 260, 14, "#cbd5e1", INK),
          T(520, 300, "asteroid", INK, 14),
          C(640, 200, 12, PALE_O, ORANGE),
          T(640, 170, "Jupiter", ORANGE, 12),
        ],
      },
      {
        narration: "A small piece that enters the atmosphere heats up and usually burns away.",
        rule: "Most space pebbles never hit the ground.",
        quizQ: "What are rocks in space?",
        quizA: "Asteroids are rocky bodies that orbit the Sun, mostly between Mars and Jupiter. Smaller pieces can enter Earth's atmosphere.",
        draw: [
          T(400, 370, "belt of rocks between Mars and Jupiter", SUB, 14),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "A streak in the sky",
        narration: "When a small space rock hits the atmosphere it heats up. You see a streak of light. Most of it burns away.",
        rule: "Streak = rock heating in the air.",
        draw: [
          P("M 180 160 L 520 300", ORANGE, 4, null, "8,6"),
          T(360, 200, "hot streak", ORANGE, 16),
          C(560, 320, 16, PALE_G, GREEN),
          T(560, 360, "Earth", DARK_G, 14),
        ],
      },
      {
        narration: "Only larger pieces that survive to the ground are meteorites.",
        rule: "Most burn up first.",
        quizQ: "What do you see when a small space rock enters the atmosphere?",
        quizA: "A streak of light as it heats up. Most of these pieces burn away before they reach the ground.",
        draw: [
          T(250, 340, "usually gone before impact", SUB, 14),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Do not mix the scales",
        narration: "The Solar System is the Sun and everything orbiting it. A galaxy is billions of stars.",
        rule: "Asteroids live in the Solar System, not 'in a galaxy' as the whole story.",
        draw: [
          R(150, 190, 220, 100, PALE_O, ORANGE),
          T(260, 225, "Solar System", ORANGE, 16),
          T(260, 258, "Sun, planets, rocks", SUB, 14),
          R(430, 190, 220, 100, PALE_P, PURPLE),
          T(540, 225, "galaxy", PURPLE, 16),
          T(540, 258, "billions of stars", SUB, 14),
        ],
      },
      {
        narration: "Exam trap: people call the Solar System a galaxy. It is not.",
        rule: "One star system vs a star city.",
        quizQ: "Is the Solar System the same as a galaxy?",
        quizA: "No. The Solar System is the Sun and the objects that orbit it. A galaxy contains billions of stars.",
        draw: [
          T(400, 350, "not the same scale", INK, 16),
        ],
      },
    ],
  },
]);

const keys = ["s7_4.1","s7_4.2","s7_4.3","s7_4.4","s7_5.1","s7_5.2","s7_5.3","s7_5.4","s7_5.5","s7_6.1","s7_6.2","s7_6.3","s7_6.4","s7_6.5"];
const problems = audit(keys);
if (problems.length) {
  console.log(problems.join("\n"));
  console.log("PROBLEMS", problems.length);
  process.exit(1);
}

fs.writeFileSync(file, "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(data, null, 2) + ";\n");
console.log("Wrote Year 7 Science chapters 4–6 whiteboards");
