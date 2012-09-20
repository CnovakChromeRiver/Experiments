define(['jquery', 'underscore', 'backbone', 'localStorage', 'handlebars', 'views/itemsView', 'collections/itemsCollection', 'text!templates/reportTemplate.html'],
function ( $, _, Backbone, localStorage, Handlebars, ItemsView, ItemsCollection, ReportTemplate ) {

	'use strict';

	// Report View
	// -----------
	
	cr.ReportView = Backbone.View.extend({

		className: 'report',

		template: Handlebars.compile( ReportTemplate ),

		events: {
			
		},

		initialize: function () {
			
			this.model.on( 'all', this.render, this );

			if ( 0 < this.model.attributes.lineItems.length ) {
				this.addLineItems(this.model.attributes.lineItems);
			}
		},

		render: function () {

			this.$el.html( this.template( this.model.toJSON() ) );

			return this;
		},

		addLineItems: function ( arrayItems ) {

			var itemsCollection = new cr.ItemsCollection(arrayItems);
			var subView = new cr.ItemsView({collection: itemsCollection});
		}

	});

	return cr.ReportView;

});