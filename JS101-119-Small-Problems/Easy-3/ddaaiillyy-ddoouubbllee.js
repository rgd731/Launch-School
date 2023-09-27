/*
Write a function that takes a string argument and returns a new string that 
contains the value of the original string with all consecutive duplicate
characters collapsed into a single character.
*/

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

function crunch (str) {
  let crunchedString = '';
  let trackedChar = '';
  for (let i = 0;i < str.length;i++) {
    if (str[i] !== trackedChar) {
      trackedChar = str[i];
      crunchedString += str[i];
    }
  }
  return crunchedString;
}




