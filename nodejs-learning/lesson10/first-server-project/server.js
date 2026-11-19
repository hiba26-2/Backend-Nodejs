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
    res.statusCode = 200;

    res.setHeader(
      "Content-Type",
      "application/json"
    );

    res.end(JSON.stringify(products));
  } else {
    res.statusCode = 404;

    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server Running On Port 3000");
});