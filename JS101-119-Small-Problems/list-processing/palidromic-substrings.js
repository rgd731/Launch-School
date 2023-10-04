console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]\



function palindromes(str) {
  let substringsArr = substrings(str);

  return substringsArr.filter(isPalindrome);
}

function isPalindrome(str) {
  if (str.length === 1) return false;
  for (let index = 0; index < Math.floor(str.length / 2); index += 1) {
    if (str[index] !== str[(str.length - 1) - index]) {
      return false;
    }
  }
  return true;
}


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