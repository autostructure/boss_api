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
var fields = {
    "formGeneralInfo": [
    //vehicle information row
    [
        {
            "fieldName":"flicense",
            "title":"Vehicle License",
            "type":"input/text",
            "required":true,
            "colspan":2,
        },
        {
            "fieldName":"fequip",
            "title":"Equipment Number",
            "type":"input/text",
            "required":true,
            "colspan":2,
        },
        {
            "fieldName":"fmake",
            "title":"Vehicle Make",
            "type":"input/text",
            "required":true,
            "colspan":2,
        },
        {
            "fieldName":"fmodel",
            "title":"Vehicle Moel",
            "type":"input/text",
            "required":true,
            "colspan":2,
        },
        {
            "fieldName":"fyear",
            "title":"Year",
            "type":"input/text",
            "required":true,
            "colspan":2,
        },
        {
            "fieldName":"fcolor",
            "title":"Color",
            "type":"input/text",
            "required":true,
            "colspan":2,
        }                                        
    ],
    // vehicle extended basic info
    [
        {
            "fieldName":"fdescription",
            "title":"Description",
            "type":"input/text",
            "required":true,
            "colspan":4,
        },
        {
            "fieldName":"fvin",
            "title":"VIN #",
            "type":"input/text",
            "required":true,
            "colspan":4,
        },
        {
            "fieldName":"fclassCode",
            "title":"Vehicle Class Code",
            "type":"select/vclass",
            "required":true,
            "colspan":4,
        }
    ],
    [
        {
            "fieldName":"fownership",
            "title":"Ownership Type",
            "type":"select/vown",
            "required":true,
            "colspan":3,
        },
        {
            "fieldName":"fassigned",
            "title":"Assigned Operator",
            "type":"input/text",
            "required":true,
            "colspan":3,
        },
        {
            "fieldName":"fnfcid",
            "title":"NFC ID",
            "type":"input/text",
            "required":true,
            "colspan":3,
        },    
        {
            "fieldName":"foldlicense",
            "title":"Old License Number",
            "type":"input/text",
            "required":true,
            "colspan":3,
        },                                  
    ],
    // credit card information section
    [

        {
            "fieldName":"fccnumber",
            "title":"Card Number",
            "type":"input/text",
            "required":true,
            "colspan":3,
        },
        {
            "fieldName":"fccexpdate",
            "title":"Card Exp. Date",
            "type":"input/text",
            "required":true,
            "colspan":3,
        },
        {
            "fieldName":"fccexp",
            "title":"Expiration Date",
            "type":"input/date",
            "required":true,
            "colspan":3,
        },
        {
            "fieldName":"fjobcode",
            "title":"Default Job Code",
            "type":"input/text",
            "required":true,
            "colspan":3,
        }

    ],
    // misc info section
    [
        
       
                      
        
    ],
    // state and disposal section
    [
        {
            "fieldName":"fstate",
            "title":"State",
            "type":"select/state",
            "required":true,
            "colspan":2,
        },        
        {
            "fieldName":"fcity",
            "title":"City / Location",
            "type":"input/text",
            "required":true,
            "colspan":2,
        },    
        {
            "fieldName":"fdateacquired",
            "title":"Date Acquired",
            "type":"input/date",
            "required":true,
            "colspan":2,
        },   
        {
            "fieldName":"freplacementdate",
            "title":"Replacement Date",
            "type":"input/date",
            "required":true,
            "colspan":2,
        },    
        {
            "fieldName":"fdisposaldate",
            "title":"Disposal Date",
            "type":"input/date",
            "colspan":2,
        },    
        {
            "fieldName":"freleaseddate",
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