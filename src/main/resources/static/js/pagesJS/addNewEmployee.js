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
        url: '/boss/activityCode',
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
                    window.location = "/boss/addNewEmployee";
                };
                break;
            case '#submitAndEdit':
                callback = function (json) {
                    window.location = "/boss/editEmployee/" + json.id;
                };
                break;
        }
        // $('input[type=radio]').on("change", function(){
        //     var btnId = $('input[name=radioS]:checked').attr('id');
        //     var btnV = $('input[name=radioS]:checked').val();
        //     console.log(btnId + ', ' + btnV);
        //     var btnName = $('input[name=radioS]:checked').attr('name');
    
        //     console.log(btnName);
        //     btnName = btnId;
        //     console.log(btnName);
        // })        


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
                // dumb bit of code i'm working on because I'm a dummy
                // if ($(this).attr("name") == "radioS") {
                //     var bdn = $(this).attr("name");
                //     var idn = $(this).attr("id")
                //     this.attr("name") = idn;
                    // ($(this).attr("name") == $(this).attr("id"));
                // }                
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
        putPartialInfo('/boss/employeeProfile', 0, data, callback);
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
            },
            {"fieldName": "middleInitial",
                "title": "Middle Initial",
                "type": "input/text",
            },
            {"fieldName": "lastName",
                "title": "Last Name",
                "type": "input/text",
                "required": true,
            },
            {"fieldName": "preferredName",
                "title": "Preferred Name",
                "type": "input/text",
        },
        ],

            {"custom": "<hr/>"},
            {"custom": '<h4 class="title3">System Access Level</h4>'},

        [          
        //     {
        //      "custom" :`
        //     <div class="form-check form-check-inline">
        //      <input class="form-check-input" type="radio" name="radioS" id="admin" value="true">
        //      <label class="form-check-label" for="admin">Admin</label>
        //    </div>
        //    <div class="form-check form-check-inline">
        //      <input class="form-check-input" name="radioS" type="radio" id="office" value="true">
        //      <label class="form-check-label" for="office">Office</label>
        //    </div>   
        //    <div class="form-check form-check-inline">
        //      <input class="form-check-input" name="radioS" type="radio" id="crewLead" value="true">
        //      <label class="form-check-label" for="crewLead">Crew Lead</label>
        //    </div>                       
        //    <div class="form-check form-check-inline">
        //      <input class="form-check-input" name="radioS" type="radio" id="support" value="true">
        //      <label class="form-check-label" for="support">Support</label>
        //    </div>
        //    <div class="form-check form-check-inline">
        //      <input class="form-check-input" name="radioS" type="radio" id="field" value="true">
        //      <label class="form-check-label" for="field">Field</label>
        //    </div>           
        //    <div class="form-check form-check-inline">
        //      <input class="form-check-input" name="radioS" type="radio" id="owner" value="true">
        //      <label class="form-check-label" for="owner">Owner</label>
        //    </div> `                                                          
        //     } 
        ],
        [
            {
            "fieldName": "nameCode",
            "title": "System ID (Auto - Generated)",
            "type": "input/text",
            "required": true,
            "placeholder": "System ID (Auto - Generated)",
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
            {"fieldName": "addressStreet1",
                "title": "Street Address (Home)",
                "type": "input/text",
                "required": false,
                "colspan": 6,
            },
            {"fieldName": "addressStreet2",
                "title": "Street Address (Home Line 2)",
                "type": "input/text",
                "required": false,
                "colspan": 6,
            },            
            {"fieldName": "addressCity",
                "title": "City (Home)",
                "type": "input/text",
                "required": false,
            },
            {"fieldName": "addressState",
                "title": "State (Home)",
                "type": "select/state",
                "required": false
            },
            {"fieldName": "addressZip",
                "title": "Zip (Home)",
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