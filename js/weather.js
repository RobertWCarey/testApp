

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