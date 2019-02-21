function isNumeric(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function isLeapYear(event) {
    if (isNumeric(event)) {
        var year = event.srcElement.value;
        if (year.length >= 4) {

            var content = {
                color: "#ff0000",
                desc: "Nope"
            };

            if (year < 1582)
                content = {color: "#de9c00", desc: "Year must be greater than 1581"};
            else if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
                content = {color: "#53af1c", desc: "Yep"};

            var leapYearBox = document.getElementById('isLeapYear');
            if (leapYearBox) {
                leapYearBox.style.backgroundColor = content.color;
                leapYearBox.innerText = content.desc;
            }
        }
    }
}