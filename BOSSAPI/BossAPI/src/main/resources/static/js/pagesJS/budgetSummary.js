var api = "/expense";
// var api2 = "http://fsxrnsx0128.wrk.fs.usda.gov/aar/services/api/getApprovalReview?requestid=2" 

// ONCE WE LOAD SOME DATA, NEED TO TURN AJAX URL AND REMOVE VAR

var dataSet = [

    ["FRF13818", "PROGRAM", "1200000", "4130617", "7789363", "12000000", "7789363"],
    ["FRF15818", "LAB", "127650", "61318", "66312", "127650", "66332"],
    ["FRF19818", "FOREST CHNG", "1200000", "4130617", "7789363", "12000000", "7789363"],
    ["FRF17778", "FOREST CHNG", "1200000", "4130617", "7789363", "12000000", "7789363"],
    ["FRF16548", "GEDI", "1200000", "4130617", "7789363", "12000000", "7789363"],
    ["FRF13218", "ALBEDO", "1200000", "4130617", "7789363", "12000000", "7789363"],
    ["FRF11118", "Landfire (Moisen) ISA", "1200000", "4130617", "7789363", "12000000", "7789363"],
    ["FRF12238", "NASA-CHENG MOD #3 Cfwd", "30027", "0", "30027", "30027", "30027"],
    ["FRF13818", "PROGRAM", "64000", "13176", "50824", "64000", "50824"],
    ["FRF13818", "All Condition Plots (Rhoads) ISA", "45,432", "45,386", "46", "45432", "46"],

];

$(document).ready(function() {
    $('#budgetSub').addClass('show');
    $('#budgetSub > li:nth-child(1) > a').addClass('highlight');

    var dt = $('#budget').DataTable({  
        dom: 'Bfrtip',
        bProcessing: true,
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
                text: 'Export to Excel <i class="fa fa-lg fa-plus"></i>',
                extend: 'excel',
                exportOptions:{
                    columns: [0,1,2,3,4,5,6]
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
        columns: [
            { title: "Job Code" },
            { title: "Description" },
            { title: "Operating", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
            { title: "Obligated", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
            { title: "Balance", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
            { title: "FMMI Operating", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
            { title: "FMMI Balance", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
            {data: null,
                "render": function(){
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
            }],        
        })
    });

