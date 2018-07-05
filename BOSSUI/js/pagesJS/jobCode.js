
var tempAPI = 'http://localhost:8090/jobCode?=';
var fiscalyear = $("#fy").val(); 
console.log(fiscalyear);
       
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
        //    bSortCellsTop: true,
           dom: "Brtip",
           ajax:{"url":tempAPI,"dataSrc":""},
           columnDefs: [ {
            "targets": [4],
            "orderable": false
            },
            {
            "targets":[0],
            "visible": false,
            }
            ],


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
                            <a data-target="#myModal" href="#myModal" class="editBtn" id="' + row.id + '"  data-id=\"" + full[1] + "\" >Edit Job Code</a>
                            <a data-target="#deleteModal" href="#deleteModal" class="deleteBtn" id="' + row.id + '" data-id=\"" + full[1] + "\" >Delete Job Code</a>
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
                text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                extend: 'excel',
                exportOptions:{
                    columns: [0,1,2,3]
                },
                className: 'table-btns excel-btn'
            },
            {
                text:'Add <i class="fa fa-lg fa-plus"></i>',
                action:function(){
                    $('#addModal').modal('show');
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
       $('#jobCodes tbody').on( 'click', '.deleteBtn', function () {
            var data = table.row( $(this).parents('tr') );
            $('#deleteModal').modal('show');
            $('#deleteModal .modal-body').on('click', '.delete', function(){
                console.log(data);
            table
                .row( data)
                .remove()
                .draw();
            })
        });

        $('#jobCodes tbody').on( 'click', '.editBtn', function () {
            var data = table.row( $(this).parents('tr') ).data();
            $('#myModal #mfyear').val(data.financialYear);
            $('#myModal #mjcode').val(data.jobCode);
            $('#myModal #mdesc').val(data.description);
            $('#myModal #mamount').val(data.amount);
            $('#myModal').modal('show');
        } );
        
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

