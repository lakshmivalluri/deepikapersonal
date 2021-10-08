var empDetailsList = [
  {
    employeeNo: 1,
    name: "Teena",
    gender: "Female",
    department: "IT",
    salary: 40000,
    image:
      "https://i.pinimg.com/474x/aa/42/7a/aa427a67d5dc8bc31629fbe50cc62abd.jpg",
  },
  {
    employeeNo: 2,
    name: "Ananya",
    gender: "female",
    department: "Finance",
    salary: 50000,
    image:
      "https://media.istockphoto.com/vectors/beautiful-cartoon-girl-in-a-red-dress-vector-id1176962766?k=6&m=1176962766&s=170667a&w=0&h=-LE0GT5syfiGk0bHwFir03oes5PxE-xzKRZPO668LBw=",
  },
  {
    employeeNo: 3,
    name: "Ashu",
    gender: "male",
    department: "manager",
    salary: 60000,
    image:
      "https://i.pinimg.com/originals/ea/69/dc/ea69dc6226e72a33f82d3add20b470df.jpg",
  },
  {
    employeeNo: 4,
    name: "Prayas",
    gender: "Male",
    department: "Tester",
    salary: 20000,
    image:
      "https://lh5.googleusercontent.com/proxy/3li0MyOngOGT9zDT6hT18-tXFhVs-YrEizRXRk-Y5vMUcuzhlCCuEFUbBrt6JCEweMOCou03kKlOGx1lgk9WCKkfqA=s0-d",
  },
  {
    employeeNo: 5,
    name: "Anup",
    gender: "male",
    department: "Developer",
    salary: 100000,
    image:
      "https://thumbs.dreamstime.com/b/cute-boy-cartoon-illustration-90163697.jpg",
  },
  {
    employeeNo: 6,
    name: "Mona",
    gender: "female",
    department: "IT",
    salary: 50000,
    image:
      "https://webneel.com/daily/sites/default/files/images/daily/05-2014/4-manga.jpg",
  },
  {
    employeeNo: 7,
    name: "Sipra",
    gender: "Female",
    department: "Teacher",
    salary: 25000,
    image:
      "http://www.123mobilewallpapers.com/wp-content/uploads/2014/08/beautiful_cartoon_girl_wallpaper.jpg",
  },
  {
    employeeNo: 8,
    name: "Neha",
    gender: "female",
    department: "Doctor",
    salary: 100000,
    image:
      "https://static4.depositphotos.com/1000792/381/v/600/depositphotos_3813000-stock-illustration-beautiful-princess-with-rose.jpg",
  },
  {
    employeeNo: 9,
    name: "Raj",
    gender: "male",
    department: "Sportsman",
    salary: 25000,
    image:
      "https://webneel.com/daily/sites/default/files/images/daily/08-2018/2-3d-cartoon-man-rayzaalvarez.jpg",
  },
  {
    employeeNo: 10,
    name: "Yash",
    gender: "Male",
    department: "Model",
    salary: 80000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDRredZzaA0lehDXGReYG_oyEIMQoSP7u6Eg&usqp=CAU",
  },
];

function createEmployeeBlock(empDetails) {
  var liTag = document.createElement("li");
  liTag.setAttribute("class", "employee");

  var ulTag = document.createElement("ul");

  var li1 = document.createElement("li");
  li1.innerText = "Employee No. : " + empDetails.employeeNo;
  ulTag.append(li1);

  var li2 = document.createElement("li");
  li2.innerText = "Employee Name : " + empDetails.name;
  ulTag.append(li2);

  var li3 = document.createElement("li");
  li3.innerText = "Employee Gender : " + empDetails.gender;
  ulTag.append(li3);

  var li4 = document.createElement("li");
  li4.innerText = "Employee Department : " + empDetails.department;
  ulTag.append(li4);

  var li5 = document.createElement("li");
  li5.innerText = "Employee Salary : " + empDetails.salary;
  ulTag.append(li5);

  var li6 = document.createElement("li");
  var imgTag = document.createElement("img");
  imgTag.setAttribute("src", empDetails.image);
  li6.append(imgTag);
  ulTag.append(li6);
  liTag.append(ulTag);

  document.querySelector(".eDetails").append(liTag);
}

for (var i = 0; i < empDetailsList.length; i++) {
  createEmployeeBlock(empDetailsList[i]);
}
