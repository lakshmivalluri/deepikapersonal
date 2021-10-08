var schoolData = {
    schoolName: 'Abc School',
    schoolLocation: 'Hyderabad',
    schoolRating: '4/5'
}

function registerStudent() {
    var studentData = Object.create(schoolData);
    // var studentData = {};
    studentData.name = document.querySelector("#uname").value;
    studentData.age = document.querySelector("#uage").value;
    studentData.class = document.querySelector("#uClass").value;
    studentData.address = document.querySelector("#uAddress").value;
 
    var ulTag = document.createElement("ul");

    for (var key in studentData) {
        var li = document.createElement('li');
        li.innerHTML = key + ' : ' + studentData[key];
        ulTag.append(li);
    }
    document.querySelector(".detilsContaianer").append(ulTag);
}