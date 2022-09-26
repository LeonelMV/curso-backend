const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    console.log(req.url)
    console.log(req.method)
    
    switch(req.url){
        case '/test':
            res.end('Llamaste a /test');
            break;
        case '/prueba':
            res.end('Llamaste a /prueba');
            break;
        default:
            res.end('Hello World');
            break;
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});