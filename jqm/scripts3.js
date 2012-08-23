$(function() {

	mouseWheel();
	mouseWheelLink();
	pinchOpen();
	pinchClose();

	$(document).live("pagechange", function () {

		pinchOpen();

	});

});

function mouseWheel () {

	var timeStamp = new Date().getTime();

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

}

function mouseWheelLink () {

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

}

function pinchOpen () {

	var timeStamp = new Date().getTime();

	$("a").bind("pinchopen", function () {

		//$(".console").append("Pinch Open ");

		var timeNow = new Date().getTime(),
			target = $(this).attr("href");

		if(timeNow - timeStamp < 100) {
			timeStamp = timeNow;
			return;
		} else if (timeNow - timeStamp > 100 && target !== undefined) {
			timeStamp = timeNow;
			$(".console").text("Drilling down... ");
			$.mobile.changePage(target, { transition: "pop" });
		}

		//measurements
		var scale = event.scale;
		$(".target").text(target);
	    $(".measure").text(scale);
	    if(scale > 1) {
	    	$(".behavior").text("Zooming In");
	    } else {
	    	$(".behavior").text("Zooming Out");
	    }

	});

};

function pinchClose () {

	var timeStamp = new Date().getTime();

	$("body").bind("pinchclose", function () {

		//$(".console").append("Pinch Close ");

		var timeNow = new Date().getTime(),
			target = $(".page").attr("data-parent");

		if(timeNow - timeStamp < 100) {
			timeStamp = timeNow;
			return;
		} else if (timeNow - timeStamp > 100 && target !== undefined) {
			timeStamp = timeNow;
			$(".console").text("Backing out... ");
			$.mobile.changePage(target, { transition: "pop" });
		}

		//measurements
		var scale = event.scale;
		$(".target").text(target);
	    $(".measure").text(scale);
	    if(scale > 1) {
	    	$(".behavior").text("Zooming In");
	    } else {
	    	$(".behavior").text("Zooming Out");
	    }

	});

}