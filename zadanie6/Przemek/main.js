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
    return dividers <= value ? countPattern(value, +(dividers * 2), result += value / dividers) : result;
}

function calculate() {
    numberInput.value = countPattern(+numberInput.value, 1, 0);
}