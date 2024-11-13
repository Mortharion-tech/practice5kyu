/* The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

Hint:
See Fibonacci sequence

Ref:
http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

perimeter(5)  should return 80
perimeter(7)  should return 216 */

function perimeter(n) {
    let fibNums = fibonacci(n);
    return (fibNums.reduce((a,b)=>a+b, 0)) * 4;
  }
  
  function fibonacci(n) {
    if (n===0) return [1];
    let fib = [1,1];
    if (n===1) return fib;
    for (let i=2; i<=n; i++) {
      fib.push(fib[i-1] + fib[i-2]);
    }
    return fib;
}

/* 
const perimeter=(a,b=(c,d=1,e=0)=>c?d+b(--c,d+e,d):d)=>b(a)*4;
 */