var app = app || {};

$(function () {

	'use strict';

	// Photo View
	// ----------

	app.PhotoView = Backbone.View.extend({

		tagName: 'li',

		// Cache the template function for a single item.
		template: _.template( $('#item-template').html() ),

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
			console.log(this);
			this.model.on( 'change', this.render, this );
			this.model.on( 'destroy', this.remove, this );
		},

		render: function () {

			this.$el.html( this.template( this.model.toJSON() ) );
			this.$editTitleInput = this.$('.edit-title-input');

			return this;
		},

		toggleLike: function () {

			this.model.toggle();
		},

		// Switch this view into "editing" mode, displaying the hidden input fields.
		edit: function () {

			this.$el.addClass('editing');
			this.$editTitleInput.focus();
		},

		// Save edits
		save: function () {

			var newTitle = this.$editTitleInput.val().trim();

			if ( newTitle ) {
				this.model.save({ title: newTitle });
			} else {
				this.model.save({ title: 'Untitled' });
			}

			this.$el.removeClass('editing');
		},

		cancel: function () {

			this.$editTitleInput.val(this.model.attributes.title);
			this.$el.removeClass('editing');
		},

		// Remove the item, destroy the model from *localStorage* and delete its view.
		destroy: function () {

			this.model.destroy();
		}


	});

});