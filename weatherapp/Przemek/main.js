var weatherUrl = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=bb97b3f43e59cd2ba46ca6ccf5cbad37';
// Allow-Control-Allow-Origin: *
var http = new XMLHttpRequest();
http.open('GET', weatherUrl);
http.onreadystatechange = function() {
    if (http.readyState == XMLHttpRequest.DONE && http.status == 200) {
        console.log(http.responseText, 200);
    } else if (http.readyState == XMLHttpRequest.DONE) {
        console.log(http.responseText);
    }
};
http.send();
