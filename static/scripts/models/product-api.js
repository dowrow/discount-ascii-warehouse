/**
 * Product API
 * Fetch products from API
 */
define(['jquery'], function ($) {


	function fetch(sort, skip, limit, callback) {

		var endpoint = 'api/products';
		var sort = sort || 'id';
		var skip = skip || 0;
		var limit = limit || 100;

		$.ajax({
			url: endpoint,

			data: {
				skip: skip,
				sort: sort,
				limit: limit
			},

			dataType: 'text',

			success: function (data) {

				if (data.length == 0) {
					callback([]);
				} else {
					var lines = data.split(/\r?\n/);
					lines.splice(-1, 1);
					var products = lines.map(JSON.parse);
					callback(products);
				}

			},

			error: function (data) {
				callback([]);
			}
		
		});
	}

	/*
	 * Public interface
	 */
	return {

		/**
		 * Fetch products from the API
		 * @param {string} sort Sorting mode ('price', 'size' or 'id')
		 * @param {integer} skip Number of results to skip
		 * @param {string} limit Number of results to fetch
		 * @param {function} callback Function to call with the products array as argument
		 * @type {void}
		 */
		fetch: fetch
	}

});	