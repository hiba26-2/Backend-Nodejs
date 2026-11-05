const os = require("os");

function toGB(bytes) {
  return (bytes / 1024 / 1024 / 1024).toFixed(2);
}

let count = 0;

const timer = setInterval(() => {
  count++;

  const free = toGB(os.freemem());
  const appMemory = (process.memoryUsage().rss / 1024 / 1024).toFixed(1);

  console.log(`Check ${count}: Free RAM ${free} GB | App uses ${appMemory} MB`);

  if (count === 5) {
    clearInterval(timer);
    console.log("Monitor stopped");
  }
}, 2000);