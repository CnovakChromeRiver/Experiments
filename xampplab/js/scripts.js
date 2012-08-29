$(function () {

	"use strict";

	var source = $("#entry-template").html(),
		template = Handlebars.compile(source),
		context = { title: "My New Post",
					story: {
						intro: "Before the jump",
						body: "This is my first post!"
					}
				},
		html = template(context);

	Handlebars.registerHelper( "with", function(context, options) {
		
		return options.fn(context);
	});

	$("#content").append(html);

});