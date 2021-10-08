var http = require('http');

var server = http.createServer((request, response) => {
    var data = {
        name: 'RAj',
        age: 20,
        gender: 'MAle',
        location: 'Hyderabad'
    }
    response.writeHead(200, { 'Content-Type': 'text/JSON' });
    // response.writeHead(200);
    data = JSON.stringify(data);
    
    var msg = '<b>Hello</b>';
    response.end(data);
    // response.end("Hello every one, its our first server");
});


server.listen(8081, () => {
    console.log("Server is listing at 8081");
});