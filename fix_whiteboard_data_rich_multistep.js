const fs = require('fs');

// Read the restored data (c6d5398) which has the SVGs
let restored = fs.readFileSync('restored_whiteboard_data_c6d5398.js', 'utf16le');
let lastBraceIndex = restored.lastIndexOf('}');
if (lastBraceIndex !== -1) {
    restored = restored.substring(0, lastBraceIndex);
}

const y7 = fs.readFileSync('content-y7-maths.js', 'utf8');
const y8 = fs.readFileSync('content-y8-maths.js', 'utf8');

function extractY7Topics(content) {
    const topics = [];
    const regex = /topic\("(\d+\.\d+)",\s*"([^"]+)",\s*\[([\s\S]*?)\]\)/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const id = match[1];
        const title = match[2];
        const cardsStr = match[3];
        const cards = [];
        const cardRegex = /\["([^"]+)",\s*"([^"]+)",\s*"([\s\S]*?)"\]/g;
        let cardMatch;
        while ((cardMatch = cardRegex.exec(cardsStr)) !== null) {
            cards.push({ kind: cardMatch[1], front: cardMatch[2], back: cardMatch[3] });
        }
        topics.push({ id: `m7_${id}`, title: `${id} ${title}`, cards });
    }
    return topics;
}

function extractY8Topics(content) {
    const topics = [];
    const regex = /id:\s*"(\d+\.\d+)",\s*title:\s*"([^"]+)",\s*cards:\s*\[([\s\S]*?)\]/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const id = match[1];
        const title = match[2];
        const cardsStr = match[3];
        const cards = [];
        const cardRegex = /kind:\s*"([^"]+)",\s*front:\s*"([^"]+)",\s*back:\s*"([\s\S]*?)"/g;
        let cardMatch;
        while ((cardMatch = cardRegex.exec(cardsStr)) !== null) {
            cards.push({ kind: cardMatch[1], front: cardMatch[2], back: cardMatch[3] });
        }
        topics.push({ id: `m8_${id}`, title: `${id} ${title}`, cards });
    }
    return topics;
}

const allTopics = [...extractY7Topics(y7), ...extractY8Topics(y8)];

const existingKeys = new Set();
const keyRegex = /"(m[78]_\d+\.\d+|s7_\d+\.\d+)":\s*\{/g;
let keyMatch;
while ((keyMatch = keyRegex.exec(restored)) !== null) {
    existingKeys.add(keyMatch[1]);
}

let newDataStr = "";

function splitText(text, maxLen = 40) {
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
    if (currentLine.length > 0) {
        lines.push(currentLine.join(" "));
    }
    return lines;
}

for (const topic of allTopics) {
    if (existingKeys.has(topic.id)) continue;
    
    const subtopics = [];
    const scenes = {};
    
    topic.cards.forEach((card, i) => {
        const subtopicId = `card_${i}`;
        subtopics.push({ id: subtopicId, label: card.kind });
        
        // Step 1: The Question / Concept Introduction
        const step1Elements = [
            { type: "rect", x: 50, y: 50, width: 700, height: 400, fill: "#f8fafc", stroke: "#cbd5e1", strokeWidth: 2, rx: 10 },
            { type: "text", x: 400, y: 100, text: topic.title, color: "#0f172a", size: 32 },
            { type: "line", d: "M 100 130 L 700 130", stroke: "#3b82f6", width: 4 }
        ];
        
        let isKeyIdea = card.kind.toLowerCase().includes("key idea");
        
        if (isKeyIdea) {
            step1Elements.push({ type: "text", x: 400, y: 200, text: "💡 Key Concept", color: "#d97706", size: 28 });
        } else {
            step1Elements.push({ type: "text", x: 400, y: 200, text: "❓ Practice Question", color: "#059669", size: 28 });
        }
        
        let yPos1 = 260;
        const frontLines = splitText(card.front, 45);
        for (const line of frontLines) {
            step1Elements.push({ type: "text", x: 400, y: yPos1, text: line, color: "#1e293b", size: 24 });
            yPos1 += 35;
        }
        
        // Step 2: The Answer / Explanation
        const step2ElementsOnly = []; 
        
        let yPos2 = yPos1 + 20;
        const backLines = splitText(card.back, 45);
        for (const line of backLines) {
            step2ElementsOnly.push({ type: "text", x: 400, y: yPos2, text: line, color: "#059669", size: 24 });
            yPos2 += 35;
        }
        
        scenes[subtopicId] = [
            {
                narration: isKeyIdea ? "Let's explore this key concept." : "Read the question and think of the answer.",
                rule: card.front,
                quizQ: isKeyIdea ? "" : card.front,
                quizA: "",
                elements: step1Elements
            },
            {
                clear: false,
                narration: isKeyIdea ? "Here is the explanation." : "Here is the solution!",
                rule: card.back,
                quizQ: isKeyIdea ? "" : card.front,
                quizA: card.back,
                elements: step2ElementsOnly
            }
        ];
    });
    
    const topicData = {
        title: topic.title,
        watermark: `Section ${topic.id.split('_')[1]}`,
        subtopics: subtopics,
        scenes: scenes
    };
    
    newDataStr += `,\n  "${topic.id}": ${JSON.stringify(topicData, null, 4)}`;
}

const finalOutput = restored + newDataStr + "\n};\n";
fs.writeFileSync('interactive-whiteboard-data.js', finalOutput, 'utf8');
console.log("Successfully generated multi-step whiteboards!");
