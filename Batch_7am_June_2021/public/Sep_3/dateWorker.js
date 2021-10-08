var temp = 0
function getDateInFormat() {
    setInterval(function(){
        var date = new Date();
        var reqFormat = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        console.log("Date format is " + reqFormat);
        temp++;
        //var data = {msg: 'one', data: 'twe'};
        //postMessage(JSON.stringify(data));
        postMessage(reqFormat);
    }, 1000);
    
}


getDateInFormat();