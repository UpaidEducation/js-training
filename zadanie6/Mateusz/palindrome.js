const palindromeInput = document.querySelector('#func-1');
const palindromeResult = document.querySelector('.func-1');

palindromeInput.addEventListener('input', printPalindrome);

function printPalindrome() {
    if (!this.value || this.value.trim().length === 0) {
        palindromeResult.innerText = '';
        return;
    }

    palindromeResult.innerText = `Result: ${makePalindrome(this.value)}`;
}

function makePalindrome(str) {
    let found = false, end = str.length - 1;
    let sliceAt = end;

    for (let i = 0; i < end; i++) {
        if (str.charAt(i) === str.charAt(end)) {
            found = true;
            end--;
            if (sliceAt > i) sliceAt = i;
        } else {
            if (found) {
                found = false;
                i--;
            }
            end = str.length - 1;
            sliceAt = end;
        }
    }

    return str + str.slice(0, sliceAt).reverse();
}

palindromeInput.focus();