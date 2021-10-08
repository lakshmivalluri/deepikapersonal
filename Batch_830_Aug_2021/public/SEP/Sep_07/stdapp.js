

var registerDetails = () => {
    var sData = {
        name: '',
        age: '',
        gender: '',
        class:'',
        readStudentData: function() {
            this.name = document.querySelector("#uname").value;
            this.age = document.querySelector("#uage").value;
            this.gender = document.querySelector("input[name=ugender]:checked").value;
            this.class = document.querySelector("#uClass").value;
            this.showDetails();
        },
        showDetails: function() {
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
    };   
    sData.readStudentData();
}
