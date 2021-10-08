var validateAge = (event) => {
    if (event.charCode >= 48 && event.charCode <= 57) {
        document.querySelector("#checkAge").style.display = "none";
        
        
        return true;
    } else {
        document.querySelector("#checkAge").style.display = "block";
        return true;    
    }  
}
var validateName = (event) => {
    if((event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97  && event.charCode <= 122) || (event.charCode == 32)) {
        document.querySelector("#checkName").style.display = "none";
        return true;
    } else {
        document.querySelector("#checkName").style.display = "block";
        return true;
    }
}

var onBlurOfAge = () => {
    var age = parseInt(document.querySelector("#vAge").value);
    console.log(age);
    if (age < 21) {
        console.log("Invalid age");
    } else {
        console.log("Valid age")
    }
} 


class VoterDetails {
    voterData() {
        this.name = document.querySelector("#vName").value;
        this.age = document.querySelector("#vAge").value;
        this.location = document.querySelector("#vLocation").value;
        this.location1 = document.querySelector("#vsLocation").value;
        this.address = document.querySelector("#vAddress").value;
        this.checkEligibility();
        this.showData();
    }

    showData() {
        document.querySelector(".wakeUp").style.display = "block";
        document.querySelector("#vvName").innerHTML = "Name : " + this.name;
        document.querySelector("#vvAge").innerHTML = "Age : " + this.age;
        document.querySelector("#vvLocation").innerHTML = "country : " + this.location;
        document.querySelector("#vvsLocation").innerHTML = "state : " + this.location1;
        document.querySelector("#vvAddress").innerHTML = "address : " + this.address;
    }
    checkEligibility() {
        if(this.age <= 18) {
            document.querySelector("#vvvAge").style.display = "block";          
            document.querySelector("#vvvAge").innerHTML =  "<b>" +"you are not eligible to vote" + "</b>";
            
        } else {
            document.querySelector("#voterAge").style.display = "block";
            document.querySelector("#voterAge").innerHTML =  "<b>" + "registration successfully completed" + "</b>";
        }
    }
}
function registerVoter() {
    var obj1 = new VoterDetails();
    obj1.voterData();
}


