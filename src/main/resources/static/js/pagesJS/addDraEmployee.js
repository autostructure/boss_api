$(document).ready(function () {
    $('#dra').addClass('show');
    $('#dra > li:nth-child(1) > a').addClass('highlight');


    $.ajax({
        url: '/employeeProfile',
        type: 'GET',
        cache: false,
        timeout: 600000,
        success: function (json) {
            $.each(json, function (index, value) {
                $('#dStation_OG').append('<option value=' + value.id + '> ' + value.lastName + ', ' + value.firstName + ' </option>');
            });
        },
        error: function (a, b, c) {
            console.log(a.responseText);
        }
    });


    var max_fields = 5; //maximum input boxes allowed
    var wrapper = $(".items"); //Fields wrapper
    var add_button = $(".add_field_button"); //Add button ID
    var x = 1; //initlal text box count
    $(add_button).click(function (e) { //on add input button click

        e.preventDefault();

        $(wrapper).append(
            '<div class="mainAdd">' +
                '<hr class="break">' +
                '<div class="row">' +
                    '<div class="col">' +
                        '<div class="form-group">' +
                            '<label for="eNameCode">Select Employee Namecode<span class="reqClass"> *</span></label>' +
                            '<select required name="dstation" required id="dStation" class="form-control">' +

                            '</select>' +
                            '<div class="help-block with-errors"></div>' +
                        '</div>' +
                    '</div>' +
                

                
                    '<div class="col">' +
                        '<div class="form-group">' +
                                '<label for="draTitle">DRA Title<span class="reqClass"> *</span></label>' +
                                '<select required name="draTitle" required id="draTitle" class="form-control">' +
                                    '<option value="">Choose DRA</option>' +
                                    '<option value="air">Aircraft</option>' +
                                    '<option value="atv">ATV</option>' +
                                    '<option value="camping">Camping</option>' +
                                    ' <option value="chainsaw">Chain Saw</option>' +
                                    '<option value="driving">Driving and Towing</option>' +
                                    '<option value="field">Field Work</option>' +
                                    '<option value="motorbike">Motor Bike</option>' +
                                    '<option value="office">Office Work</option>' +
                                    '<option value="paddlecraft">Paddlecraft</option>' +
                                    '<option value="workingalone">Working Alone</option>' +
                                    '<option value="stock">Stock Use</option>' +
                                    '<option value="trailerliving">Trailer Living</option>' +
                                    '<option value="winterdriving">Winter Driving</option>' +
                                '</select>' +
                                '<div class="help-block with-errors"></div>' +
                        '</div>' +
                    '</div> ' +
                    '<div class="col">' +
                        '<div class="form-group">' +
                            '<label for="draYear">Year Valid For<span class="reqClass"> *</span></label>' +
                            '<select required name="draYear" required id="draYear_' + x + '" class="form-control">' +
                                '<option value="">Choose Year</option>' +
                                '<option value="2016">2016</option>' +
                                '<option value="2017">2017</option>' +
                                '<option value="2018">2018</option>' +
                                '<option value="2019">2019</option>' +
                                '<option value="2020">2020</option>' +
                                '<option value="2021">2021</option>' +
                            '</select>' +
                            '<div class="help-block with-errors"></div>' +
                        '</div> ' +
                    '</div>' +

                    '<div class="col">' +
                        '<div class="form-group">' +
                            '<label for="dra_date">Assessment Date<span class="reqClass"> *</span></label>' +
                            '<div class="input-group date" data-provide="datepicker">' +
                                '<input type="text" required id="dra_date" name="dra_date" class="form-control">' +
                                '<div class="input-group-addon">' +
                                    '<span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>' +
                                '</div>' +                                                                    
                            '</div>' +
                        '<div class="help-block with-errors"></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<button class="remove_field">Remove</button>' +
            ' <button class="copy_field">Copy</button>' +
            '</div>' 

            




        ); //add input box



        $.ajax({
            url: '/dra',
            type: 'GET',
            cache: false,
            success: function (json) {
                var divine = $(" div.trainBG div.items div.mainAdd div.row div.col");

                $(divine).find('input,select').each(function () {

                    var _id = $(this).attr('id');

                    if (_id != undefined) {
                        if (_id.split('_')[0] == "draTitle") {
                            $(this).append('<option value="' + '-1' + '">' + 'Please select a Forest Unit' + ' </oprion>');
                        }
                    }
                });


                var i = 0;
                $.each(json, function (index, value) {
                    var info = value;

                    //debugger;
                    $(divine).find('input,select').each(function () {

                        //debugger;
                        var _id = $(this).attr('id');
                        if (_id != undefined) {
                            if (_id.split('_')[0] == "draTitle") {
                                $(this).append('<option value="' + value.id + '">' + value.title + ' </oprion>');
                            }


                        }
                    });
                    // append('<option value="' + value.id + '">' + value.lastName + value.firstName + ' </oprion>');

                    //$(name_wrapper).append('<option value="' + value.id + '">' + value.lastName + value.firstName + ' </oprion>');
                });
            },
            error: function (a, b, c) {
                console.log(a.responseText);
            }
        });







        $.ajax({
            url: '/employeeProfile',
            type: 'GET',
            cache: false,
            success: function (json) {
                var divine = $(" div.trainBG div.items div.mainAdd div.row div.col");

                $(divine).find('input,select').each(function () {

                    var _id = $(this).attr('id');

                    if (_id != undefined) {
                        if (_id.split('_')[0] == "dStation") {
                            $(this).append('<option value="' + '-1' + '">' + 'Please select a name' + ' </oprion>');
                        }
                    }
                });



                var i = 0;
                $.each(json, function (index, value) {
                    var info = value;

                    //debugger;
                    $(divine).find('input,select').each(function () {

                        //debugger;
                        var _id = $(this).attr('id');
                        if (_id != undefined) {
                            if (_id.split('_')[0] == "dStation") {
                                $(this).append('<option value="' + value.id + '">' + value.lastName + ', ' + value.firstName + ' </oprion>');

                            }


                        }
                    });
                    // append('<option value="' + value.id + '">' + value.lastName + value.firstName + ' </oprion>');

                    //$(name_wrapper).append('<option value="' + value.id + '">' + value.lastName + value.firstName + ' </oprion>');
                });
            },
            error: function (a, b, c) {
                console.log(a.responseText);
            }
        });


        $(wrapper).on("click", ".remove_field", function (e) { //user click on remove field
            e.preventDefault();
            $(this).parent('div').remove();
            x--;
        });

        $(wrapper).on("click", ".copy_field", function (e) { //user click on remove field
            e.preventDefault();
            var row = $(this).parent('div').clone();

            x++;
            $(wrapper).append(row);
        });


        $('select').attr('size', '');
    });


    $("#submitV").click(function (e) {
       
        //var employee_id_errors = []; //this is for employees that did not go through!
        var employee;
        var employee_ID_og;
        var dra_ID_og;
        var dra_yearsValid_og;
        var dra_startedDate;

        //var divs_input = $('div.trainBG div.items input');
        //var divs_select = $('div.trainBG div.items select');

        var divs_input = $('.items input');
        var divs_select = $('.items select');

        var divd = $('div.trainBG div.items div.mainAdd');
        var len = divd.length - 1;

        employee_ID_og = $('#dStation_OG').val();
        dra_ID_og = $('#draTitle_OG').val();
        dra_yearsValid_og = $('#draYear_OG').val();
        dra_startedDate = $('#dra_date_OG').val();

        var checker = false;




        if (employee_ID_og != -1 && dra_ID_og != -1 && dra_yearsValid_og != -1 && dra_startedDate != "") {

            if (len == -1) {
                e.preventDefault();
            }


            var _employee;
            $.ajax({
                url: "/employeeProfile/" + employee_ID_og,
                type: "GET",
                cache: false,

                success: function (json) {
                    _employee = json;
                    //employee_errors.push(_employee);
                },
                error: function (a, b, c) {
                    console.log(a.responseText);

                },
                async: false
            });

            dra_var.id = null;
            dra_var.title = dra_ID_og;
            dra_var.yearsValid = dra_yearsValid_og;
            dra_var.employeeProfile = _employee;
            dra_var.dateOfAssessment = getCorrectDateFormat(dra_startedDate);
            //console.log(trainingObj);




            $.ajax({
                url: "/dra",
                type: 'POST',
                data: JSON.stringify(dra_var),
                cache: false,
                timeout: 600000,
                contentType: "application/json",
                success: function (json) {
                    //console.log("training was uploaded!");

                },
                error: function (a, b, c) {
                    console.log(a.responseText);
                    checker = true;
                    if (_employee != undefined || _employee != null) {
                        employee_errors.push(_employee);
                    }

                }

            });
        } else {
            //console.log('did not do main row for training post');
            checker = true;
            //The reasoning for this is for not posting bad data, and have the validator work, but 
        }
        var index = 0;

        if (len > -1) {
            for (i = 0; i <= len; i++) {
                dra_title = "";
                dra_yearsValid = "";
                dra_employeeProfile = null;
                draDate = "";
                dra_employee_id = 0;


                for (j = 0; j <= 1; j++) {
                    

                    //console.log("i: " + i + ", j: " + j + ",index: " + index);


                    var input = divs_input[i];
                    var select = divs_select[j + index];


                    //$(input).css('color: red;');
                    var id_input = $(input).attr("id");
                    var id_select = $(select).attr("id");

                    var val_input = $(input).val();
                    var val_select = $(select).val();

                    var split_input = id_input;
                    var split_select = id_select;

                    if (split_select == 'dStation') {

                        dra_employee_id = val_select;
                    }

                    if (split_input == 'draYear') {

                        dra_yearsValid = val_input;
                    }

                    if (split_select == 'draTitle') {

                        dra_title = val_select;
                    }

                    if (split_input == 'dra_date') {

                        draDate = val_input;
                    }




                }

                if (dra_employee_id != -1 && dra_yearsValid != -1 && dra_title != -1 && draDate != "") {
                    _employee = null;
                    e.preventDefault();


                    $.ajax({
                        url: api + "/employeeProfile/" + dra_employee_id,
                        type: "GET",
                        cache: false,

                        success: function (json) {
                            _employee = json;
                            // employee_errors.push(_employee);
                            //console.log('go employee with success! id: ' + t_name);
                        },
                        error: function (a, b, c) {
                            console.log(a.responseText);

                        },
                        async: false
                    });

                    dra_var.id = null;
                    dra_var.employeeProfile = _employee;
                    dra_var.title = dra_=title;
                    dra_var.dateOfAssessment = draDate;
                    dra_var.yearsValid = dra_yearsValid;



                    //console.log(trainingObj);
                    $.ajax({
                        url: "/dra",
                        type: 'POST',
                        data: JSON.stringify(dra_var),
                        cache: false,
                        timeout: 600000,
                        contentType: "application/json",
                        success: function (json) {
                            //console.log("success for posting training!");

                        },
                        error: function (a, b, c) {
                            console.log(a.responseText);
                            checker = true;
                            if (_employee != undefined || _employee != null) {
                                employee_errors.push(_employee);
                            }
                        }
                    });

                }else {
                    console.log('did not do post for row');
                    checker = true;
                }

                index = index + 2;
            }



        }

        if (!checker) {
            $('#myModal_success').modal('show');
        }
        else {
            $('#myModal_error').modal('show');
        }

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




