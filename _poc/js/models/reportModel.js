define(['backbone'], function ( Backbone ) {

	'use strict';

	// Expense Report Model
	// --------------------
	cr.ReportModel = Backbone.Model.extend({

		defaults: {
			id: '',
			owner: '',
			name: '',
			currency: 'USD'
		}

	});

	return cr.ReportModel;

});