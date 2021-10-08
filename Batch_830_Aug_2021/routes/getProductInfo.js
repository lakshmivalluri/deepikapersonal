var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var data = {
      "productData" : [
          {
              "name" : "Laptop",
              "acutalPrice" : 5100,
              "finalPrice" : 4400,
              "manufacturer" : "Samsung",
              "image" : "https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"
          },
          {
              "name" : "Mobile",
              "acutalPrice" : 5100,
              "finalPrice" : 4400,
              "manufacturer" : "1Plus",
              "image" : "https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"
          },
          {
              "name" : "Tablet",
              "acutalPrice" : 5100,
              "finalPrice" : 4400,
              "manufacturer" : "Sony",
              "image" : "https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"
          },
          {
              "name" : "Shoes",
              "acutalPrice" : 5100,
              "finalPrice" : 4400,
              "manufacturer" : "Nike",
              "image" : "https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"
          }
      ]
  }
    data = JSON.stringify(data);
    // data = 'parsePData(' + data + ')';
    setTimeout(()=> {
        res.send(data);
    }, 1000);
    
});

module.exports = router;
