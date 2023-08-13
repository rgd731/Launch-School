/* 3. Modify the age.js program you wrote in the exercises for the
   Variables chapter. The updated code should ask the user to enter
   their age instead of hard-coding the age in the program. */

let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you? '));
console.log(`You will be ${age + 10} in 10 years.`);
console.log(`You will be ${age + 20} in 20 years.`);
console.log(`You will be ${age + 30} in 30 years.`);
console.log(`You will be ${age + 40} in 40 years.`);