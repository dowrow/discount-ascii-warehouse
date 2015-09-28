/**
 * Product Formatter
 * Defines methods required to format products
 * Requires jQuery
 */
define(['jquery'], function ($) {
	
	/**
	 * Format every product
	 * @return {void}
	 */
	function formatProducts () {
		$('.product').each(formatProduct);
	}

	/**
	 * jQuery callback to format one product
	 * @return {void}
	 */
	function formatProduct () {
		// Set face size
		$(this).children('.face').css('font-size', $(this).data('size') + 'px');

		// Format dollar price
		$(this).children('.price').text(formatPrice($(this).children('.price').text()));

		// Format date
		$(this).children('.date').text(formatTimestamp($(this).children('.date').text()));
	}

	/**
	 * Format a given price in cents to $X.YZ
	 * @param  {String} price in cents
	 * @return {String} formatted price
	 */
	function formatPrice (price) {
		return '$' + (parseInt(price) / 100);
	}

	/**
	 * Format a given timestamp to "x time ago"
	 * @param  {String} timestamp
	 * @return {String} formatted date
	 */
	function formatTimestamp(timestamp) {
		var previous = new Date(timestamp);
		var current = new Date();

	    var msPerMinute = 60 * 1000;
	    var msPerHour = msPerMinute * 60;
	    var msPerDay = msPerHour * 24;
	    var msPerWeek = msPerDay * 7;
	    var msPerMonth = msPerDay * 30;
	    
	    var elapsed = current - previous;
	    
	    // If less than a week show "x time ago"
	    if (elapsed <= msPerWeek) {

		    if (elapsed < msPerMinute) {
		         return Math.round(elapsed/1000) + ' seconds ago';   
		    }
		    else if (elapsed < msPerHour) {
		         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
		    }
		    else if (elapsed < msPerDay ) {
		         return Math.round(elapsed/msPerHour ) + ' hours ago';   
		    }
		    else {
		         return Math.round(elapsed/msPerDay) + ' days ago';   
		    }
		
		// Otherwise show whole date    
	    } else {
	    	return timestamp;
	    }
	}

	/*
	 * Public interface
	 */
	return {
		/**
		 * Formats all the products in the current document
		 * @type {void}
		 */
		formatAll: formatProducts
	}

});