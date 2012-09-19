require({
	// Path mappings for module names not found directly under baseUrl
	paths: {
		  jquery: 'vendor/jquery/jquery'
		, underscore: 'vendor/underscore/underscore_amd'
		, backbone: 'vendor/backbone/backbone_amd'
		, localStorage: 'vendor/backbone/backbone.localStorage'
		, text: 'vendor/require/text'
		, handlebars: 'vendor/handlebars/handlebars'
		, models: 'models'
		, views: 'views'
		, routers: 'routers'
		, collections: 'collections'
		, templates: 'templates'
		, helpers: 'templates/helpers/helpers'
		, namespaces: 'namespaces'
	}
});

define(['bootstrap'], function ( Bootstrap ) {

	$(function () {
		// DOM Ready
	});

	// Initialize **Bootstrap**
	new Bootstrap.initialize();
	
});