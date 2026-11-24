
const http = require('http');

let products = [
    { id: 1, name: 'Laptop', price: 30000, category: 'Electronics' },
    { id: 2, name: 'Book', price: 500, category: 'Education' }
];

let nextId = 3;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    // GET all products
    if (req.method === 'GET' && req.url === '/products') {
        res.end(JSON.stringify(products));
    }

    // GET one product
    else if (req.method === 'GET' && req.url.startsWith('/products/')) {
        const id = Number(req.url.split('/')[2]);
        const product = products.find(p => p.id === id);

        if (!product) {
            res.statusCode = 404;
            return res.end(JSON.stringify({ message: 'Product not found' }));
        }

        res.end(JSON.stringify(product));
    }

    // POST new product
    else if (req.method === 'POST' && req.url === '/products') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const newProduct = JSON.parse(body);

            newProduct.id = nextId++;
            products.push(newProduct);

            res.statusCode = 201;
            res.end(JSON.stringify(newProduct));
        });
    }

    // PUT update product
    else if (req.method === 'PUT' && req.url.startsWith('/products/')) {
        const id = Number(req.url.split('/')[2]);
        const product = products.find(p => p.id === id);

        if (!product) {
            res.statusCode = 404;
            return res.end(JSON.stringify({ message: 'Product not found' }));
        }

        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const updatedData = JSON.parse(body);

            Object.assign(product, updatedData);
            product.id = id;

            res.end(JSON.stringify(product));
        });
    }

    // DELETE product
    else if (req.method === 'DELETE' && req.url.startsWith('/products/')) {
        const id = Number(req.url.split('/')[2]);
        const index = products.findIndex(p => p.id === id);

        if (index === -1) {
            res.statusCode = 404;
            return res.end(JSON.stringify({ message: 'Product not found' }));
        }

        products.splice(index, 1);

        res.end(JSON.stringify({ message: 'Product deleted' }));
    }

    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

server.listen(3000, () => {
    console.log('Products API running on port 3000');
});
