define(
  [
    'underscore'
  , 'backbone'
  
  , 'now'
  ]
, function(_, Backbone) {
  
  var collection= {};
  
  /* ======================================================================= *
   *  EVENT HANDLERS                                                         *
   * ======================================================================= */
  
  collection.destroyed = function() {
    this.destroy();
  };
  
  /* ======================================================================= *
   *  CLASS PUBLIC METHODS                                                   *
   * ======================================================================= */
  
  
  
  /* ======================================================================= *
   *  PASTE MODEL CONSTRUCTOR & INITIALIZATION                          *
   * ======================================================================= */
  
  collection.initialize = function() {
    
    var that = this;
    
    //Binds all of the object's method context to 'this'.
    _.bindAll(this);
    
    if (!this.isNew()) {
      now.ready(function() {
        
        now.pasteCollectionApi.get(that.get('id'), function(err, pasteObj) {
          pasteObj && pasteObj.on('destroy', that.destroyed);
        });
      });
    }
    
  };
  
  /* ======================================================================= */
  /* ======================================================================= */
  
  return collection;
  
});