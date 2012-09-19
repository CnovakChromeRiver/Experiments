define(['jquery', 'underscore', 'backbone', 'localStorage', 'handlebars', 'helpers', 'text!templates/itemTemplate.html'],
function ( $, _, Backbone, localStorage, Handlebars, Helpers, ItemTemplate ) {

	'use strict';

	// Item View
	// ---------
	cr.ItemView = Backbone.View.extend({

		template: Handlebars.compile( ItemTemplate ),

		events: {

		},

		initialize: function () {
			this.model.on( 'change', this.render, this );
			this.model.on( 'destroy', this.remove, this );
		},

		render: function () {
			
			this.$el.html( this.template( this.model.toJSON() ) );

			return this;
		},

		destroy: function () {
			this.model.destroy();
		}

	});

	return cr.ItemView;

});