       
var url = '/boss/vehicle';
var API = '/boss/';

$(document).ready(function () {

  $.ajax({
      url: url,
      contentType: "application/json",
      dataType: 'json',
      cache: false,
      type: 'GET',
      timeout: 600000,
      success: function (json) {
          populateDataTable(json);
      },
      error: function (a, b, c) {
          console.log(a.responseText);
      }
  });

  function populateDataTable(jsonData) {

      console.log('populateDataTable');
      var newJsonDat = [];
      
      for (x in jsonData) {
          var empID = jsonData[x];
          var emp_id = empID.assignedOperator;
          $.ajax({
              url: '/boss/employeeProfile/' + emp_id.id,
              type: 'GET',
              cache: false,
              async: false,
              success: function (json) {
                  
                  empID.assignedOperator = json;
                  newJsonDat.push(empID);
              }, error: function (a, b, c) {
                  
                  console.log(a.responseText);
              }
          });
         /* makeAjaxCall('/boss/employeeProfile', 'GET', null).then(function (json) {
              $.each(json, function (index, value) {
                  
                  if (emp_id.id == value.id) {
                      debugger;
                      empID.assignedOperator = value;
                      
                      newJsonDat.push(empID);
                  }
              });

          }, function (a, b, c) {
                  debugger;
                  console.log(a.responseText);
          });*/
      }

      console.log(newJsonDat);
      
      var table = $('#expense').DataTable({
          dom: "Brtip",
          destroy: true,
          "paging": false,
          data: newJsonDat,
          columns: [
              {data: "equipmentNumber"},
              {data: "license"},
              {data: "modelYear"},
              {data: "modelNumber"},
              {
                  data: "assignedOperator",
                  render: function (data, type, row) {
                      
                      return row.assignedOperator.lastName + ", " + row.assignedOperator.firstName;
                      
                  }
              },
              {data: "cityOrLocation"},
              {data: "state"},
              {data: "accessory"},
              {data: "accessory2"},
              {data: "camera"},
              {data: null,
                  "render": function (data, type, row) {
                      return `
                      <div class="dropdown1">
                          <button id="test_click" class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                          <div id="dropList" class="dropdown-content1">
                              <a href="` + API + `viewEditFleet/` + row.id + `" data-value=` + row.id + ` class="editBtn" id="editBtn">View | Edit Vehicle Details</a>
                          </div>
                      </div>
                  
                  `;
                  },
                  "sortable": false,
                  "orderable": false
              }],
          buttons: [
              {
                  text: 'Print <i class="fa fa-lg fa-print"></i>',
                  extend: 'print',
                  exportOptions: {
                      columns: [0, 1, 2, 3, 4]
                  },
                  className: 'table-btns print-btn'
              },
              {
                  text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                  extend: 'excel',
                  exportOptions: {
                      columns: [0, 1, 2, 3, 4]
                  },
                  className: 'table-btns excel-btn'
              },
              {
                  text: 'Add <i class="fa fa-lg fa-plus"></i>',
                  action: function () {
                      window.location.replace('/boss/addNewFleet');
                  },
                  className: 'table-btns add-btn'
              },
              {
                  text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
                  action: function () {
                      window.location.reload();
                  },
                  className: 'table-btns refresh-btn'
              }
          ],

      });

  }

});

