var signUpPage=()=>{
	
	
	$("#signUp").show();
	$("#page").hide()
}
var showData=()=>{
	var data={ };
	data.uname=$("#uname").val();
	
	data.upassword=$("#upassword").val();
	if(data.uname=='admin'&& data.upassword=='admin'){
		$("#page7").show();
		$("#page").hide();
	}else{
	$("#page4").show();
	$("#page").hide();
	}
	
	//document.querySelector("#display").style.display='block';
	

}
var forGotPage=()=>{
	document.querySelector("#signUp2").style.display='block';
	$("#page").hide();
}
document.querySelector("#eye").addEventListener("click",function(){
	if(document.getElementById("upassword").type=="password"){
	   document.getElementById("upassword").type="text";	
	}
	else{
		document.getElementById("upassword").type="password";	
	}
	
});
