var calculator = (function(){

    var stringEquation="";

    var container = document.getElementById('calculatorContainer');

    container.addEventListener('click',handleEvent);

    function handleEvent(evt){
        if (evt.target.value){
            console.log(evt.target.value);
        }
    }

    function calculate(stringEquation){
        console.log(stringEquation);
        return 0;
    }

})();