const os=require("os")
const info=os.cpus()
console.log("Core:",info.length);
console.log("Model:",info[0].model);