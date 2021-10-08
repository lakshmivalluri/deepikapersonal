
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
    var ulTag = $("<ul></ul>").addClass("productDetails");

    var li1 = jQuery("<li></li>");
    var span1 = $("<span></span>").html('<b>Product Name:</b>').attr("class", 'label');
    li1.append(span1);
    var span2 = $("<span></span>").text(productData.name);    
    li1.append(span2);
    ulTag.append(li1);

    var li2 = $("<li></li>");
    var span1 = $("<span></span>").html('Product Manufacturer:').addClass('label');
    li2.append(span1);
    var span2 = $("<span></span>").text(productData.manufacturer);    
    li2.append(span2);
    ulTag.append(li2);

    var li3 = $("<li></li>");
    var span1 = $("<span></span>").html('Price:');
    span1.attr("class", 'label');
    li3.append(span1);
    var span2 = $("<span></span>").addClass('beforeDiscount').text(productData.acutalPrice);
    li3.append(span2);
    var span3 = $("<span></span>").attr('class', 'finalPrice').text(' $' + productData.finalPrice);  
    li3.append(span3);
    ulTag.append(li3);

    var li4 = $("<li></li>")
    var img = $("<img/>").attr("src", productData.image);
    li4.append(img);
    ulTag.append(li4);

    $("#detailsContainer").append(ulTag);
}

function showProductDetails() {
    for (var i = 0 ; i < pDetails.length; i++) {        
        loadProductData(pDetails[i]);
    }
}

$(document).ready(function(){
    showProductDetails();
})
