(function(){

	function transition( $el, content ){
		$el.fadeOut(function(){
			$el.html( content ).fadeIn();
		});
	}
	
	function validateInput( host, port ){
		
		if ( host === "" ){
			return false;
		}
		
		if ( isNaN(parseInt( port )) ){
			return false;
		}
		
		return true;
	}
	
	function handleInit( e ){
		e.preventDefault();
		
		var host = $( "#host" ).val();
		var port = $( "#port" ).val();
		
		if ( !validateInput( host, port ) ){
			return transition( $("#content"), "Please restart and give proper host and port" );
		}
	
		var url = /^http:\/\//.test( host ) ? host + "port" : "http://" + host + ":" + port;
		var socket = io.connect( url );

		socket.on( "connect", function(){
			var msg = $( $( "#connect-hider" ).html() );
			transition( $( "#content" ), msg );
		});
		
		socket.on( "update", function( data ){
		
			var content = data[ "content" ];
			var contentForPage = "";
			
			if ( /rookille/.test( content ) ){
				contentForPage = $("#img-hider").html();
			} else {
				contentForPage = content;
			}
			
			transition( $( "#content" ), $( contentForPage ) );
			
		});
	}
	
	$( document ).ready(function(){
		$( "#initializeSocket" ).click( handleInit );
	});
})();