var api = "localhost:8090/expense";

// ONCE WE LOAD SOME DATA, NEED TO TURN AJAX URL AND REMOVE VAR

// var dataSet = [
// [ "FS", "HD", "LaneyM", "FEDEX", "05","2019", "FRF13818", "26", "12,000,000", "2011/07/25" ],
// [ "SF", "TD", "LazerasS", "UPS", "05", "2019","FRF13818", "26", "1,877", "2011/07/25" ],
// [ "DS", "GD", "RussellM", "AZ", "05", "2019","FRF13818", "26", "12,000,000", "2011/07/25" ],
// [ "RS", "AD", "BlancD", "UPS", "05", "2019","FRF13818", "26", "100", "2011/07/25" ],
// [ "R", "DD", "ThomH", "DISCOUNT STORAGE", "05", "2016","FRF13818", "26", "12,000", "2011/07/25" ],
// [ "K", "D", "CharioniD", "UPS", "05", "2019","FRF13818", "26", "12,000,000", "2011/07/25" ],

// ];

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
            setJsonTable(json);
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
                data: expense_test,
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
                    //{data: null,
                    //    "render": function(){
                    //        return `
                    //        <div>
                    //            <div class="dropdown1">
                    //            <button class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                    //            <div class="dropdown-content1">
                    //            <a href="#">View expense details</a>
                    //            <a href="#">Edit expense</a>
                    //            <a href="#">Delete expense</a>
                    //            </div>
                    //        </div>
                    //      </div>

                    //        `
                    //    }
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

