var http = require("http");

var server = http.createServer((request, response) => {
    console.log(request)
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<b>Hello every one</b>");
    response.end();
});

server.listen(8082, () => {
    console.log("Server is listing at 8082");
});

