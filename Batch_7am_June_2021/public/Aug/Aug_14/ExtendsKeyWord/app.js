class SellerDetails {
    constructor(data) {
        this.sellerName = data.sname;
        this.sellerId = data.sid;
        this.sLocation = data.sLocation;
    }
}

class ProductData  extends SellerDetails {
    constructor(pData, sData) {
        super(sData);
        this.name = pData.name;
        this.manu = pData.pmanu;
        this.ptype = pData.ptype;
        this.pimage = pData.pimage;
    }
    displayProductData() {
        for (var key in this) {
            var liTag = document.createElement("li");
            liTag.innerHTML = key + ' : ' + this[key];
            document.querySelector("#dPData").append(liTag);
        }
    }
}

var sData = {};

var registerSeller = () => {    
    sData.sname = document.querySelector("#sname").value;
    sData.sid = document.querySelector("#sid").value;
    sData.sLocation = document.querySelector('#sLocation').value;

}

var registerProduct = () => {
    var pData = {};
    pData.name = document.querySelector("#pname").value;
    pData.pmanu = document.querySelector("#pmanu").value;
    pData.ptype = document.querySelector("#ptype").value;
    pData.pimage = document.querySelector("#pimage").value;

    var p1 = new ProductData(pData, sData);
    p1.displayProductData();
}
