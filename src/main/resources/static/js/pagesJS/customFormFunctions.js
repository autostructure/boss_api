/**
 * A set of custom form functions to make life easier.
 */
CustomFormFunctions = {};

/**
 * This function takes readable data and writes a Bootstrap Grid-layout Form, attaching it to the elements specified.
 * @param {object} data A specifically formatted object
 *          data[parentElement][row][column] = {
 *                  fieldName:"", // Required, the name and partial id of the input element
 *                  title:"", // Required, the label information
 *                  type:"", // Required, typically input/text, input/tel, input/date, input/email, etc.
 *                  required:bool, // defaults to false.  States whether or not field is required.
 *                  colspan:12, // if included, the field takes up a specific number of columns.  If not included, the field spreads out evenly with the others.
 *          }
 *          data[parentElement][row][column] = {
 *                  custom:$(object), // Either a newly created element or one pulled from elsewhere on the page.
 *                                    // The element is included inside a row.
 *          }
 *          data[parentElement][row].custom = $(object) // The custom element is included between the other rows.
 */
CustomFormFunctions.addBootstrapFields = function (data) {
    {
        var stateSelect = $("<select></select>")
            .append('<option value="AL">Alabama</option>')
            .append('<option value="AK">Alaska</option>')
            .append('<option value="AZ">Arizona</option>')
            .append('<option value="AR">Arkansas</option>')
            .append('<option value="CA">California</option>')
            .append('<option value="CO">Colorado</option>')
            .append('<option value="CT">Connecticut</option>')
            .append('<option value="DE">Delaware</option>')
            .append('<option value="DC">District Of Columbia</option>')
            .append('<option value="FL">Florida</option>')
            .append('<option value="GA">Georgia</option>')
            .append('<option value="HI">Hawaii</option>')
            .append('<option value="ID">Idaho</option>')
            .append('<option value="IL">Illinois</option>')
            .append('<option value="IN">Indiana</option>')
            .append('<option value="IA">Iowa</option>')
            .append('<option value="KS">Kansas</option>')
            .append('<option value="KY">Kentucky</option>')
            .append('<option value="LA">Louisiana</option>')
            .append('<option value="ME">Maine</option>')
            .append('<option value="MD">Maryland</option>')
            .append('<option value="MA">Massachusetts</option>')
            .append('<option value="MI">Michigan</option>')
            .append('<option value="MN">Minnesota</option>')
            .append('<option value="MS">Mississippi</option>')
            .append('<option value="MO">Missouri</option>')
            .append('<option value="MT">Montana</option>')
            .append('<option value="NE">Nebraska</option>')
            .append('<option value="NV">Nevada</option>')
            .append('<option value="NH">New Hampshire</option>')
            .append('<option value="NJ">New Jersey</option>')
            .append('<option value="NM">New Mexico</option>')
            .append('<option value="NY">New York</option>')
            .append('<option value="NC">North Carolina</option>')
            .append('<option value="ND">North Dakota</option>')
            .append('<option value="OH">Ohio</option>')
            .append('<option value="OK">Oklahoma</option>')
            .append('<option value="OR">Oregon</option>')
            .append('<option value="PA">Pennsylvania</option>')
            .append('<option value="RI">Rhode Island</option>')
            .append('<option value="SC">South Carolina</option>')
            .append('<option value="SD">South Dakota</option>')
            .append('<option value="TN">Tennessee</option>')
            .append('<option value="TX">Texas</option>')
            .append('<option value="UT">Utah</option>')
            .append('<option value="VT">Vermont</option>')
            .append('<option value="VA">Virginia</option>')
            .append('<option value="WA">Washington</option>')
            .append('<option value="WV">West Virginia</option>')
            .append('<option value="WI">Wisconsin</option>')
            .append('<option value="WY">Wyoming</option>');
    }
    /**
     * Forms the column from data and returns it.  Caution, this is recursive.
     * @param {object} col The column data
     * @return {jquery_object} The column element
     */
    function formColumn(col) {
        var colEl;
        if (col.custom) {
            colEl = col.custom;
        } else if (col.nested) {
            colEl = $("<div class='col'></div>");
            if (col.colspan) {
                colEl.addClass("col-md-" + col.colspan);
            }
            var innerRow = $("<div class='row'></div>").appendTo(colEl);
            for (var i in col.nested) {
                var innerCol = col.nested[i];
                innerRow.append(formColumn(innerCol));
            }
        } else {
            colEl = $("<div class='col'></div>"); // -El for element
            var groupEl = $("<div class='form-group'></div>").appendTo(colEl);
            var types = col.type.split("/");
            if (col.colspan) {
                colEl.addClass("col-md-" + col.colspan);
            }
            var thisID = col.fieldName.replace(/\./g, "_");
            var labelEl = $("<label>" + col.title + "</label>")
                .attr("for", parent + "_" + thisID);
            groupEl.append(labelEl);
            var input;
            if (types[0] == "input") {
                var input = $("<input>").attr("type", types[1])
                    .attr("placeholder", col.placeholder || "Enter " + col.title)
            } else if (types[0] == "select") {
                var input = $("<select>");
                input.append($("<option value=''>" + (col.placeholder || "Choose " + col.title) + "</option>"));
                if (types[1] == "state") {
                    input.append(stateSelect.find("option").clone());
                }
                if (col.options) {
                    for (var val in col.options) {
                        name = col.options[val];
                        input.append("<option value='" + val + "'>" + name + "</option>")
                    }
                }
                if (col.selectFrom) {
                    var url = col.selectFrom.url;
                    var value = col.selectFrom.value;
                    var label = col.selectFrom.label;
                    if (!url) {
                        console.log("SelectFrom.url must be a string.")
                        console.log(col.selectFrom);
                        return false;
                    }
                    if (!value) {
                        value = 'id';
                    }
                    if (!label) {
                        label = 'description';
                    }
                    CustomFormFunctions.populateDropDown(input, url, value, label, false);
                }
            } else if (types[0] == "textarea") {
                var input = $("<textarea>");
                input.attr("placeholder", col.placeholder || "");
            }
            input.addClass('form-control')
                .attr("id", parent + "_" + thisID)
                .attr("name", col.fieldName)
                .attr("aria-label", col.title);
            if (col.type == "input/tel") {
                input.attr("pattern", "\\(?\\d{3}\\)? ?-?\\d{3} ?-?\\d{4}");
            }
            if (col.type == "input/zipCode") {
                input.attr("pattern", "(\\d{5}([\\-]\\d{4})?)");
                input.attr("placeHolder", "12345 or 12345-6789");
            }
            if (col.type == "input/date") {
                input.attr("type", "text");
                input.attr("data-date-format", "MMM DD YYYY");
                input.attr("data-provide", "datepicker");
                input.addClass("datepicker");
                var inputGroup = $('<div class="input-group date" data-provide="datepicker">');
                inputGroup.append(input);
                inputGroup.append('<div class="input-group-addon"><span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span></div>');
                groupEl.append(inputGroup);
                input.datepicker({ format: "MMM DD YYYY" });
            }
            if (col.required) {
                input.attr("required", true);
                labelEl.html(labelEl.html() + "<span class='reqClass'> *</span>");
            }
            if (col.disabled) {
                input.attr("required", false);
                input.attr("disabled", true);
            }
            if (col.pattern) {
                input.attr("pattern", col.pattern);
            }
            if (col.type == "input/number") {
                if (col.step)
                    input.attr("step", col.step);
                if (col.min)
                    input.attr("min", col.min);
                if (col.max)
                    input.attr("max", col.max);
            }
            if (col.type != "input/date") {
                groupEl.append(input);
            }
            groupEl.append('<div class="help-block with-errors"></div>');
            if (col.hidden) {
                colEl.hide();
            }
        }
        return colEl;
    }
    for (var parent in data) {
        var rows = data[parent];
        var rowEls = $("");
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            if (row.custom) {
                rowEls = rowEls.add(row.custom);
            } else {
                var rowEl = $("<div class=row></div>");
                for (var j = 0; j < row.length; j++) {
                    var col = row[j];
                    rowEl.append(formColumn(col));
                }
                rowEls = rowEls.add(rowEl);
            }
        }
        $("#" + parent).append($(rowEls));
    }
}

