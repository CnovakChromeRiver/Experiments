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
				'': 'showHome',
				'home': 'showHome',
				'list/:categoryId': 'showBooks',
				'*actions': 'defaultAction'
			},

			defaultAction: function (actions) {
				this.showHome();
			},

			showHome: function (actions) {
				//will render home view and navigate to homeView
				var homeView = new HomeView();
				homeView.render();
				this.changePage(homeView);
			},
			
			init: true,

			showBooks: function (categoryId) {
				//create a collection
				var bookList = new BookCollection();
				//create book list view and pass booklist as a collection
				var bookListView = new BookListView({collection:bookList});
				//need to pass this as context
				bookListView.bind('renderCompleted:Books', this.changePage, this);
				//update view
				bookListView.update(categoryId);
			},

			changePage: function (view) {
				view.$el.attr('data-role', 'page');
				$('body').append(view.$el);
					if(!this.init){
						$.mobile.changePage($(view.el), {changeHash:false});
					} else {
						this.init = false;
					}
			}
		});

		return Router;
	});