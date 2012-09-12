define(['jquery', 'backbone', 'localStorage', 'views/photoView'],
function ( $, Backbone, localStorage, PhotoView ) {

	'use strict';

	// The Application View
	// --------------------

	// Our overall **AppView** is the top-level piece of UI.
	gallery.AppView = Backbone.View.extend({

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

			this.collection.on( 'add', this.addOne, this );
			this.collection.on( 'reset', this.addAll, this );
			this.collection.on( 'change:title', this.render, this );
			this.collection.on( 'change:description', this.render, this );
			this.collection.on( 'change:topPos', this.render, this );

			this.collection.on( 'reset', this.render, this );

			this.$main = this.$('#main');
			//this.$photoCollection = this.$('#photo-collection');

			this.collection.fetch();
		},

		render: function () {
			if ( this.collection.length ) {
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
			var view = new gallery.PhotoView({ model: newPhotoModel });
			$('#photo-collection').append( view.render().el );
		},

		// Add all items in the **PhotoCollection** at once.
		addAll: function () {
			$('#photo-collection').empty();
			this.collection.each( this.addOne, this );
		},

		// Generate the attributes for a new photo.
		newAttributes: function () {
			return {
				src: this.$newPhotoSource.val().trim(),
				title: this.$newPhotoTitle.val().trim(),
				description: this.$newPhotoDescription.val().trim(),
				topPos: '0px',
				order: this.collection.nextOrder(),
				liked: false
			};
		},

		create: function () {
			if ( this.$newPhotoSource.val().trim() ) {
				this.collection.create( this.newAttributes() );
				this.$entryForm.hide();
			} else {
				alert("Must attach a photo!")
			}
			
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

	return gallery.AppView;

});