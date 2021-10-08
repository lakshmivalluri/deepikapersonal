var mathUtilData = (function(){
    var count = 10;

   

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
    return {
        addValues:  (a, b) => {
            count++;
            a = parseInt(a);
            b = parseInt(b);
            var result = a + b;
            return result;
        },
        doMultiplication: (p1, p2) => {
            var result = mulValues(p1, p1);
            return result;
        }
    };
})();