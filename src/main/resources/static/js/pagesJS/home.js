$(mainHeader).load("/boss/templates/budgetHeader.html");
$(mainFooter).load("/boss/templates/budgetFooter.html");

// $('#collapseOne').addClass('show', $(window).width() > 800);
if ($(window).width() < 960) {
    $('.card-tbody').removeClass('show');
    $('.card-title').css('text-decoration', 'underline');
} else {
    $('.card-tbody').addClass('show');
}