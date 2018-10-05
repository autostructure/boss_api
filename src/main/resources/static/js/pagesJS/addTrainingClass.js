$(document).ready(function () {
    makeAjaxCall("/trainingCourse", "GET", null).then(populateDataTable, null);



    function populateDataTable(jsonData) {
        var dataWithIds = {};
        var categories = {};
        for (k in jsonData) {
            dataWithIds[jsonData[k].id] = jsonData[k];
            categories[jsonData[k].category] = true;
        }
        var table = $('#tblCourse').DataTable({
            'bPaginate':false,
            'data': jsonData,
            'dom':'Bfti',
            'columns': [
                {'data':'category'},
                {'data':'title'},
                {'data':'description'},
                {'data':'defaultYears'},
                {'data':'defaultYearsLeader'},
                {'data':null,
                    'render':function(data, type, row) {
                        var buttonList = $("#templateButtonList").clone().attr('id','');
                        buttonList.find("a").attr("data-training", JSON.stringify(row));
                        return buttonList.prop('outerHTML');
                    },
                    'orderable':false,
                }
            ],
            'buttons': [
                {
                    text: 'Print <i class="fa fa-lg fa-print"></i>',
                    extend: 'print',
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4,]
                    },
                    className: 'table-btns print-btn'
                },
                {
                    text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                    extend: 'excel',
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4, ]
                    },
                    className: 'table-btns excel-btn'
                },
                {
                    text: 'Add <i class="fa fa-lg fa-plus"></i>',
                    action: function () {
                        $("#myModal_add").modal('show');
                    },
                    className: 'table-btns add-btn'
                },
                {
                    text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
                    action: function () {
                        window.location.reload();
                    },
                    className: 'table-btns refresh-btn'
                },
            ]
        });

        selCat = $("select[name='selCategory']")
        selCat.append("<option value=''>Choose a Category</option>");
        for (k in categories) {
            selCat.append("<option value='"+k+"'>"+k+"</option>");
        }
        selCat.append("<option value='addNewCategory'>Create a new category</option>");

        selCat.on("change update click", function() {
            if ($(this).val() == 'addNewCategory') {
                $("[name=category]").closest(".col").show();
            } else {
                $("[name=category]").closest(".col").hide();
                $("[name=selCategory], [name=category]").val($(this).val());
            }
        });
        $(".btn-modal").on("click", function() {
            var info = $(this).data('training');
            var id = info.id;
            $(".trainingId").val(id);
            $(".category").text(dataWithIds[id].category);
            $(".courseTitle").text(dataWithIds[id].title);
        });
        $(".btn-modal-edit").on("click", function() {
            var info = $(this).data('training');
            var form = $("#form_edit");
            form.find("[name=category], [name=selCategory]").val(info.category);
            form.find("[name=title]").val(info.title);
            form.find("[name=description]").val(info.description);
            form.find("[name=defaultYears]").val(info.defaultYears);
            form.find("[name=defaultYearsLeader]").val(info.defaultYearsLeader);
        });
        
        $("#btn_remove").on("click", function() {
            var url = "/trainingCourse/" + $(".trainingId").val();
            makeAjaxCall(url, "DELETE", null).then(
                function(){window.location.reload();},
                function(e){console.log(e.responseJSON);}
            )
        });
        $("#btn_add, #btn_edit").on("click", function() {
            var form;
            var method;
            var url = "/trainingCourse";
            if (this.id == "btn_add") {
                url = "/trainingCourse";
                method = "POST";
                form = $("#form_add");
            } else if (this.id == "btn_edit") {
                url = "/trainingCourse/" + $(".trainingId").val();
                method = "PUT";
                form = $("#form_edit");
            } else {
                console.error("How'd this get here?");
                return false;
            }
            var data = {
                'category':form.find('[name=category]').val(),
                'title':form.find('[name=title]').val(),
                'description':form.find('[name=description]').val(),
                'defaultYears':form.find('[name=defaultYears]').val(),
                'defaultYearsLeader':form.find('[name=defaultYearsLeader]').val(),
            }
            if (this.id == "btn_edit") data.id = form.find('[name=id]').val();
            data = JSON.stringify(data);
            function re() {window.location.reload();}
            function err(a,b,c) {console.log(a.responseJSON);}
            console.log(data);
            //makeAjaxCall(url, method, data).then(re, err);
            $.ajax({
                url: url,
                type: method,
                data: data,
                contentType: "application/json",
                cache: false,
                timeout: 600000,
                success: re,
                error: err,
            });
        });
    }
});

var fields = {
    "form_add": [
        [
            {   "fieldName":"selCategory",
                "title":"Category",
                "placeholder":"Select Category",
                "type":"select/text",
                "required":true,
            },
            {   "fieldName":"category",
                "title":"Category",
                "placeholder":"Select Category",
                "type":"input/text",
                "hidden":true,
            },
            {   "fieldName":"title",
                "title":"Title",
                "type":"input/text",
                "required":true,
            },
            {   "fieldName":"description",
                "title":"Description",
                "placeholder":"Brief Description, maybe a sentance long.",
                "type":"textarea",
                "colspan":12,
                "required":true,
            },
            {   "fieldName":"defaultYears",
                "title":"Default Years Valid",
                "placeholder":"years",
                "type":"input/number",
                "colspan":6,
                "required":true,
            },
            {   "fieldName":"defaultYearsLeader",
                "title":"Default Years Valid<br>For Crew Leader",
                "placeholder":"years",
                "type":"input/number",
                "colspan":6,
                "required":true,
            },
        ]
    ]
}
fields.form_edit = fields.form_add;
CustomFormFunctions.addBootstrapFields(fields);


