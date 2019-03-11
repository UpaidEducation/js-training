const calculatorNode = document.querySelector('.calculator');
const outputNode = document.createElement('input');
const controlsNode = document.createElement('div');

outputNode.classList.add('calc-output');
outputNode.disabled = true;
controlsNode.classList.add('calc-controls');

const topControlsNode = document.createElement('div');
const bottomControlsNode = document.createElement('div');

topControlsNode.classList.add('calc-controls__top');
bottomControlsNode.classList.add('calc-controls__bottom');

const operators = ['+', '-', '*', '/'];
operators.forEach(operator => topControlsNode.appendChild(createButton(operator, pushOperator)));

const digitsNode = document.createElement('div');
for (let i = 9; i >= 0; i--) digitsNode.appendChild(createButton(i, patch));
digitsNode.append(createButton('C', clear), createButton('←', backspace));
bottomControlsNode.append(digitsNode, createButton('=', evaluate));

controlsNode.append(topControlsNode, bottomControlsNode);
calculatorNode.append(outputNode, controlsNode);

function pushOperator(operator) {
    if (outputNode.value === '-') return;

    if (!outputNode.value) {
        if (operator === '-') patch(operator);
        return;
    }

    const lastCharacter = outputNode.value.slice(-1);
    if (operator !== '=' && Number.isNaN(+lastCharacter)) {
        backspace();
    }

    patch(operator);
}

function evaluate() {
    if (!outputNode.value) return;
    try {
        outputNode.value = eval(outputNode.value);
    } catch (err) {
        if (!outputNode.classList.contains('error-flash')) {
            outputNode.classList.add('error-flash');
            setTimeout(() => outputNode.classList.remove('error-flash'), 250);
        }
    }
}

function patch(value) {
    outputNode.value += value;
}

function backspace() {
    if (!outputNode.value) return;
    outputNode.value = outputNode.value.slice(0, -1);
}

function clear() {
    outputNode.value = '';
}

function createButton(innerText, onClick) {
    const button = document.createElement('button');
    button.innerText = innerText;
    button.addEventListener('click', () => onClick.call(button, innerText));
    return button;
}