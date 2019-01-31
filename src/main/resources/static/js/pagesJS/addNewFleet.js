$(document).ready(function() {
  $("#viewList").click(function() {
    window.location.href = "/boss/viewFleet";
  });
  $("#addAnother").click(function() {
    window.location.reload();
  });
});

$(document).ready(function() {
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
    var form = $("#newFleet");
    var method = "POST";
    var url = "/boss/vehicle";
    var data = {
      license: form.find("[name=license]").val(),
      vin: form.find("[name=vin]").val(),
      modelYear: form.find("[name=modelYear]").val(),
      make: form.find("[name=make]").val(),
      modelNumber: form.find("[name=modelNumber]").val(),
      description: form.find("[name=description]").val()
    };
    // stringifying the data for ajax
    data = JSON.stringify(data);

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
      error: function(error) {
        console.log(" !!! Error" + error + " !!! ");
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
    ], // end row
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
