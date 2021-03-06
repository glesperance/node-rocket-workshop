define(
  [
    'underscore'
  , 'backbone'
  
  , 'models/paste'
  
  , 'now'
  ]
, function(_, Backbone, Paste) {
  
  var collection= {};

  /* ======================================================================= *
   *  ATTRIBUTES                                                             *
   * ======================================================================= */
  
  collection.url = '/pastes';
  
  collection.model = Paste;
  
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
      now.pasteCollectionApi && now.pasteCollectionApi.on('add', that.pasteAdded);
    });
    
  };
  
  /* ======================================================================= */
  /* ======================================================================= */
  
  return Backbone.Collection.extend(collection);
  
});