
api = 'http://localhost:8090'

// displaying the current vehicle information on IWFIA page
var id = window.location.pathname.split("/")[2];
if (id) {
    var url = '/vehicle?id=' + id;
    if (parseInt(id)) {
        url = '/vehicle/' + id;
    }
    var url = '/vehicle/' + id;
    console.log(url);
    console.log(id);
    $.ajax({
        type: 'GET',
        url: url,
        contentType: "application/json",
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function(vehs){
            console.log(vehs);
            $('#pLicense').append(vehs.license);
            $('#pVin').append(vehs.vin);
            $('#pYear').append(vehs.modelYear);
            $('#pMake').append(vehs.make);
            $('#pModel').append(vehs.modelNumber);
        },
    error: function(json) {
    }
    });
};
// end

$(document).ready(function () {

        
    // function to populate the table
    function populateDataTable(testData) {
        var table = $('#monthlyCosts').DataTable({
            data: testData,
            bProcessing: true,
            bPaginate: false,
            dom: 'Brtip',
            columnDefs: [{
                "targets": [4, 5],
                "orderable": false
            }],
            columns: [
                {data: "vLicense"},
                {data: "vMonth"},
                {data: "vYear"},
                {data: "vOperator"},
                {data: "vMileage"},
                {data: "vGas"},
                {data: "vOil"},
                {data: "vDaysUsed"},
                {data: "vCost"},
                {data: "vJobCode"}                                                                                

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
                        $('html,body').animate({scrollTop: $("#monthlyCosts").offset().top}, 'slow');
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
        if ($('#monthlyCostsForm:valid').length == 0) {
            showError("Please ensure all fields are filled out correctly");
            return false;
        } else {
            e.preventDefault();
        }
        // creating vars to submit to ajax
        var form = $('#monthlyCostsForm');
        var method = "POST";
        var url = "/contact";
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
    "monthlyCostsForm": [
        [//aux info row
            {"fieldName": "beginMonth",
                "title": "Out of Service Month",
                "type": "select/vmonth",
                "placeholder": "Enter Month",
            },
            {"fieldName": "beginYear",
                "title": "Out of Service Year",
                "type": "select/vyear",
                "placeholder": "Enter Year",
            },        
             
        ], // end row
        [
            {   "custom": '<input type="submit" class="btn fleetBtn" id="btn_add_aux" value="Add Month Out of Service">' }
        ]
    ]
}

// calling bootstrap field writer function
addBootstrapFields(fields)    