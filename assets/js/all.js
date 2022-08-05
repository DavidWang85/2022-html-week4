"use strict";

$(document).ready(function () {
  $('.ham-icon').click(function (e) {
    e.preventDefault();
    $('.dropdown').toggleClass('active');
    $('.ham').toggleClass('active');
    $('.close').toggleClass('active');
  });
});
//# sourceMappingURL=all.js.map
