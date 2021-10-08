var userName;
var selectedTheme;

var saveUser = () => {
    userName = $("#uname").val();
    sessionStorage.setItem("user_name", userName);
    showWlcomeBlock(userName);    
}

var showWlcomeBlock = (uname) => {
    var msg = 'Welcome To page Mr.' + uname;
    $("#wlcmBlock").html(msg);
    $("#wlcmBlock").show(3000);
}

$(document).ready(() => {
    if (sessionStorage.getItem('user_name') != null) {
        showWlcomeBlock(sessionStorage.getItem('user_name'));
    }
    
    if (sessionStorage.getItem("selectedTheme") != null) {
        applyTheme(sessionStorage.getItem("selectedTheme"));
    }
});


var themeChange = () => {
    selectedTheme = $("#theme").val();
    sessionStorage.setItem("selectedTheme", selectedTheme);
    applyTheme(selectedTheme);
}

var applyTheme = (cname) => {
    console.log("Themename is " + selectedTheme);
    console.log("userName is " + userName);
    $("body").css('background-color', cname);
}