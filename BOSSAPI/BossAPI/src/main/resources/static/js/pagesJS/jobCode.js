
var fy = $('#fy').val();
var tempAPI = 'http://localhost:8090/jobCode';

var dat = [{ id: 1, overrideCode: "a", financialYear: 2000, jobCode: "SPIX", description: "soils", amount:223 },
    { id: 1, overrideCode: "b", financialYear: 2000, jobCode: "SPIX2", description: "soils2", amount:334 }];

var dt = new Date();
var optionDate = dt.getFullYear();
console.log(optionDate);
$(document).ready(function () {
    try {
        $('#budgetSub').addClass('show');
        $('#budgetSub > li:nth-child(2) > a').addClass('highlight');
        $('#jobCodes thead tr:nth-child(1) th:nth-child(2)').each(function () {
            $(this).html('<label class="headLabel" for="unitCode">Unit Code</label><input type="text" id="unitCode" class="headSearch" placeholder="Search Unit Code" />');
        });
        $('#jobCodes thead tr:nth-child(1) th:nth-child(3)').each(function () {
            $(this).html('<label class="headLabel" for="jcode">Job Code</label><input type="text" id="jcode" class="headSearch" placeholder="Search Job Code" />');
        });
        $('#jobCodes thead tr:nth-child(1) th:nth-child(4)').each(function () {
            $(this).html('<label class="headLabel" for="desc">Description</label><input type="text" id="desc" class="headSearch" placeholder="Search Description" />');
        });
    } catch (e) {
        alert(e);
    }



    var inf = "";
    $.ajax({
        type: 'GET',
        url: api + '/jobCode?finanicalYear=' + fy,
        success: function (json) {
            populateDataTable(json);
        }
    });


    
    function populateDataTable(jsonData) {
        var table = $('#jobCodes').DataTable({
            data: jsonData,
            bProcessing: true,
            bPaginate: false,
            dom: 'Brtip',
            columnDefs: { sortable: false, targets: [4] },
            columns: [
                { data: "financialYear" },
                { data: "overrideCode" },
                { data: "jobCode" },
                { data: "description" },
                { data: "amount" }


            ],
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
            ]
        });


       

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
    }

    $('#jobCodes tbody').on('click', '.editBtn', function () {
        var data = table.row($(this).parents('tr')).data();
        var id = (data.id);
        console.log(id);
        $('#myModal #emfyear').val(data.financialYear);
        $('#myModal #emjcode').val(data.jobCode);
        $('#myModal #emdesc').val(data.description);
        $('#myModal #emamount').val(data.amount);
        $('#myModal #emunitcode').val(data.overrideCode);
        $('#myModal #emid').val(data.id);
        $('#myModal').modal('show');
    });
    $('#jobCodes tbody').on('click', '.deleteBtn', function () {
        var data = table.row($(this).parents('tr')).data();
        var id = (data.id);
        $('#deleteModal #dmfyear').val(data.financialYear);
        $('#deleteModal #dmjcode').val(data.jobCode);
        $('#deleteModal #dmamount').val(data.amount);
        $('#deleteModal #dmdesc').val(data.description);
        $('#deleteModal #dmunitcode').val(data.overrideCode);
        $('#deleteModal #dmid').val(data.id);
        $('#deleteModal').modal('show');
    });




    $("#saveJC").click(function () {
        var jc = {
            "amount": parseInt($('#mamount').val()),
            "description": $('#mdesc').val(),
            "financialYear": parseInt($('#mfyear').val()),
            "overrideCode": $('#munitcode').val(),
            "jobCode": $('#mjcode').val()
        };

        console.log(jc);

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/jobCode",
            data: JSON.stringify(jc),
            dataType: 'json',
            cache: false,
            timeout: 600000,
            success: function (data) {
                console.log(data);
                table.ajax.reload();
                $('#addModal').modal('hide');
                $('#success').show();
                $('#success').delay(5000).fadeOut();
            },
            error: function (e) {
                console.log(e.responseText);
                $('#addModal').modal('hide');
                $('#error').show();
                $('#error').delay(5000).fadeOut();
            }
        });
    });


    $("#editForm").submit(function () {
        var jc = {
            "amount": parseInt($('#emamount').val()),
            "description": $('#emdesc').val(),
            "financialYear": parseInt($('#emfyear').val()),
            "jobCode": $('#emjcode').val(),
            "overrideCode": $('#emunitcode').val(),
            "id": parseInt($('#emid').val())
        };
        var id = parseInt($('#emid').val());

        console.log(jc);
        console.log("/jobcode/" + id);

        $.ajax({
            type: "PUT",
            contentType: "application/json",
            url: "/jobCode/" + id,
            data: JSON.stringify(jc),
            dataType: 'json',
            cache: false,
            timeout: 600000,
            success: function (data) {
                console.log(data);
                $('#myModal').modal('hide');
                $('#success').show();
                $('#success').delay(5000).fadeOut();
                table.ajax.reload();
            },
            error: function (e) {
                e.preventDefault();
                console.log(e.responseText);
                $('#myModal').modal('hide');
                $('#error').show();
                $('#error').delay(5000).fadeOut();
            }
        });
    });


    $("#deleteJC").click(function () {
        var jc = {
            "amount": parseInt($('#dmamount').val()),
            "description": $('#dmdesc').val(),
            "financialYear": parseInt($('#dmfyear').val()),
            "jobCode": $('#dmjcode').val(),
            "overrideCode": $('#dmunitcode').val(),
            "id": parseInt($('#dmid').val())
        };
        var id = parseInt($('#dmid').val());


        console.log("/jobcode/" + id);
        $.ajax({
            type: "DELETE",
            contentType: "application/json",
            url: "/jobCode/" + id,
            data: JSON.stringify(jc),
            dataType: 'json',
            cache: false,
            timeout: 600000,
            success: function (data) {
                table.ajax.reload();
                $('#deleteModal').modal('hide');
                $('#success').show();
                $('#success').delay(5000).fadeOut();
            },
            error: function (e) {
                console.log(e.responseText);
                $('#deleteModal').modal('hide');
                $('#error').show();
                $('#error').delay(5000).fadeOut();
            }
        });
    });

});

