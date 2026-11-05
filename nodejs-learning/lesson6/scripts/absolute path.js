const path = require("path");

console.log("Current directory:", __dirname);
console.log("Current file:", __filename);

const relativePath = "data/students.json";

const absolutePath = path.resolve(relativePath);

const projectPath = path.join(__dirname, relativePath);

console.log("\nRelative path:", relativePath);
console.log("Resolved path:", absolutePath);
console.log("Project-based path:", projectPath);