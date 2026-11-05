const os = require("os");

console.log(os.platform());//win32 darwin Linux

console.log(os.arch());//x64, sytem arch(processor)
//host name-return computer name
console.log(os.hostname());
//memory information
console.log(os.totalmem());
console.log(os.freemem());//free memory

function toGB(bytes) {
  return (bytes / 1024 / 1024 / 1024).toFixed(2);
}

const total = os.totalmem();
const free = os.freemem();
const used = total - free;

console.log("Total Memory:", toGB(total), "GB");
console.log("Free Memory:", toGB(free), "GB");
console.log("Used Memory:", ((used / total) * 100).toFixed(1), "%");

//CPU Information
console.log(os.cpus());//returns an array with one item for each CPU core (logical core).
const cpus=os.cpus()

console.log("Cores:", cpus.length);
console.log("Model:", cpus[0].model);
console.log("Speed:", cpus[0].speed, "MHz");

console.log(os.userInfo());
//uptime in hours
const hours = (os.uptime() / 60 / 60).toFixed(1);

console.log("Computer has been on for", hours, "hours");
//end of line on windows \r\n , mac/linux \n so we use os.EOL
const fs = require("fs");


const lines = ["Line 1", "Line 2", "Line 3"];

fs.writeFileSync("notes.txt", lines.join(os.EOL));
//process tells you about your running Node.js program.
console.log(process.platform);
console.log(process.version);
console.log(process.pid);
console.log(process.cwd());
console.log(process.memoryUsage());
const used = process.memoryUsage().rss;

console.log("My app uses", (used / 1024 / 1024).toFixed(1), "MB");

console.log(process.argv);
//run this node greet.js John 25
const name = process.argv[2] || "Guest";
console.log("Hello "+ name);
//All arguments are strings
// for numbers -Number(process.argv[3])
console.log("Start");

setTimeout(() => {
  console.log("This never prints");
}, 1000);

process.exit(0);