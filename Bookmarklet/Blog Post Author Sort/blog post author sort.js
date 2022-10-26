( function ( ) {

  /*
  
    blog post author sort
    
    Version       : 0.2.0
    
    By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const jQueryUrl =
  
    'https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js';
    
  const affixScriptToHead = ( url, callback ) => {
  
    const newScript = document.createElement ( 'script' );
    
    // newScript.onerror = loadError;
    
    if ( callback )
    
      newScript.onload = callback;
      
    window
    
      .top
      
      .document
      
      .head
      
      .appendChild ( newScript );
      
    newScript.src = url;
    
    };
    
  const callback = ( ) => {
  
    const title = 'blog post author sort - twc';
    
    const $list = $( `p[title="${ title }"]` )
    
      .parents ( 'ul[role="listbox"]' );
    
    if ( ! $list.length ) return; // bail if no list items
    
    let authors = $( 'li', $list ).map ( function ( ) {
    
      const text = $( this )
      
        .text ( )
        
        .trim ( );
        
      return text;
      
      } );
      
    authors = $.makeArray ( authors )
    
      .sort ( )
      
      .reverse ( )
      
      .filter ( author => author != '' );
      
    $.each ( authors, function ( i, author ) {
    
      if ( ! author ) return true; // continue if empty
      
      const $item = $( `li:contains('${ author }')`, $list );
      
      if ( author == title ) {
      
        $item.remove ( );
        
        return true; // continue
        
        }
        
      $item.prependTo ( $list );
        
      } );
      
    };
    
  if ( window.top.jQuery !== undefined )
  
    callback ( );
    
    else
    
      affixScriptToHead ( jQueryUrl, callback );
      
  } ( ) );
