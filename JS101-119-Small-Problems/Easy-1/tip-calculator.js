/* Create a simple tip calculator. The program should prompt for a bill amount
   and a tip rate. The program must compute the tip, and then log both the tip
   and the total amount of the bill to the console. You can ignore input
   validation and assume that the user will enter numbers.
*/

const readline = require('readline-sync');

let billAmount = Number(readline.question("What is the bill? "));
let tipPercentage = Number(readline.question("What is the tip percentage? "));
let tip = Number((billAmount * (tipPercentage / 100)).toFixed(2));

console.log(`The tip is $${tip}`);
console.log(`The total is $${billAmount + tip}`);
