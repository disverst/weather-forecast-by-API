function getWeather() {
	const param = {
		"url" : "https://api.openweathermap.org/data/2.5/",
		"appid" : "70e1ed322b02acbc57d443dd91065f3e"
	}

	const cityId = document.querySelector('#city').value;

	fetch(`${param.url}weather?id=${cityId}&appid=${param.appid}`)
	.then(weather => {
		return weather.json();
	}).then(showWeather);
}

function showWeather(data) {
	document.querySelector('.city-title').textContent = data.name;
	document.querySelector('.tempr span').innerHTML = Math.floor(data.main.temp - 273) + '&deg';
	document.querySelector('.weather span').textContent = data.weather[0]['description'];
	document.querySelector('.wind span').textContent = data.wind.speed;
	document.querySelector('.img').innerHTML = '<img src ="https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png">';
}

getWeather();
document.querySelector('#city').onchange = getWeather;