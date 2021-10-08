    var empdata = {
    	totalsal:0,
    	pf:0,
    	hra:0,
    	tax:0,
    };

    empdata.readdata = function () {
     
     empdata.name=document.querySelector("#ename").value;
     empdata.id=document.querySelector("#Eid").value;
     empdata.gender=document.querySelector("#empgender").value;
     empdata.age=document.querySelector("#eage").value;
     empdata.email=document.querySelector("#empemail").value;
     empdata.dept=document.querySelector("#edept").value;
     empdata.basicsal=document.querySelector("#esal").value;
     this.basicsal=parseInt(this.basicsal);
    }

     empdata.getpfhraandtotal = function(){
     
      empdata.pf=(this.basicsal * 14) / 100;
      empdata.hra=(empdata.basicsal * 25) / 100;
      empdata.totalsal=empdata.pf + empdata.hra + empdata.basicsal;
      this.totalsal=parseInt(empdata.totalsal); 
    }

    empdata.gettax = function(){
 
      if (empdata.gender == "male") {

      	   if (empdata.totalsal > 175000) {
      	   	 empdata.tax = (this.totalsal * 15 ) / 100 ;
      	   }else if(empdata.totalsal > 130000){
      	   	  empdata.tax = (empdata.totalsal * 10 ) / 100;
      	   }else if (empdata.totalsal > 90000) {
      	   	empdata.tax = (this.totalsal * 5 ) / 100;
      	   }
      	   else{
      	   	  empdata.tax= " No nedd to pay tax due to less Salary "
      	   }
      }


      if (empdata.gender == "female") {

      	   if (empdata.totalsal > 175000) {
      	   	 empdata.tax = (empdata.totalsal * 10 ) / 100 ;
      	   }else if(empdata.totalsal > 130000){
      	   	  empdata.tax = (empdata.totalsal * 5 ) / 100;
      	   }else if (empdata.totalsal > 90000) {
      	   	empdata.tax = (empdata.totalsal * 2 ) / 100;
      	   }
      	   else{
      	   	  empdata.tax= " No nedd to pay tax due to less Salary "
      	   }
      }
      

    }

    empdata. displaydata = function(){

        document.querySelector(".payslip").style.display = "block";
    	document.querySelector("#rname").innerHTML = empdata.name;
    	document.querySelector("#rid").innerHTML = empdata.id;
    	document.querySelector("#rgen").innerHTML = empdata.gender;
    	document.querySelector("#rage").innerHTML = empdata.age;
    	document.querySelector("#remail").innerHTML = empdata.email;
    	document.querySelector("#rdept").innerHTML = empdata.dept;
    	document.querySelector("#rsal").innerHTML = empdata.basicsal;
    	document.querySelector("#rpf").innerHTML = empdata.pf;
    	document.querySelector("#rhra").innerHTML = empdata.hra;
    	document.querySelector("#rtotal").innerHTML = empdata.totalsal;
    	document.querySelector("#rtax").innerHTML = empdata.tax;

    }

    function genratepayslip() {

    	empdata.readdata();
    	empdata.getpfhraandtotal();
    	empdata.gettax();
    	empdata.displaydata();
    	console.log(empdata);
    }

