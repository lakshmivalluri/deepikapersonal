
contactDeails.lastName

contactDeails.phone.office

contactDeails.emailId.personal[1]

contactDeails.address.personal.stateInfo.stateCode


var contactDeails = {
    firstName: 'Raj',
    'lastName': 'Krish',
    phone:  {
        office: '040-334334',
        personal: [35234234, 2342342]
    },
    emailId: {
        office: 'abc@office.com',
        personal: ['abc@gmail.com', 'pqr@yahoo.com']
    },
    address: {
        "personal": {
            dno: '158',
            streetNo: 'Street_2',
            stateInfo: {
                name: 'TS',
                stateCode: '0023'
            }
        },
        office: {
            country: 'India',
            stateCode: 'test',
            stateName: 'Pune'
        }        
    },
    designation: 'Sf engnr'
}