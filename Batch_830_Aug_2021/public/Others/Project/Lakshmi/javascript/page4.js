//var img;
/*var discriptionOfProducts = [
	{
	ProductName:' mens formal shirt',
	categiory:'Mens Cloths',
	price:'2500/-',
	vendor:'Diverse',
	Manufacturer:' Equation Bombay Company ',
	instock:'available',
	color:'yellowgreen',
	size:'xl',
	discription:'Officeware&casualware shirt'
},
{
	ProductName:' mens Suit',
	categiory:'Mens Cloths',
	price:'25000/-',
	vendor:'Diverse',
	Manufacturer:' Equation Bombay Company ',
	instock:'available',
	color:'gray and white',
	size:'xl,xxl',
	discription:'Officeware'
}
];*/
var dressDetails1 = {
	 ProductName:' mens formal shirt',
	 categiory:'Mens Cloths',
	 price:'2500/-',
	 vendor:'Diverse',
	 Manufacturer:' Equation Bombay Company ',
	 instock:'available',
	 color:'yellowgreen',
	 size:'xl',
	 discription:'Officeware&casualware shirt'
}
var womenDresses = {
	productName:' Anarkali',
	cateogiry:'womens ware',
	price:'1500',
	vendor:'Raabta Fashion',
	Manufacturer:'Blossoms Organic Clothing  ',
	instock:'Available',
	color:' silver and black ',
	size:'xxl,xl',
	discription:'partyware'


}
var electronicItems = {
	productName:' LG WashingMachine',
	cateogiry:'Electronics',
	price:'35000',
	vendor:'Sony Electronics',
	Manufacturer:'LG  ',
	instock:'Available',
	color:' Gray ',
	capacity:'7 KiloGrams',
	discription:'Fully-automatic front load washing machinebest wash quality energy and water efficient'
	
	

}
mensCloths=()=>{
	$(".block").hide();
	$("#rblock3").show();
	$("#rblock4").hide();
	showMenCloths();
}
function showMenCloths(){
    var ultag5=document.createElement("ul");
	ultag5.setAttribute("class",'rblock3');
	var img=document.createElement("img");
	img.setAttribute("class",'photos');
	img.setAttribute("id",'abc');
	img.setAttribute('src','./images/photo1.jfif');
	ultag5.append(img);
	var img1=document.createElement("img");
	img1.setAttribute("class",'photos');
	img1.setAttribute("id",'abc1');
	img1.setAttribute('src','./images/photo2.jfif');
	ultag5.append(img1);
	var img2=document.createElement("img");
	img2.setAttribute("class",'photos');
	img2.setAttribute("id",'abc2');
	img2.setAttribute('src','./images/photo3.jpg');
	ultag5.append(img2);
	var img3=document.createElement("img");
	img3.setAttribute("class",'photos');
	img3.setAttribute("id",'abc3')
	img3.setAttribute('src','./images/photo10.jfif');
	ultag5.append(img3);
	var img4=document.createElement("img");
	img4.setAttribute("class",'photos');
	img4.setAttribute("id",'abc4')
	img4.setAttribute('src','./images/photo11.jfif');
	ultag5.append(img4);
	var img5=document.createElement("img");
	img5.setAttribute("class",'photos');
	img5.setAttribute("id",'abc5')
	img5.setAttribute('src','./images/photo12.jfif');
	ultag5.append(img5);
	console.log(ultag5)
	document.querySelector("#rblock3").append(ultag5);
    //fisrt function for display product in PRODUCT INFORMATION PAGE
	document.querySelector("#abc").onclick=myData;
     function myData( ){
		$("#page5").show();	
		$("#page4").hide();	

      var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize')
	  img.setAttribute('src','./images/photo1.jfif');
	  ultag.append(img);

	 document.querySelector("#pblock").append(ultag);
	 var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock1');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo1.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock1").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock2');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo1.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock2").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock3');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo1.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock3").append(ultag);
	  //dynamic rending of product details in right side block of PRODUCT INFORMATION PAGE
	
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("id",'space');
	  var litag=document.createElement("li");
	  var span1=document.createElement("span");
	  span1.innerHTML='product Name :';
	  litag.append(span1);
	  var span2=document.createElement("span");
	  span2.innerText=dressDetails1.ProductName;
	  litag.append(span2);
	  ultag.append(litag);
	
	  var litag1=document.createElement("li");
	  var span3=document.createElement("span");
	  span3.innerHTML=' categiory   :';
	  litag1.append(span3);
	  var span4=document.createElement("span");
	  span4.innerText=dressDetails1.categiory;
	  litag1.append(span4);
	  ultag.append(litag1);

	  var litag2=document.createElement("li");
	  var span5=document.createElement("span");
	  span5.innerHTML=' price  :';
	  litag2.append(span5);
	  var span6=document.createElement("span");
	  span6.innerText=dressDetails1.price;
	  litag2.append(span6);
	  ultag.append(litag2);
	  var litag3=document.createElement("li");
	  var span7=document.createElement("span");
	  span7.innerHTML='Vendor   :';
	  litag3.append(span7);
	  var span8=document.createElement("span");
	  span8.innerText=dressDetails1.vendor;
	  litag3.append(span8);
	  ultag.append(litag3);
	  var litag4=document.createElement("li");
	  var span9=document.createElement("span");
	  span9.innerHTML='Manufacturer  :';
	  litag4.append(span9);
	  var span10=document.createElement("span");
	  span10.innerText=dressDetails1.Manufacturer;
	  litag4.append(span10);
	  ultag.append(litag4);
	  var litag5=document.createElement("li");
	  var span11=document.createElement("span");
	  span11.innerHTML='Instock :';
	  litag5.append(span11);
	  var span12=document.createElement("span");
	  span12.innerText=dressDetails1.instock;
	  litag5.append(span12);
	  ultag.append(litag5);
	  var litag6=document.createElement("li");
	  var span13=document.createElement("span");
	  span13.innerHTML='color :';
	  litag6.append(span13);
	  var span14=document.createElement("span");
	  span14.innerText=dressDetails1.color;
	  litag6.append(span14);
	  ultag.append(litag6);
	  var litag7=document.createElement("li");
	  var span15=document.createElement("span");
	  span15.innerHTML='Size :';
	  litag7.append(span15);
	  var span16=document.createElement("span");
	  span16.innerText=dressDetails1.size;
	  litag7.append(span16);
	  ultag.append(litag7);
	  var litag8=document.createElement("li");
	  var span17=document.createElement("span");
	  span17.innerHTML='Discription :';
	  litag8.append(span17);
	  var span18=document.createElement("span");
	  span18.innerText=dressDetails1.discription;
	  litag8.append(span18);
	  ultag.append(litag8);
	  
	  document.querySelector("#pblock6").append(ultag);
	  //document.querySelector("#addToCart").onclick=viewCartPage();
	  //viewCartPage();
    }

	document.querySelector("#abc1").onclick=myData1;
     function myData1(){
		
		$("#page5").show();	
		$("#page4").hide();	
      var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize')
	  img.setAttribute('src','./images/photo2.jfif');
	  ultag.append(img);

	 document.querySelector("#pblock").append(ultag);
	 var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock1');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo2.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock1").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock2');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo2.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock2").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock3');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo2.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock3").append(ultag);
	  //dynamic rendering of product details
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("id",'space');
	  var litag=document.createElement("li");
	  var span1=document.createElement("span");
	  span1.innerHTML='product Name :';
	  litag.append(span1);
	  var span2=document.createElement("span");
	  span2.innerText=dressDetails1.ProductName;
	  litag.append(span2);
	  ultag.append(litag);
	
	  var litag1=document.createElement("li");
	  var span3=document.createElement("span");
	  span3.innerHTML=' categiory   :';
	  litag1.append(span3);
	  var span4=document.createElement("span");
	  span4.innerText=dressDetails1.categiory;
	  litag1.append(span4);
	  ultag.append(litag1);

	  var litag2=document.createElement("li");
	  var span5=document.createElement("span");
	  span5.innerHTML=' price  :';
	  litag2.append(span5);
	  var span6=document.createElement("span");
	  span6.innerText=dressDetails1.price;
	  litag2.append(span6);
	  ultag.append(litag2);
	  var litag3=document.createElement("li");
	  var span7=document.createElement("span");
	  span7.innerHTML='Vendor   :';
	  litag3.append(span7);
	  var span8=document.createElement("span");
	  span8.innerText=dressDetails1.vendor;
	  litag3.append(span8);
	  ultag.append(litag3);
	  var litag4=document.createElement("li");
	  var span9=document.createElement("span");
	  span9.innerHTML='Manufacturer  :';
	  litag4.append(span9);
	  var span10=document.createElement("span");
	  span10.innerText=dressDetails1.Manufacturer;
	  litag4.append(span10);
	  ultag.append(litag4);
	  var litag5=document.createElement("li");
	  var span11=document.createElement("span");
	  span11.innerHTML='Instock :';
	  litag5.append(span11);
	  var span12=document.createElement("span");
	  span12.innerText=dressDetails1.instock;
	  litag5.append(span12);
	  ultag.append(litag5);
	  var litag6=document.createElement("li");
	  var span13=document.createElement("span");
	  span13.innerHTML='color :';
	  litag6.append(span13);
	  var span14=document.createElement("span");
	  span14.innerText=dressDetails1.color;
	  litag6.append(span14);
	  ultag.append(litag6);
	  var litag7=document.createElement("li");
	  var span15=document.createElement("span");
	  span15.innerHTML='Size :';
	  litag7.append(span15);
	  var span16=document.createElement("span");
	  span16.innerText=dressDetails1.size;
	  litag7.append(span16);
	  ultag.append(litag7);
	  var litag8=document.createElement("li");
	  var span17=document.createElement("span");
	  span17.innerHTML='Discription :';
	  litag8.append(span17);
	  var span18=document.createElement("span");
	  span18.innerText=dressDetails1.discription;
	  litag8.append(span18);
	  ultag.append(litag8);
	  document.querySelector("#pblock6").append(ultag);
    }

	document.querySelector("#abc2").onclick=myData3;
     function myData3(){
		$("#page5").show();	
		$("#page4").hide();	
      var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize')
	  img.setAttribute('src','./images/photo3.jpg');
	  ultag.append(img);

	 document.querySelector("#pblock").append(ultag);
	 var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock1');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo3.jpg');
	  ultag.append(img);
	  document.querySelector("#pblock1").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock2');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo3.jpg');
	  ultag.append(img);
	  document.querySelector("#pblock2").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock3');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo3.jpg');
	  ultag.append(img);
	  document.querySelector("#pblock3").append(ultag);
     //dynamic rendering of data

	 var ultag=document.createElement("ul");
	  ultag.setAttribute("id",'space');
	  var litag=document.createElement("li");
	  var span1=document.createElement("span");
	  span1.innerHTML='product Name :';
	  litag.append(span1);
	  var span2=document.createElement("span");
	  span2.innerText=dressDetails1.ProductName;
	  litag.append(span2);
	  ultag.append(litag);
	
	  var litag1=document.createElement("li");
	  var span3=document.createElement("span");
	  span3.innerHTML=' categiory   :';
	  litag1.append(span3);
	  var span4=document.createElement("span");
	  span4.innerText=dressDetails1.categiory;
	  litag1.append(span4);
	  ultag.append(litag1);

	  var litag2=document.createElement("li");
	  var span5=document.createElement("span");
	  span5.innerHTML=' price  :';
	  litag2.append(span5);
	  var span6=document.createElement("span");
	  span6.innerText=dressDetails1.price;
	  litag2.append(span6);
	  ultag.append(litag2);
	  var litag3=document.createElement("li");
	  var span7=document.createElement("span");
	  span7.innerHTML='Vendor   :';
	  litag3.append(span7);
	  var span8=document.createElement("span");
	  span8.innerText=dressDetails1.vendor;
	  litag3.append(span8);
	  ultag.append(litag3);
	  var litag4=document.createElement("li");
	  var span9=document.createElement("span");
	  span9.innerHTML='Manufacturer  :';
	  litag4.append(span9);
	  var span10=document.createElement("span");
	  span10.innerText=dressDetails1.Manufacturer;
	  litag4.append(span10);
	  ultag.append(litag4);
	  var litag5=document.createElement("li");
	  var span11=document.createElement("span");
	  span11.innerHTML='Instock :';
	  litag5.append(span11);
	  var span12=document.createElement("span");
	  span12.innerText=dressDetails1.instock;
	  litag5.append(span12);
	  ultag.append(litag5);
	  var litag6=document.createElement("li");
	  var span13=document.createElement("span");
	  span13.innerHTML='color :';
	  litag6.append(span13);
	  var span14=document.createElement("span");
	  span14.innerText=dressDetails1.color;
	  litag6.append(span14);
	  ultag.append(litag6);
	  var litag7=document.createElement("li");
	  var span15=document.createElement("span");
	  span15.innerHTML='Size :';
	  litag7.append(span15);
	  var span16=document.createElement("span");
	  span16.innerText=dressDetails1.size;
	  litag7.append(span16);
	  ultag.append(litag7);
	  var litag8=document.createElement("li");
	  var span17=document.createElement("span");
	  span17.innerHTML='Discription :';
	  litag8.append(span17);
	  var span18=document.createElement("span");
	  span18.innerText=dressDetails1.discription;
	  litag8.append(span18);
	  ultag.append(litag8);
	  document.querySelector("#pblock6").append(ultag);

    }

	document.querySelector("#abc3").onclick=myData4;
     function myData4(){
		$("#page5").show();	
		$("#page4").hide();	
      var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize')
	  img.setAttribute('src','./images/photo10.jfif');
	  ultag.append(img);

	 document.querySelector("#pblock").append(ultag);
	 var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock1');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo10.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock1").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock2');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo10.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock2").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock3');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo10.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock3").append(ultag);

	  //dynamic rendering of data
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("id",'space');
	  var litag=document.createElement("li");
	  var span1=document.createElement("span");
	  span1.innerHTML='product Name :';
	  litag.append(span1);
	  var span2=document.createElement("span");
	  span2.innerText=dressDetails1.ProductName;
	  litag.append(span2);
	  ultag.append(litag);
	
	  var litag1=document.createElement("li");
	  var span3=document.createElement("span");
	  span3.innerHTML=' categiory   :';
	  litag1.append(span3);
	  var span4=document.createElement("span");
	  span4.innerText=dressDetails1.categiory;
	  litag1.append(span4);
	  ultag.append(litag1);

	  var litag2=document.createElement("li");
	  var span5=document.createElement("span");
	  span5.innerHTML=' price  :';
	  litag2.append(span5);
	  var span6=document.createElement("span");
	  span6.innerText=dressDetails1.price;
	  litag2.append(span6);
	  ultag.append(litag2);
	  var litag3=document.createElement("li");
	  var span7=document.createElement("span");
	  span7.innerHTML='Vendor   :';
	  litag3.append(span7);
	  var span8=document.createElement("span");
	  span8.innerText=dressDetails1.vendor;
	  litag3.append(span8);
	  ultag.append(litag3);
	  var litag4=document.createElement("li");
	  var span9=document.createElement("span");
	  span9.innerHTML='Manufacturer  :';
	  litag4.append(span9);
	  var span10=document.createElement("span");
	  span10.innerText=dressDetails1.Manufacturer;
	  litag4.append(span10);
	  ultag.append(litag4);
	  var litag5=document.createElement("li");
	  var span11=document.createElement("span");
	  span11.innerHTML='Instock :';
	  litag5.append(span11);
	  var span12=document.createElement("span");
	  span12.innerText=dressDetails1.instock;
	  litag5.append(span12);
	  ultag.append(litag5);
	  var litag6=document.createElement("li");
	  var span13=document.createElement("span");
	  span13.innerHTML='color :';
	  litag6.append(span13);
	  var span14=document.createElement("span");
	  span14.innerText=dressDetails1.color;
	  litag6.append(span14);
	  ultag.append(litag6);
	  var litag7=document.createElement("li");
	  var span15=document.createElement("span");
	  span15.innerHTML='Size :';
	  litag7.append(span15);
	  var span16=document.createElement("span");
	  span16.innerText=dressDetails1.size;
	  litag7.append(span16);
	  ultag.append(litag7);
	  var litag8=document.createElement("li");
	  var span17=document.createElement("span");
	  span17.innerHTML='Discription :';
	  litag8.append(span17);
	  var span18=document.createElement("span");
	  span18.innerText=dressDetails1.discription;
	  litag8.append(span18);
	  ultag.append(litag8);
	  document.querySelector("#pblock6").append(ultag);
    }

	document.querySelector("#abc4").onclick=myData5;
     function myData5(){
		$("#page5").show();	
		$("#page4").hide();	
      var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize')
	  img.setAttribute('src','./images/photo11.jfif');
	  ultag.append(img);

	 document.querySelector("#pblock").append(ultag);
	 var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock1');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo11.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock1").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock2');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo11.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock2").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock3');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo11.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock3").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("id",'space');
	  var litag=document.createElement("li");
	  var span1=document.createElement("span");
	  span1.innerHTML='product Name :';
	  litag.append(span1);
	  var span2=document.createElement("span");
	  span2.innerText=dressDetails1.ProductName;
	  litag.append(span2);
	  ultag.append(litag);
	
	  var litag1=document.createElement("li");
	  var span3=document.createElement("span");
	  span3.innerHTML=' categiory   :';
	  litag1.append(span3);
	  var span4=document.createElement("span");
	  span4.innerText=dressDetails1.categiory;
	  litag1.append(span4);
	  ultag.append(litag1);

	  var litag2=document.createElement("li");
	  var span5=document.createElement("span");
	  span5.innerHTML=' price  :';
	  litag2.append(span5);
	  var span6=document.createElement("span");
	  span6.innerText=dressDetails1.price;
	  litag2.append(span6);
	  ultag.append(litag2);
	  var litag3=document.createElement("li");
	  var span7=document.createElement("span");
	  span7.innerHTML='Vendor   :';
	  litag3.append(span7);
	  var span8=document.createElement("span");
	  span8.innerText=dressDetails1.vendor;
	  litag3.append(span8);
	  ultag.append(litag3);
	  var litag4=document.createElement("li");
	  var span9=document.createElement("span");
	  span9.innerHTML='Manufacturer  :';
	  litag4.append(span9);
	  var span10=document.createElement("span");
	  span10.innerText=dressDetails1.Manufacturer;
	  litag4.append(span10);
	  ultag.append(litag4);
	  var litag5=document.createElement("li");
	  var span11=document.createElement("span");
	  span11.innerHTML='Instock :';
	  litag5.append(span11);
	  var span12=document.createElement("span");
	  span12.innerText=dressDetails1.instock;
	  litag5.append(span12);
	  ultag.append(litag5);
	  var litag6=document.createElement("li");
	  var span13=document.createElement("span");
	  span13.innerHTML='color :';
	  litag6.append(span13);
	  var span14=document.createElement("span");
	  span14.innerText=dressDetails1.color;
	  litag6.append(span14);
	  ultag.append(litag6);
	  var litag7=document.createElement("li");
	  var span15=document.createElement("span");
	  span15.innerHTML='Size :';
	  litag7.append(span15);
	  var span16=document.createElement("span");
	  span16.innerText=dressDetails1.size;
	  litag7.append(span16);
	  ultag.append(litag7);
	  var litag8=document.createElement("li");
	  var span17=document.createElement("span");
	  span17.innerHTML='Discription :';
	  litag8.append(span17);
	  var span18=document.createElement("span");
	  span18.innerText=dressDetails1.discription;
	  litag8.append(span18);
	  ultag.append(litag8);
	  document.querySelector("#pblock6").append(ultag);
    }

	document.querySelector("#abc5").onclick=myData6;
     function myData6(){
		$("#page5").show();	
		$("#page4").hide();	
      var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize')
	  img.setAttribute('src','./images/photo12.jfif');
	  ultag.append(img);

	 document.querySelector("#pblock").append(ultag);
	 var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock1');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo12.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock1").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock2');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo12.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock2").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock3');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo12.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock3").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("id",'space');
	  var litag=document.createElement("li");
	  var span1=document.createElement("span");
	  span1.innerHTML='product Name :';
	  litag.append(span1);
	  var span2=document.createElement("span");
	  span2.innerText=dressDetails1.ProductName;
	  litag.append(span2);
	  ultag.append(litag);
	
	  var litag1=document.createElement("li");
	  var span3=document.createElement("span");
	  span3.innerHTML=' categiory   :';
	  litag1.append(span3);
	  var span4=document.createElement("span");
	  span4.innerText=dressDetails1.categiory;
	  litag1.append(span4);
	  ultag.append(litag1);

	  var litag2=document.createElement("li");
	  var span5=document.createElement("span");
	  span5.innerHTML=' price  :';
	  litag2.append(span5);
	  var span6=document.createElement("span");
	  span6.innerText=dressDetails1.price;
	  litag2.append(span6);
	  ultag.append(litag2);
	  var litag3=document.createElement("li");
	  var span7=document.createElement("span");
	  span7.innerHTML='Vendor   :';
	  litag3.append(span7);
	  var span8=document.createElement("span");
	  span8.innerText=dressDetails1.vendor;
	  litag3.append(span8);
	  ultag.append(litag3);
	  var litag4=document.createElement("li");
	  var span9=document.createElement("span");
	  span9.innerHTML='Manufacturer  :';
	  litag4.append(span9);
	  var span10=document.createElement("span");
	  span10.innerText=dressDetails1.Manufacturer;
	  litag4.append(span10);
	  ultag.append(litag4);
	  var litag5=document.createElement("li");
	  var span11=document.createElement("span");
	  span11.innerHTML='Instock :';
	  litag5.append(span11);
	  var span12=document.createElement("span");
	  span12.innerText=dressDetails1.instock;
	  litag5.append(span12);
	  ultag.append(litag5);
	  var litag6=document.createElement("li");
	  var span13=document.createElement("span");
	  span13.innerHTML='color :';
	  litag6.append(span13);
	  var span14=document.createElement("span");
	  span14.innerText=dressDetails1.color;
	  litag6.append(span14);
	  ultag.append(litag6);
	  var litag7=document.createElement("li");
	  var span15=document.createElement("span");
	  span15.innerHTML='Size :';
	  litag7.append(span15);
	  var span16=document.createElement("span");
	  span16.innerText=dressDetails1.size;
	  litag7.append(span16);
	  ultag.append(litag7);
	  var litag8=document.createElement("li");
	  var span17=document.createElement("span");
	  span17.innerHTML='Discription :';
	  litag8.append(span17);
	  var span18=document.createElement("span");
	  span18.innerText=dressDetails1.discription;
	  litag8.append(span18);
	  ultag.append(litag8);
	  document.querySelector("#pblock6").append(ultag);
    }
	document.querySelector("#addToCart").onclick=viewCartPage;
}


