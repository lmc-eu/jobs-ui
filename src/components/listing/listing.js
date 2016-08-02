'use strict';

require('jQuery.dotdotdot');

var runDotDotDot = function () {
    var options = [
        {
            selector: '.post-listing h2',
            ellipsis: '\u2026'
        },
        {
            selector: '.post-listing p',
            ellipsis: '\u2026',
            after: '.post-listing__read-more'
        },
        {
            selector: '.promo__title',
            ellipsis: '\u2026'
        },
        {
            selector: '.featured__caption:not(.featured__caption--simple)',
            ellipsis: '\u2026'
        }
    ];

    $.each(options, function (i, o) {
        o.debug = false;
        var cutText = $(o.selector);
        cutText.dotdotdot(o);
        // Work-around for https://github.com/BeSite/jQuery.dotdotdot/pull/2
        if (cutText.data('dotdotdot-style') === undefined) {
            cutText.data('dotdotdot-style', '');
        }
    });
};

$(function () {
    var watchInterval;
    $(window).resize(function () {
        if (watchInterval) {
            clearTimeout(watchInterval);
        }
        watchInterval = setTimeout(runDotDotDot, 50);
    }).resize();
});