/* At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 should be in the same order as in s.

The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears */

function isMerge(s, part1, part2) {
    if (!s && !part1 && !part2) return true;
  
    if (s.length !== part1.length + part2.length) return false;
  
    const dp = Array(part1.length + 1).fill(false).map(() => Array(part2.length + 1).fill(false));
  
    dp[0][0] = true;
  
    for (let i = 1; i <= part1.length; i++) {
      dp[i][0] = dp[i - 1][0] && part1[i - 1] === s[i - 1];
    }
    for (let j = 1; j <= part2.length; j++) {
      dp[0][j] = dp[0][j - 1] && part2[j - 1] === s[j - 1];
    }
  
    for (let i = 1; i <= part1.length; i++) {
      for (let j = 1; j <= part2.length; j++) {
        dp[i][j] = (dp[i - 1][j] && part1[i - 1] === s[i + j - 1]) || (dp[i][j - 1] && part2[j - 1] === s[i + j - 1]);
      }
    }
  
    return dp[part1.length][part2.length];
}

/* const isMerge = (s, part1, part2) =>
    (fn => !s ? !(part1 || part2) : fn(part1, part2) || fn(part2, part1))
    ((p1, p2) => s[0] === p1[0] && isMerge(s.slice(1), p1.slice(1), p2)); */