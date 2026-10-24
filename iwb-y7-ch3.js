// Year 7 Science — Chapter 3 Forces and energy
// HD photograph boards with labelled overlays (Chapter 1 style)
window.INTERACTIVE_WHITEBOARD_DATA = window.INTERACTIVE_WHITEBOARD_DATA || {};
Object.assign(window.INTERACTIVE_WHITEBOARD_DATA, {

  "s7_3.1": {
    title: "3.1 Forces and motion",
    watermark: "Section 3.1: What a force can do",
    subtopics: [
      { id: "card_0", label: "Key idea" },
      { id: "card_1", label: "Recall" },
      { id: "card_2", label: "Check" }
    ],
    scenes: {
      card_0: [
        {
          clear: true,
          narration: "A force is a push or a pull. It can start something moving, stop it, speed it up, slow it down, turn it, or change its shape.",
          rule: "Forces change motion or shape.",
          quizQ: "",
          quizA: "",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_1_forces_change_motion.png", x: 120, y: 30, width: 560, height: 320 },
            { type: "circle", cx: 250, cy: 160, r: 6, fill: "#ea580c", stroke: "#ffffff", width: 2 },
            { type: "path", d: "M 256 160 L 40 70", stroke: "#ea580c", width: 2, fill: "none" },
            { type: "rect", x: 20, y: 48, width: 150, height: 40, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 95, y: 73, text: "Start moving", color: "#c2410c", size: 14, weight: "bold" },
            { type: "circle", cx: 560, cy: 200, r: 6, fill: "#0284c7", stroke: "#ffffff", width: 2 },
            { type: "path", d: "M 566 200 L 680 80", stroke: "#0284c7", width: 2, fill: "none" },
            { type: "rect", x: 620, y: 48, width: 160, height: 40, fill: "#f0f9ff", stroke: "#0284c7", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 700, y: 73, text: "Change shape", color: "#0369a1", size: 14, weight: "bold" }
          ]
        },
        {
          narration: "The same push that starts a trolley can also squash a spring. Look for what the force is doing in each picture.",
          rule: "Name the change: start, stop, speed up, slow down, turn, or squash.",
          quizQ: "What can a force do?",
          quizA: "A force can start, stop, speed up, slow down or change the direction of motion, or change an object’s shape.",
          elements: [
            { type: "rect", x: 80, y: 370, width: 640, height: 48, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 400, text: "Every force arrow has a size and a direction", color: "#065f46", size: 15, weight: "bold" }
          ]
        }
      ],
      card_1: [
        {
          clear: true,
          narration: "The resultant force is the one force that has the same effect as all the forces acting together.",
          rule: "Forces in the same direction add. Opposite forces subtract.",
          quizQ: "What is a resultant force?",
          quizA: "The single force that has the same effect as all the forces acting together.",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_1_crate_pushes.png", x: 120, y: 30, width: 560, height: 320 },
            { type: "path", d: "M 180 250 L 280 250", stroke: "#dc2626", width: 5, fill: "none" },
            { type: "path", d: "M 620 250 L 520 250", stroke: "#2563eb", width: 5, fill: "none" },
            { type: "text", x: 180, y: 230, text: "push", color: "#b91c1c", size: 13, weight: "bold" },
            { type: "text", x: 620, y: 230, text: "push", color: "#1d4ed8", size: 13, weight: "bold" }
          ]
        }
      ],
      card_2: [
        {
          clear: true,
          narration: "A book sitting still on a table has a resultant force of zero. Weight pulls down. The table pushes up by the same amount.",
          rule: "Still object → balanced forces → resultant is zero.",
          quizQ: "A book is still on a table. What is the resultant force?",
          quizA: "Zero. The support force from the table balances the weight.",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_1_book_on_table.png", x: 180, y: 20, width: 440, height: 300 },
            { type: "path", d: "M 400 140 L 400 70 M 390 85 L 400 70 L 410 85", stroke: "#16a34a", width: 4, fill: "none" },
            { type: "text", x: 470, y: 80, text: "table pushes up", color: "#15803d", size: 14, weight: "bold" },
            { type: "path", d: "M 400 300 L 400 370 M 390 355 L 400 370 L 410 355", stroke: "#ea580c", width: 4, fill: "none" },
            { type: "text", x: 400, y: 400, text: "weight pulls down  —  same size, opposite way", color: "#c2410c", size: 15, weight: "bold" }
          ]
        }
      ]
    }
  },

  "s7_3.2": {
    title: "3.2 Speed",
    watermark: "Section 3.2: Distance ÷ time",
    subtopics: [
      { id: "card_0", label: "Key idea" },
      { id: "card_1", label: "Recall" },
      { id: "card_2", label: "Check" }
    ],
    scenes: {
      card_0: [
        {
          clear: true,
          narration: "Average speed is how far you go divided by how long it took. School units are often metres per second.",
          rule: "speed = distance ÷ time",
          quizQ: "",
          quizA: "",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_2_track_and_stopwatch.png", x: 120, y: 25, width: 560, height: 310 },
            { type: "rect", x: 40, y: 50, width: 150, height: 56, fill: "#eff6ff", stroke: "#3b82f6", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 115, y: 72, text: "distance", color: "#1d4ed8", size: 14, weight: "bold" },
            { type: "text", x: 115, y: 92, text: "how far", color: "#64748b", size: 12 },
            { type: "rect", x: 610, y: 50, width: 150, height: 56, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 685, y: 72, text: "time", color: "#c2410c", size: 14, weight: "bold" },
            { type: "text", x: 685, y: 92, text: "how long", color: "#64748b", size: 12 }
          ]
        },
        {
          narration: "Write the unit next to the number. Metres divided by seconds gives metres per second (m/s).",
          rule: "m ÷ s gives m/s.",
          quizQ: "How do you calculate average speed?",
          quizA: "Average speed = distance travelled ÷ time taken. A common unit is m/s.",
          elements: [
            { type: "rect", x: 150, y: 360, width: 500, height: 50, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 390, text: "Always divide distance by time", color: "#065f46", size: 16, weight: "bold" }
          ]
        }
      ],
      card_1: [
        {
          clear: true,
          narration: "A cyclist travels 120 m in 20 s. Speed = 120 ÷ 20 = 6 m/s.",
          rule: "Put the numbers under the words, then divide.",
          quizQ: "A cyclist travels 120 m in 20 s. What is the average speed?",
          quizA: "6 m/s.",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_2_cyclist_measured_path.png", x: 120, y: 25, width: 560, height: 300 },
            { type: "rect", x: 80, y: 345, width: 640, height: 70, fill: "#f0f9ff", stroke: "#0284c7", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 372, text: "120 m  ÷  20 s  =  6 m/s", color: "#0369a1", size: 18, weight: "bold" },
            { type: "text", x: 400, y: 396, text: "distance           time           speed", color: "#64748b", size: 13 }
          ]
        }
      ],
      card_2: [
        {
          clear: true,
          narration: "A speedometer shows speed at one moment — right now. Average speed uses the whole journey, including stops.",
          rule: "Speedometer = now. Average = whole trip.",
          quizQ: "Why is a speedometer not the same as average speed?",
          quizA: "It shows the speed at one moment. Average speed uses the whole journey.",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_2_speedometer_and_journey.png", x: 100, y: 25, width: 600, height: 300 },
            { type: "rect", x: 90, y: 345, width: 250, height: 50, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 215, y: 375, text: "Instant speed", color: "#c2410c", size: 15, weight: "bold" },
            { type: "rect", x: 460, y: 345, width: 250, height: 50, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 585, y: 375, text: "Whole journey", color: "#065f46", size: 15, weight: "bold" }
          ]
        }
      ]
    }
  },

  "s7_3.3": {
    title: "3.3 Describing movement",
    watermark: "Section 3.3: Distance–time graphs",
    subtopics: [
      { id: "card_0", label: "Key idea" },
      { id: "card_1", label: "Recall" },
      { id: "card_2", label: "Check" }
    ],
    scenes: {
      card_0: [
        {
          clear: true,
          narration: "On a distance–time graph, steepness shows speed. A steeper straight line means a higher constant speed. A flat line means the object is still.",
          rule: "Steeper = faster. Flat = stopped.",
          quizQ: "",
          quizA: "",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_3_distance_time_graph.png", x: 140, y: 20, width: 520, height: 320 },
            { type: "circle", cx: 320, cy: 160, r: 6, fill: "#ea580c", stroke: "#ffffff", width: 2 },
            { type: "path", d: "M 326 160 L 40 70", stroke: "#ea580c", width: 2, fill: "none" },
            { type: "rect", x: 16, y: 48, width: 140, height: 40, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 86, y: 73, text: "Steep = fast", color: "#c2410c", size: 13, weight: "bold" }
          ]
        },
        {
          narration: "A gentle slope means a slower constant speed. Read the axes: distance up, time along.",
          rule: "Always check the scale on each axis.",
          quizQ: "What does the steepness of a distance–time graph show?",
          quizA: "Speed. A steeper straight line means a higher constant speed. A flat line means the object is still.",
          elements: [
            { type: "rect", x: 80, y: 360, width: 640, height: 48, fill: "#eff6ff", stroke: "#3b82f6", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 390, text: "Up the graph = further from the start", color: "#1e40af", size: 15, weight: "bold" }
          ]
        }
      ],
      card_1: [
        {
          clear: true,
          narration: "A curved distance–time graph means the speed is changing — speeding up or slowing down.",
          rule: "Straight = steady speed. Curve = changing speed.",
          quizQ: "What does a curved distance–time graph mean?",
          quizA: "The speed is changing.",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_3_distance_time_graph.png", x: 140, y: 20, width: 520, height: 300 },
            { type: "rect", x: 80, y: 345, width: 640, height: 70, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 372, text: "Getting steeper → speeding up", color: "#c2410c", size: 16, weight: "bold" },
            { type: "text", x: 400, y: 396, text: "Getting flatter → slowing down", color: "#9a3412", size: 14 }
          ]
        }
      ],
      card_2: [
        {
          clear: true,
          narration: "For a straight section, speed = change in distance ÷ change in time for that section only — not the whole graph.",
          rule: "Use that stretch: rise ÷ run.",
          quizQ: "How do you find the speed from a straight section?",
          quizA: "Speed = change in distance ÷ change in time for that section.",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_3_distance_time_graph.png", x: 140, y: 20, width: 520, height: 300 },
            { type: "rect", x: 150, y: 345, width: 500, height: 55, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 378, text: "Pick two points on the straight bit only", color: "#065f46", size: 15, weight: "bold" }
          ]
        }
      ]
    }
  },

  "s7_3.4": {
    title: "3.4 Turning forces",
    watermark: "Section 3.4: Moments",
    subtopics: [
      { id: "card_0", label: "Key idea" },
      { id: "card_1", label: "Recall" },
      { id: "card_2", label: "Check" }
    ],
    scenes: {
      card_0: [
        {
          clear: true,
          narration: "A moment is the turning effect of a force. A small force far from a hinge can match a large force close in.",
          rule: "Moment = force × perpendicular distance from the pivot.",
          quizQ: "",
          quizA: "",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_4_spanner_and_door.png", x: 100, y: 20, width: 600, height: 310 },
            { type: "circle", cx: 220, cy: 180, r: 6, fill: "#0284c7", stroke: "#ffffff", width: 2 },
            { type: "path", d: "M 226 180 L 40 70", stroke: "#0284c7", width: 2, fill: "none" },
            { type: "rect", x: 16, y: 48, width: 130, height: 40, fill: "#f0f9ff", stroke: "#0284c7", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 81, y: 73, text: "Pivot", color: "#0369a1", size: 14, weight: "bold" },
            { type: "circle", cx: 560, cy: 240, r: 6, fill: "#ea580c", stroke: "#ffffff", width: 2 },
            { type: "path", d: "M 566 240 L 690 70", stroke: "#ea580c", width: 2, fill: "none" },
            { type: "rect", x: 620, y: 48, width: 160, height: 40, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 700, y: 73, text: "Long handle", color: "#c2410c", size: 14, weight: "bold" }
          ]
        },
        {
          narration: "Use the distance at right angles to the force — not a slant distance along the beam.",
          rule: "Perpendicular distance, not along the tool.",
          quizQ: "What is a moment?",
          quizA: "The turning effect of a force. Moment = force × perpendicular distance from the pivot.",
          elements: [
            { type: "rect", x: 80, y: 360, width: 640, height: 48, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 390, text: "Spanners, doors and seesaws are all moment problems", color: "#065f46", size: 14, weight: "bold" }
          ]
        }
      ],
      card_1: [
        {
          clear: true,
          narration: "An object is balanced when the clockwise moment equals the anticlockwise moment.",
          rule: "Same turning both ways → no rotation.",
          quizQ: "When is an object balanced?",
          quizA: "When the clockwise moment equals the anticlockwise moment.",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_4_balanced_seesaw.png", x: 100, y: 20, width: 600, height: 310 },
            { type: "text", x: 220, y: 360, text: "Heavier, closer in", color: "#c2410c", size: 14, weight: "bold" },
            { type: "text", x: 580, y: 360, text: "Lighter, further out", color: "#0369a1", size: 14, weight: "bold" },
            { type: "rect", x: 150, y: 380, width: 500, height: 42, fill: "#f0f9ff", stroke: "#0284c7", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 406, text: "Clockwise moment = anticlockwise moment", color: "#0369a1", size: 14, weight: "bold" }
          ]
        }
      ],
      card_2: [
        {
          clear: true,
          narration: "A 4 N weight sits 0.3 m from a pivot. Moment = 4 × 0.3 = 1.2 N m.",
          rule: "Multiply force by distance. Unit is newton-metre (N m).",
          quizQ: "A 4 N weight sits 0.3 m from a pivot. What moment does it produce?",
          quizA: "1.2 N m.",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_4_hanging_weight_ruler.png", x: 140, y: 15, width: 520, height: 300 },
            { type: "rect", x: 80, y: 330, width: 640, height: 80, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 358, text: "M = F × d", color: "#065f46", size: 16, weight: "bold" },
            { type: "text", x: 400, y: 388, text: "4 N  ×  0.3 m  =  1.2 N m", color: "#047857", size: 18, weight: "bold" }
          ]
        }
      ]
    }
  },

  "s7_3.5": {
    title: "3.5 Pressure between solids",
    watermark: "Section 3.5: Force ÷ area",
    subtopics: [
      { id: "card_0", label: "Key idea" },
      { id: "card_1", label: "Recall" },
      { id: "card_2", label: "Check" }
    ],
    scenes: {
      card_0: [
        {
          clear: true,
          narration: "Pressure is how concentrated a force is. The same force on a smaller area gives a bigger pressure.",
          rule: "Pressure = force ÷ area.",
          quizQ: "",
          quizA: "",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_5_nail_and_wide_block.png", x: 120, y: 20, width: 560, height: 310 },
            { type: "rect", x: 40, y: 50, width: 150, height: 50, fill: "#fef2f2", stroke: "#dc2626", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 115, y: 80, text: "Tiny area", color: "#b91c1c", size: 14, weight: "bold" },
            { type: "rect", x: 610, y: 50, width: 150, height: 50, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 685, y: 80, text: "Wide area", color: "#065f46", size: 14, weight: "bold" }
          ]
        },
        {
          narration: "A drawing pin sinks in because all the force is on a sharp point. A wide block of the same weight does not.",
          rule: "Bigger area → smaller pressure.",
          quizQ: "How do you calculate pressure?",
          quizA: "Pressure = force ÷ area. A bigger area gives a smaller pressure for the same force.",
          elements: [
            { type: "rect", x: 80, y: 360, width: 640, height: 48, fill: "#eff6ff", stroke: "#3b82f6", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 390, text: "Same weight, different contact area", color: "#1e40af", size: 15, weight: "bold" }
          ]
        }
      ],
      card_1: [
        {
          clear: true,
          narration: "Snowshoes are wide so they spread your weight. The pressure on the snow is smaller, so you sink less.",
          rule: "Spread the force out.",
          quizQ: "Why are snowshoes wide?",
          quizA: "They spread the weight over a larger area, so the pressure on the snow is smaller.",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_5_boot_vs_snowshoe.png", x: 100, y: 20, width: 600, height: 310 },
            { type: "text", x: 220, y: 360, text: "Boot sinks", color: "#b91c1c", size: 15, weight: "bold" },
            { type: "text", x: 580, y: 360, text: "Snowshoe stays up", color: "#065f46", size: 15, weight: "bold" },
            { type: "rect", x: 150, y: 385, width: 500, height: 40, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 410, text: "Larger area, smaller pressure", color: "#c2410c", size: 14, weight: "bold" }
          ]
        }
      ],
      card_2: [
        {
          clear: true,
          narration: "A 50 N force acts on 0.02 m². Pressure = 50 ÷ 0.02 = 2500 N/m², also called 2500 Pa.",
          rule: "Pascal (Pa) is the same as N/m².",
          quizQ: "A 50 N force acts on 0.02 m². What is the pressure?",
          quizA: "2500 N/m² (also called 2500 Pa).",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_5_nail_and_wide_block.png", x: 140, y: 15, width: 520, height: 280 },
            { type: "rect", x: 80, y: 310, width: 640, height: 90, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 342, text: "P = F ÷ A", color: "#065f46", size: 16, weight: "bold" },
            { type: "text", x: 400, y: 372, text: "50 N  ÷  0.02 m²  =  2500 Pa", color: "#047857", size: 18, weight: "bold" }
          ]
        }
      ]
    }
  },

  "s7_3.6": {
    title: "3.6 Pressure in liquids and gases",
    watermark: "Section 3.6: Fluids",
    subtopics: [
      { id: "card_0", label: "Key idea" },
      { id: "card_1", label: "Recall" },
      { id: "card_2", label: "Check" }
    ],
    scenes: {
      card_0: [
        {
          clear: true,
          narration: "Pressure in a liquid increases with depth, because more liquid is pressing down. Divers feel this in their ears. Dams are thicker at the base.",
          rule: "Deeper water → higher pressure.",
          quizQ: "",
          quizA: "",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_6_diver_and_dam.png", x: 100, y: 15, width: 600, height: 320 },
            { type: "path", d: "M 80 80 L 80 300", stroke: "#0284c7", width: 4, fill: "none" },
            { type: "path", d: "M 70 285 L 80 300 L 90 285", stroke: "#0284c7", width: 4, fill: "none" },
            { type: "text", x: 80, y: 60, text: "depth", color: "#0369a1", size: 14, weight: "bold" }
          ]
        },
        {
          narration: "Pressure also depends on density: denser liquid, greater pressure at the same depth.",
          rule: "Pressure acts in every direction in a fluid.",
          quizQ: "How does pressure in a liquid change with depth?",
          quizA: "It increases with depth, because more liquid is pressing down.",
          elements: [
            { type: "rect", x: 80, y: 360, width: 640, height: 48, fill: "#ecfdf5", stroke: "#059669", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 390, text: "A hole in a bottle squirts outward, not only down", color: "#065f46", size: 14, weight: "bold" }
          ]
        }
      ],
      card_1: [
        {
          clear: true,
          narration: "A gas exerts pressure because its particles collide with the walls of the container.",
          rule: "Hits on the wall = pressure.",
          quizQ: "Why does a gas exert pressure?",
          quizA: "Its particles collide with the walls of the container.",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_6_gas_in_flask.png", x: 160, y: 15, width: 480, height: 310 },
            { type: "rect", x: 80, y: 345, width: 640, height: 55, fill: "#f0f9ff", stroke: "#0284c7", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 378, text: "Millions of tiny collisions every second", color: "#0369a1", size: 15, weight: "bold" }
          ]
        }
      ],
      card_2: [
        {
          clear: true,
          narration: "Squeeze the same gas into a smaller volume, at the same temperature, and the pressure rises. Particles hit the walls more often.",
          rule: "Smaller space → more hits → higher pressure.",
          quizQ: "What happens to gas pressure if you squeeze the same gas into a smaller volume, at the same temperature?",
          quizA: "Pressure rises, because particles hit the walls more often.",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_6_syringe_compressed_gas.png", x: 120, y: 15, width: 560, height: 310 },
            { type: "path", d: "M 400 40 L 400 90 M 390 75 L 400 90 L 410 75", stroke: "#ea580c", width: 4, fill: "none" },
            { type: "text", x: 500, y: 55, text: "Push plunger in", color: "#c2410c", size: 14, weight: "bold" },
            { type: "rect", x: 80, y: 350, width: 640, height: 48, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 380, text: "Same gas, smaller volume, higher pressure", color: "#c2410c", size: 15, weight: "bold" }
          ]
        }
      ]
    }
  },

  "s7_3.7": {
    title: "3.7 Particles on the move",
    watermark: "Section 3.7: Diffusion",
    subtopics: [
      { id: "card_0", label: "Key idea" },
      { id: "card_1", label: "Recall" },
      { id: "card_2", label: "Check" }
    ],
    scenes: {
      card_0: [
        {
          clear: true,
          narration: "Diffusion is particles spreading from where they are crowded to where they are less crowded. No stirring is needed.",
          rule: "Net movement: crowded → less crowded.",
          quizQ: "",
          quizA: "",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_7_ink_diffusion_water.png", x: 150, y: 15, width: 500, height: 320 },
            { type: "circle", cx: 400, cy: 80, r: 6, fill: "#7c3aed", stroke: "#ffffff", width: 2 },
            { type: "path", d: "M 400 86 L 400 200", stroke: "#7c3aed", width: 3, fill: "none", strokeDasharray: [6, 4] },
            { type: "text", x: 520, y: 90, text: "Crowded here", color: "#6d28d9", size: 14, weight: "bold" }
          ]
        },
        {
          narration: "The ink looks like it is ‘disappearing’, but the particles are still there — they have just spread out.",
          rule: "Particles keep moving on their own.",
          quizQ: "What is diffusion?",
          quizA: "The spreading of particles from a region where they are crowded to one where they are less crowded.",
          elements: [
            { type: "rect", x: 80, y: 360, width: 640, height: 48, fill: "#f5f3ff", stroke: "#7c3aed", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 390, text: "High concentration → low concentration", color: "#5b21b6", size: 15, weight: "bold" }
          ]
        }
      ],
      card_1: [
        {
          clear: true,
          narration: "Diffusion is faster in a gas than in a liquid because gas particles move faster and are further apart.",
          rule: "Steam spreads quicker than colour in a drink.",
          quizQ: "Why does diffusion happen faster in a gas than in a liquid?",
          quizA: "Gas particles move faster and are further apart, so they spread more quickly.",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_7_steam_and_iced_tea.png", x: 100, y: 15, width: 600, height: 310 },
            { type: "rect", x: 90, y: 345, width: 250, height: 50, fill: "#fff7ed", stroke: "#ea580c", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 215, y: 375, text: "Gas — fast", color: "#c2410c", size: 15, weight: "bold" },
            { type: "rect", x: 460, y: 345, width: 250, height: 50, fill: "#eff6ff", stroke: "#3b82f6", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 585, y: 375, text: "Liquid — slower", color: "#1d4ed8", size: 15, weight: "bold" }
          ]
        }
      ],
      card_2: [
        {
          clear: true,
          narration: "Perfume fills a room even with no wind because the perfume particles diffuse through the air by themselves.",
          rule: "No fan needed — particles move on their own.",
          quizQ: "Why does the smell of perfume fill a room even with no wind?",
          quizA: "Perfume particles diffuse through the air by themselves.",
          elements: [
            { type: "image", src: "assets/illustrations/s7_3_7_perfume_across_room.png", x: 100, y: 15, width: 600, height: 310 },
            { type: "path", d: "M 220 180 C 320 140 420 160 560 200", stroke: "#db2777", width: 3, fill: "none", strokeDasharray: [8, 5] },
            { type: "text", x: 400, y: 130, text: "particles spread by themselves", color: "#be185d", size: 14, weight: "bold" },
            { type: "rect", x: 80, y: 350, width: 640, height: 48, fill: "#fdf2f8", stroke: "#db2777", strokeWidth: 1.5, rx: 8 },
            { type: "text", x: 400, y: 380, text: "Still air — the smell still travels", color: "#9d174d", size: 15, weight: "bold" }
          ]
        }
      ]
    }
  }
});
