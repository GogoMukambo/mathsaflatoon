// Year 9 Science Chapter 3 — Forces and energy (Year 7 Science 8.1 style boards)
window.INTERACTIVE_WHITEBOARD_DATA = window.INTERACTIVE_WHITEBOARD_DATA || {};

(function () {
  function photo(src, caption, narration, rule, quizQ, quizA, fill, stroke, color) {
    return {
      clear: true,
      narration: narration,
      rule: rule,
      quizQ: quizQ,
      quizA: quizA,
      elements: [
        { type: "image", src: src, x: 70, y: 8, width: 660, height: 348 },
        { type: "rect", x: 40, y: 362, width: 720, height: 48, fill: fill || "#fff7ed", stroke: stroke || "#ea580c", strokeWidth: 1.5, rx: 8 },
        { type: "text", x: 400, y: 391, text: caption, color: color || "#c2410c", size: 14, weight: "bold" }
      ]
    };
  }

  Object.assign(window.INTERACTIVE_WHITEBOARD_DATA, {
    "s9_3.1": {
      title: "3.1 Density",
      watermark: "Section 3.1: Mass per unit volume",
      subtopics: [
        { id: "card_0", label: "Key idea" },
        { id: "card_1", label: "Recall" },
        { id: "card_2", label: "Check" }
      ],
      scenes: {
        card_0: [
          {
            clear: true,
            narration: "A polystyrene takeaway box feels like it might drift off the table. A handful of nails does not. One box can even have more mass than one nail — so “metal is heavier” is not the whole story. Compare the same volume of each and iron wins every time. Density is that packing score: mass per unit volume.",
            rule: "Density = how tightly mass is packed into a space.",
            quizQ: "What is density?",
            quizA: "Mass per unit volume — how much matter sits in each cubic centimetre.",
            elements: [
              { type: "image", src: "assets/illustrations/s9_3_1_polystyrene_iron.jpg", x: 110, y: 18, width: 580, height: 326 },
              { type: "rect", x: 70, y: 360, width: 660, height: 48, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 1.5, rx: 8 },
              { type: "text", x: 400, y: 389, text: "Same volume: iron packs far more mass than polystyrene", color: "#c2410c", size: 15, weight: "bold" }
            ]
          }
        ],
        card_1: [
          {
            clear: true,
            narration: "Regular block? Multiply the sides. Wood 10 mm × 6 mm × 4 mm is 240 mm³ — any order still works. Wonky rock? Displacement. Water jumps from 40 cm³ to 56 cm³, so the rock is 16 cm³. Eye level with the meniscus. Then divide: density = mass ÷ volume. A 1 cm³ iron cube is 7.9 g, so 7.9 g/cm³. Same-sized polystyrene is only 0.05 g/cm³.",
            rule: "FORMULA: density = mass ÷ volume",
            quizQ: "1 cm³ of iron has mass 7.9 g. What is the density?",
            quizA: "7.9 g/cm³. Density is mass divided by volume.",
            elements: [
              { type: "image", src: "assets/illustrations/s9_3_1_volume_density.jpg", x: 90, y: 12, width: 620, height: 348 },
              { type: "rect", x: 50, y: 368, width: 700, height: 46, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 1.5, rx: 8 },
              { type: "text", x: 400, y: 396, text: "Measure or displace to get volume — then mass ÷ volume", color: "#1d4ed8", size: 14, weight: "bold" }
            ]
          }
        ],
        card_2: [
          {
            clear: true,
            narration: "Water is 1.0 g/cm³ — keep that number. Beat it and you sink; lose to it and you float. Pinewood 0.41 and polyethene 0.95 float. Polycarbonate 1.2 sinks. Aluminium 13.5 g in 5.0 cm³ is 2.7, so it sinks. Wood 6 × 3 × 4 is 72 cm³; 54 g gives 0.75, so that block floats. A steel ship still floats because the air holds drag the average density of the whole ship under 1.0.",
            rule: "Denser than water sinks. Less dense floats.",
            quizQ: "Aluminium is 13.5 g in 5.0 cm³. Density? Will it float?",
            quizA: "2.7 g/cm³. It sinks because 2.7 is greater than 1.0.",
            elements: [
              { type: "image", src: "assets/illustrations/s9_3_1_float_sink.jpg", x: 110, y: 18, width: 580, height: 326 },
              { type: "rect", x: 70, y: 360, width: 660, height: 48, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 1.5, rx: 8 },
              { type: "text", x: 400, y: 389, text: "13.5 g ÷ 5.0 cm³ = 2.7 g/cm³  →  sinks   ·   54 g ÷ 72 cm³ = 0.75  →  floats", color: "#065f46", size: 14, weight: "bold" }
            ]
          }
        ]
      }
    },

    "s9_3.2": {
      title: "3.2 Heat and temperature",
      watermark: "Section 3.2: Total vs average energy",
      subtopics: [
        { id: "card_0", label: "Key idea" },
        { id: "card_1", label: "Same volume" },
        { id: "card_2", label: "Same temperature" },
        { id: "card_3", label: "Sparkler" },
        { id: "card_4", label: "Absolute zero" }
      ],
      scenes: {
        card_0: [
          photo(
            "assets/illustrations/s9_3_2_heat_temperature.jpg",
            "Heat (J) is not the same as temperature (°C)",
            "Heat is the total thermal energy of every particle added together, measured in joules. Temperature is the average energy per particle, measured in °C. Temperature also tells you which way energy will flow: hotter to colder.",
            "Total versus average.",
            "What is the difference between heat and temperature?",
            "Heat is total particle energy (J). Temperature is average particle energy (°C)."
          )
        ],
        card_1: [
          photo(
            "assets/illustrations/s9_3_2_heat_temperature.jpg",
            "Same volume · warmer glass has more heat",
            "Two identical glasses: same number of particles. The warm one has faster particles, so higher temperature and more total heat.",
            "More energy per particle → higher T.",
            "Two equal glasses — one warm, one cold. Which has more heat?",
            "The warm glass — each particle stores more energy, and the number of particles matches."
          )
        ],
        card_2: [
          photo(
            "assets/illustrations/s9_3_2_heat_temperature.jpg",
            "Same temperature · bigger beaker has more heat",
            "Both beakers at 25 °C have the same average particle energy. The 100 cm³ beaker holds more particles, so its total heat is greater.",
            "More particles → more total heat.",
            "50 cm³ and 100 cm³ of water both at 25 °C — compare heat.",
            "Same temperature; the 100 cm³ beaker has more heat because it has more particles."
          )
        ],
        card_3: [
          photo(
            "assets/illustrations/s9_3_2_sparkler.jpg",
            "High temperature does not always mean high heat",
            "A sparkler spark can be about 1000 °C, but its mass is tiny. Few particles means tiny total heat, and the huge temperature gap to the air means energy leaves before the spark hits your skin. A pool at 28 °C stores far more heat than a teacup at 80 °C.",
            "Spark: high T, tiny heat.",
            "Why does a sparkler spark rarely burn you badly?",
            "Very small mass → very small total heat, and energy dissipates to the air on the way down."
          )
        ],
        card_4: [
          {
            clear: true,
            narration: "Copper A is 10 g at 25 °C. Copper B is 80 g at 25 °C. Same temperature, eight times the heat in B. Absolute zero is about −273 °C — particles as still as they can get, but they never fully stop.",
            rule: "KEYWORD: absolute zero — about −273 °C",
            quizQ: "Block A 10 g and block B 80 g, both copper at 25 °C. Compare heat.",
            quizA: "Same temperature. B has about eight times the heat because it has eight times the mass.",
            elements: [
              { type: "rect", x: 90, y: 100, width: 620, height: 80, fill: "#fef3c7", stroke: "#d97706", strokeWidth: 2, rx: 10 },
              { type: "text", x: 400, y: 148, text: "Same T  ·  B has 8 × the mass  ·  8 × the heat", color: "#92400e", size: 18, weight: "bold" },
              { type: "rect", x: 90, y: 210, width: 620, height: 80, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 2, rx: 10 },
              { type: "text", x: 400, y: 258, text: "Absolute zero ≈ −273 °C", color: "#1d4ed8", size: 20, weight: "bold" }
            ]
          }
        ]
      }
    },

    "s9_3.3": {
      title: "3.3 Conservation of energy",
      watermark: "Section 3.3: Nothing created or destroyed",
      subtopics: [
        { id: "card_0", label: "Key idea" },
        { id: "card_1", label: "The law" },
        { id: "card_2", label: "Lamp" },
        { id: "card_3", label: "Missing energy" },
        { id: "card_4", label: "Never more out" }
      ],
      scenes: {
        card_0: [
          photo(
            "assets/illustrations/s9_3_3_lamp_energy.jpg",
            "KEYWORD: conserved — total energy stays the same",
            "Everyday ‘save energy’ means use less. In physics, conserved means the total quantity does not change. Energy can be stored, transferred, changed or dissipated — but you never invent extra joules.",
            "The grand total does not budge.",
            "What does energy conserved mean?",
            "Total energy stays the same. It is transferred or changed between stores, not created or destroyed."
          )
        ],
        card_1: [
          photo(
            "assets/illustrations/s9_3_3_lamp_energy.jpg",
            "Law of conservation of energy",
            "Energy cannot be created or destroyed, only transferred or changed from one store to another. A system is the thing you choose to study. Input is what you put in. Output is every form that comes out, added together.",
            "Input = output (all forms).",
            "State the law of conservation of energy.",
            "Energy cannot be created or destroyed, only transferred or changed from one store to another."
          )
        ],
        card_2: [
          photo(
            "assets/illustrations/s9_3_3_lamp_energy.jpg",
            "100 J in = 10 J light + 90 J thermal",
            "The 90 J is wasted as it dissipates into the room. Wasted is not destroyed. A car engine splits 100% of the fuel’s chemical energy into kinetic, thermal, sound and hot exhaust — the slices still add to 100%.",
            "Wasted ≠ destroyed.",
            "A lamp: 100 J in, 10 J light. How much thermal energy?",
            "90 J. 10 + 90 = 100 J, so energy is conserved."
          )
        ],
        card_3: [
          {
            clear: true,
            narration: "Find the missing number by subtraction or addition. Motor 1000 J in and 500 J kinetic leaves 500 J thermal. Sofia’s LED uses 18 J and wastes 7 J — light is 11 J, not 12 J. Wood fire: 70% thermal, so 30% light and waste chemicals.",
            rule: "FORMULA: missing output = input − known outputs",
            quizQ: "1000 J in, 500 J kinetic. How much thermal?",
            quizA: "500 J.",
            elements: [
              { type: "rect", x: 80, y: 90, width: 640, height: 70, fill: "#fef3c7", stroke: "#d97706", strokeWidth: 2, rx: 8 },
              { type: "text", x: 400, y: 132, text: "Motor: 1000 − 500 = 500 J thermal", color: "#92400e", size: 20, weight: "bold" },
              { type: "rect", x: 80, y: 180, width: 640, height: 70, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 2, rx: 8 },
              { type: "text", x: 400, y: 222, text: "LED: 18 − 7 = 11 J light", color: "#065f46", size: 20, weight: "bold" },
              { type: "rect", x: 80, y: 270, width: 640, height: 70, fill: "#eff6ff", stroke: "#2563eb", strokeWidth: 2, rx: 8 },
              { type: "text", x: 400, y: 312, text: "Fire: 70% thermal  →  30% light and waste", color: "#1d4ed8", size: 18, weight: "bold" }
            ]
          }
        ],
        card_4: [
          photo(
            "assets/illustrations/s9_3_3_lamp_energy.jpg",
            "Output can never exceed input",
            "A phone, a washing machine and a wood fire all obey the same rule. Dissipated energy has only spread out. Two swinging water bottles swap kinetic energy until friction spends it as thermal energy and they stop.",
            "You cannot create joules.",
            "Can a phone give out more energy than it takes in?",
            "No. Output cannot exceed input because energy cannot be created."
          )
        ]
      }
    },

    "s9_3.4": {
      title: "3.4 Moving from hot to cold",
      watermark: "Section 3.4: Direction of transfer",
      subtopics: [
        { id: "card_0", label: "Key idea" },
        { id: "card_1", label: "Hot drink" },
        { id: "card_2", label: "Ice" },
        { id: "card_3", label: "Dissipation" },
        { id: "card_4", label: "Radiator and gloves" }
      ],
      scenes: {
        card_0: [
          photo(
            "assets/illustrations/s9_3_4_hot_to_cold.jpg",
            "Thermal energy always goes hotter → colder",
            "Hotter means higher temperature. Thermal energy never climbs from cold to hot on its own. Follow the energy, not a story about ‘coldness’ flowing.",
            "Hot → cold, always.",
            "Which way does thermal energy move?",
            "From hotter places to colder places."
          )
        ],
        card_1: [
          photo(
            "assets/illustrations/s9_3_4_hot_to_cold.jpg",
            "Hot drink warms your hands",
            "Energy flows from the drink through the cup into your cooler hands. Animals cool in water the same way. A fridge pulls thermal energy out of food. Engine coolant pulls it out of hot metal.",
            "Energy enters your skin — that is the warmth.",
            "You hold a hot drink. What happens?",
            "Thermal energy transfers from the drink, through the cup, into your hands."
          )
        ],
        card_2: [
          photo(
            "assets/illustrations/s9_3_4_hot_to_cold.jpg",
            "Ice does not pump cold into you",
            "Cold is not an energy store. Holding ice removes thermal energy from your hand — that is why it feels cold. Hold it too long and skin can be damaged. A winter window works the same way: energy leaves the warmer room.",
            "Cold = less thermal energy.",
            "Does cold flow from ice into your hand?",
            "No — thermal energy flows from your hand into the ice."
          )
        ],
        card_3: [
          photo(
            "assets/illustrations/s9_3_4_hot_to_cold.jpg",
            "KEYWORD: dissipation — energy spreads to surroundings",
            "A bigger temperature difference makes the transfer faster. Ice cream at −20 °C in a 24 °C room has a 44 °C gap. Hot takeaway cools on the way home. Energy is conserved — it has moved, not vanished.",
            "Bigger gap → faster transfer.",
            "What is dissipation in this topic?",
            "Thermal energy spreading from a hotter place into cooler surroundings. Still there, just less useful."
          )
        ],
        card_4: [
          photo(
            "assets/illustrations/s9_3_4_hot_to_cold.jpg",
            "Radiator dissipates · gloves keep heat in",
            "Cold water enters the engine, leaves hot at the top hose, then dumps energy to the air in the radiator. Zara is right about gloves: they slow thermal energy leaving your hands. Sofia’s ‘keep the cold away’ story is the wrong picture.",
            "Gloves are insulators, not cold-blockers.",
            "Who is closer about gloves — Sofia or Zara?",
            "Zara — gloves keep heat in your hands by slowing thermal energy leaving."
          )
        ]
      }
    },

    "s9_3.5": {
      title: "3.5 Transferring thermal energy",
      watermark: "Section 3.5: Conduction, convection, radiation",
      subtopics: [
        { id: "card_0", label: "Key idea" },
        { id: "card_1", label: "Conduction" },
        { id: "card_2", label: "Convection" },
        { id: "card_3", label: "Radiation" },
        { id: "card_4", label: "Flask and house" },
        { id: "card_5", label: "All three" }
      ],
      scenes: {
        card_0: [
          photo(
            "assets/illustrations/s9_3_5_transfer_methods.jpg",
            "Three ways — often together",
            "Heating makes particles move faster, so solids, liquids and gases all expand. Thermal energy then travels by conduction, convection or radiation — and real heaters use all three.",
            "Expand first, then transfer.",
            "List the three ways thermal energy transfers.",
            "Conduction, convection and radiation."
          )
        ],
        card_1: [
          photo(
            "assets/illustrations/s9_3_5_transfer_methods.jpg",
            "Metals conduct · plastic and wood insulate",
            "Vibrating particles push their neighbours. Free electrons make metals the champions. A pan base is metal on purpose; the handle is plastic; a wooden spoon stays cool. Conduction is weak in fluids and impossible in a vacuum.",
            "Insulators slow conduction.",
            "Why does a vacuum stop conduction?",
            "No particles to vibrate and pass energy."
          )
        ],
        card_2: [
          photo(
            "assets/illustrations/s9_3_5_convection_anim.svg",
            "Warm fluid rises — convection current",
            "Watch the loop. Heated fluid expands, density drops, it rises; cooler dense fluid sinks to be heated. A room heater and a pan heated at the bottom both run this current. Solids and vacuums cannot.",
            "FORMULA: density = mass ÷ volume",
            "Why does warm air rise by a heater?",
            "It expands, becomes less dense than the surrounding air, and floats upward."
          ),
          photo(
            "assets/illustrations/s9_3_5_convection_pan.jpg",
            "Same loop in a cooking pan",
            "The flame only heats the bottom, yet all the water warms because the convection current carries energy around. Hot-water tanks draw from the top for the same reason.",
            "Less dense water sits at the top.",
            "Where should you take hot water from a tank?",
            "From the top — that is where the warm, less dense water collects."
          )
        ],
        card_3: [
          photo(
            "assets/illustrations/s9_3_5_transfer_methods.jpg",
            "Dull black absorbs · shiny white reflects",
            "Radiation is a wave. It needs no particles, so it crosses space from the Sun in about nine minutes. Best emitters and absorbers: dull, black, large area. Penguins’ black backs drink the Sun. White buildings and white T-shirts bounce it away.",
            "Surface colour matters for radiation.",
            "Which shirt absorbs more Sun radiation?",
            "Black — dull dark surfaces are good absorbers; white shiny surfaces reflect."
          )
        ],
        card_4: [
          photo(
            "assets/illustrations/s9_3_5_vacuum_flask.jpg",
            "Flask, argon windows, silver sunshades",
            "Silvered walls reflect radiation back into the drink. The vacuum gap stops conduction and convection. Cork or plastic lids insulate. Double glazing uses argon. Wall foam blocks conduction and convection. A silver car shade reflects radiation.",
            "Designs that slow all three routes.",
            "How does a vacuum flask keep tea hot?",
            "Silver reflects radiation; vacuum stops conduction and convection; the lid is an insulator."
          )
        ],
        card_5: [
          photo(
            "assets/illustrations/s9_3_5_transfer_methods.jpg",
            "A room heater uses conduction, convection and radiation",
            "Hot water conducts into the metal. Metal conducts into the nearby air. Warm air rises — convection. The hot surface also emits radiation. Most everyday objects leak or gain heat by a mix of all three.",
            "Real life is a team of three.",
            "Which two ways cannot happen in a vacuum?",
            "Conduction and convection — both need particles."
          )
        ]
      }
    },

    "s9_3.6": {
      title: "3.6 Cooling by evaporation",
      watermark: "Section 3.6: Fastest particles escape",
      subtopics: [
        { id: "card_0", label: "Key idea" },
        { id: "card_1", label: "Escape" },
        { id: "card_2", label: "Cooling" },
        { id: "card_3", label: "Sweat" },
        { id: "card_4", label: "Coolers and perfume" }
      ],
      scenes: {
        card_0: [
          photo(
            "assets/illustrations/s9_3_6_evaporation.jpg",
            "Evaporation = surface liquid → gas, below boiling point",
            "A puddle at 15 °C evaporates. It does not boil. Boiling happens throughout the liquid at 100 °C for water. Particle speeds are random, so some are always fast enough to leave the surface.",
            "Surface change of state.",
            "How is evaporation different from boiling?",
            "Evaporation is at the surface below boiling temperature. Boiling is throughout the liquid at the boiling point."
          )
        ],
        card_1: [
          photo(
            "assets/illustrations/s9_3_6_evaporation_anim.svg",
            "Highest-energy particles leave · slowest stay",
            "Watch the red particles leap off the surface. Medium-energy ones may get pulled back. The blue slow particles remain. Steal the fastest and the average energy of those left falls.",
            "Random speeds — some always escape.",
            "Which particles can leave the liquid during evaporation?",
            "The ones with the most energy, at the surface."
          )
        ],
        card_2: [
          photo(
            "assets/illustrations/s9_3_6_evaporation.jpg",
            "Average energy drops → temperature drops",
            "That is why you shiver stepping out of a pool. Water on your skin evaporates using thermal energy from your skin. A beaker of hot water in a cool room also loses energy this way, on top of conduction and radiation.",
            "Losing fastest particles cools the liquid.",
            "Why does evaporation cool a liquid?",
            "Escaping particles take the most energy, so the average energy of remaining particles decreases."
          )
        ],
        card_3: [
          photo(
            "assets/illustrations/s9_3_6_evaporation.jpg",
            "Sweat starts at skin temperature — then evaporates",
            "The liquid is not born cold. As it evaporates it cools, then thermal energy flows from your warmer skin into the cooler sweat. Humid air already holds lots of vapour, so sweat cannot evaporate and you can overheat.",
            "Need evaporation for sweat cooling.",
            "Why is high humidity dangerous when running?",
            "Sweat cannot evaporate easily, so the body loses its main cooling route."
          )
        ],
        card_4: [
          photo(
            "assets/illustrations/s9_3_6_coolers.jpg",
            "Clay pot, wet sponge, perfume vs soap",
            "Porous clay lets water seep out and evaporate, cooling the water inside. A fan through a wet sponge cools the air because the air pays for evaporation. Perfume evaporates faster than water and feels colder; liquid soap evaporates slowly. Isopropanol on a cut feels cold for the same reason.",
            "Weaker forces between particles → faster evaporation.",
            "Why does perfume feel colder on skin than liquid soap?",
            "Perfume evaporates faster, so it removes thermal energy from your skin faster."
          )
        ]
      }
    }
  });
})();
