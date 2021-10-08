var count = 0;
var dojob = (type) => {

    count++;
    var fVal = document.querySelector("#fval").value;
    var sVal = document.querySelector("#sval").value;
    var result;
    switch(type) {
        case 'add':
            result = mathUtilData.addValues(fVal, sVal);
            break;
        case 'mul':
            result = mathUtilData.doMultiplication(fVal, sVal);
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