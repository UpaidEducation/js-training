const contentEl = document.querySelector('.content');
const titleEl = document.querySelector('.title');
const refreshBtn = document.querySelector('.refresh');
refreshBtn.addEventListener('click', getWeather);

// Switches
let timeAgoInterval = null;
let refreshAvailable = true;

// Setup
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

// Core
function getWeather() {
    if (refreshAvailable) {
        titleEl.innerText = 'Weather App';
        onLoading();

        setTimeout(() => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`)
                .then(handleBody)
                .then(onSuccess)
                .catch(onError)
                .finally(onDone);
        }, 400);
    }
}

// Handlers
async function handleBody(body) {
    const data = await body.json();
    if (!body.ok) throw data;
    return data;
}

function onLoading() {
    if (timeAgoInterval) {
        clearInterval(timeAgoInterval);
        timeAgoInterval = null;
    }

    refreshAvailable = false;
    refreshBtn.disabled = true;

    contentEl.innerHTML = '';
    const loadingIndicator = document.createElement('div');
    loadingIndicator.classList.add('loading');
    contentEl.appendChild(loadingIndicator);
}

function onSuccess(data) {
    contentEl.innerHTML = '';
    titleEl.innerText = `Weather for ${data.name}, ${data.sys.country}`;

    const mainEl = document.createElement('div');
    mainEl.classList.add('main', 'row');

    const weatherEl = createWeatherElement(data);
    const detailsEl = createDetailsElement(data);
    const timeEl = createTimeElement(data);

    mainEl.append(weatherEl, detailsEl);
    contentEl.append(timeEl, mainEl);
}

function onError(err) {
    contentEl.innerText = err.message || 'Something went wrong.';
}

function onDone() {
    setTimeout(() => {
        refreshAvailable = true;
        refreshBtn.disabled = false;
    }, 3000);
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

    const icon = document.createElement('img');
    icon.src = `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${data.weather[0].icon}.png`;
    icon.draggable = false;

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

// Utils
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
getWeather();
