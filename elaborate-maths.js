window.ELABORATE_MATHS = {};

function addMathsNotes(topic, notes) {
  window.ELABORATE_MATHS[topic] = notes;
}

addMathsNotes("1.1", [
  "An irrational number cannot be written as a fraction of two integers. Its decimal never stops and never settles into a repeating block. π, √2 and √5 are the usual school examples. Rational numbers include integers, terminating decimals such as 0.25 = 1/4, and recurring decimals such as 0.333… = 1/3.\n\nA useful test: if you can write the number exactly as p/q with p and q integers and q ≠ 0, it is rational. If you cannot, and the decimal neither ends nor repeats, it is irrational.",
  "√9 is not irrational because 9 is a perfect square: √9 = 3, and 3 = 3/1, a fraction of integers. Square roots of other perfect squares (√16, √25, √100) are integers too, so they are rational.\n\nThe square root of a positive integer is irrational unless that integer is a perfect square. That is why √2, √3, √5, √7 and √10 are irrational, while √4 and √9 are not.",
  "√16 = 4 because 16 is 4². √8 is different: 8 is not a perfect square, and √8 simplifies to 2√2. Multiplying an irrational number by a non-zero rational (here 2) still leaves an irrational result, so √8 is irrational.\n\nIn a calculation, leave answers such as 2√2 in surd form unless you are asked for a decimal approximation.",
]);

addMathsNotes("1.2", [
  "Keep −3 and knock the other number down. The answer jumps up by 3: −12, −9, −6… then −3 × −2 = 6. Two minuses hug and turn into a plus!\n\nSame signs → +. Different signs → −. So 2 × −9 = −18, but −6 × −4 = 24.",
  "Brackets are the boss. (−3 + 15) ÷ −4 becomes 12 ÷ −4 = −3. Mixed signs, so a minus.\n\n(3 + 5) × −4 = −32. −4 × (5 − 8) = −4 × −3 = 12. BIDMAS still rules, even with grumpy negatives!",
  "÷ is × played backwards. −4 × 6 = −24 flips into −24 ÷ 6 = −4 or −24 ÷ −4 = 6.\n\nSame sign rule for ÷: 18 ÷ −6 = −3, but −28 ÷ −4 = 7.",
]);

addMathsNotes("1.4", [
  "A power is a shortcut for “times itself again!” 5³ means three 5s = 125. Slide left and divide by 5: 25 ÷ 5 = 5, so 5¹ = 5. One more slide: 5 ÷ 5 = 1. Boom — 5⁰ = 1.\n\nAny positive whole number to the power 0 is 1. Try sevens: 7³ = 343, 7⁴ = 2401, 7⁰ = 1.",
  "Same team (same base)? The little numbers high-five and ADD. 4 × 16 = 64 is 2² × 2⁴ = 2⁶. Try 6² × 6³ = 6⁵.\n\nDifferent bases? Don’t add. 2³ × 5³ is not 2⁸.",
  "Division is the opposite slide. Same team? SUBTRACT. 32 ÷ 4 = 8 is 2⁵ ÷ 2² = 2³. Same power top and bottom? 5⁶ ÷ 5⁶ = 5⁰ = 1.\n\nBrackets make the little numbers multiply: (3²)³ = 3⁶.",
]);

addMathsNotes("1.3", [
  "Index laws let you combine powers that share the same base. Multiply: add the indices. Divide: subtract the indices. Raise a power to a power: multiply the indices. Anything (except 0) to the power 0 is 1. A negative index means a reciprocal: a⁻ⁿ = 1/aⁿ.\n\nThe base must match. 2³ × 5³ is not 10³ and not 2⁸. You may write 2³ × 5³ as (2 × 5)³ = 10³, but that is a different law (a power of a product).",
  "2³ × 2⁵ = 2⁸ because you add 3 and 5. 2⁸ = 256. Expanding the meaning also helps: (2×2×2) × (2×2×2×2×2) is eight factors of 2.\n\nIf the bases were different you would leave the product as it is, or evaluate each power separately.",
  "5⁻² means 1/5² = 1/25. The negative sign does not make the whole answer negative; it turns the power into a fraction. (−5)² is +25, which is a different question.\n\nA common check: 5² × 5⁻² = 5⁰ = 1, so 5⁻² must be the reciprocal of 25.",
]);

addMathsNotes("2.1", [
  "To substitute, replace every letter with the number it stands for, then calculate. Keep the order of operations: brackets, indices, multiply and divide, then add and subtract. A negative value needs a bracket so the sign does not get lost: 2a − b with b = −2 becomes 2a − (−2).\n\nWrite the expression again with the numbers in place before you simplify. That paper trail is what examiners want to see.",
  "a = 3 and b = −2, so 2a − b = 2×3 − (−2) = 6 + 2 = 8. Subtracting a negative is the same as adding. If you write 6 − 2 you have dropped the sign of b and the answer will be wrong.\n\nAlways substitute first, then tidy. Do not ‘solve’ for a letter that already has a value.",
  "If x = 4, then 3x² means 3 × (x²), not (3x)². Square first: 4² = 16, then multiply by 3 to get 48. (3x)² would be 9x² = 144, which is a different expression.\n\nThe invisible multiplication sits outside the square unless brackets say otherwise.",
]);

addMathsNotes("2.2", [
  "Turn words into symbols one phrase at a time. Choose a letter for the unknown. ‘More than’ and ‘sum’ become +. ‘Product’ and ‘of’ often become ×. ‘Squared’ is a power, not a double. ‘Then multiplied by’ usually needs a bracket around the earlier part, because the whole sum is scaled.\n\nRead the sentence again after you write the expression. If the English and the algebra do not match, fix the algebra.",
  "‘n plus 7, then multiplied by 3’ is 3(n + 7), not 3n + 7. Without the bracket, only n is multiplied by 3. Expanding later gives 3n + 21, which is a useful check that the 7 was also scaled.\n\nIf the sentence had been ‘3 more than n, times something else’, you would still need to see whether the 3 sits inside or outside the product.",
  "Width w, length w + 2. Perimeter is two widths and two lengths: 2w + 2(w + 2) = 2w + 2w + 4 = 4w + 4, or 2(w + w + 2) = 2(2w + 2) = 4w + 4.\n\nLeave the answer in terms of w unless a number is given for the width. That is what ‘construct an expression’ means.",
]);

