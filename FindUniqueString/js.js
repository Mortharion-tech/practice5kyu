/* There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings. */

function findUniq(arr) {
    const normalize = str => [...new Set(str.toLowerCase().replace(/\s+/g, ''))].sort().join('');
  
    const normalizedArr = arr.map(normalize);
    const uniqueValues = new Set(normalizedArr);
    
    for (const unique of uniqueValues) {
      const count = normalizedArr.filter(item => item === unique).length;
      if (count === 1) {
        return arr[normalizedArr.indexOf(unique)];
      }
    }
}