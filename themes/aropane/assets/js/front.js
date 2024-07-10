function equalizeHeight(x, y) {
  var textHeight = $(x).height();
  $(y).css("min-height", textHeight);
}

$(document).ready(function () {
  "use strict";

  equalizeHeight(".featured-posts .text", ".featured-posts .image");

  $(window).resize(function () {
    equalizeHeight(".featured-posts .text", ".featured-posts .image");
  });
});
