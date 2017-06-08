$(document).ready(function(){
	var checkdate=14;
	$('#slider').on('input',function(){
		$('.display').html('&#36;'+$(this).val());
	});
	$('.button').click(function(){
		$('.button').css('border-color','transparent')
		$(this).css('border-color','#4494e5');
		var display="";  //display string at top 
		var display2="on ";        //display string at bottom-right 
		var clickdate=$(this).html();
		if (clickdate>checkdate) {
			display=display+"<b>"+$(this).val()+', June '+clickdate+"</b>";
			display2=display2+'June '+clickdate+",2017";
		}
		else
		{
			display=display+"<b>"+$(this).val()+', July '+clickdate+"</b>";
			display2=display2+'July '+clickdate+",2017";
		}
		console.log(display);
		console.log(display2);
		$('#repay').html(display);
		$('#lowright').html(display2);
	});

});