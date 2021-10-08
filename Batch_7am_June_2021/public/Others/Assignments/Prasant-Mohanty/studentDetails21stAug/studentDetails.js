var studentDetailsList = [
    {
        name : "Raj",
        gender : 'male',
        age : 20,
        class : '5th Class',
        image : "https://cdn4.vectorstock.com/i/1000x1000/40/53/passport-photo-young-handsome-man-close-up-vector-21284053.jpg",
        marks : [
            {
                sub : 'Math',
                max : 100,
                min : 30,
                obtained : 85
            },
            {
                sub : 'Science',
                max : 100,
                min : 40,
                obtained : 69
            },
            {
                sub : 'English',
                max : 100,
                min : 30,
                obtained : 58
            },
            {
                sub : 'zoology',
                max : 50,
                min : 21,
                obtained : 27
            },
            {
                sub : 'History',
                max : 50,
                min : 21,
                obtained : 35
            }
        ]
    },
    {
        name : "Teena",
        gender : 'Female',
        age : 23,
        class : '5th Class',
        image : "https://t4.ftcdn.net/jpg/03/64/40/09/360_F_364400961_RWHTcwgMa64aq8UgME9xBiwjpLxzwz0D.jpg",
        marks : [
            {
                sub : 'Math',
                max : 100,
                min : 30,
                obtained : 65
            },
            {
                sub : 'Science',
                max : 100,
                min : 40,
                obtained : 88
            },
            {
                sub : 'English',
                max : 100,
                min : 30,
                obtained : 87
            },
            {
                sub : 'zoology',
                max : 50,
                min : 21,
                obtained : 33
            },
            {
                sub : 'History',
                max : 50,
                min : 21,
                obtained : 23
            }
        ]
    },
    {
        name : "Prasad",
        age : 22,
        class : '5th Class',
        image : "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX32549617.jpg",
        marks : [
            {
                sub : 'Math',
                max : 100,
                min : 30,
                obtained : 55
            },
            {
                sub : 'Science',
                max : 100,
                min : 40,
                obtained : 66
            },
            {
                sub : 'English',
                max : 100,
                min : 30,
                obtained : 88
            },
            {
                sub : 'zoology',
                max : 50,
                min : 21,
                obtained : 22
            },
            {
                sub : 'History',
                max : 50,
                min : 21,
                obtained : 33
            }
        ]
    }
];
function createStudentTable(studentTable) {
    var tbl = document.createElement('table');
    tbl.setAttribute('class',"tableTag");
    var tblHead = document.createElement('thead');
    tbl.appendChild(tblHead);
    var tblHeadRow = document.createElement('tr');
    tblHeadRow.setAttribute('class',"trTag");
    tblHead.appendChild(tblHeadRow);
    
    var tblHdrCell = document.createElement('th');
    tblHeadRow.appendChild(tblHdrCell);
    tblHdrCell.setAttribute('class',"tableHeading")
    tblHdrCell.innerHTML = 'Student Name ' + studentTable.name;
    tblHdrCell.innerHTML = 'Student gender ' + studentTable.gender;
    tblHdrCell.innerHTML = 'Student class ' + studentTable.class;
    tblHdrCell.innerHTML = 'Student picture ' + studentTable.image;



    document.querySelector(".studentTable").append(tbl);
}