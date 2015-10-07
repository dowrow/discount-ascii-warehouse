/**
 * Product Factory
 * Creates products' html
 */
define([], function () {

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
	    	return previous.getDate() + '/' + previous.getMonth() + '/' + previous.getFullYear();
	    }
	}

	function create(id, face, size, price, date) {
		var formattedPrice = formatPrice(price);
		var formattedDate = formatDate(date);
		var html = '';
		
		html += '<article id="' + id + '" class="product pure-u-1-4">';
		html +=	'<span class="face" style="font-size:' + size + 'px">' + face + '</font></span>';
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
		 * Get a products html 
		 * @param {string} id Unique identifier
		 * @param {string} face ASCII face
		 * @param {integer} size Size in pixels
		 * @param {integer} price Price in cents
		 * @param {string} date Date as timestamp
		 * @type {string}
		 */
		create: create
	}
});