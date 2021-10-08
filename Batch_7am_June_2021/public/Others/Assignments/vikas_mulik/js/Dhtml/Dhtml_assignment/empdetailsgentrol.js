var employee=[
{
    name:'vikas',
    gender:'male',
    dep:'it',
    salery:'20000',
    pf:'10',
    hrs:'6',
    total:'0',
    tax:'12',
    Address:'at.Ramwadi,tal.karmala,dist.solapur',
    Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9QjqVSQMJybwzXeCrEI3P_inazvICi-yrJw&usqp=CAU",
},
{
    name:'sani',
    gender:'female',
    dep:'physic',
    salery:'5000',
    pf:'8',
    hrs:'4',
    total:'0',
    tax:'14',
    Address:'at.jinti,tal.karmala,dist.solapur',
    Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3UcUzavz5x6ISlorrhdouwF9xn9-4PMj-Mg&usqp=CAU",
},
{
    name:'raj',
    gender:'male',
    dep:'chemestry',
    salery:'6000',
    pf:'5',
    hrs:'2',
    total:'0',
    tax:'10',
    Address:'at.bhagtwadi,tal.karmala,dist.solapur',
    Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWjCtKAVNxH1wHtgbQGFIhp8enGV6QeKEmsg&usqp=CAU",
},
{
    name:'ram',
    gender:'male',
    dep:'hr',
    salery:'60000',
    pf:'10',
    hrs:'8',
    total:'0',
    tax:'15',
    Address:'at.bhagtwadi,tal.karmala,dist.solapur',
    Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_PTFBu6DnrUIRs-C2VYAoaQtBb6KW1Rd6IA&usqp=CAU",
},
{
    name:'rani',
    gender:'female',
    dep:'maths',
    salery:'7000',
    pf:'6',
    hrs:'3',
    total:'0',
    tax:'7',
    Address:'at.sangavi,tal.karmala,dist.solapur',
    Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxo9LZBhw8CZwSTKFwzAdQfDRvgJIIFN7wLQ&usqp=CAU",
}


];

function creactempdetails(employee){
    var litag=document.createElement("li");
    litag.setAttribute('class',"line");

    var ultag=document.createElement("ul");

    

    var li9=document.createElement("li");
    var imgtag=document.createElement("img");
    imgtag.setAttribute("src",employee.Image);
    li9.append(imgtag);
    ultag.append(li9);

    var li1=document.createElement("li");
    li1.innerText='Name:'+employee.name;
    ultag.append(li1);

    var li2=document.createElement("li");
    li2.innerText='Gender:'+ employee.gender;
    ultag.append(li2);

    var li3=document.createElement("li");
    li3.innerText='Dep:'+ employee.dep;
    ultag.append(li3);

    var li4=document.createElement("li");
    li4.innerHTML='Salery:'+employee.salery;
    ultag.append(li4);
    
    var li5=document.createElement("li");
    li5.innerText='Pf:'+(employee.pf*employee.salery)/100;
    ultag.append(li5);

    var li6=document.createElement("li");
    li6.innerText='Hrs:'+(employee.hrs*employee.salery)/100;
    ultag.append(li6);

    var li7=document.createElement("li");
    li7.innerText='Total:'+(employee.salery+employee.hrs+employee.pf);
    ultag.append(li7);

    var li8=document.createElement("li");
    li8.innerText=' Tax:'+(employee.tax*employee.total)/100;
    ultag.append(li8);

    var li9=document.createElement("li");
    li9.innerText='Address:'+employee.Address;
    ultag.append(li9);

  
    litag.append(ultag);

    document.querySelector(".employee").append(litag);

   

}

for(var i=0;i<employee.length;i++){
creactempdetails(employee[i]);
}
