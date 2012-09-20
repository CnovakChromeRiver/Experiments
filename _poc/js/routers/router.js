define(['backbone', 'localStorage', 'collections/itemsCollection', 'views/itemsView',
	'collections/reportsCollection', 'views/reportsView'],
function ( Backbone, localStorage, ItemCollection, ItemsView, ReportCollection, ReportsView ) {

	'use strict';

	// Router
	// ------
	cr.Router = Backbone.Router.extend({

		routes: {
			'*all': 'display'
		},

		display: function () {

			var reportsCollection = new cr.ReportsCollection();
			var reportsView = new cr.ReportsView({ collection: reportsCollection });

			// Trigger a collection reset/addAll
			// reportsCollection.trigger('reset');

		}

	});

	return cr.Router;
});