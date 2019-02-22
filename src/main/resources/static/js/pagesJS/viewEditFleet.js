// get method to displya data
var id = window.location.pathname.split('/')[3];
if (id) {
  var url = '/boss/vehicle?id=' + id;
  if (parseInt(id)) {
    url = '/boss/vehicle/' + id;
  }

  function logStuff() {
    console.log(this.value);
  }
  var url = '/boss/vehicle/' + id;
  console.log(url);
  console.log(id);
  $.ajax({
    type: 'GET',
    url: url,
    contentType: 'application/json',
    dataType: 'json',
    cache: false,
    timeout: 600000,
    success: function(json) {
      $.ajax({
        url: '/boss/employeeProfile',
        type: 'GET',
        cache: false,
        async: false,
        success: function(jj) {
          $.each(jj, function(index, value) {
            $('[name=assignedOperator]').append(
              '<option value="' +
                value.id +
                '">' +
                value.lastName +
                ', ' +
                value.firstName +
                '</option>'
            );
          });

          $('[name=assignedOperator]').val(json.assignedOperator.id);
        },
        error: function(a, b, c) {
          console.log(a.responseText);
        }
      });

      console.log(json);
      for (var key in json) {
        fill(key, json[key]);
      }
      function fill(key, value) {
        if (value instanceof Object) {
          for (k in value) {
            fill(k, value[k]);
          }
        } else {
          var input = $(
            "input[name='" + key + "'], select[name='" + key + "']"
          );

          if (input.attr('data-provide') == 'datepicker' && value != null) {
            date = new Date(value);
            value =
              date.getMonth() +
              1 +
              '/' +
              date.getDate() +
              '/' +
              date.getFullYear();
          }
          input.val(value);
        }
      }
    },
    error: function(json) {}
  });
}

// hiding error message once we start modifying the form again
$('form').on('click focus', function() {
  $('#error, #success').hide();
});

// submitting data for new aux contacts
$('input[type=submit]').on('click', function(e) {
  e.preventDefault();
  // checking form validity
  if ($('#formGeneralInfo:valid').length == 0) {
    showError('Please ensure all fields are filled out correctly');
    return false;
  } else {
    e.preventDefault();
  }

  // creating vars to submit to ajax
  var form = $('#formGeneralInfo');
  var method = 'PUT';
  var url = '/boss/vehicle/' + id;
  var data = {
    license: form.find('[name=license]').val(),
    vin: form.find('[name=vin]').val(),
    modelYear: parseInt(form.find('[name=modelYear]').val()),
    make: form.find('[name=make]').val(),
    modelNumber: form.find('[name=modelNumber]').val(),
    description: form.find('[name=description]').val(),
    color: form.find('[name=color]').val(),
    engineNumber: form.find('[name=engineNumber]').val(),
    accessory: form.find('[name=accessory]').val(),
    oldLicense: form.find('[name=oldLicense]').val(),
    ownershipType: form.find('[name=ownershipType]').val(),
    equipmentNumber: form.find('[name=equipmentNumber]').val(),
    vehicleClassCode: form.find('[name=vehicleClassCode]').val(),
    state: form.find('[name=state]').val(),
    cityOrLocation: form.find('[name=cityOrLocation]').val(),
    camera: form.find('[name=camera]').val(),
    accessory1: form.find('[name=accessory1]').val(),
    accessory2: form.find('[name=accessory2]').val(),
    dateAquired: getCorrectDateFormat(form.find('[name=dateAquired]').val()),
    replacementDate: getCorrectDateFormat(
      form.find('[name=replacementDate]').val()
    ),
    disposalDate: getCorrectDateFormat(form.find('[name=disposalDate]').val()),
    releasedDate: getCorrectDateFormat(form.find('[name=releasedDate]').val()),
    assignedOperator: {
      id: parseInt(form.find('[name=assignedOperator]').val())
    },
    id: parseInt(id)
  };

  CustomFormFunctions.putPartialInfo(
    '/boss/vehicle',
    id,
    data,
    function(succ) {
      $('#myModal_done').modal('show');
    },
    function(a, b, c) {
      console.log(a.responseText);
      showError('Error: ' + a.responseText);
    }
  );

  $('#myModal_done').on('click', '.btn_pers_copy', function(e) {
    location.href = '/boss/viewFleet';
  });
});

// filling out data from form via get
var data = {};
var forms = $('#formGeneralInfo, #formWorkInfo, #formEmergencyInfo');
forms
  .find('input:not([disabled]):not([type=submit]), textarea, select')
  .each(function() {
    if (this.name) {
      var path = this.name.split('.');
      var obj = data;
      for (i = 0; i < path.length - 1; i++) {
        obj[path[i]] = obj[path[i]] || {};
        obj = obj[path[i]];
      }
      obj[path[i]] = this.value;
      if ($(this).attr('data-provide') == 'datepicker') {
        obj[path[i]] = new Date(this.value).getTime();
      }
      //data[this.name] = this.value;
      if (obj[path[i]] == NaN) obj[path[i]] = null;
    } else {
      console.log(this);
    }
  });

