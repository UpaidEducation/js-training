var index = (function(){

    var result = document.getElementById("result");
    var convertButton = document.getElementById("convert");
    var dataIn = document.getElementById("dataIn");

    var resultString = document.getElementById("resultString");
    var convertButtonString = document.getElementById("convertString");
    var stringOut = document.getElementById("resultString");

    var arrayIn = document.getElementById("arrayIn");
    var elementsIn = document.getElementById("elementsIn");
    var calculateButton = document.getElementById("calculate");
    var resultSum = document.getElementById("resultSum");

    calculateButton.addEventListener('click',function(){
        var array = arrayIn.value.split(",").map(function(value){return value*1; });
        var elements = elementsIn.value * 1;
        if(elements > array.length){
            resultSum.innerHTML = "This operation can not be done";
        }else{
            resultSum.innerHTML = findMaxPossibleSum(array,elements);
        }
    });

    convertButtonString.addEventListener('click',function(){
        stringOut.innerHTML = sortString(stringIn.value);
    });

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

    function sortString(stringIn){
        var stringOut = stringIn.split("").sort().join("");
    return stringOut;
    }

    function findMaxPossibleSum(array, elements){
        return array.sort(function(x,y){return x - y;})
                    .filter(function(value){return value >= array[array.length - elements]})
                    .reduce(function(total, number){return total + number;});
    }

    console.log(findMaxPossibleSum([1, 2, 3, 14, 5], 2));

})();


