define(['jquery', 'underscore', 'backbone', 'localStorage', '_app', 'routers/router'],
function ( $, _, Backbone, localStorage, app, Router ) {

	'use strict';

	var init = function () {

		// Create Backbone Router
		app.Router = new Router();
		Backbone.history.start();
	}

	return {
		initialize: init
	}
});