define(
  [
    'underscore'
  , 'backbone'
  
  , 'now'
  ]
, function(_, Backbone) {
  
  var model = {};
  
  /* ======================================================================= *
   *  EVENT HANDLERS                                                         *
   * ======================================================================= */
  
  model.destroyed = function() {
    this.destroy();
  };
  
  /* ======================================================================= *
   *  CLASS PUBLIC METHODS                                                   *
   * ======================================================================= */
  
  
  
  /* ======================================================================= *
   *  PASTE MODEL CONSTRUCTOR & INITIALIZATION                               *
   * ======================================================================= */
  
  model.initialize = function() {
    
    var that = this;
    
    //Binds all of the object's method context to 'this'.
    _.bindAll(this);
    
    if (!this.isNew()) {
      now.ready(function() {
        now.pasteCollectionApi.on('destroy', function(pasteObj) {
          pasteObj.id === that.id && that.destroy();
        });
      });
    }
    
  };
  
  /* ======================================================================= */
  /* ======================================================================= */
  
  return Backbone.Model.extend(model);
  
});