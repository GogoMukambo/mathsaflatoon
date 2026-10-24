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

data["s8_7.1"] = scenesFrom("7.1 DNA, genes, chromosomes", "Section 7.1: DNA", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Russian dolls of information",
        narration: "DNA is the chemical recipe book. A gene is one recipe (for a protein). A chromosome is the whole cookbook, tightly packed in the nucleus.",
        rule: "DNA → gene → chromosome.",
        draw: [
          R(150, 200, 140, 70, PALE_B, BLUE),
          T(220, 235, "DNA", BLUE, 18),
          P("M 300 235 L 350 235", INK, 3),
          R(360, 200, 140, 70, PALE_G, GREEN),
          T(430, 235, "gene", DARK_G, 18),
          P("M 510 235 L 560 235", INK, 3),
          R(570, 190, 80, 90, PALE_P, PURPLE),
          T(610, 235, "chr", PURPLE, 16),
        ],
      },
      {
        narration: "Human body cells have 46 chromosomes (23 pairs). Egg and sperm have 23 so that 23+23 makes 46 again.",
        rule: "46 in body cells. 23 in gametes.",
        quizQ: "How do DNA, genes and chromosomes fit together?",
        quizA: "DNA stores information. A gene is a DNA section that codes for a protein. Chromosomes are packed DNA.",
        draw: [
          T(400, 340, "nucleus holds the cookbooks", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "What a gene actually does",
        narration: "A gene’s job is to code for a protein. The protein then helps decide a feature — pigment, enzyme, structure.",
        rule: "Gene → protein → characteristic.",
        draw: [
          T(200, 220, "gene", GREEN, 18),
          P("M 250 220 L 330 220", INK, 4),
          T(400, 220, "protein", ORANGE, 18),
          P("M 470 220 L 540 220", INK, 4),
          T(610, 220, "trait", BLUE, 18),
        ],
      },
      {
        narration: "Not every gene is switched on in every cell. Muscle and nerve cells read different pages of the same book.",
        rule: "Different cells use different genes.",
        quizQ: "How many chromosomes in a typical human body cell?",
        quizA: "46 (23 pairs). Gametes have 23.",
        draw: [
          T(400, 320, "same DNA, different switches", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Not all pages open",
        narration: "If every gene ran at once, every cell would try to be every tissue. Switches keep a liver cell a liver cell.",
        rule: "Genes can be on or off.",
        draw: [
          R(180, 190, 180, 100, PALE_O, ORANGE),
          T(270, 240, "muscle", ORANGE, 16),
          R(440, 190, 180, 100, PALE_B, BLUE),
          T(530, 240, "nerve", BLUE, 16),
        ],
      },
      {
        narration: "Same genome, different job. That is why clones of DNA still make many cell types.",
        rule: "Switching, not different recipe books.",
        quizQ: "Are all your cells’ genes switched on?",
        quizA: "No. Different cells use different genes.",
        draw: [
          T(400, 340, "same book, different chapters", SUB, 16),
        ],
      },
    ],
  },
]);

