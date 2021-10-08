export function getAddition(a, b, ...param) {
    var result = a + b;
    param.forEach((value) => {
        result += value;
    });
    return result;    
}


export function displayMsg() {
    console.log("hello");
}

function showDetails() {
    console.log("Show msg");
}

export class Abc {

}

