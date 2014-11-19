$(function () {
    'use strict';

    var selectClassName = 'select-filter';
    $('.' + selectClassName).each(function () {
        chooseSelect(this);
    }).on('change', function () {
        chooseSelect(this);
    });

    function chooseSelect(el) {
        var className = selectClassName + '--active';
        var select = $(el);

        select.toggleClass(className, select.prop('selectedIndex') > 0);
    }
});
