/**
 * Loading Animation
 * Show or hide a loading animation
 * Requires an empty div with id="loading-animation"
 */
define(['jquery'], function ($) {

	var url = "/images/spinner.gif";
	var imageElement = $('<img id="spinner" src="' + url + '"/>');

	function show () {
		imageElement.appendTo('.products');
	}

	function hide () {
		$('#spinner').remove();
	}
	
	/**
	 * Public interface
	 */
	return {
		/**
		 * Show animation
		 * @type {void}
		 */
		show: show,

		/**
		 * Hide animation
		 * @type {void}
		 */
		hide: hide
	}
});