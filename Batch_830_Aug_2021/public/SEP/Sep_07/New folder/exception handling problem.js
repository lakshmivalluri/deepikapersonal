var empName;

var tasksList = [
    'Do the comeplete Project Review',
    'Do the Development of Dashboard Screen',
    'Move the Dialog Box Code to common reusable Service',
    'Implement the angular ag grid enterprise version',
    'Working on creating Sample Apps For Angular Training Team',
    'Work on Debate For Final Round'
]

var createTaskContainer = function () {
    $('body').append($('<div></div>').attr('id', 'taskContainer'));
}

var showTask = function () {
    var task = empName + ' ' + tasksList[parseInt(Math.random() * tasksList.length) + 1];
    console.log($("body").length);
    console.log($('#taskContainer3').length)
    $('#taskContainer3').html(task);
    showWelcomeBlock();
}

var showWelcomeBlock = function () {
    $('.welcomeBlock').css('display', 'block');
}

var saveDetails = function () {
    empName = $('#ename').val();
}