$(document).ready(function(){
    $('#viewList').click(function(){
        window.location.href = '/boss/viewFleet';
    });
    $('#addAnother').click(function(){
        window.location.reload();
    })
});


$(document).ready(function () {

    // hiding error message once we start modifying the form again
    $('form').on('click focus', function () {
        $('#error, #success').hide();
    });

    // submitting data for new aux contacts
    $('input[type=submit]').on("click", function (e) {
        e.preventDefault();
        // checking form validity
        if ($('#newFleet:valid').length == 0) {
            showError("Please ensure all fields are filled out correctly");
            return false;
        } else {
            e.preventDefault();
        }


        // creating vars to submit to ajax
        var form = $('#newFleet');
        var method = "POST";
        var url =  "/boss/vehicle";
        var data = {
            'license':form.find('[name=license]').val(),
            'vin':form.find('[name=vin]').val(),
            'modelYear':form.find('[name=modelYear]').val(),
            'make':form.find('[name=make]').val(),
            'modelNumber':form.find('[name=modelNumber]').val(),
            'description':form.find('[name=description]').val()
        }
        // stringifying the data for ajax
        data = JSON.stringify(data);

        // ajax post call
        $.ajax({
            url: url,
            type: method,
            data: data,
            contentType: "application/json",
            cache: false,
            timeout: 600000,
            success: function(response){
                $('#exampleModal').modal('show');
                console.log(" *** successfully updated see data below ***");
                console.log(data);
            },
            error: function(error){
                return false;
                e.preventDefault();
                console.log(" !!! Error" + error + " !!! ") ;
                console.log(a.responseJSON);
            }
        });
    });
});

// showing error message if form is not valid
function showError(msg) {
    $("#errorText").html(msg);
    $("#error").show();
    $('html,body').animate({scrollTop: '100px'});
}  


var fields = {
    "newFleet": [
        [//vehicle info row
            {"fieldName": "license",
                "title": "License",
                "type": "input/text",
                "colspan": 6,
                "placeholder": "Enter License",
            },
            {"fieldName": "vin",
                "title": "Vin",
                "type": "input/vin",
                "required": true,
                "colspan": 6,
                "placeholder": "Enter Vin",
            }
        ],
        [ // vehicle info row              
            {"fieldName": "modelYear",
                "title": "Vehicle Year",
                "type": "select/vyear",
                "required": true,
                "colspan": 3,
            },            
            {"fieldName": "make",
                "title": "Make",
                "type": "input/text",
                "required": true,
                "colspan": 3,
                "placeholder": "Enter Make",
            },   
            {"fieldName": "modelNumber",
                "title": "Vehicle Model",
                "type": "input/text",
                "required": true,
                "colspan": 3,
                "placeholder": "Enter Model",
            },                           
            {"fieldName": "description",
                "title": "Vehicle Description",
                "type": "input/text",
                "colspan": 3,
                "placeholder": "I.E. Crew Cab",
                "required": true,
            }

        ], // end row
        [
            {   "custom": '<input type="submit" class="btn btn-success addNewFleetBtn"  value="Add Fleet Vehicle">' }
        ]
    ]
}

// calling bootstrap field writer function
addBootstrapFields(fields)







