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

if(button)
    button.addEventListener('click', function () {
       getWeather(radios.value);
    }, false);

for (radio of radios) {
    radio.addEventListener('change', function() {
        getWeather(this.value);
    }, false);
}

function getWeather(radioValue) {
    const weatherUrl = 'https://api.openweathermap.org/data/2.5/'+ radioValue +'?q='+ city.value +'&units=metric&cnt=40&appid=bb97b3f43e59cd2ba46ca6ccf5cbad37';
    const http = new XMLHttpRequest();
    mainBox.innerHTML="";
    http.onreadystatechange = function() {
        if (http.readyState === XMLHttpRequest.DONE)
            if (http.status == 200)
                setDataWeather(JSON.parse(http.responseText));
            else mainBox.innerHTML = '<h4>'+ JSON.parse(http.responseText).message +'</h4>';
    };
    http.open('GET', weatherUrl);
    http.send();
}

function setDataWeather(data) {
    header.innerHTML = `<h1>Hourtly weather and forecasts in ${data.city.name}, ${data.city.country}</h1>`;
    for (const [index, item] of data.list.entries()) {
        if (data.list[+index+1] !== undefined)
            renderTable(index, item, midnightDate(item.dt) !== midnightDate(data.list[+index+1].dt));
    }
}

function renderTable(index, list, breakLine) {
    clone = element.cloneNode();
    clone.classList.add.apply(clone.classList, breakLine ? ["daily","last"] : ["daily"]);
    //clone.classList.add(...breakLine ? ["daily","last"] : ["daily"]);
    clone.innerHTML = createTimeOfDay(list);
    if ( !index || alt) {
        cloneBox = headerDay.cloneNode();
        cloneBox.classList.add("header-day");
        cloneBox.innerHTML = createHeaderOfDay(list);
        mainBox.appendChild(cloneBox);
    }
    alt = index && breakLine ? true : false;
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