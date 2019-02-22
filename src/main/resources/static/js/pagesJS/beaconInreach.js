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
            
            populateDataTable(json);
        }, error: function (a, b, c) {
            console.log(a.responseText);
        }
    });

    function populateDataTable(jsonData) {
        console.log(jsonData);

        var table = $('#fieldEquip').DataTable({
           // 'bPaginate': false,
            'data': jsonData,
           // 'dom': 'Bfti',
            'columns': [{
                'data': "unitNumber"

            },
            {
                'data': 'assignedEmployee',
                'render': function (data, type, row) {
                    var emp;
                    $.ajax({
                        url: '/boss/employeeProfile/' + data.id,
                        type: 'GET',
                        cache: false,
                        async: false,
                        success: function (j) {
                            emp = j;
                        }, error: function (a, b, c) {
                            console.log(a.responseText);
                        }
                    });
                    return emp.lastName + ', ' + emp.firstName;
                }
            },
            {
                'data': null,
                'render': function (data, type, row) {
                    var emp;
                    $.ajax({
                        url: '/boss/employeeProfile/' + data.checkoutBy.id,
                        type: 'GET',
                        cache: false,
                        async: false,
                        success: function (j) {
                            emp = j;
                        }, error: function (a, b, c) {
                            console.log(a.responseText);
                        }
                    });
                    return 'recorded on ' + data.recordedCheckoutDate + ' by ' + emp.lastName + ', ' + emp.firstName;
                }

            }, {
                'data': null,
                'render': function (data, type, row) {
                    return `
                      <div class="dropdown1">
                          <button id="test_click" class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                          <div id="dropList" class="dropdown-content1">
                              <a data-toggle="modal" data-target="#myModal_auxInfo" href="#" data-value=` + data.id + ` class="auxBtn">View Aux Details</a>
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
                success: function (j) {
                    var modals = $('#auxInfo');
                    
                    $.each(j.auxData, function (index, value) {
                        var x = index + 1;
                        modals.find('[name=line_' + x + ']').val(value);
                        
                    });
                    
                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });
            

        });


        //$('[data-toggle="tooltip"]').tooltip();
    }
});


var aux = {
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

CustomFormFunctions.addBootstrapFields(aux);





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