var intervalId;
var changePosition = addPosition(0);
var firstSpan = document.getElementById('firstSpan');
var secondSpan = document.getElementById('secondSpan');
var textWidth = firstSpan.offsetWidth;

function addPosition(reference) {
    return function (argument) {
        function setPosition() {
            if(secondSpan.offsetLeft >= textWidth)
                reference = reference - textWidth;
            else if (secondSpan.offsetLeft < 0)
                reference = reference + textWidth;

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