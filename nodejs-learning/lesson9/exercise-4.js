const http = require("http");

const server = http.createServer((req, res) => {
    console.log( req.method);

    res.end("Hello Student");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});