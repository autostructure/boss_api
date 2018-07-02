$(document).ready(function() {
    // $(".datepicker").datepicker('setDate', new Date());
    $("#dateentered, #tvdateentered").datepicker('setDate', new Date());
    $("#datemod, #tvdatemod").datepicker('setDate', new Date());
    $("#dateob, #tvdateob").datepicker('setDate', new Date());
    $('#expenseSub').addClass('show');
    $('#expenseSub > li:nth-child(1) > a').addClass('highlight');
    $.ajax({
      type: 'GET',
      url: 'http://localhost:8090/jobCode?financialYear=2017',
      success: function(json){
        $.each(json, function(value, key) {
          $('#jobcode, #jobcode1').append(json.map(function(sObj){
            return '<option id="'+sObj.jobCode+'">'+sObj.jobCode +'</option>'
          })) ;
          });
        }
      }); //end of get jobcode ajax call
      $.ajax({
        type: 'GET',
        url: 'http://localhost:8090/activityCode',
        success: function(json){
          $.each(json, function(value, key) {
            $('#actcode, #actcode1').append(json.map(function(sObj){
              return '<option id="'+sObj.name+'">'+sObj.name +'</option>'
            })) ;
            });
          }
        }); //end of get jobcode ajax call
        $.ajax({
          type: 'GET',
          url: 'http://localhost:8090/expenseCode',
          success: function(json){
            $.each(json, function(value, key) {
              $('#expcode, #expcode1').append(json.map(function(sObj){
                return '<option id="'+sObj.id+'">'+sObj.id + '   ' + sObj.type + '</option>'
              })) ;
              });
            }
          }); //end of get jobcode ajax call
});



$('#dropdownYear, #tvdropdownYear').each(function() {
    
      var year = (new Date()).getFullYear();
      var current = year;
      year -= 3;
      for (var i = 0; i < 6; i++) {
        if ((year+i) == current)
          $(this).append('<option selected value="' + (year + i) + '">' + (year + i) + '</option>');
        else
          $(this).append('<option value="' + (year + i) + '">' + (year + i) + '</option>');
      }
    
    });









// {
//     "actCode": "string",
//     "activityCode": {
//       "code": "string",
//       "name": "string"
//     },
//     "budgetObjectCode": {
//       "id": 0,
//       "name": "string"
//     },
//     "category": {
//       "description": "string",
//       "id": 0
//     },
//     "createdAt": "2018-06-14T20:28:15.769Z",
//     "description": "string",
//     "employeeProfile": {
//       "firstName": "string",
//       "id": 0,
//       "lastName": "string",
//       "nameCode": "string",
//       "title": "string"
//     },
//     "expenseDetails": [
//       {
//         "amount": 0,
//         "dateVerified": "2018-06-14T20:28:15.769Z",
//         "expenseCode": {
//           "id": 0,
//           "type": "string"
//         },
//         "hours": 0,
//         "id": 0,
//         "jobCode": {
//           "description": "string",
//           "id": 0,
//           "jobCode": "string",
//           "obligated": 0,
//           "operating": 0,
//           "unitCode": 0
//         }
//       }
//     ],
//     "financialYear": 0,
//     "id": 0,
//     "jobCode": {
//       "description": "string",
//       "id": 0,
//       "jobCode": "string",
//       "obligated": 0,
//       "operating": 0,
//       "unitCode": 0
//     },
//     "obligatedDate": "2018-06-14T20:28:15.769Z",
//     "overrideCode": "string",
//     "payPeriod": 0,
//     "paymentCode": {
//       "code": "string",
//       "name": "string"
//     },
//     "secCode": "string",
//     "state": "string",
//     "total": 0,
//     "travelDetails": [
//       {
//         "fromDate": "2018-06-14T20:28:15.769Z",
//         "id": 0,
//         "remarks": "string",
//         "state": "string",
//         "toDate": "2018-06-14T20:28:15.769Z",
//         "voucherNumber": 0
//       }
//     ],
//     "unitCode": "string",
//     "updatedAt": "2018-06-14T20:28:15.769Z"
//   }