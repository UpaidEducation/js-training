var mainBox = document.getElementById("mainBox");
var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=bb97b3f43e59cd2ba46ca6ccf5cbad37';
var http = new XMLHttpRequest();

http.onreadystatechange = function() {
    if (http.readyState === XMLHttpRequest.DONE)
        http.status == 200 ?
            setDataWeather(JSON.parse(http.responseText)) :
            mainBox.innerHTML = '<h4>'+ JSON.parse(http.responseText).message +'</h4>';
};
http.open('GET', weatherUrl);
http.send();

function setDataWeather(data) {
    mainBox.children[0].lastChild.innerText = data.name;
    mainBox.children[1].innerHTML = '<img src="http://openweathermap.org/img/w/'+ data.weather[0].icon +'.png"/>';
    mainBox.children[2].lastChild.innerText = data.weather[0].description;
    mainBox.children[3].lastChild.innerText = data.main.temp + '°C';
    mainBox.children[4].lastChild.innerText = data.main.humidity + '%';
    mainBox.children[5].lastChild.innerText = data.main.pressure + ' hPa';
    mainBox.children[6].lastChild.innerText = data.visibility / 1000 + ' km';
    mainBox.children[7].lastChild.innerText = data.wind.speed + ' km/h';
}