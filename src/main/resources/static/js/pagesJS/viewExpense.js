var api = "/boss/expense";

$(document).ready(function () {

    try {
        $('#expenseSub').addClass('show');
        $('#expenseSub > li:nth-child(2) > a').addClass('highlight');

        $('#expense thead th').each(function () {
            var title = $(this).text();
            $(this).html('<input type="text" class="headSearch" placeholder= ' + title + ' />');
            if ($(this).is("#stop")) {
                return false;
            }
        });
    } catch (e) {
        //alert(e);
        console.log(e);
    }

    $.ajax({
        url: api,
        type: "GET",
        success: function (json) {
            setJsonTable();
        },
        error(xhr, status, error) {
            setJsonTable(null);
        }
    });



    function setJsonTable(json) {

        if (json != null) {
            var dt = $('#expense').DataTable({
                dom: 'Brtip',
                bProcessing: true,
                buttons: [
                    {
                        text: 'Print <i class="fa fa-lg fa-print"></i>',
                        extend: 'print',
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                        },
                        className: 'table-btns print-btn'
                    },
                    {
                        text: 'Add <i class="fa fa-lg fa-plus"></i>',
                        action: function () {
                            window.location.href = '../budget/newExpense.html';
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
                data: json,
                aoColumns: [
                    {mData: "actCode"},
                    {mData: "secCode"},
                    {mData: "employeeProfile.nameCode"},
                    {mData: "description"},
                    {mData: "payPeriod"},
                    {mData: "seq"},
                    {mData: "jobCode"},
                    {mData: "expCode"},
                    {mData: "total"},
                    {mData: "obligatedDate"}
                ]
            });


            dt.columns().every(function () {
                var that = this;

                $('input', this.header()).on('keyup change', function () {
                    if (that.search() !== this.value) {
                        that
                                .search(this.value)
                                .draw();
                    }
                });
            });
        } else {
            //$("#investmentTable").
            $('#investmentTable').html('<tr><td colspan="11"><center><div class="use-width-one-whole title-div"><h2 id="title">No Records</h2></div></center></td></tr>');
        }



    }






});

