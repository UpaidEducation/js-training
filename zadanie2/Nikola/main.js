
var animDiv = document.getElementById('animationDiv');
var id;

    function animationFunction(x) {
        if(id) {
            clearTimeout(id);
        }
        var motto = animDiv.innerHTML.split('');
        if(x === 'right') {
            motto.unshift(motto.pop());
        }else {
            motto.push(motto.shift());
        }
        animDiv.innerHTML = motto.join('');

        
        id = setTimeout(function () {
            animDiv.innerHTML = motto.join('');
            animationFunction(x);
        }, 117);

    }

