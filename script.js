$(document).ready(function(){
	var checkdate=14;
	$('#drag').draggable({axis:"x",cancel:false,containment:".div"});
	$('.button').click(function(){
		$('.button').css('border-color','transparent')
		$(this).css('border-color','#4494e5');
		var display="Repay on ";
		var clickdate=$(this).html();
		if (clickdate>checkdate) {
			display=display+"<b>"+$(this).val()+', June '+clickdate+"</b>";
		}
		else
		{
			display=display+"<b>"+$(this).val()+', July '+clickdate+"</b>";
		}
		console.log(display);
		$('#repay').html(display);
	});

});