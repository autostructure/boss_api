var fakeData = [
    { "employeeId": 47, "category": "blah", "title": "blah", "yearsValid": 5, "dateOfTraining": "2018-09-26T14:03:16.183Z", "approvedBy": null }

];

//var userId = 3; // Temporary Spoofing
//var supervisor = false;


$(document).ready(function () {
    $('.wrapper').find('#hideShowDiv').hide();
    makeAjaxCall('/boss/itEquipment', 'GET', null).then(function (json) {
        populateDataTable(json);
    }, function (a, b, c) {
        console.log(a.responseText);
    });

    function populateDataTable(jsonData) {
        //console.log('populateDataTable');
        console.log(jsonData);
        
        var table = $('#ITEquip').DataTable({
            'bPaginate': false,
            'data': jsonData,
            'dom': 'Bfti',
            'columns': [{
                'data': "equipmentName"
            },
            // { 'data': 'supervisor' },

            {
                'data': "category"
            },
            {
                'data': "make"
            },
            {
                'data': 'modelNumber'
            },
            {
                'data': "serialNumber"
            },
            {
                'data': "type"
                },
                {
                    'data': 'assignedTo',
                    'render': function (data, type, row) {
                        var emp;
                        $.ajax({
                            url: '/boss/employeeProfile/' + data.id,
                            type: 'GET',
                            async: false,
                            success: function (name) {
                                emp = name;
                            }
                        });
                        return emp.lastName + ', ' + emp.firstName;
                    }
                },
            {
                'data': 'acquisitionDate',
                'render': function (data, type, row) {
                    return CustomFormFunctions.formatDate(data, 'mm/dd/yyyy');
                }
            },
            {
                'data': null,
                'render': function (data, type, row) {
                    return `
                      <div class="dropdown1">
                          <button id="test_click" class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                          <div id="dropList" class="dropdown-content1">
                              <a href="#" data-toggle="modal" data-target="myModal_edit" data-value="` + data.id + `" class="editBtn" id="editBtn">Edit IT Equipment</a>
                              <a href="#" data-toggle="modal" data-target="myModal_assign" data-value="` + data.id + `" class="assignBtn" id="assignBtn">Assign Employee</a>
                              <a href="#" data-toggle="modal" data-target="myModal_delete" data-value="` + data.id + `|` + data.equipmentName + `" class="deleteBtn" id="deleteBtn">Delete IT Equipment</a>
                          </div>
                      </div>
                  
                  `;
                }
            }
            ],
            'buttons': [{
                text: 'Add <i class="fa fa-lg fa-plus"></i>',
                action: function () {
                    $('.wrapper').find('#hideShowDiv').show();
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

        var selected_row;
        $('#deleteBtn').on('click', function (e) {
            selected_row = $(this).attr('data-value');
            var equip = selected_row.split('|')[1];
            var id = selected_row.split('|')[0];

            $('#myModal_delete').find('.IT_equip_name').text(equip);
            $('#myModal_delete').find('.hidden_id').val(id);
            $('#myModal_delete').modal('toggle');
        });

        $('#myModal_delete').on('click', '#deleteModal_delete', function (e) {
            var id = $('#myModal_delete').find('.hidden_id').val();
            $.ajax({
                url: '/boss/itEquipment/' + id,
                type: 'DELETE',
                cache: false,
                success: function (jj) {
                    location.reload();
                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });
        });

        $('#editBtn').on('click', function (e) {
            selected_row = $(this).attr('data-value');
            
            $.ajax({
                url: '/boss/itEquipment/' + selected_row,
                type: 'GET',
                cache: false,
                success: function (json) {
                    var modal = $('#editForm');
                    modal.find('[name=Category]').val(json.category);
                    modal.find('[name=Make]').val(json.make);
                    modal.find('[name=Type]').val(json.type);
                    modal.find('[name=EquipmentName]').val(json.equipmentName);
                    modal.find('[name=ModelNum]').val(json.modelNumber);
                    modal.find('[name=serialNum]').val(json.serialNumber);
                    modal.find('[name=AcquisitionDate]').val(json.acquistionDate);
                    $('#myModal_edit').modal('toggle');
                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });
        });

        $('#myModal_edit').on('click', '#deleteModal_edit', function (e) {
            var modal = $('#myModal_edit');
            var IT = {
                'acquisitionDate': getCorrectDateFormat(modal.find('[name=AcquisitionDate]').val()),
                'category': modal.find('[name=Category]').val(),
                'equipmentName': modal.find('[name=EquipmentName]').val(),
                'make': modal.find('[name=Make]').val(),
                'modelNumber': modal.find('[name=ModelNum]').val(),
                'serialNumber': modal.find('[name=serialNum]').val(),
                'type': modal.find('[name=Type]').val(),
                'id': selected_row
            };
            
            $.ajax({
                url: '/boss/itEquipment/' + selected_row,
                type: 'PUT',
                cache: false,
                contentType: 'application/json',
                data: JSON.stringify(IT),
                success: function (json) {
                    location.reload();
                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });
        });

        $('#assignBtn').on('click', function (e) {
            selected_row = $(this).attr('data-value');
            $.ajax({
                url: '/boss/employeeProfile',
                type: 'GET',
                cache: false,
                async: false,
                success: function (j) {
                    $.each(j, function (index, value) {
                        
                        $('#myModal_assign').find('[name=assignedSelect]').append('<option value="' + value.id + '">' + value.lastName + ', ' + value.firstName + '</option>');
                    });
                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });
            $('#myModal_assign').modal('toggle');
        });

        $('#myModal_assign').on('click', '.btn_assign', function (e) {
            var employeeID = $('[name=assignedSelect] :selected').val();
 
            $.ajax({
                url: '/boss/employeeProfile/' + employeeID,
                type: 'GET',
                cache: false,
                success: function (j) {
        
                    var dat = {
                        'assignedTo': j,
                        'id': selected_row
                    };
               
                    CustomFormFunctions.putPartialInfo('/boss/itEquipment', selected_row, dat, function (j) {
                        
                        location.reload();
                    }, function (a, b, c) {

                       console.log(a.responseText);
                       
                    });
                }, error: function(a, b, c){
                    console.log(a.responseText);
                }
                
            });

        });
        
    }

    $('.addEquip').on('click', function (e) {
        var category_ = $('[name=Category]').val();
        var make_ = $('[name=Make]').val();
        var equipmentName = $('[name=EquipmentName]').val();
        var modelNum = $('[name=ModelNum]').val();
        var serialNum = $('[name=serialNum]').val();
        var acquisDate = $('[name=AcquisitionDate]').val();
        var _type = $('[name=Type]').val();

        var IT = {
            'acquisitionDate': getCorrectDateFormat(acquisDate),
            'category': category_,
            'equipmentName': equipmentName,
            'make': make_,
            'modelNumber': modelNum,
            'serialNumber': serialNum,
            'type': _type
        };

        $.ajax({
            url: '/boss/itEquipment',
            type: 'POST',
            cache: false,
            contentType: 'application/json',
            data: JSON.stringify(IT),
            success: function (json) {
                
                location.reload();
            },
            error(a, b, c) {
                
                console.log(a.responseText);
            }
        });
    });

});




function getCorrectDateFormat(date_str) {
    var date = new Date(date_str);
    return date.toISOString();
}



var addEquip = {
    "addEquip": [
        [{
            "fieldName": "Category",
            "title": "Category",
            "placeholder": "",
            "type": "input/Text"
        },
        {
            "fieldName": "Make",
            "title": "Make",
            "placeholder": "",
            "required": true,
            "type": "input/text"
        },
        {
            "fieldName": "Type",
            "title": "Type",
            "required": true,
            "type": "input/text"
        }],
        [{
            "fieldName": "EquipmentName",
            "title": "Equipment Name",
            "required": true,
            "type": "input/text"
        },
        {
            "fieldName": "ModelNum",
            "title": "Model Num",
            "required": true,
            "type": "input/text"
        },
        {
            "fieldName": "serialNum",
            "title": "serial Num",
            "required": true,
            "type": "input/text"
        }],
        [
            {
                "fieldName": "AcquisitionDate",
                "title": "Acquisition Date",
                "required": true,
                "type": "input/date"
            }
        ]

    ], "editForm":[
        [{
            "fieldName": "Category",
            "title": "Category",
            "placeholder": "",
            "type": "input/Text"
        },
            {
                "fieldName": "Make",
                "title": "Make",
                "placeholder": "",
                "required": true,
                "type": "input/text"
            },
            {
                "fieldName": "Type",
                "title": "Type",
                "required": true,
                "type": "input/text"
            }],
    [{
        "fieldName": "EquipmentName",
        "title": "Equipment Name",
        "required": true,
        "type": "input/text"
    },
        {
            "fieldName": "ModelNum",
            "title": "Model Num",
            "required": true,
            "type": "input/text"
        },
        {
            "fieldName": "serialNum",
            "title": "serial Num",
            "required": true,
            "type": "input/text"
        }],
    [
        {
            "fieldName": "AcquisitionDate",
            "title": "Acquisition Date",
            "required": true,
            "type": "input/date"
        }
    ]
    ],
    'assignForm': [
        [
            {
                'fieldName': 'assignedSelect',
                'type': 'select/input',
                'title': 'Assigned Employee',
                'required': true
            }
        ]
    ]
};

CustomFormFunctions.addBootstrapFields(addEquip);







//var fakeData = [
//    {
//        "employeeId": 47,
//        "category": "blah",
//        "title": "blah",
//        "yearsValid": 5,
//        "dateOfTraining": "2018-09-26T14:03:16.183Z",
//        "approvedBy": null
//    }
//];
//var training_config = {
//    "dueWithinDays": 180, // 6 months
//};
//var userId = 3; // Temporary Spoofing

//$(document).ready(function() {
//    $("#firstDropDown").on("change",
//        function() {
//            var second = $("#secondDropDown");
//            var oldVal = second.val();
//            var goodOptions = second.find("option[data-filter='" + this.value + "']");
//            second.find("option").hide();
//            goodOptions.show();
//            if (goodOptions.filter("[value='" + oldVal + "']").length == 0) {
//                second.val(goodOptions.val());
//                //console.log(goodOptions.val());
//            }
//        });

//    var p0 = makeAjaxCall("/training", "GET", null);
//    var p1 = makeAjaxCall("/trainingCourse", "GET", null);
//    var p2 = makeAjaxCall("/employeeProfile", "GET", null);
//    Promise.all([p0, p1, p2]).then(function(results) {
//        var trainings = results[0];
//        var CourseRes = results[1];
//        var employeeRes = results[2];
//        var trainingCourses = [{ id: 0, title: "Unknown", description: "Something's not right..." }];
//        var employees = [{ id: 0, lastName: "Unapproved", firstName: "" }];
//        for (var i in CourseRes) {
//            var c = CourseRes[i];
//            trainingCourses[c.id] = c;
//        }
//        for (var i in employeeRes) {
//            var c = employeeRes[i];
//            employees[c.id] = c;
//        }
//        for (var i in trainings) {
//            var tr = trainings[i];
//            tr.course = trainingCourses[tr.trainingCourseId ? tr.trainingCourseId : 0];
//            tr.employee = employees[tr.employee ? tr.employee.id : 0];
//            tr.approvedBy = employees[tr.approvedBy ? tr.approvedBy.id : 0];
//        }
        
//        populateDataTable(trainings);
//    });


//    function populateDataTable(jsonData) {
//        console.log("populateDataTable");
//        console.log(jsonData);

        
//        var latestTraining = {};
//        for (k in jsonData) {
//            var v = jsonData[k];
//            var key = v.employee.id + "_" + v.trainingCourseId;
//            var otherId = latestTraining[key];
//            if (!otherId || jsonData[otherId].dateOfTraining < v.dateOfTraining) {
//                latestTraining[key] = k;
//            }
//        }
//        for (key in latestTraining) {
//            jsonData[latestTraining[key]].isLatest = true;
//        }
//        debugger;
//        //console.log(jsonData);
//        var table = $("#tblTraining").DataTable({
//            'order': [
//                [4, "asc"]
//            ],
//            'bPaginate': false,
//            'data': jsonData,
//            'dom': "Bfti",
//            'columns': [
//                {
//                    'data': "employee",
//                    'render': function(data, type, row) {
//                        return data.lastName + ", " + data.firstName;
//                    }
//                },
//                // { 'data': 'supervisor' },
//                {
//                    'data': "course.title",
//                    'render': function(data, type, row) {
//                        return "<span data-toggle='tooltip' data-placement='top' title='" +
//                            row.course.description +
//                            "'>" +
//                            data +
//                            "</span>";
//                    }
//                },
//                {
//                    'data': "dateOfTraining",
//                    "render": function(data, type, row) {
//                        if (type == "sort") return data;
//                        return CustomFormFunctions.formatDate(data, "bootstrap");
//                    }
//                },
//                {
//                    'data': "approvedBy",
//                    'render': function(data, type, row) {
//                        if (data != undefined) {
//                            return data.lastName + ", " + data.firstName;
//                        } else {
//                            return "N/A";
//                        }
//                    }
//                },
//                {
//                    'data': "validUntil",
//                    "render": function(data, type, row) {
//                        var dueDate = CustomFormFunctions.getDateFrom(data);
//                        var trainingDate = CustomFormFunctions.getDateFrom(row.dateOfTraining);
//                        if (type != "display") return dueDate.getTime();
//                        var one_day = 1000 * 60 * 60 * 24;
//                        var dateStr = CustomFormFunctions.formatDate(dueDate, "bootstrap");
//                        var daysUntilDue = (dueDate - new Date()) / one_day;
//                        var notRequired = (dueDate - trainingDate) < 0;
//                        if (!row.isLatest) {
//                            return "<span class='text-success'>Already Renewed</span>";
//                        } else if (notRequired) {
//                            return "<span class='text-muted'>No Longer Required</span>";
//                        } else if (daysUntilDue < 1) {
//                            return "<span class='bg-danger text-white'>" + dateStr + "</span><br>Overdue";
//                        } else if (daysUntilDue < training_config.dueWithinDays) {
//                            return "<span class='bg-warning'>" + dateStr + "</span><br>Up For Renewal";
//                        } else {
//                            return "<span>" + dateStr + "</span>";
//                        }
//                    }
//                },
                

//                 {
//                    'data': null,
//                    "render": function(data, type, row) {
//                        var buttonList = $("#templateButtonList").clone().attr("id", "");
//                        buttonList.find("a").attr("data-training", JSON.stringify(row));
//                        return buttonList.prop("outerHTML");
//                    }
//                }
//            ],
//            'buttons': [
//                {
//                    text: 'Add <i class="fa fa-lg fa-plus"></i>',
//                    action: function() {
//                        window.location.href = "/addTrainingEmployee";
//                    },
//                    className: "table-btns add-btn"
//                },
//                {
//                    text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
//                    action: function() {
//                        window.location.reload();
//                    },
//                    className: "table-btns refresh-btn"
//                },
//                {
//                    text:
//                        '<label class="viewLabel" for="viewOld">View Old Entries <i class="fa fa-lg fa-eye"></i><input type="checkbox" id="viewOld"></label>',
//                    // text: 'View Old <i class="fa fa-lg fa-eye" id="viewOld"></i>',
//                    action: function() {
//                        $("#viewOld").click();
//                        var show = $("#viewOld")[0].checked;
//                        console.log(show);
//                        var eye = $('label[for="viewOld"] i');
//                        if (show) {
//                            table.columns(5).search("").draw();
//                            eye.addClass("fa-eye");
//                            eye.removeClass("fa-eye-slash");
//                        } else {
//                            table.columns(5).search("isLatest").draw();
//                            eye.addClass("fa-eye-slash");
//                            eye.removeClass("fa-eye");
//                        }
//                    },
//                    className: "table-btns view-btn"
//                }, {
//                    text: 'Print <i class="fa fa-lg fa-print"></i>',
//                    extend: "print",
//                    exportOptions: {
//                        columns: [0, 1, 2, 3, 4]
//                    },
//                    className: "table-btns print-btn"
//                },
//                {
//                    text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
//                    extend: "excel",
//                    exportOptions: {
//                        columns: [0, 1, 2, 3, 4]
//                    },
//                    className: "table-btns excel-btn"
//                }
//            ],
//        });
//        table.button("2").trigger();
//        table.button("2").trigger();

//        $('[data-toggle="tooltip"]').tooltip();

//        $(".btn-modal").on("click",
//            function() {
//                var info = $(this).data("training");
//                $(".trainingId").val(info.id);
//                $(".trainingCourse").text(info.course.title);
//                $(".employeeName").text(info.employee.nameCode);
//                populateCertificateList();
//            });
//        $(".btn-modal-renew").on("click",
//            function() {
//                populateRenewFields($(this).data("training"));
//            });
//        $("#btn_approve_training").on("click",
//            function() {
//                var id = $(this).closest("form").find(".trainingId").val();
//                CustomFormFunctions.putPartialInfo("/training",
//                    id,
//                    { 'approvedBy': { 'id': userId } },
//                    function() { window.location.reload() });
//            });
//        $("#form_training_upload_file").on("change update",
//            function() {
//                $("#form_training_upload_description").val(this.files[0].name);
//            });
//        $("#btn_add_training_docs").on("click",
//            function() {
//                var form = $("#form_training_upload");
//                var data = new FormData(form[0]);
//                var id = form.find(".trainingId").val();
//                $.ajax({
//                    url: "/boss/certificate?trainingId=" + id,
//                    type: "POST",
//                    enctype: "multipart/form-data",
//                    data: data,
//                    processData: false,
//                    contentType: false,
//                    cache: false,
//                    timeout: 600000,
//                    success: function(data) {
//                        $("#form_training_upload_file, #form_training_upload_description").val("");
//                        populateCertificateList();
//                    },
//                    error: function(e) {
//                        console.log(e.responseJSON);
//                    }
//                });
//            });
//        $("#btn_remove_training").on("click",
//            function() {
//                var id = $(this).closest("form").find(".trainingId").val();
//                $.ajax({
//                    'url': "/training/" + id,
//                    'type': "DELETE",
//                    'success': function() { window.location.reload() },
//                    'error': function(a, b, c) {
//                        console.log(a.responseJSON);
//                    }
//                });
//            });
//        $("#btn_renew_training").on("click",
//            function() {
//                var data = {
//                    'employee': {
//                        'id': $("#form_training_renew [name='employee.id']").val(),
//                    },
//                    'trainingCourseId': $("#form_training_renew [name='trainingCourseId']").val(),
//                    'validUntil': CustomFormFunctions.formatDate("#form_training_renew [name='validUntil']"),
//                    'dateOfTraining': CustomFormFunctions.formatDate("#form_training_renew [name='dateOfTraining']"),
//                };
//                console.log(JSON.stringify(data));
//                $.ajax({
//                    'url': "/training",
//                    'type': "POST",
//                    'contentType': "application/json",
//                    'data': JSON.stringify(data),
//                    'success': function() {
//                        window.location.reload();
//                    },
//                    'error': function(a, b, c) {
//                        console.log(a.responseJSON);
//                    }
//                });
//            });
//        $("#btn_unrequire_training").on("click",
//            function() {
//                var id = $(this).closest("form").find(".trainingId").val();
//                CustomFormFunctions.putPartialInfo("/training",
//                    id,
//                    { validUntil: new Date(0, 0) },
//                    () => { window.location.reload(); },
//                    () => console.log("Error!"));
//            });
//    }

//    $("#form_training_renew [name='dateOfTraining']").change(function() {
//        var date1 = CustomFormFunctions.getDateFrom(this.value);
//        var date2 = new Date(date1);
//        var yearsValid = $("#form_training_renew [name='yearsValid']").val();
//        date2.setFullYear(parseInt(date1.getFullYear()) + parseInt(yearsValid));
//        var date2str = CustomFormFunctions.formatDate(date2, "bootstrap");
//        $("#form_training_renew [name='validUntil']").val(date2str);
//    });

//});

//function populateCertificateList() {
//    console.log("PopulatingList");
//    $.ajax({
//        url: "/boss/training/" + $(".trainingId").val(),
//        type: "GET",
//        success: function(data) {
//            var cert = data.certificates;
//            var list = cert.map(function(v) {
//                var previewLink = "<a target='_blank' href='/certificate/" +
//                    v.documentId +
//                    "'>" +
//                    v.description +
//                    "</a>";
//                var deleteLink = "<a href='#' onclick='showDeleteCertificate(" +
//                    v.documentId +
//                    ")' class='small text-danger'>Remove</a>";
//                var confirmDeleteLink = "<a href='#' id='delete_certificate_" +
//                    v.documentId +
//                    "' onclick='deleteCertificate(" +
//                    v.documentId +
//                    ")' class='hide small text-danger'>Are you sure?  You can't get the file back once deleted.</a>";
//                return deleteLink + " " + confirmDeleteLink + " " + previewLink;
//            });
//            $("#certificate_list").html(list.join("<br>"));
//            for (var i in cert) {
//                var id = cert[i].id;
//            }
//        },
//        error: function(e) {
//            console.log(e.responseJSON);
//        }
//    });
//}

//function showDeleteCertificate(id) {
//    console.log(id);
//    $("#delete_certificate_" + id).show();
//}

//function deleteCertificate(id) {
//    $.ajax({
//        url: "/boss/certificate/" + id,
//        type: "DELETE",
//        success: populateCertificateList
//    });
//}

//function populateRenewFields(training) {
//    var courseId = training.trainingCourseId;
//    $.ajax({
//        url: "/boss/trainingCourse/" + courseId,
//        type: "GET",
//        success: function(course) {
//            var form = $("#form_training_renew");
//            form.find(".category").text(course.category);
//            form.find(".description").text(course.description);
//            form.find("[name='employee.id']").val(training.employee.id);
//            form.find("[name='trainingCourseId']").val(courseId);
//            var date1 = new Date();
//            var date2 = new Date();
//            var yearsValid = (true || employee.isLeader) ? course.defaultYearsLeader : course.defaultYears;
//            date2.setFullYear(date1.getFullYear() + yearsValid);
//            form.find("[name='yearsValid']").val(yearsValid);
//            form.find("[name='dateOfTraining']").val(CustomFormFunctions.formatDate(date1, "bootstrap"));
//            form.find("[name='validUntil']").val(CustomFormFunctions.formatDate(date2, "bootstrap"));
//        }
//    });
//}


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