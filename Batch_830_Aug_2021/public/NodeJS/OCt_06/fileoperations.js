
var http = require("http");
var fs = require('fs');

var server = http.createServer((request, response) => {
    
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var data = {
        msg : 'hello'
    };

   /* fs.readFile('sample.txt', (error, fileData) => {
        if (error) {
            data.msg = 'Error while reading file';
        } else {
            data.msg = fileData;
        }
        response.write(fileData);
        response.end();
    }); */
    
    fs.appendFile("test.txt", "Second info getting added", (error) => {
        if (error) {
            data.msg = 'Error while writing to file';

        } else {
            data.msg = "info got written to file"
        }
        response.write(JSON.stringify(data));
        response.end();
    });
});

server.listen(8081, () => {
    console.log("Server is listing at 8081");
})