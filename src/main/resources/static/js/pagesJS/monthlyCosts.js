// displaying the current vehicle information on IWFIA page
var id = window.location.pathname.split("/")[3];
if (id) {
  var url = "/boss/vehicle?id=" + id;
  if (parseInt(id)) {
    url = "/boss/vehicle/" + id;
  }
  var url = "/boss/vehicle/" + id;
  console.log(id);
  console.log(url);
  $.ajax({
    type: "GET",
    url: url,
    contentType: "application/json",
    dataType: "json",
    cache: false,
    timeout: 600000,
    success: function(vehs) {
      $("#pLicense").append(vehs.license);
      $("#pVin").append(vehs.vin);
      $("#pYear").append(vehs.modelYear);
      $("#pMake").append(vehs.make);
      $("#pModel").append(vehs.modelNumber);
    },
    error: function(json) {}
  });
}
// end

function updateCosts() {
  if ($("#monthlyCostsForm:valid").length == 0) {
    showError("Please ensure all fields are filled out correctly");
    return false;
  } else {
    var form = $("#monthlyCostsForm");
    var method = "PUT";
    var url = "/boss/vehicle/" + id;
    var cost = {
      beginMonth: parseInt(form.find("[name=beginMonth]").val()),
      beginYear: parseInt(form.find("[name=beginYear]").val()),
      endMonth: parseInt(form.find("[name=endMonth]").val()),
      endYear: parseInt(form.find("[name=endYear]").val()),
      forRate: parseInt(form.find("[name=forRate]").val()),
      mileageRate: form.find("[name=mileageRate]").val(),
      id: parseInt(id)
    };
    console.log(cost);
    makeAjaxCall(url, "GET", null)
      .then(
        function(dataIn) {
          console.log(dataIn);
          dataIn.vehicleCost.push(cost);
          dataOut = JSON.stringify(dataIn);
          console.log(dataIn);
          console.log(dataOut);
          alert(dataOut);
          return makeAjaxCall(url, method, dataOut);
        },
        function(error) {
          console.log("Error", error);
          console.log(error.responseJSON);
        }
      )
      .then(
        function(data) {
          console.log("successfully updated");
          console.log(data);
        },
        function(error) {
          console.log("Error", error);
          console.log(error.responseJSON);
          return false;
        }
      );
  }
}

// showing error message if form is not valid
function showError(msg) {
  $("#errorText").html(msg);
  $("#error").show();
  $("html,body").animate({ scrollTop: "100px" });
}

// using bootstrap field writer to populate the form
var fields = {
  monthlyCostsForm: [
    [
      {
        fieldName: "beginMonth",
        title: "Start Month",
        type: "select/vmonth",
        required: true,
        placeholder: "Enter Month"
      },
      {
        fieldName: "beginYear",
        title: "Start Year",
        type: "select/vyear",
        required: true,
        placeholder: "Enter Year"
      },
      {
        fieldName: "endMonth",
        title: "End Month",
        type: "select/vmonth",
        required: true,
        placeholder: "Enter Month"
      },
      {
        fieldName: "endYear",
        title: "End Year",
        type: "select/vyear",
        required: true,
        placeholder: "Enter Year"
      },
      {
        fieldName: "forRate",
        title: "For Rate",
        required: true,
        type: "input/text"
      },
      {
        fieldName: "mileageRate",
        title: "Mileage Rate",
        type: "input/text",
        required: true,
        placeholder: "Enter Mileage Rate"
      }
    ],
    [
      {
        custom:
          '<button id="submitV" class="btn fleetBtn" type="button">Add Vehicle Cost</button>'
      }
    ]
  ]
};
// end of bootstrap field writer

// calling bootstrapfieldwriter function
addBootstrapFields(fields);

// adding the update costs  and click listener to submit btn
$("#submitV").on("click", updateCosts);

// hiding error message once we start modifying the form again
$("form").on("click focus", function() {
  $("#error, #success").hide();
});
