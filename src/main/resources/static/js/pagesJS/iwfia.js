    var testData = [{
        "vLicense": "A3827",
        "vMonth": "March",
        "vYear": "2018",
        "vOperator": "Kells, Bethany",
        "vMileage": "12,378",
        "vGas": "22",
        "vOil": "0",
        "vDaysUsed": "12",
        "vCost": "0",
        "vJobCode": "JRB1231"
    }
    ];
    api = 'http://localhost:8080'
    $(document).ready(function () {
    
        // populating the jquery datatable from api using ajax
        // $.ajax({
        //     type: 'GET',
        //     url: api + '/contact',
        //     success: function (json) {
        //         populateDataTable(json);
        //     }
        // });

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
                    $('#iwfiaForm_activityCode_code').append('<option value="' + value.id + '">' + value.code + ', ' + value.name + '</option>');
                });
            }
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
    
        // submitting data for new aux contacts
        $('input[type=submit]').on("click", function (e) {
            // checking form validity
            if ($('#iwfiaForm:valid').length == 0) {
                showError("Please ensure all fields are filled out correctly");
                return false;
            } else {
                e.preventDefault();
            }
            // creating vars to submit to ajax
            var form = $('#iwfiaForm');
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
                    "fieldName": "activityCode.code",
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
    addBootstrapFields(fields)    