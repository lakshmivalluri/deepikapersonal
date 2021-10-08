var companyData = {
     companyName : 'ASA Software Solutions',
     Area : 'Hyderabad',
     Type : 'MNC',
}
var getEmpDetails = () => {
     var empData = Object.create(companyData);
     empData.name = document.querySelector('#empname').value;
     empData.age = document.querySelector('#empage').value;
     empData.dept = document.querySelector('#edept').value;

     var ultag = document.createElement('ul');

     for (var temp in empData){
          var li = document.createElement('li');
          li.innerHTML ="<b>" + temp + "</b>" + ' : ' + empData[temp];
          ultag.append(li);
     }
     document.querySelector(".displayData").append(ultag);
}
var empname = (event) =>{
     if ((event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 65 && event.charCode <= 90) || (event.charCode == 32)) {
          document.querySelector(".ename").style.display = 'none';
          document.querySelector(".name").style.display = 'block';
          return true;
     } else {
          document.querySelector(".ename").style.display = 'block';
          document.querySelector(".name").style.display = 'none';
          return false;
     }    
}
var eage = (event) => {
     if ((event.charCode >= 48 && event.charCode <= 57)){
          document.querySelector(".eage").style.display = 'none';
          document.querySelector(".age").style.display = 'block';
          return true;
     } else {
          document.querySelector(".eage").style.display = 'block';
          document.querySelector(".age").style.display = 'none';
          return false;
     }
}