/* Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False */

function scramble(str1, str2) {
    if (str2.length > str1.length) {
        return false;
    }
    const charCount = new Array(26).fill(0);
    for (const char of str1) {
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (const char of str2) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        if (charCount[index] > 0) {
            charCount[index]--;
        } else {
            return false;
        }
    }
    return true;
}