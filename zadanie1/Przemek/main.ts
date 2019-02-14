const CHANGE_COLOR_BUTTON: HTMLButtonElement = document.querySelector('button');
const CHANGE_COLOR_TEXT: HTMLInputElement = document.querySelector('input');
const CHANGE_COLOR_BOX: HTMLDivElement = document.querySelector('.colorBox');

CHANGE_COLOR_BUTTON.addEventListener('click', changeColor);

function changeColor() {
    CHANGE_COLOR_BOX.style.backgroundColor = CHANGE_COLOR_TEXT.value;
}