addMathsNotes("2.3", [
  "Algebraic index laws are the same as number index laws, but the letters stay visible. 3x² × 4x⁵ multiplies the numbers 3 and 4, then adds the indices of x. Different letters do not combine: x²y³ is already simple.\n\nA power outside a bracket hits every factor inside: (2a³)² = 2² × (a³)² = 4a⁶.",
  "3x² × 4x⁵ = 12x⁷. The coefficients 3 and 4 multiply. The x-powers add: 2 + 5 = 7. There is no extra 3×4 on the index.\n\nIf one factor had been 4x (that is 4x¹), the result would be 12x³.",
  "(2a³)² means 2a³ × 2a³, or ‘square the 2 and multiply the index 3 by 2’. Either way you get 4a⁶. A frequent error is to square only the 2, or only the a³.\n\n(2a³)² is not 2a⁶ and not 4a⁵.",
]);

addMathsNotes("2.4", [
  "To expand two linear brackets, multiply every term in the first by every term in the second. A 2-by-2 grid, or FOIL (first, outer, inner, last), both give four products. Then collect like terms: the two middle products usually combine into a single x-term.\n\n(x + a)(x + b) always produces x² + (a + b)x + ab. Learning that pattern speeds up the tidy-up.",
  "(x + 3)(x + 5) = x² + 5x + 3x + 15 = x² + 8x + 15. The 8 is 3 + 5 and the 15 is 3 × 5. Check by substituting a number, for example x = 1: left side 4 × 6 = 24, right side 1 + 8 + 15 = 24.",
  "(2x − 1)(x + 4) = 2x·x + 2x·4 + (−1)·x + (−1)·4 = 2x² + 8x − x − 4 = 2x² + 7x − 4. The signs travel with the terms. Missing the −x is the usual slip.\n\nA grid with 2x and −1 along one side, and x and 4 along the other, makes the four products harder to lose.",
]);

addMathsNotes("2.5", [
  "You may cancel a factor that multiplies the whole numerator and the whole denominator. You may not cancel a term that is only added. Factor first if you need to reveal a common factor, then cancel.\n\n6x/3 is 2x because 3 is a factor of 6x. (x + 2)/x is already as simple as it gets, unless you split it as 1 + 2/x.",
  "6x / 3 = 2x. Think of it as (6/3) × x, or as 6x ÷ 3. The x is not cancelled; it stays because it was never in the denominator.\n\n6x/3x would cancel to 2, provided x ≠ 0.",
  "In (x + 2)/x the x on top is added to 2, so it is not a factor of the whole numerator. Cancelling it to leave (1 + 2)/1 = 3 is wrong. For example if x = 2 the original value is 4/2 = 2, not 3.\n\nYou can write (x + 2)/x = 1 + 2/x, which shows the leftover fraction instead of pretending it cancelled.",
]);

addMathsNotes("2.6", [
  "A formula is an equation that links real quantities, such as A = πr² or v = u + at. You can substitute known values to find the unknown, or rearrange so a different letter sits alone on one side (the subject).\n\nRearranging uses the same moves as solving an equation: do the same to both sides, inverse operations in the reverse order.",
  "v = u + at. Subtract at from both sides: v − at = u, so u = v − at. The +at is undone by subtraction. Do not divide by t unless you are making a or t the subject.\n\nCheck by putting u = v − at back into the original: (v − at) + at = v.",
  "A = πr². Divide both sides by π: A/π = r². Then take the positive square root because a radius is positive: r = √(A/π). Taking the square root before dividing would be the wrong order.\n\nIf the formula had been A = 4πr² you would divide by 4π first, then square-root.",
]);

addMathsNotes("3.1", [
  "Multiplying by 10, 100 or 1000 moves digits to the left (the number gets larger). Dividing moves them to the right (the number gets smaller). Zeros hold empty place-value columns so 3.47 × 100 is 347, not 3470 or 34.7.\n\nEach factor of 10 is one place. 1000 = 10³ is three places.",
  "3.47 × 100: the point moves two places right, giving 347. The digits themselves stay in the same order. If you run out of digits you add zeros, as in 3.47 × 1000 = 3470.",
  "0.6 ÷ 1000: the point moves three places left. 0.6 already has the 6 in the tenths column, so three places left is 0.0006. Writing 0.006 is only two places — a common off-by-one error.\n\nThink 0.6 × 10⁻³ if you prefer standard-form language.",
]);

addMathsNotes("3.2", [
  "To multiply decimals, ignore the points, multiply the digits as whole numbers, then put the point back so the answer has as many decimal places as the factors have together. 0.6 × 0.4 has 1 + 1 = 2 decimal places.\n\nTo divide, you can multiply top and bottom by the same power of 10 until the divisor is an integer, then divide as usual.",
  "0.6 × 0.4: 6 × 4 = 24, two decimal places altogether, so 0.24. A fraction check: 3/5 × 2/5 = 6/25 = 0.24.\n\n0.6 × 0.04 would have three decimal places: 0.024.",
  "1.2 ÷ 0.3: multiply both numbers by 10 to get 12 ÷ 3 = 4. Equivalently, 1.2 / 0.3 = 12/3. The answer is 4, not 0.4.\n\nDividing by a number less than 1 makes the result larger, which is a useful sense-check.",
]);

