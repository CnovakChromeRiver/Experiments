define(['jquery', 'underscore', 'backbone', 'text!modules/home/homeViewTemplate.html'],
	function ($, _, Backbone, homeViewTemplate) {
		var HomeView = Backbone.View.extend({

			//init template
			template: _.tempate(homeViewTemplate),

			//render the content into div of view
			render: function () {
				//this.el is the root element of Backbone.View. By default, it is a div.
				//$el is cached jQuery object for the view’s element.
				//append the compiled template into view div container
				this.$el.append(this.template());

				//return to enable chained calls
				return this;
			}
		});
	return HomeView;
});