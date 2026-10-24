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
  "s7_5.1": {
    title: "5.1 The structure of the atom",
    watermark: "Section 5.1: Inside an atom",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_5_1_helium_atom.jpg",
          "Atoms are made of sub-atomic particles. Protons and neutrons pack into a tiny nucleus. Electrons move around it. Protons are positive, electrons negative, neutrons have no charge. Almost all the mass is in the nucleus — electrons are tiny. Opposite charges attract, so electrostatic attraction holds the atom together. Most of the atom is empty space.",
          "Nucleus = protons + neutrons. Electrons around it.",
          "What is inside an atom?",
          "A nucleus of protons and neutrons, with electrons moving around it. Protons +, electrons −, neutrons no charge.",
          "Helium: 2 protons, 2 neutrons, 2 electrons — overall charge zero",
          "#eff6ff",
          "#2563eb",
          "#1d4ed8"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_5_1_gold_foil.jpg",
          "Thomson found the electron (1890s) and imagined a ‘plum pudding’. Rutherford fired tiny particles at gold foil: most went straight through, a few bounced back. That means atoms are mostly empty space with a dense nucleus. Chadwick found the neutron in 1932. Scientists collaborate and check each other’s work.",
          "Gold foil: mostly empty space + tiny dense nucleus.",
          "What did Rutherford’s gold foil experiment show?",
          "Most particles passed through, so atoms are mostly empty space. A few bounced back, so there is a tiny, dense, charged nucleus.",
          "Proton number decides the element (carbon always has 6 protons)",
          "#fff7ed",
          "#ea580c",
          "#c2410c"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_5_1_atom_models_timeline.jpg",
          "Mass number = protons + neutrons. An atom with 8 protons and 8 neutrons has mass number 16 (oxygen). The proton number tells you the element. Models changed: pudding → nucleus + electrons → protons and neutrons in the nucleus. A model is a useful picture, not a photograph.",
          "Mass number = p + n. Proton number = which element.",
          "An atom has 8 protons and 8 neutrons. What is its mass number?",
          "16. Mass number is protons plus neutrons.",
          "Thomson → Rutherford → Chadwick → model we use today",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
    },
  },
  "s7_5.2": {
    title: "5.2 Purity",
    watermark: "Section 5.2: How pure is it?",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_5_2_gold_carat_purity.jpg",
          "In chemistry, pure means one substance — every atom the same in a pure element. Pure gold is 24 carat. 18 carat gold is 18 parts gold in 24, so 18/24 × 100 = 75% gold; the rest is copper or silver. Silver marked 925 is 92.5% silver. The more gold, the yellower the colour.",
          "Pure element = only one type of atom. Carat measures gold purity.",
          "What does pure mean, and what is 18 carat gold?",
          "Pure means a single substance. 18 carat gold is 18/24 = 75% gold; the rest is other metals in the alloy.",
          "24 carat = 100% gold · 9 carat = 9/24 = 37.5% gold",
          "#fff7ed",
          "#d97706",
          "#92400e"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_5_2_seawater_salts.jpg",
          "Seawater is a mixture: about 96.5% water and 3.5% dissolved salts. Of those salts, only about 68% is sodium chloride, so evaporated ‘sea salt’ is not pure NaCl. From 1000 g of seawater you get about 35 g of salts; 68% of that is about 24 g of sodium chloride. Medicines need the product purified so extra chemicals do not harm the patient.",
          "Mixtures need extra steps if you want one pure product.",
          "Is evaporated sea salt pure sodium chloride?",
          "No. Seawater salts are only about 68% sodium chloride. The rest is other salts such as magnesium chloride.",
          "1000 g seawater → about 35 g salts → ~24 g NaCl",
          "#e0f2fe",
          "#0284c7",
          "#075985"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_5_2_pure_vs_impure_diamond.jpg",
          "Pure diamond is only carbon, colourless and translucent. A few nitrogen atoms per million turn it yellow; boron can make it blue. Clean air is not a pure substance — it is a mixture of nitrogen, oxygen, argon and carbon dioxide. Impurities can also change melting point: a mixture often melts over a range, not at one sharp temperature.",
          "Air and seawater are mixtures. Pure diamond is only carbon.",
          "Is clean air a pure substance?",
          "No. It is a mixture of gases. A pure substance is a single element or compound.",
          "Other atoms in diamond change its colour",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
    },
  },
  "s7_5.3": {
    title: "5.3 Weather and climate",
    watermark: "Section 5.3: Today vs many years",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_5_3_weather_vs_climate.jpg",
          "Weather is the state of the atmosphere now — it can change in minutes. Climate is the average weather of a place over a long time, usually more than 30 years, including typical extremes. Meteorology studies weather; climatology studies climate. A cold week cannot, by itself, disprove a warming climate — that week is weather.",
          "Weather = short term. Climate = long-term average.",
          "What is the difference between weather and climate?",
          "Weather is day-to-day (or even minute-to-minute) conditions. Climate is the average weather of a place over many years, usually 30+.",
          "Climate needs statistics, not one day’s forecast",
          "#eff6ff",
          "#2563eb",
          "#1d4ed8"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_5_3_weather_instruments.jpg",
          "A weather report describes temperature, humidity, precipitation (rain or snow), cloud, visibility and wind. Measure at the same time each day. Take temperature in the shade, with the thermometer bulb in air not touching a wall. Countries measure weather so they can warn about storms and plan food, power and transport.",
          "Measure weather the same way, same time, in the shade.",
          "Name three things a weather report describes.",
          "Any three from: temperature, rainfall/precipitation, wind, cloud, sunshine, humidity, visibility.",
          "Meteorology = study of weather",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_5_3_climate_zones.jpg",
          "Climate depends mainly on temperature and precipitation. Zones: polar (very cold and dry), temperate (cold winters, mild summers), arid (hot and dry), tropical (hot and wet), Mediterranean (mild wet winters, hot dry summers), mountains/tundra (very cold). You can get a Mediterranean-type climate far from the Mediterranean Sea.",
          "Climate zones: polar, temperate, arid, tropical, Mediterranean, mountain.",
          "Why can a cold week not disprove a warming climate?",
          "Climate is a long-term average. One week is weather. You need many years of data.",
          "Arid = hot and dry · tropical = hot and wet all year",
          "#fff7ed",
          "#ea580c",
          "#c2410c"
        ),
      ],
    },
  },
  "s7_5.4": {
    title: "5.4 Climate and ice ages",
    watermark: "Section 5.4: Ice then and now",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_5_4_ice_sheets_map.jpg",
          "About 25 000 years ago, ice sheets covered much more of Earth than today — northern Europe, Canada, parts of Asia. The baby mammoth Yuka froze in Siberia about 39 000 years ago because the ground stayed frozen. Today ice is mainly near the poles and on high mountains.",
          "Last glacial: ice spread far from the poles.",
          "What is an ice age?",
          "A long cold period in Earth’s past when ice sheets covered much more of the planet than they do today, with glacials and warmer gaps (interglacials) inside it.",
          "25 000 years ago ice reached well beyond today’s ice caps",
          "#e0f2fe",
          "#0284c7",
          "#075985"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_5_4_glacial_interglacial.jpg",
          "Glacial means frozen: ice spreads far from the poles. Interglacial means between: ice stays near the poles — that is Earth now. Over the last 450 000 years climate has cycled between them. Ice ages are even longer cold chapters that contain many glacials and interglacials. There have been several ice ages, not just one.",
          "We are in an interglacial inside a longer ice-age story.",
          "Have ice ages happened only once?",
          "No. Earth has had several ice ages. Inside them, climate cycles between glacial (more ice) and interglacial (less ice) periods.",
          "Glacial = more ice · interglacial = ice mostly at the poles",
          "#eef2ff",
          "#4f46e5",
          "#3730a3"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_5_4_glacier_evidence.jpg",
          "Evidence: glaciers are slow rivers of ice that carry rocks. When ice melts it dumps boulders in odd places. Moving ice scratches bedrock (striations). Pollen in peat-bog cores shows which plants — and so which climate — lived in each layer. Cold-adapted fossils turn up in places that are warm now.",
          "Boulders, scratches, pollen and fossils record past ice.",
          "Give one piece of evidence for past ice ages.",
          "Glacial scratches on rock, boulders dumped when ice melted, pollen in peat cores, or fossils of cold-climate plants and animals in places that are warm today.",
          "Glaciers carve valleys and leave scratches and dumped rocks",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
    },
  },
  "s7_5.5": {
    title: "5.5 Atmosphere and climate",
    watermark: "Section 5.5: Air and the greenhouse",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_5_5_early_vs_today_air.jpg",
          "The atmosphere is the layer of gas around Earth. Early air came from volcanoes: mostly carbon dioxide, almost no oxygen, surface hotter than 400 °C — like Venus. Today dry air is about 78% nitrogen and 21% oxygen. Microbes and plants used CO₂ and released oxygen by photosynthesis: carbon dioxide + water → glucose + oxygen.",
          "Today: ~78% nitrogen, ~21% oxygen. Early air was mostly CO₂.",
          "Name the two most abundant gases in dry air today.",
          "Nitrogen about 78% and oxygen about 21%.",
          "Banded iron rocks show oxygen was combining with iron long ago",
          "#e0f2fe",
          "#0284c7",
          "#075985"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_5_5_carbon_sources.jpg",
          "Carbon was locked up in fossil fuels (coal, oil) and in limestone shells. Burning fossil fuels: carbon + oxygen → carbon dioxide, puts that carbon back into the air. Deforestation cuts trees that would take CO₂ out. Making cement from limestone also releases CO₂. Emissions have risen since about 200 years ago.",
          "Burning fuels and cutting forests raise carbon dioxide.",
          "Where is extra carbon dioxide coming from today?",
          "Mainly burning fossil fuels, plus deforestation and making cement from limestone.",
          "carbon + oxygen → carbon dioxide",
          "#fff7ed",
          "#ea580c",
          "#c2410c"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_5_5_greenhouse_blanket.jpg",
          "Greenhouse gases such as carbon dioxide and methane act like a blanket, or like glass on a greenhouse: sunlight gets in, some heat is trapped so Earth stays warm enough for life. Extra CO₂ thickens the blanket, so more outgoing heat is trapped and the surface tends to warm. That is the greenhouse effect and global warming.",
          "More greenhouse gas → more heat trapped → warmer climate.",
          "Why does adding carbon dioxide tend to warm the climate?",
          "CO₂ is a greenhouse gas. Extra CO₂ traps more of the heat Earth radiates, so the surface stays warmer.",
          "Analogy: a thicker blanket keeps more heat in",
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
  for (const key of Object.keys(boards)) {
    src = replaceBoard(src, key, boards[key]);
  }
  fs.writeFileSync(file, src);
  console.log("updated", file);
}
