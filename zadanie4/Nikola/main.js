
var textInput = document.getElementById('textInput');
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a"];

    function reverseWord() {

        var text = textInput.value;
        var reversedText = [];

        for( i = text.length - 1; i >= 0 ; i--) {
            reversedText += text[i];
        }
        textInput.value = reversedText;
    }

    function encodeWord() {
        var text = textInput.value;
        var encodedText = [];

        for( i = 0; i < text.length; i++ ) {
            encodedText += alphabet[alphabet.indexOf(text[i])+1];
        }
        textInput.value = encodedText;
    }