data["s8_7.2"] = scenesFrom("7.2 Gametes and inheritance", "Section 7.2: Inheritance", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Half from each parent",
        narration: "Sperm 23 + egg 23. The child is a shuffle, not a photocopy of mum or dad.",
        rule: "Half the chromosomes from each parent.",
        draw: [
          C(220, 230, 40, PALE_B, BLUE),
          T(220, 230, "23", BLUE, 18),
          T(220, 290, "sperm", SUB, 14),
          T(400, 230, "+", INK, 22),
          C(580, 230, 50, PALE_P, PURPLE),
          T(580, 230, "23", PURPLE, 18),
          T(580, 290, "egg", SUB, 14),
        ],
      },
      {
        narration: "Alleles are versions of the same gene — brown vs blue instructions on the same page.",
        rule: "Allele = version of a gene.",
        quizQ: "Why do children resemble both parents but are not identical to either?",
        quizA: "They inherit half their chromosomes from each parent, so they get a mix of alleles.",
        draw: [
          T(400, 360, "mix of alleles", GREEN, 16),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Dominant vs recessive",
        narration: "A dominant allele shows even if you have only one copy. Recessive needs two copies, like needing both keys.",
        rule: "Dominant: one copy enough. Recessive: two copies.",
        draw: [
          R(160, 190, 200, 90, PALE_O, ORANGE),
          T(260, 235, "B_  shows B", ORANGE, 16),
          R(440, 190, 200, 90, PALE_B, BLUE),
          T(540, 235, "bb  shows b", BLUE, 16),
        ],
      },
      {
        narration: "A Punnett square is a grid of possible allele combos — a probability sketch, not a promise of who is born.",
        rule: "Punnett = possible combinations.",
        quizQ: "What is an allele?",
        quizA: "A different version of the same gene.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "The four-box grid",
        narration: "One parent Bb, other bb. Two boxes Bb, two bb — about half and half, like flipping two coins.",
        rule: "Grid shows probabilities.",
        draw: [
          R(280, 160, 80, 80, PALE_O, ORANGE),
          T(320, 200, "B", ORANGE, 18),
          R(380, 160, 80, 80, PALE_B, BLUE),
          T(420, 200, "b", BLUE, 18),
          R(280, 260, 80, 80, PALE_O, ORANGE),
          T(320, 300, "Bb", ORANGE, 16),
          R(380, 260, 80, 80, PALE_B, BLUE),
          T(420, 300, "bb", BLUE, 16),
        ],
      },
      {
        narration: "Use it to work odds, not to guarantee a family of four will match the boxes.",
        rule: "Odds, not a family photo.",
        quizQ: "Why use a Punnett square?",
        quizA: "It shows possible allele combinations and helps you work out probabilities.",
        draw: [
          T(580, 250, "from other parent", SUB, 12),
        ],
      },
    ],
  },
]);

