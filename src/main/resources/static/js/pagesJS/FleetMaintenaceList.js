$(document).ready(function() {


    var identifier = window.location.pathname.split("/")[3];
    vehId = parseInt(identifier);
    var selected_row = "";





    var debug = false;
    
    if (!debug) {
        try {
            $.ajax({
                url: "/boss/vehicle/" + vehId,
                type: "GET",
                cache: false,
                success: function(json) {
                    populateTable(json);

                    $("#error_msg").text("");
                },
                error: function(a, b, c) {
                    console.log(a.responseText);
                    
                    $("#error_msg").text("Vehicle does not exist");


                    var veh_placement = {
                        "accessory": null,
                        "accessory2": " ",
                        "assignedOperator": {
                        },
                        "camera": " ",
                        "cityOrLocation": " ",
                        "color": " ",
                        "dateAquired": " ",
                        "description": " ",
                        "disposalDate": " ",
                        "engineNumber": " ",
                        "equipmentNumber": " ",
                        "id": 0,
                        "keysToolBox": " ",
                        "license": " ",
                        "maintenanceRecords": [
                        ],
                        "make": " ",
                        "modelNumber": " ",
                        "modelYear": " ",
                        "monthlyIWFIAUsage": [
                        ],
                        "monthsNotUsed": " ",
                        "oldLicense": " ",
                        "ownershipType": " ",
                        "releasedDate": " ",
                        "replacementDate": " ",
                        "state": " ",
                        "tonneau": " ",
                        "vehicleClassCode": " ",
                        "vehicleCost": [
                            /* {
                                 "beginMonth": 0,
                                 "beginYear": 0,
                                 "endMonth": 0,
                                 "endYear": 0,
                                 "forRate": 0,
                                 "id": 0,
                                 "mileageRate": 0
                             }*/
                        ],
                        "vin": " "
                    };

                    populateTable(veh_placement);

                    //var debug_veh = init();
                    //$.ajax({
                    //    url: "/vehicle/1", // + empId,
                    //    type: "GET",
                    //    cache: false,
                    //    success: function(json) {
                    //        populateTable(json);
                    //    },
                    //    error: function(a, b, c) {}
                    //});
                }
            });
        } catch (e) {
            //debugger;
        }
    } else {
        populateTable(debug_veh);
    }
    var maintance = {
        "billback": " ",
        "cost": " ",
        "currentMileage": " ",
        "description": " ",
        "id": " ",
        "oilChange": " ",
        "projectFund": " ",
        "receiptOnFile": " ",
        "safteyInspection": " ",
        "serviceDate": " ",
        "vendorsName": "string",
        "vmEmission": " ",
        "warranty": " "
    };

    //populateTable(fake_data);


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
        $(".fleet_license_top").val(license);
        $(".fleet_VIN_top").val(vin);
        $(".fleet_EquipNum_top").val(EquipNum);
        $(".fleet_ModelYear_top").val(modelYear);
        $(".fleet_Make_top").val(_make);
        $(".fleet_Model_top").val(_model);
        $(".fleet_color_top").val(_color);
        $(".fleet_Desc_top").val(description);
        //debugger;

        if (json_data.maintenanceRecords == undefined) {
            json_data.maintenanceRecords = [];
            json_data.maintenanceRecords.push(maintance); //just for debugging, take out for production
        }


        var table = $("#tblFleetMaitenace").DataTable({
            'bPaginate': false,
            'dom': "Bfti",
            'data': json_data.maintenanceRecords,
            'columns': [
                {
                    'data': "serviceDate",
                    'render': function(data, type, row) {
                        var _date = CustomFormFunctions.formatDate(row.serviceDate, "mm/dd/yyyy");

                        return _date;
                    },
                    "defaultContent": ""
                },
                {
                    'data': "currentMileage",
                    "defaultContent": ""
                },
                {
                    'data': "vendorsName",
                    "defaultContent": ""
                },
                {
                    'data': "description",
                    "defaultContent": ""
                },
                {
                    'data': "cost",
                    "defaultContent": ""
                },
                {
                    'data': "billback",
                    "defaultContent": ""
                },
                {
                    'data': null,
                    "render": function(data, type, row, meta) {
                        var len = json_data.maintenanceRecords.length;
                        if (len > 0) {
                            return `
                        <div class="dropdown1">
                            <button id="test_click" class="dropbtn1"><i class="fa fa-ellipsis-v"></i></button>
                            <div id="dropList" class="dropdown-content1">
                                <a href="#" data-toggle="modal" data-target="#myModal_fullRecord" data-value="` +
                                data.id +
                                `" class="viewFullRecord" id="editBtn">View Full Record</a>
                            <a href="#" id="deletebtn" data-value="` +
                                data.id +
                                `">delete Record</a>
                            </div>
                        </div>   
                    `;
                        } else {
                            return " ";
                        }

                    },
                    "defaultContent": ""
                }
            ],
            'buttons': [
                {
                    text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
                    action: function() {
                        window.location.reload();
                    },
                    className: "table-btns refresh-btn"
                }, {
                    text: 'Print <i class="fa fa-lg fa-print"></i>',
                    extend: "print",
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4, 5]
                    },
                    className: "table-btns print-btn"
                },
                {
                    text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                    extend: "excel",
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4, 5]
                    },
                    className: "table-btns excel-btn"
                }
            ]
        });

        $("#deletebtn").click(function() {
            //debugger;
            var data_val = $(this).attr("data-value");
            //debugger;
            $.ajax({
                url: "/boss/vehicleMaintenanceRecord/" + data_val,
                type: "DELETE",
                cache: false,
                success: function () {
                    //debugger;
                    location.reload();
                },
                error: function(a, b, c) {
                    console.log(a.responseText);
                    
                }
            });
        });

        $("#addVehMainRec").click(function() {
            
            $("#myModal_addRecord").modal("toggle");
        });


        $('[data-toggle="tooltip"]').tooltip();

        $("#editBtn").on("click",
            function(e) {
                selected_row = $(this).attr("data-value");

                $("#id_hidden").val(selected_row);

            });

        $("#myModal_addRecord").on("show.bs.modal",
            function(e) {
                var modal = $(this);
                var id = modal.find("#id_hidden").val();
                //take out when api supports maitenace

                $.ajax({
                    url: "/boss/vehicle/" + vehId,
                    type: "GET",
                    cache: false,
                    success: function(json) {
                        modal.find(".fleet_license").val(json.license);
                        modal.find(".fleet_EquipNum").val(json.equipmentNumber);
                        modal.find(".fleet_VIN").val(json.vin);
                        modal.find(".fleet_ModelYear").val(json.modelYear);
                        modal.find(".fleet_Make").val(json.make);
                        modal.find(".fleet_Model").val(json.modelNumber);
                        modal.find(".fleet_color").val(json.color);
                        modal.find(".fleet_Desc").val(json.description);


                    },
                    error: function(a, b, c) {
                        console.log(a.responseText);
                    }
                });
            });

        $("#myModal_fullRecord").on("show.bs.modal",
            function(e) {
                var modal = $(this);
                var id = modal.find("#id_hidden").val();
                //take out when api supports maitenace

                $.ajax({
                    url: "/boss/vehicle/" + vehId,
                    type: "GET",
                    cache: false,
                    success: function(json) {
                        modal.find(".fleet_license").val(json.license);
                        modal.find(".fleet_EquipNum").val(json.equipmentNumber);
                        modal.find(".fleet_VIN").val(json.vin);
                        modal.find(".fleet_ModelYear").val(json.modelYear);
                        modal.find(".fleet_Make").val(json.make);
                        modal.find(".fleet_Model").val(json.modelNumber);
                        modal.find(".fleet_color").val(json.color);
                        modal.find(".fleet_DescTop").val(json.description);


                        // $.each(json.maitenaceList,
                        // function(index, value) {
                        // if (value.id == selected_row) {

                        //this is used to select the correct maintenance record

                        var filtered = json.maintenanceRecords.filter(function(value, index, arr) {

                            return value.id == id;

                        });
                        var value = filtered[0];

                        var warrenty_check = value.warranty;
                        var projectFunded = value.projectFund; //= value.projectFunded;
                        var ReceiptOnFile = value.receiptOnFile; //= value.ReceiptOnFile;
                        var SafteyInspection = value.safteyInspection; // = value.SafteyInspection;
                        var VM = value.vmEmission; //= value.VM;
                        var oilChange = value.oilChange; //=
                        //value.oilChange;

                        modal.find(".fleet_serviceDate")
                            .val(CustomFormFunctions.formatDate(value.serviceDate, "mm/dd/yyyy"));
                        modal.find(".fleet_Milage").val(value.currentMileage);
                        modal.find(".fleet_VendorName").val(value.vendorsName);
                        modal.find(".fleet_DescBot").val(value.description);
                        modal.find(".fleet_cost").val(value.cost);
                        modal.find(".fleet_BillBack").val(value.billback);


                        if (warrenty_check == true) {
                            modal.find(".fleet_warranty option[value=true]").attr("selected", "selected");
                        } else {
                            modal.find(".fleet_warranty option[value=false]").attr("selected", "selected");
                        }

                        if (projectFunded == true) {
                            modal.find(".fleet_ProjectFund option[value=true]")
                                .attr("selected", "selected");
                        } else {
                            modal.find(".fleet_ProjectFund option[value=false]")
                                .attr("selected", "selected");
                        }

                        if (ReceiptOnFile == true) {
                            modal.find(".fleet_ReceiptOnFile option[value=true]")
                                .attr("selected", "selected");
                        } else {
                            modal.find(".fleet_ReceiptOnFile option[value=false]")
                                .attr("selected", "selected");
                        }

                        if (SafteyInspection == true) {
                            modal.find(".fleet_Saftey option[value=true]").attr("selected", "selected");
                        } else {
                            modal.find(".fleet_Saftey option[value=false]").attr("selected", "selected");
                        }

                        if (VM == true) {
                            modal.find(".fleet_VM option[value=true]").attr("selected", "selected");
                        } else {
                            modal.find(".fleet_VM option[value=false]").attr("selected", "selected");
                        }

                        if (oilChange == true) {
                            modal.find(".fleet_oilChange option[value=true]").attr("selected", "selected");
                        } else {
                            modal.find(".fleet_oilChange option[value=false]").attr("selected", "selected");
                        }
                        // }
                        //  });
                    },
                    error: function(a, b, c) {
                        console.log(a);
                        console.log(b);
                        console.log(c);
                    }
                });

            });




        $("#myModal_addRecord").on("click",
            ".btn_add_maintenace",
            function () {
                

                //selected_row = $('#id_hidden').val();
                var modal = $("#myModal_addRecord");
                //var id = $modal.find("#id_hidden").val();

                var info;
                $.ajax({
                    url: "/boss/vehicle/" + vehId,
                    type: "GET",
                    cache: false,
                    async: false,
                    success: function(json) {
                        info = json;
                    },
                    error(a, b, c) {
                        console.log(a.responseText);
                    }
                });

                var maintance = {
                    "billback": "string",
                    "cost": 0,
                    "currentMileage": 0,
                    "description": "string",
                    "id": 0,
                    "oilChange": true,
                    "projectFund": true,
                    "receiptOnFile": true,
                    "safteyInspection": true,
                    "serviceDate": "2018-11-25T23:04:58.793Z",
                    "vendorsName": "string",
                    "vmEmission": true,
                    "warranty": true
                };


                var oil_change = modal.find(".fleet_oilChange :selected").val();
                var VM = modal.find(".fleet_VM :selected").val();
                var Saftey = modal.find(".fleet_Saftey :selected").val();
                var rec = modal.find(".fleet_ReceiptOnFile :selected").val();
                var project = modal.find(".fleet_ProjectFund :selected").val();
                var warranty = modal.find(".fleet_warranty :selected").val();
                var billback = modal.find(".fleet_BillBack").val();
                var cost = modal.find(".fleet_cost").val();
                var desc = modal.find(".fleet_DescRec").val();
                var vendor = modal.find(".fleet_VendorName").val();
                var milage = modal.find(".fleet_Milage").val();
                var serviceDate = modal.find(".fleet_serviceDate").val();

                //var serviceDate = modal.find(".fleet_serviceDate").val();

                maintance.billback = billback;
                maintance.cost = cost;
                maintance.currentMileage = milage;
                maintance.description = desc;
                maintance.oilChange = oil_change;
                maintance.projectFund = project;
                maintance.receiptOnFile = rec;
                maintance.safteyInspection = Saftey;
                maintance.serviceDate = getCorrectDateFormat(serviceDate);
                maintance.vendorsName = vendor;
                maintance.vmEmission = VM;
                maintance.warranty = warranty;
                //maintance.id = selected_row;


                $.ajax({
                    url: "/boss/employeeProfile/" + info.assignedOperator.id,
                    type: "GET",
                    cache: false,
                    async: false,
                    success: function(json) {
                        info.assignedOperator = json;
                    },
                    error: function(a, b, c) {
                        console.log(a.responseText);
                    }
                });


                //debugger;

                //var filtered = info.maintenanceRecords.filter(function (value, index, arr) {

                //  return value.id != selected_row;

                //});

                info.maintenanceRecords.push(maintance);
                //info.maintenanceRecords


                try {
                    $.ajax({
                        url: "/boss/vehicle/" + vehId,
                        type: "PUT",
                        contentType: "application/json",
                        data: JSON.stringify(info),
                        cache: false,
                        async: false,
                        success: function(json) {
                            
                            location.reload();
                        },
                        error(a, b, c) {
                            //debugger;
                            console.log(a.responseText);

                        }
                    });
                } catch (e) {
                    console.log(e.message);

                }

            });

        $("#myModal_fullRecord").on("click",
            ".btn_edit_maintenace",
            function() {
                var modal = $("#myModal_fullRecord");
                selected_row = modal.find("#id_hidden").val();


                var info;
                $.ajax({
                    url: "/boss/vehicle/" + vehId,
                    type: "GET",
                    cache: false,
                    async: false,
                    success: function(json) {
                        info = json;
                    },
                    error(a, b, c) {
                        console.log(a.responseText);
                    }
                });

                var maintance = {
                    "billback": "string",
                    "cost": 0,
                    "currentMileage": 0,
                    "description": "string",
                    "id": 0,
                    "oilChange": true,
                    "projectFund": true,
                    "receiptOnFile": true,
                    "safteyInspection": true,
                    "serviceDate": "2018-11-25T23:04:58.793Z",
                    "vendorsName": "string",
                    "vmEmission": true,
                    "warranty": true
                };


                var oil_change = modal.find(".fleet_oilChange :selected").val();
                var VM = modal.find(".fleet_VM :selected").val();
                var Saftey = modal.find(".fleet_Saftey :selected").val();
                var rec = modal.find(".fleet_ReceiptOnFile :selected").val();
                var project = modal.find(".fleet_ProjectFund :selected").val();
                var warranty = modal.find(".fleet_warranty :selected").val();
                var billback = modal.find(".fleet_BillBack").val();
                var cost = modal.find(".fleet_cost").val();
                var desc = modal.find(".fleet_DescBot").val();
                var vendor = modal.find(".fleet_VendorName").val();
                var milage = modal.find(".fleet_Milage").val();
                var serviceDate = modal.find(".fleet_serviceDate").val();

                //var serviceDate = modal.find(".fleet_serviceDate").val();

                maintance.billback = billback;
                maintance.cost = cost;
                maintance.currentMileage = milage;
                maintance.description = desc;
                maintance.oilChange = oil_change;
                maintance.projectFund = project;
                maintance.receiptOnFile = rec;
                maintance.safteyInspection = Saftey;
                maintance.serviceDate = getCorrectDateFormat(serviceDate);
                maintance.vendorsName = vendor;
                maintance.vmEmission = VM;
                maintance.warranty = warranty;
                maintance.id = selected_row;


                $.ajax({
                    url: "/boss/employeeProfile/" + info.assignedOperator.id,
                    type: "GET",
                    cache: false,
                    async: false,
                    success: function(json) {
                        info.assignedOperator = json;
                    },
                    error: function(a, b, c) {
                        console.log(a.responseText);
                    }
                });


                //debugger;

                var filtered = info.maintenanceRecords.filter(function(value, index, arr) {

                    return value.id != selected_row;

                });

                filtered.push(maintance);
                //info.maintenanceRecords
                info.maintenanceRecords = filtered;

                try {
                    $.ajax({
                        url: "/boss/vehicle/" + vehId,
                        type: "PUT",
                        contentType: "application/json",
                        data: JSON.stringify(info),
                        cache: false,
                        async: false,
                        success: function(json) {
                            location.reload();
                        },
                        error(a, b, c) {
                            console.log(a.responseText);

                        }
                    });
                } catch (e) {
                    console.log(e.message);

                }

            });
    }

    //this is used for testing
    function init() {
        var maintance = {
            "billback": "string",
            "cost": 0,
            "currentMileage": 0,
            "description": "string",
            "id": 0,
            "oilChange": true,
            "projectFund": true,
            "receiptOnFile": true,
            "safteyInspection": true,
            "serviceDate": "2018-11-25T23:04:58.793Z",
            "vendorsName": "string",
            "vmEmission": true,
            "warranty": true
        };


        var employee;
        $.ajax({
            url: "/boss/employeeProfile/47",
            type: "GET",
            cache: false,
            async: false,
            success: function(json) {
                employee = json;
            },
            error: function(a, b, c) {
                console.log(a.responseText);
                console.log(b);
                console.log(c);
            }
        });


        var veh = {
            "accessory": null,
            "accessory2": "test_two",
            "assignedOperator": {
            },
            "camera": "camera",
            "cityOrLocation": "detroit",
            "color": "red",
            "dateAquired": "2018-11-25T23:04:58.793Z",
            "description": "this is a description",
            "disposalDate": "2018-11-25T23:04:58.793Z",
            "engineNumber": "56748",
            "equipmentNumber": "432",
            "id": 0,
            "keysToolBox": "toolbox",
            "license": "493029304",
            "maintenanceRecords": [
            ],
            "make": "makeString",
            "modelNumber": "modelNumberStr",
            "modelYear": 0,
            "monthlyIWFIAUsage": [
            ],
            "monthsNotUsed": 0,
            "oldLicense": "oldy",
            "ownershipType": "dictator",
            "releasedDate": "2018-11-25T23:04:58.793Z",
            "replacementDate": "2018-11-25T23:04:58.793Z",
            "state": "MI",
            "tonneau": "ttrree",
            "vehicleClassCode": "string",
            "vehicleCost": [
                /* {
                     "beginMonth": 0,
                     "beginYear": 0,
                     "endMonth": 0,
                     "endYear": 0,
                     "forRate": 0,
                     "id": 0,
                     "mileageRate": 0
                 }*/
            ],
            "vin": "string"
        };
        veh.assignedOperator = employee;
        veh.maintenanceRecords.push(maintance);

        console.log(JSON.stringify(veh));
        
        $.ajax({
            url: "/boss/vehicle",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(veh),
            cache: false,
            success: function(json) {

            },
            error: function(a, b, c) {
                console.log(a.responseText);

                debugger;
                // CustomFormFunctions.displayDebugInfo(a.responseText, a, veh);
            }
        });


    }
});

