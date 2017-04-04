(function(){
  function inject(data) {
    data = data | ''
    console.log('  attribute data: ' + data)
    console.loh('  starting injection')
    data.split(' ').map(function(d) {
      var sep = d.indexOf(':')
      var target = d.substr(0, sep)
      var newClass = d.substr(sep + 1)
      console.log('    injected: ' + target + ':' + newClass)
      document.getElementById(target).classList.add(newClass)
    })
    console.log('  injection finished')
  }

  console.log('script run locally')
  console.log('  #text1 (DOM)')
  console.log(document.getElementById('text1'))
  console.log('  #inject (DOM)')
  console.log(document.getElementById('inject'))
  var data = document.getElementById('inject').getAttribute('inject')
  inject(data)

  $(function (){
    console.log('script run with $()')
    console.log('  #inject (jQuery)')
    var $inject = $('#inject')
    console.log($inject)
    console.log('  #inject data-inject')
    console.log($inject.data('inject'))
  })
})()
