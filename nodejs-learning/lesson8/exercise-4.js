const EventEmitter=require("events")
const emitter=new EventEmitter()

emitter.once("bellRang",()=>{
    console.log("Bell rang!");
})
emitter.emit("bellRang")
emitter.emit("bellRang")
emitter.emit("bellRang")