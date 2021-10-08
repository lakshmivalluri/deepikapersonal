var userName;

var readUserName = () => {
    userName = document.querySelector("#userName").value;
}

var generateBlock = () => {
    var div = document.createElement("div");
    div.setAttribute("id", "task_container");
    document.querySelector(".block").append(div);
}

var generateTask = () => {
    try {
        var task = "Do the project review";
        task = 'Mr ' + userName + ' - ' + task;
        // to open a file
        document.querySelector("#task_container").innerHTML = task;
    } catch(error) {
        console.log(error);
        console.log("You missed the step of creating a container");
    } finally {
        showThanksMsg();
    } 
}

var showThanksMsg = () => {
    var msg = "Thanks for using this page";
    document.querySelector(".thanksBlock").style.display = 'block';
    document.querySelector(".thanksBlock").innerText = msg;
}
