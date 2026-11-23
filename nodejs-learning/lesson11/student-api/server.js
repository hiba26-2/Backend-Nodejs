const http = require("http");
let students = [
  {
    id: 1,
    name: "John Doe",
    age: 20,
    course: "Computer Science"
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 22,
    course: "Mathematics"
  },
  {
    id: 3,
    name: "Mike Johnson",
    age: 21,
    course: "Physics"
  }
];

let nextId = 5;
const student =students.find((s)=>s.id===2)
console.log(student);
 
const index=students.findIndex((s)=>s.id===3)
console.log(index);

students.push({
  id:4,
  name: "John Smith",
  age: 28,
  course: "Science"
})
console.log(students);