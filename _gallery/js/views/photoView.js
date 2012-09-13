define(['jquery', 'underscore', 'backbone', 'localStorage', 'handlebars', 'text!templates/photoTemplate.html'],
function ( $, _, Backbone, localStorage, Handlebars, photoTemplate ) {

	'use strict';

	// Photo View
	// ----------

	gallery.PhotoView = Backbone.View.extend({

		tagName: 'li',

		className: 'span6',

		// Cache the template function for a single item.
		template: Handlebars.compile( photoTemplate ),

		// The DOM events specific to an item.
		events: {
			'click .toggle-like': 'toggleLike',
			'click .edit-photo': 'edit',
			'click .save-edit': 'save',
			'click .cancel-edit': 'cancel',
			'click .delete-photo': 'destroy'
		},

		// The PhotoView listens for changes to its model, re-rendering. Since there's
		// a one-to-one correspondence between a **PhotoModel** and a **PhotoView** in this
		// app, we set a direct reference on the model for convenience.
		initialize: function () {
			this.model.on( 'change', this.render, this );
			this.model.on( 'destroy', this.remove, this );
		},

		render: function () {
			this.$el.html( this.template( this.model.toJSON() ) );
			this.$editTitleInput = this.$('.edit-title-input');
			this.$editDescriptionField = this.$('.edit-description-field');
			this.$editTopPosition = this.$('.edit-top-position');

			return this;
		},

		// Toggle between whether you like the photo or not.
		toggleLike: function () {

			this.model.toggle();
		},

		// Switch this view into "editing" mode, displaying the hidden input fields.
		edit: function () {

			this.$el.addClass('editing');
			this.$editTitleInput.focus();
			return false;
		},

		// Save edits
		save: function () {

			var newTitle = this.$editTitleInput.val().trim();
			var newDescription = this.$editDescriptionField.val().trim();
			var newTopPos = this.$editTopPosition.val().trim();

			if ( newTitle ) {
				this.model.save({ title: newTitle });
			} else {
				this.model.save({ title: 'Untitled' });
			}

			if ( newDescription ) {
				this.model.save({ description: newDescription });
			} else {
				this.model.save({ description: '' });
			}

			if ( newTopPos ) {
				this.model.save({ topPos: newTopPos });
			} else {
				this.model.save({ topPos: '0px' });
			}

			this.$el.removeClass('editing');
			return false;
		},

		// Cancel edit
		cancel: function () {

			this.$editTitleInput.val(this.model.attributes.title);
			this.$editDescriptionField.val(this.model.attributes.description);
			this.$editTopPosition.val(this.model.attributes.topPos);
			this.$el.removeClass('editing');
			return false;
		},

		// Remove the item, destroy the model from *localStorage* and delete its view.
		destroy: function () {

			this.model.destroy();
			return false;
		}


	});

	return gallery.PhotoView;

});