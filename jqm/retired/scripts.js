$(function() {

	mouseWheelIn();
	mouseWheelOut();
	pinchOpen();
	pinchClose();

	$(document).on("pagechange", function () {
		pinchOpen();
	});

	//$("a").unbind("mousewheel");

});

function mouseWheelIn () {

	var timeStamp = new Date().getTime();
	
	$(document).on("mousewheel", "a", function (event, delta, deltaX, deltaY) {

		event.preventDefault();
		
		var timeNow = new Date().getTime(),
			target = $(this).attr("href");

		if(timeNow - timeStamp < 100) {
			//console.log(timeNow - timeStamp + " = Too soon.");
			timeStamp = timeNow;
			return;
		} else if (timeNow - timeStamp > 100 && 0 < delta && target !== undefined) {
			//console.log(timeNow - timeStamp + " = Thanks for waiting.");
			//alert(delta + ", " + deltaX + ", " + deltaY);
			$(".gesture").append("Mousewheel In at: " + (timeNow - timeStamp) + " ");
			timeStamp = timeNow;
			$.mobile.changePage(target, { transition: "andrew" });
			//$(".gesture").append("Mousewheel In ");
		}

	});

};

function mouseWheelOut () {

	var timeStamp = new Date().getTime();

	$(document).on("mousewheel", function (event, delta, deltaX, deltaY) {

		event.preventDefault();

		var timeNow = new Date().getTime(),
			target = $(".page").attr("data-parent");

		if(timeNow - timeStamp < 100) {
			//console.log(timeNow - timeStamp + " = Too soon.");
			timeStamp = timeNow;
			return;
		} else if (timeNow - timeStamp > 100 && delta < 0 && target !== undefined) {
			//console.log(timeNow - timeStamp + " = Thanks for waiting.");
			//alert(delta + ", " + deltaX + ", " + deltaY);
			$(".gesture").append("Mousewheel Out at: " + (timeNow - timeStamp) + " ");
			timeStamp = timeNow;
			$.mobile.changePage(target, { transition: "andrew", reverse: true });
		}

	});

};

function pinchOpen () {

	var timeStamp = new Date().getTime();

	$("a").bind("pinchopen", function () {

		//$(".action").append("Pinch Open ");

		var timeNow = new Date().getTime(),
			target = $(this).attr("href");

		if(timeNow - timeStamp < 100) {
			//$(".action").append(timeNow - timeStamp + " = Too soon. ");
			timeStamp = timeNow;
			return;
		} else if (timeNow - timeStamp > 100 && target !== undefined) {
			//$(".action").append(timeNow - timeStamp + " = Thanks for waiting. ");
			$(".gesture").append("Pinch Open at: " + (timeNow - timeStamp) + " ");
			timeStamp = timeNow;
			$(".action").append("Drilling down... ");
			$.mobile.changePage(target, { transition: "andrew" });
		}

		//measurements
		var scale = event.scale;
		$(".target").text(target);
	    $(".measure").text(scale);
	    //$(".gesture").text("Pinch Zoom ");

	});

};

function pinchClose () {

	var timeStamp = new Date().getTime();

	$("body").bind("pinchclose", function () {

		//$(".action").append("Pinch Close ");

		var timeNow = new Date().getTime(),
			target = $(".page").attr("data-parent");

		if(timeNow - timeStamp < 100) {
			timeStamp = timeNow;
			return;
		} else if (timeNow - timeStamp > 100 && target !== undefined) {
			$(".gesture").append("Pinch Close at: " + (timeNow - timeStamp) + " ");
			timeStamp = timeNow;
			$(".action").append("Backing out... ");
			$.mobile.changePage(target, { transition: "andrew", reverse: true });
		} else if (timeNow - timeStamp > 100 && target === undefined) {
			timeStamp = timeNow;
			$(".action").append("No Action Taken ");
		}

		//measurements
		var scale = event.scale;
	    $(".measure").text(scale);
		//$(".gesture").text("Pinch Close ");
		$(".target").text(target);
	});

};