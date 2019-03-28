jQuery(document).ready(function($){
	$('#submitPost').click(function(){
		// $.ajax({
		// 	type: 'GET',
		// 	url:'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDYgc6ZSNkQnifUjrrCBEWxY-pZwsER38U',
		// 	dataType: 'json',
		// 	success: processJson
		// });
		 $.ajax({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDYgc6ZSNkQnifUjrrCBEWxY-pZwsER38U'
		    }).then(function(json) {
		      console.log($(json).address_components.long_name[0];
		});


		// function processJson(json){
		// 	alert($(json).find('address_component').text());
		// 	alert(json.address_component.long_address);	
		// }
	})
})
