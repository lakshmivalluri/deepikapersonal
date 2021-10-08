
    var mobillist = []; 

    var getmobildata = () => {

    var dataUrl = "http://localhost:8081/practice/AJAX/dipali/data/mobil.json";
     console.log(dataUrl)
    $.ajax({

      url : dataUrl,
      method:'GET',
      dataType:'JSON',
      //async:false,
      success: function(response){
      console.log("sucess this time");
      console.log(response.mobildata);
      mobillist=response.mobildata;
      getmobiles();

    },
      error: function(error)
    {
      console.log("dipali"); 
      console.log("error");
      console.log(error)
    }
    
});


}
   
   function createproduct(mobillist){

    var litag = $("<li></li>").addClass("product");
    //litag.setAttribute("class","product"); simply add class

    var ultag =$("<ul></ul>");

    var li1 =$("<li></li>").text("Mobil Name : " + mobillist.name);
    //li1.innerText="Mobil Name : " + mobillist.name; simply add text

    ultag.append(li1);

    var li2 = $("<li></li>").text("price");
    //li2.innerText= " Price : ";

    var span1 = $("<span></span>").addClass("actual").text(mobillist.price);
    //span1.setAttribute("class","actual");
    //span1.innerText=mobillist.price;
    li2.append(span1);

    var span2 =$("<span></span>").addClass("dis").text(mobillist.price -(mobillist.price * mobillist.discount));
    //span2.setAttribute("class","dis");
    //span2.innerText = mobillist.price - ( mobillist.price * mobillist.discount ) / 100 + " -/ "  + "Rs only" 	;
    li2.append(span2);

    ultag.append(li2);

    var li3 =$("<li></li>").text("Manufacture : " + mobillist.manufacture);
    //li3.innerText= " Manufacture : " + mobillist.manufacture;
    ultag.append(li3);

    var li4 =$("<li></li>").text(" Description : " + mobillist.discription);
    //li4.innerText=" Description  : " + mobillist.discription;
    ultag.append(li4);

    var li5 =$("<li></li>");
    var imagetag =$("<img/>").attr("src",mobillist.image);
    //imagetag.setAttribute("src",mobillist.image);
    li5.append(imagetag);
    ultag.append(li5);
    litag.append(ultag);

    $(".main").append(litag);

    console.log(litag);

   }
       var getmobiles = () => {
      for(var i = 0;i<mobillist.length;i++){
    
         createproduct(mobillist[i]);
      }
  }