$(function () {
    'use strict';

    var selectClassName = 'select-filter';
    $('.' + selectClassName + ' select').each(function () {
        $(this).data('index', $(this).prop('selectedIndex'));
        chooseSelect(this);
    }).on('change', function () {
        chooseSelect(this);
    });

    function chooseSelect(el) {
        var select = $(el);
        var parent = select.parent();
        var index = select.prop('selectedIndex');
        var selected = index > 0;

        if (selected) {
            parent.toggleClass(selectClassName + '--active', selected);
            if (index !== select.data('index')) {
                parent.addClass(selectClassName + '--in-progress');
            }
        }
    }
});
