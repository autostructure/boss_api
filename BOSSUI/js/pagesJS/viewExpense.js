var api = "http://localhost:8090/expense";
// var api2 = "http://fsxrnsx0128.wrk.fs.usda.gov/aar/services/api/getApprovalReview?requestid=2" 

// NEED TO CHANGE BACK WHEN DONE TESTING

var dataSet = [
    [ "S", "AD", "LaneyM", "UPS", "05", "2019", "FRF13818", "26", "12,000,000", "2011/04/25" ],
    [ "FS", "HD", "LaneyM", "FEDEX", "05","2019", "FRF13818", "26", "12,000,000", "2011/07/25" ],
    [ "SF", "TD", "LaneyM", "UPS", "05", "2019","FRF13818", "26", "1,877", "2011/07/25" ],
    [ "DS", "GD", "LaneyM", "AZ", "05", "2019","FRF13818", "26", "12,000,000", "2011/07/25" ],
    [ "RS", "AD", "LaneyM", "UPS", "05", "2019","FRF13818", "26", "100", "2011/07/25" ],
    [ "R", "DD", "LaneyM", "DISCOUNT STORAGE", "05", "2016","FRF13818", "26", "12,000", "2011/07/25" ],
    [ "K", "D", "LaneyM", "UPS", "05", "2019","FRF13818", "26", "12,000,000", "2011/07/25" ],

];

$(document).ready(function() {

    $('#expense').DataTable({  
        dom: 'Bfrtip',
        bProcessing: true,
        // ajax: {
        //     url : "http://localhost:8090/expense", "dataSrc": dataSet
        // },
        buttons: [
            'print'
        ],
        data: dataSet,
        "columnDefs": 
        {"width": "40%", "targets": "3"},

        // columns:[
        //     {data: "actCode"},       
        //     {data: "activityCode"},
        //     {data: "employeeProfile.nameCode"},
        //     {data: "description"},
        //     {data: "payPeriod"},
        //     {data: "id"},
        //     {data: "jobCode.jobCode"},
        //     {data: "expenseCode"},
        //     {data: null,
        //         "render": function(){
        //             return 'Total'
        //         }
        //     },
        //     {data: "obligatedDate"},
        //     {data: null,
        //         "render": function(){
        //             return 'Elip'
        //         }
        //     },
        //     {data: null,
        //         "render": function(){
        //             return 'Select'
        //         }
        //     }],
        columns: [
            { title: "Act Code" },
            { title: "Sec Code" },
            { title: "Name Code" },
            { title: "Description" },
            { title: "Pay Period" },
            { title: "Seq #." },
            { title: "Job Code" },
            { title: "Exp Code" },
            { title: "Total" },
            { title: "Date Obl" },
            {data: null,
                "render": function(){
                    return '<i class="fa fa-ellipsis-v"></i>'
                }
            },
            {data: null,
                "render": function(){
                    return '<i class="fa fa-clipboard" style="color:#006633"></i>'
                }
            }],
        
        })
    });

    // <th scope="col">Act Code</th>
    // <th scope="col">Sec Code</th>
    // <th scope="col">Name Code</th>
    // <th scope="col">Description</th>
    // <th scope="col">Pay Period</th>
    // <th scope="col">Seq. #</th>
    // <th scope="col">Job Code</th>
    // <th scope="col">Exp Code</th>
    // <th scope="col">Total</th>
    // <th scope="col">Date Obl</th>
    // <th scope="col">Elipsis</th>
    // <th scope="col">Select</th>  



    // [
    //     {
    //       "actCode": "string",
    //       "activityCode": "string",
    //       "category": {
    //         "description": "string",
    //         "id": 0
    //       },
    //       "createdAt": "2018-06-11T19:21:20.344Z",
    //       "description": "string",
    //       "employeeProfile": {
    //         "firstName": "string",
    //         "id": 0,
    //         "lastName": "string",
    //         "nameCode": "string",
    //         "title": "string"
    //       },
    //       "expenseCode": 0,
    //       "expenseDetails": [
    //         {
    //           "amount": 0,
    //           "dateVerified": "2018-06-11T19:21:20.344Z",
    //           "id": 0
    //         }
    //       ],
    //       "id": 0,
    //       "jobCode": {
    //         "description": "string",
    //         "id": 0,
    //         "jobCode": "string",
    //         "obligated": 0,
    //         "operating": 0,
    //         "unitCode": 0
    //       },
    //       "obligatedDate": "2018-06-11T19:21:20.344Z",
    //       "overrideCode": "string",
    //       "payPeriod": 0,
    //       "paymentCode": "string",
    //       "secCode": "string",
    //       "state": "string",
    //       "total": 0,
    //       "travelDetails": [
    //         {
    //           "fromDate": "2018-06-11T19:21:20.344Z",
    //           "id": 0,
    //           "remarks": "string",
    //           "toDate": "2018-06-11T19:21:20.344Z"
    //         }
    //       ],
    //       "updatedAt": "2018-06-11T19:21:20.344Z"
    //     }
    //   ]