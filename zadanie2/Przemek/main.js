var intervalId;
var textBox = document.getElementById('textBox');
var array = textBox.innerText.split('');
array.push('\xa0');
function changePosition(direction) {
    clearInterval(intervalId);
    intervalId = setInterval(function () {
        array.push.apply(array, array.splice(0, direction ? array.length-1 : 1));
        textBox.innerText = array.join('');
    }, 1000);
}