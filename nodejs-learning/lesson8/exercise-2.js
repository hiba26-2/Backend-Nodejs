const EventEmitter=require("events")
const emitter=new EventEmitter

emitter.on("courseStarted",(courseName)=>{
  console.log("Course:",courseName);
})
emitter.emit("courseStarted","Node.js")