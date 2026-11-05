const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "..", "data", "notes.txt");

const data = fs.readFileSync(filepath, "utf8");

console.log(data);