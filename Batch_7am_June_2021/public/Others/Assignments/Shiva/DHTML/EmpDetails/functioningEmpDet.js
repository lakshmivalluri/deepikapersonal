var empDetails = {
    calSalaryDetails: function() {
        this.pf = 14 / 100 * this.basicsalary;
        this.hra = 15 / 100 * this.basicsalary;
        this.totalSalary = this.pf + this.hra + this.basicsalary;
        this.calTaxPercent();
    },
    calTaxPercent: function() {
        this.tax;
        if(this.gender === "male") {
            if(this.totalSalary > 200000) {
                this.tax = 15 / 100 * this.totalSalary;
            }   else if(this.totalSalary > 100000) {
            this.tax = 10 / 100 * this.totalSalary;
            } else if(this.totalSalary > 60000) {
                this.tax = 5 / 100 * this.totalSalary;
            } else {
                this.tax = 0;
            }
        }
        else {
            if(this.totalSalary > 200000) {
                this.tax = 12 / 100 * this.totalSalary;
            } else if(this.totalSalary > 100000) {
                this.tax = 8 / 100 * this.totalSalary;
            } else if(this.totalSalary > 60000) {
                this.totalSalary = 3 / 100 * this.totalSalary;
            } else {
                this.tax = 0;
            }
        }
    },
    showData: function() {
        document.querySelector(".paySlip").style.display = "block";
        this.readEmpData();        
        document.querySelector("#emName").innerHTML = this.name;
        document.querySelector("#emAge").innerHTML = this.age;
        document.querySelector("#emgender").innerHTML = this.gender;
        document.querySelector("#emDept").innerHTML = this.dept;
        document.querySelector("#emLoc").innerHTML = this.loc;     
        document.querySelector("#emBsal").innerHTML = this.basicsalary;       
        document.querySelector("#empf").innerHTML = this.pf;
        document.querySelector("#emHra").innerHTML = this.hra;
        document.querySelector("#emTsal").innerHTML = this.totalSalary;
        document.querySelector("#emTax").innerHTML = this.tax;
        
    },
    readEmpData: function() {
        this.name = document.querySelector("#eName").value;
        this.age = document.querySelector("#eAge").value;
        this.age = parseInt(this.age);
        this.gender = document.querySelector("#eGender").value;
        this.dept = document.querySelector("#eDept").value;
        this.loc = document.querySelector("#eLoc").value;
        this.basicsalary = document.querySelector("#eBSal").value;
        this.basicsalary = parseInt(this.basicsalary);
        this.calSalaryDetails();
    },
};
console.log(empDetails);
empDetails.showData();