/* In the following code, what are the final length values 
   for array1, array2, array3, array4, and array5? */

let array1 = [1, 2, undefined, 4];  // length = 4

let array2 = [1];
array2.length = 5;                  // length = 5

let array3 = [];
array3[-1] = [1];                   // length = 0, only positive integers indexes add to length

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;                  // length = 3

let array5 = [];
array5[100] = 3;                    // length = 101, this line implicitly creates 100 other elements

/* 2, Log all of the even values from myArray to the console. */

let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];

myArray.forEach(num => {
    if (num % 2 === 0) {console.log(num);}
});

/* 3. Let's make the problem a little harder. In this problem, we're again interested in
   even numbers, but this time the numbers are in nested arrays in a single outer array. */

myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(nestedArray => {
  nestedArray.forEach(num => {
    if (num % 2 === 0) {
        console.log(num);
    }      
  });
});

/* 4. Let's try another variation. We'll return to the simpler one-dimensional array. In 
   this problem, we want to use the map function to create a new array that contains one 
   element for each element in the original array. If the element is an even value, then 
   the corresponding element in the new array should contain the string 'even'; otherwise, 
   the element in the new array should contain 'odd'. */

myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArray = myArray.map(num => {
  let result = (num % 2 ===0) ? 'even' : 'odd';
  return result;
})
console.log(newArray);

/* 5. Write a findIntegers function that takes an array argument and returns an array that 
  contains only the integers from the input array. Use the filter method in your function. */

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(arr) {
  return arr.filter(thing => Number.isInteger(thing));
}

/* 6. Use map and filter to first determine the lengths of all the elements in an
   array of string values, then discard the even values (keep the odd values). */

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function oddLengths(arr) {
  let lengths = arr.map(string => string.length);
  let oddLengths = lengths.filter(length => length % 2 !== 0)
  return oddLengths;
}

console.log(oddLengths(arr)); // => [1, 5, 3]

/* 7. Use reduce to compute the sum of the squares of all of the numbers in an array: */

let array = [3, 5, 7];
function sumOfSquares(numbers) {
  return numbers.reduce((acc,num)=> acc + (num * num),0);
}

console.log(sumOfSquares(array)); // => 83

/* 8. Write a function similar to the oddLengths function from Exercise 6, 
   but don't use map or filter. Instead, try to use the reduce method. */

oddLengths = function(arr) {
  return arr.reduce((oddLengthArr,string) => {
    let length = string.length;
    if (length % 2 !== 0) {oddLengthArr.push(length);}
    return oddLengthArr;
  },[])
}

console.log(oddLengths(arr)); // => [1, 5, 3]

/* 9. Without using a for, while, or do/while loop, write some code that
   checks whether the number 3 appears inside these arrays: */

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));

/* 10. Write some code to replace the value 6 in the following array with 606:
   You don't have to search the array. Just write an assignment that replaces the 6. */

arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606

console.log(arr);
