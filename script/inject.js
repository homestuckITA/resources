'use strict'

if(window.inject === undefined){
  window.inject = function (classes, target) {
    var $target = $(target || 'body');

    if ($target.is('script')) $target = $target.parent();

    $(function() {
      $target.addClass(classes);
    })
  }

  console.log('Added inject() to window');
}