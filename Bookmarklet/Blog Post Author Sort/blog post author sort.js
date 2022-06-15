( function ( ) {

  /*
  
    blog post author sort
    
    Version       : 0.1.0
    
    By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
    
    no user serviceable parts below
    
    */
    
  const jQueryUrl =
  
    'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
    
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
  
    const $list = $( '._PSLAFTpMAnwt6u56FZf' );
    
    if ( ! $list.length ) return; // bail if no list
    
    const authors = $( 'li', $list ).map ( function ( ) {
    
      const text = $( this )
      
        .text ( )
        
        .trim ( );
        
      return text;
      
      } )
      
      .sort ( );
      
    $.each ( authors, function ( i, author ) {
    
      $( `li:contains('${ author }')`, $list )
      
        .appendTo ( $list );
        
      } );
      
    };
    
  if ( window.top.jQuery !== undefined )
  
    callback ( );
    
    else
    
      affixScriptToHead ( jQueryUrl, callback );
      
  } ( ) );
