var studentData = {
    avg : 0,
     getTotalAndAvg: function() {
         this.total = 0;
         for( var i = 0; i <this.marks.length; i++) {
             this.total += this.marks[i];
         }
         this.avg = this.total / this.marks.length;
         this.getGrade();
         this.displayStudentData();
     },
         displayStudentData: function (){
         document.querySelector(".progressCardBlock").style.display = "block";
         document.querySelector("#rsname").innerHTML = this.name;
         document.querySelector("#rsno").innerHTML = this.sno;
         document.querySelector("#rsclass").innerHTML = this.class;
         document.querySelector("#rtotal").innerHTML = this.total;
         document.querySelector("#ravg").innerHTML = this.avg;
         document.querySelector("#rgrade").innerHTML = this.grade;
     }
  };
    studentData.getGrade = function(){
        if (this.avg >= 40){
        this.grade ="pass";
    }else{
        this.grade ="gift";
    }
  }
  studentData.readStudentData = function() {
    studentData.name = document.querySelector("#sname").value;
    studentData.sno = document.querySelector("#sno").value;
    studentData.class = document.querySelector("#sclass").value;
    studentData.marks =[];
     
    for (var i = 0; i< 5; i++) {
        var id = "#m" + (i+1);
        studentData.marks[i] = document.querySelector(id).value;
        studentData.marks[i] = parseInt(studentData.marks[i]);
    }
      this.getTotalAndAvg();
 }
      function generateProgressCard() {
        studentData.readStudentData();
        console.log(studentData);  
      }