var http = require('http');

var server = http.createServer(function(req, res){
    var data = {msg: 'HEllo eveyr one'};
    res.end(JSON.stringify(data));
});

server.listen(8888, ()=>{
    console.log("server is listing at 8888 port")
});