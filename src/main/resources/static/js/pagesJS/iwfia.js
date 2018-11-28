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
    // getting choices for operators and activity code
    $.ajax({
        url: '/employeeProfile',
        type: 'GET',
        cache: false,
        timeout: 600000,
        success: function(json){
            $.each(json, function(index, value){
                $('#iwfiaForm_operator').append('<option value="' + value.id + '">' + value.lastName + ', ' + value.firstName + '</option>');
            });
        }
    });    
    
    $.ajax({
        url: '/activityCode',
        type: 'GET',
        cache: false,
        timeout: 600000,
        success: function(json){
            $.each(json, function(index, value){
                $('#iwfiaForm_activityCode').append('<option value="' + value.code + '">' + value.code + ', ' + value.name + '</option>');
            });
        }
    });  
    // end
    // submitting data for new IWFIA
    $('input[type=submit]').on("click", function (e) {
        // checking form validity
        if ($('#iwfiaForm:valid').length == 0) {
            showError("Please ensure all fields are filled out correctly");
            return false;
        } else {
            e.preventDefault();
        }
        var form = $('#iwfiaForm');
        var method = "PUT";
        var url = "/vehicle/" + id;
        console.log(id);
        console.log(url);
        var monthlyUsage = {                    
                'gas':parseInt(form.find('[name=gas]').val()),
                'mileage':parseInt(form.find('[name=mileage]').val()),
                'month':parseInt(form.find('[name=month]').val()),
                'oil':parseInt(form.find('[name=oil]').val()),
                "operator": {
                    "activityCode": {
                        "code":form.find('[name=activityCode]').val(),
                        },
                    'id':parseInt(form.find('[name=operator]').val()),
                    },
                'year':parseInt(form.find('[name=year]').val()),
                };
        makeAjaxCall("/vehicle/"+id, "GET", null).then(function(dataIn) {
            console.log(dataIn);
            //dataIn = JSON.parse(dataIn);
            dataIn.monthlyIWFIAUsage.push(monthlyUsage);
            dataIn.assignedOperator = {id:46}
            dataOut = JSON.stringify(dataIn);
            console.log(dataIn);
            console.log(dataOut);
            return makeAjaxCall("/vehicle/"+id, "PUT", dataOut);
        }, function(error) {
            console.log("Error", error);
            console.log(error.responseJSON);
        }).then(function(data){
            console.log("successfully updated");
            console.log(data);
        }, function(error) {
            console.log("Error", error);
            console.log(error.responseJSON);
            return false;
        });
        return;

        // stringifying the data ajax
        data = JSON.stringify(data);
        console.log(data);    
        // ajax PUT call
        $.ajax({
            url: url,
            type: method,
            data: data,
            contentType: "application/json",
            cache: false,
            timeout: 600000,
            success: function(response){
                // e.preventDefault();
                console.log("successfully updated");
                console.log(data);
                // window.location.reload();
            },
            error: function(error){
                return false;
                e.preventDefault();
                console.log("Error" + error);
                console.log(a.responseJSON);
            }
        });
    });

    // function to populate the table
    function populateDataTable(testData) {
        var table = $('#iwfia').DataTable({
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
                        $('html,body').animate({scrollTop: $("#iwfia").offset().top}, 'slow');
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

    

});
    
// showing error message if form is not valid
function showError(msg) {
    $("#errorText").html(msg);
    $("#error").show();
    $('html,body').animate({scrollTop: '100px'});
}  
    
    // using bootstrap field writer to populate the form
    var fields = {
        "iwfiaForm": [
            [//aux info row
                {"fieldName": "month",
                    "title": "Month",
                    "type": "select/vmonth",
                    "required": false,
                    "colspan": 2,
                    "placeholder": "Enter Month",
                },
                {"fieldName": "year",
                    "title": "Year",
                    "type": "select/vyear",
                    "colspan": 2,
                    "placeholder": "Enter Year",
                },                
                {"fieldName": "operator",
                    "title": "Operator",
                    "type": "select/text",
                    "colspan": 2,
                    "required": false,
                },
                {"fieldName": "mileage",
                    "title": "Mileage",
                    "type": "input/text",
                    "placeholder": "Enter Mileage",
                    "required": false,
                    "colspan": 2
                },
                {"fieldName": "gas",
                    "title": "Gas",
                    "type": "input/text",
                    "placeholder": "Gallons of Gas",
                    "required": false,
                },
                {"fieldName": "oil",
                    "title": "Oil",
                    "type": "input/text",
                    "placeholder": "Oil",
                    "required": false
                },
                {
                    "fieldName": "activityCode",
                    "title": "Section Code",
                    "type": "select/text",
                    "colspan": 2,
                    "required": false,

                }              
            ], // end row
            [
                {   "custom": '<input type="submit" class="btn fleetBtn" id="btn_add_aux" value="Add IWFIA Usage">' }
            ]
        ]
    }
    
    // calling bootstrap field writer function
    addBootstrapFields(fields);