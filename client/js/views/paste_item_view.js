define(
  [
    'underscore'
  , 'backbone'
  
  , 'templates/paste_item_tmpl.jade'
  ]
, function(_, Backbone, PasteItemTmpl) {

  var view = {};
  
  /* ======================================================================= *
   *  ATTRIBUTES                                                             *
   * ======================================================================= */

  view.tagName = 'tr';

  /* ======================================================================= *
   *  EVENTS                                                                 *
   * ======================================================================= */
  view.events = {
    'click .delete' : 'doDelete'
  };
  
  /* ======================================================================= *
   *  EVENT HANDLERS                                                         *
   * ======================================================================= */
  
  view.modelDestroyed = function() {
    this.remove();
  };
   
  view.doDelete = function() {
    this.model.destroy();
  };
  
  /* ======================================================================= *
   *  CLASS PUBLIC METHODS                                                   *
   * ======================================================================= */
   
  view.render = function() {
    
    var locals  = _.extend(
                      {showUrl : this.model.url() }
                    , this.model.attributes
                  )
      ;
      
    this.$el.html(PasteItemTmpl(locals));
    
    this.model.bind('destroy', this.modelDestroyed);
    
    return this;
  };
  
  /* ======================================================================= *
   *  PASTE ITEM VIEW CONSTRUCTOR & INITIALIZATION                           *
   * ======================================================================= */
  
  view.initialize = function() {
    
    _.bindAll(this);
    
    this.$el = $(this.el);
  };
  
  /* ======================================================================= */
  /* ======================================================================= */
  
  return Backbone.View.extend(view);
  
});