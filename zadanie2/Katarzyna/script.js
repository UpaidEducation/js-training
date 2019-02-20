var animatedText = 'sample text ';
document.getElementById('app-text').innerHTML = animatedText;

function moveLeft(animatedText) {
    var newText = newText + animatedText.charAt(0);


    if (animatedText === '') {

    }

    animatedText = animatedText.substr(1, animatedText.length);


    console.log(animatedText.substr(1, animatedText.length));

    document.getElementById('app-text').innerHTML = animatedText + newText;

    return moveLeft(animatedText.substr(1, animatedText.length) + animatedText.charAt(0));

}

function moveRight(animatedText) {
    animatedText = document.getElementById('app-text').innerHTML;
}