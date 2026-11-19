
const http = require("http");

const products = [
  {
    id: 1,
    name: "Laptop"
  },
  {
    id: 2,
    name: "Mobile"
  }
];

// Helper for JSON responses
function sendJSON(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Welcome To My First Server");

  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("About Page");

  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end("Contact Page");

  } else if (req.url === "/products") {
    sendJSON(res, 200, products);

  } else {
    sendJSON(res, 404, { error: "Route not found" });
  }
});

server.listen(3000, () => {
  console.log("Server Running On Port 3000");
});
