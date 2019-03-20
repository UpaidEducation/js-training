var textInput = document.getElementById('textInput');
var textOutput = document.getElementById('textOutput');
var nInput = document.getElementById('nInput');
var sumOutput = document.getElementById('sumOutput');
var matrixInput = document.getElementById('matrixInput');
var matrixOutput = document.getElementById('matrixOutput');
var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var selector = document.getElementsByTagName('select');
var calcOutput = document.getElementById('calcOutput');

// zad 1

function createPalindrom() {

    const text = textInput.value;
    let length = text.length,
        j = length - 1, k = 0, index = 0;
    let palindrom = [];

    while (k <= j) {
        if(text[k] === text[j]) {
            palindrom.splice(index, 0, text[k]);
                if(k !== j) {
                    palindrom.splice(index, 0, text[j]);
                } else {
                    break;
                }
            index++;
            j--;
            k++;
        } else {
            palindrom = [];
            k ++;
            j = length - 1;
        }
    }

    let indexOfPalindrom = text.indexOf(palindrom.join(''));
    let textToAdd = text.substring(0, indexOfPalindrom).split('').reverse().join('');
    textOutput.innerText = text + textToAdd;
}

// zad 2

function findSum() {
    const n = parseFloat(nInput.value);
    let i = 1,
        sum = 0;

    if(isNaN(n) || n < 0 || n !== Math.round(n)) {
        sumOutput.innerText = "ERROR! Please enter the positive integer";
    } else {
        while (i <= n) {
            sum+= parseInt(n/i);
            i*=2;
        }
        sumOutput.innerText = sum;
    }
}

//zad 3

function isDiagonal() {

    const matrix = matrixInput.value;
    let arr = eval(matrix),
        bool = true;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if (i !== j && arr[i][j] !== 0) {
                bool = false;
            }
        }
    }
    bool ? matrixOutput.innerText = "YES!" : matrixOutput.innerText = "No..."

}

// zad ***

function calculate() {
    var selectIndex = selector[0].selectedIndex;
    var operator = selector[0][selectIndex].value;
    let result;
    const n1 = parseFloat(number1.value),
        n2 = parseFloat(number2.value);

    switch(operator) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
        case 'power':
            result = Math.pow(n1,n2);
            break;
    }
    calcOutput.innerText = result;
}

