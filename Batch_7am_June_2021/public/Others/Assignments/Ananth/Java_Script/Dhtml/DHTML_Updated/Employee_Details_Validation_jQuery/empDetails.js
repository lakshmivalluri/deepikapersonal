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
employeeDetails.displaytotalsal = function(employeeDetails){
     console.log(employeeDetails)
     $(".creating").css("display","block");

     var mainTable = $("<table></table>").addClass("payslip").attr("border","2px solid");

     var tablehead = $("<thead></thead>");
    

     var trow = $("<tr></tr>");
     //

     var th1 = $("<th></tr>").text("Name");
     trow.append(th1);

     var th2 = $("<th></th>").text("Age");
     trow.append(th2);

     var th3 = $("<th></th>").text( "Gender");
     trow.append(th3);

     var th4 = $("<th></th>").text( "Department");
     trow.append(th4);

     var th5 = $("<th></th>").text( "Basic Salary");
     trow.append(th5);

     var th6 = $("<th></th>").text( "PF");
     trow.append(th6);

     var th7 = $("<th></th>").text( "HRA");
     trow.append(th7);

     var th8 = $("<th></th>").text( "Tax");
     trow.append(th8);

     var th9 = $("<th></th>").text( "Total Salary");
     trow.append(th9);

     var t10 = $("<th></th>").text( "Edit / Delete");
     trow.append(t10);

     tablehead.append(trow);
     mainTable.append(tablehead);

     var tablebody = $("<tbody></tbody>");
     

     var tr2 = $("<tr></tr>");
    

     var td1 = $("<td></td>").attr("id","rname").text( this.ename);
     tr2.append(td1);

     var td2 = $("<td></td>").attr("id","rage").text( this.eage);
     tr2.append(td2);

     var td3 = $("<td></td>").attr("id","rgender").text( this.egender);
     tr2.append(td3);

     var td5 = $("<td></td>").attr("id","rdept").text( this.edept);
     tr2.append(td5);

     var td6 = $("<td></td>").attr("id","rbsal").text( this.basicsal);
     tr2.append(td6);

     var td7 = $("<td></td>").attr("id","rhra").text( this.hra);
     tr2.append(td7);

     var td8 = $("<td></td>").attr("id","rpf").text( this.pf);
     tr2.append(td8);

     var td9 = $("<td></td>").attr("id","etax").text( this.etax);
     tr2.append(td9);

     var td10 = $("<td></td>").attr("id","tsal").text( this.tsal);
     tr2.append(td10);

     tablebody.append(tr2);
     mainTable.append(tablebody)

     var t11 = $("<button></button>").text( "Edit");
     var t12 = document.createElement("button");
     t12.innerHTML = "Delete";
     t12.setAttribute("class","inner");
     t12.addEventListener('click', function clear() {
          mainTable.css("display","none");
     })
     tr2.append(t11,t12);

     $(".creating").append(mainTable);
}
function generatePaySlip() {
     employeeDetails.getEmployeeDetails();
}