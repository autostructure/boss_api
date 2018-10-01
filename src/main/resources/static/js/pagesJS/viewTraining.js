var fakeData = [
    {"employeeId":47,"category":"blah","title":"blah","yearsValid":5,"dateOfTraining":"2018-09-26T14:03:16.183Z","approvedBy":null}
        
];
var training_config = {
    "dueWithinDays": 180, // 6 months
}
var userId = 3; // Temporary Spoofing

$(document).ready(function () {
    $("#firstDropDown").on("change", function(){
        var second = $("#secondDropDown");
        var oldVal = second.val();
        var goodOptions = second.find("option[data-filter='"+this.value+"']");
        second.find("option").hide();
        goodOptions.show();
        if (goodOptions.filter("[value='"+oldVal+"']").length == 0) {
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
                    for (k in trainings) {
                        var tr = trainings[k];
                        var course = trainingCourses[tr.trainingCourseId];
                        tr.category = course.category;
                        tr.title = course.title;
                    }
                    populateDataTable(trainings);
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

    function populateDataTable(jsonData) {
        console.log('populateDataTable');
        console.log(jsonData);
        var latestTraining = {};
        for (k in jsonData) {
            var v = jsonData[k];
            var key = v.employee.id+"_"+v.trainingCourseId;
            var otherId = latestTraining[key];
            if (!otherId || jsonData[otherId].dateOfTraining > v.dateOfTraining) {
                latestTraining[key] = k;
            }
        }
        for (key in latestTraining) {
            jsonData[latestTraining[key]].isLatest = true;
        }

       $('#tblTraining').DataTable({
            'bPaginate':false,
            'data': jsonData,
            'columns': [
                {'data': "employee.nameCode"},
                {'data': "category"},
                {'data': "title"},
                {'data': "dateOfTraining",
                    "render": function (data, type, row) {
                        if (type == 'sort') return data;
                        return CustomFormFunctions.formatDate(data, "bootstrap");
                    }
                },
                {'data': "dateOfTraining",
                    "render": function (data, type, row) {
                        var date = CustomFormFunctions.getDateFrom(data);
                        date.setFullYear(date.getFullYear() + row.yearsValid);
                        if (type == 'sort') return date.getTime();
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
                {'data': "id",
                    "render": function (data, type, row) {
                        var buttonList = $("#templateButtonList").clone().attr('id','');
                        buttonList.find("a").attr("data-training-id", data);
                        return buttonList.prop('outerHTML');
                    },
                    "orderable": false,
                },
            ],
            buttons: [
                {
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
                },
                {
                    text: 'Add <i class="fa fa-lg fa-plus"></i>',
                    action: function () {
                        $('#addModal').modal('show');
                    },
                    className: 'table-btns add-btn'
                },
                {
                    text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
                    action: function () {
                        window.location.reload();
                    },
                    className: 'table-btns refresh-btn'
                }
            ],

        });

        var selected_row = 0;
        var id_employee = 0;


        $(".btn-modal").on("click", function(){
            var id = $(this).data("training-id");
            $(".trainingId").val(id);
            $(".trainingCourse").text(jsonData[id].title);
            $(".employeeName").text(jsonData[id].employee.nameCode);
            populateCertificateList();
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
                'type':'Delete',
                'success':window.location.reload,
                'error':function(a,b,c){
                    console.log(a.responseJSON);
                }
            });
        });
        $("#btn_renew_training").on("click", function(){

        });
    }




});

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

