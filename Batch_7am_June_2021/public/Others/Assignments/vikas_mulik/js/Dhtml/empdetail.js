var empdata={};

empdata.readempdata=function(){
    empdata.name=document.querySelector("#ename").value;
    empdata.age=document.querySelector("#eage").value;
    empdata.gender=document.querySelector("#egender").value;
    empdata.dep=document.querySelector("#edep").value;
    empdata.basicsalery=document.querySelector("#ebasicsalery").value;
    empdata.basicsalery=parseInt(empdata.basicsalery);
     empdata.getcalculate();
 }

    empdata.getcalculate=function(){
    empdata.pf=(20/100)*this.basicsalery;
    empdata.hrf=(10/100)*this.basicsalery;
    empdata.total=this.pf+this.hrf+this.basicsalery;

    empdata.gettax=function(){
      if(this.gender=="male"){
            if(this.total>10000){
                this.tax=(5/100)*this.total;
            
            }
            else if(this.total>20000){
                this.tax=(7.100)*this.total;
            }
            else{
                this.tax=0*this.total;
            }
        }
        if(this.gender=="female"){
            if(this.total>50000){
                this.tax=(2/100)*this.total;
            }
            else if(this.tptal>20000){
                this.tax=(4/100)*this.total;
            }
            else{
                this.tax=0*this.total;
            }
        }
    }
     



     empdata.gettax();
     empdata.displayempdata();
}

   empdata.displayempdata=function(){
       document.querySelector(".payslipblock").style.display='block';
    document.querySelector("#rename").innerText =this.name;
   document.querySelector("#reage").innerHTML=this.age;
   document.querySelector("#regender").innerHTML=this.gender;
   document.querySelector("#redep").innerText=this.dep;
   document.querySelector("#rbasicsalery").innerHTML=this.basicsalery;
  document.querySelector("#rtax").innerHTML= this.tax;
    document.querySelector("#rpf").innerHTML=this.pf;
   document.querySelector("#rhrf").innerHTML=this.hrf;
   document.querySelector("#rtotal").innerHTML=this.total;


}

 

function gendeterempdata(){
    empdata.readempdata();
    
}