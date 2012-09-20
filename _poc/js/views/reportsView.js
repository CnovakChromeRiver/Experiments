define(['jquery', 'underscore', 'backbone', 'views/reportView'],
function ( $, _, Backbone, ReportView ) {

	'use strict';

	cr.ReportsView = Backbone.View.extend({

		el: '#reports-app',

		events: {
			'click .view-report': 'viewOne',
			'click #prev:not(.disabled)': 'viewPrev',
			'click #next:not(.disabled)': 'viewNext',
			'click #toggle-report-list': 'toggleReportList'
		},

		initialize: function() {

			this.$enterReport = $('#enter-report');
			this.$reportId = $('#report-id');
			this.$expenseOwner = $('#expense-owner');
			this.$reportName = $('#report-name');
			this.$paymentCurrency = $('#payment-currency');
			this.$reportsCollection = $('#reports-collection');

			this.collection.on( 'add', this.addOne, this );
			this.collection.on( 'display:report', this.addOne, this );
			this.collection.on( 'reset', this.addAll, this );
			
			this.collection.on( 'all', this.render, this );

		},

		render: function () {


		},

		addOne: function ( newReportModel ) {

			var view = new cr.ReportView({ model: newReportModel });

			this.$reportsCollection.empty();
			this.$reportsCollection.append( view.render().el );

			$('#report-list').slideUp();
			$('#toggle-report-list').addClass('closed');

		},

		addAll: function () {

			$('#reports-collection').empty();
			this.collection.each( this.addOne, this);

		},

		viewOne: function ( e ) {
			var itemId = $(e.target).attr("data-id");
			this.collection.fetch( itemId );

			$('.buttons button').removeClass('disabled').addClass('btn-primary');
		},

		viewPrev: function () {
			this.collection.fetchPrev();
		},

		viewNext: function () {
			this.collection.fetchNext();
		},

		toggleReportList: function () {
			$('#report-list').slideToggle();
			$('#toggle-report-list').toggleClass('closed');
		}

	});

	return cr.ReportsView;

});