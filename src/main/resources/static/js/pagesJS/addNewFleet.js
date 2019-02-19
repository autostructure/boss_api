$(document).ready(function () {




  $("#viewList").click(function() {
    window.location.href = "/boss/viewFleet";
  });
  $("#addAnother").click(function() {
    window.location.reload();
  });
});

$(document).ready(function () {


    var form = $("#newFleet");
    $.ajax({
        url: '/boss/employeeProfile',
        type: 'GET',
        cahce: false,
        async: false,
        success: function (json) {
            $.each(json, function (index, value) {

                form.find("[name=employee]").append('<option value="' + value.id + '">' + value.lastName + ', ' + value.firstName + '</option>');
            });
        }, error: function (a, b, c) {
            console.log(a.responseText);
        }
    });

  // hiding error message once we start modifying the form again
  $("form").on("click focus", function() {
    $("#error, #success").hide();
  });

  // submitting data for new aux contacts
  $("input[type=submit]").on("click", function(e) {
    // e.preventDefault();
    // checking form validity
    if ($("#newFleet:valid").length == 0) {
      showError("Please ensure all fields are filled out correctly");
      return false;
    } else {
      e.preventDefault();
    }
    // creating vars to submit to ajax
    
    var method = "POST";
      var url = "/boss/vehicle";
      var test_employee = $('[name=employee]').val();
      
      var emp;
      $.ajax({
          url: "/boss/employeeProfile/" + $('[name=employee]').val(),
          type: 'GET',
          cache: false,
          aysnc: false,
          success: function (json) {
              emp = json;
          }, error: function(a,b,c) {
              console.log(a.responseText);
          }
      });

      
      var vehicleData = {

          "accessory": " ",
          "accessory2": " ",
          "assignedOperator": { "id": test_employee },
          "camera": " ",
          "cityOrLocation": " ",
          "color": " ",
          "dateAquired": "2019-02-05T19:44:32.540Z",
          "description": form.find("[name=description]").val(),
          "disposalDate": "2019-02-05T19:44:32.540Z",
          "engineNumber": " ",
          "equipmentNumber": " ",
          "id": 0,
          "keysToolBox": " ",
          "license": form.find("[name=license]").val(),
          "maintenanceRecords": [

          ],
          "make": form.find("[name=make]").val(),
          "modelNumber": form.find("[name=modelNumber]").val(),
          "modelYear": parseInt(form.find("[name=modelYear]").val()),
          "monthlyIWFIAUsage": [
             
          ],
          "monthsNotUsed": [

          ],
          "oldLicense": " ",
          "ownershipType": " ",
          "releasedDate": "2019-02-05T19:44:32.541Z",
          "replacementDate": "2019-02-05T19:44:32.541Z",
          "state": " ",
          "tonneau": " ",
          "vehicleClassCode": " ",
          "vehicleCost": [

          ],
          "vin": form.find("[name=vin]").val()
      };
      


    /*var data = {
      //license: form.find("[name=license]").val(),
      //vin: form.find("[name=vin]").val(),
      //modelYear: form.find("[name=modelYear]").val(),
      //make: ,
      //modelNumber: ,
      description: 
    };
    */

    // stringifying the data for ajax
   var data = JSON.stringify(vehicleData);
   console.log(data);
   
    // ajax post call
    $.ajax({
      url: url,
      type: method,
      data: data,
      contentType: "application/json",
      cache: false,
      timeout: 600000,
      success: function(response) {
        $("#exampleModal").modal("show");
        console.log(" *** successfully updated see data below ***");
        console.log(data);
      },
      error: function(e) {
        console.log(" !!! Error" + e.responseText + " !!! ");
        return false;
      }
    });
  });
});

// showing error message if form is not valid
function showError(msg) {
  $("#errorText").html(msg);
  $("#error").show();
  $("html,body").animate({ scrollTop: "100px" });
}

var fields = {
  newFleet: [
    [
      //vehicle info row
      {
        fieldName: "license",
        title: "License",
        type: "input/text",
        colspan: 6,
        placeholder: "Enter License"
      },
      {
        fieldName: "vin",
        title: "Vin",
        type: "input/vin",
        required: true,
        colspan: 6,
        placeholder: "Enter Vin"
      }
    ],
    [
      // vehicle info row
      {
        fieldName: "modelYear",
        title: "Vehicle Year",
        type: "select/vyear",
        required: true,
        colspan: 3
      },
      {
        fieldName: "make",
        title: "Make",
        type: "input/text",
        required: true,
        colspan: 3,
        placeholder: "Enter Make"
      },
      {
        fieldName: "modelNumber",
        title: "Vehicle Model",
        type: "input/text",
        required: true,
        colspan: 3,
        placeholder: "Enter Model"
      },
      {
        fieldName: "description",
        title: "Vehicle Description",
        type: "input/text",
        colspan: 3,
        placeholder: "I.E. Crew Cab",
        required: true
      }
      ], [{
        fieldName: "employee",
        title: "select employee",
        type: "select/input",
        colspan: 6,
        placeholder: "select employee"
      }], // end row
    [
      {
        custom:
          '<input type="submit" class="btn btn-success addNewFleetBtn"  value="Add Fleet Vehicle">'
      }
    ]
  ]
};

// calling bootstrap field writer function
addBootstrapFields(fields);
