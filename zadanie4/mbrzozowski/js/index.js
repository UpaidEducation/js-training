var reverse = (function(){
var text = document.getElementById('textIn');
var nextChar = document.getElementById('nextLetter');

document.getElementById('reverse').addEventListener('click',function(){
    text.value = text.value.split("").reverse().join("");
    nextChar.innerHTML = nextLetter(text.value);
});

function nextLetter(text){
var textArray = text.split("");
textArray.forEach(function(currentValue, index, arr){
    var charCode = arr[index].charCodeAt(0) ;
    if ((charCode <= 90 && charCode >= 65) || (charCode <= 122 && charCode >= 97)){
        charCode++;
        if ((charCode == 91) || (charCode == 123)){
            charCode -= 26;
        }
    }
    arr[index] = String.fromCharCode(charCode);
    });
return textArray.join("");
}
})();