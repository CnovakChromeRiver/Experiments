define(['jquery', 'underscore', 'backbone', 'localStorage', '_app', 'collections/PhotoCollection'],
function ( $, _, Backbone, localStorage, app, PhotoCollection ) {

	'use strict';

	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	var AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#galleryapp',

		events: {
			'click #add-photo-btn': 'showEntryForm',
			'click #submit': 'create',
			'click #cancel': 'cancel'
		},

		initialize: function () {

			this.$entryForm = $('#entry-form');

			this.$newPhotoSource = $('#new-photo-source');
			this.$newPhotoTitle = this.$('#new-photo-title');
			this.$newPhotoDescription = this.$('#new-photo-description');

			window.app.PhotoCollection.on( 'add', this.addOne, this );
			window.app.PhotoCollection.on( 'reset', this.addAll, this );
			window.app.PhotoCollection.on( 'change:title', this.render, this );
			window.app.PhotoCollection.on( 'change:description', this.render, this );
			window.app.PhotoCollection.on( 'change:topPos', this.render, this );

			window.app.PhotoCollection.on( 'reset', this.render, this );

			this.$main = this.$('#main');
			//this.$photoCollection = this.$('#photo-collection');

			app.PhotoCollection.fetch();
		},

		render: function () {
			if ( app.PhotoCollection.length ) {
				this.$main.show();
			} else {
				this.$main.hide();
				this.showEntryForm();
			}
		},

		showEntryForm: function () {
			this.$entryForm.show();
		},

		// Add a single photo to the list by creating a view for it, and
		// appending its element to the '<ul>'.
		addOne: function ( newPhotoModel ) {
			var view = new app.PhotoView({ model: newPhotoModel });
			$('#photo-collection').append( view.render().el );
		},

		// Add all items in the **PhotoCollection** at once.
		addAll: function () {
			$('#photo-collection').empty();
			app.PhotoCollection.each( this.addOne, this );
		},

		// Generate the attributes for a new photo.
		newAttributes: function () {
			return {
				src: this.$newPhotoSource.val().trim(),
				title: this.$newPhotoTitle.val().trim(),
				description: this.$newPhotoDescription.val().trim(),
				topPos: '0px',
				order: app.PhotoCollection.nextOrder(),
				liked: false
			};
		},

		create: function () {
			app.PhotoCollection.create( this.newAttributes() );

			this.$entryForm.hide();
			
			this.$newPhotoSource.val('');
			this.$newPhotoTitle.val('');
			this.$newPhotoDescription.val('');

			return false;
		},
		cancel: function () {
			this.$entryForm.hide();

			this.$newPhotoSource.val('');
			this.$newPhotoTitle.val('');
			this.$newPhotoDescription.val('');

			return false;
		}
	});

	return AppView;

});