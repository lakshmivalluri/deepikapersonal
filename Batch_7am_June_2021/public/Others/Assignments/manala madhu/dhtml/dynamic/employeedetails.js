var empDeatailsList = [
    {
        empname: "madhu",
        age: 35,
        gender: "male",
        deportment: "it",
        basicsalary:25000,
        mobileno: 91866141964,
        image: 'male.png'
       
       
        
    },
    {
        empname: "manala",
        age: 35,
        gender: "female",
        deportment: "it",
        basicsalary: 18000,
        mobileno: 91866141964,
        image: 'female.png'
        
    },
    {
        empname: "samatha",
        age: 29,
        gender: "female",
        deportment: "civil",
        basicsalary:"15000",
        mobileno: 91866141964,
        image: 'female.png'
        
    },
    {
        empname: "manjula",
        age: 42,
        gender: "female",
        deportment:  "doctor",
        basicsalary: "30000", 
        mobileno: 91866141964,
        image: 'female.png'
        
    }
];

function createEmpolyeeBlock(empDeatails) {


    var liTag = document.createElement("li");
    liTag.setAttribute('class',"product");

    var ulTag = document.createElement('ul');

    var li1 = document.createElement('li');
    li1.innerText = 'Employee Name : ' + empDeatails.empname;
    ulTag.append(li1);

    var li2 = document.createElement('li');
    li2.innerText = " Employee Age : " + empDeatails.age;
    ulTag.append(li2);

    var li3 = document.createElement('li');
    li3.innerText = " Employee Gender : " + empDeatails.gender;
    ulTag.append(li3);

    var li6 = document.createElement('li');
    li6.innerText = " Employee MobileNo : " + empDeatails.mobileno;
    ulTag.append(li6);

    var li4 = document.createElement('li');
    li4.innerText = " Employee Deportment : " + empDeatails.deportment;
    ulTag.append(li4);

    var li5 = document.createElement('li');
    li5.innerHTML = " Employee  Basicsalary : " + empDeatails.basicsalary;
    empDeatails.basicsalary = parseInt(empDeatails.basicsalary);
    ulTag.append(li5);

    var li6 = document.createElement("li");
     empDeatails.pf = (empDeatailsList.basicsalary*14)/100;
     empDeatails.hra = (empDeatailsList.basicsalary*25)/100;
    empDeatails.totalsal = ((empDeatails.basicsalary*25)/100 + (empDeatails.basicsalary*14)/100 + empDeatails.basicsalary )
   empDeatails.annuvalsalary = empDeatails.totalsal*12


    var li7 = document.createElement('li');
    li7.innerHTML = " Employee PF : " + (empDeatails.basicsalary*14)/100;
  
    ulTag.append(li7);

    var li8 = document.createElement('li');
    li8.innerHTML = " Employee HRA : " + (empDeatails.basicsalary*25)/100;
  
    ulTag.append(li8);

    var li9 = document.createElement('li');
    li9.innerHTML = " Employee TotalSalary : " + empDeatails.totalsal ;
    ulTag.append(li9);

    var li10 = document.createElement('li');
    li10.innerHTML = " Employee AnnuvalSalary : " + empDeatails.annuvalsalary ;
    ulTag.append(li10);

    var li11 =document.createElement('li');
    
    if (empDeatails.gender == 'male') {
        if (empDeatails.annuvalsalary >= 300000) {
            empDeatails.tax = empDeatails.annuvalsalary*15/100;
        } 
        else if (empDeatails.annuvalsalary >= 200000){
            empDeatails.tax = empDeatails.annuvalsalary*10/100;
        } 
        else {
            empDeatails.tax = empDeatails.annuvalsalary*5/100;
        }

    }

    if (empDeatails.gender == 'female'){
        if (empDeatails.annuvalsalary >= 300000) {
            empDeatails.tax = empDeatails.annuvalsalary*10/100;
        }
         else if (empDeatails.annuvalsalary >= 200000){
            empDeatails.tax = empDeatails.annuvalsalary*5/100;
        }
         else {
            empDeatails.tax = empDeatails.annuvalsalary*0/100;
        }

    }
    console.log(empDeatails.gender);
     console.log(empDeatails.tax);
    li11.innerHTML = "Employee Tax Amount is : " + empDeatails.tax ;
    ulTag.append(li12);

    var li12 = document.createElement("li");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", empDeatails.image);
    li12.append(imgTag);
    ulTag.append(li12);
    liTag.append(ulTag);


    
    document.querySelector(".empDetail").append(liTag);
 

}
for (var i = 0 ; i < empDeatailsList.length; i++) {
    createEmpolyeeBlock(empDeatailsList[i]);
  
} // console.log(empDeatails.totalsal);