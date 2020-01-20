(function(){

    var equation="";

    var buttonContainer = document.getElementById('calculatorContainer');
    var equationOut = document.getElementById('equationOut');
    var calcOut = document.getElementById('calcOut');

    buttonContainer.addEventListener('click',eventHandler);

    function eventHandler(evt){
        if(evt.target.value){
            if (evt.target.value === 'CE'){
                equation = '';
                displayValue(calcOut, '0');
                displayValue(equationOut, '');
                return;
            }
            if (evt.target.value === '='){
                var result = calculate(equation);
                console.log(result);
                displayValue(calcOut, result);
                equation ='';
            }
            else{
            equation = addValue(equation, evt.target.value);
            console.log(equation);
            displayValue(equationOut, equation);
            }
        }
    }

    function calculate(equation){
        return eval(equation);
    }

    function displayValue(elementHTML, value){
        elementHTML.innerHTML = value;
    }

    function addValue(equation,value){
        if (value === 'del') return equation.substring(0,equation.length -1);
        return equation + value;

    }

})();