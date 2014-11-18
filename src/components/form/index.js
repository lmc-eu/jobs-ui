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
        var selectedIndex = $(el).prop('selectedIndex');

        if (selectedIndex > 0) {
            $(el).addClass(className);
        } else if ($(el).hasClass(className)) {
            $(el).removeClass(className);
        }
    }
})();