/**
 * Populates a dropdown dynamically
 * @param {jQuery} element the select element to populate
 * @param {string} url the api url
 * @param {string} valueKey the key of what will go in the database
 * @param {string} labelKey the key of what will display
 * @param {boolean} removeExistingOptions false to only add to element.  True to remove all options with an actual value
 * @param {function} resolved Function to call after the dropdown populates
 * @param {function} rejected Function to call if the dropdown errors
 */
CustomFormFunctions.populateDropDown = function (element, url, valueKey, labelKey, removeExistingOptions, resolved, rejected) {
    element = $(element).filter("select");
    if (removeExistingOptions) {
        element.find("option[value!='']").remove();
    }
    resolved = resolved || function (data) { };
    rejected = rejected || function (a) { console.log(a.responseJSON); };
    $.ajax({
        type: 'GET',
        url: url,
        contentType: "application/json",
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (json) {
            for (k in json) {
                var opt = json[k];
                var val = opt[valueKey];
                var name = opt[labelKey];
                if (typeof opt === "string") {
                    val = opt;
                    name = opt;
                }
                element.append("<option value='" + val + "'>" + name + "</option>");
            }
            resolved();
        },
        error: rejected,
    });
}

/**
 * Automatically populates all the elements selected with data from a specific API.
 * @param {*} elements jQuery object (or string) with the elements to populate.
 * @param {string} url The url of the API to populate from.
 * @param {number} entityID The id of the entity to populate from.
 */
