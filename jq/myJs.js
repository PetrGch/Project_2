$(document).ready(function() {

/*menu*/
/*	$('.menuPhoto img').click(function() {
		var clicker = $(this).data('clicker');
		alert(clicker);
		if (clicker) {
			$('.menu').animate({
			width: "0"
			}, 200);
	
		} else {
			$('.menu').animate({
			width: "500px"
			}, 200);
			$(window).scroll(function() {
				$(this).data('clicker');
				$('.menu').animate({width: "0"}, 200);
				
			});	
			
		};
			$(this).data('clicker', !clicker);
			alert(clicker)
			
	})*/
$('.menuPhoto img').click(function() {
var iteration = $(this).data('iteration') || 1
alert(iteration)
			switch (iteration) {
				case 1:
					$('.menu').animate({
						width: "500px"
						}, 200);
						$(window).scroll(function() {
							$('.menu').animate({width: "0"}, 200);
							var iteration = -1
						});	
							
					break;

				case 2:
					$('.menu').animate({
						width: "0"
						}, 200);
					break;
			}
			iteration++;
			alert(iteration);
			if (iteration > 2) {iteration = 1};
			$(this).data('iteration',iteration);
});

});