addMathsNotes("3.3", [
  "A compound percentage change is applied to an amount that has already changed. Use a multiplier for each step and multiply them. An increase of 8% is ×1.08; a decrease of 15% is ×0.85. Two 10% increases are ×1.1 × 1.1 = ×1.21, which is a 21% increase, not 20%.\n\nSimple interest or a single ‘percentage of’ question uses one multiplier only.",
  "£200 increased by 10% becomes £220. Another 10% of £220 is £22, so the final amount is £242. Using 200 × 1.1 × 1.1 does both steps in one line. Adding 20% of the original £200 would give £240 and misses the compound extra £2.",
  "A fall of 20% then a rise of 20% is ×0.8 × 1.2 = ×0.96. You end 4% below the start, not back where you began. The second 20% is 20% of a smaller amount.\n\nThe same happens in reverse: ×1.2 then ×0.8 is also ×0.96. Order does not rescue you.",
]);

addMathsNotes("3.4", [
  "When a measurement is rounded, the true value lies in a range. To the nearest centimetre, 12 cm means anything from 11.5 cm up to but not including 12.5 cm. To 1 decimal place, 3.6 means 3.55 ≤ x < 3.65.\n\nThe lower bound is halfway down to the next possible rounded value; the upper bound is halfway up.",
  "12 cm to the nearest centimetre: lower bound 11.5 cm, upper bound 12.5 cm. We write 11.5 ≤ length < 12.5. A length of exactly 12.5 cm would round to 13 cm (usual school rounding), so 12.5 is not included.",
  "When you calculate with rounded measurements, errors can grow. For a maximum value of a/b use the largest possible a with the smallest possible b. For a minimum, reverse that. For a product, use both uppers to get the maximum.\n\nThat is why a density or a speed calculated from rounded inputs is itself only known to a range.",
]);

addMathsNotes("4.1", [
  "A linear equation is a balance. Whatever you do to one side you do to the other, until the unknown is alone. Expand brackets and collect like terms first if the equation is messy. Inverse operations undo each other: +7 is undone by −7, ×3 is undone by ÷3.\n\nCheck by substituting your answer back into the original equation.",
  "3x − 7 = 11. Add 7: 3x = 18. Divide by 3: x = 6. Check: 3×6 − 7 = 11. If you divide by 3 before adding 7 you are splitting the −7 incorrectly.",
  "2(x + 4) = 18. You can divide both sides by 2 first: x + 4 = 9, so x = 5. Or expand: 2x + 8 = 18, 2x = 10, x = 5. Both routes are valid; the first is shorter.\n\nCheck: 2(5 + 4) = 18.",
]);

addMathsNotes("4.2", [
  "Simultaneous equations are two equations that must both be true at once. The solution is a pair (x, y) — the point where two straight lines meet. Elimination matches a coefficient and adds or subtracts to wipe out one letter. Substitution rearranges one equation and plugs it into the other.\n\nAlways find the second unknown; an answer that is only x is unfinished.",
  "Elimination: make the x or y coefficients equal (or opposite), then add or subtract. Substitution: if one equation already says x = … or y = …, use that. Graphically, the same pair is the intersection.\n\nIf the lines are parallel there is no solution. If they are the same line there are infinitely many.",
  "x + y = 10 and x − y = 2. Adding cancels y: 2x = 12, so x = 6. Then 6 + y = 10, y = 4. Check in the second equation: 6 − 4 = 2.\n\nSubtracting instead would cancel x and give y directly. Either unknown first is fine.",
]);

addMathsNotes("4.3", [
  "An inequality describes a range, not a single value. The solving steps look like an equation, with one extra rule: if you multiply or divide by a negative number, reverse the inequality sign. Graph the answer on a number line: an open circle for < or >, a filled circle for ≤ or ≥.\n\nx < 4 means every number less than 4, not only the integers.",
  "2x + 3 < 11. Subtract 3: 2x < 8. Divide by 2 (positive, so the sign stays): x < 4. x = 4 is not included. Check a number that should work (x = 0: 3 < 11) and one that should not (x = 5: 13 < 11 is false).",
  "−x > 4. Divide by −1 and reverse the sign: x < −4. You can also add x to both sides: 0 > 4 + x, then  −4 > x, which is the same statement.\n\nForgetting to flip the sign is the classic error. Test x = −5: −(−5) = 5 > 4, true. Test x = −3: 3 > 4, false.",
]);

addMathsNotes("5.1", [
  "Keep a short list of facts in working memory: angles on a straight line add to 180°; around a point, 360°; in a triangle, 180°; vertically opposite angles are equal. On parallel lines a transversal makes corresponding angles equal (F shape), alternate angles equal (Z shape) and co-interior angles add to 180° (C shape).\n\nWrite the reason next to each calculation. A number without a reason is only half an answer.",
  "Alternate angles sit on opposite sides of the transversal, between the two parallel lines — the Z. They are equal. Corresponding angles sit in the same ‘corner’ at each intersection — the F. They are also equal.\n\nIf the lines are not marked parallel you may not use these facts.",
  "Angles in a triangle add to 180°, so 50° + 60° + third = 180°, and the third is 70°. If the triangle were isosceles or right-angled you would use those extra facts first, then the sum.",
]);

addMathsNotes("5.2", [
  "Any polygon can be split into triangles from one vertex. An n-sided polygon makes n − 2 triangles, so the interior angle sum is (n − 2) × 180°. A regular polygon has equal sides and equal angles, so each interior angle is that sum divided by n.\n\nA pentagon is 5 sides, a hexagon 6, an octagon 8.",
  "A hexagon has 6 sides: (6 − 2) × 180° = 720°. That is four triangles. The sum is for all the interior angles together, not for one corner.\n\nIf the hexagon is irregular the angles can differ, but they still add to 720°.",
  "A regular pentagon has interior sum (5 − 2) × 180° = 540°, so each interior angle is 540° ÷ 5 = 108°. You can also find the exterior angle first (360°/5 = 72°) and subtract from 180°.",
]);

