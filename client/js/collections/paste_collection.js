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
  
  collection.pasteAdded = function(paste) {
    this.add(paste);
  };
  
  /* ======================================================================= *
   *  CLASS PUBLIC METHODS                                                   *
   * ======================================================================= */
  
  
  
  /* ======================================================================= *
   *  PASTE COLLECTION CONSTRUCTOR & INITIALIZATION                          *
   * ======================================================================= */
  
  collection.initialize = function() {
    
    var that = this;
    
    //Binds all of the object's method context to 'this'.
    _.bindAll(this);
    
    now.ready(function() {
      now.pasteCollectionApi.on('add', that.pasteAdded);
    });
    
  };
  
  /* ======================================================================= */
  /* ======================================================================= */
  
  return collection;
  
});