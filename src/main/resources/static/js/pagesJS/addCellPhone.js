$(document).ready(function () {

    //$('.add_field_button').trigger('click');
    init();
    $(".copy_field").on('click',
        function(e) {
            e.preventDefault();
            var row = $(this).closest(".mainAdd");
            
            var row2 = row.clone();
            row.find("select, input").each(function () {
                row2.find("[name='" + this.name + "']").val($(this).val());
            });
            
            $(".items").append(row2);

        });

    $('.remove_field').on('click',
        function(e) {
            e.preventDefault();
            $(this).closest(".mainAdd").remove();
            
        });
    $(".add_field_button").on('click',
        function (e) {
            var row = $("div.trainBG div.template");
            var row2 = row.clone();
            $(row2).removeClass("template");
            $(row2).attr("hidden", false);
            $.ajax({
                url: '/boss/employeeProfile',
                type: 'GET',
                cache: false,
                success: function (json) {
                    $.each(json, function (index, val) {
                        row2.find("[name='employee.id']").append('<option value="' + val.id + '">' + val.lastName + ', ' + val.firstName + '</option>');
                    });
                },
                error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });
            $(".items").append(row2);
        });


    $("#submitV").click(function(e) {
        e.preventDefault();
        var allValid = true;
        var inProgress = 0;
        var itms = $("div.items");
        var mainAdd = $(itms).find("div.mainAdd");
        if (mainAdd.length > 1) {

            $(mainAdd).each(function () {
                e.preventDefault();
                var entry = $(this);
                inProgress++;
                var valid = true;
                entry.find("select, input").each(function () {
                    valid = valid && this.validity.valid;
                });
                if (valid) {
                    var data = {
                        "assignedTo": { "id": parseInt(entry.find("[name='employee.id']").val()) },
                        "carrier": entry.find("[name='Carrier_name']").val(),
                        "make": entry.find("[name='make_name']").val(),
                        "model": entry.find("[name='Model_name']").val(),
                        "notes": entry.find("[name='Notes']").val(),
                        "serialNumber": entry.find("[name='SerialNum_name']").val(),
                        "number": entry.find("[name='Number_name']").val()
                    };
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
                            
                            inProgress--;
                            console.log(entry.find(".remove_field"));
                            entry.find(".remove_field").click();
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
            });
        } else {
            e.preventDefault();
            var entry = $(mainAdd);
            inProgress++;
            var valid = true;
            entry.find("select, input").each(function () {
                valid = valid && this.validity.valid;
            });
            if (valid) {
                var data = {
                    "assignedTo": { "id": parseInt(entry.find("[name='employee.id']").val()) },
                    "carrier": entry.find("[name='Carrier_name']").val(),
                    "make": entry.find("[name='make_name']").val(),
                    "model": entry.find("[name='Model_name']").val(),
                    "notes": entry.find("[name='Notes']").val(),
                    "serialNumber": entry.find("[name='SerialNum_name']").val(),
                    "number": entry.find("[name='Number_name']").val()
                };
                
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
                        
                        inProgress--;
                        console.log(entry.find(".remove_field"));
                        entry.find(".remove_field").click();
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
        }
        if (allValid) {
            $("#exampleModal").modal("show");
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

function getCorrectDateFormat(date_str) {
    var date = new Date(date_str);

    return date.toISOString();
}

function init() {
    var row = $("div.trainBG div.template");
    var row2 = row.clone();
    $(row2).removeClass("template");
    $(row2).attr("hidden", false);
    $.ajax({
        url: '/boss/employeeProfile',
        type: 'GET',
        cache: false,
        success: function (json) {
            $.each(json, function (index, val) {
                row2.find("[name='employee.id']").append('<option value="' + val.id + '">' + val.lastName + ', ' + val.firstName + '</option>');
            });
        },
        error: function (a, b, c) {
            console.log(a.responseText);
        }
    });
    $(".items").append(row2);
}