const fs = require('fs');

const BG_COLOR = "#ffffff";
const BOX_BG = "#f8fafc";
const BOX_BORDER = "#cbd5e1";
const TEXT_MAIN = "#0f172a";
const TEXT_SUB = "#475569";
const GREEN = "#059669";
const BLUE = "#2563eb";
const RED = "#dc2626";
const ORANGE = "#d97706";
const PURPLE = "#7c3aed";

function splitText(text, maxLen = 45) {
    const words = text.split(/\s+/);
    const lines = [];
    let currentLine = [];
    let currentLen = 0;
    for (const word of words) {
        if (currentLen + word.length > maxLen && currentLine.length > 0) {
            lines.push(currentLine.join(" "));
            currentLine = [word];
            currentLen = word.length;
        } else {
            currentLine.push(word);
            currentLen += word.length + 1;
        }
    }
    if (currentLine.length > 0) lines.push(currentLine.join(" "));
    return lines;
}

function getBg() {
    return [{ type: "rect", x: 0, y: 0, width: 800, height: 500, fill: BG_COLOR }];
}

function createTextBlock(lines, startY, color, size) {
    let y = startY;
    return lines.map(line => {
        const el = { type: "text", x: 400, y: y, text: line, color: color, size: size };
        y += Math.round(size * 1.5);
        return el;
    });
}

