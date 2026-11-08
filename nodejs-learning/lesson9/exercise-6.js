const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/html") {

        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>My HTML Page</title>
            </head>
            <body>
                <h1>My Favorite Subjects</h1>

                <ul>
                    <li>Programming</li>
                    <li>Mathematics</li>
                    <li>Networking</li>
                </ul>
            </body>
            </html>
        `);

    } else {
        res.end("Home Page");
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});