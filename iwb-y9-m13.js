// Year 9 Mathematics Chapter 13 — labelled boards (Year 7 Science 8.1 style)
// plus stepped SVG working from Learner's Book Stage 9 Position and transformation.
(function () {
  window.INTERACTIVE_WHITEBOARD_DATA = window.INTERACTIVE_WHITEBOARD_DATA || {};

  var BLUE = "#2563eb";
  var NAVY = "#1d4ed8";
  var ORANGE = "#ea580c";
  var AMBER = "#c2410c";
  var GREEN = "#059669";
  var TEAL = "#065f46";
  var RED = "#dc2626";
  var INK = "#0f172a";
  var MUTED = "#475569";
  var LINE = "#94a3b8";
  var PAPER = "#f8fafc";
  var CREAM = "#fff7ed";
  var SKY = "#eff6ff";
  var MINT = "#ecfdf5";
  var PURPLE = "#7c3aed";

  function bg() {
    return [{ type: "rect", x: 0, y: 0, width: 800, height: 500, fill: "#ffffff" }];
  }

  function panel(x, y, w, h, fill, stroke) {
    return {
      type: "rect",
      x: x,
      y: y,
      width: w,
      height: h,
      fill: fill || PAPER,
      stroke: stroke || "#cbd5e1",
      strokeWidth: 1.5,
      rx: 10,
    };
  }

  function caption(text, fill, stroke, color) {
    return [
      panel(40, 428, 720, 52, fill || CREAM, stroke || ORANGE),
      { type: "text", x: 400, y: 454, text: text, color: color || AMBER, size: 14, weight: "bold" },
    ];
  }

  function photo(src, text, fill, stroke, color) {
    return [
      { type: "image", src: src, x: 70, y: 6, width: 660, height: 348, fit: "xMidYMid meet" },
      panel(40, 362, 720, 50, fill || CREAM, stroke || ORANGE),
      { type: "text", x: 400, y: 391, text: text, color: color || AMBER, size: 14, weight: "bold" },
    ];
  }

  function label(x, y, text, color, size) {
    return { type: "text", x: x, y: y, text: text, color: color || INK, size: size || 14, weight: "bold" };
  }

  function northArrow(x, y, len) {
    var tip = y - (len || 70);
    return [
      { type: "path", d: "M " + x + " " + y + " L " + x + " " + tip, stroke: RED, width: 2.5, fill: "none" },
      { type: "path", d: "M " + x + " " + tip + " L " + (x - 7) + " " + (tip + 14) + " L " + (x + 7) + " " + (tip + 14) + " Z", stroke: RED, width: 1, fill: RED },
      label(x, tip - 14, "N", RED, 14),
    ];
  }

  function bearingPoint(cx, cy, deg, r) {
    var rad = (deg * Math.PI) / 180;
    return {
      x: cx + r * Math.sin(rad),
      y: cy - r * Math.cos(rad),
    };
  }

  function lineTo(x1, y1, x2, y2, stroke, width) {
    return {
      type: "path",
      d: "M " + x1 + " " + y1 + " L " + x2 + " " + y2,
      stroke: stroke || INK,
      width: width || 2.5,
      fill: "none",
    };
  }

  function dot(cx, cy, fill) {
    return { type: "circle", cx: cx, cy: cy, r: 5, fill: fill || INK, stroke: fill || INK, width: 1 };
  }

  function grid(ox, oy, step, nx, ny) {
    var els = [panel(ox - 8, oy - 8, step * nx + 16, step * ny + 16, "#ffffff", "#cbd5e1")];
    var i;
    for (i = 0; i <= nx; i++) {
      els.push(lineTo(ox + i * step, oy, ox + i * step, oy + ny * step, i === 0 ? INK : "#e2e8f0", i === 0 ? 1.6 : 1));
    }
    for (i = 0; i <= ny; i++) {
      els.push(lineTo(ox, oy + i * step, ox + nx * step, oy + i * step, i === ny ? INK : "#e2e8f0", i === ny ? 1.6 : 1));
    }
    return els;
  }

  function compassRose(cx, cy, r) {
    return [
      { type: "circle", cx: cx, cy: cy, r: r, stroke: LINE, width: 2, fill: SKY },
      lineTo(cx, cy - r, cx, cy + r, MUTED, 1.5),
      lineTo(cx - r, cy, cx + r, cy, MUTED, 1.5),
      label(cx, cy - r - 16, "N 000°", RED, 13),
      label(cx + r + 28, cy, "E 090°", MUTED, 12),
      label(cx, cy + r + 18, "S 180°", MUTED, 12),
      label(cx - r - 30, cy, "W 270°", MUTED, 12),
      dot(cx, cy, INK),
    ];
  }

  function scene(narration, rule, quizQ, quizA, elements, clear) {
    return {
      clear: clear !== false,
      narration: narration,
      rule: rule,
      quizQ: quizQ || "",
      quizA: quizA || "",
      elements: elements,
    };
  }

  var data = {};

  data["m9_13.1"] = {
    title: "13.1 Bearings and scale drawings",
    watermark: "Section 13.1: Bearings",
    subtopics: [
      { id: "card_0", label: "Key idea" },
      { id: "card_1", label: "Recall" },
      { id: "card_2", label: "Example" },
      { id: "card_3", label: "Check" },
    ],
    scenes: {
      card_0: [
        scene(
          "A bearing is a direction. Stand at one place, face north, then turn clockwise until you look at the other place. That turn is the bearing, always written with three figures.",
          "From north, clockwise, three figures.",
          "What is a bearing?",
          "The direction of one place from another, measured from north, clockwise, and written with three figures.",
          bg().concat(photo("assets/illustrations/m9_13_1_compass_bearings.jpg", "KEYWORD: bearing — from north, clockwise, three figures", SKY, BLUE, NAVY))
        ),
        scene(
          "Sweep clockwise from north. East is 090°, south is 180°, west is 270°. A bearing always has three digits, so forty-five degrees is written 045°.",
          "000° north · 090° east · 180° south · 270° west",
          "How must you write a bearing of 45°?",
          "045°. A bearing always has three figures.",
          bg()
            .concat([panel(36, 16, 728, 400, PAPER, "#cbd5e1")])
            .concat(compassRose(400, 210, 110))
            .concat([
              { type: "path", d: "M 400 100 A 110 110 0 0 1 510 210", stroke: ORANGE, width: 4, fill: "none" },
              lineTo(400, 210, 478, 132, BLUE, 3),
              label(468, 168, "045°", ORANGE, 16),
            ])
            .concat(caption("Write 045°, not 45°. Three digits every time.", CREAM, ORANGE, AMBER))
        ),
      ],
      card_1: [
        scene(
          "Worked example 13.1a. Tia cycles on a bearing of 280° for 20 km. The book uses the scale 1 cm represents 5 km.",
          "20 ÷ 5 = 4 cm on the drawing.",
          "Tia rides 20 km. The scale is 1 cm to 5 km. How long is the line?",
          "4 cm, because 20 ÷ 5 = 4.",
          bg().concat(photo("assets/illustrations/m9_13_1_tia_cycle.jpg", "FORMULA: distance on drawing = 20 ÷ 5 = 4 cm", MINT, GREEN, TEAL))
        ),
        scene(
          "First turn the real distance into a paper length. 1 cm represents 5 km, so 20 ÷ 5 = 4. The line on paper is 4 cm.",
          "FORMULA: 20 ÷ 5 = 4 cm",
          "What is 20 km on this scale drawing?",
          "4 cm.",
          bg()
            .concat([
              panel(36, 16, 728, 400, PAPER, "#cbd5e1"),
              label(400, 44, "Worked example 13.1a: Tia's ride", ORANGE, 16),
              panel(70, 70, 280, 150, SKY, BLUE),
              label(210, 104, "Real journey", NAVY, 13),
              label(210, 142, "Bearing 280°", INK, 18),
              label(210, 178, "Distance 20 km", INK, 16),
              panel(450, 70, 280, 150, MINT, GREEN),
              label(590, 104, "Scale drawing", TEAL, 13),
              label(590, 142, "1 cm represents 5 km", INK, 14),
              label(590, 178, "20 ÷ 5 = 4 cm", GREEN, 18),
            ])
            .concat(caption("FORMULA: distance on paper = real distance ÷ scale number", MINT, GREEN, TEAL))
        ),
        (function () {
          var a = { x: 400, y: 300 };
          var b = bearingPoint(a.x, a.y, 280, 120);
          return scene(
            "Draw a north arrow at the start. Measure 280° clockwise from north — that is 10° past west — then draw the 4 cm line. That line is Tia's whole journey.",
            "North, then 280° clockwise, then 4 cm.",
            "Where do you measure the 280° from?",
            "From a north arrow at Tia's starting point, sweeping clockwise.",
            bg()
              .concat([
                panel(36, 16, 728, 400, PAPER, "#cbd5e1"),
                label(400, 44, "Tia: 280° for 4 cm", INK, 16),
              ])
              .concat(northArrow(a.x, a.y, 90))
              .concat([
                { type: "path", d: "M 400 210 A 90 90 0 1 1 " + b.x.toFixed(1) + " " + b.y.toFixed(1), stroke: ORANGE, width: 3, fill: "none" },
                lineTo(a.x, a.y, b.x, b.y, BLUE, 4),
                dot(a.x, a.y, INK),
                dot(b.x, b.y, BLUE),
                label(a.x - 36, a.y + 8, "Start", INK, 13),
                label(b.x - 28, b.y - 8, "Tia", BLUE, 13),
                label(330, 250, "280°", ORANGE, 16),
              ])
              .concat(caption("280° is just past west. The 4 cm line shows every place she could be.", CREAM, ORANGE, AMBER)),
            true
          );
        })(),
      ],
      card_2: [
        scene(
          "Worked example 13.1b. A ship leaves harbour, sails 120 km on 085°, then 90 km on 135°. Scale: 1 cm represents 10 km.",
          "12 cm on 085°, then 9 cm on 135°. New north at the end of leg 1.",
          "How long are the two legs on the scale drawing?",
          "12 cm and 9 cm, because you divide 120 and 90 by 10.",
          bg().concat(photo("assets/illustrations/m9_13_1_ship_two_legs.jpg", "KEYWORD: each leg needs its own north arrow", SKY, BLUE, NAVY))
        ),
        scene(
          "Change each leg before you draw. 120 ÷ 10 = 12 cm and 90 ÷ 10 = 9 cm.",
          "FORMULA: first leg = 12 cm · second leg = 9 cm",
          "Why draw a second north arrow?",
          "The second bearing is measured from north at the ship, not from the harbour north.",
          bg()
            .concat([
              panel(36, 16, 728, 400, PAPER, "#cbd5e1"),
              label(400, 44, "Worked example 13.1b: two-leg ship journey", ORANGE, 16),
              panel(60, 80, 330, 200, SKY, BLUE),
              label(225, 118, "Leg 1 from harbour", NAVY, 14),
              label(225, 162, "Bearing 085°", INK, 18),
              label(225, 206, "120 ÷ 10 = 12 cm", GREEN, 16),
              panel(410, 80, 330, 200, CREAM, ORANGE),
              label(575, 118, "Leg 2 from the ship", AMBER, 14),
              label(575, 162, "Bearing 135°", INK, 18),
              label(575, 206, "90 ÷ 10 = 9 cm", GREEN, 16),
            ])
            .concat(caption("Each bearing needs its own north arrow at the start of that leg.", SKY, BLUE, NAVY))
        ),
        (function () {
          var h = { x: 220, y: 320 };
          var p1 = bearingPoint(h.x, h.y, 85, 150);
          var p2 = bearingPoint(p1.x, p1.y, 135, 110);
          return scene(
            "Draw north at the harbour and the 12 cm first leg. Then draw a new north arrow at the end of that line before you measure 135° for the 9 cm second leg.",
            "New north at the end of leg 1. Then 135°.",
            "Where is 135° measured from?",
            "From a north arrow at the ship, at the end of the first leg.",
            bg()
              .concat([
                panel(36, 16, 728, 400, PAPER, "#cbd5e1"),
                label(400, 40, "Harbour → 085° → 135°", INK, 15),
              ])
              .concat(northArrow(h.x, h.y, 70))
              .concat(northArrow(p1.x, p1.y, 60))
              .concat([
                lineTo(h.x, h.y, p1.x, p1.y, BLUE, 4),
                lineTo(p1.x, p1.y, p2.x, p2.y, ORANGE, 4),
                dot(h.x, h.y, INK),
                dot(p1.x, p1.y, BLUE),
                dot(p2.x, p2.y, ORANGE),
                label(h.x - 10, h.y + 22, "Harbour", INK, 12),
                label(p1.x + 36, p1.y - 6, "Ship", BLUE, 12),
                label(p2.x + 8, p2.y + 20, "End", ORANGE, 12),
                label(h.x + 70, h.y - 40, "085°", BLUE, 13),
                label(p1.x + 20, p1.y + 40, "135°", ORANGE, 13),
              ])
              .concat(caption("12 cm then 9 cm. Measure the return from the end back to harbour.", CREAM, ORANGE, AMBER)),
            true
          );
        })(),
      ],
      card_3: [
        scene(
          "Two lighthouses are 160 km apart, A north of B. A ship is on 152° from A and 042° from B. Scale 1 : 2 000 000. Change the ratio into kilometres first.",
          "1 cm represents 20 km, so 160 km is 8 cm. The ship is where the lines cross.",
          "What real distance does 1 cm represent on a 1 : 2 000 000 map?",
          "20 km. 2 000 000 cm is 20 000 m, which is 20 km.",
          bg().concat(photo("assets/illustrations/m9_13_1_lighthouses_scale.jpg", "KEYWORD: two bearings — the place is where the lines cross", MINT, GREEN, TEAL))
        ),
        scene(
          "1 : 2 000 000 means 1 cm on paper represents 2 000 000 cm on the ground. That is 20 km, so 160 km becomes 8 cm on the drawing.",
          "FORMULA: 2 000 000 cm = 20 km · 160 ÷ 20 = 8 cm",
          "How long is 160 km on this drawing?",
          "8 cm, because 160 ÷ 20 = 8.",
          bg()
            .concat([
              panel(36, 16, 728, 400, PAPER, "#cbd5e1"),
              label(400, 48, "Tip from the book: change the ratio into km", ORANGE, 15),
              panel(80, 90, 200, 120, SKY, BLUE),
              label(180, 130, "1 : 2 000 000", NAVY, 16),
              label(180, 168, "1 cm on paper", MUTED, 13),
              panel(300, 90, 200, 120, CREAM, ORANGE),
              label(400, 130, "2 000 000 cm", AMBER, 16),
              label(400, 168, "on the ground", MUTED, 13),
              panel(520, 90, 200, 120, MINT, GREEN),
              label(620, 130, "= 20 km", TEAL, 18),
              label(620, 168, "in real life", MUTED, 13),
              label(400, 256, "160 km apart → 160 ÷ 20 = 8 cm on paper", INK, 14),
              label(400, 294, "Ship: 152° from A and 042° from B", MUTED, 13),
              label(400, 328, "The ship is where the two lines cross", MUTED, 13),
            ])
            .concat(caption("Two bearings locate a point: draw both lines and find the crossing.", MINT, GREEN, TEAL))
        ),
      ],
    },
  };

  data["m9_13.2"] = {
    title: "13.2 Points on a line segment",
    watermark: "Section 13.2: Line segments",
    subtopics: [
      { id: "card_0", label: "Key idea" },
      { id: "card_1", label: "Recall" },
      { id: "card_2", label: "Example" },
      { id: "card_3", label: "Check" },
    ],
    scenes: {
      card_0: [
        scene(
          "The midpoint of AB in the book is (3, 3) — halfway. Now we find other fractions along the same segment: one third, one quarter, two fifths.",
          "Start at A. Add the fraction of the journey towards B.",
          "How do you find a point a fraction k of the way from A to B?",
          "Find B minus A, multiply that change by k, then add it to A.",
          bg().concat(photo("assets/illustrations/m9_13_2_fractions_along.jpg", "FORMULA: point = A + k × (B − A)", MINT, GREEN, TEAL))
        ),
        scene(
          "Work out the change in x and the change in y from A to B. Multiply both by k. Add those results to A. If A is (0, 0) you can just multiply the coordinates of B by k.",
          "Point = A + k × (B − A)",
          "What is the midpoint rule in words?",
          "Average the x-coordinates and average the y-coordinates.",
          bg()
            .concat([
              panel(36, 16, 728, 400, PAPER, "#cbd5e1"),
              label(400, 44, "Walk a fraction of the journey", ORANGE, 16),
              lineTo(120, 220, 680, 220, LINE, 3),
              dot(120, 220, BLUE),
              dot(680, 220, ORANGE),
              label(120, 250, "A", BLUE, 16),
              label(680, 250, "B", ORANGE, 16),
              dot(306, 220, GREEN),
              label(306, 188, "1/3", GREEN, 14),
              dot(400, 220, GREEN),
              label(400, 188, "1/2", MUTED, 13),
              dot(493, 220, GREEN),
              label(493, 188, "2/3", GREEN, 14),
            ])
            .concat(caption("FORMULA: point = A + k × (B − A)", MINT, GREEN, TEAL))
        ),
      ],
      card_1: [
        scene(
          "Worked example 13.2. LM is horizontal from L(0, 5) to M(6, 5). PQ goes from P(0, 0) to Q(8, 4).",
          "One third along LM is (2, 5). One quarter along PQ is (2, 1).",
          "What are the coordinates one third of the way along LM?",
          "(2, 5). x moves from 0 to 6, so one third is 2. y stays 5.",
          bg().concat(photo("assets/illustrations/m9_13_2_lm_pq.jpg", "FORMULA: LM (2, 5) · PQ (2, 1)", SKY, BLUE, NAVY))
        ),
        scene(
          "LM is horizontal, so only x changes. 6 ÷ 3 = 2 and y stays 5, so one third along LM is (2, 5).",
          "One third along LM is (2, 5).",
          "Why does y stay 5 on LM?",
          "LM is horizontal. Every point on it has y = 5.",
          bg()
            .concat([panel(36, 16, 728, 400, PAPER, "#cbd5e1"), label(400, 36, "LM is horizontal, so only x changes", INK, 14)])
            .concat(grid(90, 70, 36, 16, 8))
            .concat([
              lineTo(90, 70 + 3 * 36, 90 + 6 * 36, 70 + 3 * 36, BLUE, 4),
              dot(90, 70 + 3 * 36, INK),
              dot(90 + 6 * 36, 70 + 3 * 36, BLUE),
              label(78, 70 + 3 * 36 - 16, "L(0, 5)", INK, 12),
              label(90 + 6 * 36 + 36, 70 + 3 * 36 - 16, "M(6, 5)", BLUE, 12),
              dot(90 + 2 * 36, 70 + 3 * 36, GREEN),
              label(90 + 2 * 36, 70 + 3 * 36 + 24, "(2, 5)", GREEN, 13),
            ])
            .concat(caption("Horizontal line: split the x-gap. y does not change.", SKY, BLUE, NAVY))
        ),
        scene(
          "PQ goes from P(0, 0) to Q(8, 4). One quarter of the way: x is 8 ÷ 4 = 2 and y is 4 ÷ 4 = 1.",
          "One quarter along PQ is (2, 1).",
          "What are the coordinates one quarter of the way along PQ?",
          "(2, 1). A quarter of the run is 2 and a quarter of the rise is 1.",
          [
            lineTo(90, 70 + 8 * 36, 90 + 8 * 36, 70 + 4 * 36, ORANGE, 4),
            dot(90, 70 + 8 * 36, INK),
            dot(90 + 8 * 36, 70 + 4 * 36, ORANGE),
            label(118, 70 + 8 * 36 - 8, "P(0, 0)", INK, 12),
            label(90 + 8 * 36 + 28, 70 + 4 * 36, "Q(8, 4)", ORANGE, 12),
            dot(90 + 2 * 36, 70 + 7 * 36, GREEN),
            label(90 + 2 * 36 + 28, 70 + 7 * 36 + 6, "(2, 1)", GREEN, 13),
          ].concat(caption("Diagonal: split both the run and the rise by the same fraction.", CREAM, ORANGE, AMBER)),
          false
        ),
      ],
      card_2: [
        scene(
          "Chesa and Tefo find the point two fifths of the way from S(0, 0) to T(10, 5). Chesa draws it. Tefo multiplies.",
          "Both get (4, 2). Tefo’s shortcut only works from the origin.",
          "What point is two fifths of the way from S(0, 0) to T(10, 5)?",
          "(4, 2).",
          bg().concat(photo("assets/illustrations/m9_13_2_chesa_tefo.jpg", "FORMULA: (2/5)×10 = 4 across, (2/5)×5 = 2 up", MINT, GREEN, TEAL))
        ),
        scene(
          "Chesa draws the segment. The run is 10 and the rise is 5. Two fifths of 10 is 4. Two fifths of 5 is 2. The point is (4, 2).",
          "Chesa's diagram: 2/5 across and 2/5 up.",
          "What are two fifths of the run and the rise?",
          "4 across and 2 up.",
          bg()
            .concat([panel(36, 16, 728, 400, PAPER, "#cbd5e1"), label(400, 36, "Chesa draws it · Tefo multiplies", INK, 14)])
            .concat(grid(80, 60, 28, 16, 10))
            .concat([
              lineTo(80, 60 + 10 * 28, 80 + 10 * 28, 60 + 5 * 28, BLUE, 3),
              dot(80, 60 + 10 * 28, INK),
              dot(80 + 10 * 28, 60 + 5 * 28, BLUE),
              label(104, 60 + 10 * 28 - 10, "S", INK, 13),
              label(80 + 10 * 28 + 16, 60 + 5 * 28, "T", BLUE, 13),
              dot(80 + 4 * 28, 60 + 8 * 28, GREEN),
              label(80 + 4 * 28, 60 + 8 * 28 + 22, "(4, 2)", GREEN, 13),
            ])
            .concat(caption("Tefo: (2/5)×10 and (2/5)×5, because S is the origin.", MINT, GREEN, TEAL))
        ),
        scene(
          "Tefo skips the drawing: (2/5) × (10, 5) = (4, 2). That shortcut only works when the start is (0, 0). One quarter of OM from O(0, 0) to M(16, 12) is (4, 3), not (3, 4).",
          "Origin start: multiply. Any other start: add on to A.",
          "When is Tefo's multiply-the-coordinates method safe?",
          "Only when the starting point is (0, 0). Otherwise add the fraction of the difference onto A.",
          [
            panel(500, 70, 250, 130, CREAM, ORANGE),
            label(625, 104, "Tefo's shortcut", AMBER, 13),
            label(625, 140, "(2/5)×(10, 5)", INK, 14),
            label(625, 172, "= (4, 2)", GREEN, 16),
          ].concat(caption("Both methods agree here. They will not if S is not the origin.", CREAM, ORANGE, AMBER)),
          false
        ),
      ],
      card_3: [
        scene(
          "Briana had A(3, 2) and B(8, 12). C is one fifth along AB. She found the steps +1 and +2, then wrote C as (1, 2). That point is not on AB.",
          "The steps are not the coordinates. Add them to A.",
          "What extra step did Briana miss?",
          "She had to add (1, 2) onto A(3, 2). C is (4, 4), not (1, 2).",
          bg().concat(photo("assets/illustrations/m9_13_2_briana.jpg", "FORMULA: C = (3, 2) + (1, 2) = (4, 4)", CREAM, RED, "#991b1b"))
        ),
        scene(
          "Look at the diagram first. (1, 2) sits left of A, so it cannot be on AB. Difference is (5, 10). One fifth is (1, 2).",
          "The steps are not the coordinates. Add them to A.",
          "Why can C not be (1, 2)?",
          "Because (1, 2) does not sit on AB. C must be to the right of A.",
          bg()
            .concat([panel(36, 16, 728, 400, PAPER, "#cbd5e1"), label(400, 36, "Briana's mistake", RED, 15)])
            .concat(grid(70, 50, 26, 16, 12))
            .concat([
              lineTo(70 + 3 * 26, 50 + 10 * 26, 70 + 8 * 26, 50 + 0 * 26, BLUE, 3),
              dot(70 + 3 * 26, 50 + 10 * 26, INK),
              dot(70 + 8 * 26, 50 + 0 * 26, BLUE),
              label(70 + 3 * 26 - 8, 50 + 10 * 26 + 18, "A(3, 2)", INK, 12),
              label(70 + 8 * 26 + 28, 50 + 8, "B(8, 12)", BLUE, 12),
              dot(70 + 1 * 26, 50 + 10 * 26, RED),
              label(70 + 1 * 26 + 8, 50 + 10 * 26 - 18, "(1, 2) miss", RED, 12),
            ])
            .concat(caption("Look first: C must sit on AB, to the right of A.", CREAM, RED, "#991b1b"))
        ),
        scene(
          "Add the steps onto A: (3 + 1, 2 + 2) = (4, 4). That point sits on AB. AC : AB is 1 : 5 and AC : BC is 1 : 4.",
          "C = (3, 2) + (1, 2) = (4, 4).",
          "What are the correct coordinates of C?",
          "(4, 4).",
          [
            dot(70 + 4 * 26, 50 + 8 * 26, GREEN),
            label(70 + 4 * 26 + 36, 50 + 8 * 26 + 4, "C(4, 4)", GREEN, 13),
          ].concat(caption("Always add the fraction of the difference onto the starting point.", MINT, GREEN, TEAL)),
          false
        ),
      ],
    },
  };

  data["m9_13.3"] = {
    title: "13.3 Transformations",
    watermark: "Section 13.3: Combined moves",
    subtopics: [
      { id: "card_0", label: "Key idea" },
      { id: "card_1", label: "Recall" },
      { id: "card_2", label: "Example" },
      { id: "card_3", label: "Check" },
    ],
    scenes: {
      card_0: [
        scene(
          "The wallpaper flowers only change position. To describe a transformation you must give every detail. Missing the centre, the line or the vector loses the mark.",
          "Name the move and give its facts. Flip, slide or spin stay congruent.",
          "What must you give for a rotation?",
          "The centre, the angle, and clockwise or anticlockwise. A 180° turn does not need a direction.",
          bg().concat(photo("assets/illustrations/m9_13_3_three_moves.jpg", "KEYWORD: congruent — same shape and size after flip, slide or spin", MINT, GREEN, TEAL))
        ),
        scene(
          "Reflection: give the equation of the mirror line. Translation: give the column vector. Rotation: give the centre, the angle, and the direction. A 180° turn needs no direction.",
          "Name the move and give its facts.",
          "What must you give for a translation?",
          "The column vector. Top number is the x-shift, bottom number is the y-shift.",
          bg()
            .concat([
              panel(36, 16, 728, 400, PAPER, "#cbd5e1"),
              label(400, 44, "Three congruence moves", ORANGE, 16),
              panel(56, 80, 220, 220, SKY, BLUE),
              label(166, 118, "Reflection", NAVY, 15),
              label(166, 160, "Give the mirror", INK, 13),
              label(166, 196, "line: x = 4", INK, 14),
              label(166, 232, "or y = 1", INK, 14),
              panel(290, 80, 220, 220, MINT, GREEN),
              label(400, 118, "Translation", TEAL, 15),
              label(400, 160, "Give the vector", INK, 13),
              label(400, 204, "(x shift, y shift)", INK, 14),
              label(400, 248, "(-2, 3) = left 2, up 3", MUTED, 12),
              panel(524, 80, 220, 220, CREAM, ORANGE),
              label(634, 118, "Rotation", AMBER, 15),
              label(634, 156, "Centre", INK, 13),
              label(634, 188, "Angle", INK, 13),
              label(634, 220, "Direction", INK, 13),
              label(634, 256, "180°: no direction", MUTED, 12),
            ])
            .concat(caption("After these three, the object and image are congruent.", MINT, GREEN, TEAL))
        ),
      ],
      card_1: [
        scene(
          "Worked example 13.3. Start with triangle A. First reflect it in the y-axis. Then rotate that image 90° clockwise about (−1, 1) to get E.",
          "Reflect, then rotate. A and E are congruent.",
          "Are triangle A and triangle E congruent?",
          "Yes. Reflection and rotation keep every length and every angle.",
          bg().concat(photo("assets/illustrations/m9_13_3_reflect_then_rotate.jpg", "FORMULA: reflect in y-axis, then 90° clockwise about (−1, 1)", SKY, BLUE, NAVY))
        ),
        scene(
          "First reflect A in the y-axis. Every x-coordinate changes sign. y stays the same. A point (2, 3) becomes (−2, 3).",
          "Reflect A in the y-axis first.",
          "What happens to a point (2, 3) in a reflection in the y-axis?",
          "It becomes (−2, 3). x changes sign.",
          bg()
            .concat([panel(36, 16, 728, 400, PAPER, "#cbd5e1"), label(400, 34, "Step 1 · reflect in the y-axis", INK, 14)])
            .concat(grid(160, 50, 28, 16, 12))
            .concat([
              lineTo(160 + 8 * 28, 50, 160 + 8 * 28, 50 + 12 * 28, RED, 2),
              label(160 + 8 * 28 + 24, 66, "y-axis", RED, 12),
              { type: "path", d: "M 412 250 L 468 250 L 412 194 Z", stroke: BLUE, width: 2.5, fill: "rgba(37,99,235,0.25)" },
              label(456, 274, "A", BLUE, 14),
              { type: "path", d: "M 356 250 L 300 250 L 356 194 Z", stroke: MUTED, width: 2.5, fill: "rgba(71,85,105,0.18)" },
              label(300, 274, "A'", MUTED, 13),
            ])
            .concat(caption("The dashed triangle is the reflection. Next we rotate that image.", SKY, BLUE, NAVY))
        ),
        scene(
          "Now rotate the dashed triangle 90° clockwise about the orange centre (−1, 1). The final image is E. A and E are the same size and shape, so they are congruent.",
          "Then 90° clockwise about (−1, 1) → E.",
          "Are triangle A and triangle E congruent?",
          "Yes. Reflection and rotation keep every length and every angle.",
          [
            { type: "circle", cx: 160 + 7 * 28, cy: 50 + 5 * 28, r: 6, fill: ORANGE, stroke: ORANGE, width: 1 },
            label(160 + 7 * 28 - 36, 50 + 5 * 28 - 12, "(-1, 1)", ORANGE, 11),
            { type: "path", d: "M 328 222 L 328 278 L 384 222 Z", stroke: GREEN, width: 2.5, fill: "rgba(5,150,105,0.25)" },
            label(360, 300, "E", GREEN, 14),
          ].concat(caption("Object and image stay congruent after a combination too.", MINT, GREEN, TEAL)),
          false
        ),
      ],
      card_2: [
        scene(
          "On the same book grid: A to B is a flip in y = 1. B to C is a 90° anticlockwise spin about (1, −3). C to D slides two left and three up.",
          "Name the line, or the centre and angle, or the vector.",
          "What is the column vector for C to D?",
          "(−2, 3): two squares left and three squares up.",
          bg().concat(photo("assets/illustrations/m9_13_3_describe_each.jpg", "FORMULA: C to D is the column vector (−2, 3)", CREAM, ORANGE, AMBER))
        ),
        scene(
          "Write the word and the facts. A to B: Reflection in y = 1. B to C: Rotation 90° anticlockwise, centre (1, −3). C to D: Translation (−2, 3).",
          "Name the line, or the centre and angle, or the vector.",
          "What three facts must you give for the rotation B to C?",
          "Centre (1, −3), angle 90°, anticlockwise.",
          bg()
            .concat([
              panel(36, 16, 728, 400, PAPER, "#cbd5e1"),
              label(400, 40, "Describe each single move", ORANGE, 15),
              panel(60, 80, 220, 200, SKY, BLUE),
              label(170, 118, "A → B", NAVY, 15),
              label(170, 164, "Reflection", INK, 14),
              label(170, 204, "in y = 1", BLUE, 16),
              panel(290, 80, 220, 200, CREAM, ORANGE),
              label(400, 118, "B → C", AMBER, 15),
              label(400, 156, "Rotation 90° ACW", INK, 13),
              label(400, 196, "centre (1, −3)", INK, 14),
              label(400, 236, "purple dot on the grid", MUTED, 11),
              panel(520, 80, 220, 200, MINT, GREEN),
              label(630, 118, "C → D", TEAL, 15),
              label(630, 164, "Translation", INK, 14),
              label(630, 208, "(-2, 3)", GREEN, 18),
            ])
            .concat(caption("Write the word and the facts. 'It moved' is not enough.", CREAM, ORANGE, AMBER))
        ),
      ],
      card_3: [
        scene(
          "The book asks you to do two transformations in both orders. Reflect shape X in y = 1, then rotate 90° anticlockwise about (2, −3). Then swap the order.",
          "Try both orders. Compare the final images.",
          "Does the order of combined transformations matter?",
          "Usually yes. Reflect-then-rotate can finish in a different place from rotate-then-reflect.",
          bg().concat(photo("assets/illustrations/m9_13_3_order_matters.jpg", "Order usually matters. Draw both and compare.", CREAM, ORANGE, AMBER))
        ),
        scene(
          "On the first grid: reflect then rotate. On the second: rotate then reflect. Most of the time the finishes are different.",
          "Try both orders. Compare the final images.",
          "Does the order of combined transformations matter?",
          "Usually yes. Reflect-then-rotate can finish in a different place from rotate-then-reflect.",
          bg()
            .concat([
              panel(36, 16, 728, 400, PAPER, "#cbd5e1"),
              label(400, 44, "Order usually matters", ORANGE, 16),
              panel(70, 90, 300, 220, SKY, BLUE),
              label(220, 130, "Order 1", NAVY, 14),
              label(220, 176, "1. Reflect in y = 1", INK, 14),
              label(220, 216, "2. Rotate 90° ACW", INK, 14),
              label(220, 256, "centre (2, −3)", MUTED, 13),
              panel(430, 90, 300, 220, CREAM, ORANGE),
              label(580, 130, "Order 2", AMBER, 14),
              label(580, 176, "1. Rotate 90° ACW", INK, 14),
              label(580, 216, "2. Reflect in y = 1", INK, 14),
              label(580, 256, "Different finish", RED, 14),
            ])
            .concat(caption("Draw both. If the images match, that pair is a special case.", CREAM, ORANGE, AMBER))
        ),
        scene(
          "After any mix of reflections, translations and rotations, matching sides stay equal, matching angles stay equal, and the shapes are congruent. Enlargement is the one that changes size.",
          "Lengths equal · angles equal · congruent.",
          "Which transformation stops the object and image being congruent?",
          "Enlargement, because it changes lengths. The other three keep the shape the same size.",
          [].concat(caption("Congruent after flip, slide or spin — even when you combine them.", MINT, GREEN, TEAL)),
          false
        ),
      ],
    },
  };

  data["m9_13.4"] = {
    title: "13.4 Enlarging shapes",
    watermark: "Section 13.4: Enlargement",
    subtopics: [
      { id: "card_0", label: "Key idea" },
      { id: "card_1", label: "Recall" },
      { id: "card_2", label: "Example" },
      { id: "card_3", label: "Check" },
    ],
    scenes: {
      card_0: [
        scene(
          "An enlargement needs a scale factor and a centre. In Stage 8 the centre was outside or on the shape. Now it can sit inside. Ray lines through matching vertices all meet at that centre.",
          "Give the scale factor and the centre.",
          "What two facts describe an enlargement?",
          "The scale factor and the position of the centre of enlargement.",
          bg().concat(photo("assets/illustrations/m9_13_4_enlargement_intro.jpg", "KEYWORD: ray lines meet at the centre, even if it is inside", SKY, BLUE, NAVY))
        ),
        scene(
          "Scale factor 2 doubles every length. Scale factor 3 triples them. Angles stay the same, so the object and image are similar, not congruent.",
          "Give the scale factor and the centre.",
          "Does an enlargement keep the object and image congruent?",
          "No. Size changes, so they are similar, not congruent.",
          bg()
            .concat([
              panel(36, 16, 728, 400, PAPER, "#cbd5e1"),
              label(400, 40, "Centre can be inside the shape", ORANGE, 15),
              { type: "path", d: "M 300 200 L 380 200 L 360 260 L 320 260 Z", stroke: BLUE, width: 2.5, fill: "rgba(37,99,235,0.2)" },
              { type: "circle", cx: 340, cy: 230, r: 5, fill: ORANGE, stroke: ORANGE, width: 1 },
              label(340, 214, "centre", ORANGE, 12),
              lineTo(340, 230, 220, 150, MUTED, 1.5),
              lineTo(340, 230, 500, 150, MUTED, 1.5),
              lineTo(340, 230, 460, 330, MUTED, 1.5),
              lineTo(340, 230, 260, 330, MUTED, 1.5),
              { type: "path", d: "M 220 150 L 500 150 L 460 330 L 260 330 Z", stroke: GREEN, width: 2.5, fill: "rgba(5,150,105,0.12)" },
              label(250, 188, "object", BLUE, 12),
              label(470, 188, "image, SF 2", GREEN, 12),
            ])
            .concat(caption("Ray lines go through matching corners and cross at the centre.", SKY, BLUE, NAVY))
        ),
      ],
      card_1: [
        scene(
          "Worked example 13.4a. The closest vertex of the trapezium is 1 left and 1 down from the centre. Scale factor 2 sends that vertex 2 left and 2 down. Then double every other step.",
          "Double the vector from the centre to each vertex.",
          "A vertex is 1 left and 1 down from the centre. Where is it after scale factor 2?",
          "2 left and 2 down from the centre.",
          bg().concat(photo("assets/illustrations/m9_13_4_trapezium_sf2.jpg", "Double each step from the inside centre. Sides double.", CREAM, ORANGE, AMBER))
        ),
        scene(
          "Mark the image vertex two left and two down, then finish the trapezium. Each side of the image is twice the matching side of the object.",
          "Double the vector from the centre to each vertex.",
          "Are the object and the enlargement congruent?",
          "No. Enlargement changes size, so they are similar, not congruent.",
          bg()
            .concat([
              panel(36, 16, 728, 400, PAPER, "#cbd5e1"),
              label(400, 36, "Scale factor 2 from an inside centre", INK, 14),
            ])
            .concat(grid(180, 60, 32, 14, 10))
            .concat([
              { type: "circle", cx: 180 + 7 * 32, cy: 60 + 5 * 32, r: 6, fill: ORANGE, stroke: ORANGE, width: 1 },
              { type: "path", d: "M 372 188 L 436 188 L 420 236 L 388 236 Z", stroke: BLUE, width: 2.5, fill: "rgba(37,99,235,0.25)" },
              label(400, 172, "object", BLUE, 12),
            ])
            .concat(caption("Mark the image vertex, then finish the trapezium. Sides double.", CREAM, ORANGE, AMBER))
        ),
        scene(
          "Each side of the image is twice the matching side of the object. The shape is similar, not congruent, because the size has changed. Leave space — it grows in every direction.",
          "Same angles. Lengths × 2. Not congruent.",
          "Are the object and the enlargement congruent?",
          "No. Enlargement changes size, so they are similar, not congruent.",
          [
            { type: "path", d: "M 308 124 L 500 124 L 468 284 L 340 284 Z", stroke: GREEN, width: 2.5, fill: "rgba(5,150,105,0.12)" },
            label(500, 110, "image", GREEN, 13),
          ].concat(caption("Leave space around the shape — it grows in every direction.", MINT, GREEN, TEAL)),
          false
        ),
      ],
      card_2: [
        scene(
          "Triangle B is an enlargement of triangle A. Compare matching sides: 2 squares and 4 squares. Scale factor = 4 ÷ 2 = 2. Purple ray lines meet at (4, 3).",
          "Scale factor = image length ÷ object length. Centre = where rays meet.",
          "Matching sides are 2 squares and 4 squares. What is the scale factor?",
          "2, because 4 ÷ 2 = 2.",
          bg().concat(photo("assets/illustrations/m9_13_4_ray_lines.jpg", "FORMULA: scale factor = 4 ÷ 2 = 2, centre (4, 3)", SKY, BLUE, NAVY))
        ),
        scene(
          "First work out the scale factor. Matching sides 4 squares and 2 squares give 4 ÷ 2 = 2.",
          "Scale factor = image length ÷ object length.",
          "Matching sides are 2 squares and 4 squares. What is the scale factor?",
          "2, because 4 ÷ 2 = 2.",
          bg()
            .concat([
              panel(36, 16, 728, 400, PAPER, "#cbd5e1"),
              label(400, 36, "Worked example: describe the enlargement", INK, 14),
            ])
            .concat(grid(150, 50, 30, 16, 11))
            .concat([
              { type: "path", d: "M 330 260 L 390 260 L 330 200 Z", stroke: BLUE, width: 2.5, fill: "rgba(37,99,235,0.25)" },
              label(318, 278, "A", BLUE, 14),
              { type: "path", d: "M 270 320 L 390 320 L 270 200 Z", stroke: GREEN, width: 2.5, fill: "rgba(5,150,105,0.12)" },
              label(258, 340, "B", GREEN, 14),
            ])
            .concat(caption("4 ÷ 2 = 2, so the scale factor is 2. Next find the centre.", SKY, BLUE, NAVY))
        ),
        scene(
          "Draw ray lines through corresponding vertices. In the book those purple lines meet at (4, 3). That crossing is the centre of enlargement. Arun thought rays would fail if the centre sat inside — they do not.",
          "Enlargement, scale factor 2, centre (4, 3).",
          "How do you find the centre of enlargement?",
          "Draw ray lines through matching vertices. They meet at the centre.",
          [
            lineTo(270, 320, 390, 140, PURPLE, 2),
            lineTo(390, 320, 390, 140, PURPLE, 2),
            lineTo(270, 200, 390, 140, PURPLE, 2),
            { type: "circle", cx: 390, cy: 140, r: 6, fill: PURPLE, stroke: PURPLE, width: 1 },
            label(430, 132, "(4, 3)", PURPLE, 13),
          ].concat(caption("Ray lines still work when the centre is inside both shapes.", CREAM, PURPLE, "#5b21b6")),
          false
        ),
      ],
      card_3: [
        scene(
          "Lengths and perimeters multiply by the scale factor k. Areas multiply by k squared. A scale factor of 3 makes lengths 3 times bigger and area 9 times bigger.",
          "Perimeter × k. Area × k².",
          "What happens to area when lengths are enlarged by scale factor 3?",
          "Area is multiplied by 9, because 3² = 9.",
          bg().concat(photo("assets/illustrations/m9_13_4_perimeter_area.jpg", "FORMULA: perimeter × k · area × k²   →   42 cm and 90 cm²", MINT, GREEN, TEAL))
        ),
        scene(
          "Squares A, B, C, D in the book. Scale factors 2, 3 and 4 give area ratios 1 : 4, 1 : 9 and 1 : 16.",
          "Perimeter × k. Area × k².",
          "A : C has scale factor 3. What is the ratio of areas?",
          "1 : 9, because 3² = 9.",
          bg()
            .concat([
              panel(36, 16, 728, 400, PAPER, "#cbd5e1"),
              label(400, 44, "Squares A, B, C, D in the book", ORANGE, 15),
              panel(56, 80, 170, 200, SKY, BLUE),
              label(141, 120, "A : B", NAVY, 14),
              label(141, 160, "SF 2", INK, 16),
              label(141, 200, "lengths 1 : 2", MUTED, 12),
              label(141, 236, "areas 1 : 4", GREEN, 13),
              panel(238, 80, 170, 200, CREAM, ORANGE),
              label(323, 120, "A : C", AMBER, 14),
              label(323, 160, "SF 3", INK, 16),
              label(323, 200, "lengths 1 : 3", MUTED, 12),
              label(323, 236, "areas 1 : 9", GREEN, 13),
              panel(420, 80, 170, 200, MINT, GREEN),
              label(505, 120, "A : D", TEAL, 14),
              label(505, 160, "SF 4", INK, 16),
              label(505, 200, "lengths 1 : 4", MUTED, 12),
              label(505, 236, "areas 1 : 16", GREEN, 13),
              panel(602, 80, 142, 200, PAPER, LINE),
              label(673, 140, "Rule", INK, 14),
              label(673, 184, "P × k", INK, 14),
              label(673, 224, "A × k²", GREEN, 16),
            ])
            .concat(caption("The same rules work for any shape, not only squares.", SKY, BLUE, NAVY))
        ),
        scene(
          "Rectangle R has perimeter 14 cm and area 10 cm². Enlarge by scale factor 3 to make T. Perimeter becomes 14 × 3 = 42 cm. Area becomes 10 × 9 = 90 cm². Triangle G: 12 cm and 6 cm², scale factor 5, becomes 60 cm and 150 cm².",
          "14 × 3 = 42 cm. 10 × 3² = 90 cm².",
          "R has perimeter 14 cm and area 10 cm². After scale factor 3, what is T?",
          "Perimeter 42 cm and area 90 cm².",
          [].concat(caption("Triangle G: 12 cm and 6 cm², SF 5 → 60 cm and 150 cm².", MINT, GREEN, TEAL)),
          false
        ),
      ],
    },
  };

  Object.assign(window.INTERACTIVE_WHITEBOARD_DATA, data);
})();
