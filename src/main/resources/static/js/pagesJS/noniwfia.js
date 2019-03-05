$(document).ready(function () {
    $.ajax({
        url: '/boss/employeeProfile',
        type: 'GET',
        cache: false,
        success: function (emp) {
            $.each(emp, function (index, value) {
                $('[name=Supervisor]').append('<option value="' + value.id + '">' + value.lastName + ', ' + value.firstName + '</option>');
            });
        }, error: function (a, b, c) {
            console.log(a.responseText);
        }
    });


    $.ajax({
        url: '/boss/nonIwfia',
        type: 'GET',
        cache: false,
        success: function (json) {
            populateTable(json);
        }, error: function (a, b, c) {
            console.log(a.responseText);
        }
    });

    function populateTable(jsonData) {
        
        var table = $('#nonIwfiaTable').DataTable({
            // 'bPaginate': false,
            'data': jsonData,
            // 'dom': 'Bfti',
            'columns': [{
                'data': "lastName"

            },
            {
                'data': 'firstName'
            },
            {
                'data': 'dutyStation'

            },
            {
                'data': 'crewNumber'
            },
            {
                'data': 'supervisor',
                'render': function (data, type, row) {
                    var sup;
                    
                    $.ajax({
                        url: '/boss/employeeProfile/' + data.id,
                        type: 'GET',
                        cache: false,
                        async: false,
                        success: function (jj) {
                            sup = jj;
                        }, error: function (a, b, c) {
                            console.log(a.responseText);
                        }
                    });
                    return sup.lastName + ', ' + sup.firstName;
                }
                },
                {
                    'data': 'comment'
                },
            {
                'data': null,
                'render': function (data, type, row) {
                    return `
                      <div class="dropdown1">
                          <button id="test_click" class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                          <div id="dropList" class="dropdown-content1">
                              <a data-toggle="modal" data-target="#myModal_edit" href="#" id="edit_btn" data-value="` + row.id + `" class="editBtn">edit nonIwfia</a>
                              <a data-toggle="modal" data-target="#myModal_delete" href="#" id="delete_btn" data-value="` + row.id + `" class="deleteBtn">delete nonIwfia</a>
                          </div>
                      </div>  
                  `;
                }
            }

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
        $('#edit_btn').on('click', function () {
            var modal = $('#myModal_edit');
            selected_row = $(this).attr('data-value');
            $.ajax({
                url: '/boss/nonIwfia/' + selected_row,
                type: 'GET',
                cache: false,
                success: function (succ) {
                    
                    modal.find('[name=CellNumber_modal]').val(succ.cellphone);
                    modal.find('[name=CrewNumber_modal]').val(succ.crewNumber);
                    modal.find('[name=DutyStation_modal]').val(succ.dutyStation);
                    modal.find('[name=firstName_modal]').val(succ.firstName);
                    modal.find('[name=lastName_modal]').val(succ.lastName);
                    modal.find('[name=officePhone_modal]').val(succ.officePhone);
                    modal.find('[name=Comments_modal]').val(succ.comment);
                    $.ajax({
                        url: '/boss/employeeProfile',
                        type: 'GET',
                        cache: false,
                        success: function (emp) {
                            $.each(emp, function (index, value) {
                                modal.find('[name=Supervisor_modal]').append('<option value="' + value.id + '">' + value.lastName + ', ' + value.firstName + '</option>');
                            });
                            modal.find('[name=Supervisor_modal]').val(succ.supervisor.id);

                        }, error: function (a, b, c) {
                            console.log(a.responseText);
                        }
                    });
                    

                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });
        });



        $('#myModal_edit').on('click', '#edit_btn', function () {
            
            var modal = $('#myModal_edit');
            $.ajax({
                url: '/boss/nonIwfia/' + selected_row,
                type: 'GET',
                cache: false,
                success: function (json) {
                    json.cellphone = modal.find('[name=cellNumber_modal]').val();
                    json.crewNumber = modal.find('[name=CrewNumber_modal]').val();
                    json.dutyStation = modal.find('[name=DutyStation_modal]').val();
                    json.firstName = modal.find('[name=firstName_modal]').val();
                    json.lastName = modal.find('[name=lastName_modal]').val();
                    json.officePhone = modal.find('[name=officePhone_modal]').val();
                    json.comment = modal.find('[name=Comments_modal]').val();

                    $.ajax({
                        url: '/boss/employeeProfile/' + modal.find('[name=Supervisor_modal]').val(),
                        type: 'GET',
                        cache: false,
                        success: function (j) {
                            json.supervisor = j;

                            
                            $.ajax({
                                url: '/boss/nonIwfia',
                                type: 'POST',
                                cache: false,
                                data: JSON.stringify(json),
                                contentType: 'application/json',
                                success: function (jj) {
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

        $('#submit_noniwfia').on('click', function () {
            var supervisor_id = $('[name=Supervisor]').val();
            $.ajax({
                url: '/boss/employeeProfile/' + supervisor_id,
                type: 'GET',
                cache: false,
                success: function (j) {
                    var dat = {
                        "cellphone": $('[name=cellNumber]').val(),
                        "crewNumber": $('[name=CrewNumber]').val(),
                        "dutyStation": $('[name=DutyStation').val(),
                        "firstName": $('[name=firstName]').val(),
                        "lastName": $('[name=lastName]').val(),
                        "officePhone": $('[name=officePhone]').val(),
                        "comment": $('[name=Comments]').val(),
                        "supervisor": j
                    };

                    $.ajax({
                        url: '/boss/nonIwfia',
                        type: 'POST',
                        cache: false,
                        data: JSON.stringify(dat),
                        contentType: 'application/json',
                        success: function (noniwfia) {
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

        $('#delete_btn').on('click', function () {
            selected_row = $(this).attr('data-value');
            var modal = $('#myModal_delete');
            $.ajax({
                url: '/boss/nonIwfia/' + selected_row,
                type: 'GET',
                cache: false,
                success: function (inf) {
                    modal.find('.person').val(inf.lastName + ', ' + inf.firstName);
                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });
        });

        $('#myModal_delete').on('click', '#deleteModal_delete', function () {
            $.ajax({
                url: '/boss/nonIwfia/' + selected_row,
                type: 'DELETE',
                cache: false,
                success: function (j) {
                    location.reload();
                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });
        });
    }



});

var formDat = {
    "nonIwfia": [
            [
                {
                    'fieldName': 'lastName',
                    'type': 'input/text',
                    'title': 'Last Name'
                },
                {
                    'fieldName': 'firstName',
                    'type': 'input/text',
                    'title': 'First Name'
                },
                {
                    'fieldName': 'CrewNumber',
                    'type': 'input/text',
                    'title': 'Crew Number'
                }
            ],
            [
                {
                    'fieldName': 'DutyStation',
                    'type': 'input/text',
                    'title': 'Duty Station'
                },
                {
                    'fieldName': 'officePhone',
                    'type': 'input/text',
                    'title': 'Office Phone'
                },
                {
                    'fieldName': 'cellNumber',
                    'type': 'input/text',
                    'title': 'Cell Number'
                }
            ],
            [
                {
                    'fieldName': 'Supervisor',
                    'type': 'select/text',
                    'title': 'Supervisor'
                }
            ],
            [
                {
                    'fieldName': 'Comments',
                    'type': 'input/text',
                'title': 'Comments'
                }
            ]
    ],
    "edit_form": [
        [
            {
                'fieldName': 'lastName_modal',
                'type': 'input/text',
                'title': 'Last Name'
            },
            {
                'fieldName': 'firstName_modal',
                'type': 'input/text',
                'title': 'First Name'
            },
            {
                'fieldName': 'CrewNumber_modal',
                'type': 'input/text',
                'title': 'Crew Number'
            }
        ],

        [
            {
                'fieldName': 'DutyStation_modal',
                'type': 'input/text',
                'title': 'Duty Station'
            },
            {
                'fieldName': 'officePhone_modal',
                'type': 'input/text',
                'title': 'Office Phone'
            },
            {
                'fieldName': 'cellNumber_modal',
                'type': 'input/text',
                'title': 'Cell Number'
            }
        ],
        [
            {
                'fieldName': 'Supervisor_modal',
                'type': 'select/text',
                'title': 'Supervisor'
            }
        ],
        [
            {
                'fieldName': 'Comments_modal',
                'type': 'input/text',
                'title': 'Comments'
            }
        ]
    ]
};

CustomFormFunctions.addBootstrapFields(formDat);