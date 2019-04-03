var executedInterval

function animateRight(){
clearInterval(executedInterval);
executedInterval = window.setInterval(function(){animate(1);},1000);
}

function animateLeft(){
clearInterval(executedInterval);
executedInterval = window.setInterval(function(){animate(0);},1000);
}

function animate(int=-1){
    var divText = getDivText();
    if (int>0){
       divText = shiftRight(divText);
    }
    else if (int == 0){
      divText = shiftLeft(divText);
    }
    seNewText(divText);
    window.setTimeout(function(){},1000);
}

function shiftRight(text){
    return text.substring(text.length-1,text.length).concat(text.substring(0,text.length-1));
}

function shiftLeft(text){
    return text.substring(1,text.length).concat(text.substring(0,1));
}

function getDivText(){
    return document.getElementById("animate").innerHTML;
}

function seNewText(text){
    document.getElementById("animate").innerHTML = text;
}

