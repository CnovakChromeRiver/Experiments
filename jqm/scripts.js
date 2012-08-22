$(function () {
	$(document).on("mousewheel", "a", function(event, delta) {
		if (delta > 0) {
			$.cookie("source", window.location.href);
			var href = $(this).attr("href");
			console.log(href)
			$.mobile.changePage(href, { transition: "pop" });
		}
		return false;
	});
	$(document).mousewheel(function(event, delta){
		if (delta < 0) {
			var source = $.cookie("source");
			$.mobile.changePage(source, { transition: "pop", reloadPage:true });
		}
	});
});