(function() {
    'use strict';

    var selectClassName = 'form__select__filterable';
    $('select.' + selectClassName).each(function() {
        chooseSelect(this);
    }).on('change', function() {
        chooseSelect(this);
    });

    function chooseSelect(el) {
        var className = selectClassName + '--selected';
        var select = $(el);

        if (select.prop('selectedIndex') > 0) {
            select.addClass(className);
        } else if (select.hasClass(className)) {
            select.removeClass(className);
        }
    }
})();
