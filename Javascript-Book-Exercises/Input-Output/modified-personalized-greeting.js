/* 2. Modify the greeter.js program to ask for the user's first and 
   last names separately, then greet the user with their full name. */

let rlSync = require('readline-sync');
let firstName = rlSync.question("What's your first name? ");
let lastName = rlSync.question("What's your last name? ");
console.log(`Hello, ${firstName} ${lastName}!`);