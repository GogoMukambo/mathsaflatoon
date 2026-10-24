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
  "s7_4.1": {
    title: "4.1 The Sonoran desert",
    watermark: "Section 4.1: Living and non-living",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_4_1_saguaro_woodpecker.jpg",
          "The Sonoran Desert is hot and dry, but it is not empty. A giant saguaro cactus is a hotel: a Gila woodpecker drills a nest hole in the stem; later a cactus wren may use a hole. The cactus wren also nests in teddy-bear cholla, whose spines keep snakes away. Bats drink agave nectar and carry pollen. Ants store seeds. Those links — feeding, nesting, pollinating — are interactions.",
          "An ecosystem is living things plus non-living things interacting.",
          "What is an ecosystem?",
          "A network of interactions between living organisms and the non-living things around them (light, water, soil, air, temperature).",
          "Saguaro = nest site · bats pollinate · ants store seeds",
          "#fff7ed",
          "#ea580c",
          "#c2410c"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_4_1_kangaroo_rat_night.jpg",
          "Living things also interact with the non-living environment. Light: saguaro flowers open at night so bats can reach the nectar. Temperature: a kangaroo rat stays in a burrow by day and is nocturnal — active at night — because the desert is cooler then. Soil: plants need it; a tarantula uses a burrow. Water after rain lets organisms become more active. Air gives plants carbon dioxide and all animals oxygen. Droppings from the kangaroo rat become part of the soil.",
          "Adaptations help a species survive its habitat.",
          "Why are many desert animals nocturnal?",
          "Night is cooler, so they lose less water and do not overheat.",
          "Habitat = the place a species naturally lives",
          "#eff6ff",
          "#2563eb",
          "#1d4ed8"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_4_1_sonoran_food_web.jpg",
          "A food web is one part of the ecosystem. Plants such as prickly pear and brittlebush are producers: they use sunlight to make food. Energy then passes to grasshoppers, kangaroo rats, lizards, rattlesnakes and a red-tailed hawk. Arrows show the direction energy flows (who is eaten). Not every interaction is feeding: plant roots hold soil; animals pollinate flowers. Ecology is the study of ecosystems — there is always more to find.",
          "Producers start the food web. Habitat is not the same as ecosystem.",
          "What do the arrows in a food web represent?",
          "The flow of energy / who eats whom. The arrow points to the eater.",
          "Ecosystem = all interactions · habitat = one home",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
    },
  },
  "s7_4.2": {
    title: "4.2 Different ecosystems",
    watermark: "Section 4.2: Earth has many kinds",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_4_2_mangrove_nursery.jpg",
          "An ecosystem is not just a place — it is the place plus the interactions. Mangrove trees grow with roots in seawater. Young fish hide among the roots. Mudskippers climb out at low tide to feed. Fallen leaves rot; prawns and crabs eat the rotting leaves. Crab-eating macaques hunt crabs on the roots. Each of those is a habitat inside one coastal ecosystem.",
          "Sofia is right: an ecosystem is more than a place.",
          "Is an ecosystem only a place?",
          "No. It is the living and non-living parts and how they interact.",
          "Mangrove roots = nursery for young fish",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_4_2_arctic_sea_ice.jpg",
          "Arctic sea ice is a very different ecosystem. In winter some seawater freezes. Seals hunt fish but must surface to breathe. Polar bears walk from floe to floe looking for seals. Arctic foxes hunt on the ice. Enough light reaches the underside of ice for tiny algae (producers). Shrimp-like animals eat the algae; fish eat the shrimps. Same idea as the desert food web — different species, different climate.",
          "Different climate → different habitats and species.",
          "What are the producers under Arctic sea ice?",
          "Tiny algae (single-celled plants) growing on the underside of the ice.",
          "Ice floe, water and air are habitats too",
          "#eff6ff",
          "#2563eb",
          "#1d4ed8"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_4_2_rice_paddy.jpg",
          "Not every ecosystem is ‘wild’. A Malaysian rice paddy is farmed. Fields flood: algae grow on mud, fish swim in from irrigation canals, frogs and dragonflies breed. Shallow water heats up by day and cools at night. Fertilizer helps rice and algae, so animals get more food. Birds feed around the field. You can study a garden or pond the same way: list habitats, then look for feeding, hiding, pollinating and decomposing.",
          "People can create ecosystems. Investigate them carefully.",
          "Name one habitat inside a rice-paddy ecosystem.",
          "Any of: shallow flood water, muddy banks, rice plants, irrigation canals, air above the field.",
          "Release animals where you found them",
          "#fff7ed",
          "#d97706",
          "#92400e"
        ),
      ],
    },
  },
  "s7_4.3": {
    title: "4.3 Intruders in an ecosystem",
    watermark: "Section 4.3: New species change the web",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_4_3_kiwi_flightless.jpg",
          "New Zealand split from other land about 66 million years ago, so its native species evolved in their own way. Before humans there were no predatory land mammals. Many birds nested on the ground. With no egg-eaters, some birds — including the kiwi — never needed to fly. A native species belongs in that ecosystem naturally.",
          "Native species evolved in that place.",
          "What is a native species?",
          "A species that belongs in an ecosystem naturally — it was not brought by people.",
          "Kiwi: flightless because eggs were once safe",
          "#ecfdf5",
          "#059669",
          "#065f46"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_4_3_stoat_new_zealand.jpg",
          "Humans arrived about 700 years ago and brought animals that did not belong. Rats hid on boats and ate eggs and chicks. Sheep were farmed. Rabbits escaped and ate pasture, so stoats were brought from Europe to hunt rabbits. Stoats are fierce hunters. They spread, breed quickly and have made birds such as laughing owl and New Zealand thrush extinct. They eat about 60% of kiwi chicks. People now try to eradicate stoats — wipe them out — but it is very hard. About 53 native bird species have become extinct since humans arrived, mostly because of invasive species.",
          "An invasive species spreads and harms the species already there.",
          "Why are stoats a problem in New Zealand but not in Europe?",
          "In Europe they evolved with prey that can cope. In New Zealand flightless birds and ground nests had no mammal predators.",
          "Rats → rabbits → stoats: each new link hurts natives",
          "#fff7ed",
          "#ea580c",
          "#c2410c"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_4_3_buffelgrass.jpg",
          "Buffelgrass is native to Africa, Asia and the Middle East. It was planted in Arizona as cattle food. Now it spreads through the Sonoran Desert in dense patches, taking water and nutrients from the soil. That can starve native plants such as saguaro seedlings and change food and nest sites for woodpeckers and wrens. An introduced plant in the wrong ecosystem is still an invasive species.",
          "Invasive plants compete for water and space.",
          "What kind of species is buffelgrass in Arizona?",
          "An introduced / invasive species — it is growing where it does not belong.",
          "Imagine a faster cactus: saguaro could lose its place",
          "#eff6ff",
          "#2563eb",
          "#1d4ed8"
        ),
      ],
    },
  },
  "s7_4.4": {
    title: "4.4 Bioaccumulation",
    watermark: "Section 4.4: Poisons climb the chain",
    subtopics: pills,
    scenes: {
      card_0: [
        scene(
          "assets/illustrations/s7_4_4_ddt_history.jpg",
          "DDT is an insecticide — a chemical that kills insects. From the 1940s it killed mosquitoes that spread malaria and typhus, and insects that ate crops. People even stood in the spray. Nobody thought it would harm other animals. In 1962 Rachel Carson’s book Silent Spring showed that DDT was also killing birds. Scientists now know many insecticides can harm whole ecosystems.",
          "DDT kills insects but does not stay only on insects.",
          "What is DDT?",
          "An insecticide (a chemical that kills insects). It was used against mosquitoes and crop pests.",
          "Silent Spring (1962) warned that birds were dying",
          "#fff7ed",
          "#d97706",
          "#92400e"
        ),
      ],
      card_1: [
        scene(
          "assets/illustrations/s7_4_4_thin_eggshell.jpg",
          "DDT is persistent: it does not break down for many years and decomposers cannot digest it. Spray can blow far from the field. Once it is in an animal it stays for life. It is toxic (poisonous). In birds it makes eggshells thin and easy to crack, so chicks never hatch — like the ibis eggs in the book. A class token game models this: red tokens = DDT. Insects pick up a few; small birds eat many insects; one eagle eats many small birds — so the eagle’s bag has the most red tokens.",
          "Persistent + toxic → stays in the body and harms it.",
          "Why do eggs fail to hatch after DDT?",
          "DDT is stored in the female bird. It makes the shells thin, so eggs break.",
          "Red tokens in the game = DDT that never leaves",
          "#eff6ff",
          "#2563eb",
          "#1d4ed8"
        ),
      ],
      card_2: [
        scene(
          "assets/illustrations/s7_4_4_biomagnification_ppm.jpg",
          "Spray water: 0.00005 ppm. Tiny protists absorb it: 0.04 ppm. Shrimps eat lots of protists: 0.16 ppm. Minnows eat shrimps: 0.50 ppm. A cormorant eats many minnows: 26.40 ppm — about 50 times a minnow. Bioaccumulation is the build-up inside one body over its life. Biomagnification is the rise in concentration as you go up the food chain. ppm means grams of DDT in one million grams of organism. Biodegradable insecticides can be broken down, so they are less likely to magnify.",
          "Bioaccumulation = in one body. Biomagnification = up the chain.",
          "Why is a cormorant more poisoned than a minnow?",
          "It eats many contaminated minnows, so all their DDT adds together in one bird.",
          "0.00005 → 0.04 → 0.16 → 0.50 → 26.40 ppm",
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
