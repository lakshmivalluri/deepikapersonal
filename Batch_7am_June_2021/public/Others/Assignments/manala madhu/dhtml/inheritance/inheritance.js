var schoolData = {
    SchoolName : "SHARADHA PUBLIC SHCOOL",
    SchoolLoacation : "SIRCILLA",
    SchoolRating  : "4/5"
}

studentregistration =()=> {
    
   var studentData = Object.create(schoolData); // take school data from out side 

   studentData.Name = document.querySelector("#sname").value;
   studentData.Age = document.querySelector("#sage").value;
   studentData.Gender = document.getElementsByName("sgender").value;
   studentData.Class = document.querySelector("#sclass").value;
   studentData.Address = document.querySelector("#saddress").value;

   var ulTag = document.createElement(ulTag);

   for (var key in studentData) {
    var li = document.createElement('li');
    li.innerHTML = key + ' :: '+studentData[key];
  
    ulTag.append(li);
    

   }
document.querySelector(".container").append(ulTag);



}