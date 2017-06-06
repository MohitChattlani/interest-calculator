$(document).ready(function(){
	var checkdate=14;
	var days={Sun:[18,25,02]};
	$('.button').click(function(){
		$('.button').css('border-color','transparent')
		$(this).css('border-color','#4494e5');
		var display="Repay on";
		var clickdate=$(this).html();
		if (clickdate>checkdate) {
			display=display+' June '+clickdate;
		}
		else
		{
			display=display+' July '+clickdate;
		}
		console.log(display);
	});

});