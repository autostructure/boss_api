var dataSet = [
    
       {"jobCode": "FRF13818", "description": "PROGRAM","operating":"1200000", "obligated":"4130617", "balance":"7789363", "fmmi":"12000000", "fmmib":"7789363"}
    //    {"jobCode": "FRF15818", "description":"LAB", "operating":"127650", "obligated":"61318", "balance":"66312", "fmmi":"127650", "fmmib":"66332"},
    //    {"jobCode": "FRF19818", "description":"FOREST CHNG", "operating":"1200000", "obligated":"4130617", "balance":"7789363", "fmmi":"12000000", "fmmib":"7789363"},
    //    {"jobCode": "FRF17778", "description":"FOREST CHNG", "operating":"1200000", "obligated":"4130617", "balance":"7789363", "fmmi":"12000000", "fmmib":"7789363"},
    //    {"jobCode": "FRF16548", "description":"GEDI", "operating":"1200000", "obligated":"4130617", "balance":"7789363", "fmmi":"12000000", "fmmib":"7789363"},
    //    {"jobCode": "FRF13218", "description":"ALBEDO", "operating":"1200000", "obligated":"4130617", "balance":"7789363", "fmmi":"12000000", "fmmib":"7789363"},
    //    {"jobCode": "FRF11118", "description":"Landfire (Moisen) ISA", "operating":"1200000", "obligated":"4130617", "balance":"7789363", "fmmi":"12000000", "fmmib":"7789363"},
    //    {"jobCode": "FRF12238", "description":"NASA-CHENG MOD #3 Cfwd", "operating":"30027", "obligated":"0", "balance":"30027", "fmmi":"30027", "fmmib":"30027"},
    //    {"jobCode": "FRF13818", "description":"PROGRAM", "operating":"64000", "obligated":"13176", "balance":"50824", "fmmi":"64000", "fmmib":"50824"},
    //    {"jobCode": "FRF13818", "description":"All Condition Plots (Rhoads) ISA", "operating":"45,432", "obligated":"45,386", "balance":"46", "fmmi":"45432", "fmmib":"46"}
    
   ];
    
$(document).ready(function() {
       $('#budgetSub').addClass('show');
       $('#budgetSub > li:nth-child(1) > a').addClass('highlight');
       $('#budget thead tr:nth-child(2) th').each( function () {
           var title = $(this).text();
           $(this).html( '<input type="text" class="headSearch" placeholder="Search" />' );
           if ($(this).is("#stop")){
               return false;
           }
       });   
    
       var table = $('#budget').DataTable({ 
           dom: 'Brtip',
           bProcessing: true,
           data: dataSet,
           buttons: [
               {
                   text: 'Print <i class="fa fa-lg fa-print"></i>',
                   extend: 'print',
                   exportOptions:{
                       columns: [0,1,2,3,4,5,6]
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

           columns: [
               { data: "jobCode" },
               { data: "description" },
               { data: "operating", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
               { data: "obligated", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
               { data: "balance", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
               { data: "fmmi", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
               { data: "fmmib", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
               {data: null,
                   "render": function(data, type, row){
                       return `
                       <div class="dropdown1">
                       <button class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                       <div class="dropdown-content1">
                         <a href="#">View Expense</a>
                         <a href="#">Edit Expense</a>
                         <a href="#">Delete Expense</a>
                       </div>
                     </div>
                       `
                   }
            }]       
        });


           table.columns().every( function () {
               var that = this;
               $( 'input', this.header() ).on( 'keyup change', function () {
                   if ( that.search() !== this.value ) {
                       that
                           .search( this.value )
                           .draw();
                   }
               });
           });
});