


$(document).ready(function () {
    //var browser = CustomFormFunctions.getBrowser();
    
    $.ajax({
        url: '/boss/employeeProfile',
        type: 'GET',
        cache: false,
        async: false,
        success: function (json) {

            $.each(json, function (index, value) {
                $('#employees').append('<option value="' + value.id + '">' + value.lastName + ', ' + value.firstName + '</option>');
            });
        }, error: function (a, b, c) {

            console.log(a.responseText);
        }
    });

    $('#employees').on('change', function (e) {
        var empid = $('#employees :selected').val();
        makeAjaxCall('/boss/employeeProfile/' + empid, 'GET', null).then(function (json) {
            $('#OperatorName').val(json.firstName + ' ' + json.lastName);
            $('#address_one_location').val(json.dutyStation); //not sure on this 
            $('#address_two_street').val(json.addressStreet1); //not sure on this
            $('#address_three_state').val(json.addressState + ', ' + json.addressZip); //have to fix this to have state name

            $.ajax({
                url: '/boss/training?employeeId=' + $('#employees :selected').val(),
                type: 'GET',
                cache: false,
                success: function (j) {
                    for (x in j.certificates) {
                        var dat = j.certificates[x];

                        if (dat.documentId == 0) //need to edit this to match defensivr driving cert
                        {
                            $('.date_of_class').val(j.dateOfTraining);
                            $('.class_expires').val(j.validUntil);
                        }

                        if (dat.documentId == 1) { //need to edit for ATV rider Course
                            $('.date_of_ATV_class').val(j.dateOfTraining);
                            $('.expire_ATV_class').val(j.validUntil);
                        }
                        debugger;
                        //98% sure this is correct
                        makeAjaxCall('/boss/vehicle', 'GET', null).then(function (jj) {
                            debugger;
                            var filteredVehicleByAssignedOpterator = jj.filter(function (vehicle_object) {
                                return x.assignedOperator.id == empid; 
                            });
                            
                            var tr_arr = [];
                            for (veh in filteredVehicleByAssignedOpterator) {
                                var vehicle = filteredVehicleByAssignedOpterator[veh];
                                var td_one = tableCreator.createTDobject(vehicle.make, null, 'make_class');
                                var td_two = tableCreator.createTDobject('Capacity placeHold', null, null);
                                var td_three = tableCreator.createTDobject('?', null, null);

                                var row_arr = [];
                                row_arr.push(td_one);
                                row_arr.push(td_two);
                                row_arr.push(td_three);

                                var tr = tableCreator.createTRobject(row_arr, null, null);
                                tr_arr.push(tr);
                            }
                            var table_html = tableCreator.createTable(tr_arr);
                            $('.qualified_to_operate').html(table_html);
                            //filteredVehicleByAssignedOpterator.
                        }, function (a, b, c) {
                            console.log(a.responseText);
                        });
                    }

                }, error: function (a, b, c) {
                    console.log(a.responseText);
                }
            });
        }, function (a, b, c) {
            console.log(a.responseText);
        });
    });





});

