$(document).ready(function() {
    $("#checkIn-tab").on("click",function(){location.hash = "#CheckIn"});
    $("#property-tab").on("click",function(){location.hash = "#Property"});
    $("#training-tab").on("click",function(){location.hash = "#Training"});
    $("#general-tab").on("click",function(){location.hash = "#Profile"});
    $("#emergency-tab").on("click",function(){location.hash = "#Emergency"});
    $("#identification-tab").on("click",function(){location.hash = "#Identification"});
    $(window).trigger('hashchange');

    var userId = 46 //// Temporary
    var employeeForms = $("#formEmployeeInfo, #formEmergencyInfo, #formIdentificationInfo");
    CustomFormFunctions.populateElements(employeeForms.find("input, select, textarea"), "employeeProfile", userId);
    CustomFormFunctions.setSneakySave(employeeForms.find("input, select, textarea"), "employeeProfile", userId);
    
    $.ajax({
        'url':'employeeProfile/'+userId,
        'type':'GET',
        'success':function(json) {
            console.log(json);
        }
    });
    function updateProfilePicture() {
        $.ajax({
            'url':'employeeProfile/'+userId,
            'type':'GET',
            'success':function(json) {
                $('.empPhoto').attr('src', "/profilePicture/" + json.profilePicture);
            }
        });
    }
    $("#formIdentificationInfo_employeePhoto").on("change update",function() {
        var form = this.closest('form');
        var data = new FormData(form);
        $.ajax({
            url: "/profilePicture/?employeeId=" + userId,
            type: "POST",
            enctype: 'multipart/form-data',
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (data) {
                $(".empPhoto").attr("src", data.fileDownloadUri);
            },
            error: function (e) {
                console.log(e.responseJSON);
            }
        });
    });
    updateProfilePicture();
});
$(window).on('hashchange', function() {
    switch (location.hash) {
        case "#Property":
            $("#property-tab").trigger("click");
        break;
        case "#Training":
            $("#training-tab").trigger("click");
        break;
        case "#Profile":
            $("#general-tab").trigger("click");
        break;
        case "#Emergency":
            $("#emergency-tab").trigger("click");
        break;
        case "#Identification":
            $("#identification-tab").trigger("click");
        break;
        default:
        case "#CheckIn":
            $("#checkIn-tab").trigger("click");
        break;
    }
});

