/**
 * Grid Controller
 * Manages the current products grid
 */
define(['jquery', 'models/product-api', 'views/product-factory', 'views/loading-animation'], function ($, ProductAPI, ProductFactory, LoadingAnimation) {

	var sort = 'id';
	var fetchingSort = 'id';
	var products = [];
	var shownProducts = 0;
	var loadedProducts = 0;
	var showBatchSize = 40;
	var loadBatchSize = 1000;
	var endOfCatalogue = false;

	function setUp () {
		showMore();	
		loadMore();	
	}

	function loadMore () {
		if (!endOfCatalogue) {
			var skip = loadedProducts;
			var limit = loadBatchSize;
			fetchingSort = sort;
			ProductAPI.fetch(sort, skip, limit, onProductsLoaded);	
		}
	}

	function onProductsLoaded (newProducts) {
		if (fetchingSort == sort) {
			if (newProducts.length > 0) {
				saveProducts(newProducts);	
			} else {
				endOfCatalogue = true;
			}
		}
		loadMore();
	}

	function saveProducts (newProducts) {
		products = products.concat(newProducts);
		loadedProducts += loadBatchSize;
	}

	function sortBy (mode) {
		if (sort != mode) {
			sort = mode;
			products = [];
			shownProducts = 0;
			endOfCatalogue = false;
			clear();
			showMore();
		}
	}

	function clear() {
		$('.products').html('');
	}

	function showEnd() {
		var spanElement = $('<span class="pure-u-1-1" id="end">~ end of catalogue ~</span>');
		spanElement.appendTo('.products');
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
		 * Change current sorting mode
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