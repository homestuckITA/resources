'use strict'

if(window.inject === 'undefined'){
  window.inject = function (classes, target) {
    var $target = $(target || document.currentScript);

    if ($target.is('script')) $target = $target.parent();

    $(function() {
      $target.addClass(classes);
    })
  }
}