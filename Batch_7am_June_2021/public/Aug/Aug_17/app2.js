var registerUser = () => {
    var data = {};
    data.name = document.querySelector("#uname").value;
    data.age = document.querySelector("#uage").value; 
    data.age = parseInt(data.age);
    try {
        if (data.age < 21) {
            throw "Age invalid";
        }
    } catch(error) {
        console.log(error);
        console.log("age is invalid");
        document.querySelector(".ageMsg").style.display = 'block';
    }
    console.log(data);
}