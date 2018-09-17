var TestData = {"id":"47","lastName":"Barrs","firstName":"Karisa","middleInitial":"","nameCode":"KBarrs","preferredName":"","driversLicense.expiration":'2018-09-12',"driversLicense.state":'MI',"driversLicense.number":'dsfsd',"addressStreet":"465","dateOfBirth":"2018-09-12","addressCity":"fds","addressZip":"12345","homePhone":"","cellPhone":"(546) 654-8646","personalEmail":"asdf@sadf","roomNumber":"","title":"","confidentialityAgreementDate":"","series":"","emergencyContactFirstName1":"","emergencyContactStreetAddress1":"","emergencyContactCity1":"","emergencyContactZip1":"","emergencyContactHomePhone1":"","emergencyContactCellPhone1":"","emergencyContactWorkPhone1":"","emergencyContactRelationship1":"","emergencyContactFirstName2":"","emergencyContactStreetAddress2":"","emergencyContactCity2":"","emergencyContactZip2":"","emergencyContactHomePhone2":"","emergencyContactCellPhone2":"","emergencyContactWorkPhone2":"","emergencyContactRelationship2":"","driversLicense.state":"DE","addressState":"SC","stateAssigned":"Choose State Assigned","dutyStation":"","activityCode":{"name":"Administration","code":"AD"},"grade":"Choose Grade","emergencyContactState1":"Choose State","emergencyContactState2":"Choose State"}
var testing = false;
$(document).ready(function() {

 
    var nameCode = window.location.pathname.split("/")[2];
    
    if (nameCode) {
        var url = '/employeeProfile?nameCode=' + nameCode;
        if (parseInt(nameCode)) {
            url = '/employeeProfile/' + nameCode;
        }
        $.ajax({
            type: 'GET',
            url: url,
            contentType: "application/json",
            dataType: 'json',
            cache: false,
            timeout: 600000,
            success: function(json){
                console.log(json);
                $("#title").text("Edit Employee");
                if (testing) json = TestData;
                for (var key in json) {
                    fill(key, json[key]);
                }
                function fill (key, value) {
                    if (value instanceof Object) {
                        for (k in value) {
                            fill(k, value[k]);
                        }
                    } else {
                        var input = $("input[name='"+key+"'], select[name='"+key+"']");
                        if (input.attr("data-provide") == 'datepicker' && value != null) {
                            date = new Date(value);
                            value = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
                        }
                        input.val(value);
                    }
                }
                //$("select[name='driversLicense.state'] option[value='"+'MI'+"']").attr("selected", true);
                $("select[name='activityCode.code']").val(json.activityCode.code);
                //$("input[name='driversLicense.employeeProfile.id']").val(json.id);
            },
            error: function(json) {

            }
        })
    }

    $("select").attr("size","");
    $('#formGeneralInfo_firstName, #formGeneralInfo_lastName').on("keyup change update", function(){
        var nc = $("#formGeneralInfo_firstName").val()[0] || "";
        nc += $("#formGeneralInfo_lastName").val() || "";
        nc = nc.replace(/[^A-Za-z]/g, "");
        $("#formGeneralInfo_nameCode").val(nc);
    })
    $("input[type=tel]").on("keyup change update", function(){
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
        success: function(json){
            $('select#activityCode').append(json.map(function(ac){
                return '<option value="'+ac.code+'">'+ac.name+'</option>';
            }));
        },
        error: function(request, status, error) {
            console.log(request.responseJSON);
            $("#error")
            $("#error").show();
        }
    });

    $('form').on('click focus', function() {
        $('#error, #success').hide();
    });
    $('input[type=submit]').on("click", function(e){
        var id = '#' + $(this).attr('id');
        var callback;
        switch(id) {
            case '#submitEmployeeInfo':
                callback = function(json) {
                    $("#employeeId").val(json.id);
                    $("#work-tab").trigger("click");
                };
                formId = '#formGeneralInfo';
            break;
            case '#submitWorkInfo':
                callback = function(json) {
                    $("#employeeId").val(json.id);
                    $("#emergency-tab").trigger("click");
                };
                formId = '#formWorkInfo';
            break;
            case '#submitEmergencyInfo':
                callback = function() {
                    window.location.href = "/viewAllEmployees";
                };
                formId = '#formEmergencyInfo';
            break;
        }
        var data = {};
        var forms = $('#formGeneralInfo, #formWorkInfo, #formEmergencyInfo');

        forms.find('input:not([disabled]):not([type=submit]), textarea, select').each(function(){
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
                if (obj[path[i]] == NaN) obj[path[i]] = null;
            } else {
                console.log(this);
            }
        });
        console.log(data);
        if ($(formId+":valid").length == 0) {
            $("<input type=submit>").appendTo($(formId)).click().remove();
            showError("The information on this form must be valid.");
            return false;
        } else if ($('#formGeneralInfo:valid').length == 0) {
            $("<input type=submit>").appendTo($("#formGeneralInfo")).click().remove();
            showError("The information on the General form must be valid.");
            return false;
        } else {
            e.preventDefault();
        }
        /* forms.find('select').each(function(){
            data[this.name] = $(this).find("option:selected").val();
        }); */
        if ($('select#activityCode option:selected').val()) {
            data.activityCode = {
                //name: $('select#activityCode option:selected').text(),
                code: $('select#activityCode option:selected').val()
            }
        }
        var id = $("#employeeId").val();
        if (id) {
            data.id = id;
        }
        //console.log(data);
        putInformation(data, callback, id);
    });
    function putInformation(json, callback, id) {
        var url = "/employeeProfile";
        var requestType = "PUT";
        if (id == 0) {
            requestType = "POST";
        } else {
            url = url + "/" + id;
        }
        $.ajax({
            type: requestType,
            url: url,
            contentType: "application/json",
            dataType: 'json',
            cache: false,
            timeout: 600000,
            data: JSON.stringify(json),
            success: callback,
            error: function(request, status, error) {
                console.log(request.responseJSON);
                $('#error').show();
            }
        });
    }
});
function showError(msg) {
    $("#errorText").html(msg);
    $("#error").show();
    $('html,body').animate({scrollTop: $(".bannerImg").offset().top},'slow');
}
/*****
 * This function takes readable data and writes a Bootstrap Grid-layout Form, attaching it to the elements specified.
 * @param {object} data A specifically formatted object
 *          data[parentElement][row][column] = {
 *                  fieldName:"", // Required, the name and partial id of the input element
 *                  title:"", // Required, the label information
 *                  type:"", // Required, typically input/text, input/tel, input/date, input/email, etc.
 *                  required:bool, // defaults to false.  States whether or not field is required.
 *                  colspan:12, // if included, the field takes up a specific number of columns.  If not included, the field spreads out evenly with the others.
 *          }
 *          data[parentElement][row][column] = {
 *                  custom:$(object), // Either a newly created element or one pulled from elsewhere on the page.
 *                                    // The element is included inside a row.
 *          }
 *          data[parentElement][row].custom = $(object) // The custom element is included between the other rows.
 *
function addBootstrapFields(data) {
    for (var parent in data) {
        var rows = data[parent];
        var rowEls = $("");
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            if (row.custom) {
                rowEls = rowEls.add(row.custom);
            } else {
                var rowEl = $("<div class=row></div>");
                for (var j = 0; j < row.length; j++) {
                    var col = row[j];
                    if (col.custom) {
                        rowEl.append(col.custom);
                    } else {
                        var colEl = $("<div class='col'></div>").appendTo(rowEl); // -El for element
                        var groupEl = $("<div class='form-group'></div>").appendTo(colEl);
                        var types = col.type.split("/");
                        if (col.colspan) {
                            colEl.addClass("col-md-"+col.colspan);
                        }
                        var thisID = col.fieldName.replace(/\./g,"_");
                        var labelEl = $("<label>"+col.title+"</label>")
                                        .attr("for", parent + "_" + thisID);
                        groupEl.append(labelEl);
                        var input;
                        if (types[0] == "input") {
                            var input = $("<input>").attr("type",types[1])
                                                    .attr("placeholder", col.placeholder || "Enter " + col.title)
                        } else if (types[0] == "select") {
                            var input = $("<select>");
                            input.append($("<option value=''>"+ (col.placeholder || "Choose " + col.title) + "</option>"));
                            if (types[1] == "state") {
                                input.append($("#templateSelectState option").clone());
                            }
                            if (col.options) {
                                for(var val in col.options) {
                                    name = col.options[val];
                                    input.append("<option value='"+val+"'>"+name+"</option>")
                                }
                            }
                        }
                        input.addClass('form-control')
                             .attr("id", parent + "_" + thisID)
                             .attr("name", col.fieldName)
                             .attr("aria-label",col.title);
                        if (col.type == "input/tel") {
                            input.attr("pattern","\\(?\\d{3}\\)? ?-?\\d{3} ?-?\\d{4}");
                        }
                        if (col.type == "input/zipCode") {
                            input.attr("pattern","(\\d{5}([\\-]\\d{4})?)");
                            input.attr("placeHolder","12345 or 12345-6789");
                        }
                        if (col.type == "input/date") {
                            input.attr("type", "text");
                            input.attr("data-date-format","MMM DD YYYY");
                            input.attr("data-provide","datepicker");
                            input.addClass("datepicker");
                            var inputGroup = $('<div class="input-group date" data-provide="datepicker">');
                            inputGroup.append(input);
                            inputGroup.append('<div class="input-group-addon"><span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span></div>');
                            groupEl.append(inputGroup);
                            input.datepicker({format:"MMM DD YYYY"});
                        }
                        if (col.required) {
                            input.attr("required", true);
                            labelEl.html(labelEl.html() + "<span class='reqClass'> *</span>");
                        }
                        if (col.disabled) {
                            input.attr("required", false);
                            input.attr("disabled", true);
                        }
                        if (col.pattern) {
                            input.attr("pattern",col.pattern);
                        }
                        if (col.type == "input/number") {
                            if (col.step) input.attr("step",col.step);
                            if (col.min) input.attr("step",col.min);
                            if (col.max) input.attr("step",col.max);
                        }
                        if (col.type != "input/date") {
                            groupEl.append(input);
                        }
                        groupEl.append('<div class="help-block with-errors"></div>');
                        if (col.hidden) {
                            colEl.hide();
                        }
                    }
                }
                rowEls = rowEls.add(rowEl);
            }
        }
        $("#"+parent).append($(rowEls));
    }
}
/**/
var fields = {
    "formGeneralInfo": [
        { "custom":'<h4 class="title3">Employee Information</h4>' },
        [ //Name Info
            {   "fieldName":"lastName",
                "title":"Last Name",
                "type":"input/text",
                "required":true,
                "colspan":4,
            },
            {   "fieldName":"firstName",
                "title":"First Name",
                "type":"input/text",
                "required":true,
                "colspan":4,
            },
            {   "fieldName":"middleInitial",
                "title":"Middle Initial",
                "type":"input/text",
                "colspan":4,
            },
            {   "fieldName":"nameCode",
                "title":"Name Code",
                "type":"input/text",
                "required":true,
                "placeholder":"Name Code (generated)",
                "colspan":4,
            },
            {   "fieldName":"preferredName",
                "title":"Preferred Name",
                "type":"input/text",
                "colspan":8,
            },
        ], // end row
        /*[ // License Info
            {   "fieldName":"driversLicense.number",
                "title":"Driver's License Number",
                "type":"input/text",
                "required":true,
                "colspan":6,
            },
            {   "fieldName":"driversLicense.state",
                "title":"Driver's License State",
                "type":"select/state",
                "required":true,
                "colspan":6,
            },
            {   "fieldName":"driversLicense.expiration",
                "title":"Driver's License Expiration Date",
                "type":"input/date",
                "required":true,
                "colspan":6,
            },
            {   "fieldName":"dateOfBirth",
                "title":"Date Of Birth",
                "type":"input/date",
                "required":true,
                "colspan":6,
            },
            {   "fieldName":"driversLicense.employeeProfile.id",
                "title":"",
                "type":"input/number",
                "hidden":true,
                "disabled":true,
            },
        ], // end row*/
        { "custom":'<h4 class="title3">Contact Information</h4>' },
        [ // Address Info
            {   "fieldName":"addressStreet",
                "title":"Street Address",
                "type":"input/text",
                "required":true,
                "colspan":12,
                "disabled":true,
            },
            {   "fieldName":"addressCity",
                "title":"City",
                "type":"input/text",
                "required":true,
            },
            {   "fieldName":"addressState",
                "title":"State",
                "type":"select/state",
                "required":true
            },
            {   "fieldName":"addressZip",
                "title":"Zip",
                "type":"input/zipCode",
                "required":true
            },
        ], // end row
        [ // Contact Info
            {   "fieldName":"homePhone",
                "title":"Home Phone",
                "type":"input/tel",
            },
            {   "fieldName":"cellPhone",
                "title":"Cell Phone",
                "type":"input/tel",
                "required":true
            },
            {   "fieldName":"personalEmail",
                "title":"Personal Email",
                "type":"input/email",
                "required":true
            },
        ], // end row
        [
            { "custom":$('#submitEmployeeInfo').parent() }
        ]
    ], // end form
    "formWorkInfo": [
        [
            {   "fieldName":"stateAssigned",
                "title":"State Assigned",
                "type":"select/state",
                "required":true
            },
            {   custom: $("#dutyStation").parent().parent() }, // duty station
            {   "fieldName":"roomNumber",
                "title":"Room Number",
                "type":"input/text",
                "required":true
            },
        ], // end row
        [
            {   "fieldName":"title",
                "title":"Employee Title",
                "type":"input/text",
                "required":true,
            },
            {   "custom": $("#activityCode").parent().parent() }, // Activity Code
        ], // end row
        [ // Pay information
            {   "fieldName":"pwpSalary",
                "title":"pwp Salary",
                "type":"input/number",
                "required":true,
                "step": 0.01,
                "disabled": true,
            },
            {   "fieldName":"regPayPerPayPeriod",
                "title":"Regular Pay Per Pay Period",
                "type":"input/number",
                "required":true,
                "step": 0.01,
                "disabled": true,
            },
            {   "fieldName":"overtimeHourlyWage",
                "title":"Overtime Hourly Wage",
                "type":"input/number",
                "required":true,
                "step": 0.01,
                "disabled": true,
            },
            {   "fieldName":"payPeriodsLeft",
                "title":"Pay Periods Left",
                "type":"input/number",
                "required":true,
                "step": 0.01,
                "disabled": true,
            },
        ], // end row
        [ // Other
            {   "fieldName":"confidentialityAgreementDate",
                "title":"Confidentiality Agreement Date",
                "type":"input/date",
                "required":true
            },
            {   "fieldName":"grade",
                "title":"Grade",
                "type":"select/text",
                "required":true,
                "options": [,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
            },
            {   "fieldName":"series",
                "title":"Series",
                "type":"input/text",
                "required":true
            },
        ], // end row
        [
            {   "custom": $("#submitWorkInfo").parent() } // Next Button
        ]
    ],
    "formEmergencyInfo" : [
        {   "custom":'<h4 class="title4">First Contact</h4>' },
        [ // Name
            {   "fieldName":"emergencyContactFirstName1",
                "title":"First Name",
                "type":"input/text",
                "required":true
            },
            {   "fieldName":"emergencyContactFirstName1",
                "title":"Last Name",
                "type":"input/text",
                "required":true
            },
        ], // end row
        [ // Address Info
            {   "fieldName":"emergencyContactStreetAddress1",
                "title":"Street Address",
                "type":"input/text",
                "required":true,
                "colspan":12,
            },
            {   "fieldName":"emergencyContactCity1",
                "title":"City",
                "type":"input/text",
                "required":true,
            },
            {   "fieldName":"emergencyContactState1",
                "title":"State",
                "type":"select/state",
                "required":true
            },
            {   "fieldName":"emergencyContactZip1",
                "title":"Zip",
                "type":"input/zipCode",
                "required":true
            },
        ], // end row
        [ // Phone Numbers and Relationship
            {   "fieldName":"emergencyContactHomePhone1",
                "title":"Home Phone",
                "type":"input/tel",
                "required":true,
                "colspan":6,
            },
            {   "fieldName":"emergencyContactCellPhone1",
                "title":"Cell Phone",
                "type":"input/tel",
                "required":true,
                "colspan":6,
            },
            {   "fieldName":"emergencyContactWorkPhone1",
                "title":"Work Phone",
                "type":"input/tel",
                "required":true,
                "colspan":6,
            },
            {   "fieldName":"emergencyContactRelationship1",
                "title":"Relationship",
                "type":"input/text",
                "required":true,
                "colspan":6,
            },
        ], // end row
        {   "custom":'<h4 class="title4">Second Contact</h4>' },
        [ // Name
            {   "fieldName":"emergencyContactFirstName2",
                "title":"First Name",
                "type":"input/text",
            },
            {   "fieldName":"emergencyContactFirstName2",
                "title":"Last Name",
                "type":"input/text",
            },
        ], // end row
        [ // Address Info
            {   "fieldName":"emergencyContactStreetAddress2",
                "title":"Street Address",
                "type":"input/text",
                "colspan":12,
            },
            {   "fieldName":"emergencyContactCity2",
                "title":"City",
                "type":"input/text",
            },
            {   "fieldName":"emergencyContactState2",
                "title":"State",
                "type":"select/state",
            },
            {   "fieldName":"emergencyContactZip2",
                "title":"Zip",
                "type":"input/zipCode",
            },
        ], // end row
        [ // Phone Numbers and Relationship
            {   "fieldName":"emergencyContactHomePhone2",
                "title":"Home Phone",
                "type":"input/tel",
                "colspan":6,
            },
            {   "fieldName":"emergencyContactCellPhone2",
                "title":"Cell Phone",
                "type":"input/tel",
                "colspan":6,
            },
            {   "fieldName":"emergencyContactWorkPhone2",
                "title":"Work Phone",
                "type":"input/tel",
                "colspan":6,
            },
            {   "fieldName":"emergencyContactRelationship2",
                "title":"Relationship",
                "type":"input/text",
                "colspan":6,
            },
        ], // end row
        [
            {   "custom": $("#submitEmergencyInfo").parent() } // Submit Button
        ]
    ]
}
addBootstrapFields(fields);