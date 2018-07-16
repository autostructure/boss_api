var api = "http://localhost:8090/expense";

// ONCE WE LOAD SOME DATA, NEED TO TURN AJAX URL AND REMOVE VAR

var dataSet = [
     {"actCode":"FS", "secCode":"HD", "nameCode":"LaneyM", "description":"FEDEX", "payperiod":"05","seq":"2019",  "jobCode":"FRF13818", "expCode":"26", "total":"12,000,000", "obligatedDate":"2011/07/25"} ,
     {"actCode":"SF", "secCode":"TD", "nameCode":"LazerasS", "description":"UPS", "payperiod":"21", "seq":"2019", "jobCode":"FRF13818", "expCode":"26", "total":"1,877", "obligatedDate":"2011/07/25" },
     {"actCode":"DS", "secCode":"GD", "nameCode":"RussellM", "description":"AZ", "payperiod":"11", "seq":"2019", "jobCode":"FRF13818", "expCode":"26", "total":"12,000,000", "obligatedDate":"2011/07/25"} ,
     {"actCode":"RS", "secCode":"AD", "nameCode":"BlancD", "description":"UPS", "payperiod":"2", "seq":"2019", "jobCode":"FRF13818", "expCode":"26", "total":"100", "obligatedDate":"2011/07/25" },
     {"actCode":"R", "secCode":"DD", "nameCode":"ThomH", "description":"DISCOUNT STORAGE", "payperiod":"05", "seq":"2016", "jobCode":"FRF13818", "expCode":"26", "total":"12,000", "obligatedDate":"2011/07/25"} ,
    { "actCode":"K", "secCode":"D", "nameCode":"CharioniD", "description":"UPS", "payperiod":"05", "seq":"2019", "jobCode":"FRF13818", "expCode":"26", "total":"12,000,000", "obligatedDate":"2011/07/25" }

];

$(document).ready(function() {
    $('#expenseSub').addClass('show');
    $('#expenseSub > li:nth-child(2) > a').addClass('highlight');

    // $('#expense thead th').each( function () {
    //     var title = $(this).text();
    //     $(this).html( '<input type="text" class="headSearch" placeholder= '+title+' />' );
    //     if ($(this).is("#stop")){
    //         return false;
    //     }
    // } );



    var dt = $('#expense').DataTable({  
        dom: 'Brtip',
        bProcessing: true,
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
                text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                extend: 'excel',
                exportOptions:{
                    columns: [0,1,2,3,4,5,6,7,8,9]
                },
                className: 'table-btns excel-btn'
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
        data: dataSet,
        aoColumns: [
            { data: "actCode" },
            { data: "secCode" },
            { data: "nameCode" },
            { data: "description" },
            { data: "payperiod" },
            { data: "seq" },
            { data: "jobCode" },
            { data: "expCode" },
            { data: "total" },
            { data: "obligatedDate" },
            {data: null,
                "render": function(){
                    return `
                    <div>
                        <div class="dropdown1">
                        <button class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                        <div class="dropdown-content1">
                        <a href="#">View / Edit Expense</a>
                        <a href="#">Delete expense</a>
                        </div>
                    </div>
                  </div>
                    
                    `
                }
            }],
        });

        dt.columns().every( function () {
            var that = this;
     
            $( 'input', this.header() ).on( 'keyup change', function () {
                if ( that.search() !== this.value ) {
                    that
                        .search( this.value )
                        .draw();
                }
            } );
        } );

    });

