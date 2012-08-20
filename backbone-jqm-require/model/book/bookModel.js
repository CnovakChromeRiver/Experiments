define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {

	var Book = Backbone.Model.extend({
		//defaults
		defaults:{
			id:"",
			name:"",
			category:""
		}
	});

	return Book;
});