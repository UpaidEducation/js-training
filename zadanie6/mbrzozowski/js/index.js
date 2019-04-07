var main = (function(){

    var stringIn = document.getElementById('stringIn');
    var generateButton = document.getElementById('generate');
    var resultString = document.getElementById('resultString');

    var number = document.getElementById('number');
    var sumButton = document.getElementById('sumButton');
    var resultNumber = document.getElementById('resultNumber');

    var arrayIn = document.getElementById('arrayIn');
    var checkButton = document.getElementById('checkButton');
    var isDiagonal = document.getElementById('isDiagonal');

    sumButton.addEventListener('click',function(){
        resultNumber.innerHTML = calculateSum(number.value);
    });

    checkButton.addEventListener('click',function(){
    });

    generateButton.addEventListener('click',function(){
        if (isPalindrome(stringIn.value)){
            resultString.innerHTML = stringIn.value;
        }else{
            resultString.innerHTML = generatePalindrome(stringIn.value);
        }
    });

    function isPalindrome(stringIn){
        var reversedString = stringIn.split("").reverse().join("");
        return stringIn == reversedString;
    }

    function generatePalindrome(stringIn){
        var reversedString = stringIn.split("").reverse().join("");
        var index = 0;
        while(!isPalindrome(stringIn.substring(index))){
            index++;
        }
        return stringIn.concat(reversedString.slice(-(index)));
    }

    function calculateSum(number){
        var power = 0;
        var totalSum = 0;
        while(number>=Math.pow(2,power)){
            totalSum += Math.floor(number/Math.pow(2,power));
            power ++;
        }
        return totalSum;
    }

})();