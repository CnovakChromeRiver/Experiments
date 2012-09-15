define(['backbone', 'localStorage', 'collections/itemCollection', 'views/itemCollectionView',
	'collections/reportCollection', 'views/reportCollectionView'],
function ( Backbone, localStorage, ItemCollection, ItemCollectionView, ReportCollection, ReportCollectionView ) {

	'use strict';

	// Router
	// ------
	cr.Router = Backbone.Router.extend({

		routes: {
			'*all': 'display'
		},

		display: function () {

			var reportCollection = new cr.ReportCollection();
			var reportCollectionView = new cr.ReportCollectionView({ collection: reportCollection });

			// Trigger a collection reset/addAll
			reportCollection.trigger('reset');

			var itemCollection = new cr.ItemCollection();
			var itemCollectoinView = new cr.ItemCollectionView({ collection: itemCollection });

			// Trigger a collection reset/addAll
			itemCollection.trigger('reset');

		}

	});

	return cr.Router;
});