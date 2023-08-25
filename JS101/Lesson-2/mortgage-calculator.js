const readline = require("readline-sync");

function prompt(msg,additionalString = '') {
  process.stdout.write(`${msg}\n> `);
  return readline.question(additionalString);
}
function isInvalidNumber(number) {
  return number.trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

console.log("Welcome the the Mortgage Calculator!");
console.log("This program will you help you find your monthly payment!");

let loanAmount = prompt("What is your loan amount?", "$ ");
while (isInvalidNumber(loanAmount)) {
  console.log("Please enter a positive number");
  loanAmount = prompt("what is your loan amount?", "$ ")
}
let monthlyInterestRate = (prompt("What is your annual interest rate?")) / 12;
let loanDurationMonths = (prompt("What is your loan duration in years?")) * 12;

let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));

console.log(`You're monthly loan payment will be $${monthlyPayment.toFixed(2)}`)
