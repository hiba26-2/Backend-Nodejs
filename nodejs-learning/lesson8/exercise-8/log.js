const emitter=require("./events.js")

emitter.on("orderPlaced",()=>{
   console.log("Order activity logged"); 
})