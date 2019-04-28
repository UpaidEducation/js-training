
var cityCallback = {
        _200:(function(data){
            console.log('status 200: ', data);
            EVT.emit('saveCityData', data);
            }),
    };