require.config({
	//path mappings for module names not found directly under baseUrl
	paths: {
		jquery: 'vendor/jquery',
		underscore: 'vendor/underscore_amd',
		backbone: 'vendor/backbone_amd',
		localStorage: 'vendor/backbone.localStorage',
		text: 'vendor/text',
		models: 'models',
		views: 'views',
		routers: 'routers',
		collections: 'collections',
		_app: 'app'
	},
	shim: {
		'localStorage': {
			deps: ['jquery', 'underscore', 'backbone'],
			exports: 'localStorage'
		}
	}
});

define(['app'], function( app ) {

	$(function () {
		console.log('DOM Ready!');
	});

	// Kick things off by creating the **App**.
	new app.initialize();
});