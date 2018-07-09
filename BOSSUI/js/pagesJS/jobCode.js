
var fy = $('#fy').val();
var tempAPI = 'http://localhost:8090/jobCode';


var dt = new Date();
var optionDate = dt.getFullYear();
console.log(optionDate);
      $(document).ready(function() {
        $('#budgetSub').addClass('show');
        $('#budgetSub > li:nth-child(2) > a').addClass('highlight');
        $('#jobCodes thead tr:nth-child(1) th:nth-child(2)').each( function () {
            $(this).html( '<label class="headLabel" for="unitCode">Unit Code</label><input type="text" id="unitCode" class="headSearch" placeholder="Search Unit Code" />' );
        } );
        $('#jobCodes thead tr:nth-child(1) th:nth-child(3)').each( function () {
            $(this).html( '<label class="headLabel" for="jcode">Job Code</label><input type="text" id="jcode" class="headSearch" placeholder="Search Job Code" />' );
        } );   
        $('#jobCodes thead tr:nth-child(1) th:nth-child(4)').each( function () {
            $(this).html( '<label class="headLabel" for="desc">Description</label><input type="text" id="desc" class="headSearch" placeholder="Search Description" />' );
        } );      

       
        var table = $('#jobCodes').DataTable( {
            initComplete: function () {
                this.api().columns([0]).every( function () {
                    var column = this;
                    var select = $('<select id="fySelect" class="fySelect form-control"><option value="2017"></option></select>')
                        .appendTo( $('#fySearch').empty() )
                        .on('load', function(){
                            $(this).val('2017')
                        
                        
                        .on( 'change', function () {
                            var val = $.fn.dataTable.util.escapeRegex(
                                $(this).val()
                            );
     
                            column
                                .search( val ? '^'+val+'$' : '', true, false )
                                .draw();
                        } );
     
                    column.data().unique().sort().each( function ( d, j ) {
                        select.append( '<option value="'+d+'">'+d+'</option>' )
                    } );


                    
                    
                
            },            
        //    bSortCellsTop: true,
           dom: "Brtip",
           "paging": false,
           ajax:{"url":tempAPI,"dataSrc":""},
           columnDefs: [ {
            "targets": [4],
            "orderable": false
            },

            ],

            
           columns:[
            { data: "financialYear"},
            { data: "overrideCode"},
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
    //    $('#jobCodes tbody').on( 'click', '.deleteBtn', function () {
    //         var data = table.row( $(this).parents('tr') );
    //         $('#deleteModal').modal('show');
    //         $('#deleteModal .modal-body').on('click', '.delete', function(){
    //             console.log(data);
    //         table
    //             .row( data)
    //             .remove()
    //             .draw();
    //         })
    //     });

        $('#jobCodes tbody').on( 'click', '.editBtn', function () {
            var data = table.row( $(this).parents('tr') ).data();
            $('#myModal #mfyear').val(data.financialYear);
            $('#myModal #mjcode').val(data.jobCode);
            $('#myModal #mdesc').val(data.description);
            $('#myModal #mamount').val(data.amount);
            $('#myModal #munitcode').val(data.overrideCode);
            $('#myModal').modal('show');
        } );

});





//    function deleteRecordModal(id) {
//     $("#deleteModal").attr("data-id",id);
//     console.log("data-id", id);
//     }
    
//     $("#delete").click(function(){
//         var getid = $("#deleteModal").attr("data-id");
//         $("#rowid" + getid).closest("tr").remove();

//     });




