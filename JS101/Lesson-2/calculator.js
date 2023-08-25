const readline = require("readline-sync");
const messages = require("./calculator-messages.json");
const LANGUAGE = 'en';

function prompt(msg) {
  process.stdout.write(`${msg}\n> `);
}
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

console.log(messages[LANGUAGE]["welcome"]);

// Ask the user for the first number.
while (true) {
  prompt(messages[LANGUAGE]["firstNumber"]);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages[LANGUAGE]["invalidNumber"]);
    number1 = readline.question();
  }

  // Ask the user for the second number.

  prompt(messages[LANGUAGE]["secondNumber"]);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages[LANGUAGE]["invalidNumber"]);
    number2 = readline.question();
  }

  // Ask the user for an operation to perform.

  prompt(messages[LANGUAGE]["askOperation"]);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages[LANGUAGE]["invalidOperation"]);
    operation = readline.question();
  }

  // Perform the operation on the two numbers.

  let output;
  switch (Number(operation)) {
    case 1:
      output = Number(number1) + Number(number2);
      break;
    case 2:
      output = Number(number1) - Number(number2);
      break;
    case 3:
      output = Number(number1) * Number(number2);
      break;
    case 4:
      output = (Number(number1) / Number(number2)).toFixed(3);
      break;
    default:
      prompt("Error!");
  }

  // Print the result to the terminal.

  console.log(messages[LANGUAGE]["displayResult"] + output);

  prompt(messages[LANGUAGE]["askContinue"]);
  let answer = readline.question();
  if (answer === 'n') {
    break;
  }
}
