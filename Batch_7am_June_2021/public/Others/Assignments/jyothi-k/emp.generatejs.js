var empData = {};
empData.readempData = function(){
    this.ename = document.querySelector("#name").value;
    this.egender = document.querySelector("input[name=gender]:checked").value;
    this.elocation = document.querySelector("#loc").value;
    this.edept = document.querySelector("#Dept").value;
    this.ecomp = document.querySelector("#comp").value;
    this.ebasicsal = document.querySelector("#bsal").value;
    this.ebasicsal = parseInt(this.ebasicsal);
    empData.gettotalsal();
}
    empData.gettotalsal = function(){
        this.pf=(15*this.ebasicsal)/100;
        this.hra = (20*this.ebasicsal)/100;
        this.total = this.ebasicsal+this.pf+this.hra;
        empData.gettax();
    }
        empData.gettax = function(){
            if(this.total>200000)
            {
                this.tax = (15*this.total)/100;
            }
            else if(this.total>100000)
            {
                this.tax = (10*this.total)/100;
            }
            else if(this.total>50000)
            {
                this.tax = (10*this.total)/100;
            }
            else (this.total<50000)
            {
                this.tax = 0;
            }
            this.sal=this.total-this.tax;
            empData.DisplayData();
        }
            empData.DisplayData = function(){
                document.querySelector(".EmployeeBlock").style.display='block';
                document.querySelector("#Dname").innerHTML=this.ename;
                document.querySelector("#Dgen").innerHTML=this.egender;
                document.querySelector("#Dloc").innerHTML=this.elocation;
                document.querySelector("#Dcom").innerHTML=this.ecomp;
                document.querySelector("#DDept").innerHTML=this.edept;
                document.querySelector("#Dsal").innerHTML=this.ebasicsal;
                document.querySelector("#Dpf").innerHTML=this.pf;
                document.querySelector("#Dhra").innerHTML=this.hra;
                document.querySelector("#Dtotal").innerHTML=this.total; 
                document.querySelector("#Dtax").innerHTML=this.tax;
            }
            
            function generatepayslip(){
             empData.readempData();   
            }

