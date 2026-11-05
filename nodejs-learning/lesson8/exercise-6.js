const EventEmitter = require("events");

class Timer extends EventEmitter {
    start(seconds) {
        let count = 0;

        const interval = setInterval(() => {
            count++;

            // Emit tick and pass count
this.emit("tick", count);
            if (count === seconds) {
                // Stop the interval
clearInterval(interval);
this.emit("done");
                // Emit done
            }

    
        }, 1000);
    }
}