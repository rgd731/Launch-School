/* 
  Write a function that calculates and returns the index of the first Fibonacci number
  that has the number of digits specified by the argument. (The first Fibonacci 
  number has an index of 1.)

  You may assume that the argument is always an integer greater than or equal to 2.
*/

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.

function findFibonacciIndexByLength (numDigits) {
  let index = 2;
  let previousNum1 = 1n;
  let previousNum2 = 1n;
  let calculatedFibonacciNum = 0n;

  while (calculatedFibonacciNum.toString().length < numDigits) {
    calculatedFibonacciNum = previousNum1 + previousNum2;
    previousNum1 = previousNum2;
    previousNum2 = calculatedFibonacciNum;
    index += 1;
}
  return BigInt(index);
}


