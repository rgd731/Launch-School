console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }


function letterCaseCount (str) {
  let obj = {lowercase: 0,uppercase: 0, neither: 0};
  let uppercaseChars = /[A-Z]/
  let lowercaseChars = /[a-z]/

  for (let i = 0;i < str.length; i++) {
    if (uppercaseChars.test(str[i])) {
      obj.uppercase += 1;
    } 
    if (lowercaseChars.test(str[i])) {
      obj.lowercase += 1;
    } else {
      obj.neither += 1;
    }
  }

  return obj;
}