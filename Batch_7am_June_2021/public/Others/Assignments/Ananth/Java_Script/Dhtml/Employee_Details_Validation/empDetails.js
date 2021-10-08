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
employeeDetails.getTotalSal = () => {
     employeeDetails.hra = 0.13 * employeeDetails.basicsal;
     employeeDetails.pf = 0.15 * employeeDetails.basicsal;
     employeeDetails.totalsal =  employeeDetails.hra +  employeeDetails.pf +  employeeDetails.basicsal;
     employeeDetails.getTax = () => {
          if ( employeeDetails.egender == "male"){
               if ( employeeDetails.totalsal > 400000){
                    employeeDetails.etax = 0.15 *  employeeDetails.totalsal;
               } else if ( employeeDetails.totalsal > 200000){
                    employeeDetails.etax = 0.10 *  employeeDetails.totalsal;
                } else if ( employeeDetails.totalsal > 100000){
                    employeeDetails.etax = 0.05 * employeeDetails.totalsal;
                } else {
                    employeeDetails.etax = 0 *  employeeDetails.totalsal;
                }
          }
          if ( employeeDetails.egender == "Female"){
               if ( employeeDetails.totalsal > 400000){
                    employeeDetails.etax = 0.10 *  employeeDetails.totalsal;
               } else if ( employeeDetails.totalsal > 200000){
                    employeeDetails.etax = 0.05 *  employeeDetails.totalsal;
                } else if ( employeeDetails.totalsal > 100000){
                    employeeDetails.etax = 0.02 *  employeeDetails.totalsal;
                } else {
                    employeeDetails.etax = 0 *  employeeDetails.totalsal;
                }
          }
     }
     employeeDetails.getTax();
     employeeDetails.tsal =  employeeDetails.totalsal -  employeeDetails.etax;
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


//validation inputs
var validatename = (event) => {
     if ((event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 65 && event.charCode <= 90) || (event.charCode == 32)) {
          document.querySelector(".uname").style.display = 'none';
          document.querySelector(".name").style.display = 'block';
          return true;
     } else {
          document.querySelector(".uname").style.display = 'block';
          document.querySelector(".name").style.display = 'none';
          return false;
     }  
}
var validateage = (event) => {
     if ((event.charCode >= 48 && event.charCode <= 57)) {
          document.querySelector(".uage").style.display = 'none';
          document.querySelector(".age").style.display = 'block';
          return true;
     } else {
          document.querySelector(".uage").style.display = 'block';
          document.querySelector(".age").style.display = 'none';
          return false;
     }  
}
var validatesal = (event) => {
     if ((event.charCode >= 48 && event.charCode <= 57)) {
          document.querySelector(".usal").style.display = 'none';
          document.querySelector(".sal").style.display = 'block';
          return true;
     } else {
          document.querySelector(".usal").style.display = 'block';
          document.querySelector(".sal").style.display = 'none';
          return false;
     }  
}