addMathsNotes("5.3", [
  "An exterior angle is formed by extending one side. The exterior angles of any convex polygon, one at each vertex, add to 360° — a full turn. For a regular n-gon each exterior angle is 360°/n, which is often the fastest route into the problem.\n\nInterior and exterior at the same vertex sit on a straight line, so they add to 180°.",
  "A regular octagon has 8 equal exterior angles: 360° ÷ 8 = 45°. Then each interior angle is 180° − 45° = 135°. That matches (8 − 2) × 180° ÷ 8.",
  "At any vertex the interior angle and the adjacent exterior angle make a straight line, so they add to 180°. If you know one, you know the other. This is true for irregular polygons as well, as long as you extend the side correctly.",
]);

addMathsNotes("5.4", [
  "Standard constructions use only a straight edge and a pair of compasses. The perpendicular bisector of a segment, the bisector of an angle, a perpendicular from a point to a line, and triangles from given sides or angles are the usual set.\n\nLeave the construction arcs visible. They are the evidence that the construction is exact, not sketched.",
  "Every point on the perpendicular bisector of AB is the same distance from A as from B. That is why the two arcs, drawn with the same radius from A and from B, meet on that line. The same idea is used in loci questions.\n\nIf the compass width changes between the two ends, the crossing is not midway.",
  "Keep the compass width the same so each intersection is equally far from both endpoints. Join those two intersections and you have the perpendicular bisector. Changing the width halfway through breaks the equal-distance property.\n\nA slightly larger width than half AB is enough; the arcs must actually cross.",
]);

addMathsNotes("5.5", [
  "Pythagoras’ theorem: in a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides, a² + b² = c². The hypotenuse is the longest side and sits opposite the right angle.\n\nUse it only when you know the triangle is right-angled (or when you are testing whether it is). Leave answers as surds unless a decimal is asked for.",
  "Legs 3 and 4: 3² + 4² = 9 + 16 = 25 = 5², so the hypotenuse is 5. This 3-4-5 triangle is a Pythagorean triple. Multiples such as 6-8-10 and 9-12-15 are also right-angled.",
  "If the hypotenuse is 13 and one leg is 5: other² = 13² − 5² = 169 − 25 = 144, so the other leg is 12. You subtract because you already have the longest side.\n\nAdding 169 + 25 would invent a side longer than the hypotenuse, which is impossible.",
]);

addMathsNotes("6.1", [
  "A census asks every member of the population. A sample asks some of them and uses the result as an estimate. Sampling is faster and cheaper, and it is the only option when testing would destroy the items (light bulbs, food).\n\nThe sample has to represent the population. Size helps, but a large biased sample is still biased.",
  "In a simple random sample every member has the same chance of being chosen, and each possible sample of that size is equally likely. Random number tables, names from a hat, or a calculator’s random integer are typical school methods.\n\nStopping the first 30 people at a gate is convenient, not random.",
  "Stratified sampling keeps the same proportions as groups in the population — for example year groups, or male and female. If 40% of the school is Year 8, then 40% of the sample should be Year 8, chosen at random inside that year.\n\nSystematic sampling takes every kth name from a list after a random start. It is tidy, but a hidden pattern in the list can still bias it.",
]);

addMathsNotes("6.2", [
  "Bias is a systematic slant so the results do not represent the population. It can come from who you ask, where and when you ask, how you ask, and who bothers to reply. Random error makes results bounce; bias pushes them in one direction.\n\nSaying the sample is ‘quite big’ does not remove bias.",
  "Asking only people at a gym about weekly exercise, or only your friends about a school rule, misses everyone who never goes to those places. A lunch-queue sample misses anyone who eats elsewhere. Those are biased samples even if the people answer honestly.",
  "A question is biased when the wording pushes an answer: ‘Do you agree that the excellent new canteen…’ already calls it excellent. Double questions, missing options, and offering only ‘yes’ also distort.\n\nA fair question is neutral, has a complete set of choices, and is easy to understand.",
]);

addMathsNotes("7.1", [
  "A circle’s circumference is the distance around it: C = 2πr = πd. The area is the space inside: A = πr². Use the radius in the area formula; if you are given the diameter, halve it first.\n\nLeave answers in terms of π when the question says so. That is exact. A decimal is an approximation.",
  "Radius 7 cm: A = π × 7² = 49π cm². Squaring happens before multiplying by π. 7² is 49, not 14. Units for area are square units: cm².",
  "Diameter 10 cm means radius 5 cm, but circumference only needs the diameter: C = πd = 10π cm. Using 2πr gives the same 2π × 5 = 10π cm.\n\nArea would be 25π cm², which is a different question.",
]);

addMathsNotes("7.2", [
  "A compound shape is built from simpler pieces. Split it into rectangles, triangles, semicircles or trapezia. Add the pieces that are part of the shape and subtract holes or cut-outs. Label every length you use; missing a side is the usual error.\n\nSketch the split before you calculate.",
  "Area of a triangle is ½ × base × perpendicular height. The height must be at right angles to the base you chose, not a sloping side. For a right-angled triangle the two legs can be base and height.",
  "A rectangle 8 by 6 has area 48. A 2 by 2 square cut out has area 4. What remains is 48 − 4 = 44 square units. Check that the square really sits entirely inside the rectangle.\n\nIf two shapes overlap and you add them, you must not count the overlap twice.",
]);

addMathsNotes("7.3", [
  "Metric units scale by 10, 100 or 1000 for length: 10 mm = 1 cm, 100 cm = 1 m, 1000 m = 1 km. Area uses the square of that factor, so 1 m² = 100 × 100 = 10 000 cm². Volume uses the cube: 1 m³ = 1 000 000 cm³.\n\nWrite the conversion factor before you multiply or divide, and check that the answer’s size looks sensible.",
  "1 m = 100 cm, so 1 m² = 100 cm × 100 cm = 10 000 cm². A common mistake is to use 100, as if area scaled like length. A square metre is a large tile; ten thousand centimetre-squares fit on it.",
  "2.5 km = 2.5 × 1000 m = 2500 m. Going to a smaller unit makes the number larger. 2.5 km is 2 500 000 mm, which shows why you pick a sensible unit for the context.",
]);

