const weirdSumInput = document.querySelector('#func-2');
const weirdSumResult = document.querySelector('.func-2');

weirdSumInput.addEventListener('input', calculateWeirdSum);

function calculateWeirdSum() {
    const userValue = +this.value;
    if (!Number.isPositiveInteger(userValue)) {
        weirdSumResult.innerText = '';
        return;
    }

    let calculationString = this.value;
    for (let i = 2; i <= userValue; i = i * 2) {
        calculationString += ` + ${userValue}/${i}`;
    }

    const result = eval(calculationString);
    return weirdSumResult.innerText = `Result: ${calculationString} = ${result} (Floored: ${Math.floor(result)})`;
}