
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
data[1].age=22


data.push({
    name: "David",
    age: 23,
    department: "Software Engineering"
});

fs.writeFileSync("students.json", JSON.stringify(data, null, 2));
for(let i=0;i<data.length;i++){
console.log(data[i].name);
console.log(data[i].age);
console.log(data[i].department);
}