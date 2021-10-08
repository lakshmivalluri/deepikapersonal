var employeeData = {};

//Calculating Pf Hra and Total Salary
employeeData.getPfHraAndTotalsalary = function () {
  this.pf = (14 * this.basicsalary) / 100;
  this.hra = (25 * this.basicsalary) / 100;
  this.totalsalary = this.pf + this.hra + this.basicsalary;
  employeeData.getTax();
};

//Display employee Data
employeeData.displayemployeeData = function () {
  document.querySelector(".employeeDetailsBlock").style.display = "block";
  document.querySelector("#rename").innerText = this.name;
  document.querySelector("#reage").innerText = this.age;
  document.querySelector("#gender").innerText = employeeData.gender;
  document.querySelector("#redepartment").innerHTML = this.department;
  document.querySelector("#rebasicsalary").innerText = this.basicsalary;
  document.querySelector("#rpf").innerHTML = this.pf;
  document.querySelector("#rhra").innerHTML = this.hra;
  document.querySelector("#rtotalsalary").innerHTML = this.totalsalary;
  document.querySelector("#rtax").innerHTML = "<b>" + this.tax + "</b>";
};

//Calculating Tax
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

//Reading Employee Data
employeeData.reademployeeData = function () {
  this.name = document.querySelector("#ename").value;
  this.age = document.querySelector("#eage").value;
  this.department = document.querySelector("#edepartment").value;
  this.gender = document.querySelector("input[name=gender]:checked").value;
  this.basicsalary = document.querySelector("#eBasicsalary").value;
  this.basicsalary = parseInt(this.basicsalary);
  employeeData.getPfHraAndTotalsalary();
};

//Generate Employee Card
function generateEmployeeCard() {
  employeeData.reademployeeData();
}

var validateEmployeeName = (event) => {
  console.log(event);

  if (
    (event.charCode >= 97 && event.charCode <= 122) ||
    (event.charCode >= 65 && event.charCode <= 90) ||
    event.charCode == 32
  ) {
    previouscharCode = event.charCode;
    return true;
  }
  return false;
};

var validateEmployeeAge = (event) => {
  console.log(event);

  if (
    (event.charCode >= 97 && event.charCode <= 122) ||
    (event.charCode >= 65 && event.charCode <= 90) ||
    event.charCode == 32
  ) {
    previouscharCode = event.charCode;
    return false;
  }
  return true;
};

var validateEmployeeBasicsalary = (event) => {
  console.log(event);

  if (
    (event.charCode >= 97 && event.charCode <= 122) ||
    (event.charCode >= 65 && event.charCode <= 90) ||
    event.charCode == 32
  ) {
    previouscharCode = event.charCode;
    return false;
  }
  return true;
};
