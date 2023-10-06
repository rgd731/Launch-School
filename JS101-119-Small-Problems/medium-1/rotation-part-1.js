console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

function rotateArray(arr) {
  if (arguments.length === 0 || !Array.isArray(arr)) {
    return undefined;
  }
  if (arr.length === 0) return [];

  let rotatedArr = arr.slice();
  let firstElement = rotatedArr.shift();
  rotatedArr.push(firstElement);

  return rotatedArr;
}

// Input: array
// Output: new array where the positions of first elem is placed in the back

// Explicit: 
  // Move the first element to the end of the array
  // Do not modify the original array
  // Return undefined if the argument is not an array
  // Return an empty array if argument is empty array

// Implicit:
  // Return a new array

// Examples / Test Cases
  // Elements in array are of many different data types
  // An array with one element stays the same

// Data Structure
  // We're solely going to deal with arrays for the algorithm

// Algorithm
  // Take a shallow copy of argument array
  // Take out first element and store it in a variable
  // Place this value at the end
  // Return copy of arrays