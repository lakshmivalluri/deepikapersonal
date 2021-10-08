//Chat Window

function openchat() {
    document.querySelector(".chatBox").style.display = "block";
    $(".btn-chat").hide();
}
function closeChat() {
    document.querySelector(".chatBox").style.display = "none";
    $(".btn-chat").show();
    $(".chatBox h3").show();
}

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $(".btn-chat").show();
    } else {
        $(".btn-chat").hide();
    }
});
var sendMsg = function () {
    var msg = $("#umsg").val();
    $("#umsg").val("");
    showMsg(msg, 'sender');
    socket.emit("userMsg", msg);
}
var showMsg = function (msg, type) {
    if (type == 'receiver') {
        var sendDivTag = $("<div class=rmsg></div>");
        sendDivTag.html(msg);
        $(".chatDirectionRight").append(sendDivTag);
    } else {
        var sendDivTag = $("<div class=msg></div>");
        sendDivTag.html(msg);
        $(".chatDirectionLeft").append(sendDivTag);
    }
}

var socket = io("http://localhost:8080");
console.log(socket);

socket.on("receivedMessage", (msg) => {
    console.log('Got the msg ' + msg);
    showMsg(msg, 'receiver');
})