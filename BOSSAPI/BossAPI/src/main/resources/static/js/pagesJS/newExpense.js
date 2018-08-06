

// TODO REFACTOR ALL CODE

var api = 'http://localhost:8090'

$(document).ready(function() {
  // setting up datepickers to current date
  $("#dateentered, #tdateentered, #vdateentered, #odateentered").datepicker('setDate', new Date());
  $("#datemod, #tdatemod, #vdatemod, #odatemod").datepicker('setDate', new Date());
  $("#dateob, #tdateob, #vdateob, #odateob").datepicker('setDate', new Date());

  // showing expense on sidenav
  $('#expenseSub').addClass('show');
  $('#expenseSub > li:nth-child(1) > a').addClass('highlight');
  $.ajax({
    type: 'GET',
    url: api+'/jobCode?financialYear=2017',
    success: function(json){
      $.each(json, function(value, key) {
        $('#jobcode, #tjobcode, #vjobcode, #ojobcode').append(json.map(function(jc){
          return '<option value="'+jc.id+'"id="'+jc.id+'">'+jc.jobCode +'</option>';
          $('#jobCode option:selected').attr(jc.id, jc.jobCode)            
        })) ;   
        });     
      }
    }); //end of get jobcode ajax call
    $.ajax({
      type: 'GET',
      url: api+'/activityCode',
      success: function(json){
        $.each(json, function(value, key) {
          $('#actcode, #tactcode, #vactcode, #oactcode').append(json.map(function(sObj){
            return '<option value="'+sObj.name+'">'+sObj.name +'</option>'
          })) ;

          });
        }
      }); //end of get jobcode ajax call
      $.ajax({
        type: 'GET',
        url: api+'/expenseCode',
        success: function(json){
          $.each(json, function(value, key) {
            $('#expcode, #texpcode, #vexpcode, #oexpcode').append(json.map(function(sObj){
              return '<option value="'+sObj.id+'">'+sObj.id + '   ' + sObj.type + '</option>'
            })) ;
            });
          }
        }); //end of get jobcode ajax call
        $.ajax({
          type: 'GET',
          url: api+'/budgetObjectCode',
          success: function(json){
            $.each(json, function(value, key) {
              $('#oboc').append(json.map(function(sObj){
                return '<option value="'+sObj.id+'">'+sObj.name +'</option>'
              })) ;
              });
            }
          }); //end of get jobcode ajax call

          $.ajax({
            type: 'GET',
            url: api+'/employeeProfile',
            success: function(json){
              $.each(json, function(value, key) {
                $('#namecode, #tnamecode, #vnamecode, #onamecode').append(json.map(function(sObj){
                  return '<option id="'+sObj.id+'">'+sObj.nameCode +'</option>'
                }));
                $('#namecode').on('change', function(){

                })
                });
              }
            }); //end of get namecode ajax call          
});


