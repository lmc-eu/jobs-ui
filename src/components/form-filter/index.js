$(function () {
    'use strict';

    var selectClassName = 'form-filter';
    $('.' + selectClassName).each(function () {
        chooseSelect(this);
    }).on('change', function () {
        chooseSelect(this);
    });

    function chooseSelect(el) {
        var className = selectClassName + '--active';
        var select = $(el);

        if (select.prop('selectedIndex') > 0) {
            select.addClass(className);
        } else if (select.hasClass(className)) {
            select.removeClass(className);
        }
    }
});
