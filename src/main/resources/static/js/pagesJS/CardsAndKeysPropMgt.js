


$(document).ready(function () {
    $.ajax({
        url: '/boss/employeeProfile',
        type: 'GET',
        cache: false,
        success: function (json) {
            $.each(json, function (index, value) {
                $('[name=assignedTo]').append('<option value="' + value.id + '">' + value.lastName + ', ' + value.firstName + '</option>');
            });
        }, error: function (a, b, c) {
            console.log(a.responseText);
        }
    });
    

    $('#btn_submit').on('click', function () {
        var cardDatPost = [];

        cardDatPost.push($('[name=bool_10A1]').val());
        cardDatPost.push($('[name=bool_10A6]').val());
        cardDatPost.push($('[name=bool_10A7]').val());
        cardDatPost.push($('[name=bool_10A8]').val());
        cardDatPost.push($('[name=bool_10D1]').val());
        cardDatPost.push($('[name=bool_X3]').val());
        //var bool_FS = $('[name=')
        var assignedTo_id = $('[name=assignedTo] :selected').val();
        var emp;
        $.ajax({
            url: '/boss/employeeProfile/' + assignedTo_id,
            type: 'GET',
            cache: false,
            async: false,
            success: function (j) {
                emp = j;
            }, error: function (a, b, c) {
                console.log(a.responseText);
            }
        });
        var keyType;
        var ids;
        $.each(cardDatPost, function (index, value) {

            switch (index) {
                case 0:
                    if (value != undefined && value != "") {
                        keyType = "type10A1";
                        ids = value;
                    }
                    break;
                case 1:
                    if (value != undefined && value != "") {
                        keyType = "type10A6";
                        ids = value;
                    }
                    break;
                case 2:
                    if (value != undefined && value != "") {
                        keyType = "type10A7";
                        ids = value;
                    }
                    break;
                case 3:
                    if (value != undefined && value != "") {
                        keyType = "type10A8";
                        ids = value;
                    }
                    break;
                case 4:
                    if (value != undefined && value != "") {
                        keyType = "type10D1";
                        ids = value;
                    }
                    break;
                case 5:
                    if (value != undefined && value != "") {
                        keyType = "typeX3";
                        ids = value;
                    }
                    break;
                case 6:
                    if (value != undefined && value != "") {
                        keyType = "typeFS";
                        ids = value;
                    }
                    break;


            }


            if (keyType != undefined) {
                var govID = $('[name=govID]').val();

                var card = {
                    "assignedTo": emp,
                    "govtId": govID,
                    "keyType": keyType,
                    "id": ids
                };
                
                $.ajax({
                    url: '/boss/cardOrKey',
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(card),
                    success: function (j) {
                        location.reload();
                    },
                    error: function (a, b, c) {
                        console.log(a.responseText);
                    }
                });
            }
        });
        

        

        //location.reload();
    });

    var cardData = [];

    var cards;
    $.ajax({
        url: '/boss/cardOrKey',
        type: 'GET',
        cache: false,
        async: false,
        success: function (json) {
            cards = json;
        }, error: function (a, b, c) {
            console.log(a.responseText);
        }
    });


    $.ajax({
        url: '/boss/employeeProfile',
        type: 'GET',
        cache: false,
        success: function (employee) {
            $.each(employee, function (indexEmp, valueEmp) {
                var cardDatObj = {
                    'assignedTo': valueEmp,
                    'lincPassExpiration': '',
                    'govtId': '',
                    'key10A1': ' ',
                    'key10A6': ' ',
                    'key10A7': ' ',
                    'key10A8': ' ',
                    'key10D1': ' ',
                    'keyX3': ' ',
                    'keyFS': false
                };
                var check_cards = false;
                $.each(cards, function (indexCard, valueCard) {


                    
                    if (valueCard.assignedTo.id == valueEmp.id) {
                        switch (valueCard.keyType) {
                            case 'type10A1':
                                cardDatObj.key10A1 = valueCard.id;
                                check_cards = true;
                                break;
                            case 'type10A6':
                                cardDatObj.key10A6 = valueCard.id;
                                check_cards = true;
                                break;
                            case 'type10A7':
                                cardDatObj.key10A7 = valueCard.id;
                                check_cards = true;
                                break;
                            case 'type10A8':
                                cardDatObj.key10A8 = valueCard.id;
                                check_cards = true;
                                break;
                            case 'type10D1':
                                cardDatObj.key10D1 = valueCard.id;
                                check_cards = true;
                                break;
                            case 'typeX3':
                                cardDatObj.keyX3 = valueCard.id;
                                check_cards = true;
                                break;
                            case 'typeFS':
                                cardDatObj.keyFS = valueCard.id;
                                check_cards = true;
                                break;
                        }
                        cardDatObj.govtId = valueCard.govtId;
                    }
                });
                if (check_cards) {
                    cardData.push(cardDatObj);
                }
            });
            populateDataTable(cardData);
        }, error: function (a, b, c) {
            console.log(a.responseText);
        }
    });

    function populateDataTable(jsonData) {
        //console.log('populateDataTable');
        console.log(jsonData);
        
        var table = $('#cardTable').DataTable({
            'bPaginate': false,
            'data': jsonData,
            'dom': 'Bfti',
            'columns': [{
                'data': "assignedTo",
                'render': function (data, type, row) {
                    
                    return data.lastName + ' ' + data.firstName;
                }
            },
            // { 'data': 'supervisor' },

            {
                'data': 'lincPassExpiration',
                'render': function (data, type, row) {
                    try {
                        
                        return CustomFormFunctions.formatDate(data, 'mm/dd/yyyy');
                    } catch (e) {
                        
                        return '';
                    }
                }
            },
            {
                'data': "govtId"
            },
            {
                'data': 'key10A1'
            },
            {
                'data': "key10A6" //10A6
            },
            {
                'data': "key10A7" //10A7
            },
            {
                'data': 'key10A8' //10A8
            },
            {
                'data': 'key10D1' //10D1
            },
            {
                'data': 'keyX3' //X3
            },
            {
                'data': 'keyFS' //FS
            },
            {

                'data': null,
                'render': function (data, type, row) {
                    return `
                      <div class="dropdown1">
                          <button id="test_click" class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                          <div id="dropList" class="dropdown-content1">
                              <a href="#" data-toggle="modal" data-target="myModal_edit" data-value="` + row.assignedTo.id + `" class="edit_btn" id="editBtn">edit card keys</a>
                              <a href="#" data-toggle="modal" data-target="myModal_del" data-value="` + row.assignedTo.id + `" class="delete_btn" id="deleteBtn">delete card keys</a>

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
                        columns: [0, 1, 2, 3, 4, 5, 6]
                    },
                    className: 'table-btns print-btn'
                },
                {
                    text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                    extend: 'excel',
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4, 5, 6]
                    },
                    className: 'table-btns excel-btn'
                }
            ]
        });

        var selectedRow;
        $('.edit_btn').on('click', function () {
            selectedRow = $(this).attr('data-value');
            var cardKeys;
            $.ajax({
                url: '/boss/cardOrKey',
                type: 'GET',
                cache: false,
                async: false,
                success: function (card) {
                    cardKeys = card;
                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });


           
            $.ajax({
                url: '/boss/employeeProfile/' + selectedRow,
                type: 'GET',
                cache: false,
                success: function (j) {
                    
                    var filtered = cardKeys.filter(function (x) {
                        return x.assignedTo.id == selectedRow;
                    });

                    var modal = $('#myModal_edit');
                    modal.find('[name=assignedTo_modal]').val(j.lastName + ', ' + j.firstName);
                    modal.find('[name=assignedTo_modal]').attr('data-value', j.id);
                    modal.find('[name=govID_modal]').val(filtered[0].govtId);
                    $.each(filtered, function (index, value) {
                        
                        switch (value.keyType) {
                            case 'type10A1':
                                modal.find('[name=modal_10A1]').val(value.id);
                                break;
                            case 'type10A6':
                                modal.find('[name=modal_10A6]').val(value.id);
                                break;
                            case 'type10A7':
                                modal.find('[name=modal_10A7]').val(value.id);
                                break;
                            case 'type10A8':
                                modal.find('[name=modal_10A8]').val(value.id);
                                break;
                            case 'type10D1':
                                modal.find('[name=modal_10D1]').val(value.id);
                                break;
                            case 'typeX3':
                                modal.find('[name=modal_X3]').val(value.id);
                                break;
                            case 'typeFS':
                                modal.find('[name=modal_FS]').val(value.id);
                                break;

                        }
                    });
                    $('#myModal_edit').modal('toggle');
                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });
            

        });

        $('#myModal_edit').on('click', '#edit_submit', function () {
            var cardInfo;
            $.ajax({
                url: '/boss/cardOrKey',
                type: 'GET',
                cache: false,
                async: false,
                success: function (card) {
                    cardInfo = card;
                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });

            $.ajax({
                url: '/boss/employeeProfile/' + selectedRow,
                type: 'GET',
                cache: false,
                success: function (j) {
                    
                    var filter = cardInfo.filter(function (x) {
                        
                        return x.assignedTo.id == j.id;
                    });
                    
                    
                    var modal = $('#myModal_edit');
                    var _10A1 = modal.find('[name=modal_10A1]').val();
                    var _10A6 = modal.find('[name=modal_10A6]').val();
                    var _10A7 = modal.find('[name=modal_10A7]').val();
                    var _10A8 = modal.find('[name=modal_10A8]').val();
                    var _10D1 = modal.find('[name=modal_10D1]').val();
                    var _X3 = modal.find('[name=modal_X3]').val();
                    var _FS = modal.find('[name=modal_FS]').val();
                    var govtID = modal.find('[name=govID_modal]').val();
                    var assigned_id = modal.find('[name=assignedTo_modal]').attr('data-value');
                    var key_success_check = [];
                    $.ajax({
                        url: '/boss/employeeProfile/' + assigned_id,
                        type: 'GET',
                        cache: false,
                        success: function (emp) {
                            var keyAlterCheck = [];
                            $.each(filter, function (index, value) {
                                switch (value.keyType) {
                                    case 'type10A1':
                                        $.ajax({
                                            url: '/boss/cardOrKey/' + value.id,
                                            type: 'DELETE',
                                            cache: false,
                                            async: false,
                                            success: function (json) {
                                                var cardData = {
                                                    id: _10A1,
                                                    keyType: 'type10A1',
                                                    govtId: govtID,
                                                    assignedTo: emp
                                                };
                                                
                                                $.ajax({
                                                    url: '/boss/cardOrKey',
                                                    type: 'POST',
                                                    cache: false,
                                                    async: false,
                                                    data: JSON.stringify(cardData),
                                                    contentType: 'application/json',
                                                    success: function (j) {
                                                        var dat = {
                                                            type: '10A1',
                                                            success: true

                                                        };
                                                        key_success_check.push(dat);
                                                        
                                                    },
                                                    error: function (a, b, c) {
                                                        console.log(a.responseText);
                                                        var dat = {
                                                            type: '10A1',
                                                            success: false

                                                        };
                                                        key_success_check.push(dat);
                                                        
                                                    }
                                                });
                                            }
                                        });
                                        break;
                                    case 'type10A6':
                                        $.ajax({
                                            url: '/boss/cardOrKey/' + value.id,
                                            type: 'DELETE',
                                            cache: false,
                                            async: false,
                                            success: function (json) {
                                                var cardData = {
                                                    id: _10A6,
                                                    keyType: 'type10A6',
                                                    govtId: govtID,
                                                    assignedTo: emp
                                                };

                                                $.ajax({
                                                    url: '/boss/cardOrKey',
                                                    type: 'POST',
                                                    cache: false,
                                                    async: false,
                                                    data: JSON.stringify(cardData),
                                                    contentType: 'application/json',
                                                    success: function (j) {
                                                        var dat = {
                                                            type: '10A6',
                                                            success: true

                                                        };
                                                        key_success_check.push(dat);
                                                    },
                                                    error: function (a, b, c) {
                                                        console.log(a.responseText);
                                                        var dat = {
                                                            type: '10A6',
                                                            success: false

                                                        };
                                                        key_success_check.push(dat);
                                                    }
                                                });
                                            }
                                        });
                                        break;
                                    case 'type10A7':
                                        $.ajax({
                                            url: '/boss/cardOrKey/' + value.id,
                                            type: 'DELETE',
                                            cache: false,
                                            async: false,
                                            success: function (json) {
                                                var cardData = {
                                                    id: _10A1,
                                                    keyType: 'type10A7',
                                                    govtId: govtID,
                                                    assignedTo: emp
                                                };

                                                $.ajax({
                                                    url: '/boss/cardOrKey',
                                                    type: 'POST',
                                                    cache: false,
                                                    async: false,
                                                    data: JSON.stringify(cardData),
                                                    contentType: 'application/json',
                                                    success: function (j) {
                                                        var dat = {
                                                            type: '10A7',
                                                            success: true

                                                        };
                                                        key_success_check.push(dat);
                                                    },
                                                    error: function (a, b, c) {
                                                        console.log(a.responseText);
                                                        var dat = {
                                                            type: '10A7',
                                                            success: false

                                                        };
                                                        key_success_check.push(dat);
                                                    }
                                                });
                                            }
                                        });
                                        break;
                                    case 'type10A8':
                                        $.ajax({
                                            url: '/boss/cardOrKey/' + value.id,
                                            type: 'DELETE',
                                            cache: false,
                                            async: false,
                                            success: function (json) {
                                                var cardData = {
                                                    id: _10A8,
                                                    keyType: 'type10A8',
                                                    govtId: govtID,
                                                    assignedTo: emp
                                                };

                                                $.ajax({
                                                    url: '/boss/cardOrKey',
                                                    type: 'POST',
                                                    cache: false,
                                                    async: false,
                                                    data: JSON.stringify(cardData),
                                                    contentType: 'application/json',
                                                    success: function (j) {
                                                        var dat = {
                                                            type: '10A8',
                                                            success: true

                                                        };
                                                        key_success_check.push(dat);
                                                    },
                                                    error: function (a, b, c) {
                                                        console.log(a.responseText);
                                                        var dat = {
                                                            type: '10A8',
                                                            success: false

                                                        };
                                                        key_success_check.push(dat);
                                                    }
                                                });
                                            }
                                        });
                                        break;
                                    case 'type10D1':
                                        $.ajax({
                                            url: '/boss/cardOrKey/' + value.id,
                                            type: 'DELETE',
                                            cache: false,
                                            async: false,
                                            success: function (json) {
                                                var cardData = {
                                                    id: _10D1,
                                                    keyType: 'type10D1',
                                                    govtId: govtID,
                                                    assignedTo: emp
                                                };

                                                $.ajax({
                                                    url: '/boss/cardOrKey',
                                                    type: 'POST',
                                                    cache: false,
                                                    async: false,
                                                    data: JSON.stringify(cardData),
                                                    contentType: 'application/json',
                                                    success: function (j) {
                                                        var dat = {
                                                            type: '10D1',
                                                            success: true

                                                        };
                                                        key_success_check.push(dat);
                                                    },
                                                    error: function (a, b, c) {
                                                        console.log(a.responseText);
                                                        var dat = {
                                                            type: '10D1',
                                                            success: false

                                                        };
                                                        key_success_check.push(dat);
                                                    }
                                                });
                                            }
                                        });
                                        break;
                                    case 'typeX3':
                                        $.ajax({
                                            url: '/boss/cardOrKey/' + value.id,
                                            type: 'DELETE',
                                            cache: false,
                                            async: false,
                                            success: function (json) {
                                                var cardData = {
                                                    id: _X3,
                                                    keyType: 'typeX3',
                                                    govtId: govtID,
                                                    assignedTo: emp
                                                };

                                                $.ajax({
                                                    url: '/boss/cardOrKey',
                                                    type: 'POST',
                                                    cache: false,
                                                    async: false,
                                                    data: JSON.stringify(cardData),
                                                    contentType: 'application/json',
                                                    success: function (j) {
                                                        var dat = {
                                                            type: 'X3',
                                                            success: true

                                                        };
                                                        key_success_check.push(dat);
                                                    },
                                                    error: function (a, b, c) {
                                                        console.log(a.responseText);
                                                        var dat = {
                                                            type: 'X3',
                                                            success: false

                                                        };
                                                        key_success_check.push(dat);
                                                    }
                                                });
                                            }
                                        });
                                        break;
                                    case 'typeFS':
                                        $.ajax({
                                            url: '/boss/cardOrKey/' + value.id,
                                            type: 'DELETE',
                                            cache: false,
                                            async: false,
                                            success: function (json) {
                                                var cardData = {
                                                    id: _FS,
                                                    keyType: 'typeFS',
                                                    govtId: govtID,
                                                    assignedTo: emp
                                                };

                                                $.ajax({
                                                    url: '/boss/cardOrKey',
                                                    type: 'POST',
                                                    cache: false,
                                                    async: false,
                                                    data: JSON.stringify(cardData),
                                                    contentType: 'application/json',
                                                    success: function (j) {
                                                        var dat = {
                                                            type: 'FS',
                                                            success: true

                                                        };
                                                        key_success_check.push(dat);
                                                    },
                                                    error: function (a, b, c) {
                                                        console.log(a.responseText);
                                                        var dat = {
                                                            type: 'FS',
                                                            success: false

                                                        };
                                                        key_success_check.push(dat);
                                                    }
                                                });
                                            }
                                        });
                                        break;
                                }
                            });



                            
                        }, error: function (a, b, c) {
                            console.log(a.responseText);
                        }
                    });
                    var check = true;
                    $.each(key_success_check, function (index, value) {
                        if (value.success == false) {
                            $('#myModal_error').modal('toggle');
                            check = false;
                        }
                    });
                    debugger;
                    if (check == true) {
                        $('#myModal_success').modal('toggle');
                    }
                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });
        });

        $('#myModal_success').on('click', '.success_ok', function () {
            location.reload();
        });

        $('#myModal_error').on('click', '.error_ok', function () {
            location.reload();
        });

    }
});


var cards = {
    "form_cards": [
        [
            {
                'fieldName': 'assignedTo',
                'type': 'select/text',
                'title': 'Assigned Employee'
            },

            {
                'fieldName': 'govID',
                'type': 'input/text',
                'title': 'Government ID'
            }
        ],
        [
            {
                'fieldName': 'bool_10A1',
                'type': 'input/text',
                'title': 'KeyType 10A1'
            },
            {
                'fieldName': 'bool_10A6',
                'type': 'input/text',
                'title': 'KeyType 10A6'
            },
            {
                'fieldName': 'bool_10A7',
                'type': 'input/text',
                'title': 'KeyType 10A7'
            },
            {
                'fieldName': 'bool_10A8',
                'type': 'input/text',
                'title': 'KeyType 10A8'
            },
            {
                'fieldName': 'bool_10D1',
                'type': 'input/text',
                'title': 'KeyType 10D1'
            },
            {
                'fieldName': 'bool_X3',
                'type': 'input/text',
                'title': 'KeyType X3'
            }
        ]
    ],
    "edit_form": [
        [
            {
                'fieldName': 'assignedTo_modal',
                'type': 'input/text',
                'title': 'Assigned Employee',
                'readonly': true
            },

            {
                'fieldName': 'govID_modal',
                'type': 'input/text',
                'title': 'Government ID'
            }
        ],
        [
            {
                'fieldName': 'modal_10A1',
                'type': 'input/text',
                'title': 'KeyType 10A1'
            },
            {
                'fieldName': 'modal_10A6',
                'type': 'input/text',
                'title': 'KeyType 10A6'
            },
            {
                'fieldName': 'modal_10A7',
                'type': 'input/text',
                'title': 'KeyType 10A7'
            },
            {
                'fieldName': 'modal_10A8',
                'type': 'input/text',
                'title': 'KeyType 10A8'
            },
            {
                'fieldName': 'modal_10D1',
                'type': 'input/text',
                'title': 'KeyType 10D1'
            },
            {
                'fieldName': 'modal_X3',
                'type': 'input/text',
                'title': 'KeyType X3'
            },
            {
                'fieldName': 'modal_FS',
                'type': 'input/text',
                'title': 'KeyType FS'
            }
        ]
    ]
};

CustomFormFunctions.addBootstrapFields(cards);




