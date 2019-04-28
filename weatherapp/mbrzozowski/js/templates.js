function customCityTemplate(){

return`
<div>
    <input type="text" id="city">
    <button id="searchCity">Szukaj</button>
</div>
`

};

function cityWeatherTemplate(data){

const date = new Date(data.dt*1000);
const sunrise = new Date(data.sys.sunrise*1000);
const sunset = new Date(data.sys.sunset*1000);
let months = [
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


return `
<div id="weatherDiv">
    <h3>Weather in ${data.name}, ${data.sys.country}</h3>
    <div>
        <p><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" <span>${data.main.temp}  &#176 C </span> </p>
        <p> ${data.weather[0].main}</p>
        <p>${date.getHours()}:${date.getMinutes()} ${months[date.getMonth()+1]} ${date.getFullYear()%2000}</p>
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