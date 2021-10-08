

var editIndex = -1;

var show = document.querySelector('.hide');

var sDetailsList = [];

function generate() {

    show.classList.remove('hide');

    var sDetails = {};

    var sDetails = getValues();

    sDetailsList.push(sDetails);

    creating(sDetails, sDetailsList.length - 1);

}



function creating(sDetails, index) {

    var trTag1 = document.createElement('tr');
    var id = `tr_${index}`;
    trTag1.setAttribute("id", id);
    var srNoTag = document.createElement('td');
    srNoTag.innerHTML = (index + 1);
    trTag1.append(srNoTag);
    var tdTag1 = document.createElement('td');
    tdTag1.innerHTML = sDetails.name;
    trTag1.append(tdTag1);
    var tdTag2 = document.createElement('td');
    tdTag2.innerHTML = sDetails.age;
    trTag1.append(tdTag2);
    var tdTag3 = document.createElement('td');
    tdTag3.innerHTML = sDetails.gender;
    trTag1.append(tdTag3);
    var tdTag4 = document.createElement('td');
    tdTag4.innerHTML = sDetails.location;
    trTag1.append(tdTag4);


    var tdTag5 = document.createElement('td');
    var edit = document.createElement('button');
    edit.setAttribute('class', 'edit');
    edit.setAttribute('index', index);
    edit.innerHTML = " EDIT ";
    tdTag5.appendChild(edit);
    var del = document.createElement('button');
    del.setAttribute('class', 'delete');
    del.setAttribute('index', index);
    del.innerHTML = " DELETE ";
    tdTag5.appendChild(del);
    trTag1.append(tdTag5);

    show.appendChild(trTag1);

    edit.addEventListener('click', function (event) {
        doEdit(event);
    })

    del.addEventListener('click', function (event) {
        doDel(event);
    })

}


var doEdit = (event) => {

    var index = event.target.getAttribute('index');

    index = parseInt(index);
    var temp = sDetailsList[index];
    editIndex = index;
    alert("ABOUT TO EDIT ROW NUMBER : " + (index + 1));
    document.querySelector('#uname').value = temp.name;
    document.querySelector('#unumber').value = temp.age;

    document.querySelector('#ulocation').value = temp.location;

    var allGenders = document.getElementsByName('ugender');
    for (var i = 0; i < allGenders.length; i++) {
        if (allGenders[i].value == temp.gender) {
            allGenders[i].checked = true;
        }
    }

    document.querySelector('#add').classList.add('hide');

    document.querySelector("#save").style.display = 'block';

}

function doSave(event) {
    var index = editIndex;
    var temp = getValues();

    sDetailsList[index] = temp;
    var selector = "#tr_" + index + ' td';
    var tdList = document.querySelectorAll(selector);
    tdList[0].innerHTML = index + 1;
    tdList[1].innerHTML = temp.name;
    tdList[2].innerHTML = temp.age;
    tdList[3].innerHTML = temp.gender;
    tdList[4].innerHTML = temp.location;


    document.querySelector('#add').classList.remove('hide');

    document.querySelector("#save").style.display = 'none';
}

function doDel(event) {
    alert(" ARE YOU SURE YOU WANT TO DELETE ! ");
    var index = event.target.getAttribute('index');
    index = parseInt(index);
    var id = `#tr_${index}`;
    sDetailsList.splice(index, 1);
    document.querySelector(id).remove();

    if (sDetailsList.length == 0) {
        show.classList.add('hide');
    }
    else if (sDetailsList.length == 1 && index == 0) {
        var selector = "#tr_" + (++index) + ' td';
        var tdList = document.querySelectorAll(selector);
        tdList[0].innerHTML = index;
    }
    for (var i = index+1; i <= sDetailsList.length; i++) {
        var selector = "#tr_" + i  + ' td';
        var tdList = document.querySelectorAll(selector);
        tdList[0].innerHTML = i ;
    }
}

function getValues() {
    var temp = {};

    temp.name = document.querySelector('#uname').value;

    document.querySelector('#uname').value = '';

    temp.age = document.querySelector('#unumber').value;
    document.querySelector('#unumber').value = '';

    temp.gender = document.querySelector('input[type=radio]:checked').value;
    document.querySelector('input[type=radio]:checked').checked = false;

    temp.location = document.querySelector('#ulocation').value;
    document.querySelector('#ulocation').value = '';

    return temp;
}