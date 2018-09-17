$(document).ready(function() {
    $('#training').addClass('show');
    $('#training > li:nth-child(1) > a').addClass('highlight'); 

 
    var max_fields = 5; //maximum input boxes allowed
    var wrapper = $(".items"); //Fields wrapper
    var add_button = $(".add_field_button"); //Add button ID
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
    // e.preventDefault();
    if(x < max_fields){ //max input box allowed
    x++; //text box increment
    $(wrapper).append(

    '<div class="mainAdd">' +
    '<hr class="break">' +
    '<div class="row">' +
    '<div class="col">' +
        '<div class="form-group">' +
            '<label for="tTitle">Title<span class="reqClass"> *</span></label>' +
            '<input type="text" class="form-control" id="tTitle' + x + '" required placeholder="Training Title" aria-label="Training Title">' +
            '<div class="help-block with-errors"></div>' +
        '</div>' +                                                        
    '</div>' + 
    '<div class="col">' +
        '<div class="form-group">' +
            '<label for="tDate">Date of Training<span class="reqClass"> *</span></label>' +
            '<div class="input-group date" data-provide="datepicker">' +
                '<input type="text" required id="tDate' + x + '" class="form-control">' +
                '<div class="input-group-addon">' +
                    '<span class="glyphicon glyphicon-th"><i class="fa fa-2x fa-calendar"></i></span>' +
                '</div>' +                                                                    
            '</div>' +
            '<div class="help-block with-errors"></div>' +
        '</div>' +  
    '</div>' + 
    '<div class="col">' +
        '<div class="form-group">' +
            '<label for="tPresenter">Presenter</label>' +
            '<input type="text" class="form-control" id="tPresenter' + x + '"  placeholder="Presenters Name" aria-label="Presenters Name">' +

        '</div>' +                                                        
    '</div>' +
'</div>' +
'<div class="row">' +
    '<div class="col">' +
        '<div class="form-group">' +
            '<label for="tHours">Hours<span class="reqClass"> *</span></label>' +
            '<input type="text" class="form-control" id="tHours' + x + '" required placeholder="Enter Hours" aria-label="Training Hours">' +
            '<div class="help-block with-errors"></div>' +
        '</div>' +                                                        
    '</div> ' +
    '<div class="col">' +
        '<div class="form-group">' +
            '<label for="tLocation">Location<span class="reqClass"> *</span></label>' +
            '<input type="text" class="form-control" id="tLocation' + x + '" required placeholder="Location" aria-label="Location">' +
            '<div class="help-block with-errors"></div>' +
        '</div>' +                                                        
    '</div> ' +

                                                                                                                                             
'</div>' +
'<button class="remove_field">Remove</button>' +      
'</div>'

    ); //add input box
    }
    });
     
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove field
    e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});




