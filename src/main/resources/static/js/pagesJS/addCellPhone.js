$(document).ready(function () {

    //$('.add_field_button').trigger('click');
    init();






    $("#submitV").click(function(e) {
        e.preventDefault();
        var allValid = true;
        var inProgress = 0;
        var itms = $("div.items");
        var mainAdd = $(itms).find("div.mainAdd");


            e.preventDefault();
            var entry = $('.wrapper');
            inProgress++;
            var valid = true;
            entry.find("select, input").each(function () {
                valid = valid && this.validity.valid;
            });
        if (valid) {
            var data = {
                "assignedTo": { "id": parseInt(entry.find("[name='employee']").val()) },
                "carrier": entry.find("[name='phoneCarrier']").val(),
                "make": entry.find("[name='make'] :selected").val(),
                "model": entry.find("[name='model']").val(),
                "notes": entry.find("[name='notes']").val(),
                "serialNumber": " ",//entry.find("[name='SerialNum_name']").val(),
                "number": entry.find("[name='phoneNumber']").val()
            };

            if (data.notes == undefined) {
                data.notes = " ";
            }
            

            var emp_id = data.assignedTo;
            $.ajax({
                url: "/boss/employeeProfile/" + emp_id,
                type: 'GET',
                cache: false,
                async: false,
                success: function (json) {
                    data.assignedTo = json;
                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });


            CustomFormFunctions.putPartialInfo("/boss/cellPhone",
                0,
                data,
                function () {
                    $("#exampleModal").modal("show");

                },
                function (a, b, c) {
                    console.log(a.responseText);
                }
            );
            $(this).find(".remove_field").click(); // remove row.
        } else {
            // DIsplay Errors
            allValid = false;
            console.log("Problem");
        }
        


        return;
    });

    $('#exampleModal').on('click', '#viewList', function () {
        window.location = "/boss/viewPhones";
    });

    $('#exampleModal').on('click', '#addAnother', function () {
        location.reload(); 
    });


});

var form_data = {
    "phoneForm": [
        [
            {
                'fieldName': 'employee',
                'type': 'select/input',
                'title': 'Assigned To Employee',
                'required': true
            },
            {
                'fieldName': 'make',
                'type': 'select/text',
                'title': 'Make',
                'options':{
                    'Apple': 'Apple',
                    'Samsung': 'Samsung',
                    'Huawei': 'Huawei',
                    'Nokia': 'Nokia',
                    'Sony': 'Sony',
                    'LG': 'LG',
                    'HTC': 'HTC',
                    'Motorola': 'Motorola',
                    'Other': 'Other'
                },
                'required': true
            },
            {
                'fieldName': 'phoneCarrier',
                'type': 'input/text',
                'title': 'Phone Carrier',
                'required': true
            }
        ],
        [
            {
                'fieldName': 'model',
                'type': 'input/text',
                'title': 'Model',
                'required': true
            },
            {
                'fieldName': 'phoneNumber',
                'type': 'input/tel',
                'required': true,
                'title': 'Phone Number'
            }
        ],
        [
            {
                'fieldName': 'notes',
                'required': false, //just a reminder to keep this false
                'type': 'input/text',
                'title': 'Notes'
            }
        ],
        {'custom':'<input type="button" class="btn btn-submit" id="submitV" value="Submit"></input>'}
    ]
};

CustomFormFunctions.addBootstrapFields(form_data);


function getCorrectDateFormat(date_str) {
    var date = new Date(date_str);

    return date.toISOString();
}

function init() {
    
    $.ajax({
        url: '/boss/employeeProfile',
        type: 'GET',
        cache: false,
        success: function (json) {
            $.each(json, function (index, val) {
                $('div.wrapper').find("[name='employee']").append('<option value="' + val.id + '">' + val.lastName + ', ' + val.firstName + '</option>');
            });
        },
        error: function (a, b, c) {
            console.log(a.responseText);
        }
    });

}