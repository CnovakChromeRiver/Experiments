$(function () {

	"use strict";

	// Handlebars List Helper
	Handlebars.registerHelper("list", function(context, block) {
		
		var ret = "<ul>";

		for(var i=0, j=context.length; i<j; i++) {
			ret = ret + "<li class='list-item-"+ i + "''>" + block(context[i]) + "</li>";
		}

		return ret + "</ul>";
	});

	var source = $("#my-nav").html(),
		context = {
			nav: [
				{ url: "http://www.test.com", title: "Simple Test Link" },
				{ url: "http://www.andrewhenderson.me", title: "Andrew Henderson" }
			]
		},
		template = Handlebars.compile(source),
		html = template(context);

	/*var source = $("#entry-template").html(),
		template = Handlebars.compile(source),
		context = { title: "My New Post",
					story: {
						intro: "Before the jump",
						body: "This is my first post!"
					}
				},
		html = template(context),
		source_2 = $("#list").html(),
		template_2 = Handlebars.compile(source_2),
		items = {
			people: [
				{firstName: "Yehuda", lastName: "Katz"},
				{firstName: "Carl", lastName: "Lerche"},
				{firstName: "Alan", lastName: "Johnson"}
			]
		};

	Handlebars.registerHelper( "with", function(context, options) {
		
		console.log(options.fn(context));
		return options.fn(context);
	});

	Handlebars.registerHelper("list", function(items, options) {
		
		var out = "<ul>";

		for(var i=0, l=items.length; i<l; i++) {
			out = out + "<li>" + options.fn(items[i]) + "</li>";
		}

		return out + "</ul>";
	}); */

	$("#content").append(html);
});