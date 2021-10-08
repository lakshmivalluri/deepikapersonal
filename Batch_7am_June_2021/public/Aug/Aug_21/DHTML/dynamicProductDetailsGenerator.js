var pDetailsList = [
    {
        name: 'Laptop',
        price: 7000,
        discountPercent: 15,
        image: 'https://rukminim1.flixcart.com/image/416/416/knj7wcw0/computer/p/5/m/na-thin-and-light-laptop-asus-original-imag26ubgqxnpbjv.jpeg?q=70',
        manufacturer: 'Samsung',
        description: 'A highly configured Laptop for new generation'
    },
    {
        name: 'Mobile',
        price: 90000,
        discountPercent: 6,
        image: 'https://www.91-img.com/pictures/133649-v9-oneplus-7-pro-mobile-phone-large-1.jpg?tr=q-60',
        manufacturer: 'One Plus',
        description: 'A highly configured Phone for new generation'
    },
    {
        name: 'TV',
        price: 160000,
        discountPercent: 10,
        image: 'https://media.croma.com/image/upload/v1605339156/Croma%20Assets/Entertainment/Television/Images/8942486552606.png',
        manufacturer: 'Sony',
        description: 'A highly configured TV for new generation'
    }
];

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

for (var i = 0 ; i < pDetailsList.length; i++) {
    createProductBlock(pDetailsList[i]);
}
