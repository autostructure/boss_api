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


// generating the fields w/ bootstrap field writer
var fields = {
    "formGeneralInfo": [
    //vehicle information row
    [
        {
            "fieldName":"license",
            "title":"Vehicle License",
            "type":"input/text",
            "colspan":2,
        },
        {
            "fieldName":"equipmentNumber",
            "title":"Equipment Number",
            "type":"input/text",
            "required":true,
            "colspan":2,
        },
        {
            "fieldName":"make",
            "title":"Vehicle Make",
            "type":"input/text",
            "required":true,
            "colspan":2,
        },
        {
            "fieldName":"modelNumber",
            "title":"Vehicle Model",
            "type":"input/text",
            "required":true,
            "colspan":2,
        },
        {
            "fieldName":"modelYear",
            "title":"Year",
            "type":"input/text",
            "required":true,
            "colspan":2,
        },
        {
            "fieldName":"color",
            "title":"Color",
            "type":"input/text",
            "colspan":2,
        }                                        
    ],
    // vehicle extended basic info
    [
        {
            "fieldName":"description",
            "title":"Description",
            "type":"input/text",
            "colspan":4,
        },
        {
            "fieldName":"vin",
            "title":"VIN #",
            "type":"input/vin",
            "required":true,
            "colspan":4,
        },
        {
            "fieldName":"vehicleClassCode",
            "title":"Vehicle Class Code",
            "type":"select/vclass",
            "colspan":4,
        }
    ],
    [
        {
            "fieldName":"ownershipType",
            "title":"Ownership Type",
            "type":"select/vown",
            "colspan":3,
        },
        {
            "fieldName":"assignedOperator",
            "title":"Assigned Operator",
            "type":"input/text",
            "colspan":3,
        },
        {
            "fieldName":"fnfcid", //missing from api
            "title":"NFC ID",
            "type":"input/text",
            "colspan":3,
        },    
        {
            "fieldName":"oldLicense",
            "title":"Old License Number",
            "type":"input/text",
            "colspan":3,
        },                                  
    ],
    // credit card information section
    [

        {
            "fieldName":"fccnumber", //missing from api
            "title":"Card Number",
            "type":"input/text",
            "colspan":3,
        },
        {
            "fieldName":"fcpin", //missing from api
            "title":"Card Pin Number",
            "type":"input/text",
            "colspan":3,
        },
        {
            "fieldName":"fccexp", //missing from api
            "title":"Expiration Date",
            "type":"input/date",
            "colspan":3,
        },
        {
            "fieldName":"fjobcode",  //missing from api
            "title":"Default Job Code",
            "type":"input/text",
            "colspan":3,
        }

    ],
    // misc info section
    [
        
       
                      
        
    ],
    // state and disposal section
    [
        {
            "fieldName":"state",
            "title":"State",
            "type":"select/state",
            "colspan":2,
        },        
        {
            "fieldName":"cityOrLocation",
            "title":"City / Location",
            "type":"input/text",
            "colspan":2,
        },    
        {
            "fieldName":"dateAquired",
            "title":"Date Acquired",
            "type":"input/date",
            "colspan":2,
        },   
        {
            "fieldName":"replacementDate",
            "title":"Replacement Date",
            "type":"input/date",
            "colspan":2,
        },    
        {
            "fieldName":"disposalDate",
            "title":"Disposal Date",
            "type":"input/date",
            "colspan":2,
        },    
        {
            "fieldName":"releasedDate",
            "title":"Released Date",
            "type":"input/date",
            "colspan":2,
        },                                    
    ],

   
    [
    { "custom":$('#submitV').parent() }
    ]
    ]}; // end form
    addBootstrapFields(fields);
