const fs = require('fs');
const y7 = fs.readFileSync('content-y7-maths.js', 'utf8');
const y8 = fs.readFileSync('content-y8-maths.js', 'utf8');

const getY7Ids = (content) => {
    const ids = [];
    const regex = /topic\("(\d+\.\d+)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        ids.push(`'m7_${match[1]}'`);
    }
    return ids;
};

const getY8Ids = (content) => {
    const ids = [];
    const regex = /id:\s*"(\d+\.\d+)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        ids.push(`'m8_${match[1]}'`);
    }
    return ids;
};

const allIds = [...getY7Ids(y7), ...getY8Ids(y8)];

const appJs = fs.readFileSync('app.js', 'utf8');
const updatedAppJs = appJs.replace(
    /const hasIwb = \[.*?\]\.includes\(unitId\);/s,
    `const hasIwb = [\n    ${allIds.join(',\n    ')}\n  ].includes(unitId);`
);

fs.writeFileSync('app.js', updatedAppJs);
console.log('app.js updated with ' + allIds.length + ' unit IDs.');
