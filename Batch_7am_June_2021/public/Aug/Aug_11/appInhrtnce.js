var sellerData = {    
    sellerName: 'Indian Electronics',
    sellerRating: '4/5',
    sellerId: '00123'
}

var product1 = {
    pid: 'p_02',
    name: 'Laptop',
    price: 3456,
    manu: 'Samsung',
    displayProductDetails: function() {
        console.log("Product detals " + this.pid);
        console.log("Name " + this.name);
        console.log("Manu " + this.manu);
        console.log("Seller details " + this['sellerId']);
        console.log("Sellr name " + this.sellerName);
        console.log("RAting " + this.sellerRating);
    }
};

product1.__proto__ = sellerData;

var product2 = {
    id: 'p_003',
    name: 'Mobile',
    price: 2000,
    manu: 'HTC',
    displayProductDetails: function() {
        console.log("Product detals " + this.id);
        console.log("Name " + this.name);
        console.log("Manu " + this.manu);
        console.log("Seller details " + this.sellerId);
        console.log("Sellr name " + this.sellerName);
        console.log("RAting " + this.sellerRating);
    }
};

product2.__proto__ = sellerData;

product1.displayProductDetails();
product2.displayProductDetails();



