$(document).ready(function(){
	$('#slider').on('input',function(){
		var amount=$(this).val();
		var interest=amount*0.176;
		interest=interest.toFixed(2);       //convert into 2 decimal places
		var total=parseFloat(amount)+parseFloat(interest);
		total=total.toFixed(2);
		$('.display').html('&#36;'+amount);
		$('.interest').html('&#36;'+interest);
		$('.repayment').html('&#36;'+total);
	});
	$('.button').click(function(){
		$('.button').css('border-color','transparent');   //making all buttons transparent border
		$(this).css('border-color','#4494e5');			  //then selected button is bordered blue
		var clickdate=$(this).html();
		var dateObj = new Date();
		var day = dateObj.getUTCDate();    //getting currentdate
		var daysleft;
		var display="";                    //display string at top 
		var display2="on ";                
		if (clickdate>day) {
			display=display+"<b>"+$(this).val()+', Jun '+clickdate+"</b>";
			display2=display2+'Jun '+parseInt(clickdate)+",2017";
			daysleft=parseInt(clickdate)-day-1;
		}
		else
		{
			daysleft=30-day+parseInt(clickdate)-1;
			display=display+"<b>"+$(this).val()+', Jul '+clickdate+"</b>";
			display2=display2+'Jul '+clickdate+",2017";
		}
		var display3="for "+daysleft+" days";                //display string at bottom-right
		$('#repay').html(display);
		$('#lowright').html(display2);
		$('#lowleft').html(display3);
	});

});