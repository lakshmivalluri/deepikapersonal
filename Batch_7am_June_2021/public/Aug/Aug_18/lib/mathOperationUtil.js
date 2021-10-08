var mathUtil = (function(){
    
    var count = 10;
    /**
     * Method to find sum of given values
     * @param {object} data Holds fval and sval
     * @returns The sum of values
     */
     
    /**
     * Method to find substraction of values
     * @param {*} data 
     * @returns 
     */
    function subValues(data) {
        count += 2;
        data.fval = parseInt(data.fval);
        data.sval = parseInt(data.sval);
        var result = data.fval - data.sval; //doing the sub
        return result;
    }

    function mulValues(data) {
        count += 2;
        data.fval = parseInt(data.fval);
        data.sval = parseInt(data.sval);
        var result = data.fval * data.sval; //doing the mul
        return result;
    }

    function divValues(data) {
        count += 2;
        data.fval = parseInt(data.fval);
        data.sval = parseInt(data.sval);
        var result = data.fval / data.sval; //doing the div
        return result;
    }

    function displayInfo() {
        console.log("Something is going to work")
    }

    return {
        addValues: function (data) {    
            count += 2;
            data.fval = parseInt(data.fval);
            data.sval = parseInt(data.sval);
            var result = data.fval + data.sval; //doing the sum
            return result;
        },
        substractionValues: function(data) {
            return subValues(data);
        }
    }

})();