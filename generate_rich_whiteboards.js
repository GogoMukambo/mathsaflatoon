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

function createFractionCircle(cx, cy, r, parts, shadedParts, color) {
    const elements = [];
    elements.push({ type: "circle", cx, cy, r, stroke: color, width: 2, fill: "none" });
    // Draw lines
    for (let i = 0; i < parts; i++) {
        const angle = (i * 360 / parts) * Math.PI / 180;
        const x2 = cx + r * Math.sin(angle);
        const y2 = cy - r * Math.cos(angle);
        elements.push({ type: "path", d: `M ${cx} ${cy} L ${x2} ${y2}`, stroke: color, width: 2, fill: "none" });
    }
    // Add text
    elements.push({ type: "text", x: cx, y: cy + r + 20, text: `${shadedParts}/${parts}`, color: color, size: 20 });
    return elements;
}

function createNumberLine(x, y, width, min, max, val1, val2, color) {
    const elements = [];
    elements.push({ type: "path", d: `M ${x} ${y} L ${x + width} ${y}`, stroke: TEXT_MAIN, width: 3, fill: "none" });
    const range = max - min;
    for (let i = min; i <= max; i++) {
        const px = x + ((i - min) / range) * width;
        elements.push({ type: "path", d: `M ${px} ${y-5} L ${px} ${y+5}`, stroke: TEXT_MAIN, width: 2, fill: "none" });
        if (i % Math.ceil(range/10) === 0) {
            elements.push({ type: "text", x: px, y: y + 25, text: i.toString(), color: TEXT_MAIN, size: 14 });
        }
    }
    if (val1 !== null) {
        const px = x + ((val1 - min) / range) * width;
        elements.push({ type: "circle", cx: px, cy: y, r: 6, fill: color, stroke: color, width: 2 });
    }
    if (val2 !== null) {
        const px1 = x + ((val1 - min) / range) * width;
        const px2 = x + ((val2 - min) / range) * width;
        elements.push({ type: "circle", cx: px2, cy: y, r: 6, fill: "none", stroke: color, width: 2 });
        elements.push({ type: "path", d: `M ${px1} ${y} L ${px2} ${y}`, stroke: color, width: 4, fill: "none" });
    }
    return elements;
}

function createFunctionMachine(x, y, input, rule, output, color) {
    return [
        { type: "rect", x: x, y: y, width: 60, height: 40, stroke: TEXT_SUB, width_stroke: 2, fill: "none", rx: 5 },
        { type: "text", x: x + 30, y: y + 25, text: input, color: TEXT_SUB, size: 18 },
        { type: "path", d: `M ${x+60} ${y+20} L ${x+100} ${y+20}`, stroke: color, width: 2, fill: "none" },
        { type: "path", d: `M ${x+90} ${y+10} L ${x+100} ${y+20} L ${x+90} ${y+30}`, stroke: color, width: 2, fill: "none" },
        { type: "rect", x: x+100, y: y-10, width: 100, height: 60, stroke: color, width_stroke: 3, fill: BOX_BG, rx: 10 },
        { type: "text", x: x+150, y: y + 25, text: rule, color: color, size: 20 },
        { type: "path", d: `M ${x+200} ${y+20} L ${x+240} ${y+20}`, stroke: color, width: 2, fill: "none" },
        { type: "path", d: `M ${x+230} ${y+10} L ${x+240} ${y+20} L ${x+230} ${y+30}`, stroke: color, width: 2, fill: "none" },
        { type: "rect", x: x+240, y: y, width: 60, height: 40, stroke: TEXT_SUB, width_stroke: 2, fill: "none", rx: 5 },
        { type: "text", x: x+270, y: y + 25, text: output, color: TEXT_SUB, size: 18 }
    ];
}

function createBalancingScale(x, y, leftText, rightText, color) {
    return [
        { type: "path", d: `M ${x} ${y} L ${x-40} ${y+60} L ${x+40} ${y+60} Z`, fill: "#94a3b8" },
        { type: "path", d: `M ${x-150} ${y} L ${x+150} ${y}`, stroke: "#475569", width: 6, fill: "none" },
        { type: "rect", x: x-150, y: y-50, width: 100, height: 50, fill: "#e0f2fe", stroke: color, strokeWidth: 2, rx: 5 },
        { type: "text", x: x-100, y: y-20, text: leftText, color: color, size: 16 },
        { type: "rect", x: x+50, y: y-50, width: 100, height: 50, fill: "#fef2f2", stroke: RED, strokeWidth: 2, rx: 5 },
        { type: "text", x: x+100, y: y-20, text: rightText, color: RED, size: 16 }
    ];
}

