(function () {
  function topic(id, title, rows) {
    return {
      id: id,
      title: title,
      cards: rows.map(function (row) {
        return { kind: row[0], front: row[1], back: row[2] };
      }),
    };
  }

  window.SCIENCE_Y9 = {
    id: "science",
    title: "Science",
    stage: "Year 9",
    book: "Learner’s Book Stage 9",
    intro: "Stage 9 physics written for a 14-year-old: how tightly matter is packed, why heat is not the same as temperature, why energy never vanishes, and the three routes thermal energy takes — plus why a wet towel can feel colder than a dry one.",
    units: [
      {
        id: "3",
        title: "3 Forces and energy",
        strand: "Physics",
        intro: "Density decides float or sink. Heat is the total particle energy; temperature is the average. Energy is conserved as it moves from hotter to colder by conduction, convection and radiation — and evaporation steals the fastest particles.",
        topics: [
          topic("3.1", "Density", [
            ["Key idea", "What is density?", "A polystyrene takeaway box feels almost weightless. Iron nails feel hefty. One box can have more mass than one nail — so “metal is heavier” is not the whole story.\nKEYWORD: density — mass per unit volume. How tightly matter is packed.\nKEYWORD: hollow — air inside, which pulls the average density down.\nKEYWORD: solid — filled with material, no air pocket.\nCompare the same volume of each and iron wins every time."],
            ["Recall", "How do you work out volume and density?", "KEYWORD: regular — you can measure the sides.\nFORMULA: volume = length × width × height\nExample: wood 10 mm × 6 mm × 4 mm = 240 mm³.\nKEYWORD: irregular — use displacement. The water-level rise is the volume.\nExample: 40 cm³ up to 56 cm³ means 16 cm³ of rock.\nFORMULA: density = mass ÷ volume\nExample: a 1 cm³ iron cube has mass 7.9 g, so density = 7.9 g/cm³. Same-sized polystyrene is 0.05 g/cm³."],
            ["Check", "Water is 1.0 g/cm³. Pinewood 0.41, polyethene 0.95, polycarbonate 1.2. Aluminium is 13.5 g in 5.0 cm³. Who sinks?", "FORMULA: more dense than water → sinks\nFORMULA: less dense than water → floats\nExample: pinewood and polyethene float. Polycarbonate (1.2) sinks.\nFORMULA: 13.5 ÷ 5.0 = 2.7 g/cm³\nExample: aluminium sinks. Wood 6 × 3 × 4 = 72 cm³, mass 54 g → 0.75 g/cm³, so it floats."],
            ["Example", "Try seawater, copper and a toy car.", "Example: sea water 10 300 kg in 10 m³ → 1030 kg/m³. A block at 1020 kg/m³ sinks in a lake but floats at sea.\nFORMULA: mass = density × volume\nExample: 20 cm³ of copper (8.96 g/cm³) is 179.2 g.\nFORMULA: volume = mass ÷ density\nExample: 4.5 g of copper is about 0.50 cm³. A toy car of 84 g and 30 cm³ is 2.8 g/cm³ — not solid steel."],
            ["Check", "How can a steel ship float — and what about oil, fizzy drinks and balloons?", "KEYWORD: average density — total mass, including the air, ÷ the whole volume.\nFORMULA: average density < density of water → ship floats\nKEYWORD: liquid layers — least dense liquid sits on top.\nExample: oil, then water, then honey. Helium balloons rise because helium is less dense than air.\nFORMULA: heat a gas → it expands → density down"],
          ]),
          topic("3.2", "Heat and temperature", [
            ["Key idea", "What is the difference between heat and temperature?", "KEYWORD: thermal energy — energy stored because particles vibrate or move; unit joule (J).\nKEYWORD: heat — the total thermal energy of all the vibrating particles in an object.\nKEYWORD: temperature — the average energy of the particles, measured in °C. Temperature also tells you which way thermal energy will flow: from hotter to colder.\nSame temperature does not mean the same heat if the volumes (number of particles) differ."],
            ["Recall", "Two equal glasses of water — one warm, one cold. Compare temperature and heat.", "The volumes match, so the number of particles matches. The warm glass has faster particles, so it has a higher temperature and more total heat. The cold glass has slower particles, so less heat."],
            ["Check", "Two beakers at 25 °C — 50 cm³ and 100 cm³ of water. Compare temperature and heat.", "Temperature is the same (same average particle energy). The 100 cm³ beaker has twice as many particles, so its total heat is greater."],
            ["Example", "Why can a sparkler spark at about 1000 °C barely burn your hand?", "The spark has tiny mass and few particles, so its total heat is very small. The temperature gap to the air is huge, so thermal energy leaves the spark quickly before it hits your skin. High temperature is not the same as lots of heat — a swimming pool at 28 °C stores far more heat than a teacup at 80 °C."],
            ["Check", "Copper block A is 10 g at 25 °C. Block B is 80 g at 25 °C. Compare heat. What is absolute zero?", "Temperatures match, so average particle energy matches. Block B has eight times the mass, so about eight times the heat.\nKEYWORD: absolute zero — about −273 °C. Particles would have the least possible motion. Scientists have got within billionths of a degree, but particles never fully stop."],
          ]),
          topic("3.3", "Conservation of energy", [
            ["Key idea", "What does it mean when physicists say energy is conserved?", "Everyday ‘save energy’ means use less. In physics, conserved means the total quantity of energy stays the same. Energy can be stored, transferred, changed from one store to another, or spread out (dissipated) — but the total does not grow or shrink."],
            ["Recall", "State the law of conservation of energy.", "KEYWORD: system — the thing you choose to study (lamp, engine, phone).\nKEYWORD: energy input — what you put in.\nKEYWORD: energy output — what comes out in every form added together.\nFORMULA: energy cannot be created or destroyed, only transferred or changed from one store to another.\nTotal input = total output."],
            ["Check", "A lamp takes 100 J of electrical energy and gives 10 J of light. How much thermal energy? Is energy conserved?", "90 J thermal. 10 + 90 = 100 J, so yes. The light is useful; the thermal energy is wasted as it dissipates into the room. Wasted is not destroyed."],
            ["Example", "An electric motor uses 1000 J. 500 J becomes kinetic energy. How much is thermal?", "FORMULA: thermal = input − useful output = 1000 − 500 = 500 J\nTV: 100 J in, 80 J light and sound → 20 J thermal.\nBus: 700 J kinetic and 1300 J thermal and sound → input X = 2000 J.\nWood fire: 70% of the chemical energy becomes thermal, so 30% becomes light and waste chemicals.\nOil power station: 55% thermal + 10% used in the station → 35% electrical.\nSofia’s LED uses 18 J and wastes 7 J as thermal. Light = 18 − 7 = 11 J, not 12 J."],
            ["Check", "Can a phone ever give out more energy than it takes in?", "No. Output cannot exceed input because energy cannot be created. Dissipated energy has only spread out and become less useful."],
          ]),
          topic("3.4", "Moving from hot to cold", [
            ["Key idea", "Which way does thermal energy move?", "KEYWORD: hotter — higher temperature.\nKEYWORD: colder — lower temperature.\nThermal energy always transfers from hotter places to colder places. It never ‘flows uphill’ from cold to hot on its own."],
            ["Recall", "You hold a hot drink. What happens to thermal energy?", "The drink is hotter than your hands. Thermal energy moves from the drink, through the cup, into your colder hands until the temperatures get closer. Animals cool in water the same way: energy leaves the warmer body. A fridge removes thermal energy from food so the food becomes colder. Engine coolant takes thermal energy out of hot metal parts."],
            ["Check", "You hold ice. Does ‘coldness’ move into your hand?", "No. Cold is not an energy store and it cannot move. Thermal energy leaves your warmer hand and enters the ice. Your skin loses energy, so it feels cold. Hold ice too long and you can damage skin because it needs the right amount of thermal energy."],
            ["Example", "What is dissipation, and what speeds it up?", "KEYWORD: dissipation — thermal energy spreading from a hotter place into cooler surroundings and becoming less useful. Energy is still conserved — it has moved, not vanished.\nA bigger temperature difference makes the transfer faster. Ice cream at −20 °C in a 24 °C room has a 44 °C gap, so energy rushes in. Open a winter window and thermal energy leaves the warmer room."],
            ["Check", "How does a car radiator work, and who is right about gloves — Sofia or Zara?", "Cold water enters the engine block, picks up thermal energy, leaves hot through the top hose, then dissipates heat to the air in the radiator.\nSofia said gloves ‘keep the cold away’. Zara said gloves keep the heat in your hands. Zara is closer: gloves slow thermal energy leaving your skin. They do not block a flow of cold."],
          ]),
          topic("3.5", "Ways of transferring thermal energy", [
            ["Key idea", "Name the three ways thermal energy can transfer, and what heating does to particles.", "Conduction, convection and radiation. Heating makes particles move faster. Solids vibrate more about fixed places and expand. Liquids move faster and expand. Gases hit the walls harder and expand.\nKEYWORD: expand — increase in size when heated.\nKEYWORD: vigorously — with more energy, speed and force."],
            ["Recall", "How does conduction work, and which materials are best?", "KEYWORD: conduction — vibrating particles push their neighbours so energy travels through a solid. Metals are the best conductors because free electrons help pass the vibrations. Wood, plastic, wool and cotton are poor conductors (good thermal insulators). A metal pan base cooks food fast; a plastic handle stays comfortable; a wooden spoon is an insulator. Conduction is weak in liquids and gases and impossible in a vacuum (no particles)."],
            ["Check", "How does a convection current form?", "KEYWORD: convection — warmer fluid expands, density falls, it rises; cooler denser fluid sinks to be heated.\nFORMULA: density = mass ÷ volume — mass stays the same, volume rises, density falls.\nKEYWORD: convection current — the circulating loop (room heater, pan heated at the bottom, hot-water tank).\nConvection needs particles that can move, so it cannot happen in a solid or a vacuum."],
            ["Example", "How does radiation differ from the other two ways?", "KEYWORD: radiation — thermal energy as invisible waves. No particles needed, so it crosses the vacuum between the Sun and Earth in about nine minutes.\nKEYWORD: emit — give out radiation. Hotter objects emit more.\nKEYWORD: absorb — take in radiation.\nBest emitters and absorbers: dull, black, large surface area. Worst: shiny, white or silver, small area (they reflect). Penguins’ black backs absorb; white buildings in hot countries reflect. Marcus in a white T-shirt stays cooler than Arun in a black one."],
            ["Check", "How does a vacuum flask keep a drink hot, and how do houses and cars cut heat transfer?", "Silvered walls reflect radiation back into the drink. The vacuum gap has no particles, so conduction and convection almost stop. Cork or plastic at the top is an insulator.\nDouble glazing: two panes with argon (a poor conductor) between them. Wall foam is a poor conductor and blocks convection currents in the cavity. Silver sunshades on a parked car reflect radiation away."],
            ["Example", "A room heater uses all three methods. Describe the path.", "Hot water inside → conduction into the metal. Metal → conduction into the nearby air. Warm air expands and rises → convection current heats the room. The hot metal surface also emits radiation."],
          ]),
          topic("3.6", "Cooling by evaporation", [
            ["Key idea", "What is evaporation, and how is it different from boiling?", "KEYWORD: evaporation — liquid changing to gas at the surface, at temperatures below boiling point (a puddle can evaporate at 15 °C).\nKEYWORD: boiling — vaporisation throughout the liquid at the boiling temperature (100 °C for water at standard pressure).\nKEYWORD: random — particle speeds and directions are unpredictable; some particles are much faster than average."],
            ["Recall", "Why can some particles leave a liquid even when it is not boiling?", "Particles jostle in random directions. The fastest ones at the surface have enough energy to escape as gas. Some get pulled back; others get away. The slowest particles stay in the liquid."],
            ["Check", "Why does evaporation cool a liquid — and you, after a swim?", "Temperature measures average particle energy. When the highest-energy particles escape, the average of those left falls, so the temperature drops. Water on your skin evaporates using thermal energy from your skin, so you feel cold."],
            ["Example", "Sweat starts at skin temperature. How can it still cool you? Why is humidity dangerous?", "The liquid itself is not magically cold. As sweat evaporates it loses its fastest particles and cools. Thermal energy then flows from your warmer skin into the cooler sweat, and the cycle continues. Animals that barely sweat roll in water for the same trick.\nIf the air is very humid, sweat cannot evaporate easily. The body loses its main cooling route and core temperature can climb to unsafe levels."],
            ["Check", "How do a clay water pot and a sponge-and-fan cooler work? Why does perfume feel colder than soap?", "KEYWORD: porous — liquid can slowly soak through. Water seeps through clay, evaporates on the outside, and cools the water left inside. A fan blows warm air through a wet sponge; the air supplies the energy to evaporate the water, so the outgoing air is cooler.\nPerfume has weaker forces between particles, so it evaporates faster than water and feels colder on skin. Liquid soap has stronger forces, evaporates slowly, and feels less cold. Isopropanol on a cut evaporates quickly and feels cold for the same reason. In school, only use water, soap or approved alcohols on skin."],
          ]),
        ],
      },
    ],
  };
})();
