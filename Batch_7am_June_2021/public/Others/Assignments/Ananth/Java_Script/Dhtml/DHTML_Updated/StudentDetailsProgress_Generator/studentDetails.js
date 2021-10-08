var details = () => {
    var studentDetails = [{
        name : 'Ananth',
        class : "5th class",
        image : 'emp.jpg',
        subject : ['maths','science'],
        maxmarks : 100,
        obtained : [80,90],
        status : 'pass',
    },
    {
        name : 'Ramu',
        class : '8th class',
        image : 'emg.jpg',
        subject : ['maths','science'],
        maxmarks : 100,
        obtained : [80,90],
        status : 'pass',
    },
    {
        name : 'Somu',
        class : '6th Class',
        image : 'emg.jpg',
        subject : ['maths','science'],
        maxmarks : 100,
        obtained : [80,90],
        status : 'pass',
    }]
    for (var i = 0; i < studentDetails.length;i++) {
        creatingmainTable(studentDetails[i])
    }
}
var creatingmainTable = (studentDetails,temp) => {
    for(var j = 0; j < studentDetails.subject.length; j++){
        var temp = studentDetails.subject[j] ;
        console.log(studentDetails.subject[j])
    }
    for (var k = 0; k < studentDetails.obtained.length; k++){
        var temp1 = studentDetails.obtained[k] ;
        console.log(temp1)
    }

    var tabletag = document.createElement("table");
    tabletag.setAttribute("class","main");

    var theadtag = document.createElement("thead");
    tabletag.append(theadtag);

    var tr1 = document.createElement("tr");
    theadtag.append(tr1)

    var th1 = document.createElement("th");
    th1.innerHTML = "Student Name";
    tr1.append(th1);
    var th2 = document.createElement("th");
    th2.innerHTML = "Student Class";
    tr1.append(th2);
    var th3 = document.createElement("th");
    th3.innerHTML = "Student Image";
    tr1.append(th3);
    var th4 = document.createElement("th");
    th4.innerHTML = "Student Marks";
    tr1.append(th4);

    var tablebody = document.createElement("tbody");
    tabletag.append(tablebody);

    var tr2 = document.createElement("tr");
    tablebody.append(tr2);

    var td1 = document.createElement("td");
    td1.innerHTML = studentDetails.name;
    tr2.append(td1);

    var td2 = document.createElement("td");
    td2.innerHTML = studentDetails.class;
    tr2.append(td2);

    var td3 = document.createElement("td");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src",'emp.jpg');
    td3.append(imgTag);
    tr2.append(td3);
    //creating a table inside a table for marks
    var td4 = document.createElement("td");

    var tabletag1 = document.createElement("table");
    tabletag1.setAttribute("class","inner");
    td4.append(tabletag1);
    tr2.append(td4);

    var theadtag1 = document.createElement("thead");
    tabletag1.append(theadtag1);

    var trtr = document.createElement("tr");
    theadtag1.append(trtr)

    var th1 = document.createElement("th");
    th1.innerHTML = "Subject";
    trtr.append(th1);
    var th2 = document.createElement("th");
    th2.innerHTML = "Max Marks";
    trtr.append(th2);
    var th3 = document.createElement("th");
    th3.innerHTML = "Obtained Marks";
    trtr.append(th3);
    var th4 = document.createElement("th");
    th4.innerHTML = "Status";
    trtr.append(th4);

    var tablebody1 = document.createElement("tbody");
    tabletag1.append(tablebody1);

    var trtr2 = document.createElement("tr");
    tablebody1.append(trtr2);

    var td1 = document.createElement("td");
    td1.innerHTML = "<b>" + temp + "</b>";
    trtr2.append(td1);

    var td2 = document.createElement("td");
    td2.innerHTML = studentDetails.maxmarks;
    trtr2.append(td2);

    var td3 = document.createElement("td");
    td3.innerHTML = temp1;
    trtr2.append(td3);

    var td4 = document.createElement("td");
    td4.innerHTML = studentDetails.status;
    trtr2.append(td4);
    var td4 = document.createElement("td");



    document.querySelector(".creating").append(tabletag);
}
details();
