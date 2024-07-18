const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/') {
        const filePath = path.join(__dirname, 'public', 'index.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if(err) {
                console.log("Error reading file", err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Server error');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        })
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})