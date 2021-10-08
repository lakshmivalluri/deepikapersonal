var pDetailsList = [];

var getProductData = () => {
    var dataUrl = 'http://localhost:8081/Aug_24/data/prodData.json';
    console.log("one");
    $.ajax({
        url: dataUrl, // 3min
        method: 'GET',
        dataType: 'JSON', //XML, string, rss, yamil,...
        async: false,
        success: function(response) {
            console.log("two")
           console.log("Success");
           console.log(response); 
        
           pDetailsList = response.productData;  
           showProductDetails();       
        },
        error: function(error) {
            console.log(error);
            console.log("ERROR");
        }
    });
    console.log("three");
}

function createProductBlock(pDetails) {
    var liTag = $("<li></li>").addClass("product");

    var ulTag = $("<ul></ul>");

    var li1 = $("<li></li>").text('Product Name : ' + pDetails.name);
    ulTag.append(li1);

    var li2 = $("<li></li>").text('Price : ');

    var span1 = $("<span></span>").addClass('actual').text(pDetails.price);
    li2.append(span1);

    var span2 = $("<span></span>").addClass('discounted').text(pDetails.price - (pDetails.price * pDetails.discountPercent ) / 100);
    li2.append(span2);
    ulTag.append(li2);

    var li3 = $("<li></li>").text('Manufacturer : ' + pDetails.manufacturer);
    ulTag.append(li3);

    var li4 = $("<li></li>").text('Description : ' + pDetails.description);
    ulTag.append(li4);

    
    var imgTag = $("<img/>").attr("src", pDetails.image);
    var li5 = $("<li></li>").append(imgTag)
    ulTag.append(li5);
    liTag.append(ulTag);

    $(".pDtails").append(liTag);

}
function showProductDetails() {
    for (var i = 0 ; i < pDetailsList.length; i++) {
        createProductBlock(pDetailsList[i]);
    }
}
