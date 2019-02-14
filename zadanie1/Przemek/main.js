var CHANGE_COLOR_BUTTON = document.querySelector('button');
var CHANGE_COLOR_TEXT = document.querySelector('input');
var CHANGE_COLOR_BOX = document.querySelector('.colorBox');
CHANGE_COLOR_BUTTON.addEventListener('click', changeColor);
function changeColor() {
    CHANGE_COLOR_BOX.style.backgroundColor = CHANGE_COLOR_TEXT.value;
}
