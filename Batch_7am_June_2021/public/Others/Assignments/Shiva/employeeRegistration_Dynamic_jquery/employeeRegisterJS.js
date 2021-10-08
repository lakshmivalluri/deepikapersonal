var createTags = () => {
    var ulTag = $("<ul></ul>").addClass("ulTag");
    var liTag = $('<li></li>');
    ulTag.append(liTag);

    var lab = $('<label>').text("Employee Name");
    liTag.append(lab);

   // var span = document.createElement('span');  create tag in standard or normal way....

    var span = $('<span></span>');   // create a tag using jquery which is short way..
    liTag.append(span);
    
    var ip = $('<input>').attr('type' , 'text'); // to set attribute in jquery....
   // ip.setAttribute('type' , 'text');
    ip.attr('id' , 'eName');
    span.append(ip);

    var li2 = $('<li></li>');
    ulTag.append(li2);

    var lab1 = $('<label>').text("Employee Age");
    li2.append(lab1);

    var span1 = $('<span></span>');
    li2.append(span1);

    var ip1 = $('<input>');
    ip1.attr('type' , 'Text');
    ip1.attr('id' , 'eAge');
    span1.append(ip1);

    var li3 = $('<li></li>');
    ulTag.append(li3);

    var lab2 = $('<label>');
    lab2.text("Gender");
    li3.append(lab2);

    var span2 = $('<span></span>');
    li3.append(span2);

    var lab3 = $('<label>');
    lab3.text("Male");
    span2.append(lab3);

    var ip2 = $('<input>');
    ip2.attr('type' , 'radio');
    ip2.attr('name' , 'gender');
    ip2.attr('value' , 'Male');
    span2.append(ip2);

    var lab4 = $('<label>');
    lab4.text(" Female");
    span2.append(lab4);

    var ip3 = $('<input>');
    ip3.attr('type' , 'radio');
    ip3.attr('name' , 'gender');
    ip3.attr('value' , 'Female');
    span2.append(ip3);

    var li4 = $('<li></li>');
    ulTag.append(li4);

    var lab5 = $('<label>');
    lab5.text("Department");
    li4.append(lab5);

    var span3 = $('<span></span>');
    li4.append(span3);

    var ip4 = $('<input>');
    ip4.attr('type' , 'Text');
    ip4.attr('id' , 'eDept');
    span3.append(ip4);

    var li5 = $('<li></li>');
    ulTag.append(li5);

    var lab6 = $('<label>');
    lab6.text("Basic Salary");
    li5.append(lab6);

    var span4 = $('<span></span>');
    li5.append(span4);

    var ip5 = $('<input>');
    ip5.attr('type' , 'Text');
    ip5.attr('id' , 'eBSal');
    span4.append(ip5);

    var li6 = $('<li></li>');
    li6.css("textAlign" , "center"); // adding  css styles..........    
    ulTag.append(li6);

    var button = $('<input>');
    button.attr('type' , 'button');
    button.attr('value' , 'Register');
    button.attr('onclick' , 'empData();');

    // adding multiple css properties........
    button.css({
      background: "#ccc",
      fontWeight: "bold",
      fontStyle: "italic",
   })
    li6.append(button);


    $("#main").append(ulTag);

    var div = $('<div></div>').attr('id' , 'showTable');

    var table = $('<table></table>');
    div.append(table);

    var thead = $('<thead></thead>');
    table.append(thead);

    var tr = $('<tr></tr>');
    thead.append(tr);

    var th = $('<th></th>').text("Employee Name");
   // th.innerHTML = "Employee Name";
    tr.append(th);

    var th1 = $('<th></th>').text("Age");
    tr.append(th1);

    var th2 = $('<th></th>').text("Gender");
    tr.append(th2);

    var th3 = $('<th></th>').text("Dept");
    tr.append(th3);

    var th4 = $('<th></th>').text("Basic Salary");
    tr.append(th4);

    var th5 = $('<th></th>').text("Settings");
    tr.append(th5);

    var tr1 = $('<tr></tr>').attr('id' , 'tRow');
   // tr1.setAttribute('id' , 'tRow');
    thead.append(tr1);

    var tth = $('<th></th>').attr('id' , 'tName');
    tr1.append(tth);

    var tth1 = $('<th></th>').attr('id' , 'tAge');
    tr1.append(tth1);

    var tth2 = $('<th></th>').attr('id' , 'tGender');
    tr1.append(tth2);

    var tth3 = $('<th></th>').attr('id' , 'tDept');
    tr1.append(tth3);

    var tth4 = $('<th></th>').attr('id' , 'tBSal');
    tr1.append(tth4);

    var tth5 = $('<th></th>').attr('id' , 'tStngs');
    tr1.append(tth5);

    var button = $('<input>').attr('type' , 'button');
    button.attr('value' , 'edit');
    tth5.append(button);

    var button1 = $('<input>').attr('type' , 'button');
    button1.attr('value' , 'delete');
    button1.attr('onclick' , 'deleteData();');
    tth5.append(button1);


    $("#main").append(div);
}
 createTags();

 class EmployeeDetails {
    readDetails() {
        this.name = $("#eName").val();     
        this.age = $("#eAge").val();
        this.age = parseInt(this.age);         
        this.gender = $('input[name=gender]:checked').val();         
        this.dept = $('#eDept').val();        
        this.bsal = $("#eBSal").val();
        this.bsal = parseFloat(this.bsal);
        this.showData();         
   }
   showData() {
       document.querySelector('#showTable').style.display = "block";
       $("#tName").text(this.name);
       $("#tAge").text(this.age);
       $("#tGender").text(this.gender);
       $("#tDept").text(this.dept);
       $("#tBSal").text(this.bsal);
   }
}
function empData() {
   var obj = new EmployeeDetails();
   obj.readDetails();
   
}
function deleteData() {
   document.querySelector("#tStngs").style.display = "block";
   document.querySelector("#tName").innerHTML = this.name;
   document.querySelector("#tAge").innerHTML = this.age;
   document.querySelector("#tGender").innerHTML = this.gender;
   document.querySelector("#tDept").innerHTML = this.dept;
   document.querySelector("#tBSal").innerHTML = this.bsal; 
}
