
var pDetails = [];
var productTemplate;
function loadProductData(productData) {
    var source = productTemplate;
    var template = Handlebars.compile(source);
    var resultHtml = template(productData);
    $("#detailsContainer").append(resultHtml);
}

function showProductDetails() {
    $.ajax({
        url: 'templates/productTemplate.htm',
        method: 'GET',
        success: function(templteRes) {
            productTemplate = templteRes;
            $("#detailsContainer").empty(); // innerHTML = '';
            for (var i = 0 ; i < pDetails.length; i++) {        
                loadProductData(pDetails[i]);
            }
        }
    })

    
}

var getProductData = () => {
    $(".loadingBlock").show();
    $.ajax({
        url: 'http://localhost:8081/get/productDetails',
        dataType: 'JSON',
        method: 'GET',
        success: function(response) {
            $(".loadingBlock").hide();
            pDetails = response.productData;
            showProductDetails();
        },
        error: function() {
            $(".errBlock").show();
            $(".loadingBlock").hide();
        }
    });
}