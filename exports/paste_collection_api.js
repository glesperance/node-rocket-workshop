exports.on = function(event, callback) {
  
  var i = 2;
  
  if (event = 'add') {
    setInterval(function() {
      callback({ id : i++, title: 'Paste #'  + i, content : 'Hello!' });
    }, 5000);
  } else if (event === 'destroy') {
      console.log('goom')
      setInterval(function() {
        callback({ id : i++, title: 'Paste #'  + i, content : 'Hello!' });
      }, 3000);
  }
  
}