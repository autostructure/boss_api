// displaying the current vehicle information on IWFIA page
var vehicleId = window.location.pathname.split("/")[3];
if (vehicleId) {
  var url = "/boss/vehicle?id=" + vehicleId;
  if (parseInt(vehicleId)) {
    url = "/boss/vehicle/" + vehicleId;
  }
  var url = "/boss/vehicle/" + vehicleId;
  console.log(url);
  console.log(vehicleId);
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
    },
    error: function(json) {}
  });
}
// end
$(document).ready(function() {
  // getting choices for operators and activity code

  // end
  // submitting data for new IWFIA
  $("input[type=submit]").on("click", function(e) {
    // checking form validity
    if ($("#iwfiaForm:valid").length == 0) {
      showError("Please ensure all fields are filled out correctly");
      return false;
    } else {
      e.preventDefault();
    }
    var form = $("#iwfiaForm");
    var method = "PUT";
    var url = "/boss/vehicle/" + vehicleId;
    console.log(vehicleId);
    console.log(url);
    var monthlyUsage = {
      gas: parseInt(form.find("[name=gas]").val()),
      mileage: parseInt(form.find("[name=mileage]").val()),
      month: parseInt(form.find("[name=month]").val()),
      oil: parseInt(form.find("[name=oil]").val()),
      vehicle: parseInt(vehicleId),
      // "jobCode": {
      //     "id": parseInt(form.find('[name=jobCode]').val()),
      // },
      operator: {
        id: parseInt(form.find("[name=operator]").val())
      },
      year: parseInt(form.find("[name=year]").val())
    };
    makeAjaxCall("/boss/vehicle/" + vehicleId, "GET", null)
      .then(
        function(dataIn) {
          console.log(dataIn);
          //dataIn = JSON.parse(dataIn);
          dataIn.monthlyIWFIAUsage.push(monthlyUsage);
          dataOut = JSON.stringify(dataIn);
          console.log(dataIn);
          console.log(dataOut);
          return makeAjaxCall("/boss/vehicle/" + vehicleId, "PUT", dataOut);
        },
        function(error) {
          console.log("Error", error);
          console.log(error.responseJSON);
        }
      )
      .then(
        function(data) {
          console.log("successfully updated");
          populateDataTable();
          console.log(data);
        },
        function(error) {
          console.log("Error", error);
          console.log(error.responseJSON);
          return false;
        }
      );
    return;
  });
  function populateModals(formSel) {
    var id = $("#modal_usage_id").val();
    if (!id) return false;
    var formSel = formSel ? formSel + " " : "";
    makeAjaxCall("/boss/monthlyIWFIAUsage/" + id, "GET", null).then(
      function(usage) {
        $(formSel + "[name='month']").val(usage.month);
        $(formSel + "[name='year']").val(usage.year);
        $(formSel + "[name='operator']").val(
          usage.operator ? usage.operator.id : ""
        );
        $(formSel + "[name='jobCode']").val(
          usage.jobCode ? usage.jobCode.id : ""
        );
        $(formSel + "[name='mileage']").val(usage.mileage);
        $(formSel + "[name='gas']").val(usage.gas);
        $(formSel + "[name='oil']").val(usage.oil);
      },
      function(error) {
        $(".btn[data-dismiss='modal']").trigger("click");
        console.log("ERROR", error);
      }
    );
  }
  /**
   *
   * @param {('add'|'edit'|'delete')} mode What change are we making?
   * @param {Object} data
   * @param {number} data.id Required for edit and delete modes
   */
  function changeUsage(mode, data) {
    var getUrl = "/boss/vehicle/" + vehicleId;
    var promise = null;
    switch (mode) {
      case "add":
        promise = makeAjaxCall(getUrl, "GET", null).then(
          function(vehicleData) {
            var usage = vehicleData.monthlyIWFIAUsage;
            usage.push(data);
            // for (i in usage) {
            //     delete usage[i].jobCode.hibernateLazyInitializer;
            // }
            return makeAjaxCall(getUrl, "PUT", JSON.stringify(vehicleData));
          },
          function(error) {
            console.error(error);
          }
        );
        break;
      case "edit":
        promise = makeAjaxCall(getUrl, "GET", null).then(
          function(vehicleData) {
            var usage = vehicleData.monthlyIWFIAUsage;
            for (i in usage) {
              // delete usage[i].jobCode.hibernateLazyInitializer;
              if (usage[i].id == data.id) {
                usage[i] = data;
              }
            }
            return makeAjaxCall(getUrl, "PUT", JSON.stringify(vehicleData));
          },
          function(error) {
            console.error(error);
          }
        );
        break;
      case "delete":
        promise = makeAjaxCall(
          "/boss/monthlyIWFIAUsage/" + data.id,
          "DELETE",
          null
        );
        break;
      default:
        promise = new Promise(function(resolve, reject) {
          reject("Incorrect Mode '" + mode + "'");
        });
        break;
    }
    promise.then(
      function() {
        populateDataTable();
      },
      function(error) {
        console.log(error);
      }
    );
  }
  function getData(formSel) {
    var data = {
      month: $(formSel + " [name='month']").val(),
      year: $(formSel + " [name='year']").val(),
      operator: { id: $(formSel + " [name='operator']").val() },
      jobCode: { id: $(formSel + " [name='jobCode']").val() },
      mileage: $(formSel + " [name='mileage']").val(),
      gas: $(formSel + " [name='gas']").val(),
      oil: $(formSel + " [name='oil']").val()
    };
    var invalid = $("formSel :not(:valid)");
    if (invalid.length) {
      data.error = invalid;
    }
    return data;
  }

  $("body")
    .on("click", "#deleteModal_delete", function() {
      var id = $("#modal_usage_id").val();
      changeUsage("delete", { id: id });
    })
    .on("click", "#addModal_add", function() {
      var data = getData("#modalForm_add");
      console.log(data);
      if (!data.error) {
        changeUsage("add", data);
      }
    })
    .on("click", "#editModal_save", function() {
      var data = getData("#modalForm_edit");
      if (!data.error) {
        data.id = $("#modal_usage_id").val();
        changeUsage("edit", data);
      }
    })
    .on("click", "#editModal_undo", function() {
      populateModals("#modalForm_edit");
    })
    .on("click", ".editBtn, .deleteBtn", function() {
      // var row = $(this).data("row");
      // $("#modal_usage_id").val(row.id);
      // populateModals();
    })
    .on("click", ".add-btn", function() {
      $("#modalForm_add [name]").val("");
    })
    .on("click", ".editBtn", function() {
      var row = $(this).data("row");
      $("#modal_usage_id").val(row.id);
      populateModals("#modalForm_edit");
    })
    .on("click", ".deleteBtn", function() {
      var row = $(this).data("row");
      $("#modal_usage_id").val(row.id);
      populateModals("#modalForm_delete");
    });

  var table = null;
  // function to populate the table
  function populateDataTable(theData) {
    console.log(theData);
    if (!theData) {
      var promUsage = makeAjaxCall("/boss/vehicle/" + vehicleId, "GET", null);
      var promEmp = makeAjaxCall("/boss/employeeProfile", "GET", null);
      Promise.all([promUsage, promEmp]).then(
        function(values) {
          var usageData = values[0].monthlyIWFIAUsage;
          var empData = values[1];
          var employees = [];
          for (i in empData) {
            emp = empData[i];
            emp.displayName = emp.lastName + ", " + emp.firstName;
            employees[emp.id] = emp;
          }
          for (i in usageData) {
            usageData[i].operator = employees[usageData[i].operator.id];
          }
          populateDataTable(usageData);
          console.log(usageData);
        },
        function(reason) {
          console.log("AJAX Error: ", reason);
        }
      );

      promUsage.then(
        function() {},
        function(a, b, c) {
          console.log(a, b, c);
        }
      );
      return "Waiting";
    }
    var el = $("#iwfia");
    if (table) {
      table.clear();
      table.rows.add(theData);
      table.draw();
      return;
    }
    table = el.DataTable({
      data: theData,
      bProcessing: true,
      bPaginate: false,
      dom: "Brtip",
      order: [[0, "desc"]],
      columns: [
        {
          data: "null",
          render: function(data, type, row) {
            if (type == "display") {
              return (
                CustomFormFunctions.OptionSets.MONTHS[row.month] +
                " " +
                row.year
              );
            } else {
              var val = new Date();
              val.setFullYear(row.year);
              val.setMonth(row.month);
              return val;
            }
          }
        },
        { data: "operator.displayName" },
        { data: "mileage" },
        { data: "gas" },
        { data: "oil" },
        { data: "jobCode.description" },
        {
          data: null,
          orderable: false,
          render: function(data, type, row) {
            var buttonList = $("#templates .dropdown1").clone();
            buttonList.find("a").attr("data-row", JSON.stringify(row));
            return buttonList.prop("outerHTML");
          }
        }
      ],
      buttons: [
        {
          text: 'Print <i class="fa fa-lg fa-print"></i>',
          extend: "print",
          exportOptions: {
            columns: [0, 1, 2, 3, 4, 5]
          },
          className: "table-btns print-btn"
        },
        {
          text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
          extend: "excel",
          exportOptions: {
            columns: [0, 1, 2, 3, 4, 5]
          },
          className: "table-btns excel-btn"
        },
        {
          text: 'Add <i class="fa fa-lg fa-plus"></i>',
          action: function() {
            //$('html,body').animate({scrollTop: $("#iwfia").offset().top}, 'slow');
            $("#myModal_add").modal("toggle");
          },
          className: "table-btns add-btn"
        },
        {
          text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
          action: function() {
            populateDataTable();
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

  populateDataTable();
});

// showing error message if form is not valid
function showError(msg) {
  $("#errorText").html(msg);
  $("#error").show();
  $("html,body").animate({ scrollTop: "100px" });
}

// using bootstrap field writer to populate the form
var thisYear = new Date().getFullYear();
var yearOptions = [];
for (var i = thisYear - 5; i < thisYear + 2; i++) {
  yearOptions[i] = i;
}
var fields = {
  iwfiaForm: [
    [
      //aux info row
      {
        fieldName: "month",
        title: "Month",
        type: "select/month",
        required: false,
        colspan: 2,
        placeholder: "Enter Month"
      },
      {
        fieldName: "year",
        title: "Year",
        type: "select/year",
        colspan: 2,
        placeholder: "Enter Year",
        options: yearOptions
      },
      {
        fieldName: "operator",
        title: "Operator",
        type: "select/text",
        colspan: 2,
        required: false,
        selectFrom: {
          url: "/boss/employeeProfile",
          value: "id",
          label: ["lastName", ", ", "firstName"]
        }
      },
      {
        fieldName: "mileage",
        title: "Mileage",
        type: "input/text",
        placeholder: "Enter Mileage",
        required: false,
        colspan: 2
      },
      {
        fieldName: "gas",
        title: "Gas",
        type: "input/text",
        placeholder: "Gallons of Gas",
        required: false
      },
      {
        fieldName: "oil",
        title: "Oil",
        type: "input/text",
        placeholder: "Oil",
        required: false
      },
      {
        fieldName: "jobCode",
        title: "Job Code",
        type: "select/text",
        colspan: 2,
        required: false,
        selectFrom: {
          url: "/boss/jobCode",
          value: "id",
          label: "description"
        }
      }
    ], // end row
    [
      {
        custom:
          '<input type="submit" class="btn fleetBtn btn_add" id="btn_add_aux" value="Add IWFIA Usage">'
      }
    ]
  ],
  modalForm_edit: [
    [
      //aux info row
      {
        fieldName: "month",
        title: "Month",
        type: "select/month",
        required: false,
        placeholder: "Enter Month"
      },
      {
        fieldName: "year",
        title: "Year",
        type: "select/year",
        placeholder: "Enter Year",
        options: yearOptions
      }
    ],
    [
      {
        fieldName: "operator",
        title: "Operator",
        type: "select/text",
        required: false,
        selectFrom: {
          url: "/boss/employeeProfile",
          value: "id",
          label: ["lastName", ", ", "firstName"]
        }
      },
      {
        fieldName: "jobCode",
        title: "Job Code",
        type: "select/text",
        required: false,
        selectFrom: {
          url: "/boss/jobCode",
          value: "id",
          label: "description"
        }
      }
    ], //end row
    [
      {
        fieldName: "mileage",
        title: "Mileage",
        type: "input/text",
        placeholder: "Enter Mileage",
        required: false
      },
      {
        fieldName: "gas",
        title: "Gas",
        type: "input/text",
        placeholder: "Gallons of Gas",
        required: false
      },
      {
        fieldName: "oil",
        title: "Oil",
        type: "input/text",
        placeholder: "Oil",
        required: false
      }
    ] // end row
  ]
};
fields.modalForm_delete = fields.modalForm_add = fields.modalForm_edit;
// calling bootstrap field writer function
CustomFormFunctions.addBootstrapFields(fields);
