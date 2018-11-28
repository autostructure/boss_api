// TODO REFACTOR ALL CODE
//define(['jquery', 'ApiCall','datePicker'], function (j, api ,date) {



var api = 'http://localhost:8080';
$(document).ready(function () {


    //---------------------The reason I commented this out was it sometimes causes an error with datepicker funtion-----------------------------------------
    // setting up datepickers to current date
    try {
        $("#dateentered, #tdateentered, #vdateentered, #odateentered").datepicker('setDate', new Date().toDateString());
        $("#datemod, #tdatemod, #vdatemod, #odatemod").datepicker('setDate', new Date().toDateString());
        $("#dateob, #tdateob, #vdateob, #odateob").datepicker('setDate', new Date().toLocaleDateString());
    } catch (e) {
        console.log("error - " + e);
    }

    // showing expense on sidenav
    $('#expenseSub').addClass('show');
    $('#expenseSub > li:nth-child(1) > a').addClass('highlight');

    getJobCodeApiCall(getJobCodeSuccess, getJobCodeError, "2017");
    getActivityCodeApiCall(getActivityCodeSuccess, getActivityCodeError);
    getExpenseCodeApiCall(null, getExpenseSuccess, getExpenseError);
    getbudgetObjectCodeApiCall(getBudgetObjectCodeSuccess, getBudgetObjectCodeError);
    getEmployeeProfileApiCall(getEmployeeProfileSuccess, getEmployeeProfileError);



    function getJobCodeSuccess(info) {

        try {

            $.each(info, function (value, key) {
                $('#jobcode, #tjobcode, #vjobcode, #ojobcode').append($("<option />").val(key.id).text(key.jobCode).attr("id", key.id));
            });
        } catch (e) {
            console.log(e);
        }
    }

    function getActivityCodeSuccess(info) {
        try {
            $.each(info, function (value, key) {
                $('#actcode, #tactcode, #vactcode, #oactcode').append($("<option />").text(key.name).val(key.code));
            });
        } catch (e) {
            console.log(e);
        }
    }

    function getExpenseSuccess(info) {
        try {

            $.each(info, function (value, key) {
                $('#expcode, #texpcode, #vexpcode, #oexpcode').append($("<option />").text(key.id + "-" + key.type).val(key.id));
            });
        } catch (e) {
            console.log(e);
        }
    }

    function getBudgetObjectCodeSuccess(info) {
        try {
            $.each(info, function (value, key) {
                $('#oboc').append($("<option />").text(key.name).val(key.id));
            });
        } catch (e) {
            console.log(e);
        }
    }

    function getEmployeeProfileSuccess(info) {
        try {
            $.each(info, function (value, key) {


                $('#namecode,#tnamecode,#vnamecode,#onamecode').append($("<option />").text(key.nameCode).val(key.id));
            });
        } catch (e) {
            console.log(e);
        }
    }

    function getJobCodeError(info) {
        console.log("error - " + info);
    }

    function getActivityCodeError(info) {
        console.log("error - " + info);
    }

    function getExpenseError(info) {
        console.log("error - " + info);
    }

    function getBudgetObjectCodeError(info) {
        console.log("error - " + info);
    }

    function getEmployeeProfileError(info) {
        console.log("error - " + info);
    }

});


// setting current year and giving a range of years for dropdown
$('#fy, #tfy, #vfy, #ofy').each(function () {
    var year = (new Date()).getFullYear();
    var current = year;
    year -= 3;
    for (var i = 0; i < 6; i++) {
        if ((year + i) === current)
            $(this).append('<option selected value="' + (year + i) + '">' + (year + i) + '</option>');
        else
            $(this).append('<option value="' + (year + i) + '">' + (year + i) + '</option>');
    }

});


