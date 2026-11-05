const os=require("os")
const total=os.totalmem()/1024/1024/1024

console.log(`Total Memory:${total.toFixed(2)} GB`);
const free=os.freemem()/1024/1024/1024

console.log(`Free Memory:${free.toFixed(2)} GB`);
const used=total-free
console.log(`Used Percentage:${((used/total)*100).toFixed(2)} %`);