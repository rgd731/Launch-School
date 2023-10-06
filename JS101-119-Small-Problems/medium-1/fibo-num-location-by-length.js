console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.

function findFibonacciIndexByLength(length) {
  let term = 0n;
  let fiboNum = 0n;
  do {
    term += 1n;
    fiboNum = fibonacciNumByIndex(index);
  } while (String(fiboNum).length < length)

  return index;
}

function fibonacciNumByIndex(index) {
  let fiboNum = 1;
  let lastTerm = 1;
  let twoTermsBack = 1;
  
  for (let count = 3; count <= index; count += 1) {
    twoTermsBack = lastTerm;
    lastTerm = fiboNum;

    fiboNum = lastTerm + twoTermsBack;
  }

  return fiboNum;
}



