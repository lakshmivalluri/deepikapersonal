
var pDetails = [
    {
        name: 'Laptop',
        acutalPrice: 5100,
        finalPrice: 4400,
        manufacturer: 'Samsung',
        image: 'https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg'
    },
    {
        name: 'Mobile',
        acutalPrice: 5100,
        finalPrice: 4400,
        manufacturer: '1Plus',
        image: 'https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg'
    },
    {
        name: 'Tablet',
        acutalPrice: 5100,
        finalPrice: 4400,
        manufacturer: 'Sony',
        image: 'https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg'
    },
    {
        name: 'Shoes',
        acutalPrice: 5100,
        finalPrice: 4400,
        manufacturer: 'Nike',
        image: 'https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg'
    }
];

function loadProductData(productData) {
    var ulTag = document.createElement("ul");
    ulTag.setAttribute("class", "productDetails");

    var li1 = document.createElement("li");
    var span1 = document.createElement("span");
    span1.innerHTML = '<b>Product Name:</b>';
    span1.setAttribute("class", 'label');
    li1.append(span1);
    var span2 = document.createElement("span");
    span2.innerText = productData.name ;    
    li1.append(span2);
    ulTag.append(li1);

    var li2 = document.createElement("li");
    var span1 = document.createElement("span");
    span1.innerHTML = 'Product Manufacturer:';
    span1.setAttribute("class", 'label');
    li2.append(span1);
    var span2 = document.createElement("span");
    span2.innerText = productData.manufacturer;    
    li2.append(span2);
    ulTag.append(li2);

    var li3 = document.createElement("li");
    var span1 = document.createElement("span");
    span1.innerHTML = 'Price:';
    span1.setAttribute("class", 'label');
    li3.append(span1);
    var span2 = document.createElement("span");
    span2.setAttribute('class', 'beforeDiscount');
    span2.innerText = productData.acutalPrice;
    li3.append(span2);
    var span3 = document.createElement("span");
    span3.setAttribute('class', 'finalPrice');
    span3.innerText = ' $' + productData.finalPrice;  
    li3.append(span3);
    ulTag.append(li3);

    var li4 = document.createElement("li");
    var img = document.createElement("img");
    img.setAttribute("src", productData.image);
    li4.append(img);
    ulTag.append(li4);

    document.querySelector("#detailsContainer").append(ulTag);
}

function showProductDetails() {
    for (var i = 0 ; i < pDetails.length; i++) {
        
        loadProductData(pDetails[i]);
    }
}