addMathsNotes("8.1", [
  "A fraction in lowest terms becomes a terminating decimal when the denominator’s only prime factors are 2 and/or 5, because we work in base 10. Any other prime factor (3, 7, 11, …) produces a recurring decimal. 1/3 = 0.333…, 1/6 = 0.1666…, 1/7 has a six-digit repeat.\n\nA dot or bar over the repeating digit is the correct notation: 0.2̇ or 0.2̄.",
  "3/8 = 0.375 because 8 = 2³, so the decimal terminates. Long division: 8 into 3.000 is 0.375 exactly. 3/8 is also 375/1000.",
  "A single recurring digit 0.2̇ means 0.222… = 2/9. The one-digit family is /9: 0.1̇ = 1/9, 0.5̇ = 5/9, 0.9̇ = 1. Two recurring digits sit over 99: 0.1̇8̇ = 18/99 = 2/11.\n\nAlgebraic proof: if x = 0.222…, then 10x = 2.222…, subtract, 9x = 2, x = 2/9.",
]);

addMathsNotes("8.2", [
  "A fraction bar acts like a bracket: work out the whole numerator and the whole denominator, then divide. Indices come before multiply and divide. Multiply and divide are equal in priority and run left to right. Add and subtract come last.\n\nWriting BIDMAS/BODMAS is only useful if you treat the fraction bar as a bracket.",
  "1/2 + 1/3 × 6: multiply first, 1/3 × 6 = 2, then 1/2 + 2 = 2½. If you add 1/2 + 1/3 first you have ignored the order of operations.\n\nA calculator with a fraction key will follow this order if you enter it as 1/2 + 1/3 × 6, not as (1/2 + 1/3) × 6.",
  "(1 + 3)/8 = 4/8 = 1/2. 1 + 3/8 = 1 + 0.375 = 1.375, or 11/8. The brackets (or the fraction bar) decide whether the 1 is inside the division.\n\nIn print, a long bar over 1 + 3 means the first reading. A slanted slash 1 + 3/8 means the second.",
]);

addMathsNotes("8.3", [
  "Multiply fractions by multiplying numerators and multiplying denominators. Cancel any common factor before you multiply if you can — the numbers stay smaller. Convert mixed numbers to improper fractions first.\n\nCross-cancelling is just cancelling a factor that appears in any numerator with one in any denominator.",
  "2/3 × 5/7 = 10/21. Nothing cancels. Leave 10/21 as it is; 10 and 21 share no common factor.",
  "1 1/2 = 3/2. Then 3/2 × 2/5 = 6/10 = 3/5, or cancel the 2s first: 3/1 × 1/5 = 3/5. Either way the mixed number must become improper before you multiply.\n\n1 1/2 × 2/5 is not 1 2/10.",
]);

addMathsNotes("8.4", [
  "Dividing by a fraction is multiplying by its reciprocal. Flip the second fraction, then multiply. a/b ÷ c/d = a/b × d/c. Whole numbers are fractions with denominator 1, so 6 ÷ 2/3 = 6/1 × 3/2.\n\n‘How many halves in 3/4?’ is the same idea as 3/4 ÷ 1/2.",
  "3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2. There are one and a half halves in three-quarters. A picture of a pizza helps: 3/4 of a pizza, pieces of size 1/2, gives 1.5 pieces.",
  "6 ÷ 2/3 = 6 × 3/2 = 18/2 = 9. Dividing by 2/3 asks how many two-thirds fit into 6. Three two-thirds make 2, so nine make 6.\n\n6 ÷ 3/2 would be 6 × 2/3 = 4, a different question.",
]);

addMathsNotes("8.5", [
  "Make fraction calculations easier before the messy arithmetic: cancel common factors, use equivalent fractions that share a denominator, split a mixed number, or swap 0.25 for 1/4 and 0.5 for 1/2. Factors of 100 help with percentages.\n\nA short cancelled product is less likely to go wrong than a large uncancelled one.",
  "4/9 × 3/8: cancel 4 with 8 to get 1/9 × 3/2, then cancel 3 with 9 to get 1/3 × 1/2 = 1/6. Doing 12/72 and simplifying later works, but the numbers are uglier.",
  "0.25 is exactly 1/4, so a product that includes 0.25 can become a division by 4. That stays exact and is often quicker than decimal multiplication.\n\n0.2 is 1/5, 0.75 is 3/4. Use the fraction when it simplifies the working.",
]);

addMathsNotes("9.1", [
  "A sequence is a list of terms in a definite order. A term-to-term rule tells you how to get the next term from the one before: add 4, multiply by 2, and so on. An arithmetic sequence adds (or subtracts) a constant. A geometric sequence multiplies by a constant.\n\nThe first term plus the rule is enough to generate as many terms as you need.",
  "First term 5, add 4 each time: 5, 9, 13, 17. The differences are all 4, which confirms it is arithmetic. The tenth term would be 5 + 9×4 = 41, using nine steps from the first term.",
  "A geometric sequence multiplies by the same number (the common ratio) each time. 3, 6, 12, 24 has ratio 2. 80, 40, 20, 10 has ratio 1/2. The terms grow or shrink quickly, unlike an arithmetic sequence.",
]);

