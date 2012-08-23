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

	document.addEventListener('gesturechange', gestureChange, false);

	document.addEventListener('gestureend', gestureEnd, false);

	function gestureChange (event) {

		event.preventDefault();

	    var scale = event.scale;

	    $(".measure").text(scale);
	    $(".input-scale").val(scale);

	    if(scale > 1) {
	    	$(".behavior").text("Zooming In");
	    } else {
	    	$(".behavior").text("Zooming Out");
	    }

	};

	function gestureEnd (event) {

		event.preventDefault();

		var parent = $(".page").attr("data-parent"),
			href = $(this).attr("href"),
			scale = ($(".input-scale").val()) * 1;

		$(".console").append("parent: " + parent + ", href: " + href + ", scale: " + scale + " ");

		if(scale < 1 && parent !== undefined) {
	    	$(".behavior").text("Navigating to the parent...");
	    	$(".target").text(event.target);
	    } else if (scale > 1 && href !== undefined) {
	    	$(".behavior").text("Drilling Down...");
	    	$(".target").text(event.target);
	    }

	};

});