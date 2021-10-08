var count = 1;
var doJob = () => {

    var myWorker = new Worker('dateWorker.js');
    myWorker.onmessage = function(event) {
        //document.querySelector(".dateContainer span").innerHTML = event.data;
        // myWorker.terminate();
    }

    // Creating Container.
    setInterval(()=> {
        var divTag = document.createElement("div");
        divTag.setAttribute("class", 'content')
        divTag.innerHTML = "Content Created " + count;
        count++;
        document.querySelector(".main-container").append(divTag);
    }, 1000);

    
    
}
