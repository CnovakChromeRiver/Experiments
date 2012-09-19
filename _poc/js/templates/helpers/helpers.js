define(['handlebars'], function ( Handlebars ) {

	// Parse Epoch Dates
	// -----------------

	Handlebars.registerHelper('epoch', function ( epochDate ) {

		var parseDate = new Date(epochDate).toDateString();
		return parseDate;

	});

	// Line Item References
	// --------------------

	Handlebars.registerHelper('lineItemRef', function ( lineItemId ) {

		var hashItem = {};
		hashItem['132'] = 'Airfare &amp; Rail';
		hashItem['232'] = 'Taxi/Bus';
		hashItem['332'] = 'Rental Car/Gas';
		hashItem['532'] = 'Parking &amp; Tolls';
		hashItem['732'] = 'Meals';
		hashItem['912'] = 'Taxi/Car Service';
		hashItem['1332'] = 'Hotel';
		hashItem['1432'] = 'Per Diem';
		hashItem['1522'] = 'Other Dues';
		hashItem['1632'] = 'Lodging';
		hashItem['2511'] = 'Taxi - Local';
		hashItem['2556'] = 'Working Meal/K&amp;E w/Others';
		hashItem['2739'] = 'Lunch';
		hashItem['3458'] = 'Taxi';
		hashItem['5656'] = 'Taxi';
		hashItem['6419'] = 'Client - Lunch';
		hashItem['22969'] = 'Meals - In House or Team Building';

		return hashItem[lineItemId];

	});

});
