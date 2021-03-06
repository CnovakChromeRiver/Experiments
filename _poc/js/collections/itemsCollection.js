define(['jquery', 'underscore', 'backbone', 'localStorage', 'models/itemModel'],
function ( $, _, Backbone, LocalStorage, ItemModel ) {

	'use strict';

	// Expense Item Collection
	// -----------------------
	cr.ItemsCollection = Backbone.Collection.extend({

		model: cr.ItemModel,

		// We keep the **Items** in sequential order, despite being saved by unordered
		// GUID in the database. This generates the next order number for new items.
		nextOrder: function () {

			if ( !this.length ) {
				return 1;
			} else {
				return this.last().get('order') + 1;
			}
		},

		comparator: function ( itemModel ) {

			return itemModel.get('order');
		}

	});

	return cr.ItemsCollection;

});