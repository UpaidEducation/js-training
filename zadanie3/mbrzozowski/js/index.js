var main = (function(){

var yearIn = document.getElementById("yearIn");

function displayResult(text){
document.getElementById('resultOut').innerHTML = text;
}

yearIn.addEventListener('change',function(){
    if (!isNaN(yearIn.value)){
        if ((yearIn.value % 4)!==0) {
            return displayResult('common year');
            }
        else if ((yearIn.value % 100)!==0) {
            return displayResult('leap year');
            }
        else if ((yearIn.value % 400)!==0) {
            return displayResult('common year');
            }
        else {
            return displayResult('leap year');
            }
    }else{
    return displayResult('Not a number');
    }
});
})();