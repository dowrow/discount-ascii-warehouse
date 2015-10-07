/**
 * Loading Animation
 * Show or hide a loading animation
 * Requires an empty div with id="loading-animation"
 */
define(['jquery'], function ($) {

	var url = "/images/spinner.gif";

	var spanElement = $('<span class="pure-u-1-1" id="loading">loading...</span>');
	var imageElement = $('<img id="spinner" src="' + url + '"/>');

	function show () {
		spanElement.appendTo('.products');
		imageElement.appendTo('.products');
	}

	function hide () {
		$('#spinner').remove();
		$('#loading').remove();
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