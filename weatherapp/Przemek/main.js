const preloader = `<img style="position:absolute; top: 5px; left: 0; margin-left: auto; margin-right: auto; right: 0; border: 0;" src="data:image/gif;base64,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"/>`;
const mainBox = document.getElementById("mainBox");
const header = document.getElementById("header");
const city = document.getElementById('city');
const element = document.createElement('div');
const headerDay = document.createElement('div');
const radios = document.form.radios;
let alt = false;
let cloneCol;
let cloneRow;
let midnightDate = unixtime => unixtime - unixtime % 86400;

for (radio of radios) {
    radio.addEventListener('click', function() {
        load(this.value);
    }, false);
}

async function load(value) {
    mainBox.innerHTML = `<div id="preloader">${preloader}</div>`;
    await new Promise(done => setTimeout(() => done(), 600));
    mainBox.innerHTML="";
    getWeather(value);
}

function getWeather(radioValue) {
    const weatherUrl = 'https://api.openweathermap.org/data/2.5/'+ renders[radioValue].method +'?q='+ city.value +'&units=metric&cnt=40&appid=bb97b3f43e59cd2ba46ca6ccf5cbad37';
    const http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (http.readyState === XMLHttpRequest.DONE)
            if (http.status == 200) {
                renders[radioValue].fn(JSON.parse(http.responseText));
            } else mainBox.innerHTML = '<h4>'+ JSON.parse(http.responseText).message +'</h4>';
    };
    http.open('GET', weatherUrl);
    http.send();
}

const renders = {
    weather: {
        method: "weather",
        fn: function (data) {
            header.innerHTML = `<h1>Today's weather in ${data.name}, ${data.sys.country}</h1>`;
            renderDailyTable(data);
        }
    },
    forecast: {
        method: "forecast",
        fn: function (data) {
            header.innerHTML = `<h1>Forecasts weather in ${data.city.name}, ${data.city.country}</h1>`;
            for (const [index, item] of data.list.entries()) {
                if (data.list[+index + 1] !== undefined) {
                    renderWeekTable(index, item, midnightDate(item.dt) !== midnightDate(data.list[+index + 1].dt));
                }
            }
        }
    },
    chart: {
        method: "forecast",
        fn: function (data) {
            header.innerHTML = `<h1>Forecast temperature chart in ${data.city.name}, ${data.city.country}</h1>`;
            mainBox.innerHTML=`<div id="chart"></div>`;
            renderHighcharts( data.list.map(({dt, main}) => [parseInt(dt+'000'), main.temp]) );
        }
    }
};

function renderDailyTable(data) {
    mainBox.innerHTML =
        `<div class="daily-weather">
         <h1>Weather in ${data.name}</h1>
         <p><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"/></p>
         <p>Weather: ${data.weather[0].description}</p>
         <p>Temperature: ${data.main.temp}°C</p>
         <p>Humidity: ${data.main.humidity}%</p>
         <p>Pressure: ${data.main.pressure} hPa</p>
         <p>Visibility: ${data.visibility / 1000} km</p>
         <p>Wind speed: ${data.wind.speed} km/h</p>
        </div>`;
}

function renderWeekTable(index, list, breakLine) {
    const is21pm = +list.dt_txt.split(" ")[1].slice(0,2) === 21;
    cloneCol = element.cloneNode();
    cloneCol.classList.add(...breakLine ? ["daily","last"] : ["daily"]);
    cloneCol.innerHTML = createTimeOfDay(list);
    if ( !index || alt) {
        cloneRow = headerDay.cloneNode();
        cloneRow.classList.add("header-day");
        cloneRow.innerHTML = createHeaderOfDay(list);
        mainBox.appendChild(cloneRow);
    }
    alt = index && breakLine || is21pm;
    mainBox.appendChild(cloneCol);
}

let createTimeOfDay = data =>
    `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"/>
     <h4>${data.dt_txt.split(" ")[1].slice(0,5)}</h4>
     <p>Temperature: <b>${data.main.temp}°C</b></p>
     <p>Weather: <b>${data.weather[0].description}</b></p>
     <p>Humidity: <b>${data.main.humidity}%</b></p>
     <p>Pressure: <b>${data.main.pressure} hPa</b></p>
     <p>Wind speed: <b>${data.wind.speed} km/h</b></p>`;

let createHeaderOfDay = data => `<h2>${data.dt_txt.split(" ")[0]}</h2>`;

function renderHighcharts(averages) {
    Highcharts.chart('chart', {
        title: { text: 'Temperatures' },
        xAxis: { type: 'datetime' },
        yAxis: {
            title: { text: "temperatures" }
        },
        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: '°C'
        },
        series: [{
            name: 'Temperature',
            data: averages,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
        }]
    });
}

radios[0].click();