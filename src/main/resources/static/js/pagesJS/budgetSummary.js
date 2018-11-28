// var typ = "";
var yr = "";
setYear();
// setTyp();

function setYear() {
    $("#year").on('change', function () {
        if ($(this).val() > 0) {
            yr = $(this).val();
            console.log(yr);
        }
    })
}
;
// function setTyp(){
//     $('#verif').on('change', function(){
//         if ($(this).val()!="0"){
//             typ = $(this).val();
//             console.log(typ);
//         }
//     });
// };


$(document).ready(function () {
    $('#budgetSub').addClass('show');
    $('#budgetSub > li:nth-child(1) > a').addClass('highlight');
    $('#budget thead tr:nth-child(1) th:nth-child(2)').each(function () {
        $(this).html('<label class="headLabel" for="unitCode">Unit Code</label><input type="text" id="unitCode" class="headSearch" placeholder="Search Unit Code" />');
    });
    $('#budget thead tr:nth-child(1) th:nth-child(1)').each(function () {
        $(this).html('<label class="headLabel" for="jcode">Job Code</label><input type="text" id="jcode" class="headSearch" placeholder="Search Job Code" />');
    });
    var api = "http://localhost:8080/budgetSummary/json/";
    var slash = "/";
    $('#selectForm').submit(function (e) {
        $('#showHide').css('visibility', 'visible');
        e.preventDefault();
        console.log(yr);
        // console.log(typ);
        var table = $('#budget').on('error.dt', function (e, settings, techNote, message) {
            $('#myModal').modal('show');
        }).DataTable({
            dom: 'Brtip',
            destroy: true,
            columnDefs: [{
                    "targets": [5],
                    "orderable": false
                }],
            ajax: {
                "url": api + yr + slash + "all",
                dataSrc: "rows",
            },
            bProcessing: true,
            "language": {
                "infoEmpty": "No entries to show"
            },
            paging: false,
            error: function (xhr, error, thrown) {
                alert('unable to retrieve data');
            },
            "footerCallback": function (row, data, start, end, display) {
                var api = this.api(), data;

                var intVal = function (i) {
                    return typeof i === 'string' ?
                            i.replace(/[\$,]/g, '') * 1 :
                            typeof i === 'number' ?
                            i : 0;
                };

                regTotal = api
                        .column(2, {page: 'current'})
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                otTotal = api
                        .column(3, {page: 'current'})
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);
                regpayTotal = api
                        .column(4, {page: 'current'})
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);

                $(api.column(2).footer()).html(regTotal);
                $(api.column(3).footer()).html(otTotal);
                $(api.column(4).footer()).html(regpayTotal);

            },
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
            columns: [
                {"data": "jobCode"},
                {"data": "description"},
                {"data": "operating", render: $.fn.dataTable.render.number(',', '.', 0, '$')},
                {"data": "obligated", render: $.fn.dataTable.render.number(',', '.', 0, '$')},
                {"data": "balance", render: $.fn.dataTable.render.number(',', '.', 0, '$')},
                {"data": null,
                    "render": function (data, type, row) {
                        return `
                       <div class="dropdown1">
                       <button class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                       <div class="dropdown-content1">
                         <a href="#">Edit Expense</a>
                         <a href="#">Delete Expense</a>
                       </div>
                     </div>
                       `
                    }
                }
            ],
        });
        $.fn.dataTable.ext.errMode = 'throw';
        table.columns().every(function () {
            var that = this;
            $('input', this.header()).on('keyup change', function () {
                if (that.search() !== this.value) {
                    that
                            .search(this.value)
                            .draw();
                }
            });
        });
    },
            );

});