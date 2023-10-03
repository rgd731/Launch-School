// Understand the Problem

  // Write a function that combines two arrays passed as arguments, and returns a new array that
  // contains all elements from both array arguments, with each element taken in alternation.

  // Input: Two Arrays
  // Output: A new array with alternating elements from arguments
  
  // Explicit: 
    // The returned array is a new array with alternating elements form both arguments
    // The returned array will have all elements of both array arguments
    // Arguments will be not empty
    // Arguments will have the same number of elements
  
  // Implicit:
    // First element of the returned array is from the first argument    
    // Second element of the returned array is from the second argument
    // Last element of the returned array is from the second argument


// Examples and Test Cases

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]


// Data Structures

  // We'll be dealing with only arrays

// Algorithm

  // declare return array 'combinedList' and set to empty arr
  // create loop that loops through all indices of arrays
    // add element of first array argument
    // add element of second array argument
  // return 'combinedList'
  

function interleave (arr1, arr2) {
  let combinedList = [];

  for (let i = 0; i < arr1.length; i++) {
    combinedList.push(arr1[i],arr2[i]);
  }

  return combinedList;
}

