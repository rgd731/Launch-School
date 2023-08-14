/* 2. In the exercises for the previous chapter, you wrote a dynamic greeter program named
   greeter.js. Add a function to this program that solicits the user's first and 
   last names in separate invocations; the function should return the appropriate
   name as a string. Use the return values to greet the user with their full name. */

let rlSync = require("readline-sync");
function getName () {
let firstName = rlSync.question("What's your first name? ");
let lastName = rlSync.question("What's your last name? ");
return (firstName + " " + lastName);
}

userName = askName();
console.log(`Good morning, ${userName}`)
console.log(`Good afternoon, ${userName}`)
console.log(`Good evening, ${userName}`)

  