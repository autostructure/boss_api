$(document).ready(function () {
    $('#dra').addClass('show');
    $('#dra > li:nth-child(1) > a').addClass('highlight');


    var max_fields = 5; //maximum input boxes allowed
    var wrapper = $(".items"); //Fields wrapper
    var add_button = $(".add_field_button"); //Add button ID
    var x = 1; //initlal text box count
    $(add_button).click(function (e) { //on add input button click
        // e.preventDefault();
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            $(wrapper).append(
                    '<div class="mainAdd">' +
                    '<hr class="break">' +
                    '<div class="row">' +
                    '<div class="col">' +
                    '<div class="form-group">' +
                    '<label for="draTitle">DRA Title<span class="reqClass"> *</span></label>' +
                    '<select name="draTitle" required id="draTitle" class="form-control">' +
                    '<option value="">Choose DRA</option>' +
                    '<option value="air">Aircraft</option>' +
                    '<option value="atv">ATV</option>' +
                    '<option value="camping">Camping</option>' +
                    ' <option value="chainsaw">Chain Saw</option>' +
                    '<option value="driving">Driving and Towing</option>' +
                    '<option value="field">Field Work</option>' +
                    '<option value="motorbike">Motor Bike</option>' +
                    '<option value="office">Office Work</option>' +
                    '<option value="paddlecraft">Paddlecraft</option>' +
                    '<option value="workingalone">Working Alone</option>' +
                    '<option value="stock">Stock Use</option>' +
                    '<option value="trailerliving">Trailer Living</option>' +
                    '<option value="winterdriving">Winter Driving</option>' +
                    '</select>' +
                    '<div class="help-block with-errors"></div>' +
                    '</div>' +
                    '</div> ' +
                    ' <div class="col">' +
                    '<div class="form-group">' +
                    '<label for="draYear">Year Valid For<span class="reqClass"> *</span></label>' +
                    '<select name="draYear" required id="draYear" class="form-control">' +
                    '<option value="">Choose Year</option>' +
                    '<option value="2016">2016</option>' +
                    '<option value="2017">2017</option>' +
                    '<option value="2018">2018</option>' +
                    '<option value="2019">2019</option>' +
                    '<option value="2020">2020</option>' +
                    '<option value="2021">2021</option>' +
                    '</select>' +
                    '<div class="help-block with-errors"></div>' +
                    '</div> ' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<button class="remove_field">Remove</button>' +
                    '</div>'

                    ); //add input box
        }
    });

    $(wrapper).on("click", ".remove_field", function (e) { //user click on remove field
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    })
});




