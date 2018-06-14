var api = "http://localhost:8090/expense";
// var api2 = "http://fsxrnsx0128.wrk.fs.usda.gov/aar/services/api/getApprovalReview?requestid=2" 

// ONCE WE LOAD SOME DATA, NEED TO TURN AJAX URL AND REMOVE VAR

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
    $('#expenseSub').addClass('show');
    $('#expenseSub > li:nth-child(2) > a').addClass('highlight');

    var dt = $('#expense').DataTable({  
        dom: 'Bfrtip',
        bProcessing: true,
        // ajax: {
        //     url : "http://localhost:8090/expense", "dataSrc": dataSet
        // },
        buttons: [
            {
                text: 'Print <i class="fa fa-lg fa-print"></i>',
                extend: 'print',
                className: 'table-btns print-btn'
            },
            {
                text: 'Add <i class="fa fa-lg fa-plus"></i>',
                action: function(){
                    window.location.href = '../budget/newExpense.html';
                },
                className: 'table-btns add-btn'
            },
            {
                text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
                action: function(){
                    window.location.reload();
                },
                className: 'table-btns refresh-btn'
            }
          
        ],
        data: dataSet,
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
                    return `
                    <div class="dropdown1">
                    <button class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                    <div class="dropdown-content1">
                      <a href="#">View expense details</a>
                      <a href="#">Edit expense</a>
                      <a href="#">Delete expense</a>
                    </div>
                  </div>
                    
                    `
                }
            },
            {data: null,
                "render": function(){
                    return '<i class="fa fa-sticky-note" style="color:#006633"></i>'
                }
            }],
        
        })
    });



   // Configure Export Buttons
//    new $.fn.dataTable.Buttons( dt, {
//        buttons: [
          
//        ]
//    } );
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