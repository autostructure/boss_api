var TestData = { "id": "47", "lastName": "Barrs", "firstName": "Karisa", "middleInitial": "", "nameCode": "KBarrs", "preferredName": "", "driversLicense.expiration": '2018-09-12', "driversLicense.state": 'MI', "driversLicense.number": 'dsfsd', "addressStreet": "465", "dateOfBirth": "2018-09-12", "addressCity": "fds", "addressZip": "12345", "homePhone": "", "cellPhone": "(546) 654-8646", "personalEmail": "asdf@sadf", "roomNumber": "", "title": "", "confidentialityAgreementDate": "", "series": "", "emergencyContactFirstName1": "", "emergencyContactStreetAddress1": "", "emergencyContactCity1": "", "emergencyContactZip1": "", "emergencyContactHomePhone1": "", "emergencyContactCellPhone1": "", "emergencyContactWorkPhone1": "", "emergencyContactRelationship1": "", "emergencyContactFirstName2": "", "emergencyContactStreetAddress2": "", "emergencyContactCity2": "", "emergencyContactZip2": "", "emergencyContactHomePhone2": "", "emergencyContactCellPhone2": "", "emergencyContactWorkPhone2": "", "emergencyContactRelationship2": "", "driversLicense.state": "DE", "addressState": "SC", "stateAssigned": "Choose State Assigned", "dutyStation": "", "activityCode": { "name": "Administration", "code": "AD" }, "grade": "Choose Grade", "emergencyContactState1": "Choose State", "emergencyContactState2": "Choose State" }
var testing = false;
var empId = 0;
$(document).ready(function() {
    var identifier = window.location.pathname.split("/")[2];
    empId = parseInt(identifier);
    
    var afterChooseEmployeePopulates = function() { $("#chooseEmployee").val(identifier) };
    if (empId) {
        populateTheEmployee(identifier);
    } else {
        afterChooseEmployeePopulates = null;
        $(".border").hide();
        $("#chooseEmployee").parent().show();
    }

    $.ajax({
        url: '/employeeProfile',
        type: 'GET',
        cache: false,
        timeout: 600000,
        success: function(json){
            $.each(json, function(index, value){
                $('#chooseEmployee').append('<option value="' + value.id + '">' + value.lastName + ', ' + value.firstName + '</option>');
            });
        }
    });

    //CustomFormFunctions.populateDropDown("#chooseEmployee", "/employeeProfile", "id", "nameCode", false, afterChooseEmployeePopulates);

    $("select").attr("size", "");
    $('#formGeneralInfo_firstName, #formGeneralInfo_lastName').on("keyup change update", function() {
        var nc = $("#formGeneralInfo_firstName").val()[0] || "";
        nc += $("#formGeneralInfo_lastName").val() || "";
        nc = nc.replace(/[^A-Za-z]/g, "");
        $("#formGeneralInfo_nameCode").val(nc);
    });
    $('form').on('click focus', function() {
        $('#error, #success').hide();
    });
    $('input[value=Next]').on("click", function(e) {
        var id = '#' + $(this).attr('id');
        switch (id) {
            case '#submitEmployeeInfo':
                $("#work-tab").trigger("click");
                break;
            case '#submitWorkInfo':
                $("#emergency-tab").trigger("click");
                break;
            case '#submitEmergencyInfo':
                $("#medical-tab").trigger("click");
                break;
            case '#submitMedicalInfo':
                $("#legacy-tab").trigger("click");
                break;
        }
    });
    $("#chooseEmployee").on("update change", function() {
        var empId = $(this).val();
        populateTheEmployee(empId);
    });
    $("#formIdentificationInfo_employeePhoto").on("change update", function() {
        var form = this.closest('form');
        var data = new FormData(form);
        $.ajax({
            url: "/profilePicture/?employeeId=" + empId,
            type: "POST",
            enctype: 'multipart/form-data',
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function(data) {
                $(".empPhoto").attr("src", data.fileDownloadUri);
            },
            error: function(e) {
                console.log(e.responseJSON);
            }
        });
    });
});

