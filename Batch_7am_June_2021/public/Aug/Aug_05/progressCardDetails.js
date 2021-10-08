var name = "Teena";

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
function generateProgressCard() {
    studentData.readStudentData();
    console.log(studentData);
}