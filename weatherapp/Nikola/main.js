const key = 'c0219653061808c1de63f16fda7c8dd4';
const placeInput = document.getElementById('place'),
    weatherFor = document.getElementById('weatherFor'),
    chartsFor = document.getElementById('chartsFor'),
    weatherTable = document.getElementById('weather'),
    weatherData = document.getElementsByClassName('data')[0],
    chartsData = document.getElementsByClassName('dataCharts')[0],
    chart = document.getElementById('chart');

function getData(place, isChart) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${key}`;
    fetch(url)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                // Examine the text in the response
                if (isChart) {
                    response.json().then(function (chartsData) {
                        console.log(chartsData);
                        createHighcharts(chartsData.list.map(({dt, main}) =>
                            [parseInt(dt+'000'), parseInt(KalvinToCelsius(main.temp))]),
                            chartsData.list.map(({dt, main}) =>
                                [parseInt(dt+'000'), parseInt(KalvinToCelsius(main.temp_min)), parseInt(KalvinToCelsius(main.temp_max))])
                        );
                    });
                } else {
                    response.json().then(function(weatherData) {
                        fillTable(weatherData['list']);
                    });
                }
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
}

function selectPlace() {
    weatherData.style.display = "inline-block";
    let place = placeInput.value;
    weatherFor.innerText = `Hourtly weather and forecasts in ${place}`;
    getData(place, false);


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
            th.className = "thClass";

            th.append(document.createTextNode(date.toString().slice(0,15)));
            tr.append(th);
            weatherTable.append(tr);
        }

        const tr = document.createElement('tr'),
            td = document.createElement('td'),
            td2 = document.createElement('td'),
            p = document.createElement('p'),
            p2 = document.createElement('p'),
            p3 = document.createElement('p'),
            img = document.createElement('img'),
            italics = document.createElement("I");

        p.className = "degrees";
        // td.style.borderRight = "0px";
        // td2.style.borderLeft = "0px";

        td.append(document.createTextNode(date.toString().slice(15,21)));
        img.setAttribute('src', getIconsUrl(weatherData1['icon']));
        td.append(img);
        p.append(document.createTextNode(KalvinToCelsius(weatherData2['temp'].toString())));
        p3.append(document.createTextNode( weatherData1['description']));
        p2.append(document.createTextNode(data[i]['wind']['speed'] + ' m/s, clouds: ' + data[i]['clouds']['all'] + '%, ' + weatherData2['pressure'] + ' hPa'));
        italics.append(p3);
        td2.append(p,italics,p2);
        tr.append(td, td2);

        weatherTable.append(tr);

    }

}

function getIconsUrl(id) {
    var url = 'http://openweathermap.org/img/w/'+ id + '.png';
    return url;
}

function showChart () {
    let place = placeInput.value;
    weatherData.style.display = "none";
    chartsData.style.display = "inline-block";

    chartsFor.innerText = `Daily weather and forecasts in ${place}`;

    getData(place, true);


}

function createHighcharts(averages, ranges) {
    Highcharts.chart('chart', {
        chart: {
            type: 'areasplinerange',
        },
        title: { text: '' },
        xAxis: { type: 'datetime' },
        yAxis: {
            title: { text: "Temp" }
        },
        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: '°C'
        },
        series: [{
            name: 'Temperature',
            data: [averages,ranges],
            zIndex: 1,
            marker: {
                fillColor: 'blue',
                lineWidth: 2,
                lineColor: 'blue',
                radius: 3
            },
            color: 'blue',
        }],
        series: [{
            name: 'Temperature',
            data: ranges,
            zIndex: 1,
            marker: {
                fillColor: 'blue',
                lineWidth: 2,
                lineColor: 'lightblue',
                radius: 2
            },
            color: 'lightblue',
        }]
    });

}


