const fs = require('fs');
const content = fs.readFileSync('interactive-whiteboard-data.js', 'utf8');
const data = eval('(' + content.replace('window.INTERACTIVE_WHITEBOARD_DATA = ', '').replace(/;\s*$/, '') + ')');
console.log(JSON.stringify(data['m7_4.1'], null, 2));
