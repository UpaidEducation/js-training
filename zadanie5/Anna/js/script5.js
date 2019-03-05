function convertHours() {
    var milisecond = document.getElementById("input").value;
    var hours = Math.floor(milisecond / 3600000);
    var minute = Math.floor(( milisecond % 3600000)  / 60000);
    var second = Math.floor((milisecond % 60000) / 1000);
    var miliseconds = milisecond % 1000;
    document.getElementById("div").innerHTML = hours + ":" + minute + ":" + second + ":" + miliseconds;
}

function converText() {
    var text = document.getElementById("input1").value;
    var newText = text.split("").sort().join("");
    document.getElementById("div1").innerHTML = newText;

}

//function findMaxPossibleSum() {
//let a = document.getElementById("input2").value;
//console.log(a);
//let b = document.getElementById("input3").value;
//console.log(b);
 

//for (i = 0; i < b; i++){
//    Math.max(a); 
     
//}
//}