
$(document).ready(function () {



    $('#submitAdd').on('click', function (e) {
        var assignedEmployee = $('[name=assignedEmployee] :selected').val();
        var batteryExpDate = $('[name=batteryExpDate]').val();
        var beaconPassword = $('[name=beaconPassword]').val();
        var checkoutemployee = $('[name=checkoutemployee] :selected').val();
        var purchaseDate = $('[name=purchaseDate]').val();
        var recordedCheckoutDate = $('[name=recordedCheckoutDate]').val();
        var registerDate = $('[name=registerDate]').val();
        var serialNumber = $('[name=serialNumber]').val();
        var unitNumber = $('[name=unitNumber]').val();

        var assignedEmployeeObj;
        var checkoutemployeeObj;

        $.ajax({
            url: '/boss/employeeProfile',
            type: 'GET',
            cache: false,
            async: false,
            success: function (j) {
                
                $.each(j, function (index, value) {
                    
                    if (value.id == assignedEmployee) {
                        assignedEmployeeObj = value;
                    }

                    if (value.id == checkoutemployee) {
                        checkoutemployeeObj = value;
                    }
                });
                
            }, error: function (a, b, c) {
                console.log(a.responseText);
            }
        });

        var data = {
            'assignedEmployee': assignedEmployeeObj,
            'auxData': [],
            'batteryExpDate': getCorrectDateFormat(batteryExpDate),
            'beaconPassword': beaconPassword,
            'checkoutBy': checkoutemployeeObj,
            'purchaseDate': getCorrectDateFormat(purchaseDate),
            'recordedCheckoutDate': getCorrectDateFormat(recordedCheckoutDate),
            'registerDate': getCorrectDateFormat(registerDate),
            'serialNumber': serialNumber,
            'unitNumber': unitNumber
        };
        
        $.ajax({
            url: '/boss/beacon',
            type: 'POST',
            cache: false,
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (done) {
                location.reload();
            },
            error: function (a, b, c) {
                console.log(a.responseText);
            }
        });
    });

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
        
        var table = $('#fieldEquip').DataTable({
           // 'bPaginate': false,
            'data': jsonData,
           // 'dom': 'Bfti',
            'columns': [{
                'data': "unitNumber"

            },
            {
                'data': 'id'
            },
            {
                'data': 'serialNumber'

                },

                {
                    'data': 'batteryExpDate',
                    'render': function (data, type, row) {
                        return CustomFormFunctions.formatDate(data, 'bootstrap');
                    }
                },
                {
                    'data': 'purchaseDate',
                    'render': function (data, type, row) {
                        return CustomFormFunctions.formatDate(data, 'bootstrap');
                    }
                },
                {
                    'data': 'beaconPassword'
                },
                {
                    'data': 'registerDate',
                    'render': function (data, type, row) {
                        return CustomFormFunctions.formatDate(data, 'bootstrap');
                    }
                },
                {
                    'data': 'assignedEmployee',
                    'render': function (data, type, row) {
                        if (data != null) {
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
                        else {
                            return ' ';
                        }
                    }
                },
                {
                    'data': null,
                    'render': function (data, type, row) {
                        if (row.checkoutBy) {
                            var emp;
                            $.ajax({
                                url: '/boss/employeeProfile/' + row.checkoutBy.id,
                                type: 'GET',
                                cache: false,
                                async: false,
                                success: function (j) {
                                    emp = j;
                                }, error: function (a, b, c) {
                                    console.log(a.responseText);
                                }
                            });
                            return CustomFormFunctions.formatDate(data.recordedCheckoutDate, 'bootstrap') + ' by ' + emp.lastName + ', ' + emp.firstName;
                        }
                        else {
                            return ' ';
                        }
                    }

                },
                {
                    'data': null,
                    'render': function (data, type, row) {
                        return `
                      <div class="dropdown1">
                          <button id="test_click" class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                          <div id="dropList" class="dropdown-content1">
                              <a data-toggle="modal" data-target="#myModal_checkout" href="#" data-value="` + row.id + `" class="assignBtn">Checkout Beacon</a>
                              <a data-toggle="modal" data-target="#myModal_edit" href="#" data-value="` + row.id + `" class="editBtn">edit beacon</a>
                              <a data-toggle="modal" data-target="#myModal_delete" href="#" data-value="` + row.id + `" class="deleteBtn">delete beacon</a>
                          </div>
                      </div>  
                  `;
                    }
                }
                /*,
                {
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
                }*/
            
            ],
            'buttons': [
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
                    columns: [0, 1, 2, 3, 4, 5]
                },
                className: 'table-btns print-btn'
            },
            {
                text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                extend: 'excel',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5]
                },
                className: 'table-btns excel-btn'
            }
            ]
        });
        var selected_row;
        $('.assignBtn').on('click', function () {
            selected_row = $(this).attr('data-value');
            $.ajax({
                url: '/boss/employeeProfile/',
                type: 'GET',
                cache: false,
                success: function (json) {
                    $.each(json, function (index, value) {
                        var modal = $('#myModal_checkout');
                        modal.find('[name=checkoutEmployee]').append('<option value="' + value.id + '">' + value.lastName + ', ' + value.firstName + '</option>');
                    });
                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });
        });

        $('.deleteBtn').on('click', function () {
            selected_row = $(this).attr('data-value');
        });

      

        $('#myModal_checkout').on('click', '.btnSubmit', function () {
            var modal = $('#myModal_checkout');
            var employeeCheckoutID = modal.find('[name=checkoutEmployee]').val();
            var date = new Date();
            $.ajax({
                url: '/boss/beacon/' + selected_row,
                type: 'GET',
                cache: false,
                success: function (json) {
                    $.ajax({
                        url: '/boss/employeeProfile/' + employeeCheckoutID,
                        type: 'GET',
                        success: function (emp) {
                            json.checkoutBy = emp;
                            json.recordedCheckoutDate = getCorrectDateFormat(date);
                            $.ajax({
                                url: '/boss/beacon/' + selected_row,
                                type: 'PUT',
                                data: JSON.stringify(json),
                                contentType: 'application/json',
                                cache: false,
                                success: function (j) {
                                    location.reload();
                                }, error: function (a, b, c) {
                                    console.log(a.responseText);
                                }
                            });
                        }, error: function (a, b, c) {
                            console.log(a.responseText);
                        }

                    });
                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });
        });

        $('#myModal_delete').on('click', '.btn_beacon_remove', function () {
            $.ajax({
                url: '/boss/beacon/' + selected_row,
                type: 'DELETE',
                cache: false,
                success: function (j) {
                    location.reload();
                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });
        });



        $('.editBtn').on('click', function () {
            selected_row = $(this).attr('data-value');

            $.ajax({
                url: '/boss/beacon/' + selected_row,
                type: 'GET',
                cahce: false,
                success: function (beacon) {

                    var modal = $('#myModal_edit');

                    $.ajax({
                        url: '/boss/employeeProfile',
                        type: 'GET',
                        cache: false,
                        success: function (emp) {
                            $.each(emp, function (index, value) {
                                modal.find('[name=assignedEmployee]').append('<option value="' + value.id + "'>" + value.lastName + ', ' + value.firstName + '</option>');
                            });
                            
                           // modal.find('[name=assignedEmployee] option[value=' + beacon.assignedEmployee.id + ']').attr('selected', 'selected');
                            modal.find('[name=purchaseDate]').val(CustomFormFunctions.formatDate(beacon.purchaseDate, 'mm/dd/yyyy'));
                            modal.find('[name=batteryExpDate]').val(CustomFormFunctions.formatDate(beacon.batteryExpDate, 'mm/dd/yyyy'));
                            modal.find('[name=beaconPassword]').val(beacon.beaconPassword);
                            modal.find('[name=recordedCheckoutDate]').val(CustomFormFunctions.getDateFrom(beacon.recordedCheckoutDate, 'mm/dd/yyyy'));
                            modal.find('[name=registerDate]').val(CustomFormFunctions.getDateFrom(beacon.registerDate, 'mm/dd/yyyy'));
                            modal.find('[name=serialNumber]').val(beacon.serialNumber);
                            modal.find('[name=unitNumber]').val(beacon.unitNumber);
                            
                        }, error: function (a, b, c) {
                            console.log(a.responseText);
                            //$('[name=assignedEmployee] option[value=' + beacon.assignedEmployee + ']').attr('selected', 'selected');
                            modal.find('[name=purchaseDate]').val(CustomFormFunctions.formatDate(beacon.purchaseDate, 'mm/dd/yyyy'));
                            modal.find('[name=batteryExpDate]').val(CustomFormFunctions.formatDate(beacon.batteryExpDate, 'mm/dd/yyyy'));
                            modal.find('[name=beaconPassword]').val(beacon.beaconPassword);
                            modal.find('[name=recordedCheckoutDate]').val(CustomFormFunctions.formatDate(beacon.recordedCheckoutDate, 'mm/dd/yyyy'));
                            modal.find('[name=registerDate]').val(CustomFormFunctions.formatDate(beacon.registerDate,'mm/dd/yyyy'));
                            modal.find('[name=serialNumber]').val(beacon.serialNumber);
                            modal.find('[name=unitNumber]').val(beacon.unitNumber);
                            
                        }
                    });


                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });
        });

        $('#myModal_edit').on('.edit_submit', function () {
            var modal = $('#myModal_edit');
            var assignedEmployeeObj = $('#assignedEmployee').val();
            
            $.ajax({
                url: '/boss/employeeProfile/' + assignedEmployeeObj,
                type: 'GET',
                cache: false,
                success: function (emp) {
                    var data = {
                        assignedEmployee: emp,
                        auxData: [],
                        batteryExpDate: modal.find('#batteryExpDate').val(),
                        beaconPassword: modal.find('#beaconPassword').val(),
                        checkoutBy: null,
                        purchaseDate: modal.find('#purchaseDate').val(),
                        recordedCheckoutDate: modal.find('#recordedCheckoutDate').val(),
                        registerDate: modal.find('#registerDate').val(),
                        serialNumber: modal.find('#serialNumber').val(),
                        unitNumber: modal.find('#unitNumber').val(),
                        id: selected_row
                    };
                    
                    $.ajax({
                        url: '/boss/beacon/' + selected_row,
                        type: 'PUT',
                        cahce: false,
                        contentType: 'application/json',
                        data: JSON.stringify(data),
                        success: function (beacon) {
                            
                            location.reload();
                        }, error: function (a, b, c) {
                            console.log(a.responseText);
                            
                        }
                    });
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

var formData = {
    "addBeaconForm": [
        [
            {
                'fieldName': 'assignedEmployee',
                'type': 'select/text',
                'title': 'Assigned Employee'
            },
            {
                'fieldName': 'batteryExpDate',
                'type': 'input/date',
                'title': 'Battery Expiration Date'
            },
            {
                'fieldName': 'beaconPassword',
                'type': 'input/text',
                'title': 'Beacon Password'
            }
        ],
        [
            {
                'fieldName': 'checkoutemployee',
                'type': 'select/text',
                'title': 'Checkout Employee'
            },
            {
                'fieldName': 'purchaseDate',
                'type': 'input/date',
                'title': 'Purchase Date'
            },
            {
                'fieldName': 'recordedCheckoutDate',
                'type': 'input/date',
                'title': 'Recoeded Checkout Date'
            }
        ],
        [
            {
                'fieldName': 'registerDate',
                'type': 'input/date',
                'title': 'Register Date'
            },
            {
                'fieldName': 'serialNumber',
                'type': 'input/text',
                'title': 'Serial Number'
            },
            {
                'fieldName': 'unitNumber',
                'type': 'input/text',
                'title': 'Unit Number'
            }
        ]
    ],
    "editForm": [
        [
            {
                'fieldName': 'assignedEmployee',
                'type': 'select/text',
                'title': 'Assigned Employee'
            },
            {
                'fieldName': 'batteryExpDate',
                'type': 'input/date',
                'title': 'Battery Expiration Date'
            },
            {
                'fieldName': 'beaconPassword',
                'type': 'input/text',
                'title': 'Beacon Password'
            }
        ],
        [
            {
                'fieldName': 'purchaseDate',
                'type': 'input/date',
                'title': 'Purchase Date'
            },
            {
                'fieldName': 'recordedCheckoutDate',
                'type': 'input/date',
                'title': 'Recoeded Checkout Date'
            }
        ],
        [
            {
                'fieldName': 'registerDate',
                'type': 'input/date',
                'title': 'Register Date'
            },
            {
                'fieldName': 'serialNumber',
                'type': 'input/text',
                'title': 'Serial Number'
            },
            {
                'fieldName': 'unitNumber',
                'type': 'input/text',
                'title': 'Unit Number'
            }
        ]
    ],
    "checkoutForm": [
        [
            {
                'fieldName': 'checkoutEmployee',
                'type': 'select/text',
                'title': 'Checkout Employee'
            }
        ]
    ]
};

CustomFormFunctions.addBootstrapFields(formData);





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