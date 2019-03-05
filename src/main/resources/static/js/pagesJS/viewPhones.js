
$(document).ready(function () {

    $.ajax({
        url: "/boss/cellPhone",
        type: "GET",
        cache: false,
        success: function (json) {
            
            populateDataTable(json);
        },error: function (a, b, c) {
            console.log(a.responseText);
        }
    });


    function populateDataTable(jsonData) {

            console.log(jsonData);
            var emps;
            $.ajax({
                url: '/boss/employeeProfile',
                type: 'GET',
                cache: false,
                success: function (json) {

                    var newJsonData = [];
                    $(jsonData).each(function (index, val) {
                        var true_employee = json.filter(function (x) {
                            return x.id == val.assignedTo.id;
                        });
                        var val_new = val;
                        val_new.assignedTo = true_employee[0];
                        newJsonData.push(val_new);
                    });

                    var table = $("#tblCellPhone").DataTable({
                        'bPaginate': false,
                        'data': newJsonData,
                        'dom': "Bfti",
                        'columns': [
                            {
                                'data': "assignedTo",
                                'render': function (data, type, row) {

                                    return data.lastName + ", " + data.firstName;
                                }
                            },
                            // { 'data': 'supervisor' },
                            {
                                'data': "make"
                            },
                            {
                                'data': "model"
                            },
                            {
                                'data': "number",
                                'render': function (data, type, row) {
                                    var phone = data.split('');
                                    var finalPhone = "";
                                    var count = 0;
                                    for (x in phone) {
                                        var char = phone[x];
                                        
                                        finalPhone = finalPhone + char;
                                        count++;
                                        if (count == 3 || count == 6) {
                                            finalPhone = finalPhone + '-';
                                        }
                                    }

                                    return finalPhone;
                                    
                                }
                            },
                            {
                                'data': "carrier"
                            },
                            {
                                'data': "notes"
                            },
                            {

                                'data': null,
                                "render": function (data, type, row, meta) {
                                    var btns = $(".dropdown1.template").clone();
                                    btns.find(".DeletePhone, .editPhone").attr('data-value', data.id);
                                    btns.removeClass("template");
                                    return btns[0].outerHTML;
                                }

                            }
                        ],
                        'buttons': [
                            {
                                text: 'Add <i class="fa fa-lg fa-plus"></i>',
                                action: function () {
                                    window.location.href = "/boss/addCellPhone";
                                },
                                className: "table-btns add-btn"
                            },
                            {
                                text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
                                action: function () {
                                    window.location.reload();
                                },
                                className: "table-btns refresh-btn"
                            }, {
                                text: 'Print <i class="fa fa-lg fa-print"></i>',
                                extend: "print",
                                exportOptions: {
                                    columns: [0, 1, 2, 3, 4, 5, 6]
                                },
                                className: "table-btns print-btn"
                            },
                            {
                                text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                                extend: "excel",
                                exportOptions: {
                                    columns: [0, 1, 2, 3, 4, 5, 6]
                                },
                                className: "table-btns excel-btn"
                            }
                        ]
                    });





                    var selected_row;
                    $('.editPhone').on('click', function (e) {
                        
                        selected_row = $(this).attr("data-value");

                        $.ajax({
                            url: '/boss/cellPhone/' + selected_row,
                            type: 'GET',
                            cache: false,
                            success: function (json) {
                                
                               $.ajax({
                                    url: '/boss/employeeProfile/' + json.assignedTo.id,
                                    type: 'GET',
                                    cache: false,
                                    success: function (emp) {
                                        
                                        
                                        $.ajax({
                                            url: '/boss/employeeProfile',
                                            type: 'GET',
                                            cache: false,
                                            async: false,
                                            success: function (jj) {
                                                var modal = $('#myModal_edit');
                                                var mm = $(modal).find('#edit_form_assignedTo');
                                                
                                                $.each(jj, function (index, value) {
                                                    
                                                    $(modal).find('#edit_form_assignedTo').append('<option value="' + value.id + '">' + value.lastName + ', ' + value.firstName + '</option>');
                                                });
                                                $(modal).find('#edit_form_assignedTo').val(json.assignedTo.id);
                                                $(modal).find('#edit_form_make').val(json.make);
                                                $(modal).find('#edit_form_model').val(json.model);
                                                $(modal).find('#edit_form_carrier').val(json.carrier);
                                                $(modal).find('#edit_form_number').val(json.number);
                                                //$(modal).find('#edit_form_SerialNumber').val(json.serialNumber);
                                                $(modal).find('#edit_form_notes').val(json.notes);
                                                
                                            },
                                            error: function (a, b, c) {
                                                console.log(a.responseText);
                                            }
                                        });




                                    },
                                    error: function (a, b, c) {
                                        console.log(a.responseText);
                                        
                                    }

                                });

                            },
                            error: function (a, b, c) {
                                console.log(a.responseText);
                                
                            }
                        });


                    });

                    $('.DeletePhone').on('click', function (e) {
                        selected_row = $(this).attr("data-value");
                        
                    });

                    $('#myModal_delete').on('click', '#deleteModal_delete', function () {
                        
                        $.ajax({
                            url: '/boss/cellPhone/' + selected_row,
                            type: 'DELETE',
                            cache: false,
                            success: function (json) {
                                
                                location.reload();
                            },
                            error: function (a, b, c) {
                                console.log(a.responseText);
                            }
                        });
                    });

                    $('#myModal_edit').on('click', '#edit_btn', function (e) {
                        var modal = $('#myModal_edit');

                        var assignedTo = $(modal).find('#edit_form_assignedTo').val();
                        var carrier = $(modal).find('#edit_form_carrier').val();
                        var model = $(modal).find('#edit_form_model').val();
                        //var SerialNumber = $(modal).find('#edit_form_SerialNumber').val();
                        var number = $(modal).find('#edit_form_number').val();
                        var notes = $(modal).find('#edit_form_notes').val();
                        var make = $(modal).find('#edit_form_make').val();

                        
                        var emp;
                        $.ajax({
                            url: "/boss/employeeProfile/" + assignedTo,
                            type: "GET",
                            cache: false,
                            success: function (json) {
                                emp = json;

                                var data = {
                                    "assignedTo": emp,
                                    "carrier": carrier,
                                    "make": make,
                                    "model": model,
                                    "notes": notes,
                                    "number": number,
                                    "serialNumber": " "
                                };
                                

                                CustomFormFunctions.putPartialInfo('/boss/cellPhone', selected_row, data, function (json) {
                                    location.reload();
                                }, function (a, b, c) {
                                    console.log(a.responseText);
                                    
                                });
                            },
                            error: function (a, b, c) {
                                console.log(a.responseText);
                                
                            }
                        });



                    });
                },
                error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });






    }
    
});

var trainingRenewFields = {
        "edit_form": [
        [
            {
                "fieldName": "assignedTo",
                "title": "Employee",
                "placeholder": "Select Employee",
                    "type": "select/input",
                    "required": true
                
            },
            {
                "fieldName": "model",
                "title": "Model",
                "placeholder": "Phone Model",
                "type": "input/text",
                "required": true
                //"colspan": 6
            }],
            [
            {
                "fieldName": "number",
                "title": "Phone Number",
                "placeholder": "Phone Number",
                "type": "input/tel",
                "required": true
            }], [{
                "fieldName": "carrier",
                "title": "phone carrier",
                "placeholder": "phone carrier",
                "type": "input/text",
                "required": true
            }, {
                    "fieldName": "make",
                    "title": "Phone Make",
                    "type": "input/text",
                    "required": true
            }],
            [{
                "fieldName": "notes",
                "title": "notes",
                "type": "input/text"
            }
        ]
    ]
};

CustomFormFunctions.addBootstrapFields(trainingRenewFields);





