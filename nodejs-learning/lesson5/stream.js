const fs = require("fs");

const stream = fs.createWriteStream("activity.txt");

stream.write("Server started\n");
stream.write("User logged in\n");
stream.write("User registered\n");

stream.end();