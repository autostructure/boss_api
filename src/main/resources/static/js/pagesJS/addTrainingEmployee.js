var api = "http://localhost:8090";
var debug = true;
var test = {
    "certificates": [

    ],
    "dateOfTraining": "2018-09-28T15:39:45.890Z",
    "employee": {
        "id": 1,
        "firstName": "Ileen",
        "lastName": "Mahmood",
        "middleInitial": null,
        "preferredName": null,
        "nameCode": "ILMahmood",
        "profilePicture": null,
        "homePhone": null,
        "cellPhone": null,
        "personalEmail": null,
        "stateAssigned": null,
        "dutyStation": null,
        "emergencyContactFirstName1": null,
        "emergencyContactLastName1": null,
        "emergencyContactStreetAddress1": null,
        "emergencyContactCity1": null,
        "emergencyContactState1": null,
        "emergencyContactZip1": null,
        "emergencyContactHomePhone1": null,
        "emergencyContactCellPhone1": null,
        "emergencyContactWorkPhone1": null,
        "emergencyContactRelationship1": null,
        "emergencyContactFirstName2": null,
        "emergencyContactLastName2": null,
        "emergencyContactStreetAddress2": null,
        "emergencyContactCity2": null,
        "emergencyContactState2": null,
        "emergencyContactZip2": null,
        "emergencyContactHomePhone2": null,
        "emergencyContactCellPhone2": null,
        "emergencyContactWorkPhone2": null,
        "emergencyContactRelationship2": null,
        "title": null,
        "roomNumber": null,
        "payPeriodsLeft": 10,
        "regPayPerPayPeriod": 1000.00,
        "overtimeHourlyWage": null,
        "pWPSalary": null,
        "activityCode": {
            "code": "AD",
            "name": "Administration"
        },
        "dateOfBirth": null,
        "addressCity": null,
        "series": null,
        "grade": null,
        "paymentPlan": null,
        "addressState": null,
        "addressZip": null,
        "eyeColor": null,
        "hairColor": null,
        "gender": null,
        "race": null,
        "otherIdentifyingFeatures": null,
        "confidentialityAgreementDate": null,
        "supervisor": null,
        "employees": [

        ],
        "driversLicense": null,
        "pwpsalary": null
    },
    "trainingCourseId": 1,
    "yearsValid": 1
};

var test_course = {
    "category": "cats",
    "defaultYears": 1,
    "defaultYearsLeader": 1,
    "description": "cats",
    "title": "cats"
};





var trainingCourseTestDataBase = {
    "Category": "category1",
    "defaultYears": 1,
    "defaultYearsLeader": 2,
    "description": "desc",
    "id": 1,
    "title": "trainingCourseOne"
};

