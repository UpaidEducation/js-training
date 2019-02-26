//var textContener = document.getElementById("contener").textContent;

var animation;

var textContener = "Java Script jest zajebisty ! "

function AnimationTextLeft(textContener){
  console.log(textContener);
if (textContener === '') return '';
 animation = setTimeout (function() {
  document.getElementById("contener").textContent = textContener.substring(1) + textContener[0];
  AnimationTextLeft(textContener.substring(1) + textContener[0]);
}, 100);
}

function myStopFunction() {
  clearTimeout(animation);
}

clearTimeout(animation);

function AnimationTextRight(textContener){
  console.log(textContener);
  if (textContener === '') return '';
   animation = setTimeout (function() {
    document.getElementById("contener").textContent = textContener[28] + textContener.substring(0);
    AnimationTextRight(textContener[28] + textContener.substring(0));
  }, 100);
  }

 