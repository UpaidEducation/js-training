

function selectCity() {
  var city = inputCity.value;
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5407c2b31a604dd5a5605b6f8aa4d19d`;

  fetch(url)
    .then((respons) => respons.json())
    .then(function(data) {
      console.log(data);
      fillTable(data);
      document.getElementById('icon').innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"/>`;
      document.getElementById('temp').innerHTML = temperatureConverter(data.main.temp);
  })

  document.getElementById('place').innerHTML = `Weather in ${city}`;
  // document.getElementById('date').innerHTML = `Time: ${d.getHours()}:${d.getMinutes()} Date: ${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`;

  var url2 = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=5407c2b31a604dd5a5605b6f8aa4d19d`
  fetch(url2)
    .then((respons) => respons.json())
    .then(function(data2) {
  console.log(data2);
  })

}

function temperatureConverter(kalvin) {
  let celsius = parseInt(kalvin - 273.15) + ' &#186' + 'C';
  return celsius;
}

  function fillTable(data) {

    document.getElementById('sunrise').innerHTML = `${new Date(data.sys.sunrise).getUTCHours()}:${new Date(data.sys.sunrise).getUTCMinutes()}`; 
    document.getElementById('sunset').innerHTML = `${new Date(data.sys.sunset).getUTCHours()}:${new Date(data.sys.sunset).getUTCMinutes()}`;
    document.getElementById('wind').innerHTML = `${data.wind.speed} m/s`;
    document.getElementById('pressure').innerHTML = `${data.main.pressure} hPa `;
    document.getElementById('humidity').innerHTML = `${data.main.humidity} %`;
    document.getElementById('cloudiness').innerHTML = data.weather[0].description;

  }

function dailyForecast() {
  console.log('Ania');
}