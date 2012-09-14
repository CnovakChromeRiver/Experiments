define(['backbone'], function ( Backbone ) {

	'use strict';

	// Expense Report Model
	// --------------------
	cr.Expense.HeaderModel = Backbone.Model.extend({

		defaults: {
			id: '',
			owner: '',
			name: '',
			currency: 'USD'
		}

	});

	return cr.Expense.HeaderModel;

});