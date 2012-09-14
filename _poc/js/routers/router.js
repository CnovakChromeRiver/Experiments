define(['backbone', 'localStorage', 'collections/itemCollection', 'views/productView'],
function ( Backbone, localStorage, ItemCollection, HeaderView ) {

	'use strict';

	// Router
	// ------
	cr.Router = Backbone.Router.extend({

		routes: {
			'*all': 'display'
		},

		display: function () {
			var itemCollection = new cr.Expense.ItemCollection();
			var productView = new cr.Expense.ProductView({ collection: itemCollection });
			// Trigger a collection reset/addAll
			productView.trigger('reset');
		}

	});

	return cr.Router;
});