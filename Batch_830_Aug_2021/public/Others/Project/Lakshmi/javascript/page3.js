



var uemail;
var showLoginPage=()=>{
     uemail=$("#uEmail").val();
     console.log(uemail);
	 
	$("#page").show();
	$("#signUp2").hide();
	
}
/*var name;
var password;
var showProductPage=()=>{
	name=$("#urname").val();
	password=$("#urpassword").val();
	
	if(name=='admin'&& password=='admin'){
		$("#page7").show();
		$("#page4").hide();
		$("#page3").hide();
	}else{
	console.log(name);
	console.log(password);
	$("#page4").show();
	$("#page7").hide();
	$("#page3").hide();
	}

}*/
var productData={
	image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6evQrItKioIFy4V97ngm9p2HWB2DxLycHQ&usqp=CAU',
	image1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQU5lIW88bWb7-sSOak9G5FCkPVqz8m4v82w&usqp=CAU',
	image2:'https://i.pinimg.com/originals/29/e2/d6/29e2d6c8117d4f4f953e82d984d965ce.jpg',
	image3:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8kBJhrI5pPqZFgES2alaJjIJgTU7b5d8dmw&usqp=CAU',
	image4:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJLytcgp9UmdP0EuT2OrEWGqU3-FX_JmdP6Q&usqp=CAU',
	image5:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsjtZynBxaGbyZb1ZSzcZ1StIv_fHN37Eyhw&usqp=CAU',
	image6:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT51Jg1FDXZpABt16jfpFBDoIZivqqpwGWeXg&usqp=CAU',
	image7:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-pdQxTdc5CzbxLhgRUE8y_AtjE8HExUtHg&usqp=CAU',
	image8:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGA_PNA_u6uC0YUE5T3g01D-qif8Izj5P4g&usqp=CAU'
}
function showImage(){

	var ultag=document.createElement("ul");
	ultag.setAttribute("class",'rblock');
	
	var img=document.createElement("img");
	img.setAttribute("src",productData.image);
	ultag.append(img);
	var img1=document.createElement("img");
	img1.setAttribute("src",productData.image1);
	ultag.append(img1);
	var img2=document.createElement("img");
	img2.setAttribute("src",productData.image2);
	ultag.append(img2);
	
	document.querySelector("#rblock").append(ultag);
	var ultag1=document.createElement("ul");
	ultag1.setAttribute("class",'rblock1');
	var img3=document.createElement("img");
	img3.setAttribute("src",productData.image3);
	ultag1.append(img3);
	var img4=document.createElement("img");
	img4.setAttribute("src",productData.image4);
	ultag1.append(img4);
	var img5=document.createElement("img");
	img5.setAttribute("src",productData.image5);
	ultag1.append(img5)
	console.log(ultag1)
	document.querySelector("#rblock1").append(ultag1);

	var ultag2=document.createElement("ul");
	ultag2.setAttribute("class",'rblock2');
	var img6=document.createElement("img");
	img6.setAttribute("src",productData.image6);
	ultag2.append(img6);
	var img7=document.createElement("img");
	img7.setAttribute("src",productData.image7);
	ultag2.append(img7);
	var img8=document.createElement("img");
	img8.setAttribute("src",productData.image8);
	ultag2.append(img8);
	console.log(ultag2)
	
	document.querySelector("#rblock2").append(ultag2);

	
	
}
showImage();


document.querySelector("#eye3").addEventListener("click",function(){
	if(document.getElementById("urpassword").type=="password"){
	   document.getElementById("urpassword").type="text";	
	}
	else{
		document.getElementById("urpassword").type="password";	
	}
	
});
