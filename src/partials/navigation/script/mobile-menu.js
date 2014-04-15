'use strict';

var footerMenu = $('#footerMenu').clone().hide().removeAttr('id').addClass('visible--palm');
var header = $('#header');
var menuIsVisible = false;

header.after(footerMenu);

$('#mobileMenu').on('click', function (e) {
    e.preventDefault();

    if (menuIsVisible) {
        footerMenu.hide();
        menuIsVisible = false;
    } else {
        footerMenu.show();
        menuIsVisible = true;
    }
});
