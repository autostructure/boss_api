var jsonData = [
    {"sec": "A", "name": "Caresse, Hennington", "ppleft":"12", "regPay":"3000", "regPaytoDate":"59220", "ot":"0"},
    {"sec": "AD", "name": "Wortley, Bill", "ppleft":"10", "regPay":"4000", "regPaytoDate":"33320", "ot":"0"},
    {"sec": "AB", "name": "Smith, Becky", "ppleft":"12", "regPay":"3000", "regPaytoDate":"43888", "ot":"0"},
    {"sec": "D", "name": "Smith, Tom", "ppleft":"12", "regPay":"3000", "regPaytoDate":"59220", "ot":"0"},
    {"sec": "A", "name": "Keidel, Dog", "ppleft":"12", "regPay":"3000", "regPaytoDate":"87333", "ot":"0"},
    {"sec": "DA", "name": "Sherry, Drew", "ppleft":"12", "regPay":"3000", "regPaytoDate":"39220", "ot":"0"},
    {"sec": "A", "name": "Rogers, Mark", "ppleft":"12", "regPay":"1200", "regPaytoDate":"29220", "ot":"0"},
    {"sec": "A", "name": "Buckley, Bill", "ppleft":"12", "regPay":"1000", "regPaytoDate":"9220", "ot":"0"},
    {"sec": "A", "name": "Caresse, Hennington", "ppleft":"12", "regPay":"3000", "regPaytoDate":"59220", "ot":"0"},
    {"sec": "A", "name": "Caresse, Hennington", "ppleft":"12", "regPay":"3000", "regPaytoDate":"59220", "ot":"0"},
    {"sec": "A", "name": "Caresse, Hennington", "ppleft":"12", "regPay":"3000", "regPaytoDate":"59220", "ot":"0"},
    {"sec": "A", "name": "Caresse, Hennington", "ppleft":"12", "regPay":"3000", "regPaytoDate":"59220", "ot":"0"},
    {"sec": "A", "name": "Caresse, Hennington", "ppleft":"12", "regPay":"3000", "regPaytoDate":"59220", "ot":"0"},
    {"sec": "A", "name": "Caresse, Hennington", "ppleft":"12", "regPay":"3000", "regPaytoDate":"59220", "ot":"0"},
    {"sec": "A", "name": "Caresse, Hennington", "ppleft":"12", "regPay":"3000", "regPaytoDate":"59220", "ot":"0"},
    {"sec": "A", "name": "Caresse, Hennington", "ppleft":"12", "regPay":"3000", "regPaytoDate":"59220", "ot":"0"},
    {"sec": "A", "name": "Caresse, Hennington", "ppleft":"12", "regPay":"3000", "regPaytoDate":"59220", "ot":"0"},
    {"sec": "A", "name": "Caresse, Hennington", "ppleft":"12", "regPay":"3000", "regPaytoDate":"59220", "ot":"0"},
    {"sec": "A", "name": "Caresse, Hennington", "ppleft":"12", "regPay":"3000", "regPaytoDate":"59220", "ot":"0"}
];
 
$(document).ready(function() {
    $('#payrollSub').addClass('show');
    $('#payrollSub > li:nth-child(2) > a').addClass('highlight');
 
    $('#payroll thead tr:nth-child(2) th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" class="headSearch" placeholder="Search" />' );
        if ($(this).is("#stop")){
            return false;
        }
    } );
 
    var dt = $('#payroll').DataTable({ 
        dom: 'Brtip',
        bProcessing: true,
        bPaginate: false,
        // setting footer totall
        "footerCallback": function ( row, data, start, end, display ) {
            var api = this.api(), data;
 
            var intVal = function ( i ) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '')*1 :
                    typeof i === 'number' ?
                        i : 0;
            };
 
            regTotal = api
                .column( 4, { page: 'current'} )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
            otTotal = api
                .column( 5, { page: 'current'} )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
            regpayTotal = api
                .column( 6, { page: 'current'} )
                .data()
                .reduce( function (a, b) {
                    console.log(intVal(a));
                    console.log(intVal(b));
                    return intVal(a) + intVal(b);
                }, 0 );
            gTotal = api
                .column( 7, { page: 'current'} )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
 
            $( api.column( 4 ).footer() ).html(regTotal);
            $( api.column( 5 ).footer() ).html(otTotal);
            $( api.column( 6 ).footer() ).html(regpayTotal);
            $( api.column( 7 ).footer() ).html(gTotal);
        },
        // end of footer totals
        buttons: [
            {
                text: 'Print <i class="fa fa-lg fa-print"></i>',
                extend: 'print',
                exportOptions:{
                    columns: [0,1,2,3,4,5,6,7,8,9]
                },
                className: 'table-btns print-btn'
            },
            {
                text: 'Add <i class="fa fa-lg fa-plus"></i>',
                action: function(){
                    window.location.href = '../budget/newExpense.html';
                },
                className: 'table-btns add-btn'
            },
            {
                text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
                action: function(){
                    window.location.reload();
                },
                className: 'table-btns refresh-btn'
            }
         
        ],
        data: jsonData,
        columnDefs: { sortable: false, targets: [8] },
        columns: [
            { data: "sec" },
            { data: "name" },
            { data: "ppleft" },
            { data: "regPay" },
            { data: "regPaytoDate" },
            { data: "ot" },
            { data: null,
                "render":function(data, type, full, meta){
                    return data.ppleft * data.regPay;
                 }
            },
            { data: null,
                "render": function(data, type, full, meta){
                    var proj = data.ppleft * data.regPay
                return parseInt(data.regPaytoDate) + parseInt(proj);
                }
            },
 
            {data: null,
                "render": function(){
                    return `
                    <div>
                        <div class="dropdown1">
                        <button class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                        <div class="dropdown-content1">
                        <a href="#">Edit Pay</a>
                        <a href="#">Delete Pay</a>
                        </div>
                    </div>
                  </div>
                    `
                }
            }],
        });
 
        dt.columns().every( function () {
            var that = this;
            $( 'input', this.header(2) ).on( 'keyup change', function () {
                if ( that.search() !== this.value ) {
                    that
                        .search( this.value )
                        .draw();
                }
            });
        });
});