define(['backbone', 'routers/router', 'namespaces/namespaces'],
function ( Backbone, AppRouter ) {

	'use strict';

	var init = function () {

		// Create Backbone Router
		new cr.Router();
		Backbone.history.start();
	};

	return {
		initialize: init
	};

});