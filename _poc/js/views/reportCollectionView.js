define(['jquery', 'underscore', 'backbone', 'views/reportModelView'],
function ( $, _, Backbone, ReportModelView ) {

	'use strict';

	cr.ReportCollectionView = Backbone.View.extend({

		el: '#app',

		events: {
			'click #create-report': 'create'
		},

		initialize: function() {

			this.$enterReport = $('#enter-report');
			this.$reportId = $('#report-id');
			this.$expenseOwner = $('#expense-owner');
			this.$reportName = $('#report-name');
			this.$paymentCurrency = $('#payment-currency');

			console.log(this.collection);

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
			var view = new cr.ReportModelView({ model: newReportModel });
			$('#report-collection').append( view.render().el );
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
		}

	});

	return cr.ReportCollectionView;

});