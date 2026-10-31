const fs=require("fs")
/*
fs.writeFileSync("student.txt","I am learning node")
const data=fs.readFileSync("student.txt","utf8")

console.log(data)
*/
fs.writeFileSync("diary.txt","Today I learned Node.js")
fs.appendFileSync("diary.txt","\nI also learned about the fs module")
const data=fs.readFileSync("diary.txt","utf8")
console.log(data)