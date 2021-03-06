var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
     var data = {
          "productData" : [
                  {
                  "name" : "Laptop",
                  "price" : 9500,
                  "discountPercent" : 17,
                  "image" : "https://rukminim1.flixcart.com/image/416/416/knj7wcw0/computer/p/5/m/na-thin-and-light-laptop-asus-original-imag26ubgqxnpbjv.jpeg?q=70",
                  "manufacturer": "Samsung",
                  "description" : "A highly configured Laptop for new generation"
              },
              {
                  "name" : "Mobile",
                  "price" : 90000,
                  "discountPercent" : 6,
                  "image" : "https://www.91-img.com/pictures/133649-v9-oneplus-7-pro-mobile-phone-large-1.jpg?tr=q-60",
                  "manufacturer" : "One Plus",
                  "description" : "A highly configured Phone for new generation"
              },
              {
                  "name": "TV",
                  "price" : 160000,
                  "discountPercent" : 10,
                  "image" : "https://media.croma.com/image/upload/v1605339156/Croma%20Assets/Entertainment/Television/Images/8942486552606.png",
                  "manufacturer": "Sony",
                  "description": "A highly configured TV for new generation"
              }
          ]
     };

     data = JSON.stringify(data);
     setTimeout(function(){
          res.send(data);
     }, 5000);     
});

module.exports = router;
