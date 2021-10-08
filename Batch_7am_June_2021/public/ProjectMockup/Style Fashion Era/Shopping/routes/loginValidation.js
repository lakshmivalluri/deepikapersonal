var express = require('express');

var router = express.Router();

var mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;

var dbUrl = "mongodb://localhost:27017";


/* Login page. */
router.post('/', function (req, res, next) {
    //for get
    /*console.log(req.query);*/
    //for post
    /*console.log(req.body);*/
    var data = {
        msg: ""
    }

    mongoClient.connect(dbUrl, (err, client) => {
        var db = client.db('sfe');
        var collection = db.collection("accountDetails");
        /* first uname set in mongodb second in mainjs data value */
        collection.find({ uname: req.body.name, upassword: req.body.password }).toArray((err, items) => {
            console.log("items");
            console.log(items);
            /*if (items.length) {
                data.msg = "valid";
            } else {
                data.msg = "Invalid";
            }*/
            data.msg = "valid";
            client.close();
            data = JSON.stringify(data);
            res.send(data);
        });
        /*client.close();
        data = JSON.stringify(data);
        res.send(data);*/
    });

});

module.exports = router;
