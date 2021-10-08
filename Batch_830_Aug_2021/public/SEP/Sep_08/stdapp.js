
class StudentDetails {
    constructor(sname) {
        this.name = '';
        this.age = '';
        this.gender = '';
        this.class = '';
        this.schoolName = sname;
    }
    readStudentData() {
        this.name = document.querySelector("#uname").value;
        this.age = document.querySelector("#uage").value;
        this.gender = document.querySelector("input[name=ugender]:checked").value;
        this.class = document.querySelector("#uClass").value;
        this.showDetails();
    }
    showDetails() {
        var ulTag = document.createElement("ul");
        for (var tempKey in this) {
            if (typeof (this[tempKey]) != 'function') {
                var litag = document.createElement("li");
                litag.innerHTML = tempKey + ' : ' + this[tempKey];
                ulTag.append(litag);
            }
        }
        document.querySelector(".detailsBlock").append(ulTag);
    }
}
var sDetails = [];
var registerDetails = () => {
    var obj = new StudentDetails("ABC School");
    obj.readStudentData();
    sDetails.push(obj);
    console.log(sDetails);
}
