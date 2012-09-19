define(['jquery', 'underscore', 'backbone', 'views/itemView'],
function ( $, _, Backbone, ItemView ) {

	'use strict';

	cr.ItemsView = Backbone.View.extend({

		tagName: 'ol',

		className: 'items-collection',

		events: {
			'click #create-report': 'create'
		},

		initialize: function() {

			this.$enterReport = $('#enter-report');
			this.$reportId = $('#report-id');
			this.$expenseOwner = $('#expense-owner');
			this.$reportName = $('#report-name');
			this.$paymentCurrency = $('#payment-currency');

			this.collection.on( 'add', this.addOne, this );
			this.collection.on( 'reset', this.addAll, this );
			
			this.collection.on( 'all', this.render, this );

			this.addAll(this.collection.models);

		},

		render: function () {

			$("#reports-collection").append( this.$el );
		},

		addOne: function ( newItemModel ) {
			var view = new cr.ItemView({ model: newItemModel });
			$('#items-collection').append( view.render().el );
		},

		addAll: function () {
			$('#items-collection').empty();
			this.collection.each( this.addOne, this);
		},

		newAttributes: function () {
			return {
				/* id: this.$reportId.val().trim(),
				owner: this.$expenseOwner.val().trim(),
				name: this.$reportName.val().trim(),
				currency: this.$paymentCurrency.val().trim() */
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
			};
		},
		create: function () {
			this.collection.create( this.newAttributes() );

			this.$reportId.val('');
			this.$expenseOwner.val('');
			this.$reportName.val('');
			this.$paymentCurrency.val('');
		}

	});

	return cr.ItemsView;

});