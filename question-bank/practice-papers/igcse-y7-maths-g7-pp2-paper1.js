(function () {
  var pentagonSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 200" role="img" aria-label="Pentagons P and Q">' +
    '<rect width="360" height="200" rx="10" fill="#0f172a" stroke="#64748b"/>' +
    '<text x="90" y="24" text-anchor="middle" fill="#93c5fd" font-weight="700">P</text>' +
    '<polygon points="90,50 120,90 105,140 75,140 60,90" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="2"/>' +
    '<text x="270" y="24" text-anchor="middle" fill="#93c5fd" font-weight="700">Q</text>' +
    '<polygon points="270,70 310,100 295,150 245,150 230,100" fill="rgba(167,139,250,0.2)" stroke="#a78bfa" stroke-width="2"/>' +
    '<text x="180" y="188" text-anchor="middle" fill="#94a3b8" font-size="11">One transformation maps P onto Q (not to scale)</text></svg>';

  var spinnersSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 160" role="img" aria-label="Spinners A and B">' +
    '<rect width="360" height="160" rx="10" fill="#0f172a" stroke="#64748b"/>' +
    '<circle cx="100" cy="80" r="45" fill="none" stroke="#38bdf8" stroke-width="2"/>' +
    '<text x="100" y="85" text-anchor="middle" fill="#f8fafc" font-size="12">Spinner A</text>' +
    '<text x="100" y="140" text-anchor="middle" fill="#94a3b8" font-size="10">Sections 1, 2, 3</text>' +
    '<circle cx="260" cy="80" r="45" fill="none" stroke="#f472b6" stroke-width="2"/>' +
    '<text x="260" y="85" text-anchor="middle" fill="#f8fafc" font-size="12">Spinner B</text>' +
    '<text x="260" y="140" text-anchor="middle" fill="#94a3b8" font-size="10">Sections 1–5</text></svg>';

  var triangleCutSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Right-angled triangle cut into quadrilaterals">' +
    '<rect width="320" height="200" rx="10" fill="#0f172a" stroke="#64748b"/>' +
    '<polygon points="40,160 280,160 280,40" fill="none" stroke="#38bdf8" stroke-width="2"/>' +
    '<text x="50" y="175" fill="#fcd34d">84°</text><text x="255" y="55" fill="#fcd34d">24°</text>' +
    '<text x="130" y="100" fill="#fcd34d">154°</text>' +
    '<line x1="40" y1="160" x2="200" y2="90" stroke="#f472b6" stroke-dasharray="4 3"/>' +
    '<text x="160" y="188" text-anchor="middle" fill="#94a3b8" font-size="10">NOT TO SCALE — find five missing angles in the two quadrilaterals</text></svg>';

  var shapesAreaSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 180" role="img" aria-label="Parallelogram and trapezium">' +
    '<rect width="360" height="180" rx="10" fill="#0f172a" stroke="#64748b"/>' +
    '<text x="95" y="22" text-anchor="middle" fill="#93c5fd" font-size="11">Parallelogram</text>' +
    '<polygon points="30,130 110,130 130,70 50,70" fill="rgba(56,189,248,0.15)" stroke="#38bdf8"/>' +
    '<text x="95" y="145" text-anchor="middle" fill="#86efac" font-size="10">See paper for dimensions</text>' +
    '<text x="265" y="22" text-anchor="middle" fill="#93c5fd" font-size="11">Trapezium</text>' +
    '<polygon points="200,130 320,130 290,60 230,60" fill="rgba(167,139,250,0.15)" stroke="#a78bfa"/>' +
    '<text x="265" y="145" text-anchor="middle" fill="#86efac" font-size="10">See paper for dimensions</text></svg>';

  window.PRACTICE_PAPERS = window.PRACTICE_PAPERS || [];
  window.PRACTICE_PAPERS.push({
    id: "igcse-y7-maths-pp2-paper1",
    board: "IGCSE",
    year: 7,
    subject: "mathematics",
    subjectTitle: "Mathematics",
    title: "Practice Paper II (2024–25) — Paper 1",
    code: "0862",
    duration: "1 hour",
    totalMarks: 50,
    school: "Bharati Vidyapeeth Rabindranath Tagore School of Excellence",
    source: {
      file:
        "content-source/IGCSE/Year 7/Mathematics/Practice papers/G7_PP-2_Math_Paper_1_1_.pdf",
      reference: "PP/Math/SG/03/2025/P1",
    },
    instructions: [
      "Answer all questions.",
      "Calculators are not allowed.",
      "Show all necessary working.",
    ],
    questions: [
      {
        id: "pp-q1",
        number: 1,
        marks: 2,
        prompt: "Fill in the missing terms in this sequence: 32, 26, …, 14, 8, 2, …, −10.",
        answer: "20 and −4",
      },
      {
        id: "pp-q2",
        number: 2,
        marks: 1,
        prompt:
          "Circle the correct calculation that shows how to decrease $200 by 25%. Options: (a) 200 × 0.25 (b) 200 × −0.25 (c) 200 × 0.75 (d) 200 × 1.25",
        answer: "(c) 200 × 0.75",
        note: "After a 25% decrease, 75% of the original amount remains.",
      },
      {
        id: "pp-q3a",
        number: 3,
        label: "a",
        marks: 1,
        prompt: "Fill in the missing number: −63 ÷ _____ = −7",
        answer: "9",
      },
      {
        id: "pp-q3b",
        number: 3,
        label: "b",
        marks: 1,
        prompt: "Fill in the missing value: 10 000 =",
        answer: "10⁴ (or 10000 = 10 × 10 × 10 × 10)",
      },
      {
        id: "pp-q3c",
        number: 3,
        label: "c",
        marks: 1,
        prompt: "Simplify using index laws: 8¹² ÷ 8³ = 8^?",
        answer: "8⁹",
      },
      {
        id: "pp-q3d",
        number: 3,
        label: "d",
        marks: 1,
        prompt: "Work out: √196",
        answer: "14",
      },
      {
        id: "pp-q4a",
        number: 4,
        label: "a",
        marks: 1,
        prompt:
          "Carlos has n sweets. Angelique has half as many as Carlos. Write an expression for the number of sweets Angelique has.",
        answer: "n/2 (or 0.5n)",
      },
      {
        id: "pp-q4b",
        number: 4,
        label: "b",
        marks: 1,
        prompt: "Safia has 4 more sweets than Angelique. Write an expression for Safia’s sweets (in terms of n).",
        answer: "n/2 + 4",
      },
      {
        id: "pp-q4c",
        number: 4,
        label: "c",
        marks: 2,
        prompt: "Write an expression for the total number of sweets for Carlos, Angelique and Safia. Simplify.",
        answer: "2n + 4",
      },
      {
        id: "pp-q5a",
        number: 5,
        label: "a",
        marks: 2,
        prompt: "Work out: 0.52 × 6.1",
        answer: "3.172",
      },
      {
        id: "pp-q5b",
        number: 5,
        label: "b",
        marks: 2,
        prompt: "Work out: 996 ÷ 0.8",
        answer: "1245",
      },
      {
        id: "pp-q6a",
        number: 6,
        label: "a",
        marks: 2,
        prompt:
          "The diagram shows pentagons P and Q. One transformation maps P onto Q. Write down the type of transformation.",
        diagramSvg: pentagonSvg,
        answer: "Enlargement (centre of enlargement shown on paper)",
      },
      {
        id: "pp-q6b",
        number: 6,
        label: "b",
        marks: 1,
        prompt: "Write down the scale factor of the transformation from P to Q.",
        diagramSvg: pentagonSvg,
        answer: "Read from paper (typically 2 or 1.5 — use original PDF diagram)",
        note: "Open the PDF link below for exact measurements.",
      },
      {
        id: "pp-q7",
        number: 7,
        marks: 2,
        prompt:
          "Work out: 4 + 3 3/7 + 5 (mixed numbers). Give your answer as a mixed number in simplest form.",
        answer: "12 3/7",
        note: "Check wording on the original paper if your copy differs.",
      },
      {
        id: "pp-q8",
        number: 8,
        marks: 1,
        prompt: "Write this ratio in its simplest form: 2.4 m : 45 cm",
        answer: "16 : 3",
      },
      {
        id: "pp-q9a",
        number: 9,
        label: "a",
        marks: 1,
        prompt:
          "Eva says 5 + 3 × 2² = 32. Explain why Eva is not correct (order of operations).",
        answer: "Multiplication and powers before addition: 5 + 3 × 4 = 17, not 32.",
      },
      {
        id: "pp-q9b",
        number: 9,
        label: "b",
        marks: 1,
        prompt: "Work out: √252 − 12² − 10 − 4² × 5",
        answer: "√252 − 144 − 10 − 80 = √18 (or 3√2 ≈ 4.24 if fully simplified decimal)",
        note: "Simplify √252 = 6√7; final form depends on mark scheme.",
      },
      {
        id: "pp-q10ai",
        number: 10,
        label: "a i",
        marks: 1,
        prompt:
          "Spinner A: sections 1, 2, 3. Spinner B: sections 1, 2, 3, 4, 5. Zara spins both. Find the probability of spinning the same number on both spinners.",
        diagramSvg: spinnersSvg,
        answer: "3/15 = 1/5",
      },
      {
        id: "pp-q10aii",
        number: 10,
        label: "a ii",
        marks: 1,
        prompt: "Find the probability of a higher number on spinner B than on spinner A.",
        diagramSvg: spinnersSvg,
        answer: "9/15 = 3/5",
      },
      {
        id: "pp-q10b",
        number: 10,
        label: "b",
        marks: 1,
        prompt:
          "Spinners C, D, E, F each have four sections numbered 1–4. Each is spun 200 times. Counts for spinning 3: C 82, D 46, E 37, F 65. Only one is fair. Which spinner is most likely fair?",
        table: {
          kind: "data",
          headers: ["Spinner", "Times spun 3 (out of 200)"],
          rows: [
            ["C", "82"],
            ["D", "46"],
            ["E", "37"],
            ["F", "65"],
          ],
        },
        answer: "D (46 is closest to 50 expected for a fair spinner)",
      },
      {
        id: "pp-q11a",
        number: 11,
        label: "a",
        marks: 1,
        prompt: "Write down the gradient of the line y + 17 = 0.5x (rearrange to y = mx + c).",
        answer: "0.5",
      },
      {
        id: "pp-q11b",
        number: 11,
        label: "b",
        marks: 1,
        prompt: "Write down the y-intercept of the line y = 19 − 10x.",
        answer: "19",
      },
      {
        id: "pp-q12",
        number: 12,
        marks: 3,
        prompt: "Complete the table of sequences (first four terms, rule, 5th term).",
        table: {
          kind: "data",
          headers: ["", "First four terms", "Rule", "5th term"],
          rows: [
            ["A", "7, 11, 15, 19, …", "Add 4", "23"],
            ["B", "(fill in)", "Add 4", "20"],
            ["C", "504, 252, 126, 63, …", "÷ 2", "31.5"],
            ["D", "−6, −10, −14, −18, …", "Subtract 4", "(fill in)"],
          ],
        },
        answer: "B: 8, 12, 16, 20, … ; D 5th term: −22",
      },
      {
        id: "pp-q13a",
        number: 13,
        label: "a",
        marks: 1,
        prompt: "Round 4285 to 3 significant figures.",
        answer: "4290",
      },
      {
        id: "pp-q13b",
        number: 13,
        label: "b",
        marks: 1,
        prompt: "Round 135524 to 3 significant figures.",
        answer: "136000",
      },
      {
        id: "pp-q14a",
        number: 14,
        label: "a",
        marks: 1,
        prompt:
          "True or false? An irregular hexagon has order of rotation 0. If false, correct the statement.",
        answer: "True (or T)",
      },
      {
        id: "pp-q14b",
        number: 14,
        label: "b",
        marks: 1,
        prompt: "True or false? An octagon has order of rotation 8. If false, correct it.",
        answer: "False — regular octagon has order 8; irregular may differ",
      },
      {
        id: "pp-q14c",
        number: 14,
        label: "c",
        marks: 1,
        prompt: "True or false? A decagon has 12 lines of symmetry. If false, correct it.",
        answer: "False — regular decagon has 10 lines of symmetry",
      },
      {
        id: "pp-q15",
        number: 15,
        marks: 2,
        prompt:
          "Draw an ordered stem-and-leaf diagram for the 24 sunflower heights (cm): 110, 132, 123, 109, 135, 112, 127, 119, 95, 129, 111, 108, 122, 100, 130, 112, 118, 125, 102, 137, 129, 116, 139, 112",
        answer: "Ordered stem-and-leaf with stems 9–13 (see working on paper)",
      },
      {
        id: "pp-q16",
        number: 16,
        marks: 2,
        prompt:
          "The right-angled triangle is cut into two quadrilaterals. Work out the five missing angles and place them correctly.",
        diagramSvg: triangleCutSvg,
        answer: "Use angle sum 360° in each quadrilateral with given 84°, 24°, 154°",
      },
      {
        id: "pp-q17a",
        number: 17,
        label: "a",
        marks: 1,
        prompt:
          "Dried fruit: banana chips and apricots in ratio 7 : 3. There are 40 pieces. What fraction are apricots?",
        answer: "3/10",
      },
      {
        id: "pp-q17b",
        number: 17,
        label: "b",
        marks: 1,
        prompt: "How many apricots are in the bag?",
        answer: "12",
      },
      {
        id: "pp-q17c",
        number: 17,
        label: "c",
        marks: 1,
        prompt:
          "If the total increases from 40 to 70 pieces with the same ratio, find the increase in the number of banana chips.",
        answer: "21",
      },
      {
        id: "pp-q18",
        number: 18,
        marks: 3,
        prompt:
          "320 = 2^m × 5, 36 = 2^n × 3², and 320 × 36 = 2^p × 3² × 5. Find m, n and p.",
        answer: "m = 6, n = 2, p = 8",
      },
      {
        id: "pp-q19",
        number: 19,
        marks: 2,
        prompt:
          "Make an accurate drawing of the triangle shown in the paper sketch. Label the other two side lengths you measure.",
        answer: "Construction — compare with PDF diagram",
        note: "Use the PDF for the sketch and given side.",
      },
      {
        id: "pp-q20a",
        number: 20,
        label: "a",
        marks: 1,
        prompt: "Work out the area of the parallelogram shown on the paper.",
        diagramSvg: shapesAreaSvg,
        answer: "Use base × height from PDF (cm²)",
      },
      {
        id: "pp-q20b",
        number: 20,
        label: "b",
        marks: 2,
        prompt: "Work out the area of the trapezium shown on the paper.",
        diagramSvg: shapesAreaSvg,
        answer: "Use ½(a + b) × h from PDF (m²)",
      },
    ],
  });
})();
