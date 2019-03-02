
var textInput = document.getElementById('textInput');
var textOutput = document.getElementById('textOutput');

var dateInput = document.getElementById('dateInput');
var dateOutput = document.getElementById('dateOutput');

var tabInput = document.getElementById('arrayElements');
var count = document.getElementById('count');
var sumOfElements = document.getElementById('sumOfElements');



    function convertDate() {

        let milisec = parseInt(dateInput.value);

        if( isNaN(milisec)) {
            dateOutput.innerText = "ERROR! Enter milliseconds.";
        } else {

            let milisec = parseInt(dateInput.value);

            let h = Math.floor(milisec / (60*60*1000));
            milisec -= h * 60 * 60 * 1000;

            let min = Math.floor(milisec / (60*1000));
            milisec -= min * 60 * 1000;

            let sec = Math.floor(milisec / 1000);
            milisec -= sec * 1000;

            dateOutput.innerText = h + ':' + min + ':' + sec + ':' + milisec;
        }
    }

    /*

     */

    function toLower() {
        textInput.value = textInput.value.toLowerCase();
    }

    function convertText() {
        textOutput.innerText = textInput.value.split('').sort().join('');
    }

    /*

     */

    function findMaxSum() {

        let tab = tabInput.value.split(',').sort(sortNumber).reverse();
        let sum = 0;
        let n = count.value;

        if( n > 0 && n < tab.length) {
            for( let i = 0; i < n; i++ ) {
                sum += parseInt(tab[i]);
            }
        } else {
            sum = "This operation can not be done";
        }
        sumOfElements.innerText = sum;
    }

    function sortNumber( a, b ) {
        return a-b;
    }
