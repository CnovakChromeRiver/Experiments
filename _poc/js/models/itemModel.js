define(['backbone'], function ( Backbone ) {

	'use strict';

	// Determine today's date
	var d = new Date(),
		day = d.getDate(),
		month = d.getMonth() + 1,
		year = d.getFullYear();

		if ( month < 10 ) {
			month = "0" + month;
		}
		var todaysDate = month + '/' + day + '/' + year;

	// Expense Item Model
	// ----------
	cr.Expense.ItemModel = Backbone.Model.extend({

		defaults: {
			date: todaysDate,
			type: '',
			amount: 0.00,
			currency: 'USD',
			purpose: '',
			descripton: '',
			receiptAttached: false,
			firmPaid: false,
			personalCharge: false,
			matter: '',
			people: 1,
			guest: {
				firstName: '',
				lastName: ''
			}
		}

	});

	return cr.Expense.ItemModel;

});