const emitter=require("./events.js")

emitter.on("orderPlaced",()=>{
    console.log("Sending order confirmation email");
})