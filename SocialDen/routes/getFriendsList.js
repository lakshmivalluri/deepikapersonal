var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var friendsList = {
        'user_admin': [
            {
                name: 'Musthafa',
                age: 20,
                gender: 'Male',
                profilePic: 'https://variety.com/wp-content/uploads/2021/05/Friends-The-Reunion.jpg',
                photos: []
            },
            {
                name: 'Krish',
                age: 20,
                gender: 'Male',
                profilePic: 'https://www.photodoozy.com/uploads/most-cute-and-stylish-boy-dp-pic-for-fb-photodoozy.jpg',
                photos: []
            }, {
                name: 'Teena',
                age: 23,
                gender: 'Female',
                profilePic: 'https://www.whatsappprofiledpimages.com/wp-content/uploads/2019/08/Dp-For-Sad-Girls-Fb-Images-9.jpg',
                photos: []
            },
            {
                name: 'Raj',
                age: 30,
                gender: 'Male',
                profilePic: 'https://www.theattitudequotes.com/wp-content/uploads/2021/03/fb-dp-for-boy_38.jpg',
                photos: []
            },
            {
                name: 'Angileena',
                age: 26,
                gender: 'Female',
                profilePic: 'https://techtrickseo.com/wp-content/uploads/2018/01/stylish-girl-cool-dp-fb.jpg',
                photos: []
            }
        ],
        'user_new': []
    };
    var data = {};

    var userId = req.query.uid;
    if (userId) {
        data.responseList = friendsList[userId];
    } else {
        data.msg = 'Invalid User Id';
    }
    data = JSON.stringify(data);
    
    res.send(data);
});

module.exports = router;



var productDetails = {
    'mens': [
        {.
            productId: ''.}
    ],
    womend: [
        {}
    ]
}

var mensDetails = productDetails.mens;

