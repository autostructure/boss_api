
$(document).ready(function () {

    $("#auxForm").on("submit", function(e) {
        var form = $('#auxForm');
        var method = "POST";
        var url = "/contact";
        var data = {
            'city':form.find('[name=city]').val(),
            'description':form.find('[name=description]').val(),
            'phone1':form.find('[name=phone1]').val(),
            'phone2':form.find('[name=phone2]').val(),
            'state':form.find('[name=state]').val(),
            'streetAddress': null
        }
        data = JSON.stringify(data);
        function re() {
            alert("successfully updated");
            window.location.reload();
        }
        function err(a,b,c) {
            e.preventDefault();
            console.log(a.responseJSON);
        }
        console.log(data);
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


    var fields = {
        "auxForm": [
            [//Name Info
                {"fieldName": "description",
                    "title": "Description",
                    "type": "input/text",
                    "required": true,
                    "colspan": 2,
                    "placeholder": "Enter Description",
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
                    "title": "Additional Phone Number",
                    "type": "input/tel",
                    "required": false
                }
            ], // end row
            [
            {   "custom": '<button type="submit" class="btn" id="btn_add">Add AUX</button>' }
            ]
        ]
    }
    addBootstrapFields(fields)
});