var app = app || {};

$(function () {

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