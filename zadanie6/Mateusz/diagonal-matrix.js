const matrixInput = document.querySelector('#func-3');
const matrixNode = document.querySelector('.func-3.matrix');
const matrixResult = document.querySelector('.func-3.result');

matrixInput.addEventListener('input', updateMatrixFields);

function isDiagonalMatrix() {
    try {
        const matrix = getMatrix();
        for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
            for (let colIdx = 0; colIdx < matrix.length; colIdx++) {
                if (rowIdx !== colIdx && matrix[rowIdx][colIdx] !== 0) {
                    matrixResult.innerText = 'This IS NOT a diagonal matrix.';
                    return;
                }
            }
        }

        matrixResult.innerText = 'This matrix IS diagonal.';
    } catch (err) {
        matrixResult.innerText = err;
    }
}

function updateMatrixFields() {
    const iterations = +this.value;

    // Clear listeners and nodes
    matrixResult.innerText = '';
    if (matrixNode.childNodes.length > 0) {
        matrixNode.childNodes.forEach(row => {
            row.childNodes.forEach(field => {
                field.removeEventListener('input', isDiagonalMatrix);
            });
        });
        matrixNode.innerHTML = '';
    }

    // Check if user's input is correct
    if (!Number.isPositiveInteger(iterations)) return;
    if (iterations > 20) {
        matrixNode.innerText = 'Woah, relax there, 20 is enough.';
        return;
    }

    // Create new nodes and set listeners
    for (let i = 0; i < iterations; i++) {
        const matrixRow = document.createElement('div');
        for (let y = 0; y < iterations; y++) {
            const field = document.createElement('input');
            field.type = 'number';
            field.addEventListener('input', isDiagonalMatrix);
            field.value = 0;
            matrixRow.appendChild(field);
        }
        matrixNode.appendChild(matrixRow);
    }

    // Print result immediately for better UX
    isDiagonalMatrix();
}

function getMatrix() {
    if (matrixNode.childNodes.length === 0) throw 'Matrix fields not found.';

    const matrix = [];
    matrixNode.childNodes.forEach(rowNode => {
        const row = [];
        rowNode.childNodes.forEach(fieldNode => {
            if (fieldNode.value === '' || Number.isNaN(+fieldNode.value)) {
                throw 'All matrix fields must specify a number.';
            }
            row.push(+fieldNode.value);
        });
        matrix.push(row);
    });

    return matrix;
}