$('#monthlyUsage').on('click', function() {
  window.location.assign('/boss/iwfia/' + id);
});

$('#maintenance').on('click', function() {
  window.location.assign('/boss/FleetMaintenaceList/' + id);
});

$('#monthlyCostss').on('click', function() {
  window.location.assign('/boss/monthlyCosts/' + id);
});

$('#outOfService').on('click', function() {
  window.location.assign('/boss/monthsNotUsedPage/' + id);
});

// generating the fields w/ bootstrap field writer
var fields = {
  formGeneralInfo: [
    //vehicle information row
    [
      {
        fieldName: 'license',
        title: 'Vehicle License',
        type: 'input/text',
        colspan: 2
      },
      {
        fieldName: 'equipmentNumber',
        title: 'Equipment Number',
        type: 'input/text',
        required: true,
        colspan: 2
      },
      {
        fieldName: 'make',
        title: 'Vehicle Make',
        type: 'input/text',
        required: true,
        colspan: 2
      },
      {
        fieldName: 'modelNumber',
        title: 'Vehicle Model',
        type: 'input/text',
        required: true,
        colspan: 2
      },
      {
        fieldName: 'modelYear',
        title: 'Year',
        type: 'select/vyear',
        required: true,
        colspan: 2
      },
      {
        fieldName: 'color',
        title: 'Color',
        type: 'input/text',
        colspan: 2
      }
    ],
    // vehicle extended basic info
    [
      {
        fieldName: 'description',
        title: 'Description',
        type: 'input/text',
        colspan: 4
      },
      {
        fieldName: 'vin',
        title: 'VIN #',
        type: 'input/vin',
        required: true,
        colspan: 4
      },
      {
        fieldName: 'vehicleClassCode',
        title: 'Vehicle Class Code',
        type: 'select/vclass',
        colspan: 4
      }
    ],
    [
      {
        fieldName: 'camera',
        title: 'Back Up Camera',
        type: 'select/camera',
        colspan: 4
      },
      {
        fieldName: 'accessory1',
        title: 'Accessory',
        type: 'select/accessory1',
        colspan: 4
      },
      {
        fieldName: 'accessory2',
        title: 'Accessory 2',
        type: 'select/accessory1',
        colspan: 4
      }
    ],
    [
      {
        fieldName: 'ownershipType',
        title: 'Ownership Type',
        type: 'select/vown',
        colspan: 3
      },
      {
        fieldName: 'assignedOperator',
        title: 'Assigned Operator',
        type: 'select/input',
        colspan: 3
      },
      {
        fieldName: 'fnfcid', //missing from api
        title: 'NFC ID',
        type: 'input/text',
        colspan: 3
      },
      {
        fieldName: 'oldLicense',
        title: 'Old License Number',
        type: 'input/text',
        colspan: 3
      }
    ],
    // credit card information section
    [
      {
        fieldName: 'fccnumber', //missing from api
        title: 'Card Number',
        type: 'input/text',
        colspan: 3
      },
      {
        fieldName: 'fcpin', //missing from api
        title: 'Card Pin Number',
        type: 'input/text',
        colspan: 3
      },
      {
        fieldName: 'fccexp', //missing from api
        title: 'Expiration Date',
        type: 'input/date',
        colspan: 3
      },
      {
        fieldName: 'fjobcode', //missing from api
        title: 'Default Job Code',
        type: 'input/text',
        colspan: 3
      }
    ],
    // misc info section
    [],
    // state and disposal section
    [
      {
        fieldName: 'state',
        title: 'State',
        type: 'select/state',
        colspan: 2
      },
      {
        fieldName: 'cityOrLocation',
        title: 'City / Location',
        type: 'input/text',
        colspan: 2
      },
      {
        fieldName: 'dateAquired',
        title: 'Date Acquired',
        type: 'input/date',
        colspan: 2
      },
      {
        fieldName: 'replacementDate',
        title: 'Replacement Date',
        type: 'input/date',
        colspan: 2
      },
      {
        fieldName: 'disposalDate',
        title: 'Disposal Date',
        type: 'input/date',
        colspan: 2
      },
      {
        fieldName: 'releasedDate',
        title: 'Released Date',
        type: 'input/date',
        colspan: 2
      }
    ],

    [{ custom: $('#submitV').parent() }]
  ]
}; // end form
addBootstrapFields(fields);

function getCorrectDateFormat(date_str) {
  if (date_str != '') {
    var date = new Date(date_str);
    return date.toISOString();
  }
}
