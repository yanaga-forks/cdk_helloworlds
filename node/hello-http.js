var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, Red Hat Developers World! Host: ' + process.env.HOSTNAME  + "\n");
}).listen(8000, '0.0.0.0');
console.log('Server running at http://127.0.0.1:8000/');