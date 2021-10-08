var http = require('http');

var server = http.createServer((request, response) => {
    response.writeHead(200);
    var data = {
        name: 'Raj',
        age: 20,
        gender: 'Male'
    };
    data = JSON.stringify(data);

    response.end(data);
});


server.listen(8081, () => {
    console.log("Server is listing at 8081");
});