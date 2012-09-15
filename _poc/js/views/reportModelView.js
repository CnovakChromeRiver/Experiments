define(['jquery', 'underscore', 'backbone', 'localStorage', 'handlebars', 'views/itemModelView', 'text!templates/reportTemplate.html'],
function ( $, _, Backbone, localStorage, Handlebars, ItemModelView, ReportTemplate ) {

	'use strict';

	// Report View
	// -----------
	cr.ReportModelView = Backbone.View.extend({

		className: 'report',

		template: Handlebars.compile( ReportTemplate ),

		events: {
			'click .enter-details': 'enterDetails'
		},

		initialize: function() {

			this.$enterReport = $('#enter-report');
			this.$reportId = $('#report-id');
			this.$expenseOwner = $('#expense-owner');
			this.$reportName = $('#report-name');
			this.$paymentCurrency = $('#payment-currency');

			console.log(this.collectoin);

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

		addOne: function ( newItemModel ) {
			var view = new cr.ItemModelView({ model: newItemModel });
			$('#report-collection').append( view.render().el );
		},

		addAll: function () {
			$('#report-collection').empty();
			this.collection.each( this.addOne, this);
		},

		newAttributes: function () {
			return {
				  id: this.$reportId.val().trim()
				, owner: this.$expenseOwner.val().trim()
				, name: this.$reportName.val().trim()
				, currency: this.$paymentCurrency.val().trim()
			};
		},
		enterDetails: function () {
			this.collection.create( this.newAttributes() );

			this.$reportId.val('');
			this.$expenseOwner.val('');
			this.$reportName.val('');
			this.$paymentCurrency.val('');
		}

	});

	return cr.ReportModelView;

});