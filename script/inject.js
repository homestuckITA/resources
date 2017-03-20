function inject(selector, classes){
  if(classes){
    selector = selector[0] === '#' ? selector : '#' + selector;
  } else {
    classes = selector;
    selector = 'body';
  }

  $(function() {
    $(selector).addClass(classes);
  })
}

function injectThis(classes) {
  console.log(this);
  $(this).parent().addClass(classes);
}