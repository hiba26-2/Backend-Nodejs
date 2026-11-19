const http = require("http");
const fs = require("fs/promises");
const path = require("path");

const PORT = 3000;
const dataFile = path.join(__dirname, "data", "products.json");

function sendJSON(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}

async function getProducts() {
  const text = await fs.readFile(dataFile, "utf8");
  return JSON.parse(text);
}

const routes = {
  "GET /": async (req, res, url) => {
    sendJSON(res, 200, { message: "Welcome To My First Server" });
  },

  "GET /about": async (req, res, url) => {
    sendJSON(res, 200, { message: "About Page" });
  },

  "GET /contact": async (req, res, url) => {
    sendJSON(res, 200, { message: "Contact Page" });
  },

  "GET /products": async (req, res, url) => {
    const products = await getProducts();
    const category = url.searchParams.get("category");

    if (category) {
      sendJSON(res, 200, products.filter((p) => p.category === category));
    } else {
      sendJSON(res, 200, products);
    }
  }
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const handler = routes[req.method + " " + url.pathname];

  console.log(req.method, req.url);

  try {
    if (handler) {
      await handler(req, res, url);
    } else {
      sendJSON(res, 404, { error: "Route not found" });
    }
  } catch (err) {
    console.log("Error:", err.message);
    sendJSON(res, 500, { error: "Something went wrong" });
  }
});

server.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});