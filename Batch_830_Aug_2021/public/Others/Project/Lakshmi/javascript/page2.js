

var username;
var userpaswrd;
var conformpaswrd;
var unumber;
var email;
 var submitData=()=>{
     username=$("#userName").val();
     localStorage.setItem("user_name",username);
	userpaswrd=$("#userPaswrd").val();
	localStorage.setItem("user_password",userpaswrd);
	conformpaswrd=$("#confrmPaswrd").val();
	localStorage.setItem("conform_password",conformpaswrd);
    unumber=$("#uNumber").val();
    localStorage.setItem("user_number",unumber);
	 email=$("#eMail").val();
	 localStorage.setItem("user_mail",email);
	console.log(username);
	console.log(userpaswrd);
	console.log(conformpaswrd);
	console.log(unumber);
	console.log(email);
	$("#page").show();
	$("#signUp").hide()
}

document.querySelector("#eye1").addEventListener("click",function(){
	if(document.getElementById("userPaswrd").type=="password"){
	   document.getElementById("userPaswrd").type="text";	
	}
	else{
		document.getElementById("userPaswrd").type="password";	
	}
	
});
document.querySelector("#eye2").addEventListener("click",function(){
	if(document.getElementById("confrmPaswrd").type=="password"){
	   document.getElementById("confrmPaswrd").type="text";	
	}
	else{
		document.getElementById("confrmPaswrd").type="password";	
	}
	
});