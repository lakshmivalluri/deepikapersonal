var validateUserName = (event) => {
     if ((event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 65 && event.charCode <= 90) || (event.charCode == 32)) {
          document.querySelector(".uname").style.display = 'none';
          document.querySelector(".name").style.display = 'block';
          return true;
     } else {
          document.querySelector(".uname").style.display = 'block';
          document.querySelector(".name").style.display = 'none';
          return false;
     }    
}
var valpsw = (event) => {
     var userpsw = document.querySelector("#userpsw").value;
     if (userpsw.length >= 7) {
          document.querySelector("#maxchr").style.color = 'green';
          document.querySelector("#maxchr").setAttribute('class','valid');
          return true;
     } else  {
          document.querySelector("#maxchr").style.color = 'red';
          document.querySelector("#maxchr").setAttribute('class','invalid');
          return true;
     }
}
var valpsw1 = (event) => {
     if ((event.charCode >= 48 && event.charCode <= 57)){
          document.querySelector("#onenum").style.color = 'green';
          document.querySelector("#onenum").setAttribute('class','valid');
          return true;
     } else {
          document.querySelector("#onenum").style.color = 'red';
          document.querySelector("#onenum").setAttribute('class','invalid');
          return true;    
     }
}
var valpsw2 = (event) => {
     var userpsw1 = document.querySelector("#userpsw").value;
     var str = userpsw1;
     console.log(str.substring(0,1))
     if (str.substring(0,1) == (event.charCode >= 65 && event.charCode <= 90)){
          document.querySelector("#firstLetter").style.color = 'green';
          document.querySelector("#firstLetter").setAttribute('class','valid');
          return true;
     } else {
          document.querySelector("#firstLetter").style.color = 'red';
          document.querySelector("#firstLetter").setAttribute('class','invalid');
          return true;
     }
}