CustomFormFunctions.populateElements = function (elements, url, entityID) {
    elements = $(elements);
    $.ajax({
        type: 'GET',
        url: url + "/" + entityID,
        contentType: "application/json",
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (json) {
            for (k in json) {
                // var el = elements.filter("[name='" + k + "']");
                // el.val(json[k]);
                // if (el.hasClass('datepicker')) {
                //     el.val(CustomFormFunctions.formatDate(json[k], "mm/dd/yyyy"));
                // }
                populate(k, json[k]);
            }
        }
    });

    function populate(key, value) {
        
        if (value instanceof Object) {
            for (k in value) {
                populate(key + "." + k, value[k]);
            }
        } else {
            var el = elements.filter("[name='" + key + "']");
            if (el == undefined) {
                Console.log("control with name: '" + key + "' is no found");
            } else {
                el.val(value);

                if (el.hasClass('datepicker')) {
                    el.val(CustomFormFunctions.formatDate(value, "mm/dd/yyyy"));
                }
            }
        }
    }
}

/**
 * Each element should have a [name] that equals the key of the value you're updating.
 * @param {jQuery} elements jQuery selection
 * @param {string} url The url to GET to for the putPartialInfo() function
 * @param {number} entityID The id of the entity to update.  If not given, it will look at element.data('entityID').
 */
CustomFormFunctions.setSneakySave = function (elements, url, entityID) {
    elements = $(elements);
    
    if (entityID) {
        elements.each(function () {
            $(this).attr("data-entityID", entityID);
        })
    }
    elements.on("focusout change", function () {
        var key = this.name;
        var val = this.value;
        if ($(this).hasClass('datepicker')) {
            val = CustomFormFunctions.formatDate(this, "ISO-Short");
        }
        var partial = {};
        CustomFormFunctions.setNested(partial, key, val);
        var id = $(this).attr("data-entityID");

        if (!id) {
            console.warn("Cannot sneakily save because there is no entityID");
            return;
        }

        console.log(partial);

        CustomFormFunctions.putPartialInfo(url, id, partial);
    });
}

/**
 * 
 * @param {Date} input: Date value, date string, milliseconds int, or jquery Object
 * @return {Date} date
 */
