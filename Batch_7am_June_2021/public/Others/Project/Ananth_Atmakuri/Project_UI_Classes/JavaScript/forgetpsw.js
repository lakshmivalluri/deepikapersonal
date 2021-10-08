var userpsw = (event) => {
    console.log(event)
    if ((event.charCode >= 48 && event.charCode <= 57)){
         $(".upsw").css("display","none");
         return true;
    } else {
        $(".upsw").css("display","block");
         return false;
    }
}
var userPSWReEnter = (event) => {
    console.log(event)
    if ((event.charCode >= 48 && event.charCode <= 57)){
         $(".rpsw").css("display","none");
         return true;
    } else {
         $(".rpsw").css("display","block");
         return false;
    }
}
var verify = (event) => {
    var a =$("#upsw").val();
    var b = $("#rpsw").val();
    console.log(a);
    console.log(b);

    if (a == b) {
        $(".valid").css("display","none");
        return true;
    } else {
        $(".valid").css("display","block");
        return true;
    }
}