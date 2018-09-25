$("#filmSearch").on("click", function() {
	var urlTrip = "https://api.transport.nsw.gov.au/v1/tp/stop_finder?outputFormat=rapidJSON&type_sf=any&name_sf=Wynyard%20Station&coordOutputFormat=EPSG%3A4326";
	var apiKey = "2e174de9f49a6147f62f00873ac1de88"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work

	var filmSearch = $("#film").val();	

	$.get("https://api.themoviedb.org/3/search/movie?api_key="+apiKey+"&language=en-US&query="+filmSearch+"&page=1&include_adult=false").done(function(response) {
		console.log(response);
		success(response);
	}).fail(function(error) {

		console.log("error");
	});

	function success(response) {
		$("#poster").empty();
		for (var i = 0; i <= response.results.length -1; i++) {
			generate(response.results[i]);
		}
	}

	function generate(result) {
			if(!result.poster_path)
				return;
			var div = document.createElement("div");
			var att = document.createAttribute("class");
			var style = document.createAttribute("style");
			var src = "http://image.tmdb.org/t/p/" + "w500" + result.poster_path;


			att.value = "mdl-cell mdl-cell--1-col demo-card-image mdl-card mdl-shadow--2dp";
			style.value = "background: url("+src+") center / cover";

			div.setAttributeNode(att);
			div.setAttributeNode(style);

			document.getElementById("poster").appendChild(div);
		
	}
});