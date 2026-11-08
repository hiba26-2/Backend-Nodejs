const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    let filePath;

    if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
    } 
    else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
    } 
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("Page Not Found");
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            return res.end("Server Error");
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});