data["s8_7.3"] = scenesFrom("7.3 Variation", "Section 7.3: Variation", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Two mixers",
        narration: "We vary because of genes (alleles, mutations, mixing at fertilisation) and because of life (food, sun, training).",
        rule: "Genetic + environmental variation.",
        draw: [
          R(150, 190, 200, 100, PALE_G, GREEN),
          T(250, 240, "genes", DARK_G, 18),
          R(450, 190, 200, 100, PALE_O, ORANGE),
          T(550, 240, "environment", ORANGE, 16),
        ],
      },
      {
        narration: "Height is a slider (continuous). Blood group is a set of buckets (discontinuous).",
        rule: "Range vs distinct groups.",
        quizQ: "What causes variation in a species?",
        quizA: "Genetic differences and environmental differences.",
        draw: [
          T(250, 340, "height: a range", GREEN, 14),
          T(550, 340, "blood group: A, B, O", ORANGE, 14),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Why variation helps",
        narration: "If the world changes, some individuals may already have a useful feature. A clone army could all fail together.",
        rule: "Variation is a population’s backup plan.",
        draw: [
          C(220, 230, 20, PALE_G, GREEN),
          C(300, 210, 20, PALE_O, ORANGE),
          C(380, 240, 20, PALE_B, BLUE),
          C(460, 220, 20, PALE_P, PURPLE),
          T(340, 300, "not all the same", SUB, 16),
        ],
      },
      {
        narration: "Genes set a range for height; food and health decide where you land in that range.",
        rule: "Height is not genes only.",
        quizQ: "Continuous vs discontinuous variation?",
        quizA: "Continuous: a range, like height. Discontinuous: distinct groups, like blood group.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "The height trap",
        narration: "Two children with similar genes can end up different heights if one is poorly nourished. Environment writes on the genetic sketch.",
        rule: "Genes set a range. Life fills it in.",
        draw: [
          R(180, 190, 160, 120, PALE_G, GREEN),
          T(260, 230, "genes", DARK_G, 16),
          T(260, 265, "the range", SUB, 14),
          R(460, 190, 160, 120, PALE_O, ORANGE),
          T(540, 230, "food, health", ORANGE, 14),
          T(540, 265, "the height", SUB, 14),
        ],
      },
      {
        narration: "Exam: do not say height is ‘only genetic’.",
        rule: "Both matter.",
        quizQ: "Is height only genetic?",
        quizA: "No. Genes set a range, but nutrition and health strongly affect height reached.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_7.4"] = scenesFrom("7.4 Natural selection", "Section 7.4: Selection", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Not trying — just surviving",
        narration: "Some moths are already darker. On sooty trees they hide better, get eaten less, and have more babies. Dark alleles become common.",
        rule: "Useful variants reproduce more.",
        draw: [
          R(150, 180, 220, 110, "#1e293b", INK),
          C(200, 230, 14, "#0f172a", INK),
          T(260, 230, "dark lives", GREEN, 14),
          R(430, 180, 220, 110, PALE_O, ORANGE),
          C(480, 230, 14, "#1e293b", INK),
          T(560, 230, "dark spotted", RED, 14),
        ],
      },
      {
        narration: "The moth did not decide to change colour. The variation was already there (or a mutation). Selection is the filter.",
        rule: "Selection acts on who reproduces.",
        quizQ: "What is natural selection?",
        quizA: "Individuals with advantageous variations are more likely to survive and reproduce.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Three must-haves",
        narration: "You need variation, the feature must be inherited, and there must be a struggle (selection pressure).",
        rule: "Variation + inheritance + pressure.",
        draw: [
          R(130, 190, 160, 80, PALE_G, GREEN),
          T(210, 230, "vary", DARK_G, 16),
          R(320, 190, 160, 80, PALE_B, BLUE),
          T(400, 230, "inherit", BLUE, 16),
          R(510, 190, 160, 80, PALE_O, ORANGE),
          T(590, 230, "pressure", ORANGE, 16),
        ],
      },
      {
        narration: "Peppered moths: pollution blackened trees, dark moths survived better. When air cleaned, pale moths bounced back.",
        rule: "Classic example: peppered moths.",
        quizQ: "What must be true for natural selection to happen?",
        quizA: "Variation, inheritance of the feature, and differences in survival or reproduction.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Nobody ‘tries’ to adapt",
        narration: "Giraffes did not stretch their necks on purpose. Longer-neck variants ate more, had more calves, and the average neck crept up.",
        rule: "No trying. Filter on existing variation.",
        draw: [
          T(400, 220, "variation already there", GREEN, 18),
          T(400, 280, "filter = who has offspring", ORANGE, 16),
        ],
      },
      {
        narration: "If you write ‘the moth wanted to be darker’ you lose the mark. Say: darker moths were already there and survived better.",
        rule: "Do not write ‘wanted to adapt’.",
        quizQ: "Does an individual ‘try’ to adapt?",
        quizA: "No. The variation already exists. Selection acts on who reproduces.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_8.1"] = scenesFrom("8.1 Measuring rate", "Section 8.1: Rate", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "How fast is the fizz?",
        narration: "Rate is how quickly product appears or reactant vanishes — gas millilitres per second, or grams lost per second.",
        rule: "Rate = change ÷ time.",
        draw: [
          R(200, 180, 120, 140, PALE_B, BLUE),
          T(260, 250, "syringe", BLUE, 14),
          R(420, 200, 160, 100, PALE_O, ORANGE),
          T(500, 250, "balance", ORANGE, 14),
        ],
      },
      {
        narration: "Syringe: volume vs time. Balance: mass drops as gas escapes. Steeper graph = faster.",
        rule: "Steeper gradient = faster rate.",
        quizQ: "What is rate of reaction?",
        quizA: "How quickly reactants are used up or products form.",
        draw: [
          P("M 160 380 L 160 320 L 640 320", INK, 3),
          P("M 160 320 Q 300 200 500 200", GREEN, 4),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Read the slope",
        narration: "At the start the line is steep: lots of collisions. Later it flattens as reactants run out.",
        rule: "Rate often falls as reactants are used.",
        draw: [
          P("M 180 360 L 180 150", INK, 3),
          P("M 180 360 L 620 360", INK, 3),
          P("M 180 340 Q 320 180 580 200", BLUE, 4),
          T(400, 400, "time →", INK, 14),
        ],
      },
      {
        narration: "Repeat runs to spot a weird blob and take a mean. Science likes patterns, not one lucky fizz.",
        rule: "Repeats improve reliability.",
        quizQ: "Name two ways to follow a reaction that makes a gas.",
        quizA: "Gas syringe (volume vs time) or mass loss on a balance.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Why do it twice",
        narration: "One odd result might be a leaky bung. Two more runs show whether the story repeats.",
        rule: "Repeats catch anomalies.",
        draw: [
          R(160, 200, 140, 70, PALE_G, GREEN),
          T(230, 235, "run 1", DARK_G, 16),
          R(330, 200, 140, 70, PALE_G, GREEN),
          T(400, 235, "run 2", DARK_G, 16),
          R(500, 200, 140, 70, PALE_G, GREEN),
          T(570, 235, "run 3", DARK_G, 16),
        ],
      },
      {
        narration: "Mean of the good ones is your reported rate.",
        rule: "Mean after dropping a clear anomaly.",
        quizQ: "Why might you repeat the experiment?",
        quizA: "To spot anomalies and take a mean, so the pattern is more reliable.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_8.2"] = scenesFrom("8.2 Surface area", "Section 8.2: Surface", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Crumble it, speed it",
        narration: "A lump has a small skin. Powder is all skin. Collisions happen on surfaces, so powder fizzes faster.",
        rule: "More surface → more collisions per second.",
        draw: [
          R(200, 200, 80, 80, PALE_O, ORANGE),
          T(240, 300, "lump", ORANGE, 16),
          C(480, 210, 10, PALE_O, ORANGE),
          C(510, 240, 10, PALE_O, ORANGE),
          C(460, 250, 10, PALE_O, ORANGE),
          C(530, 220, 10, PALE_O, ORANGE),
          C(500, 270, 10, PALE_O, ORANGE),
          T(500, 310, "powder", ORANGE, 16),
        ],
      },
      {
        narration: "Collision theory: particles must hit with enough energy (activation energy) or they just bounce.",
        rule: "Hit hard enough, or no reaction.",
        quizQ: "Why do powders react faster than lumps?",
        quizA: "Smaller pieces have a larger surface area, so more collisions at the surface.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Flour can explode",
        narration: "Fine flammable dust mixed with air is a huge surface. One spark and a mill can blow. Same chemistry as the marble chips, scarier scale.",
        rule: "Dust + air + spark = danger.",
        draw: [
          C(280, 230, 8, PALE_O, ORANGE),
          C(320, 210, 8, PALE_O, ORANGE),
          C(360, 240, 8, PALE_O, ORANGE),
          C(400, 200, 8, PALE_O, ORANGE),
          C(440, 230, 8, PALE_O, ORANGE),
          T(360, 300, "dust in air", ORANGE, 16),
        ],
      },
      {
        narration: "Lab: same mass of marble, chips vs powder, same acid — powder wins the race.",
        rule: "Fair test: same mass, change surface only.",
        quizQ: "Collision theory in one line?",
        quizA: "Particles must collide with enough energy (activation energy) to react.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Chips or powder?",
        narration: "Same mass of marble in acid: powder has more skin in contact, so it is faster. Not because powder is ‘more chemical’.",
        rule: "Same mass, more surface, faster.",
        draw: [
          R(180, 200, 160, 90, PALE_B, BLUE),
          T(260, 245, "chips: slower", BLUE, 16),
          R(460, 200, 160, 90, PALE_G, GREEN),
          T(540, 245, "powder: faster", DARK_G, 16),
        ],
      },
      {
        narration: "Keep temperature and concentration the same or you have cheated the comparison.",
        rule: "Only surface area should change.",
        quizQ: "Same mass of marble: chips or powder in acid — which is faster?",
        quizA: "Powder, because of greater surface area.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_8.3"] = scenesFrom("8.3 Temperature and rate", "Section 8.3: Temperature", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Heat the dance floor",
        narration: "Hotter particles zip around, bump more often, and more of them smash hard enough to beat the activation energy.",
        rule: "Hotter → more successful collisions.",
        draw: [
          C(220, 240, 10, BLUE, BLUE),
          C(260, 210, 10, BLUE, BLUE),
          T(240, 300, "cool, slow", BLUE, 14),
          C(520, 220, 10, RED, RED),
          C(560, 250, 10, RED, RED),
          C(500, 260, 10, RED, RED),
          T(540, 310, "hot, fast", RED, 14),
        ],
      },
      {
        narration: "Activation energy is the minimum smash needed. Many collisions are too gentle or at a silly angle.",
        rule: "Not every bump works.",
        quizQ: "Why does heating usually speed a reaction?",
        quizA: "Particles move faster, collide more often, and more have energy above activation energy.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "The energy hurdle",
        narration: "Picture a fence. Only the fastest runners clear it. Heat makes more runners fast.",
        rule: "Activation energy = the fence.",
        draw: [
          P("M 180 300 L 180 200 L 620 200 L 620 300", INK, 3),
          T(400, 180, "activation energy", ORANGE, 16),
          T(300, 250, "too slow", BLUE, 14),
          T(520, 250, "makes it over", RED, 14),
        ],
      },
      {
        narration: "Fridge food: lower temperature, fewer successful spoilage reactions, milk lasts longer.",
        rule: "Cold slows spoilage chemistry.",
        quizQ: "What is activation energy?",
        quizA: "The minimum energy colliding particles need to react.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Why the fridge works",
        narration: "Bacteria still try, but their reaction rates drop in the cold. You bought time, not immortality for the leftovers.",
        rule: "Lower T → slower spoil reactions.",
        draw: [
          R(180, 190, 180, 100, PALE_B, BLUE),
          T(270, 240, "fridge", BLUE, 18),
          R(440, 190, 180, 100, PALE_O, ORANGE),
          T(530, 240, "warm kitchen", ORANGE, 16),
        ],
      },
      {
        narration: "Same food, different rate. Temperature is a dimmer switch on collisions.",
        rule: "Dimmer switch, not an on/off.",
        quizQ: "Why store some foods in a fridge?",
        quizA: "Lower temperature slows the reactions that make food spoil.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_8.4"] = scenesFrom("8.4 Concentration and rate", "Section 8.4: Concentration", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "A crowded room",
        narration: "More particles in the same volume means more bumps each second. Concentrated acid is a packed dance floor.",
        rule: "Higher concentration → more collisions.",
        draw: [
          C(200, 210, 8, BLUE, BLUE),
          C(240, 250, 8, BLUE, BLUE),
          T(220, 300, "dilute", BLUE, 16),
          C(500, 200, 8, RED, RED),
          C(530, 230, 8, RED, RED),
          C(480, 240, 8, RED, RED),
          C(550, 210, 8, RED, RED),
          C(510, 260, 8, RED, RED),
          T(520, 300, "concentrated", RED, 16),
        ],
      },
      {
        narration: "For gases, squeezing (higher pressure) is the same idea: more particles in the box, more hits.",
        rule: "Gas pressure is like concentration.",
        quizQ: "Why does a more concentrated solution often react faster?",
        quizA: "More particles in the same volume means more frequent successful collisions.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Keep the rest still",
        narration: "When testing concentration, lock temperature, surface area, how you start the clock, and volumes if they affect measuring.",
        rule: "Fair test: only concentration changes.",
        draw: [
          T(250, 210, "same T", INK, 16),
          T(400, 210, "same chips", INK, 16),
          T(560, 210, "same timing", INK, 16),
        ],
      },
      {
        narration: "Half the concentration often about halves the rate if that collision with acid is the bottleneck.",
        rule: "Roughly: half as crowded, half as fast.",
        quizQ: "What must you keep the same in a fair test of concentration?",
        quizA: "Temperature, surface area of any solid, and how you start timing.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Dilute to half",
        narration: "If other factors stay put, rate usually falls — often near half — because acid particles are harder to bump into.",
        rule: "Less crowded → fewer successful hits.",
        draw: [
          R(180, 200, 180, 90, PALE_R, RED),
          T(270, 245, "full strength", RED, 16),
          R(440, 200, 180, 90, PALE_B, BLUE),
          T(530, 245, "half strength", BLUE, 16),
        ],
      },
      {
        narration: "Not a law of nature that it is exactly half, but the direction is clear: more dilute, slower.",
        rule: "Direction matters more than the exact fraction.",
        quizQ: "If you dilute acid to half concentration, what happens to rate (roughly)?",
        quizA: "It usually falls, often to about half if other factors stay the same.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_9.1"] = scenesFrom("9.1 Parallel circuits", "Section 9.1: Parallel", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Separate lanes",
        narration: "Series is one loop. Parallel is a dual carriageway: each lamp has its own path from one battery terminal to the other.",
        rule: "Parallel = own branch each.",
        draw: [
          R(180, 200, 40, 24, PALE_O, ORANGE),
          T(200, 212, "+", ORANGE, 14),
          P("M 220 212 L 500 212", INK, 3),
          P("M 500 212 L 500 160 L 280 160 L 280 212", INK, 3),
          P("M 500 212 L 500 280 L 280 280 L 280 212", INK, 3),
          T(390, 145, "lamp", BLUE, 12),
          T(390, 305, "lamp", BLUE, 12),
        ],
      },
      {
        narration: "If one lamp blows, the other lane still runs. Houses are wired this way so one dead bulb does not black out the building.",
        rule: "One branch can fail; others stay on.",
        quizQ: "How is a parallel circuit different from series?",
        quizA: "In parallel, components sit on separate branches, each with its own path.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Series vs parallel failure",
        narration: "Series: one gap and the whole loop dies. Parallel: other branches ignore the broken one.",
        rule: "Series: all off. Parallel: others on.",
        draw: [
          R(160, 190, 200, 90, PALE_R, RED),
          T(260, 235, "series: all off", RED, 16),
          R(440, 190, 200, 90, PALE_G, GREEN),
          T(540, 235, "parallel: others on", DARK_G, 16),
        ],
      },
      {
        narration: "Draw two loops sharing the battery. Put a switch on a branch if you want that lamp independent.",
        rule: "Independent switches on branches.",
        quizQ: "What happens if one lamp blows in parallel?",
        quizA: "The other branches still work.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Why house lights are parallel",
        narration: "You can light the kitchen and leave the hall off. A blown lounge bulb does not kill the stairs lamp.",
        rule: "Independent rooms.",
        draw: [
          T(250, 220, "kitchen", ORANGE, 16),
          T(400, 220, "hall", BLUE, 16),
          T(550, 220, "lounge", GREEN, 16),
          T(400, 280, "each on its own branch", SUB, 16),
        ],
      },
      {
        narration: "That is everyday parallel wiring, not a trick exam extra.",
        rule: "House lights = parallel.",
        quizQ: "Why are house lights wired in parallel?",
        quizA: "So each can be switched independently and other rooms stay on if one bulb fails.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_9.2"] = scenesFrom("9.2 Current and voltage", "Section 9.2: I and V", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "Current splits, voltage does not",
        narration: "Current from the supply splits between branches and adds up again. Each branch gets the same voltage as the battery (ideally).",
        rule: "Currents add. Voltages match the supply.",
        draw: [
          T(220, 200, "I total", INK, 16),
          P("M 280 200 L 360 160", BLUE, 3),
          P("M 280 200 L 360 240", BLUE, 3),
          T(430, 150, "I₁", BLUE, 16),
          T(430, 250, "I₂", BLUE, 16),
          T(400, 320, "I total = I₁ + I₂", DARK_G, 16),
        ],
      },
      {
        narration: "Ammeter goes in the lane (series). Voltmeter sits across the component (parallel), like a tap measuring pressure difference.",
        rule: "A in series. V in parallel.",
        quizQ: "How does current split in parallel?",
        quizA: "Current splits between branches. Branch currents add up to the total.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Where the meters go",
        narration: "Break the wire to insert an ammeter. Clip a voltmeter across the lamp without breaking the main path.",
        rule: "Ammeter in line. Voltmeter across.",
        draw: [
          R(180, 200, 160, 80, PALE_B, BLUE),
          T(260, 240, "A in series", BLUE, 16),
          R(460, 200, 160, 80, PALE_O, ORANGE),
          T(540, 240, "V across", ORANGE, 16),
        ],
      },
      {
        narration: "Two identical lamps in parallel each get full battery voltage, so they glow brighter than the same two in series sharing the voltage.",
        rule: "Parallel lamps: full voltage each.",
        quizQ: "What about voltage in parallel?",
        quizA: "Each branch gets the same voltage as the supply (ideally).",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Brighter in parallel",
        narration: "Series: lamps share the battery. Parallel: each is wired as if it owned the battery. Parallel wins on brightness.",
        rule: "Parallel brighter than series for the same lamps.",
        draw: [
          R(160, 190, 200, 100, PALE_O, ORANGE),
          T(260, 240, "series: dimmer", ORANGE, 16),
          R(440, 190, 200, 100, PALE_G, GREEN),
          T(540, 240, "parallel: brighter", DARK_G, 16),
        ],
      },
      {
        narration: "That is why fairy lights in cheap series strings all die together, and why house lamps are not strung that way.",
        rule: "Voltage share vs full voltage.",
        quizQ: "Two identical lamps in parallel vs series — which are brighter?",
        quizA: "Parallel: each gets the full supply voltage.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_9.3"] = scenesFrom("9.3 Resistance", "Section 9.3: Resistance", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "A squeeze on the current",
        narration: "Resistance is how much a component fights the flow. R = V / I. Unit ohm (Ω).",
        rule: "R = V ÷ I",
        draw: [
          R(200, 200, 400, 70, PALE_B, BLUE),
          T(400, 235, "R = V / I", BLUE, 22),
        ],
      },
      {
        narration: "Longer wire, thinner wire, or a worse conductor → bigger R. Hot metal wires usually resist more too.",
        rule: "Long, thin, hot metal → more ohms.",
        quizQ: "What is resistance?",
        quizA: "How much a component opposes current. R = V/I. Unit ohm (Ω).",
        draw: [
          T(400, 330, "6 V ÷ 0.3 A = 20 Ω", DARK_G, 18),
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Ohm’s straight line",
        narration: "For an ohmic resistor at constant temperature, double the voltage, double the current. Graph through the origin is a straight line.",
        rule: "Ohmic: V proportional to I.",
        draw: [
          P("M 200 340 L 200 160", INK, 3),
          P("M 200 340 L 600 340", INK, 3),
          P("M 200 340 L 560 180", BLUE, 4),
          T(130, 240, "I", INK, 16),
          T(400, 380, "V", INK, 16),
        ],
      },
      {
        narration: "Rearrange like density: I = V/R and V = I×R. Same algebra trick.",
        rule: "I = V/R   V = IR",
        quizQ: "If V = 6 V and I = 0.3 A, what is R?",
        quizA: "20 Ω.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Plug the numbers in",
        narration: "6 divided by 0.3 is 20. Write Ω. Show the substitution so the mark is obvious.",
        rule: "6 / 0.3 = 20 Ω",
        draw: [
          T(280, 220, "6 V", BLUE, 20),
          T(400, 220, "÷", INK, 20),
          T(520, 220, "0.3 A", ORANGE, 20),
          R(250, 280, 300, 60, PALE_G, GREEN),
          T(400, 310, "20 Ω", DARK_G, 22),
        ],
      },
      {
        narration: "Longer extension leads have more resistance. Thin cheap cable warms up — that extra R is energy dumped as heat.",
        rule: "Unwanted R wastes energy as heat.",
        quizQ: "How do you rearrange V = IR?",
        quizA: "I = V/R and V = I×R.",
        draw: [
        ],
      },
    ],
  },
]);

