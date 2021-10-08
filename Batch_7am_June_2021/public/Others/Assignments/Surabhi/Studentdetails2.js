var Stduentdetails=[{

    name:'Surabhi',
    Age:10,
    Class:'10 class',
    image:'"https://images.all-free-download.com/images/graphicthumb/disney_disney_hd_series_of_cartoon_characters_snow_white_176351.jpg"'
                            Marks:[
                                {
                            Subject:'Maths',
                            MaxMArks:100,
                            MinMarks:40,
                            ObtainedMarks:50,
                            Status:'Pass'

                            },
                            {
                            Subject:'Science',
                            MaxMArks:100,
                            MinMarks:40,
                            ObtainedMarks:80,
                            Status:'Pass'
                            },
                            {
                                Subject:'Marathi',
                            MaxMArks:100,
                            MinMarks:40,
                            ObtainedMarks:30,
                            Status:'Fail'
                            },
                            {
                            Subject:'English',
                            MaxMArks:100,
                            MinMarks:40,
                            ObtainedMarks:80,
                            Status:'Pass'
                            }
                          
                        ]
    },
    {


    name:'Monami',
    Age:10,
    Class:'10 class',
    image:'"https://images.all-free-download.com/images/graphicthumb/disney_disney_hd_series_of_cartoon_characters_snow_white_176351.jpg"'
                            Marks:[
                                {
                            Subject:'Maths',
                            MaxMArks:100,
                            MinMarks:40,
                            ObtainedMarks:80,
                            Status:'Pass'

                            },
                            {
                            Subject:'Science',
                            MaxMArks:100,
                            MinMarks:40,
                            ObtainedMarks:70,
                            Status:'Pass'
                            },
                            {
                                Subject:'Marathi',
                            MaxMArks:100,
                            MinMarks:40,
                            ObtainedMarks:60,
                            Status:'Pass'
                            },
                            {
                            Subject:'English',
                            MaxMArks:100,
                            MinMarks:40,
                            ObtainedMarks:80,
                            Status:'Pass'
                            }
                            ]




    },
{

        name:'Meghana',
        Age:10,
        Class:'10 class',
        image:'"https://images.all-free-download.com/images/graphicthumb/disney_disney_hd_series_of_cartoon_characters_snow_white_176351.jpg"'
                                Marks:[
                                    {
                                Subject:'Maths',
                                MaxMArks:100,
                                MinMarks:40,
                                ObtainedMarks:90,
                                Status:'Pass'

                                },
                                {
                                Subject:'Science',
                                MaxMArks:100,
                                MinMarks:40,
                                ObtainedMarks:80,
                                Status:'Pass'
                                },
                                {
                                    Subject:'Marathi',
                                MaxMArks:100,
                                MinMarks:40,
                                ObtainedMarks:30,
                                Status:'Fail'
                                },
                                {
                                Subject:'English',
                                MaxMArks:100,
                                MinMarks:40,
                                ObtainedMarks:80,
                                Status:'Pass'
                                }
                                ]
        }

];

function createStudentBlock(StudentDetails){
    var tabletag=document.createElement("table");
    tabletag.setAttribute('class',"Alignment");


   var tabletag=document.createElement("table");
   
   
   var theadtag=document.createElement("thead");
   tabletag.append(theadtag);

   var tr1=document.createElement("tr");
   theadtag.append(tr1);


   var th1=document.createElement("th");
   th1.innerText='student name:'+Stduentdetails.name;
   theadtag.append(th1);

}



for(var i=0;i< Stduentdetails.length;i++)
{
    Stduentdetails[i];
}




