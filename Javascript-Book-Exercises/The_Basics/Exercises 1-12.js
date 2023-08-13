/* 1. Concatenate two or more strings, one with your first name
   and one with your last, to create a string with your full name
   as its value. */

console.log("Ricardo" + " " + "Delgado")

/* 2. Using arithmetic operators, get the individual digits 
   of a 4 digit number, like 4936. */

let number = 4936;
let ones = number % 10;
let tens = Math.floor((number % 100) / 10); 
let hundreds = Math.floor((number % 1000) / 100);
let thousands = Math.floor((number % 10000) / 1000);

console.log(ones);
console.log(tens);
console.log(hundreds);
console.log(thousands);

/* 3. Identify the data type for each of the following values.  */

'true'         //string
false          //boolean
1.5            //number
2              //number
undefined      //undefined
{foo : 'bar'}  //object

/* 4. Explain why this code log '510' instead of 15 */ 

console.log('5' + 10) //Because adding a string and a number converts the number to string then concatenates.

/* 5.Refactor the code from the previous exercise to use
   explicit coercion, so it logs 15 instead */

console.log(Number('5') + 10);

/* 6. Use the template literal syntax along with the expression
   Number('5') + 10 to log the following sentence to the console: 'The value of 5 + 10 is 15.' */

console.log(`The value of 5 + 10 is ${Number('5') + 10}`);

/* 7. Will an error occur if you try to access an array element with an
   index that is greater than or equal to the length of the array? For example: */

let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // results in undefined, since there is not 4th element in arr. Other languages would throw err

/* 8. Create an array named 'names' that contains a list of pet names. */ 

names = ['Roxy', 'Bandie', 'Rex', 'Furball', 'Getrude'];

/* 9. Create an object named 'pets' that contains a list of pet names and the type of animal. */

pets = {
    Roxy:    'Cat',
    Bandie:  'Cat',
    Rex:     'Dog',
    Furball: 'Dog',
    Getrude: 'Fish',
}

/* 10. What value does the following expression evaluate to? */

'foo' === 'Foo'; //false. Equality is case-sensitive so 'Foo' and 'foo' are different.

/* 11. What value does the following expression evaluate to? */

parseInt(3.1415); //3. Goes through string turning string to number and once it lands on '.', stops and returns.

/* 12. What value does the following expression evaluate to? */

'12' < '9'; //probably like other languages? compares ascii values, so evaluates to true. '9' comes after '1' in ascii table