addMathsNotes("9.2", [
  "The nth term is a formula for the term in position n. For an arithmetic sequence with first term a and common difference d, the nth term is a + (n − 1)d. Equivalently, if the difference is d, the formula looks like dn + k, and k is chosen so that n = 1 gives the first term.\n\nPosition n = 1 is the first term, not n = 0, unless a question says otherwise.",
  "If the nth term is 3n + 1, the 10th term is 3×10 + 1 = 31. The 1st term is 4, the 2nd is 7, and so on. To test whether 40 appears, solve 3n + 1 = 40; n = 13, an integer, so yes.",
  "5, 8, 11, 14 increases by 3, so the formula is 3n + k. When n = 1 the term is 5, so 3 + k = 5 and k = 2. nth term = 3n + 2. Check n = 4: 12 + 2 = 14.",
]);

addMathsNotes("9.3", [
  "A function maps each allowed input to exactly one output. You can show it as a function machine, a table of values, an equation y = f(x), or a graph. The input is often called x; the output is f(x) or y.\n\nMachines are read in order: if you ×3 then −2, the algebra is 3x − 2, not 3(x − 2), unless the subtract happens first.",
  "Input x, multiply by 3, then subtract 2: output 3x − 2. Reversing the machine (add 2, then divide by 3) gives the inverse function, which you meet more fully later.",
  "f(x) = 2x + 5, so f(4) = 2×4 + 5 = 13. The 4 replaces every x. f(4) is a number, not another formula.\n\nIf you need x when f(x) = 13, solve 2x + 5 = 13, x = 4. That is using the function backwards.",
]);

addMathsNotes("10.1", [
  "y = mx + c is a function of x: each x gives one y, and the graph is the set of points (x, y). A vertical line x = 4 is not a function of x, because that single x would have to pair with every y.\n\nThe idea ‘one output for each input’ is what ‘function’ means, even before you plot anything.",
  "On y = 2x − 1, when x = 3, y = 6 − 1 = 5. The point (3, 5) lies on the line. Another point is the intercept (0, −1).",
  "x = 4 is a vertical line. x is fixed and y can be any real number, so one input would have infinitely many outputs. That fails the function rule. Horizontal lines y = k are functions: every x gives the same y.",
]);

addMathsNotes("10.2", [
  "To plot a straight line, make a small table of x values, calculate y, plot the points and join them with a ruler. Two points determine a line; a third point is a check that you have not slipped in arithmetic.\n\nUse a sharp pencil and label the line with its equation.",
  "Any two distinct points on the line are enough to draw it. The intercepts are convenient: x = 0 gives the y-intercept, y = 0 gives the x-intercept. A third point sitting off your line means a calculation error.",
  "y = x² is not straight. The points (−2, 4), (−1, 1), (0, 0), (1, 1), (2, 4) form a U-shape called a parabola. Join them with a smooth curve, not a ruler. The same table method works; only the shape changes.",
]);

addMathsNotes("10.3", [
  "In y = mx + c, m is the gradient: rise over run, (change in y) / (change in x). A positive m slopes up to the right; a negative m slopes down. c is the y-intercept, where the line crosses the y-axis (x = 0).\n\nParallel lines have the same gradient. A gradient of 0 is horizontal.",
  "Through (0, 1) and (4, 9): gradient = (9 − 1)/(4 − 0) = 8/4 = 2. The line rises 2 for every 1 across. Because it passes through (0, 1), the equation is y = 2x + 1.",
  "Gradient −3 and y-intercept 5 means y = −3x + 5. The minus belongs to the gradient: the line falls 3 units for each 1 unit to the right. Do not write y = 3x − 5 unless those are the actual values.",
]);

addMathsNotes("10.4", [
  "On a real graph, read the axis labels and units first. The gradient is a rate of change (speed, cost per item, grams per centimetre). A horizontal section means no change. An intersection is where two rules give the same value.\n\nA steep line is a large rate only if the scales are what they appear to be — check the numbers on the axes.",
  "On a distance–time graph the gradient is speed. A steeper line means faster travel. A flat line means stationary. Coming back towards the start makes the distance fall. Speed cannot be negative here; a downward slope means moving towards the origin, not ‘negative speed’ in this course.",
  "Two lines on a conversion or cost graph cross at the value of x where both rules give the same y. That may be a break-even point, a moment when two journeys have gone equally far, or the solution of two simultaneous equations. Always say it in the context of the question.",
]);

addMathsNotes("11.1", [
  "To share an amount in the ratio a : b, add the parts to get a + b. One part is the total divided by that sum. Then multiply by a and by b. Simplify a ratio by dividing both sides by the same number, just like a fraction.\n\n2 : 3 means 2/5 and 3/5 of the whole, not 2/3 and 3/2.",
  "£60 in the ratio 2 : 3. Parts add to 5. One part is £12. The shares are 2×12 = £24 and 3×12 = £36. Check: 24 + 36 = 60, and 24 : 36 simplifies to 2 : 3.",
  "12 : 18 divide by 6 to get 2 : 3. You can also write 12/18 = 2/3, which is the same comparison. A ratio has no units once it is simplified, unless the question keeps them (for example 3 cm : 5 cm).",
]);

addMathsNotes("11.2", [
  "Direct proportion: y = kx. If x doubles, y doubles. The graph is a straight line through the origin. Inverse proportion: y = k/x. If x doubles, y halves. The graph is a curve getting closer to both axes.\n\nFind k from one pair of values, then use it for the other pair.",
  "y is directly proportional to x, and y = 10 when x = 4, so k = 10/4 = 2.5. When x = 6, y = 2.5 × 6 = 15. You can also scale: 6 is 1.5 times 4, so y becomes 1.5 × 10 = 15.",
  "8 workers take 6 days. The work is 8 × 6 = 48 worker-days. 12 workers take 48/12 = 4 days. That is inverse proportion: more workers, fewer days, product constant.\n\nThis assumes everyone works at the same rate and the job does not change.",
]);

