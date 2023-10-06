function fibonacci(index) {
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



console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050