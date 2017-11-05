// function stroom(x) 
// }


// function gas(y) {
// 	return y * 0.20 
// }

// console.log(stroom(400));
// console.log(gas(250));







	

//////////////////////

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


//     	$('#tarieftool').serializeArray();
// 	}
// }