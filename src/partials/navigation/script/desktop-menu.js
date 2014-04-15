'use strict';

if ('ontouchstart' in document.documentElement) {
    $('.nav__item__link--has-submenu').each(function () {
        var onClick;
        var firstClick = function () {
            onClick = secondClick;
            return false;
        };
        var secondClick = function () {
            onClick = firstClick;
            return true;
        };
        onClick = firstClick;
        $(this).click(function () {
            return onClick();
        });
    });
}
