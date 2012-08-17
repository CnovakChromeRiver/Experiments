require.config({
	paths: {
		'jquery': 'libs/jquery'
	}
});

require([
	'jquery',
	'bookshelf'
	], function($, bookshelf){
			bookshelf.listBook();
	});