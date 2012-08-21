$(function () {
	$('a').mousewheel(function(event, delta, deltaX, deltaY) {
		function log(e) {
			console.log(e);
		}
		var o = '';
		if (delta > 0)
			o = '#test1: up ('+delta+')',
			$(this).click();
		else if (delta < 0)
			o = '#test1: down ('+delta+')';
		
		if (deltaX > 0)
			o = o + ', east ('+deltaX+')';
		else if (deltaX < 0)
			o = o + ', west ('+deltaX+')';
		
		if (deltaY > 0)
			o = o + ', north ('+deltaY+')';
		else if (deltaY < 0)
			o = o + ', south ('+deltaY+')';
		
		if( o != '' )
			log( o );
		
		log('pageX: ' + event.pageX + ' pageY: ' + event.pageY );

		return false;
	});

	$('a').click(function(){
		//$(this).css('background', 'red');
	});

});