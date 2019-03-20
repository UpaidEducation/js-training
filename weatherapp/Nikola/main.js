const key = 'c0219653061808c1de63f16fda7c8dd4';
var placeInput = document.getElementById('place');
var weatherFor = document.getElementById('weatherFor');
var weather = document.getElementById('weather');
var allInformation = document.getElementById('allInformation');
var dataOfWeather = document.getElementsByClassName('dataOfWeather');

function selectPlace() {
var place = placeInput.value;
    weatherFor.innerText = "Weather for " + place;
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + place + '&appid=' + key;

    fetch(url)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function(data) {
                    console.log(data);
                    fillTable(data);
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
}

function KalvinToCelsius(temp) {
    let celsius = parseInt(temp - 273.15) + '&#186' + 'C';
    return celsius;
}

function fillTable(data) {
    let weatherData1 = data['weather'][0];
    let weatherData2 = data['main'];
    let td1 = dataOfWeather[0].getElementsByTagName('td');
    let td2 = dataOfWeather[1].getElementsByTagName('td');

    weather.innerHTML = weatherData1['main'].toUpperCase() + ' ' + getIcons(weatherData1['icon']) + ' ' + weatherData1['description'];
    weatherFor.nextElementSibling.innerHTML = 'latitude: ' + data['coord']['lat'] + '  longitude: ' + data['coord']['lon'];

    td1[0].innerText = weatherData2['humidity'];
    td1[1].innerText = weatherData2['pressure'];
    td1[2].innerHTML = KalvinToCelsius(weatherData2['temp']) ;
    td1[4].innerText = data['clouds']['all'];

    td2[0].innerHTML = KalvinToCelsius(weatherData2['temp_min']);
    td2[1].innerHTML = KalvinToCelsius(weatherData2['temp_max']);
    td2[2].innerText = data['wind']['deg'];
    td2[3].innerHTML = data['wind']['speed'];

    allInformation.innerText = JSON.stringify(data, null, 2);
}

function getIcons(id) {
    var url = '<img width = "97" src=\'http://openweathermap.org/img/w/'+ id + '.png\'/>';
    return url;
}
