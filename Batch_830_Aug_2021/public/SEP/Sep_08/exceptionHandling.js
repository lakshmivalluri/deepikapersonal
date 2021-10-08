var empName;

//console.log(Math.floor(Math.random() * 100));

var taskList = [
    'Do the complete Project Review',
    'Do the developmemnt of Dashborad screen',
    'Move the DialogBox code to common reusable service',
    'Implement the angular ag grid enterprise version',
    'Work on Creating sample apps for Angular Training team',
    'Work on Debate for Final round'
]

var createTaskContainer = () => {
    var divTag = document.createElement("div");
    divTag.setAttribute("id", 'taskContainer');
    document.querySelector('body').append(divTag);
}

var showTask = () => {
    var index = Math.floor(Math.random() * taskList.length);
    var task = taskList[index];
    task = 'Mr.' + empName + ' Todays Task is ' + '<b>' +task + '</b>';
    try {
        document.querySelector("#taskContainer").innerHTML = task;
    } catch(err) {
        alert("boss you need to creeate container then u click on show task")
    }
    showWelcomeBlock();
}

var showWelcomeBlock = () => {
    document.querySelector(".welcomeBlock").style.display = 'block';
}

var saveEmpName = () => {
    empName = document.querySelector("#ename").value;
}