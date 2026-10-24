window.MATHS_Y8 = {
  id: "maths",
  title: "Mathematics",
  stage: "Year 8",
  book: "Learner’s Book 9",
  intro: "Stage 9 Mathematics Second Edition — number, algebra, geometry and statistics, written so each idea is explained, not just named.",
  units: [
    {
      id: "m1",
      title: "1 Number and calculation",
      strand: "Number",
      intro: "Get ready to master some really cool number tricks! We'll learn how to spot 'irrational' numbers that go on forever, how to write super massive or tiny numbers using 'standard form', and how to use index laws as shortcuts for powers.",
      topics: [
        {
          id: "1.1",
          title: "Irrational numbers",
          cards: [
            { kind: "Key idea", front: "What makes a number 'irrational'?", back: "It's a crazy number that can't be written as a simple fraction! Its decimal goes on forever without ever repeating a pattern. Famous examples are π (pi) and square roots like √2." },
            { kind: "Recall", front: "Is √9 irrational?", back: "No. √9 = 3, which is an integer, so it is rational." },
            { kind: "Check", front: "Why is √8 irrational but √16 not?", back: "√16 = 4 (perfect square). √8 = 2√2, and √2 is irrational, so √8 is irrational. A root that stays in this form is called a surd." },
            { kind: "Recall", front: "What is a counter-example?", back: "One case that shows a statement is not always true. √4 = 2 is a counter-example to “every square root is irrational”." },
          ],
        },
        {
          id: "1.2",
          title: "Standard form",
          cards: [
            { kind: "Key idea", front: "What is 'standard form'?", back: "It's a scientific shortcut for writing giant or tiny numbers! You write a number between 1 and 10, and multiply it by a power of 10 (like 4.5 × 10⁴)." },
            { kind: "Recall", front: "Write 45 000 in standard form.", back: "4.5 × 10⁴." },
            { kind: "Check", front: "Write 0.0036 in standard form.", back: "3.6 × 10⁻³." },
          ],
        },
        {
          id: "1.3",
          title: "Indices",
          cards: [
            { kind: "Key idea", front: "What are the magic rules for indices (powers)?", back: "When multiplying, add the powers! When dividing, subtract them! A power to a power means you multiply them. And anything to the power of 0 is just 1!" },
            { kind: "Recall", front: "Simplify 2³ × 2⁵.", back: "2⁸ = 256." },
            { kind: "Check", front: "Evaluate 5⁻².", back: "1/25." },
          ],
        },
      ],
    },
    {
      id: "m2",
      title: "2 Expressions and formulae",
      strand: "Algebra",
      intro: "Algebra is like a secret code for math rules! We'll learn how to swap letters for numbers, translate English into algebra, multiply brackets, and rearrange formulas like a puzzle.",
      topics: [
        {
          id: "2.1",
          title: "Substituting into expressions",
          cards: [
            { kind: "Key idea", front: "What does 'substitute' mean in algebra?", back: "It's like swapping players in a game! You replace each letter with its secret number, then do the math (remembering BIDMAS/BODMAS!)." },
            { kind: "Recall", front: "If a = 3 and b = −2, find 2a − b.", back: "2×3 − (−2) = 6 + 2 = 8. (Subtracting a negative is like adding!)." },
            { kind: "Check", front: "If x = 4, find 3x².", back: "3 × 16 = 48. (Always do the squared part BEFORE multiplying by 3)." },
          ],
        },
        {
          id: "2.2",
          title: "Constructing expressions",
          cards: [
            { kind: "Key idea", front: "How do we translate words into algebra?", back: "Pick a letter for the mystery number. 'More than' means +, 'product' means ×, and 'squared' means to the power of 2." },
            { kind: "Recall", front: "Translate: 'n plus 7, then multiplied by 3'.", back: "3(n + 7). The brackets are super important here!" },
            { kind: "Check", front: "A rectangle is 2 cm longer than it is wide. Width is w. What is the perimeter?", back: "2(w + w + 2) = 4w + 4." },
          ],
        },
        {
          id: "2.3",
          title: "Expressions and indices",
          cards: [
            { kind: "Key idea", front: "How do index laws work with letters?", back: "Exactly the same as numbers! If the letters match, add/subtract the little powers. If they are different letters (like x and y), leave them separate." },
            { kind: "Recall", front: "Simplify 3x² × 4x⁵.", back: "12x⁷. (Multiply the big numbers: 3×4=12. Add the little powers: 2+5=7)." },
            { kind: "Check", front: "Simplify (2a³)².", back: "4a⁶. (Square the 2 to get 4, and multiply the powers 3×2=6)." },
          ],
        },
        {
          id: "2.4",
          title: "Expanding two linear expressions",
          cards: [
            { kind: "Key idea", front: "How do you expand (x + a)(x + b)?", back: "Four products (FOIL / grid): x² + (a+b)x + ab." },
            { kind: "Recall", front: "Expand (x + 3)(x + 5).", back: "x² + 8x + 15." },
            { kind: "Check", front: "Expand (2x − 1)(x + 4).", back: "2x² + 8x − x − 4 = 2x² + 7x − 4." },
            { kind: "Recall", front: "What is a difference of two squares?", back: "(a + b)(a − b) = a² − b². Example: (x + 5)(x − 5) = x² − 25. A perfect square such as (x + 3)² expands to x² + 6x + 9." },
          ],
        },
        {
          id: "2.5",
          title: "Simplifying algebraic fractions",
          cards: [
            { kind: "Key idea", front: "How do you simplify an algebraic fraction?", back: "Factor numerator and denominator, then cancel common factors (not terms that are only added)." },
            { kind: "Recall", front: "Simplify 6x / 3.", back: "2x." },
            { kind: "Check", front: "Why can’t you cancel the x in (x + 2)/x?", back: "x is added in the numerator, not a common factor of the whole top." },
          ],
        },
        {
          id: "2.6",
          title: "Deriving and using formulae",
          cards: [
            { kind: "Key idea", front: "What is a formula?", back: "An equation that links quantities, such as A = πr². You can substitute, or rearrange to change the subject." },
            { kind: "Recall", front: "Make u the subject of v = u + at.", back: "u = v − at." },
            { kind: "Check", front: "Make r the subject of A = πr² (r > 0).", back: "r = √(A/π)." },
          ],
        },
      ],
    },
    {
      id: "m3",
      title: "3 Decimals, percentages and rounding",
      strand: "Number",
      intro: "Let's level up our decimal skills! We'll use 'multipliers' for tricky percentage questions, and learn how rounded numbers actually have a secret 'upper and lower bound'.",
      topics: [
        {
          id: "3.1",
          title: "Multiplying and dividing by powers of 10",
          cards: [
            { kind: "Key idea", front: "What happens when you × or ÷ by 10, 100, 1000?", back: "The digits slide left when multiplying (getting bigger) and right when dividing (getting smaller). Zeros jump in to hold the empty spaces!" },
            { kind: "Recall", front: "3.47 × 100.", back: "347. (Slide two places left)." },
            { kind: "Check", front: "0.6 ÷ 1000.", back: "0.0006. (Slide three places right)." },
          ],
        },
        {
          id: "3.2",
          title: "Multiplying and dividing decimals",
          cards: [
            { kind: "Key idea", front: "How do we multiply decimals?", back: "Pretend the dots aren't there and multiply like normal. Then put the dot back so the answer has the same number of decimal places as the question!" },
            { kind: "Recall", front: "0.6 × 0.4.", back: "0.24. (6×4=24, and we need 2 decimal places)." },
            { kind: "Check", front: "1.2 ÷ 0.3.", back: "4. (Multiply both by 10 to make it 12 ÷ 3)." },
          ],
        },
        {
          id: "3.3",
          title: "Compound percentages",
          cards: [
            { kind: "Key idea", front: "What is a 'compound' percentage?", back: "It's when a percentage changes an amount that has ALREADY changed! We use a 'multiplier' to do it fast: +8% is ×1.08, and −15% is ×0.85." },
            { kind: "Recall", front: "£200 increased by 10% then another 10%.", back: "200 × 1.1 × 1.1 = £242. (It's not £240!)." },
            { kind: "Check", front: "A value falls 20% then rises 20%. Is it back to the start?", back: "No! ×0.8 × 1.2 = ×0.96, so it is actually 4% smaller than when it started." },
          ],
        },
        {
          id: "3.4",
          title: "Upper and lower bounds",
          cards: [
            { kind: "Key idea", front: "What are upper and lower bounds?", back: "If a measurement is rounded, the true value lies in a range. To 1 d.p., 3.6 means 3.55 ≤ x < 3.65." },
            { kind: "Recall", front: "A length is 12 cm to the nearest centimetre. Bounds?", back: "11.5 cm ≤ length < 12.5 cm." },
            { kind: "Check", front: "Why do bounds matter when you divide two measurements?", back: "Errors can grow. For a maximum quotient use the largest numerator with the smallest denominator." },
          ],
        },
      ],
    },
    {
      id: "m4",
      title: "4 Equations and inequalities",
      strand: "Algebra",
      intro: "Equations are like balancing scales! We'll learn how to find mystery numbers, solve TWO equations at the exact same time, and use 'inequalities' to find a whole range of answers.",
      topics: [
        {
          id: "4.1",
          title: "Constructing and solving equations",
          cards: [
            { kind: "Key idea", front: "How do you solve an equation?", back: "Keep the scales balanced! Whatever you do to one side, you MUST do to the other side until the mystery letter is all by itself." },
            { kind: "Recall", front: "Solve 3x − 7 = 11.", back: "Add 7 to both sides: 3x = 18. Divide by 3: x = 6." },
            { kind: "Check", front: "Solve 2(x + 4) = 18.", back: "Divide both sides by 2: x + 4 = 9. Subtract 4: x = 5." },
          ],
        },
        {
          id: "4.2",
          title: "Simultaneous equations",
          cards: [
            { kind: "Key idea", front: "What are 'simultaneous' equations?", back: "It's when you have TWO equations and TWO mystery letters at the same time! You have to find the (x, y) pair that makes BOTH of them true." },
            { kind: "Recall", front: "What are the two ways to solve them?", back: "Elimination (adding or subtracting to destroy one letter) and substitution (swapping one equation into the other)." },
            { kind: "Check", front: "Solve x + y = 10 and x − y = 2.", back: "Add them together! The y's destroy each other: 2x = 12, so x = 6. Since 6 + y = 10, y must be 4." },
          ],
        },
        {
          id: "4.3",
          title: "Inequalities",
          cards: [
            { kind: "Key idea", front: "How are inequalities different from equations?", back: "Instead of one exact answer, they give you a whole range! (Like 'x is less than 4'). But watch out: if you multiply or divide by a negative, you MUST flip the sign!" },
            { kind: "Recall", front: "Solve 2x + 3 < 11.", back: "Subtract 3: 2x < 8. Divide by 2: x < 4." },
            { kind: "Check", front: "Solve −x > 4.", back: "x < −4 (We divided by −1, so the > flipped to < !)." },
            { kind: "Recall", front: "What does x < 4 mean?", back: "It means the answer can be ANY number smaller than 4 (like 3, 0, or −100). It's a whole set of answers!" },
          ],
        },
      ],
    },
    {
      id: "m5",
      title: "5 Angles",
      strand: "Geometry",
      intro: "Time to master the rules of shapes! We'll use secret angle rules to solve puzzles, figure out the inside and outside angles of any polygon, and learn Pythagoras' famous trick for right-angled triangles.",
      topics: [
        {
          id: "5.1",
          title: "Calculating angles",
          cards: [
            { kind: "Key idea", front: "What are the golden rules of angles?", back: "Straight line = 180°. Full circle = 360°. Inside a triangle = 180°. Opposite angles (X-shape) are equal. Parallel lines have equal Z and F shapes!" },
            { kind: "Recall", front: "What are 'alternate' angles?", back: "They make a 'Z' shape on parallel lines. They are always exactly equal!" },
            { kind: "Check", front: "A triangle has angles 50° and 60°. What is the third angle?", back: "70°. (Because 180 - 50 - 60 = 70)." },
          ],
        },
        {
          id: "5.2",
          title: "Interior angles of polygons",
          cards: [
            { kind: "Key idea", front: "How do you find the total inside angles of ANY polygon?", back: "Count the sides (n), subtract 2, and multiply by 180°. The formula is (n − 2) × 180°." },
            { kind: "Recall", front: "What do the inside angles of a hexagon add up to?", back: "(6 − 2) × 180° = 4 × 180° = 720°." },
            { kind: "Check", front: "What is ONE inside angle of a regular pentagon?", back: "First find the total: (5 - 2) × 180 = 540°. Then divide by 5 corners: 540° ÷ 5 = 108°." },
          ],
        },
        {
          id: "5.3",
          title: "Exterior angles of polygons",
          cards: [
            { kind: "Key idea", front: "What is the magic rule for 'exterior' (outside) angles?", back: "If you walk all the way around the outside of ANY shape, you turn a full circle! So the outside angles ALWAYS add up to 360°." },
            { kind: "Recall", front: "What is the outside angle of a regular octagon (8 sides)?", back: "360° ÷ 8 = 45°." },
            { kind: "Check", front: "How do the inside and outside angles connect?", back: "They sit next to each other on a straight flat line, so they always add up to 180°!" },
          ],
        },
        {
          id: "5.4",
          title: "Constructions",
          cards: [
            { kind: "Key idea", front: "What are standard compass-and-ruler constructions?", back: "Perpendicular bisector of a segment; angle bisector; a perpendicular from a point to a line; triangles from given sides/angles." },
            { kind: "Recall", front: "What does a perpendicular bisector give you?", back: "The set of points equidistant from the two endpoints." },
            { kind: "Check", front: "Why keep the same compass width for a perpendicular bisector?", back: "So the two arcs meet at points equally far from both ends, making the crossing line a true bisector." },
            { kind: "Recall", front: "What does inscribe mean?", back: "Draw a shape inside another so its vertices touch the outer shape. A square inscribed in a circle has all four corners on the circle." },
          ],
        },
        {
          id: "5.5",
          title: "Pythagoras’ theorem",
          cards: [
            { kind: "Key idea", front: "State Pythagoras’ theorem.", back: "In a right-angled triangle, a² + b² = c², where c is the hypotenuse (longest side, opposite the right angle)." },
            { kind: "Recall", front: "Legs 3 and 4. Hypotenuse?", back: "5, because 9 + 16 = 25." },
            { kind: "Check", front: "Hypotenuse 13, one leg 5. Other leg?", back: "√(169 − 25) = √144 = 12." },
          ],
        },
      ],
    },
    {
      id: "m6",
      title: "6 Statistical investigations",
      strand: "Statistics",
      intro: "Let's investigate! We'll learn how to gather clues fairly, why asking everyone takes too long, and how to spot 'fake news' when surveys try to trick you.",
      topics: [
        {
          id: "6.1",
          title: "Data collection and sampling",
          cards: [
            { kind: "Key idea", front: "Why do we 'sample' instead of asking everyone?", back: "Asking everyone (a census) takes way too long! A good sample is like tasting one spoonful of soup to know if the whole pot is good." },
            { kind: "Recall", front: "What makes a sample 'random'?", back: "It means every single person has the exact same chance of being picked—like drawing names from a hat." },
            { kind: "Check", front: "What is 'stratified' sampling?", back: "It's keeping things fair! If the school is 40% Year 8s, then 40% of the people you ask should be Year 8s too." },
          ],
        },
        {
          id: "6.2",
          title: "Bias",
          cards: [
            { kind: "Key idea", front: "What is 'bias'?", back: "It's when a survey is unfair and slanted! It happens if you ask the wrong people, or if you ask trick questions." },
            { kind: "Recall", front: "Give an example of a biased sample.", back: "Asking only people at a gym if they like exercising! (They obviously do, but it doesn't represent everyone else)." },
            { kind: "Check", front: "How can a question be biased?", back: "If it tries to lead you to an answer. Like asking: 'Do you agree that our awesome new canteen is the best?'" },
          ],
        },
      ],
    },
    {
      id: "m7",
      title: "7 Shapes and measurements",
      strand: "Geometry",
      intro: "Time to measure up! We'll learn the magic formulas for circles, how to slice up weird shapes to find their area, and how to jump between different units like meters and kilometers.",
      topics: [
        {
          id: "7.1",
          title: "Circumference and area of a circle",
          cards: [
            { kind: "Key idea", front: "What are the magic circle formulas?", back: "Distance around the outside (Circumference) = π × d. Space inside (Area) = π × r²." },
            { kind: "Recall", front: "Radius is 7 cm. What is the Area in terms of π?", back: "7 squared is 49. So the area is 49π cm²." },
            { kind: "Check", front: "Diameter is 10 cm. What is the Circumference in terms of π?", back: "10 × π = 10π cm." },
          ],
        },
        {
          id: "7.2",
          title: "Areas of compound shapes",
          cards: [
            { kind: "Key idea", front: "How do you find the area of a weird, chunky shape?", back: "Chop it up! Split it into easy rectangles and triangles. Find their areas and add them together (or subtract if there's a hole!)." },
            { kind: "Recall", front: "What is the area of a triangle?", back: "Half × base × height. (Just remember the height must be straight up, not slanted!)." },
            { kind: "Check", front: "A rectangle is 8 by 6, but has a 2 by 2 square cut out of it. What is the area?", back: "The whole rectangle is 48. The hole is 4. So 48 − 4 = 44." },
          ],
        },
        {
          id: "7.3",
          title: "Large and small units",
          cards: [
            { kind: "Key idea", front: "How do metric units grow?", back: "Length jumps by 10s, 100s, or 1000s. But AREA uses squares! So 1 m² is actually 100 × 100 cm²." },
            { kind: "Recall", front: "How many little cm² fit inside 1 big m²?", back: "10,000! (Because 100 cm × 100 cm = 10,000)." },
            { kind: "Check", front: "How many meters is 2.5 km?", back: "2,500 m. ('kilo' means thousand, so multiply by 1000)." },
            { kind: "Recall", front: "What do the secret prefixes mean?", back: "'kilo' means ×1000. 'centi' means ÷100. 'milli' means ÷1000. And a 'tonne' is a super heavy 1000 kg!" },
          ],
        },
      ],
    },
    {
      id: "m8",
      title: "8 Fractions",
      strand: "Number",
      intro: "Fractions are super useful because they are perfectly exact! We'll learn how to spot decimals that repeat forever, how to multiply and divide fractions, and a secret trick to make the math way easier by 'cancelling' early.",
      topics: [
        {
          id: "8.1",
          title: "Fractions and recurring decimals",
          cards: [
            { kind: "Key idea", front: "When does a fraction turn into a never-ending decimal?", back: "If the bottom number is made of prime numbers other than 2 or 5 (like 3, 7, or 11), the decimal will repeat forever! (Like 1/3 = 0.333...)." },
            { kind: "Recall", front: "Write 3/8 as a decimal.", back: "0.375 (It stops, because 8 is just 2×2×2)." },
            { kind: "Check", front: "Write 0.2̇ (0.222…) as a fraction.", back: "2/9 (The 9 trick works for single repeating digits!)." },
          ],
        },
        {
          id: "8.2",
          title: "Fractions and the correct order of operations",
          cards: [
            { kind: "Key idea", front: "How do fractions work with BIDMAS/BODMAS?", back: "A fraction bar acts like an invisible bracket! Figure out the whole top part, then the whole bottom part, and divide at the very end." },
            { kind: "Recall", front: "Work out: 1/2 + 1/3 × 6.", back: "1/2 + 2 = 2½. (Always do the multiplying before the adding!)." },
            { kind: "Check", front: "Why is (1 + 3)/8 different from 1 + 3/8?", back: "The first one is 4/8 = 1/2. The second one is 1 + 0.375 = 1.375." },
          ],
        },
        {
          id: "8.3",
          title: "Multiplying fractions",
          cards: [
            { kind: "Key idea", front: "How do you multiply fractions?", back: "It's easy! Just multiply the top numbers together, and multiply the bottom numbers together. (But remember to turn mixed numbers into top-heavy fractions first!)." },
            { kind: "Recall", front: "2/3 × 5/7.", back: "10/21. (2×5=10, 3×7=21)." },
            { kind: "Check", front: "1 1/2 × 2/5.", back: "Turn it top-heavy first: 3/2 × 2/5 = 6/10, which simplifies to 3/5." },
          ],
        },
        {
          id: "8.4",
          title: "Dividing fractions",
          cards: [
            { kind: "Key idea", front: "How do you divide by a fraction?", back: "Multiply by its reciprocal: a/b ÷ c/d = a/b × d/c." },
            { kind: "Recall", front: "3/4 ÷ 1/2.", back: "3/4 × 2/1 = 3/2." },
            { kind: "Check", front: "6 ÷ 2/3.", back: "6 × 3/2 = 9." },
          ],
        },
        {
          id: "8.5",
          title: "Making calculations easier",
          cards: [
            { kind: "Key idea", front: "What mental strategies help with fractions?", back: "Cancel before multiplying; use equivalent fractions; split mixed numbers; use factors of 100 for percentages." },
            { kind: "Recall", front: "Cancel first: 4/9 × 3/8.", back: "(4×3)/(9×8) → cancel 4 and 8, 3 and 9 → 1/6." },
            { kind: "Check", front: "Why convert 0.25 to 1/4 in a product?", back: "Multiplying by 1/4 is often quicker and exact." },
          ],
        },
      ],
    },
    {
      id: "m9",
      title: "9 Sequences and functions",
      strand: "Algebra",
      intro: "Let's crack the code of number patterns! We'll learn how to predict the next number in a sequence and how to use a 'function machine' to turn inputs into outputs.",
      topics: [
        {
          id: "9.1",
          title: "Generating sequences",
          cards: [
            { kind: "Key idea", front: "What is a 'term-to-term' rule?", back: "It's the secret instruction that tells you how to jump from one number to the next one in the line." },
            { kind: "Recall", front: "The first number is 5. The rule is 'add 4'. What are the first four numbers?", back: "5, 9, 13, 17." },
            { kind: "Check", front: "What is a 'geometric' sequence?", back: "Instead of adding, you multiply! Like 3, 6, 12, 24 (multiplying by 2 each time)." },
            { kind: "Recall", front: "What is a 'linear' sequence?", back: "A sequence that goes up by the exact same amount every time (like stairs). A non-linear sequence jumps by different amounts." },
          ],
        },
        {
          id: "9.2",
          title: "Using the nth term",
          cards: [
            { kind: "Key idea", front: "How do we write the 'nth term' rule?", back: "If the jumps are +3, write 3n. Then ask: what would the 'zero' term be before the sequence started? Add that on!" },
            { kind: "Recall", front: "The nth term rule is 3n + 1. What is the 10th term?", back: "3 × 10 + 1 = 31." },
            { kind: "Check", front: "Find the nth term of 5, 8, 11, 14.", back: "The jump is +3, so it's 3n. The number before 5 would be 2. So the rule is 3n + 2." },
          ],
        },
        {
          id: "9.3",
          title: "Representing functions",
          cards: [
            { kind: "Key idea", front: "What is a function machine?", back: "It's like a robot factory! You put a number in (x), the robot does some math to it, and spits a new number out (y)." },
            { kind: "Recall", front: "Input is x. The machine says '×3' then '−2'. What is the output?", back: "3x − 2." },
            { kind: "Check", front: "If f(x) = 2x + 5, what is f(4)?", back: "This just means 'put 4 into the machine'. 2 × 4 + 5 = 13." },
          ],
        },
      ],
    },
    {
      id: "m10",
      title: "10 Graphs",
      strand: "Algebra",
      intro: "Let's turn math into pictures! We'll learn how to draw lines from secret codes (equations) and figure out exactly how steep a hill is by finding its 'gradient'.",
      topics: [
        {
          id: "10.1",
          title: "Functions",
          cards: [
            { kind: "Key idea", front: "What does y = mx + c mean on a graph?", back: "It's a set of instructions! For every 'x' you put in, it gives you exactly one 'y' to plot on the grid." },
            { kind: "Recall", front: "On the line y = 2x − 1, what is y when x = 3?", back: "5. (Because 2 × 3 - 1 = 5)." },
            { kind: "Check", front: "Is x = 4 a normal function line?", back: "No! It's a straight up-and-down vertical wall. A normal function always moves across the page." },
          ],
        },
        {
          id: "10.2",
          title: "Plotting graphs",
          cards: [
            { kind: "Key idea", front: "How do you draw a straight line from an equation?", back: "Make a quick table of x and y numbers, plot the dots on the grid, and join them up with a ruler!" },
            { kind: "Recall", front: "Why should you plot at least THREE dots?", back: "Two dots will always make a straight line. The third dot proves you didn't make a mistake!" },
            { kind: "Check", front: "What shape does y = x² make?", back: "A smiley face 'U' shape called a parabola! It's not a straight line." },
          ],
        },
        {
          id: "10.3",
          title: "Gradient and intercept",
          cards: [
            { kind: "Key idea", front: "In the famous rule y = mx + c, what do m and c mean?", back: "'m' is the gradient (how steep the hill is). 'c' is the y-intercept (where the line crashes into the y-axis)." },
            { kind: "Recall", front: "How do you find the gradient between (0, 1) and (4, 9)?", back: "Rise divided by Run! It went up 8 steps, and across 4 steps. 8 ÷ 4 = 2." },
            { kind: "Check", front: "A line has a gradient of −3 and crashes into the y-axis at 5. What is its equation?", back: "y = −3x + 5. (The minus means it's going downhill!)." },
          ],
        },
        {
          id: "10.4",
          title: "Interpreting graphs",
          cards: [
            { kind: "Key idea", front: "How do you read a real-life graph?", back: "Look at the labels! A steep line means things are changing super fast. A flat line means nothing is changing at all." },
            { kind: "Recall", front: "On a distance–time graph, what does the gradient (steepness) tell you?", back: "Speed! A steeper line means you are moving faster." },
            { kind: "Check", front: "What does it mean when two lines cross on a graph?", back: "It means they are exactly equal at that moment! (Like two cars passing each other)." },
          ],
        },
      ],
    },
    {
      id: "m11",
      title: "11 Ratio and proportion",
      strand: "Number",
      intro: "Let's share things fairly! We'll learn how to split money using ratios, and the difference between 'direct' proportion (buying more costs more) and 'inverse' proportion (more workers take less time!).",
      topics: [
        {
          id: "11.1",
          title: "Using ratios",
          cards: [
            { kind: "Key idea", front: "How do you share money in a ratio?", back: "Add up all the parts to find the total number of 'shares'. Divide the money by the total shares to find what ONE share is worth. Then multiply!" },
            { kind: "Recall", front: "Share £60 in the ratio 2 : 3.", back: "Total parts = 5. One part = £12. The shares are 2×12 (£24) and 3×12 (£36)." },
            { kind: "Check", front: "Simplify 12 : 18.", back: "Divide both by 6 to get 2 : 3." },
          ],
        },
        {
          id: "11.2",
          title: "Direct and inverse proportion",
          cards: [
            { kind: "Key idea", front: "What is the difference between direct and inverse proportion?", back: "Direct: they grow together! (Double the pens, double the cost). Inverse: they do the opposite! (Double the workers, HALF the time)." },
            { kind: "Recall", front: "Direct: 4 pens cost £10. How much do 6 pens cost?", back: "1 pen costs £2.50. So 6 pens cost £15." },
            { kind: "Check", front: "Inverse: 8 workers take 6 days to build a wall. How long for 12 workers?", back: "Total worker-days = 8 × 6 = 48. For 12 workers: 48 ÷ 12 = 4 days." },
          ],
        },
      ],
    },
    {
      id: "m12",
      title: "12 Probability",
      strand: "Statistics",
      intro: "Let's predict the future! We'll learn the math behind winning games, drawing tree diagrams, and figuring out if two events affect each other.",
      topics: [
        {
          id: "12.1",
          title: "Mutually exclusive events",
          cards: [
            { kind: "Key idea", front: "What does 'mutually exclusive' mean?", back: "It means two things that CANNOT happen at the same time! (Like a coin landing on both heads and tails). For these, you just ADD their probabilities." },
            { kind: "Recall", front: "Rolling a die. What is the chance of getting an even number OR a 5?", back: "3/6 + 1/6 = 4/6 (which simplifies to 2/3). They don't overlap!" },
            { kind: "Check", front: "Why can't you just add the chance of getting an 'even' number and a 'prime' number?", back: "Because the number 2 is BOTH even and prime! They overlap, so they aren't mutually exclusive." },
          ],
        },
        {
          id: "12.2",
          title: "Independent events",
          cards: [
            { kind: "Key idea", front: "What are 'independent' events?", back: "Events that don't care about each other! (Like flipping two different coins). To find the chance of BOTH happening, you MULTIPLY their probabilities." },
            { kind: "Recall", front: "Flip two fair coins. What is the chance of getting two heads?", back: "1/2 × 1/2 = 1/4." },
            { kind: "Check", front: "When are two card draws NOT independent?", back: "If you take a card out and DON'T put it back! The deck changes, so the second draw is affected." },
          ],
        },
        {
          id: "12.3",
          title: "Combined events",
          cards: [
            { kind: "Key idea", front: "How do you map out combined events?", back: "Draw a tree diagram! Each branch is a choice. You MULTIPLY along the branches to find the final chance." },
            { kind: "Recall", front: "How many total outcomes if you spin a 1–4 spinner and toss a coin?", back: "4 options on the spinner × 2 options on the coin = 8 total outcomes." },
            { kind: "Check", front: "What do you do if there are multiple winning paths on your tree?", back: "You ADD the winning paths together at the end!" },
          ],
        },
        {
          id: "12.4",
          title: "Chance experiments",
          cards: [
            { kind: "Key idea", front: "Experimental vs theoretical probability?", back: "Relative frequency is successes ÷ trials. It should get closer to the theoretical probability as you do more trials (in the long run)." },
            { kind: "Recall", front: "A spinner lands on red 18 times in 50 spins. Estimate P(red).", back: "18/50 = 0.36." },
            { kind: "Check", front: "Why might 10 trials be a poor estimate?", back: "Small samples bounce around. Random variation is large when n is small." },
          ],
        },
      ],
    },
    {
      id: "m13",
      title: "13 Position and transformation",
      strand: "Geometry",
      intro: "Let's move things around! We'll use 'bearings' like a compass, find the exact middle of a line, and learn how to slide, spin, flip, and stretch shapes on a grid.",
      topics: [
        {
          id: "13.1",
          title: "Bearings and scale drawings",
          cards: [
            { kind: "Key idea", front: "What is a 'bearing'?", back: "It's an angle measured from North, going clockwise. It MUST have three numbers (like 045° or 180°)." },
            { kind: "Recall", front: "What is the bearing for South-East?", back: "135°." },
            { kind: "Check", front: "If B is on a bearing of 070° from A, what is the bearing of A from B?", back: "Just add 180°! So, 070° + 180° = 250°." },
          ],
        },
        {
          id: "13.2",
          title: "Points on a line segment",
          cards: [
            { kind: "Key idea", front: "How do you find the midpoint of a line?", back: "Add the x-coordinates and halve them. Add the y-coordinates and halve them. It's just the average!" },
            { kind: "Recall", front: "Find the midpoint between (2, 5) and (8, 1).", back: "x: (2+8)/2 = 5. y: (5+1)/2 = 3. The midpoint is (5, 3)." },
            { kind: "Check", front: "A is (0, 0), the midpoint is (3, 4). Where is B?", back: "Double the midpoint! B is at (6, 8)." },
          ],
        },
        {
          id: "13.3",
          title: "Transformations",
          cards: [
            { kind: "Key idea", front: "What are the four ways to transform a shape?", back: "Translation (slide), Rotation (spin), Reflection (flip), and Enlargement (stretch or shrink)." },
            { kind: "Recall", front: "What does the translation vector (3, -2) mean?", back: "Move the shape 3 squares RIGHT and 2 squares DOWN." },
            { kind: "Check", front: "Which transformation changes the size of the shape?", back: "Enlargement! The other three keep the shape exactly the same size." },
          ],
        },
        {
          id: "13.4",
          title: "Enlarging shapes",
          cards: [
            { kind: "Key idea", front: "How do you enlarge from a centre?", back: "Draw rays from the centre through each vertex. New distance = scale factor × old distance. Scale factor 2 doubles lengths." },
            { kind: "Recall", front: "What does scale factor 1/2 do?", back: "A reduction: lengths half as long, closer to the centre." },
            { kind: "Check", front: "How do areas scale?", back: "Area scale factor is (length scale factor)². SF 3 → area ×9." },
          ],
        },
      ],
    },
    {
      id: "m14",
      title: "14 Volume, surface area and symmetry",
      strand: "Geometry",
      intro: "Let's explore 3D shapes! We'll figure out how much space is inside them (volume), how much wrapping paper you'd need to cover them (surface area), and how to slice them perfectly in half (symmetry).",
      topics: [
        {
          id: "14.1",
          title: "Volume of prisms",
          cards: [
            { kind: "Key idea", front: "How do you find the volume of a prism?", back: "Find the area of the front face (the cross-section), then multiply it by how long the shape is!" },
            { kind: "Recall", front: "A triangular prism has a front triangle of 6 cm², and a length of 10 cm. What is the volume?", back: "6 × 10 = 60 cm³." },
            { kind: "Check", front: "How do you find the volume of a cylinder?", back: "It's just a circular prism! Area of the circle (πr²) × height (h). So, πr²h." },
          ],
        },
        {
          id: "14.2",
          title: "Surface area",
          cards: [
            { kind: "Key idea", front: "How do you find the surface area of a 3D shape?", back: "Imagine unfolding it like a cardboard box. Find the area of EVERY flat face, and add them all together." },
            { kind: "Recall", front: "What is the surface area of a cube with 4 cm sides?", back: "One square face is 4×4 = 16 cm². A cube has 6 faces, so 6 × 16 = 96 cm²." },
            { kind: "Check", front: "How do you find the surface area of a cylinder?", back: "Two circles (2 × πr²) plus the curved part which unrolls into a rectangle (2πr × h)." },
          ],
        },
        {
          id: "14.3",
          title: "Symmetry in 3D shapes",
          cards: [
            { kind: "Key idea", front: "What is a 'plane of symmetry'?", back: "Imagine slicing a 3D shape with a giant sword. If both halves are perfect mirror images, that slice is a plane of symmetry!" },
            { kind: "Recall", front: "How many planes of symmetry does a cube have?", back: "9! (3 straight down the middle, and 6 cutting across the diagonals)." },
            { kind: "Check", front: "Does a square-based pyramid have planes of symmetry?", back: "Yes, 4 of them! You can slice it straight down the middle of the sides, or straight down the diagonals of the base." },
          ],
        },
      ],
    },
    {
      id: "m15",
      title: "15 Interpreting and discussing results",
      strand: "Statistics",
      intro: "Let's become data detectives! We'll learn how to spot trends using scatter graphs, compare two groups using back-to-back diagrams, and figure out when a chart is trying to trick us.",
      topics: [
        {
          id: "15.1",
          title: "Frequency polygons",
          cards: [
            { kind: "Key idea", front: "How do you draw a frequency polygon?", back: "Find the middle of each group (the midpoint) and plot a dot at the frequency. Then connect the dots with straight lines!" },
            { kind: "Recall", front: "Group 10–20, frequency 8. Where do you put the dot?", back: "The middle of 10 and 20 is 15. So plot a dot at x=15, y=8." },
            { kind: "Check", front: "Why are frequency polygons useful?", back: "They are great for comparing two sets of data on the same graph (like test scores for two different classes)." },
          ],
        },
        {
          id: "15.2",
          title: "Scatter graphs",
          cards: [
            { kind: "Key idea", front: "What does a scatter graph show?", back: "It shows if two things are linked (correlation). Positive (both go up), Negative (one goes up, one goes down), or None (random dots!)." },
            { kind: "Recall", front: "What is an 'outlier'?", back: "A weird result! It's a dot that doesn't fit the pattern of the rest of the graph." },
            { kind: "Check", front: "If two things are correlated, does one CAUSE the other?", back: "No! Just because ice cream sales and sunburns both go up in summer, doesn't mean ice cream causes sunburns!" },
          ],
        },
        {
          id: "15.3",
          title: "Back-to-back stem-and-leaf",
          cards: [
            { kind: "Key idea", front: "What is a back-to-back stem-and-leaf diagram?", back: "It's a way to compare two groups. The 'stem' is in the middle, and the 'leaves' grow outwards to the left and right." },
            { kind: "Recall", front: "What is the most important thing to include?", back: "A key! You need to explain what the numbers mean (e.g., does 3 | 2 mean 32, or 3.2?)." },
            { kind: "Check", front: "How do you find the median?", back: "Count the leaves from smallest to largest until you reach the exact middle value." },
          ],
        },
        {
          id: "15.4",
          title: "Statistics for grouped data",
          cards: [
            { kind: "Key idea", front: "How do you estimate the mean when data is grouped?", back: "Pretend every value is exactly in the middle! Multiply the midpoint of each group by its frequency, add them all up, and divide by the total frequency." },
            { kind: "Recall", front: "How do you find the median class?", back: "Find half the total frequency, then count through the groups until you reach that number." },
            { kind: "Check", front: "Why is it called the 'modal class' instead of the 'mode'?", back: "Because we don't know the exact most common number, we only know which GROUP was the most common." },
          ],
        },
        {
          id: "15.5",
          title: "Representing data",
          cards: [
            { kind: "Key idea", front: "How do you choose the right chart?", back: "Pie charts for categories, frequency polygons for grouped numbers, scatter graphs for comparing two things, and line graphs for changes over time." },
            { kind: "Recall", front: "What MUST every chart have?", back: "A title, labels on the axes, and a key if needed!" },
            { kind: "Check", front: "How can a chart trick you?", back: "If the y-axis doesn't start at zero, a tiny difference can look like a massive gap!" },
          ],
        },
      ],
    },
  ],
};