var fields = {
    "form_fullRecord": [
        [
            {
                "fieldName": "fleet_license",
                "title": "License",
                "placeholder": "Maintenance Record License",
                "type": "input/text"
            },
            {
                "fieldName": "fleet_EquipNum",
                "title": "Equipment Number",
                "placeholder": "Maintenance Equipment Number",
                "type": "input/text"
            },
            {
                "fieldName": "fleet_VIN",
                "title": "VIN",
                "placeholder": "Maintenance VIN",
                "type": "input/text"
            },
        ],
        [
            {
                "fieldName": "fleet_ModelYear",
                "title": "Model Year",
                "placeholder": "Maintenance Model Year",
                "type": "input/text"
            },
            {
                "fieldName": "fleet_Make",
                "title": "Make",
                "placeholder": "Maintenance Make",
                "type": "input/text"
            },
            {
                "fieldName": "fleet_Model",
                "title": "Model",
                "placeholder": "Maintenance Model",
                "type": "input/text"
            },
            {
                "fieldName": "fleet_color",
                "title": "Color",
                "placeholder": "Maintenance Color",
                "type": "input/text"
            }
        ],
        [
            {
                "fieldName": "fleet_Desc",
                "title": "Description",
                "placeholder": "",
                "type": "input/text"
            }
        ],
        [
            {
                "fieldName": "fleet_serviceDate",
                "title": "Service Date",
                "placeholder": "",
                "type": "input/text"

            },
            {
                "fieldName": "fleet_Milage",
                "title": "Milage",
                "placeholder": "",
                "type": "text/input"
            },
            {
                "fieldName": "fleet_VendorName",
                "title": "Vendor Name",
                "type": "text/input"
            }
        ],
        [
            {
                "fieldName": "fleet_Desc",
                "title": "maintenance Description",
                "type": "text/input"
            }
        ],
        [
            {
                "fieldName": "fleet_Cost",
                "title": "Cost",
                "type": "input/text"
            },
            {
                "fieldName": "fleet_BillBack",
                "title": "BillBack",
                "type": "text/input"
            }
        ],
        [
            {
                "fieldName": "fleet_warrenty",
                "title": "Warranty",
                "type": "input/select"
            },
            {
                "fieldName": "fleet_Saftey",
                "title": "Saftey",
                "type": "input/select"
            }
        ],
        [
            {
                "fieldName": "fleet_ProjectFund",
                "title": "Project Fund",
                "type": "input/select"
            },
            {
                "fieldName": "fleet_VM",
                "title": "Maintenance VM",
                "type": "input/select"
            }
        ],
        [
            {
                "fieldName": "fleet_ReceiptOnFile",
                "title": "Project Fund",
                "type": "input/select"
            },
            {
                "fieldName": "fleet_oilChange",
                "title": "Oil Change",
                "type": "input/select"
            }
        ]
    ]
};


function getCorrectDateFormat(date_str) {
    var date = new Date(date_str);
    return date.toISOString();
}