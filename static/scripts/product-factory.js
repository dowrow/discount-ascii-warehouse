/**
 * Product Factory
 * Defines methods required to create products
 */
define([], function ($) {

	function formatPrice (price) {
		return '$' + (parseInt(price) / 100);
	}

	function formatDate(timestamp) {
		var previous = new Date(timestamp);
		var current = new Date();
	    var msPerMinute = 60 * 1000;
	    var msPerHour = msPerMinute * 60;
	    var msPerDay = msPerHour * 24;
	    var msPerWeek = msPerDay * 7;
	    var msPerMonth = msPerDay * 30;
	    var elapsed = current - previous;
	    
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
	    } else {
	    	return timestamp;
	    }
	}

	function create(id, face, size, price, date) {
		var formattedPrice = formatPrice(price);
		var formattedDate = formatDate(date);
		var html = '';
		html += '<article id="' + id + '" class="product pure-u-1-4">';
		html +=	'<span class="face"><font size="' + size + '">' + face + '</font></span>';
        html += '<span class="price">' + formattedPrice + '</span>';
        html += '<span class="date">' + formattedDate + '</span>';
        html += '</article>';
        return html;
	}

	/*
	 * Public interface
	 */
	return {
		/**
		 * Get a products html given its id, face, size, price and date 
		 * @type {void}
		 */
		create: create
	}

});