
var uname;

var showWelcomeMsg = (name) => {
    $("#wuname").html(name);
    $("#wlcmBlock").show(4000);
}

$(document).ready(() => {    
    if (sessionStorage.getItem("user_name") != null) {
        showWelcomeMsg(sessionStorage.getItem("user_name"));
    }

    if (sessionStorage.getItem("user_theme")) {
        applyTheme(sessionStorage.getItem("user_theme"));
    }
})

var data = {
    name: 'raj',
    age: 10,
    gender: 'male'
}

localStorage.setItem("userDetails", JSON.stringify(data));

console.log(localStorage.getItem("userDetails"))


var saveUserName = () => {
    uname = $("#uname").val();
    sessionStorage.setItem("user_name", uname);
    $("#uname").val('');
    showWelcomeMsg(uname)
} 



var getSelectedTheme = () => {
    var colorChoosen = $("#ucolor").val();
    sessionStorage.setItem("user_theme", colorChoosen);
    applyTheme(colorChoosen);
}

var applyTheme = (colorName) => {
    $("body").css("backgroundColor", colorName);
}