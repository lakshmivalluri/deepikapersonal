var employeeData = {};

employeeData.getPfHraAndTotalsalary = function () {
  this.pf = (14 * this.basicsalary) / 100;
  this.hra = (25 * this.basicsalary) / 100;
  this.totalsalary = this.pf + this.hra + this.basicsalary;
  employeeData.getTax();
};
employeeData.displayemployeeData = function () {
  document.querySelector(".employeeDetailsBlock").style.display = "block";
  document.querySelector("#rename").innerText = this.name;
  document.querySelector("#reage").innerText = this.age;
  document.querySelector("#gender").innerHTML = employeeData.gender;
  document.querySelector("#redepartment").innerText = this.department;
  document.querySelector("#rebasicsalary").innerText = this.basicsalary;
  document.querySelector("#rpf").innerHTML = this.pf;
  document.querySelector("#rhra").innerHTML = this.hra;
  document.querySelector("#rtotalsalary").innerHTML = this.totalsalary;
  document.querySelector("#rtax").innerHTML = "<b>" + this.tax + "</b>";
};
employeeData.getTax = function () {
  if (employeeData.gender == "Male") {
    if (employeeData.totalsalary > 200000) {
      employeeData.tax = (employeeData.totalsalary * 15) / 100;
      console.log(" Tax is " + employeeData.tax);
    } else if (
      employeeData.totalsalary > 100000 &&
      employeeData.totalsalary < 200000
    ) {
      employeeData.tax = (employeeData.totalsalary * 10) / 100;
      console.log(" Tax is " + employeeData.tax);
    } else if (
      employeeData.totalsalary > 50000 &&
      employeeData.totalsalary < 100000
    ) {
      employeeData.tax = (employeeData.totalsalary * 5) / 100;
      console.log(" Tax is " + employeeData.totalsalary);
    }
  }
  if (employeeData.gender == "Female") {
    if (employeeData.totalsalary > 200000) {
      employeeData.tax = (employeeData.totalsalary * 10) / 100;
      console.log(" Tax is " + employeeData.tax);
    } else if (
      employeeData.totalsalary > 100000 &&
      employeeData.totalsalary < 200000
    ) {
      employeeData.tax = (employeeData.totalsalary * 5) / 100;
      console.log(" Tax is " + employeeData.tax);
    } else if (
      employeeData.totalsalary > 50000 &&
      employeeData.totalsalary < 100000
    ) {
      employeeData.tax = (employeeData.totalsalary * 0) / 100;
      console.log(" Tax is " + employeeData.tax);
    }
  }
  employeeData.displayemployeeData();
};
employeeData.reademployeeData = function () {
  this.name = document.querySelector("#ename").value;
  this.age = document.querySelector("#eage").value;
  this.department = document.querySelector("#edepartment").value;
  this.gender = document.querySelector("#egender").value;
  this.basicsalary = document.querySelector("#eBasicsalary").value;
  this.basicsalary = parseInt(this.basicsalary);
  employeeData.getPfHraAndTotalsalary();
};

function generateEmployeeCard() {
  employeeData.reademployeeData();
}
