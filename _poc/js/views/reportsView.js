define(['jquery', 'underscore', 'backbone', 'views/reportView'],
function ( $, _, Backbone, ReportView ) {

	'use strict';

	cr.ReportsView = Backbone.View.extend({

		el: '#reports-app',

		events: {
			'click #create-report': 'create',
			'click #prev': 'viewPrev',
			'click #next': 'viewNext'
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

			this.collection.fetch();

		},

		render: function () {

			if ( this.collection.length ) {
				
			} else {

			}

		},

		addOne: function ( newReportModel ) {
			var view = new cr.ReportView({ model: newReportModel });
			$('#reports-collection').append( view.render().el );
		},

		addAll: function () {
			$('#report-collection').empty();
			this.collection.each( this.addOne, this);
		},

		newAttributes: function () {
			return {
				id: this.$reportId.val().trim(),
				owner: this.$expenseOwner.val().trim(),
				name: this.$reportName.val().trim(),
				currency: this.$paymentCurrency.val().trim()
			};
		},

		create: function () {
			this.collection.create( this.newAttributes() );

			this.$reportId.val('');
			this.$expenseOwner.val('');
			this.$reportName.val('');
			this.$paymentCurrency.val('');
		},

		viewPrev: function () {
			
		},

		viewNext: function () {

		}	

	});

	return cr.ReportsView;

});