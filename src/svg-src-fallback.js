'use strict';

/*
 * Replaces SVG images in img elements with PNG alternative
 */

$(function () {
  function supportsSvg () {
    return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1');
  }

  if (!supportsSvg()) {
    $('img[src$=svg]').attr('src', function (i, src) {
      return src.replace(/svg$/, 'png');
    });
  }
});