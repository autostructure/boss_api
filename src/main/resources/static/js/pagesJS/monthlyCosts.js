// displaying the current vehicle information on IWFIA page
var id = window.location.pathname.split("/")[3];
if (id) {
  var url = "/boss/vehicle?id=" + id;
  if (parseInt(id)) {
    url = "/boss/vehicle/" + id;
  }
  var url = "/boss/vehicle/" + id;
  makeAjaxCall(url, "GET", null).then(
    function(vehs) {
      populateDataTable(vehs.vehicleCost);
      $("#pLicense").append(vehs.license);
      $("#pVin").append(vehs.vin);
      $("#pYear").append(vehs.modelYear);
      $("#pMake").append(vehs.make);
      $("#pModel").append(vehs.modelNumber);
    },
    function(a,b,c) {
      console.log(a.responseText);
    }
  );
}
// end

// start of datatable
function populateDataTable(jsonData) {
  $("#monthlyCosts").DataTable({
    dom: "Brtip",
    destroy: true,
    paging: false,
    data: jsonData,
    columns: [
      {
        mData: null,
        render: function(data, type, row) {
          return data.beginMonth + " / " + data.beginYear;
        }
      },
      {
        mData: null,
        render: function(data, type, row) {
          return data.endMonth + " / " + data.endYear;
        }
      },
      {
        mData: null,
        render: function(data, type, row) {
          return "$" + data.forRate;
        }
      },
      {
        mData: null,
        render: function(data, type, row) {
          return "$" + data.mileageRate;
        }
      },

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
          columns: [0, 1, 2, 3]
        },
        className: "table-btns print-btn"
      },
      {
        text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
        extend: "excel",
        exportOptions: {
          columns: [0, 1, 2, 3]
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
}
// end of datatable
var monthlyCostsForm = $("#monthlyCostsForm");
var modalForm_edit = $("#modalForm_edit");

// populate modals and modal functionality
function getData(formSel) {
  var data = {
    beginMonth: $(formSel + " [name='beginMonth']").val(),
    beginYear: $(formSel + " [name='beginYear']").val(),
    endMonth: $(formSel + " [name='endMonth']").val(),
    endYear: $(formSel + " [name='endYear']").val(),
    forRate: $(formSel + " [name='forRate']").val(),
    mileageRate: $(formSel + " [name='mileageRate']").val()
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
  .on("click", "#editModal_save", function() {
    var data = getData("#modalForm_edit");
    console.log(data);
    if (!data.error) {
      data.id = $("#modal_usage_id").val();
      changeUsage("edit", { id: data.id });
    }
  })
  .on("click", ".editBtn", function() {
    var row = $(this).data("row");
    console.log(row);
    $("#modal_usage_id").val(row.id);
    populateModals("#modalForm_edit");
  })
  .on("click", ".deleteBtn", function() {
    var row = $(this).data("row");
    $("#modal_usage_id").val(row.id);
    populateModals("#modalForm_delete");
  });

function populateModals(formSel) {
  var vid = $("#modal_usage_id").val();
  console.log(vid);
  if (!vid) return false;
  var formSel = formSel ? formSel + " " : "";
  makeAjaxCall("/boss/vehicle/" + id, "GET", null).then(
    function(usage) {
      index = usage.vehicleCost.findIndex(x => x.id == vid);
        var x = usage.vehicleCost[index];
        
        var bMonth = "";
        if (parseInt(x.beginMonth) < 10) {
            bMonth = "0" + x.beginMonth;
        }

        var eMonth = "";
        if (parseInt(x.endMonth) < 10) {
            eMonth = "0" + x.endMonth;
        }

      $(formSel + "[name='beginMonth']").val(bMonth);
      $(formSel + "[name='beginYear']").val(x.beginYear);
      $(formSel + "[name='endMonth']").val(eMonth);
      $(formSel + "[name='endYear']").val(x.endYear);
      $(formSel + "[name='forRate']").val(x.forRate);
      $(formSel + "[name='mileageRate']").val(x.mileageRate);
    },
    function(error) {
      $(".btn[data-dismiss='modal']").trigger("click");
      console.log("ERROR", error);
    }
  );
}

function changeUsage(mode) {
  switch (mode) {
    case "edit":
      updateCosts(modalForm_edit,"edit");
      break;
      case "delete":
          var cost_id = $("#modal_usage_id").val();
          promise = makeAjaxCall("/boss/vehicleCost/" + cost_id, "DELETE", null);
          promise.then(function (json) {
              window.location.reload();
          }, function (a, b, c) {
              console.log(a.responseText);
          });
      
      break;
    default:
      promise = new Promise(function(resolve, reject) {
        reject("Incorrect Mode '" + mode + "'");
      });
      break;
  }
}
// end of populating modals

// adding a new cost
function updateCosts(form,type) {
  if ($("form:valid").length == 0) {
    showError("Please ensure all fields are filled out correctly");
    return false;
  } else {
      var _id;
      cost_id = $("#modal_usage_id").val();
      //var form = $("#monthlyCostsForm");

      var method;
      var url;
      if (type == "edit") {
          _id = cost_id;
          method = "PUT";
          url = "/boss/vehicle/" + id;
      } else {
          _id = 0;
          method = "PUT";
          url = "/boss/vehicle/" + id;
      }
      
      
      var cost = {
      id: parseInt(_id),
      mileageRate: form.find("[name=mileageRate]").val(),
      forRate: parseInt(form.find("[name=forRate]").val()),
      beginMonth: parseInt(form.find("[name=beginMonth]").val()),
      beginYear: parseInt(form.find("[name=beginYear]").val()),
      endMonth: parseInt(form.find("[name=endMonth]").val()),
      endYear: parseInt(form.find("[name=endYear]").val())
      };
      
    console.log(cost);
    makeAjaxCall(url, "GET", null)
      .then(
        function (dataIn) {
            if (type == "edit") {
                var filtered_cost = dataIn.vehicleCost.filter(function (x) {
                    return x.id != parseInt(cost_id);
                });

                dataIn.vehicleCost = filtered_cost;
            }

            if (parseInt(cost.forRate) > 32767) {
                showError("Rate was Too high, please select a number below 32767");
            } else {

                dataIn.vehicleCost.push(cost);
                dataOut = JSON.stringify(dataIn);
                console.log("-------------------");
                console.log(dataIn);
                console.log("-------------------");

                return makeAjaxCall(url, method, dataOut).then(function (json) {
                    location.reload();
                }, function (a, b, c) {
                    console.log(a.responseText);
                    showError(a.responseText);

                });
            }
            

        }
      );
  }
}
// end of adding a new cost

// showing error message if form is not valid
function showError(msg) {
  $("#errorText").html(msg);
  $("#error").show();
  $("html,body").animate({ scrollTop: "100px" });
}
$("form").on("click focus", function() {
  $("#error, #success").hide();
});

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
  ],
  modalForm_edit: [
    [
      //aux info row
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
      }
    ],
    [
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
      }
    ],
    [
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
        },
        {
            hidden: true,
            fieldName: "cost_id",
            type: "input/text"
        }
    ] // end row
  ]
};

fields.modalForm_delete = fields.modalForm_edit;
// end of bootstrap field writer

// calling bootstrapfieldwriter function
addBootstrapFields(fields);

// adding the update costs  and click listener to submit btn
$("#submitV").on("click", function() {
  updateCosts(monthlyCostsForm, "POST");
});

// hiding error message once we start modifying the form again
