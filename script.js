jQuery(document).ready(function($){
	$('#submitPost').click(function(){
		$.ajax({
			type: 'GET',
			url:'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDYgc6ZSNkQnifUjrrCBEWxY-pZwsER38U',
			dataType: 'json',
			success: processJson
		});


		function processJson(json){
			alert($(json).find('status').text());	
		}
	})
})
