var showPage = (type) => {
    var templateUrl;
    switch(type) {
        case 'login':
            templateUrl = '/templates/loginpage.htm';
            break;
        case 'signup':
            templateUrl = '/templates/signup.htm';
            break;
    }
    $.ajax({
        url: templateUrl,
        dataType: 'text',
        method:'GET',
        success: (htmlContent) => {
            $('main').html(htmlContent);
        }
    });

    var scriptTag = $("<script type='text/javscript' src='app.js'></script>");
    $('head').append(scriptTag)
}

var validateUser = () => {
    var userData = {};
    userData.uid = $("#uid").val();
    userData.upwd = $("#upwd").val();
    console.log(userData);

    var dataReqPromise = $.ajax({
        url: '/validate/user/details',
        method: 'POST',
        dataType: 'JSON',
        data: userData
    });

    dataReqPromise.done((result ) => {
        console.log('result');
        console.log(result);
        if (result.msg == 'Valid') {
            $(".loginError").hide();
            // show frnds list
        } else {
            //show invalid login
            $(".loginError").show();
        }
    });
    dataReqPromise.fail((error) => {
        console.log("error");
    })
}