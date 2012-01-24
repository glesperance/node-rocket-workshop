var ht  = {}
  , eh  = { 'destroy' : [], 'add' : [] }
  ;

exports.create = function(obj) {
  
  var mobj = new Object(obj)
    ;
    
  mobj.id = Date.now();
  
  ht[mobj.id] = obj;
  
  for (var cb in eh['add']) {
    eh['add'][cb](mobj);
  }
  
}

function getter(id) {
  
  var obj = new Object(ht[id])
    ;
    
  obj.id = id;
  
  return obj;
}

exports.get = getter;

exports.destroy = function(id) {
  
  var obj = new Object(ht[id])
    ;
    
  obj.id = id;
  
  delete ht[id];
  
  for (var cb in eh['destroy']) {
    eh['destroy'][cb](obj);
  }
  
  return obj;
}

exports.getAll = function() {
  
  var result = []
    ;
  
  for (var i in ht) {
    result.push(getter(i));
  }
  
  return result;
}

exports.on = function(event, cb) {
  eh[event].push(cb);
}