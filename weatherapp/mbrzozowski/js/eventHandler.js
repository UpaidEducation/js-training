one_hour = 1000*60*60;

EVT.on('saveCityData',function(data,forecast,dataForChart){
    var suffix = forecast ? "_forecast" : "";
    var city = forecast ? data.city.name : data.name;
    city += suffix;
    window.localStorage.setItem(city,JSON.stringify(data));
    if (dataForChart){
        EVT.emit('newChartDataSaved',data);
    }else{
        EVT.emit('newForecastDataSaved',data,forecast);
    }
});

EVT.on('newForecastDataSaved',function(data,forecast){
    var html = forecast ? cityWeatherForecastTemplate(data) : cityWeatherTemplate(data);
    document.getElementById('weatherData').innerHTML = html;
});

EVT.on('newChartDataSaved',function(data){
    console.log('chart data', data);
    var html = chart;

    document.getElementById('weatherData').innerHTML = html;
});

EVT.on('getCityWeather',function(city,forecast,drawChart){
        var cityName = forecast ? city+"_forecast":city;
        console.log(cityName);
        var cityData = JSON.parse(window.localStorage.getItem(cityName));
        if (cityData == null || (cityData.dt*1000+one_hour < Date.now())){
            var dataType = forecast?'forecast':'weather'
            makeRequest(GET,
                'https://api.openweathermap.org/data/2.5/'+dataType+'?q='+city+'&units=metric&appid='+API_KEY,
                null,
                null,
                forecast,drawChart);
        }else{
           if (!drawChart) {EVT.emit('newForecastDataSaved',cityData,forecast);}
           if (drawChart) {EVT.emit('newChartDataSaved',cityData);}
        }

});

EVT.on('customCity',function(drawChart){
    document.getElementById('weatherData').innerHTML = customCityTemplate();
    document.getElementById('searchCity').addEventListener('click',function(){EVT.emit('searchCity',drawChart)});
});

EVT.on('searchCity',function(drawChart){
    var city = document.getElementById('city').value;
    if (drawChart){
        console.log("draw chart",drawChart);
        EVT.emit('getCityWeather',city,true,true);
    }else{
        EVT.emit('getCityWeather',city,true);
    }
});

EVT.on('weatherChart',function(){
    EVT.emit('customCity',true);
});

