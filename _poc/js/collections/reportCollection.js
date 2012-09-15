define(['jquery', 'underscore', 'backbone', 'localStorage', 'models/reportModel'],
function ( $, _, Backbone, LocalStorage, ReportModel ) {

	'use strict';

	// Expense Report Collection
	// -----------------------
	cr.ReportCollection = Backbone.Collection.extend({

		model: cr.ReportModel,

		localStorage: new Backbone.LocalStorage('report-item'),

		// We keep the **Reports** in sequential order, despite being saved by unordered
		// GUID in the database. This generates the next order number for new items.
		nextOrder: function () {

			if ( !this.length ) {
				return 1;
			} else {
				return this.last().get('order') + 1;
			}
		},

		comparator: function ( reportModel ) {

			return reportModel.get('order');
		}

	});

	return cr.ReportCollection;

});