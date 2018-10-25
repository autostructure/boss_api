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
        var row = $(".mainAdd.template").clone().removeClass("template").attr("hidden", false);
        row.appendTo(wrapper);
        x++;
    }).click();

    $(wrapper).on("click", ".remove_field", function (e) { //user click on remove field
        e.preventDefault(); $(this).parent('div').remove();
        x--;
    });

    $(wrapper).on("click", ".copy_field", function (e) {
        e.preventDefault();
        var row1 = $(this).parent('div');
        var row2 = row1.clone();
        row2.find("input, select").each(function() {
            $(this).val(row1.find("[name='"+this.name+"']").val());
        });
        row2.insertAfter(row1);
        x++;
    });

    $(wrapper).on("click", ".copy_main", function (e) {
        e.preventDefault();
        var row = $(this).parent('div').clone();

        x++;
        $(wrapper).append(row);
    });

    $(wrapper).on("click change update", "[name=tDate]", function(){
        var group = $(this).closest(".mainAdd");
        if (!this.value) return false;
        var date = CustomFormFunctions.getDateFrom($(this));
        date.setFullYear(date.getFullYear() + 1);
        group.find("[name=tValidUntil]").val(CustomFormFunctions.formatDate(date, "bootstrap"));
    })

   
    


    $("#submitV").click(function (e) {
        var allValid = true;
        $(".items input, .items select").each(function(){
            if (!this.checkValidity()) {
                allValid = false;
                $('#myModal_error').modal('show');
                $('#myModal_error .modal-body .employees_error').html("<p>All fields must be filled out!</p>");
                console.log(this);
            }
        });
        if (!allValid) return false;
        var promises = [];
        $(".items .mainAdd").each(function(){
            var group = $(this);
            var data = {
                "employee": {
                    "id" : group.find("#tName").val(),
                },
                "trainingCourseId": group.find("#tTitle").val(),
                "validUntil": CustomFormFunctions.formatDate(group.find("#tDate").val(), "ISO"),
                "dateOfTraining": CustomFormFunctions.formatDate(group.find("#tValidUntil").val(), "ISO"),
            }
            var prom = makeAjaxCall("/training", "POST", JSON.stringify(data));
            prom.then(function(a){console.log(a)}, function(a, b, c){console.log(a, b, c, JSON.stringify(data))});
            promises.push(prom);
        });
        
        function success(values) {
            $('#myModal_success').modal('show');
            //$('#myModal_result').modal('hide');
        }
        
        function rejection(reason) {
            $('#myModal_error').modal('show');
            $('#myModal_error .modal-body .employees_error').append("<p>"+reason+"</p>");
            //$('#myModal_result').modal('hide');
        }
        //$('#myModal_result').modal('show');

        Promise.all(promises).then(success, rejection);
        
        $('#myModal_success').on('hidden.bs.modal', function () {
            location.reload();
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
