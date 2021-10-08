var empDetails = [
     {
        employee: "Employee 1",    
        Image: "i4.PNG",
        Name: "Shiva",
        gender: "male",
        Dept: "IT",
        Location: "Hyderabad",
        BSalary: 85000,
     },
     {
        employee: "Employee 2",
        Image: "i5.PNG",
        Name: "Naveen",
        gender: "male",
        Dept: "IT",
        Location: "mumbai",
        BSalary: 47000,
     },
     {
        employee: "Employee 3",
        Image: "i6.PNG",
        Name: "sanjay",
        gender: "male",
        Dept: "IT",
        Location: "chennai",
        BSalary: 65000,
     },
     {
        employee: "Employee 4",
        Image: "i7.PNG",
        Name: "Mani",
        gender: "male",
        Dept: "IT",
        Location: "Hyderabad",
        BSalary: 48000,
     },
];
        var calSalaryDetails = (empDetails) => {
           empDetails.pf = 13 / 100 * empDetails.BSalary;
           empDetails.hra = 15 / 100 * empDetails.BSalary;
           empDetails.total = empDetails.pf + empDetails.hra + empDetails.BSalary;
           calTax(empDetails);
        }
        var calTax = (empDetails) => {
           if(empDetails.gender === "male") {
               if(empDetails.total > 200000) {
                     empDetails.tax = 14 / 100 * empDetails.total;
               } else if(empDetails.total > 100000) {
                  empDetails.tax = 10 / 100 * empDetails.total;
               } else if(empDetails.total > 70000) {
                  empDetails.tax = 5 / 100 * empDetails.total;
               } else {
                  empDetails.tax = 0;
               }
            } else {
                  if(empDetails.total > 200000) {
                     empDetails.tax = 10 / 100 * empDetails.total;
               } else if(empDetails.total > 100000) {
                  empDetails.tax = 7 / 100 * empDetails.total;
               } else if(empDetails.total > 70000) {
                  empDetails.tax = 2 / 100 * empDetails.total;
               } else {
                  empDetails.tax = 0;
               }
            }
        }
        var createTags = (empDetails) => {
                var ultag = document.createElement("ul");
                ultag.setAttribute('class' , 'ultag');

                var divtag = document.createElement("div");
                divtag.innerHTML = empDetails.employee;
                ultag.append(divtag);
                 
                var imgtag = document.createElement("img");
                imgtag.setAttribute('src' , empDetails.Image);
                imgtag.setAttribute('class' , 'img1');
                ultag.append(imgtag);

                var litag = document.createElement("li");
                litag.setAttribute('class' , 'main');
                ultag.append(litag);

                
                var li1 = document.createElement("li");
                li1.innerHTML = "<b>" + "Name of Employee : " + "</b>" + empDetails.Name;
                litag.append(li1);
                
                var li2 = document.createElement("li");
                li2.innerHTML = "<b>" + "Department : "+ "</b>" + empDetails.Dept;
                litag.append(li2);

                var li3 = document.createElement("li");
                li3.innerHTML = "<b>" + "Location : "+ "</b>" + empDetails.Location;
                litag.append(li3);

                var li4 = document.createElement("li");
                li4.innerHTML = "<b>" + "Salary : "+ "</b>" + empDetails.BSalary;
                litag.append(li4);

                calSalaryDetails(empDetails);

                var li5 = document.createElement("li");
                li5.innerHTML = "<b>" + "pf : "+ "</b>" + empDetails.pf;
                litag.append(li5);

                var li6 = document.createElement("li");
                li6.innerHTML = "<b>" + "hra : "+ "</b>" + empDetails.hra;
                litag.append(li6);

                var li7 = document.createElement("li");
                li7.innerHTML = "<b>" + "total salary : "+ "</b>" + empDetails.total;
                litag.append(li7);

                var li8 = document.createElement("li");
                li8.innerHTML = "<b>" + "tax to pay : "+ "</b>" + empDetails.tax;
                litag.append(li8);

                document.querySelector(".eDetails").append(ultag);
        }
        for(var i = 0; i < empDetails.length; i++) {
              createTags(empDetails[i]);
        }
