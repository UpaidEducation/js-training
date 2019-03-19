const mainBox = document.getElementById("mainBox");
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=bb97b3f43e59cd2ba46ca6ccf5cbad37';
const http = new XMLHttpRequest();

http.onreadystatechange = function() {
    if (http.readyState === XMLHttpRequest.DONE)
        http.status == 200 ?
            setDataWeather(JSON.parse(http.responseText)) :
            mainBox.innerHTML = '<h4>'+ JSON.parse(http.responseText).message +'</h4>';
};
http.open('GET', weatherUrl);
http.send();

function setDataWeather(data) {
    let clone;
    const element = document.createElement('p');
    const dataItem = {
        "Weather in:"  : data.name,
        "" : '<img src="http://openweathermap.org/img/w/'+ data.weather[0].icon +'.png"/>',
        "Weather:"     : data.weather[0].description,
        "Temperature:" : data.main.temp + '°C',
        "Humidity:"    : data.main.humidity + '%',
        "Pressure:"    : data.main.pressure + ' hPa',
        "Visibility:"  : data.visibility / 1000 + ' km',
        "Wind speed:"  : data.wind.speed + ' km/h'
    };

    Object.keys(dataItem).forEach(function(key, index) {
        if (index === 0)
            mainBox.innerHTML = '<h1>'+ key +' <span>'+ dataItem[key] +'</span></h1>';
        else {
            clone = element.cloneNode();
            clone.innerHTML = key +' <span>'+ dataItem[key] +'</span>';
            mainBox.appendChild(clone);
        }
    });
}