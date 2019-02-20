
var animDiv = document.getElementById('animationDiv');

    function animationFunction(x) {
        var motto = animDiv.innerHTML.split('');
        const length = motto.length;
        console.log(motto);
        if(x === 'right') {
            motto.unshift(motto.pop());
        }else {
            motto.push(motto.shift());
        }
        animDiv.innerHTML = motto.join('');

        setTimeout(function () {
            animDiv.innerHTML = motto.join('');
            animationFunction(x);

        }, 117);
    }

    // const last = motto[lenghtOfMotto-1];
    // let first = motto[0];
    // console.log(last);
    // if(length === 0) {
    //     let newMotto = motto.join('');
    //     console.log(newMotto);
    //     animDiv.innerHTML = newMotto;
    //     // animationFunction(x,lenghtOfMotto)
    // } else if (length < 2){
    //     motto[0] = last;
    //     motto[1] = first;
    //     let newMotto = motto.join('');
    //     console.log(newMotto);
    //     animDiv.innerHTML = newMotto;
    //     animationFunction(x, 0)
    // } else {
    //     motto[length-1] = motto[length-2];
    //     animationFunction(x, length-1);
    // }
