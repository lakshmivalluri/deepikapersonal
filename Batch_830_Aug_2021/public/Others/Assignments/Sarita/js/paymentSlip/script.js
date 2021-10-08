

var readEmpInfo = () => {
    var eDetails = { };
    
    eDetails.name = document.querySelector("#ename").value;
    eDetails.age = document.querySelector("#eage").value;
    eDetails.gender = document.querySelector("input[name=gender]:checked").value;
    eDetails.sal = document.querySelector("#esal").value;
    eDetails.sal = parseInt(eDetails.sal);
    
   
    eDetails.hra = (25 *eDetails.sal) / 100;
    eDetails.hra = parseInt(eDetails.hra);
    eDetails.pf = (14 * eDetails.sal) / 100;
    eDetails.hra = parseInt(eDetails.pf);
    eDetails.totalSal = parseInt(eDetails.sal+eDetails.pf+eDetails.hra);
    console.log(eDetails.totalSal);

    displayData(eDetails);
}

var displayData = (data) => {
    document.querySelector("#rname").innerText = data.name;
    document.querySelector("#rage").innerText = data.age;
    document.querySelector("#rgender").innerText = data.gender;
    document.querySelector("#rbasic").innerText = data.sal;
    document.querySelector("#rhra").innerText = data.hra;
    document.querySelector("#rpf").innerHTML = data.pf;
    document.querySelector("#rtotal").innerText = data.totalSal;

    document.querySelector(".paymentSlip").style.display = 'block';
    document.querySelector(".inputData").style.display = 'none';
    
}






    





    



 