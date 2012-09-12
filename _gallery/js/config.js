require.config({
	//path mappings for module names not found directly under baseUrl
	paths: {
		  jquery: 'vendor/jquery'
		, underscore: 'vendor/underscore_amd'
		, backbone: 'vendor/backbone_amd'
		, localStorage: 'vendor/backbone.localStorage'
		, text: 'vendor/text'
		, handlebars: 'vendor/handlebars'
		, models: 'models'
		, views: 'views'
		, routers: 'routers'
		, collections: 'collections'
		, templates: 'templates'
		, namespaces: 'namespaces'
	}
});

define(['bootstrap'], function ( bootstrap ) {

	// Initialize **Bootstrap**.
	new bootstrap.initialize();
});