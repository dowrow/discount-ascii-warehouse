/**
 * Ad Factory
 * Creates the HTML for an ad
 */
 define(['jquery'], function ($) {

 	var random = 0;

 	function updateRandom () {
 		var lastRandom = random;
 		do {
 			random =  Math.floor(Math.random() * 1000);
 		} while (lastRandom == random);
 	}

	function create () {
		updateRandom();
		return '<div class="pure-u-1-1"><img class="ad" src="/ad/?r=' + random + '"/></div>';
	}
	
	/**
	 * Public interface
	 */
	return {
		/**
		 * Get the HTML code for a new ad
		 * @type {string}
		 */
		create: create
	}
});