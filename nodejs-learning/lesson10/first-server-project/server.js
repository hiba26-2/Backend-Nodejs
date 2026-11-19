
const http = require("http");

const products = [
  { id: 1, name: "Laptop", category: "electronics", price: 900 },
  { id: 2, name: "Mobile", category: "electronics", price: 500 },
  { id: 3, name: "Chair", category: "furniture", price: 120 },
  { id: 4, name: "Desk", category: "furniture", price: 250 }
];

// Helper for JSON responses
function sendJSON(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost:3000");

  if (url.pathname === "/") {
    res.statusCode = 200;
    res.end("Welcome To My First Server");

  } else if (url.pathname === "/about") {
    res.statusCode = 200;
    res.end("About Page");

  } else if (url.pathname === "/contact") {
    res.statusCode = 200;
    res.end("Contact Page");

  } else if (req.method === "GET" && url.pathname === "/products") {
    const category = url.searchParams.get("category");

    if (category) {
      const filtered = products.filter(
        (p) => p.category === category
      );

      sendJSON(res, 200, filtered);
    } else {
      sendJSON(res, 200, products);
    }

  } else {
    sendJSON(res, 404, { error: "Route not found" });
  }
});


server.listen(3000, () => {
  console.log("Server Running On Port 3000");
});
