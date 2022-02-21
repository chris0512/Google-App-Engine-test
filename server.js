var http = require('http');

var handleRequest = fucnction(request, response);{
    response.writeHead(200);
    response.end("<h1>Hello world from GAE</h1>");
};

var www = http.createServer(handleRequest);
www.listen(8080);