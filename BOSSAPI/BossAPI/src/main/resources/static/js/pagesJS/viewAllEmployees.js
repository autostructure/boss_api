var tempData = [
{"nameCode": "jSmith", "lastName": "Smith", "firstName": "John", "supervisor": "Cindy", "officePhone": "806-662-1234", "cellPhone": "543-555-1233", "dutyStation": "Ogden, UT", "email": "jsmith@fs.fed.us"},
{"nameCode": "sJohn", "lastName": "John", "firstName": "Samantha", "supervisor": "Sheena", "officePhone": "424-662-1234", "cellPhone": "333-555-1233", "dutyStation": "Pontiac, MI", "email": "sjohn@fs.fed.us"},
{"nameCode": "mLaney", "lastName": "Laney", "firstName": "Mike", "supervisor": "Cindy", "officePhone": "644-342-2222", "cellPhone": "555-555-1233", "dutyStation": "Sandusky, OH", "email": "mlaney@fs.fed.us"},
{"nameCode": "bHowden", "lastName": "Howden", "firstName": "Ben", "supervisor": "Becky", "officePhone": "643-662-4444", "cellPhone": "989-424-1233", "dutyStation": "Bearrun, MT", "email": "bhowden@fs.fed.us"},
{"nameCode": "sOhlg", "lastName": "Ohlg", "firstName": "Sam", "supervisor": "Becky", "officePhone": "977-536-9999", "cellPhone": "666-646-6464", "dutyStation": "Pheonix, AZ", "email": "sohlg@fs.fed.us"},
{"nameCode": "dChar", "lastName": "Char", "firstName": "Dorito", "supervisor": "Sheena", "officePhone": "789-662-7777", "cellPhone": "777-777-7777", "dutyStation": "Hemlock, WY", "email": "dchar@fs.fed.us"},
{"nameCode": "fFranklin", "lastName": "Franklin", "firstName": "Fred", "supervisor": "Cindy", "officePhone": "879-662-1234", "cellPhone": "333-333-3434", "dutyStation": "Saginaw, TN", "email": "fredfrank@fs.fed.us"},
{"nameCode": "aPacino", "lastName": "Pacino", "firstName": "Al", "supervisor": "Sheena", "officePhone": "806-977-1234", "cellPhone": "777-656-6565", "dutyStation": "Fresco, WY", "email": "pacinoal@fs.fed.us"},    
{"nameCode": "rDeniro", "lastName": "Deniro", "firstName": "Robert", "supervisor": "Becky", "officePhone": "555-555-1234", "cellPhone": "999-999-1233", "dutyStation": "Blanch, UT", "email": "robertd@fs.fed.us"},
{"nameCode": "bGrizzly", "lastName": "Grizzly", "firstName": "Bear", "supervisor": "Cindy", "officePhone": "665-655-6566", "cellPhone": "222-232-4252", "dutyStation": "Mira, CA", "email": "bgrizz@fs.fed.us"},
];


var tempAPI = 'http://localhost:8090/jobCode?financialYear=';

        $(document).ready(function() {
        $('#employees').addClass('show');
        $('#employees > li:nth-child(1) > a').addClass('highlight');    


        var table = $('#allEmployees').DataTable( {
            dom: "Brtip",
            // searchable: true,
            destroy: true,
            "paging": false,
            // ajax:{"url":tempAPI + yr,"dataSrc":""},
            data: tempData,
            columnDefs: [ {
            "targets": [5],
            "orderable": false
            }],
            
            columns:[
            { data: "nameCode"},
            { data: "lastName"},
            { data:"firstName" },
            { data:"supervisor" },
            { data:"officePhone" },
            { data:"cellPhone" },
            { data:"dutyStation" },
            { data:"email" },
            {data: null,
                "render": function(data, type, row){
                    return `
                    <div class="dropdown1">
                    <button class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                        <div class="dropdown-content1">
                            <a data-target="#myModal" href="#myModal" class="editBtn" id="' + row.id + '"  data-id=\"" + full[1] + "\" >Edit Employee Details</a>
                        </div>
                    </div>
                    
                    `;
                }
           
            }],  
                buttons:[
            {
                text:'Print <i class="fa fa-lg fa-print"></i>',
                extend:'print',
                exportOptions:{
                    columns: [0,1,2,3,4,5,6,7]
                },
                className: 'table-btns print-btn'
            },
            {
                text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                extend: 'excel',
                exportOptions:{
                    columns: [0,1,2,3,4,5,6,7]
                },
                className: 'table-btns excel-btn'
            },
            {
                text:'Add <i class="fa fa-lg fa-plus"></i>',
                action:function(){
                    $('#addModal').modal('show');
                },
                className: 'table-btns add-btn'
            },
            {
                text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
                action: function() {
                    window.location.reload();
                },
                className: 'table-btns refresh-btn'
            }
        ],
        
        
        
        });

});
          
    
    
