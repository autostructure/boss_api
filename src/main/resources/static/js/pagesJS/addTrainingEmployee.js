var api = "http://localhost:8090";


$(document).ready(function () {
    $('#training').addClass('show');
    $('#training > li:nth-child(1) > a').addClass('highlight'); 
    $('#imgs').hide();
   
    $('select').attr('size','');


    $('#tName').append('<option value="' + '-1' + '">' + 'Please Select a Name ' + ' </oprion>');
    $.ajax({
        url: api + "/employeeProfile",
        type: "GET",
        success: function (json) {

            var i = 0;
            $.each(json, function (index, value) {
                var info = value;
                var name_wrapper = $(".mainAdd_" + x);

                $('#tName').append('<option value="' + value.id + '">' + value.lastName + ', ' + value.firstName + ' </oprion>');
            });
        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText);
        }

    });
    $('#tTitle').append('<option value="' + '-1' + '">' + 'Please enter a training Course Title' + ' </oprion>');
  
        $.ajax({
            url: api + "/trainingCourse",
            type: "GET",
            success: function (json) {
                //debugger;
                $.each(json, function (index, value) {
                    var info = value;
                    //var name_wrapper = $(".mainAdd_" + x);

                    $('#tTitle').append('<option value="' + value.id + '">' + value.title + ' </oprion>');
                });
            },
            error: function (a, b, c) {
                console.log(a.responseText);
                
            }
        });

      
    
 
    var max_fields = 5; //maximum input boxes allowed
    var wrapper = $(".items"); //Fields wrapper
    
    var add_button = $(".add_field_button"); //Add button ID
    var x = 0; //initlal text box count
    var y = 0; //initial dropdown box namecode count
    $(add_button).click(function (e) { //on add input button click
            e.preventDefault();

            $(wrapper).append(
                '<div class="mainAdd">'+
                    '<div class="row">' +
                        '<div class="col">' +
                            '<div class="form-group">' +
                                '<label>Employee Name<span class="reqClass">*</span></label><br />' +
                                '<select required class="form-control name" id="tName_' + x + '" placeholder="Select Employee Name" aria-label="Employee">' +
                                '</select>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col">' +
                            '<div class="form-group">' +
                                '<label for="tTitle">Title<span class="reqClass"> *</span></label>' +
                                '<select required class="form-control title" id="tTitle_' + x + '" placeholder="Training Title" aria-label="Training Title">' +
                                '</select>' +
                                '<div class="help-block with-errors"></div>' +
						    '</div>' +
                        '</div>' +

                 
                         '<div class="col">' +
                            '<div class="form-group">' +
                                '<label for="tDate">Date of Training<span class="reqClass"> *</span></label>' +
                                '<div class="input-group date" data-provide="datepicker">' +
                                    '<input required type="text" id="tDate_' + x + '" class="form-control tdate">' +
                                    '<div class="input-group-addon">' +
                                        '<span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>' +
                                    '</div>' +                                                                    
                                 '</div>' +
                                 '<div class="help-block with-errors"></div>' +
                             '</div>' +
                          '</div>' +
                          '<div class="col">' +
                          '<div class="form-group">' +
                                  '<label for="tValidUntil_' + x + '">Valid Until<span class="reqClass"> *</span></label>' +
                                  '<div class="input-group date" data-provide="datepicker">' +
                                      '<input required type="text" id="tValidUntil_' + x + '" class="form-control tdate">' +
                                      '<div class="input-group-addon">' +
                                          '<span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>' +
                                      '</div>' +
                                  '</div>' +
                                  '<div class="help-block with-errors"></div>' +
                            '</div>' +
                      '</div>' +
                       '</div>' + 
                        '<button id="copyRow" class="copy_field btn_pers_copy">Copy Row <i class="fa fa-arrows-v" aria-hidden="true" style="padding-left: 10px"></i></button> ' +
                        '<button class="remove_field btn_pers_remove">Remove <i class="fa fa-minus-square-o" aria-hidden="true" style="padding-left:10px"></i></button>' +
                    '</div>' +
                '</div>'

                

            ); //add input box
        


        $.ajax({
            url: api + "/employeeProfile",
            type: "GET",
            success: function (json) {
                var divine = $(".items div.mainAdd div.row div.col");

                $(divine).find('input,select').each(function () {
                    
                    var _id = $(this).attr('id');
                    
                    if (_id != undefined) {
                        if (_id.split('_')[0] == "tName") {
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
                            if (_id.split('_')[0] == "tName") {
                                $(this).append('<option value="' + value.id + '">' + value.lastName + value.firstName + ' </oprion>');
                                
                            }

                            
                        }
                    });
                       // append('<option value="' + value.id + '">' + value.lastName + value.firstName + ' </oprion>');
                    
                    //$(name_wrapper).append('<option value="' + value.id + '">' + value.lastName + value.firstName + ' </oprion>');
                });
            },
            error: function (xhr, status, error) {
                console.log(xhr.responseText);
                
            }
            
        });

        $.ajax({
            url: api + "/trainingCourse",
            type: 'GET',
            success: function (json) {
                var i = 0;
                var divine = $(".items div.mainAdd div.row div.col");
                $(divine).find('input,select').each(function () {
                    //debugger;

                    var _id = $(this).attr('id');
                    if (_id != undefined) {
                        if (_id.split('_')[0] == "tTitle") {
                           $(this).append('<option value="' + '-1' + '">' + 'Please enter a Training Course Title' + ' </oprion>');
                          
                        }
                    }
                });
                $.each(json, function (index, value) {
                    var info = value;
                    
                    //debugger;
                    $(divine).find('input,select').each(function () {
                        //debugger;

                        var _id = $(this).attr('id');
                        if (_id != undefined) {
                            if (_id.split('_')[0] == "tTitle") {
                                $(this).append('<option value="' + value.id + '">' + value.title + ' </oprion>');
                                
                            }
                        }
                    });
                   // $(name_wrapper).append('<option value="' + value.id + '">' + value.title + ' </oprion>');
                });

                $('select').attr('size','');
            },
            error: function (a, b, c) {
                console.log(a.responseText);
                
            }
        });
        x++;

       

    });

    $(wrapper).on("click", ".remove_field", function (e) { //user click on remove field
        e.preventDefault(); $(this).parent('div').remove(); x--;
    });

    $(wrapper).on("click", ".copy_field", function (e) {
        e.preventDefault();
        var row = $(this).parent('div').clone();
        
        x++;
        $(wrapper).append(row);
    });

    $(wrapper).on("click", ".copy_main", function (e) {
        e.preventDefault();
        var row = $(this).parent('div').clone();

        x++;
        $(wrapper).append(row);
    });


   
    


    $("#submitV").click(function (e) {

        //var employee_id_errors = []; //this is for employees that did not go through!
        var employee_errors = [];
        var _id;
        var i;
        var name_element;
        var divs_input = $('.items input');
        var divs_select = $('.items select');

        var divs = $('.items div.mainAdd');
        var len = divs.length - 1;

        var t_name_og;
        var t_title_trainingCourseId_og;
        var t_YearsValid_og;
        var t_Date_og;

        var t_name;
        var t_title_trainingCourseId;
        var t_YearsValid;
        var t_Date;

        t_name_og = $('#tName').val();
        t_title_trainingCourseId_og = $('#tTitle').val();

        t_YearsValid_og = $('#tValidUntil').val();
        t_Date_og = $('#tDate').val();
        var checker = false;


       

        if (t_name_og != -1 && t_title_trainingCourseId_og != -1 && t_YearsValid_og != "" && t_Date_og != "") {

            if (len == -1) {
                e.preventDefault();
            }


            var _employee;
            $.ajax({
                url: api + "/employeeProfile/" + t_name_og,
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

            trainingObj.employee = _employee;
            trainingObj.dateOfTraining = getCorrectDateFormat(t_Date_og);
            trainingObj.trainingCourseId = parseInt(t_title_trainingCourseId_og);
            trainingObj.validUntil = getCorrectDateFormat(t_YearsValid_og);
            //console.log(trainingObj);




            $.ajax({
                url: api + "/training",
                type: 'POST',
                data: JSON.stringify(trainingObj),
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
                t_name = "";
                t_YearsValid = "";
                t_title_trainingCourseId = "";
                t_Date = "";


                for (j = 0; j <= 1; j++) {


                    //console.log("i: " + i + ", j: " + j + ",index: " + index);


                    var input = divs_input[j + index];
                    var select = divs_select[j + index];



                    //$(input).css('color: red;');
                    var id_input = $(input).attr("id");
                    var id_select = $(select).attr("id");

                    var val_input = $(input).val();
                    var val_select = $(select).val();

                    var split_id_input = id_input.split('_');
                    var split_id_select = id_select.split('_');

                    var split_input = split_id_input[0];
                    var split_select = split_id_select[0];

                    if (split_select == 'tName') {

                        t_name = val_select;
                    }

                    if (split_input == 'tValidUntil') {

                        t_YearsValid = val_input;
                    }

                    if (split_select == 'tTitle') {

                        t_title_trainingCourseId = val_select;
                    }

                    if (split_input == 'tDate') {

                        t_Date = val_input;
                    }




                }




                if (t_name != -1 && t_YearsValid != "" && t_title_trainingCourseId != -1 && t_Date != "") {
                    _employee = null;
                    e.preventDefault();

                    if (t_name != t_name_og && t_YearsValid != t_YearsValid_og && t_title_trainingCourseId != t_title_trainingCourseId_og && t_Date != t_Date_og) {
                        $.ajax({
                            url: api + "/employeeProfile/" + t_name,
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

                        trainingObj.employee = _employee;
                        trainingObj.dateOfTraining = getCorrectDateFormat(t_Date);
                        trainingObj.trainingCourseId = parseInt(t_title_trainingCourseId);
                        trainingObj.validUntil = getCorrectDateFormat(t_YearsValid);



                        //console.log(trainingObj);
                        $.ajax({
                            url: "/training",
                            type: 'POST',
                            data: JSON.stringify(trainingObj),
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
                    }
                } else {
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




    
    var trainingObj = {
        certificates: [],
        dateOfTraining: "string",
        employee: {},
        trainingCourseId: 0,
        validUntil: "string",
        id: 0
    };

    var trainingCourseObj = {
        "category": "string",
        "defaultYears": 0,
        "defaultYearsLeader": 0,
        "description": "string",
        "id": 0,
        "title": "string"
    };







    function getCorrectDateFormat(date_str) {
        var date = new Date(date_str);
        
        return date.toISOString();
    }

    function getCorrectNormalDateFormat(date, format) {
        date = CustomFormFunctions.getDateFrom(date);
        var year = ("0000" + date.getFullYear().toString()).substr(-4, 4);
        var month = ("0000" + (date.getMonth() + 1).toString()).substr(-2, 2);
        var day = ("0000" + date.getDate().toString()).substr(-2, 2);
        var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        switch (format) {
            case "mm/dd/yyyy":
                return month + "/" + day + "/" + year;
            case "yyyy/mm/dd":
                return year + "/" + month + "/" + day;
            case "mm/dd/yyy HH:mm:ss":
                return year + "/" + month + "/" + day + " " + time;
            case "yyyy-mm-dd":
            case "ISO-Short":
            default:
                return date.toISOString();
        }

    }


    
});
