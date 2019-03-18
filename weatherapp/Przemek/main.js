var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=bb97b3f43e59cd2ba46ca6ccf5cbad37';
var http = new XMLHttpRequest();
var data = {};
var message = "";

try {
    http.open('GET', weatherUrl, false);
    http.onreadystatechange = function() {
        if (http.readyState == XMLHttpRequest.DONE && http.status == 200)
            data = JSON.parse(http.responseText);
        else if (http.readyState == XMLHttpRequest.DONE)
            message = JSON.parse(http.responseText).message;
    };
    http.send();
} catch (e) {
    message = e.message;
}

if (message !== "") {
    document.getElementById('mainBox').innerHTML = '<h4>'+ message +'</h4>';
} else {
    document.getElementById('name').lastChild.innerText = data.name;
    document.getElementById('weather').lastChild.innerText = data.weather[0].description;
    document.getElementById('temp').lastChild.innerText = data.main.temp + '°C';
    document.getElementById('humidity').lastChild.innerText = data.main.humidity + '%';
    document.getElementById('pressure').lastChild.innerText = data.main.pressure + ' hPa';
    document.getElementById('visibility').lastChild.innerText = data.visibility / 1000 + ' km';
    document.getElementById('speed').lastChild.innerText = data.wind.speed + ' km/h';
}

