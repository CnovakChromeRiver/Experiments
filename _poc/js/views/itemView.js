define(['jquery', 'underscore', 'backbone', 'localStorage', 'handlebars', 'text!templates/itemTemplate.html'],
function ( $, _, Backbone, localStorage, Handlebars, ItemTemplate ) {

	'use strict';

	// Item View
	// ---------
	cr.Expense.ItemView = Backbone.View.extend({

		tagName: 'div',

		className: 'item',

		template: Handlebars.compile(ItemTemplate),

		events: {

		}

	});

	return cr.Expense.ItemView;

});