viewMensProduct=()=>{
	$(".block").hide();
    $("#rblock3").show();
	$("#rblock4").hide();
	showMenCloths();
}

womenCloths=()=>{
	$(".block").hide();
	$("#rblock3").hide();
	$("#rblock4").show();
	showWomenCloths();
}
function showWomenCloths(){
var ultag5=document.createElement("ul");
	ultag5.setAttribute("class",'rblock4');
	var img=document.createElement("img");
	img.setAttribute("class",'photos');
	img.setAttribute("id",'dress1')
	img.setAttribute('src','./images/photo4.jfif');
	ultag5.append(img);
	var img1=document.createElement("img");
	img1.setAttribute("class",'photos');
	img1.setAttribute("id",'dress2')
	img1.setAttribute('src','./images/photo5.jfif');
	ultag5.append(img1);
	var img2=document.createElement("img");
	img2.setAttribute("class",'photos');
	img2.setAttribute("id",'dress3')
	img2.setAttribute('src','./images/photo6.jpg');
	ultag5.append(img2);
	var img3=document.createElement("img");
	img3.setAttribute("class",'photos');
	img3.setAttribute("id",'dress4')
	img3.setAttribute('src','./images/photo16.jfif');
	ultag5.append(img3);
	var img4=document.createElement("img");
	img4.setAttribute("class",'photos');
	img4.setAttribute("id",'dress5')
	img4.setAttribute('src','./images/photo17.jfif');
	ultag5.append(img4);
	var img5=document.createElement("img");
	img5.setAttribute("class",'photos');
	img5.setAttribute("id",'dress6')
	img5.setAttribute('src','./images/photo18.jfif');
	ultag5.append(img5);
	console.log(ultag5)
	document.querySelector("#rblock4").append(ultag5);
//
	document.querySelector("#dress1").onclick=myDress1;
     function myDress1(){
		$("#page5").show();	
		$("#page4").hide();	
      var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize')
	  img.setAttribute('src','./images/photo4.jfif');
	  ultag.append(img);

	 document.querySelector("#pblock").append(ultag);
	 var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock1');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo4.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock1").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock2');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo4.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock2").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock3');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo4.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock3").append(ultag);
	  // product data in product info page
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("id",'space');
	  var litag=document.createElement("li");
	  var span1=document.createElement("span");
	  span1.innerHTML='product Name :';
	  litag.append(span1);
	  var span2=document.createElement("span");
	  span2.innerText= womenDresses.productName;
	  litag.append(span2);
	  ultag.append(litag);
	
	  var litag1=document.createElement("li");
	  var span3=document.createElement("span");
	  span3.innerHTML=' categiory   :';
	  litag1.append(span3);
	  var span4=document.createElement("span");
	  span4.innerText=womenDresses.cateogiry;
	  litag1.append(span4);
	  ultag.append(litag1);

	  var litag2=document.createElement("li");
	  var span5=document.createElement("span");
	  span5.innerHTML=' price  :';
	  litag2.append(span5);
	  var span6=document.createElement("span");
	  span6.innerText=womenDresses.price;
	  litag2.append(span6);
	  ultag.append(litag2);
	  var litag3=document.createElement("li");
	  var span7=document.createElement("span");
	  span7.innerHTML='Vendor   :';
	  litag3.append(span7);
	  var span8=document.createElement("span");
	  span8.innerText=womenDresses.vendor;
	  litag3.append(span8);
	  ultag.append(litag3);
	  var litag4=document.createElement("li");
	  var span9=document.createElement("span");
	  span9.innerHTML='Manufacturer  :';
	  litag4.append(span9);
	  var span10=document.createElement("span");
	  span10.innerText=womenDresses.Manufacturer;
	  litag4.append(span10);
	  ultag.append(litag4);
	  var litag5=document.createElement("li");
	  var span11=document.createElement("span");
	  span11.innerHTML='Instock :';
	  litag5.append(span11);
	  var span12=document.createElement("span");
	  span12.innerText=womenDresses.instock;
	  litag5.append(span12);
	  ultag.append(litag5);
	  var litag6=document.createElement("li");
	  var span13=document.createElement("span");
	  span13.innerHTML='color :';
	  litag6.append(span13);
	  var span14=document.createElement("span");
	  span14.innerText=womenDresses.color;
	  litag6.append(span14);
	  ultag.append(litag6);
	  var litag7=document.createElement("li");
	  var span15=document.createElement("span");
	  span15.innerHTML='Size :';
	  litag7.append(span15);
	  var span16=document.createElement("span");
	  span16.innerText=womenDresses.size;
	  litag7.append(span16);
	  ultag.append(litag7);
	  var litag8=document.createElement("li");
	  var span17=document.createElement("span");
	  span17.innerHTML='Discription :';
	  litag8.append(span17);
	  var span18=document.createElement("span");
	  span18.innerText=womenDresses.discription;
	  litag8.append(span18);
	  ultag.append(litag8);
	  
	  document.querySelector("#pblock6").append(ultag);
    }
	document.querySelector("#dress2").onclick=myDress2;
     function myDress2(){
		$("#page5").show();	
		$("#page4").hide();	
      var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize')
	  img.setAttribute('src','./images/photo5.jfif');
	  ultag.append(img);
//
	 document.querySelector("#pblock").append(ultag);
	 var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock1');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo5.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock1").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock2');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo5.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock2").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock3');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo5.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock3").append(ultag);
	   // product data in product info page
	   var ultag=document.createElement("ul");
	   ultag.setAttribute("id",'space');
	   var litag=document.createElement("li");
	   var span1=document.createElement("span");
	   span1.innerHTML='product Name :';
	   litag.append(span1);
	   var span2=document.createElement("span");
	   span2.innerText= womenDresses.productName;
	   litag.append(span2);
	   ultag.append(litag);
	 
	   var litag1=document.createElement("li");
	   var span3=document.createElement("span");
	   span3.innerHTML=' categiory   :';
	   litag1.append(span3);
	   var span4=document.createElement("span");
	   span4.innerText=womenDresses.cateogiry;
	   litag1.append(span4);
	   ultag.append(litag1);
 
	   var litag2=document.createElement("li");
	   var span5=document.createElement("span");
	   span5.innerHTML=' price  :';
	   litag2.append(span5);
	   var span6=document.createElement("span");
	   span6.innerText=womenDresses.price;
	   litag2.append(span6);
	   ultag.append(litag2);
	   var litag3=document.createElement("li");
	   var span7=document.createElement("span");
	   span7.innerHTML='Vendor   :';
	   litag3.append(span7);
	   var span8=document.createElement("span");
	   span8.innerText=womenDresses.vendor;
	   litag3.append(span8);
	   ultag.append(litag3);
	   var litag4=document.createElement("li");
	   var span9=document.createElement("span");
	   span9.innerHTML='Manufacturer  :';
	   litag4.append(span9);
	   var span10=document.createElement("span");
	   span10.innerText=womenDresses.Manufacturer;
	   litag4.append(span10);
	   ultag.append(litag4);
	   var litag5=document.createElement("li");
	   var span11=document.createElement("span");
	   span11.innerHTML='Instock :';
	   litag5.append(span11);
	   var span12=document.createElement("span");
	   span12.innerText=womenDresses.instock;
	   litag5.append(span12);
	   ultag.append(litag5);
	   var litag6=document.createElement("li");
	   var span13=document.createElement("span");
	   span13.innerHTML='color :';
	   litag6.append(span13);
	   var span14=document.createElement("span");
	   span14.innerText=womenDresses.color;
	   litag6.append(span14);
	   ultag.append(litag6);
	   var litag7=document.createElement("li");
	   var span15=document.createElement("span");
	   span15.innerHTML='Size :';
	   litag7.append(span15);
	   var span16=document.createElement("span");
	   span16.innerText=womenDresses.size;
	   litag7.append(span16);
	   ultag.append(litag7);
	   var litag8=document.createElement("li");
	   var span17=document.createElement("span");
	   span17.innerHTML='Discription :';
	   litag8.append(span17);
	   var span18=document.createElement("span");
	   span18.innerText=womenDresses.discription;
	   litag8.append(span18);
	   ultag.append(litag8);
	   
	   document.querySelector("#pblock6").append(ultag);
    }
	document.querySelector("#dress3").onclick=myDress3;
     function myDress3(){
		$("#page5").show();	
		$("#page4").hide();	
      var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize')
	  img.setAttribute('src','./images/photo6.jpg');
	  ultag.append(img);

	 document.querySelector("#pblock").append(ultag);
	 var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock1');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo6.jpg');
	  ultag.append(img);
	  document.querySelector("#pblock1").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock2');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo6.jpg');
	  ultag.append(img);
	  document.querySelector("#pblock2").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock3');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo6.jpg');
	  ultag.append(img);
	  document.querySelector("#pblock3").append(ultag);
	   // product data in product info page
	   var ultag=document.createElement("ul");
	   ultag.setAttribute("id",'space');
	   var litag=document.createElement("li");
	   var span1=document.createElement("span");
	   span1.innerHTML='product Name :';
	   litag.append(span1);
	   var span2=document.createElement("span");
	   span2.innerText= womenDresses.productName;
	   litag.append(span2);
	   ultag.append(litag);
	 
	   var litag1=document.createElement("li");
	   var span3=document.createElement("span");
	   span3.innerHTML=' categiory   :';
	   litag1.append(span3);
	   var span4=document.createElement("span");
	   span4.innerText=womenDresses.cateogiry;
	   litag1.append(span4);
	   ultag.append(litag1);
 
	   var litag2=document.createElement("li");
	   var span5=document.createElement("span");
	   span5.innerHTML=' price  :';
	   litag2.append(span5);
	   var span6=document.createElement("span");
	   span6.innerText=womenDresses.price;
	   litag2.append(span6);
	   ultag.append(litag2);
	   var litag3=document.createElement("li");
	   var span7=document.createElement("span");
	   span7.innerHTML='Vendor   :';
	   litag3.append(span7);
	   var span8=document.createElement("span");
	   span8.innerText=womenDresses.vendor;
	   litag3.append(span8);
	   ultag.append(litag3);
	   var litag4=document.createElement("li");
	   var span9=document.createElement("span");
	   span9.innerHTML='Manufacturer  :';
	   litag4.append(span9);
	   var span10=document.createElement("span");
	   span10.innerText=womenDresses.Manufacturer;
	   litag4.append(span10);
	   ultag.append(litag4);
	   var litag5=document.createElement("li");
	   var span11=document.createElement("span");
	   span11.innerHTML='Instock :';
	   litag5.append(span11);
	   var span12=document.createElement("span");
	   span12.innerText=womenDresses.instock;
	   litag5.append(span12);
	   ultag.append(litag5);
	   var litag6=document.createElement("li");
	   var span13=document.createElement("span");
	   span13.innerHTML='color :';
	   litag6.append(span13);
	   var span14=document.createElement("span");
	   span14.innerText=womenDresses.color;
	   litag6.append(span14);
	   ultag.append(litag6);
	   var litag7=document.createElement("li");
	   var span15=document.createElement("span");
	   span15.innerHTML='Size :';
	   litag7.append(span15);
	   var span16=document.createElement("span");
	   span16.innerText=womenDresses.size;
	   litag7.append(span16);
	   ultag.append(litag7);
	   var litag8=document.createElement("li");
	   var span17=document.createElement("span");
	   span17.innerHTML='Discription :';
	   litag8.append(span17);
	   var span18=document.createElement("span");
	   span18.innerText=womenDresses.discription;
	   litag8.append(span18);
	   ultag.append(litag8);
	   
	   document.querySelector("#pblock6").append(ultag);
    }
	document.querySelector("#dress4").onclick=myDress4;
     function myDress4(){
		$("#page5").show();	
		$("#page4").hide();	
      var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize')
	  img.setAttribute('src','./images/photo16.jfif');
	  ultag.append(img);

	 document.querySelector("#pblock").append(ultag);
	 var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock1');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo16.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock1").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock2');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo16.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock2").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock3');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo16.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock3").append(ultag);
	   // product data in product info page
	   var ultag=document.createElement("ul");
	   ultag.setAttribute("id",'space');
	   var litag=document.createElement("li");
	   var span1=document.createElement("span");
	   span1.innerHTML='product Name :';
	   litag.append(span1);
	   var span2=document.createElement("span");
	   span2.innerText= womenDresses.productName;
	   litag.append(span2);
	   ultag.append(litag);
	 
	   var litag1=document.createElement("li");
	   var span3=document.createElement("span");
	   span3.innerHTML=' categiory   :';
	   litag1.append(span3);
	   var span4=document.createElement("span");
	   span4.innerText=womenDresses.cateogiry;
	   litag1.append(span4);
	   ultag.append(litag1);
 
	   var litag2=document.createElement("li");
	   var span5=document.createElement("span");
	   span5.innerHTML=' price  :';
	   litag2.append(span5);
	   var span6=document.createElement("span");
	   span6.innerText=womenDresses.price;
	   litag2.append(span6);
	   ultag.append(litag2);
	   var litag3=document.createElement("li");
	   var span7=document.createElement("span");
	   span7.innerHTML='Vendor   :';
	   litag3.append(span7);
	   var span8=document.createElement("span");
	   span8.innerText=womenDresses.vendor;
	   litag3.append(span8);
	   ultag.append(litag3);
	   var litag4=document.createElement("li");
	   var span9=document.createElement("span");
	   span9.innerHTML='Manufacturer  :';
	   litag4.append(span9);
	   var span10=document.createElement("span");
	   span10.innerText=womenDresses.Manufacturer;
	   litag4.append(span10);
	   ultag.append(litag4);
	   var litag5=document.createElement("li");
	   var span11=document.createElement("span");
	   span11.innerHTML='Instock :';
	   litag5.append(span11);
	   var span12=document.createElement("span");
	   span12.innerText=womenDresses.instock;
	   litag5.append(span12);
	   ultag.append(litag5);
	   var litag6=document.createElement("li");
	   var span13=document.createElement("span");
	   span13.innerHTML='color :';
	   litag6.append(span13);
	   var span14=document.createElement("span");
	   span14.innerText=womenDresses.color;
	   litag6.append(span14);
	   ultag.append(litag6);
	   var litag7=document.createElement("li");
	   var span15=document.createElement("span");
	   span15.innerHTML='Size :';
	   litag7.append(span15);
	   var span16=document.createElement("span");
	   span16.innerText=womenDresses.size;
	   litag7.append(span16);
	   ultag.append(litag7);
	   var litag8=document.createElement("li");
	   var span17=document.createElement("span");
	   span17.innerHTML='Discription :';
	   litag8.append(span17);
	   var span18=document.createElement("span");
	   span18.innerText=womenDresses.discription;
	   litag8.append(span18);
	   ultag.append(litag8);
	   
	   document.querySelector("#pblock6").append(ultag);
    }

	document.querySelector("#dress5").onclick=myDress5;
     function myDress5(){
		$("#page5").show();
		$("#page4").hide();		
      var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize')
	  img.setAttribute('src','./images/photo17.jfif');
	  ultag.append(img);

	 document.querySelector("#pblock").append(ultag);
	 var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock1');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo17.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock1").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock2');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo17.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock2").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock3');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo17.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock3").append(ultag);
	   // product data in product info page
	   var ultag=document.createElement("ul");
	   ultag.setAttribute("id",'space');
	   var litag=document.createElement("li");
	   var span1=document.createElement("span");
	   span1.innerHTML='product Name :';
	   litag.append(span1);
	   var span2=document.createElement("span");
	   span2.innerText= womenDresses.productName;
	   litag.append(span2);
	   ultag.append(litag);
	 
	   var litag1=document.createElement("li");
	   var span3=document.createElement("span");
	   span3.innerHTML=' categiory   :';
	   litag1.append(span3);
	   var span4=document.createElement("span");
	   span4.innerText=womenDresses.cateogiry;
	   litag1.append(span4);
	   ultag.append(litag1);
 
	   var litag2=document.createElement("li");
	   var span5=document.createElement("span");
	   span5.innerHTML=' price  :';
	   litag2.append(span5);
	   var span6=document.createElement("span");
	   span6.innerText=womenDresses.price;
	   litag2.append(span6);
	   ultag.append(litag2);
	   var litag3=document.createElement("li");
	   var span7=document.createElement("span");
	   span7.innerHTML='Vendor   :';
	   litag3.append(span7);
	   var span8=document.createElement("span");
	   span8.innerText=womenDresses.vendor;
	   litag3.append(span8);
	   ultag.append(litag3);
	   var litag4=document.createElement("li");
	   var span9=document.createElement("span");
	   span9.innerHTML='Manufacturer  :';
	   litag4.append(span9);
	   var span10=document.createElement("span");
	   span10.innerText=womenDresses.Manufacturer;
	   litag4.append(span10);
	   ultag.append(litag4);
	   var litag5=document.createElement("li");
	   var span11=document.createElement("span");
	   span11.innerHTML='Instock :';
	   litag5.append(span11);
	   var span12=document.createElement("span");
	   span12.innerText=womenDresses.instock;
	   litag5.append(span12);
	   ultag.append(litag5);
	   var litag6=document.createElement("li");
	   var span13=document.createElement("span");
	   span13.innerHTML='color :';
	   litag6.append(span13);
	   var span14=document.createElement("span");
	   span14.innerText=womenDresses.color;
	   litag6.append(span14);
	   ultag.append(litag6);
	   var litag7=document.createElement("li");
	   var span15=document.createElement("span");
	   span15.innerHTML='Size :';
	   litag7.append(span15);
	   var span16=document.createElement("span");
	   span16.innerText=womenDresses.size;
	   litag7.append(span16);
	   ultag.append(litag7);
	   var litag8=document.createElement("li");
	   var span17=document.createElement("span");
	   span17.innerHTML='Discription :';
	   litag8.append(span17);
	   var span18=document.createElement("span");
	   span18.innerText=womenDresses.discription;
	   litag8.append(span18);
	   ultag.append(litag8);
	   
	   document.querySelector("#pblock6").append(ultag);
    }
	document.querySelector("#dress6").onclick=myDress6;
     function myDress6(){
		$("#page5").show();	
		$("#page4").hide();	
      var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize')
	  img.setAttribute('src','./images/photo18.jfif');
	  ultag.append(img);
//
	 document.querySelector("#pblock").append(ultag);
	 var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock1');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo18.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock1").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock2');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo18.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock2").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock3');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo18.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock3").append(ultag);
	   // product data in product info page
	   var ultag=document.createElement("ul");
	   ultag.setAttribute("id",'space');
	   var litag=document.createElement("li");
	   var span1=document.createElement("span");
	   span1.innerHTML='product Name :';
	   litag.append(span1);
	   var span2=document.createElement("span");
	   span2.innerText= womenDresses.productName;
	   litag.append(span2);
	   ultag.append(litag);
	 
	   var litag1=document.createElement("li");
	   var span3=document.createElement("span");
	   span3.innerHTML=' categiory   :';
	   litag1.append(span3);
	   var span4=document.createElement("span");
	   span4.innerText=womenDresses.cateogiry;
	   litag1.append(span4);
	   ultag.append(litag1);
 
	   var litag2=document.createElement("li");
	   var span5=document.createElement("span");
	   span5.innerHTML=' price  :';
	   litag2.append(span5);
	   var span6=document.createElement("span");
	   span6.innerText=womenDresses.price;
	   litag2.append(span6);
	   ultag.append(litag2);
	   var litag3=document.createElement("li");
	   var span7=document.createElement("span");
	   span7.innerHTML='Vendor   :';
	   litag3.append(span7);
	   var span8=document.createElement("span");
	   span8.innerText=womenDresses.vendor;
	   litag3.append(span8);
	   ultag.append(litag3);
	   var litag4=document.createElement("li");
	   var span9=document.createElement("span");
	   span9.innerHTML='Manufacturer  :';
	   litag4.append(span9);
	   var span10=document.createElement("span");
	   span10.innerText=womenDresses.Manufacturer;
	   litag4.append(span10);
	   ultag.append(litag4);
	   var litag5=document.createElement("li");
	   var span11=document.createElement("span");
	   span11.innerHTML='Instock :';
	   litag5.append(span11);
	   var span12=document.createElement("span");
	   span12.innerText=womenDresses.instock;
	   litag5.append(span12);
	   ultag.append(litag5);
	   var litag6=document.createElement("li");
	   var span13=document.createElement("span");
	   span13.innerHTML='color :';
	   litag6.append(span13);
	   var span14=document.createElement("span");
	   span14.innerText=womenDresses.color;
	   litag6.append(span14);
	   ultag.append(litag6);
	   var litag7=document.createElement("li");
	   var span15=document.createElement("span");
	   span15.innerHTML='Size :';
	   litag7.append(span15);
	   var span16=document.createElement("span");
	   span16.innerText=womenDresses.size;
	   litag7.append(span16);
	   ultag.append(litag7);
	   var litag8=document.createElement("li");
	   var span17=document.createElement("span");
	   span17.innerHTML='Discription :';
	   litag8.append(span17);
	   var span18=document.createElement("span");
	   span18.innerText=womenDresses.discription;
	   litag8.append(span18);
	   ultag.append(litag8);
	   
	   document.querySelector("#pblock6").append(ultag);
    }
}
viewWomenProduct=()=>{
	$(".block").hide();
    $("#rblock3").hide();
	$("#rblock4").show();
	showWomenCloths();
}

