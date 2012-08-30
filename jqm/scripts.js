$(function() {

	//myScroll = new iScroll( "wrapper", { vScrollbar: true } );
	
	mouseWheelIn();
	mouseWheelOut();
	pinchOpen();
	pinchClose();
	plugins();
	drag();

	$(document).on("pagechange", function () {
		
		pinchOpen();
		drag();
		//myScroll = new iScroll( "wrapper2", { vScrollbar: true } );
	});

	//$("a").unbind("mousewheel");

});

function mouseWheelIn () {

	var timeStamp = new Date().getTime();
	
	$(document).on("mousewheel", "[data-link='true']", function (event, delta, deltaX, deltaY) {

		event.preventDefault();
		
		var timeNow = new Date().getTime(),
			target = $(this).attr("data-target"),
			quad = $(this).parents(".quad"),
			quadId = $(quad).attr("data-quad"),
			quadAnimation = "quad-" + quadId;

		if(timeNow - timeStamp < 100) {
			
			//console.log(timeNow - timeStamp + " = Too soon.");
			timeStamp = timeNow;
			return;
		} else if (timeNow - timeStamp > 100 && 0 < delta && target !== undefined) {
			
			//console.log(timeNow - timeStamp + " = Thanks for waiting.");
			//alert(delta + ", " + deltaX + ", " + deltaY);
			//$(".gesture").append("Mousewheel In at: " + (timeNow - timeStamp) + " ");
			timeStamp = timeNow;
			$.mobile.changePage(target, { transition: quadAnimation });
			//$(".gesture").append("Mousewheel In ");
		}

	});

};

function mouseWheelOut () {

	var timeStamp = new Date().getTime();

	$(document).on("mousewheel", function (event, delta, deltaX, deltaY) {

		event.preventDefault();

		var timeNow = new Date().getTime(),
			target  = $(".ui-page-active").attr("data-parent"),
			quadId = $(".ui-page-active").attr("data-quad"),
			quadAnimation = "quad-" + quadId;

		if(timeNow - timeStamp < 100) {
			
			//console.log(timeNow - timeStamp + " = Too soon.");
			timeStamp = timeNow;
			return;
		} else if (timeNow - timeStamp > 100 && delta < 0 && target !== undefined) {
			
			//console.log(timeNow - timeStamp + " = Thanks for waiting.");
			//alert(delta + ", " + deltaX + ", " + deltaY);
			$(".gesture").append("Mousewheel Out at: " + (timeNow - timeStamp) + " ");
			timeStamp = timeNow;
			$.mobile.changePage(target, { transition: quadAnimation, reverse: true });
		}

	});

};

function pinchOpen () {

	var timeStamp = new Date().getTime();

	$("a").bind("pinchopen", function () {

		//$(".action").append("Pinch Open ");

		var timeNow = new Date().getTime(),
			target  = $(this).attr("href");

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
			target  = $(".page").attr("data-parent");

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

function drag() {

	$(".ui-page-active").on("mousedown", function(mde) {

		var startX = mde.pageX,
			startY = mde.pageY,
			self   = $(this);

		self.css("cursor", "move");

		self.on("mouseup", function(mue) {

			var endX    = mue.pageX,
				endY    = mue.pageY,
				offsetX = startX - endX,
				offsetY = startY - endY;

			self.css("cursor", "default");

			if ( 50 < offsetY) {

				var target  = $(".page").attr("data-nav-south");
				
				if ( target !== undefined ) {

					$.mobile.changePage(target, { transition: "slideup" });
				}
			} else if ( offsetY < -50 ) {

				var target  = $(".page").attr("data-nav-north");

				if ( target !== undefined ) {

					$.mobile.changePage(target, { transition: "slidedown" });
				}
			} else if ( 50 < offsetX ) {

				var target  = $(".page").attr("data-nav-east");

				if ( target !== undefined ) {

					console.log(target);

					$.mobile.changePage(target, { transition: "slide", reverse: false });
				} else {

					$.mobile.changePage("error.html", { transition: "slide", reverse: false });
				}
			} else if ( offsetX < -50 ) {

				var target  = $(".page").attr("data-nav-west");

				if ( target !== undefined ) {

					console.log(target);

					$.mobile.changePage(target, { transition: "slide", reverse: true });
				}
			}

			self.unbind("mouseup");

			console.log(offsetX + ", " + offsetY);

		});
		return false;
	});
}

function plugins() {

	// make variable height divs equal heights
    $.fn.sameHeights = function() {

    	var self = $(this);

        self.each(function(){
            var tallest = 0;
            self.children().each(function(i){
                if (tallest < self.height()) { tallest = self.height(); }
            });
            self.children().css({'height': tallest});
        });

        return this;
    };

}