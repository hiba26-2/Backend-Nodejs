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

let nextId = 4;
const student =students.find((s)=>s.id===2)
console.log(student);
 
const index=students.findIndex((s)=>s.id===3)
console.log(index);

students.push({
  id:nextId++,
  name: "John Smith",
  age: 28,
  course: "Science"
})
console.log(students);
//students.splice(0,1);

//search and then remove
const Index = students.findIndex((s) => s.id === 2);

if (Index !== -1) {
  students.splice(Index, 1);
}
console.log(students);
//spread operator
const updatestudent={
  ...student,
  course:"Information systems"
}
console.log(updatestudent);

const server = http.createServer((req, res) => {

  // GET all students
  if (req.url === "/students" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(students));
  }else if (req.url.startsWith("/students/") && req.method === "GET") {
    const parts = req.url.split("/");
    const id = Number(parts[2]);

    const student = students.find((s) => s.id === id);

    res.setHeader("Content-Type", "application/json");

    if (student) {
      res.statusCode = 200;
      res.end(JSON.stringify(student));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: "Student not found" }));
    }

};
})

// Start server
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
