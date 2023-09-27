/* 
  Write a function that takes a year as input and returns the century. The return value
  should be a string that begins with the century number, and ends with 'st', 'nd',
  'rd', or 'th' as appropriate for that number.

  New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise
  the 20th century.
*/

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"

function century (year) {
  let quotient = year / 100;
  let century = ''
  if (Number.isInteger(quotient)) {
    century = String(quotient);
  } else {
    century = String(Math.floor(quotient + 1));
  }

  let lastTwoCenturyDigits = century.slice(-2);
  let lastCenturyDigit = century.slice(-1);
  if (['11','12','13'].includes(lastTwoCenturyDigits)) {  
    return century + "th";
  } else if (['1'].includes(lastCenturyDigit)) {
    return century + "st";
  } else if (['2'].includes(lastCenturyDigit)) {
    return century + "nd";
  } else if (['3'].includes(lastCenturyDigit)) {
    return century + "rd";
  } else {
    return century + "th";
  } 
}

