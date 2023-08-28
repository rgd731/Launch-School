/* Write a program that asks the user to enter an integer greater than 0, then asks
   whether the user wants to determine the sum or the product of all numbers between 1
   and the entered integer, inclusive.
 */
const readline = require("readline-sync");

let target = readline.question("Please enter an integer greater than 0: ");
let operation = readline.question("Enter 's' to computer the sum, or 'p' to computer the product: ");

function computerSum (target) {
  let solution = 0;

  for (let i = 1;i <= target;i++) {
    solution += i;
  }
  return solution;
}
function computerProduct (target) {
  let solution = 1;

  for (let i = 1;i <= target;i++) {
    solution *= i;
  }
  return solution;
}

if (operation === 's') {
  console.log(`The sum of the integers between 1 and ${target} is ${computerSum(target)}`);
} else {
  console.log(`The product of the the integers between 1 and ${target} is ${computerProduct(target)}`);
}

