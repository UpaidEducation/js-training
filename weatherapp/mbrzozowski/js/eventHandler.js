
one_hour = 1000*60*60;
var lastReadCity=null;


EVT.on('saveCityData',function(data){
    window.localStorage.setItem(data.name,JSON.stringify(data));
});

EVT.on('drawCityWeather',function(city){
    var cityData = JSON.parse(window.localStorage.getItem(city));
    if (cityData === null){
        EVT.emit('getCityWeather',city);
        cityData = JSON.parse(window.localStorage.getItem(city));
    };
    console.log(cityData);
    document.getElementById('weatherData').innerHTML = cityWeatherTemplate(cityData);
});

EVT.on('getCityWeather',function(city){
          makeRequest(GET,
              'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&lang=pl&appid='+API_KEY,
              null,
              cityCallback);
          }
);

EVT.on('customCity',function(){
    document.getElementById('weatherData').innerHTML = customCityTemplate();
    document.getElementById('searchCity').addEventListener('click',function(){EVT.emit('searchCity')});
});

EVT.on('searchCity',function(){
    var city = document.getElementById('city').value;
    EVT.emit('getCityWeather',city);
    EVT.emit('drawCityWeather',city);
});

