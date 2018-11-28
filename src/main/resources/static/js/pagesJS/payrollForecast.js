$(document).ready(function () {
    var api = '';

    $('#payrollSub').addClass('show');
    $('#payrollSub a[href="./payrollForecast"]').addClass('highlight');

    $.ajax({
        type: 'GET',
        url: api + '/boss/jobCode',
        success: function (json) {
            $('#jobcode').append(json.map(function (jc) {
                var selected = "";
                if (jc.jobCode.match(/^FRFI38\d\d$/)) {
                    console.log("Matched " + jc.jobCode);
                    selected = " selected"
                }
                return '<option value="' + jc.id + '"id="' + jc.id + '"' + selected + '>' + jc.jobCode + '</option>';
            }));
        }
    }); //end of get jobcode ajax call
    $.ajax({
        type: 'GET',
        url: api + '/boss/payrollForecast/json',
        success: function (json) {
            console.log(json);
            populateDataTable(json); // live data
            //populateDataTable(jsonData); // dev data
        }
    });

    function populateDataTable(jsonData) {
        var currency = $.fn.dataTable.render.number(',', '.', 0, '$');
        var dt = $('#payroll').DataTable({
            dom: 'Brtip',
            bProcessing: true,
            bPaginate: false,
            buttons: [
                {
                    text: 'Print <i class="fa fa-lg fa-print"></i>',
                    extend: 'print',
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4]
                    },
                    className: 'table-btns print-btn'
                },
                {
                    text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                    extend: 'excel',
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4]
                    },
                    className: 'table-btns excel-btn'
                },
                {
                    text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
                    action: function () {
                        window.location.reload();
                    },
                    className: 'table-btns refresh-btn'
                }

            ],
            data: jsonData.rows,
            columnDefs: {sortable: false, targets: [5]},
            columns: [
                {data: "activityCode"},
                {data: "activityCodeDescription"},
                {data: "regPayToDate",
                    "render": $.fn.dataTable.render.number(',', '.', 0, '$')
                },
                {data: "regPayForecast",
                    "render": $.fn.dataTable.render.number(',', '.', 0, '$')
                },
                {data: "totalFYForecast",
                    "render": $.fn.dataTable.render.number(',', '.', 0, '$')
                },
            ],

        });

        dt.columns().every(function () {
            var that = this;
            $('input', this.header(2)).on('keyup change', function () {
                if (that.search() !== this.value) {
                    that
                            .search(this.value)
                            .draw();
                }
            });
        });

        $('#payroll #grandTotalPayToDate').html(currency.display(jsonData.grandTotalPayToDate));
        $('#payroll #grandTotalPayForecast').html(currency.display(jsonData.grandTotalPayForecast));
        $('#payroll #grandTotalFYForecast').html(currency.display(jsonData.grandTotalFYForecast));

    }
    $('#payroll tbody').on('click', '.editBtn', function () {
        var employeeID = $(this).data("id");
        //var data = table.row( $(this).parents('tr') ).data();
        //var id = (data.id);
        $.ajax({
            type: 'GET',
            url: api + '/boss/employeeProfile/' + employeeID,
            success: function (data) {
                $('#myModal #empName').val(data.firstName + ' ' + data.lastName);
                $('#myModal #empPPLeft').val(data.payPeriodsLeft);
                $('#myModal #empRegPay').val(data.regPayPerPayPeriod);
                $("#empID").data(data);
            }
        });
        $('#myModal').modal('show');
    });

    $("#editForm").submit(function () {
        var pd = $("#empID").data();
        pd.payPeriodsLeft = parseInt($('#myModal #empPPLeft').val());
        pd.regPayPerPayPeriod = parseInt($('#myModal #empRegPay').val());
        var id = parseInt($('#empID').data('id'));

        console.log(pd);
        console.log(id);

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/boss/employeeProfile",
            data: JSON.stringify(pd),
            dataType: 'json',
            cache: false,
            timeout: 600000,
            success: function (data) {
                $('#myModal').modal('hide');
                $('#success').show();
                $('#success').delay(5000).fadeOut();
                //window.location.href = api + '/boss/payrollDetails';
            },
            error: function (request, status, error) {
                console.log(request.responseJSON);
                $('#myModal').modal('hide');
                $('#error').show()
                $('#error').delay(5000).fadeOut();
                //window.location.href = api + '/boss/payrollDetails';
            }
        });
        return false;
    });
});