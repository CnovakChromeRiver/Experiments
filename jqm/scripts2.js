$(function () {
	$(document).on("mousewheel", "a", function (event, delta) {
		if (delta > 0) {
			$.mobile.changePage($(this).attr("href"), { transition: "pop" });
		}
	});
	$(document).on("mousewheel", document, function (event, delta) {
		if (delta < 0) {

			var parent = $(".page").attr("data-parent");
			if (parent !== undefined) {
				$.mobile.changePage(parent, { transition: "pop" });
			}
		}
	});

	document.addEventListener('gesturechange', function(event) {
	    event.preventDefault();
	    $(".measure").text("Scale: " + event.scale + ", Rotation: " + event.rotation);
	    if(event.scale > 1) {
	    	$(".behavior").text("Zooming In");
	    }
	    else { $(".behavior").text("Zooming Out"); }
	}, false);

	$("a").on('gesturechange', function(event) {
		$(".jquery-reading").text("Positive");
		$.mobile.changePage($(this).attr("href"), { transition: "pop" });
		/* event.preventDefault();
		$(this).css("background", "red");
		if(event.scale > 1) {
	    	$(".jquery-reading").text("Navigating");
	    }*/
	});
});