var http = require("http");
var fs = require('fs');
http.createServer((req, res) => {
    var data;
    fs.appendFile('empInfo.txt', 'Name:RAJ, age:99',function(err){
        if (err) {
            data = "Error while reading file info";
        }
        res.writeHead(200, {'Content-Type': 'text'});
        res.write("Successfly appended data");
        res.end();
    });
    
}).listen(8081, function(){
    console.log("Server listing at 8081");
});

