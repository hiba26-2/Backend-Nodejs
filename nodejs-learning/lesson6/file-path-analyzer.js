const path = require("path");

const filePath = "C:/Users/Hiba/Documents/projects/student.json";

console.log("Original path:", filePath);
console.log("Directory:", path.dirname(filePath));
console.log("File name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));

const parsedPath = path.parse(filePath);

console.log("\nParsed path:");
console.log("Root:", parsedPath.root);
console.log("Directory:", parsedPath.dir);
console.log("Base:", parsedPath.base);
console.log("Name:", parsedPath.name);
console.log("Extension:", parsedPath.ext);