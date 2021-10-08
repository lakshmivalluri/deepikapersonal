
contactDetails.lastName;
contactDetails.address.office.state.code -> 001
contactDetails.phone.persnl[1]

var contactDetails = {
    firstName: "Raj",
    lastName: "TEena",
    phone: {
        office: '040-234234',
        persnl: [24242, 2342,242342]
    },
    address: {
        office: {
            country: 'India',
            buldingNo: '5A',
            state: {
                name: 'AP',
                code: 001
            }
        },
        currAddr: {
            dno: '1-A',
            pincode: 530011,
            country: "India"
        },
        prmntAddr: {
            dno: '1-A',
            pincode: 530011,
            country: "India"
        }
    },
    emailId: {
        'office': 'abc@office.com',
        'persnl': ['abc@gmail.com', 'tst@yahoo.com']
    },
    profilepic: 'http:abc.com/data/profilepic.png'
}