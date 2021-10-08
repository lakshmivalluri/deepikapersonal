

var readStudentInfo = () => {
    var sDetails = { };
    sDetails.languages = [];
    var languageList = document.querySelectorAll("input[name=language]");
    for (var i = 0 ; i < languageList.length; i++) {
        if (languageList[i].checked) {
            sDetails.languages.push(languageList[i].value)
        }
    }
    sDetails.name = document.querySelector("#uname").value;
    sDetails.age = document.querySelector("#uage").value;
    sDetails.gender = document.querySelector("input[name=gender]:checked").value;
    sDetails.class = document.querySelector("#uclass").value;
    sDetails.marks = [];
    for (var i = 0 ; i < 5; i++) {
        var id = '#m' + (i + 1); //#m1, #m2
        sDetails.marks[i] = document.querySelector(id).value;
        sDetails.marks[i] = parseInt(sDetails.marks[i])
    }

    sDetails.total = 0;
    for (var i = 0 ; i < sDetails.marks.length; i++) {
        sDetails.total += sDetails.marks[i];
    }
    sDetails.avg = sDetails.total/sDetails.marks.length;

    if (sDetails.avg >= 40)  {
        sDetails.grade = 'Passed';
    } else {
        sDetails.grade = 'You have a surprise';
    }

    displayData(sDetails);
}

var displayData = (data) => {
    document.querySelector("#rname").innerText = data.name;
    document.querySelector("#rgender").innerText = data.gender;
    document.querySelector("#rtotal").innerText = data.total;
    document.querySelector("#ravg").innerText = data.avg;
    document.querySelector("#rgrade").innerText = data.grade;
    document.querySelector("#language").innerHTML = data.languages;

    document.querySelector(".progressCard").style.display = 'block';
    document.querySelector(".inputData").style.display = 'none';
}