// auto selecting the job codes unit and description based off job code selected
$('#jobcode').on('change', function () {
    var key = (this.value);
    $.get(api + '/boss/jobCode/' + key, function (data, status) {
        JSON.stringify(data);
        $('#jobcodedesc').val(data.description.replace(/\"/g, ""));
        if (data.description.length < 0) {
            $('#unitcode').val(data.overrideCode.replace(/\"/g, ""));
        }
    });
});
$('#tjobcode').on('change', function () {
    var key = (this.value);
    //debugger;
    $.get(api + '/boss/jobCode/' + key, function (data, status) {
        JSON.stringify(data);
        $('#tjobcodedesc').val(data.description.replace(/\"/g, ""));
        if (data.description.length < 0) {
            $('#tunitcode').val(data.overrideCode.replace(/\"/g, ""));
        }
    });
});
$('#vjobcode').on('change', function () {
    var key = (this.value);
    $.get(api + '/boss/jobCode/' + key, function (data, status) {
        JSON.stringify(data);
        $('#vjobcodedesc').val(data.description.replace(/\"/g, ""));
        if (data.description.length < 0) {
            $('#vunitcode').val(data.overrideCode.replace(/\"/g, ""));
        }
    });
});
$('#ojobcode').on('change', function () {
    var key = (this.value);
    $.get(api + '/boss/jobCode/' + key, function (data, status) {
        JSON.stringify(data);
        $('#ojobcodedesc').val(data.description.replace(/\"/g, ""));
        if (data.description.length < 0) {
            $('#ounitcode').val(data.overrideCode.replace(/\"/g, ""));
        }
    });
});



$("#addbtn").click(function () {
    // var absoluteunit = $("#unitcode").val();

    var jobcode = $("#jobcode").val();
    var desc = $("#jobcodedesc").val();
    var expcode = $("#expcode").val();
    var expfront = expcode.substring(0, 3);
    var expback = expcode.substr(3);
    var amount = $('#amount').val();
    var hours = $("#hours").val();
    var markup = "<tr><td id='tableExp'>" + expfront + "</td><td id='tableJobCode'>" + jobcode +
            "</td><td id='tableHours'>" + hours + "</td><td id='tableType'>" + expback + "</td><td id='amount'>" + "amount to be calc" + "</td>" +
            '<td> <div class="input-group date" data-provide="datepicker">' +
            '<input type="text" placeholder="Pick a date" id="tableDateVerified" class="form-control">' +
            '<div class="input-group-addon">' +
            '<span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>' +
            '</div>' +
            '</div></td></tr>';
    $("#timeTable tbody").append(markup);
});

$("#taddbtn").click(function () {
    // var absoluteunit = $("#unitcode").val();


    try {

        var jobcode = $("#tjobcode").val();
        var desc = $("#tjobcodedesc").val();
        var expcode = $("#texpcode").val();
        var expfront = expcode.substring(0, 3);
        var expback = expcode.substr(3);
        var amount = $('#tamount').val();
        var hours = $("#thours").val();
        var markup = "<tr><td id='ttableExp'>" + expfront + "</td><td id='ttableJobCode'>" + jobcode +
                "</td><td id='ttableType'>" + expback + "</td><td id='vamount'>" + amount + "</td>" +
                '<td> <div class="input-group date" data-provide="datepicker">' +
                '<input type="text" placeholder="Pick a date" id="tableDateVerified" class="form-control">' +
                '<div class="input-group-addon">' +
                '<span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>' +
                '</div>' +
                '</div></td></tr>';
        $("#travelTable tbody").append(markup);
    } catch (e) {
        console.log(e);

    }





});

$("#vaddbtn").click(function () {
    // var absoluteunit = $("#unitcode").val();

    var jobcode = $("#vjobcode").val();
    var desc = $("#vjobcodedesc").val();
    var expcode = $("#vexpcode").val();
    var expfront = expcode.substring(0, 3);
    var expback = expcode.substr(3);
    var amount = $('#vamount').val();
    var hours = $("#vhours").val();
    var markup = "<tr><td id='vtableExp'>" + expfront + "</td><td id='vtableJobCode'>" + jobcode +
            "</td><td id='vtableType'>" + expback + "</td><td id='vamount'>" + amount + "</td>" +
            '<td> <div class="input-group date" data-provide="datepicker">' +
            '<input type="text" placeholder="Pick a date" id="tableDateVerified" class="form-control">' +
            '<div class="input-group-addon">' +
            '<span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>' +
            '</div>' +
            '</div></td></tr>';
    $("#visaTable tbody").append(markup);





});

$("#oaddbtn").click(function () {
    // var absoluteunit = $("#unitcode").val();

    var jobcode = $("#ojobcode").val();
    var desc = $("#ojobcodedesc").val();
    var expcode = $("#oexpcode").val();
    var expfront = expcode.substring(0, 3);
    var expback = expcode.substr(3);
    var amount = $('#oamount').val();
    var hours = $("#ohours").val();
    var markup = "<tr><td id='otableExp'>" + expfront + "</td><td id='otableJobCode'>" + jobcode +
            "</td><td id='otableType'>" + expback + "</td><td id='oamount'>" + amount + "</td>" +
            '<td> <div class="input-group date" data-provide="datepicker">' +
            '<input type="text" placeholder="Pick a date" id="tableDateVerified" class="form-control">' +
            '<div class="input-group-addon">' +
            '<span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>' +
            '</div>' +
            '</div></td></tr>';
    $("#otherTable tbody").append(markup);





});

// $('#addbtn').on('click', function(){
//   var 
//   $('#timeTable').append(
//   '<tr>' +
//   '<td>' +
//       '<input type="text" id="tableExp" class="form-control" aria-label="description" value="01" aria-describedby="basic-addon1">' +
//   '</td>'+
//   '<td>'+
//       '<input type="text" id="tableJobCode" class="form-control" aria-label="description" value="FRF13818" aria-describedby="basic-addon1">'+
//   '</td>'+
//   '<td>'+
//       '<input type="text" id="tableHours" class="form-control" aria-label="description" value="20" aria-describedby="basic-addon1">'+
//   '</td>'+
//   '<td>'+
//       '<span id="tableJobCodeDesc" class="tableType">Base Hours</span>'+
//   '</td>'+
//   '<td>'+ 
//       '<input type="text" id="tableAmount" class="form-control"  aria-label="description" value="$11,234" aria-describedby="basic-addon1">'+
//   '</td>'+
//   '<td>'+
//       '<div class="input-group date" data-provide="datepicker">'+
//           '<input type="text" placeholder="Pick a date" id="tableDateVerified" class="form-control">'+
//           '<div class="input-group-addon">'+
//               '<span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>'+
//           '</div>'+
//       '</div>'+                                                                                
//   '</td>'+
// '</tr>'
// )
// });
$("#timeSubmit").click(function () {
    try {

        var fy = $("#fy").val();
        var dateEntered = $("#dateentered").val();
        var datemod = getCorrectDateFormat($("#datemod").val());
        var dateob = getCorrectDateFormat($("#dateob").val());
        var namecode = $("#namecode :selected").text();

        //$('#dropDownId :selected').text();
        var desc = $("#desc").val();
        var actcode = $("#actcode :selected").text();
        var boc = $("#boc :selected").text();

        var pc = $("#pc").text();
        var payperiod = $("#payperiod").val();
        var comphours = $("#comphours").val();
        var state = $("#state").val();
        var remarks = $("#remarks").val();
        var unitcode = $("#unitcode").val();
        var jobcode = $("#jobcode").val();
        var jobcodeDesc = $("#jobcodedesc").val();
        var expcode = $("#expcode :selected").text();
        var hours = $("#hours").val();

        var actcode_id = $("#actcode :selected").val();
        var budgetObjCode_id = $("#boc").val();
        var pc_id = $("#pc").val();
        var jobCode_id = $("#jobcode").val();



        var table_list = [];

        $('#timeTable tr').each(function () {
            var table_exp = $(this).find("#tableExp").html();
            var table_jobcode = $(this).find("#tableJobCode").html();
            var table_hours = $(this).find("#tableHours").html();
            var table_jobCodeDesc = $(this).find("#tableJobCodeDesc").html();
            var table_amount = $(this).find("#tableAmount").html();
            var table_dateVerified = $(this).find("#tableDateVerified").html();
            //debugger;
            try {
                if (table_jobcode != undefined) {
                    timeTableObj.tableExp = table_exp;
                    timeTableObj.tableJobCode = table_jobcode;
                    timeTableObj.tableAmount = table_amount;
                    timeTableObj.tJobCodeDesc = table_jobCodeDesc;
                    timeTableObj.tableDateVerified = table_dateVerified;
                    timeTableObj.tableHours = table_hours;

                    timeTableArr.push(timeTableObj);
                }
            } catch (e) {
                console.log(e);
            }
        });





        //expense Details
        timeDataV2.activityCode.name = actcode;
        timeDataV2.activityCode.code = actcode_id;

        $.ajax({
            type: "GET",
            url: api + "/boss/budgetObjectCode",
            success: function (json) {

                $.each(json, function (value, key) {

                    if (key.id == budgetObjCode_id) {

                        boc = key.name;
                    }
                });
            },
            async: false,
            error: function (xhr, status, error) {

                try {
                    console.log(xhr.responseText);
                    console.log(status);
                    console.log(error);
                } catch (e) {
                    console.log(e);
                }
            }

        });
        timeDataV2.budgetObjectCode.name = boc;
        timeDataV2.budgetObjectCode.id = parseInt(budgetObjCode_id);
        timeDataV2.category.description = "";
        timeDataV2.category.id = null;
        timeDataV2.createdAt = "";
        timeDataV2.createdBy = "";
        timeDataV2.description = desc;

        $.ajax({
            url: api + "/boss/employeeProfile?nameCode=" + namecode,
            type: "GET",
            success: function (key) {

                //var jObj = JSON.parse(json);
                // $.each(json, function (value, key) {

                // if (namecode == key.nameCode) {

                //alert("namecode - " + namecode + " && key.nameCode - " + key.nameCode);
                employeeProfileJSON.id = parseInt(key.id);

                if (key.driversLicense != undefined) {
                    employeeProfileJSON.driversLicense.expiration = getCorrectDateFormat(key.driversLicense.expiration);
                    employeeProfileJSON.driversLicense.id = parseInt(key.driversLicense.id);
                    employeeProfileJSON.driversLicense.number = key.driversLicense.number;
                    employeeProfileJSON.driversLicense.state = key.driversLicense.state;
                } else {
                    var date = new Date();
                    employeeProfileJSON.driversLicense.expiration = getCorrectDateFormat(date.getDate());
                    employeeProfileJSON.driversLicense.id = null;
                    employeeProfileJSON.driversLicense.number = "";
                    employeeProfileJSON.driversLicense.state = "";

                }


                if (key.cellPhone != undefined) {
                    employeeProfileJSON.cellPhone = key.cellPhone;
                } else {
                    employeeProfileJSON.cellPhone = "";
                }

                if (key.dutyStation != undefined) {
                    employeeProfileJSON.dutyStation = key.dutyStation;
                } else {
                    employeeProfileJSON.dutyStation = "";
                }


                if (key.emergencyContactCellPhone1 != undefined) {
                    employeeProfileJSON.emergencyContactCellPhone1 = key.emergencyContactCellPhone1;
                } else {
                    employeeProfileJSON.emergencyContactCellPhone1 = "";
                }

                if (key.emergencyContactCellPhone2 != undefined) {
                    employeeProfileJSON.emergencyContactCellPhone2 = key.emergencyContactCellPhone2;
                } else {
                    employeeProfileJSON.emergencyContactCellPhone2 = "";
                }

                if (key.emergencyContactCity1 != undefined) {
                    employeeProfileJSON.emergencyContactCity1 = key.emergencyContactCity1;
                } else {
                    employeeProfileJSON.emergencyContactCity1 = "";
                }

                if (key.emergencyContactCity2 != undefined) {
                    employeeProfileJSON.emergencyContactCity2 = key.emergencyContactCity2;
                } else {
                    employeeProfileJSON.emergencyContactCity2 = "";
                }

                if (key.emergencyContactFirstName1 != undefined) {
                    employeeProfileJSON.emergencyContactFirstName1 = key.emergencyContactFirstName1;
                } else {
                    employeeProfileJSON.emergencyContactFirstName1 = "";
                }

                if (key.emergencyContactFirstName2 != undefined) {
                    employeeProfileJSON.emergencyContactFirstName2 = key.emergencyContactFirstName2;
                } else {
                    employeeProfileJSON.emergencyContactFirstName2 = "";
                }

                if (key.emergencyContactHomePhone1 != undefined) {
                    employeeProfileJSON.emergencyContactHomePhone1 = key.emergencyContactHomePhone1;
                } else {
                    employeeProfileJSON.emergencyContactHomePhone1 = "";
                }

                if (key.emergencyContactHomePhone2 != undefined) {
                    employeeProfileJSON.emergencyContactHomePhone2 = key.emergencyContactHomePhone2;

                } else {
                    employeeProfileJSON.emergencyContactHomePhone2 = "";//key.emergencyContactHomePhone2;
                }

                if (key.emergencyContactLastName1 != undefined) {
                    employeeProfileJSON.emergencyContactLastName1 = key.emergencyContactLastName1;

                } else {
                    employeeProfileJSON.emergencyContactLastName1 = "";//key.emergencyContactLastName1;

                }

                if (key.emergencyContactLastName2 != undefined) {
                    employeeProfileJSON.emergencyContactLastName2 = key.emergencyContactLastName2;
                } else {
                    employeeProfileJSON.emergencyContactLastName2 = "";//key.emergencyContactLastName2;
                }

                if (key.emergencyContactRelationship1 != undefined) {
                    employeeProfileJSON.emergencyContactRelationship1 = key.emergencyContactRelationship1;
                } else {
                    employeeProfileJSON.emergencyContactRelationship1 = "";//key.emergencyContactRelationship1;
                }


                if (key.emergencyContactRelationship2 != undefined) {
                    employeeProfileJSON.emergencyContactRelationship2 = key.emergencyContactRelationship2;

                } else {
                    employeeProfileJSON.emergencyContactRelationship2 = "";//key.emergencyContactRelationship2;
                }

                if (key.emergencyContactState1 != undefined) {
                    employeeProfileJSON.emergencyContactState1 = key.emergencyContactState1;
                } else {
                    employeeProfileJSON.emergencyContactState1 = "";//key.emergencyContactState1;
                }

                if (key.emergencyContactState2 != undefined) {
                    employeeProfileJSON.emergencyContactState2 = key.emergencyContactState2;
                } else {
                    employeeProfileJSON.emergencyContactState2 = "test";//key.emergencyContactState2;
                }

                if (key.emergencyContactStreetAddress1 != undefined) {
                    employeeProfileJSON.emergencyContactStreetAddress1 = key.emergencyContactStreetAddress1;
                } else {
                    employeeProfileJSON.emergencyContactStreetAddress1 = "";//key.emergencyContactStreetAddress1;
                }

                if (key.emergencyContactStreetAddress2 != undefined) {
                    employeeProfileJSON.emergencyContactStreetAddress2 = key.emergencyContactStreetAddress2;
                } else {
                    employeeProfileJSON.emergencyContactStreetAddress2 = "";//key.emergencyContactStreetAddress2;
                }

                if (key.emergencyContactWorkPhone1 != undefined) {
                    employeeProfileJSON.emergencyContactWorkPhone1 = key.emergencyContactWorkPhone1;
                } else {
                    employeeProfileJSON.emergencyContactWorkPhone1 = "";//key.emergencyContactWorkPhone1;
                }

                if (key.emergencyContactWorkPhone2 != undefined) {
                    employeeProfileJSON.emergencyContactWorkPhone2 = key.emergencyContactWorkPhone2;
                } else {
                    employeeProfileJSON.emergencyContactWorkPhone2 = "";//key.emergencyContactWorkPhone2;
                }

                if (key.emergencyContactZip1 != undefined) {
                    employeeProfileJSON.emergencyContactZip1 = key.emergencyContactZip1;
                } else {
                    employeeProfileJSON.emergencyContactZip1 = "";//key.emergencyContactZip1;
                }

                if (key.emergencyContactZip2 != undefined) {
                    employeeProfileJSON.emergencyContactZip2 = key.emergencyContactZip2;
                } else {
                    employeeProfileJSON.emergencyContactZip2 = "";//key.emergencyContactZip2;
                }


                if (key.homePhone != undefined) {
                    employeeProfileJSON.homePhone = key.homePhone;
                } else {
                    employeeProfileJSON.homePhone = "";//key.homePhone;
                }

                if (key.overtimeHourlyWage != undefined) {
                    employeeProfileJSON.overtimeHourlyWage = key.overtimeHourlyWage;
                } else {
                    employeeProfileJSON.overtimeHourlyWage = "";//key.overtimeHourlyWage;
                }

                if (key.personalEmail != undefined) {
                    employeeProfileJSON.personalEmail = key.personalEmail;
                } else {
                    employeeProfileJSON.personalEmail = "";//key.personalEmail;
                }

                if (key.roomNumber != undefined) {
                    employeeProfileJSON.roomNumber = key.roomNumber;
                } else {
                    employeeProfileJSON.roomNumber = "";//key.roomNumber;
                }

                if (key.training != undefined) {
                    //employeeProfileJSON.training.push(JSONtraining);//key.training;
                } else {
                    $.each(key.training, function (key, value) {
                        if (value.dateOfTraining != undefined) {
                            JSONtraining.dateOfTraining = getCorrectDateFormat(value.dateOfTraining);
                        } else {
                            var date = new Date();
                            JSONtraining.dateOfTraining = getCorrectDateFormat(date.getDate);
                        }

                        if (value.title != undefined) {
                            JSONtraining.title = value.title;
                        } else {
                            JSONtraining.title = "";
                        }

                        if (value.hours != undefined) {
                            JSONtraining.hours = parseInt(value.hours);
                        } else {
                            JSONtraining.hours = 0;
                        }

                        if (value.id != undefined) {
                            JSONtraining.id = parseInt(value.id);
                        } else {
                            JSONtraining.id = 0;
                        }

                        if (value.location) {
                            JSONtraining.location - value.location;
                        } else {
                            JSONtraining.location = "";
                        }

                        if (value.presenter != undefined) {
                            JSONtraining.presenter = value.presenter;
                        } else {
                            JSONtraining.presenter = "";
                        }

                        if (value.title != undefined) {
                            JSONtraining.title = value.title;
                        } else {
                            JSONtraining.title = "";
                        }

                        if (value.yearsValid != undefined) {
                            JSONtraining.yearsValid = parseInt(value.yearsValid);
                        } else {
                            JSONtraining.yearsValid = 0;
                        }


                    });
                }

                employeeProfileJSON.firstName = key.firstName;//emplyeeProfile.firstName;
                employeeProfileJSON.lastName = key.lastName;//employeeProfile.lastName;
                employeeProfileJSON.nameCode = namecode;
                employeeProfileJSON.activityCode.name = actcode;
                employeeProfileJSON.activityCode.code = actcode_id;
                employeeProfileJSON.title = key.title;//employeeProfile.title;

                if (key.stateAssigned != undefined) {
                    employeeProfileJSON.stateAssigned = key.stateAssigned;
                } else {
                    employeeProfileJSON.stateAssigned = "";
                }


                timeDataV2.employeeProfile = employeeProfileJSON;





            },
            async: false,
            error: function (xhr, status, error) {

                try {
                    console.log(xhr.responseText);
                    console.log(status);
                    console.log(error);
                } catch (e) {
                    console.log(e);
                }
            }
        });

        if (timeTableArr.length > 0) {
            $.each(timeTableArr, function (index, value) {

                if (value.ttableAmount != null) {
                    expenseDetailsElement.amount = value.ttableAmount;
                } else {
                    expenseDetailsElement.amount = 0;
                }

                //need to figure out why can't set date on webpage
                if (value.tableDateVerified != null && value.tableDateVerified != "") {
                    expenseDetailsElement.dateVerified = getCorrectDateFormat(value.tableDateVerified);
                } else {
                    //this needs to change
                    var date = new Date();
                    expenseDetailsElement.dateVerified = getCorrectDateFormat(date.getDate());
                }

                var exp_code = value.tableExp;
                var check = false;
                $.ajax({
                    url: api + "/boss/expenseCode",
                    type: "GET",
                    success: function (json) {

                        $.each(json, function (key, values) {

                            if (values.id == exp_code) {

                                expenseDetailsElement.expenseCode.type = values.type;
                                expenseDetailsElement.expenseCode.id = parseInt(values.id);
                                check = true;
                            }
                        });
                    },
                    async: false,
                    error: function (xhr, status, error) {
                        console.log(error);
                    }
                });
                if (check == false) {
                    expenseDetailsElement.expenseCode.type = "";
                    expenseDetailsElement.expenseCode.id = null;
                }






                expenseDetailsElement.hours = parseInt(value.tableHours);



                $.ajax({
                    url: api + "/boss/jobCode/" + value.tableJobCode,
                    type: "GET",
                    success: function (json) {


                        expenseDetailsElement.jobCode.amount = json.amount;
                        expenseDetailsElement.jobCode.description = json.description;
                        expenseDetailsElement.jobCode.financialYear = json.financialYear;
                        expenseDetailsElement.jobCode.jobCode = json.jobCode;
                        expenseDetailsElement.jobCode.overrideCode = parseInt(json.overrideCode);
                        expenseDetailsElement.jobCode.id = json.id;




                    },
                    async: false,
                    error(xhr, status, error) {

                        try {
                            console.log(xhr.responseText);
                            console.log(xhr.statusText);
                            console.log(xhr.readyState);
                            console.log(status);
                            console.log(error);
                        } catch (e) {
                            console.log(e);
                        }
                    }

                });



                expenseDetailsElement.type = "";
                expenseDetailsElement.verified = true;
                expenseDetailsElement.id = null;

                timeDataV2.expenseDetails.push(expenseDetailsElement);
            });
        }
        timeDataV2.financialYear = parseInt(fy);
        timeDataV2.fromDate = "";
        timeDataV2.lastModifiedBy = "";
        timeDataV2.obligatedDate = getCorrectDateFormat(dateob);
        timeDataV2.overrideCode = "";
        timeDataV2.payPeriod = 0;

        $.ajax({
            url: api + "/boss/paymentCode",
            type: "GET",
            success: function (json) {

                $.each(json, function (value, key) {
                    if (key.code == pc_id) {

                        //alert("have matched pc_id: " + key.code);
                        timeDataV2.paymentCode.name = key.name;
                        timeDataV2.paymentCode.code = key.code;
                    }
                });
            },
            async: false,
            error(xhr, error, status) {
                console.log(xhr.responseText);
            }

        });

        timeDataV2.secCode = "";
        timeDataV2.state = state;
        timeDataV2.toDate = "";
        timeDataV2.total = 0;
        timeDataV2.travelRemarks = "";
        timeDataV2.travelVoucherNumber = 0;
        timeDataV2.unitCode = unitcode;
        timeDataV2.updatedAt = getCorrectDateFormat(datemod);
        timeDataV2.id = null;



        //------------------
        //debugger;
        var j = JSON.stringify(timeDataV2);
        console.log(j);

        // debugger;
        $.ajax({
            url: api + "/boss/expense",
            data: j,
            type: "POST",
            contentType: "application/json",
            success(result, status, xhr) {
                console.log("post expense success!");
                $('#timeTable tbody').empty();
            },
            error(xhr, status, error) {

                try {

                    console.log("responseCode: " + xhr.responseText);
                    console.log("status text: " + xhr.statusText);
                    console.log(xhr.readyState);
                    console.log(status);
                    console.log(error);


                } catch (e) {
                    console.log(e);
                }
            },
            async: false
        });

        //postExpense(postExpenseSuccess, postExpenseRejected, j);
    } catch (e) {
        console.log("time tab - " + e);
        alert(e);
    }
});

$("#travelSubmit").click(function () {
    try {
        var fy = $("#tfy").val();
        var dateEntered = $("#tdateentered").val();
        var datemod = $("#tdatemod").val();
        var dateob = $("#tdateob").val();
        var namecode = $("#tnamecode :selected").text();
        var desc = $("#tdesc").val();
        var actcode = $("#tactcode :selected").text();
        var boc = $("#tboc :selected").text();
        var pc = $("#tpc").text();
        var state = $("#tstate").val();
        var stateAssigned = $("#tstateassigned").val();
        var remarks = $("#tremarks").val();
        var unitcode = $("#tunitcode").val();
        var jobcode = $("#tjobcode").val();
        var jobcodeDesc = $("#tjobcodedesc").val();
        var expcode = $("#texpcode :selected").text();
        var fromDate = $("#tfromdate").val();
        var todate = $("#ttodate").val();
        var pov = $("#tpov").val();
        var vocnumber = $("#tvocnumber").val();
        var amount = $("#tamount").val();

        var actcode_id = $("#tactcode :selected").val();
        var budgetObjCode_id = $("#tboc").val();
        var pc_id = $("#tpc").val();
        var jobCode_id = $("#tjobcode").val();




        var table_list = [];

        $('#travelTable tr').each(function () {
            var table_exp = $(this).find("#ttableExp").html();
            var table_jobcode = $(this).find("#ttableJobCode").html();
            var table_hours = $(this).find("#ttableHours").html();
            var table_jobCodeDesc = $(this).find("#ttableJobCodeDesc").html();
            var table_Amount = $(this).find("#ttableAmount").html();
            var table_dateVerified = $(this).find("#ttableDateVerified").html();



            try {
                if (table_jobcode != undefined) {
                    travelTableObj.ttableExp = table_exp;
                    travelTableObj.ttableJobCode = table_jobcode;
                    if (table_Amount != undefined) {
                        travelTableObj.ttableAmount = table_Amount;
                    } else {
                        travelTableObj.ttableAmount = 0;
                    }

                    travelTableObj.ttJobCodeDesc = table_jobCodeDesc;
                    travelTableObj.ttableDateVerified = table_dateVerified;

                    travelTableArr.push(travelTableObj);
                }
            } catch (e) {
                console.log(e);
            }
        });

        //expense Details
        timeDataV2.activityCode.name = actcode;
        timeDataV2.activityCode.code = actcode_id;
        $.ajax({
            type: "GET",
            url: api + "/boss/budgetObjectCode",
            success: function (json) {

                $.each(json, function (value, key) {

                    if (key.id == budgetObjCode_id) {

                        boc = key.name;
                    }
                });
            },
            async: false,
            error: function (xhr, status, error) {

                try {
                    console.log(xhr.responseText);
                    console.log(status);
                    console.log(error);
                } catch (e) {
                    console.log(e);
                }
            }

        });
        timeDataV2.budgetObjectCode.name = boc;
        timeDataV2.budgetObjectCode.id = parseInt(budgetObjCode_id);
        timeDataV2.category.description = "";
        timeDataV2.createdAt = "";
        timeDataV2.createdBy = "";
        timeDataV2.description = desc;
        //timeDataV2. = jobcode;

        $.ajax({
            url: api + "/boss/employeeProfile?nameCode=" + namecode,
            type: "GET",
            success: function (key) {

                //var jObj = JSON.parse(json);
                // $.each(json, function (value, key) {

                // if (namecode == key.nameCode) {

                //alert("namecode - " + namecode + " && key.nameCode - " + key.nameCode);
                employeeProfileJSON.id = parseInt(key.id);

                if (key.driversLicense != undefined) {
                    employeeProfileJSON.driversLicense.expiration = getCorrectDateFormat(key.driversLicense.expiration);
                    employeeProfileJSON.driversLicense.id = parseInt(key.driversLicense.id);
                    employeeProfileJSON.driversLicense.number = key.driversLicense.number;
                    employeeProfileJSON.driversLicense.state = key.driversLicense.state;
                } else {
                    var date = new Date();
                    employeeProfileJSON.driversLicense.expiration = getCorrectDateFormat(date.getDate());
                    employeeProfileJSON.driversLicense.id = null;
                    employeeProfileJSON.driversLicense.number = "";
                    employeeProfileJSON.driversLicense.state = "";

                }


                if (key.cellPhone != undefined) {
                    employeeProfileJSON.cellPhone = key.cellPhone;
                } else {
                    employeeProfileJSON.cellPhone = "";
                }

                if (key.dutyStation != undefined) {
                    employeeProfileJSON.dutyStation = key.dutyStation;
                } else {
                    employeeProfileJSON.dutyStation = "";
                }


                if (key.emergencyContactCellPhone1 != undefined) {
                    employeeProfileJSON.emergencyContactCellPhone1 = key.emergencyContactCellPhone1;
                } else {
                    employeeProfileJSON.emergencyContactCellPhone1 = "";
                }

                if (key.emergencyContactCellPhone2 != undefined) {
                    employeeProfileJSON.emergencyContactCellPhone2 = key.emergencyContactCellPhone2;
                } else {
                    employeeProfileJSON.emergencyContactCellPhone2 = "";
                }

                if (key.emergencyContactCity1 != undefined) {
                    employeeProfileJSON.emergencyContactCity1 = key.emergencyContactCity1;
                } else {
                    employeeProfileJSON.emergencyContactCity1 = "";
                }

                if (key.emergencyContactCity2 != undefined) {
                    employeeProfileJSON.emergencyContactCity2 = key.emergencyContactCity2;
                } else {
                    employeeProfileJSON.emergencyContactCity2 = "";
                }

                if (key.emergencyContactFirstName1 != undefined) {
                    employeeProfileJSON.emergencyContactFirstName1 = key.emergencyContactFirstName1;
                } else {
                    employeeProfileJSON.emergencyContactFirstName1 = "";
                }

                if (key.emergencyContactFirstName2 != undefined) {
                    employeeProfileJSON.emergencyContactFirstName2 = key.emergencyContactFirstName2;
                } else {
                    employeeProfileJSON.emergencyContactFirstName2 = "";
                }

                if (key.emergencyContactHomePhone1 != undefined) {
                    employeeProfileJSON.emergencyContactHomePhone1 = key.emergencyContactHomePhone1;
                } else {
                    employeeProfileJSON.emergencyContactHomePhone1 = "";
                }

                if (key.emergencyContactHomePhone2 != undefined) {
                    employeeProfileJSON.emergencyContactHomePhone2 = key.emergencyContactHomePhone2;

                } else {
                    employeeProfileJSON.emergencyContactHomePhone2 = "";//key.emergencyContactHomePhone2;
                }

                if (key.emergencyContactLastName1 != undefined) {
                    employeeProfileJSON.emergencyContactLastName1 = key.emergencyContactLastName1;

                } else {
                    employeeProfileJSON.emergencyContactLastName1 = "";//key.emergencyContactLastName1;

                }

                if (key.emergencyContactLastName2 != undefined) {
                    employeeProfileJSON.emergencyContactLastName2 = key.emergencyContactLastName2;
                } else {
                    employeeProfileJSON.emergencyContactLastName2 = "";//key.emergencyContactLastName2;
                }

                if (key.emergencyContactRelationship1 != undefined) {
                    employeeProfileJSON.emergencyContactRelationship1 = key.emergencyContactRelationship1;
                } else {
                    employeeProfileJSON.emergencyContactRelationship1 = "";//key.emergencyContactRelationship1;
                }


                if (key.emergencyContactRelationship2 != undefined) {
                    employeeProfileJSON.emergencyContactRelationship2 = key.emergencyContactRelationship2;

                } else {
                    employeeProfileJSON.emergencyContactRelationship2 = "";//key.emergencyContactRelationship2;
                }

                if (key.emergencyContactState1 != undefined) {
                    employeeProfileJSON.emergencyContactState1 = key.emergencyContactState1;
                } else {
                    employeeProfileJSON.emergencyContactState1 = "";//key.emergencyContactState1;
                }

                if (key.emergencyContactState2 != undefined) {
                    employeeProfileJSON.emergencyContactState2 = key.emergencyContactState2;
                } else {
                    employeeProfileJSON.emergencyContactState2 = "test";//key.emergencyContactState2;
                }

                if (key.emergencyContactStreetAddress1 != undefined) {
                    employeeProfileJSON.emergencyContactStreetAddress1 = key.emergencyContactStreetAddress1;
                } else {
                    employeeProfileJSON.emergencyContactStreetAddress1 = "";//key.emergencyContactStreetAddress1;
                }

                if (key.emergencyContactStreetAddress2 != undefined) {
                    employeeProfileJSON.emergencyContactStreetAddress2 = key.emergencyContactStreetAddress2;
                } else {
                    employeeProfileJSON.emergencyContactStreetAddress2 = "";//key.emergencyContactStreetAddress2;
                }

                if (key.emergencyContactWorkPhone1 != undefined) {
                    employeeProfileJSON.emergencyContactWorkPhone1 = key.emergencyContactWorkPhone1;
                } else {
                    employeeProfileJSON.emergencyContactWorkPhone1 = "";//key.emergencyContactWorkPhone1;
                }

                if (key.emergencyContactWorkPhone2 != undefined) {
                    employeeProfileJSON.emergencyContactWorkPhone2 = key.emergencyContactWorkPhone2;
                } else {
                    employeeProfileJSON.emergencyContactWorkPhone2 = "";//key.emergencyContactWorkPhone2;
                }

                if (key.emergencyContactZip1 != undefined) {
                    employeeProfileJSON.emergencyContactZip1 = key.emergencyContactZip1;
                } else {
                    employeeProfileJSON.emergencyContactZip1 = "";//key.emergencyContactZip1;
                }

                if (key.emergencyContactZip2 != undefined) {
                    employeeProfileJSON.emergencyContactZip2 = key.emergencyContactZip2;
                } else {
                    employeeProfileJSON.emergencyContactZip2 = "";//key.emergencyContactZip2;
                }


                if (key.homePhone != undefined) {
                    employeeProfileJSON.homePhone = key.homePhone;
                } else {
                    employeeProfileJSON.homePhone = "";//key.homePhone;
                }

                if (key.overtimeHourlyWage != undefined) {
                    employeeProfileJSON.overtimeHourlyWage = key.overtimeHourlyWage;
                } else {
                    employeeProfileJSON.overtimeHourlyWage = "";//key.overtimeHourlyWage;
                }

                if (key.personalEmail != undefined) {
                    employeeProfileJSON.personalEmail = key.personalEmail;
                } else {
                    employeeProfileJSON.personalEmail = "";//key.personalEmail;
                }

                if (key.roomNumber != undefined) {
                    employeeProfileJSON.roomNumber = key.roomNumber;
                } else {
                    employeeProfileJSON.roomNumber = "";//key.roomNumber;
                }

                if (key.training != undefined) {
                    //employeeProfileJSON.training.push(JSONtraining);//key.training;
                } else {
                    $.each(key.training, function (key, value) {
                        if (value.dateOfTraining != undefined) {
                            JSONtraining.dateOfTraining = getCorrectDateFormat(value.dateOfTraining);
                        } else {
                            var date = new Date();
                            JSONtraining.dateOfTraining = getCorrectDateFormat(date.getDate);
                        }

                        if (value.title != undefined) {
                            JSONtraining.title = value.title;
                        } else {
                            JSONtraining.title = "";
                        }

                        if (value.hours != undefined) {
                            JSONtraining.hours = parseInt(value.hours);
                        } else {
                            JSONtraining.hours = 0;
                        }

                        if (value.id != undefined) {
                            JSONtraining.id = parseInt(value.id);
                        } else {
                            JSONtraining.id = 0;
                        }

                        if (value.location) {
                            JSONtraining.location - value.location;
                        } else {
                            JSONtraining.location = "";
                        }

                        if (value.presenter != undefined) {
                            JSONtraining.presenter = value.presenter;
                        } else {
                            JSONtraining.presenter = "";
                        }

                        if (value.title != undefined) {
                            JSONtraining.title = value.title;
                        } else {
                            JSONtraining.title = "";
                        }

                        if (value.yearsValid != undefined) {
                            JSONtraining.yearsValid = parseInt(value.yearsValid);
                        } else {
                            JSONtraining.yearsValid = 0;
                        }


                    });
                }

                employeeProfileJSON.firstName = key.firstName;//emplyeeProfile.firstName;
                employeeProfileJSON.lastName = key.lastName;//employeeProfile.lastName;
                employeeProfileJSON.nameCode = namecode;
                employeeProfileJSON.activityCode.name = actcode;
                employeeProfileJSON.activityCode.code = actcode_id;
                employeeProfileJSON.title = key.title;//employeeProfile.title;

                if (key.stateAssigned != undefined) {
                    employeeProfileJSON.stateAssigned = key.stateAssigned;
                } else {
                    employeeProfileJSON.stateAssigned = "";
                }


                timeDataV2.employeeProfile = employeeProfileJSON;





            },
            async: false,
            error: function (xhr, status, error) {

                try {
                    console.log(xhr.responseText);
                    console.log(status);
                    console.log(error);
                } catch (e) {
                    console.log(e);
                }
            }
        });
        if (travelTableArr.length > 0) {
            $.each(travelTableArr, function (index, value) {

                expenseDetailsElement.amount = parseFloat(value.ttableAmount);
                if (value.ttableDateVerified != null && value.ttableDateVerified != "") {
                    expenseDetailsElement.dateVerified = getCorrectDateFormat(value.ttableDateVerified);
                } else {
                    //this needs to change
                    var date = new Date();
                    expenseDetailsElement.dateVerified = getCorrectDateFormat(date.getDate());
                }
                var exp_code = value.ttableExp;
                var check = false;
                $.ajax({
                    url: api + "/boss/expenseCode",
                    type: "GET",
                    success: function (json) {

                        $.each(json, function (key, values) {

                            if (values.id == exp_code) {

                                expenseDetailsElement.expenseCode.type = values.type;
                                expenseDetailsElement.expenseCode.id = parseInt(values.id);
                                check = true;
                            }
                        });
                    },
                    async: false,
                    error: function (xhr, status, error) {
                        console.log(error);
                    }
                });
                if (check == false) {
                    expenseDetailsElement.expenseCode.type = "";
                    expenseDetailsElement.expenseCode.id = null;
                }
                expenseDetailsElement.hours = 0;



                $.ajax({
                    url: api + "/boss/jobCode/" + value.ttableJobCode,
                    type: "GET",
                    success: function (json) {




                        expenseDetailsElement.jobCode.amount = parseFloat(json.amount);
                        expenseDetailsElement.jobCode.description = json.description;
                        expenseDetailsElement.jobCode.financialYear = parseInt(json.financialYear);
                        expenseDetailsElement.jobCode.jobCode = json.jobCode;
                        expenseDetailsElement.jobCode.overrideCode = json.overrideCode;
                        expenseDetailsElement.jobCode.id = parseInt(json.id);


                    },
                    async: false,
                    error(xhr, status, error) {

                        try {
                            console.log(xhr.responseText);
                            console.log(xhr.statusText);
                            console.log(xhr.readyState);
                            console.log(status);
                            console.log(error);

                        } catch (e) {
                            console.log(e);
                        }
                    }

                });



                expenseDetailsElement.type = "";
                expenseDetailsElement.verified = true;

                timeDataV2.expenseDetails.push(expenseDetailsElement);
            });
        }

        timeDataV2.financialYear = parseInt(fy);
        timeDataV2.fromDate = getCorrectDateFormat(fromDate);
        timeDataV2.toDate = getCorrectDateFormat(todate);
        timeDataV2.lastModifiedBy = "";
        timeDataV2.obligatedDate = getCorrectDateFormat(dateob);
        timeDataV2.overrideCode = "";
        timeDataV2.payPeriod = 0;
        //timeDataV2.stateAsigned = stateAssigned;

        $.ajax({
            url: api + "/boss/paymentCode",
            type: "GET",
            success: function (json) {

                $.each(json, function (value, key) {
                    if (key.code == pc_id) {

                        //alert("have matched pc_id: " + key.code);
                        timeDataV2.paymentCode.name = key.name;
                        timeDataV2.paymentCode.code = key.code;
                    }
                });
            },
            async: false,
            error(xhr, error, status) {

                console.log("response text: " + xhr.responseText);
            }

        });

        timeDataV2.secCode = "";
        timeDataV2.state = state;
        timeDataV2.total = 0;
        timeDataV2.travelRemarks = remarks;
        timeDataV2.travelVoucherNumber = parseInt(vocnumber);
        timeDataV2.unitCode = unitcode;
        timeDataV2.updatedAt = getCorrectDateFormat(datemod);



        //------------------
        //debugger;
        var j = JSON.stringify(timeDataV2);
        console.log(j);

        // debugger;
        $.ajax({
            url: api + "/boss/expense",
            data: j,
            type: "POST",
            contentType: "application/json",
            success(result, status, xhr) {
                console.log("post expense success!");
                $('#travelTable tbody').empty();
            },
            error(xhr, status, error) {
                //debugger;
                try {
                    console.log("response Text: " + xhr.responseText);
                    console.log(xhr.statusText);
                    console.log(xhr.readyState);
                    console.log(status);
                    console.log(error);
                    //debugger;

                } catch (e) {
                    console.log(e);
                }
            },
            async: false
        });

        //postExpense(postExpenseSuccess, postExpenseRejected, j);
    } catch (e) {
        console.log("travel tab - " + e);
    }
});

$("#visaSubmit").click(function () {
    try {
        var fy = $("#vfy").val();
        var dateEntered = $("#vdateentered").val();
        var datemod = $("#vdatemod").val();
        var dateob = $("#vdateob").val();
        var namecode = $("#vnamecode :selected").text();

        //$('#dropDownId :selected').text();
        var desc = $("#vdesc").val();
        var actcode = $("#vactcode :selected").text();
        var boc = $("#vboc :selected").text();
        var pc = $("#vpc :selected").text();
        var stateAssigned = $("#vstateassigned").val() //check spelling
        var remarks = $("#vremarks").val();
        var unitcode = $("#vunitcode").val();
        var jobcode = $("#vjobcode :selected").text();
        var jobcodeDesc = $("#vjobcodedesc").val();
        var expcode = $("#vexpcode :selected").text();
        var amount = $("#vamount").val();


        var actcode_id = $("#vactcode :selected").val();
        var budgetObjCode_id = $("#vboc").val();
        var pc_id = $("#vpc").val();
        var jobCode_id = $("#vjobcode").val();




        var table_list = [];

        $('#visaTable tr').each(function () {
            var table_exp = $(this).find("#vtableExp").html();
            var table_jobcode = $(this).find("#vtableJobCode").html();
            //var table_hours = $(this).find("#tableHours").html();
            var table_jobCodeDesc = $(this).find("#vtableJobCodeDesc").html();
            var table_Amount = $(this).find("#vtableAmount").html();
            var table_dateVerified = $(this).find("#vtableDateVerified").html();

            try {
                if (table_jobcode != undefined) {
                    visaTableObj.vtableExp = table_exp;
                    visaTableObj.vtableJobCode = table_jobcode;
                    if (table_Amount != undefined) {
                        visaTableObj.vtableAmount = parseInt(table_Amount);
                    } else {
                        visaTableObj.vtableAmount = 0;
                    }

                    visaTableObj.vtJobCodeDesc = table_jobCodeDesc;
                    visaTableObj.vtableDateVerified = table_dateVerified;

                    visaTableArr.push(visaTableObj);
                }
            } catch (e) {
                console.log(e);
            }
        });




        //expense Details
        timeDataV2.activityCode.name = actcode;
        timeDataV2.activityCode.code = actcode_id;
        timeDataV2.budgetObjectCode.name = boc;
        timeDataV2.budgetObjectCode.id = parseInt(budgetObjCode_id);
        timeDataV2.category.description = "";
        timeDataV2.createdAt = "";
        timeDataV2.createdBy = "";
        timeDataV2.description = desc;

        $.ajax({
            url: api + "/boss/employeeProfile?nameCode=" + namecode,
            type: "GET",
            success: function (key) {

                //var jObj = JSON.parse(json);
                // $.each(json, function (value, key) {

                // if (namecode == key.nameCode) {

                //alert("namecode - " + namecode + " && key.nameCode - " + key.nameCode);
                employeeProfileJSON.id = parseInt(key.id);

                if (key.driversLicense != undefined) {
                    employeeProfileJSON.driversLicense.expiration = getCorrectDateFormat(key.driversLicense.expiration);
                    employeeProfileJSON.driversLicense.id = parseInt(key.driversLicense.id);
                    employeeProfileJSON.driversLicense.number = key.driversLicense.number;
                    employeeProfileJSON.driversLicense.state = key.driversLicense.state;
                } else {
                    var date = new Date();
                    employeeProfileJSON.driversLicense.expiration = getCorrectDateFormat(date.getDate());
                    employeeProfileJSON.driversLicense.id = null;
                    employeeProfileJSON.driversLicense.number = "";
                    employeeProfileJSON.driversLicense.state = "";

                }


                if (key.cellPhone != undefined) {
                    employeeProfileJSON.cellPhone = key.cellPhone;
                } else {
                    employeeProfileJSON.cellPhone = "";
                }

                if (key.dutyStation != undefined) {
                    employeeProfileJSON.dutyStation = key.dutyStation;
                } else {
                    employeeProfileJSON.dutyStation = "";
                }


                if (key.emergencyContactCellPhone1 != undefined) {
                    employeeProfileJSON.emergencyContactCellPhone1 = key.emergencyContactCellPhone1;
                } else {
                    employeeProfileJSON.emergencyContactCellPhone1 = "";
                }

                if (key.emergencyContactCellPhone2 != undefined) {
                    employeeProfileJSON.emergencyContactCellPhone2 = key.emergencyContactCellPhone2;
                } else {
                    employeeProfileJSON.emergencyContactCellPhone2 = "";
                }

                if (key.emergencyContactCity1 != undefined) {
                    employeeProfileJSON.emergencyContactCity1 = key.emergencyContactCity1;
                } else {
                    employeeProfileJSON.emergencyContactCity1 = "";
                }

                if (key.emergencyContactCity2 != undefined) {
                    employeeProfileJSON.emergencyContactCity2 = key.emergencyContactCity2;
                } else {
                    employeeProfileJSON.emergencyContactCity2 = "";
                }

                if (key.emergencyContactFirstName1 != undefined) {
                    employeeProfileJSON.emergencyContactFirstName1 = key.emergencyContactFirstName1;
                } else {
                    employeeProfileJSON.emergencyContactFirstName1 = "";
                }

                if (key.emergencyContactFirstName2 != undefined) {
                    employeeProfileJSON.emergencyContactFirstName2 = key.emergencyContactFirstName2;
                } else {
                    employeeProfileJSON.emergencyContactFirstName2 = "";
                }

                if (key.emergencyContactHomePhone1 != undefined) {
                    employeeProfileJSON.emergencyContactHomePhone1 = key.emergencyContactHomePhone1;
                } else {
                    employeeProfileJSON.emergencyContactHomePhone1 = "";
                }

                if (key.emergencyContactHomePhone2 != undefined) {
                    employeeProfileJSON.emergencyContactHomePhone2 = key.emergencyContactHomePhone2;

                } else {
                    employeeProfileJSON.emergencyContactHomePhone2 = "";//key.emergencyContactHomePhone2;
                }

                if (key.emergencyContactLastName1 != undefined) {
                    employeeProfileJSON.emergencyContactLastName1 = key.emergencyContactLastName1;

                } else {
                    employeeProfileJSON.emergencyContactLastName1 = "";//key.emergencyContactLastName1;

                }

                if (key.emergencyContactLastName2 != undefined) {
                    employeeProfileJSON.emergencyContactLastName2 = key.emergencyContactLastName2;
                } else {
                    employeeProfileJSON.emergencyContactLastName2 = "";//key.emergencyContactLastName2;
                }

                if (key.emergencyContactRelationship1 != undefined) {
                    employeeProfileJSON.emergencyContactRelationship1 = key.emergencyContactRelationship1;
                } else {
                    employeeProfileJSON.emergencyContactRelationship1 = "";//key.emergencyContactRelationship1;
                }


                if (key.emergencyContactRelationship2 != undefined) {
                    employeeProfileJSON.emergencyContactRelationship2 = key.emergencyContactRelationship2;

                } else {
                    employeeProfileJSON.emergencyContactRelationship2 = "";//key.emergencyContactRelationship2;
                }

                if (key.emergencyContactState1 != undefined) {
                    employeeProfileJSON.emergencyContactState1 = key.emergencyContactState1;
                } else {
                    employeeProfileJSON.emergencyContactState1 = "";//key.emergencyContactState1;
                }

                if (key.emergencyContactState2 != undefined) {
                    employeeProfileJSON.emergencyContactState2 = key.emergencyContactState2;
                } else {
                    employeeProfileJSON.emergencyContactState2 = "";//key.emergencyContactState2;
                }

                if (key.emergencyContactStreetAddress1 != undefined) {
                    employeeProfileJSON.emergencyContactStreetAddress1 = key.emergencyContactStreetAddress1;
                } else {
                    employeeProfileJSON.emergencyContactStreetAddress1 = "";//key.emergencyContactStreetAddress1;
                }

                if (key.emergencyContactStreetAddress2 != undefined) {
                    employeeProfileJSON.emergencyContactStreetAddress2 = key.emergencyContactStreetAddress2;
                } else {
                    employeeProfileJSON.emergencyContactStreetAddress2 = "";//key.emergencyContactStreetAddress2;
                }

                if (key.emergencyContactWorkPhone1 != undefined) {
                    employeeProfileJSON.emergencyContactWorkPhone1 = key.emergencyContactWorkPhone1;
                } else {
                    employeeProfileJSON.emergencyContactWorkPhone1 = "";//key.emergencyContactWorkPhone1;
                }

                if (key.emergencyContactWorkPhone2 != undefined) {
                    employeeProfileJSON.emergencyContactWorkPhone2 = key.emergencyContactWorkPhone2;
                } else {
                    employeeProfileJSON.emergencyContactWorkPhone2 = "";//key.emergencyContactWorkPhone2;
                }

                if (key.emergencyContactZip1 != undefined) {
                    employeeProfileJSON.emergencyContactZip1 = key.emergencyContactZip1;
                } else {
                    employeeProfileJSON.emergencyContactZip1 = "";//key.emergencyContactZip1;
                }

                if (key.emergencyContactZip2 != undefined) {
                    employeeProfileJSON.emergencyContactZip2 = key.emergencyContactZip2;
                } else {
                    employeeProfileJSON.emergencyContactZip2 = "";//key.emergencyContactZip2;
                }


                if (key.homePhone != undefined) {
                    employeeProfileJSON.homePhone = key.homePhone;
                } else {
                    employeeProfileJSON.homePhone = "";//key.homePhone;
                }

                if (key.overtimeHourlyWage != undefined) {
                    employeeProfileJSON.overtimeHourlyWage = key.overtimeHourlyWage;
                } else {
                    employeeProfileJSON.overtimeHourlyWage = "";//key.overtimeHourlyWage;
                }

                if (key.personalEmail != undefined) {
                    employeeProfileJSON.personalEmail = key.personalEmail;
                } else {
                    employeeProfileJSON.personalEmail = "";//key.personalEmail;
                }

                if (key.roomNumber != undefined) {
                    employeeProfileJSON.roomNumber = key.roomNumber;
                } else {
                    employeeProfileJSON.roomNumber = "";//key.roomNumber;
                }

                if (key.training != undefined) {
                    //employeeProfileJSON.training.push(JSONtraining);//key.training;
                } else {
                    $.each(key.training, function (key, value) {
                        if (value.dateOfTraining != undefined) {
                            JSONtraining.dateOfTraining = getCorrectDateFormat(value.dateOfTraining);
                        } else {
                            var date = new Date();
                            JSONtraining.dateOfTraining = getCorrectDateFormat(date.getDate);
                        }

                        if (value.title != undefined) {
                            JSONtraining.title = value.title;
                        } else {
                            JSONtraining.title = "";
                        }

                        if (value.hours != undefined) {
                            JSONtraining.hours = parseInt(value.hours);
                        } else {
                            JSONtraining.hours = 0;
                        }

                        if (value.id != undefined) {
                            JSONtraining.id = parseInt(value.id);
                        } else {
                            JSONtraining.id = 0;
                        }

                        if (value.location) {
                            JSONtraining.location - value.location;
                        } else {
                            JSONtraining.location = "";
                        }

                        if (value.presenter != undefined) {
                            JSONtraining.presenter = value.presenter;
                        } else {
                            JSONtraining.presenter = "";
                        }

                        if (value.title != undefined) {
                            JSONtraining.title = value.title;
                        } else {
                            JSONtraining.title = "";
                        }

                        if (value.yearsValid != undefined) {
                            JSONtraining.yearsValid = parseInt(value.yearsValid);
                        } else {
                            JSONtraining.yearsValid = 0;
                        }


                    });
                }

                employeeProfileJSON.firstName = key.firstName;//emplyeeProfile.firstName;
                employeeProfileJSON.lastName = key.lastName;//employeeProfile.lastName;
                employeeProfileJSON.nameCode = namecode;
                employeeProfileJSON.activityCode.name = actcode;
                employeeProfileJSON.activityCode.code = actcode_id;
                employeeProfileJSON.title = key.title;//employeeProfile.title;

                if (key.stateAssigned != undefined) {
                    employeeProfileJSON.stateAssigned = key.stateAssigned;
                } else {
                    employeeProfileJSON.stateAssigned = "";
                }


                timeDataV2.employeeProfile = employeeProfileJSON;





            },
            async: false,
            error: function (xhr, status, error) {

                try {
                    console.log(xhr.responseText);
                    console.log(status);
                    console.log(error);
                } catch (e) {
                    console.log(e);
                }
            }
        });
        if (visaTableArr.length > 0) {
            $.each(visaTableArr, function (index, value) {
                expenseDetailsElement.amount = parseFloat(value.vtableAmount);
                if (value.vtableDateVerified != null && value.vtableDateVerified != "") {
                    expenseDetailsElement.dateVerified = getCorrectDateFormat(value.vtableDateVerified);
                } else {
                    //this needs to change
                    var date = new Date();
                    expenseDetailsElement.dateVerified = getCorrectDateFormat(date.getDate());
                }
                var exp_code = value.vtableExp;
                var check = false;
                $.ajax({
                    url: api + "/boss/expenseCode",
                    type: "GET",
                    success: function (json) {

                        $.each(json, function (key, values) {

                            if (values.id == exp_code) {

                                expenseDetailsElement.expenseCode.type = values.type;
                                expenseDetailsElement.expenseCode.id = parseInt(values.id);
                                check = true;
                            }
                        });
                    },
                    async: false,
                    error: function (xhr, status, error) {
                        console.log(error);
                    }
                });
                if (check == false) {
                    expenseDetailsElement.expenseCode.type = "";
                    expenseDetailsElement.expenseCode.id = null;
                }
                expenseDetailsElement.hours = 0;



                $.ajax({
                    url: api + "/boss/jobCode/" + value.vtableJobCode,
                    type: "GET",
                    success: function (json) {




                        expenseDetailsElement.jobCode.amount = parseInt(json.amount);
                        expenseDetailsElement.jobCode.description = json.description;
                        expenseDetailsElement.jobCode.financialYear = json.financialYear;
                        expenseDetailsElement.jobCode.jobCode = json.jobCode;
                        expenseDetailsElement.jobCode.overrideCode = json.overrideCode;
                        expenseDetailsElement.jobCode.id = parseInt(json.id);

                        /*expenseDetailsElement.JobCode.amount = json.amount;
                         expenseDetailsElement.JobCode.description = json.description;
                         expenseDetailsElement.JobCode.financialYear = json.financialYear;
                         expenseDetailsElement.JobCode.jobCode = json.jobCode;
                         expenseDetailsElement.JobCode.overrideCode = json.overrideCode;
                         expenseDetailsElement.JobCode.id = json.id;*/

                        //expenseDetailsElement.JobCode = jobCodeJSON;


                    },
                    async: false,
                    error(xhr, status, error) {

                        try {
                            console.log(xhr.responseText);
                            console.log(xhr.statusText);
                            console.log(xhr.readyState);
                            console.log(status);
                            console.log(error);
                        } catch (e) {
                            console.log(e);
                        }
                    }

                });



                expenseDetailsElement.type = value.vtableType;
                expenseDetailsElement.verified = true;

                timeDataV2.expenseDetails.push(expenseDetailsElement);
            });
        }
        timeDataV2.financialYear = parseInt(fy);
        timeDataV2.fromDate = "";
        timeDataV2.lastModifiedBy = "";
        timeDataV2.obligatedDate = getCorrectDateFormat(dateob);
        timeDataV2.overrideCode = "";
        timeDataV2.payPeriod = 0;

        $.ajax({
            url: api + "/boss/paymentCode",
            type: "GET",
            success: function (json) {

                $.each(json, function (value, key) {
                    if (key.code == pc_id) {

                        //alert("have matched pc_id: " + key.code);
                        timeDataV2.paymentCode.name = key.name;
                        timeDataV2.paymentCode.code = key.code;
                    }
                });
            },
            async: false,
            error(xhr, error, status) {
                console.log(xhr.responseText);
            }

        });

        timeDataV2.secCode = "";
        timeDataV2.state = "";
        timeDataV2.toDate = "";
        timeDataV2.total = 0;
        timeDataV2.travelRemarks = remarks;
        timeDataV2.travelVoucherNumber = 0;
        timeDataV2.unitCode = unitcode;
        timeDataV2.updatedAt = getCorrectDateFormat(datemod);



        //------------------
        //debugger;
        var j = JSON.stringify(timeDataV2);
        console.log(j);

        // debugger;
        $.ajax({
            url: api + "/boss/expense",
            data: j,
            type: "POST",
            contentType: "application/json",
            success(result, status, xhr) {
                console.log("post expense success!");
                $('#visaTable tbody').empty();
            },
            error(xhr, status, error) {
                //debugger;
                try {
                    console.log("responseCode: " + xhr.responseText);
                    console.log(xhr.statusText);
                    console.log(xhr.readyState);
                    console.log(status);
                    console.log(error);


                } catch (e) {
                    console.log(e);
                }
            },
            async: false
        });

        //postExpense(postExpenseSuccess, postExpenseRejected, j);
    } catch (e) {
        console.log("time tab - " + e);
    }
});


$("#otherSubmit").click(function () {
    try {
        var fy = $("#ofy").val();
        var dateEntered = $("#odateentered").val();
        var datemod = $("#odatemod").val();
        var dateob = $("#odateob").val();
        var namecode = $("#onamecode :selected").text();

        //$('#dropDownId :selected').text();
        var desc = $("#odesc").val();
        var actcode = $("#oactcode :selected").text();
        var boc = $("#oboc :selected").text();
        var pc = $("#opc").text();
        var remarks = $("#oremarks").val();
        var unitcode = $("#ounitcode").val();
        var stateassigned = $("#ostateassigned").val();
        var jobcode = $("#ojobcode").val();
        var jobcodeDesc = $("#ojobcodedesc").val();
        var expcode = $("#oexpcode :selected").text();
        var amount = $("#oamount").val();

        var actcode_id = $("#oactcode :selected").val();
        var budgetObjCode_id = $("#oboc").val();
        var pc_id = $("#opc").val();
        var jobCode_id = $("#ojobcode").val();




        var table_list = [];

        $('#otherTable tr').each(function () {
            var table_exp = $(this).find("#otableExp").html();
            var table_jobcode = $(this).find("#otableJobCode").html();
            //var table_hours = $(this).find("#tableHours").html();
            var table_jobCodeDesc = $(this).find("#otableJobCodeDesc").html();
            var table_Amount = $(this).find("#otableAmount").html();
            var table_dateVerified = $(this).find("o#tableDateVerified").html();

            try {
                if (table_jobcode != undefined) {
                    otherTableObj.otableExp = table_exp;
                    otherTableObj.otableJobCode = table_jobcode;
                    if (table_Amount != undefined) {
                        otherTableObj.otableAmount = parseInt(table_Amount);
                    } else {
                        otherTableObj.otableAmount = 0;
                    }
                    otherTableObj.otJobCodeDesc = table_jobCodeDesc;
                    otherTableObj.otableDateVerified = table_dateVerified;

                    otherTableArr.push(otherTableObj);
                }
            } catch (e) {
                console.log(e);
            }
        });

        //expense Details
        timeDataV2.activityCode.name = actcode;
        timeDataV2.activityCode.code = actcode_id;
        timeDataV2.budgetObjectCode.name = boc;
        timeDataV2.budgetObjectCode.id = parseInt(budgetObjCode_id);
        timeDataV2.category.description = "";
        timeDataV2.createdAt = "";
        timeDataV2.createdBy = "";
        timeDataV2.description = desc;

        $.ajax({
            url: api + "/boss/employeeProfile?nameCode=" + namecode,
            type: "GET",
            success: function (key) {

                //var jObj = JSON.parse(json);
                // $.each(json, function (value, key) {

                // if (namecode == key.nameCode) {

                //alert("namecode - " + namecode + " && key.nameCode - " + key.nameCode);
                employeeProfileJSON.id = parseInt(key.id);

                if (key.driversLicense != undefined) {
                    employeeProfileJSON.driversLicense.expiration = getCorrectDateFormat(key.driversLicense.expiration);
                    employeeProfileJSON.driversLicense.id = parseInt(key.driversLicense.id);
                    employeeProfileJSON.driversLicense.number = key.driversLicense.number;
                    employeeProfileJSON.driversLicense.state = key.driversLicense.state;
                } else {
                    var date = new Date();
                    employeeProfileJSON.driversLicense.expiration = getCorrectDateFormat(date.getDate());
                    employeeProfileJSON.driversLicense.id = null;
                    employeeProfileJSON.driversLicense.number = "";
                    employeeProfileJSON.driversLicense.state = "";

                }


                if (key.cellPhone != undefined) {
                    employeeProfileJSON.cellPhone = key.cellPhone;
                } else {
                    employeeProfileJSON.cellPhone = "";
                }

                if (key.dutyStation != undefined) {
                    employeeProfileJSON.dutyStation = key.dutyStation;
                } else {
                    employeeProfileJSON.dutyStation = "";
                }


                if (key.emergencyContactCellPhone1 != undefined) {
                    employeeProfileJSON.emergencyContactCellPhone1 = key.emergencyContactCellPhone1;
                } else {
                    employeeProfileJSON.emergencyContactCellPhone1 = "";
                }

                if (key.emergencyContactCellPhone2 != undefined) {
                    employeeProfileJSON.emergencyContactCellPhone2 = key.emergencyContactCellPhone2;
                } else {
                    employeeProfileJSON.emergencyContactCellPhone2 = "";
                }

                if (key.emergencyContactCity1 != undefined) {
                    employeeProfileJSON.emergencyContactCity1 = key.emergencyContactCity1;
                } else {
                    employeeProfileJSON.emergencyContactCity1 = "";
                }

                if (key.emergencyContactCity2 != undefined) {
                    employeeProfileJSON.emergencyContactCity2 = key.emergencyContactCity2;
                } else {
                    employeeProfileJSON.emergencyContactCity2 = "";
                }

                if (key.emergencyContactFirstName1 != undefined) {
                    employeeProfileJSON.emergencyContactFirstName1 = key.emergencyContactFirstName1;
                } else {
                    employeeProfileJSON.emergencyContactFirstName1 = "";
                }

                if (key.emergencyContactFirstName2 != undefined) {
                    employeeProfileJSON.emergencyContactFirstName2 = key.emergencyContactFirstName2;
                } else {
                    employeeProfileJSON.emergencyContactFirstName2 = "";
                }

                if (key.emergencyContactHomePhone1 != undefined) {
                    employeeProfileJSON.emergencyContactHomePhone1 = key.emergencyContactHomePhone1;
                } else {
                    employeeProfileJSON.emergencyContactHomePhone1 = "";
                }

                if (key.emergencyContactHomePhone2 != undefined) {
                    employeeProfileJSON.emergencyContactHomePhone2 = key.emergencyContactHomePhone2;

                } else {
                    employeeProfileJSON.emergencyContactHomePhone2 = "";//key.emergencyContactHomePhone2;
                }

                if (key.emergencyContactLastName1 != undefined) {
                    employeeProfileJSON.emergencyContactLastName1 = key.emergencyContactLastName1;

                } else {
                    employeeProfileJSON.emergencyContactLastName1 = "";//key.emergencyContactLastName1;

                }

                if (key.emergencyContactLastName2 != undefined) {
                    employeeProfileJSON.emergencyContactLastName2 = key.emergencyContactLastName2;
                } else {
                    employeeProfileJSON.emergencyContactLastName2 = "";//key.emergencyContactLastName2;
                }

                if (key.emergencyContactRelationship1 != undefined) {
                    employeeProfileJSON.emergencyContactRelationship1 = key.emergencyContactRelationship1;
                } else {
                    employeeProfileJSON.emergencyContactRelationship1 = "";//key.emergencyContactRelationship1;
                }


                if (key.emergencyContactRelationship2 != undefined) {
                    employeeProfileJSON.emergencyContactRelationship2 = key.emergencyContactRelationship2;

                } else {
                    employeeProfileJSON.emergencyContactRelationship2 = "";//key.emergencyContactRelationship2;
                }

                if (key.emergencyContactState1 != undefined) {
                    employeeProfileJSON.emergencyContactState1 = key.emergencyContactState1;
                } else {
                    employeeProfileJSON.emergencyContactState1 = "";//key.emergencyContactState1;
                }

                if (key.emergencyContactState2 != undefined) {
                    employeeProfileJSON.emergencyContactState2 = key.emergencyContactState2;
                } else {
                    employeeProfileJSON.emergencyContactState2 = "";//key.emergencyContactState2;
                }

                if (key.emergencyContactStreetAddress1 != undefined) {
                    employeeProfileJSON.emergencyContactStreetAddress1 = key.emergencyContactStreetAddress1;
                } else {
                    employeeProfileJSON.emergencyContactStreetAddress1 = "";//key.emergencyContactStreetAddress1;
                }

                if (key.emergencyContactStreetAddress2 != undefined) {
                    employeeProfileJSON.emergencyContactStreetAddress2 = key.emergencyContactStreetAddress2;
                } else {
                    employeeProfileJSON.emergencyContactStreetAddress2 = "";//key.emergencyContactStreetAddress2;
                }

                if (key.emergencyContactWorkPhone1 != undefined) {
                    employeeProfileJSON.emergencyContactWorkPhone1 = key.emergencyContactWorkPhone1;
                } else {
                    employeeProfileJSON.emergencyContactWorkPhone1 = "";//key.emergencyContactWorkPhone1;
                }

                if (key.emergencyContactWorkPhone2 != undefined) {
                    employeeProfileJSON.emergencyContactWorkPhone2 = key.emergencyContactWorkPhone2;
                } else {
                    employeeProfileJSON.emergencyContactWorkPhone2 = "";//key.emergencyContactWorkPhone2;
                }

                if (key.emergencyContactZip1 != undefined) {
                    employeeProfileJSON.emergencyContactZip1 = key.emergencyContactZip1;
                } else {
                    employeeProfileJSON.emergencyContactZip1 = "";//key.emergencyContactZip1;
                }

                if (key.emergencyContactZip2 != undefined) {
                    employeeProfileJSON.emergencyContactZip2 = key.emergencyContactZip2;
                } else {
                    employeeProfileJSON.emergencyContactZip2 = "";//key.emergencyContactZip2;
                }


                if (key.homePhone != undefined) {
                    employeeProfileJSON.homePhone = key.homePhone;
                } else {
                    employeeProfileJSON.homePhone = "";//key.homePhone;
                }

                if (key.overtimeHourlyWage != undefined) {
                    employeeProfileJSON.overtimeHourlyWage = key.overtimeHourlyWage;
                } else {
                    employeeProfileJSON.overtimeHourlyWage = "";//key.overtimeHourlyWage;
                }

                if (key.personalEmail != undefined) {
                    employeeProfileJSON.personalEmail = key.personalEmail;
                } else {
                    employeeProfileJSON.personalEmail = "";//key.personalEmail;
                }

                if (key.roomNumber != undefined) {
                    employeeProfileJSON.roomNumber = key.roomNumber;
                } else {
                    employeeProfileJSON.roomNumber = "";//key.roomNumber;
                }

                if (key.training != undefined) {
                    //employeeProfileJSON.training.push(JSONtraining);//key.training;
                } else {
                    $.each(key.training, function (key, value) {
                        if (value.dateOfTraining != undefined) {
                            JSONtraining.dateOfTraining = getCorrectDateFormat(value.dateOfTraining);
                        } else {
                            var date = new Date();
                            JSONtraining.dateOfTraining = getCorrectDateFormat(date.getDate);
                        }

                        if (value.title != undefined) {
                            JSONtraining.title = value.title;
                        } else {
                            JSONtraining.title = "";
                        }

                        if (value.hours != undefined) {
                            JSONtraining.hours = parseInt(value.hours);
                        } else {
                            JSONtraining.hours = 0;
                        }

                        if (value.id != undefined) {
                            JSONtraining.id = parseInt(value.id);
                        } else {
                            JSONtraining.id = 0;
                        }

                        if (value.location) {
                            JSONtraining.location - value.location;
                        } else {
                            JSONtraining.location = "";
                        }

                        if (value.presenter != undefined) {
                            JSONtraining.presenter = value.presenter;
                        } else {
                            JSONtraining.presenter = "";
                        }

                        if (value.title != undefined) {
                            JSONtraining.title = value.title;
                        } else {
                            JSONtraining.title = "";
                        }

                        if (value.yearsValid != undefined) {
                            JSONtraining.yearsValid = parseInt(value.yearsValid);
                        } else {
                            JSONtraining.yearsValid = 0;
                        }


                    });
                }

                employeeProfileJSON.firstName = key.firstName;//emplyeeProfile.firstName;
                employeeProfileJSON.lastName = key.lastName;//employeeProfile.lastName;
                employeeProfileJSON.nameCode = namecode;
                employeeProfileJSON.activityCode.name = actcode;
                employeeProfileJSON.activityCode.code = actcode_id;
                employeeProfileJSON.title = key.title;//employeeProfile.title;

                if (key.stateAssigned != undefined) {
                    employeeProfileJSON.stateAssigned = key.stateAssigned;
                } else {
                    employeeProfileJSON.stateAssigned = "";
                }


                timeDataV2.employeeProfile = employeeProfileJSON;





            },
            async: false,
            error: function (xhr, status, error) {

                try {
                    console.log(xhr.responseText);
                    console.log(status);
                    console.log(error);
                } catch (e) {
                    console.log(e);
                }
            }
        });

        if (otherTableArr.length > 0) {
            $.each(otherTableArr, function (index, value) {

                expenseDetailsElement.amount = parseInt(value.otableAmount);
                if (value.otableDateVerified != null && value.otableDateVerified != "") {
                    expenseDetailsElement.dateVerified = getCorrectDateFormat(value.otableDateVerified);
                } else {
                    //this needs to change
                    var date = new Date();
                    expenseDetailsElement.dateVerified = getCorrectDateFormat(date.getDate());
                }
                var exp_code = value.otableExp;
                var check = false;
                $.ajax({
                    url: api + "/boss/expenseCode",
                    type: "GET",
                    success: function (json) {

                        $.each(json, function (key, values) {

                            if (values.id == exp_code) {

                                expenseDetailsElement.expenseCode.type = values.type;
                                expenseDetailsElement.expenseCode.id = parseInt(values.id);
                                check = true;
                            }
                        });
                    },
                    async: false,
                    error: function (xhr, status, error) {
                        console.log(error);
                    }
                });
                if (check == false) {
                    expenseDetailsElement.expenseCode.type = "";
                    expenseDetailsElement.expenseCode.id = null;
                }
                expenseDetailsElement.hours = 0;



                $.ajax({
                    url: api + "/boss/jobCode/" + value.otableJobCode,
                    type: "GET",
                    success: function (json) {




                        expenseDetailsElement.jobCode.amount = parseFloat(json.amount);
                        expenseDetailsElement.jobCode.description = json.description;
                        expenseDetailsElement.jobCode.financialYear = json.financialYear;
                        expenseDetailsElement.jobCode.jobCode = json.jobCode;
                        expenseDetailsElement.jobCode.overrideCode = json.overrideCode;
                        expenseDetailsElement.jobCode.id = parseInt(json.id);




                    },
                    async: false,
                    error(xhr, status, error) {

                        try {
                            console.log(xhr.responseText);
                            console.log(xhr.statusText);
                            console.log(xhr.readyState);
                            console.log(status);
                            console.log(error);
                        } catch (e) {
                            console.log(e);
                        }
                    }

                });



                expenseDetailsElement.type = value.otableType;
                expenseDetailsElement.verified = true;

                timeDataV2.expenseDetails.push(expenseDetailsElement);
            });
        }

        timeDataV2.financialYear = parseInt(fy);
        timeDataV2.fromDate = "";
        timeDataV2.lastModifiedBy = "";
        timeDataV2.obligatedDate = getCorrectDateFormat(dateob);
        timeDataV2.overrideCode = "";
        timeDataV2.payPeriod = 0;

        $.ajax({
            url: api + "/boss/paymentCode",
            type: "GET",
            success: function (json) {

                $.each(json, function (value, key) {
                    if (key.code == pc_id) {

                        //alert("have matched pc_id: " + key.code);
                        timeDataV2.paymentCode.name = key.name;
                        timeDataV2.paymentCode.code = key.code;
                    }
                });
            },
            async: false,
            error(xhr, error, status) {
                console.log("error - " + xhr.responseText);
            }

        });

        timeDataV2.secCode = "";
        timeDataV2.state = "";
        timeDataV2.toDate = "";
        timeDataV2.total = 0;
        timeDataV2.travelRemarks = "";
        timeDataV2.travelVoucherNumber = 0;
        timeDataV2.unitCode = unitcode;
        timeDataV2.updatedAt = getCorrectDateFormat(datemod);



        //------------------
        //debugger;
        var j = JSON.stringify(timeDataV2);
        console.log(j);
        //debugger;

        // debugger;
        $.ajax({
            url: api + "/boss/expense",
            data: j,
            type: "POST",
            contentType: "application/json",
            success(result, status, xhr) {
                console.log("post expense success!");
                $('#otherTable tbody').empty();
            },
            error(xhr, status, error) {
                //debugger;
                try {
                    console.log("responseCode: " + xhr.responseText);
                    console.log(xhr.statusText);
                    console.log(xhr.readyState);
                    console.log(status);
                    console.log(error);


                } catch (e) {
                    console.log(e);
                }
            },
            async: false
        });

        //postExpense(postExpenseSuccess, postExpenseRejected, j);
    } catch (e) {
        console.log("other tab - " + e);
    }
});

function getCorrectDateFormat(date_str) {
    var date = new Date(date_str);
    return date.toISOString();
}


var timeTableArr = [];
var travelTableArr = [];
var visaTableArr = [];
var otherTableArr = [];

var timeTableObj = {
    "tableExp": "string",
    "tableJobCode": "string",
    "tableHours": "string",
    "tableJobCodeDesc": "string",
    "tableAmount": "string",
    "tableDateVerified": "string"
};

var travelTableObj = {
    "ttableExp": "string",
    "ttableJobCode": "string",
    "ttableAmount": "string",
    "ttableJobCodeDesc": "string",
    "ttableDateVerified": "string"
};

var visaTableObj = {
    "vtableExp": "string",
    "vtableJobCode": "string",
    "vtableAmount": "string",
    "vtableJobCodeDesc": "string",
    "vtableDateVerified": "string",
    "vtableType": "string"
};

var otherTableObj = {
    "otableExp": "string",
    "otableJobCode": "string",
    "otableAmount": "string",
    "otableJobCodeDesc": "string",
    "otableDateVerified": "string",
    "otableType": "string"
};


var employeeProfileJSON = {
    "activityCode": {
        "code": "string",
        "name": "string"
    },
    "cellPhone": "string",
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
    "firstName": "string",
    "homePhone": "string",
    "id": 0,
    "lastName": "string",
    "nameCode": "string",
    "overtimeHourlyWage": 0,
    "payPeriodsLeft": 0,
    "personalEmail": "string",
    "regPayPerPayPeriod": 0,
    "roomNumber": "string",
    "stateAssigned": "string",
    "title": "string",
    "driversLicense": {
        "employeeProfile": {},
        "expiration": "string",
        "id": 0,
        "number": "string",
        "state": "string"
    },
    "training": [
    ]
};

var JSONtraining = {
    "dateOfTraining": "2018-09-04T13:33:03.132Z",
    "hours": 0,
    "id": 0,
    "location": "string",
    "presenter": "string",
    "title": "string",
    "training": {},
    "yearsValid": 0
};

var expenseDetailsElement = {
    "amount": 0,
    "dateVerified": "string",
    "expense": {},
    "expenseCode": {
        "id": 0,
        "type": "string"
    },

    "hours": 0,
    "id": 0,
    "jobCode": {
        "amount": 0,
        "description": "string",
        "financialYear": 0,
        "id": 0,
        "jobCode": "string",
        "overrideCode": 0
    },

    "type": "string",
    "verified": true
};



var timeDataV2 = {
    "activityCode": {
        "code": "string",
        "name": "string"
    },
    "budgetObjectCode": {
        "id": 0,
        "name": "string"
    },
    "category": {
        "description": "string",
        "id": 0
    },
    "createdAt": "string",
    "createdBy": "string",
    "description": "string",
    "employeeProfile": {

    },
    "expenseDetails": [], //put the expenseDetailsElement in this array
    "financialYear": "string",
    "fromDate": "string",
    "id": 0,
    "lastModifiedBy": "string",
    "obligatedDate": "string",
    "overrideCode": "string",
    "payPeriod": 0,
    "paymentCode": {
        "code": "string",
        "name": "string"
    },
    "secCode": "string",
    "state": "string",
    "toDate": "string",
    "total": 0,
    "travelRemarks": "string",
    "travelVoucherNumber": 0,
    "unitCode": "string",
    "updatedAt": "string"
};

var jobCodeJSON = {
    "Description": "string",
    "id": 0,
    "JobCode": "string",
    "obligated": 0,
    "operating": 0,
    "unitCode": 0,
    "Amount": 0,
    "OverrideCode": 0,
    "FinancialYear": "string"

};

var ActivityCodeJSON = {
    "activityCodeFK": {
        "code": "string",
        "Name": "string"
    },
};


$("#add").click(function () {
    var lastField = $("#buildyourform div:last");
    var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;
    var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
    fieldWrapper.data("idx", intId);
    var fName = $("<input type=\"text\" class=\"fieldname\" />");
    var removeButton = $("<input type=\"button\" class=\"remove\" value=\"-\" />");
    removeButton.click(function () {
        $(this).parent().remove();
    });
    fieldWrapper.append(fName);
    fieldWrapper.append(fType);
    fieldWrapper.append(removeButton);
    $("#buildyourform").append(fieldWrapper);
});
$("#preview").click(function () {
    $("#yourform").remove();
    var fieldSet = $("<fieldset id=\"yourform\"><legend>Your Form</legend></fieldset>");
    $("#buildyourform div").each(function () {
        var id = "input" + $(this).attr("id").replace("field", "");
        var label = $("<label for=\"" + id + "\">" + $(this).find("input.fieldname").first().val() + "</label>");
        var input;
        switch ($(this).find("select.fieldtype").first().val()) {
            case "checkbox":
                input = $("<input type=\"checkbox\" id=\"" + id + "\" name=\"" + id + "\" />");
                break;
            case "textbox":
                input = $("<input type=\"text\" id=\"" + id + "\" name=\"" + id + "\" />");
                break;
            case "textarea":
                input = $("<textarea id=\"" + id + "\" name=\"" + id + "\" ></textarea>");
                break;
        }
        fieldSet.append(label);
        fieldSet.append(input);
    });
    $("body").append(fieldSet);

});

