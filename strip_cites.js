const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "iwb-y7-science-enhanced.js");
let s = fs.readFileSync(file, "utf8");
s = s.replace(/\[cite:\s*\d+\]/g, "");
fs.writeFileSync(file, s);
console.log("stripped cites");
