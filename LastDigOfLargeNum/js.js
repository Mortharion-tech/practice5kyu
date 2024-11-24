/* Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b.
Note that a and b may be very large!

For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969.
The last decimal digit of (2^200)^2^300, which has over 10^92 decimal digits, is 6.
Also, please take 0^0 to be 1.

You may assume that the input will always be valid.

Examples
lastDigit(4n, 1n)            // returns 4n
lastDigit(4n, 2n)            // returns 6n
lastDigit(9n, 7n)            // returns 9n  
lastDigit(10n,10000000000n)  // returns 0n */

function lastDigit(a, b) {
    if (b === 0n) return 1n;
    const lastDigitA = a % 10n;
    if (lastDigitA === 0n || lastDigitA === 1n || lastDigitA === 5n || lastDigitA === 6n) return lastDigitA;
    const patternMap = {
      2: [2n, 4n, 8n, 6n],
      3: [3n, 9n, 7n, 1n],
      4: [4n, 6n],
      7: [7n, 9n, 3n, 1n],
      8: [8n, 4n, 2n, 6n],
      9: [9n, 1n]
    };
    const pattern = patternMap[Number(lastDigitA)];
    const patternLength = BigInt(pattern.length);
    const index = (b % patternLength) - 1n;
    return pattern[Number(index < 0n ? index + patternLength : index)];
}

/* 
const lastDigit = (a, b) => b === 0n ? 1n : BigInt((Number(a % 10n) ** Number(b % 4n === 0n ? 4n : b % 4n))) % 10n;
 */