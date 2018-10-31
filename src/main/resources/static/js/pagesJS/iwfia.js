// get method to displya data
var id = window.location.pathname.split("/")[2];
if (id) {
var url = '/vehicle?id=' + id;
if (parseInt(id)) {
url = '/vehicle/' + id;
}
    var url = '/vehicle/' + id;
    console.log(url);
    console.log(id);
    $.ajax({
    type: 'GET',
    url: url,
    contentType: "application/json",
    dataType: 'json',
    cache: false,
    timeout: 600000,
    success: function(json){
    console.log(json);
        for (var key in json) {
        fill(key, json[key]);
    }
    function fill (key, value) {
    if (value instanceof Object) {
        for (k in value) {
        fill(k, value[k]);
        };
    } else {
        var input = $("input[name='" + key + "'], select[name='" + key + "']");
            if (input.attr("data-provide") == 'datepicker' && value != null) {
                date = new Date(value);
                value = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
            }
        input.val(value);
        }
    }
    },
    error: function(json) {
    }
    });
};


    // hiding error message once we start modifying the form again
    $('form').on('click focus', function () {
        $('#error, #success').hide();
    });

    // submitting data for new aux contacts
    $('input[type=submit]').on("click", function (e) {
        e.preventDefault();
        // checking form validity
        if ($('#formGeneralInfo:valid').length == 0) {
            showError("Please ensure all fields are filled out correctly");
            return false;
        } else {
            e.preventDefault();
        }


        // creating vars to submit to ajax
        var form = $('#formGeneralInfo');
        var method = "PUT";
        var url =  '/vehicle/' + id;
        var data = {
            'license':form.find('[name=license]').val(),
            'vin':form.find('[name=vin]').val(),
            'modelYear':form.find('[name=modelYear]').val(),
            'make':form.find('[name=make]').val(),
            'modelNumber':form.find('[name=modelNumber]').val(),
            'description':form.find('[name=description]').val(),
            'color':form.find('[name=color]').val(),
            'engineNumber':form.find('[name=engineNumber]').val(),
            'accessory':form.find('[name=accessory]').val(),
            'oldLicense':form.find('[name=oldLicense]').val(),
            'ownershipType':form.find('[name=ownershipType]').val(),
            'equipmentNumber':form.find('[name=equipmentNumber]').val(),
            'vehicleClassCode':form.find('[name=vehicleClassCode]').val(),
            'state':form.find('[name=state]').val(),
            'cityOrLocation':form.find('[name=cityOrLocation]').val(),
            'keysToolBox':form.find('[name=keysToolBox]').val(),
            'tailgate':form.find('[name=tailgate]').val(),
            'topper':form.find('[name=topper]').val(),
            'tonneau':form.find('[name=tonneau]').val(),
            'dateAquired':form.find('[name=dateAquired]').val(),
            'replacementDate':form.find('[name=replacementDate]').val(),
            'disposalDate':form.find('[name=disposalDate]').val(),
            'releasedDate':form.find('[name=releasedDate]').val(),
            'assignedOperator':form.find('[name=assignedOperator]').val(),
        }
        // stringifying the data for ajax
        data = JSON.stringify(data);
        console.log("current put url is " + url)

        // ajax post call
        $.ajax({
            url: url,
            type: method,
            data: data,
            contentType: "application/json",
            cache: false,
            timeout: 600000,
            success: function(response){
                $('#exampleModal').modal('show');
                console.log(" *** successfully updated see data below ***");
                console.log(data);
            },
            error: function(error){
                return false;
                e.preventDefault();
                console.log(" !!! Error" + error + " !!! ") ;
                console.log(a.responseJSON);
            }
        });
    });




// filling out data from form via get
var data = {};
var forms = $('#formGeneralInfo, #formWorkInfo, #formEmergencyInfo');
forms.find('input:not([disabled]):not([type=submit]), textarea, select').each(function(){
    if (this.name) {
        var path = this.name.split(".");
        var obj = data;
        for (i = 0; i < path.length - 1; i++) {
        obj[path[i]] = obj[path[i]] || {};
        obj = obj[path[i]];
        }
        obj[path[i]] = this.value;
        if ($(this).attr("data-provide") == "datepicker") {
        obj[path[i]] = new Date(this.value).getTime();
        }
        //data[this.name] = this.value;
        if (obj[path[i]] == NaN) obj[path[i]] = null;
    } else {
    console.log(this);
    }
});

$('#monthlyUsage').on('click', function(){
    window.location.assign('/viewEditFleet/'+ id + '/iwfia');
})

// generating the fields w/ bootstrap field writer
var fields = {
    "formGeneralInfo": [
    //vehicle information row
    [
        {
            "fieldName":"license",
            "title":"Vehicle License",
            "type":"input/text",
        },
        {
            "fieldName":"equipmentNumber",
            "title":"Equipment Number",
            "type":"input/text",
            "required":true,
        },
        {
            "fieldName":"make",
            "title":"Vehicle Make",
            "type":"input/text",
            "required":true,
        },
        {
            "fieldName":"modelNumber",
            "title":"Vehicle Model",
            "type":"input/text",
            "required":true,
        },
        {
            "fieldName":"modelYear",
            "title":"Year",
            "type":"select/vyear",
            "required":true,
        },                                     
    ],
  
    [
    { "custom":$('#submitV').parent() }
    ]
    ]}; // end form
    addBootstrapFields(fields);
