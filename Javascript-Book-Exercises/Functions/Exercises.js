/* 1. What does this code log to the console? Does executing
   the foo function affect the output? Why or why not? */

let bar = 1;
function foo() {
  let bar = 2;
}
   
foo();
console.log(bar); //prints 1. The inner 'bar' is declared, creating a new local 'bar' not affecting global 'bar'. 

/* 3. Write a program that uses a multiply function to multiply two numbers and returns the result.
   Ask the user to enter the two numbers, then output the numbers and result as a simple equation. */

let rlSync = require('readline-sync');

let multiply = (a,b) => a * b;
let askNumber = () => {
  let firstNum = Number(rlSync.question("What's your first number? "));
  let secondNum = Number(rlSync.question("what's your second number? "));
  return [firstNum, secondNum];
}

let [firstNum, secondNum] = askNumber();
console.log(multiply(firstNum,secondNum));

/* 4. What does the following code log to the console? */

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee'); //It should log nothing, since the function returns before it gets to console.log()

/* 5. What does the following code log to the console? */

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee'); //Logs nothing, value 'Yipeee!!!!' is returned but not logged. Rookie mistake

/* 6. In the code shown below, identify the following items:

the function arguments    =  2, 3, 4
the function body         =  Lines 57 & 58
the function declaration  =  Lines 56-59
the function invocation   =  let product = multiplyNumbers(2, 3, 4);
the function name         =  multiplyNumbers
the function parameters   =  num1, num2, num3
the function return value =  24
the names of all variables in this program */

function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}

let product = multiplyNumbers(2, 3, 4);

/* 7. Without running the following code, what do you think it will output? */

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello'); //Logs "Hello" followed by "undefined", because qux was left undefined

/* 8. Without running the following code, what do you think it will output? */

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718); //Logs 42 followed by 3.1415. The last argument is ignored.

/* 9. Identify all of the variables named on each line of the following code. 
   You may assume that question is the name of a built-in function in JavaScript
   (it is not, so this code won't work as written). */

/* 10. Using the code from Exercise 9, classify each variable name as either global or local.
   For our purposes here, you may assume that the code from Exercise 9 is the entire program. */

function multiply(left, right) {        // global: multiply local: left, right
  let product = left * right;           // local: product, left, right
  return product;                       // local: product
}
  
function getNumber(prompt) {            // global: getNumber local: prompt
  return parseFloat(question(prompt));  // global: parseFloat, question local: prompt
}
  
let left = getNumber('Enter the first number: ');              // global: left, getNumber
let right = getNumber('Enter the second number: ');            // global: right, getNumber
console.log(`${left} * ${right} = ${multiply(left, right)}`);  // global: console, left, right, multiply

/* 11. Using the code from Exercise 9, are the left and right variables on lines 1 and
   2 the same as the left and right variables on lines 10-12? Explain your reasoning. */

/* No, the variables on lines 1-2 are parameters for a function, so they're local variables to be used only in that function
   the variables near the bottom, in contrast, are declared in the global scope, they will exist until the end of the program */