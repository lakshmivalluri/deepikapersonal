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

}