// ONCE WE LOAD SOME DATA, NEED TO TURN AJAX URL AND REMOVE VAR
var tempAPI = 'http://localhost:8090/jobCode';
var dataSet = [
    
    {"unitCode":"1254", "jobCode":"FRF13818", "description":"PROGRAM", "operating":"$12,000", "obligated":"$4,130", "balance":"$2,342"},
    {"unitCode":"3222", "jobCode":"FRF14818", "description":"LAB", "operating":"$1,000", "obligated":"$2,130", "balance":"$2,342"},
    {"unitCode":"4112", "jobCode":"FRF23818", "description":"FOREST CHNG", "operating":"$376", "obligated":"$1,000", "balance":"$631"},
    {"unitCode":"1254", "jobCode":"FRF18818", "description":"PROGRAM", "operating":"$12,000", "obligated":"$4,130", "balance":"$2,342"},
    
];

// $(document).ready(function() {
//     $('#budgetSub').addClass('show');
//     $('#budgetSub > li:nth-child(2) > a').addClass('highlight');
//     var dt = $('#jobCodes').DataTable({  
//         dom:'Bfrtip',
//         bProcessing:true,
//         "aoColumnDefs": [
//             { "sClass": "inputCell", "aTargets": [ 0,1,2,3 ] }
//             ],
//         buttons:[
//             {
//                 text:'Print <i class="fa fa-lg fa-print"></i>',
//                 extend:'print',
//                 className:'table-btns print-btn'
//             },
//             {
//                 text:'Add <i class="fa fa-lg fa-plus"></i>',
//                 action:function(){
//                     window.location.href = '../budget/jobCodes.html';
//                 },
//                 className:'table-btns add-btn'
//             },
//             {
//                 text:'Refresh <i class="fa fa-lg fa-repeat"></i>',
//                 action:function(){
//                     window.location.reload();
//                 },
//                 className:'table-btns refresh-btn'
//             }
//         ],
//         data:dataSet,
//         columns:[
//             { data:"unitCode" },
//             { data:"jobCode" },
//             { data:"description" },
//             { data:"operating" },
//             { data:"obligated" },
//             { data:"balance" },
//             {data:null,
//                 "render":function(){
//                     return `
//                     <button class="dropbtn1"><i class="fa fa-minus-circle" style="color:red"></i></button>
//                     `
//                 }
//             }],
        
//         });

        
//             function  myCallbackFunction(updatedCell, updatedRow, oldValue) {
//                 console.log("The new value for the cell is: " + updatedCell.data());
//                 console.log("The values for each cell in that row are: " + updatedRow.data());
//             }
        
//             dt.MakeCellsEditable({
//                 "onUpdate": myCallbackFunction,
//                 "inputCss":'my-input-class',
//                 "columns": [0,1,2,3],
//                 "confirmationButton": { 
//                     "confirmCss": 'my-confirm-class',
//                     "cancelCss": 'my-cancel-class'
//                 }
//             });

//     });



       
      $(document).ready(function() {
        $('#budgetSub').addClass('show');
        $('#budgetSub > li:nth-child(2) > a').addClass('highlight');
        $('#jobCodes thead th').each( function () {
            var title = $(this).text();
            $(this).html( '<input type="text" class="headSearch" placeholder= '+title+' />' );
            if ($(this).is("#stop")){
                return false;
            }
        } );
       
        var table = $('#jobCodes').DataTable( {

           dom: "Brtip",
           ajax:{"url":tempAPI,"dataSrc":""},
           columnDefs: [ {
            "targets": [4, 5],
            "orderable": false
            }],

           columns:[
            { data: "financialYear"},
            { data:"jobCode" },
            { data:"description" },
            { data:"amount", render: $.fn.dataTable.render.number( ',', '.', 2, '$' )},
            {data:null,
                "render":function(){
                    return `
                    <button type="button" class="btn btn-info" data-toggle="modal" id="editModal" data-target="#myModal"><i class="fa fa-2x fa-pencil-square-o"></i></button>
                    `
                }
            },
            {data:null,
                "render":function(){
                    return `
                    <button class="dropbtn1"><i class="fa fa-minus-circle" style="color:red"></i></button>
                    `
                }
            },

            ],
             buttons:[
            {
                text:'Print <i class="fa fa-lg fa-print"></i>',
                extend:'print',
                exportOptions:{
                    columns: [0,1,2,3]
                },
                className:'table-btns print-btn'
            },
            {
                text:'Add <i class="fa fa-lg fa-plus"></i>',
                action:function(){
                    $('#myModal').modal('show');
                },
                className:'table-btns add-btn'
            },
            {
                text:'Refresh <i class="fa fa-lg fa-repeat"></i>',
                action:function(){
                    window.location.reload();
                },
                className:'table-btns refresh-btn'
            }
        ],
        
       });

   
        table.columns().every( function () {
            var that = this;
     
            $( 'input', this.header() ).on( 'keyup change', function () {
                if ( that.search() !== this.value ) {
                    that
                        .search( this.value )
                        .draw();
                }
            } );
        } );

       //making table cells editable, will likely change to edit module in the future
       $('#jobCodes tbody').on( 'click', 'i.fa-minus-circle', function () {
           confirm('Are you sure you want to delete this job code?')
        table
            .row( $(this).parents('tr') )
            .remove()
            .draw();
        });
        
        // function  myCallbackFunction(updatedCell, updatedRow, oldValue) {
        //         console.log("The new value for the cell is: " + updatedCell.data());
        //         console.log("The values for each cell in that row are: " + updatedRow.data());
        //     }
        
        // table.MakeCellsEditable({
        //     "onUpdate": myCallbackFunction,
        //     "inputCss":'my-input-class',
        //     "columns": [0,1,2],
        //     "confirmationButton": { 
        //         "confirmCss": 'my-confirm-class',
        //         "cancelCss": 'my-cancel-class'
        //     }
        // });

   });

    