define(['jquery', 'underscore', 'backbone', 'model/book/bookModel'],
	function ($, _, Backbone, Book) {

		var Books = Backbone.Collection.extend({
			model: Book,
			fetch: function (categoryId) {
				var self = this,
						tmpItem,
						jqxhr = $.getJSON("data/category" + categoryId + ".json")
						.success(function (data, status, xhr) {
							$.each(data, function (i, item) {
								tmpItem = new Book({
									id: item,
									category: categoryId,
									name: item.name
								});
								self.add(tmpItem);
							});
							self.trigger("fetchCompleted:Books");
						})
						.error(function (data) { alert(data); })
						.complete(function () { console.log("fetch complete + " + this); });
			}
		});
		return Books;
	});