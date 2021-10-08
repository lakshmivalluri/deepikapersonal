class ColageDetail{
    constructor(){
        this.collagename ='';
        this.code = '';
        this.location = '';
    }
    readCollageData() {
        this.collagename = document.querySelector("#colname").value;
        this.code = document.querySelector("#code").value;
        this.location = document.querySelector("#opt").value;
       
       
    }
   
}
class StudentDetail extends ColageDetail{
    constructor(){
        super();
        this.name='';
        this.age = '';
         this.gender ='';
        this.sports ='';
    }
    readStudentData() {
        
        this.name = document.querySelector("#sname").value;
        this.age = document.querySelector("#age").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;
        this.sports = document.querySelector("#sport").value;
        this.readCollageData();
        this.showData();
        
    }
    showData(){
        var ulTag = document.createElement("ul");
        for (var tempKey in this) {
            if (typeof (this[tempKey]) != 'function') {
                var litag = document.createElement("li");
                litag.innerHTML = tempKey + ' : ' + this[tempKey];
                ulTag.append(litag);
            }
        }
        document.querySelector(".detailsBlock").append(ulTag);
    document.querySelector(".detailsBlock").style.display = 'block';
    document.querySelector("#registration").style.display = 'none';
    }
}
var sDetail = [];
var registerData = ()=>{
    var s1 = new StudentDetail();
    s1.readStudentData();
    sDetail.push(s1);
    console.log(sDetail);
}