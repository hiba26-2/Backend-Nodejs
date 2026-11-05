const EventEmitter = require("events");
const emitter=new EventEmitter();/*
EventEmitter builtin class


//since it is a class we can create an instance of it 
emitter.on("greet", () => {
  console.log("Hello Student");
});

emitter.emit("greet");//triger an event
emit trigger event
*/


emitter.on("welcome", (name) => {
  console.log(`Welcome ${name}`);
});

emitter.emit("welcome", "John");