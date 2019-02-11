$(document).ready(function () {
    // displaying the current vehicle information on months out of service page
    var id = window.location.pathname.split("/")[3];
    if (id) {
        //var url = "/boss/vehicle?id=" + id;
        if (parseInt(id)) {
            url = "/boss/vehicle/" + id;
        }
        var url = "/boss/vehicle/" + id;

        $.ajax({
            type: "GET",
            url: url,
            contentType: "application/json",
            dataType: "json",
            cache: false,
            timeout: 600000,
            success: function (vehs) {

                $("#pLicense").append(vehs.license);
                $("#pVin").append(vehs.vin);
                $("#pYear").append(vehs.modelYear);
                $("#pMake").append(vehs.make);
                $("#pModel").append(vehs.modelNumber);
                try {
                    var monthsNotUsedVar = vehs.monthsNotUsed;
                    var tbDat = [];
                    for (x in monthsNotUsedVar) {


                        var mm = monthsNotUsedVar[x];

                        if (mm.year == undefined || mm.year == "") {
                            mm.year = "NaN";
                        }
                        var year = mm.year;
                        var id = mm.id;
                        for (y in mm.months) {
                            var month = mm.months[y];
                            if (month != undefined || month != "") {
                                tbDat.push({ id: id, vYear: year, vMonth: month });
                            }
                            
                        }
                    }

                } catch (e) {
                    console.log(e);
                }

                ////populateDataTable(vehs);
                populateDataTable(tbDat);
            },
            error: function (a, b, c) {
                console.log(a.responseText);
            }
        });
    }
    // end

    // function to populate the table
    function populateDataTable(testData) {

        var test = JSON.stringify(testData);

        if (test != '[]') {
            var table = $("#monthlyCosts").DataTable({
                data: testData,
                bProcessing: true,
                bPaginate: false,
                dom: "Brtip",
                columns: [{ data: "vMonth" }, { data: "vYear" },
                {
                    data: null,
                    "render": function (data, type, row) {

                        return `
                      <div class="dropdown1">
                          <button id="test_click" class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                          <div id="dropList" class="dropdown-content1">
                              <a href="#" data-toggle="modal" data-target="myModal_edit" data-value=` + data.id + `_` + row.vMonth + `_` + row.vYear + ` class="editBtn" id="editBtn">Edit Month or Year</a>
                              <a href="#" data-toggle="modal" data-target="myModal_delete" data-value=` + data.id + `_` + row.vMonth + `_` + row.vYear + ` class="delBtn" id="delbtn">Delete Month and Year</a>
                          </div>
                      </div>
                  `;

                    }
                }
                ],
                buttons: [
                    {
                        text: 'Print <i class="fa fa-lg fa-print"></i>',
                        extend: "print",
                        exportOptions: {
                            columns: [0, 1]
                        },
                        className: "table-btns print-btn"
                    },
                    {
                        text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                        extend: "excel",
                        exportOptions: {
                            columns: [0, 1]
                        },
                        className: "table-btns excel-btn"
                    },

                    {
                        text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
                        action: function () {
                            window.location.reload();
                        },
                        className: "table-btns refresh-btn"
                    }
                ]
            });
        } else {
            $("#monthlyCosts").find('tbody').append('<th colspan="3">No Records Available</th>');
        }
        var selected;
        var edit_id;
        $('.editBtn').on('click', function (x) {
            selected = $(this).attr('data-value');
            var arr = selected.split("_");
            var modal = $('#myModal_edit');

            modal.find('[name=beginMonth]').val(arr[1]);
            modal.find('[name=beginYear]').val(arr[2]);
            modal.find('[name=oldMonth]').val(arr[1]);
            modal.find('[name=oldYear]').val(arr[2]);
            modal.find('[name=hiddenID]').val(arr[0]);
            $('#myModal_edit').modal('toggle');
        });

        $('.delBtn').on('click', function (x) {
            selected = $(this).attr('data-value');
            $('#myModal_delete').modal('toggle');
        });

        $('#myModal_edit').on('click', '.editModal_save', function (x) {
            var modal = $('#myModal_edit');
            var year = modal.find('[name=beginYear]').val();

            var month = modal.find('[name=beginMonth]').val();

            var old_year = modal.find('[name=oldYear]').val();
            var old_month = modal.find('[name=oldMonth]').val();

            var monthNotUsedId = modal.find('[name=hiddenID]').val();

            //makeAjaxCall('/boss/monthsNotUsed/' + monthNotUsedId, 'GET', null).then(function (json) {
            $.ajax({
                url: '/boss/monthsNotUsed/' + monthNotUsedId,
                type: 'GET',
                async: false,
                success: function (json) {
                    var j = json;
                    if (old_year == year && old_month != month) {


                        var monthWithoutOldMonth = j.months.filter(function (x) {
                            
                            return x != old_month;
                        });

                        monthWithoutOldMonth.push(month);

                        j.months = [];
                        j.months = monthWithoutOldMonth;

                        var j_str = JSON.stringify(j);

                        $.ajax({
                            url: '/boss/monthsNotUsed/' + j.id,
                            type: 'DELETE',
                            success: function (jjj) {
                                
                                $.ajax({
                                    url: '/boss/vehicle/' + id,
                                    type: 'GET',
                                    success: function (veh) {


                                            veh.monthsNotUsed.push(j);

                                            
                                            $.ajax({
                                                url: '/boss/vehicle/' + id,
                                                type: 'PUT',
                                                contentType: 'application/json',
                                                data: JSON.stringify(veh),
                                                success: function (gg) {

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


                    }


                    if (old_year != year && old_month == month) {
                        $.ajax({
                            url: '/boss/monthsNotUsed',
                            type: 'GET',
                            success: function (jj) {

                                $.each(jj, function (index, value) {

                                    if (value.year == old_year) {
                                        if (value.months.length > 1) {

                                            var months = value.months.filter(function (x) {
                                                
                                                return x != month;
                                            });

                                            value.months = [];
                                            value.months = months;

                                            $.ajax({
                                                url: '/boss/monthsNotUsed' / + value.id,
                                                type: 'PUT',
                                                cache: false,
                                                async: false,
                                                success: function (d) {
                                                    
                                                }, function(a, b, c) {
                                                    console.log(a.responseText);
                                                }
                                            });
                                        }
                                        else {
                                            if (value.months.length == 1) {

                                                $.ajax({
                                                    url: '/boss/monthsNotUsed/' + value.id,
                                                    type: 'DELETE',
                                                    cache: false,
                                                    async: false,
                                                    success: function (s) {
                                                        
                                                    }, error: function (a, b, c) {
                                                        console.log(a.responseText);
                                                    }
                                                });
                                                $.ajax({
                                                    url: '/boss/vehicle/' + id,
                                                    type: 'GET',
                                                    success: function (veh) {
                                                        
                                                        var mnu = {
                                                            id: 0,
                                                            year: year,
                                                            months: []
                                                        };

                                                        mnu.months.push(month);
                                                        veh.monthsNotUsed.push(mnu);
                                                        
                                                        $.ajax({
                                                            url: '/boss/vehicle/' + id,
                                                            type: 'PUT',
                                                            contentType: 'application/json',
                                                            data: JSON.stringify(veh),
                                                            success: function (gg) {
                                                                
                                                                location.reload();
                                                            }, error: function (a, b, c) {
                                                                console.log(a.responseText);
                                                            }

                                                        });
                                                    }, error: function (a, b, c) {
                                                        console.log(a.responseText);
                                                    }
                                                });

                                            }
                                        }
                                    }
                                });

                            }, error: function (a, b, c) {
                                console.log(a.responseText);
                            }
                        });



                    }


                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });
        }); //end of populating the table function

        $('#myModal_delete').on('click', '.deleteModal_del', function (x) {
            var arr = selected.split('_')[0];
            $.ajax({
                url: '/boss/monthsNotUsed/' + arr,
                type: 'DELETE',
                success: function (jjj) {
                    location.reload();
                },
                error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });
        });


    }

    // hiding error message once we start modifying the form again
    $("form").on("click focus", function () {
        $("#error, #success").hide();
    });




    // submitting data for new aux contacts
    $("input[type=submit]").on("click", function (e) {
        // checking form validity
        if ($("#monthlyCostsForm:valid").length == 0) {
            showError("Please ensure all fields are filled out correctly");
            return false;
        } else {
            e.preventDefault();
        }
        // creating vars to submit to ajax
        var method = "PUT";
        var url = "/boss/vehicle";
        var vveh;

        $.ajax({
            url: "/boss/vehicle/" + id,
            type: "GET",
            cache: false,
            async: false,
            success: function (json) {

                vveh = json;
            },
            error: function (a, b, c) {
                console.log(a.responseText);
            }
        });

        var monthNotUsedvars = vveh.monthsNotUsed;
        var data;
        var check_dup = true;

        var monthOfYear = monthNotUsedvars.filter(function (x) {
            return x.year == $("#monthlyCostsForm_beginYear").val();
        });

        if (monthOfYear == undefined || monthOfYear.length == 0) {
            data = {
                year: "",
                months: []
            };

            data.year = $("#monthlyCostsForm_beginYear").val();
            var month = $("#monthlyCostsForm_beginMonth").val();
            data.months.push(month);
            vveh.monthsNotUsed.push(data);
            data = vveh;
        } else {
            var og_months = monthNotUsedvars.filter(function (x) {
                
                return x.id != monthOfYear[0].id;
            });

            var upd_month = $("#monthlyCostsForm_beginMonth").val();

            var month_check = false;
            /*for (m in monthOfYear[0].months) {
                debugger;
                var m_check = monthOfYear[0].months[m];
                if (upd_month == m_check) {
                    month_check == true;
                    break;
                }
            }*/

            var fil = monthOfYear[0].months.filter(function (x) {
                return x == upd_month;
            });
            debugger;
            if (fil.length > 0) {
                error = "Month Already Exists";
                check_dup = false;
            } else {
                monthOfYear[0].months.push(upd_month);
                og_months.push(monthOfYear[0]);
                vveh.monthsNotUsed = og_months;
                data = vveh;
                check_dup = true;
            }
            

        }
        if (check_dup) {
            // stringifying the data for ajax
            data = JSON.stringify(data);


            // ajax post call
            $.ajax({
                url: url + "/" + id,
                type: method,
                data: data,
                contentType: "application/json",
                cache: false,
                timeout: 600000,
                success: function (response) {
                    console.log("successfully updated");
                    console.log(data);
                    window.location.reload();
                },
                error: function (a, b, c) {
                    //e.preventDefault();
                    //console.log("Error" + error);
                    console.log(a.responseText);
                }
            });
        } else {
            
            $("#errorText").html('that year and month already exist');
            $("#error").show();
            $("html,body").animate({ scrollTop: "100px" });
        }
    });
});

// showing error message if form is not valid
function showError(msg) {
    $("#errorText").html(msg);
    $("#error").show();
    $("html,body").animate({ scrollTop: "100px" });
}

// using bootstrap field writer to populate the form
var fields = {
    modalForm_edit: [
        [{
            fieldName: "beginMonth",
            title: "Out of Service Month",
            type: "select/vmonth",
            placeholder: "Enter Month"
        }],
        [{
            fieldName: "beginYear",
            title: "Out of Service Year",
            type: "select/vyear",
            placeholder: "Enter Year"
        }],
        [{
            fieldName: "oldMonth",
            hidden: true,
            type: "input/text"
        },
        {
            fieldName: "oldYear",
            hidden: true,
            type: "input/text"
        },
        {
                fieldName: 'hiddenID',
                hidden: true,
                type: "input/text"
        }
        ]
    ],

    monthlyCostsForm: [
        [
            //aux info row
            {
                fieldName: "beginMonth",
                title: "Out of Service Month",
                type: "select/vmonth",
                placeholder: "Enter Month"
            },
            {
                fieldName: "beginYear",
                title: "Out of Service Year",
                type: "select/vyear",
                placeholder: "Enter Year"
            }
        ], // end row
        [
            {
                custom:
                    '<input type="submit" class="btn fleetBtn" id="btn_add_aux" value="Add Month Out of Service">'
            }
        ]
    ]
};

// calling bootstrap field writer function
addBootstrapFields(fields);
