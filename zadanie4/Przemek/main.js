var inputText = document.getElementById('content');

function revers() {
    var arrayTest = inputText.value.split('');
    var lengthArr = arrayTest.length;
    var reversArr = [lengthArr];
    var i=0;

    while (lengthArr--) {
        reversArr[i++] = nextChar(arrayTest[lengthArr]);
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
    return String.fromCharCode((char === "z" ? 97 : char === "Z" ? 65 : char.charCodeAt(0)) + 1);
}