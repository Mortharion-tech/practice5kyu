/* Write a function called LCS that accepts two sequences and returns the longest subsequence common to the passed in sequences.

Subsequence
A subsequence is different from a substring. The terms of a subsequence need not be consecutive terms of the original sequence.

Example subsequence
Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc" and "abc".

LCS examples
LCS( "abcdef" , "abc" ) => returns "abc"
LCS( "abcdef" , "acf" ) => returns "acf"
LCS( "132535365" , "123456789" ) => returns "12356"
Notes
Both arguments will be strings
Return value must be a string
Return an empty string if there exists no common subsequence
Both arguments will have one or more characters (in JavaScript)
All tests will only have a single longest common subsequence. Don't worry about cases such as LCS( "1234", "3412" ), which would have two possible longest common subsequences: "12" and "34". */

function LCS(x, y) {
    const m = x.length;
    const n = y.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(''));
  
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (x[i - 1] === y[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + x[i - 1];
        } else {
          dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ? dp[i - 1][j] : dp[i][j - 1];
        }
      }
    }
  
    return dp[m][n];
}

/* 
const LCS = (x, y) => y.replace(/./g, val => ~x.indexOf(val) ? (x = x.slice(x.indexOf(val) + 1), val) : ``);
 */