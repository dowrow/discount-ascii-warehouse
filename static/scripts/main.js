require(['jquery', 'product-formatter'], function ($, ProductFormatter) {
	
	function main () {
		ProductFormatter.formatAll();
	}

	$(document).ready(main);
});