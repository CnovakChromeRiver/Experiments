define(['jquery', 'underscore', 'backbone', 'views/headerView', 'views/itemView'],
function ( $, _, Backbone, HeaderView, ItemView ) {

	'use strict';

	cr.Expense.ProductView = Backbone.View.extend({

		model: '#expense',

		events: {
			'click #generate': 'generate'
		},

		initialize: function() {

			this.collection.on( 'all', this.render, this );
		},

		render: function () {
			if ( this.collection.length ) {
				alert(true);
			} else {
				alert(false);
			}
		},

		generate: function () {
			console.log("Generating!");

			return false;
		}

	});

	return cr.Expense.ProductView;

});