$(document).ready(function () {
    $('#training').addClass('show');
    $('#training > li:nth-child(1) > a').addClass('highlight'); 
    $('#imgs').hide();

    
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

        }

    });

    if (debug == false) {
        $.ajax({
            url: api + "/trainingCourse",
            type: "GET",
            success: function (json) {
                $.each(json, function (index, value) {
                    var info = value;
                    var name_wrapper = $(".mainAdd_" + x);

                    $('#tTitle').append('<option value="' + value.id + '">' + value.title + ' </oprion>');
                });
            },
            error: function (a, b, c) {
                console.log(a.responseText);
                // debugger;
            }
        });
    }
    else {
        $('#tTitle').append('<option value="' + trainingCourseTestDataBase.id + '">' + trainingCourseTestDataBase.title + ' </oprion>');
    }
 
    var max_fields = 5; //maximum input boxes allowed
    var wrapper = $(".items"); //Fields wrapper
    
    var add_button = $(".add_field_button"); //Add button ID
    var x = 0; //initlal text box count
    var y = 0; //initial dropdown box namecode count
    $(add_button).click(function (e) { //on add input button click
        // e.preventDefault();

            $(wrapper).append(
                '<div class="mainAdd_"' + x + '>'+
                    '<div class="row">' +
                        '<div class="col">' +
                            '<div class="form-group">' +
                                '<label>Employee Name<span class="reqClass">*</span></label><br />' +
                                '<select class="form-control name" id="tName_' + x + '" placeholder="Select Employee Name" aria-label="Employee">' +
                                '</select>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col">' +
                            '<div class="form-group">' +
                                '<label for="tTitle">Title<span class="reqClass"> *</span></label>' +
                                '<select class="form-control title" id="tTitle_' + x + '" placeholder="Training Title" aria-label="Training Title">' +
                                '</select>' +
                                '<div class="help-block with-errors"></div>' +
						    '</div>' +
                        '</div>' +
                '<div class="col">' +
                '<div class="form-group">' +
                '<label for="tYearsValid">Years Valid<span class="reqClass"> *</span></label>' +
                '<select class="form-control title" id="tYearsValid_' + x + '" placeholder="Years Valid" aria-label="Years Valid">' +
                '</select>' +
                '<div class="help-block with-errors"></div>' +
                '</div>' +
                '</div>' +
                         '<div class="col">' +
                            '<div class="form-group">' +
                                '<label for="tDate">Date of Training<span class="reqClass"> *</span></label>' +
                                '<div class="input-group date" data-provide="datepicker">' +
                                    '<input type="text" id="tDate_' + x + '" class="form-control tdate">' +
                                    '<div class="input-group-addon">' +
                                        '<span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>' +
                                    '</div>' +                                                                    
                                 '</div>' +
                                 '<div class="help-block with-errors"></div>' +
                             '</div>' +
                          '</div>' +
                       '</div>' + 
                        '<button id="copyRow" class="copy_field">Copy Row</button> ' +
                        '<button class="remove_field">Remove</button>' +
                    '</div>' +
                '</div>'

                

            ); //add input box
        


        $.ajax({
            url: api + "/employeeProfile",
            type: "GET",
            success: function (json) {
                
                var i = 0;
                $.each(json, function (index, value) {
                    var info = value;
                    var name_wrapper = $(".items " + "#tName_" + x);
                    // debugger;
                    $(name_wrapper).append('<option value="' + value.id + '">' + value.lastName + value.firstName + ' </oprion>');
                });
            },
            error: function (xhr, status, error) {
                console.log(xhr.responseText);
                // debugger;
            }
            
        });

        $.ajax({
            url: api + "/trainingCourse",
            type: 'GET',
            success: function (json) {
                var i = 0;
                $.each(json, function (index, value) {
                    var info = value;
                    var name_wrapper = $(".items").find('#tTitle_' + x);

                    $(name_wrapper).append('<option value="' + value.id + '">' + value.lastName + ', ' + value.firstName + ' </oprion>');
                });
            },
            error: function (a, b, c) {
                console.log(a.responseText);
                // debugger;
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

    
    $('#myModal_cert').on('click', '#certModal_cert', function () {

    });
   
    //var remove_feild = $(".remove_field");
    //$(remove_feild).on("click", function (e) { //user click on remove field
    //    console.log("click remove");
    //    e.preventDefault();
    //    var info = $(wrapper).find(".remove_field").attr("data-value");
        
    //    $(wrapper).parent('div_' + info).remove();
    //});

    //$(wrapper).on("click", ".copyRow", function (e) {
    //    console.log("click copy row");
    //    e.preventDefault();
    //    var info = $(wrapper).find(".copyRow").attr("data-value");
        
    //});

    

   




    $(this).find('input:not([disabled]):not([type=submit]), textarea, select').each(function () {
       
    });

    var _file;
   /* $(':file').on('change', function () {
        var _file = $(':file').files;
        $('#formFileUpload')[0];
        if (_file.size > 10124) {
            alert('max upload size is 1MB');
        }

        // Also see .name, .type
    });*/

              /*  xhr: function () {
                var myXhr = $.ajaxSettings.xhr();
                if (myXhr.upload) {
                    // For handling the progress of the upload
                    myXhr.upload.addEventListener('progress', function (e) {
                        if (e.lengthComputable) {
                            $('progress').attr({
                                style: e.loaded.toString() + "%"
                            });
                        }
                    }, false);
                }
                return myXhr;

            },*/

    var submittedCert = false;





    function successfulCertUpload() {
        submittedCert = true;
    }

    $("#formIdentificationInfo_certUpload").on("change update", function () {
        var form = this.closest('form');
        var data = new FormData(form);
        var empVal = $('#currentEmplyeeName').val();
        $.ajax({
            url: "http://localhost:8090/certificate/?employeeId=" + empVal,
            type: "POST",
            enctype: 'multipart/form-data',
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            xhr: function () {
                var myXhr = $.ajaxSettings.xhr();
                if (myXhr.upload) {
                    // For handling the progress of the upload
                    myXhr.upload.addEventListener('progress', function (e) {
                        if (e.lengthComputable) {
                            $('#mainProgressBar').attr({
                                style: "width: " + e.loaded.toString() + "%"
                            });
                        }
                    }, false);
                }
                return myXhr;

            },
            timeout: 600000,
            success: function (data) {
                $(".empPhoto").attr("src", data.fileDownloadUri);
                successfulCertUpload();
                $('#imgs').show();
            },
            error: function (e) {
                console.log(e.responseJSON);
                $('#imgs').hide();
            }
        });
    });
    
    $(".submit_button").click(function () {

        

        var _id;
        var i;
        var name_element;
        var divs_input = $('.items input');
        var divs_select = $('.items select');
        var divs = $('.items div');
        var len = divs.length;

        var t_name;
        var t_title_trainingCourseId;
        var t_YearsValid;
        var t_Date;

        t_name = $('#tName').val();
        t_title_trainingCourseId = $('#tTitle').val();
        t_category = $('#tCategory').val();
        t_YearsValid = $('#tYearsValid').val();
        t_Date = $('#tDate').val();

        var check_tname_null = false;
        var check_tTitle_null = false;
        var check_YearsValid_null = false;
        var check_Date_null = false;


        if (t_name == undefined || t_name == null) {
            check_tname_null = true;
        }

        


        var _employee;
        $.ajax({
            url: api + "/employeeProfile/" + t_name,
            type: "GET",
            cache: false,

            success: function (json) {
                _employee = json;
            },
            error: function (a, b, c) {
                console.log(a.responseText);
                
            },
            async: false
        });

        trainingObj.employee = _employee;
        trainingObj.dateOfTraining = getCorrectDateFormat(t_Date);
        trainingObj.trainingCourseId = parseInt(t_title_trainingCourseId);

        console.log(trainingObj);



      $.ajax({
            url: api + "/training",
            type: 'POST',
            data: JSON.stringify(trainingObj),
            cache: false,
            timeout: 600000,
            contentType: "application/json",
            success: function (json) {
                console.log("training was uploaded!");

            },
            error: function (a, b, c) {
                console.log(a.responseText);
                // debugger;
            }

        });



        if (len > 0) {
            for (i = 0; i <= len; i++) {
                for (j = 0; j <= 2; j++) {
                    var input = divs_input[i];
                    var select = divs_select[i];
                    $(input).css('color: red;');
                    var id_input = $(input).attr("id");
                    var id_select = $(select).attr("id");

                    var val_input = $(input).val();
                    var val_select = $(input).val();

                    var split_id_input = id_input.split('_');
                    var split_id_select = id_select.split('_');
                    if (split_id_input[0] == 'tName') {
                        t_name = val_input;
                    }

                    if (split_id_select[0] == 'texpDate') {
                        t_expDate = val_select;
                    }

                    if (split_id_input[0] == 'tTitle') {
                        t_title_trainingCourseId = val_input;
                    }

                    if (split_id_select[0] == 'tDate') {
                        t_Date = val_select;
                    }
                }

                console.log('t_name: ' + t_name);
                console.log('texpDate: ' + t_expDate);
                console.log('tTitle: ' + t_title_trainingCourseId);
                console.log('tDate: ' + t_Date);


                trainingObj.employee = _employee;
                trainingObj.dateOfTraining = getCorrectDateFormat(t_Date);
                trainingObj.trainingCourseId = parseInt(t_title_trainingCourseId);
                
                $.ajax({
                    url: "/training",
                    type: 'POST',
                    data: JSON.stringify(trainingObj),
                    cache: false,
                    timeout: 600000,
                    contentType: "application/json",
                    success: function (json) {
                        console.log("success for posting training!");
                        // debugger;
                    },
                    error: function (a, b, c) {
                        console.log(a.responseText);
                        // debugger;
                    }
                });
            }
        }


        


        $('#btnResetForm').on('click', function () {
            // location.reload();
        });
    }); 

    
    var trainingObj = {
        certificates: [],
        dateOfTraining: "string",
        employee: {},
        trainingCourseId: 0,
        yearsValid: 0,
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




