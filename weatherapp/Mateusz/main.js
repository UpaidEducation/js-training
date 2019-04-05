const boxEl = document.querySelector('.box');
const contentEl = document.querySelector('.content');
const searchIconEl = document.querySelector('.search-icon');
const searchEl = document.querySelector('.search');
const formEl = document.querySelector('form');

const switches = {
    weather: document.querySelector('.weather-switch'),
    forecast: document.querySelector('.forecast-switch')
};

switches.weather.addEventListener('click', switchMode);
switches.forecast.addEventListener('click', switchMode);

searchEl.addEventListener('input', function () {
    !this.value ? searchIconEl.classList.remove('has-value') : searchIconEl.classList.add('has-value')
});
searchIconEl.addEventListener('click', () => searchEl.focus());

formEl.addEventListener('submit', submit);

// Switches
let isLoading = false;
let timeAgoInterval = null;
let currentLocation = '';
let currentMode = 'weather';

// Constants
const apiKey = 'd99ce618511b0aa211ac10233d7bc46e';
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const details = [
    { name: 'Min temp', value: 'main.temp_min', unit: '°C' },
    { name: 'Max temp', value: 'main.temp_max', unit: '°C' },
    { name: 'Wind', value: 'wind.speed', unit: ' m/s' },
    { name: 'Humidity', value: 'main.humidity', unit: '%' },
    { name: 'Pressure', value: 'main.pressure', unit: ' hPa' },
    { name: 'Sunrise at', value: 'sys.sunrise' },
    { name: 'Sunset at', value: 'sys.sunset' }
];

