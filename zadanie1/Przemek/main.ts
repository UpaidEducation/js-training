/// <reference path="./elements.ts" />
// $ tsc --outFile main.js elements.ts main.ts

const ELEMENT_COLOR_BUTTON = <HTMLButtonElement>document.getElementById('buttonChange');
const ELEMENT_COLOR_TEXT = <HTMLInputElement>document.getElementById('inputText');
const ELEMENT_COLOR_BOX = <HTMLDivElement>document.getElementById('colorBox');

if(ELEMENT_COLOR_BUTTON)
    ELEMENT_COLOR_BUTTON.addEventListener('click', changeColor);

function changeColor() {
    if(ELEMENT_COLOR_BOX)
        ELEMENT_COLOR_BOX.style.backgroundColor = ELEMENT_COLOR_TEXT.value;
}

function b64_to_utf8( str: string ) {
    str = str.replace(/\s/g, '');
    return decodeURIComponent(escape(window.atob( str )));
}

if(ELEMENT_COLOR_BOX.firstElementChild)
    ELEMENT_COLOR_BOX.firstElementChild.innerHTML = b64_to_utf8(Elements.doge);