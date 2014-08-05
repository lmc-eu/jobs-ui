'use strict';

$(function () {
  $('[data-navigation-toggle]').click(function (e) {
    $('#navigation').toggleClass('navigation--open');
    e.preventDefault();
  });
});