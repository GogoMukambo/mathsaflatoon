(function () {
  var matchSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 320" role="img" aria-label="Decimals and equivalent fractions to match">' +
    '<rect width="520" height="320" rx="12" fill="#0f172a" stroke="#64748b"/>' +
    '<text x="130" y="28" text-anchor="middle" fill="#93c5fd" font-size="14" font-weight="700">Decimals</text>' +
    '<text x="390" y="28" text-anchor="middle" fill="#93c5fd" font-size="14" font-weight="700">Fractions</text>' +
    '<text x="24" y="58" fill="#fcd34d" font-size="12" font-weight="700">A</text><text x="44" y="58" fill="#f8fafc" font-size="13">0.1</text>' +
    '<text x="24" y="84" fill="#fcd34d" font-size="12" font-weight="700">B</text><text x="44" y="84" fill="#f8fafc" font-size="13">0.05</text>' +
    '<text x="24" y="110" fill="#fcd34d" font-size="12" font-weight="700">C</text><text x="44" y="110" fill="#f8fafc" font-size="13">0.4</text>' +
    '<text x="24" y="136" fill="#fcd34d" font-size="12" font-weight="700">D</text><text x="44" y="136" fill="#f8fafc" font-size="13">0.7</text>' +
    '<text x="24" y="162" fill="#fcd34d" font-size="12" font-weight="700">E</text><text x="44" y="162" fill="#f8fafc" font-size="13">0.06</text>' +
    '<text x="24" y="188" fill="#fcd34d" font-size="12" font-weight="700">F</text><text x="44" y="188" fill="#f8fafc" font-size="13">0.8</text>' +
    '<text x="24" y="214" fill="#fcd34d" font-size="12" font-weight="700">G</text><text x="44" y="214" fill="#f8fafc" font-size="13">0.02</text>' +
    '<text x="24" y="240" fill="#fcd34d" font-size="12" font-weight="700">H</text><text x="44" y="240" fill="#f8fafc" font-size="13">0.3</text>' +
    '<text x="24" y="266" fill="#fcd34d" font-size="12" font-weight="700">I</text><text x="44" y="266" fill="#f8fafc" font-size="13">0.04</text>' +
    '<text x="280" y="58" fill="#fcd34d" font-size="12" font-weight="700">i</text><text x="300" y="58" fill="#f8fafc" font-size="13">4/10</text>' +
    '<text x="280" y="84" fill="#fcd34d" font-size="12" font-weight="700">ii</text><text x="300" y="84" fill="#f8fafc" font-size="13">6/100</text>' +
    '<text x="280" y="110" fill="#fcd34d" font-size="12" font-weight="700">iii</text><text x="300" y="110" fill="#f8fafc" font-size="13">4/100</text>' +
    '<text x="280" y="136" fill="#fcd34d" font-size="12" font-weight="700">iv</text><text x="300" y="136" fill="#f8fafc" font-size="13">2/100</text>' +
    '<text x="280" y="162" fill="#fcd34d" font-size="12" font-weight="700">v</text><text x="300" y="162" fill="#f8fafc" font-size="13">1/10</text>' +
    '<text x="280" y="188" fill="#fcd34d" font-size="12" font-weight="700">vi</text><text x="300" y="188" fill="#f8fafc" font-size="13">3/10</text>' +
    '<text x="280" y="214" fill="#fcd34d" font-size="12" font-weight="700">vii</text><text x="300" y="214" fill="#f8fafc" font-size="13">5/100</text>' +
    '<text x="280" y="240" fill="#fcd34d" font-size="12" font-weight="700">viii</text><text x="300" y="240" fill="#f8fafc" font-size="13">8/10</text>' +
    '<text x="280" y="266" fill="#fcd34d" font-size="12" font-weight="700">ix</text><text x="300" y="266" fill="#f8fafc" font-size="13">7/10</text>' +
    '<line x1="260" y1="40" x2="260" y2="290" stroke="#475569" stroke-dasharray="4 3"/>' +
    '<text x="260" y="304" text-anchor="middle" fill="#86efac" font-size="11">Example done: A ↔ v (0.1 = 1/10)</text>' +
    "</svg>";

  var triangleSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" role="img" aria-label="Equilateral triangle side 4.7 m">' +
    '<polygon points="140,30 240,170 40,170" fill="none" stroke="#38bdf8" stroke-width="2.5"/>' +
    '<text x="140" y="188" text-anchor="middle" fill="#f8fafc" font-size="14">4.7 m</text>' +
    '<text x="72" y="108" fill="#f8fafc" font-size="14">4.7 m</text>' +
    '<text x="208" y="108" fill="#f8fafc" font-size="14">4.7 m</text>' +
    '<text x="140" y="18" text-anchor="middle" fill="#93c5fd" font-size="12">Equilateral triangle</text>' +
    "</svg>";

  var shareSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 120" role="img" aria-label="650 dollars shared between two children">' +
    '<rect x="10" y="20" width="340" height="80" rx="10" fill="#1e3a8a" stroke="#64748b"/>' +
    '<text x="180" y="48" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="700">Total: $650</text>' +
    '<rect x="30" y="58" width="140" height="32" rx="6" fill="#2563eb"/><text x="100" y="79" text-anchor="middle" fill="#fff" font-size="12">Ayida 40%</text>' +
    '<rect x="190" y="58" width="140" height="32" rx="6" fill="#7c3aed"/><text x="260" y="79" text-anchor="middle" fill="#fff" font-size="12">Dayana 60%</text>' +
    "</svg>";

  window.QUESTION_BANK_TOPICS = window.QUESTION_BANK_TOPICS || [];
  window.QUESTION_BANK_TOPICS.push({
    board: "IGCSE",
    year: 6,
    subject: "mathematics",
    subjectTitle: "Mathematics",
    chapterId: "m4",
    chapterNumber: 4,
    chapterTitle: "4 Decimals",
    topicId: "4.5",
    topicTitle: "Making decimal calculations easier",
    curated: true,
    source: {
      title: "Cambridge Mathematics Workbook 7",
      file:
        "content-source/IGCSE/Year 6/Mathematics/Workbook/820175758-Mathematics-Workbook-7 - 04 4.5 Making decimal calculations easier.pdf",
      section: "Exercise 4.5",
    },
    questions: [
      {
        id: "ex45-1",
        group: "Exercise 4.5 · Focus · 1",
        type: "match",
        prompt:
          "Match each decimal (A–I) to its equivalent fraction (i–ix). The workbook shows A matched to v already (0.1 = 1/10). Match the rest.",
        diagramSvg: matchSvg,
        answer: "B↔vii, C↔i, D↔ix, E↔ii, F↔viii, G↔iv, H↔vi, I↔iii",
      },
      {
        id: "ex45-2a",
        group: "Exercise 4.5 · Focus · 2",
        label: "a",
        type: "method",
        prompt:
          "Complete the working to make the calculation easier: 150 × 0.2. Use 0.2 = 2/10 = 2 ÷ 10, then 150 × 2 ÷ 10 = 150 ÷ 10 × 2 = 15 × 2.",
        answer: "30",
      },
      {
        id: "ex45-2b",
        group: "Exercise 4.5 · Focus · 2",
        label: "b",
        type: "method",
        prompt:
          "Complete the working to make the calculation easier: 70 × 0.3. Use 0.3 = 3/10, so 70 × 3 ÷ 10 = 70 ÷ 10 × 3 = 7 × 3.",
        answer: "21",
        note: "Workbook misprints 270 × in one line; use 70 × 0.3.",
      },
      {
        id: "ex45-2c",
        group: "Exercise 4.5 · Focus · 2",
        label: "c",
        type: "method",
        prompt:
          "Complete the working to make the calculation easier: 120 × 0.6. Use 0.6 = 6/10, so 120 × 6 ÷ 10 = 120 ÷ 10 × 6 = 12 × 6.",
        answer: "72",
      },
      {
        id: "ex45-3a",
        group: "Exercise 4.5 · Focus · 3",
        label: "a",
        type: "method",
        prompt:
          "Complete the working: 1200 × 0.03. Use 0.03 = 3/100, so 1200 × 3 ÷ 100 = 1200 ÷ 100 × 3 = 12 × 3.",
        answer: "36",
      },
      {
        id: "ex45-3b",
        group: "Exercise 4.5 · Focus · 3",
        label: "b",
        type: "method",
        prompt:
          "Complete the working: 900 × 0.05. Use 0.05 = 5/100, so 900 × 5 ÷ 100 = 900 ÷ 100 × 5 = 9 × 5.",
        answer: "45",
      },
      {
        id: "ex45-3c",
        group: "Exercise 4.5 · Focus · 3",
        label: "c",
        type: "method",
        prompt:
          "Complete the working: 700 × 0.04. Use 0.04 = 4/100, so 700 × 4 ÷ 100 = 700 ÷ 100 × 4 = 7 × 4.",
        answer: "28",
      },
      {
        id: "ex45-4a",
        group: "Exercise 4.5 · Focus · 4",
        label: "a",
        type: "compute",
        prompt:
          "Use Zara’s method: multiplying by 0.5 is the same as dividing by 2 (because 0.5 = 1/2). Work out 20 × 0.5.",
        answer: "10",
      },
      {
        id: "ex45-4b",
        group: "Exercise 4.5 · Focus · 4",
        label: "b",
        type: "compute",
        prompt: "Use Zara’s method (× 0.5 means ÷ 2): 50 × 0.5.",
        answer: "25",
      },
      {
        id: "ex45-4c",
        group: "Exercise 4.5 · Focus · 4",
        label: "c",
        type: "compute",
        prompt: "Use Zara’s method: 16 × 0.5.",
        answer: "8",
      },
      {
        id: "ex45-4d",
        group: "Exercise 4.5 · Focus · 4",
        label: "d",
        type: "compute",
        prompt: "Use Zara’s method: 48 × 0.5.",
        answer: "24",
      },
      {
        id: "ex45-4e",
        group: "Exercise 4.5 · Focus · 4",
        label: "e",
        type: "compute",
        prompt: "Use Zara’s method: 52 × 0.5.",
        answer: "26",
      },
      {
        id: "ex45-4f",
        group: "Exercise 4.5 · Focus · 4",
        label: "f",
        type: "compute",
        prompt: "Use Zara’s method: 23 × 0.5.",
        answer: "11.5",
      },
      {
        id: "ex45-5a",
        group: "Exercise 4.5 · Focus · 5",
        label: "a",
        type: "method",
        prompt:
          "Make the calculation easier using 9 = (10 − 1): 2.3 × 9 = 2.3 × (10 − 1) = 2.3 × 10 − 2.3 × 1 = 23 − 2.3.",
        answer: "20.7",
      },
      {
        id: "ex45-5b",
        group: "Exercise 4.5 · Focus · 5",
        label: "b",
        type: "method",
        prompt:
          "Make the calculation easier: 5.7 × 9 = 5.7 × (10 − 1) = 57 − 5.7.",
        answer: "51.3",
      },
      {
        id: "ex45-6a",
        group: "Exercise 4.5 · Practice · 6",
        label: "a",
        type: "method",
        prompt:
          "Use the place-value method with partitioning: 0.3 × 270 = (3/10) × 270 = 3 × 270 ÷ 10. Partition 270 as 200 + 70, so 3 × 200 + 3 × 70 = 600 + 210, then ÷ 10.",
        answer: "81",
      },
      {
        id: "ex45-6b",
        group: "Exercise 4.5 · Practice · 6",
        label: "b",
        type: "method",
        prompt:
          "Use the place-value method: 0.07 × 4300 = 7 × 4300 ÷ 100. Partition 4300 as 4000 + 300.",
        answer: "301",
      },
      {
        id: "ex45-7a",
        group: "Exercise 4.5 · Practice · 7",
        label: "a",
        type: "compute",
        prompt: "Use the same place-value/partitioning method as Question 6: 0.4 × 630.",
        answer: "252",
      },
      {
        id: "ex45-7b",
        group: "Exercise 4.5 · Practice · 7",
        label: "b",
        type: "compute",
        prompt: "0.8 × 250.",
        answer: "200",
      },
      {
        id: "ex45-7c",
        group: "Exercise 4.5 · Practice · 7",
        label: "c",
        type: "compute",
        prompt: "0.07 × 5100.",
        answer: "357",
      },
      {
        id: "ex45-7d",
        group: "Exercise 4.5 · Practice · 7",
        label: "d",
        type: "compute",
        prompt: "0.05 × 4200.",
        answer: "210",
      },
      {
        id: "ex45-8a",
        group: "Exercise 4.5 · Practice · 8",
        label: "a",
        type: "word",
        prompt:
          "Ana has $650 to share between Ayida and Dayana. Ayida gets 0.4 × $650 and Dayana gets 0.6 × $650. Complete the amounts in the table.",
        diagramSvg: shareSvg,
        table: {
          kind: "data",
          headers: ["Child", "Calculation", "Amount"],
          rows: [
            ["Ayida", "0.4 × $650", "$260"],
            ["Dayana", "0.6 × $650", "$390"],
          ],
        },
        answer: "Ayida $260, Dayana $390",
      },
      {
        id: "ex45-8b",
        group: "Exercise 4.5 · Practice · 8",
        label: "b",
        type: "check",
        prompt: "Show how to check that Ayida’s and Dayana’s amounts are correct.",
        answer: "260 + 390 = 650, and 0.4 + 0.6 = 1 of the total.",
      },
      {
        id: "ex45-9a",
        group: "Exercise 4.5 · Practice · 9",
        label: "a",
        type: "compute",
        prompt: "Use the ×9 = ×10 − ×1 method: 6.8 × 9.",
        answer: "61.2",
      },
      {
        id: "ex45-9b",
        group: "Exercise 4.5 · Practice · 9",
        label: "b",
        type: "compute",
        prompt: "4.7 × 9.",
        answer: "42.3",
      },
      {
        id: "ex45-9c",
        group: "Exercise 4.5 · Practice · 9",
        label: "c",
        type: "compute",
        prompt: "12.6 × 9.",
        answer: "113.4",
      },
      {
        id: "ex45-10a",
        group: "Exercise 4.5 · Practice · 10",
        label: "a",
        type: "method",
        prompt: "Partition: 4.2 × 6 = 4 × 6 + 0.2 × 6.",
        answer: "25.2",
      },
      {
        id: "ex45-10b",
        group: "Exercise 4.5 · Practice · 10",
        label: "b",
        type: "method",
        prompt: "7.8 × 5 = 7 × 5 + 0.8 × 5.",
        answer: "39",
      },
      {
        id: "ex45-10c",
        group: "Exercise 4.5 · Practice · 10",
        label: "c",
        type: "method",
        prompt: "6.3 × 8 = 6 × 8 + 0.3 × 8.",
        answer: "50.4",
      },
      {
        id: "ex45-11a",
        group: "Exercise 4.5 · Practice · 11",
        label: "a",
        type: "method",
        prompt:
          "Make the division easier: 16.47 ÷ 30. Divide numerator and denominator by 10 to get 1.647 ÷ 3.",
        answer: "0.549",
      },
      {
        id: "ex45-11b",
        group: "Exercise 4.5 · Practice · 11",
        label: "b",
        type: "method",
        prompt: "Make the division easier: 89.25 ÷ 70 = 8.925 ÷ 7 (divide top and bottom by 10).",
        answer: "1.275",
      },
      {
        id: "ex45-12",
        group: "Exercise 4.5 · Challenge · 12",
        type: "word",
        prompt:
          "An equilateral triangle has side length 4.7 m. Use P = 3l to find the perimeter.",
        diagramSvg: triangleSvg,
        answer: "14.1 m",
      },
      {
        id: "ex45-13a",
        group: "Exercise 4.5 · Challenge · 13",
        label: "a",
        type: "method",
        prompt:
          "Make the division easier: 38.16 ÷ 600. Divide numerator and denominator by 100: 0.3816 ÷ 6.",
        answer: "0.0636",
      },
      {
        id: "ex45-13b",
        group: "Exercise 4.5 · Challenge · 13",
        label: "b",
        type: "method",
        prompt:
          "Make the division easier: 676.5 ÷ 500. Divide numerator and denominator by 100: 6.765 ÷ 5.",
        answer: "1.353",
      },
      {
        id: "ex45-14ai",
        group: "Exercise 4.5 · Challenge · 14",
        label: "a i",
        type: "word",
        prompt:
          "40 club members share a meal costing $742.84 equally. How much does each pay, rounded to the nearest cent?",
        answer: "$18.57",
      },
      {
        id: "ex45-14aii",
        group: "Exercise 4.5 · Challenge · 14",
        label: "a ii",
        type: "word",
        prompt: "Same problem: amount each pays, rounded to the nearest dollar.",
        answer: "$19",
      },
      {
        id: "ex45-14b",
        group: "Exercise 4.5 · Challenge · 14",
        label: "b",
        type: "explain",
        prompt:
          "Which rounded amount (nearest cent or nearest dollar) is more suitable for each member to pay? Explain.",
        answer: "Nearest cent ($18.57) is fairer so the total matches the bill; nearest dollar is simpler but less accurate.",
      },
      {
        id: "ex45-15",
        group: "Exercise 4.5 · Challenge · 15",
        type: "word",
        prompt:
          "The total mass of 20 gymnasts is 1219.64 kg. Find the mean mass, correct to 1 decimal place.",
        answer: "61.0 kg",
        note: "1219.64 ÷ 20 = 60.982 → 61.0 kg",
      },
    ],
  });
})();
