

// jQuery request
// Weather request
$(document).ready(function() {
	var urlWeather = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
	var apiKeyWeather = "bf8ab128255c3d52861889f2ac7c2a8d"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work

	$.get(urlWeather + '&appid=' + apiKeyWeather).done(function(response) {
		// console.log(response);
		updateUISuccess(response);
	}).fail(function(error) {
		updateUIError();
	});

	// handle XHR success
	function updateUISuccess(response) {
		var condition = response.weather[0].main;
		var degC = response.main.temp - 273.15;
		var degCInt = Math.floor(degC);
		var degF = degC * 1.8 + 32;
		var degFInt = Math.floor(degF);
	// 	var weatherBox = document.getElementById("weather");
	// 	weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>";
	var $weatherBox = $('#weather');
	$weatherBox.append("<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>");
	}

	// handle XHR error
	function updateUIError() {
		// var weatherBox = document.getElementById("weather");
		// weatherBox.className = "hidden";
		var $weatherBox = $('#weather');
		$weatherBox.addClass('hidden');
	}

});

// Stop Finder request
$("#filmSearch").on("click", function() {
	var urlTrip = "https://api.transport.nsw.gov.au/v1/tp/stop_finder?outputFormat=rapidJSON&type_sf=any&name_sf=Wynyard%20Station&coordOutputFormat=EPSG%3A4326";
	var apiKey = "2e174de9f49a6147f62f00873ac1de88"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work

	var filmSearch = $("#film").val();
	$("#film").val("");	

	$.get("https://api.themoviedb.org/3/search/movie?api_key="+apiKey+"&language=en-US&query="+filmSearch+"&page=1&include_adult=false").done(function(response) {
		console.log(response);
		success(response);
	}).fail(function(error) {

		console.log("error");
	});

	function success(response) {
		for (var i = response.result.length - 1; i >= 0; i--) {
			generate(respose.result[i]);
		}
	}

	function generate(result) {
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
// Fetch request
/*
(function() {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
	var apiKey = "APIKEY"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work

	fetch(url + '&appid=' + apiKey).then(function(response) {
		if (!response.ok) {
			throw Error(response.statusText);
		}
		return(response.json());
	}).then(function(response) {
		updateUISuccess(response);
	}).catch(function() {
		updateUIError();
	});

	// handle XHR success
	function updateUISuccess(response) {
		var condition = response.weather[0].main;
		var degC = response.main.temp - 273.15;
		var degCInt = Math.floor(degC);
		var degF = degC * 1.8 + 32;
		var degFInt = Math.floor(degF);
		var weatherBox = document.getElementById("weather");
		weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>";
	}

	// handle XHR error
	function updateUIError() {
		var weatherBox = document.getElementById("weather");
		weatherBox.className = "hidden";
	}
})();
*/

// XHR request
/*
(function() {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
	var apiKey = "APIKEY"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
	var httpRequest;
	makeRequest();

	// create and send an XHR request
	function makeRequest() {
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = responseMethod;
		httpRequest.open('GET', url + '&appid=' + apiKey);
		httpRequest.send();
	}
	// handle XHR response
	function responseMethod() {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				updateUISuccess(httpRequest.responseText);
			} else {
				updateUIError();
			}
		}
	}
	// handle XHR success
	function updateUISuccess(responseText) {
		var response = JSON.parse(httpRequest.responseText);
		var condition = response.weather[0].main;
		var degC = response.main.temp - 273.15;
		var degCInt = Math.floor(degC);
		var degF = degC * 1.8 + 32;
		var degFInt = Math.floor(degF);
		var weatherBox = document.getElementById("weather");
		weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>";
	}
	// handle XHR error
	function updateUIError() {
		var weatherBox = document.getElementById("weather");
		weatherBox.className = "hidden";
	}
})();
*/