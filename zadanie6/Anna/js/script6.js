//zad1

function createPalindrom () {
    a = document.getElementById("textInput").value;
    aArray = a.split('')
    aDelete = aArray.splice(length-1, 1)
    b = aArray.reverse().join('');
    
    if (a === b) {
        textOutput.innerHTML = a;
     }  else {
        textOutput.innerHTML = a + b;
    }
    
}

// zad2

function createSum() {
    const n = Math.floor(Math.abs(nInput.value));
    console.log(n);

    let i = 1;
    let sum = 0;
    while (i <= n){
        sum += parseInt(n/i);
        i*=2;
    }

    nOutput.innerHTML = sum;
}