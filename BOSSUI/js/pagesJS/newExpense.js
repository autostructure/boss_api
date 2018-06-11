var api = "http://localhost:8090/expense";
// var api2 = "http://fsxrnsx0128.wrk.fs.usda.gov/aar/services/api/getApprovalReview?requestid=2" 

// NEED TO CHANGE BACK WHEN DONE TESTING

$(document).ready(function() {

    $('#expense').DataTable({  
        // "bPaginate": false,
        // "bfilter": false,
        // "bInfo": false,
        // "bSearch": false,
        bProcessing: true,
        ajax: {
            url : "http://localhost:8090/expense", "dataSrc": ""
        },

        columns:[
            {data: "actCode"},       
            {data: "activityCode"},
            {data: "employeeProfile.nameCode"},
            {data: "description"},
            {data: "payPeriod"},
            {data: "id"},
            {data: "jobCode.jobCode"},
            {data: "expenseCode"},
            {data: null,
                "render": function(){
                    return 'Total'
                }
            },
            {data: "obligatedDate"},
            {data: null,
                "render": function(){
                    return 'Elip'
                }
            },
            {data: null,
                "render": function(){
                    return 'Select'
                }
            }],
        })
    });





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