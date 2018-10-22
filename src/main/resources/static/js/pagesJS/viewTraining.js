var fakeData = [
    { "employeeId": 47, "category": "blah", "title": "blah", "yearsValid": 5, "dateOfTraining": "2018-09-26T14:03:16.183Z", "approvedBy": null }

];
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
        url: "/training",
        contentType: "application/json",
        dataType: 'json',
        cache: false,
        type: 'GET',
        timeout: 600000,
        success: function(trainings) {
            $.ajax({
                url: "/trainingCourse",
                contentType: "application/json",
                dataType: 'json',
                cache: false,
                type: 'GET',
                timeout: 600000,
                success: function(json) {
                    var trainingCourses = {};
                    for (k in json) {
                        trainingCourses[json[k].id] = json[k];
                    }
                    for (k in trainings) {
                        var tr = trainings[k];
                        var course = trainingCourses[tr.trainingCourseId];
                        tr.category = course.category;
                        tr.title = course.title;
                        tr.description = course.description;
                    }


                    training_list = [];
                    $.each(trainings, function(index, value) {


                        var _emp;
                        $.ajax({
                            url: "/employeeProfile/" + value.employee.id,
                            type: "GET",
                            cache: false,
                            async: false,
                            timeout: 600000,
                            success: function(json) {
                                _emp = json;
                            },
                            error: function(a, b, c) {
                                console.log(a.responseText);
                            }
                        });

                        var val = value;
                        val.employee = _emp;
                        training_list.push(val);
                    });

                    training_list_ = [];
                    $.each(trainings, function(index, value) {
                        var _emp;
                        if (value.approvedBy != undefined || value.approvedBy != null) {
                            if (value.approvedBy.id != null) {
                                $.ajax({
                                    url: "/employeeProfile/" + value.approvedBy.id,
                                    type: "GET",
                                    cache: false,
                                    async: false,
                                    timeout: 600000,
                                    success: function(json) {
                                        _emp = json;
                                        
                                    },
                                    error: function(a, b, c) {
                                        console.log(a.responseText);
                                    }
                                });

                                var val = value;
                                val.approvedBy = _emp;
                                training_list_.push(val);
                            }
                        }
                    });

                    
                    populateDataTable(training_list_);

                },
                error: function(a, b, c) {
                    console.log(a.responseText);
                },
            });
        },
        error: function(a, b, c) {
            console.log(a.responseText);
        },
    });

    function populateDataTable(jsonData) {
        console.log('populateDataTable');
        console.log(jsonData);
        var latestTraining = {};
        for (k in jsonData) {
            var v = jsonData[k];
            var key = v.employee.id + "_" + v.trainingCourseId;
            var otherId = latestTraining[key];
            if (!otherId || jsonData[otherId].dateOfTraining < v.dateOfTraining) {
                latestTraining[key] = k;
            }
        }
        for (key in latestTraining) {
            jsonData[latestTraining[key]].isLatest = true;
        }



        var table = $('#tblTraining').DataTable({
            'order': [
                [4, "asc"]
            ],
            'bPaginate': false,
            'data': jsonData,
            'dom': 'Bfti',
            'columns': [{
                    'data': "employee",
                    'render': function(data, type, row) {
                        return data.lastName + ', ' + data.firstName;
                    }
                },
                // { 'data': 'supervisor' },

                {
                    'data': "title",
                    'render': function(data, type, row) {
                        return "<span data-toggle='tooltip' data-placement='top' title='" + row.description + "'>" + data + "</span>";
                    }
                },
                {
                    'data': "dateOfTraining",
                    "render": function(data, type, row) {
                        if (type == 'sort') return data;
                        return CustomFormFunctions.formatDate(data, "bootstrap");
                    }
                },
                {
                    'data': 'approvedBy',
                    'render': function(data, type, row) {
                        if (data != undefined) {
                            return data.lastName + ", " + data.firstName;
                        } else {
                            return "N/A";
                        }
                    }
                },
                {
                    'data': "validUntil",
                    "render": function(data, type, row) {
                        var date = CustomFormFunctions.getDateFrom(data);
                        if (type != 'display') return date.getTime();
                        var one_day = 1000 * 60 * 60 * 24;
                        var dateStr = CustomFormFunctions.formatDate(date, "bootstrap");
                        var daysUntilDue = (date - new Date()) / one_day;
                        if (!row.isLatest) {
                            return "<span class='text-success'>Already Renewed</span>";
                        } else if (daysUntilDue < 1) {
                            return "<span class='bg-danger text-white'>" + dateStr + "</span><br>Overdue";
                        } else if (daysUntilDue < training_config.dueWithinDays) {
                            return "<span class='bg-warning'>" + dateStr + "</span><br>Up For Renewal";
                        } else {
                            return "<span>" + dateStr + "</span>";
                        }
                    }
                },
                {
                    'data': "approvedBy.nameCode",
                    "render": function(data, type, row) {
                        if (!data) {
                            return "<span class='text-danger'>Unapproved</span>";
                        }
                        return data;
                    }
                },
                {
                    'data': "isLatest",
                    "render": function(data, type, row) {
                        if (type == 'filter') {
                            return data ? "isLatest" : "";
                        }
                        var buttonList = $("#templateButtonList").clone().attr('id', '');
                        buttonList.find("a").attr("data-training", JSON.stringify(row));
                        return buttonList.prop('outerHTML');
                    },
                    "orderable": false,
                },
            ],
            'buttons': [{
                    text: 'Add <i class="fa fa-lg fa-plus"></i>',
                    action: function() {
                        window.location.href = '/addTrainingEmployee';
                    },
                    className: 'table-btns add-btn'
                },
                {
                    text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
                    action: function() {
                        window.location.reload();
                    },
                    className: 'table-btns refresh-btn'
                },
                {
                    text: '<label class="viewLabel" for="viewOld">View Old Entries <i class="fa fa-lg fa-eye"></i><input type="checkbox" id="viewOld"></label>',
                    // text: 'View Old <i class="fa fa-lg fa-eye" id="viewOld"></i>',
                    action: function() {
                        $("#viewOld").click();
                        var show = $("#viewOld")[0].checked;
                        console.log(show);
                        var eye = $('label[for="viewOld"] i');
                        if (show) {
                            table.columns(6).search('').draw();
                            eye.addClass("fa-eye");
                            eye.removeClass("fa-eye-slash");
                        } else {
                            table.columns(6).search('isLatest').draw();
                            eye.addClass("fa-eye-slash");
                            eye.removeClass("fa-eye");
                        }
                    },
                    className: 'table-btns view-btn'
                }, {
                    text: 'Print <i class="fa fa-lg fa-print"></i>',
                    extend: 'print',
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4, 5, 6, 7]
                    },
                    className: 'table-btns print-btn'
                },
                {
                    text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                    extend: 'excel',
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4, 5, 6, 7]
                    },
                    className: 'table-btns excel-btn'
                }
            ],
        });
        table.button('2').trigger();
        table.button('3').trigger();

        $('[data-toggle="tooltip"]').tooltip();

        $(".btn-modal").on("click", function() {
            var info = $(this).data("training");
            $(".trainingId").val(info.id);
            $(".trainingCourse").text(info.title);
            $(".employeeName").text(info.employee.nameCode);
            populateCertificateList();
        });
        $(".btn-modal-renew").on("click", function() {
            populateRenewFields($(this).data("training"));
        });
        $("#btn_approve_training").on("click", function() {
            var id = $(this).closest("form").find(".trainingId").val();
            CustomFormFunctions.putPartialInfo("/training", id, { 'approvedBy': { 'id': userId } }, function() { window.location.reload() });
        });
        $("#form_training_upload_file").on("change update", function() {
            $("#form_training_upload_description").val(this.files[0].name);
        });
        $("#btn_add_training_docs").on("click", function() {
            var form = $("#form_training_upload");
            var data = new FormData(form[0]);
            var id = form.find('.trainingId').val();
            $.ajax({
                url: "/certificate?trainingId=" + id,
                type: "POST",
                enctype: 'multipart/form-data',
                data: data,
                processData: false,
                contentType: false,
                cache: false,
                timeout: 600000,
                success: function(data) {
                    $("#form_training_upload_file, #form_training_upload_description").val("");
                    populateCertificateList();
                },
                error: function(e) {
                    console.log(e.responseJSON);
                }
            });
        });
        $("#btn_remove_training").on("click", function() {
            var id = $(this).closest("form").find(".trainingId").val();
            $.ajax({
                'url': "/training/" + id,
                'type': 'DELETE',
                'success': function() { window.location.reload() },
                'error': function(a, b, c) {
                    console.log(a.responseJSON);
                }
            });
        });
        $("#btn_renew_training").on("click", function() {
            var data = {
                'employee': {
                    'id': $("#form_training_renew [name='employee.id']").val(),
                },
                'trainingCourseId': $("#form_training_renew [name='trainingCourseId']").val(),
                'validUntil': CustomFormFunctions.formatDate("#form_training_renew [name='validUntil']"),
                'dateOfTraining': CustomFormFunctions.formatDate("#form_training_renew [name='dateOfTraining']"),
            }
            console.log(JSON.stringify(data));
            $.ajax({
                'url': '/training',
                'type': 'POST',
                'contentType': "application/json",
                'data': JSON.stringify(data),
                'success': function() {
                    window.location.reload();
                },
                'error': function(a, b, c) {
                    console.log(a.responseJSON);
                }
            });
        });
    }

    $("#form_training_renew [name='dateOfTraining']").change(function() {
        var date1 = CustomFormFunctions.getDateFrom(this.value);
        var date2 = new Date(date1);
        var yearsValid = $("#form_training_renew [name='yearsValid']").val();
        date2.setFullYear(parseInt(date1.getFullYear()) + parseInt(yearsValid));
        var date2str = CustomFormFunctions.formatDate(date2, "bootstrap");
        $("#form_training_renew [name='validUntil']").val(date2str);
    });

});

