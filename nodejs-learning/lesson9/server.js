/*const http = require("http");

const server = http.createServer(
  (req, res) => {
    res.end("Hello World");
  }
);

server.listen(3000, () => {
  console.log("Server Running On Port 3000");
});
*/
//url ,method
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "public", "index.html");

  fs.readFile(filePath, "utf8", (err, html) => {
    if (err) {
      res.statusCode = 500;
      res.end("Something went wrong");
      return;
    }

    res.setHeader("Content-Type", "text/html");
    res.end(html);
  });
});

server.listen(3000, () => {
  console.log("Server Running On Port 3000");
});