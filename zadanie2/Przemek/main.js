var textBox = document.getElementById('textBox');
var text = "sample text ";
var array = text.split('');
var intervalId;
textBox.innerText = text;
function changePosition(direction) {
    clearInterval(intervalId);
    intervalId = setInterval(function () {
        array.push.apply(array, array.splice(0, direction ? text.length-1 : 1));
        textBox.innerText = array.join('');
    }, 50);
}