addMathsNotes("12.1", [
  "Mutually exclusive events cannot happen at the same time: a coin cannot be both heads and tails on one flip. For exclusive events, P(A or B) = P(A) + P(B). If they can overlap you must not add the probabilities without subtracting the overlap.\n\nA Venn diagram makes the overlap visible.",
  "On a fair die, even is {2, 4, 6} and 5 is {5}. They do not overlap, so P(even or 5) = 3/6 + 1/6 = 4/6 = 2/3. Listing the four outcomes 2, 4, 5, 6 is a good check.",
  "Even and prime on a die are {2, 4, 6} and {2, 3, 5}. 2 sits in both, so adding 3/6 + 3/6 = 1 would count 2 twice and miss that 1 is neither. The true union is {2, 3, 4, 5, 6}, probability 5/6.",
]);

addMathsNotes("12.2", [
  "Independent events do not affect each other. Then P(A and B) = P(A) × P(B). Two coin tosses, a coin and a die, or draws with replacement are the usual independent pairs.\n\nIf the first result changes the second probability, the events are not independent — typically drawing without replacement.",
  "Two fair coins: P(head and head) = 1/2 × 1/2 = 1/4. The four equally likely outcomes are HH, HT, TH, TT. Two heads is one of the four.\n\nP(at least one head) is 3/4, not 1/2 + 1/2.",
  "If you draw a card and do not put it back, the pack is smaller and the remaining probabilities change. Those draws are dependent. Replacing the card (and shuffling) restores independence.\n\nA tree diagram with different numbers on the second branches is the sign of dependence.",
]);

addMathsNotes("12.3", [
  "Combined outcomes can be listed in a sample-space table or shown on a tree. Each complete path on a tree is one combined event. Multiply the probabilities along a path for ‘and’. Add the probabilities of different paths for ‘or’.\n\nIf every outcome is equally likely, counting is enough. If not, you must use the probabilities on the branches.",
  "A 1–4 spinner and a coin: 4 × 2 = 8 outcomes if both are fair: 1H, 1T, 2H, 2T, 3H, 3T, 4H, 4T. P(3 and heads) = 1/8. P(even and tails) = 2/8 = 1/4.",
  "Each branch of a tree carries the probability of that step. After two steps, a path such as ‘red then blue’ has probability P(red) × P(blue after red). Different paths that all count as ‘exactly one red’ are added.\n\nThe probabilities on branches from one point must add to 1.",
]);

addMathsNotes("12.4", [
  "Theoretical probability comes from equally likely outcomes or a known model. Experimental (relative-frequency) probability is number of successes ÷ number of trials. In the long run, the experimental value should settle near the theoretical one, but it will bounce when the number of trials is small.\n\nAn experiment cannot ‘prove’ a coin is unfair from ten tosses.",
  "18 reds in 50 spins: estimated P(red) = 18/50 = 0.36, or 9/25. That is an estimate from this experiment, not a proof that the spinner is 36% red.",
  "Ten trials can easily land far from the true probability just by chance. Twenty reds in 50 is more informative than two reds in 5, even though both are 40%. Larger n reduces the wobble — that is the idea of the long run.",
]);

addMathsNotes("13.1", [
  "A bearing is the angle measured from north, clockwise, written with three figures: 045°, 180°, 270°. North is 000°, east 090°, south 180°, west 270°. On a scale drawing you measure the angle with a protractor after drawing a north line at the starting point.\n\nThe bearing of B from A is the direction you face at A to look towards B.",
  "South-east is halfway from south to east, which is 180° − 45° = 135°, or 090° + 45°. Write 135°, not 135 or 45° SE, when a bearing is asked for.",
  "The reverse bearing, A from B, differs by 180°. If B from A is 070°, then A from B is 250°. If the first bearing is larger than 180°, subtract 180° instead of adding. A sketch of two north lines and a joining segment makes the extra 180° obvious.",
]);

addMathsNotes("13.2", [
  "The midpoint of a line segment is the average of the endpoints: ((x₁ + x₂)/2, (y₁ + y₂)/2). You are finding the point halfway along both the x-change and the y-change.\n\nThe same idea in reverse: if you know A and the midpoint M, then B is as far beyond M as A is before it: B = 2M − A.",
  "Midpoint of (2, 5) and (8, 1): x = (2 + 8)/2 = 5, y = (5 + 1)/2 = 3, so (5, 3). The run is 6 and the rise is −4; half of those is 3 and −2, and (2 + 3, 5 − 2) = (5, 3).",
  "A is (0, 0) and M is (3, 4), so B is (6, 8). From A to M you go +3 and +4; repeat that step from M. Using 2M − A: 2(3, 4) − (0, 0) = (6, 8).",
]);

addMathsNotes("13.3", [
  "The four transformations in this course are translation (a vector says how far across and up), rotation (centre, angle and direction), reflection (a mirror line) and enlargement (centre and scale factor). The first three keep lengths and angles, so the image is congruent. Enlargement changes size; the image is similar.\n\nName every detail. ‘Rotated’ without a centre or angle is incomplete.",
  "A translation by vector (3, −2) moves every point 3 right and 2 down. The image is the same way up; nothing is flipped or turned. The vector is column notation: top number x-shift, bottom number y-shift.",
  "Translation, rotation and reflection are congruences: lengths and angles stay the same. Enlargement with scale factor not equal to 1 (or −1 in later work) changes lengths, so it is a similarity, not a congruence. Area then scales by the square of the scale factor.",
]);

addMathsNotes("13.4", [
  "To enlarge from a centre, draw a ray from the centre through each vertex. The new vertex sits on that ray, at distance (scale factor) × (old distance). Scale factor 2 doubles every length from the centre. Scale factor 1/2 halves them and pulls the shape closer in.\n\nThe centre itself does not move. It may sit inside, on, or outside the shape.",
  "Scale factor 1/2 is a reduction. Lengths are half as long and each vertex is halfway from the centre to its original position. The image is similar to the original, just smaller.",
  "Lengths scale by the scale factor k. Areas scale by k². A scale factor of 3 multiplies area by 9. Volumes, when you meet them, scale by k³. That is why a ‘twice as wide’ pizza is four times the area, not twice.",
]);

