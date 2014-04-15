'use strict';

// iOS Rotation Fix Attempt
var screenLap = 768;

if (Element.prototype.addEventListener) {
    window.addEventListener('resize', function () {
        var width = parseInt(window.innerWidth, 10);

        // Do not continue if not on mobile
        if (width > screenLap) {
            return;
        }

        $('.grid__item').css('z-index', 1);
    });
}

$(function() {
    window.srcnpolyfill();
});