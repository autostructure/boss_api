$(document).ready(function () {
    $('#formGeneralInfo_firstName, #formGeneralInfo_lastName').on("keyup change update", function () {
        var nc = $("#formGeneralInfo_firstName").val()[0] || "";
        nc += $("#formGeneralInfo_lastName").val() || "";
        nc = nc.replace(/[^A-Za-z]/g, "");
        $("#formGeneralInfo_nameCode").val(nc);
    })
    $("input[type=tel]").on("keyup change update", function () {
        var num = this.value.replace(/\D/g, "");
        //this.value = "(" + num.substring(0,3) + ") " + num.substring(3,6) + "-" + num.substring(6,10);
    });
    $.ajax({
        type: 'GET',
        url: '/activityCode',
        contentType: "application/json",
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (json) {
            $('select#activityCode').append(json.map(function (ac) {
                return '<option value="' + ac.code + '">' + ac.name + '</option>';
            }));
        },
        error: function (request, status, error) {
            console.log(request.responseJSON);
            showError("Problem with Get ActivityCode.");
        }
    });

    $('form').on('click focus', function () {
        $('#error, #success').hide();
    });
    $('input[type=submit]').on("click", function (e) {
        var id = '#' + $(this).attr('id');
        switch (id) {
            case '#submitAndAddAnother':
                callback = function (json) {
                    window.location = "/addNewEmployee";
                };
                break;
            case '#submitAndEdit':
                callback = function (json) {
                    window.location = "/editEmployee/" + json.id;
                };
                break;
        }
        var data = {};
        $('#formGeneralInfo input:not([disabled]):not([type=submit]), textarea, select').each(function () {
            if (this.name) {
                var path = this.name.split(".");
                var obj = data;
                for (i = 0; i < path.length - 1; i++) {
                    obj[path[i]] = obj[path[i]] || {};
                    obj = obj[path[i]];
                }
                obj[path[i]] = this.value;
                if ($(this).attr("data-provide") == "datepicker") {
                    obj[path[i]] = new Date(this.value).getTime();
                }
                //data[this.name] = this.value;
                if (obj[path[i]] == NaN)
                    obj[path[i]] = null;
            } else {
                console.log(this);
            }
        });
        if ($('#formGeneralInfo:valid').length == 0) {
            $("<input type=submit>").appendTo($("#formGeneralInfo")).click().remove();
            showError("There are invalid fields.");
            return false;
        } else {
            e.preventDefault();
        }
        //console.log(data);
        putPartialInfo('/employeeProfile', 0, data, callback);
    });
});
function showError(msg) {
    $("#errorText").html(msg);
    $("#error").show();
    $('html,body').animate({scrollTop: $(".bannerImg").offset().top}, 'slow');
}
var fields = {
    "formGeneralInfo": [
        {"custom": '<h4 class="title3">Employee Information</h4>'},
        [//Name Info
            {"fieldName": "firstName",
                "title": "First Name",
                "type": "input/text",
                "required": true,
                "colspan": 4,
                "placeholder": "Jane",
            },
            {"fieldName": "middleInitial",
                "title": "Middle Initial",
                "type": "input/text",
                "colspan": 3,
                "placeholder": "Q",
            },
            {"fieldName": "lastName",
                "title": "Last Name",
                "type": "input/text",
                "required": true,
                "colspan": 5,
                "placeholder": "Smith",
            },
            {"fieldName": "nameCode",
                "title": "Name Code",
                "type": "input/text",
                "required": true,
                "placeholder": "Name Code (generated)",
                "colspan": 4,
            },
            {"fieldName": "preferredName",
                "title": "Preferred Name",
                "type": "input/text",
                "colspan": 8,
            },
        ], // end row
        {"custom": "<hr/>"},
        {"custom": '<h4 class="title3">Contact Information</h4>'},
        [// Contact Info
            {"fieldName": "homePhone",
                "title": "Home Phone",
                "type": "input/tel",
            },
            {"fieldName": "cellPhone",
                "title": "Cell Phone",
                "type": "input/tel",
                "required": false
            },
            {"fieldName": "personalEmail",
                "title": "Personal Email",
                "type": "input/email",
                "required": false
            },
        ], // end row
        [// Address Info
            {"fieldName": "addressStreet",
                "title": "Street Address",
                "type": "input/text",
                "required": false,
                "colspan": 12,
                "disabled": true,
            },
            {"fieldName": "addressCity",
                "title": "City",
                "type": "input/text",
                "required": false,
            },
            {"fieldName": "addressState",
                "title": "State",
                "type": "select/state",
                "required": false
            },
            {"fieldName": "addressZip",
                "title": "Zip",
                "type": "input/zipCode",
                "required": false
            },
        ], // end row
        [
            {"custom": $('#submitAndAddAnother').parent()},
            {"custom": $('#submitAndEdit').parent()}
        ]
    ]
}
addBootstrapFields(fields);