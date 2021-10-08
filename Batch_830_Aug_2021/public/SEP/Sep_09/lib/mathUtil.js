var count = 10;

var addValues = (a, b) => {
    count++;
    a = parseInt(a);
    b = parseInt(b);
    var result = a + b;
    return result;
}

var mulValues = (a, b) => {
    count++;
    a = parseInt(a);
    b = parseInt(b);
    var result = a * b;
    return result;
}

var divValues = (a, b) => {
    count++;
    a = parseInt(a);
    b = parseInt(b);
    var result = a / b;
    return result;
}

var subValues = (a, b) => {
    count++;
    a = parseInt(a);
    b = parseInt(b);
    var result = a - b;
    return result;
}