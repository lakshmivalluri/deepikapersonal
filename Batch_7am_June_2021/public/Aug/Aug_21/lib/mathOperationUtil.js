
    var count = 10;
    
    function newAddValues(firstValue, secondValue) {
        var result = 0;
        result = firstValue + secondValue;
        return result;
    }
      
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
        /*data.fval = parseInt(data.fval);
        data.sval = parseInt(data.sval);
        var result = data.fval / data.sval; //doing the div
        return result; */

        return parseInt(data.fval)/parseInt(data.sval);
    }

    function displayInfo() {
        console.log("Something is going to work")
    }

    /**
     * Method to find sum of given values
     * @param {object} data Holds fval and sval
     * @returns The sum of values
     */
    function addValues() {
           
            count += 2;
            data.fval = parseInt(data.fval);
            data.sval = parseInt(data.sval);
            var result = data.fval + data.sval; //doing the sum
            return result;
    }
        
    function testing() {
        
    }