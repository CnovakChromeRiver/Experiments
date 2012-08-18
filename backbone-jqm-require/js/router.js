define(['jquery',
		'underscore',
		'backbone',
		'modules/home/home',
		'model/book/bookCollection',
		'modules/list/books',
		'jqm'], 
	function ($, _, Backbone, HomeView, BookCollection, BookListView) {
		'use strict';
		var Router = Backbone.Router.extend({
			//define routes and mapping route to the function
			routes: {
				'': 				'showHome',
				'home': 			'showHome',
				'list/:categoryId': 'showBooks',
				'*actions': 		'defaultAction'  
			},

			defaultAction: function (actions) {
				this.showHome();
			},

			showHome: function (actions) {
				//will render home view and navigate to homeView
			}
		});

		return Router;
	});