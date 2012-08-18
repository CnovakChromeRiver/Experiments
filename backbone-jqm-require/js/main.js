require.config({
	paths: {
		jquery: 	'vendor/jqm/jquery_1.8_min',
		jqm: 		'vendor/jqm/jquery.mobile-1.1.1',
		underscore: 'vendor/underscore/underscore_amd',
		backbone: 	'vendor/backbone/backbone_amd',
		text: 		'vendor/require/text',
		plugin: 	'plugin',
		templates: 	'../templates',
		modules: 	'../modules',
		model: 		'../model'
	}
});

define(['app', 'jqm-config'], function (app) {
	$(function () {
		console.log("DOM IS READY");
	});
	app.initialize();
});