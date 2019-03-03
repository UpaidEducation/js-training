/*
* Function 1
*/
const dateInput = document.getElementById('dateInput').valueOf();

function timestampToDate() {
    let date = new Date(+dateInput.value);
    let dateResult=[];
    let regex = /^\d+$/;

    ['getHours', 'getMinutes', 'getSeconds', 'getMilliseconds'].forEach(function(item, index) {
        dateResult[index] = date[item]();
    });

    if (dateInput && regex.test(dateInput.value))
        dateInput.value = dateResult.join(":");
}

/*
* Function 2
*/
const sortStr = document.getElementById('sortString');
const sortInput = document.getElementById('sortInput');

let sortString = (str) => str.split('').sort().join('');
function sort() {
    if (sortStr.lastElementChild && sortInput)
        sortStr.lastElementChild.innerText = sortString(sortInput.value);
}

/*
* Function Advanced
*/
function findMaxPossibleSum(arrayStr, n) {
    let sum = 0;
    let arr = [];
    let sumArr = [];
    let array = arrayStr.map(function(str) {
        return parseInt(str);
    });

    array.forEach(function(item, index) {
        arr = array.slice(index, n + index);
        sum = arr.reduce((a, b) => {
            return a + b;
        }, 0);
        if (arr.length === n)
            sumArr[index] = sum;
    });

    return arrayStr.length < n ?
        'This operation can not be done' :
        Math.max(...sumArr);
}

const maxSumInput = document.getElementById('maxSumInput');
const nInput = document.getElementById('nInput');
const maxSum = document.getElementById('maxSum');

function calc() {
    if (maxSum.lastElementChild)
        maxSum.lastElementChild.textContent = findMaxPossibleSum(
            maxSumInput.value.split(","),
            +nInput.value
        ).toString();
}