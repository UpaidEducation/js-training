one_hour = 1000*60*60;

EVT.on('saveCityData',function(data,forecast){
    console.log(forecast);
    window.localStorage.setItem(data.name,JSON.stringify(data));
    EVT.emit('newDataSaved',data,forecast);
});

EVT.on('newDataSaved',function(data,forecast){
    console.log('City data', data);
    console.log('Forecast', forecast);
    var html = forecast ? cityWeatherForecastTemplate(data) : cityWeatherTemplate(data);
    document.getElementById('weatherData').innerHTML = html;
});

EVT.on('drawCityWeather',function(city,forecast){
    var cityData = JSON.parse(window.localStorage.getItem(city));
    var eventName = forecast?'getCityForecast':'getCityWeather'
    if (cityData == null || (cityData.dt*1000+one_hour < Date.now())){
        EVT.emit(eventName,city,forecast);
    }else{
        EVT.emit('newDataSaved',cityData);
    }
});

EVT.on('getCityWeather',function(city,forecast){
        var dataType = forecast?'forecast':'weather'
        makeRequest(GET,
            'https://api.openweathermap.org/data/2.5/'+dataType+'?q='+city+'&units=metric&appid='+API_KEY,
            null,
            null,
            forecast);
        }
);

EVT.on('customCity',function(){
    document.getElementById('weatherData').innerHTML = customCityTemplate();
    document.getElementById('searchCity').addEventListener('click',function(){EVT.emit('searchCity')});
});

EVT.on('searchCity',function(){
    var city = document.getElementById('city').value;
    EVT.emit('getCityWeather',city,true);
});

