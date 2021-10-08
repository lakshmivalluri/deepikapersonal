var schoolDetails = {
    schoolName: 'ABC Pulic School',
    schoolLocaiton: 'Hybderabad'
}

var registerDetails = () => {
    var sData = Object.create(schoolDetails);
    sData.name = document.querySelector("#uname").value;
    sData.age = document.querySelector("#uage").value;
    sData.gender = document.querySelector("input[name=ugender]:checked").value;
    sData.class = document.querySelector("#uClass").value;
    console.log(sData);
    showDetails(sData);
}

function showDetails(data) {
    var ulTag = document.createElement("ul");
    for (var tempKey in data) {
        var litag = document.createElement("li");
        litag.innerHTML = tempKey + ' : ' + data[tempKey];
        ulTag.append(litag);
    }
    document.querySelector(".detailsBlock").append(ulTag);
}