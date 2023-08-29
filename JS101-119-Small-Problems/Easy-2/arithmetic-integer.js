/*
  Write a program that prompts the user for two positive integers, and then prints
  the results of the following operations on those two numbers: addition, subtraction,
  product, quotient, remainder, and power. Do not worry about validating the input.
*/

const readline = require("readline-sync");

let firstNum = Number(readline.question("Enter the first number: "));
let secondNum = Number(readline.question("Enter the second number: "));

console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
console.log(`${firstNum} / ${secondNum} = ${Math.floor(firstNum / secondNum)}`);
console.log(`${firstNum} % ${secondNum} = ${firstNum % secondNum}`);
console.log(`${firstNum} ** ${secondNum} = ${firstNum ** secondNum}`);

