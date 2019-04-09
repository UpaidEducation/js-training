var calculator = (function(){

    var stringEquation="";

    var button1 = document.getElementById('button-1');
    var button2 = document.getElementById('button-2');
    var button3 = document.getElementById('button-3');
    var button4 = document.getElementById('button-4');
    var button5 = document.getElementById('button-5');
    var button6 = document.getElementById('button-6');
    var button7 = document.getElementById('button-7');
    var button8 = document.getElementById('button-8');
    var button9 = document.getElementById('button-9');
    var button0 = document.getElementById('button-0');
    var buttonPlus = document.getElementById('button-+');
    var buttonMinus = document.getElementById('button--');
    var buttonMultiply = document.getElementById('button-*');
    var buttonDivide = document.getElementById('button-%');
    var buttonDot = document.getElementById('button-.');
    var buttonEquals = document.getElementById('button-=');


    button1.addEventListener('click',function(){
        stringEquation += '1';
        console.log(stringEquation);
    });

    button2.addEventListener('click',function(){
        stringEquation += '2';
        console.log(stringEquation);
    });

    button3.addEventListener('click',function(){
        stringEquation += '3';
        console.log(stringEquation);
    });

    button4.addEventListener('click',function(){
        stringEquation += '4';
        console.log(stringEquation);
    });

    button5.addEventListener('click',function(){
        stringEquation += '5';
        console.log(stringEquation);
    });

    button6.addEventListener('click',function(){
        stringEquation += '6';
        console.log(stringEquation);
    });

    button7.addEventListener('click',function(){
        stringEquation += '7';
        console.log(stringEquation);
    });

    button8.addEventListener('click',function(){
        stringEquation += '8';
        console.log(stringEquation);
    });

    button9.addEventListener('click',function(){
        stringEquation += '9';
        console.log(stringEquation);
    });

    buttonPlus.addEventListener('click',function(){
        stringEquation += '+';
        console.log(stringEquation);
    });

    buttonMinus.addEventListener('click',function(){
        stringEquation += '-';
        console.log(stringEquation);
    });

    buttonMultiply.addEventListener('click',function(){
        stringEquation += '*';
        console.log(stringEquation);
    });

    buttonDot.addEventListener('click',function(){
        stringEquation += '.';
        console.log(stringEquation);
    });

    buttonEquals.addEventListener('click',function(){
        calculate(stringEquation);
    });

    buttonDivide.addEventListener('click',function(){
        stringEquation += '/';
        console.log(stringEquation);
    });

    function calculate(stringEquation){
        console.log(stringEquation);
        return 0;
    }

})();