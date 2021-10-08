var employeeData = {};
 function employeeInformation(){
   employeeData.readEmployeeData();
 };

employeeData.readEmployeeData = function(){
  
  this.name = document.querySelector("#ename").value;
  this.age = document.querySelector("#eage").value;
  this.gender = document.querySelector("#egender").value; 
  this.department = document.querySelector("#edepart").value;
  this.salary = document.querySelector("#esal").value;
  this.salary = parseInt(this.salary);
  this.getSalary();

} 

employeeData.getSalary = function(){
  this.pf = (this.salary*14)/100;
  this.hra = (this.salary*25)/100;
  this.totalSalary = this.salary + this.pf + this.hra;
  this.annualincome = this.salary*12;
  this.displayEmployeeData();


}

employeeData.displayEmployeeData = function(){
  document.querySelector(".employeeData").style.display = 'block';
  
  document.querySelector("#rename").innerHTML=this.name;
  document.querySelector("#reage").innerHTML=this.age;
  document.querySelector("#redepart").innerHTML=this.department;
  document.querySelector("#regender").innerHTML=this.gender;
  document.querySelector("#resal").innerHTML=this.salary;
  document.querySelector("#repf").innerHTML=this.pf;
  document.querySelector("#rehra").innerHTML=this.hra;
  document.querySelector("#retsalary").innerHTML=this.totalSalary; 

}
console.log(employeeData);
