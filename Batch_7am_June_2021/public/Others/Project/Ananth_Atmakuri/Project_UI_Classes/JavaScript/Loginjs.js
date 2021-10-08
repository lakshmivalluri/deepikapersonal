var date = new Date();
document.querySelector("#presentDate").innerHTML = date;

//Validating User inputs.
var uname = (event) => {
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