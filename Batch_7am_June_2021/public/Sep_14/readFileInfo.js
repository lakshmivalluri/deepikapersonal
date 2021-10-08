var http = require("http");
var fs = require('fs');
http.createServer((req, res) => {
    var data;
    fs.readFile('empInfo.txt', function(err, data){
        if (err) {
            data = "Error while reading file info";
        }
        res.writeHead(200, {'Content-Type': 'text'});
        res.write(data);
        res.end();
    });
    
}).listen(8081, function(){
    console.log("Server listing at 8081");
});