function getChartConfig(averages, ranges) {
    return {
        chart: {
            backgroundColor: '#599bfd',
            height: 400
        },
        title: {
            text: null
        },
        xAxis: {
            type: 'datetime',
            lineColor: '#fff',
            labels: {
                style: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            title: {
                text: null
            },
            gridLineColor: '#85b6ff',
            labels: {
                style: {
                    color: '#fff'
                },
                formatter: function () {
                    return this.value + '°C'
                }
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: '°C'
        },
        legend: {
            enabled: false
        },
        series: [
            {
                name: 'Temperature',
                data: averages,
                zIndex: 1,
                color: '#ddd',
                marker: {
                    fillColor: 'white',
                    lineWidth: 2,
                    lineColor: '#fff'
                }
            },
            {
                name: 'Range',
                data: ranges,
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                color: '#7cb1ff',
                fillOpacity: 0.8,
                zIndex: 0,
                marker: { enabled: false }
            }
        ],
        credits: {
            enabled: false
        }
    };
}

// Core
function submit(event) {
    event.preventDefault();
    get();
}

function get() {
    if (isLoading || (!searchEl.value && !currentLocation)) return;
    handleLoading();

    fetch(`https://api.openweathermap.org/data/2.5/${currentMode}?q=${searchEl.value || currentLocation}&appid=${apiKey}`)
        .then(handleBody)
        .then(currentMode === 'weather' ? handleWeatherSuccess : handleForecastSuccess)
        .catch(handleError)
        .finally(handleDone);
}

function switchMode() {
    if (isLoading) return;
    const mode = this.innerText.toLowerCase();
    switches[mode].disabled = true;
    switches[currentMode].disabled = false;
    currentMode = mode;
    if (searchEl.value || currentLocation) get();
}

// Handlers
async function handleBody(body) {
    const data = await body.json();
    if (!body.ok) throw data;
    return data;
}

function handleLoading() {
    isLoading = true;

    if (timeAgoInterval) {
        clearInterval(timeAgoInterval);
        timeAgoInterval = null;
    }

    searchIconEl.classList.add('disabled');
    searchEl.disabled = true;

    contentEl.innerHTML = '';
    const loadingIndicator = document.createElement('div');
    loadingIndicator.classList.add('loading');
    contentEl.appendChild(loadingIndicator);
}

function handleWeatherSuccess(data) {
    currentLocation = data.name;
    contentEl.innerHTML = '';

    const mainEl = document.createElement('div');
    mainEl.classList.add('main-weather', 'row');

    const titleEl = createTitleElement(data.name, data.sys.country);
    const weatherEl = createWeatherElement(data);
    const detailsEl = createDetailsElement(data);
    const timeEl = createTimeElement(data);

    mainEl.append(weatherEl, detailsEl);

    contentEl.append(titleEl, timeEl, mainEl);
}

function handleForecastSuccess(data) {
    currentLocation = data.city.name;
    contentEl.innerHTML = '';

    const mainEl = document.createElement('div');
    mainEl.classList.add('main-forecast', 'column');

    const titleEl = createTitleElement(data.city.name, data.city.country);

    const chart = createForecastChart(data.list);

    const list = data.list.map(({ main, weather, dt, wind }) => {
        return { main, weather: weather[0], date: new Date(dt * 1000), wind }
    });

    let currentDay = list[0].date;
    createForecastListHeader(currentDay, mainEl);
    list.forEach(item => {
        if (!sameDay(currentDay, item.date)) {
            currentDay = item.date;
            createForecastListHeader(currentDay, mainEl);
        }

        const itemEl = document.createElement('div');
        itemEl.classList.add('forecast-list-item');

        const timeEl = document.createElement('div');
        timeEl.classList.add('forecast-time');
        timeEl.innerText = getTime(item.date);

        const iconEl = createIconElement(item.weather.icon);
        const tempEl = createForecastTemperatureElement(item);
        const infoEl = createForecastInfoElement(item);

        itemEl.append(timeEl, iconEl, tempEl, infoEl);

        mainEl.appendChild(itemEl);
    });

    contentEl.append(titleEl, chart.wrapper, mainEl);
    chart.element.reflow();
}

function handleError(err) {
    currentLocation = '';
    contentEl.innerText = err.message || 'Something went wrong.';
}

function handleDone() {
    isLoading = false;
    searchEl.value = '';
    searchIconEl.classList.remove('has-value', 'disabled');
    searchEl.disabled = false;
}

// Builders
function createTimeElement(data) {
    const timeEl = document.createElement('div');
    timeEl.classList.add('time');

    const measuredAt = new Date(data.dt * 1000);

    const measuredAtEl = document.createElement('div');
    measuredAtEl.innerText = `Measured at ${getTime(measuredAt)} on ${days[measuredAt.getDay()]}, ${months[measuredAt.getMonth()]} ${measuredAt.getDate()}`;

    const timeAgoEl = document.createElement('div');
    timeAgoEl.innerText = getMeasuredAgo(measuredAt);
    timeAgoInterval = setInterval(() => {
        const text = getMeasuredAgo(measuredAt);
        if (text !== timeAgoEl.innerText) {
            timeAgoEl.innerText = text;
        }
    }, 1000);

    timeEl.append(measuredAtEl, timeAgoEl);

    return timeEl;
}

function createWeatherElement(data) {
    const weatherEl = document.createElement('div');
    weatherEl.classList.add('weather', 'row');

    const icon = createIconElement(data.weather[0].icon);

    const text = document.createElement('div');

    const temp = document.createElement('div');
    temp.classList.add('temp');
    temp.innerText = `${kelvinToCelsius(data.main.temp)}°C`;

    const info = document.createElement('div');
    info.classList.add('temp-info');
    info.innerText = `${kelvinToFahrenheit(data.main.temp)}°F\n${data.weather[0].description}`;

    text.append(temp, info);
    weatherEl.append(icon, text);

    return weatherEl;
}

function createDetailsElement(data) {
    const detailsEl = document.createElement('div');
    detailsEl.classList.add('details');

    const header = document.createElement('div');
    header.classList.add('details-header')
    header.innerText = 'Details';

    const list = document.createElement('div');
    list.classList.add('details-list');

    details.forEach(detail => {
        const row = document.createElement('div');
        row.classList.add('row');

        const name = document.createElement('div');
        const value = document.createElement('div');

        name.innerText = detail.name;
        const valueText = detail.value.replace(/\[|\]\.?/g, '.').split('.').filter(s => s).reduce((acc, val) => acc && acc[val], data);
        value.innerText = detail.name.startsWith('Sun') ? getTime(new Date(valueText * 1000)) : valueText;

        if (detail.unit) {
            if (detail.unit === '°C') value.innerText = kelvinToCelsius(+value.innerText);
            value.innerText += detail.unit;
        }

        row.append(name, value);

        list.appendChild(row);
    });

    detailsEl.append(header, list);
    return detailsEl;
}

function createTitleElement(city, country) {
    const titleEl = document.createElement('h2');
    titleEl.classList.add('title');
    titleEl.innerText = `${currentMode.slice(0, 1).toUpperCase() + currentMode.slice(1)} for ${city}, ${country}`;
    return titleEl;
}

function createIconElement(icon) {
    const iconEl = document.createElement('img');
    iconEl.src = `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${icon}.png`;
    iconEl.draggable = false;
    return iconEl;
}

function createForecastListHeader(date, appendTo) {
    const headerEl = document.createElement('div');
    headerEl.classList.add('forecast-list-item', 'forecast-list-header');
    headerEl.innerText = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
    if (!!appendTo) appendTo.appendChild(headerEl);
    return headerEl;
}

function createForecastTemperatureElement(forecast) {
    const wrapperEl = document.createElement('div');
    wrapperEl.classList.add('forecast-temp');

    const tempEl = document.createElement('div');
    tempEl.innerText = `${kelvinToCelsius(forecast.main.temp)}°C`;

    const descEl = document.createElement('div');
    descEl.classList.add('forecast-description');
    descEl.innerText = forecast.weather.description;

    wrapperEl.append(tempEl, descEl);

    return wrapperEl;
}

function createForecastInfoElement(forecast) {
    const infoEl = document.createElement('div');
    infoEl.classList.add('forecast-info');

    const firstRow = document.createElement('div');
    const secondRow = document.createElement('div');

    const humidityEl = document.createElement('div');
    humidityEl.classList.add('forecast-humidity');
    humidityEl.innerText = `${forecast.main.humidity}% humidity`;

    const windEl = document.createElement('div');
    windEl.classList.add('forecast-wind');
    windEl.innerText = `${forecast.wind.speed} m/s,`;

    const pressureEl = document.createElement('div');
    pressureEl.classList.add('forecast-pressure');
    pressureEl.innerText = `${forecast.main.pressure} hPa`;

    firstRow.append(humidityEl);
    secondRow.append(windEl, pressureEl);

    infoEl.append(firstRow, secondRow);
    return infoEl;
}

function createForecastChart(list) {
    const averages = list.map(item => [item.dt * 1000, kelvinToCelsius(item.main.temp)]);
    const ranges = list.map(item => [item.dt * 1000, kelvinToCelsius(item.main.temp_min), kelvinToCelsius(item.main.temp_max)]);

    const chartWrapper = document.createElement('div');
    chartWrapper.classList.add('forecast-chart-wrapper');
    const myChart = Highcharts.chart(chartWrapper, getChartConfig(averages, ranges));

    return { wrapper: chartWrapper, element: myChart };
}

// Utils
function sameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}

function getTime(date) {
    return `${trailingZero(date.getHours())}:${trailingZero(date.getMinutes())}`;
}

function getMeasuredAgo(date) {
    const timeNow = new Date();
    const seconds = Math.floor((timeNow.getTime() - date.getTime()) / 1000);

    if (seconds < 60) return `${seconds} second${seconds > 1 ? 's' : ''} ago`;

    if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }

    const hours = Math.floor(seconds / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`
}

function kelvinToCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}

function kelvinToFahrenheit(kelvin) {
    return Math.round((kelvin * 9 / 5) - 459.67);
}

function trailingZero(number) {
    if (number < 10 && number > -10) {
        return '0' + number;
    }

    return number;
}

// Init
searchEl.value = 'London';
searchIconEl.classList.add('has-value');
get();