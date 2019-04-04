const mainBox = document.getElementById("mainBox");
const header = document.getElementById("header");
const button = document.getElementById('button');
const city = document.getElementById('city');
const element = document.createElement('div');
const headerDay = document.createElement('div');
const radios = document.form.radios;

let alt = false;
let clone;
let cloneBox;
let midnightDate = unixtime => unixtime - unixtime % 86400;

if (button)
    button.addEventListener('click', function () {
       getWeather(radios.value);
    }, false);

for (radio of radios) {
    radio.addEventListener('change', function() {
        getWeather(this.value);
    }, false);
}

function getWeather(radioValue) {
    const weatherUrl = 'https://api.openweathermap.org/data/2.5/'+ renders[radioValue].method +'?q='+ city.value +'&units=metric&cnt=40&appid=bb97b3f43e59cd2ba46ca6ccf5cbad37';
    const http = new XMLHttpRequest();
    mainBox.innerHTML="";
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
        fn: function (data) {
            header.innerHTML = `<h1>Today's weather in ${data.name}, ${data.country}</h1>`;
            renderDailyTable(data);
        },
        method: "weather"
    },
    forecast: {
        fn: function (data) {
            header.innerHTML = `<h1>Forecasts weather in ${data.city.name}, ${data.city.country}</h1>`;
            for (const [index, item] of data.list.entries()) {
                if (data.list[+index + 1] !== undefined) {
                    renderWeekTable(index, item, midnightDate(item.dt) !== midnightDate(data.list[+index + 1].dt));
                }
            }
        },
        method: "forecast"
    },
    diagram: {
        fn: function (data) {
            let arr = [], i=0;
            for (const [index, item] of data.list.entries()) {
                if (data.list[+index + 1] !== undefined)
                if (!index || midnightDate(item.dt) !== midnightDate(data.list[+index + 1].dt))
                    arr[i++] = [parseInt(item.dt+'000'), item.main.temp];
            }
            mainBox.innerHTML=`<div id="diagriam" style="min-width: 310px; height: 400px; margin: 0 auto"></div>`;
            setHighcharts(arr);
        },
        method: "forecast"
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
    clone = element.cloneNode();
    clone.classList.add(...breakLine ? ["daily","last"] : ["daily"]);
    clone.innerHTML = createTimeOfDay(list);
    if ( !index || alt) {
        cloneBox = headerDay.cloneNode();
        cloneBox.classList.add("header-day");
        cloneBox.innerHTML = createHeaderOfDay(list);
        mainBox.appendChild(cloneBox);
    }
    alt = index && breakLine || is21pm;
    mainBox.appendChild(clone);
}

let createTimeOfDay = data => {
    return `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"/>
     <h4>${data.dt_txt.split(" ")[1].slice(0,5)}</h4>
     <p>Temperature: <b>${data.main.temp}°C</b></p>
     <p>Weather: <b>${data.weather[0].description}</b></p>
     <p>Humidity: <b>${data.main.humidity}%</b></p>
     <p>Pressure: <b>${data.main.pressure} hPa</b></p>
     <p>Wind speed: <b>${data.wind.speed} km/h</b></p>
`;
}

let createHeaderOfDay = data => {
    return `<h2>${data.dt_txt.split(" ")[0]}</h2>`;
}

function setHighcharts(averages) {
    Highcharts.chart('diagram', {

        title: {
            text: 'July temperatures'
        },

        xAxis: {
            type: 'datetime'
        },

        yAxis: {
            title: {
                text: null
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: '°C'
        },

        legend: {
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