// {
//     "accessory": "string",
//     "assignedOperator": {
//       "activityCode": {
//         "code": "string",
//         "name": "string"
//       },
//       "addressCity": "string",
//       "addressState": "string",
//       "addressZip": "string",
//       "cellPhone": "string",
//       "confidentialityAgreementDate": "2018-10-10T17:44:11.994Z",
//       "dateOfBirth": "2018-10-10T17:44:11.995Z",
//       "driversLicense": {
//         "expiration": "2018-10-10T17:44:11.995Z",
//         "id": 0,
//         "number": "string",
//         "state": "string"
//       },
//       "dutyStation": "string",
//       "emergencyContactCellPhone1": "string",
//       "emergencyContactCellPhone2": "string",
//       "emergencyContactCity1": "string",
//       "emergencyContactCity2": "string",
//       "emergencyContactFirstName1": "string",
//       "emergencyContactFirstName2": "string",
//       "emergencyContactHomePhone1": "string",
//       "emergencyContactHomePhone2": "string",
//       "emergencyContactLastName1": "string",
//       "emergencyContactLastName2": "string",
//       "emergencyContactRelationship1": "string",
//       "emergencyContactRelationship2": "string",
//       "emergencyContactState1": "string",
//       "emergencyContactState2": "string",
//       "emergencyContactStreetAddress1": "string",
//       "emergencyContactStreetAddress2": "string",
//       "emergencyContactWorkPhone1": "string",
//       "emergencyContactWorkPhone2": "string",
//       "emergencyContactZip1": "string",
//       "emergencyContactZip2": "string",
//       "employees": [
//         {}
//       ],
//       "eyeColor": "string",
//       "firstName": "string",
//       "gender": "string",
//       "grade": "string",
//       "hairColor": "string",
//       "homePhone": "string",
//       "id": 0,
//       "lastName": "string",
//       "middleInitial": "string",
//       "nameCode": "string",
//       "otherIdentifyingFeatures": "string",
//       "overtimeHourlyWage": 0,
//       "pWPSalary": 0,
//       "payPeriodsLeft": 0,
//       "paymentPlan": "string",
//       "personalEmail": "string",
//       "preferredName": "string",
//       "profilePicture": 0,
//       "pwpsalary": 0,
//       "race": "string",
//       "regPayPerPayPeriod": 0,
//       "roomNumber": "string",
//       "series": "string",
//       "stateAssigned": "string",
//       "supervisor": {},
//       "title": "string"
//     },
//     "cityOrLocation": "string",
//     "color": "string", //vin number which is needed
//     "dateAquired": "2018-10-10T17:44:11.995Z",
//     "description": "string",
//     "disposalDate": "2018-10-10T17:44:11.995Z",
//     "engineNumber": "string",
//     "equipmentNumber": "string",
//     "id": 0,
//     "keysToolBox": "string",
//     "license": "string", //vin number which is needed
//     "make": "string", //vin number which is needed
//     "modelNumber": "string", //vin number which is needed
//     "modelYear": 0, //vin number which is needed
//     "monthlyIWFIAUsages": [
//       {
//         "cost": 0,
//         "daysUsed": 0,
//         "gas": 0,
//         "id": 0,
//         "jobCode": {
//           "amount": 0,
//           "description": "string",
//           "financialYear": 0,
//           "id": 0,
//           "jobCode": "string",
//           "overrideCode": 0
//         },
//         "mileage": 0,
//         "month": 0,
//         "oil": 0,
//         "operator": {
//           "activityCode": {
//             "code": "string",
//             "name": "string"
//           },
//           "addressCity": "string",
//           "addressState": "string",
//           "addressZip": "string",
//           "cellPhone": "string",
//           "confidentialityAgreementDate": "2018-10-10T17:44:11.995Z",
//           "dateOfBirth": "2018-10-10T17:44:11.995Z",
//           "driversLicense": {
//             "expiration": "2018-10-10T17:44:11.995Z",
//             "id": 0,
//             "number": "string",
//             "state": "string"
//           },
//           "dutyStation": "string",
//           "emergencyContactCellPhone1": "string",
//           "emergencyContactCellPhone2": "string",
//           "emergencyContactCity1": "string",
//           "emergencyContactCity2": "string",
//           "emergencyContactFirstName1": "string",
//           "emergencyContactFirstName2": "string",
//           "emergencyContactHomePhone1": "string",
//           "emergencyContactHomePhone2": "string",
//           "emergencyContactLastName1": "string",
//           "emergencyContactLastName2": "string",
//           "emergencyContactRelationship1": "string",
//           "emergencyContactRelationship2": "string",
//           "emergencyContactState1": "string",
//           "emergencyContactState2": "string",
//           "emergencyContactStreetAddress1": "string",
//           "emergencyContactStreetAddress2": "string",
//           "emergencyContactWorkPhone1": "string",
//           "emergencyContactWorkPhone2": "string",
//           "emergencyContactZip1": "string",
//           "emergencyContactZip2": "string",
//           "employees": [
//             {}
//           ],
//           "eyeColor": "string",
//           "firstName": "string",
//           "gender": "string",
//           "grade": "string",
//           "hairColor": "string",
//           "homePhone": "string",
//           "id": 0,
//           "lastName": "string",
//           "middleInitial": "string",
//           "nameCode": "string",
//           "otherIdentifyingFeatures": "string",
//           "overtimeHourlyWage": 0,
//           "pWPSalary": 0,
//           "payPeriodsLeft": 0,
//           "paymentPlan": "string",
//           "personalEmail": "string",
//           "preferredName": "string",
//           "profilePicture": 0,
//           "pwpsalary": 0,
//           "race": "string",
//           "regPayPerPayPeriod": 0,
//           "roomNumber": "string",
//           "series": "string",
//           "stateAssigned": "string",
//           "supervisor": {},
//           "title": "string"
//         },
//         "year": 0
//       }
//     ],
//     "oldLicense": "string",
//     "ownershipType": "string",
//     "releasedDate": "2018-10-10T17:44:11.996Z",
//     "replacementDate": "2018-10-10T17:44:11.996Z",
//     "state": "string",
//     "tailgate": "string",
//     "tonneau": "string",
//     "topper": "string",
//     "vehicleClassCode": "string",
//     "vin": "string" //vin number which is needed
//   }