addMathsNotes("14.1", [
  "A prism has the same cross-section all the way along its length. Volume = area of that cross-section × length. A cuboid is the special case l × w × h. A cylinder is a circular prism: volume πr²h.\n\nUnits are cubic: cm³, m³. If you mix cm and m, convert first.",
  "Triangular cross-section 6 cm² and length 10 cm: volume 60 cm³. You do not need to know how the 6 cm² was found if the question already gives it. If you must find it, use ½ × base × height of the triangle.",
  "A cylinder’s cross-section is a circle, so volume = πr² × height. The height is the length of the prism. Lying the cylinder on its side does not change the volume; it only swaps which measurement you call the length.",
]);

addMathsNotes("14.2", [
  "Surface area is the total area of every face. Sketch a net so you can see them all. A cube has six squares. A cuboid has three pairs of rectangles. A cylinder has two circles and a rectangle whose width is the circumference 2πr and whose height is h, so 2πr² + 2πrh.\n\nClosed surface area includes the lids. An open tin misses one circle.",
  "A cube of side 4 cm has six faces of 16 cm², so 96 cm². 4³ = 64 cm³ is the volume, a different quantity with different units.",
  "A net lays every face flat. You can check that faces that meet on the solid share an edge of the same length, and that you have not counted a face twice or missed the base. Drawing the net is a method, not decoration.",
]);

addMathsNotes("14.3", [
  "A plane of symmetry cuts a 3D shape into two halves that are mirror images. An axis of rotational symmetry is a line about which you can turn the shape so it looks the same before a full 360° turn.\n\nA cube is rich in both. A scalene triangular pyramid may have none.",
  "A cube has 9 planes of symmetry: three that cut parallel to a pair of faces through the centre, and six that slice diagonally through opposite edges. It also has several axes, including those through opposite faces, opposite edges and opposite vertices.",
  "A square-based pyramid whose apex sits above the centre of the base has four planes of symmetry, each through the apex and a line of symmetry of the square base (through midpoints or through opposite corners). If the apex is off-centre, some or all of those planes disappear.",
]);

addMathsNotes("15.1", [
  "A frequency polygon plots frequency against the midpoint of each class, then joins the points with straight lines. It is the outline of a histogram without the bars. Use the same axes to draw a second polygon if you want to compare two distributions.\n\nDo not put the points at the class ends; the midpoint represents the class.",
  "Class 10–20 with frequency 8 is plotted at (15, 8). If the next class is 20–30 with frequency 5, join (15, 8) to (25, 5). The polygon shows the shape: peak, spread, and possible skew.",
  "Two frequency polygons on one grid make it easy to see which group has the higher peak, which is more spread out, and whether one is shifted to the right (larger values). A table of means and ranges can sit beside the diagram in a written comparison.",
]);

addMathsNotes("15.2", [
  "A scatter graph plots paired data (x, y). A cloud that slopes up shows positive correlation; down shows negative; a random spray shows little or none. A line of best fit is a straight line through the trend, not forced through outliers, used for estimates inside the data range.\n\nCorrelation is a pattern, not automatic proof of cause.",
  "An outlier sits far from the pattern of the others. It might be a recording error, a special case, or a genuine extreme. Decide in context whether to treat it separately. Do not drag the line of best fit across just to visit it.",
  "Two variables can rise together because both are driven by a third factor (hot weather, age, time) or by chance. ‘Ice cream sales and drowning’ is the usual warning: both follow summer, not each other. Write ‘there is association’ unless a controlled reason is given.",
]);

addMathsNotes("15.3", [
  "A back-to-back stem-and-leaf diagram shares one stem down the middle, with leaves for one data set on the left and the other on the right. You can compare shape, spread and typical value without losing the original numbers.\n\nLeaves must be aligned in order, one digit each, and a key is compulsory.",
  "A key such as 3 | 2 means 32, or 3.2, depending on what the key says. Without a key the diagram is unreadable. Write the key for both sides if the place value could be in doubt.",
  "To find a median, count in from the ends of that one data set to the middle position. For 19 values the median is the 10th. Do the two sides separately; do not mix the leaves. The stem-and-leaf already lists each set in order once the leaves are sorted.",
]);

addMathsNotes("15.4", [
  "Grouped data hides the exact values, so the mean can only be estimated. Use the midpoint of each class: estimated mean = Σ(midpoint × frequency) / Σfrequency. The modal class is the class with the highest frequency. The median sits in the class where the cumulative frequency passes n/2.\n\nYou cannot recover the exact mean, median or mode from the table alone.",
  "The median class is the one in which the running total of frequencies first reaches or passes n/2. For 40 values that is the class containing the 20th value. You do not know the exact median without extra assumptions.",
  "The modal class is an interval, not a single most-common value. Calling it ‘the mode’ is sloppy: the mode would be an exact number, which grouped data does not give. Say ‘the modal class is 20–30’ instead.",
]);

addMathsNotes("15.5", [
  "Choose a chart that matches the data. Bar charts and pie charts for categories. Histograms or frequency polygons for grouped continuous data. Scatter graphs for two measured variables. A time series for change over time. Every chart needs a title, labels or a key, and units.\n\nA pretty picture that hides the scale is a bad chart.",
  "A title says what the data are. Axes need quantity and unit (Time (s), Mass (g)). A pie chart needs a key if the slices are not labelled. A stem-and-leaf needs a key for place value. Missing any of these makes the diagram incomplete in an exam.",
  "A vertical axis that does not start at zero makes bar heights look more different than they are. That is a common way to mislead. If a scale is broken, it must be marked clearly. In school work, start bars at zero unless you have a strong reason and you say so.",
]);
