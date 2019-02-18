var animatedText = document.getElementById("animated-text");
function changeAnimation() {
    if (animatedText.classList[0] === "scroll-right") {
        animatedText.classList.remove("scroll-right");
        animatedText.classList.add("scroll-left");
    } else {
        animatedText.classList.remove("scroll-left");
        animatedText.classList.add("scroll-right");
    }
}
