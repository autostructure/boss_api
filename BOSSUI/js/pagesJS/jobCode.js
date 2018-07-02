
var tempAPI = 'http://localhost:8090/jobCode';
       
      $(document).ready(function() {
        $('#budgetSub').addClass('show');
        $('#budgetSub > li:nth-child(2) > a').addClass('highlight');
        $('#jobCodes thead tr:nth-child(2) th').each( function () {
            var title = $(this).text();
            $(this).html( '<input type="text" class="headSearch" placeholder="Search" />' );
            if ($(this).is("#stop")){
                return false;
            }
        } );
       
        var table = $('#jobCodes').DataTable( {
           serverSide: true,
           dom: "Brtip",
           ajax:{"url":tempAPI,"dataSrc":""},
           columnDefs: [ {
            "targets": [4],
            "orderable": false
            }],

           columns:[
            { data: "financialYear"},
            { data:"jobCode" },
            { data:"description" },
            { data:"amount", render: $.fn.dataTable.render.number( ',', '.', 2, '$' )},
            {data: null,
                "render": function(data, type, row){
                    return `
                    <div class="dropdown1">
                    <button class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                        <div class="dropdown-content1">
                            <a data-target="#myModal" data-toggle="modal" class="editModal" href="#myModal">Edit Job Code</a>
                            <a data-target="#deleteModal" id="' + row.id + '" data-toggle="modal" href="#deleteModal" onclick="deleteRecordModal('+ row.id +')">Delete Job Code</a>
                        </div>
                    </div>
                    
                    `
                }
            }],  
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
                text: 'Export to Excel <i class="fa fa-lg fa-plus"></i>',
                extend: 'excel',
                exportOptions:{
                    columns: [0,1,2,3,4,5,6]
                },
                className: 'table-btns excel-btn'
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
       $('#jobCodes tbody').on( 'click', '#deleteRecord', function () {
           confirm('Are you sure you want to delete this job code?')
        table
            .row( $(this).closest('tr') )
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

   function deleteRecordModal(id) {
    $("#deleteModal").attr("data-id",id);
    console.log("data-id", id);
    }
    
    $("#delete").click(function(){
        var getid = $("#deleteModal").attr("data-id");
        $("#rowid" + getid).closest("tr").remove();

    });

    