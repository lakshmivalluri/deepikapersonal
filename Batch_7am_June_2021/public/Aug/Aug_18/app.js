var count = 0;

var doOperation = (type) => {
    var data = {
        fval: document.querySelector("#fval").value,
        sval: document.querySelector("#sval").value
    };
    var result;
    switch (type) {
        case 'add':
            result = mathUtil.addValues(data);
            count++;
            break;
        case 'mul':
            result = mulValues(data);
            count++;
            break;
        case 'div':
            result = divValues(data);
            count++;
            break;
        case 'sub':
            result = mathUtil.substractionValues(data);
            count++;
            break;
    }
    document.querySelector("#rblock").innerText = type + ' is : ' + result;

    document.querySelector("#cblock").innerHTML = count;

}

function displayInfo() {
    console.log("hey we are working with math opeations")
}
displayInfo();