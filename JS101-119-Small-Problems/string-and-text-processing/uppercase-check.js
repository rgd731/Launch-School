console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true


function isUppercase (str) {
  let regex = /[A-Za-z]/;

  for (let i = 0;i < str.length; i++) {
    if (!regex.test(str[i])) continue;

    if (str[i].toUpperCase() !== str[i]) {
      return false;
    }
  }

  return true;
}