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
    populateDataTable(fakeData);


    function populateDataTable(jsonData) {
        console.log(jsonData);

        var table = $('#fieldEquip').DataTable({
           // 'bPaginate': false,
            'data': jsonData,
           // 'dom': 'Bfti',
            'columns': [{
                'data': "beacon"

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
            var modal = $('#myModal_auxInfo');
            modal.find('[name=line_one]').val(fakeAuxData.lineOne);
            modal.find('[name=line_two]').val(fakeAuxData.lineTwo);
            modal.find('[name=line_three]').val(fakeAuxData.lineThree);
            modal.find('[name=line_four]').val(fakeAuxData.lineFour);
            modal.find('[name=line_five]').val(fakeAuxData.lineFive);
            modal.find('[name=line_six]').val(fakeAuxData.lineSix);
        });


        //$('[data-toggle="tooltip"]').tooltip();
    }
});


var aux = {
    "auxInfo": [
        [{
            "fieldName": "line_one",
            "title": "line one",
            "placeholder": "",
            "type": "input/text",
            "readonly": true,
            "colspan": 12
        }],
        [{
            "fieldName": "line_two",
            "title": "Line Two",
            "placeholder": "",
            "type": "input/text",
            "readonly": true,
            "colspan": 12
        }],
        [{
            "fieldName": "line_three",
            "title":"Line Three",
            "readonly": true,
            "type": "input/text",
            "colspan": 12
        }],
        [{
            "fieldName": "line_four",
            "title": "Line Four",
            "placeholder": "",
            "type": "input/text",
            "readonly": true,
            "colspan": 12
        }],
        [{
            "fieldName": "line_five",
            "title": "Line Five",
            "placeholder": "",
            "type": "input/text",
            "readonly": true,
            "colspan": 12
        }],
        [{
            "fieldName": "line_six",
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