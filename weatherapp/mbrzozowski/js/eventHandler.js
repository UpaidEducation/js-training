one_hour = 1000*60*60;

EVT.on('saveCityData',function(data){
    window.localStorage.setItem(data.name,JSON.stringify(data));
    EVT.emit('newDataSaved',data);
});

EVT.on('newDataSaved',function(data){
    console.log('City data', data);
    document.getElementById('weatherData').innerHTML = cityWeatherTemplate(data);
});

EVT.on('drawCityWeather',function(city){
    var cityData = JSON.parse(window.localStorage.getItem(city));
    if (cityData == null || (cityData.dt*1000+one_hour < Date.now())){
        EVT.emit('getCityWeather',city);
    }else{
        EVT.emit('newDataSaved',cityData);
    }
});

EVT.on('getCityWeather',function(city){
          makeRequest(GET,
              'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+API_KEY,
              null,
              null);
          }
);

EVT.on('getCityForecast',function(city){
          makeRequest(GET,
              'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&appid='+API_KEY,
              null,
              null);
          }
);

EVT.on('customCity',function(){
    document.getElementById('weatherData').innerHTML = customCityTemplate();
    document.getElementById('searchCity').addEventListener('click',function(){EVT.emit('searchCity')});
});

EVT.on('searchCity',function(){
    var city = document.getElementById('city').value;
    EVT.emit('getCityForecast',city);
    EVT.emit('drawCityWeather',city);
});

