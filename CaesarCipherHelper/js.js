/* Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

For example:

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'
If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26]. */

var CaesarCipher = function(shift) {
    this.shift = shift;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
};

CaesarCipher.prototype.encode = function(str) {
    return str.toUpperCase().split('').map(char => this.shiftChar(char, this.shift)).join('');
};

CaesarCipher.prototype.decode = function(str) {
    return str.toUpperCase().split('').map(char => this.shiftChar(char, -this.shift)).join('');
};

CaesarCipher.prototype.shiftChar = function(char, shift) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const index = alphabet.indexOf(char);
    if (index === -1) return char;

    let newIndex = (index + shift) % 26;
    if (newIndex < 0) newIndex += 26;
    
    return alphabet[newIndex];
};