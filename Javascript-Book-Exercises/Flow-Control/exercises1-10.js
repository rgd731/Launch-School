/* 1. What values do the following expressions evaluate to? */

false || (true && false);      // false
true || (1 + 2);               // true
(1 + 2) || true;               // 3
true && (1 + 2);               // 3
false && (1 + 2);              // false
(1 + 2) && true;               // true
(32 * 4) >= 129;               // false
false !== !true;               // false
true === 4;                    // false
false === (847 === '847');     // true
false === (847 == '847');      // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;  // true

/* 2. Write a function, evenOrOdd, that determines whether its argument is an even number. 
   If it is, the function should log 'even' to the console; otherwise, it should log 'odd'.
   For now, assume that the argument is always an integer. */

function evenOrOdd(num) {
  if (num % 2) {
      console.log('odd');
  } else {
      console.log('even');
  }
}

/* 3.Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that 
   the argument is an integer. If it isn't, the function should issue an error message and return. */

function modifiedEvenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('Error: argument is not an integer.')
  } else if (num % 2) {
    console.log('odd');
  } else {
    console.log('even');
  }
}

/* 4. What does the following code log to the console, and why? */

function barCodeScanner(serial) {
    switch (serial) {
      case '123':
        console.log('Product1');
      case '113':
        console.log('Product2');
      case '142':
        console.log('Product3');
      default:
        console.log('Product not found!');
    }
  }
  
  barCodeScanner('113'); //Logs 'Product2', 'Product', and 'Product not found!' since code lacks break statements

  /* 5. Refactor this statement to use an if statement instead.
     return foo() ? 'bar' : qux(); */

     /*if (foo()) {
        return 'bar';
     } else {
         return qux();
     } */

/* 6. What does this code output to the console? */

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}
  
  isArrayEmpty([]); //Prints 'Not Empty' since an empty array is truthy (for some reason).
  
/* 7. Write a function that takes a string as an argument and returns an all-caps version of
   the string when the string is longer than 10 characters. Otherwise, it should return the 
   original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'. */

function upperLongStrings (string) {
    if (string.length > 10 ) {
        return string.toUpperCase();
    } else {
        return string;
    }
}

console.log(upperLongStrings("hello world"));
console.log(upperLongStrings("goodbye"));

/* 8. Write a function that logs whether an integer is between 0 and 50 (inclusive), 
   between 51 and 100 (inclusive), greater than 100, or less than 0. */

function logInt (int) {
  if (num < 0) {
      console.log("Your number is less than 0");
  } else if (num <= 50) {
      console.log("Your number is between 0 and 50");
  } else if (num <= 100) {
      console.log("Your number is between 50 and 100");
  } else {
      console.log("Your number is greater than 100");
  }
}

/* 9. Without running this code, what will it print? */

console.log(false ?? null);         // false
console.log(true ?? (1 + 2));       // true
console.log((1 + 2) ?? true);       // 3
console.log(null ?? false);         // false
console.log(undefined ?? (1 + 2));  // 3
console.log((1 + 2) ?? null);       // 3
console.log(null ?? undefined);     // undefined
console.log(undefined ?? null);     // null

/* 10. Without running this code, what will it print? */

function show(foo = undefined, bar = null) {
    console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
  }
  
  show(5, 7);  // Logs 'foo is 5, bar is 7'
  show(0, 0);  // Logs 'foo is 0, bar is 0'
  show(4);     // Logs 'foo is 4, bar is 42'
  show();      // Logs 'foo is 3, bar is 42'






  