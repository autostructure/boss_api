var fakeData = [
    { 'beacon': 'beacon_test', 'employee': { 'lastName': 'bidigare', 'firstName': 'parker' }, 'recordData': { 'recordedDate': '2018,8,8', 'recordedByEmployee': { 'lastName': 'bidigare', 'firstName': 'parker' } }}
];

var fakeAuxData = {
    "lineOne": "one",
    "lineTwo": "two",
    "lineThree": "three",
    "lineFour": "four",
    "lineFive": "five",
    "lineSix": "six"
}

var training_config = {
    "dueWithinDays": 180, // 6 months
}
var userId = 3; // Temporary Spoofing
var supervisor = false;


$(document).ready(function () {



    $.ajax({
        url: '/boss/beacon',
        type: 'GET',
        cache: false,
        success: function (json) {
            if (json.length == 0) {
                debugger;

                var emp;
                $.ajax({
                    url: '/boss/employeeProfile/47',
                    type: 'GET',
                    cache: false,
                    async: false,
                    success: function (json) {
                        emp = json;
                    },
                    error: function (a, b, c) {
                        console.log(a.responseText);
                    }
                });

                var auxDat = [];
                auxDat.push('line 1');
                auxDat.push('line 2');
                auxDat.push('line 3');
                auxDat.push('line 4');
                auxDat.push('line 5');
                auxDat.push('line 6');


                var beaconData = {
                    "assignedEmployee": emp,
                    "auxData": auxDat,
                    "batteryExpDate": getCorrectDateFormat(new Date().getTime()),
                    "beaconPassword": "12345",
                    "checkoutBy": emp,
                    "purchaseDate": getCorrectDateFormat(new Date().getTime()),
                    "recordedChecoutDate": getCorrectDateFormat(new Date().getTime()),
                    "registerDate": getCorrectDateFormat(new Date().getTime()),
                    "serialNumber": "1234",
                    "unitNumber": "324"
                };
                debugger;
                $.ajax({
                    url: '/boss/beacon',
                    type: 'POST',
                    cahce: false,
                    contentType: 'application/json',
                    data: beaconData,
                    success: function (json) {
                        location.reload();
                    }, error: function (a, b, c) {
                        console.log(a.responseText);
                    }
                });
            } else {
                populateDataTable(json);
            }
        }, error: function (a, b, c) {
            console.log(a.responseText);
        }
    });

    function populateDataTable(jsonData) {
        
        var table = $('#fieldEquip').DataTable({
           // 'bPaginate': false,
            'data': jsonData,
           // 'dom': 'Bfti',
            'columns': [{
                'data': "unitNumber"

            },
            {
                'data': 'employee',
                'render': function (data, type, row) {
                    
                    return data.lastName + ', ' + data.firstName;
                }
            },
            {
                'data': 'recordData',
                'render': function (data, type, row) {
                    
                    return 'recorded on ' + data.recordedDate + ' by ' + data.recordedByEmployee.lastName + ', ' + data.recordedByEmployee.firstName;
                }

            }, {
                'data': null,
                'render': function (data, type, row) {
                    return `
                      <div class="dropdown1">
                          <button id="test_click" class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                          <div id="dropList" class="dropdown-content1">
                              <a data-toggle="modal" data-target="#myModal_auxInfo" href="#" data-value=` + row.id + ` class="auxBtn">View Aux Details</a>
                          </div>
                      </div>  
                  `;
                }
            }
            ],
            'buttons': [{
                text: 'Add <i class="fa fa-lg fa-plus"></i>',
                action: function () {
                    window.location.href = '/addTrainingEmployee';
                },
                className: 'table-btns add-btn'
            },
            {
                text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
                action: function () {
                    window.location.reload();
                },
                className: 'table-btns refresh-btn'
            },
            

            {
                text: 'Print <i class="fa fa-lg fa-print"></i>',
                extend: 'print',
                exportOptions: {
                    columns: [0, 1, 2]
                },
                className: 'table-btns print-btn'
            },
            {
                text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                extend: 'excel',
                exportOptions: {
                    columns: [0, 1, 2]
                },
                className: 'table-btns excel-btn'
            }
            ]
        });

        $('.auxBtn').on('click', function (e) {
            var row = $(this).attr('data-value');
            $.ajax({
                url: '/boss/beacon/' + row,
                type: 'GET',
                cache: false,
                success: function (json) {
                    var modal = $('#myModal_auxInfo');
                    var x = 0;
                    var auxForm = { "auxInfo": [] };
                    $.each(json.auxData, function (index, value) {
                        var tempAddon = [{
                            "fieldName": "line_" + x,
                            "title": "line " + x,
                            "placeholder": "",
                            "type": "input/text",
                            "readonly": true,
                            "colspan": 12,
                            "value": value
                        }];
                        auxForm.auxInfo.push(tempAsson);
                        debugger;
                    });
                    CustomFormFunctions.addBootstrapFields(auxForm);
                    
                    

                    
                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }

            });

        });


        //$('[data-toggle="tooltip"]').tooltip();
    }
});

function getCorrectDateFormat(date_str) {
    var date = new Date(date_str);
    return date.toISOString();
}


/*var aux = {
    "auxInfo": [
        [{
            "fieldName": "line_1",
            "title": "line one",
            "placeholder": "",
            "type": "input/text",
            "readonly": true,
            "colspan": 12
        }],
        [{
            "fieldName": "line_2",
            "title": "Line Two",
            "placeholder": "",
            "type": "input/text",
            "readonly": true,
            "colspan": 12
        }],
        [{
            "fieldName": "line_3",
            "title":"Line Three",
            "readonly": true,
            "type": "input/text",
            "colspan": 12
        }],
        [{
            "fieldName": "line_4",
            "title": "Line Four",
            "placeholder": "",
            "type": "input/text",
            "readonly": true,
            "colspan": 12
        }],
        [{
            "fieldName": "line_5",
            "title": "Line Five",
            "placeholder": "",
            "type": "input/text",
            "readonly": true,
            "colspan": 12
        }],
        [{
            "fieldName": "line_6",
            "title": "Line Six",
            "placeholder": "",
            "type": "input/text",
            "readonly": true,
            "colspan": 12
        }]
    ]
}

CustomFormFunctions.addBootstrapFields(aux);*/





//var trainingRenewFields = {
//    "form_training_renew": [
//        [
//            {
//                "fieldName": "dateOfTraining",
//                "title": "Training Completed On",
//                "placeholder": "Date of Training",
//                "type": "input/date",
//                "colspan": 6,
//            },
//            {
//                "fieldName": "validUntil",
//                "title": "Valid Until",
//                "placeholder": "Valid Until",
//                "type": "input/date",
//                "colspan": 6,
//            },
//            {
//                "fieldName": "yearsValid",
//                "hidden": true,
//                "type": "input/number"
//            },
//        ]
//    ]
//};

//CustomFormFunctions.addBootstrapFields(trainingRenewFields);