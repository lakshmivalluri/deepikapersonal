var allEmpDetails = [{
     image : 'emp.jpg',
     Name : 'Ananth',
     Age : 23,
     department : 'IT',
     Mobile : 9866933083,
     basicsal : 250000,
},
{
     image : 'emp.jpg',
     Name : 'ramu',
     Age : 23,
     department : 'IT',
     Mobile : 1234567890,
     basicsal : 180000,
},
{
     image : 'emp.jpg',
     Name : 'Ramesh',
     Age : 23,
     department : 'IT',
     Mobile : '0123456701',
     basicsal : 175000,
},
{
     image : 'emp.jpg',
     Name : 'Suresh',
     Age : 23,
     department : 'IT',
     Mobile : 9866933083,
     basicsal : 165700,
}];
var createEmpDetails = (allEmpDetails) => {
     var litag = document.createElement("li");
     litag.setAttribute("class","main");

     var imgTag = document.createElement("img");
     imgTag.setAttribute("src",'emp.jpg');
     litag.append(imgTag);

     var litag1 = document.createElement("li");
     litag1.innerHTML = "<b>" + 'Employee Name :' + "</b>" + allEmpDetails.Name;
     litag.append(litag1);

     var litag2 = document.createElement("li");
     litag2.innerHTML = "<b>" +'Age : ' + "</b>" + allEmpDetails.Age;
     litag.append(litag2);

     var litag3 = document.createElement("li");
     litag3.innerHTML = "<b>" + 'Mobile Number : ' + "</b>" + allEmpDetails.Mobile;
     litag.append(litag3);

     var litag4 = document.createElement("li");
     litag4.innerHTML = "<b>" + 'Department : ' + "</b>" + allEmpDetails.department;
     litag.append(litag4);

     var litag5 = document.createElement("li");
     litag5.innerHTML = "<b>" + 'Basic salary is : ' + "</b>" + allEmpDetails.basicsal;
     allEmpDetails.basicsal = parseInt(allEmpDetails.basicsal);
     litag.append(litag5);

     var litag6 = document.createElement("li");
     allEmpDetails.pf = 0.15 * allEmpDetails.basicsal;
     allEmpDetails.hra = 0.10 * allEmpDetails.basicsal;
     allEmpDetails.totalsal = allEmpDetails.hra + allEmpDetails.pf + allEmpDetails.basicsal;
     litag6.innerHTML = "<b>" + 'PF is : ' + "</b>" + allEmpDetails.pf;
     litag.append(litag6);

     var litag7 = document.createElement("li");
     litag7.innerHTML = "<b>" + 'HRA is : ' + "</b>" + allEmpDetails.hra;
     litag.append(litag7);

     var litag8 = document.createElement("li");
     litag8.innerHTML = "<b>" + 'Total Salary is : ' + "</b>" + allEmpDetails.totalsal;
     allEmpDetails.totalsal = parseInt(allEmpDetails.totalsal);
     litag.append(litag8);

     var litag9 = document.createElement("li");
     if (allEmpDetails.totalsal > 300000){
          allEmpDetails.tax = 0.15 * allEmpDetails.totalsal;
          litag9.innerHTML = "<b>" + 'Tax is :' + allEmpDetails.tax;
     } else if (allEmpDetails.totalsal > 200000){
          allEmpDetails.tax = 0.10 * allEmpDetails.totalsal;
          litag9.innerHTML = "<b>" + 'Tax is :' + allEmpDetails.tax;
     } else if (allEmpDetails.totalsal > 100000){
          allEmpDetails.tax = 0.05 * allEmpDetails.totalsal;
          litag9.innerHTML = "<b>" + 'Tax is :' + allEmpDetails.tax;
     } else {
          allEmpDetails.tax = 0 * allEmpDetails.totalsal;
          litag9.innerHTML = "<b>" + 'Tax is :' + allEmpDetails.tax;
     }
     litag9.innerHTML = "<b>" + 'Tax is : ' + "</b>" + allEmpDetails.tax;
     litag.append(litag9);
    
     document.querySelector(".empDetails").append(litag);
}
for (i = 0; i < allEmpDetails.length; i++){
     createEmpDetails(allEmpDetails[i]);
}