CustomFormFunctions.getDateFrom = function (input) {
    var date = input;
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        if (date == null) return null;
        date = new Date(date);
    }
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        if (parseInt(date) == null) return null;
        date = new Date(parseInt(date));
    }
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        if ($(input).length == 0) {
            console.error("Invalid jQuery selection: ", input);
            return new Date();
        }
        console.log($(input));
        if (!$(input).val()) return null;
        date = new Date($(input).val());
    }
    return date;
}

/**
 * 
 * @param {Date} date Date value, date string, milliseconds int, or jquery Object
 * @param {string} format "mm/dd/yyyy", "bootstrap" ; "yyyy/mm/dd" ; "yyyy-mm-dd", "ISO-Short", "ISO" ;
 */
CustomFormFunctions.formatDate = function (date, format) {
    date = CustomFormFunctions.getDateFrom(date);
    if (date == null) return "";
    var year = ("0000" + date.getFullYear().toString()).substr(-4, 4);
    var month = ("0000" + (date.getMonth() + 1).toString()).substr(-2, 2);
    var day = ("0000" + date.getDate().toString()).substr(-2, 2);
    switch (format) {
        case "mm/dd/yyyy":
        case "bootstrap":
            return month + "/" + day + "/" + year;
        case "yyyy/mm/dd":
            return year + "/" + month + "/" + day;
        case "yyyy-mm-dd":
        case "ISO-Short":
        case "ISO":
        default:
            return date.toISOString();
    }
}

CustomFormFunctions.putPartialInfo = function (url, id, partial, resolved, rejected) {
    resolved = resolved || function () { }
    rejected = rejected || function (a, b, c) {
        console.log(a);
        console.log(a.responseJSON);
        console.log(b);
        console.log(c);
        //break
    }
    if (id == 0) {
        $.ajax({
            type: 'POST',
            url: url,
            contentType: "application/json",
            dataType: 'json',
            data: JSON.stringify(partial),
            cache: false,
            timeout: 600000,
            success: resolved,
            error: rejected,
        });
    } else {
        $.ajax({
            type: 'GET',
            url: url + "/" + id,
            contentType: "application/json",
            dataType: 'json',
            cache: false,
            timeout: 600000,
            success: function (json) {

                for (k in partial) {
                    var val = partial[k];
                    
                    if (parseInt(val) == val) {

                        var obj = CustomFormFunctions.preprocessPartialPUT(val, url, k);
                        if (obj == undefined) {
                            json[k] = parseInt(val);
                        } else {
                            json[k] = obj;
                        }

                        
                    } else if (parseFloat(val) == val) {
                        json[k] = parseFloat(val);
                    } else {
                        json[k] = val;
                    }
                }
                $.ajax({
                    type: 'PUT',
                    url: url + "/" + id,
                    contentType: "application/json",
                    dataType: 'json',
                    cache: false,
                    timeout: 600000,
                    data: JSON.stringify(json),
                    success: resolved,
                    error: rejected,
                });
            },
            error: rejected
        });
    }
}


CustomFormFunctions.preprocessPartialPUT = function (partialData, url, data_name) {
    
    if (url == '/employeeProfile') {
        if (data_name == 'supervisor') {
            if (parseInt(partialData) == partialData) {
               
                var emp;
                $.ajax({
                    url: '/employeeProfile/' + partialData,
                    type: 'GET',
                    cache: false,
                    timeout: 600000,
                    async: false,
                    success: function (json) {
                        emp = json;
                    },
                    error: function (a, b, c) {
                        console.log(a);
                        console.log(b);
                        console.log(c);
                    }
                });
                
                return emp;
            }
        }
    }
}

CustomFormFunctions.getNested = function (obj, key) {
    var keys = key.split(".");
    for (var i in keys) {
        if (!obj instanceof Object) {
            return obj;
        }
        var k = keys[i];
        obj = obj[k];
    }
    return obj;
}

CustomFormFunctions.setNested = function (obj, key, value) {
    var keys = key.split(".");
    var lastKey = keys.pop();
    for (var i in keys) {
        var k = keys[i];
        if (obj[k] == null) {
            obj[k] = {};
        }
        obj = obj[k];
    }
    obj[lastKey] = value;
}