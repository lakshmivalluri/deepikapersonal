
var employeedata = {};
     
    employeedata.displayempdata = function() {
        document.querySelector(".employeeData").style.display = 'block';

        document.querySelector("#rename").innerHTML = this.name;
        document.querySelector("#reage").innerHTML = this.age;
        document.querySelector("#regender").innerHTML = this.gender;
        document.querySelector("#redepot").innerHTML = this.deportment;
        document.querySelector("#rebsalary").innerHTML = this.basicsalary;
        document.querySelector("#repf").innerHTML = this.pf;
        document.querySelector("#rehra").innerHTML = this.hra;
        document.querySelector("#retsalary").innerHTML = this.totalsalary;
        document.querySelector("#retax").innerHTML = this.tax;
    
    
};

employeedata.getsalarydetails = function() {
    
    this.pf = (this.basicsalary*14)/100;
    this.hra = (this.basicsalary*25)/100;
    this.totalsalary = this.basicsalary + this.pf + this.hra;
    this.annuvalsal = this.totalsalary*12;
    this.annuvalsal = parseInt(this.annuvalsal);
   
    this.gettax();
    
}
employeedata.gettax = function() {
        if (this.gender === "Male") {
            
            if (this.annuvalsal >= 200000) {
                this.tax = this.annuvalsal*15/100;
                }
                else if (this.annuvalsal >=150000) {
                this.tax = (this.annuvalsal*10)/100;
                }	
                else if(this.annuvalsal < 150000) {
                this.tax = (this.annuvalsal*5)/100;
                } 	
            
        }	else {
                this.tax = 0 * this.annuvalsal;
            }							
            if (this.gender ==="Female") {
        
                    
                if(this.annuvalsal >= 200000) {
                this.tax = (this.annuvalsal*10)/100;
                }
                else if(this.annuvalsal >= 150000) {
                this.tax = (this.annuvalsal*5)/100;
                }
                else  {
                 this.tax =this.annuvalsal*0;
                }								
            } else{
                this.tax = 0 * this.annuvalsal;
            }
                this.displayempdata();
        }
employeedata.reademployeedata =function () {
            this.name = document.querySelector("#ename").value;
            this.age = document.querySelector("#eage").value;
            this.gender = document.querySelector("#egender").value;
            this.deportment = document.querySelector("#edepot").value;
            this.basicsalary = document.querySelector("#ebsalary").value;
            this.basicsalary =parseInt(this.basicsalary);

            this.getsalarydetails();
        }
        function generateemployeedata() {
             employeedata.reademployeedata();
            
         }
        console.log(employeedata);
        console.log(employeedata.gettax);