function populateCertificateList() {
    console.log("PopulatingList");
    $.ajax({
        url: "/training/" + $(".trainingId").val(),
        type: "GET",
        success: function(data) {
            var cert = data.certificates;
            var list = cert.map(function(v) {
                var previewLink = "<a target='_blank' href='/certificate/" + v.documentId + "'>" + v.description + "</a>";
                var deleteLink = "<a href='#' onclick='showDeleteCertificate(" + v.documentId + ")' class='small text-danger'>Remove</a>"
                var confirmDeleteLink = "<a href='#' id='delete_certificate_" + v.documentId + "' onclick='deleteCertificate(" + v.documentId + ")' class='hide small text-danger'>Are you sure?  You can't get the file back once deleted.</a>"
                return deleteLink + " " + confirmDeleteLink + " " + previewLink;
            });
            $("#certificate_list").html(list.join("<br>"));
            for (var i in cert) {
                var id = cert[i].id;
            }
        },
        error: function(e) {
            console.log(e.responseJSON);
        }
    });
}

function showDeleteCertificate(id) {
    console.log(id);
    $("#delete_certificate_" + id).show();
}

function deleteCertificate(id) {
    $.ajax({
        url: "/certificate/" + id,
        type: "DELETE",
        success: populateCertificateList
    });
}

function populateRenewFields(training) {
    var courseId = training.trainingCourseId;
    $.ajax({
        url: "/trainingCourse/" + courseId,
        type: "GET",
        success: function(course) {
            var form = $("#form_training_renew");
            form.find(".category").text(course.category);
            form.find(".description").text(course.description);
            form.find("[name='employee.id']").val(training.employee.id);
            form.find("[name='trainingCourseId']").val(courseId);
            var date1 = new Date();
            var date2 = new Date();
            var yearsValid = (true || employee.isLeader) ? course.defaultYearsLeader : course.defaultYears;
            date2.setFullYear(date1.getFullYear() + yearsValid);
            form.find("[name='yearsValid']").val(yearsValid);
            form.find("[name='dateOfTraining']").val(CustomFormFunctions.formatDate(date1, "bootstrap"));
            form.find("[name='validUntil']").val(CustomFormFunctions.formatDate(date2, "bootstrap"));
        }
    });
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