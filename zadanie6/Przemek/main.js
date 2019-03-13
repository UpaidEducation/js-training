/*
* Function 1
*/

const palindromInput = document.getElementById('palindrom');

function createPalindrom() {
    let inputValue = palindromInput.value;
    let content = inputValue;
    let reverseString = (str) => str.split("").reverse().join("");
    let reflect = reverseString(inputValue);
    let backCounter = content.length + 1;
    let nextCounter = 0;
    let tail="";

    while (backCounter--) {
        if(reflect[backCounter] !== undefined)
            tail += reflect[backCounter];
        if (content.slice(nextCounter++, content.length) === reflect.slice(0, backCounter)) {
            palindromInput.value = content + reverseString(tail);
            break;
        }
    }
}

/*
* Function 2
*/

const numberInput = document.getElementById('number');

function countPattern(value, dividers, result) {
    return value >= dividers ? countPattern(value, parseInt(dividers * 2), result += parseInt(value / dividers)) : result;
}

function calculate() {
    numberInput.value = countPattern(+numberInput.value, 1, 0);
}

/*
* Function 3
*/

const matrixInput = document.getElementById('matrix');

let matrix =
`[
[1, 0, 0, 0, 0, 0], 
[0, 3, 0, 0, 0, 0],
[0, 0, 7, 0, 0, 0],
[0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 2, 0],
[0, 0, 0, 0, 0, 9]
]`;

matrixInput.value = matrix;

function countMatrix() {
    let array = eval(matrixInput.value);
    let isDiagonal = "Yes";

    for (var m=0; m < array.length; m++)
        for (var n=0; n < array[m].length; n++)
            if (m !== n && array[m][n] !== 0) {
                isDiagonal = "No";
                break;
            }

    document.getElementById('isDiagonal').innerText = isDiagonal;
}