jQuery(document).ready(function($){
	$('#submitPost').click(function(){
		$.ajax({
			type: 'GET',
			url:'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDYgc6ZSNkQnifUjrrCBEWxY-pZwsER38U',
			dataType: 'xml',
			success: processXML
		});


		function processJson(xml){
			alert($(xml).find('status').text());	
		}
	})
})
