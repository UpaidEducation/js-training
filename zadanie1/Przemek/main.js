var Elements;
(function (Elements) {
    Elements.doge = '4paR4paR4paR4paR4paR4paR4paR4paR4paR4paE4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paR4paECuKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWjOKWkuKWiOKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWhOKWgOKWkuKWjArilpHilpHilpHilpHilpHilpHilpHilpHilozilpLilpLilojilpHilpHilpHilpHilpHilpHilpHilpHiloTiloDilpLilpLilpLilpAK4paR4paR4paR4paR4paR4paR4paR4paQ4paE4paA4paS4paS4paA4paA4paA4paA4paE4paE4paE4paA4paS4paS4paS4paS4paS4paQCuKWkeKWkeKWkeKWkeKWkeKWhOKWhOKWgOKWkuKWkeKWkuKWkuKWkuKWkuKWkuKWkuKWkuKWkuKWkuKWiOKWkuKWkuKWhOKWiOKWkuKWkArilpHilpHilpHiloTiloDilpLilpLilpLilpHilpHilpHilpLilpLilpLilpHilpHilpHilpLilpLilpLiloDilojilojiloDilpLilowK4paR4paR4paQ4paS4paS4paS4paE4paE4paS4paS4paS4paS4paR4paR4paR4paS4paS4paS4paS4paS4paS4paS4paA4paE4paS4paS4paMCuKWkeKWkeKWjOKWkeKWkeKWjOKWiOKWgOKWkuKWkuKWkuKWkuKWkuKWhOKWgOKWiOKWhOKWkuKWkuKWkuKWkuKWkuKWkuKWkuKWiOKWkuKWkArilpHilpDilpHilpHilpHilpLilpLilpLilpLilpLilpLilpLilpLilozilojilojiloDilpLilpLilpHilpHilpHilpLilpLilpLiloDiloTilowK4paR4paM4paR4paS4paE4paI4paI4paE4paS4paS4paS4paS4paS4paS4paS4paS4paS4paR4paR4paR4paR4paR4paR4paS4paS4paS4paS4paMCuKWjOKWkuKWgOKWkOKWhOKWiOKWhOKWiOKWjOKWhOKWkeKWgOKWkuKWkuKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkeKWkuKWkuKWkuKWkArilpDilpLilpLilpDiloDilpDiloDilpLilpHiloTiloTilpLiloTilpLilpLilpLilpLilpLilpLilpHilpLilpHilpLilpHilpLilpLilpLilpLilowK4paQ4paS4paS4paS4paA4paA4paE4paE4paS4paS4paS4paE4paS4paS4paS4paS4paS4paS4paS4paS4paR4paS4paR4paS4paR4paS4paS4paQCuKWkeKWjOKWkuKWkuKWkuKWkuKWkuKWkuKWgOKWgOKWgOKWkuKWkuKWkuKWkuKWkuKWkuKWkeKWkuKWkeKWkuKWkeKWkuKWkeKWkuKWkuKWkuKWjArilpHilpDilpLilpLilpLilpLilpLilpLilpLilpLilpLilpLilpLilpLilpLilpLilpHilpLilpHilpLilpHilpLilpLiloTilpLilpLilpAK4paR4paR4paA4paE4paS4paS4paS4paS4paS4paS4paS4paS4paS4paS4paS4paR4paS4paR4paS4paR4paS4paE4paS4paS4paS4paS4paMCuKWkeKWkeKWkeKWkeKWgOKWhOKWkuKWkuKWkuKWkuKWkuKWkuKWkuKWkuKWkuKWkuKWhOKWhOKWhOKWgOKWkuKWkuKWkuKWkuKWhOKWgArilpHilpHilpHilpHilpHilpHiloDiloTiloTiloTiloTiloTiloTiloDiloDiloDilpLilpLilpLilpLilpLiloTiloTiloAK4paR4paR4paR4paR4paR4paR4paR4paR4paR4paS4paS4paS4paS4paS4paS4paS4paS4paS4paS4paA4paA';
})(Elements || (Elements = {}));
/// <reference path="./elements.ts" />
// $ tsc --outFile main.js elements.ts main.ts
var ELEMENT_COLOR_BUTTON = document.getElementById('buttonChange');
var ELEMENT_COLOR_TEXT = document.getElementById('inputText');
var ELEMENT_COLOR_BOX = document.getElementById('colorBox');
if (ELEMENT_COLOR_BUTTON)
    ELEMENT_COLOR_BUTTON.addEventListener('click', changeColor);
function changeColor() {
    if (ELEMENT_COLOR_BOX)
        ELEMENT_COLOR_BOX.style.backgroundColor = ELEMENT_COLOR_TEXT.value;
}
function b64_to_utf8(str) {
    str = str.replace(/\s/g, '');
    return decodeURIComponent(escape(window.atob(str)));
}
if (ELEMENT_COLOR_BOX.firstElementChild)
    ELEMENT_COLOR_BOX.firstElementChild.innerHTML = b64_to_utf8(Elements.doge);
