
 var add = [];
 
var getData = () =>{
    
    var detail = {};
   
    var detail = readData();
    add.push(detail);
    console.log(add.length);
    showData(detail,add.length-1);



}

function readData(){
    var temp = {};
    temp.name = document.querySelector("#uname").value;
                document.querySelector("#uname").value ='';
   
    temp.age = document.querySelector("#age").value;
                 document.querySelector("#age").value='';
   
    
    temp.gender = document.querySelector("input[name=gender]:checked").value;

   
    
    temp.location = document.querySelector("#locat").value;
                    document.querySelector("#locat").value='';
    
    return temp;
}

var showData = (detail,i) =>{
   
   
    var tbl = document.querySelector("#ad");

    var tag1 = document.createElement("tr");
    var id = `tr_${i}`;
    
    tag1.setAttribute("id",id);
   
    var srNoTag = document.createElement('td'); 
    srNoTag.innerHTML =i+1;
    tag1.append(srNoTag);
    
    var td2 = document.createElement('td');
    td2.innerText = detail.name;
    tag1.append(td2);
    var td3 = document.createElement('td');
    td3.innerText = detail.age;
    tag1.append(td3);
    var td4 = document.createElement('td');
    td4.innerText = detail.gender;
    tag1.append(td4);
    var td5 = document.createElement('td');
    td5.innerText = detail.location;
    tag1.append(td5);
    var td6 = document.createElement('td');
    var edit = document.createElement("button")
    edit.innerText = "Edit";
    var delet = document.createElement("button")
    delet.innerText = "DELETE";
    td6.append(edit);
    td6.append(delet);
    tag1.append(td6);
    tbl.appendChild(tag1);
    edit.addEventListener('click', function(){
        var table = document.querySelector("#ad"),rIndex;
    for(var i=1; i <=table.rows.length; i++){
        table.rows[i].onclick = function()
        {
            rIndex = this.rowIndex;
           
            console.log(rIndex);
            document.querySelector("#uname").value = this.cells[1].innerHTML;
            document.querySelector("#age").value = this.cells[2].innerHTML;
             document.querySelector("input[name=gender]:checked").value = this.cells[3].innerHTML;
            document.querySelector("#locat").value = this.cells[4].innerHTML;
     var bton = document.createElement("button");
     
    bton.innerHTML="save";
   
    document.querySelector("#save").append(bton);
    
    bton.addEventListener( 'click',function(){
       
    table.rows[rIndex].cells[1].innerHTML= document.querySelector("#uname").value;
    table.rows[rIndex].cells[2].innerHTML= document.querySelector("#age").value;
    table.rows[rIndex].cells[3].innerHTML=  document.querySelector("input[name=gender]:checked").value
    table.rows[rIndex].cells[4].innerHTML= document.querySelector("#locat").value;});
    
        };
    }  }); 

    delet.addEventListener('click',function(){
        
        var table = document.querySelector("#ad"),rIndex;
        for(var i=0; i < table.rows.length; i++){
        table.rows[i].onclick = function()
        {
            rIndex = this.rowIndex;
            table.deleteRow(rIndex);
            
            
        };
        
    }

    });
}
    


    