function populateTheEmployee(employeeId) {
    var forms = $("#formGeneralInfo, #formWorkInfo, #formEmergencyInfo, #formMedicalInfo");
    forms.find("input, select").off("click change update");
    CustomFormFunctions.populateElements(forms.find("input, select, textarea"), "/employeeProfile", employeeId);
    CustomFormFunctions.setSneakySave(forms.find("input, select, textarea"), "/employeeProfile", employeeId);
    $(".border").show();
    $("#chooseEmployee").val(employeeId);
    updateProfilePicture();
    console.log($("#chooseEmployee option"), employeeId);
}

function updateProfilePicture() {
    $.ajax({
        'url': '/employeeProfile/' + empId,
        'type': 'GET',
        'success': function(json) {
            var photoId = json.profilePicture;
            $('.empPhoto').attr('src', photoId ? ("/profilePicture/" + photoId) : "/img/person.jpg");
            if (photoId) {
                $('.empPhoto').attr('src', "/profilePicture/" + photoId);
            } else {
                $('.empPhoto').attr('src', "/img/person.jpg");
            }
        },
        'error': function(e) {
            console.log(e.responseJSON);
        }
    });
}

function showError(msg) {
    $("#errorText").html(msg);
    $("#error").show();
    $('html,body').animate({ scrollTop: $(".bannerImg").offset().top }, 'slow');
}
var fields = {
    "formGeneralInfo": [
        { "custom": '<h4 class="title3">Employee Information</h4>' },
        [ //Name Info
            {
                "fieldName": "lastName",
                "title": "Last Name",
                "type": "input/text",
                "required": true,
                "colspan": 4
            },
            {
                "fieldName": "firstName",
                "title": "First Name",
                "type": "input/text",
                "required": true,
                "colspan": 4
            },
            {
                "fieldName": "middleInitial",
                "title": "Middle Initial",
                "type": "input/text",
                "colspan": 4
            },
            {
                "fieldName": "nameCode",
                "title": "Name Code",
                "type": "input/text",
                "required": true,
                "placeholder": "Name Code (generated)",
                "colspan": 4
            },
            {
                "fieldName": "preferredName",
                "title": "Preferred Name",
                "type": "input/text",
                "colspan": 8
            }
        ], // end row
        [{
            "fieldName": "gender",
            "title": "Gender",
            "type": "select/text",
            "options": { "male": "Male", "female": "Female", "other": "Other" },
            "colspan": 3
        },
        {
            "fieldName": "status",
            "title": "Status",
            "type": "input/text",
            "disabled": "true",
            "colspan": 4
        },
        {
            "fieldName": "appointment",
            "title": "Appointment",
            "type": "input/text",
            "disabled": "true",
            "colspan": 5
        },
        ], // end row
        { "custom": '<h4 class="title4">Employee\'s Contact Information</h4>' },
        [ // Contact Info
            {
                "fieldName": "homePhone",
                "title": "Primary Phone",
                "type": "input/tel",
            },
            {
                "fieldName": "cellPhone",
                "title": "Secondary Phone",
                "type": "input/tel",
            },
            {
                "fieldName": "personalEmail",
                "title": "Personal Email",
                "type": "input/email",
            }
        ], // end row
        [ // Address Info
            {
                "fieldName": "addressStreet1",
                "title": "Street Address",
                "type": "input/text",
                "colspan": 6
            },
            {
                "fieldName": "addressStreet2",
                "title": "Street Address (Line 2)",
                "type": "input/text",
                "colspan": 6,
                "disabled": true
            },
            {
                "fieldName": "addressCity",
                "title": "City",
                "type": "input/text",
            },
            {
                "fieldName": "addressState",
                "title": "State",
                "type": "select/state",
            },
            {
                "fieldName": "addressZip",
                "title": "Zip",
                "type": "input/zipCode"
            }
        ],
        [
            { "custom": $('#submitEmployeeInfo').parent() }
        ]
    ], // end form
    "formWorkInfo": [
        [{
            "fieldName": "title",
            "title": "Employee Title",
            "type": "input/text",
        },
        {
            "fieldName": "activityCode.code",
            "title": "Section Code",
            "type": "select/text",
            "selectFrom": {
                "url": "/activityCode",
                "value": "code",
                "label": "name"
            }
        }
        ], // end row
        [{
            "fieldName": "stateAssigned",
            "title": "State Assigned",
            "type": "select/state",
            "colspan":4
        },
        {
            "fieldName": "dutyStation",
            "title": "Duty Station",
            "type": "select/text",
            "selectFrom": {
                "url": "/dutyStations"
            },
            "colspan":4
        },

            {
                "fieldName": "supervisor",
                "title": "Supervisor",
                "type": "select/text",
                "selectFrom": {
                    "url": "/employeeProfile",
                    "value": "id",
                    "label": "nameCode",
                },
                "colspan": 4
            }
        ], // end row

        [

            {
                "fieldName": "officePhone",
                "title": "Office Phone",
                "type": "input/tel",
                "colspan": 4
            },
            {
                "fieldName": "satPhone",
                "title": "Satellite Phone",
                "type": "input/tel",
                "colspan": 4
            },
            {
                "fieldName": "fsEmail",
                "title": "FS Email",
                "type": "input/email",
                "colspan": 4
            },
        ],
        [ // Other
            {
                "fieldName": "confidentialityAgreementDate",
                "title": "Confidentiality Agreement Date",
                "type": "input/date"
            },
            {
                "fieldName": "paymentPlan",
                "title": "Pay Plan",
                "type": "input/text",
                "colspan": 3
            },
            {
                "fieldName": "grade",
                "title": "Grade",
                "type": "select/text",
                "options": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
            }

        ], // end row
        [
            {
                "fieldName": "payStatus",
                "title": "Pay Status",
                "type": "input/text",
                "colspan": 3
            },
            {
                "fieldName": "startNonPayStatus",
                "title": "Start Nonpay Status",
                "type": "input/date",
                "colspan": 3
            },
            {
                "fieldName": "returnToPayStatus",
                "title": "Return To Pay Status",
                "type": "input/date",
                "colspan": 3
            },
            {
                "fieldName": "terminationDate",
                "title": "Termination Date",
                "type": "input/date",
                "colspan": 3
            }
        ],
        [ // Pay information
            {
                "fieldName": "series",
                "title": "Series",
                "type": "input/text",
            },
            {
                "fieldName": "pwpSalary",
                "title": "pwp Salary",
                "type": "input/number",
                "step": 0.01,
                "disabled": true
            },
            {
                "fieldName": "regPayPerPayPeriod",
                "title": "Regular Pay Per Pay Period",
                "type": "input/number",
                "step": 0.01,
                "disabled": true
            },
            {
                "fieldName": "overtimeHourlyWage",
                "title": "Overtime Hourly Wage",
                "type": "input/number",
                "step": 0.01,
                "disabled": true
            },
            {
                "fieldName": "payPeriodsLeft",
                "title": "Pay Periods Left",
                "type": "input/number",
                "step": 0.01,
                "disabled": true
            }
        ], // end row
        [
            {
                "fieldName": "masterNumber",
                "title": "Master Number",
                "type": "input/text"
            },
            {
                "fieldName": "ipNumber",
                "title": "IP Number",
                "type": "input/text"
            }
        ],
        [
            {
                "fieldName": "employeePosition",
                "title": "Employee Position",
                "type": "select/text",
                "options": { "S": "Supervisor", "E": "Employee" },
                "colspan": 4
            },
            {
                "fieldName": "fieldStatus",
                "title": "Field Status",
                "type": "select/text",
                "options": { "O": "Office", "F": "Field" },
                "colspan": 4
            },
            {
                "fieldName": "crewPosition",
                "title": "Crew Position",
                "type": "select/text",
                "options": { "CM": "Crew Member", "CL": "Crew Leader" },
                "colspan": 4
            },
        ], // end row
        [
            { "custom": $("#submitWorkInfo").parent() } // Next Button
        ]
    ],
    "formEmergencyInfo": [
        { "custom": '<h4 class="title4">Identifying Info</h4>' },
        [{
            "fieldName": "eyeColor",
            "title": "Eye Color",
            "type": "input/text",
            "placeholder": "hazel",
        },
        {
            "fieldName": "hairColor",
            "title": "Hair Color",
            "type": "input/text",
            "placeholder": "Auburn",
        },
        ],
        [{
            "fieldName": "heightFeet",
            "title": "Height<small>(Feet)</small>",
            "type": "input/number",
            "placeholder": "5",
            "min": 2,
            "max": 9,
            "colspan": 3,
        },
        {
            "fieldName": "heightInches",
            "title": "Height<small>(Inches)</small>",
            "type": "input/number",
            "placeholder": "11",
            "min": '0',
            "max": 11,
            "colspan": 3
        },
        {
            "fieldName": "weightPounds",
            "title": "Weight (Pounds)",
            "type": "input/number",
            "placeholder": "160"
        }
        ],
        [{
            "fieldName": "dateOfBirth",
            "title": "Date of Birth",
            "type": "input/date",
            "colspan": 3
        },
        {
            "fieldName": "gender",
            "title": "Gender",
            "type": "select",
            "options": {
                "male": "Male",
                "female": "Female",
                "other": "Other (explain below)",
            },
            "colspan": 3
        },
        {
            "fieldName": "race",
            "title": "Race",
            "type": "select/text",
            "placeholder": "",
            "options": {
                "Hispanic": "Hispanic/Latino",
                "Native": "American Indian or Alaska Native",
                "EastAsian": "East Asian",
                "SouthAsian": "South Asian (Desi)",
                "African": "Black or African American",
                "Hawaiian": "Native Hawaiian or Other Pacific Islander",
                "White": "White or Caucasian",
                "Other": "Two or more races or other",
            }
        }
        ],
        [
            { "custom": $("#colEmployeePhoto2") },
            {
                "fieldName": "otherIdentifyingFeatures",
                "title": "Other Identifying Features",
                "type": "textarea",
                "placeholder": "Dragon Tattoo on Left Shoulder\n\rBirthmark in the shape of Louisiana on Right Hand\n\r... Any obvious distinguishing features.",
            }
        ],
        { "custom": '<h4 class="title3">Emergency Contact Information</h4>' },
        { "custom": '<h4 class="title4">First Contact</h4>' },
        [ // Name
            {
                "fieldName": "emergencyContactFirstName1",
                "title": "First Name",
                "type": "input/text",
                "required": true
            },
            {
                "fieldName": "emergencyContactLastName1",
                "title": "Last Name",
                "type": "input/text",
                "required": true
            }
        ], // end row
        [ // Address Info
            {
                "fieldName": "emergencyContactStreetAddress1",
                "title": "Street Address",
                "type": "input/text",
                "required": true,
                "colspan": 12
            },
            {
                "fieldName": "emergencyContactCity1",
                "title": "City",
                "type": "input/text",
                "required": true
            },
            {
                "fieldName": "emergencyContactState1",
                "title": "State",
                "type": "select/state",
                "required": true
            },
            {
                "fieldName": "emergencyContactZip1",
                "title": "Zip",
                "type": "input/zipCode",
                "required": true
            }
        ], // end row
        [ // Phone Numbers and Relationship
            {
                "fieldName": "emergencyContactHomePhone1",
                "title": "Primary Phone",
                "type": "input/tel",
                "required": true,
                "colspan": 6
            },
            {
                "fieldName": "emergencyContactRelationship1",
                "title": "Relationship",
                "type": "input/text",
                "required": true,
                "colspan": 6
            },
            {
                "fieldName": "emergencyContactCellPhone1",
                "title": "Secondary Phone",
                "type": "input/tel",
                "colspan": 6
            },
            {
                "fieldName": "emergencyContactWorkPhone1",
                "title": "Work Phone",
                "type": "input/tel",
                "colspan": 6
            },
        ], // end row
        { "custom": '<h4 class="title4">Second Contact</h4>' },
        [ // Name
            {
                "fieldName": "emergencyContactFirstName2",
                "title": "First Name",
                "type": "input/text"
            },
            {
                "fieldName": "emergencyContactLastName2",
                "title": "Last Name",
                "type": "input/text"
            }
        ], // end row
        [ // Address Info
            {
                "fieldName": "emergencyContactStreetAddress2",
                "title": "Street Address",
                "type": "input/text",
                "colspan": 12
            },
            {
                "fieldName": "emergencyContactCity2",
                "title": "City",
                "type": "input/text"
            },
            {
                "fieldName": "emergencyContactState2",
                "title": "State",
                "type": "select/state"
            },
            {
                "fieldName": "emergencyContactZip2",
                "title": "Zip",
                "type": "input/zipCode"
            }
        ], // end row
        [ // Phone Numbers and Relationship
            {
                "fieldName": "emergencyContactHomePhone2",
                "title": "Primary Phone",
                "type": "input/tel",
                "colspan": 6
            },
            {
                "fieldName": "emergencyContactRelationship2",
                "title": "Relationship",
                "type": "input/text",
                "colspan": 6
            },
            {
                "fieldName": "emergencyContactCellPhone2",
                "title": "Secondary Phone",
                "type": "input/tel",
                "colspan": 6
            },
            {
                "fieldName": "emergencyContactWorkPhone2",
                "title": "Work Phone",
                "type": "input/tel",
                "colspan": 6
            },
        ], // end row
        [
            { "custom": $("#submitEmergencyInfo").parent() } // Submit Button
        ]
    ],
    "formMedicalInfo": [
        [{
            "fieldName": "insuranceName",
            "title": "Name of Health Insurance",
            "type": "input/text"
        },
        {
            "fieldName": "groupNumber",
            "title": "Group Number",
            "type": "input/text"
        },
        {
            "fieldName": "idNumber",
            "title": "ID Number",
            "type": "input/text"
        },
        {
            "fieldName": "insurancePhone",
            "title": "Insurance Phone",
            "type": "input/text"
        }
        ], // end row
        [{
            "fieldName": "allergies",
            "title": "Allergies",
            "type": "input/text",
            "colspan": 12
        },
        {
            "fieldName": "doctorsName",
            "title": "Doctor's Name",
            "type": "input/text"
        },
        {
            "fieldName": "doctorsStreetAddress",
            "title": "Doctor's Address",
            "type": "input/text"
        },
           
            {
                "fieldName": "doctorsPhone",
                "title": "Doctor's Phone",
                "type": "input/text"
            }],[
            {
                "fieldName": "doctorsZip",
                "title": "Doctor's ZipCode",
                "type": "input/zipCode"
            },
            {
                "fieldName": "doctorsState",
                "title": "Doctors State",
                "type": "select/state"
            },
            {
                "fieldName": "doctorsCity",
                "title": "Dentist's City",
                "type": "select/state"
            }
        ], // end row
        [{
            "fieldName": "dentistsName",
            "title": "Dentist's Name",
            "type": "input/text"
        },
        {
            "fieldName": "dentistsStreetAddress",
            "title": "Dentist's Address",
            "type": "input/text"
        },
        {
            "fieldName": "dentistsPhone",
            "title": "Dentist's Phone",
            "type": "input/tel"
        }], [
           
            {
                "fieldName": "dentistsZip",
                "title": "Dentist's ZipCode",
                "type": "input/zipCode"
            },
            {
                "fieldName": "dentistsState",
                "title": "Dentist's State",
                "type": "select/state"
            },
            {
                "fieldName": "dentistsCity",
                "title": "Dentist's City",
                "type": "select/state"
            }
        ], // end row
        [
            { "custom": $("#submitMedicalInfo").parent() } // Submit Button
        ]
    ]

};
CustomFormFunctions.addBootstrapFields(fields);