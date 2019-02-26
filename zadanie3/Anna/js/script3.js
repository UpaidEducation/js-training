

function CheckYear() {
    var year = document.getElementById("input").value;
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        document.getElementById("contener").textContent = "Przystępny";
    } else {
        document.getElementById("contener").textContent = "Nieprzystępny"; 
    }
}