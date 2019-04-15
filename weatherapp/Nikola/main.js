const key = 'c0219653061808c1de63f16fda7c8dd4';
const placeInput = document.getElementById('place'),
    weatherFor = document.getElementById('weatherFor'),
    weatherTable = document.getElementById('weather'),
    data = document.getElementsByClassName('data')[0];

function selectPlace() {
    data.style.visibility = "visible";
    var place = placeInput.value,
        url = `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${key}`;

    weatherFor.innerText = `Hourtly weather and forecasts in ${place}`;

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
                    fillTable(data['list']);
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
}

function KalvinToCelsius(temp) {
    let celsius = parseInt(temp - 273.15) + '°C';
    return celsius;
}

function fillTable(data) {

    for (let i = 0; i < data.length; i++) {

        let weatherData1 = data[i]['weather'][0];
        let id = weatherData1['icon'];
        let weatherData2 = data[i]['main'];

        let date = new Date (data[i]['dt']*1000);

        if(i == 0 || date.getDay() !== new Date (data[i-1]['dt']*1000).getDay()) {
            let tr = document.createElement('tr'),
                th = document.createElement('th');
            th.setAttribute('colspan', 2);

            th.append(document.createTextNode(date.toString().slice(0,15)));
            tr.append(th);
            weatherTable.append(tr);
        }

        const tr = document.createElement('tr'),
            td = document.createElement('td'),
            td2 = document.createElement('td'),
            p = document.createElement('p'),
            p2 = document.createElement('p'),
            img = document.createElement('img');

        td.append(document.createTextNode(date.toString().slice(15,21)));
        img.setAttribute('src', getIconsUrl(weatherData1['icon']));
        td.append(img);
        p.append(document.createTextNode(KalvinToCelsius(weatherData2['temp'].toString()) + ' ' + weatherData1['description']));
        p2.append(document.createTextNode(data[i]['wind']['speed'] + ' m/s clouds: ' + data[i]['clouds']['all'] + '% ' + weatherData2['pressure'] + ' hPa'));
        td2.append(p,p2);
        tr.append(td, td2);

        weatherTable.append(tr);

    }

}

function getIconsUrl(id) {
    var url = 'http://openweathermap.org/img/w/'+ id + '.png';
    return url;
}
