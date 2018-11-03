$(document).ready(function () {
    var identifier = window.location.pathname.split("/")[2];
    $.ajax({
        url: "/employeeProfile/" + identifier,
        type: 'GET',
        success: function (json) {
            var modal = $('div.mainAdd');
            modal.find("#PrimaryPhone").val(json.homePhone);
            modal.find("#SecondaryPhone").val(json.cellPhone);
            modal.find("#PersonalEmail").val(json.personalEmail);
            modal.find("#CityTwo").val(json.emergencyContactCity2);
            modal.find("#FirstNameOne").val(json.emergencyContactFirstName1);
            modal.find("#FirstNameTwo").val(json.emergencyContactFirstName2);
            modal.find("#HomePhoneOne").val(json.emergencyContactHomePhone1);
            modal.find("#HomePhoneTwo").val(json.emergencyContactHomePhone2);
            modal.find("#LastNameOne").val(json.emergencyContactLastName1);
            modal.find("#LastNameTwo").val(json.emergencyContactLastName2);
            modal.find("#FirstRelationship").val(json.emergencyContactRelationship1);
            modal.find("#SecondRelationship").val(json.emergencyContactRelationship2);
            modal.find("#StateOne").val(json.emergencyContactState1);
            modal.find("#StateTwo").val(json.emergencyContactState2);
            modal.find("#AddressOne").val(json.emergencyContactStreetAddress1);
            modal.find("#AddressTwo").val(json.emergencyContactStreetAddress2);
            modal.find("#WorkPhoneOne").val(json.emergencyContactWorkPhone1);
            modal.find("#WorkPhoneTwo").val(json.emergencyContactWorkPhone2);
            modal.find("#ZipOne").val(json.emergencyContactZip1);
            modal.find("#ZipTwo").val(json.emergencyContactZip2);
            modal.find("#CellPhoneOne").val(json.emergencyContactCellPhone1);
            modal.find("#CellPhoneTwo").val(json.emergencyContactCellPhone2);
            modal.find("#gender").val(json.gender);
            modal.find("#race").val(json.race);
            modal.find("#eyeColor").val(json.eyeColor);
            modal.find("#hairColor").val(json.hairColor);
            modal.find("#heightFeet").val(json.heightFeet);
            modal.find("#heightInches").val(json.heightInches);
            modal.find("#weight").val(json.weightPounds);
            modal.find("#otherID").val(json.otherIdentifyingFeatures);

        },
        error: function (xhr, status, error) {
            console.log("error getting employe profile in modal contact: " + selected_row);
        },
        async: false
    });

    window.print();
    window.onafterprint = function () {
        debugger;
        this.window.location.href = "/EmployeePrint";
    };



});