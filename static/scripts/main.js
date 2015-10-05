require(['jquery', 'product-factory', 'product-api'], function ($, ProductFactory, ProductAPI) {
	
	function main () {

		ProductAPI.fetch('price', 0, 10000, function (products) {
			var html = '';
			products.forEach(function (product) {
				html += ProductFactory.create(product.id, product.face, product.size, product.price, product.date);
			});
			$('.products').html(html);
		});

		
	}

	$(document).ready(main);
});