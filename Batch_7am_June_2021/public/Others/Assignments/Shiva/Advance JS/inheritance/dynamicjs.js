var schoolDetails = {
    school_name: "xyz",
    area: "Hyderabad",
    board: "CBSE"
};

var studentDetails = {
    readSdata: function() {
        this.name = document.querySelector("#sName").value;
        this.age = document.querySelector("#sAge").value;
        this.class = document.querySelector("#sClass").value;
        this.address = document.querySelector("#sAddress").value;
        
    },
    showData: function() {
        document.querySelector(".invoke").style.display = "block";
        this.readSdata();
        document.querySelector("#ssname").innerHTML = "Name : " + this.name;
        document.querySelector("#ssage").innerHTML = "Age : " + this.age;
        document.querySelector("#ssclass").innerHTML = "calss : " + this.class;
        document.querySelector("#ssaddress").innerHTML = "address : " + this.address;
        document.querySelector("#ssSname").innerHTML = "school Name : " + this.school_name;
        document.querySelector("#ssSarea").innerHTML = "area : " + this.area;
        document.querySelector("#ssSboard").innerHTML = "board : " + this.board;
    },
};
studentDetails.__proto__ = schoolDetails;
studentDetails.showData();
