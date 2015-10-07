require(['jquery', 'controllers/grid-controller'], function ($, GridController) {
	
	function main () {
		$('#sortBy').change(onSortChange);
		$(window).scroll(onWindowScroll);
		GridController.setUp();
	}

	function onSortChange(){
		GridController.sortBy($(this).val());
	}

	function onWindowScroll() {
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
	    	GridController.showMore();
		}
	}

	$(document).ready(main);
});