var app = app || {};

$(function () {

	'use strict';

	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	app.AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#galleryapp',

		events: {
			'click .submit': 'create'
		},

		initialize: function () {

			this.$newPhotoSource = this.$('#new-photo-source');
			this.$newPhotoTitle = this.$('#new-photo-title');
			this.$newPhotoDescription = this.$('new-photo-description');

			window.app.Todos.on( 'add', this.addAll, this );
			window.app.Todos.on( 'reset', this.addAll, this );
		}
	});

});