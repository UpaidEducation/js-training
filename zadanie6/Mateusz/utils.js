Number.isPositiveInteger = function(value) {
    if (!value || this.isNaN(value) || !this.isInteger(value) || value < 0) {
        return false;
    }
    return true;
}

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}