'use strict';

$(function () {
    var navigation = $('#navigation');
    var navigationToggle = $('[data-navigation-toggle]');
    var navigationProfileToggle = $('[data-navigation-profile-toggle]');
    var navigationProfile = $('#navigation-profile');

    navigationToggle.on('click', function (e) {
        navigation.toggleClass('navigation--open');
        navigationToggle.toggleClass('header__toggle--active');
        e.preventDefault();
        e.stopImmediatePropagation();
    });

    navigationProfileToggle.on('click', function (e) {
        navigationProfile.toggleClass('navigation__profile--open');
        navigationProfileToggle.toggleClass('header__toggle--active');
        e.preventDefault();
        e.stopImmediatePropagation();
    });

    navigation.on('click', function (e) {
        e.stopImmediatePropagation();
    });
    navigationProfile.on('click', function (e) {
        e.stopImmediatePropagation();
    });

    $('body').on('click', function () {
        navigationProfile.removeClass('navigation__profile--open');
        navigationProfileToggle.removeClass('header__toggle--active');

        navigation.removeClass('navigation--open');
        navigationToggle.removeClass('header__toggle--active');
    });
});