electronics=()=>{
	$(".block").hide();
	$("#rblock3").hide();
	$("#rblock4").hide();
	$("#rblock5").show();
	showElectronicItem();
}
function showElectronicItem(){
var ultag5=document.createElement("ul");
	ultag5.setAttribute("class",'rblock5');
	var img=document.createElement("img");
	img.setAttribute("class",'photos');
	img.setAttribute("id",'abcd')
	img.setAttribute('src','./images/photo19.jfif');
	ultag5.append(img);
	var img1=document.createElement("img");
	img1.setAttribute("class",'photos');
	img1.setAttribute("id",'abcd1')
	img1.setAttribute('src','./images/photo25.jpg');
	ultag5.append(img1);
	var img2=document.createElement("img");
	img2.setAttribute("class",'photos');
	img2.setAttribute("id",'abcd2')
	img2.setAttribute('src','./images/photo21.jfif');
	ultag5.append(img2);
	var img3=document.createElement("img");
	img3.setAttribute("class",'photos');
	img3.setAttribute("id",'abcd3')
	img3.setAttribute('src','./images/photo22.jfif');
	ultag5.append(img3);
	var img4=document.createElement("img");
	img4.setAttribute("class",'photos');
	img4.setAttribute("id",'abcd4')
	img4.setAttribute('src','./images/photo23.jfif');
	ultag5.append(img4);
	var img5=document.createElement("img");
	img5.setAttribute("class",'photos');
	img5.setAttribute("id",'abcd5')
	img5.setAttribute('src','./images/photo24.jfif');
	ultag5.append(img5);
	console.log(ultag5)
	document.querySelector("#rblock5").append(ultag5);

	//onclick operation
	document.querySelector("#abcd").onclick=myMachine1;
	 function myMachine1(){
	   $("#page5").show();
	   $("#page4").hide();		
	  
	 var ultag=document.createElement("ul");
	 ultag.setAttribute("class",'pblock');
	 var img=document.createElement("img");
	 img.setAttribute("class",'imgSize')
	 img.setAttribute('src','./images/photo19.jfif');
	 ultag.append(img); 
	 document.querySelector("#pblock").append(ultag);
	 var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock1');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo19.jfif');
	  ultag.append(img);	
	  document.querySelector("#pblock1").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock2');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo19.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock2").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock3');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo19.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock3").append(ultag);
	  //
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("id",'space');
	  var litag=document.createElement("li");
	  var span1=document.createElement("span");
	  span1.innerHTML='product Name :';
	  litag.append(span1);
	  var span2=document.createElement("span");
	  span2.innerText=electronicItems.productName;
	  litag.append(span2);
	  ultag.append(litag);
	
	  var litag1=document.createElement("li");
	  var span3=document.createElement("span");
	  span3.innerHTML=' categiory   :';
	  litag1.append(span3);
	  var span4=document.createElement("span");
	  span4.innerText=electronicItems.cateogiry;
	  litag1.append(span4);
	  ultag.append(litag1);

	  var litag2=document.createElement("li");
	  var span5=document.createElement("span");
	  span5.innerHTML=' price  :';
	  litag2.append(span5);
	  var span6=document.createElement("span");
	  span6.innerText=electronicItems.price;
	  litag2.append(span6);
	  ultag.append(litag2);
	  var litag3=document.createElement("li");
	  var span7=document.createElement("span");
	  span7.innerHTML='Vendor   :';
	  litag3.append(span7);
	  var span8=document.createElement("span");
	  span8.innerText=electronicItems.vendor;
	  litag3.append(span8);
	  ultag.append(litag3);
	  var litag4=document.createElement("li");
	  var span9=document.createElement("span");
	  span9.innerHTML='Manufacturer  :';
	  litag4.append(span9);
	  var span10=document.createElement("span");
	  span10.innerText=electronicItems.Manufacturer;
	  litag4.append(span10);
	  ultag.append(litag4);
	  var litag5=document.createElement("li");
	  var span11=document.createElement("span");
	  span11.innerHTML='Instock :';
	  litag5.append(span11);
	  var span12=document.createElement("span");
	  span12.innerText=electronicItems.instock;
	  litag5.append(span12);
	  ultag.append(litag5);
	  var litag6=document.createElement("li");
	  var span13=document.createElement("span");
	  span13.innerHTML='color :';
	  litag6.append(span13);
	  var span14=document.createElement("span");
	  span14.innerText=electronicItems.color;
	  litag6.append(span14);
	  ultag.append(litag6);
	  var litag7=document.createElement("li");
	  var span15=document.createElement("span");
	  span15.innerHTML='Capacity :';
	  litag7.append(span15);
	  var span16=document.createElement("span");
	  span16.innerText=electronicItems.capacity;
	  litag7.append(span16);
	  ultag.append(litag7);
	  var litag8=document.createElement("li");
	  var span17=document.createElement("span");
	  span17.innerHTML='Discription :';
	  litag8.append(span17);
	  var span18=document.createElement("span");
	  span18.innerText=electronicItems.discription;
	  litag8.append(span18);
	  ultag.append(litag8);
	  
	  document.querySelector("#pblock6").append(ultag);
    }
	document.querySelector("#abcd1").onclick=myMachine2;
	 function myMachine2(){
	   $("#page5").show();
	   $("#page4").hide();		
	  
	 var ultag=document.createElement("ul");
	 ultag.setAttribute("class",'pblock');
	 var img=document.createElement("img");
	 img.setAttribute("class",'imgSize')
	 img.setAttribute('src','./images/photo25.jpg');
	 ultag.append(img); 
	 document.querySelector("#pblock").append(ultag);
	 var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock1');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo25.jpg');
	  ultag.append(img);	
	  document.querySelector("#pblock1").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock2');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo25.jpg');
	  ultag.append(img);
	  document.querySelector("#pblock2").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock3');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo25.jpg');
	  ultag.append(img);
	  document.querySelector("#pblock3").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("id",'space');
	  var litag=document.createElement("li");
	  var span1=document.createElement("span");
	  span1.innerHTML='product Name :';
	  litag.append(span1);
	  var span2=document.createElement("span");
	  span2.innerText=electronicItems.productName;
	  litag.append(span2);
	  ultag.append(litag);
	
	  var litag1=document.createElement("li");
	  var span3=document.createElement("span");
	  span3.innerHTML=' categiory   :';
	  litag1.append(span3);
	  var span4=document.createElement("span");
	  span4.innerText=electronicItems.cateogiry;
	  litag1.append(span4);
	  ultag.append(litag1);

	  var litag2=document.createElement("li");
	  var span5=document.createElement("span");
	  span5.innerHTML=' price  :';
	  litag2.append(span5);
	  var span6=document.createElement("span");
	  span6.innerText=electronicItems.price;
	  litag2.append(span6);
	  ultag.append(litag2);
	  var litag3=document.createElement("li");
	  var span7=document.createElement("span");
	  span7.innerHTML='Vendor   :';
	  litag3.append(span7);
	  var span8=document.createElement("span");
	  span8.innerText=electronicItems.vendor;
	  litag3.append(span8);
	  ultag.append(litag3);
	  var litag4=document.createElement("li");
	  var span9=document.createElement("span");
	  span9.innerHTML='Manufacturer  :';
	  litag4.append(span9);
	  var span10=document.createElement("span");
	  span10.innerText=electronicItems.Manufacturer;
	  litag4.append(span10);
	  ultag.append(litag4);
	  var litag5=document.createElement("li");
	  var span11=document.createElement("span");
	  span11.innerHTML='Instock :';
	  litag5.append(span11);
	  var span12=document.createElement("span");
	  span12.innerText=electronicItems.instock;
	  litag5.append(span12);
	  ultag.append(litag5);
	  var litag6=document.createElement("li");
	  var span13=document.createElement("span");
	  span13.innerHTML='color :';
	  litag6.append(span13);
	  var span14=document.createElement("span");
	  span14.innerText=electronicItems.color;
	  litag6.append(span14);
	  ultag.append(litag6);
	  var litag7=document.createElement("li");
	  var span15=document.createElement("span");
	  span15.innerHTML='Capacity :';
	  litag7.append(span15);
	  var span16=document.createElement("span");
	  span16.innerText=electronicItems.capacity;
	  litag7.append(span16);
	  ultag.append(litag7);
	  var litag8=document.createElement("li");
	  var span17=document.createElement("span");
	  span17.innerHTML='Discription :';
	  litag8.append(span17);
	  var span18=document.createElement("span");
	  span18.innerText=electronicItems.discription;
	  litag8.append(span18);
	  ultag.append(litag8);
	  
	  document.querySelector("#pblock6").append(ultag);
    }
	document.querySelector("#abcd2").onclick=myMachine3;
	 function myMachine3(){
	   $("#page5").show();
	   $("#page4").hide();		
	  
	 var ultag=document.createElement("ul");
	 ultag.setAttribute("class",'pblock');
	 var img=document.createElement("img");
	 img.setAttribute("class",'imgSize')
	 img.setAttribute('src','./images/photo21.jfif');
	 ultag.append(img); 
	 document.querySelector("#pblock").append(ultag);
	 var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock1');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo21.jfif');
	  ultag.append(img);	
	  document.querySelector("#pblock1").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock2');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo21.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock2").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock3');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo21.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock3").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("id",'space');
	  var litag=document.createElement("li");
	  var span1=document.createElement("span");
	  span1.innerHTML='product Name :';
	  litag.append(span1);
	  var span2=document.createElement("span");
	  span2.innerText=electronicItems.productName;
	  litag.append(span2);
	  ultag.append(litag);
	
	  var litag1=document.createElement("li");
	  var span3=document.createElement("span");
	  span3.innerHTML=' categiory   :';
	  litag1.append(span3);
	  var span4=document.createElement("span");
	  span4.innerText=electronicItems.cateogiry;
	  litag1.append(span4);
	  ultag.append(litag1);

	  var litag2=document.createElement("li");
	  var span5=document.createElement("span");
	  span5.innerHTML=' price  :';
	  litag2.append(span5);
	  var span6=document.createElement("span");
	  span6.innerText=electronicItems.price;
	  litag2.append(span6);
	  ultag.append(litag2);
	  var litag3=document.createElement("li");
	  var span7=document.createElement("span");
	  span7.innerHTML='Vendor   :';
	  litag3.append(span7);
	  var span8=document.createElement("span");
	  span8.innerText=electronicItems.vendor;
	  litag3.append(span8);
	  ultag.append(litag3);
	  var litag4=document.createElement("li");
	  var span9=document.createElement("span");
	  span9.innerHTML='Manufacturer  :';
	  litag4.append(span9);
	  var span10=document.createElement("span");
	  span10.innerText=electronicItems.Manufacturer;
	  litag4.append(span10);
	  ultag.append(litag4);
	  var litag5=document.createElement("li");
	  var span11=document.createElement("span");
	  span11.innerHTML='Instock :';
	  litag5.append(span11);
	  var span12=document.createElement("span");
	  span12.innerText=electronicItems.instock;
	  litag5.append(span12);
	  ultag.append(litag5);
	  var litag6=document.createElement("li");
	  var span13=document.createElement("span");
	  span13.innerHTML='color :';
	  litag6.append(span13);
	  var span14=document.createElement("span");
	  span14.innerText=electronicItems.color;
	  litag6.append(span14);
	  ultag.append(litag6);
	  var litag7=document.createElement("li");
	  var span15=document.createElement("span");
	  span15.innerHTML='Capacity :';
	  litag7.append(span15);
	  var span16=document.createElement("span");
	  span16.innerText=electronicItems.capacity;
	  litag7.append(span16);
	  ultag.append(litag7);
	  var litag8=document.createElement("li");
	  var span17=document.createElement("span");
	  span17.innerHTML='Discription :';
	  litag8.append(span17);
	  var span18=document.createElement("span");
	  span18.innerText=electronicItems.discription;
	  litag8.append(span18);
	  ultag.append(litag8);
	  
	  document.querySelector("#pblock6").append(ultag);
    }
	document.querySelector("#abcd3").onclick=myMachine4;
	 function myMachine4(){
	   $("#page5").show();
	   $("#page4").hide();		
	  
	 var ultag=document.createElement("ul");
	 ultag.setAttribute("class",'pblock');
	 var img=document.createElement("img");
	 img.setAttribute("class",'imgSize')
	 img.setAttribute('src','./images/photo22.jfif');
	 ultag.append(img); 
	 document.querySelector("#pblock").append(ultag);
	 var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock1');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo22.jfif');
	  ultag.append(img);	
	  document.querySelector("#pblock1").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock2');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo22.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock2").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock3');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo22.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock3").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("id",'space');
	  var litag=document.createElement("li");
	  var span1=document.createElement("span");
	  span1.innerHTML='product Name :';
	  litag.append(span1);
	  var span2=document.createElement("span");
	  span2.innerText=electronicItems.productName;
	  litag.append(span2);
	  ultag.append(litag);
	
	  var litag1=document.createElement("li");
	  var span3=document.createElement("span");
	  span3.innerHTML=' categiory   :';
	  litag1.append(span3);
	  var span4=document.createElement("span");
	  span4.innerText=electronicItems.cateogiry;
	  litag1.append(span4);
	  ultag.append(litag1);

	  var litag2=document.createElement("li");
	  var span5=document.createElement("span");
	  span5.innerHTML=' price  :';
	  litag2.append(span5);
	  var span6=document.createElement("span");
	  span6.innerText=electronicItems.price;
	  litag2.append(span6);
	  ultag.append(litag2);
	  var litag3=document.createElement("li");
	  var span7=document.createElement("span");
	  span7.innerHTML='Vendor   :';
	  litag3.append(span7);
	  var span8=document.createElement("span");
	  span8.innerText=electronicItems.vendor;
	  litag3.append(span8);
	  ultag.append(litag3);
	  var litag4=document.createElement("li");
	  var span9=document.createElement("span");
	  span9.innerHTML='Manufacturer  :';
	  litag4.append(span9);
	  var span10=document.createElement("span");
	  span10.innerText=electronicItems.Manufacturer;
	  litag4.append(span10);
	  ultag.append(litag4);
	  var litag5=document.createElement("li");
	  var span11=document.createElement("span");
	  span11.innerHTML='Instock :';
	  litag5.append(span11);
	  var span12=document.createElement("span");
	  span12.innerText=electronicItems.instock;
	  litag5.append(span12);
	  ultag.append(litag5);
	  var litag6=document.createElement("li");
	  var span13=document.createElement("span");
	  span13.innerHTML='color :';
	  litag6.append(span13);
	  var span14=document.createElement("span");
	  span14.innerText=electronicItems.color;
	  litag6.append(span14);
	  ultag.append(litag6);
	  var litag7=document.createElement("li");
	  var span15=document.createElement("span");
	  span15.innerHTML='Capacity :';
	  litag7.append(span15);
	  var span16=document.createElement("span");
	  span16.innerText=electronicItems.capacity;
	  litag7.append(span16);
	  ultag.append(litag7);
	  var litag8=document.createElement("li");
	  var span17=document.createElement("span");
	  span17.innerHTML='Discription :';
	  litag8.append(span17);
	  var span18=document.createElement("span");
	  span18.innerText=electronicItems.discription;
	  litag8.append(span18);
	  ultag.append(litag8);
	  
	  document.querySelector("#pblock6").append(ultag);
    }
	document.querySelector("#abcd4").onclick=myMachine5;
	 function myMachine5(){
	   $("#page5").show();	
	   $("#page4").hide();	
	 var ultag=document.createElement("ul");
	 ultag.setAttribute("class",'pblock');
	 var img=document.createElement("img");
	 img.setAttribute("class",'imgSize')
	 img.setAttribute('src','./images/photo23.jfif');
	 ultag.append(img); 
	 document.querySelector("#pblock").append(ultag);
	 var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock1');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo23.jfif');
	  ultag.append(img);	
	  document.querySelector("#pblock1").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock2');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo23.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock2").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock3');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo23.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock3").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("id",'space');
	  var litag=document.createElement("li");
	  var span1=document.createElement("span");
	  span1.innerHTML='product Name :';
	  litag.append(span1);
	  var span2=document.createElement("span");
	  span2.innerText=electronicItems.productName;
	  litag.append(span2);
	  ultag.append(litag);
	
	  var litag1=document.createElement("li");
	  var span3=document.createElement("span");
	  span3.innerHTML=' categiory   :';
	  litag1.append(span3);
	  var span4=document.createElement("span");
	  span4.innerText=electronicItems.cateogiry;
	  litag1.append(span4);
	  ultag.append(litag1);

	  var litag2=document.createElement("li");
	  var span5=document.createElement("span");
	  span5.innerHTML=' price  :';
	  litag2.append(span5);
	  var span6=document.createElement("span");
	  span6.innerText=electronicItems.price;
	  litag2.append(span6);
	  ultag.append(litag2);
	  var litag3=document.createElement("li");
	  var span7=document.createElement("span");
	  span7.innerHTML='Vendor   :';
	  litag3.append(span7);
	  var span8=document.createElement("span");
	  span8.innerText=electronicItems.vendor;
	  litag3.append(span8);
	  ultag.append(litag3);
	  var litag4=document.createElement("li");
	  var span9=document.createElement("span");
	  span9.innerHTML='Manufacturer  :';
	  litag4.append(span9);
	  var span10=document.createElement("span");
	  span10.innerText=electronicItems.Manufacturer;
	  litag4.append(span10);
	  ultag.append(litag4);
	  var litag5=document.createElement("li");
	  var span11=document.createElement("span");
	  span11.innerHTML='Instock :';
	  litag5.append(span11);
	  var span12=document.createElement("span");
	  span12.innerText=electronicItems.instock;
	  litag5.append(span12);
	  ultag.append(litag5);
	  var litag6=document.createElement("li");
	  var span13=document.createElement("span");
	  span13.innerHTML='color :';
	  litag6.append(span13);
	  var span14=document.createElement("span");
	  span14.innerText=electronicItems.color;
	  litag6.append(span14);
	  ultag.append(litag6);
	  var litag7=document.createElement("li");
	  var span15=document.createElement("span");
	  span15.innerHTML='Capacity :';
	  litag7.append(span15);
	  var span16=document.createElement("span");
	  span16.innerText=electronicItems.capacity;
	  litag7.append(span16);
	  ultag.append(litag7);
	  var litag8=document.createElement("li");
	  var span17=document.createElement("span");
	  span17.innerHTML='Discription :';
	  litag8.append(span17);
	  var span18=document.createElement("span");
	  span18.innerText=electronicItems.discription;
	  litag8.append(span18);
	  ultag.append(litag8);
	  
	  document.querySelector("#pblock6").append(ultag);
    }
	document.querySelector("#abcd5").onclick=myMachine6;
	 function myMachine6(){
	   $("#page5").show();
	   $("#page4").hide();		
	  
	 var ultag=document.createElement("ul");
	 ultag.setAttribute("class",'pblock');
	 var img=document.createElement("img");
	 img.setAttribute("class",'imgSize')
	 img.setAttribute('src','./images/photo24.jfif');
	 ultag.append(img); 
	 document.querySelector("#pblock").append(ultag);
	 var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock1');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo24.jfif');
	  ultag.append(img);	
	  document.querySelector("#pblock1").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock2');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo24.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock2").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("class",'pblock3');
	  var img=document.createElement("img");
	  img.setAttribute("class",'imgSize1')
	  img.setAttribute('src','./images/photo24.jfif');
	  ultag.append(img);
	  document.querySelector("#pblock3").append(ultag);
	  var ultag=document.createElement("ul");
	  ultag.setAttribute("id",'space');
	  var litag=document.createElement("li");
	  var span1=document.createElement("span");
	  span1.innerHTML='product Name :';
	  litag.append(span1);
	  var span2=document.createElement("span");
	  span2.innerText=electronicItems.productName;
	  litag.append(span2);
	  ultag.append(litag);
	
	  var litag1=document.createElement("li");
	  var span3=document.createElement("span");
	  span3.innerHTML=' categiory   :';
	  litag1.append(span3);
	  var span4=document.createElement("span");
	  span4.innerText=electronicItems.cateogiry;
	  litag1.append(span4);
	  ultag.append(litag1);

	  var litag2=document.createElement("li");
	  var span5=document.createElement("span");
	  span5.innerHTML=' price  :';
	  litag2.append(span5);
	  var span6=document.createElement("span");
	  span6.innerText=electronicItems.price;
	  litag2.append(span6);
	  ultag.append(litag2);
	  var litag3=document.createElement("li");
	  var span7=document.createElement("span");
	  span7.innerHTML='Vendor   :';
	  litag3.append(span7);
	  var span8=document.createElement("span");
	  span8.innerText=electronicItems.vendor;
	  litag3.append(span8);
	  ultag.append(litag3);
	  var litag4=document.createElement("li");
	  var span9=document.createElement("span");
	  span9.innerHTML='Manufacturer  :';
	  litag4.append(span9);
	  var span10=document.createElement("span");
	  span10.innerText=electronicItems.Manufacturer;
	  litag4.append(span10);
	  ultag.append(litag4);
	  var litag5=document.createElement("li");
	  var span11=document.createElement("span");
	  span11.innerHTML='Instock :';
	  litag5.append(span11);
	  var span12=document.createElement("span");
	  span12.innerText=electronicItems.instock;
	  litag5.append(span12);
	  ultag.append(litag5);
	  var litag6=document.createElement("li");
	  var span13=document.createElement("span");
	  span13.innerHTML='color :';
	  litag6.append(span13);
	  var span14=document.createElement("span");
	  span14.innerText=electronicItems.color;
	  litag6.append(span14);
	  ultag.append(litag6);
	  var litag7=document.createElement("li");
	  var span15=document.createElement("span");
	  span15.innerHTML='Capacity :';
	  litag7.append(span15);
	  var span16=document.createElement("span");
	  span16.innerText=electronicItems.capacity;
	  litag7.append(span16);
	  ultag.append(litag7);
	  var litag8=document.createElement("li");
	  var span17=document.createElement("span");
	  span17.innerHTML='Discription :';
	  litag8.append(span17);
	  var span18=document.createElement("span");
	  span18.innerText=electronicItems.discription;
	  litag8.append(span18);
	  ultag.append(litag8);
	  
	  document.querySelector("#pblock6").append(ultag);
    }

	
}
 function viewElectronicProduct(){
	$(".block").hide();
    $("#rblock3").hide();
	$("#rblock4").hide();
	$("#rblock5").show();
	showElectronicItem();
}

/*for(var i=0;i<=discriptionOfProducts.length;i++){
	if(i==0){
		myData(discriptionOfProducts[i]);
	}else{
		myData1(discriptionOfProducts[i]);
	}
}*/

function viewCartPage(){
	$("#page6").show();
	$("#page5").hide();
    var divtag=document.createElement("div");
    divtag.setAttribute("class",'cdata');
    var divtag1=document.createElement("div");
    divtag1.setAttribute("class",'product1');
    divtag.append(divtag1);
    document.querySelector("#viewPage").append(divtag);
	document.querySelector("#cdata").append("#abc");
    console.log(divtag);
    //$("#page6").show();
	//$("#page5").hide();
  
   
}