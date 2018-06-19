// ONCE WE LOAD SOME DATA, NEED TO TURN AJAX URL AND REMOVE VAR
var tempAPI = "http://localhost:8090/jobCode";
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



    var editor; // use a global for the submit and return data rendering in the examples
       
      $(document).ready(function() {
        $('#budgetSub').addClass('show');
        $('#budgetSub > li:nth-child(2) > a').addClass('highlight');
          editor = new $.fn.dataTable.Editor( {
              ajax: tempAPI,
              headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
              table: "#jobCodes",
              fields: [ {
                      label: "Unit Code:",
                      name: "unitCode"
                  }, {
                      label: "Job Code:",
                      name: "jobCode"
                  }, {
                      label: "Description:",
                      name: "description"
                  }, {
                      label: "Operating:",
                      name: "operating"
                  }
              ]
          } );
    
       // Activate an inline edit on click of a table cell
    
       $('#jobCodes').DataTable( {
           dom: "Bfrtip",
           ajax: tempAPI,
           idSrc:  'unitCode',
           columns:[
            {
                data: null,
                defaultContent: '',
                className: 'select-checkbox',
                orderable: false
            },
            { data:"unitCode" },
            { data:"jobCode" },
            { data:"description" },
            { data:"operating" },
            { data:"obligated" },
            {data:null,
                "render":function(){
                    return `
                    <button class="dropbtn1"><i class="fa fa-minus-circle" style="color:red"></i></button>
                    `
                }
            },
            {data:null,
                "render":function(){
                    return `
                    <button class="dropbtn1"><i class="fa fa-minus-circle" style="color:red"></i></button>
                    `
                }
            }],
           select: {
               style:    'os',
               selector: 'td:first-child'
           },
           buttons: [
               { extend: "create", editor: editor },
               { extend: "edit",   editor: editor },
               { extend: "remove", editor: editor }
           ]
       } );
   } );

    