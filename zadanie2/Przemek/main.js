var intervalId;
var changePosition = addPosition(0);
var elementMoveOn = document.getElementById('moveIt');
function addPosition(reference) {
    return function (argument) {
        if (argument !== 0) {
            intervalId = setInterval(function() {
                elementMoveOn.style.left = (reference += argument) + 'px';
            }, 50);
        } else {
            clearInterval(intervalId);
            elementMoveOn.style.left = (reference += argument) + 'px';
        }
    }
}