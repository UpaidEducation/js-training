var intervalId;
var changePosition = addPosition(0);
var firstSpan = document.getElementById('firstSpan');
var secondSpan = document.getElementById('secondSpan');
var textWidth = firstSpan.offsetWidth;
var textHalfWidth = textWidth / 2;

function addPosition(reference) {
    return function (argument) {
        function setPosition() {
            if(secondSpan.offsetLeft >= textWidth)
                reference = reference - textHalfWidth;
            else if (secondSpan.offsetLeft < 0)
                reference = reference + textHalfWidth;

            secondSpan.style.left = (reference += argument) + 'px';
            firstSpan.style.left = ((reference += argument)-textWidth) + 'px';
        }

        if (argument !== 0) {
            intervalId = setInterval(function() {
                setPosition();

            }, 50);
        } else {
            clearInterval(intervalId);
            setPosition();
        }
    }
}