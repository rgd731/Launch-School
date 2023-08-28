/* Write a function that determines and returns the UTF-16 string value of a string passed
   in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every
   character in the string. (You may use String.prototype.charCodeAt() to determine
   the UTF-16 value of a character.)
*/

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

function utf16Value (string) {
  let sum = 0;
  for (let i = 0; i < string.length;i++) {
    sum += string.charCodeAt(i);
  }
  return sum;
}