var container = document.getElementById('container');

function checkYear() {
    var year = document.getElementById('year').value;
    console.log(year);
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        container.innerText = 'YES';
    } else {
        container.innerText = 'NO';
    }
    console.log(container.innerHTML);
}
