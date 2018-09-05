$(mainHeader).load("../../templates/budgetHeader.html");
$(mainFooter).load("../../templates/budgetFooter.html");
$(sidebar).load("../../templates/hrsidebar.html")
$(document).ready(function () {
    $('#sidebar').addClass('active');
    
    
        $('#sidebarCollapse').on('click', function () {
            // open or close navbar
            $('#sidebar').toggleClass('active');
            // close dropdowns
            $('.collapse.in').toggleClass('in');
            // and also adjust aria-expanded attributes we use for the open/closed arrows
            // in our CSS
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    
    });

if ($(window).width() < 514) {
    $('#sidebar, .main-header, .breadcrumbdiv').addClass('hidden');
};