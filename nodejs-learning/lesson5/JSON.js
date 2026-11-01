
const fs=require("fs")
const students=[
    {
    name:"John",
    age:20,
    department:"CS"
    },
 {
    name:"Sara",
    age:19,
    department:"Chemistry"
    },
     {
    name:"Meron",
    age:20,
    department:"IS"
    },

]
const jsonData=JSON.stringify(students,null,2)
fs.writeFileSync("students.json",jsonData)
const data=JSON.parse(fs.readFileSync("students.json","utf8"))
console.log(students[2].name);