api = '/boss/'
$(document).ready(function () {

    // populating the jquery datatable from api using ajax
    $.ajax({
        type: 'GET',
        url: api + '/boss/contact',
        success: function (json) {
            populateDataTable(json);
        }
    });

    // function to populate the table
    function populateDataTable(jsonData) {
        var table = $('#auxTable').DataTable({
            data: jsonData,
            bProcessing: true,
            bPaginate: false,
            dom: 'Brtip',
            columnDefs: [{
                "targets": [4, 5],
                "orderable": false
            }],
            columns: [
                {data: "description"},
                {data: "streetAddress"},
                {data: "city"},
                {data: "state"},
                {data: "phone1"},
                {data: "phone2"}

            ],
            buttons: [
                {
                    text: 'Print <i class="fa fa-lg fa-print"></i>',
                    extend: 'print',
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4, 5]
                    },
                    className: 'table-btns print-btn'
                },
                {
                    text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                    extend: 'excel',
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4, 5]
                    },
                    className: 'table-btns excel-btn'
                },
                {
                    text: 'Add <i class="fa fa-lg fa-plus"></i>',
                    action: function () {
                        $('html,body').animate({scrollTop: $("#auxForm").offset().top}, 'slow');
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
    }; //end of populating the table function

    // hiding error message once we start modifying the form again
    $('form').on('click focus', function () {
        $('#error, #success').hide();
    });

    // submitting data for new aux contacts
    $('input[type=submit]').on("click", function (e) {
        // checking form validity
        if ($('#auxForm:valid').length == 0) {
            showError("Please ensure all fields are filled out correctly");
            return false;
        } else {
            e.preventDefault();
        }
        // creating vars to submit to ajax
        var form = $('#auxForm');
        var method = "POST";
        var url = "/boss/contact";
        var data = {
            'city':form.find('[name=city]').val(),
            'description':form.find('[name=description]').val(),
            'phone1':form.find('[name=phone1]').val(),
            'phone2':form.find('[name=phone2]').val(),
            'state':form.find('[name=state]').val(),
            'streetAddress':form.find('[name=streetAddress]').val()
        }
        // stringifying the data for ajax
        data = JSON.stringify(data);

        // ajax post call
        $.ajax({
            url: url,
            type: method,
            data: data,
            contentType: "application/json",
            cache: false,
            timeout: 600000,
            success: function(response){
                console.log("successfully updated");
                console.log(data);
                window.location.reload();
            },
            error: function(error){
                return false;
                e.preventDefault();
                console.log("Error" + error);
                console.log(a.responseJSON);
            }
        });
    });
});

// showing error message if form is not valid
function showError(msg) {
    $("#errorText").html(msg);
    $("#error").show();
    $('html,body').animate({scrollTop: '100px'});
}  

// using bootstrap field writer to populate the form
var fields = {
    "auxForm": [
        [//aux info row
            {"fieldName": "description",
                "title": "Description",
                "type": "input/text",
                "required": true,
                "colspan": 2,
                "placeholder": "Enter Description",
            },
            {"fieldName": "streetAddress",
                "title": "Street Address",
                "type": "input/text",
                "colspan": 2,
                "placeholder": "Enter Street Address",
            },                
            {"fieldName": "city",
                "title": "City",
                "type": "input/text",
                "colspan": 2,
                "placeholder": "Enter City",
                "required": true,
            },
            {"fieldName": "state",
                "title": "State",
                "type": "select/state",
                "required": true,
                "colspan": 2
            },
            {"fieldName": "phone1",
                "title": "Phone Number",
                "type": "input/tel",
                "required": true,
            },
            {"fieldName": "phone2",
                "title": "Additional Phone",
                "type": "input/tel",
                "required": false
            }
        ], // end row
        [
            {   "custom": '<input type="submit" class="btn btn_pers_copy" id="btn_add_aux" value="Add Auxilary Contact">' }
        ]
    ]
}

// calling bootstrap field writer function
addBootstrapFields(fields)
