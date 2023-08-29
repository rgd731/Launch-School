const readline = require('readline-sync');
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

let currentAge = readline.question("What is your age? ");
let ageToRetire = readline.question("At what age would you like to retire? ");
let workYearsLeft = ageToRetire - currentAge;

console.log(`It's ${currentYear}. You will retire in ${currentYear + (workYearsLeft)}`);
console.log(`You have only ${workYearsLeft} to go!`);