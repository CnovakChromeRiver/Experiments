define(['jquery', 'underscore', 'backbone', 'localStorage', 'handlebars', 'text!templates/itemTemplate.html'],
function ( $, _, Backbone, localStorage, Handlebars, ItemTemplate ) {

	'use strict';

	// Item View
	// ---------
	cr.ItemModelView = Backbone.View.extend({

		tagName: 'li',

		className: 'item',

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

	return cr.ItemModelView;

});