// setting current year and giving a range of years for dropdown
$('#fy, #tfy, #vfy, #ofy').each(function() {
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


// auto selecting the job codes unit and description based off job code selected
  $('#jobcode').on('change', function(){
    var key = (this.value);
    $.get(api+'/jobCode/'+key, function(data,status){
      JSON.stringify(data);
      $('#jobcodedesc').val(data.description.replace(/\"/g, ""));
      if(data.description.length < 0){
        $('#unitcode').val(data.overrideCode.replace(/\"/g, ""));
      }
    })
  })
  $('#tjobcode').on('change', function(){
    var key = (this.value);
    $.get(api+'/jobCode/'+key, function(data,status){
      JSON.stringify(data);
      $('#tjobcodedesc').val(data.description.replace(/\"/g, ""));
      if(data.description.length < 0){
        $('#tunitcode').val(data.overrideCode.replace(/\"/g, ""));
      }
    })
  })
  $('#vjobcode').on('change', function(){
    var key = (this.value);
    $.get(api+'/jobCode/'+key, function(data,status){
      JSON.stringify(data);
      $('#vjobcodedesc').val(data.description.replace(/\"/g, ""));
      if(data.description.length < 0){
        $('#vunitcode').val(data.overrideCode.replace(/\"/g, ""));
      }
    })
  })
  $('#ojobcode').on('change', function(){
    var key = (this.value);
    $.get(api+'/jobCode/'+key, function(data,status){
      JSON.stringify(data);
      $('#ojobcodedesc').val(data.description.replace(/\"/g, ""));
      if(data.description.length < 0){
        $('#ounitcode').val(data.overrideCode.replace(/\"/g, ""));
      }
    })
  })


// setting up adding to table for time
    $("#addbtn").click(function(){
        var jobcode = $("#jobcode").val();
        var desc = $("#jobcodedesc").val();
        var expcode = $("#expcode").val();
        var expfront = expcode.substring(0, 2);
        var expback = expcode.substr(2);
        var amount = $('#amount').val();
        var hours = $("#hours").val();
        var markup = "<tr><td><input type='hidden' id='tableExp' value='" + expfront +"'>" + expfront + "</td><td><input type='hidden' id='tableJobCode' value='" + jobcode +"'>" + jobcode + "</td>" +
                     "<td><input type='hidden' id='tableHours' value='" + hours + "'>" + hours + "</td><td><input type='hidden' id='tableType' value='" + expback + "'>" + expback + "</td><td id='amount'>Amount to be Calc</td>" +
                        '<td> <div class="input-group date" data-provide="datepicker">'+
                          '<input type="text" placeholder="Pick a date" id="tableDateVerified" class="form-control">'+
                          '<div class="input-group-addon">'+
                            '<span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>'+
                          '</div>'+
                        '</div></td></tr>';
        $("#timeTable tbody").append(markup);
        console.log($('#tableExp').val());
        console.log($('#tableJobCode').val());
        console.log($('#tableHours').val());
        console.log($('#tableType').val());
    });
// setting up adding to table for travel
    $("#taddbtn").click(function(){
      var jobcode = $("#tjobcode").val();
      var desc = $("#tjobcodedesc").val();
      var expcode = $("#texpcode").val();
      var expfront = expcode.substring(0, 2);
      var expback = expcode.substr(2);
      var amount = $('#tamount').val();
      // var hours = $("#hours").val();
      var markup = "<tr><td id='tableExp'>" + expfront +"</td><td id='tableJobCode'>" + jobcode + 
                   "</td><td id='tableType'>" + expback + "</td><td id='amount'>" + amount + "</td>" +
                      '<td> <div class="input-group date" data-provide="datepicker">'+
                        '<input type="text" placeholder="Pick a date" id="tableDateVerified" class="form-control">'+
                        '<div class="input-group-addon">'+
                          '<span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>'+
                        '</div>'+
                      '</div></td></tr>';
      $("#travelTable tbody").append(markup);
      console.log($('#ttableJobCode').text());
  });

  // $('#addbtn').on('click', function(){
  //   var 
  //   $('#timeTable').append(
  //   '<tr>' +
  //   '<td>' +
  //       '<input type="text" id="tableExp" class="form-control" aria-label="description" value="01" aria-describedby="basic-addon1">' +
  //   '</td>'+
  //   '<td>'+
  //       '<input type="text" id="tableJobCode" class="form-control" aria-label="description" value="FRF13818" aria-describedby="basic-addon1">'+
  //   '</td>'+
  //   '<td>'+
  //       '<input type="text" id="tableHours" class="form-control" aria-label="description" value="20" aria-describedby="basic-addon1">'+
  //   '</td>'+
  //   '<td>'+
  //       '<span id="tableJobCodeDesc" class="tableType">Base Hours</span>'+
  //   '</td>'+
  //   '<td>'+ 
  //       '<input type="text" id="tableAmount" class="form-control"  aria-label="description" value="$11,234" aria-describedby="basic-addon1">'+
  //   '</td>'+
  //   '<td>'+
  //       '<div class="input-group date" data-provide="datepicker">'+
  //           '<input type="text" placeholder="Pick a date" id="tableDateVerified" class="form-control">'+
  //           '<div class="input-group-addon">'+
  //               '<span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>'+
  //           '</div>'+
  //       '</div>'+                                                                                
  //   '</td>'+
  // '</tr>'
  // )
  // });
  


// SETTING UP THE TIME DATA
var timeData = 
{
    "actCode": "string",
    "activityCode": {
      "code": "string",
      "name": "string"
    },
    "budgetObjectCode": {
      "id": 0,
      "name": "string"
    },
    "category": {
      "description": "string",
      "id": 0
    },
    "createdAt": "2018-06-14T20:28:15.769Z",
    "description": "string",
    "employeeProfile": {
      "firstName": "string",
      "id": 0,
      "lastName": "string",
      "nameCode": "string",
      "title": "string"
    },
    "expenseDetails": [
      {
        "amount": 0,
        "dateVerified": "2018-06-14T20:28:15.769Z",
        "expenseCode": {
          "id": 0,
          "type": "string"
        },
        "hours": 0,
        "id": 0,
        "jobCode": {
          "description": "string",
          "id": 0,
          "jobCode": "string",
          "obligated": 0,
          "operating": 0,
          "unitCode": 0
        }
      }
    ],
    "financialYear": 0,
    "id": 0,
    "jobCode": {
      "description": "string",
      "id": 0,
      "jobCode": "string",
      "obligated": 0,
      "operating": 0,
      "unitCode": 0
    },
    "obligatedDate": "2018-06-14T20:28:15.769Z",
    "overrideCode": "string",
    "payPeriod": 0,
    "paymentCode": {
      "code": "string",
      "name": "string"
    },
    "secCode": "string",
    "state": "string",
    "total": 0,
    "travelDetails": [
      {
        "fromDate": "2018-06-14T20:28:15.769Z",
        "id": 0,
        "remarks": "string",
        "state": "string",
        "toDate": "2018-06-14T20:28:15.769Z",
        "voucherNumber": 0
      }
    ],
    "unitCode": "string",
    "updatedAt": "2018-06-14T20:28:15.769Z"
  }

$('#timeForm').submit(function(e){
  console.log(timeData);
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: api+'/expense',
    data: timeData,
    dataType: 'json',
    success: function(data)
    {
      alert(data);
    },
    error: function(e){
      console.log(e.responseText);
    }
  });
  e.preventDefault();
});




$("#timeSubmit").click(function () {
  var fy = $("#fy").val();
  var dateEntered = $("#dateEntered").val();
  var datemod = $("#datemod").val();
  var dateob = $("#dateob").val();
  var namecode = $("#namecode").val();
  var desc = $("#desc").val();
  var actcode = $("#actcode").val();
  var boc = $("#boc").val();
  var pc = $("#pc").val();
  var payperiod = $("#payperiod").val();
  var comphours = $("#comphours").val();
  var state = $("#state").val();
  var remarks = $("#remarks").val();
  var unitcode = $("#unitcode").val();
  var jobcode = $("jobcode").val();
  var jobcodeDesc = $("jobcodedesc").val();
  var expcode = $("expcode").val();
  var hours = $("hours").val();
  var table_list = [];
  $('#timeTable tr').each(function () {
      var table_exp = $(this).find("#tableexp").html();
      var table_jobcode = $(this).find("#tableJobCode").html();
      var table_hours = $(this).find("#tableHours").html();
      var table_jobCodeDesc = $(this).find("#tableJobCodeDesc").html();
      var table_Amount = $(this).find("#tableAmount").html();
      var table_dateVerified = $(this).find("#tableDateVerified").html();
      table_list[0] = table_exp;
      table_list[1] = table_jobcode;
      table_list[2] = table_hours;
      table_list[3] = table_jobCodeDesc;
      table_list[4] = table_Amount;
      table_list[5] = table_dateVerified;
  });
  
  //expense Details
  var expenseDetails_ = timeData.expenseDetails;
  expenseDetails_.amount = table_list[4];
  expenseDetails_.dateVerified = table_list[5];
  expenseDetails_.expenseCode.id;
  expenseDetails_.expenseCode.type;
  expenseDetails_.hours = table_list[2];
  expenseDetails_.id;
  expenseDetails_.jobcode[0].description;
  expenseDetails_.jobcode[0].id;
  expenseDetails_.jobcode[0].jobcode = jobcode;
  expenseDetails_.jobcode[0].obligated;
  expenseDetails_.jobcode[0].operating;
  expenseDetails_.jobcode[0].unitCode;
  timeData.expenseDetails = expenseDetails_;
  //----------------
  //employeeProfile
  var employeeProfile_ = timeData.employeeProfile;
  employeeProfile_.firstName;
  employeeProfile_.id;
  employeeProfile_.lastName;
  employeeProfile_.nameCode;
  employeeProfile_.title;
  //-----------------
  //category
  timeData.category.description;
  timeData.category.id;
  //-----------------
  //budgetObjectCode
  timeData.budgetObjectCode.id;
  timeData.budgetObjectCode.name;
  //-----------------
  //activityCode
  timeData.activityCode.code;
  timeData.activityCode.name;
  //-----------------
  //individual JSON values
  timeData.actCode = actCode;
  timeData.createdAt = dateEntered;
  timeData.description = desc;
  timeData.financialYear = fy;
  timeData.id;
  timeData.obligatedDate = dateob;
  timeData.overrideCode;
  timeData.payPeriod = payperiod;
  timeData.secCode;
  timeData.state = state;
  timeData.total;
  timeData.unitCode = unitcode;
  timeData.updatedAt = datemod;
  //-----------------
  //jobCode
  var jobcode_ = timeData.jobCode;
  jobecode_.description = jobcode_desc;
  jobcode_.id;
  jobcode_.jobcode = jobcode;
  jobcode_.obligated;
  jobcode_.operating;
  jobcode_.unitCode;
  timeData.jobCode = jobcode_;
  //-----------------
  //travelDetails
  var travelDetails_ = timeData.travelDetails[0];
  travelDetails_.fromDate;
  travelDetails_.id;
  travelDetails_.remarks = remarks;
  travelDetails_.state = state;
  travelDetails_.toDate;
  travelDetails_.voucherNumber;
  timeData.travelDetails[0] = travelDetails_;
  //------------------
  
  $.ajax({
      url: api + "/expense",
      data: timeData,
      type: "POST",
      success(result, status, xhr) {
          console.log(result);
      },
      error(xhr, status, error) {
          console.log(error);
      }
  });
});
