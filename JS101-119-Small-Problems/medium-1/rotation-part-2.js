console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917


function rotateRightmostDigits(number, count) {
  let numArr = String(number).split("")
  let subArr = [];

  for(let i = 0; i < count; i++) {
    let lastInt = numArr.pop();
    subArr.unshift(lastInt);
  }

  subArr = rotateArray(subArr);

  return Number(numArr.concat(subArr).join(""));
}

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

// Input: 
  // A number, and a count integer that tells you the length of the number starting 
  // from the right, which will then be rotated
// Output:
  // A rotated number

// Explicit: 
  // Perform the rotation by moving the first digit to the end
  // Get the number to perform the rotation on using the count argument

// Implicit: 
  // Return the entire number, not just the number that was used for the rotation

// Data Structure
  // Arrays for doing the rotation and figuring out where to begin that rotation

// Algorithm
  // Turn number into string and then into arr of nums
  // Use 'count' to pull out numbers needed to perform the rotation (subarr)
  // Do the rotation 
    // Take out first element from subarr and store it in variable
    // Push element to the subarr
  // Re-add numbers from subarr to the original arr
  // Turn arr back into string, then into number
  // Return number
