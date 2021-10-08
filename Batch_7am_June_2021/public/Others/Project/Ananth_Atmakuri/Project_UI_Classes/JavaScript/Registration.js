var username = (event) => {
    if ((event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 65 && event.charCode <= 90) || (event.charCode == 32)) {
       $(".uname").hide();
        return true;
   } else {
       $(".uname").show();
        return false;
   }
}
var userpsw = (event) => {
    console.log(event)
    if ((event.charCode >= 48 && event.charCode <= 57)){
        $(".upsw").hide();
         return true;
    } else {
        $(".upsw").show();
         return false;
    }
}
var userPSWReEnter = (event) => {
    console.log(event)
    if ((event.charCode >= 48 && event.charCode <= 57)){
        $(".rpsw").hide();
         return true;
    } else {
        $(".rpsw").show();
         return false;
    }
}
var verify = (event) => {
    var a = $("#upsw").val();
    var b = $("#rpsw").val();
    console.log(a);
    console.log(b);

    if (a == b) {
        $(".valid").hide();
        return true;
    } else {
        $(".valid").show();
        return true;
    }
}
var userphn = (event) => {
    if ((event.charCode >= 48 && event.charCode <= 57)){
        $(".uphn").hide();
        return true;
   } else {
        $(".uphn").show();
        return false;
   }
}