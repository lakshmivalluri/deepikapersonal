var Empdetails = {
  EmployeeDetails: function () {
    this.empname = document.querySelector("#empname").value;
    this.empage = document.querySelector("#empage").value;
    this.empgender = document.querySelector("#empgender").value;
    this.empdepartment = document.querySelector("#empdepartment").value;
    this.basicsal = document.querySelector("#basicsal").value;
    this.basicsal = parseInt(this.basicsal);
  },
  salarycalculation: function () {
    this.basicsal = parseInt(this.basicsal);
    Empdetails.pf = (this.basicsal * 14) / 100;
    this.totalsal = this.basicsal + this.pf;
  },

  Taxcondition: function () {
    this.salarycalculation();

    if (Empdetails.empgender == "male") {
      if (Empdetails.totalsal > 40000) {
        Empdetails.tax = this.totalsal * 0.15;
      } else if (Empdetails.totalsal > 20000 && Empdetails.totalsal < 40000) {
        Empdetails.tax = this.totalsal * 0.1;
      } else if (Empdetails.totalsal > 10000 && Empdetails.totalsal < 20000) {
        Empdetails.tax = this.totalsal * 0.5;
      } else {
        Empdetails.tax = this.totalsal * 0.0;
      }
    } else if (Empdetails.empgender == "female") {
      if (Empdetails.totalsal > 20000) {
        Empdetails.tax = this.totalsal * 0.01;
      } else if (Empdetails.totalsal >= 10000 && Empdetails.totalsal <= 20000) {
        Empdetails.tax = this.totalsal * 0.01;
      } else if (Empdetails.totalsal >= 5000 && Empdetails.totalsal < 10000) {
        Empdetails.tax = this.totalsal * 0.01;
      } else {
        Empdetails.tax = this.totalsal * 0.0;
      }
    }
  },
  displayData: function () {
    Empdetails.EmployeeDetails();

    document.querySelector(".payslip").style.display = "block";
    document.querySelector("#rname").innerHTML = Empdetails.empname;
    document.querySelector("#rage").innerHTML = Empdetails.empage;
    document.querySelector("#rgender").innerHTML = Empdetails.empgender;
    document.querySelector("#rdept").innerHTML = Empdetails.empdepartment;
    document.querySelector("#rbsal").innerHTML = Empdetails.basicsal;
    document.querySelector("#rpf").innerHTML = Empdetails.pf;
    document.querySelector("#rtotalsal").innerHTML = Empdetails.totalsal;
    document.querySelector("#rtax").innerHTML = Empdetails.tax;
  },
};
function GeneratePaySlip() {
  Empdetails.displayData();
}
