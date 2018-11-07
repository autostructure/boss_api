var fakeData = [
    {
        "dateOfAssessment": "2018-10-11T15:20:34.611Z",
        "employeeProfile": {
            "activityCode": {
                "code": "string",
                "name": "string"
            },
            "addressCity": "string",
            "addressState": "string",
            "addressZip": "string",
            "cellPhone": "string",
            "confidentialityAgreementDate": "2018-10-11T15:20:34.611Z",
            "dateOfBirth": "2018-10-11T15:20:34.611Z",
            "driversLicense": {
                "expiration": "2018-10-11T15:20:34.611Z",
                "id": 0,
                "number": "string",
                "state": "string"
            },
            "dutyStation": "string",
            "emergencyContactCellPhone1": "string",
            "emergencyContactCellPhone2": "string",
            "emergencyContactCity1": "string",
            "emergencyContactCity2": "string",
            "emergencyContactFirstName1": "string",
            "emergencyContactFirstName2": "string",
            "emergencyContactHomePhone1": "string",
            "emergencyContactHomePhone2": "string",
            "emergencyContactLastName1": "string",
            "emergencyContactLastName2": "string",
            "emergencyContactRelationship1": "string",
            "emergencyContactRelationship2": "string",
            "emergencyContactState1": "string",
            "emergencyContactState2": "string",
            "emergencyContactStreetAddress1": "string",
            "emergencyContactStreetAddress2": "string",
            "emergencyContactWorkPhone1": "string",
            "emergencyContactWorkPhone2": "string",
            "emergencyContactZip1": "string",
            "emergencyContactZip2": "string",
            "employees": [
                {}
            ],
            "eyeColor": "string",
            "firstName": "Parker",
            "gender": "string",
            "grade": "string",
            "hairColor": "string",
            "homePhone": "string",
            "id": 0,
            "lastName": "Bidigare",
            "middleInitial": "string",
            "nameCode": "pbidigare",
            "otherIdentifyingFeatures": "string",
            "overtimeHourlyWage": 0,
            "pWPSalary": 0,
            "payPeriodsLeft": 0,
            "paymentPlan": "string",
            "personalEmail": "string",
            "preferredName": "string",
            "profilePicture": 0,
            "pwpsalary": 0,
            "race": "string",
            "regPayPerPayPeriod": 0,
            "roomNumber": "string",
            "series": "string",
            "stateAssigned": "string",
            "supervisor": {},
            "title": "string"
        },
        "id": 1,
        "title": "bears",
        "yearsValid": 24
    }
];

