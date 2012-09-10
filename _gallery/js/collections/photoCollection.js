var app = app || {};

$(function () {

	'use strict';

	// Photo Collection
	// ----------------

	var PhotoCollection = Backbone.Collection.extend({

		model: app.PhotoModel,

		localStorage: new Backbone.LocalStorage('photo-gallery'),

		// We keep the Photos in sequential order, despite being saved by unordered
		// GUID in the database. This generates the next order number for new items.
		nextOrder: function () {

			if ( !this.length ) {
				return 1;
			} else {
				return this.last().get('order') + 1;
			}
		},

		// Photos are sorted by their original insertion order.
		comparator: function ( photoModel ) {
			
			return photoModel.get('order');
		}

	});

	// Create our global **PhotoCollection**.
	app.PhotoCollection = new PhotoCollection();

});