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
	    //$(".target").text(event.target);
	    $(".measure").text("Scale: " + event.scale + ", Rotation: " + event.rotation);
	    var href = $(this).attr("href");
	    if(event.scale > 1) {
	    	$(".behavior").text("Zooming In");
	    	$(".target").text(href);
	    	if($(this).attr("href") !== undefined) {
	    		$.mobile.changePage($(this).attr("href"), { transition: "pop" });
	    	}
	    }
	    else {
	    	$(".behavior").text("Zooming Out");
	    	$(".target").text(href);
	    	if($(".page").attr("href") !== undefined) {
	    		$.mobile.changePage($(".page").attr("href"), { transition: "pop" });
	    	}
	    }
	}, false);

	//$("a").on('gesturechange', function(event) {
		//$(".jquery-reading").text("Positive");
		//$.mobile.changePage($(this).attr("href"), { transition: "pop" });
		//event.preventDefault();
		//$(this).css("background", "red");
		//if(event.scale > 1) {
	  //  	$(".jquery-reading").text("Navigating");
	  //  }
	//});
});