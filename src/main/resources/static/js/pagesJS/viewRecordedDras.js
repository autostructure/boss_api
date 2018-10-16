var fakeData = [
    {
        "dateOfAssessment": "2018-10-11T15:20:34.611Z",
        "employeeProfile": {
            "activityCode": {
                "code": "string",
                "name": "string"
            },
            "addressCity": "string",
            "addressState": "string",
            "addressZip": "string",
            "cellPhone": "string",
            "confidentialityAgreementDate": "2018-10-11T15:20:34.611Z",
            "dateOfBirth": "2018-10-11T15:20:34.611Z",
            "driversLicense": {
                "expiration": "2018-10-11T15:20:34.611Z",
                "id": 0,
                "number": "string",
                "state": "string"
            },
            "dutyStation": "string",
            "emergencyContactCellPhone1": "string",
            "emergencyContactCellPhone2": "string",
            "emergencyContactCity1": "string",
            "emergencyContactCity2": "string",
            "emergencyContactFirstName1": "string",
            "emergencyContactFirstName2": "string",
            "emergencyContactHomePhone1": "string",
            "emergencyContactHomePhone2": "string",
            "emergencyContactLastName1": "string",
            "emergencyContactLastName2": "string",
            "emergencyContactRelationship1": "string",
            "emergencyContactRelationship2": "string",
            "emergencyContactState1": "string",
            "emergencyContactState2": "string",
            "emergencyContactStreetAddress1": "string",
            "emergencyContactStreetAddress2": "string",
            "emergencyContactWorkPhone1": "string",
            "emergencyContactWorkPhone2": "string",
            "emergencyContactZip1": "string",
            "emergencyContactZip2": "string",
            "employees": [
                {}
            ],
            "eyeColor": "string",
            "firstName": "Parker",
            "gender": "string",
            "grade": "string",
            "hairColor": "string",
            "homePhone": "string",
            "id": 0,
            "lastName": "Bidigare",
            "middleInitial": "string",
            "nameCode": "pbidigare",
            "otherIdentifyingFeatures": "string",
            "overtimeHourlyWage": 0,
            "pWPSalary": 0,
            "payPeriodsLeft": 0,
            "paymentPlan": "string",
            "personalEmail": "string",
            "preferredName": "string",
            "profilePicture": 0,
            "pwpsalary": 0,
            "race": "string",
            "regPayPerPayPeriod": 0,
            "roomNumber": "string",
            "series": "string",
            "stateAssigned": "string",
            "supervisor": {},
            "title": "string"
        },
        "id": 1,
        "title": "bears",
        "yearsValid": 24
    }
];

var debug = false;
var training_config = {
    "dueWithinDays": 180, // 6 months
}
var userId = 3; // Temporary Spoofing

$(document).ready(function () {
    $("#firstDropDown").on("change", function(){
        var second = $("#secondDropDown");
        var oldVal = second.val();
        var goodOptions = second.find("option[data-filter='"+this.value+"']");
        second.find("option").hide();
        goodOptions.show();
        if (goodOptions.filter("[value='"+oldVal+"']").length == 0) {
            second.val(goodOptions.val());
            //console.log(goodOptions.val());
        }
    });
    if (!debug) {
        $.ajax({
            url: "/dra",
            contentType: "application/json",
            dataType: 'json',
            cache: false,
            type: 'GET',
            timeout: 600000,
            success: function (dras) {
                populateDataTable(dras);
            },
            error: function (a, b, c) {
                debugger;
                console.log(a.responseText);
            }
        });
    } else {
        populateDataTable(fakeData);
    }

    function populateDataTable(jsonData) {
        console.log('populateDataTable');
        
        var latestDra = {};
     /*   for (k in jsonData) {
            var v = jsonData[k];
            var key = v.employeeProfile.id+"_"+v.id;
            var otherId = latestDra[key];
            if (!otherId || jsonData[otherId].dateOfAssessment < v.dateOfAssessment) {
                latestDra[key] = k;
            }
        }
        for (key in latestDra) {
            jsonData[latestDra[key]].isLatest = true;
        }*/
        console.log(jsonData);
        var table = $('#tblDras').DataTable({
            // 'order':[[4, "asc"]],
            'bPaginate': false,
            'data': jsonData,
            'dom': 'Bfti',
            'columns': [
                { 'data': "employeeProfile.nameCode" },
                {
                    'data': "title"
                },
                {
                    'data': "dateOfAssessment",
                    "render": function (data, type, row) {
                        if (type == 'sort') return data;
                        return CustomFormFunctions.formatDate(data, "bootstrap");
                    }
                },
                { 'data': "yearsValid" },
                {
                    'data': null,
                    "render": function (data, type, row) {
                        return `
                        <div class="dropdown1">
                            <button id="test_click" class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                            <div id="dropList" class="dropdown-content1">
                                <a data-toggle="modal" data-target="#myModal_delete" href="#" data-value=` + row.id + ` class="deleteBtn" id="deleteBtn">Delete DRA</a>
                                <a data-toggle="modal" data-target="#myModal_edit" href="#" data-value=` + row.id + ` class="editBtn" id="editBtn">edit DRA</a>
                            </div>
                        </div>
                    
                    `;
                    }
                }
                   
                    
                

            ],
            'buttons': [
                // {
                //     text: 'Print <i class="fa fa-lg fa-print"></i>',
                //     extend: 'print',
                //     exportOptions: {
                //         columns: [0, 1, 2, 3, 4, 5, 6, 7]
                //     },
                //     className: 'table-btns print-btn'
                // },
                // {
                //     text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                //     extend: 'excel',
                //     exportOptions: {
                //         columns: [0, 1, 2, 3, 4, 5, 6, 7]
                //     },
                //     className: 'table-btns excel-btn'
                // },
                {
                    text: 'Add <i class="fa fa-lg fa-plus"></i>',
                    action: function () {
                        window.location.href = '/addDraEmployee';
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
            ]
        });

        $('[data-toggle="tooltip"]').tooltip();
        var selected_row = '';

        $('#deleteBtn').on('click', function () {
            selected_row = $(this).attr('data-value');
        });

        $('#editBtn').on('click', function () {
            selected_row = $(this).attr('data-value');
        });

        $("#btn_remove_DRA").on("click", function(){
            //var id = $(this).attr('data-value');
            
            $.ajax({
                'url': "/dra/" + selected_row,
                'type':'DELETE',
                'success':function(){window.location.reload()},
                'error':function(a,b,c){
                    console.log(a.responseJSON);
                }
            });
        });


        

    }

});






var trainingRenewFields = {
    "form_training_renew": [
        [
            {   "fieldName":"dateOfTraining",
                "title":"Training Completed On",
                "placeholder":"Date of Training",
                "type":"input/date",
                "colspan":6,
            },
            {   "fieldName":"validUntil",
                "title":"Valid Until",
                "placeholder":"Valid Until",
                "type":"input/date",
                "colspan":6,
            },
            {   "fieldName":"yearsValid",
                "hidden":true,
                "type":"input/number"
            },
        ]
    ]
}

CustomFormFunctions.addBootstrapFields(trainingRenewFields);