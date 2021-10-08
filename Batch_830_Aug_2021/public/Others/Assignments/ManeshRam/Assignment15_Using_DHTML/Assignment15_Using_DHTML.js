"use strict";

var employeeDetails = {

    "name": " ",

    "age": 0,

    "gender": " ",

    "basicSal": 0,

    "hra": 0,

    "pf": 0,

    "totalSal": 0,

    "tax": 0,

}

function getDetails() {
    var temp;

    temp = prompt("\n ENTER NAME OF EMPLOYEE  ");
    employeeDetails.name = temp;
    temp = prompt("\n ENTER AGE OF EMPLOYEE  ");
    employeeDetails.age = parseInt(temp);
    temp = prompt("\n ENTER GENDER OF EMPLOYEE  ");
    employeeDetails.gender = temp;
    temp = prompt("\n ENTER BASIC SALARY OF EMPLOYEE  ");
    employeeDetails.basicSal = parseInt(temp);

    var recieve = calculate(employeeDetails.gender, employeeDetails.basicSal);

    employeeDetails.totalSal = recieve[0];
    employeeDetails.tax = recieve[1];

    output();
}


function calculate(gender, basicSal) {

    employeeDetails.hra = (25 * basicSal) / 100;
    employeeDetails.pf = (14 * basicSal) / 100;

    var totalSal = basicSal + employeeDetails.hra + employeeDetails.pf;
    var tax = 0;

    if (gender == "male" || gender == "MALE") {
        if (totalSal > 200000) {
            tax = (15 * totalSal) / 100;
        } else if (totalSal > 100000) {
            tax = (10 * totalSal) / 100;
        } else if (totalSal > 50000) {
            tax = (5 * totalSal) / 100;
        }
    } else if (gender == "female" || gender == "FEMALE") {
        if (totalSal > 200000) {
            tax = (10 * totalSal) / 100;
        } else if (totalSal > 100000) {
            tax = (5 * totalSal) / 100;
        }
    } else {
        tax = 0;
    }

    var values = [totalSal, tax];
    return values;
}

function output() {

    alert(" ----  EMPLOYEE DETAILS ARE AS FOLLOWS ----" + "\n Employee Name is " + employeeDetails.name + "\n Employee Age is " + employeeDetails.age + "\n Employee Gender is " + employeeDetails.gender + "\n Employee Basic Salary is " + employeeDetails.basicSal + " Rs" + "\n Employee Total Salary is " + employeeDetails.totalSal + " Rs" + "\n TAX for the Employee = " + employeeDetails.tax + " Rs");
    console.log("   ------ EMPLOYEE DETAILS ARE AS FOLLOWS ----- ");
    console.log(" Employee Name is " + employeeDetails.name);
    console.log(" Employee Age is " + employeeDetails.age);
    console.log(" Employee Gender is " + employeeDetails.gender);
    console.log(" Employee Basic Salary is " + employeeDetails.basicSal + " Rs");
    console.log(" Employee Total Salary is " + employeeDetails.totalSal + " Rs");
    console.log(" TAX for the Employee = " + employeeDetails.tax + " Rs");

    // MANIPULATING HTML USING JAVA SCRIPT
    document.querySelector('#ename').innerHTML = employeeDetails.name;
    document.querySelector('#eage').innerHTML = employeeDetails.age;
    document.querySelector('#egender').innerHTML = employeeDetails.gender;
    document.querySelector('#ebasicsal').innerHTML = employeeDetails.basicSal;
    document.querySelector('#ehra').innerHTML = employeeDetails.hra;
    document.querySelector('#epf').innerHTML = employeeDetails.pf;
    document.querySelector('#etotalsal').innerHTML = employeeDetails.totalSal;
    document.querySelector('#etax').innerHTML = employeeDetails.tax;

}

alert("   ----- JSON EMPLOYEE DETAILS ----- \n 1 - NAME \n 2 - AGE  \n 3 - GENDER  \n 4 - BASIC SALARY  \n PLEASE GET READY WITH THE FOLLOWING DETAILS  ");

getDetails();