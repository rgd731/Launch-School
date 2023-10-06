console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

function featured(int) {
  const MAX_FEATURED = 9876543201;
  let nextMultipleSeven = int + 1;

  while (nextMultipleSeven % 7 !== 0) {
    nextMultipleSeven += 1;
  }

  for (;nextMultipleSeven <= MAX_FEATURED; nextMultipleSeven += 7) {
    if (nextMultipleSeven % 2 === 0) continue;
    if (allNumsDifferent(nextMultipleSeven)) {
      return nextMultipleSeven;
    }
  }
  return "There is no possible number that fulfills those requirements.";
}

function allNumsDifferent(num) {
  let digits = String(num)
  let seen = {};

  for (let i = 0;i < digits.length;i++) {
    if(seen.hasOwnProperty(digits[i])) return false;
    seen[digits[i]] = true;
  }
  
  return true;
}