function generateVisualsForCard(chapterNum, topicId, card, index) {
    const isKeyIdea = card.kind.toLowerCase().includes("key idea");
    const frontLines = splitText(card.front, 50);
    const backLines = splitText(card.back, 50);
    
    const step1 = [
        ...getBg(),
        { type: "rect", x: 40, y: 40, width: 720, height: 420, fill: BOX_BG, stroke: BOX_BORDER, strokeWidth: 2, rx: 10 },
        { type: "text", x: 400, y: 80, text: isKeyIdea ? "💡 Key Concept" : "❓ Practice Question", color: isKeyIdea ? ORANGE : GREEN, size: 24 },
        ...createTextBlock(frontLines, 130, TEXT_MAIN, 20)
    ];
    
    // Add visual flair based on chapter
    let visualElements = [];
    let visualY = 130 + (frontLines.length * 30) + 20;
    
    if (chapterNum === 7) {
        // Fractions: Draw a fraction circle or bar
        visualElements.push(
            { type: "circle", cx: 400, cy: visualY + 60, r: 50, stroke: BLUE, width: 3, fill: "#e0f2fe" },
            { type: "path", d: `M 400 ${visualY+10} L 400 ${visualY+110}`, stroke: BLUE, width: 2, fill: "none" },
            { type: "path", d: `M 350 ${visualY+60} L 450 ${visualY+60}`, stroke: BLUE, width: 2, fill: "none" }
        );
    } else if (chapterNum === 8) {
        // Shapes: Draw some polygons
        visualElements.push(
            { type: "path", d: `M 350 ${visualY+100} L 400 ${visualY+20} L 450 ${visualY+100} Z`, stroke: PURPLE, width: 3, fill: "#f3e8ff" },
            { type: "rect", x: 250, y: visualY+40, width: 60, height: 60, stroke: GREEN, width_stroke: 3, fill: "#d1fae5" }
        );
    } else if (chapterNum === 9) {
        // Sequences: Draw a function machine or sequence jumps
        visualElements.push(
            { type: "rect", x: 200, y: visualY+40, width: 60, height: 40, stroke: BLUE, width_stroke: 2, fill: "none", rx: 5 },
            { type: "text", x: 230, y: visualY+60, text: "n", color: BLUE, size: 18 },
            { type: "path", d: `M 270 ${visualY+60} L 320 ${visualY+60}`, stroke: ORANGE, width: 2, fill: "none" },
            { type: "path", d: `M 310 ${visualY+50} L 320 ${visualY+60} L 310 ${visualY+70}`, stroke: ORANGE, width: 2, fill: "none" },
            { type: "rect", x: 330, y: visualY+20, width: 140, height: 80, stroke: PURPLE, width_stroke: 3, fill: "#f3e8ff", rx: 10 },
            { type: "text", x: 400, y: visualY+60, text: "Rule", color: PURPLE, size: 20 },
            { type: "path", d: `M 480 ${visualY+60} L 530 ${visualY+60}`, stroke: ORANGE, width: 2, fill: "none" },
            { type: "path", d: `M 520 ${visualY+50} L 530 ${visualY+60} L 520 ${visualY+70}`, stroke: ORANGE, width: 2, fill: "none" },
            { type: "rect", x: 540, y: visualY+40, width: 60, height: 40, stroke: GREEN, width_stroke: 2, fill: "none", rx: 5 },
            { type: "text", x: 570, y: visualY+60, text: "Out", color: GREEN, size: 18 }
        );
    } else if (chapterNum === 10) {
        // Percentages: Draw a percentage bar
        visualElements.push(
            { type: "rect", x: 200, y: visualY+40, width: 400, height: 30, stroke: TEXT_SUB, width_stroke: 2, fill: "none" },
            { type: "rect", x: 200, y: visualY+40, width: 200, height: 30, fill: "#d1fae5" },
            { type: "text", x: 300, y: visualY+55, text: "50%", color: GREEN, size: 16 },
            { type: "text", x: 200, y: visualY+90, text: "0%", color: TEXT_SUB, size: 14 },
            { type: "text", x: 600, y: visualY+90, text: "100%", color: TEXT_SUB, size: 14 }
        );
    } else if (chapterNum === 11) {
        // Graphs: Draw axes and a line
        visualElements.push(
            { type: "path", d: `M 300 ${visualY+120} L 500 ${visualY+120}`, stroke: TEXT_MAIN, width: 2, fill: "none" },
            { type: "path", d: `M 400 ${visualY+20} L 400 ${visualY+140}`, stroke: TEXT_MAIN, width: 2, fill: "none" },
            { type: "path", d: `M 320 ${visualY+100} L 480 ${visualY+40}`, stroke: RED, width: 3, fill: "none" }
        );
    } else if (chapterNum === 12) {
        // Ratio: Draw ratio blocks
        visualElements.push(
            { type: "rect", x: 300, y: visualY+40, width: 40, height: 40, fill: BLUE },
            { type: "rect", x: 350, y: visualY+40, width: 40, height: 40, fill: BLUE },
            { type: "text", x: 410, y: visualY+60, text: ":", color: TEXT_MAIN, size: 24 },
            { type: "rect", x: 440, y: visualY+40, width: 40, height: 40, fill: ORANGE },
            { type: "rect", x: 490, y: visualY+40, width: 40, height: 40, fill: ORANGE },
            { type: "rect", x: 540, y: visualY+40, width: 40, height: 40, fill: ORANGE }
        );
    } else if (chapterNum === 13) {
        // Probability: Draw a probability scale
        visualElements.push(
            { type: "path", d: `M 200 ${visualY+60} L 600 ${visualY+60}`, stroke: TEXT_MAIN, width: 3, fill: "none" },
            { type: "path", d: `M 200 ${visualY+50} L 200 ${visualY+70}`, stroke: TEXT_MAIN, width: 2, fill: "none" },
            { type: "path", d: `M 400 ${visualY+50} L 400 ${visualY+70}`, stroke: TEXT_MAIN, width: 2, fill: "none" },
            { type: "path", d: `M 600 ${visualY+50} L 600 ${visualY+70}`, stroke: TEXT_MAIN, width: 2, fill: "none" },
            { type: "text", x: 200, y: visualY+90, text: "0 (Impossible)", color: RED, size: 14 },
            { type: "text", x: 400, y: visualY+90, text: "0.5 (Evens)", color: ORANGE, size: 14 },
            { type: "text", x: 600, y: visualY+90, text: "1 (Certain)", color: GREEN, size: 14 }
        );
    } else if (chapterNum === 14) {
        // Position/Transformation: Draw a grid and a translated triangle
        visualElements.push(
            { type: "path", d: `M 250 ${visualY+100} L 300 ${visualY+50} L 300 ${visualY+100} Z`, stroke: BLUE, width: 2, fill: "#e0f2fe" },
            { type: "path", d: `M 320 ${visualY+75} L 450 ${visualY+75}`, stroke: TEXT_SUB, width: 2, fill: "none", dash: "4,4" },
            { type: "path", d: `M 440 ${visualY+65} L 450 ${visualY+75} L 440 ${visualY+85}`, stroke: TEXT_SUB, width: 2, fill: "none" },
            { type: "path", d: `M 470 ${visualY+100} L 520 ${visualY+50} L 520 ${visualY+100} Z`, stroke: GREEN, width: 2, fill: "#d1fae5" }
        );
    } else if (chapterNum === 15) {
        // Area/Volume: Draw a 3D box or 2D shape with dimensions
        visualElements.push(
            { type: "rect", x: 300, y: visualY+40, width: 120, height: 60, stroke: PURPLE, width_stroke: 2, fill: "#f3e8ff" },
            { type: "path", d: `M 300 ${visualY+40} L 340 ${visualY+10} L 460 ${visualY+10} L 420 ${visualY+40}`, stroke: PURPLE, width: 2, fill: "none" },
            { type: "path", d: `M 460 ${visualY+10} L 460 ${visualY+70} L 420 ${visualY+100}`, stroke: PURPLE, width: 2, fill: "none" }
        );
    } else if (chapterNum === 16) {
        // Statistics: Draw a bar chart
        visualElements.push(
            { type: "path", d: `M 300 ${visualY+120} L 500 ${visualY+120}`, stroke: TEXT_MAIN, width: 2, fill: "none" },
            { type: "path", d: `M 300 ${visualY+20} L 300 ${visualY+120}`, stroke: TEXT_MAIN, width: 2, fill: "none" },
            { type: "rect", x: 320, y: visualY+60, width: 30, height: 60, fill: BLUE },
            { type: "rect", x: 370, y: visualY+30, width: 30, height: 90, fill: GREEN },
            { type: "rect", x: 420, y: visualY+80, width: 30, height: 40, fill: ORANGE }
        );
    }
    
    step1.push(...visualElements);
    
    const step2 = JSON.parse(JSON.stringify(step1));
    let yPos2 = visualY + 150;
    
    // Add the answer text
    const answerLines = createTextBlock(backLines, yPos2, BLUE, 20);
    step2.push(...answerLines);
    
    return [
        {
            narration: isKeyIdea ? "Let's explore this key concept." : "Read the question and think of the answer.",
            rule: card.front,
            quizQ: isKeyIdea ? "" : card.front,
            quizA: "",
            elements: step1
        },
        {
            clear: false,
            narration: isKeyIdea ? "Here is the explanation." : "Here is the solution!",
            rule: card.back,
            quizQ: isKeyIdea ? "" : card.front,
            quizA: card.back,
            elements: answerLines
        }
    ];
}

