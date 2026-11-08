const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Requested URL:", req.url);

    res.end("Hello Student");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});