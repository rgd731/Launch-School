/* 1. What does this code log to the console? Why? */

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);
/* Logs [1,4,3] since both arrays hold the same pointer to the same object,
   mutating one array will mutate the other. */

/* 2. What do the following error message and stack trace tell you?

$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5) */

//Tells me that greeting is not defined within the hello function called in the exercise2.js file.

/* 3. Write some code to output the square root of 37. */

console.log(Math.sqrt(37));

/* 4. Given a list of numbers, write some code to find and display
   the largest numeric value in the list. 
List	        Max
1, 6, 3, 2	     6
-1, -6, -3, -2	-1
2, 2	         2 */

console.log(Math.max(1,6,3,2));
console.log(Math.max(-1,-6,-3,-2));
console.log(Math.max(2,2));

/* 5. What does the following function do? 

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}  */

//Function creates an array of words, reverses the order,and returns a new array of the word lengths

/* 6. Write a function that searches an array of strings for every element that matches the 
  regular expression given by its argument. The function should return all matching 
  elements in an array. */

function allMatches(stringArr,regex) {
  return stringArr.filter(word => regex.test(word));
}

  let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

/* 7. What is exception handling and what does it solve? */

/* Since real world applications have to handle unforseen or exceptional circumstances,
   exception handling can be used to handle errors that may arise during runtime. */

/* 8.  */
/* 9.  */
/* 10.  */