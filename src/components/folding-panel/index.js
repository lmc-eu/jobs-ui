'use strict';

$(function () {
    $('[data-folding-panel-list]').on('click', '.folding-panel__arrow, .folding-panel__head', function (event) {
        event.preventDefault();

        var foldingPanel = $(this).closest('.folding-panel');
        var icon = foldingPanel.find('.icon');

        icon.toggleClass('icon--arrow-right')
            .toggleClass('icon--arrow-down');

        foldingPanel.find('.folding-panel__body').slideToggle('fast');
    });
});
