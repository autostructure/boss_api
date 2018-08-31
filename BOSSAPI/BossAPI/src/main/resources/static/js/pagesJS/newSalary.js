$(document).ready(function () {
    $('#payrollSub').addClass('show');
    $('#payrollSub > li:nth-child(3) > a').addClass('highlight');
    console.log('getting script');
    $.getScript("js/pagesJS/ApiCalls.js", function () {
        var selectedProfile = {};
        getEmployeeProfiles(
                function (employeeProfiles) {
                    $.each(employeeProfiles, function (index, employeeProfile) {
                        console.log(employeeProfile);
                        $('#nameCode')
                                .append($("<option></option>")
                                        .attr("value", employeeProfile.id)
                                        .text(employeeProfile.nameCode));
                    });
                },
                function (err) {
                    console.log(err);
                }
        );

        $("#nameCode").change(function () {
            var employeeId = $(this).find(":selected").attr('value');
            getEmployeeProfileById(
                    function (employeeProfile) {
                        $('#lname').val(employeeProfile.lastName);
                        $('#fname').val(employeeProfile.firstName);
                        $('#state').val(employeeProfile.stateAssigned);
                        $('#rwage').val(employeeProfile.regPayPerPayPeriod);
                        $('#otime').val(employeeProfile.overtimeHourlyWage);
                        $('#ppl').val(employeeProfile.payPeriodsLeft);
                        $('#pwp').val(employeeProfile.pwpsalary);
                        Object.assign(selectedProfile, employeeProfile);
                    },
                    function (err) {
                        console.log(err);
                    }, employeeId
                    );
        });
        $('#submitNewSalary').click(function () {
            selectedProfile.lastName = $('#lname').val();
            selectedProfile.firstName = $('#fname').val();
            selectedProfile.stateAssigned = $('#state').val();
            selectedProfile.regPayPerPayPeriod = parseInt($('#rwage').val());
            selectedProfile.overtimeHourlyWage = parseInt($('#otime').val());
            selectedProfile.payPeriodsLeft = parseInt($('#ppl').val());
            selectedProfile.pwpsalary = parseInt($('#pwp').val());
            putEmployeeProfileWithID(
                    function (pfile) {
                        console.log(pfile);
                    },
                    function (err) {
                        console.log(err);
                    }, selectedProfile, selectedProfile.id
                    );
        });
    });
});