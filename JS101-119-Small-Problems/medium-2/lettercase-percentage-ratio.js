console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


function letterPercentages(str) {
  let lowercaseCount = 0;
  let uppercaseCount = 0;
  let neitherCount = 0;

  str.split("").forEach(char => {
    if (/[A-Z]/.test(char)) {
      uppercaseCount += 1;
    } else if (/[a-z]/.test(char)) {
      lowercaseCount += 1;
    } else {
      neitherCount += 1;
    }
  })

  return { 
    lowercase: ((lowercaseCount / str.length) * 100).toFixed(2),
    uppercase: ((uppercaseCount / str.length) * 100).toFixed(2),
    neither: ((neitherCount / str.length) * 100).toFixed(2)} ;
  };

