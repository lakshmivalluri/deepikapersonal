var loginForm = function () {
    var data = {};
    data.name = $("#uname").val();
    data.password = $("#upassword").val();


    var request = $.ajax({
        url: "http://localhost:8080/user/data/login",
        method: 'POST',
        dataType: 'JSON',
        data: data
    });
    request.done(function (response) {
        console.log("Success");
        console.log(response);
        if (response.msg === "valid") {
            loadPageTemplate('userLoggedIn');
        } else {
            //$(".errBlock").css({ "border-color": "red", "border-weight": "1px", "border-style": "solid" });
            $(".errBlock").css({ "color": "red" });
            $(".errBlock").text("Invalid Login Details");
        }
    });
    request.fail(function (err) {
        console.log("Error");
    });
};


$(document).ready(function () {
    loadPageTemplate('login');
});

var loadPageTemplate = function (pageType) {
    var templateUrl = '';
    switch (pageType) {
        case 'login':
            templateUrl = 'template/login.htm';
            break;
        case 'forgotForm':
            templateUrl = 'template/forgot.htm';
            break;
        case 'signinForm':
            templateUrl = 'template/signIn.htm';
            break;
        case 'userLoggedIn':
            templateUrl = 'template/mainIndex.htm';
            break;
    }
    $.ajax({
        url: templateUrl,
        method: 'GET',
        success: function (resHtml) {
            console.log("success");
            $(".loginPage").html(resHtml);
            //Login Animation
            $(".textbox input").on("focus", function () {
                $(this).addClass("hightlight");
            });
            $(".textbox input").on("blur", function () {
                if ($(this).val() == "")
                    $(this).removeClass("hightlight");
            });

        }
    });
};


