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
            console.log(htmlContent);
            $('main').html(htmlContent);
        }
    });

    var scriptTag = $("<script type='text/javscript' src='app.js'></script>");
    $('head').append(scriptTag)
}