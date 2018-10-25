var roles = [
    "Support",
    "Owner",
    "Any",
    "Field",
    "Office",
    "CrewLead",
    "Supervisor",
]
var perms = [
    "Post",
    "Get",
    "Put",
    "Delete",
]
var endpoints = [
    //"/contact/{}",
    //"/dra/{}",
    //"dutyStations",
    "employeeProfile",
    "training",
    "trainingCourse",
];
var otherEndpoints = [ //endpoints I can't dredge up dynamically right now
    {ep:"dutyStations",data:{}},
    {ep:"certificate",data:{}},
    {ep:"contact",data:{
        "id":"",
        "city":"",
        "description":"",
        "phone1":"",
        "phone2":"",
        "state":"",
        "streetAddress":""
    }},
    {ep:"dra",data:{
        "id":"",
        "title":"",
        "dateOfAssessment":"",
        "employeeProfile":"",
        "yearsValid":"",
    }},
    {ep:"vehicle",data:{
        "accessory": "string",
        "assignedOperator": "","cityOrLocation": "string",
        "color": "string",
        "dateAquired": "2018-10-10T21:12:22.310Z",
        "description": "string",
        "disposalDate": "2018-10-10T21:12:22.310Z",
        "engineNumber": "string",
        "equipmentNumber": "string",
        "id": 0,
        "keysToolBox": "string",
        "license": "string",
        "make": "string",
        "modelNumber": "string",
        "modelYear": 0,
        "monthlyIWFIAUsages": [],
        "oldLicense": "string",
        "ownershipType": "string",
        "releasedDate": "2018-10-10T21:12:22.310Z",
        "replacementDate": "2018-10-10T21:12:22.310Z",
        "state": "string",
        "tailgate": "string",
        "tonneau": "string",
        "topper": "string",
        "vehicleClassCode": "string",
        "vin": "string"
    }},
    {ep:"activityCode",data:{"code":"","name":""}},
    {ep:"budgetObjectCode",data:{"id":"","name":""}},
    {ep:"budgetSummary",data:{}},
    {ep:"expense",data:{}},
    {ep:"expenseCode",data:{}},
    {ep:"jobCode",data:{}},
    {ep:"paymentCode",data:{}},
    {ep:"payrollDetails",data:{}},
    {ep:"payrollForecast",data:{}},
];
var fields = {

}
var tooltipTemplate = "<b>Role: </b>{role}<br><b>Method: </b>{perm}<br><b>Endpoint: </b>{endpoint}<br><b>Field: </b>{field}";
var nameTemplate = "{role}_{perm}_{endpoint}_{field}";
$(document).ready(function() {
    $("#selectRole").html("<option value=''>All</option>");
    $("#selectPerm").html("<option value=''>All</option>");
    $("#selectEP").html("<option value=''>All</option>");
    for (i in roles) {
        $("#selectRole").append("<option value={0}>{1}</option>".replace("{0}",roles[i]).replace("{1}",roles[i]));
        $("#rowRoles").append("<th class='role'>" + roles[i] + "</th>");
    }
    for (i in perms) {
        $("#selectPerm").append("<option value={0}>{1}</option>".replace("{0}",perms[i]).replace("{1}",perms[i]));
    }
    for (i in endpoints) {
        $("#selectEP").append("<option value={0}>{1}</option>".replace("{0}",endpoints[i]).replace("{1}",endpoints[i]));
    }
    for (i in otherEndpoints) {
        $("#selectEP").append("<option value={0}>{1}</option>".replace("{0}",otherEndpoints[i].ep).replace("{1}",otherEndpoints[i].ep));
    }
    $("#selectEP").on("change update", function() {
        $("#selectField").html("<option value=''>All</option>");
        var f= fields[$(this).val()];
        console.log(f);
        for (i in f) {
            $("#selectField").append("<option value={0}>{1}</option>".replace("{0}",i).replace("{1}",i));
        }
    });
    var id = 1;
    var rowGroups = []
    var promises = [];
    var permsSpan = roles.length * perms.length;
    var totalSpan = permsSpan + 2;
    $("th.role").attr("colspan", perms.length);
    for (var r in roles) {
        for (var p in perms) {
            $("#rowMethods").append("<td>"+perms[p].substr(0,1)+"</td>");
        }
    }
    for (var i in endpoints) {
        var ep = endpoints[i];
        fields[ep] = {"ACCESS":false};
        setPromise(ep, i);
    }
    for (var i in otherEndpoints) {
        var ep = otherEndpoints[i];
        fields[ep.ep] = {"ACCESS":false};
        makeTR(ep.ep, ep.data, i+endpoints.length);
    }
    Promise.all(promises).then(
        function () {
            for (var i in rowGroups) {
                $("#tblPermissions tbody").append(rowGroups[i].html());
            }
            $("[data-toggle=tooltip]").tooltip();
            $("button[value='copy']").on("click", function(){
                var rowFrom = $(this).closest("tr");
                $("#tblPermissions").data("rowToCopyFrom", rowFrom);
            });
            $("button[value='paste']").on("click", function(){
                var rowFrom = $("#tblPermissions").data("rowToCopyFrom");
                var rowTo = $(this).closest("tr");
                var oldEP = rowFrom.attr("data-for-endpoint");
                var oldField = rowFrom.attr("data-for-field");
                var newEP = rowTo.attr("data-for-endpoint");
                var newField = rowTo.attr("data-for-field");
                rowFrom.find("input[type=checkbox]").each(function(){
                    var name = this.name;
                    name = name.replace(oldEP, newEP).replace(oldField, newField);
                    $("input[name="+name+"]")[0].checked = this.checked;
                });
            });
            $("#exportJSON").on("click", function(){
                var json = {};
                $("input[type=checkbox]").each(function(){
                    json[this.name] = this.checked;
                });
                $("#PermissionsOutput").val(JSON.stringify(json));
                return;
            });
            $("#importJSON").on("click", function(){
                var json = JSON.parse($("#PermissionsOutput").val());
                console.log(json);
                for (var k in json) {
                    $("input[type=checkbox][name="+k+"]")[0].checked = (json[k]);
                }
                return;
            });
        },
        function () {

        }
    )
    function setPromise(endpoint, i) {
        var url = "/{}/1".replace("{}", endpoint);
        promises[i] = makeAjaxCall(url, "GET", null);
        promises[i].then(
            function (data) {
                makeTR(endpoint, data, i);
            },
            function(message) {
                var msg = JSON.parse(message);
                console.log(url + " Errored with the following:");
                console.log(msg);
                $("#error").show();
                $("#errorText").html(url+": "+msg.status+"<br>Check the console.  This is an Ajax Error.  It likely comes from trying to hit an endpoint the wrong way.");
            }
        )
    }
    
    function makeTD(role, perm, ep, field) {
        var td = $("<td><div class='form=check'><input type=checkbox class='form-check-input''><label class=''></label></div></td>");
        var name = nameTemplate.replace("{role}",role).replace("{perm}",perm).replace("{endpoint}",ep).replace("{field}",field);
        var tooltip = tooltipTemplate.replace("{role}",role).replace("{perm}",perm).replace("{endpoint}",ep).replace("{field}",field);
        td.attr("data-for-role",role);
        td.attr("data-for-perm",perm);
        td.find("input").attr("name", name);
        td.attr("title", tooltip);
        td.attr("data-toggle", "tooltip");
        td.attr("data-placement", "top");
        td.attr("data-html", true);
        return td;
    }
    function makeTR(endpoint, data, i) {
        var headRow = $("<tr><th><button value=copy>Copy</button><button value=paste>Paste</button></th><th>"+endpoint+": ACCESS</th></tr>");
        headRow.attr("data-for-endpoint", endpoint);
        headRow.attr("data-for-field", "ACCESS");
        for (var r in roles) {
            var role = roles[r];
            for (var p in perms) {
                var perm = perms[p];
                // var td = $("<td><div class='form=check'><input type=checkbox class='form-check-input''><label class=''></label></div></td>");
                // td.attr("data-for-role",role);
                // td.attr("data-for-perm",perm);
                // td.find("input").attr("name", role+"_"+perm+"_"+endpoint+"_"+"ACCESS");
                headRow.append(makeTD(role, perm, endpoint, "ACCESS"));
            }
        }
        var group = $("<rowgroup></rowgroup>").append(headRow);
        for (var k in data) {
            fields[endpoint][k] = true;
            var row = $("<tr></tr>").appendTo(group).append(
                $("<td><button value=copy>Copy</button><button value=paste>Paste</button></td>"),
                $("<td>"+k+"</td>")
            );
            row.attr("data-for-endpoint", endpoint);
            row.attr("data-for-field", k);
            for (var r in roles) {
                var role = roles[r];
                for (var p in perms) {
                    var perm = perms[p];
                    if (perm == "Delete") {
                        row.append($("<td></td>"));
                    } else {
                        // var td = $("<td><div class='form=check'><input type=checkbox class='form-check-input''><label class=''></label></div></td>");
                        // td.attr("data-for-role",role);
                        // td.attr("data-for-perm",perm);
                        // td.find("input").attr("name", role+"_"+perm+"_"+endpoint+"_"+k);
                        row.append(makeTD(role, perm, endpoint, k));
                    }
                }
            }
        }
        rowGroups[i] = group;
    }
});
var sampleJSON = [
    {
        "role":"Support",
        "perm":"Put",
        "endpoints": [
            {
                "endpoint":"/employeeProfile/1",
                "fields":{
                    "firstName":true,
                    "lastName":true,
                }
            }
        ]
    },
    {
        "role":"Any",
        "perm":"Put",
        "endpoints": [
            {
                "endpoint":"/employeeProfile/1",
                "fields":{
                    "firstName":false,
                    "lastName":false,
                }
            }
        ]
    }
]

function setMatching(onOff) {
    onOff = onOff && true || false;
    var role = $("#selectRole").val() || ".*";
    var perm = $("#selectPerm").val() || ".*";
    var endpoint = $("#selectEP").val() || ".*";
    var field = $("#selectField").val() || ".*";
    var reg = new RegExp(role+"_"+perm+"_"+endpoint+"_"+field);
    console.log(reg);
    $("input[type=checkbox]").filter(function() {
        return (reg.test(this.name));
    }).each(function(){
        this.checked = onOff;
    });
}