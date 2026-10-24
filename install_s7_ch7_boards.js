const fs = require("fs");

function scene(img, narration, rule, quizQ, quizA, footerText, footerFill, footerStroke, footerColor) {
  return {
    clear: true,
    narration,
    rule,
    quizQ,
    quizA,
    elements: [
      { type: "image", src: img, x: 90, y: 12, width: 620, height: 340 },
      {
        type: "rect",
        x: 40,
        y: 362,
        width: 720,
        height: 48,
        fill: footerFill,
        stroke: footerStroke,
        strokeWidth: 1.5,
        rx: 8,
      },
      { type: "text", x: 400, y: 391, text: footerText, color: footerColor, size: 14, weight: "bold" },
    ],
  };
}

const pills = [
  { id: "card_0", label: "Key idea" },
  { id: "card_1", label: "Recall" },
  { id: "card_2", label: "Check" },
];

const boards = {
  "s7_7.1": {
    title: "7.1 Nutrients",
    watermark: "Section 7.1: Six nutrients",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_7_1_bowl_nutrients.jpg",
          "The book’s six nutrients are carbohydrate, fat (and oil), protein, vitamins, minerals and water. Rice is rich in starch, a carbohydrate that the body breaks down to glucose for respiration. Chicken is rich in protein for new cells, repair, haemoglobin and antibodies. Avocado gives fats and oils for energy and cell membranes.",
          "Nutrient = a substance in food you need to stay healthy.",
          "Name the six types of nutrient.",
          "Carbohydrate, fat (and oil), protein, vitamins, minerals and water.",
          "Food is what you eat. A nutrient is what the body uses from that food",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_7_1_iodine_starch_test.jpg",
          "Iodine solution is orange-brown. On starch it turns blue-black. Keep foods separate and use a white tile so you can see the colour. Plant foods such as bread, rice and potato often contain starch. Animal foods usually do not.",
          "Iodine: orange-brown → blue-black if starch is present.",
          "How do you test a food for starch?",
          "Add iodine. Orange-brown staying orange-brown means no starch. Blue-black means starch is present.",
          "Keep samples separate so iodine cannot mix them",
          "#fff7ed",
          "#ea580c",
          "#c2410c"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_7_1_vitamins_minerals.jpg",
          "Vitamins and minerals are needed in small amounts. Vitamin A: night vision and fighting pathogens (carrots, green veg). Vitamin C: skin, blood vessels, gums — too little causes scurvy (oranges). Vitamin D: absorb calcium for bones — too little can cause rickets (sunlight, oily fish). Calcium: strong bones and teeth (milk). Iron: haemoglobin — too little causes anaemia and low energy because cells cannot respire well. Water is the sixth nutrient: cells and blood are mostly water.",
          "Tiny amounts, big jobs. Water is the sixth nutrient.",
          "Why do you still need vitamins, minerals and water?",
          "Each has a special job: vitamin C for skin and gums, calcium for bones, iron for haemoglobin, water so chemicals can dissolve and blood can flow.",
          "Anaemia: not enough iron → not enough oxygen → not enough energy",
          "#eff6ff",
          "#2563eb",
          "#1d4ed8"
        ),
      ],
    },
  },
  "s7_7.2": {
    title: "7.2 A balanced diet",
    watermark: "Section 7.2: Right amounts",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_7_2_pyramid_energy.jpg",
          "Your diet is the food you eat each day. A balanced diet gives all six nutrients plus the right amount of energy. Energy in food should roughly match energy you use. A megajoule is one million joules. Teenagers who are growing and active need more megajoules than a baby or a less active adult. The food triangle: plenty of rice, bread and pasta; lots of fruit and veg; quite a lot of protein foods; not too many sweets or fried foods.",
          "Balanced diet = all six nutrients + the right energy.",
          "What is a balanced diet?",
          "A diet that provides all the different kinds of nutrients and the right amount of energy for that person.",
          "1 MJ = 1 000 000 J. Sport, growth and a bigger body use more energy",
          "#fff7ed",
          "#ea580c",
          "#c2410c"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_7_2_fibre_gut.jpg",
          "Fibre is not one of the six nutrients because you do not digest it or send it into the blood. It still matters: it keeps faeces moving and helps prevent constipation. Fibre is mostly cellulose from plant cell walls — cereal, seeds, fruit and vegetables. Growing children need extra protein. A desk job needs less carbohydrate and fat than a sporty job. A pregnant woman needs extra protein, iron and calcium.",
          "Fibre is not a nutrient, but you still need it.",
          "What is fibre, and why eat it?",
          "Mostly cellulose from plants. It is not digested. It keeps the gut healthy and helps prevent constipation.",
          "Too much sugar → tooth decay and diabetes risk. Too much fat → extra weight",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_7_2_pyramid_energy.jpg",
          "Different people need different amounts of energy and protein, but everyone needs vitamins and minerals. An athlete uses more energy than someone who sits all day because muscles do more work. Sweets sit at the top of the triangle because you should not eat many of them. Wholegrain bread is better than white because it has more fibre.",
          "Match energy in to energy used. Do not overload sugar and fat.",
          "Why does an athlete need more energy than someone who sits all day?",
          "Their muscles do more work, so respiration uses more glucose. They still need a mix of all nutrients, not only extra carbohydrate.",
          "Burger and fries give energy and fat — add fruit, veg and water too",
          "#e0f2fe",
          "#0284c7",
          "#075985"
        ),
      ],
    },
  },
  "s7_7.3": {
    title: "7.3 Growth, development and health",
    watermark: "Section 7.3: Growing up healthy",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_7_3_growth_development.jpg",
          "You began as one cell. Cells divide and grow. An early ball of cells is an embryo. Growth means the body gets bigger by making more cells. That needs protein (to build cells) and energy (so cells can divide). Development is more than getting bigger: new organs form, muscles strengthen, the brain learns. Stages blend: baby, toddler, child, adolescent, adult, up to about 18–20 years.",
          "Growth = bigger (more cells). Development = new structures and skills.",
          "What does the body need in order to grow?",
          "Protein to build new cells and energy so cells can divide, plus minerals such as calcium. Growth is not the same as only putting on fat.",
          "Not enough protein or energy → a child may not grow very tall",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_7_3_exercise.jpg",
          "Regular exercise uses energy from food so less is stored as fat. It makes the heart and muscles work, so they become stronger. It can also make people feel more cheerful. Exercise plus a balanced diet is a healthy lifestyle.",
          "Exercise uses energy and strengthens heart and muscle.",
          "How does exercise help health?",
          "It uses energy (so less fat is stored), strengthens the heart and muscles, and can improve mood.",
          "Growth is new tissue. Extra weight can just be stored fat",
          "#eff6ff",
          "#2563eb",
          "#1d4ed8"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_7_3_smoking_harm.jpg",
          "Tobacco smoke harms the smoker and people nearby. Nicotine is addictive and narrows blood vessels. Tar is sticky and some chemicals in it can cause cancer, including lung cancer. Carbon monoxide sticks to haemoglobin so less oxygen is carried and cells cannot respire well. Particulates damage alveoli so less oxygen enters the blood. Smoking in pregnancy is linked with more low-birthweight babies.",
          "Nicotine, tar, carbon monoxide and particulates all harm health.",
          "How does smoking damage health?",
          "Nicotine is addictive and harms blood vessels. Tar can cause cancer. Carbon monoxide blocks haemoglobin. Particulates damage alveoli.",
          "Less oxygen in the blood → less energy from respiration",
          "#fef2f2",
          "#dc2626",
          "#991b1b"
        ),
      ],
    },
  },
  "s7_7.4": {
    title: "7.4 Moving the body",
    watermark: "Section 7.4: Bones, joints, muscles",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_7_4_joint_types.jpg",
          "Your skeleton is inside the body (insects have an exoskeleton outside). Bones are hard and need calcium and protein. Joints are where two bones meet. A hinge joint (elbow, knee, fingers) moves like a door, one way. A ball-and-socket joint (shoulder, hip) lets the bone move in a circle. Bones cannot bend themselves.",
          "Hinge = one direction. Ball-and-socket = circular movement.",
          "What is a joint, and name two types?",
          "A joint is where two bones meet. Hinge joints move back and forth. Ball-and-socket joints allow circular movement.",
          "Shoulder = ball-and-socket. Elbow = hinge",
          "#e0f2fe",
          "#0284c7",
          "#075985"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_7_4_biceps_triceps.jpg",
          "Muscles pull; they cannot push. Contraction means the muscle cells get shorter. Energy comes from glucose by respiration. Tendons join muscle to bone (they must not stretch). To bend the elbow, the biceps contracts and the triceps relaxes. To straighten it, the triceps contracts and the biceps relaxes. That pair is antagonistic.",
          "Muscles only pull. Antagonistic pair = opposite jobs.",
          "What is an antagonistic pair?",
          "Two muscles that work opposite ways, such as biceps (bends the arm) and triceps (straightens it). When one contracts, the other relaxes.",
          "Biceps: two tendons. Triceps: three attachments",
          "#fff7ed",
          "#ea580c",
          "#c2410c"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_7_4_biceps_triceps.jpg",
          "Tendons join muscle to bone so a contraction can move the joint. Ligaments hold bones together at a joint. Feel your upper arm as you bend it: the biceps goes firm because it is contracting. The more often you ask a muscle to contract, the more glucose it uses.",
          "Tendon = muscle to bone. Ligament = bone to bone.",
          "What do ligaments and tendons do?",
          "Ligaments hold bones together at a joint. Tendons join muscle to bone so the pull of contraction can move the bone.",
          "No stretch in a tendon — the pull must reach the bone",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
    },
  },
};

function replaceBoard(src, key, obj) {
  const start = src.indexOf(`  "${key}": {`);
  if (start < 0) throw new Error("missing " + key);
  let i = src.indexOf("{", start);
  let depth = 0;
  let j = i;
  for (; j < src.length; j++) {
    if (src[j] === "{") depth++;
    else if (src[j] === "}") {
      depth--;
      if (depth === 0) {
        j++;
        break;
      }
    }
  }
  while (src[j] === ",") j++;
  const json = JSON.stringify(obj, null, 2)
    .split("\n")
    .map((line, n) => (n === 0 ? "  " + `"${key}": ` + line : "  " + line))
    .join("\n");
  return src.slice(0, start) + json + "," + src.slice(j);
}

for (const file of ["iwb-y7-science-enhanced.js", "interactive-whiteboard-data.js"]) {
  let src = fs.readFileSync(file, "utf8");
  for (const key of Object.keys(boards)) src = replaceBoard(src, key, boards[key]);
  fs.writeFileSync(file, src);
  console.log("updated", file);
}
