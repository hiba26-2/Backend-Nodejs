const EventEmitter=require("events")

const StudentJoined=new EventEmitter()
StudentJoined.on("StudentJoined",()=>{
    console.log("New Student Joined");
})

StudentJoined.emit("StudentJoined")