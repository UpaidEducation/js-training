
const API_KEY = 'c11cadd1b603b24d0c2b48f80ad478e5';

document.getElementById('london').addEventListener('click',function(){EVT.emit('drawCityWeather','London');});
document.getElementById('customCity').addEventListener('click',function(){EVT.emit('customCity');});
document.getElementById('weatherChart').addEventListener('click',function(){EVT.emit('weatherChart');});

(function(){
    window.EVT = new EventEmitter2();
    EVT.emit('getCityWeather','London');
})();