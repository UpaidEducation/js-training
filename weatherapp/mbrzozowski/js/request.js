
var POST = 'POST';
var GET = 'GET';
var PUT = 'PUT';
var DELETE = 'DELETE';

 var generalCallback = {
        _200:(function(data){}),
        _201:(function(data){}),
        _202:(function(data){}),
        _204:(function(data){}),
        _400:(function(data){}),
        _401:(function(data){alert(data.message)}),
        _403:(function(data){}),
        _404:(function(data){}),
        _409:(function(data){}),
        _412:(function(data){}),
        _422:(function(data){}),
        _500:(function(data){}),
    };

function makeRequest(method,url,body,callback){
const http = new XMLHttpRequest();
http.open(method,url,true)
if(body){
    http.setRequestHeader('Content-Type','application/json');
};

http.onreadystatechange = function() {
    if (this.readyState == 4){
        console.log('status '+this.status,http);
        eval('callback._'+this.status+'(JSON.parse(http.responseText))');
        }
    }
http.send(body);
};

