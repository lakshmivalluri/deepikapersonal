class StudentData {
    constructor() {
        this.avg = 0;
        this.name = '';
        this.age = '';
        this.class = '';
        this.marks = [],
        this.tot =  0;
    }
    getTotalAndAvg() {
        this.total = 0;
        for (var i = 0 ; i < this.marks.length; i++) {
            this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;
        this.getGrade();
        this.displaystudentData();
    }
    displaystudentData() {
        document.querySelector(".progressCardBlock").style.display = 'block';
        document.querySelector("#rsname").innerText = this.name;
        document.querySelector("#rsage").innerHTML = this.age;
        document.querySelector("#rsclass").innerText = this.class;
        document.querySelector("#rtotal").innerHTML = this.total;
        document.querySelector("#rAvg").innerHTML = this.avg;
        document.querySelector("#rGrade").innerHTML = '<b>' + this.grade + '</b>';
    }
    getGrade() {
        if (this.avg >= 40) {
            this.grade = "U Passed";
        } else {
            this.grade = 'U Got a surprise';
        }
    }
    readStudentData() {
        this.name = document.querySelector("#sname").value;
        this.age = document.querySelector("#sage").value;
        this.class = document.querySelector("#sclass").value;
        this.marks = [];

        for (var i = 0 ; i < 5; i++) {
            var id = '#m' + (i + 1); // #m1
            this.marks[i] = document.querySelector(id).value;
            this.marks[i] = parseInt(this.marks[i]);
        }
        this.getTotalAndAvg();
    }
};

var studentDetails = [];

function generateProgressCard() {    
    var obj1 = new StudentData();
    obj1.readStudentData();
    studentDetails.push(obj1);
    console.log(studentDetails)
}