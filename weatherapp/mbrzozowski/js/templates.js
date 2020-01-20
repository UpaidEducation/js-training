const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

const DAYS = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];

function customCityTemplate(city){

var cityValue = city ? city : "";

return`
<div>
    <input type="text" id="city" value=${cityValue}>
    <button id="searchCity">Szukaj</button>
</div>
`;
}

function cityWeatherForecastTemplate(data){

    function decodeDate(dt){
        const date = new Date(dt*1000);

        return{
            hours:date.getHours(),
            minutes:date.getMinutes(),
            day:DAYS[date.getDay()],
            monthDay:date.getDate(),
            month:MONTHS[date.getMonth()],
            year:date.getFullYear()
        }

    }

    function decodeDay(element){
        let dayData = decodeDate(element.dt)
        return [dayData.day,dayData.month,dayData.monthDay,dayData.year].join(" ");
    }

    function hourForecastData(element,position){
            const date = new Date(element.dt*1000);
        return`
        <div class="singleForecastData">
            <div class="forecast forecastHour" id="forecastHour_${position}">
                ${("0"+date.getHours()).slice(-2)}:${("0"+date.getMinutes()).slice(-2)}
            </div>
            <div class="forecast icon" id="icon_${position}">
                <img src="http://openweathermap.org/img/w/${element.weather[0].icon}.png">
            </div>
            <div class="forecast data" id="forecastData_${position}">
               ${element.main.temp} &#176 C ${element.weather[0].description}<br>
               ${element.wind.speed} m/s clouds:${element.clouds.all}% ${element.main.pressure} hPa
            </div>
        </div>
    `;
    }

    function isSameDay(date,nextDate){
        let dateNow = new Date(date*1000);
        let _nextDate = new Date(nextDate*1000);
        return (dateNow.getDate()!= _nextDate.getDate())||(dateNow.getMonth()!= _nextDate.getMonth())
    }

    function renderForecastData(data){
        const list = data.list;
        var html="";
        function render(currentValue, index, arr){

            if (index===0||(isSameDay(currentValue.dt,arr[index-1].dt))){
                html +="<tr>";
                html += '<td class="tableCaption" id="tableCaption_'+index+'">'+decodeDay(currentValue)+"</td>";
                 html +="</tr>";
            }
            html +="<tr>";
            html += '<td class="tableData" id="tableData_'+index+'">'+hourForecastData(currentValue,index)+"</td>";
            html += "</tr>";
        }


        list.forEach(render);

        return html;
    }


return`
<div>
    <div class="text" id="weatherHeader">
    Hourly weather and forecast in ${data.city.name}, ${data.city.country}
    </div>
    <div>
        <table class="forecastTable">
            ${renderForecastData(data)}
        </table>
    </div>
</div>
`;
}

function cityWeatherTemplate(data){

const date = new Date(data.dt*1000);
const sunrise = new Date(data.sys.sunrise*1000);
const sunset = new Date(data.sys.sunset*1000);


return `
<div id="weatherDiv">
    <h3>Weather in ${data.name}, ${data.sys.country}</h3>
    <div>
        <p><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"> <span>${data.main.temp}  &#176 C </span>  </p>
        <p> ${data.weather[0].main}</p>
        <p>${date.getHours()}:${date.getMinutes()} ${MONTHS[date.getMonth()+1]} ${date.getFullYear()%2000}</p>
        <table>
            <tr>
                <td>
                Wind
                </td>
                <td>
                Speed ${data.wind.speed} m/s,<br>
                Direction ${data.wind.deg}
                </td>
            </tr>
            <tr>
                <td>
                Cloudiness
                </td>
                <td>
                ${data.weather[0].description}
                </td>
            </tr>

            <tr>
                <td>
                Pressure
                </td>
                <td>
                ${data.main.pressure} hPa
                </td>
            </tr>

            <tr>
                <td>
                Humidity
                </td>
                <td>
                ${data.main.humidity} %
                </td>
            </tr>

            <tr>
                <td>
                Sunrise
                </td>
                <td>
                ${sunrise.getHours()}:${sunrise.getMinutes()}
                </td>
            </tr>
            <tr>
                <td>
                Sunset
                </td>
                <td>
                ${sunset.getHours()}:${sunset.getMinutes()}
                </td>
            </tr>
            <tr>
                <td>
                Geo<br>
                coords
                </td>
                <td>
                [${data.coord.lat},${data.coord.lon}]
                </td>
            </tr>
        </table>
    </div>
</div>
`;
}