// var TestData = { "id": "47", "lastName": "Barrs", "firstName": "Karisa", "middleInitial": "", "nameCode": "KBarrs", "preferredName": "", "driversLicense.expiration": '2018-09-12', "driversLicense.state": 'MI', "driversLicense.number": 'dsfsd', "addressStreet": "465", "dateOfBirth": "2018-09-12", "addressCity": "fds", "addressZip": "12345", "homePhone": "", "cellPhone": "(546) 654-8646", "personalEmail": "asdf@sadf", "roomNumber": "", "title": "", "confidentialityAgreementDate": "", "series": "", "emergencyContactFirstName1": "", "emergencyContactStreetAddress1": "", "emergencyContactCity1": "", "emergencyContactZip1": "", "emergencyContactHomePhone1": "", "emergencyContactCellPhone1": "", "emergencyContactWorkPhone1": "", "emergencyContactRelationship1": "", "emergencyContactFirstName2": "", "emergencyContactStreetAddress2": "", "emergencyContactCity2": "", "emergencyContactZip2": "", "emergencyContactHomePhone2": "", "emergencyContactCellPhone2": "", "emergencyContactWorkPhone2": "", "emergencyContactRelationship2": "", "driversLicense.state": "DE", "addressState": "SC", "stateAssigned": "Choose State Assigned", "dutyStation": "", "activityCode": { "name": "Administration", "code": "AD" }, "grade": "Choose Grade", "emergencyContactState1": "Choose State", "emergencyContactState2": "Choose State" }
var testing = false;
var empId = 0;
$(document).ready(function() {
    var identifier = window.location.pathname.split("/")[3];
    empId = parseInt(identifier);
    $("#formGeneralInfo_Secondary").prop("disabled", true);
    $("#formGeneralInfo_Primary").prop("disabled", true);
    $("#formGeneralInfo_shareNum_lbl").hide();
    $("#formGeneralInfo_shareNum").hide();
    var afterChooseEmployeePopulates = function() { $("#chooseEmployee").val(identifier) };
    if (empId) {
        populateTheEmployee(identifier);
    } else {
        afterChooseEmployeePopulates = null;
        $(".border").hide();
        $("#chooseEmployee").parent().show();
    }

    $.ajax({
        url: "/boss/employeeProfile",
        type: "GET",
        cache: false,
        timeout: 600000,
        success: function(json) {
            $.each(json,
                function(index, value) {
                    $("#chooseEmployee").append('<option value="' +
                        value.id +
                        '">' +
                        value.lastName +
                        ", " +
                        value.firstName +
                        "</option>");
                });
        }
    });

    //CustomFormFunctions.populateDropDown("#chooseEmployee", "/employeeProfile", "id", "nameCode", false, afterChooseEmployeePopulates);

    $("select").attr("size", "");
    $("#formGeneralInfo_firstName, #formGeneralInfo_lastName").on("keyup change update",
        function() {
            var nc = $("#formGeneralInfo_firstName").val()[0] || "";
            nc += $("#formGeneralInfo_lastName").val() || "";
            nc = nc.replace(/[^A-Za-z]/g, "");
            $("#formGeneralInfo_nameCode").val(nc);
        });
    $("form").on("click focus",
        function() {
            $("#error, #success").hide();
        });
    $("input[value=Next]").on("click",
        function(e) {
            var id = "#" + $(this).attr("id");
            switch (id) {
            case "#submitEmployeeInfo":
                $("#work-tab").trigger("click");
                break;
            case "#submitWorkInfo":
                $("#emergency-tab").trigger("click");
                break;
            };
        });
    $("input[value=Done]").on("click",
        function(e) {
            var id = "#" + $(this).attr("id");
            switch (id) {
            case "#submitEmergencyInfo":
                window.location.replace("/boss/viewAllEmployees");
                break;
            }
        });
    $("#chooseEmployee").on("update change",
        function() {
            var empId = $(this).val();
            populateTheEmployee(empId);
        });
    $("#formIdentificationInfo_employeePhoto").on("change update",
        function() {
            var form = this.closest("form");
            var data = new FormData(form);
            $.ajax({
                url: "/boss/profilePicture/?employeeId=" + empId,
                type: "POST",
                enctype: "multipart/form-data",
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

    $.ajax({
        url: "/boss/employeeProfile/" + empId,
        type: "GET",
        cache: false,
        success: function (json) {

            if (json.homePhoneTypeIs == "primary" && json.homePhone != undefined) {
                $('#formGeneralInfo_PrimaryType option[value=home]').attr("selected","selected");
                $('#formGeneralInfo_Primary').val(json.homePhone);
                $("#formGeneralInfo_Primary").prop("disabled", false);

            }

            if (json.homePhoneTypeIs == "secondary" && json.homePhone != undefined) {
                $('#formGeneralInfo_secondaryType option[value=home]').attr("selected", "selected");
                $('#formGeneralInfo_Secondary').val(json.homePhone);
                $("#formGeneralInfo_Secondary").prop("disabled", false);
            }

            if (json.cellPhoneTypeIs == "primary" && json.cellPhone != undefined) {
                $('#formGeneralInfo_PrimaryType option[value=cell]').attr("selected", "selected");
                $("#formGeneralInfo_shareNum").show();
                $("#formGeneralInfo_shareNum_lbl").show();
                $('#formGeneralInfo_Primary').val(json.cellPhone);
                $("#formGeneralInfo_Primary").prop("disabled", false);
                var v = json.showPersonalCellPhone;
                if (v == true) {
                    $("#formGeneralInfo_shareNum").val("true");
                } else {
                    $("#formGeneralInfo_shareNum").val("false");
                }
            }

            if (json.cellPhoneTypeIs == "secondary" && json.cellPhone != undefined) {
                $('#formGeneralInfo_secondaryType option[value=cell]').attr("selected", "selected");

                $("#formGeneralInfo_shareNum").show();
                $("#formGeneralInfo_shareNum_lbl").show();
                $('#formGeneralInfo_Secondary').val(json.cellPhone);
                $("#formGeneralInfo_Secondary").prop("disabled", false);
                var v = json.showPersonalCellPhone;
                if (v == true) {
                    $("#formGeneralInfo_shareNum").val("true");
                } else {
                    $("#formGeneralInfo_shareNum").val("false");
                }
            }

            

            /*$("#formGeneralInfo_Primary").val(json.homePhone);
            $("#formGeneralInfo_Secondary").val(json.cellPhone);
            if (json.homePhone != undefined && json.homePhone != null) {
                $("#formGeneralInfo_PrimaryType").val("home");
                $("#formGeneralInfo_Primary").prop("disabled", false);
            }

            if (json.cellPhone != undefined && json.cellPhone != null) {
                $("#formGeneralInfo_secondType").val("cells");
                $("#formGeneralInfo_shareNum").show();
                $("#formGeneralInfo_shareNum_lbl").show();
                $("#formGeneralInfo_Secondary").prop("disabled", false);
                var v = json.showPersonalCellPhone;
                if (v == true) {
                    $("#formGeneralInfo_shareNum").val("true");
                } else {
                    $("#formGeneralInfo_shareNum").val("false");
                }


            }*/


        },
        error: function(a, b, c) {
            console.log(a.responseJSON);
            console.log(b);
            console.log(c);
        }
    });


    $("#formGeneralInfo_PrimaryType").on("change update",
        function () {

            var primary = $("#formGeneralInfo_PrimaryType :selected").val();
            if (primary == "cell") {
                $("#formGeneralInfo_shareNum").show();
                $("#formGeneralInfo_shareNum_lbl").show();
                $("#formGeneralInfo_Primary").attr("name", "cellPhone");
                $("#formGeneralInfo_Primary").prop("disabled", false);
                setCellPhoneType("primary", empId);
            } else {
                $("#formGeneralInfo_Primary").attr("name", "homePhone");
                $("#formGeneralInfo_Primary").prop("disabled", false);
                setHomePhoneType("primary", empId);
            }
        });

    $("#formGeneralInfo_secondaryType").on("change update",
        function () {

            var secondary = $("#formGeneralInfo_secondaryType :selected").val();
            
            if (secondary == "cell") {
                $("#formGeneralInfo_shareNum").show();
                $("#formGeneralInfo_shareNum_lbl").show();
                $("#formGeneralInfo_Secondary").attr("name", "cellPhone");
                $("#formGeneralInfo_Secondary").prop("disabled", false);
                setCellPhoneType("secondary", empId);
            } else {
                $("#formGeneralInfo_Secondary").attr("name", "homePhone");
                $("#formGeneralInfo_Secondary").prop("disabled", false);
                setHomePhoneType("secondary", empId);
            }
        });

    $("#formGeneralInfo_shareNum").on("change update",
        function() {
            var partial = { "showPersonalCellPhone": false };
            var shareNumVal = $("#formGeneralInfo_shareNum :selected").val();

            if (shareNumVal == "true") {
                partial.showPersonalCellPhone = true;
            } else {
                partial.showPersonalCellPhone = false;
            }

            CustomFormFunctions.putPartialInfo("/boss/employeeProfile", empId, partial);
        });
});

function populateTheEmployee(employeeId) {
    var forms = $("#formGeneralInfo, #formWorkInfo, #formEmergencyInfo, #formMedicalInfo");
    forms.find("input, select").off("click change update");
    CustomFormFunctions.populateElements(forms.find("input, select, textarea"), "/boss/employeeProfile", employeeId);
    CustomFormFunctions.setSneakySave(forms.find("input, select, textarea"), "/boss/employeeProfile", employeeId);
    $(".border").show();
    $("#chooseEmployee").val(employeeId);
    updateProfilePicture();
    console.log($("#chooseEmployee option"), employeeId);
}

function updateProfilePicture() {
    $.ajax({
        'url': "/boss/employeeProfile/" + empId,
        'type': "GET",
        'success': function(json) {
            var photoId = json.profilePicture;
            $(".empPhoto").attr("src", photoId ? ("/boss/profilePicture/" + photoId) : "/boss/img/person.jpg");
            if (photoId) {
                $(".empPhoto").attr("src", "/boss/profilePicture/" + photoId);
            } else {
                $(".empPhoto").attr("src", "/boss/img/person.jpg");
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
    $("html,body").animate({ scrollTop: $(".bannerImg").offset().top }, "slow");
}

var fields = {
    "formGeneralInfo": [
        { "custom": '<h4 class="title3">Employee Information</h4>' },
        [//Name Info
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
        ],
        [
            {
                "fieldName": "role",
                "title": "User Role / Access",
                "type": "select/text",
                "required": true,
                "options": ["Support Admin", "Supervisor", "Fleet / Vehicle", "Budget", "Basic Access"]
            }
        ],
        [
            {
                "fieldName": "preferredName",
                "title": "Preferred Name",
                "type": "input/text",
                "colspan": 3
            },
            {
                "fieldName": "gender",
                "title": "Gender",
                "type": "select/text",
                "options": { "male": "Male", "female": "Female", "other": "Other" },
                "colspan": 3
            },
            {
                "fieldName": "status",
                "title": "Status",
                "type": "select/text",
                "colspan": 3,
                "options": { "P": "Permanent", "PS": "Permanent / Seasonal", "T": "Temporary" }
            },
            {
                "fieldName": "appointment",
                "title": "Appointment",
                "type": "select/text",
                "colspan": 3,
                "options": ["1039", "13/13", "18/8"],
                "placeholder": "Only applies to Seasonal and Temps"
            }
        ], // end row
        { "custom": '<h4 class="title4">Employee\'s Contact Information</h4>' },
        [// Contact Info
            {
                "fieldName": "PrimaryType",
                "title": "Primary Phone Type",
                "type": "select/text",
                "placeholder": "Select type",
                "required": true,
                "options": { "cell": "Cell Phone", "home": "Home Phone" }
            },
            {
                "fieldName": "Primary", //Home Phone
                "title": "Primary Phone",
                "name": "Primary",
                "required": true,
                "type": "input/tel"
            },
            {
                "fieldName": "secondaryType",
                "title": "Secondary Phone Type",
                "type": "select/text",
                "placeholder": "Select type",
                "options": { "cell": "Cell Phone", "home": "Home Phone" }
            },
            {
                "fieldName": "Secondary", //cell phone
                "name": "Secondary",
                "title": "Secondary Phone",
                "type": "input/tel"
            },
            {
                "fieldName": "shareNum",
                "title": "Share Cell Phone?",
                "type": "select/text",
                "placeholder": "Select Response",
                "options": { "true": "Yes", "false": "No" }

            }
        ],
        [// Address Info
            {
                "fieldName": "addressStreet1",
                "title": "Street Address (Home)",
                "type": "input/text",
            },
            {
                "fieldName": "addressStreet2",
                "title": "Street Address (Home Line 2)",
                "type": "input/text",
            },
            {
                "fieldName": "personalEmail",
                "title": "Personal Email",
                "type": "input/text"
            }
        ],
        [
            {
                "fieldName": "addressCity",
                "title": "City (Home)",
                "type": "input/text",
            },
            {
                "fieldName": "addressState",
                "title": "State (Home)",
                "type": "select/state",
            },
            {
                "fieldName": "addressZip",
                "title": "Zip (Home)",
                "type": "input/zipCode"
            }
        ],
        [
            { "custom": $("#submitEmployeeInfo").parent() }
        ]
    ], // end form
    "formWorkInfo": [
        [
            {
                "fieldName": "title",
                "title": "Employee Title",
                "type": "input/text",
            },
            {
                "fieldName": "activityCode.code",
                "title": "Section Code",
                "type": "select/text",
                "selectFrom": {
                    "url": "/boss/activityCode",
                    "value": "code",
                    "label": "name"
                }
            },
            {
                "fieldName": "supervisor",
                "title": "Supervisor",
                "type": "select/text",
                "selectFrom": {
                    "url": "/boss/employeeProfile",
                    "value": "id",
                    "label": "nameCode",
                },
            }
        ], // end row
        [
            {
                "fieldName": "stateAssigned",
                "title": "State Assigned",
                "type": "select/state",
                "colspan": 4
            },
            {
                "fieldName": "dutyStation",
                "title": "Duty Station",
                "type": "select/text",
                "selectFrom": {
                    "url": "/boss/dutyStations"
                },
                "colspan": 4
            },
            {
                "fieldName": "officePhone",
                "title": "Office Phone",
                "type": "input/tel",
                "colspan": 4
            }
        ], // end row
        [
            {
                "fieldName": "satPhone",
                "title": "Sat Phone",
                "type": "input/tel"
            },
            {
                "fieldName": "fsCellPhone",
                "title": "FS Cell Phone",
                "type": "input/tel"
            },
            {
                "fieldName": "fsEmail",
                "title": "FS Email",
                "type": "input/text",
                "colspan": 4
            },
        ],
        [
            {
                "fieldName": "series",
                "title": "Series",
                "type": "input/series",
                "max": 4,
                "min": 4,
                "placeholder": "i.e. 0301"
            },
            {
                "fieldName": "step",
                "title": "Step",
                "type": "select/text",
                "options": ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]
            },
            {
                "fieldName": "paymentPlan",
                "title": "Pay Plan",
                "type": "input/payplan",
                "placeholder": 'Enter "GS"'
            },
            {
                "fieldName": "grade",
                "title": "Grade",
                "type": "select/text",
                "options": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
            },
            {
                "fieldName": "payStatus",
                "title": "Pay Status",
                "type": "select/text",
                "options": ["Pay", "Non-Pay"]
            }
        ], // end row
        [
            {
                "fieldName": "startNonPayStatus",
                "title": "Start Nonpay Status",
                "type": "input/date",
            },
            {
                "fieldName": "returnToPayStatus",
                "title": "Return To Pay Status",
                "type": "input/date",
            },
            {
                "fieldName": "terminationDate",
                "title": "Termination Date",
                "type": "input/date",
            }
        ],
        [
            {
                "fieldName": "employeePosition",
                "title": "Employee Position",
                "type": "select/text",
                "options": { "S": "Supervisor", "E": "Employee" },
            },
            {
                "fieldName": "fieldStatus",
                "title": "Field Status",
                "type": "select/text",
                "options": { "O": "Office", "F": "Field" },
            },
            {
                "fieldName": "crewPosition",
                "title": "Crew Position",
                "type": "select/text",
                "options": { "CM": "Crew Member", "CL": "Crew Leader" },
            },
        ], // end row
        [
            { "custom": $("#submitWorkInfo").parent() } // Next Button
        ]
    ],
    "formEmergencyInfo": [
        { "custom": '<h4 class="title4">Identifying Info</h4>' },
        [
            {
                "fieldName": "eyeColor",
                "title": "Eye Color",
                "type": "input/text",
            },
            {
                "fieldName": "hairColor",
                "title": "Hair Color",
                "type": "input/text",
            },
        ],
        [
            {
                "fieldName": "allergies",
                "title": "Allergies",
                "type": "input/text",
            },
            {
                "fieldName": "dateOfBirth",
                "title": "Date of Birth",
                "type": "input/date",
            }
        ],
        [
            {
                "fieldName": "heightFeet",
                "title": "Height<small>(Feet)</small>",
                "type": "input/number",
                "placeholder": "Feet",
                "min": 2,
                "max": 9,
                "colspan": 3
            },
            {
                "fieldName": "heightInches",
                "title": "Height<small>(Inches)</small>",
                "type": "input/number",
                "placeholder": "Inches",
                "min": "0",
                "max": 11,
                "colspan": 3
            },
            {
                "fieldName": "weightPounds",
                "title": "Weight (Pounds)",
                "type": "input/number",
                "placeholder": "Pounds"
            }
        ],
        [

            // {
            //     "fieldName": "race",
            //     "title": "Race",
            //     "type": "select/text",
            //     "placeholder": "",
            //     "options": {
            //         "Hispanic": "Hispanic/Latino",
            //         "Native": "American Indian or Alaska Native",
            //         "EastAsian": "East Asian",
            //         "SouthAsian": "South Asian (Desi)",
            //         "African": "Black or African American",
            //         "Hawaiian": "Native Hawaiian or Other Pacific Islander",
            //         "White": "White or Caucasian",
            //         "Other": "Two or more races or other",
            //     }
            // }
        ],
        [
            { "custom": $("#colEmployeePhoto2") },
            {
                "fieldName": "otherIdentifyingFeatures",
                "title": "Other Information",
                "type": "textarea",
            }
        ],
        { "custom": '<h4 class="title3">Emergency Contact Information</h4>' },
        { "custom": '<h4 class="title4">First Contact</h4>' },
        [// Name
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
        [// Address Info
            {
                "fieldName": "emergencyContactStreetAddress1",
                "title": "Street Address (Contact)",
                "type": "input/text",
                "required": true,
                "colspan": 12
            },
            {
                "fieldName": "emergencyContactCity1",
                "title": "City (Contact)",
                "type": "input/text",
                "required": true
            },
            {
                "fieldName": "emergencyContactState1",
                "title": "State (Contact)",
                "type": "select/state",
                "required": true
            },
            {
                "fieldName": "emergencyContactZip1",
                "title": "Zip (Contact)",
                "type": "input/zipCode",
                "required": true
            }
        ], // end row
        [// Phone Numbers and Relationship
            {
                "fieldName": "emergencyContactHomePhone1",
                "title": "Primary Phone (Contact)",
                "type": "input/tel",
                "colspan": 6
            },
            {
                "fieldName": "emergencyContactCellPhone1",
                "title": "Secondary Phone (Contact)",
                "type": "input/tel",
                "colspan": 6
            },
            {
                "fieldName": "emergencyContactWorkPhone1",
                "title": "Work Phone (Contact)",
                "type": "input/tel",
                "colspan": 6
            },
            {
                "fieldName": "emergencyContactRelationship1",
                "title": "Relationship",
                "type": "input/text",
                "required": true,
                "colspan": 6
            },
        ], // end row
        { "custom": '<h4 class="title4">Second Contact</h4>' },
        [// Name
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
        [// Address Info
            {
                "fieldName": "emergencyContactStreetAddress2",
                "title": "Street Address (Contact 2)",
                "type": "input/text",
                "colspan": 12
            },
            {
                "fieldName": "emergencyContactCity2",
                "title": "City (Contact 2)",
                "type": "input/text"
            },
            {
                "fieldName": "emergencyContactState2",
                "title": "State (Contact 2)",
                "type": "select/state"
            },
            {
                "fieldName": "emergencyContactZip2",
                "title": "Zip (Contact 2)",
                "type": "input/zipCode"
            }
        ], // end row
        [// Phone Numbers and Relationship
            {
                "fieldName": "emergencyContactHomePhone2",
                "title": "Primary Phone (Contact 2)",
                "type": "input/tel",
                "colspan": 6
            },
            {
                "fieldName": "emergencyContactCellPhone2",
                "title": "Secondary Phone (Contact 2)",
                "type": "input/tel",
                "colspan": 6
            },
            {
                "fieldName": "emergencyContactWorkPhone2",
                "title": "Work Phone (Contact 2)",
                "type": "input/tel",
                "colspan": 6
            },
            {
                "fieldName": "emergencyContactRelationship2",
                "title": "Relationship",
                "type": "input/text",
                "colspan": 6
            },
        ], // end row
        [
            { "custom": $("#submitEmergencyInfo").parent() } // Submit Button
        ]
    ]


};
CustomFormFunctions.addBootstrapFields(fields);


function setCellPhoneType(type, id) {
    CustomFormFunctions.putPartialInfo("/boss/employeeProfile", id, { "cellPhoneTypeIs": type }, function (good) { }, function (a, b, c) {
        console.log(a.ResponseText);
    });
}

function setHomePhoneType(type, id) {
    CustomFormFunctions.putPartialInfo("/boss/employeeProfile", id, { "homePhoneTypeIs": type }, function (good) { }, function (a, b, c) {
        console.log(a.ResponseText);
    });
}