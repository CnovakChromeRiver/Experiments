define(['backbone'],
function ( Backbone ) {

	'use strict';

	// Photo Model
	// -----------

	gallery.PhotoModel = Backbone.Model.extend({

		defaults: {
			src: '',
			title: '',
			description: '',
			topPos: '0px',
			liked: false
		},

		// Toggle the "liked" status of this photo
		toggle: function () {

			this.save({
				liked: !this.get('liked')
			});
		}

	});

	return gallery.PhotoModel;

});