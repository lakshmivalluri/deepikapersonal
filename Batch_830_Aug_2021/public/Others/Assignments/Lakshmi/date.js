


var readStudentInfo=()=>{

    var eDetails ={ };
    eDetails.eName=document.querySelector("#uname").value;
    eDetails.eAge=document.querySelector("#uage").value;
    eDetails.eGender=document.querySelector("#ugender").value;
    eDetails.eLocation=document.querySelector("#ulocation").value;

 loadEmployeData(eDetails);
  
  displayData(eDetails);
}
displayData=(data)=>{
    document.querySelector("#pname").innerHTML=data.eName;
    document.querySelector("#page").innerHTML=data.eAge;
    document.querySelector("#pgender").innerHTML=data.eGender;
    document.querySelector("#plocation").innerHTML=data.eLocation;
}

function loadEmployeData(){

    var table=document.getElementById("insertion");
    var tag=document.createElement("tr");
    var tag1=document.createElement("td");
    tag1.setAttribute("id","psno");
    var tag2=document.createElement("td");
    tag2.setAttribute("id","pname");
    var tag3=document.createElement("td");
    tag3.setAttribute("id","page");
    var tag4=document.createElement("td");
    tag4.setAttribute("id","pgender");
    var tag5=document.createElement("td");
    tag5.setAttribute("id","plocation");
    var tag6=document.createElement("td"); 
    tag6.setAttribute("id","pselectmenu");  
    tag6.innerHTML='<input type="button" value="edit">    <input type="button" value="delete">  '
    tag.append(tag1);
    tag.append(tag2);
    tag.append(tag3);
    tag.append(tag4);
    tag.append(tag5);
    tag.append(tag6);  
document.querySelector("tbody").append(tag);




}
