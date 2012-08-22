$(function () {
	
	var timeStamp = new Date().getTime();
	
	$(document).on("mousewheel", "a", function (event, delta) {

		event.preventDefault();
		
		var timeNow = new Date().getTime();

		if(timeNow - timeStamp < 100) {
			timeStamp = timeNow;
			return;
		} else {
			timeStamp = timeNow;
			if (delta > 0) {
				$.mobile.changePage($(this).attr("href"), { transition: "pop" });
			}
		}
	});
	
	$(document).on("mousewheel", function (event, delta) {

		event.preventDefault();

		var timeNow = new Date().getTime();
		
		if(timeNow - timeStamp < 100) {
			timeStamp = timeNow;
			return;
		} else {
			timeStamp = timeNow;
			if (delta < 0) {
				var parent = $(".page").attr("data-parent");
				if (parent !== undefined) {
					$.mobile.changePage(parent, { transition: "pop" });
				}
			}
		}
	});

	document.addEventListener('gesturechange', function (event) {

	    event.preventDefault();

	    var scale = event.scale;

	    //$(".measure").text(event.scale);

	    if(scale > 1) {
	    	$(".behavior").text("Zooming In");
	    } else {
	    	$(".behavior").text("Zooming Out");
	    }

	    gestureEnd(scale);

	}, false);

	function gestureEnd(s) {

		var scale = s;
		
		$("body").on('gestureend', "a", function (event, scale) {

			$(".measure").text(scale);

			//$(".jquery-reading").text("Positive");


			var parent = $(".page").attr("data-parent");
			

			if(scale > 1 && event.target !== undefined) {
		    	$(".behavior").text("Drilling Down...");
		    } else if (scale < 1 && parent !== undefined) {
		    	$(".behavior").text("Navigating to the parent...");
		    } else {
		    	// do nothing
		    }
			//$.mobile.changePage($(this).attr("href"), { transition: "pop" });
			/* event.preventDefault();
			$(this).css("background", "red");
			if(event.scale > 1) {
		    	$(".jquery-reading").text("Navigating");
		    }*/
		});
	}

});