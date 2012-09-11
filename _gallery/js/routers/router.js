define(['jquery', 'underscore', 'backbone', 'localStorage', '_app', 'views/appView'],
function ( $, _, Backbone, localStorage, app, AppView ) {

	'use strict';

	// Photo Router
	// ------------

	var Router = Backbone.Router.extend({
		routes: {
			'*all': 'display'
		},

		display: function () {

			app.AppView = new AppView();
			// Trigger a collection reset/addAll
			window.app.PhotoCollection.trigger('reset');
		}
	});

	return Router;

});