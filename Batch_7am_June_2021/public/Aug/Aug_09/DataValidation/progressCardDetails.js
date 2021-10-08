var studentData = {
    avg: 0,
    getTotalAndAvg: function() {
        this.total = 0;
        for (var i = 0 ; i < this.marks.length; i++) {
            this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;
        this.getGrade();
        this.displaystudentData();
    },
    displaystudentData: function() {
        document.querySelector(".progressCardBlock").style.display = 'block';

        document.querySelector("#rsname").innerText = this.name;
        document.querySelector("#rsage").innerHTML = this.age;
        document.querySelector("#rsclass").innerText = this.class;
        document.querySelector("#rtotal").innerHTML = this.total;
        document.querySelector("#rAvg").innerHTML = this.avg;
        document.querySelector("#rGrade").innerHTML = '<b>' + this.grade + '</b>';
    }
};

/**
 * Method to calclulate the grade value.
 */
studentData.getGrade = function() {
    if (this.avg >= 40) {
        this.grade = "U Passed";
    } else {
        this.grade = 'U Got a surprise';
    }
}

studentData.readStudentData = function() {
    studentData.name = document.querySelector("#sname").value;
    this.age = document.querySelector("#sage").value;
    if (this.age > 10) {
        document.querySelector(".ageErr").style.display = 'block';
        return;
    } else {
        document.querySelector(".ageErr").style.display = 'none';
    }
    studentData.class = document.querySelector("#sclass").value;
    this.marks = [];

    for (var i = 0 ; i < 5; i++) {
        var id = '#m' + (i + 1); // #m1
        studentData.marks[i] = document.querySelector(id).value;
        this.marks[i] = parseInt(studentData.marks[i]);
    }
    this.getTotalAndAvg();
}
console.log(studentData);
function generateProgressCard(event) {
    console.log(event)
    studentData.readStudentData();
    console.log(studentData);
}

var validateUserName = (event) => {
    console.log(event);
    
    if ((event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 65 && event.charCode <= 90) || (event.charCode == 32)) {
        previouscharCode = event.charCode;
        return true;
    }
    return false;    
}

var validateMarks = function(event) {
    if (event.charCode >= 48 &&  event.charCode <= 57) {
        return true;
    }
    return false;
}