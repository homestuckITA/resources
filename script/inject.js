'use strict'

if(window.inject === undefined){
  window.inject = function (classes, target) {
    console.log(target);
    console.log(document.currentScript);
    var $target = $(target || document.currentScript);

    if ($target.is('script')) $target = $target.parent();

    $(function() {
      $target.addClass(classes);
    })
  }
}