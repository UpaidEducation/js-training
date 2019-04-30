
var POST = 'POST';
var GET = 'GET';
var PUT = 'PUT';
var DELETE = 'DELETE';

 var generalCallback = {
        _200:(function(data){EVT.emit('saveCityData',data);}),
        _401:(function(data){alert(data.message)}),
        _429:(function(data){alert(data.message)}),
    };

function makeRequest(method,url,body,callback){
var callback = callback;
const http = new XMLHttpRequest();
http.open(method,url,true)
if(body){
    http.setRequestHeader('Content-Type','application/json');
};

if(!callback){
    callback = generalCallback;
}
http.onreadystatechange = function() {
    if (this.readyState == 4){
        console.log('status '+this.status,http);
        eval('callback._'+this.status+'(JSON.parse(http.responseText))');
        }
    }
http.send(body);
};

