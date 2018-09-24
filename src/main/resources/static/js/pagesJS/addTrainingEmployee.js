var api = "http://localhost:8090";

$(document).ready(function () {
    $('#training').addClass('show');
    $('#training > li:nth-child(1) > a').addClass('highlight');

    $.ajax({
        url: api + "/employeeProfile",
        type: "GET",
        success: function (json) {

            var i = 0;
            $.each(json, function (index, value) {
                var info = value;

                $('#dStation').append('<option value="' + value.id + '">' + value.lastName + ', ' + value.firstName + ' </oprion>');

            });
        },
        error: function (xhr, status, error) {

        }
    });



    var max_fields = 5; //maximum input boxes allowed
    var wrapper = $(".items"); //Fields wrapper
    var add_button = $(".add_field_button"); //Add button ID
    var x = 1; //initlal text box count
    var y = 0; //initial dropdown box namecode count
    $(add_button).click(function (e) { //on add input button click
        // e.preventDefault();
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            $(wrapper).append(
                    '<div class="mainAdd">' +
                    '<hr class="break">' +
                    '<div class="row">' +
                    '<div class="col">' +
                    '<div class="form-group">' +
                    '<label for="tTitle">Title<span class="reqClass"> *</span></label>' +
                    '<input type="text" class="form-control" id="tTitle' + x + '" required placeholder="Training Title" aria-label="Training Title">' +
                    '<div class="help-block with-errors"></div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="col">' +
                    '<div class="form-group">' +
                    '<label for="tDate">Date of Training<span class="reqClass"> *</span></label>' +
                    '<div class="input-group date" data-provide="datepicker">' +
                    '<input type="text" required id="tDate' + x + '" class="form-control">' +
                    '<div class="input-group-addon">' +
                    '<span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="help-block with-errors"></div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="col">' +
                    '<div class="form-group">' +
                    '<label for="tPresenter">Presenter<span class="reqClass"> *</span></label>' +
                    '<input type="text" class="form-control" id="tPresenter' + x + '" required placeholder="Presenters Name" aria-label="Presenters Name">' +
                    '<div class="help-block with-errors"></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="row">' +
                    '<div class="col">' +
                    '<div class="form-group">' +
                    '<label for="tHours">Hours<span class="reqClass"> *</span></label>' +
                    '<input type="text" class="form-control" id="tHours' + x + '" required placeholder="Enter Hours" aria-label="Training Hours">' +
                    '<div class="help-block with-errors"></div>' +
                    '</div>' +
                    '</div> ' +
                    '<div class="col">' +
                    '<div class="form-group">' +
                    '<label for="tLocation">Location<span class="reqClass"> *</span></label>' +
                    '<input type="text" class="form-control" id="tLocation' + x + '" required placeholder="Location" aria-label="Location">' +
                    '<div class="help-block with-errors"></div>' +
                    '</div>' +
                    '</div> ' +
                    '<div class="col">' +
                    '<div class="form-group">' +
                    //'<label for="tYears">Number of Years Valid<span class="reqClass"> *</span></label>' +
                    //'<select name="tYears" required id="tYears' + x + '" class="form-control">' +
                    //'<option value="">Select Years</option>' +
                    //'<option value="1">1</option>' +
                    //'<option value="2">2</option>' +
                    //'<option value="3">3</option>' +
                    //'<option value="4">4</option>' +
                    //'<option value="5">5</option>' +
                    //'</select>' +
                    //'<div class="help-block with-errors"></div>' +
                    '</div> ' +
                    '</div>' +
                    '</div>' +
                    '<button class="remove_field">Remove</button>' +
                    '</div>'

                    ); //add input box
        }
    });

    $(wrapper).on("click", ".remove_field", function (e) { //user click on remove field
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    });



    $("#addEmployee").click(function () {
        //debugger;
        y++;
        $(".wrapper").find("#nameAdd").append(
                '<div class="row">' +
                '<div class="col">' +
                '<div class="form-group">' +
                '<label for="eNameCode">Select Employee Namecode<span class="reqClass"> *</span></label>' +
                '<select name="dstation" required id="dStation_' + y + '" class="form-control">' +
                '</select >' +
                '<div class="help-block with-errors"></div>' +
                '</div>' +
                '</div>' +
                '</div>'
                );
        $.ajax({
            url: api + "/employeeProfile",
            type: "GET",
            success: function (json) {

                var i = 0;
                $.each(json, function (index, value) {
                    var info = value;

                    $('#dStation_' + y).append('<option value="' + value.id + '">' + value.lastName + ', ' + value.firstName + ' </oprion>');

                });
            },
            error: function (xhr, status, error) {

            }
        });
    });

    $(this).find('input:not([disabled]):not([type=submit]), textarea, select').each(function () {

    });


    $(':file').on('change', function () {
        var file = this.files[0];
        if (file.size > 1024) {
            alert('max upload size is 1k')
        }

        // Also see .name, .type
    });



    $(':button').on('click', function () {

        var formData = new FormData($('form')[0]);
        var employee_id =
                $.ajax({
                    // Your server script to process the upload
                    url: 'http://localhost:8090/certificate',
                    type: 'POST',

                    // Form data
                    data: ,

                    // Tell jQuery not to process data or worry about content-type
                    // You *must* include these options!
                    cache: false,
                    contentType: false,
                    processData: false,

                    // Custom XMLHttpRequest
                    xhr: function () {
                        var myXhr = $.ajaxSettings.xhr();
                        if (myXhr.upload) {
                            // For handling the progress of the upload
                            myXhr.upload.addEventListener('progress', function (e) {
                                if (e.lengthComputable) {
                                    $('progress').attr({
                                        value: e.loaded,
                                        max: e.total,
                                    });
                                }
                            }, false);
                        }
                        return myXhr;
                    }
                });
    });

    $(".submit_button").click(function () {


        var _id;
        var i;
        var name_element;
        for (i = 0; i <= y; i++) {

            if (i == 0) {
                name_element = $("#dStation").val();
            } else {
                name_element = $("#dStation_" + i).val();
            }
            if (name_element != undefined && name_element != null) {
                $.ajax({
                    url: api + "/employeeProfile/" + name_element,
                    type: "GET",

                    success: function (json) {
                        var _json = json;
                        /* employeePlaceHolder.id = json.id;
                         employeePlaceHolder.firstName = json.firstName;
                         employeePlaceHolder.lastName = json.lastName;
                         employeePlaceHolder.middleInitial = json.middleInitial;
                         employeePlaceHolder.preferredName = json.preferredName;
                         employeePlaceHolder.nameCode = json.nameCode;
                         employeePlaceHolder.homePhone = json.homePhone;
                         employeePlaceHolder.cellPhone = json.cellPhone;
                         employeePlaceHolder.personalEmail = json.personalEmail;
                         employeePlaceHolder.stateAssigned = json.stateAssigned;
                         employeePlaceHolder.dutyStation = json.dutyStation;
                         employeePlaceHolder.emergencyContactFirstName1 = json.emergencyContactFirstName1;
                         employeePlaceHolder.emergencyContactFirstName2 = json.emergencyContactFirstName2;
                         employeePlaceHolder.emergencyContactLastName1 = json.emergencyContactLastName1;
                         employeePlaceHolder.emergencyContactLastName2 = json.emergencyContactLastName2;
                         employeePlaceHolder.emergencyContactStreetAddress1 = json.emergencyContactStreetAddress1;
                         employeePlaceHolder.emergencyContactStreetAddress2 = json.emergencyContactStreetAddress2;
                         employeePlaceHolder.emergencyContactCity1 = json.emergencyContactCity1;
                         employeePlaceHolder.emergencyContactCity1 = json.emergencyContactCity2;
                         employeePlaceHolder.emergencyContactState1 = json.emergencyContactState1;
                         employeePlaceHolder.emergencyContactState2 = json.emergencyContactState2;
                         employeePlaceHolder.emergencyContactZip1 = json.emergencyContactZip1;
                         employeePlaceHolder.emergencyContactZip2 = json.emergencyContactZip2;
                         employeePlaceHolder.emergencyContactHomePhone1 = json.emergencyContactHomePhone1;
                         employeePlaceHolder.emergencyContactHomePhone1 = json.emergencyContactHomePhone2;
                         employeePlaceHolder.emergencyContactCellPhone1 = json.emergencyContactCellPhone1;
                         employeePlaceHolder.emergencyContactCellPhone2 = json.emergencyContactCellPhone2;
                         employeePlaceHolder.emergencyContactWorkPhone1 = json.emergencyContactWorkPhone1;
                         employeePlaceHolder.emergencyContactWorkPhone2 = json.emergencyContactWorkPhone2;
                         employeePlaceHolder.emergencyContactRelationship1 = json.emergencyContactRelationship1;
                         employeePlaceHolder.emergencyContactRelationship2 = json.emergencyContactRelationship2;
                         employeePlaceHolder.title = json.title;
                         employeePlaceHolder.roomNumber = json.roomNumber;
                         employeePlaceHolder.payPeriodsLeft = json.payPeriodsLeft;
                         employeePlaceHolder.regPayPerPayPeriod = json.regPayPerPayPeriod;
                         employeePlaceHolder. */

                        var u;

                        var title;
                        var DateOfTraining;
                        var Presenter;
                        var _hours;
                        var _Location;

                        for (u = 1; u <= x; u++) {

                            if (u == 1) {
                                title = $('#tTitle').val();
                                DateOfTraining = $('#tDate').val();
                                Presenter = $('#tPresenter').val();
                                _hours = $('#tHours').val();
                                _Location = $('#tLocation').val();

                            } else {
                                title = $('#tTitle_' + u).val();
                                DateOfTraining = $('#tDate_' + u).val();
                                Presenter = $('#tPresenter_' + u).val();
                                _hours = $('#tHours_' + u).val();
                                _Location = $('#tLocation_' + u).val();
                            }
                            _json
                            employeeTraining.title = title;
                            employeeTraining.dateOfTraining = getCorrectDateFormat(DateOfTraining);
                            employeeTraining.presenter = Presenter;
                            employeeTraining.hours = parseInt(_hours);
                            employeeTraining.location = _Location;
                            employeeTraining.id = null;
                            _id = _json.id;



                            _json.training.push(employeeTraining);
                        }

                        console.log(_json);

                        $.ajax({
                            url: api + "/employeeProfile/" + _id,
                            type: "PUT",
                            dataType: "json",
                            contentType: "application/json",
                            cache: false,
                            timeout: 600000,
                            data: JSON.stringify(_json),
                            success: function (json) {
                                debugger;
                            },
                            error(xhr, status, error) {
                                console.log(xhr.responseText);
                                debugger;
                            }
                        });


                    },
                    error: function (xhr, status, error) {

                    }
                });
            }
        }
    });

    var employeePlaceHolder = {
        "id": 1,
        "firstName": "Ileen",
        "lastName": "Mahmood",
        "middleInitial": null,
        "preferredName": null,
        "nameCode": "ILMahmood",
        "homePhone": null,
        "cellPhone": null,
        "personalEmail": null,
        "stateAssigned": null,
        "dutyStation": null,
        "emergencyContactFirstName1": null,
        "emergencyContactLastName1": null,
        "emergencyContactStreetAddress1": null,
        "emergencyContactCity1": null,
        "emergencyContactState1": null,
        "emergencyContactZip1": null,
        "emergencyContactHomePhone1": null,
        "emergencyContactCellPhone1": null,
        "emergencyContactWorkPhone1": null,
        "emergencyContactRelationship1": null,
        "emergencyContactFirstName2": null,
        "emergencyContactLastName2": null,
        "emergencyContactStreetAddress2": null,
        "emergencyContactCity2": null,
        "emergencyContactState2": null,
        "emergencyContactZip2": null,
        "emergencyContactHomePhone2": null,
        "emergencyContactCellPhone2": null,
        "emergencyContactWorkPhone2": null,
        "emergencyContactRelationship2": null,
        "title": null,
        "roomNumber": null,
        "payPeriodsLeft": 10,
        "regPayPerPayPeriod": 1000.00,
        "overtimeHourlyWage": null,
        "pWPSalary": null,
        "activityCode": {
            "code": "AD",
            "name": "Administration"
        },
        "dateOfBirth": null,
        "training": [],
        "addressCity": null,
        "series": null,
        "grade": null,
        "paymentPlan": null,
        "addressState": null,
        "addressZip": null,
        "confidentialityAgreementDate": null,
        "supervisors": [],
        "employees": [],
        "driversLicense": null,
        "pwpsalary": null
    };

    var employeeTraining = {
        "dateOfTraining": "2018-09-1717:32:14.924Z",
        "hours": 0,
        "id": "string",
        "location": "string",
        "presenter": "string",
        "title": "string",
        "training": {},
        "yearsValid": 0
    };




    function getCorrectDateFormat(date_str) {
        var date = new Date(date_str);
        return date.toISOString();
    }


});




