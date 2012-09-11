var app = app || {};

$(function () {

	'use strict';

	// Photo Router
	// ------------

	var Router = Backbone.Router.extend({
		routes: {
			'*all': 'display'
		},

		display: function () {

			// Trigger a collection reset/addAll
			window.app.PhotoCollection.trigger('reset');
		}
	});

	app.Router = new Router();
	Backbone.history.start();

});