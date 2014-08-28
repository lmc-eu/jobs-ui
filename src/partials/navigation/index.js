'use strict';

$(function () {
  $('[data-navigation-toggle]').click(function (e) {
    $('#navigation').toggleClass('navigation--open');
    $(this).toggleClass('header__toggle--active');
    e.preventDefault();
  });
});

$(function () {
  $('[data-navigation-profile-toggle]').click(function (e) {
    $('#navigation-profile').toggleClass('navigation__profile--open');
    $(this).toggleClass('header__toggle--active');
    e.preventDefault();
  });
});