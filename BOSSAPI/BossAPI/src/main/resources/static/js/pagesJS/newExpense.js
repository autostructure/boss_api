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
            return '<option id="'+sObj.name+'">'+sObj.name +'</option>'
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
              return '<option id="'+sObj.id+'">'+sObj.id + '   ' + sObj.type + '</option>'
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
                return '<option id="'+sObj.id+'">'+sObj.name +'</option>'
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
                })) ;
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
        var markup = "<tr><td id='tableExp'>" + expfront +"</td><td id='tableJobCode'>" + jobcode + 
                     "</td><td id='tableHours'>" + hours + "</td><td id='tableType'>" + expback + "</td><td id='amount'>Amount to be Calc</td>" +
                        '<td> <div class="input-group date" data-provide="datepicker">'+
                          '<input type="text" placeholder="Pick a date" id="tableDateVerified" class="form-control">'+
                          '<div class="input-group-addon">'+
                            '<span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>'+
                          '</div>'+
                        '</div></td></tr>';
        $("#timeTable tbody").append(markup);
        console.log($('#tableJobCode').text());
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


    $("#add").click(function() {
    		var lastField = $("#buildyourform div:last");
        var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;
        var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
        fieldWrapper.data("idx", intId);
        var fName = $("<input type=\"text\" class=\"fieldname\" />");
        var removeButton = $("<input type=\"button\" class=\"remove\" value=\"-\" />");
        removeButton.click(function() {
            $(this).parent().remove();
        });
        fieldWrapper.append(fName);
        fieldWrapper.append(fType);
        fieldWrapper.append(removeButton);
        $("#buildyourform").append(fieldWrapper);
    });
    $("#preview").click(function() {
        $("#yourform").remove();
        var fieldSet = $("<fieldset id=\"yourform\"><legend>Your Form</legend></fieldset>");
        $("#buildyourform div").each(function() {
            var id = "input" + $(this).attr("id").replace("field","");
            var label = $("<label for=\"" + id + "\">" + $(this).find("input.fieldname").first().val() + "</label>");
            var input;
            switch ($(this).find("select.fieldtype").first().val()) {
                case "checkbox":
                    input = $("<input type=\"checkbox\" id=\"" + id + "\" name=\"" + id + "\" />");
                    break;
                case "textbox":
                    input = $("<input type=\"text\" id=\"" + id + "\" name=\"" + id + "\" />");
                    break;
                case "textarea":
                    input = $("<textarea id=\"" + id + "\" name=\"" + id + "\" ></textarea>");
                    break;    
            }
            fieldSet.append(label);
            fieldSet.append(input);
        });
        $("body").append(fieldSet);

});