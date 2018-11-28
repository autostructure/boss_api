$(document).ready(function () {
    
   /* $.ajax({
        url: "/boss/employeeProfile",
        type: "GET",
        cache: false,
        timeout: 60000,
        succes: function (json) {
            debugger;
            populateTable(json);
        },
        error: function (a, b, c) {
            console.log(a);
            console.log(b);
            console.log(c);
        }
    });*/

    makeAjaxCall("/boss/employeeProfile", "GET", null).then(
        function (json) {
            var employees = [];
            for (k in json) {
                employees[json[k].id] = json[k];
            }
            populateTable(json, employees);
            //populateDataTable(tempData);
        }
    );

    function populateTable(json) {
        var table = $('#EmployeePrintTable').DataTable({
            'order': [
                [4, "asc"]
            ],
            'bPaginate': false,
            'data': json,
            'dom': 'Bfti',
            'columns': [{
                'data': null,
                'render': function (data, type, row) {
                    
                    return data.lastName + ', ' + data.firstName;
                }
            },
            // { 'data': 'supervisor' },

            {
                'data': "title"
            },
            {
                'data': "employeePosition"
            },
            {
                'data': 'fieldStatus'
            },
            {
                'data': "dutyStation"
            },
            {
                'data': "stateAssigned"
            },
            {
                data: null,
                "render": function (data, type, row) {
                    return `
                                <a data-toggle="modal" data-target="#myModal_print" href="#" data-value=` + data.id+ ` class="btn btnPrint btn_pers_copy" id="btnPrint">View / Print</a>
                    
                    `;
                }
            }
                
            ],
            'buttons': [
            {
                text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
                action: function () {
                    window.location.reload();
                },
                className: 'table-btns refresh-btn'
            }
            ]
        });

        $('.btnPrint').click(function () {
            var _val = $(this).attr("data-value");
            selected_row = parseInt(_val);
        });

        //printElement(document.getElementById("printThis"));
        $('#myModal_print').on('shown.bs.modal', function () {

            var modal = $(this);
            
            $.ajax({
                url: "/boss/employeeProfile/" + selected_row,
                type: 'GET',
                success: function (json) {
                    modal.find(".modal-body #PrimaryPhone").val(json.homePhone);
                    modal.find(".modal-body #SecondaryPhone").val(json.cellPhone);
                    modal.find(".modal-body #PersonalEmail").val(json.personalEmail);
                    modal.find(".modal-body #CityOne").val(json.emergencyContactCity1);
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
                    modal.find(".modal-body #gender").val(json.gender);
                    // modal.find(".modal-body #race").val(json.race);
                    modal.find(".modal-body #eyeColor").val(json.eyeColor);
                    modal.find(".modal-body #hairColor").val(json.hairColor);
                    modal.find(".modal-body #heightFeet").val(json.heightFeet);
                    modal.find(".modal-body #heightInches").val(json.heightInches);
                    modal.find(".modal-body #weight").val(json.weightPounds);
                    modal.find(".modal-body #otherID").val(json.otherIdentifyingFeatures);

                },
                error: function (xhr, status, error) {
                    console.log("error getting employe profile in modal contact: " + selected_row);
                },
                async: false
            });

        });

        $('#myModal_print').on('click', '.btn_pers_print', function (e) {
            window.location.href = "/boss/print/" + selected_row;
        });

        function printElement() {

            /*var modal = $("#myModal_print");
            var row = $(modal).find('.modal-body');
            var row2 = row.clone();
            row.find("select, input").each(function () {
                row2.find("[name='" + this.name + "']").val($(this).val());
            });

            
            $(".printable").html(
                row2.html()
            );
            var htnm = $(".printable").html();
            debugger;*/
            //fire the print method
            window.print();
        }
    }
});


function getCorrectDateFormat(date_str) {
    var date = new Date(date_str);

    return date.toISOString();
}




