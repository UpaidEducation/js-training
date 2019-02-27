function Reverse() {
    console.log(originaltext);
    var originaltext = document.getElementById("input").value;
    var reversetext = originaltext.split("").reverse().join("");
    console.log(reversetext);
    document.getElementById("div").innerHTML = reversetext;
}