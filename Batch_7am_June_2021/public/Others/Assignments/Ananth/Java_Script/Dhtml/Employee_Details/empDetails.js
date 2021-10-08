var employeeDetails = {};
employeeDetails.getEmployeeDetails = function () {
     this.ename = document.querySelector("#ename").value;
     this.eage = document.querySelector("#eage").value;
     //this.egender = document.querySelector("#egender").value;
     this.egender = document.querySelector('input[name=gender]:checked').value;
     this.edept = document.querySelector("#edept").value;
     this.basicsal = document.querySelector("#basicsal").value;
     this.basicsal = parseInt(employeeDetails.basicsal);
     this.getTotalSal();
}
employeeDetails.getTotalSal = function () {
     this.hra = 0.13 * this.basicsal;
     this.pf = 0.15 * this.basicsal;
     this.totalsal = this.hra + this.pf + this.basicsal;
     employeeDetails.getTax = () => {
          if (this.egender == "male"){
               if (this.totalsal > 400000){
                    this.etax = 0.15 * this.totalsal;
               } else if (this.totalsal > 200000){
                    this.etax = 0.10 * this.totalsal;
                } else if (this.totalsal > 100000){
                    this.etax = 0.05 * this.totalsal;
                } else {
                    this.etax = 0 * this.totalsal;
                }
          }
          if (this.egender == "Female"){
               if (this.totalsal > 400000){
                    this.etax = 0.10 * this.totalsal;
               } else if (this.totalsal > 200000){
                    this.etax = 0.05 * this.totalsal;
                } else if (this.totalsal > 100000){
                    this.etax = 0.02 * this.totalsal;
                } else {
                    this.etax = 0 * this.totalsal;
                }
          }
     }
     this.getTax();
     employeeDetails.tsal = this.totalsal - this.etax;
     employeeDetails.displaytotalsal();
}
employeeDetails.displaytotalsal = function(){
     document.querySelector(".payslip").style.display = 'block';
     document.querySelector("#rname").innerHTML = this.ename;
     document.querySelector("#rage").innerHTML = this.eage;
     document.querySelector("#rgender").innerHTML = this.egender;
     document.querySelector("#rdept").innerHTML = this.edept;
     document.querySelector("#rbsal").innerHTML = this.basicsal;
     document.querySelector("#rhra").innerHTML = this.hra;
     document.querySelector("#rpf").innerHTML = this.pf;
     document.querySelector("#rtotalsal").innerHTML = this.totalsal;
     document.querySelector("#etax").innerHTML = this.etax;
     document.querySelector("#tsal").innerHTML = this.tsal;
}
function generatePaySlip() {
     employeeDetails.getEmployeeDetails();
}