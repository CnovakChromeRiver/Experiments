define(['backbone', 'localStorage', 'collections/photoCollection', 'views/appView'],
function ( Backbone, localStorage, PhotoCollection, AppView ) {

	'use strict';

	// Photo Router
	// ------------

	gallery.AppRouter = Backbone.Router.extend({
		routes: {
			'*all': 'display'
		},

		display: function () {
			var photoCollection = new PhotoCollection();
			var appView = new gallery.AppView({ collection: photoCollection });
			// Trigger a collection reset/addAll
			photoCollection.trigger('reset');
		}
	});

	return gallery.AppRouter;

});