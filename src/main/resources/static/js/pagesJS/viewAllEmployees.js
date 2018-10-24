var tempData = [
    {"nameCode": "JSMITH", "lastName": "Smith", "firstName": "John", "supervisor": "Cindy", "officePhone": "806-662-1234", "cellPhone": "543-555-1233", "dutyStation": "Ogden, UT", "email": "jsmith@fs.fed.us"},
    {"nameCode": "SJOHN", "lastName": "John", "firstName": "Samantha", "supervisor": "Sheena", "officePhone": "424-662-1234", "cellPhone": "333-555-1233", "dutyStation": "Pontiac, MI", "email": "sjohn@fs.fed.us"},
    {"nameCode": "LANEY", "lastName": "Laney", "firstName": "Mike", "supervisor": "Cindy", "officePhone": "644-342-2222", "cellPhone": "555-555-1233", "dutyStation": "Sandusky, OH", "email": "mlaney@fs.fed.us"},
    {"nameCode": "HOWDEN", "lastName": "Howden", "firstName": "Ben", "supervisor": "Becky", "officePhone": "643-662-4444", "cellPhone": "989-424-1233", "dutyStation": "Bearrun, MT", "email": "bhowden@fs.fed.us"},
    {"nameCode": "SOLG", "lastName": "Ohlg", "firstName": "Sam", "supervisor": "Becky", "officePhone": "977-536-9999", "cellPhone": "666-646-6464", "dutyStation": "Pheonix, AZ", "email": "sohlg@fs.fed.us"},
    {"nameCode": "DCHAR", "lastName": "Char", "firstName": "Dorito", "supervisor": "Sheena", "officePhone": "789-662-7777", "cellPhone": "777-777-7777", "dutyStation": "Hemlock, WY", "email": "dchar@fs.fed.us"},
    {"nameCode": "FFRANK", "lastName": "Franklin", "firstName": "Fred", "supervisor": "Cindy", "officePhone": "879-662-1234", "cellPhone": "333-333-3434", "dutyStation": "Saginaw, TN", "email": "fredfrank@fs.fed.us"},
    {"nameCode": "DRECKI", "lastName": "Drecki", "firstName": "Nancy", "supervisor": "Sheena", "officePhone": "806-977-1234", "cellPhone": "777-656-6565", "dutyStation": "Fresco, WY", "email": "pacinoal@fs.fed.us"},
    {"nameCode": "JOHNSONS", "lastName": "Johnson", "firstName": "Sheryl", "supervisor": "Becky", "officePhone": "555-555-1234", "cellPhone": "999-999-1233", "dutyStation": "Blanch, UT", "email": "robertd@fs.fed.us"},
    {"nameCode": "BTHOMAS", "lastName": "Thomas", "firstName": "Bear", "supervisor": "Cindy", "officePhone": "665-655-6566", "cellPhone": "222-232-4252", "dutyStation": "Mira, CA", "email": "bgrizz@fs.fed.us"},
];


var tempAPI = 'http://localhost:8090/employeeProfile';//jobCode?financialYear=;
var API = 'http://localhost:8090';

