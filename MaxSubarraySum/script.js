/* The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray. */

const maxSequence = function(arr) {
    if (arr.length===0 || arr.every(num=>num<=0)) return 0;
    let maxSum = 0;
    let subSum = 0;
    for (const num of arr) {
      subSum = Math.max(subSum+num, num);
      if (subSum > maxSum) {
        maxSum = subSum;
      }
    }
    return maxSum;
}