define(
  [
    'underscore'
  , 'backbone'
  
  , 'views/paste_item_view'
  ]
, function(_, Backbone, PasteItemView) {

  var view = {};

  /* ======================================================================= *
   *  EVENTS                                                                 *
   * ======================================================================= */
  
  /* ======================================================================= *
   *  EVENT HANDLERS                                                         *
   * ======================================================================= */
  view.pasteAdded = function(paste) {
    
    var pasteItemView = new PasteItemView({ model : paste })
      ;
    
    this.$el.append(pasteItemView.render().el);
  }
  
  /* ======================================================================= *
   *  CLASS PUBLIC METHODS                                                   *
   * ======================================================================= */
   
  view.render = function() {
    
    var that = this
      ;
    
    //this.$el.html(PulseCollectionTmpl());
    
    this.collection.each(function(paste) {
      var pasteItemView = new PasteItemView({ model : paste})
        ;
        
      that.$el.append(pasteItemView.render().el);
    });
    
  };
  
  /* ======================================================================= *
   *  PASTE ITEM VIEW CONSTRUCTOR & INITIALIZATION                           *
   * ======================================================================= */
  
  view.initialize = function(options) {
    
    _.bindAll(this);
    
    this.collection = options.collection;
    
    this.$el = $(this.el);
    
    this.collection.bind('add', this.pasteAdded);
  };
  
  /* ======================================================================= */
  /* ======================================================================= */
  
  return Backbone.View.extend(view);
  
});