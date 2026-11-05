const os=require('os')
const a=(process.argv[2])
const b=(process.argv[3])
if(a===undefined ||b===undefined){
console.log("Existing program");
    process.exit(1)
}
    
console.log(Number(a)+Number(b));
