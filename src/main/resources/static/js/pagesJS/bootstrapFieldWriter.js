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
function addBootstrapFields(data) {
    /**
     * Forms the column from data and returns it.  Caution, this is recursive.
     * @param {object} col The column data
     * @return {jquery_object} The column element
     */
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
                input.datepicker({format: "MMM DD YYYY"});
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
                    input.attr("step", col.min);
                if (col.max)
                    input.attr("step", col.max);
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