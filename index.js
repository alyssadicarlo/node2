const http = require('http');

// universal local loop back (localhost)
const hostname = "127.0.0.1"
const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello World! I am a server. WOO HOO!")
});

server.listen(port, hostname, () => {
    console.log(`Server running at http:${hostname}:${port}`);
});
