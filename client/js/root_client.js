define(
  [
    'collections/paste_collection'
  , 'views/paste_collection_view'
  ]
, function(PasteCollection, PasteCollectionView) {
  
  var exports = {};
  
  /**************************************************************************/
  
  /**
   * CLIENT INITIALIZATION FUNCTION
   */
  exports.init = function(boot_options) {
    var pasteCollection     = new PasteCollection(boot_options)
      , pasteCollectionView = new PasteCollectionView({ 
            collection  : pasteCollection
          , el          : $('#paste-table')
        })
      ;
    
    pasteCollectionView.render();
  };
  
  /**************************************************************************/
  
  return exports;
  
});