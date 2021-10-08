viewCartPage=()=>{
    
    var divtag=document.createElement("div");
    divtag.setAttribute("class",'cdata');
    var divtag1=document.createElement("div");
    divtag1.setAttribute("class",'product1');
    divtag.append(divtag1);
    document.querySelector("#viewPage").append(divtag);
    console.log(divtag);
    $("#page6").show();
    $("#page5").hide();
   
}