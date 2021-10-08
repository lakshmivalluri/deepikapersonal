
var express = require("express");

var router = express.Router();

router.post('/', (request, response, next) => {
    // GET -> request.query

    // POSt - > request.body
    var data = {msg: ''}
    console.log(request.body);

    if (request.body.uid == 'user_admin' && request.body.upwd == 'admin') {
        data.msg = 'Valid';
    } else {
        data.msg = 'Invalid';
    }
    response.send(JSON.stringify(data));
});

module.exports = router;