const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

let weatherData = {};

const server = http.createServer((req, res) => {
    const method = req.method.toUpperCase();
    const url = req.url;

    if(method === 'GET' && url === '/') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(weatherData));
    } else if(method === 'POST' && url === '/') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const parsedBody = JSON.parse(body);
            const weather = {...parsedBody};
            weatherData = weather;
            // Saving it in a database
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(weather))
        })
    }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});