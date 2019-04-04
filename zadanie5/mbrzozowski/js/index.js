var index = (function(){

    var result = document.getElementById("result");
    var convertButton = document.getElementById("convert");
    var dataIn = document.getElementById("dataIn");

    convertButton.addEventListener('click',function(){
    if (!isNaN(dataIn.value)){
        result.innerHTML = convertNumberToTime(dataIn.value);
    }else{
    result.innerHTML = "Entered string is not a number";
    }
    });

    function convertNumberToTime(milis= 0){

        var hours = Math.floor(milis /(3600*1000));
        var minutes = Math.floor((milis/1000 - hours*3600)/60);
        var seconds = Math.floor(milis/1000 - hours*3600 - minutes*60);
        var milis =   Math.floor(milis - (hours*3600 + minutes*60 + seconds)*1000);

        hours = prefixZeroToNumber(hours);
        minutes = prefixZeroToNumber(minutes);
        seconds = prefixZeroToNumber(seconds);
        milis = prefixZeroToNumber(milis,3);

        return  [hours,minutes,seconds,milis].join(":");
    }

    function prefixZeroToNumber(number,positions=2){
    if (number.toString().length < positions){
            return hours = ("0".repeat(positions-1) + number).slice(-1*positions);
            }
    return number;
    }

})();


