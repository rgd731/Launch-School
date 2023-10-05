console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"


function swapCase (str) {
  let uppercaseChars = /[A-Z]/
  let lowercaseChars = /[a-z]/
  let swapCaseStr = ""

  for (let i = 0;i < str.length; i++) {
    if (uppercaseChars.test(str[i])) {
      swapCaseStr += str[i].toLowerCase();
    } else if (lowercaseChars.test(str[i])) {
      swapCaseStr += str[i].toUpperCase();
    } else {
      swapCaseStr += str[i];
    }
  }


  return swapCaseStr;
}