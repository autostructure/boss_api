$(mainHeader).load("../../templates/budgetHeader.html");
$(mainFooter).load("../../templates/budgetFooter.html");
$(sidebar).load("../../templates/sidebar.html");
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    // This expands and highlights the appropriate link in the sidebar.
    var loc = window.location.pathname
    $('#sidebar a[href="'+loc+'"]').parent().parent().addClass('show');
    $('#sidebar a[href="'+loc+'"]').addClass('highlight');
    // This removes a bad css style from bootstrap select elements.
    $("select").attr("size","");
});

if ($(window).width() < 514) {
    $('#sidebar, .main-header, .breadcrumbdiv').addClass('hidden');
};