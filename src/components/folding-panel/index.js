$(function () {
    'use strict';

    var iconRightClass = 'icon--arrow-right';
    var iconDownClass = 'icon--arrow-down';

    var setClasses = function (element) {
        var span = element.find('.folding-panel__title .icon, .folding-panel__arrow .icon');
        if (span.hasClass(iconDownClass)) {
            span.removeClass(iconDownClass).addClass(iconRightClass);
        } else {
            span.removeClass(iconRightClass).addClass(iconDownClass);
        }
    };

    $('.folding-panel-list').on('click', '.folding-panel__arrow, .folding-panel__title', function () {
        var element = $(this).closest('.folding-panel');
        setClasses(element);
        element.find('.folding-panel__additional-info').slideToggle('fast');
    });
});
