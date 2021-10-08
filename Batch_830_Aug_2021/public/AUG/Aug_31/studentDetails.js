console.log("about to work with student details");
            

function readStudnetData() {
    var sname, age, m1, m2, m3, total, avg;
    sname = prompt("enter student name");
    age = prompt("enter studnet age");
    m1 = prompt("enter marks 1");
    m1 = parseInt(m1);
    m2 = prompt("enter marks 2");
    m2 = parseInt(m2);
    m3 = prompt("enter marks 3");
    m3 = parseInt(m3);
    var res = getTotalAndAvg(m1, m2, m3);
    total = res[0];
    avg = res[1];
    displayStudentData(sname, age, total, avg);
}

function getTotalAndAvg(m1, m2, m3) {
    var total = 0, avg;
    total = m1 + m2 + m3;
    avg = total / 3;
    var temp = [total, avg];
    return temp;
}

function displayStudentData(sname, age, total, avg) {
    document.querySelector("#uname").innerText = "<b>" + sname + '</b>';
   
    document.getElementById("uage").innerText = age;
    
    document.getElementById("total").innerHTML = "<b>" + total + '</b>';
    document.querySelector("#avg").innerHTML = avg;
    var grade = showStudentGrade(avg);
    document.getElementById("grade").innerHTML = grade;

    
}

function showStudentGrade(avg) {
    var grade = '';
    if (avg >= 40) {
        grade = "PAssed";
        if (avg >= 90) {
            grade = 'Distinction'
        } else if (avg >= 60) {
            grade = 'First Class';
        } else {
            grade = 'Second Class';
        }
    } else {
        grade = 'Failed'
    }
    return grade;
}

//readStudnetData();

//document.querySelector("span").innerHTML = "HEELo";
/*
console.log(document.querySelectorAll('span'));
var elements = document.querySelectorAll('span');
for (var i = 0 ; i < elements.length; i++) {
    elements[i].innerHTML = "HEELO";
}*/