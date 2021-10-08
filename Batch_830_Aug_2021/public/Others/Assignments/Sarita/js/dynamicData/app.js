
var eDetails = [
    {
        name: 'Sam',
        age: 23,
        post: 'Developer',
        salary: 200000,
        image: 'images/4.jfif'
    },
    {
        name: 'Raj',
        age: 27,
        post: 'Designer',
        salary: 300000,
        image: 'images/3.jfif'
    },
    {
        name: 'Pooja',
        age: 24,
        post: 'Manager',
        salary: 400000,
        image: 'images/1.jfif'
    },
    {
       name: 'Krish',
        age: 28,
        post: 'Tester',
        salary: 700000,
        image: 'images/2.jfif'
    }
];

function loadEmpData(empData) {
    var ulTag = document.createElement("ul");
    ulTag.setAttribute("class", "empDetails");

    var li1 = document.createElement("li");
    var span1 = document.createElement("span");
    span1.innerHTML = '<b>Employee Name:</b>';
    span1.setAttribute("class", 'label');
    li1.append(span1);
    var span2 = document.createElement("span");
    span2.innerText = empData.name ;    
    li1.append(span2);
    ulTag.append(li1);

    var li2 = document.createElement("li");
    var span1 = document.createElement("span");
    span1.innerHTML = '<b>Age:</b>';
    span1.setAttribute("class", 'label');
    li2.append(span1);
    var span2 = document.createElement("span");
    span2.innerText = empData.age;    
    li2.append(span2);
    ulTag.append(li2);

    var li3 = document.createElement("li");
    var span1 = document.createElement("span");
    span1.innerHTML = '<b>Post:</b>';
    span1.setAttribute("class", 'label');
    li3.append(span1);
    var span2 = document.createElement("span");
    span2.setAttribute('class', 'post');
    span2.innerText = empData.post;
    li3.append(span2);
    ulTag.append(li3);

     var li4 = document.createElement("li");
    var span1 = document.createElement("span");
    span1.innerHTML = '<b>Salary:</b>';
    span1.setAttribute("class", 'label');
    li4.append(span1);
    var span2 = document.createElement("span");
    span2.innerText = empData.salary;    
    li4.append(span2);
    ulTag.append(li4);

    var li0 = document.createElement("li");
    var img = document.createElement("img");
    img.setAttribute("src", empData.image);
    li0.append(img);
    ulTag.append(li0);

    document.querySelector("#detailsContainer").append(ulTag);
}

function showEmpDetails() {
    for (var i = 0 ; i < eDetails.length; i++) {
        
        loadEmpData(eDetails[i]);
    }
}

