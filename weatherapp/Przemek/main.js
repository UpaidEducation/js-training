const mainBox = document.getElementById("mainBox");
const weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&cnt=40&appid=bb97b3f43e59cd2ba46ca6ccf5cbad37';

const http = new XMLHttpRequest();

http.onreadystatechange = function() {
    if (http.readyState === XMLHttpRequest.DONE)
        if (http.status == 200)
            setDataWeather(JSON.parse(http.responseText));
        else mainBox.innerHTML = '<h4>'+ JSON.parse(http.responseText).message +'</h4>';
};
http.open('GET', weatherUrl);
http.send();

let midnightDate = unixtime => unixtime - unixtime % 86400;

function setDataWeather(data) {

    for (const [index, item] of data.list.entries()) {
        if (data.list[+index+1] !== undefined)
            renderTable(item,midnightDate(item.dt) !== midnightDate(data.list[+index+1].dt));
    }
}

let clone;
const element = document.createElement('div');

function renderTable(data, breakLine) {

    console.log(data, breakLine);

    clone = element.cloneNode();
    const classes = breakLine ? ["daily", "break"] : ["daily"];
    clone.classList.add(...classes);
    clone.innerHTML = data.dt_txt;

        mainBox.appendChild(clone);
}