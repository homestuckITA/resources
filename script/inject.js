function inject(selector, classes){
  if(classes){
    selector = selector[0] === '#' ? selector : '#' + selector;
  } else {
    classes = selector;
    selector = 'body';
  }

  $(function() {
    $(selector).addClasses(classes);
  })
}

function injectThis(classes) {
  $(this).parent().addClasses(classes);
}