$(document).ready(function () {
    $('#employees').addClass('show');
    $('#employees a[href="/viewAllEmployees"]').addClass('highlight');

    $.ajax({
        url: tempAPI,
        contentType: "application/json",
        dataType: 'json',
        cache: false,
        type: 'GET',
        timeout: 600000,
        success: function (json) {
            populateDataTable(json);
            //populateDataTable(tempData);
        },
        error: function (a, b, c) {
            console.log(a.responseText);
        },
        async: false
    });

    function populateDataTable(jsonData) {

        console.log('populateDataTable');
        console.log(jsonData);

        var table = $('#allEmployees').DataTable({
            dom: "Brftip",
            // searchable: true,
            destroy: true,
            "paging": false,
            // ajax:{"url":tempAPI + yr,"dataSrc":""},
            data: jsonData,
            columns: [
                {
                    'data': null,
                    'render': function(data, type, row) {
                        return data.lastName + ', ' + data.firstName;
                    }
                },
                {data: "supervisor"},
                {data: "dutyStation"},
                {data: null,
                    "render": function(data, type, row){
                        return '989-424-2342';
                    }
                },
                {data: "satPhone"},
                {data: "cellPhone"},
                {data: "fsEmail"},
                {data: null,
                    "render": function (data, type, row) {
                        return `
                        <div class="dropdown1">
                            <button id="test_click" class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                            <div id="dropList" class="dropdown-content1">
                                <a href="` + API + `/editEmployee/` + row.nameCode + `" data-value=` + row.id + ` class="editBtn" id="editBtn">Edit Employee</a>
                                <a data-toggle="modal" data-target="#myModal_delete" href="#" data-value=` + row.id + ` class="deleteBtn" id="deleteBtn">Delete Employee</a>
                                <a data-toggle="modal" data-target="#myModal_contact" href="#" data-value=` + row.id + ` class="contactBtn" id="contactBtn">Contact Info</a>
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
                        columns: [0, 1, 2, 3, 4, 5]
                    },
                    className: 'table-btns print-btn'
                },
                {
                    text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                    extend: 'excel',
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4, 5]
                    },
                    className: 'table-btns excel-btn'
                },
                {
                    text: 'Add <i class="fa fa-lg fa-plus"></i>',
                    action: function () {
                        $('#addModal').modal('show');
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

        var selected_row = 0;
        var id_employee = 0;



        //for the anchor tag in the table
        $('#deleteBtn').click(function () {
            var _val = $('#deleteBtn').attr("data-value");
            var _id = $('#deleteBtn').attr("data-id");
            selected_row = parseInt(_val);
            id_employee = _id;
            $('#employeeName_deleteModal').html(id_employee);
        });

        //for the anchor tag in the table
        $('#contactBtn').click(function () {
            var _val = $('#contactBtn').attr("data-value");
            var _id = $('#contactBtn').attr("data-id");
            selected_row = parseInt(_val);
            id_employee = _id;
            //$("#myModal_contact").html();


        });


        $('#myModal_contact').on('shown.bs.modal', function () {

            var modal = $(this);
            $.ajax({
                url: API + "/employeeProfile/" + selected_row,
                type: 'GET',
                success: function (json) {
                    modal.find(".modal-body #PrimaryPhone").val(json.homePhone);
                    modal.find(".modal-body #SecondaryPhone").val(json.cellPhone);
                    modal.find(".modal-body #PersonalEmail").val(json.personalEmail);
                    modal.find(".modal-body #CityTwo").val(json.emergencyContactCity2);
                    modal.find(".modal-body #FirstNameOne").val(json.emergencyContactFirstName1);
                    modal.find(".modal-body #FirstNameTwo").val(json.emergencyContactFirstName2);
                    modal.find(".modal-body #HomePhoneOne").val(json.emergencyContactHomePhone1);
                    modal.find(".modal-body #HomePhoneTwo").val(json.emergencyContactHomePhone2);
                    modal.find(".modal-body #LastNameOne").val(json.emergencyContactLastName1);
                    modal.find(".modal-body #LastNameTwo").val(json.emergencyContactLastName2);
                    modal.find(".modal-body #FirstRelationship").val(json.emergencyContactRelationship1);
                    modal.find(".modal-body #SecondRelationship").val(json.emergencyContactRelationship2);
                    modal.find(".modal-body #StateOne").val(json.emergencyContactState1);
                    modal.find(".modal-body #StateTwo").val(json.emergencyContactState2);
                    modal.find(".modal-body #AddressOne").val(json.emergencyContactStreetAddress1);
                    modal.find(".modal-body #AddressTwo").val(json.emergencyContactStreetAddress2);
                    modal.find(".modal-body #WorkPhoneOne").val(json.emergencyContactWorkPhone1);
                    modal.find(".modal-body #WorkPhoneTwo").val(json.emergencyContactWorkPhone2);
                    modal.find(".modal-body #ZipOne").val(json.emergencyContactZip1);
                    modal.find(".modal-body #ZipTwo").val(json.emergencyContactZip2);
                    modal.find(".modal-body #CellPhoneOne").val(json.emergencyContactCellPhone1);
                    modal.find(".modal-body #CellPhoneTwo").val(json.emergencyContactCellPhone2);


                },
                error: function (xhr, status, error) {
                    console.log("error getting employe profile in modal contact: " + selected_row);
                },
                async: false
            });

        });

        //click for yes on the modal
        $('#myModal_delete').on('click', '#deleteModal_delete', function () {

            $.ajax({
                url: API + "/employeeProfile/" + selected_row,
                type: "DELETE",
                success: function (data) {
                    $.ajax({
                        url: tempAPI,
                        contentType: "application/json",
                        dataType: 'json',
                        cache: false,
                        type: 'GET',
                        timeout: 600000,
                        success: function (json) {
                            populateDataTable(json);
                            //populateDataTable(tempData);
                        },
                        error: function (a, b, c) {
                            console.log(a.responseText);
                        }
                    });
                },
                error(xhr, status, error) {
                    console.log(error);

                }

            });
        });

        //click for yes on the modal


        //click for yes on the modal
    }




});



