/*Let's create a function that uses recursion to calculate
 the nth number in the Fibonacci sequence. Each number in 
 this sequence is the sum of the previous two numbers in the sequence: */

function fibonacci (nthNum) {
  if (nthNum < 2) return nthNum;
  return fibonacci(nthNum-1) + fibonacci(nthNum-2)
}