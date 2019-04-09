var main = (function(){

    var stringIn = document.getElementById('stringIn');
    var generateButton = document.getElementById('generate');
    var resultString = document.getElementById('resultString');

    var number = document.getElementById('number');
    var sumButton = document.getElementById('sumButton');
    var resultNumber = document.getElementById('resultNumber');

    var slider = document.getElementById('slider');
    var checkButton = document.getElementById('checkButton');
    var isDiagonal = document.getElementById('isDiagonal');
    var matrixIn = document.getElementById('matrix');

    slider.addEventListener('change',function(){
            matrixIn.innerHTML = createMatrix(slider.value);
    });

    sumButton.addEventListener('click',function(){
        resultNumber.innerHTML = calculateSum(number.value);
    });

    checkButton.addEventListener('click',function(){
        var matrix = readMatrixToList(slider.value, 'tab');
        isDiagonal.innerHTML = isMatrixDiagonal(matrix);
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

    function createMatrix(size=3){
        var htmlOut = '<table>';
        for (var i = 0; i < size; i++){
            htmlOut += '<tr>';
                for (var j = 0; j < size; j++){
                    htmlOut+='<td><input class ="matrixInput" type="number" id="tab' ;
                    htmlOut += i;
                    htmlOut += j;
                    htmlOut += '" value="0"></td>';
                }
            htmlOut += '</tr>';
        }
        htmlOut += '</table>';
    return htmlOut;
    }

    function readMatrixToList(size, matrixIdPrefix = 'tab'){
        var arrayOut = []
        for (var i = 0 ; i < size ; i++){
            var innerArray = [] ;
            for(var j = 0 ; j < size ; j++){
                var id = matrixIdPrefix+i+j;
                innerArray.push(document.getElementById(id).value);
            }
            arrayOut.push(innerArray);
        }
    return arrayOut;
    }

    function isMatrixDiagonal(matrixIn){
        try{
        matrixIn.forEach(function(value, index, arr){
            var rowResult = value.filter(function(innerValue, innerIndex, innerArr){
                return ((innerValue != 0) && (index != innerIndex));
                });
            if (rowResult.length){
                throw false;
                }
            })
        }catch(value){
        return value;
        }
        return true;
    }

    matrixIn.innerHTML = createMatrix();


})();