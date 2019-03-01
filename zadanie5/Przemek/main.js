/*
* Function 1
*/
const dateInput = document.getElementById('date');
const sortStr = document.getElementById('sortString');
function timestampToDate() {
    let date = new Date(+dateInput.value);
    let dateResult=[];
    let regex = /^\d+$/;

    ['getHours', 'getMinutes', 'getSeconds', 'getMilliseconds'].forEach(function (item, index) {
        dateResult[index] = date[item]();
    });

    if (dateInput && regex.test(dateInput.value))
        dateInput.value = dateResult.join(":");
}

/*
* Function 2
*/
let sortString = (str) => str.split('').sort().join('');
if (sortStr.lastElementChild)
    sortStr.lastElementChild.innerText = sortString(sortStr.firstElementChild.textContent);


/*
* Function Advanced
*/
function findMaxPossibleSum(array, n) {
    let sum = 0;
    let arr = [];
    let sumArr = [];

    array.forEach(function(item, index) {
        arr = array.slice(index, n + index);
        sum = arr.reduce((a, b) => {
            return a + b;
        }, 0);
        if (arr.length === n)
            sumArr[index] = sum;
    });

    let content = Math.max.apply(null, sumArr);
    if (array.length < n)
        content = "This operation can not be done";

    return content;
}

let maxSum = document.getElementById('maxSum');
if (maxSum.lastElementChild)
    maxSum.lastElementChild.textContent = findMaxPossibleSum([1, 2, 3, -4, 5, -6, 7, 8, -9], 4).toString();