data["s8_9.4"] = scenesFrom("9.4 Practical circuits", "Section 9.4: Safety", [
  {
    label: "Key idea",
    steps: [
      {
        heading: "A weak link on purpose",
        narration: "A fuse is a skinny wire that melts if current is too big, cutting the circuit before the house wiring cooks and starts a fire.",
        rule: "Too much current → fuse blows.",
        draw: [
          P("M 200 240 L 340 240", INK, 5),
          P("M 340 240 L 460 240", RED, 3, null, "8,4"),
          T(400, 210, "fuse", RED, 16),
          P("M 460 240 L 600 240", INK, 5),
        ],
      },
      {
        narration: "Circuit breakers do the same job with a switch you can reset. Still: cut the live path when current is dangerous.",
        rule: "Breakers are resettable fuses.",
        quizQ: "Why do we use fuses or circuit breakers?",
        quizA: "If current gets too high they cut the circuit so wires do not overheat.",
        draw: [
        ],
      },
    ],
  },
  {
    label: "Recall",
    steps: [
      {
        heading: "Live, neutral, earth",
        narration: "Live is the high-voltage feed (~230 V). Neutral completes the loop. Earth is a safety drain from a metal case if live touches it.",
        rule: "Live in. Neutral back. Earth = safety.",
        draw: [
          T(220, 210, "live", RED, 18),
          T(400, 210, "neutral", BLUE, 18),
          T(580, 210, "earth", GREEN, 18),
        ],
      },
      {
        narration: "Switch in the live wire so ‘off’ really disconnects the dangerous side. Earth + fuse: case cannot stay live.",
        rule: "Switch in live. Earth dumps a fault.",
        quizQ: "What does an earth wire do on a metal-cased appliance?",
        quizA: "If live touches the case, a large current flows to earth and the fuse blows.",
        draw: [
          T(400, 300, "fault current → earth → fuse pops", SUB, 16),
        ],
      },
    ],
  },
  {
    label: "Check",
    steps: [
      {
        heading: "Everyday parallel",
        narration: "House lights; car headlights and dash lamps that can work on their own. Both are parallel branches from one supply.",
        rule: "Many everyday circuits are parallel.",
        draw: [
          R(160, 190, 200, 90, PALE_O, ORANGE),
          T(260, 235, "house lights", ORANGE, 16),
          R(440, 190, 200, 90, PALE_B, BLUE),
          T(540, 235, "car lamps", BLUE, 16),
        ],
      },
      {
        narration: "Safety trio: fuse or breaker, earth on metal cases, switch in live. That is the practical circuit, not just a textbook loop.",
        rule: "Fuse · earth · live switch.",
        quizQ: "Give two everyday parallel circuits.",
        quizA: "Lighting in a house; car headlights and dashboard lamps.",
        draw: [
        ],
      },
    ],
  },
]);

const keys = ["s8_7.1","s8_7.2","s8_7.3","s8_7.4","s8_8.1","s8_8.2","s8_8.3","s8_8.4","s8_9.1","s8_9.2","s8_9.3","s8_9.4"];
const problems = audit(keys);
if (problems.length) {
  console.log(problems.join("\n"));
  console.log("PROBLEMS", problems.length);
  process.exit(1);
}
fs.writeFileSync(file, "window.INTERACTIVE_WHITEBOARD_DATA = " + JSON.stringify(data, null, 2) + ";\n");
console.log("Wrote Year 8 Science chapters 7–9");
