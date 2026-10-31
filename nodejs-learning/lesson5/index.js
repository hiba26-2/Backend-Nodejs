const fs=require("fs")
fs.writeFileSync("student.txt","I am learning node")
const data=fs.readFileSync("student.txt","utf8")

console.log(data)