       
var url = 'http://localhost:8090/vehicle';
var API = 'http://localhost:8090';

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
      },
      async: false
  });

  function populateDataTable(jsonData) {

      console.log('populateDataTable');
      console.log(jsonData);

      var table = $('#expense').DataTable({
          dom: "Brtip",
          destroy: true,
          "paging": false,
          data: jsonData,
          columns: [
              {data: "equipmentNumber"},
              {data: "license"},
              {data: "modelYear"},
              {data: "modelNumber"},
              {data: "assignedOperator"},
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
                              <a href="` + API + `/viewEditFleet/` + row.id + `" data-value=` + row.id + ` class="editBtn" id="editBtn">View | Edit Vehicle Details</a>
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
                      window.location.replace('/addNewFleet');
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

