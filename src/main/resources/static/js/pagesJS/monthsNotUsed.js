$(document).ready(function() {
  // displaying the current vehicle information on months out of service page
  var id = window.location.pathname.split("/")[3];
  if (id) {
    var url = "/boss/vehicle?id=" + id;
    if (parseInt(id)) {
      url = "/boss/vehicle/" + id;
    }
    var url = "/boss/vehicle/" + id;
    console.log(url);
    console.log(id);
    $.ajax({
      type: "GET",
      url: url,
      contentType: "application/json",
      dataType: "json",
      cache: false,
      timeout: 600000,
      success: function(vehs) {
        console.log(vehs);
        $("#pLicense").append(vehs.license);
        $("#pVin").append(vehs.vin);
        $("#pYear").append(vehs.modelYear);
        $("#pMake").append(vehs.make);
        $("#pModel").append(vehs.modelNumber);

        var monthsNotUsedVar = vehs.monthsNotUsed;
        var tbDat = [];
        for (x in monthsNotUsedVar) {
          var mm = monthsNotUsedVar[x];
          var year = mm.year;
          for (y in mm.months) {
            tbDat.push({ vYear: year, vMonth: mm.months[y] });
          }
        }
        ////populateDataTable(vehs);
        populateDataTable(tbDat);
      },
      error: function(a, b, c) {
        console.log(a.responseText);
      }
    });
  }
  // end

  // function to populate the table
  function populateDataTable(testData) {
    var table = $("#monthlyCosts").DataTable({
      data: testData,
      bProcessing: true,
      bPaginate: false,
      dom: "Brtip",
      columns: [{ data: "vMonth" }, { data: "vYear" }],
      buttons: [
        {
          text: 'Print <i class="fa fa-lg fa-print"></i>',
          extend: "print",
          exportOptions: {
            columns: [0, 1]
          },
          className: "table-btns print-btn"
        },
        {
          text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
          extend: "excel",
          exportOptions: {
            columns: [0, 1]
          },
          className: "table-btns excel-btn"
        },

        {
          text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
          action: function() {
            window.location.reload();
          },
          className: "table-btns refresh-btn"
        }
      ]
    });
  } //end of populating the table function

  // hiding error message once we start modifying the form again
  $("form").on("click focus", function() {
    $("#error, #success").hide();
  });

  // submitting data for new aux contacts
  $("input[type=submit]").on("click", function(e) {
    // checking form validity
    if ($("#monthlyCostsForm:valid").length == 0) {
      showError("Please ensure all fields are filled out correctly");
      return false;
    } else {
      e.preventDefault();
    }
    // creating vars to submit to ajax
    var method = "PUT";
    var url = "/boss/vehicle";
    var vveh;

    $.ajax({
      url: "/boss/vehicle/" + id,
      type: "GET",
      cache: false,
      async: false,
      success: function(json) {
        vveh = json;
      },
      error: function(a, b, c) {
        console.log(a.responseText);
      }
    });

    var monthNotUsedvars = vveh.monthsNotUsed;
    var data;

    var monthOfYear = monthNotUsedvars.filter(function(x) {
      return x.year == $("#monthlyCostsForm_beginYear").val();
    });

    if (monthOfYear == undefined || monthOfYear.length == 0) {
      data = {
        year: "",
        months: []
      };

      data.year = $("#monthlyCostsForm_beginYear").val();
      var month = $("#monthlyCostsForm_beginMonth").val();
      data.months.push(month);
      vveh.monthsNotUsed.push(data);
      data = vveh;
    } else {
      var og_months = monthNotUsedvars.filter(function(x) {
        return x.id != monthOfYear.id;
      });

      var upd_month = $("#monthlyCostsForm_beginMonth").val();

      var month_check = false;
      for (m in monthOfYear.months) {
        if (upd_month == m) {
          month_check == true;
        }
      }

      if (month_check == true) {
        error = "Month Already Exists";
      } else {
        monthOfYear.months.push(upd_month);
        og_months.push(monthOfYear);
      }

      vveh.monthsNotUsed = og_months;
      data = vveh;
    }
    // stringifying the data for ajax
    data = JSON.stringify(data);

    // ajax post call
    $.ajax({
      url: url + "/" + id,
      type: method,
      data: data,
      contentType: "application/json",
      cache: false,
      timeout: 600000,
      success: function(response) {
        console.log("successfully updated");
        console.log(data);
        window.location.reload();
      },
      error: function(a, b, c) {
        //e.preventDefault();
        //console.log("Error" + error);
        console.log(a.responseText);
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

// using bootstrap field writer to populate the form
var fields = {
  monthlyCostsForm: [
    [
      //aux info row
      {
        fieldName: "beginMonth",
        title: "Out of Service Month",
        type: "select/vmonth",
        placeholder: "Enter Month"
      },
      {
        fieldName: "beginYear",
        title: "Out of Service Year",
        type: "select/vyear",
        placeholder: "Enter Year"
      }
    ], // end row
    [
      {
        custom:
          '<input type="submit" class="btn fleetBtn" id="btn_add_aux" value="Add Month Out of Service">'
      }
    ]
  ]
};

// calling bootstrap field writer function
addBootstrapFields(fields);
