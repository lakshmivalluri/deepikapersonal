var index = 1;
var num = [], ageNumber;

function numbervalid(event) {
    if (event.key >= '0' && event.key <= '9') {
        $('#cCodeErr').hide();
        $('#cCode').css('border', '3px solid #48cae4');
        return true;
    }
    else if (event.key == 'Backspace') {
        $('#cCodeErr').hide();
        $('#cCode').css('border', '3px solid #48cae4');
    }
    else {
        $('#cCodeErr').show();
        $('#cCode').css('border', '5px solid red');
        return false;
    }
}

function backvalid(event) {
    if (event.key === 'Backspace') {
        return doValidation(event.key, 'bSpace');
    }
    else if (event.key >= '0' && event.key <= '9') {
        return doValidation(event.key);
    }
    else {
        $('#ageErr').show();
        $('#sAge').css('border', '5px solid red');
        return false;
    }
}

function doValidation(val, str) {
    console.log('ok');
    if (str === 'bSpace') {
        num.splice(num.length - 1, 1);
        ageNumber = Number(num.join(''));
        if (num.length >= 2) {
            if (ageNumber > '20') {
                $('#ageErr').html('Age Should be Less Than 20');
                $('#ageErr').show();
                $('#sAge').css('border', '5px solid red');
            }
            else {
                $('#ageErr').hide();
                $('#sAge').css('border', '3px solid #48cae4');
                return true;
            }
        }
        else if (num.length == 1) {
            $('#ageErr').hide();
            $('#sAge').css('border', '3px solid #48cae4');
            return true;
        }
    }
    else {
        num.push(val);
        ageNumber = Number(num.join(''));
        if (ageNumber > '20') {
            $('#ageErr').html('Age Should be Less Than 20');
            $('#ageErr').show();
            $('#sAge').css('border', '5px solid red');
        }
        else {
            $('#ageErr').hide();
            $('#sAge').css('border', '3px solid #48cae4');
            return true;
        }
    }
}

function numvalidation(event) {
    if ((event.key >= 'a' && event.key <= 'z') || (event.key >= 'A' && event.key <= 'Z')) {
        if (event.target.id == 'cName') {
            $("#cNameEmp").hide();
            $('#cName').css('border', '3px solid #48cae4');
        }
        if (event.target.id == 'sName') {
            $("#sNameEmp").hide();
            $('#sName').css('border', '3px solid #48cae4');
        }
        if (event.target.id == 'sSport') {
            $("#sSportEmp").hide();
            $('#sSport').css('border', '3px solid #48cae4');
        }
    }
    else {
        if (event.target.id == 'cName') {
            $("#cNameEmp").show();
            $('#cName').css('border', '5px solid red');
        }
        if (event.target.id == 'sName') {
            $("#sNameEmp").show();
            $('#sName').css('border', '5px solid red');
        }
        if (event.target.id == 'sSport') {
            $("#sSportEmp").show();
            $('#sSport').css('border', '5px solid red');
        }
        return false;
    }
}


class collegeDetails {
    constructor(clg) {
        this.clgname = clg.clgname;
        this.code = clg.code;
        this.location = clg.location;
    }
}

class studentDetails extends collegeDetails {
    constructor(sDetails, clg) {
        super(clg);
        this.name = sDetails.name;
        this.age = sDetails.age;
        this.gender = sDetails.gender;
        this.sSport = sDetails.sport;
    }
}


function registerDetails() {
    var clg = {};
    clg.clgname = $('#cName').val();
    clg.code = $('#cCode').val();
    clg.location = $('#cLocation').val();

    $('#cName').val('');
    $('#cCode').val('');
    $('#cLocation').val('');

    var sDetails = {};
    sDetails.name = $('#sName').val();
    sDetails.age = $('#sAge').val();
    sDetails.gender = $('input[type=radio]:checked').val();
    sDetails.sport = $('#sSport').val();

    $('#sName').val('');
    $('#sAge').val('');
    $('input[type=radio]:checked').prop('checked', false);
    $('#sSport').val('');

    var error = false;
    try {
        if (clg.clgname == '') {
            throw 'cNameErr';
        }
        if (clg.code == '') {
            throw 'cCodeEmpty';
        }
        if (clg.location == '') {
            throw 'cLocationErr';
        }
        if (sDetails.name == '') {
            throw 'sNameErr';
        }
        if (sDetails.age == '') {
            throw 'sAgeErr';
        }
        if (sDetails.sport == '') {
            throw 'sSportErr';
        }
    }
    catch (err) {
        if (err) {
            error = true;
        }
        if (err == 'cNameErr') {
            $('#cNameErr').show();
        }
        if (err == 'cCodeEmpty') {
            $('#cCodeEmpty').show();
        }
        if (err == 'cLocationErr') {
            $('#cLocationErr').show();
        }
        if (err == 'sNameErr') {
            $('#sNameErr').show();
        }
        if (err == 'sAgeErr') {
            $('#sAgeErr').show();
        }
        if (err == 'sSportErr') {
            $('#sSportErr').show();
        }
    }
    finally {
        if (!error) {
            creating(obj);
            var obj = new studentDetails(sDetails, clg);
            $('table').show();
        }
        else {
            alert('Please Fill all Details and Register');
            $('#err').show();
            setTimeout(() => {
                $('#err').hide();
            }, 5000);
        }
    }
}

function creating(obj) {
    var code = "<tr>";
    code += "<td>" + index + "</td>";
    code += "<td>" + obj.clgname + "</td>";
    code += "<td>" + obj.code + "</td>";
    code += "<td>" + obj.location + "</td>";
    code += "<td>" + obj.name + "</td>";
    code += "<td>" + obj.age + "</td>";
    code += "<td>" + obj.gender + "</td>";
    code += "<td>" + obj.sSport + "</td>";
    code += "</tr>"

    $('table').append(code);

    index++;
}