var debug = false;
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
    if (!debug) {
        var promiseDRAs = makeAjaxCall("/dra", "GET", null);
        var promiseEmployees = makeAjaxCall("/employeeProfile", "GET", null);
        var promiseDRACourses = makeAjaxCall("/draCourse", "GET", null);
        Promise.all([promiseDRAs, promiseDRACourses, promiseEmployees]).then(function(values) {
            var dras = values[0];
            var employees = {};
            var draCourses = {};
            var draCoursesT = values[1];
            var employeesT = values[2];
            for (k in employeesT) {
                employees[employeesT[k].id] = employeesT[k];
            }
            for (k in draCoursesT) {
                draCourses[draCoursesT[k].id] = draCoursesT[k];
            }
            for (k in dras) {
                var dra = dras[k];
                var employee = employees[dra.employee.id];
                dra.name = employee.lastName + ", " + employee.firstName;
                dra.course = draCourses[dra.deliberativeRiskAssessmentCourseId];
            }
            populateDataTable(dras);
        });
    } else {
        populateDataTable(fakeData);
    }

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
        console.log(jsonData);
        var table = $('#tblDras').DataTable({
            // 'order':[[4, "asc"]],
            'bPaginate': false,
            'data': jsonData,
            'dom': 'Bfti',
            'columns': [
                { 'data': "name" },
                { 'data': "course.title" },
                {
                    'data': "dateOfAssessment",
                    "render": function (data, type, row) {
                        if (type == 'sort') return data;
                        return CustomFormFunctions.formatDate(data, "bootstrap");
                    }
                },
                { 'data': "dateDue",
                    "render": function (data, type, row) {
                        if (type == 'sort') return data;
                        return CustomFormFunctions.formatDate(data, "bootstrap");
                    }
                },
                {
                    'data': null,
                    "render": function (data, type, row, meta) {
                        var btns = $(".dropdown1.template").clone();
                        btns.find(".deleteBtn, .renewBtn").attr('data-value', meta.row);
                        btns.removeClass("template");
                        return btns[0].outerHTML;
                    }
                }
                   
                    
                

            ],
            'buttons': [
                {
                    text: 'Print <i class="fa fa-lg fa-print"></i>',
                    extend: 'print',
                    exportOptions: {
                        columns: [0, 1, 2, 3]
                    },
                    className: 'table-btns print-btn'
                },
                {
                    text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                    extend: 'excel',
                    exportOptions: {
                        columns: [0, 1, 2, 3]
                    },
                    className: 'table-btns excel-btn'
                },
                {
                    text: 'Add <i class="fa fa-lg fa-plus"></i>',
                    action: function () {
                        window.location.href = '/addDraEmployee';
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
            ]
        });

        $('[data-toggle="tooltip"]').tooltip();
        var selected_row = '';
        var row = {};
        var course = {};

        $('.deleteBtn, .renewBtn').on('click', function () {
            selected_row = $(this).attr('data-value');
            row = jsonData[selected_row];
            course = row.course;
            $("span.employeeName").text(row.name);
            $("span.courseTitle").text(course.title);
            $("#btn_remove_DRA").attr("data-value", row.id);
            $("input[name='employee.id']").val(row.employee.id);
            $("input[name='deliberativeRiskAssessmentCourseId']").val(course.id);
            $("input[name='wiggleRoom']").val(course.wiggleRoom);
            $("input[name='completeBy']").val(CustomFormFunctions.formatDate(course.completeBy, 'bootstrap'));
            $("input[name='dateOfAssessment']").val(CustomFormFunctions.formatDate(row.dateDue, 'bootstrap')).trigger("change");
        });

        $("#btn_remove_DRA").on("click", function(){
            var id = $(this).attr('data-value');
            makeAjaxCall("dra/"+id, "DELETE", null).then(()=>{window.location.reload()});
        });
        $("#btn_renew_DRA").on("click", function(){
            var data = {
                "dateOfAssessment":CustomFormFunctions.formatDate($("input[name='dateOfAssessment']").val(),"ISO"),
                "dateDue":CustomFormFunctions.formatDate($("input[name='dateDue']").val(),"ISO"),
                "employee":{"id":$("input[name='employee.id']").val()},
                "deliberativeRiskAssessmentCourseId":$("input[name='deliberativeRiskAssessmentCourseId']").val(),
            }
            CustomFormFunctions.putPartialInfo("/dra", 0, data, ()=>{window.location.reload();});
        });

        $("#form_Dra_renew_dateOfAssessment").on("change click focusin", function() {
            var wiggleRoom = $("[name='wiggleRoom']").val();
            var completeBy = CustomFormFunctions.getDateFrom("[name='completeBy']");
            var assessmentDate = CustomFormFunctions.getDateFrom("[name='dateOfAssessment']");

            if (completeBy.getTime() == -68400000 || completeBy == null) { //31 Dec 1969
                var dateDue = new Date(assessmentDate);
                dateDue.setFullYear(assessmentDate.getFullYear() + 1);
                dateDue = CustomFormFunctions.formatDate(dateDue, "bootstrap");
                $("input[name=dateDue]").val(dateDue);
            } else {
                var maxDate = new Date(completeBy);
                maxDate.setFullYear(assessmentDate.getFullYear());
                if (maxDate < assessmentDate) {
                    maxDate.setFullYear(assessmentDate.getFullYear() + 1);
                }
                minDate = new Date(maxDate);
                var minDate = new Date(maxDate);
                minDate.setDate(maxDate.getDate() - wiggleRoom);
                if (minDate <= assessmentDate) {
                    maxDate.setFullYear(maxDate.getFullYear() + 1);
                }
                var dateDue = CustomFormFunctions.formatDate(maxDate, "bootstrap");
                $("input[name=dateDue]").val(dateDue);
            }
        });
    }

});






var fields = {
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
    "form_Dra_renew": [
        [
            {
                "fieldName": "dateOfAssessment",
                "title": "Assessment Date",
                "type": "input/date",
            },
            {
                "fieldName": "dateDue",
                "title": "Valid Until",
                "type": "input/date",
            },
        ]
    ],
}

CustomFormFunctions.addBootstrapFields(fields);