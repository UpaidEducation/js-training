var textInput = document.getElementById('textInput');
var textOutput = document.getElementById('textOutput');


function createPalindrom() {

    const text = textInput.value;
    let length = text.length,
        j = length - 1, k = 0, index = 0;
    let palindrom = []; // będę szukać palindromu od końca textu

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
