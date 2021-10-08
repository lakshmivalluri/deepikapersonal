var eDetailsList = [
  {
    employeeNo: 1,
    name: "Raj",
    gender: "male",
    department: "IT",
    salary: 50000,
    image:
      "https://st.focusedcollection.com/16372974/i/1800/focused_211235948-stock-photo-front-view-portrait-man-casual.jpg",
  },
  {
    employeeNo: 2,
    name: "Seema",
    gender: "female",
    department: "Networking",
    salary: 38000,
    image:
      "https://i.pinimg.com/originals/dc/d8/85/dcd88558462ddd0f71829093b9be3064.jpg",
  },
  {
    employeeNo: 3,
    name: "Umang",
    gender: "male",
    department: "Developer",
    salary: 55000,
    image:
      "https://theselfbalancingscooters.com/wp-content/uploads/2019/12/Matt-Philips.jpg",
  },
  {
    employeeNo: 4,
    name: "Palak",
    gender: "female",
    department: "IT",
    salary: 45000,
    image: "https://live.staticflickr.com/65535/49171337678_55c55a45b8_b.jpg",
  },
  {
    employeeNo: 5,
    name: "Nikkhil",
    gender: "male",
    department: "Networking",
    salary: 52000,
    image:
      "https://previews.123rf.com/images/iko/iko1409/iko140900116/31694000-studio-portrait-of-a-handsome-young-man-astonished-with-something.jpg",
  },
  {
    employeeNo: 6,
    name: "Sweta",
    gender: "female",
    department: "IT",
    salary: 60000,
    image: "https://live.staticflickr.com/65535/49197328948_bdd9946619_b.jpg",
  },
  {
    employeeNo: 7,
    name: "Uday",
    gender: "male",
    department: "Developer",
    salary: 49000,
    image:
      "https://thumbs.dreamstime.com/b/portrait-smiling-happy-young-man-38290461.jpg",
  },
  {
    employeeNo: 8,
    name: "Arushi",
    gender: "female",
    department: "Networking",
    salary: 64000,
    image:
      "https://images.squarespace-cdn.com/content/v1/5864075746c3c414e5f54b7f/1525903916177-ECY17M4640DONOJ0J4ZI/MalloryBenedict_Headshot_001_2_lr1-1.jpg",
  },
  {
    employeeNo: 9,
    name: "Druv",
    gender: "male",
    department: "IT",
    salary: 58000,
    image:
      "https://image.shutterstock.com/image-photo/handsome-young-smiling-guy-260nw-339668681.jpg",
  },
  {
    employeeNo: 10,
    name: "Nayantika",
    gender: "female",
    department: "Developer",
    salary: 71000,
    image:
      "https://www.psypost.org/wp-content/uploads/2018/10/young-attractive-woman.jpg",
  },
];

function createEmployeeBlock(eDetails) {
  var liTag = document.createElement("li");
  liTag.setAttribute("class", "employee");

  var ulTag = document.createElement("ul");

  var li1 = document.createElement("li");
  li1.innerText = "Employee No. : " + eDetails.employeeNo;
  ulTag.append(li1);

  var li2 = document.createElement("li");
  li2.innerText = "Employee Name : " + eDetails.name;
  ulTag.append(li2);

  var li3 = document.createElement("li");
  li3.innerText = "Gender : " + eDetails.gender;
  ulTag.append(li3);

  var li4 = document.createElement("li");
  li4.innerText = "Department : " + eDetails.department;
  ulTag.append(li4);

  var li5 = document.createElement("li");
  li5.innerText = "Salary : " + eDetails.salary;
  ulTag.append(li5);

  var li6 = document.createElement("li");
  var imgTag = document.createElement("img");
  imgTag.setAttribute("src", eDetails.image);
  li6.append(imgTag);
  ulTag.append(li6);
  liTag.append(ulTag);

  document.querySelector(".eDetails").append(liTag);
}

for (var i = 0; i < eDetailsList.length; i++) {
  createEmployeeBlock(eDetailsList[i]);
}
