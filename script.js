$(document).ready(function(){
	$('#slider').on('input',function(){
		var amount=$(this).val();
		var interest=amount*0.176;
		interest=interest.toFixed(2);
		var total=parseFloat(amount)+parseFloat(interest);
		total=total.toFixed(2);
		$('.display').html('&#36;'+amount);
		$('.interest').html('&#36;'+interest);
		$('.repayment').html('&#36;'+total);
	});
	$('.button').click(function(){
		$('.button').css('border-color','transparent')
		$(this).css('border-color','#4494e5');
		var clickdate=$(this).html();
		var dateObj = new Date();
		var day = dateObj.getUTCDate();    //getting currentdate
		var daysleft=clickdate-day-1;
		var display="";                    //display string at top 
		var display2="on ";
		var display3="for "+daysleft+" days";                //display string at bottom-right 
		if (clickdate>day) {
			display=display+"<b>"+$(this).val()+', Jun '+clickdate+"</b>";
			display2=display2+'Jun '+clickdate+",2017";
		}
		else
		{
			display=display+"<b>"+$(this).val()+', Jul '+clickdate+"</b>";
			display2=display2+'Jul '+clickdate+",2017";
		}
		$('#repay').html(display);
		$('#lowright').html(display2);
		$('#lowleft').html(display3);
	});

});