var count = 0;
var dojob = (type) => {
    alert("test");
    count++;
    var fVal = document.querySelector("#fval").value;
    var sVal = document.querySelector("#sval").value;
    var result;
    switch(type) {
        case 'add':
            result = addValues(fVal, sVal);
            break;
        case 'mul':
            result = mulValues(fVal, sVal);
            break;
        case 'div':
            result = divValues(fVal, sVal);
            break;
        case 'sub':
            result = subValues(fVal, sVal);
            break;
    }
    var msg = type + ' operation is ' + result;
    document.querySelector("#rBlock").innerHTML = msg;
    document.querySelector("#counterBlock").innerHTML = 'Its been used ' + count + ' times';
}