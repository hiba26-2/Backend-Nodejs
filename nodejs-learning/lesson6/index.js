const { readFileSync } = require("fs");
const path =require("path")
//ex 1
const filepath=path.join("data","students.json")
console.log(filepath);
//ex2
filename=path.basename(filepath)
console.log(filename);
//ex3
const extension=path.extname(filepath)
console.log(extension);
//ex4
const directoryPath = path.dirname("/data/student.json");

console.log(directoryPath);


