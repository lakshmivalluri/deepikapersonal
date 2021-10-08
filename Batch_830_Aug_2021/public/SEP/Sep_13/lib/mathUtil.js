
    var count = 10;    // to track no. of times its invoked

    /**
     * Method to multiply values
     * @param {firstValue}  Its the first param
     * @param {secondValue}  SEcond paramerter
     * @returns 
     */
    var mulValues = (firstValue, secondValue) => {
        count++;
        firstValue = parseInt(firstValue);
        secondValue = parseInt(secondValue);
        var result = firstValue * secondValue; // performing multiplication
        return result;
    }

    /**
     * Method to Substraction values
     * @param {firstValue}  Its the first param
     * @param {secondValue}  SEcond paramerter
     * @returns 
     */
     var subValues = (firstValue, secondValue) => {
        count++;
        firstValue = parseInt(firstValue);
        secondValue = parseInt(secondValue);
        var result = firstValue - secondValue; // performing Substraction
        return result;
    }

    /**
     * Method to Division values
     * @param {firstValue}  Its the first param
     * @param {secondValue}  SEcond paramerter
     * @returns 
     */
     var divisionValues = (firstValue, secondValue) => {
        count++;
        firstValue = parseInt(firstValue);
        secondValue = parseInt(secondValue);
        var result = firstValue / secondValue; // performing Division
        return result;
    }

    /**
     * Method to addition values
     * @param {firstValue}  Its the first param
     * @param {secondValue}  SEcond paramerter
     * @returns 
     */
     var addValues = (firstValue, secondValue) => {
        count++;
        firstValue = parseInt(firstValue);
        secondValue = parseInt(secondValue);
        var result = firstValue + secondValue; // performing Addition
        return result;
    }