function createGeometryShape(x, y, type, color) {
    if (type === "triangle") {
        return [
            { type: "path", d: `M ${x} ${y-40} L ${x-50} ${y+40} L ${x+50} ${y+40} Z`, stroke: color, width: 3, fill: BOX_BG }
        ];
    } else if (type === "rectangle") {
        return [
            { type: "rect", x: x-60, y: y-40, width: 120, height: 80, stroke: color, width_stroke: 3, fill: BOX_BG }
        ];
    } else if (type === "circle") {
        return [
            { type: "circle", cx: x, cy: y, r: 50, stroke: color, width: 3, fill: BOX_BG },
            { type: "path", d: `M ${x} ${y} L ${x+50} ${y}`, stroke: TEXT_SUB, width: 2, fill: "none", dash: "4,4" },
            { type: "text", x: x+25, y: y-10, text: "r", color: TEXT_SUB, size: 16 }
        ];
    } else if (type === "cube") {
        return [
            { type: "rect", x: x-30, y: y-30, width: 60, height: 60, stroke: color, width_stroke: 2, fill: "none" },
            { type: "path", d: `M ${x-30} ${y-30} L ${x-10} ${y-50} L ${x+50} ${y-50} L ${x+30} ${y-30}`, stroke: color, width: 2, fill: "none" },
            { type: "path", d: `M ${x+50} ${y-50} L ${x+50} ${y+10} L ${x+30} ${y+30}`, stroke: color, width: 2, fill: "none" }
        ];
    }
    return [];
}

function createRatioBlocks(x, y, ratio1, ratio2, color1, color2) {
    const elements = [];
    const size = 30;
    const gap = 5;
    let currX = x - ((ratio1 + ratio2) * (size + gap) + 20) / 2;
    for (let i = 0; i < ratio1; i++) {
        elements.push({ type: "rect", x: currX, y: y, width: size, height: size, fill: color1, rx: 4 });
        currX += size + gap;
    }
    elements.push({ type: "text", x: currX + 10, y: y + 20, text: ":", color: TEXT_MAIN, size: 24 });
    currX += 20 + gap;
    for (let i = 0; i < ratio2; i++) {
        elements.push({ type: "rect", x: currX, y: y, width: size, height: size, fill: color2, rx: 4 });
        currX += size + gap;
    }
    return elements;
}

function createGraphAxes(x, y, width, height, color) {
    return [
        { type: "path", d: `M ${x} ${y} L ${x} ${y+height}`, stroke: TEXT_MAIN, width: 2, fill: "none" },
        { type: "path", d: `M ${x} ${y+height} L ${x+width} ${y+height}`, stroke: TEXT_MAIN, width: 2, fill: "none" },
        { type: "path", d: `M ${x} ${y+height} L ${x+width} ${y}`, stroke: color, width: 3, fill: "none" }
    ];
}

