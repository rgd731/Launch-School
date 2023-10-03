// Understand the Problem 

  // Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by
  // the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

  // Input: Array of integers
  // Output: Number that is the product of all arr elements divided by arr length

  // Explicit:
    // Multiply all arr elements together and divide by the num of entries
    // Return that numbers as a string with value rounded to three decimal places
  
  // Implicit:


// Examples / Test Cases

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

  // Assume no negative integers are in array


// Data structures

  // The solution won't require a data struture, the only one involved is the arr argument


// Algorithm

  // Declare a 'totalProduct' variable and set to 1;
  // Iterate through numbers in arr argument
    // Multiply totalProduct by number
  // Declare 'average' and set to totalProduct divided by the num of elements in arr
  // Return average as a string and rounded to three decimal places

function multiplicativeAverage (numArr) {
  let totalProduct = 1;

  for (let num of numArr) {
    totalProduct *= num;
  }

  let average = totalProduct / numArr.length;

  return average.toFixed(3);
}
