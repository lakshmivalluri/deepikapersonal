var employeeData = {};
    employeeData.readEmpDetails = function() {
        employeeData.eName = document.querySelector("#empName").value;
        employeeData.eAge = document.querySelector("#empAge").value;
        employeeData.eDept = document.querySelector("#dept").value;
        employeeData.eGender = document.querySelector("#empGender").value;
        employeeData.basicSal = document.querySelector("#basicSal").value;
        employeeData.basicSal = parseInt(employeeData.basicSal);
        employeeData.getPfHraAndTotal();
    }
    employeeData.getPfHraAndTotal = function () {
        employeeData.pf = (15 * this.basicSal) / 100;
        employeeData.hra = (25 * this.basicSal) / 100;
        employeeData.totalSal = this.pf + this.hra + this.basicSal;
    employeeData.getTax = function() {
        if (employeeData.eGender == "Male") {
            if (employeeData.totalSal > 200000) {
                employeeData.tax = (employeeData.totalSal * 15) / 100;
            } else if (employeeData.totalSal > 100000) {
                employeeData.tax = (employeeData.totalSal * 10) / 100;
            } else {
                employeeData.tax = (employeeData.totalSal * 5) / 100;
            }
        } if (employeeData.eGender == "Female") {
            if (employeeData.totalSal > 200000) {
                employeeData.tax = (employeeData.totalSal * 10) / 100;
            } else if (employeeData.totalSal > 100000) {
                employeeData.tax = (employeeData.totalSal * 5) / 100;
            } else {
                employeeData.tax = (employeeData.totalSal * 0) / 100;
            }
        }
    
    }
    employeeData.getTax();
    employeeData.displayEmpData();
}
    employeeData.displayEmpData = function() {
        document.querySelector(".paySlipBlock").style.display = 'block';
        document.querySelector("#resEmpName").innerText = this.eName;
        document.querySelector("#resEmpAge").innerHTML = this.eAge;
        document.querySelector("#resDept").innerText = this.eDept;
        document.querySelector("#resGender").innerHTML = this.eGender;
        document.querySelector("#resBasicSal").innerHTML = this.basicSal;
        document.querySelector("#resPf").innerHTML = this.pf;
        document.querySelector("#resHra").innerHTML = this.hra;
        document.querySelector("#resTotalSal").innerHTML = this.totalSal;
        document.querySelector("#resTax").innerHTML = this.tax;
    }
function generatePaySlip() {
    employeeData.readEmpDetails();
}