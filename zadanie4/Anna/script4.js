function Reverse() {
    var originaltext = document.getElementById("input").value;
    var reversetext = originaltext.split("").reverse().join("");
    document.getElementById("input2").text = reversetext;
}