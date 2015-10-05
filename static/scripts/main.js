require(['jquery', 'product-factory'], function ($, ProductFactory) {
	
	function main () {
		var html = ProductFactory.create('9-uvfcjzwp3z0k9', '(¬_¬)', 20, 351, 'Wed Sep 23 2015 19:59:24 GMT+0200 (CEST)');
		$('.products').html(html);
	}

	$(document).ready(main);
});