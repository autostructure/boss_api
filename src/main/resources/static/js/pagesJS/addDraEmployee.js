$(document).ready(function () {
    
    var max_fields = 5; //maximum input boxes allowed
    var wrapper = $(".items"); //Fields wrapper
    var add_button = $(".add_field_button"); //Add button ID
    var x = 1; //initlal text box count
    $(add_button).click(function (e) { //on add input button click
        e.preventDefault();
        var row = $(".template.dra-entry").clone().attr("id", "nth_row_"+x).removeClass("template");
        console.log($(".template.dra-entry").find("select").clone());
        row.find("input, select").val("");
        row.appendTo(wrapper);
    });
    $('.items').on("click", ".remove_field", function (e) { //user click on remove field
        e.preventDefault();
        $(this).closest('.mainAdd').remove();
        x--;
    });
    $('.items').on("click", ".copy_field", function (e) { //user click on remove field
        e.preventDefault();
        var row = $(this).closest('.mainAdd');
        var row2 = row.clone();
        row.find("select, input").each(function(){
            row2.find("[name='"+this.name+"']").val($(this).val());
        });
        x++;
        $('.items').append(row2);
    });

    CustomFormFunctions.populateDropDown($("select#draTitle_OG"), "/draCourse", "id", "title", false, function(){onAJAXSuccess("employees")});
    CustomFormFunctions.populateDropDown($("select#dStation_OG"), "/employeeProfile", "id", "nameCode", false, function(){onAJAXSuccess("titles")});
    
    var ajaxWaits = {"employees":false, "titles":false};
    function onAJAXSuccess(title) {
        ajaxWaits[title] = true;
        allReturned = true;
        for (k in ajaxWaits) {
            if (ajaxWaits[k] == false) allReturned = false;
        }
        if (allReturned) {
            $(".add_field_button").click();
        }
        console.log("Hello");
    }

    $("#submitV").click(function (e) {
        e.preventDefault();
        var allValid = true;
        var inProgress = 0;
        $(".mainAdd").each(function(){
            e.preventDefault();
            var entry = $(this);
            inProgress ++;
            var valid = true;
            entry.find("select, input").each(function(){
                valid = valid && this.validity.valid;
            });
            if (valid) {
                var data = {
                    "employee" : {"id":parseInt(entry.find("[name='employee.id']").val())},
                    "deliberativeRiskAssessmentCourseId" : parseInt(entry.find("[name='deliberativeRiskAssessmentCourseId']").val()),
                    "dateOfAssessment" : CustomFormFunctions.formatDate(entry.find("[name='dateOfAssessment']").val(), "ISO-Short"),
                    "dateDue" : CustomFormFunctions.formatDate(entry.find("[name='dateDue']").val(), "ISO-Short"),
                }
                CustomFormFunctions.putPartialInfo("/dra", 0, data, 
                    function(){
                        inProgress--;
                        console.log(entry.find(".remove_field"));
                        entry.find(".remove_field").click();
                    }
                );
                $(this).find(".remove_field").click(); // remove row.
            } else {
                // DIsplay Errors
                allValid = false;
                console.log("Problem");
            }
        });
        if (allValid) {
            window.location.reload();
        }

        return;

        $('#myModal_success').on('hidden.bs.modal', function () {
            location.reload();
        });

        $('#myModal_error').on('shown.bs.modal', function () {
            var modal = $(this);
            var div = "";
            $.each(employee_errors, function (index, value) {
                div = div + '<div class="row"><div class="col">Employee Name: ' + value.lastName + ", " + value.firstName + '</div></div>';
            });

            $(modal).find('.modal-body .employees_error').append(div);

        });
    });
});


var dra_var = {

    "dateOfAssessment": "2018-10-11T17:40:01.320Z",
    "employeeProfile": {
    },
    "id": 0,
    "title": "string",
    "yearsValid": 0

};

function getCorrectDateFormat(date_str) {
    var date = new Date(date_str);

    return date.toISOString();
}