// Bootstrap Field Writer //
var fields = {
    "formEmployeeInfo" : [
        { "custom":'<h4 class="title3">Employee Information</h4>' },
        [
            {
                "nested": [
                    {   "fieldName":"firstName",
                        "title":"First Name",
                        "type":"input/text",
                        "placeholder":"Jane",
                        "required":true,
                        "colspan":4,
                    },
                    {   "fieldName":"middleInitial",
                        "title":"Middle Initial",
                        "type":"input/text",
                        "placeholder":"Q",
                        "colspan":4,
                    },
                    {   "fieldName":"lastName",
                        "title":"Last Name",
                        "type":"input/text",
                        "required":true,
                        "placeholder":"Smith",
                        "colspan":4,
                    },
                    {   "fieldName":"preferredName",
                        "title":"Preferred Name",
                        "type":"input/text",
                        "placeholder":"Janey",
                        "colspan":6,
                    },
                    {   "fieldName":"dateOfBirth",
                        "title":"Birthdate",
                        "type":"input/date",
                        "required":true,
                        "colspan":6,
                    }
                ],
            },
            {
                "custom":$("#colEmployeePhoto"),
            }
        ], // end row
        { "custom":'<h4 class="title3">Contact Information</h4>' },
        [ // Contact Info
            {   "fieldName":"homePhone",
                "title":"Home Phone",
                "type":"input/tel",
            },
            {   "fieldName":"cellPhone",
                "title":"Cell Phone",
                "type":"input/tel",
                "required":true
            },
            {   "fieldName":"personalEmail",
                "title":"Personal Email",
                "type":"input/email",
                "required":true
            },
        ], // end row
        [ // Address Info
            {   "fieldName":"addressStreet",
                "title":"Street Address",
                "type":"input/text",
                "required":true,
                "colspan":6,
                "disabled":true,
            },
            {   "fieldName":"addressStreet2",
                "title":"Street Address (Line 2)",
                "type":"input/text",
                "required":true,
                "colspan":6,
                "disabled":true,
            },
            {   "fieldName":"addressCity",
                "title":"City",
                "type":"input/text",
                "required":true,
            },
            {   "fieldName":"addressState",
                "title":"State",
                "type":"select/state",
                "required":true
            },
            {   "fieldName":"addressZip",
                "title":"Zip",
                "type":"input/zipCode",
                "required":true
            },
        ],
        { "custom": $(".submitChangesTemplate").clone().removeClass("submitChangesTemplate").attr("hidden",false) },
    ],
    "formEmergencyInfo" : [
        {   "custom":'<h4 class="title3">Employee Contact Information</h4>' },
        {   "custom":'<h4 class="title4">First Contact</h4>' },
        [ // Name
            {   "fieldName":"emergencyContactFirstName1",
                "title":"First Name",
                "type":"input/text",
                "required":true
            },
            {   "fieldName":"emergencyContactLastName1",
                "title":"Last Name",
                "type":"input/text",
                "required":true
            },
        ], // end row
        [ // Address Info
            {   "fieldName":"emergencyContactStreetAddress1",
                "title":"Street Address",
                "type":"input/text",
                "required":true,
                "colspan":12,
            },
            {   "fieldName":"emergencyContactCity1",
                "title":"City",
                "type":"input/text",
                "required":true,
            },
            {   "fieldName":"emergencyContactState1",
                "title":"State",
                "type":"select/state",
                "required":true
            },
            {   "fieldName":"emergencyContactZip1",
                "title":"Zip",
                "type":"input/zipCode",
                "required":true
            },
        ], // end row
        [ // Phone Numbers and Relationship
            {   "fieldName":"emergencyContactHomePhone1",
                "title":"Home Phone",
                "type":"input/tel",
                "required":true,
                "colspan":6,
            },
            {   "fieldName":"emergencyContactCellPhone1",
                "title":"Cell Phone",
                "type":"input/tel",
                "required":true,
                "colspan":6,
            },
            {   "fieldName":"emergencyContactWorkPhone1",
                "title":"Work Phone",
                "type":"input/tel",
                "required":true,
                "colspan":6,
            },
            {   "fieldName":"emergencyContactRelationship1",
                "title":"Relationship",
                "type":"input/text",
                "required":true,
                "colspan":6,
            },
        ], // end row
        {   "custom":'<h4 class="title4">Second Contact</h4>' },
        [ // Name
            {   "fieldName":"emergencyContactFirstName2",
                "title":"First Name",
                "type":"input/text",
            },
            {   "fieldName":"emergencyContactLastName2",
                "title":"Last Name",
                "type":"input/text",
            },
        ], // end row
        [ // Address Info
            {   "fieldName":"emergencyContactStreetAddress2",
                "title":"Street Address",
                "type":"input/text",
                "colspan":12,
            },
            {   "fieldName":"emergencyContactCity2",
                "title":"City",
                "type":"input/text",
            },
            {   "fieldName":"emergencyContactState2",
                "title":"State",
                "type":"select/state",
            },
            {   "fieldName":"emergencyContactZip2",
                "title":"Zip",
                "type":"input/zipCode",
            },
        ], // end row
        [ // Phone Numbers and Relationship
            {   "fieldName":"emergencyContactHomePhone2",
                "title":"Home Phone",
                "type":"input/tel",
                "colspan":6,
            },
            {   "fieldName":"emergencyContactCellPhone2",
                "title":"Cell Phone",
                "type":"input/tel",
                "colspan":6,
            },
            {   "fieldName":"emergencyContactWorkPhone2",
                "title":"Work Phone",
                "type":"input/tel",
                "colspan":6,
            },
            {   "fieldName":"emergencyContactRelationship2",
                "title":"Relationship",
                "type":"input/text",
                "colspan":6,
            },
        ], // end row
        { "custom": $(".submitChangesTemplate").clone().removeClass("submitChangesTemplate").attr("hidden",false) },
    ],
    "formIdentificationInfo" : [
        [
            {   "fieldName":"eyeColor",
                "title":"Eye Color",
                "type":"input/text",
                "placeholder":"hazel",
            },
            {   "fieldName":"hairColor",
                "title":"Hair Color",
                "type":"input/text",
                "placeholder":"Auburn",
            },
        ],
        [
            {   "fieldName":"dateOfBirth",
                "title":"Date of Birth",
                "type":"input/date",
                "colspan":3,
            },
            {   "fieldName":"gender",
                "title":"Gender",
                "type":"select",
                "options":{
                    "male":"Male",
                    "female":"Female",
                    "other":"Other (explain below)",
                },
                "colspan":3,
            },
            {   "fieldName":"race",
                "title":"Race",
                "type":"select/text",
                "placeholder":"",
                "options":{
                    "Hispanic":"Hispanic/Latino",
                    "Native":"American Indian or Alaska Native",
                    "EastAsian":"East Asian",
                    "SouthAsian":"South Asian (Desi)",
                    "African":"Black or African American",
                    "Hawaiian":"Native Hawaiian or Other Pacific Islander",
                    "White":"White or Caucasian",
                    "Other":"Two or more races or other",
                }
            },
        ],
        [
            {   "custom": $("#colEmployeePhoto2")  },
            {   "fieldName":"otherIdentifyingFeatures",
                "title":"Other Identifying Features",
                "type":"textarea",
                "placeholder":"Dragon Tattoo on Left Shoulder\n\rBirthmark in the shape of Louisiana on Right Hand\n\r... Any obvious distinguishing features.",
            },
        ]
    ]
}
CustomFormFunctions.addBootstrapFields(fields);