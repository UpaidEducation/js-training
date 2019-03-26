const mainBox = document.getElementById("mainBox");
const button = document.getElementById('button');
const city = document.getElementById('city');
const element = document.createElement('div');
const distance = document.createElement('div');

let clone;
let cloneBox;
let midnightDate = unixtime => unixtime - unixtime % 86400;

if(button)
   button.addEventListener('click', getWeather);

function getWeather() {
    const weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ city.value +',pl&units=metric&cnt=40&appid=bb97b3f43e59cd2ba46ca6ccf5cbad37';
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
    console.log(data);
    for (const [index, item] of data.list.entries()) {
        if (data.list[+index+1] !== undefined)
            renderTable(index, item, data.city, midnightDate(item.dt) !== midnightDate(data.list[+index+1].dt));
    }
}

function renderTable(index, list, city, breakLine) {
    clone = element.cloneNode();
    clone.classList.add(...breakLine ? ["daily","last"] : ["daily"]);
    clone.innerHTML = createTimeOfDay(list, city);

    mainBox.appendChild(clone);

    if (index && breakLine) {
        cloneBox = distance.cloneNode();
        cloneBox.classList.add("distance");
        mainBox.appendChild(cloneBox);
    }
}

let createTimeOfDay = (data, city) => {
    return `<h4>${data.dt_txt}</h4>
     <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"/>
     <p>${city.name}</p>
     <p>${city.country}</p>
     <p>${data.main.temp}</p>
     <p>${data.weather[0].description}</p>
     <p>${data.wind.speed}</p>`;
}