console.log(substrings('abcde'));
/* returns
[ "a", "ab", "abc", "abcd", "abcde",
"b", "bc", "bcd", "bcde",
"c", "cd", "cde",
"d", "de",
"e" ]
*/


function leadingSubstrings(str) {
  return str.split("").map((char, index) => {
    return str.slice(0,index + 1);
  })
}

function substrings(str) {
  let substringsArr = [];

  for (let index = 0; index < str.length; index += 1) {
    substringsArr.push(...leadingSubstrings(str.slice(index)));
  }

  return substringsArr;
}