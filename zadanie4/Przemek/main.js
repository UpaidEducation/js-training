var inputText = document.getElementById('content');

function revers() {
    var arrayText = inputText.value.split('');
    var lengthArr = arrayText.length;
    var reversArr = [lengthArr];
    var i=0;

    while (lengthArr--) {
        reversArr[i++] = nextChar(arrayText[lengthArr]);
        if (lengthArr === 0) break;
    }

    if (inputText)
        inputText.value = reversArr[0] ? reversArr.join('') : "";
}

function isAlphabet(event) {
    var regex = /[a-zA-Z]+/g;
    return regex.test(event.key);
}

function nextChar(char) {
    return String.fromCharCode(
        char === "z" ? ("a").charCodeAt(0) :
           char === "Z" ? ("A").charCodeAt(0) :
               char.charCodeAt(0) + 1
    );
}