const y7 = fs.readFileSync('content-y7-maths.js', 'utf8');
const topics = [];
const regex = /topic\("(\d+\.\d+)",\s*"([^"]+)",\s*\[([\s\S]*?)\]\)/g;
let match;
while ((match = regex.exec(y7)) !== null) {
    const id = match[1];
    const chapterNum = parseInt(id.split('.')[0]);
    if (chapterNum >= 7 && chapterNum <= 16) {
        const title = match[2];
        const cardsStr = match[3];
        const cards = [];
        const cardRegex = /\["([^"]+)",\s*"([^"]+)",\s*"([\s\S]*?)"\]/g;
        let cardMatch;
        while ((cardMatch = cardRegex.exec(cardsStr)) !== null) {
            cards.push({ kind: cardMatch[1], front: cardMatch[2], back: cardMatch[3] });
        }
        topics.push({ id: `m7_${id}`, chapterNum, title: `${id} ${title}`, cards });
    }
}

let restored = fs.readFileSync('interactive-whiteboard-data.js', 'utf8');
let jsonStr2 = restored.replace('window.INTERACTIVE_WHITEBOARD_DATA = ', '').replace(/;\s*$/, '');
let data = eval('(' + jsonStr2 + ')');

for (const topic of topics) {
    const subtopics = [];
    const scenes = {};
    
    topic.cards.forEach((card, i) => {
        const subtopicId = `card_${i}`;
        subtopics.push({ id: subtopicId, label: card.kind });
        scenes[subtopicId] = generateVisualsForCard(topic.chapterNum, topic.id, card, i);
    });
    
    data[topic.id] = {
        title: topic.title,
        watermark: `Section ${topic.id.split('_')[1]}`,
        subtopics: subtopics,
        scenes: scenes
    };
}

const finalOutput = 'window.INTERACTIVE_WHITEBOARD_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully generated rich visuals for Chapters 7-16!");
