
var POST = 'POST';
var GET = 'GET';
var PUT = 'PUT';
var DELETE = 'DELETE';
var isForecast =false;
var dataForChart = false;

 var generalCallback = {
        _200:(function(data){   console.log('isForecast',isForecast);
                                EVT.emit('saveCityData',data,isForecast,dataForChart);}),
        _400:(function(data){alert(data.message)}),
        _401:(function(data){alert(data.message)}),
        _404:(function(data){alert(data.message)}),
        _429:(function(data){alert(data.message)}),
    };

function makeRequest(method,url,body,callback,forecast,drawChart){
var callback = callback;
const http = new XMLHttpRequest();
http.open(method,url,true)
if(body){
    http.setRequestHeader('Content-Type','application/json');
};

if(!callback){
    callback = generalCallback;
}
isForecast = forecast;
dataForChart = drawChart;
http.onreadystatechange = function() {
    if (this.readyState == 4){
        console.log('status '+this.status,http);
        eval('callback._'+this.status+'(JSON.parse(http.responseText))');
        }
    }
http.send(body);
};

