
const path = require("path");

const filePath = "/home/hiba/projects/data/students.json";

console.log("File name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));
console.log("Directory:", path.dirname(filePath));

const fileInfo = path.parse(filePath);

console.log("Complete file information:", fileInfo);
