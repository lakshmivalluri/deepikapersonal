
var pDetails = [];

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

var getProductData = () => {
    //
    $.ajax({
        url: 'http://localhost:8081/Sep_15/DHTML/data/pdata.json',
        dataType: 'JSON',
        method: 'GET',
        success: function(response) {
            console.log("its success");
            console.log(response);
        },
        error: function() {
            console.log("its error")
        }
    });
}