$(document).ready(function () {
    var fake_data = {

        "accessory": "string",
        "assignedOperator": {
            "activityCode": {
                "code": "string",
                "name": "string"
            },
            "addressCity": "string",
            "addressState": "string",
            "addressStreet1": "string",
            "addressStreet2": "string",
            "addressZip": "string",
            "allergies": "string",
            "cellPhone": "string",
            "confidentialityAgreementDate": "2018-11-07T18:16:00.608Z",
            "crewPosition": "string",
            "dateOfBirth": "2018-11-07T18:16:00.608Z",
            "dentistsCity": "string",
            "dentistsName": "string",
            "dentistsPhone": "string",
            "dentistsState": "string",
            "dentistsStreetAddress": "string",
            "dentistsZip": "string",
            "doctorsCity": "string",
            "doctorsName": "string",
            "doctorsPhone": "string",
            "doctorsState": "string",
            "doctorsStreetAddress": "string",
            "doctorsZip": "string",
            "driversLicense": {
                "expiration": "2018-11-07T18:16:00.608Z",
                "id": 0,
                "number": "string",
                "state": "string"
            },
            "dutyStation": "string",
            "emergencyContactCellPhone1": "string",
            "emergencyContactCellPhone2": "string",
            "emergencyContactCity1": "string",
            "emergencyContactCity2": "string",
            "emergencyContactFirstName1": "string",
            "emergencyContactFirstName2": "string",
            "emergencyContactHomePhone1": "string",
            "emergencyContactHomePhone2": "string",
            "emergencyContactLastName1": "string",
            "emergencyContactLastName2": "string",
            "emergencyContactRelationship1": "string",
            "emergencyContactRelationship2": "string",
            "emergencyContactState1": "string",
            "emergencyContactState2": "string",
            "emergencyContactStreetAddress1": "string",
            "emergencyContactStreetAddress2": "string",
            "emergencyContactWorkPhone1": "string",
            "emergencyContactWorkPhone2": "string",
            "emergencyContactZip1": "string",
            "emergencyContactZip2": "string",
            "employeePosition": "string",
            "employees": [
                {}
            ],
            "eyeColor": "string",
            "fieldStatus": "string",
            "firstName": "string",
            "fsEmail": "string",
            "gender": "string",
            "grade": "string",
            "groupNumber": "string",
            "hairColor": "string",
            "heightFeet": "string",
            "heightInches": 0,
            "homePhone": "string",
            "id": 0,
            "idNumber": "string",
            "insuranceName": "string",
            "insurancePhone": "string",
            "ipNumber": "string",
            "lastName": "string",
            "masterNumber": "string",
            "middleInitial": "string",
            "nameCode": "string",
            "officePhone": "string",
            "otherIdentifyingFeatures": "string",
            "overtimeHourlyWage": 0,
            "pWPSalary": 0,
            "payPeriodsLeft": 0,
            "paymentPlan": "string",
            "personalEmail": "string",
            "preferredName": "string",
            "profilePicture": 0,
            "pwpsalary": 0,
            "race": "string",
            "regPayPerPayPeriod": 0,
            "returnToPayStatus": "2018-11-07T18:16:00.608Z",
            "satPhone": "string",
            "series": "string",
            "startNonPayStatus": "2018-11-07T18:16:00.608Z",
            "stateAssigned": "string",
            "supervisor": {},
            "terminationDate": "2018-11-07T18:16:00.608Z",
            "title": "string",
            "weightPounds": 0
        },
        "cityOrLocation": "string",
        "color": "string",
        "dateAquired": "2018-11-07T18:16:00.608Z",
        "description": "string",
        "disposalDate": "2018-11-07T18:16:00.608Z",
        "engineNumber": "string",
        "equipmentNumber": "string",
        "id": 0,
        "keysToolBox": "string",
        "license": "123",
        "make": "make",
        "modelNumber": "string",
        "modelYear": 0,
        "oldLicense": "string",
        "ownershipType": "string",
        "releasedDate": "2018-11-07T18:16:00.608Z",
        "replacementDate": "2018-11-07T18:16:00.608Z",
        "state": "string",
        "tailgate": "string",
        "tonneau": "string",
        "topper": "string",
        "vehicleClassCode": "string",
        "vin": "string",

        "maitenaceList": [{
            "id":1,
            "description":"description",
            "BillBack": "string",
            "Cost": 123,
            "vendorMaker": "vendor",
            "milage": 2,
            "serviceDate": "2018-11-07T18:16:00.608Z",

            "warrenty": true,
            "projectFunded": false,
            "ReceiptOnFile": true,
            "SafteyInspection": false,
            "VM": true,
            "oilChange": false
        }]

    };

    
  /* $.ajax({


        url: "", //put api url here
        type: "GET",
        cache: false,
        success: function (json) {
            populateTable(json);
        },
        error: function (a, b, c) {
            console.log(a.responseJSON);
            console.log(a);
            console.log(b);
            console.log(c);
        }
    });*/

    populateTable(fake_data);
    

    function populateTable(json_data) {
        var id = json_data.id;
        var license = json_data.license;
        var vin = json_data.vin;
        var EquipNum = json_data.equipmentNumber;
        var modelYear = json_data.modelYear;
        var _make = json_data.make;
        var _model = json_data.modelNumber;
        var _color = json_data.color;
        var description = json_data.description;

        

        //var data = $('div.usa-grid div.content-div div#showHide div.row div.col');
        $('.fleet_license_top').val(license);
        $('.fleet_VIN_top').val(vin);
        $('.fleet_EquipNum_top').val(EquipNum);
        $('.fleet_ModelYear_top').val(modelYear);
        $('.fleet_Make_top').val(_make);
        $('.fleet_Model_top').val(_model);
        $('.fleet_color_top').val(_color);
        $('.fleet_Desc_top').val(description);

        var table = $('#tblFleetMaitenace').DataTable({
            'bPaginate': false,
            'dom': 'Bfti',
            'data': json_data.maitenaceList,
            'columns': [{
                'data': "serviceDate",
                'render': function (data, type, row) {
                    return CustomFormFunctions.formatDate(data.ServiceDate, "mm/dd/yyyy");
                }
            },
            {
                'data': "milage"
            },
            {
                'data': "vendorMaker"
            },
            {
                'data': 'description'
            },
            {
                'data': 'Cost'
            },
            {
                'data': "BillBack"
            },
            {
                'data': null,
                "render": function (data, type, row) {
                    return `
                        <div class="dropdown1">
                            <button id="test_click" class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                            <div id="dropList" class="dropdown-content1">
                                <a href="#" data-toggle="modal" data-target="#myModal_fullRecord" data-value="` + data.id + `" class="viewFullRecord" id="editBtn">View Full Record</a>
                            </div>
                        </div>   
                    `;
                }
            }
            ],
            'buttons': [/*{
                text: 'Add <i class="fa fa-lg fa-plus"></i>',
                action: function () {
                    window.location.href = '/boss/addTrainingEmployee';
                },
                className: 'table-btns add-btn'
            },*/
            {
                text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
                action: function () {
                    window.location.reload();
                },
                className: 'table-btns refresh-btn'
            }, {
                text: 'Print <i class="fa fa-lg fa-print"></i>',
                extend: 'print',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5, 6, 7]
                },
                className: 'table-btns print-btn'
            },
            {
                text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                extend: 'excel',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5, 6, 7]
                },
                className: 'table-btns excel-btn'
            }
            ]
        });
        var selected_row;
        $('.viewFullRecord').on("click", function (e) {
            selected_row = $(this).attr("data-value");
        });

        $("#myModal_fullRecord").on("show.bs.modal", function (e) {
            var modal = $(this);
            $.ajax({
                url: "/boss/vehicle", //+ id,
                type: "GET",
                cache: false,
                success: function (json) {
                    json = fake_data; //take out when api supports maitenace
                    modal.find('.fleet_license').val(json.license);
                    modal.find('.fleet_EquipmentNum').val(json.equipmentNumber);
                    modal.find('.fleet_VIN').val(json.vin);
                    modal.find('.fleet_ModelYear').val(json.modelYear);
                    modal.find('.fleet_Make').val(json.make);
                    modal.find('.fleet_Model').val(json.modelNumber);
                    modal.find('.fleet_color').val(json.color);
                    modal.find('.fleet_Desc').val(json.description);
                    
                    $.each(json.maitenaceList, function (index, value) {
                        if (value.id == selected_row) {
                            modal.find('.fleet_serviceDate').val(CustomFormFunctions.formatDate(value.serviceDate,"mm/dd/yyyy"));
                            modal.find('.fleet_Milage').val(value.milage);
                            modal.find('.fleet_VendorName').val(value.vendorMaker);
                            modal.find('.fleet_Desc').val(value.description);
                            modal.find('.fleet_cost').val(value.Cost);
                            modal.find('.fleet_BillBack').val(value.BillBack);
                            
                            var warrenty_check = value.warrenty;
                            var projectFunded = value.projectFunded;
                            var ReceiptOnFile = value.ReceiptOnFile;
                            var SafteyInspection = value.SafteyInspection;
                            var VM = value.VM;
                            var oilChange = value.oilChange;

                            if (warrenty_check == true) {
                                modal.find('.fleet_warrenty option[value=true]').attr('selected', 'selected');
                            }
                            else {
                                modal.find('.fleet_warrenty option[value=false]').attr('selected', 'selected');
                            }

                            if (projectFunded == true) {
                                modal.find('.fleet_ProjectFund option[value=true]').attr('selected', 'selected');
                            }
                            else {
                                modal.find('.fleet_ProjectFund option[value=false]').attr('selected', 'selected');
                            }

                            if (ReceiptOnFile == true) {
                                modal.find('.fleet_ReceiptOnFile option[value=true]').attr('selected', 'selected');
                            }
                            else {
                                modal.find('.fleet_ReceiptOnFile option[value=false]').attr('selected', 'selected');
                            }

                            if (SafteyInspection == true) {
                                modal.find('.fleet_Saftey option[value=true]').attr('selected', 'selected');
                            }
                            else {
                                modal.find('.fleet_Saftey option[value=false]').attr('selected', 'selected');
                            }

                            if (VM == true) {
                                modal.find('.fleet_VM option[value=true]').attr('selected', 'selected');
                            }
                            else {
                                modal.find('.fleet_VM option[value=false]').attr('selected', 'selected');
                            }

                            if (oilChange == true) {
                                modal.find('.fleet_oilChange option[value=true]').attr('selected', 'selected');
                            }
                            else {
                                modal.find('.fleet_oilChange option[value=false]').attr('selected', 'selected');
                            }

                            //debugger;

                        }
                    });
                },
                error: function (a, b, c) {
                    console.log(a);
                    console.log(b);
                    console.log(c);
                }
            });

            $("#myModal_fullRecord").on("click", ".btn_edit_maintenace", function (e) {
                debugger;
                //add once maitenace is added to vehicle
                /*
                 * $.ajax({
                 * url: "/boss/vehicle/" + ID,
                 * type: "PUT",
                 * chache: false,
                 * success: function(){},
                 * error: function(a,b,c){
                 *      console.log(a);
                 *      console.log(b);
                 *      console.log(c);
                 * }
                 * 
                  });
                  */
                 
            });




        });

    }


});