function createTreeDiagram(x, y, color) {
    return [
        { type: "path", d: `M ${x} ${y} L ${x+60} ${y-40}`, stroke: color, width: 2, fill: "none" },
        { type: "path", d: `M ${x} ${y} L ${x+60} ${y+40}`, stroke: color, width: 2, fill: "none" },
        { type: "text", x: x+80, y: y-35, text: "A", color: TEXT_MAIN, size: 16 },
        { type: "text", x: x+80, y: y+45, text: "B", color: TEXT_MAIN, size: 16 }
    ];
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
    
    let visualElements = [];
    let visualY = 130 + (frontLines.length * 30) + 20;
    
    // Determine which template to use based on chapter/topic
    const titleLower = topicId.toLowerCase();
    
    if (titleLower.includes("fraction")) {
        visualElements = createFractionCircle(400, visualY + 60, 50, 4, 3, BLUE);
    } else if (titleLower.includes("sequence") || titleLower.includes("function") || titleLower.includes("formula")) {
        visualElements = createFunctionMachine(250, visualY + 40, "x", "× 3 + 2", "y", PURPLE);
    } else if (titleLower.includes("equation") || titleLower.includes("inequalit")) {
        if (titleLower.includes("inequalit")) {
            visualElements = createNumberLine(200, visualY + 60, 400, -5, 5, -2, 3, GREEN);
        } else {
            visualElements = createBalancingScale(400, visualY + 80, "2x + 5", "15", BLUE);
        }
    } else if (titleLower.includes("shape") || titleLower.includes("angle") || titleLower.includes("area") || titleLower.includes("volume") || titleLower.includes("geometry")) {
        if (titleLower.includes("circle")) {
            visualElements = createGeometryShape(400, visualY + 60, "circle", ORANGE);
        } else if (titleLower.includes("volume") || titleLower.includes("3d")) {
            visualElements = createGeometryShape(400, visualY + 60, "cube", PURPLE);
        } else {
            visualElements = createGeometryShape(350, visualY + 60, "triangle", GREEN);
            visualElements.push(...createGeometryShape(450, visualY + 60, "rectangle", BLUE));
        }
    } else if (titleLower.includes("ratio") || titleLower.includes("proportion")) {
        visualElements = createRatioBlocks(400, visualY + 40, 2, 3, BLUE, ORANGE);
    } else if (titleLower.includes("graph") || titleLower.includes("scatter") || titleLower.includes("polygon")) {
        visualElements = createGraphAxes(300, visualY + 20, 200, 100, RED);
    } else if (titleLower.includes("probabilit") || titleLower.includes("event") || titleLower.includes("chance")) {
        visualElements = createTreeDiagram(350, visualY + 60, GREEN);
    } else if (titleLower.includes("percent")) {
        visualElements = createNumberLine(200, visualY + 60, 400, 0, 100, 50, null, ORANGE);
    } else {
        // Default visual flair
        visualElements = [
            { type: "circle", cx: 380, cy: visualY + 50, r: 10, fill: BLUE },
            { type: "rect", x: 400, y: visualY + 40, width: 20, height: 20, fill: GREEN }
        ];
    }
    
    step1.push(...visualElements);
    
    const step2 = JSON.parse(JSON.stringify(step1));
    let yPos2 = visualY + 150;
    
    // Add an arrow pointing down to the answer
    step2.push({ type: "path", d: `M 400 ${visualY + 110} L 400 ${visualY + 130}`, stroke: TEXT_SUB, width: 2, fill: "none" });
    step2.push({ type: "path", d: `M 395 ${visualY + 125} L 400 ${visualY + 130} L 405 ${visualY + 125}`, stroke: TEXT_SUB, width: 2, fill: "none" });
    
    const answerLines = createTextBlock(backLines, yPos2, GREEN, 22);
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

// Read existing data
let restored = fs.readFileSync('interactive-whiteboard-data.js', 'utf8');
let jsonStr2 = restored.replace('window.INTERACTIVE_WHITEBOARD_DATA = ', '').replace(/;\s*$/, '');
let data = eval('(' + jsonStr2 + ')');

// Helper to extract topics
function extractTopics(content, prefix) {
    const topics = [];
    if (prefix === 'm7') {
        const regex = /topic\("(\d+\.\d+)",\s*"([^"]+)",\s*\[([\s\S]*?)\]\)/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
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
    } else {
        const regex = /id:\s*"(\d+\.\d+)",\s*title:\s*"([^"]+)",\s*cards:\s*\[([\s\S]*?)\]/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            const id = match[1];
            const chapterNum = parseInt(id.split('.')[0]);
            const title = match[2];
            const cardsStr = match[3];
            const cards = [];
            const cardRegex = /kind:\s*"([^"]+)",\s*front:\s*"([^"]+)",\s*back:\s*"([\s\S]*?)"/g;
            let cardMatch;
            while ((cardMatch = cardRegex.exec(cardsStr)) !== null) {
                cards.push({ kind: cardMatch[1], front: cardMatch[2], back: cardMatch[3] });
            }
            topics.push({ id: `m8_${id}`, chapterNum, title: `${id} ${title}`, cards });
        }
    }
    return topics;
}

const y7 = fs.readFileSync('content-y7-maths.js', 'utf8');
const y8 = fs.readFileSync('content-y8-maths.js', 'utf8');
const allTopics = [...extractTopics(y7, 'm7'), ...extractTopics(y8, 'm8')];

for (const topic of allTopics) {
    const subtopics = [];
    const scenes = {};
    
    topic.cards.forEach((card, i) => {
        const subtopicId = `card_${i}`;
        subtopics.push({ id: subtopicId, label: card.kind });
        // We pass topic.title to help the template matcher
        scenes[subtopicId] = generateVisualsForCard(topic.chapterNum, topic.title, card, i);
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
console.log("Successfully generated rich, step-by-step visual whiteboards for Y7 7-16 and all Y8!");
