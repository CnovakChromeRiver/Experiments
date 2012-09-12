define(['backbone', 'routers/appRouter', 'namespaces/appNamespaces'],
function ( Backbone, AppRouter ) {

	'use strict';

	var init = function () {

		// Create Backbone Router
		new AppRouter();
		Backbone.history.start();
	}

	return {
		initialize: init
	}
});