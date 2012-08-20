define(['jquery', 'underscore', 'backbone',
	'text!modules/list/bookViewTemplate.html'],
	function ($, _, Backbone, bookViewTemplate) {
		'use strict';

		var BookListView = Backbone.View.extend({
			template: _.template(bookViewTemplate),
			update: function (categoryId) {
				this.collection.bind("fetchCompleted:Books", this.render, this);
				this.collection.fetch(categoryId);
			},
			render:function(){
				this.$el.empty();
				this.$el.append(this.template({data:this.collection.toJSON()}));
				this.trigger("renderCompleted:Books", this);
				return this;
			}
		});
		return BookListView;
	});