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
			'click #submit': 'create'
		},

		initialize: function () {

			this.$newPhotoSource = this.$('#new-photo-source');
			this.$newPhotoTitle = this.$('#new-photo-title');
			this.$newPhotoDescription = this.$('#new-photo-description');

			window.app.PhotoCollection.on( 'add', this.addAll, this );
			window.app.PhotoCollection.on( 'reset', this.addAll, this );

			this.$main = this.$('#main');
			this.$photoCollection = this.$('#photo-collection');

			app.PhotoCollection.fetch();
		},

		render: function () {

			if ( app.PhotoCollection.length ) {
				this.$main.show();
			} else {
				this.$main.hide();
			}
		},

		// Add a single photo to the list by creating a view for it, and
		// appending its element to the '<ul>'.
		addOne: function ( newPhotoModel ) {
			var view = new app.PhotoView({ model: newPhotoModel });
			this.$photoCollection.append( view.render.el );
		},

		// Add all items in the **PhotoCollection** at once.
		addAll: function () {
			this.$photoCollection.empty();
		},

		// Generate the attributes for a new photo.
		newAttributes: function () {
			return {
				src: this.$newPhotoSource,
				title: this.$newPhotoTitle,
				description: this.$newPhotoDescription
			};
		},

		create: function () {
			console.log(app.PhotoCollection)
			app.PhotoCollection.create( this.newAttributes() );
			
			this.$newPhotoSource.val('');
			this.$newPhotoTitle.val('');
			this.$newPhotoDescription.val('');
		}
	});

});