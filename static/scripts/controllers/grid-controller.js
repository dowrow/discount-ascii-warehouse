/**
 * Grid Controller
 * Manages the current products grid
 */
define(['jquery', 'models/product-api', 'views/product-factory', 'views/loading-animation'], function ($, ProductAPI, ProductFactory, LoadingAnimation) {

	var sort = 'id';
	var fetchingSort = 'id';
	var products = [];
	var shownProducts = 0;
	var showBatchSize = 40;
	var loadBatchSize = 500;

	function setUp () {
		showMore();	
		loadMore();	
	}

	function loadMore () {
		var skip = products.length;
		var limit = loadBatchSize;
		fetchingSort = sort;
		ProductAPI.fetch(sort, skip, limit, onProductsLoaded);
	}

	function onProductsLoaded (newProducts) {
		if (fetchingSort == sort) {
			saveProducts(newProducts);
		}
		loadMore();
	}

	function saveProducts (newProducts) {
		products = products.concat(newProducts);
	}

	function sortBy (mode) {
		if (sort != mode) {
			sort = mode;
			products = [];
			shownProducts = 0;
			clear();
			showMore();
		}
	}

	function clear() {
		$('.products').html('');
	}

	function showMore () {

		if (products.length == 0) {
		
			LoadingAnimation.show();
			setTimeout(showMore, 500);
		
		} else {

			var newProducts = products.splice(shownProducts, showBatchSize);
			var newHtml = '';

			newProducts.forEach(function (newProduct) {
				newHtml += ProductFactory.create(newProduct.id, newProduct.face, newProduct.size, newProduct.price, newProduct.date);
			});
			
			$('.products').html($('.products').html() + newHtml);
			LoadingAnimation.hide();
			shownProducts += showBatchSize;			
		}

	}

	/*
	 * Public interface
	 */
	return {

		/**
		 * Set up the product grid
		 * @type {void}
		 */
		setUp: setUp,

		/**
		 * Changes current sorting mode
		 * @param {string} sort Sorting mode ('price', 'size' or 'id')
		 * @type {void}
		 */
		sortBy: sortBy,

		/**
		 * Show more products in the grid
		 * @type {void}
		 */
		showMore: showMore,
	}

});	