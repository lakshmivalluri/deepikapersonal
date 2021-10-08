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
     employeeDetails.displaytotalsal(employeeDetails);
}
/*
employeeDetails.displaytotalsal = function(){
     document.querySelector(".payslip").style.display = 'block';
     document.querySelector("#rname").innerHTML = this.ename;
     document.querySelector("#rage").innerHTML = this.eage;
     document.querySelector("#rgender").innerHTML = this.egender;
     document.querySelector("#rdept").innerHTML = this.edept;
     document.querySelector("#rbsal").innerHTML = this.basicsal;
     document.querySelector("#rhra").innerHTML = this.hra;
     document.querySelector("#rpf").innerHTML = this.pf;
     document.querySelector("#etax").innerHTML = this.etax;
     document.querySelector("#tsal").innerHTML = this.tsal;
}*/

// creating a dynamic table
employeeDetails.displaytotalsal = function(employeeDetails){
     console.log(employeeDetails)
     document.querySelector(".creating").style.display = 'block';

     var mainTable = document.createElement("table");
     mainTable.setAttribute("class","payslip");
     mainTable.setAttribute("border","collapse");

     var tablehead = document.createElement("thead");
     mainTable.append(tablehead);

     var trow = document.createElement("tr");
     tablehead.append(trow);

     var th1 = document.createElement("th");
     th1.innerHTML = "Name";
     trow.append(th1);

     var th2 = document.createElement("th");
     th2.innerHTML = "Age";
     trow.append(th2);

     var th3 = document.createElement("th");
     th3.innerHTML = "Gender";
     trow.append(th3);

     var th4 = document.createElement("th");
     th4.innerHTML = "Department";
     trow.append(th4);

     var th5 = document.createElement("th");
     th5.innerHTML = "Basic Salary";
     trow.append(th5);

     var th6 = document.createElement("th");
     th6.innerHTML = "PF";
     trow.append(th6);

     var th7 = document.createElement("th");
     th7.innerHTML = "HRA";
     trow.append(th7);

     var th8 = document.createElement("th");
     th8.innerHTML = "Tax";
     trow.append(th8);

     var th9 = document.createElement("th");
     th9.innerHTML = "Total Salary";
     trow.append(th9);

     var t10 = document.createElement("th");
     t10.innerHTML = "Edit / Delete";
     trow.append(t10);

     var tablebody = document.createElement("tbody");
     mainTable.append(tablebody);

     var tr2 = document.createElement("tr");
     tablebody.append(tr2);

     var td1 = document.createElement("td");
     td1.setAttribute("id","rname");
     td1.innerHTML = this.ename;
     tr2.append(td1);

     var td2 = document.createElement("td");
     td2.setAttribute("id","rage");
     td2.innerHTML = this.eage;
     tr2.append(td2);

     var td3 = document.createElement("td");
     td3.setAttribute("id","rgender");
     td3.innerHTML = this.egender;
     tr2.append(td3);

     /*var td4 = document.createElement("td");
     td4.setAttribute("id","rgender");
     td4.innerHTML = employeeDetails.edept;*/

     var td5 = document.createElement("td");
     td5.setAttribute("id","rdept");
     td5.innerHTML = this.edept;
     tr2.append(td5);

     var td6 = document.createElement("td");
     td6.setAttribute("id","rbsal");
     td6.innerHTML = this.basicsal;
     tr2.append(td6);

     var td7 = document.createElement("td");
     td7.setAttribute("id","rhra");
     td7.innerHTML = this.hra;
     tr2.append(td7);

     var td8 = document.createElement("td");
     td8.setAttribute("id","rpf");
     td8.innerHTML = this.pf;
     tr2.append(td8);

     var td9 = document.createElement("td");
     td9.setAttribute("id","etax");
     td9.innerHTML = this.etax;
     tr2.append(td9);

     var td10 = document.createElement("td");
     td10.setAttribute("id","tsal");
     td10.innerHTML = this.tsal;
     tr2.append(td10);

     var t11 = document.createElement("button");
     t11.innerHTML = "Edit";
     var t12 = document.createElement("button");
     t12.innerHTML = "Delete";
     t12.setAttribute("class","inner");
     t12.addEventListener('click', function clear() {
          mainTable.style.display = "none";
     })
     tr2.append(t11,t12);

     document.querySelector(".creating").append(mainTable);
}
function generatePaySlip() {
     employeeDetails.getEmployeeDetails();
}