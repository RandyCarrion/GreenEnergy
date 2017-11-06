
$(document).ready(function() {
	$('#tarieftool').click(function() {
    	var numberPeople = parseInt(document.getElementById('persons').value);
		var stroomValue = (document.getElementById('form_stroom').value) * 0.22;
		console.log(stroomValue);
		var gasValue = (document.getElementById('form_gas').value) * 0.08;
		var price = numberPeople * stroomValue * gasValue;
		alert (`Dit zullen uw kosten per jaar zijn: € ${price}`)
	})
})


$(function () {
	$.scrollUp({
    scrollName: 'scrollUp', 
    topDistance: '40', 
    topSpeed: 300, 
    animation: 'fade', 
    animationInSpeed: 200, 
    animationOutSpeed: 200, 
    scrollText: 'Terug naar boven', 
    activeOverlay: false, 
  });
});

