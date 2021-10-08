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
    var liTag = document.createElement("li");
    liTag.setAttribute('class', "product");

    var ulTag = document.createElement("ul");

    var li1 = document.createElement("li");
    li1.innerText = 'Product Name : ' + pDetails.name;
    ulTag.append(li1);

    var li2 = document.createElement("li");
    li2.innerText = 'Price : ';

    var span1 = document.createElement("span"); // -> <span></span> 
    span1.setAttribute("class", 'actual');
    span1.innerText = pDetails.price;
    li2.append(span1);

    var span2 = document.createElement("span");
    span2.setAttribute("class", 'discounted');
    span2.innerText = pDetails.price - (pDetails.price * pDetails.discountPercent ) / 100;
    li2.append(span2);
    ulTag.append(li2);

    var li3 = document.createElement("li");
    li3.innerText = 'Manufacturer : ' + pDetails.manufacturer;
    ulTag.append(li3);

    var li4 = document.createElement("li");
    li4.innerText = 'Description : ' + pDetails.description;
    ulTag.append(li4);

    var li5 = document.createElement("li");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", pDetails.image);
    li5.append(imgTag);
    ulTag.append(li5);
    liTag.append(ulTag);

    document.querySelector(".pDtails").append(liTag);

}

for (var i = 0 ; i < pDetailsList.length; i++) {
    createProductBlock(pDetailsList[i]);
}
