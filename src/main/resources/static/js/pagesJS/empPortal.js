var fakeDataTraining = [
    {"category":"blah","title":"blah","yearsValid":5,"dateOfTraining":"2018-09-26T14:03:16.183Z","approvedBy":null}
]
var training_config = {
    "dueWithinDays": 180, // 6 months
}

$(document).ready(function() {
    // $("#checkIn-tab").on("click",function(){location.hash = "#CheckIn"});
    $("#property-tab").on("click",function(){location.hash = "#Property"});
    $("#training-tab").on("click",function(){location.hash = "#Training"});
    $("#general-tab").on("click",function(){location.hash = "#Profile"});
    $("#emergency-tab").on("click",function(){location.hash = "#Emergency"});
    $("#identification-tab").on("click",function(){location.hash = "#Identification"});
    $(window).trigger('hashchange');

    var userId = 47 //// Temporary
    var employeeForms = $("#formEmployeeInfo, #formEmergencyInfo, #formIdentificationInfo");
    CustomFormFunctions.populateElements(employeeForms.find("input, select, textarea"), "employeeProfile", userId);
    CustomFormFunctions.setSneakySave(employeeForms.find("input, select, textarea"), "employeeProfile", userId);
    
    function updateProfilePicture() {
        $.ajax({
            'url': 'employeeProfile/' + userId,
            'type': 'GET',
            'success': function(json) {
                var photoId = json.profilePicture;
                $('.empPhoto').attr('src', photoId ? ("/profilePicture/" + photoId) : "/img/person.jpg" );
                if (photoId) {
                    $('.empPhoto').attr('src', "/profilePicture/" + photoId);
                } else {
                    $('.empPhoto').attr('src', "/img/person.jpg");
                }
            },
            'error':function(e) {
                console.log(e.responseJSON);
            }
        });
    }
    $("#formIdentificationInfo_employeePhoto").on("change update",function() {
        var form = this.closest('form');
        var data = new FormData(form);
        $.ajax({
            url: "/profilePicture/?employeeId=" + userId,
            type: "POST",
            enctype: 'multipart/form-data',
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (data) {
                $(".empPhoto").attr("src", data.fileDownloadUri);
            },
            error: function (e) {
                console.log(e.responseJSON);
            }
        });
    });
    updateProfilePicture();
    
    // Training //
    $.ajax({
        url: "/training?employeeId=" + userId,
        contentType: "application/json",
        dataType: 'json',
        cache: false,
        type: 'GET',
        timeout: 600000,
        success: function (trainings) {
            $.ajax({
                url: "/trainingCourse",
                contentType: "application/json",
                dataType: 'json',
                cache: false,
                type: 'GET',
                timeout: 600000,
                success: function (json) {
                    var trainingCourses = {};
                    for (k in json) {
                        trainingCourses[json[k].id] = json[k];
                    }
                    trainingCourses[-1] = {
                        'category': 'Uh Oh!',
                        'title': 'Invalid Course',
                        'description': 'This course has been removed.',
                    }
                    for (k in trainings) {
                        var tr = trainings[k];
                        if (!trainingCourses[tr.trainingCourseId]) {
                            tr.trainingCourseId = -1;
                        }
                        var course = trainingCourses[tr.trainingCourseId];
                        tr.category = course.category;
                        tr.title = course.title;
                        tr.description = course.description;
                    }
                    populateTrainingTable(trainings);
                },
                error: function (a, b, c) {
                    console.log(a.responseText);
                },
            });
        },
        error: function (a, b, c) {
            console.log(a.responseText);
        },
    });

    // DRAs //
    $.ajax({
        url: "/dra?employeeId=" + userId,
        contentType: "application/json",
        dataType: 'json',
        cache: false,
        type: 'GET',
        timeout: 600000,
        success: function(dras) { // trainings ~~ dras
            $.ajax({
                url: "/draCourse",
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
                    trainingCourses[-1] = {
                        'category': 'Uh Oh!',
                        'title': 'Invalid Course',
                        'description': 'This course has been removed.',
                    }
                    for (k in dras) {
                        var dra = dras[k];
                        if (!trainingCourses[dra.deliberativeRiskAssessmentCourseId]) {
                            dra.deliberativeRiskAssessmentCourseId = -1;
                        }
                        var course = trainingCourses[dra.deliberativeRiskAssessmentCourseId];
                        dra.category = course.category;
                        dra.title = course.title;
                        dra.description = course.description;
                        dra.dateOfTraining = dra.dateOfAssessment;
                    }
                    populateDRATable(dras);
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

    function populateTrainingTable(jsonData) {
        console.log('populateDataTable');
        console.log(jsonData);
        var latestTraining = {};
        for (k in jsonData) {
            var v = jsonData[k];
            var key = v.employee.id+"_"+v.trainingCourseId;
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
            //'scrollY': 250,
            'data': jsonData,
            'dom':'Bfti',
            'columns': [
                {'data': "employee.nameCode", "visible":false},
                {'data': "title",
                    'render':function(data, type, row) {
                        return "<span data-toggle='tooltip' data-placement='top' title='"+row.description+"'>"+data+"</span>";
                    }
                },
                {'data': "dateOfTraining",
                    "render": function (data, type, row) {
                        if (type == 'sort') return data;
                        return CustomFormFunctions.formatDate(data, "bootstrap");
                    }
                },
                {'data': "validUntil",
                    "render": function (data, type, row) {
                        var date = CustomFormFunctions.getDateFrom(data);
                        if (type != 'display') return date.getTime();
                        var one_day = 1000 * 60 * 60 * 24;
                        var dateStr = CustomFormFunctions.formatDate(date, "bootstrap");
                        var daysUntilDue = (date - new Date()) / one_day;
                        if (!row.isLatest) {
                            return "<span class='text-success'>Already Renewed</span>";
                        } else if (daysUntilDue < 1) {
                            return "<span class='bg-danger text-white'>"+dateStr+"</span><br>Overdue";
                        } else if (daysUntilDue < training_config.dueWithinDays) {
                            return "<span class='bg-warning'>"+dateStr+"</span><br>Up For Renewal";
                        } else {
                            return "<span>"+dateStr+"</span>";
                        }
                    }
                },
                {'data': "approvedBy.nameCode",
                    "render": function (data, type, row) {
                        if (!data) {
                            return "<span class='text-danger'>Unapproved</span>";
                        }
                        return data;
                    }
                },
                {'data': "isLatest",
                    "render": function (data, type, row) {
                        if (type == 'filter') {
                            return data ? "isLatest" : "";
                        }
                        var buttonList = $("#templateButtonList").clone().attr('id','');
                        buttonList.find("a").attr("data-training", JSON.stringify(row));
                        return buttonList.prop('outerHTML');
                    },
                    "orderable": false,
                },
            ],
            'buttons': [
                // {
                //     text: 'Print <i class="fa fa-lg fa-print"></i>',
                //     extend: 'print',
                //     exportOptions: {
                //         columns: [0, 1, 2, 3, 4, 5, 6, 7]
                //     },
                //     className: 'table-btns print-btn'
                // },
                // {
                //     text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                //     extend: 'excel',
                //     exportOptions: {
                //         columns: [0, 1, 2, 3, 4, 5, 6, 7]
                //     },
                //     className: 'table-btns excel-btn'
                // },
                {
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
                    text: '<label for="viewOld">View Old Entries <i class="fa fa-lg fa-eye"></i><input type="checkbox" id="viewOld"></label>',
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
                },
            ],
        });
        table.button('2').trigger();
        table.button('2').trigger();

        $('[data-toggle="tooltip"]').tooltip();

        $(".btn-modal").on("click", function() {
            var info = $(this).data("training");
            $(".trainingId").val(info.id);
            $(".trainingCourse").text(info.title);
            $(".employeeName").text(info.employee.nameCode);
            populateCertificateList();
        });
        $(".btn-modal-renew").on("click", function(){
            populateRenewFields($(this).data("training"));
        });
        $("#btn_approve_training").on("click", function(){
            var id = $(this).closest("form").find(".trainingId").val();
            CustomFormFunctions.putPartialInfo("/training", id, {'approvedBy':{'id':userId}}, function(){window.location.reload()});
        });
        $("#form_training_upload_file").on("change update", function() {
            $("#form_training_upload_description").val(this.files[0].name);
        });
        $("#btn_add_training_docs").on("click", function(){
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
                success: function (data) {
                    $("#form_training_upload_file, #form_training_upload_description").val("");
                    populateCertificateList();
                },
                error: function (e) {
                    console.log(e.responseJSON);
                }
            });
        });
        $("#btn_remove_training").on("click", function(){
            var id = $(this).closest("form").find(".trainingId").val();
            $.ajax({
                'url': "/training/" + id,
                'type':'DELETE',
                'success':function(){window.location.reload()},
                'error':function(a,b,c){
                    console.log(a.responseJSON);
                }
            });
        });
        $("#btn_renew_training").on("click", function(){
            var data = {
                'employee':{
                    'id':$("#form_training_renew [name='employee.id']").val(),
                },
                'trainingCourseId':$("#form_training_renew [name='trainingCourseId']").val(),
                'validUntil':CustomFormFunctions.formatDate("#form_training_renew [name='validUntil']"),
                'dateOfTraining':CustomFormFunctions.formatDate("#form_training_renew [name='dateOfTraining']"),
            }
            console.log(JSON.stringify(data));
            $.ajax({
                'url':'/training',
                'type':'POST',
                'contentType': "application/json",
                'data':JSON.stringify(data),
                'success':function(){
                    window.location.reload();
                },
                'error':function(a,b,c){
                    console.log(a.responseJSON);
                }
            });
        });
    }

    function populateDRATable(jsonData) {
        console.log('populateDataTable - DRA');
        console.log(jsonData);
        var latestTraining = {};
        for (k in jsonData) {
            var v = jsonData[k];
            var key = v.employee.id + "_" + v.deliberativeRiskAssessmentCourseId;
            var otherId = latestTraining[key];
            if (!otherId || jsonData[otherId].dateOfAssessment < v.dateOfAssessment) {
                latestTraining[key] = k;
            }
        }
        for (key in latestTraining) {
            jsonData[latestTraining[key]].isLatest = true;
        }

        var table = $('#tblDRA').DataTable({
            'order': [
                [3, "asc"]
            ],
            'bPaginate': false,
            //'scrollY': 250,
            'data': jsonData,
            'dom': 'Bfti',
            'columns': [
                { 'data': "employee.nameCode", "visible": false },
                {
                    'data': "title",
                    'render': function(data, type, row) {
                        return "<span data-toggle='tooltip' data-placement='top' title='" + row.description + "'>" + data + "</span>";
                    }
                },
                {
                    'data': "dateOfAssessment",
                    "render": function(data, type, row) {
                        if (type == 'sort') return data;
                        return CustomFormFunctions.formatDate(data, "bootstrap");
                    }
                },
                {
                    'data': "dateDue",
                    "render": function(data, type, row) {
                        var date = CustomFormFunctions.getDateFrom(data);
                        if (type != 'display') return date.getTime();
                        var one_day = 1000 * 60 * 60 * 24;
                        var dateStr = CustomFormFunctions.formatDate(date, "bootstrap");
                        var daysUntilDue = (date - new Date()) / one_day;
                        console.log(date);
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
                    'data': "isLatest",
                    "visible": false,
                    "render": function(data, type, row) {
                        return data ? "isLatest" : "";
                    },
                    "orderable": false,
                },
            ],
            'buttons': [
                // {
                //     text: 'Print <i class="fa fa-lg fa-print"></i>',
                //     extend: 'print',
                //     exportOptions: {
                //         columns: [0, 1, 2, 3, 4, 5, 6, 7]
                //     },
                //     className: 'table-btns print-btn'
                // },
                // {
                //     text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                //     extend: 'excel',
                //     exportOptions: {
                //         columns: [0, 1, 2, 3, 4, 5, 6, 7]
                //     },
                //     className: 'table-btns excel-btn'
                // },
                // {
                //     text: 'Add <i class="fa fa-lg fa-plus"></i>',
                //     action: function () {
                //         window.location.href = '/addTrainingEmployee';
                //     },
                //     className: 'table-btns add-btn'
                // },
                {
                    text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
                    action: function() {
                        window.location.reload();
                    },
                    className: 'table-btns refresh-btn'
                },
                {
                    text: '<label for="viewOld">View Old Entries <i class="fa fa-lg fa-eye"></i><input type="checkbox" id="viewOld"></label>',
                    action: function() {
                        $("#viewOld").click();
                        var show = $("#viewOld")[0].checked;
                        console.log(show);
                        var eye = $('label[for="viewOld"] i');
                        if (show) {
                            table.columns(5).search('').draw();
                            eye.addClass("fa-eye");
                            eye.removeClass("fa-eye-slash");
                        } else {
                            table.columns(5).search('isLatest').draw();
                            eye.addClass("fa-eye-slash");
                            eye.removeClass("fa-eye");
                        }
                    },
                    className: 'table-btns view-btn'
                },
            ],
        });
        table.button('1').trigger();
        table.button('1').trigger();

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
$(window).on('hashchange', function() {
    switch (location.hash) {
        case "#Inventory":
            $("#inventory-tab").trigger("click");
        break;
        case "#Training":
            $("#training-tab").trigger("click");
        break;
        case "#Profile":
            $("#general-tab").trigger("click");
        break;
        case "#Emergency":
            $("#emergency-tab").trigger("click");
        break;
        case "#Identification":
            $("#identification-tab").trigger("click");
        break;
        default:
        // case "#CheckIn":
        //     $("#checkIn-tab").trigger("click");
        // break;
    }
});
// Training //

function populateCertificateList() {
    console.log("PopulatingList");
    $.ajax({
        url: "/training/" + $(".trainingId").val(),
        type: "GET",
        success: function (data) {
            var cert = data.certificates;
            var list = cert.map(function(v){
                var previewLink = "<a target='_blank' href='/certificate/"+v.documentId+"'>"+v.description+"</a>";
                var deleteLink = "<a href='#' onclick='showDeleteCertificate("+v.documentId+")' class='small text-danger'>Remove</a>"
                var confirmDeleteLink = "<a href='#' id='delete_certificate_"+v.documentId+"' onclick='deleteCertificate("+v.documentId+")' class='hide small text-danger'>Are you sure?  You can't get the file back once deleted.</a>"
                return deleteLink + " " + confirmDeleteLink + " " + previewLink;
            });
            $("#certificate_list").html( list.join("<br>") );
            for (var i in cert) {
                var id = cert[i].id;
            }
        },
        error: function (e) {
            console.log(e.responseJSON);
        }
    });
}
function showDeleteCertificate(id) {
    console.log(id);
    $("#delete_certificate_"+id).show();
}
function deleteCertificate(id) {
    $.ajax({
        url:"/certificate/" + id,
        type:"DELETE",
        success: populateCertificateList
    });
}
function populateRenewFields(training) {
    var courseId = training.trainingCourseId;
    $.ajax({
        url:"/trainingCourse/"+courseId,
        type:"GET",
        success:function(course) {
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

// Bootstrap Field Writer //
var fields = {
    "formEmployeeInfo" : [
        { "custom":'<h4 class="title3">Employee Information</h4>' },
        [
            {
                "nested": [
                    {   "fieldName":"firstName",
                        "title":"First Name",
                        "type":"input/text",
                        "placeholder":"Jane",
                        "required":true,
                        "disabled":true,
                        "colspan":4,
                    },
                    {   "fieldName":"lastName",
                        "title":"Last Name",
                        "type":"input/text",
                        "required":true,
                        "placeholder":"Smith",
                        "disabled":true,
                        "colspan":4,                        
                    },
                    {   "fieldName":"nameCode",
                        "title":"Name Code",
                        "type":"input/text",
                        "required":true,
                        "placeholder":"JSmith",
                        "disabled":true,
                        "colspan":4,
                    },
                    {   "fieldName":"middleInitial",
                        "title":"Middle Initial",
                        "type":"input/text",
                        "placeholder":"Q",
                        "colspan":6
                    },
                    {   "fieldName":"preferredName",
                        "title":"Preferred Name",
                        "type":"input/text",
                        "placeholder":"Janey",
                        "colspan":6
                    },
                ],
            },
            {
                "custom":$("#colEmployeePhoto"),
            }
        ], // end row
        [
            {   "fieldName":"dutyStation",
                "title":"Duty Station",
                "type":"select/text",
                "selectFrom":{
                    "url":"/dutyStations"
                },
                "disabled":true,
            },
            {   "fieldName":"activityCode.code",
                "title":"Activity Code",
                "type":"select/text",
                "selectFrom":{
                    "url":"/activityCode",
                    "value":"code",
                    "label":"name",
                },
                //"disabled":true,
            },
        ],
        //{ "custom": $(".submitChangesTemplate").clone().removeClass("submitChangesTemplate").attr("hidden",false) },
    ],
    "formEmergencyInfo" : [
        {   "custom":'<h4 class="title3">Emergency Contact Information</h4>' },
        {   "custom":'<h4 class="title4">My Contact Information</h4>' },
        [ // Contact Info
            {   "fieldName":"homePhone",
                "title":"Home Phone",
                "type":"input/tel",
            },
            {   "fieldName":"cellPhone",
                "title":"Cell Phone",
                "type":"input/tel",
                "required":true
            },
            {   "fieldName":"personalEmail",
                "title":"Personal Email",
                "type":"input/email",
                "required":true
            },
        ], // end row
        [ // Address Info
            {   "fieldName":"addressStreet",
                "title":"Street Address",
                "type":"input/text",
                "required":true,
                "colspan":6,
                "disabled":true,
            },
            {   "fieldName":"addressStreet2",
                "title":"Street Address (Line 2)",
                "type":"input/text",
                "required":true,
                "colspan":6,
                "disabled":true,
            },
            {   "fieldName":"addressCity",
                "title":"City",
                "type":"input/text",
                "required":true,
            },
            {   "fieldName":"addressState",
                "title":"State",
                "type":"select/state",
                "required":true
            },
            {   "fieldName":"addressZip",
                "title":"Zip",
                "type":"input/zipCode",
                "required":true
            },
        ],
        {   "custom":'<h4 class="title4">First Contact</h4>' },
        [ // Name
            {   "fieldName":"emergencyContactFirstName1",
                "title":"First Name",
                "type":"input/text",
                "required":true
            },
            {   "fieldName":"emergencyContactLastName1",
                "title":"Last Name",
                "type":"input/text",
                "required":true
            },
        ], // end row
        [ // Address Info
            {   "fieldName":"emergencyContactStreetAddress1",
                "title":"Street Address",
                "type":"input/text",
                "required":true,
                "colspan":12,
            },
            {   "fieldName":"emergencyContactCity1",
                "title":"City",
                "type":"input/text",
                "required":true,
            },
            {   "fieldName":"emergencyContactState1",
                "title":"State",
                "type":"select/state",
                "required":true
            },
            {   "fieldName":"emergencyContactZip1",
                "title":"Zip",
                "type":"input/zipCode",
                "required":true
            },
        ], // end row
        [ // Phone Numbers and Relationship
            {   "fieldName":"emergencyContactHomePhone1",
                "title":"Home Phone",
                "type":"input/tel",
                "required":true,
                "colspan":6,
            },
            {   "fieldName":"emergencyContactCellPhone1",
                "title":"Cell Phone",
                "type":"input/tel",
                "required":true,
                "colspan":6,
            },
            {   "fieldName":"emergencyContactWorkPhone1",
                "title":"Work Phone",
                "type":"input/tel",
                "required":true,
                "colspan":6,
            },
            {   "fieldName":"emergencyContactRelationship1",
                "title":"Relationship",
                "type":"input/text",
                "required":true,
                "colspan":6,
            },
        ], // end row
        {   "custom":'<h4 class="title4">Second Contact</h4>' },
        [ // Name
            {   "fieldName":"emergencyContactFirstName2",
                "title":"First Name",
                "type":"input/text",
            },
            {   "fieldName":"emergencyContactLastName2",
                "title":"Last Name",
                "type":"input/text",
            },
        ], // end row
        [ // Address Info
            {   "fieldName":"emergencyContactStreetAddress2",
                "title":"Street Address",
                "type":"input/text",
                "colspan":12,
            },
            {   "fieldName":"emergencyContactCity2",
                "title":"City",
                "type":"input/text",
            },
            {   "fieldName":"emergencyContactState2",
                "title":"State",
                "type":"select/state",
            },
            {   "fieldName":"emergencyContactZip2",
                "title":"Zip",
                "type":"input/zipCode",
            },
        ], // end row
        [ // Phone Numbers and Relationship
            {   "fieldName":"emergencyContactHomePhone2",
                "title":"Home Phone",
                "type":"input/tel",
                "colspan":6,
            },
            {   "fieldName":"emergencyContactCellPhone2",
                "title":"Cell Phone",
                "type":"input/tel",
                "colspan":6,
            },
            {   "fieldName":"emergencyContactWorkPhone2",
                "title":"Work Phone",
                "type":"input/tel",
                "colspan":6,
            },
            {   "fieldName":"emergencyContactRelationship2",
                "title":"Relationship",
                "type":"input/text",
                "colspan":6,
            },
        ], // end row
        { "custom": $(".submitChangesTemplate").clone().removeClass("submitChangesTemplate").attr("hidden",false) },
    ],
    "formIdentificationInfo" : [
        [
            {   "fieldName":"eyeColor",
                "title":"Eye Color",
                "type":"input/text",
                "placeholder":"hazel",
            },
            {   "fieldName":"hairColor",
                "title":"Hair Color",
                "type":"input/text",
                "placeholder":"Auburn",
            },
            {   "fieldName":"heightFeet",
                "title":"Height<small>(Feet)</small>",
                "type":"input/number",
                "placeholder":"5",
                "min":2,
                "max":9,
                colspan:1,
            },
            {   "fieldName":"heightInches",
                "title":"Height<small>(Inches)</small>",
                "type":"input/number",
                "placeholder":"11",
                "min":'0',
                "max":11,
                colspan:1,
            },
            {   "fieldName":"weight",
                "title":"Weight (Pounds)",
                "type":"input/number",
                "placeholder":"160",
            },
        ],
        [
            {   "fieldName":"dateOfBirth",
                "title":"Date of Birth",
                "type":"input/date",
                "colspan":3,
            },
            {   "fieldName":"gender",
                "title":"Gender",
                "type":"select",
                "options":{
                    "male":"Male",
                    "female":"Female",
                    "other":"Other (explain below)",
                },
                "colspan":3,
            },
            {   "fieldName":"race",
                "title":"Race",
                "type":"select/text",
                "placeholder":"",
                "options":{
                    "Hispanic":"Hispanic/Latino",
                    "Native":"American Indian or Alaska Native",
                    "EastAsian":"East Asian",
                    "SouthAsian":"South Asian (Desi)",
                    "African":"Black or African American",
                    "Hawaiian":"Native Hawaiian or Other Pacific Islander",
                    "White":"White or Caucasian",
                    "Other":"Two or more races or other",
                }
            },
        ],
        [
            {   "custom": $("#colEmployeePhoto2")  },
            {   "fieldName":"otherIdentifyingFeatures",
                "title":"Other Identifying Features",
                "type":"textarea",
                "placeholder":"Dragon Tattoo on Left Shoulder\n\rBirthmark in the shape of Louisiana on Right Hand\n\r... Any obvious distinguishing features.",
            },
        ]
    ],
    "form_training_renew": [
        [
            {   "fieldName":"dateOfTraining",
                "title":"Training Completed On",
                "placeholder":"Date of Training",
                "type":"input/date",
                "colspan":6,
            },
            {   "fieldName":"validUntil",
                "title":"Valid Until",
                "placeholder":"Valid Until",
                "type":"input/date",
                "colspan":6,
            },
            {   "fieldName":"yearsValid",
                "hidden":true,
                "type":"input/number"
            },
        ]
    ],
}
CustomFormFunctions.addBootstrapFields(fields);