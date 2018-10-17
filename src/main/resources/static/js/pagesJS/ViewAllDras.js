var fakeData = [{
    category: "health",
    completeBy: "2090",
    description: "this is a description",
    id: 1,
    title: "dracourse",
    wiggleRoom: 20
}];

//NOTE: need to convert dra to draCourse for this js page. Only the addDraEmployee deals with adding dra to a draCourse,
//hence only a dra is associated to an employee.

var debug = false;
var training_config = {
    "dueWithinDays": 180, // 6 months
}
var userId = 3; // Temporary Spoofing

$(document).ready(function() {
    $("#firstDropDown").on("change", function() {
        var second = $("#secondDropDown");
        var oldVal = second.val();
        var goodOptions = second.find("option[data-filter='" + this.value + "']");
        second.find("option").hide();
        goodOptions.show();
        if (goodOptions.filter("[value='" + oldVal + "']").length == 0) {
            second.val(goodOptions.val());
            //console.log(goodOptions.val());
        }
    });

    $.ajax({
        url: "/draCourse",
        contentType: "application/json",
        dataType: 'json',
        cache: false,
        type: 'GET',
        timeout: 600000,
        success: function(dras) {
            populateDataTable(dras);
        },
        error: function(a, b, c) {

            console.log(a.responseText);
        }
    });


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

        var table = $('#allDrasCourses').DataTable({
            // 'order':[[4, "asc"]],
            'bPaginate': false,
            'data': jsonData,
            'dom': 'Bfti',
            'columns': [{
                    'data': "title"
                },
                { 'data': "category" },
                { 'data': "description" },
                {
                    'data': "completeBy",
                    "render": function(data, type, row) {
                        return CustomFormFunctions.formatDate(data, 'mm/dd/yyyy');
                    }
                },
                { 'data': "wiggleRoom" },
                {
                    'data': null,
                    "render": function(data, type, row) {
                        return `
                        <div class="dropdown1">
                            <button id="test_click" class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                            <div id="dropList" class="dropdown-content1">
                                <a data-toggle="modal" data-target="#myModal_edit" href="#" data-value=` + row.id + ` class="editBtn" id="editBtn">Edit DRA</a>
                                <a data-toggle="modal" data-target="#myModal_delete" href="#" data-value=` + row.id + ` class="deleteBtn" id="deleteBtn">Delete DRA</a>
                            </div>
                        </div>
                    
                    `;
                    }
                }
            ],
            'buttons': [{
                    text: 'Add <i class="fa fa-lg fa-plus"></i>',
                    action: function() {
                        $('#myModal_add').modal();
                    },
                    className: 'table-btns add-btn'
                },
                {
                    text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
                    action: function() {
                        window.location.reload();
                    },
                    className: 'table-btns refresh-btn'
                }
            ]
        });

        $('[data-toggle="tooltip"]').tooltip();
        var selected_row = '';

        $('.deleteBtn').on('click', function() {
            selected_row = $(this).attr('data-value');
        });

        $('.editBtn').on('click', function() {
            selected_row = $(this).attr('data-value');
            populateEdit_modal();
        });

        $('#myModal_add').on('click', '#myModal_addYes', function() {
            var modal = $('#myModal_add');
            var dra_title = modal.find('div.modal-body div.row div.col div.form-group input.dra_title').val();
            var dra_wiggleRoom = modal.find('div.modal-body div.row div.col div.form-group input.dra_wiggleRoom').val();
            var dra_CompleteBy = modal.find('div.modal-body div.row div.col div.form-group input.dra_CompleteBy').val();
            var dra_Category = modal.find('div.modal-body div.row div.col div.form-group input.dra_category').val();
            var dra_description = modal.find('div.modal-body div.row div.col div.form-group input.dra_Description').val();

            draCourseObj.category = dra_Category;
            draCourseObj.completeBy = getCorrectDateFormat(dra_CompleteBy);
            draCourseObj.title = dra_title;
            draCourseObj.description = dra_description;
            draCourseObj.wiggleRoom = parseInt(dra_wiggleRoom);

            $.ajax({
                url: '/draCourse',
                type: 'POST',
                cache: false,
                contentType: "application/json",
                data: JSON.stringify(draCourseObj),
                success: function() {
                    window.location.reload();
                },
                error(a, b, c) {
                    console.log(a.responseText);
                }
            });


        });

        //$('#myModal_edit').on('shown.bs.model', function() {
        function populateEdit_modal() {
            $.ajax({
                url: '/draCourse/' + selected_row,
                type: 'GET',
                cache: false,
                timeout: 600000,
                success: function(json) {
                    var modal = $('#myModal_edit');

                    modal.find('div.modal-body div.row div.col div.form-group input.dra_title').val(json.title);
                    modal.find('div.modal-body div.row div.col div.form-group input.dra_category').val(json.category);
                    modal.find('div.modal-body div.row div.col div.form-group input.dra_wiggleRoom').val(json.wiggleRoom);
                    modal.find('div.modal-body div.row div.col div.form-group input.dra_CompleteBy').val(CustomFormFunctions.formatDate(json.completeBy, 'mm/dd/yyyy'));
                    modal.find('div.modal-body div.row div.col div.form-group input.dra_Description').val(json.description);
                },
                error: function(a, b, c) {
                    console.log(a.responseText);
                }
            });
        }

        $('#myModal_edit').on('click', '#myModal_editConfirm', function() {

            var modal = $('.myModal_edit');
            var title = modal.find('div.modal-body div.row div.col div.form-group input.dra_title').val();
            var category = modal.find('div.modal-body div.row div.col div.form-group input.dra_category').val();
            var wiggleRoom = modal.find('div.modal-body div.row div.col div.form-group input.dra_wiggleRoom').val();
            var completeBy = modal.find('div.modal-body div.row div.col div.form-group input.dra_CompleteBy').val();
            var description = modal.find('div.modal-body div.row div.col div.form-group input.dra_Description').val();

            draCourseObj.title = title;
            draCourseObj.category = category;
            draCourseObj.wiggleRoom = wiggleRoom;
            draCourseObj.completeBy = getCorrectDateFormat(completeBy);
            draCourseObj.description = description;
            draCourseObj.id = selected_row;
            console.log(draCourseObj);


            $.ajax({
                url: '/draCourse/' + selected_row,
                type: 'PUT',
                cache: false,
                timeout: 600000,
                contentType: "application/json",
                data: JSON.stringify(draCourseObj),
                success: function(json) {
                    window.location.reload();
                },
                error: function(a, b, c) {
                    console.log(a.responseText);
                }

            });

        });

        $('#myModal_delete').on('click', '#myModal_del', function(e) {
            $.ajax({
                'url': "/draCourse/" + selected_row,
                'type': 'DELETE',
                'success': function() { window.location.reload() },
                'error': function(a, b, c) {
                    console.log(a.responseJSON);
                }
            });
        });
    }

});

function getCorrectDateFormat(date_str) {
    var date = new Date(date_str);

    return date.toISOString();
}




var trainingRenewFields = {
    "form_training_renew": [
        [{
                "fieldName": "dateOfTraining",
                "title": "Training Completed On",
                "placeholder": "Date of Training",
                "type": "input/date",
                "colspan": 6,
            },
            {
                "fieldName": "validUntil",
                "title": "Valid Until",
                "placeholder": "Valid Until",
                "type": "input/date",
                "colspan": 6,
            },
            {
                "fieldName": "yearsValid",
                "hidden": true,
                "type": "input/number"
            },
        ]
    ]
}

CustomFormFunctions.addBootstrapFields(trainingRenewFields);


var draCourseObj = {
    category: "string",
    completeBy: "string",
    description: "string",
    id: null,
    title: "string",
    wiggleRoom: 0
};