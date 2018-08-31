// TODO REFACTOR ALL CODE
//define(['jquery', 'ApiCall','datePicker'], function (j, api ,date) {



    var api = 'http://localhost:8090';
    $(document).ready(function (){


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
        
        $.getScript("js/pagesJS/ApiCalls.js", function (){

            getJobCode(getJobCodeSuccess, getJobCodeError, "2017");
            getActivityCode(getActivityCodeSuccess, getActivityCodeError);
            getExpenseCode(null, getExpenseSuccess, getExpenseError);
            getbudgetObjectCode(getBudgetObjectCodeSuccess, getBudgetObjectCodeError);
            getEmployeeProfiles(getEmployeeProfileSuccess, getEmployeeProfileError);

        });

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
                

                    $('#namecode').append($("<option />").text(key.nameCode).val(key.id));
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
    $('#fy, #tfy, #vfy, #ofy').each(function (){
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
$('#jobcode').on('change', function (){
    var key = (this.value);
    $.get(api + '/jobCode/' + key, function (data, status) {
        JSON.stringify(data);
        $('#jobcodedesc').val(data.description.replace(/\"/g, ""));
        if (data.description.length < 0) {
            $('#unitcode').val(data.overrideCode.replace(/\"/g, ""));
        }
    });
});
$('#tjobcode').on('change', function (){
    var key = (this.value);
    //debugger;
    $.get(api + '/jobCode/' + key, function (data, status) {
        JSON.stringify(data);
        $('#tjobcodedesc').val(data.description.replace(/\"/g, ""));
        if (data.description.length < 0) {
            $('#tunitcode').val(data.overrideCode.replace(/\"/g, ""));
        }
    });
});
$('#vjobcode').on('change', function (){
    var key = (this.value);
    $.get(api + '/jobCode/' + key, function (data, status) {
        JSON.stringify(data);
        $('#vjobcodedesc').val(data.description.replace(/\"/g, ""));
        if (data.description.length < 0) {
            $('#vunitcode').val(data.overrideCode.replace(/\"/g, ""));
        }
    });
});
$('#ojobcode').on('change', function (){
    var key = (this.value);
    $.get(api + '/jobCode/' + key, function (data, status) {
        JSON.stringify(data);
        $('#ojobcodedesc').val(data.description.replace(/\"/g, ""));
        if (data.description.length < 0) {
            $('#ounitcode').val(data.overrideCode.replace(/\"/g, ""));
        }
    });
});



    $("#addbtn").click(function (){
        // var absoluteunit = $("#unitcode").val();
        
        var jobcode = $("#jobcode").val();
        var desc = $("#jobcodedesc").val();
        var expcode = $("#expcode").val();
        var expfront = expcode.substring(0, 3);
        var expback = expcode.substr(3);
        var amount = $('#amount').val();
        var hours = $("#hours").val();
        var markup = "<tr><td id='tableExp'>" + expfront + "</td><td id='tableJobCode'>" + jobcode +
            "</td><td id='tableHours'>" + hours + "</td><td id='tableType'>" + expback + "</td><td id='amount'>Amount to be Calc</td>" +
            '<td> <div class="input-group date" data-provide="datepicker">' +
            '<input type="text" placeholder="Pick a date" id="tableDateVerified" class="form-control">' +
            '<div class="input-group-addon">' +
            '<span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>' +
            '</div>' +
            '</div></td></tr>';
        $("table tbody").append(markup);
});

$("#taddbtn").click(function (){
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
            "</td><td id='ttableHours'>" + hours + "</td><td id='ttableType'>" + expback + "</td><td id='tamount'>Amount to be Calc</td>" +
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

$("#vaddbtn").click(function (){
    // var absoluteunit = $("#unitcode").val();
    
    var jobcode = $("#vjobcode").val();
    var desc = $("#vjobcodedesc").val();
    var expcode = $("#vexpcode").val();
    var expfront = expcode.substring(0, 3);
    var expback = expcode.substr(3);
    var amount = $('#vamount').val();
    var hours = $("#vhours").val();
    var markup = "<tr><td id='vtableExp'>" + expfront + "</td><td id='vtableJobCode'>" + jobcode +
        "</td><td id='vtableHours'>" + hours + "</td><td id='vtableType'>" + expback + "</td><td id='vamount'>Amount to be Calc</td>" +
        '<td> <div class="input-group date" data-provide="datepicker">' +
        '<input type="text" placeholder="Pick a date" id="tableDateVerified" class="form-control">' +
        '<div class="input-group-addon">' +
        '<span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>' +
        '</div>' +
        '</div></td></tr>';
    $("#visaTable tbody").append(markup);





});

$("#oaddbtn").click(function (){
    // var absoluteunit = $("#unitcode").val();
    
    var jobcode = $("#ojobcode").val();
    var desc = $("#ojobcodedesc").val();
    var expcode = $("#oexpcode").val();
    var expfront = expcode.substring(0, 3);
    var expback = expcode.substr(3);
    var amount = $('#oamount').val();
    var hours = $("#ohours").val();
    var markup = "<tr><td id='otableExp'>" + expfront + "</td><td id='otableJobCode'>" + jobcode +
        "</td><td id='otableHours'>" + hours + "</td><td id='otableType'>" + expback + "</td><td id='oamount'>Amount to be Calc</td>" +
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
    $("#timeSubmit").click(function (){
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

            $('#timeTable tr').each(function (){
                var table_exp = $(this).find("#tableExp").html();
                var table_jobcode = $(this).find("#tableJobCode").html();
                var table_hours = $(this).find("#tableHours").html();
                var table_jobCodeDesc = $(this).find("#tableJobCodeDesc").html();
                var table_amount = $(this).find("#tableAmount").html();
                var table_dateVerified = $(this).find("#tableDateVerified").html();
                
                try {
                    if (table_jobcode !== undefined) {
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
                url: api + "/budgetObjectCode",
                success: function (json) {

                    $.each(json, function (value, key) {
                        if (key.id === budgetObjCode_id) {
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
            timeDataV2.budgetObjectCode.Id = parseInt(budgetObjCode_id);
            timeDataV2.category.description = "";
            timeDataV2.category.id = 0;
            timeDataV2.createdAt = "";
            timeDataV2.createdBy = "";
            timeDataV2.description = desc;

            $.ajax({
                url: api + "/employeeProfile",
                type: "GET",
                success: function (json) {
                    
                    //var jObj = JSON.parse(json);
                    $.each(json, function (value, key) {
                        
                        if (namecode === key.nameCode) {
                            
                            //alert("namecode - " + namecode + " && key.nameCode - " + key.nameCode);
                            employeeProfileJSON.id = parseInt(key.id);
                            employeeProfileJSON.firstName = key.firstName;//emplyeeProfile.firstName;
                            employeeProfileJSON.lastName = key.lastName;//employeeProfile.lastName;
                            employeeProfileJSON.nameCode = namecode;
                            employeeProfileJSON.activityCode.name = actcode;
                            employeeProfileJSON.activityCode.code = actcode_id;
                            employeeProfileJSON.title = key.title;//employeeProfile.title;
                            timeDataV2.employeeProfile = employeeProfileJSON;

                            

                        }
                    });

                },
                async:false,
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

                    
                    expenseDetailsElement.amount = value.ttableAmount;

                    //need to figure out why can't set date on webpage
                    if (value.tableDateVerified !== null && value.tableDateVerified !== "") {
                        expenseDetailsElement.dateVerified = getCorrectDateFormat(value.tableDateVerified);
                    }
                    else {
                        //this needs to change
                        var date = new Date();
                        expenseDetailsElement.dateVerified = getCorrectDateFormat(date.getDate());
                    }
                    expenseDetailsElement.expenseCode.type = value.tableExp.split("-")[1];
                    expenseDetailsElement.expenseCode.id = parseInt(value.tableExp.split("-")[0]);
                    expenseDetailsElement.hours = parseInt(value.tableHours);



                    $.ajax({
                        url: api + "/jobCode/" + value.tableJobCode,
                        type: "GET",
                        success: function (json) {


                            expenseDetailsElement.JobCode.amount = json.amount;
                            expenseDetailsElement.JobCode.description = json.description;
                            expenseDetailsElement.JobCode.financialYear = json.financialYear;
                            expenseDetailsElement.JobCode.jobCode = json.jobCode;
                            expenseDetailsElement.JobCode.overrideCode = json.overrideCode;
                            expenseDetailsElement.JobCode.id = json.id;




                        },
                        async: false,
                        error: function(xhr, status, error) {

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
            timeDataV2.fromDate = "";
            timeDataV2.lastModifiedBy = "";
            timeDataV2.obligatedDate = getCorrectDateFormat(dateob);
            timeDataV2.overrideCode = "";
            timeDataV2.payPeriod = 0;

            $.ajax({
                url: api + "/paymentCode",
                type: "GET",
                success: function (json) {
                    
                    $.each(json, function (value, key) {
                        if (key.code === pc_id) {
                            
                            //alert("have matched pc_id: " + key.code);
                            timeDataV2.paymentCode.name = key.name;
                            timeDataV2.paymentCode.code = key.code;
                        }
                    });
                },
                async: false,
                error: function(xhr, error, status) {
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


            
            //------------------
            //debugger;
            var j = JSON.stringify(timeDataV2);
            console.log(j);

           // debugger;
            $.ajax({
                url: api + "/expense",
                data: j,
                type: "POST",
                contentType: "application/json",
                success: function(result, status, xhr) {
                    console.log("post expense success!");
                },
                error: function(xhr, status, error) {
                    
                    try {
                        
                        console.log("responseCode: " + xhr.responseText);
                        console.log("status text: " + xhr.statusText);
                        console.log(xhr.readyState);
                        console.log(status);
                        console.log(error);
                        
                        
                    } catch (e) {
                        console.log(e);
                        alert(e);
                    }
                }
            });

            //postExpense(postExpenseSuccess, postExpenseRejected, j);
        } catch (e) {
            console.log("time tab - " + e);
            alert(e);
        }
});

$("#travelSubmit").click(function (){
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

        $('#travelTable tr').each(function (){
            var table_exp = $(this).find("#ttableExp").html();
            var table_jobcode = $(this).find("#ttableJobCode").html();
            var table_hours = $(this).find("#ttableHours").html();
            var table_jobCodeDesc = $(this).find("#ttableJobCodeDesc").html();
            var table_Amount = $(this).find("#ttableAmount").html();
            var table_dateVerified = $(this).find("#ttableDateVerified").html();

            try {
                if (table_jobcode !== undefined) {
                    travelTableObj.ttableExp = table_exp;
                    travelTableObj.ttableJobCode = table_jobcode;
                    travelTableObj.ttableAmount = table_Amount;
                    travelTableObj.ttJobCodeDesc = table_jobCodeDesc;
                    travelTableObj.ttableDateVerified = table_dateVerified;

                    travelTableArr.push(timeTableObj);
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
            url: api + "/budgetObjectCode",
            success: function (json) {
                
                $.each(json, function (value, key) {
                    
                    if (key.id === budgetObjCode_id) {
                        
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
        timeDataV2.budgetObjectCode.Id = parseInt(budgetObjCode_id);
        timeDataV2.category.description = "";
        timeDataV2.createdAt = "";
        timeDataV2.createdBy = "";
        timeDataV2.description = desc;
        //timeDataV2. = jobcode;

        $.ajax({
            url: api + "/employeeProfile",
            type: "GET",
            success: function (json) {
                
                //var jObj = JSON.parse(json);
                $.each(json, function (value, key) {
                    
                    if (namecode === key.id) {

                        //alert("namecode - " + namecode + " && key.nameCode - " + key.nameCode);
                        employeeProfileJSON.id = parseInt(key.id);
                        employeeProfileJSON.firstName = key.firstName;//emplyeeProfile.firstName;
                        employeeProfileJSON.lastName = key.lastName;//employeeProfile.lastName;
                        employeeProfileJSON.nameCode = namecode;
                        employeeProfileJSON.activityCode.name = actcode;
                        employeeProfileJSON.activityCode.code = actcode_id;
                        employeeProfileJSON.title = key.title;//employeeProfile.title;
                        employeeProfileJSON.stateAssigned = stateAssigned;
                        timeDataV2.employeeProfile = employeeProfileJSON;



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
        if (travelTableArr.length > 0) {
            $.each(travelTableArr, function (index, value) {
                
                expenseDetailsElement.amount = parseFloat(value.ttableAmount);
                if (value.ttableDateVerified !== null && value.ttableDateVerified !== "") {
                    expenseDetailsElement.dateVerified = getCorrectDateFormat(value.ttableDateVerified);
                } else {
                    //this needs to change
                    var date = new Date();
                    expenseDetailsElement.dateVerified = getCorrectDateFormat(date.getDate());
                }
                expenseDetailsElement.expenseCode.type = value.ttableExp.split("-")[1];
                expenseDetailsElement.expenseCode.id = parseInt(value.ttableExp.split("-")[0]);
                expenseDetailsElement.hours = 0;



                $.ajax({
                    url: api + "/jobCode/" + value.ttableJobCode,
                    type: "GET",
                    success: function (json) {




                        expenseDetailsElement.JobCode.amount = parseFloat(json.amount);
                        expenseDetailsElement.JobCode.description = json.description;
                        expenseDetailsElement.JobCode.financialYear = parseInt(json.financialYear);
                        expenseDetailsElement.JobCode.jobCode = json.jobCode;
                        expenseDetailsElement.JobCode.overrideCode = json.overrideCode;
                        expenseDetailsElement.JobCode.id = parseInt(json.id);


                    },
                    async: false,
                    error: function(xhr, status, error) {

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
            url: api + "/paymentCode",
            type: "GET",
            success: function (json) {

                $.each(json, function (value, key) {
                    if (key.code === pc_id) {

                        //alert("have matched pc_id: " + key.code);
                        timeDataV2.paymentCode.name = key.name;
                        timeDataV2.paymentCode.code = key.code;
                    }
                });
            },
            async: false,
            error: function(xhr, error, status) {
                
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
            url: api + "/expense",
            data: j,
            type: "POST",
            contentType: "application/json",
            success: function(result, status, xhr) {
                console.log("post expense success!");
            },
            error: function(xhr, status, error) {
                //debugger;
                try {
                    console.log("response Text: " + xhr.responseText);
                    console.log(xhr.statusText);
                    console.log(xhr.readyState);
                    console.log(status);
                    console.log(error);
                    
                } catch (e) {
                    console.log(e);
                }
            }
        });

        //postExpense(postExpenseSuccess, postExpenseRejected, j);
    } catch (e) {
        console.log("travel tab - " + e);
    }
});

$("#visaSubmit").click(function (){
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
        var stateAssigned = $("#vstateassigned").val();//check spelling
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

        console.log("vpc id: " + pc_id);
        console.log("vpc name: " + pc);


        var table_list = [];

        $('#visaTable tr').each(function (){
            var table_exp = $(this).find("#vtableExp").html();
            var table_jobcode = $(this).find("v#tableJobCode").html();
            //var table_hours = $(this).find("#tableHours").html();
            var table_jobCodeDesc = $(this).find("#vtableJobCodeDesc").html();
            var table_Amount = $(this).find("#vtableAmount").html();
            var table_dateVerified = $(this).find("#vtableDateVerified").html();

            try {
                if (table_jobcode !== undefined) {
                    visaTableObj.vtableExp = table_exp;
                    visaTableObj.vtableJobCode = table_jobcode;
                    visaTableObj.vtableAmount = table_Amount;
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
        timeDataV2.budgetObjectCode.Id = parseInt(budgetObjCode_id);
        timeDataV2.category.description = "";
        timeDataV2.createdAt = "";
        timeDataV2.createdBy = "";
        timeDataV2.description = desc;

        $.ajax({
            url: api + "/employeeProfile",
            type: "GET",
            success: function (json) {
                
                //var jObj = JSON.parse(json);
                $.each(json, function (value, key) {

                    if (namecode === key.nameCode) {

                        //alert("namecode - " + namecode + " && key.nameCode - " + key.nameCode);
                        employeeProfileJSON.id = parseInt(key.id);
                        employeeProfileJSON.firstName = key.firstName;//emplyeeProfile.firstName;
                        employeeProfileJSON.lastName = key.lastName;//employeeProfile.lastName;
                        employeeProfileJSON.nameCode = namecode;
                        employeeProfileJSON.activityCode.name = actcode;
                        employeeProfileJSON.activityCode.code = actcode_id;
                        employeeProfileJSON.title = key.title;//employeeProfile.title;
                        timeDataV2.employeeProfile = employeeProfileJSON;



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
        if (visaTableArr.length > 0) {
            $.each(visaTableArr, function (index, value) {
                expenseDetailsElement.amount = parseFloat(value.vtableAmount);
                if (value.vtableDateVerified !== null && value.vtableDateVerified !== "") {
                    expenseDetailsElement.dateVerified = getCorrectDateFormat(value.vtableDateVerified);
                } else {
                    //this needs to change
                    var date = new Date();
                    expenseDetailsElement.dateVerified = getCorrectDateFormat(date.getDate());
                }
                expenseDetailsElement.expenseCode.type = value.vtableExp.split("-")[1];
                expenseDetailsElement.expenseCode.id = parseInt(value.vtableExp.split("-")[0]);
                expenseDetailsElement.hours = 0;



                $.ajax({
                    url: api + "/jobCode/" + value.vtableJobCode,
                    type: "GET",
                    success: function (json) {




                        expenseDetailsElement.JobCode.amount = parseInt(json.amount);
                        expenseDetailsElement.JobCode.description = json.description;
                        expenseDetailsElement.JobCode.financialYear = json.financialYear;
                        expenseDetailsElement.JobCode.jobCode = json.jobCode;
                        expenseDetailsElement.JobCode.overrideCode = json.overrideCode;
                        expenseDetailsElement.JobCode.id = parseInt(json.id);

                        /*expenseDetailsElement.JobCode.amount = json.amount;
                        expenseDetailsElement.JobCode.description = json.description;
                        expenseDetailsElement.JobCode.financialYear = json.financialYear;
                        expenseDetailsElement.JobCode.jobCode = json.jobCode;
                        expenseDetailsElement.JobCode.overrideCode = json.overrideCode;
                        expenseDetailsElement.JobCode.id = json.id;*/

                        //expenseDetailsElement.JobCode = jobCodeJSON;


                    },
                    async: false,
                    error: function(xhr, status, error) {

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
            url: api + "/paymentCode",
            type: "GET",
            success: function (json) {

                $.each(json, function (value, key) {
                    if (key.code === pc_id) {

                        //alert("have matched pc_id: " + key.code);
                        timeDataV2.paymentCode.name = key.name;
                        timeDataV2.paymentCode.code = key.code;
                    }
                });
            },
            async: false,
            error: function(xhr, error, status) {
                console.log(xhr.responseText);
            }

        });

        timeDataV2.secCode = "";
        timeDataV2.state = state;
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
            url: api + "/expense",
            data: j,
            type: "POST",
            contentType: "application/json",
            success: function(result, status, xhr) {
                console.log("post expense success!");
            },
            error: function(xhr, status, error) {
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
            }
        });

        //postExpense(postExpenseSuccess, postExpenseRejected, j);
    } catch (e) {
        console.log("time tab - " + e);
    }
});


$("#otherSubmit").click(function (){
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

        $('#otherTable tr').each(function (){
            var table_exp = $(this).find("#otableExp").html();
            var table_jobcode = $(this).find("#otableJobCode").html();
            //var table_hours = $(this).find("#tableHours").html();
            var table_jobCodeDesc = $(this).find("#otableJobCodeDesc").html();
            var table_Amount = $(this).find("#otableAmount").html();
            var table_dateVerified = $(this).find("o#tableDateVerified").html();

            try {
                if (table_jobcode !== undefined) {
                    otherTableObj.otableExp = table_exp;
                    otherTableObj.otableJobCode = table_jobcode;
                    otherTableObj.otableAmount = table_Amount;
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
        timeDataV2.budgetObjectCode.Id = parseInt(budgetObjCode_id);
        timeDataV2.category.description = "";
        timeDataV2.createdAt = "";
        timeDataV2.createdBy = "";
        timeDataV2.description = desc;

        $.ajax({
            url: api + "/employeeProfile",
            type: "GET",
            success: function (json) {
                
                //var jObj = JSON.parse(json);
                $.each(json, function (value, key) {

                    if (namecode === key.nameCode) {

                        //alert("namecode - " + namecode + " && key.nameCode - " + key.nameCode);
                        employeeProfileJSON.id = key.id;
                        employeeProfileJSON.firstName = key.firstName;//emplyeeProfile.firstName;
                        employeeProfileJSON.lastName = key.lastName;//employeeProfile.lastName;
                        employeeProfileJSON.nameCode = namecode;
                        employeeProfileJSON.activityCode.name = actcode;
                        employeeProfileJSON.activityCode.code = actcode_id;
                        employeeProfileJSON.title = key.title;//employeeProfile.title;
                        timeDataV2.employeeProfile = employeeProfileJSON;



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

        if (otherTableArr.length > 0) {
            $.each(otherTableArr, function (index, value) {

                expenseDetailsElement.amount = parseInt(value.otableAmount);
                if (value.otableDateVerified !== null && value.otableDateVerified !== "") {
                    expenseDetailsElement.dateVerified = getCorrectDateFormat(value.otableDateVerified);
                } else {
                    //this needs to change
                    var date = new Date();
                    expenseDetailsElement.dateVerified = getCorrectDateFormat(date.getDate());
                }
                expenseDetailsElement.expenseCode.type = value.otableExp.split("-")[1];
                expenseDetailsElement.expenseCode.id = parseInt(value.otableExp.split("-")[0]);
                expenseDetailsElement.hours = hours;



                $.ajax({
                    url: api + "/jobCode/" + value.otableJobCode,
                    type: "GET",
                    success: function (json) {




                        expenseDetailsElement.JobCode.amount = parseFloat(json.amount);
                        expenseDetailsElement.JobCode.description = json.description;
                        expenseDetailsElement.JobCode.financialYear = json.financialYear;
                        expenseDetailsElement.JobCode.jobCode = json.jobCode;
                        expenseDetailsElement.JobCode.overrideCode = json.overrideCode;
                        expenseDetailsElement.JobCode.id = parseInt(json.id);




                    },
                    async: false,
                    error: function(xhr, status, err) {

                        try {
                            console.log(xhr.responseText);
                            console.log(xhr.statusText);
                            console.log(xhr.readyState);
                            console.log(status);
                            console.log(err);
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
            url: api + "/paymentCode",
            type: "GET",
            success: function (json) {

                $.each(json, function (value, key) {
                    if (key.code === pc_id) {

                        //alert("have matched pc_id: " + key.code);
                        timeDataV2.paymentCode.name = key.name;
                        timeDataV2.paymentCode.code = key.code;
                    }
                });
            },
            async: false,
            error: function(xhr, error, status) {
                console.log("error - " + xhr.responseText);
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



        //------------------
        //debugger;
        var j = JSON.stringify(timeDataV2);
        console.log(j);

        // debugger;
        $.ajax({
            url: api + "/expense",
            data: j,
            type: "POST",
            contentType: "application/json",
            success: function(result, status, xhr) {
                console.log("post expense success!");
            },
            error: function(xhr, status, error) {
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
            }
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
    "firstName": "string",
    "id": 0,
    "lastName": "string",
    "nameCode": "string",
    "payPeriodsLeft": 0,
    "regPayPerPeriod": 0,
    "stateAssigned": "string",
    "title": "string"
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
       "JobCode": {
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
        "Id": 0,
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


    $("#add").click(function (){
        var lastField = $("#buildyourform div:last");
        var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;
        var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
        fieldWrapper.data("idx", intId);
        var fName = $("<input type=\"text\" class=\"fieldname\" />");
        var removeButton = $("<input type=\"button\" class=\"remove\" value=\"-\" />");
        removeButton.click(function (){
            $(this).parent().remove();
        });
        fieldWrapper.append(fName);
        fieldWrapper.append(fType);
        fieldWrapper.append(removeButton);
        $("#buildyourform").append(fieldWrapper);
    });
    $("#preview").click(function (){
        $("#yourform").remove();
        var fieldSet = $("<fieldset id=\"yourform\"><legend>Your Form</legend></fieldset>");
        $("#buildyourform div").each(function (){
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

