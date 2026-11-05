const EventEmitter=require('events')

const emitter=new EventEmitter()

emitter.on("orderPlaced",()=>{
    console.log('Order recieved');
})
emitter.on("orderPlaced",()=>{
    console.log('Preparing your order');
})
emitter.emit("orderPlaced")