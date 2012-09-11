define(['jquery', 'underscore', 'backbone', 'localStorage', '_app'],
function ( $, _, Backbone, localStorage, app ) {

	console.log(app);

	'use strict';

	// Photo Model
	// -----------

	app.PhotoModel = Backbone.Model.extend({

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

});